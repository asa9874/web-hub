import type {Character} from '../types/character';
import type {CharacterMotivationState,CharacterGoalState,GoalCondition,GoalEvaluation,NeedId,CharacterNeedState} from '../types/motivation';
import {NEED_IDS} from '../types/motivation';
import {needs,goals,goalRegistry,MOTIVATION_RULES,DISPOSITION_SENSITIVITY,TRAIT_SENSITIVITY,STATUS_NEED_MODIFIERS,ROLE_READING_LOCATIONS,ROLE_SENSITIVITY} from '../data/motivations';
import {seededRandom,randomInt,weightedPick} from './seededRandom';
import {scheduleRole} from './schedulePlanning';
import {organizationWithin,organizationRegistry} from './organizations';
import {traitRegistry,giftRegistry} from './registry';
import {proficiencyRegistry} from './knowledgeRegistry';
import {positionRegistry,titleRegistry} from './socialRules';
import {statusRegistry} from './statusRegistry';
import {locationCatalog} from './locationRegistry';
import {activityRegistry} from '../data/schedules';
import {dispositionRegistry} from './morality';
import type {RelationshipGraph} from './relationships';
import {assertAbsoluteMinute,MAX_ABSOLUTE_MINUTE} from './calendar';
export const clamp100=(n:number)=>Math.max(0,Math.min(100,n));
export function assertScore(n:number){if(!Number.isInteger(n)||n<0||n>100)throw new Error('수치는 0~100 정수여야 합니다.');}
export const needUnits=(n:number)=>Math.round(n*MOTIVATION_RULES.scale*60);
export const needValue=(units:number)=>Math.round(units/(MOTIVATION_RULES.scale*60));
export function generateCharacterNeeds(c:Character,at:number,seed='motivation-v1'):CharacterNeedState{
 assertAbsoluteMinute(at);const rng=seededRandom(seed+'/'+c.id+'/needs'),values={} as Record<NeedId,number>,sensitivities={} as Record<NeedId,number>,units={} as Record<NeedId,number>;
 for(const id of NEED_IDS){values[id]=randomInt(rng,...MOTIVATION_RULES.initialRange as [number,number]);let factor=randomInt(rng,Math.round(MOTIVATION_RULES.generationSensitivity[0]*100),Math.round(MOTIVATION_RULES.generationSensitivity[1]*100))/100*(ROLE_SENSITIVITY[scheduleRole(c)]?.[id]??1);
 for(const key of c.dispositionIds??[])factor*=DISPOSITION_SENSITIVITY[key]?.[id]??1;
 for(const key of c.traitIds)factor*=TRAIT_SENSITIVITY[key]?.[id]??1;
 if(id==='fatigue')factor*=1-Math.min(.2,Math.max(-.1,((c.stats.VIT??40)-40)/400));
 if(id==='curiosity')factor*=1+Math.min(.15,Math.max(-.1,((c.stats.INT??40)-40)/500));
 sensitivities[id]=Math.round(Math.max(MOTIVATION_RULES.generatedSensitivityMin,Math.min(MOTIVATION_RULES.generatedSensitivityMax,factor))*1000)/1000;units[id]=needUnits(values[id]);}
 return {characterId:c.id,values,sensitivities,units,lastUpdatedAt:at,visibility:'private'};
}
export function evaluateCondition(condition:GoalCondition,c:Character,state:CharacterMotivationState,goal?:CharacterGoalState,graph?:RelationshipGraph):GoalEvaluation{
 const result=(met:boolean,progress=met?100:0,reason=''):GoalEvaluation=>({result:met?'met':'unmet',progress:clamp100(progress),reasons:reason?[reason]:[]});
 const scaled=(value:number,threshold:number)=>result(value>=threshold,threshold>0?value/threshold*100:100);
 switch(condition.type){
 case 'all':case 'any':{const rows=condition.conditions.map(r=>evaluateCondition(r,c,state,goal,graph)),met=condition.type==='all'?rows.every(r=>r.result==='met'):rows.some(r=>r.result==='met'),unsupported=rows.some(r=>r.result==='unsupported');return {result:met?'met':condition.type==='all'&&rows.some(r=>r.result==='unmet')?'unmet':unsupported?'unsupported':'unmet',progress:condition.type==='all'?rows.reduce((n,r)=>n+r.progress,0)/Math.max(1,rows.length):Math.max(0,...rows.map(r=>r.progress)),reasons:rows.flatMap(r=>r.reasons)};}
 case 'not':{const r=evaluateCondition(condition.condition,c,state,goal,graph);return r.result==='unsupported'?r:result(r.result==='unmet');}
 case 'stat':return scaled(c.stats[condition.id as keyof Character['stats']]??0,condition.min);
 case 'proficiency':return scaled(c.proficiencyRanks[condition.id]??0,condition.min);
 case 'organization':return result(c.affiliations.some(a=>organizationWithin(a.organizationId,condition.id)));
 case 'position':return result(c.positions.some(p=>p.definitionId===condition.id));
 case 'title':return result(c.titles.some(t=>t.definitionId===condition.id&&t.state==='active'));
 case 'status':return result(c.statuses.some(s=>s.definitionId===condition.id));
 case 'relationship':{if(!graph?.hasCharacter(c.id))return result(false,0,'관계 그래프 미연결');const target=goal?.targetCharacterId;const rows=target?graph.getRelationshipsOf(c.id).filter(r=>r.targetCharacterId===target):condition.target==='any'?graph.getRelationshipsOf(c.id):[];const requirements=[{metric:condition.metric,min:condition.min},...condition.also??[]];const outcomes=rows.filter(r=>r.familiarity==='known').map(r=>requirements.map(q=>scaled(r[q.metric],q.min)));return result(outcomes.some(row=>row.every(q=>q.result==='met')),Math.max(0,...outcomes.map(row=>Math.min(...row.map(q=>q.progress)))));}
 case 'home':return c.location?.homeLocationId?result(!c.location.movement&&c.location.currentLocationId===c.location.homeLocationId):{result:'unsupported',progress:0,reasons:['거주지 미설정']};
 case 'visit':return result(state.evidence.visitedLocationIds.includes(condition.id));
 case 'activity':return scaled((state.evidence.activityCounts[condition.id]??0)-(goal?.baseline?.activityCounts[condition.id]??0),condition.count);
 case 'activityMinutes':return scaled((state.evidence.activityMinutes[condition.id]??0)-(goal?.baseline?.activityMinutes[condition.id]??0),condition.minutes);
 case 'statusDuration':{const since=state.evidence.statusSince[condition.id];return scaled(since!==undefined&&c.statuses.some(s=>s.definitionId===condition.id)?Math.max(0,state.needs.lastUpdatedAt-Math.max(since,goal?.createdAt??since)):0,condition.minutes);}
 case 'need':return result(state.needs.values[condition.id]<=condition.max,state.needs.values[condition.id]<=condition.max?100:100-state.needs.values[condition.id]);
 case 'external':return !Object.hasOwn(state.evidence.externalFacts,condition.key)?{result:'unsupported',progress:0,reasons:['판정 보류: '+condition.description]}:result(state.evidence.externalFacts[condition.key]);
 }
}
export function evaluateGoal(c:Character,state:CharacterMotivationState,goal:CharacterGoalState,graph?:RelationshipGraph){const d=goalRegistry.get(goal.goalDefinitionId);if(!d)throw new Error('목표 정의 참조 오류');return evaluateCondition({type:'all',conditions:d.completionConditions},c,state,goal,graph);}
export function createCharacterGoal(c:Character,state:CharacterMotivationState,id:string,at:number,instanceId:string,graph?:RelationshipGraph,targets:Partial<Pick<CharacterGoalState,'targetCharacterId'|'targetOrganizationId'|'targetLocationId'>>={}):CharacterGoalState{
 const def=goalRegistry.get(id);if(!def)throw new Error('존재하지 않는 목표');const role=scheduleRole(c);if(def.roles.length&&!def.roles.includes(role))throw new Error('목표의 역할 자격을 충족하지 않습니다.');
 if(def.eligibilityConditions.some(r=>evaluateCondition(r,c,state,undefined,graph).result!=='met'))throw new Error('목표 획득 조건 미충족');
 if(targets.targetCharacterId&&(!graph?.hasCharacter(targets.targetCharacterId)||targets.targetCharacterId===c.id))throw new Error('잘못된 목표 대상 인물');
 if(def.targetKind==='character'&&!targets.targetCharacterId)throw new Error('목표 대상 인물 미설정');
 if(targets.targetOrganizationId&&!organizationRegistry.has(targets.targetOrganizationId)||targets.targetLocationId&&!locationCatalog.nodes.has(targets.targetLocationId))throw new Error('잘못된 목표 대상 참조');
 if(state.goals.some(g=>g.goalDefinitionId===id&&['active','paused'].includes(g.status)))throw new Error('동일 목표가 이미 활성화되어 있습니다.');
 if(def.logicalExclusionGroup&&state.goals.some(g=>g.status==='active'&&goalRegistry.get(g.goalDefinitionId)?.logicalExclusionGroup===def.logicalExclusionGroup))throw new Error('논리적 배타 목표 충돌');
 return {id:instanceId,characterId:c.id,goalDefinitionId:id,...targets,priority:def.basePriority,progress:0,status:'active',createdAt:at,updatedAt:at,deadlineAt:def.deadlineMinutes?Math.min(MAX_ABSOLUTE_MINUTE,def.deadlinePolicy==='day-end'?(Math.floor(at/1440)+1)*1440:at+def.deadlineMinutes):undefined,visibility:def.visibility,baseline:{activityMinutes:{...state.evidence.activityMinutes},activityCounts:{...state.evidence.activityCounts},statusMinutes:{...state.evidence.statusMinutes}}};
}
export function generateCharacterMotivation(c:Character,at:number,seed='motivation-v1',graph?:RelationshipGraph):CharacterMotivationState{
 const state:CharacterMotivationState={characterId:c.id,needs:generateCharacterNeeds(c,at,seed),goals:[],evidence:{activityMinutes:{},activityCounts:{},statusMinutes:{},statusSince:Object.fromEntries(c.statuses.map(s=>[s.definitionId,at])),visitedLocationIds:c.location&&!c.location.movement?[c.location.currentLocationId]:[],completedOccurrences:[],externalFacts:{}},diagnostics:[]};
 if(c.kind==='fixed_npc'&&goalRegistry.has('personal-'+c.id.replace('fixed-',''))){const def=goalRegistry.get('personal-'+c.id.replace('fixed-',''))!;state.goals.push({id:c.id+'/personal',characterId:c.id,goalDefinitionId:def.id,priority:def.basePriority,progress:0,status:'active',createdAt:at,updatedAt:at,visibility:def.visibility});return state;}
 if(c.kind!=='random_npc'){state.diagnostics.push('고정 인물·플레이어의 공식 목표 미설정: 자동 인생 목표를 부여하지 않습니다.');return state;}
 const rng=seededRandom(seed+'/'+c.id+'/goals'),role=scheduleRole(c),known=graph?.hasCharacter(c.id)?graph.getKnownCharactersOf(c.id).map(r=>r.targetCharacterId):[];
 for(const horizon of ['short','medium','long'] as const){const bounds=MOTIVATION_RULES.goalCounts[horizon],count=randomInt(rng,bounds[0],bounds[1]);let pool=goals.filter(g=>g.horizon===horizon&&(!g.roles.length||g.roles.includes(role))&&(!g.targetKind||known.length)&&g.eligibilityConditions.every(r=>evaluateCondition(r,c,state,undefined,graph).result==='met'));
 for(let i=0;i<count&&pool.length;i++){const def=weightedPick(pool.map(g=>({value:g,weight:1+(g.tags.includes(c.specializationId??'')?5:0)+(g.preferredDispositions.some(id=>c.dispositionIds?.includes(id))?5:0)+(g.relatedNeeds.includes('social')&&((c.morality??0)>30)?1:0)+(g.tags.includes('magic')&&c.giftIds.some(id=>giftRegistry.get(id)?.impact.domains.includes('magic'))?1:0)+(g.category==='복수·갈등'&&(c.karma??0)<-100?2:0)})),rng)!;pool=pool.filter(g=>g.id!==def.id);const target=def.targetKind?known[randomInt(rng,0,known.length-1)]:undefined;const item=createCharacterGoal(c,state,def.id,at,`${c.id}/goal/${horizon}/${i}`,graph,{targetCharacterId:target});if(evaluateGoal(c,state,item,graph).result==='met'){i--;continue;}state.goals.push(item);}}
 return state;
}
export function motivationCatalogIssues(){const issues:string[]=[],unique=(rows:{id:string;name:string}[],label:string)=>{if(new Set(rows.map(r=>r.id)).size!==rows.length||new Set(rows.map(r=>r.name)).size!==rows.length)issues.push(label+' 중복 ID·이름');};unique(needs,'욕구');unique(goals,'목표');for(const n of needs){const values=Object.values(n.thresholds);if(!n.description||!Number.isFinite(n.defaultChangePerHour)||!Number.isFinite(n.urgencyWeight)||n.urgencyWeight<=0||values.some(v=>!Number.isInteger(v)||v<0||v>100)||values.some((v,i)=>i>0&&v<=values[i-1]))issues.push(n.id+' 욕구 설정 오류');for(const id of n.activities)if(!activityRegistry.has(id))issues.push(id);}if(goals.length<50)issues.push('목표 50종 미만');
 const check=(r:GoalCondition)=>{if(('min' in r)&&(!Number.isFinite(r.min)||!Number.isInteger(r.min)))issues.push('조건 수치 오류');if(r.type==='proficiency'&&(r.min<0||r.min>9))issues.push('경지 범위 오류');if((r.type==='activityMinutes'||r.type==='statusDuration')&&(!Number.isInteger(r.minutes)||r.minutes<=0)||r.type==='activity'&&(!Number.isInteger(r.count)||r.count<=0))issues.push('수행 조건 수치 오류');if(r.type==='external'&&(!r.key||!r.description))issues.push('외부 조건 누락');if(r.type==='need'&&(!NEED_IDS.includes(r.id)||!Number.isInteger(r.max)||r.max<0||r.max>100))issues.push('욕구 조건 오류');switch(r.type){case 'relationship':for(const q of [{metric:r.metric,min:r.min},...r.also??[]])if(!['trust','affection','intimacy','respect','fear'].includes(q.metric)||!Number.isInteger(q.min)||q.min<(q.metric==='trust'||q.metric==='affection'?-100:0)||q.min>100)issues.push('관계 조건 오류');break;case 'all':case 'any':if(!r.conditions.length)issues.push('빈 복합 조건');r.conditions.forEach(check);break;case 'not':check(r.condition);break;case 'stat':if(!['STR','AGI','VIT','MAG','INT','WIL','CHA'].includes(r.id))issues.push(r.id);break;case 'proficiency':if(!proficiencyRegistry.has(r.id))issues.push(r.id);break;case 'organization':if(!organizationRegistry.has(r.id))issues.push(r.id);break;case 'position':if(!positionRegistry.has(r.id))issues.push(r.id);break;case 'title':if(!titleRegistry.has(r.id))issues.push(r.id);break;case 'status':case 'statusDuration':if(!statusRegistry.has(r.id))issues.push(r.id);break;case 'visit':if(!locationCatalog.nodes.has(r.id))issues.push(r.id);break;case 'activity':case 'activityMinutes':if(!activityRegistry.has(r.id))issues.push(r.id);break;}}
 for(const g of goals){if(!Number.isInteger(g.basePriority)||g.basePriority<0||g.basePriority>100||!['short','medium','long'].includes(g.horizon)||g.relatedNeeds.some(id=>!NEED_IDS.includes(id)))issues.push(g.id+' 목표 설정 오류');if(!g.description||!g.completionConditions.length)issues.push(g.id+' 설명·조건 누락');g.completionConditions.forEach(check);g.failureConditions.forEach(check);g.eligibilityConditions.forEach(check);g.suggestedActivities.forEach(id=>{if(!activityRegistry.has(id))issues.push(id);});g.preferredDispositions.forEach(id=>{if(!dispositionRegistry.has(id))issues.push(id);});}
 for(const id of Object.keys(TRAIT_SENSITIVITY))if(!traitRegistry.has(id))issues.push(id);for(const id of Object.keys(DISPOSITION_SENSITIVITY))if(!dispositionRegistry.has(id))issues.push(id);for(const id of ['status-fear','status-insomnia',...Object.keys(STATUS_NEED_MODIFIERS)])if(!statusRegistry.has(id))issues.push(id);for(const ids of Object.values(ROLE_READING_LOCATIONS))for(const id of ids)if(!locationCatalog.nodes.has(id))issues.push(id);return issues;
}

