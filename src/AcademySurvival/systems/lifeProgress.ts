import type {NpcAiEngine} from './npcAi';
import type {DomainEvent} from '../types/actionEffects';
import type {LifeProgressEngine,LifeProgressSave,LifeAssessment,ProgressDomain} from '../types/lifeProgress';
import {lifeAchievementRegistry,lifeGoals,lifeGoalRows,LIFE_PROGRESS_RULES as R} from '../data/lifeProgress';
import {statusRegistry} from './statusRegistry';
import {proficiencyRegistry} from './knowledgeRegistry';
import {ACTION_RULES} from '../data/actionEffects/config';
import type {StatId} from '../types/knowledge';
import {toImperialDate,assertAbsoluteMinute} from './calendar';

/** Evidence projections and history. Never awards XP, creates knowledge, or grants permissions. */
export function createLifeProgressEngine(ai:NpcAiEngine,initial?:LifeProgressSave):LifeProgressEngine{
 const {world,clock,motivation}=ai,effects=ai.interactions?.effects;
 if(!effects)throw Error('성장 기록에는 공통 효과 엔진이 필요합니다.');
 const now=clock.getSnapshot,person=world.getCharacterReadSnapshot;
 const data:LifeProgressSave=initial?structuredClone(initial):{version:'life-progress-v1',absoluteMinute:now(),startedAt:now(),goalBaselines:[],growth:[],achievements:[],evidence:[],processed:[]};
 const evidenceIndex=new Map(data.evidence.map(r=>[r.characterId+'/'+r.key,r])),growthIndex=new Map(data.growth.map(r=>[r.characterId+'/'+r.month+'/'+r.field,r])),earnedIds=new Set(data.achievements.map(a=>a.id));
 const sourceActivities=new Map<string,string>();
 const processed=new Map(data.processed.map(r=>[r.id,r.at])),listeners=new Set<()=>void>(),dirty=new Set<string>();
 let trimmedMonth=-1,revision=0,stop:(()=>void)|undefined;
 const notify=()=>{revision++;listeners.forEach(f=>f());};
 const month=(at:number)=>{const d=toImperialDate(at);return (d.year-1)*12+d.month-1;};
 const count=(id:string,key:string)=>evidenceIndex.get(id+'/'+key)?.count??0;
 function evidence(id:string,key:string,event:DomainEvent){let row=evidenceIndex.get(id+'/'+key);if(!row){row={characterId:id,key,count:0,lastAt:now(),sourceIds:[]};data.evidence.push(row);evidenceIndex.set(id+'/'+key,row);}row.count++;const day=Math.floor(now()/1440);row.days=(row.days??[]).filter(d=>d.day>=day-30);let daily=row.days.find(d=>d.day===day);if(!daily){daily={day,count:0};row.days.push(daily);}daily.count++;row.lastAt=event.occurredAt;row.sourceIds=[...row.sourceIds,event.id].slice(-R.evidenceSources);dirty.add(id);}
 function earn(id:string,key:string,e:DomainEvent,repeat=false){const def=lifeAchievementRegistry.get('life-achievement-'+key);if(!def?.supported)return;const recordId=[id,def.id,repeat?e.sourceId:'first'].join('/');if(earnedIds.has(recordId))return;earnedIds.add(recordId);data.achievements.push({id:recordId,definitionId:def.id,ownerCharacterId:id,sourceEventId:e.id,sourceRecordId:e.sourceId,earnedAt:e.occurredAt,visibility:def.visibility});evidence(id,key,e);}
 function official(e:DomainEvent,id:string){const event=ai.getAcademyEvents()?.getEvents(undefined,true).find(r=>r.id===e.sourceId);if(!event)return;
  if(event.definitionId==='spring-tournament'){
   const bouts=event.matches.filter(m=>m.participants.includes(id)&&m.battleId&&['running','completed'].includes(m.status));
   if(bouts.length)earn(id,'tournament',e,true);
   if(event.participantIds.length>=4&&event.matches.some(m=>m.participants.includes(id)&&m.round>=Math.max(1,Math.ceil(Math.log2(event.participantIds.length))-1)&&m.battleId))earn(id,'semifinal',e,true);
   if(event.winnerId===id)earn(id,'champion',e,true);if(event.runnerUpId===id)earn(id,'runner-up',e,true);
  }
  for(const t of event.tasks.filter(t=>t.characterId===id&&t.status==='completed'&&t.minutes>=10)){
   if(t.kind==='prepare')earn(id,'festival-prep',e,true);if(t.kind==='operate')earn(id,'festival-work',e,true);if(t.kind==='present')earn(id,'presentation',e,true);
  }
  if(event.awardIds.includes(id))earn(id,'award',e,true);
 }
 function observe(e:DomainEvent){
  if(!['OutcomeApplied','ProficiencyChanged','ActivityCompleted','InteractionCompleted','RelationshipChanged','SocialCommitmentChanged','ItemChanged','AcademyGroupChanged','CombatCompleted','AcademicChanged'].includes(e.type))return;
  if(e.occurredAt< data.startedAt||e.occurredAt!==now()||processed.has(e.id))return;
  const cutoff=now()-R.processedDays*1440;for(const [key,at] of processed){if(at>=cutoff)break;processed.delete(key);}
  if(processed.size>=R.processedLimit)throw Error('성장 사건 처리 키 한도 초과');processed.set(e.id,e.occurredAt);
  const id=e.actorCharacterId;if(!id)return;person(id);
  if(e.type==='OutcomeApplied'){
   const applied=effects!.getActionOutcome(e.sourceId);
   if(applied){const groups=new Map<string,typeof applied.changes>();for(const c of applied.changes){if(!/^(stat|proficiency)(_xp)?:/.test(c.field))continue;const key=c.characterId+'/'+c.field.replace('_xp:',':');groups.set(key,[...groups.get(key)??[],c]);}
    for(const changes of groups.values()){
     const first=changes[0],field=first.field.replace('_xp:',':'),[kind,key]=field.split(':'),values=changes.filter(c=>c.field===field),xpChanges=changes.filter(c=>c.field!==field),current=kind==='stat'?person(first.characterId).stats[key as StatId]:person(first.characterId).proficiencyRanks[key]??0,before=Number(values[0]?.before??current),after=Number(values.at(-1)?.after??current);
     let amount=xpChanges.reduce((sum,c)=>sum+Number(c.after)-Number(c.before),0);for(let value=before;value<after;value++)amount+=kind==='stat'?Math.ceil(ACTION_RULES.statThresholdBase+value*ACTION_RULES.statThresholdFactor):ACTION_RULES.proficiencyThresholds[value]??0;
     let row=growthIndex.get(first.characterId+'/'+month(now())+'/'+field);if(!row){row={characterId:first.characterId,month:month(now()),field,first:before,last:after,xp:0,causes:[],count:0};data.growth.push(row);growthIndex.set(first.characterId+'/'+month(now())+'/'+field,row);}
     const activity=sourceActivities.get(applied.outcome.sourceId);if(activity)row.activityIds=[...new Set([...row.activityIds??[],activity])];row.last=after;row.xp+=Math.max(0,amount);row.count++;row.causes=[...new Set([...row.causes,applied.outcome.sourceId])].slice(-3);
    }
   }
  }
  if(e.type==='ProficiencyChanged'&&(e.details.after??0)>(e.details.before??0))earn(id,'rank',e);
  if(e.type==='ActivityCompleted'&&ai.schedule.getExecutionChangesAt(id).some(r=>r.status==='completed'&&r.occurrenceId&&JSON.stringify(['activity',id,r.occurrenceId])===e.sourceId)){
   const activity=e.details.activityId;if(activity){sourceActivities.set(e.sourceId,activity);if(sourceActivities.size>1000)sourceActivities.delete(sourceActivities.keys().next().value!);evidence(id,'activity/'+activity,e);if(['sword_training','magic_training','train_together'].includes(activity))evidence(id,'training',e);if(activity==='attend_class')earn(id,'class',e);if(['reading','rest','cultural_play','study_together'].includes(activity))evidence(id,'pleasant',e);}
  }
  if(e.type==='InteractionCompleted'){
   earn(id,'together',e);
   if(e.details.interactionId==='reconcile'&&count(id,'conflict')>0)earn(id,'reconcile',e);
   if(['argue','insult'].includes(e.details.interactionId??''))evidence(id,'conflict',e);
  }
  if(e.type==='RelationshipChanged'&&ai.interactions?.graph.getRelationshipsOf(id).some(r=>r.relationshipTypeIds.includes('relation-friend')))earn(id,'friend',e);
  if(e.type==='SocialCommitmentChanged'&&e.details.definitionId==='commitment-completed')earn(id,'promise',e);
  if(e.type==='ItemChanged'&&e.details.outcomeType==='gift')earn(id,'gift',e);
  if(e.type==='AcademyGroupChanged'){
   const kind=e.details.outcomeType;if(kind==='joined')earn(id,'club',e);if(kind==='meeting-completed'){earn(id,'club-work',e);evidence(id,'club-activity',e);}
   const groups=ai.getGroups()?.getMemberships(id)??[];if(groups.some(g=>g.definition.kind==='student_council')&&['meeting-completed','inaugurated'].includes(kind??''))earn(id,'council',e,true);
   if(kind==='inaugurated'&&groups.some(g=>g.definition.kind==='student_council'&&g.officers.some(o=>o.characterId===id&&o.role==='president'&&o.endedAt===undefined)))evidence(id,'council-leader',e);
  }
  if(e.type==='CombatCompleted'){
   const battle=ai.getCombat()?.getBattles().find(b=>b.id===e.sourceId||b.sourceInteractionId===e.sourceId);if(battle?.mode==='sparring'&&battle.status==='completed'){earn(id,'spar',e);if(e.details.combatResult==='victory')earn(id,'victory',e);}
   if(battle?.officialMatchId){const officialEvent=ai.getAcademyEvents()?.getEvents(undefined,true).find(x=>x.matches.some(m=>m.id===battle.officialMatchId));if(officialEvent)official({...e,sourceId:officialEvent.id},id);}
  }
  if(e.type==='AcademicChanged'){
   if(e.details.definitionId?.startsWith('official-'))official(e,id);
   const a=ai.getAcademics()?.getState();if(a){if(a.exams.some(x=>x.characterId===id))earn(id,'exam',e);if(a.grades.some(x=>x.characterId===id&&x.score>=90))earn(id,'academic-merit',e);if(a.transcripts.some(x=>x.characterId===id&&x.excellent))earn(id,'semester',e,true);}
  }
  if(e.type==='ActivityCompleted'&&now()-data.startedAt>=30*1440&&!count(id,'month')){const days=new Set(data.evidence.filter(r=>r.characterId===id&&r.key.startsWith('activity/')).flatMap(r=>(r.days??[]).map(d=>d.day)));if(days.size>=21)earn(id,'month',e);}
  dirty.add(id);if(trimmedMonth!==month(now())){trimmedMonth=month(now());data.growth=data.growth.filter(r=>r.month>=month(now())-R.retainedMonths);growthIndex.clear();data.growth.forEach(r=>growthIndex.set(r.characterId+'/'+r.month+'/'+r.field,r));}notify();
 }
 function evaluateGoals(id:string){if(!motivation.hasCharacter(id))return;const c=person(id);for(const goal of motivation.getActiveGoals(id).filter(g=>g.goalDefinitionId.startsWith('life-goal-'))){
  const row=lifeGoalRows.find(r=>'life-goal-'+r[0]===goal.goalDefinitionId)!;if(!row[6])continue;
  let base=data.goalBaselines.find(b=>b.goalId===goal.id);if(!base){base={goalId:goal.id,characterId:id,counts:Object.fromEntries(data.evidence.filter(r=>r.characterId===id).map(r=>[r.key,r.count])),ranks:{...c.proficiencyRanks},safeMinutes:0,unsafe:false};const attendance=ai.getAcademics()?.getState().attendance.filter(r=>r.characterId===id)??[];base.attendance={minutes:attendance.reduce((s,r)=>s+r.minutes,0),offered:attendance.reduce((s,r)=>s+r.offeredMinutes,0)};base.targetSkillId=Object.keys(c.proficiencyRanks).filter(k=>proficiencyRegistry.get(k)?.categoryId==='academic').sort((a,b)=>(c.proficiencyRanks[b]??0)-(c.proficiencyRanks[a]??0)||a.localeCompare(b))[0];if(['tournament','champion'].includes(row[5]))base.eventId=ai.getAcademyEvents()?.getEvents(undefined,true).filter(e=>e.definitionId==='spring-tournament'&&!['completed','cancelled'].includes(e.phase)).sort((a,b)=>a.start-b.start)[0]?.id;data.goalBaselines.push(base);}
  const key=row[5],delta=(k:string)=>Math.max(0,count(id,k)-(base!.counts[k]??0));let met=false;
  if(key==='training')met=delta(key)>=3;
  else if(key==='sword-rank')met=(c.proficiencyRanks['proficiency-sword']??0)>(base.ranks['proficiency-sword']??0);
  else if(key==='academic-rank')met=!!base.targetSkillId&&(c.proficiencyRanks[base.targetSkillId]??0)>(base.ranks[base.targetSkillId]??0);
  else if(key==='attendance-week'){const a=ai.getAcademics()?.getState(),records=a?.attendance.filter(r=>r.characterId===id);const minutes=(records??[]).reduce((s,r)=>s+r.minutes,0)-(base.attendance?.minutes??0),offered=(records??[]).reduce((s,r)=>s+r.offeredMinutes,0)-(base.attendance?.offered??0);met=now()-goal.createdAt>=7*1440&&offered>0&&minutes/offered>=.9;}
  else if(key==='healthy-day')met=base.safeMinutes>=1440&&!base.unsafe;
  else if(key==='pleasant-month')met=now()-goal.createdAt>=30*1440&&delta('pleasant')>=12;
  else if(key==='club')met=!!ai.getGroups()?.getMemberships(id).some(g=>g.definition.kind==='club');
  else met=delta(key==='club-work'?'club-activity':key)>=(key==='club-work'?3:1);
  if(!met&&base.eventId){const e=ai.getAcademyEvents()?.getEvents(undefined,true).find(e=>e.id===base!.eventId);if(e&&(e.phase==='cancelled'||e.phase==='completed'||now()>=e.deadline&&!e.participantIds.includes(id)&&!e.applications.some(a=>a.characterId===id&&a.status==='registered'))){motivation.failGoal(id,goal.id,e.phase==='completed'?'해당 연도 대회 결과로 목표 미달성':'해당 연도 신청 기한 종료 또는 행사 취소');continue;}}
  if(!met&&['training','club-work'].includes(key))motivation.updateGoalProgress(id,goal.id,Math.min(99,Math.round(delta(key==='club-work'?'club-activity':key)/3*100)));
  if(met)motivation.recordExternalFact(id,'life/'+row[0],true);
  else if(motivation.getCharacterState(id).evidence.externalFacts['life/'+row[0]]!==false)motivation.recordExternalFact(id,'life/'+row[0],false);
 }}
 let knowledgeRevision=-1,knowledgeAt=-1;const assessmentCache=new Map<string,LifeAssessment[]>();
 function assessments(evaluator:string,subject:string):LifeAssessment[]{const version=ai.knowledge?.getEvidenceRevision()??0;if(version!==knowledgeRevision||knowledgeAt!==now()){assessmentCache.clear();knowledgeRevision=version;knowledgeAt=now();}const cacheKey=evaluator+'/'+subject,cached=assessmentCache.get(cacheKey);if(cached)return structuredClone(cached);person(evaluator);person(subject);const knowledge=ai.knowledge;if(!knowledge)return [];
  const rows=knowledge.getRelevantMemories(evaluator,{targetCharacterId:subject,limit:R.assessmentLimit}).filter(m=>!m.isForgotten&&m.effectiveConfidence>=20),best=new Map<string,LifeAssessment>();
  for(const m of rows){const claim=knowledge.getMemoryClaim(evaluator,m.id);if(claim.subjectId!==subject&&claim.objectId!==subject)continue;
   let domain:ProgressDomain='social',dimension:LifeAssessment['dimension']='cooperation',value=0;
   if(claim.predicate==='winner'&&claim.objectId){domain='martial';dimension='competence';value=claim.objectId===subject?60:15;}
   else{const fact=knowledge.getEventKnowledge(evaluator,m.relatedEventId??'')?.event,def=claim.evidenceDefinitionId??claim.domainDefinitionId??fact?.details.definitionId??'';
    if(def==='official-EVT-07'||def==='official-EVT-05'){domain=claim.evaluationDomain??fact?.details.evaluationDomain??'organization';dimension='competence';value=50;}
    else if(def==='academic-grades'){domain='academic';dimension='diligence';value=30;}
    else if(def==='academic-absence'||def==='commitment-missed'){dimension='responsibility';value=-35;}
    else if(claim.activityId==='attend_class'){domain='academic';dimension='diligence';value=20;}
    else if(['study_together','train_together'].includes(claim.definitionId??'')){value=30;}
    else if(['argue','insult'].includes(claim.definitionId??'')){value=-25;}
   }
   if(!value)continue;const dispositions=person(evaluator).dispositionIds??[];if(dimension==='competence'&&dispositions.includes('disposition-competitor'))value+=10;if(dimension==='responsibility'&&dispositions.includes('disposition-perfectionist'))value-=10;
   const a:LifeAssessment={evaluatorId:evaluator,subjectId:subject,domain,dimension,value,confidence:m.effectiveConfidence,source:m.source,evidenceId:m.id,topicKey:claim.topicKey,at:m.createdAt};const previous=best.get(claim.topicKey);if(!previous||a.confidence>previous.confidence||a.confidence===previous.confidence&&a.at>previous.at)best.set(claim.topicKey,a);
  }const result=[...best.values()];assessmentCache.set(cacheKey,result);return structuredClone(result);
 }
 const getBias=(id:string,c:{targetCharacterId?:string;interactionId?:string;activityId:string})=>{if(!c.targetCharacterId)return {score:0,reasons:[]};const a=assessments(id,c.targetCharacterId);let score=0;const reasons:string[]=[];for(const r of a){if(r.dimension==='competence'&&['sparring','train_together'].includes(c.interactionId??'')){score+=r.value/15*r.confidence/100;reasons.push(r.evidenceId);}if(r.dimension==='cooperation'&&['study_together','request_help'].includes(c.interactionId??'')){score+=r.value/20*r.confidence/100;reasons.push(r.evidenceId);}}return {score:Math.max(-R.biasLimit,Math.min(R.biasLimit,Math.round(score))),reasons};};
 function validate(){if(new Set(data.evidence.map(r=>r.characterId+'/'+r.key)).size!==data.evidence.length||new Set(data.growth.map(r=>r.characterId+'/'+r.month+'/'+r.field)).size!==data.growth.length||new Set(data.processed.map(r=>r.id)).size!==data.processed.length)throw Error('성장 근거 중복');for(const r of data.evidence){person(r.characterId);if(!Number.isSafeInteger(r.count)||r.count<0||typeof r.key!=='string'||!r.key||r.lastAt>now()||r.sourceIds.length>R.evidenceSources||r.days?.some(d=>!Number.isSafeInteger(d.day)||d.day<0||!Number.isSafeInteger(d.count)||d.count<0))throw Error('활동 근거 수치 오류');}for(const r of data.processed){assertAbsoluteMinute(r.at);if(r.at>now()||!r.id)throw Error('처리 근거 시각 오류');}if(data.version!=='life-progress-v1'||data.absoluteMinute!==now())throw Error('성장 기록 버전·시각 불일치');assertAbsoluteMinute(data.startedAt);if(data.startedAt>now())throw Error('성장 기록 시작 시각 오류');if(new Set(data.achievements.map(a=>a.id)).size!==data.achievements.length)throw Error('업적 중복');for(const a of data.achievements){person(a.ownerCharacterId);if(!lifeAchievementRegistry.get(a.definitionId)?.supported||!a.sourceEventId||a.visibility!==lifeAchievementRegistry.get(a.definitionId)!.visibility||a.earnedAt>now()||a.earnedAt<data.startedAt)throw Error('업적 근거 오류');}for(const r of data.growth){person(r.characterId);if(![r.first,r.last,r.xp,r.month,r.count].every(Number.isSafeInteger)||r.xp<0||r.count<0||r.first<0||r.last<0||(r.field.startsWith('proficiency:')?!proficiencyRegistry.has(r.field.slice(12)):!['stat:STR','stat:AGI','stat:VIT','stat:MAG','stat:INT','stat:WIL','stat:CHA'].includes(r.field)))throw Error('성장 집계 오류');}for(const b of data.goalBaselines){person(b.characterId);if(!motivation.getCharacterGoals(b.characterId).some(g=>g.id===b.goalId)||b.safeMinutes<0)throw Error('목표 근거 참조 오류');}return [];}
 validate();
 function process(){const ids=[...dirty];dirty.clear();for(const id of ids)evaluateGoals(id);notify();}
 function connect(){if(!stop){const domain=effects!.subscribeDomainEvents(observe),time=clock.subscribeTimeline({id:'life-progress',priority:29,nextEventTime:(_from,limit)=>{if(dirty.size)return now();const deadline=Math.min(Infinity,...data.goalBaselines.flatMap(b=>motivation.getActiveGoals(b.characterId).filter(g=>g.id===b.goalId).map(g=>Math.min(g.deadlineAt??Infinity,g.createdAt+(g.goalDefinitionId==='life-goal-LIF-01'?1440:g.goalDefinitionId==='life-goal-ACA-01'?10080:g.goalDefinitionId==='life-goal-LIF-02'?43200:Infinity)))));return deadline>now()&&deadline<=limit?deadline:null;},beforeStep:(from,to)=>{for(const b of data.goalBaselines){const goal=motivation.getActiveGoals(b.characterId).find(g=>g.id===b.goalId);if(goal?.goalDefinitionId!=='life-goal-LIF-01')continue;const n=motivation.getCharacterNeeds(b.characterId).values;if(n.hunger>=90||n.fatigue>=90||n.sleepiness>=90||person(b.characterId).statuses.some(s=>statusRegistry.get(s.definitionId)?.polarity==='negative'))b.unsafe=true;else b.safeMinutes+=to-from;dirty.add(b.characterId);}},processAt:()=>{for(const b of data.goalBaselines){if(motivation.hasCharacter(b.characterId)){const n=motivation.getCharacterNeeds(b.characterId).values;if(n.hunger>=90||n.fatigue>=90||n.sleepiness>=90)b.unsafe=true;}dirty.add(b.characterId);}process();},onSeek:()=>{throw Error('성장·평판은 정상 시간 진행 또는 저장 복원으로 변경하세요.');}});stop=()=>{domain();time();stop=undefined;};}return ()=>stop?.();}
 const api:LifeProgressEngine={ai,connect,disconnect:()=>stop?.(),subscribe:f=>{listeners.add(f);return()=>{listeners.delete(f);};},getSnapshot:()=>revision,save:()=>structuredClone({...data,absoluteMinute:now(),goalBaselines:data.goalBaselines.filter(b=>motivation.getCharacterGoals(b.characterId).some(g=>g.id===b.goalId)),processed:[...processed].map(([id,at])=>({id,at}))}),getGrowth:(id,since=0)=>structuredClone(data.growth.filter(r=>r.characterId===id&&r.month>=month(since))),getAchievements:(id,viewer,debug=false)=>structuredClone(data.achievements.filter(a=>a.ownerCharacterId===id&&(debug||viewer===id||a.visibility==='public'))),getAssessments:assessments,getOrganizationAssessments:id=>(ai.getGroups()?.getMemberships(id)??[]).filter(g=>g.registration==='approved'&&(!!g.advisorId||g.officers.some(o=>o.endedAt===undefined))).map(g=>({organizationId:g.definition.organizationId??g.definition.id,name:g.definition.name,dimension:'contribution' as const,value:Math.min(100,(g.members.find(m=>m.characterId===id&&m.leftAt===undefined)?.contribution??0)*5),evidenceIds:(ai.getGroups()?.getLogs()??[]).filter(l=>l.groupId===g.definition.id&&l.characterIds.includes(id)&&l.kind==='meeting-completed').slice(-8).map(l=>l.id)})),getOpportunities:(evaluator,subject)=>{const known=assessments(evaluator,subject);return ['sparring','study_together','train_together'].filter(action=>getBias(evaluator,{activityId:action,interactionId:action,targetCharacterId:subject}).score>0&&known.length).map(interactionId=>{const result=ai.interactions!.canRequest(evaluator,subject,interactionId);return {interactionId,possible:result.ok,reasons:result.reasons};});},getRenown:subject=>{person(subject);const buckets=new Map<string,{scopeId:string;domain:ProgressDomain;knownBy:number;population:number;evidenceIds:string[]}>();for(const c of world.getCharacters().filter(c=>c.id!==subject)){const path=world.catalog.getLocationPath(c.location!.currentLocationId),scopeId=path.some(p=>['academy','academy-main'].includes(p.id))?'academy':path.find(p=>p.type==='city'||p.type==='realm')?.id??'local';const known=assessments(c.id,subject),domains=new Set(known.map(a=>a.domain));for(const domain of ['academic','martial','magic','research','craft','arts','organization','social'] as ProgressDomain[]){const key=scopeId+'/'+domain;let row=buckets.get(key);if(!row){row={scopeId,domain,knownBy:0,population:0,evidenceIds:[]};buckets.set(key,row);}row.population++;if(domains.has(domain)){row.knownBy++;row.evidenceIds=[...new Set([...row.evidenceIds,...known.filter(a=>a.domain===domain).map(a=>a.evidenceId)])].slice(0,12);}}}return [...buckets.values()].map(b=>({...b,recognition:Math.round(100*b.knownBy/Math.max(1,b.population))}));},getBias,selectGoal:(id,definitionId)=>{if(person(id).kind!=='player'||!lifeGoals.some(g=>g.id===definitionId))throw Error('본인의 생활 목표만 선택할 수 있습니다.');const row=lifeGoalRows.find(r=>'life-goal-'+r[0]===definitionId)!;if(motivation.getCharacterGoals(id).some(g=>g.goalDefinitionId===definitionId&&['active','paused'].includes(g.status)))throw Error('동일 목표가 이미 활성화되어 있습니다.');if(row[6])motivation.recordExternalFact(id,'life/'+row[0],false);motivation.addGoal(id,definitionId);evaluateGoals(id);ai.requestReevaluation(id);notify();},abandonGoal:(id,gid)=>{if(person(id).kind!=='player')throw Error('플레이어 목표 권한 필요');motivation.abandonGoal(id,gid);ai.requestReevaluation(id);notify();},getGoalDetail:(id,gid)=>{const goal=motivation.getCharacterGoals(id).find(g=>g.id===gid),base=data.goalBaselines.find(b=>b.goalId===gid);if(goal?.goalDefinitionId==='life-goal-ACA-02'&&!base?.targetSkillId)return {result:'unsupported',progress:0,reasons:['선택 당시 보유한 학문 숙련도가 없어 판정 보류']};return motivation.evaluateGoalCompletion(id,gid);},getReport:(id,days)=>{if(!Number.isInteger(days)||days<1||days>3600)throw Error('보고 기간은1~3600일');return {growth:structuredClone(data.growth.filter(r=>r.characterId===id&&r.month>=month(Math.max(0,now()-days*1440)))),achievements:structuredClone(data.achievements.filter(a=>a.ownerCharacterId===id&&a.earnedAt>=now()-days*1440)),activities:structuredClone(data.evidence.filter(r=>r.characterId===id&&r.lastAt>=now()-days*1440).map(r=>({...r,count:(r.days??[]).filter(d=>d.day>=Math.floor(now()/1440)-Math.min(30,days)+1).reduce((s,d)=>s+d.count,0)})).filter(r=>r.count>0))};},diagnose:()=>{const prior=data.absoluteMinute;data.absoluteMinute=now();try{return validate();}finally{data.absoluteMinute=prior;}}};
 ai.attachLifeProgress(api);return api;
}
export type {LifeProgressEngine} from '../types/lifeProgress';
