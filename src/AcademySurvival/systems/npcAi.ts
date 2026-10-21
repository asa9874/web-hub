import type {MotivationEngine} from './motivationEngine';
import type {RelationshipGraph} from './relationships';
import type {AiCandidate,AiSource,AiState,AiSave,JointActivity} from '../types/npcAi';
import {AI_RULES as R,AI_HABITS,AI_PREFERENCES} from '../data/ai/config';
import {activities,activityRegistry} from '../data/schedules';
import {statusRegistry} from './statusRegistry';
import {seededRandom} from './seededRandom';
import {assertAbsoluteMinute,MAX_ABSOLUTE_MINUTE} from './calendar';
const bounded=(n:number)=>Math.max(0,Math.min(100,n));
const socialIds=new Set(['conversation','study_together','sparring']);
export function createNpcAiEngine(motivation:MotivationEngine,options:{seed?:string;relationships?:RelationshipGraph;autoConnect?:boolean}={}){
 const {schedule,world,clock}=motivation,seed=options.seed??'npc-ai-v1',states=new Map<string,AiState>(),listeners=new Set<()=>void>();
 let joints:JointActivity[]=[],logs:{at:number;characterId:string;type:string;message:string}[]=[],revision=0,working=false,stop:(()=>void)|undefined;
 const now=clock.getSnapshot;
 const notify=()=>{if(clock.isProcessingTimeline())return;revision++;listeners.forEach(f=>f());};
 const log=(id:string,type:string,message:string)=>{logs.push({at:now(),characterId:id,type,message});logs=logs.slice(-R.maxLogs);};
 const state=(id:string)=>{const s=states.get(id);if(!s)throw new Error('AI가 등록되지 않은 NPC');return s;};
 const register=(id:string)=>{const c=world.getCharacter(id);if(c.kind==='player'||!schedule.hasSchedule(id)||states.has(id))return;const rng=seededRandom(seed+'/'+id+'/habits'),habits=AI_HABITS.filter(()=>rng()<R.habitChance);if(habits.includes('early-bird')&&habits.includes('night-owl'))habits.splice(habits.indexOf('night-owl'),1);states.set(id,{characterId:id,status:'idle',nextDecisionAt:now(),decisionIndex:0,habits,recentFailures:[],recentDecisions:[],deviations:[]});};
 world.getCharacters().forEach(c=>register(c.id));
 const wake=(id:string)=>{if(states.has(id))state(id).nextDecisionAt=Math.min(state(id).nextDecisionAt,now());};
 const perception=(id:string)=>{const c=world.getCharacter(id),place=c.location!.currentLocationId,near=c.location!.movement?[]:world.getCharacterIdsAtLocation(place).filter(other=>other!==id).map(id=>({id}));return {character:c,near,known:options.relationships?.hasCharacter(id)?options.relationships.getKnownCharactersOf(id):[]};};
 function candidates(id:string):AiCandidate[]{
  const s=state(id),{character:c,near,known}=perception(id),context=motivation.getNpcMotivationContext(id),place=c.location!.currentLocationId,rows=new Map<string,AiCandidate>(),routes=new Map<string,ReturnType<typeof world.findRoute>>(),current=schedule.getCurrentActivity(id);
  const add=(activityId:string,targetLocationId:string|undefined,source:AiSource,value:number,priority=40,targetCharacterId?:string,intent?:AiCandidate['scheduleIntent'])=>{
   if(!activityRegistry.has(activityId))return;if(targetCharacterId&&!near.some(c=>c.id===targetCharacterId))return;
   const key=[activityId,targetLocationId??'',targetCharacterId??''].join('/');let r=rows.get(key);
   if(!r){r={id:key,characterId:id,activityId,targetLocationId,targetCharacterId,sources:[],baseScore:0,priority,estimatedTravelMinutes:0,estimatedDurationMinutes:R.durations[activityId]??30,interruptible:activityRegistry.get(activityId)!.interruptible,reasonCodes:[],components:{},score:0,feasible:true,denialReasons:[],mandatory:false};rows.set(key,r);}
   if(!r.sources.includes(source))r.sources.push(source);r.components[source]=Math.max(r.components[source]??0,value*R.weights[source]);r.priority=Math.max(r.priority,priority);if(intent){r.scheduleIntent=intent;r.mandatory=intent.mandatory;}
  };
  const planned=schedule.getUpcomingActivities(id).filter(e=>!e.entryId.startsWith('ai/')&&e.plannedStartTime<=now()+R.decisionMinutes&&e.plannedEndTime>now());
  for(const intent of planned)add(intent.activityId,intent.targetLocationId,'schedule',intent.priority,intent.priority,undefined,intent);
  for(const i of context.intents){if(i.source==='need'&&i.sourceId==='social')continue;add(i.activityId,i.targetLocationId,i.source,i.motivationScore,40,i.targetCharacterId);}
  const here=world.catalog.getLocation(place);
  for(const a of activities.filter(a=>['rest','reading','free_time'].includes(a.id)&&a.requiredPlaceTags.some(t=>here.activityTags.includes(t)||here.tags.includes(t))))add(a.id,place,'local',10);
  const needs=context.needs.values;
  for(const other of near){if(!states.has(other.id))continue;const rel=known.find(r=>r.targetCharacterId===other.id);if(!rel)continue;
   if(rel.affection<-40||rel.fear>60){const home=c.location!.homeLocationId;if(home&&home!==place)add('rest',home,'social',Math.max(rel.fear,-rel.affection));continue;}
   if(rel.affection>=20||rel.trust>=40){add('conversation',place,'social',Math.max(rel.affection,rel.trust)*.6,40,other.id);add('conversation',place,'need',motivation.getNeedUrgency(id,'social'),40,other.id);if(here.activityTags.some(t=>['study','read','research'].includes(t)))add('study_together',place,'social',Math.max(needs.growth,needs.social)*.8,40,other.id);}
   if(rel.relationshipTypeIds.some(t=>t.includes('rival'))&&here.activityTags.includes('train'))add('sparring',place,'social',Math.max(needs.growth,rel.respect)*.8,40,other.id);
  }
  const emergencies=motivation.getCriticalNeeds(id).filter(n=>['hunger','fatigue','sleepiness','safety'].includes(n.id)&&n.value>=R.emergencyThreshold);
  for(const need of emergencies)for(const i of context.intents.filter(i=>i.source==='need'&&i.sourceId===need.id))add(i.activityId,i.targetLocationId,'emergency',100,100);
  if(c.statuses.some(i=>['status-fracture','status-exhaustion'].includes(i.definitionId))&&c.location!.homeLocationId)add('rest',c.location!.homeLocationId,'emergency',95,100);
  for(const r of rows.values()){
   if(!r.targetLocationId){r.denialReasons.push('활동 장소 없음');}
   else {
    const target=world.catalog.getLocation(r.targetLocationId),a=activityRegistry.get(r.activityId)!;
    if(!a.requiredPlaceTags.some(t=>target.activityTags.includes(t)||target.tags.includes(t)))r.denialReasons.push('장소의 활동 용도 불일치');
    if(!c.location!.movement&&!routes.has(r.targetLocationId))routes.set(r.targetLocationId,world.findRoute(id,r.targetLocationId));const route=c.location!.movement?null:routes.get(r.targetLocationId)!;
    if(route?.ok){r.estimatedTravelMinutes=route.travelMinutes;const admission=world.canEnterLocation(id,r.targetLocationId,route.arrivalTime);r.denialReasons.push(...admission.reasons);if(target.capacity!==undefined&&place!==target.id&&world.getLocationPopulation(target.id).direct>=target.capacity)r.denialReasons.push('장소 수용 인원 부족');}
    else if(route)r.denialReasons.push(...route.reasons);
    else if(c.location!.movement?.destinationLocationId!==r.targetLocationId)r.denialReasons.push('현재 다른 장소로 이동 중');
    r.components.travel=-Math.min(R.maxTravelCost,r.estimatedTravelMinutes*R.travelCostPerMinute);r.components.risk=-Math.min(R.maxRiskCost,(target.dangerLevel??0)*R.riskCost);
   }
   if(socialIds.has(r.activityId)&&!r.targetCharacterId)r.denialReasons.push('공동 활동 상대 없음');
   if(r.targetCharacterId&&!near.some(c=>c.id===r.targetCharacterId))r.denialReasons.push('인지 범위 안에 대상이 없음');
   for(const instance of c.statuses){const d=statusRegistry.get(instance.definitionId);for(const effect of [...d?.effects??[],...d?.stages.find(s=>s.id===instance.stageId)?.effects??[]])if(effect.type==='BLOCK_ACTION'&&[r.activityId,...activityRegistry.get(r.activityId)!.actionTags].includes(effect.action))r.denialReasons.push(effect.reason);}
   const prefs=[...c.dispositionIds??[],...c.traitIds];r.components.preference=prefs.some(k=>AI_PREFERENCES[k]?.includes(r.activityId))?R.preferenceBonus:0;
   const habit=(s.habits.includes('meal-first')&&activityRegistry.get(r.activityId)!.type==='meal')||(s.habits.includes('solo-study')&&['reading','self_study'].includes(r.activityId))||(s.habits.includes('group-training')&&r.activityId==='sparring')||(s.habits.includes('familiar-place')&&place===r.targetLocationId)||(s.habits.includes('regular-life')&&r.sources.includes('schedule'))||(s.habits.includes('early-bird')&&now()%1440<480&&r.activityId==='sword_training')||(s.habits.includes('night-owl')&&now()%1440>=1200&&r.activityId==='reading');r.components.habit=habit?R.habitBonus:0;
   const rel=r.targetCharacterId?known.find(x=>x.targetCharacterId===r.targetCharacterId):undefined;r.components.relationship=rel?Math.max(-10,Math.min(10,(rel.trust+rel.affection)*R.relationBonus)):0;
   if(r.id===s.currentActionId)r.components.continuation=R.continuationBonus;else if(s.currentActionId)r.components.transition=-R.transitionCost;
   const recent=s.recentFailures.find(f=>f.candidateId===r.id&&f.retryAt>now());if(recent){r.components.failure=-R.failurePenalty;r.denialReasons.push('최근 실패 재시도 대기');}
   if(current.status==='failed'&&current.entryId?.startsWith('ai/')&&r.id===s.currentActionId)r.denialReasons.push(current.reason??'실행 실패');
   // Motivations are alternatives, not independent additive full-scale scores.
   const motivations=r.sources.map(k=>r.components[k]??0).sort((a,b)=>b-a);r.baseScore=(motivations[0]??0)+(motivations[1]??0)*R.secondaryMotivation+(motivations[2]??0)*R.tertiaryMotivation;
   r.components.motivation=r.baseScore;r.score=bounded(Math.round(r.baseScore+Object.entries(r.components).filter(([k])=>!r.sources.includes(k as AiSource)&&k!=='motivation').reduce((n,[,v])=>n+v,0)));
   r.reasonCodes=[...r.sources.map(source=>'source:'+source),...r.denialReasons.map(reason=>'blocked:'+reason)];r.feasible=!r.denialReasons.length;
  }
  return [...rows.values()].sort((a,b)=>b.score-a.score||a.id.localeCompare(b.id));
 }
 function finishJoint(j:JointActivity,status:'completed'|'interrupted',reason?:string){if(!['active','accepted'].includes(j.status))return;j.status=status;j.reason=reason;for(const id of [j.requesterId,j.targetId]){schedule.endAutonomousActivity(id);const s=state(id);s.currentTargetCharacterId=undefined;s.currentActionId=undefined;s.nextDecisionAt=now();log(id,'social',`${j.activityId} ${status}${reason?': '+reason:''}`);}}
 const fail=(id:string,c:AiCandidate,reason:string)=>{const s=state(id);s.recentFailures=[...s.recentFailures.filter(f=>f.candidateId!==c.id),{at:now(),candidateId:c.id,reason,retryAt:now()+R.failureCooldown}].slice(-R.maxFailures);s.status='replanning';log(id,'failure',`${c.activityId}: ${reason}`);};
 function execute(id:string,c:AiCandidate,joint?:JointActivity){
  const s=state(id),current=schedule.getCurrentActivity(id);
  if(current.occurrenceId&&!current.entryId?.startsWith('ai/')&&!activityRegistry.get(current.activityId??'')?.interruptible&&c.sources.includes('emergency'))schedule.interruptActivity(id);
  const planned=schedule.getScheduleAtTime(id).find(x=>!x.entryId.startsWith('ai/'));
  if(c.sources.includes('schedule')&&!joint){schedule.endAutonomousActivity(id);s.currentActionId=c.id;s.currentActivityId=c.activityId;s.currentTargetLocationId=c.targetLocationId;s.currentTargetCharacterId=undefined;s.actionStartedAt=now();s.actionEndsAt=c.scheduleIntent?.plannedEndTime;schedule.refreshCharacter(id);}
  else {
   if(planned&&planned.activityId!==c.activityId){const deviation={at:now(),planned:planned.activityId,selected:c.activityId,reason:c.sources.includes('emergency')?'긴급 신체·안전 필요':'효용 비교',returnPossible:planned.plannedEndTime>now()+c.estimatedTravelMinutes+c.estimatedDurationMinutes};s.deviations=[...s.deviations,deviation].slice(-50);log(id,'deviation',`${planned.activityId} → ${c.activityId}: ${deviation.reason}`);}
   schedule.endAutonomousActivity(id);const end=joint?.endAt??Math.min(MAX_ABSOLUTE_MINUTE,now()+c.estimatedTravelMinutes+c.estimatedDurationMinutes),entryId=`ai/${id}/${s.decisionIndex}`;
   schedule.startAutonomousActivity(id,{characterId:id,occurrenceId:entryId+'/'+now(),entryId,activityId:c.activityId,targetLocationId:c.targetLocationId,priority:100,mandatory:false,interruptible:true,plannedStartTime:now(),plannedEndTime:end,temporary:true});
   s.currentActionId=c.id;s.currentActivityId=c.activityId;s.currentTargetLocationId=c.targetLocationId;s.currentTargetCharacterId=c.targetCharacterId;s.actionStartedAt=now()+c.estimatedTravelMinutes;s.actionEndsAt=end;
  }
  s.status=world.getCharacterLocation(id).movement?'traveling':'performing';log(id,'selection',`${c.activityId} · ${c.score}점 · ${c.sources.join(', ')}`);
 }
 function requestSocial(id:string,c:AiCandidate){const target=c.targetCharacterId!,s=states.get(target),execution=schedule.getCurrentActivity(target),both=world.getCharacterIdsAtLocation(c.targetLocationId!),relation=options.relationships?.hasCharacter(target)?options.relationships.getRelationship(target,id):null;
  const joint:JointActivity={id:`joint/${id}/${state(id).decisionIndex}/${now()}`,requesterId:id,targetId:target,activityId:c.activityId,locationId:c.targetLocationId!,status:'requested',createdAt:now()};joints.push(joint);joints=joints.slice(-R.maxJointRecords);log(id,'request',`${target}에게 ${c.activityId} 요청`);
  const busy=motivation.getCriticalNeeds(target).some(n=>['hunger','fatigue','sleepiness','safety'].includes(n.id)&&n.value>=R.emergencyThreshold)||schedule.getScheduleAtTime(target).some(e=>e.mandatory&&!e.entryId.startsWith('ai/'))||['sleep','class','work'].includes(activityRegistry.get(execution.activityId??'')?.type??'')||joints.some(j=>j.id!==joint.id&&['active','accepted'].includes(j.status)&&[j.targetId,j.requesterId].includes(target));
  if(!s||!both.includes(id)||!both.includes(target)||busy||(relation?.affection??0)<-20||(relation?.fear??0)>70){joint.status='rejected';joint.reason='상대의 부재·의무·휴식·거절';log(id,'rejected',joint.reason);fail(id,c,joint.reason);return false;}
  joint.status='accepted';joint.startedAt=now();joint.endAt=now()+c.estimatedDurationMinutes;execute(id,c,joint);execute(target,{...c,id:[c.activityId,c.targetLocationId,id].join('/'),characterId:target,targetCharacterId:id},joint);joint.status='active';s.nextDecisionAt=Math.min(joint.endAt,now()+R.decisionMinutes);return true;
 }
 function decide(id:string,forcedId?:string){const s=state(id);s.sameMinuteDecisions=s.lastDecisionAt===now()?(s.sameMinuteDecisions??0)+1:1;s.lastDecisionAt=now();if(s.sameMinuteDecisions>R.maxReplans){s.nextDecisionAt=now()+1;log(id,'waiting','동일 시각 재계획 한도: 다음 분에 재평가');return;}s.status='evaluating';s.decisionIndex++;if(world.getCharacterLocation(id).movement&&!['rest','sleep','breakfast','lunch','dinner'].includes(s.currentActivityId??'')&&motivation.getCriticalNeeds(id).some(n=>['fatigue','sleepiness','hunger','safety'].includes(n.id)&&n.value>=R.emergencyThreshold)){const active=schedule.getCurrentActivity(id);if(active.occurrenceId)schedule.interruptActivity(id);else world.cancelMovement(id);}
  const rows=candidates(id),current=schedule.getCurrentActivity(id),moving=world.getCharacterLocation(id).movement,existing=rows.find(r=>r.id===s.currentActionId),emergency=rows.filter(r=>r.feasible&&r.sources.includes('emergency'));
  const duty=rows.filter(r=>r.feasible&&r.mandatory&&r.sources.includes('schedule'));
  let pool=emergency.length?emergency:duty.length?duty:rows.filter(r=>r.feasible);
  if(!forcedId&&emergency.length&&existing?.feasible&&existing.sources.includes('emergency')&&s.actionEndsAt!==undefined&&s.actionEndsAt>now()&&current.status!=='failed'){s.status=moving?'traveling':'performing';s.nextDecisionAt=Math.min(s.actionEndsAt,now()+R.decisionMinutes);return;}
  const joint=joints.find(j=>j.status==='active'&&[j.requesterId,j.targetId].includes(id));if(joint){if(emergency.length||duty.length)finishJoint(joint,'interrupted','긴급 상황 또는 의무 일정');else {s.status='performing';s.nextDecisionAt=Math.min(joint.endAt!,now()+R.decisionMinutes);return;}}
  if(!forcedId&&!emergency.length&&s.actionEndsAt!==undefined&&s.actionEndsAt>now()&&s.currentActionId&&current.status!=='failed'){
   const locked=!activityRegistry.get(current.activityId??'')?.interruptible;
   const holding=now()<(s.actionStartedAt??now())+R.minHold;
   const margin=existing&&pool[0]&&pool[0].score<existing.score+R.switchMargin;
   if(locked||(!duty.length&&(holding||moving||margin))){s.status=moving?'traveling':'performing';s.nextDecisionAt=Math.min(s.actionEndsAt,now()+R.decisionMinutes);return;}
  }
  if(current.status==='failed'&&s.currentActionId){const old=rows.find(c=>c.id===s.currentActionId);if(old)fail(id,old,current.reason??'실행 실패');pool=pool.filter(c=>c.id!==s.currentActionId);}
  let chosen:AiCandidate|undefined;
  if(forcedId){chosen=rows.find(c=>c.id===forcedId);if(!chosen?.feasible)throw new Error(chosen?.denialReasons.join(' / ')??'후보 없음');if((duty.length||emergency.length)&&!pool.some(c=>c.id===forcedId))throw new Error('의무·긴급 정책을 우회할 수 없습니다.');}
  else if(pool.length){const best=pool[0].score,top=pool.filter(c=>c.score>=best-R.topBand),rng=seededRandom(`${seed}/${id}/${s.decisionIndex}`);chosen=top[Math.floor(rng()*top.length)];}
  let attempts=0;while(chosen&&attempts++<R.maxReplans){if(!socialIds.has(chosen.activityId)||requestSocial(id,chosen))break;pool=pool.filter(c=>c.id!==chosen!.id);chosen=pool[0];}
  if(chosen&&attempts<=R.maxReplans){if(!socialIds.has(chosen.activityId))execute(id,chosen);}
  else {chosen=undefined;schedule.endAutonomousActivity(id);s.status='waiting';s.currentActionId=undefined;s.currentActivityId=undefined;log(id,'waiting','실행 가능한 후보 없음');}
  s.recentDecisions=[...s.recentDecisions,{at:now(),selectedId:chosen?.id,activityId:chosen?.activityId,reason:chosen?chosen.sources.join(' + '):'후보 없음',top:rows.slice(0,10).map(r=>({id:r.id,score:r.score,feasible:r.feasible}))}].slice(-R.maxDecisions);
  const boundary=schedule.getUpcomingActivities(id).filter(e=>!e.entryId.startsWith('ai/')&&e.plannedStartTime>now()).map(e=>e.plannedStartTime-R.decisionMinutes).filter(t=>t>now());s.nextDecisionAt=Math.min(now()+R.decisionMinutes,s.actionEndsAt&&s.actionEndsAt>now()?s.actionEndsAt:Infinity,...boundary);
 }
 function process(){working=true;try{
  for(const joint of joints.filter(j=>j.status==='active')){const ids=[joint.requesterId,joint.targetId],bad=ids.some(id=>{const c=world.getCharacter(id),a=schedule.getCurrentActivity(id);return !!c.location!.movement||c.location!.currentLocationId!==joint.locationId||a.status==='failed'||a.activityId!==joint.activityId;});if(now()>=joint.endAt!)finishJoint(joint,'completed');else if(bad)finishJoint(joint,'interrupted','참여자 위치·활동 변경');}
  for(const id of [...states.keys()].sort())if(state(id).nextDecisionAt<=now())decide(id);
 }finally{working=false;}notify();}
 const connect=()=>{if(!stop){const timeline=clock.subscribeTimeline({priority:30,nextEventTime:(_from,limit)=>{const next=Math.min(...[...states.values()].map(s=>s.nextDecisionAt),...joints.filter(j=>j.status==='active').map(j=>j.endAt!));return next<=limit?Math.max(now(),next):null;},processAt:process,onSeek:()=>{for(const j of joints)if(j.status==='active')j.status='interrupted';for(const s of states.values()){s.currentActionId=undefined;s.actionEndsAt=undefined;s.status='idle';s.nextDecisionAt=now();s.recentFailures=[];}process();}});
 const actors=world.subscribeActors(e=>{if(e.kind==='register')register(e.id);if(!working&&['arrival','cancel','placement','update','register'].includes(e.kind)){wake(e.id);if(e.kind==='update'&&states.has(e.id))state(e.id).recentFailures.splice(0);}});
 const execution=schedule.subscribeExecution(id=>{if(!working)wake(id);});const change=clock.subscribeChanges(()=>notify());stop=()=>{timeline();actors();execution();change();};process();}return ()=>{stop?.();stop=undefined;};};
 if(options.autoConnect!==false)connect();
 return {world,schedule,motivation,clock,connect,dispose:()=>{stop?.();stop=undefined;},subscribe:(f:()=>void)=>{listeners.add(f);return()=>{listeners.delete(f);};},getSnapshot:()=>revision,hasCharacter:(id:string)=>states.has(id),getState:(id:string)=>{const s=structuredClone(state(id)),actual=schedule.getCurrentActivity(id);s.status=world.getCharacterLocation(id).movement?'traveling':['active','late'].includes(actual.status)&&actual.activityId===s.currentActivityId?'performing':s.currentActionId?'waiting':s.status;return s;},getCandidates:(id:string)=>structuredClone(candidates(id)),getPerception:perception,getJointActivities:()=>structuredClone(joints),getLogs:()=>structuredClone(logs),
  evaluate:(id:string,forcedId?:string)=>{working=true;try{decide(id,forcedId);}finally{working=false;}notify();},
  save:():AiSave=>JSON.parse(JSON.stringify({version:R.version,absoluteMinute:now(),seed,states:[...states.values()],joints})),
  load:(save:AiSave)=>{if(save.version!==R.version||save.absoluteMinute!==now()||save.seed!==seed||save.states.length!==states.size||new Set(save.states.map(s=>s.characterId)).size!==states.size)throw new Error('AI 저장 버전·시각·시드·인물 오류');for(const s of save.states){state(s.characterId);assertAbsoluteMinute(s.nextDecisionAt);if(!['idle','evaluating','traveling','performing','interrupted','replanning','waiting'].includes(s.status)||s.currentActivityId&&!activityRegistry.has(s.currentActivityId)||s.currentTargetLocationId&&!world.catalog.nodes.has(s.currentTargetLocationId)||s.currentTargetCharacterId&&!states.has(s.currentTargetCharacterId))throw new Error('AI 저장 참조 오류');for(const at of [s.actionStartedAt,s.actionEndsAt,s.lastDecisionAt])if(at!==undefined)assertAbsoluteMinute(at);if(s.nextDecisionAt<now()||!Number.isSafeInteger(s.decisionIndex)||s.decisionIndex<0||s.habits.some(h=>!(AI_HABITS as readonly string[]).includes(h)))throw new Error('AI 저장 상태 오류');for(const f of s.recentFailures){assertAbsoluteMinute(f.at);assertAbsoluteMinute(f.retryAt);if(f.retryAt<f.at)throw new Error('실패 재시도 시각 오류');}}if(new Set(save.joints.map(j=>j.id)).size!==save.joints.length)throw new Error('공동 활동 중복');for(const j of save.joints)if(j.requesterId===j.targetId||!['requested','accepted','rejected','active','completed','interrupted'].includes(j.status)||!states.has(j.requesterId)||!states.has(j.targetId)||!world.catalog.nodes.has(j.locationId)||!socialIds.has(j.activityId))throw new Error('공동 활동 참조 오류');states.clear();save.states.forEach(s=>states.set(s.characterId,structuredClone(s)));joints=structuredClone(save.joints);notify();},
  getStatistics:()=>{const rows=[...states.values()];return {total:rows.length,traveling:world.getTravelers().filter(c=>states.has(c.id)).length,performing:rows.filter(s=>s.status==='performing').length,waiting:rows.filter(s=>s.status==='waiting').length,decisions:rows.reduce((n,s)=>n+s.decisionIndex,0),deviations:rows.reduce((n,s)=>n+s.deviations.length,0),recentFailures:rows.reduce((n,s)=>n+s.recentFailures.length,0),jointActive:joints.filter(j=>j.status==='active').length,jointCompleted:joints.filter(j=>j.status==='completed').length,jointRejected:joints.filter(j=>j.status==='rejected').length};},
 };
}
export type NpcAiEngine=ReturnType<typeof createNpcAiEngine>;
