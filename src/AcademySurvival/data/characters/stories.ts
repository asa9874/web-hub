import {personalSceneRegistry} from './personalScenes';
import content from './storyContent.json';
import type {WorldEventDefinition,EventCondition as C,EventTriggerRule} from '../../types/worldEvent';
import type {DomainEventType} from '../../types/actionEffects';
type Rule={incoming?:boolean;owner:string;target?:string;after?:string;conditions?:C[];interaction?:string;signal?:DomainEventType;definitions?:string[];outcomes?:string[];deferred?:string};
const activity=(id:string):C=>({type:'activity',id});
const fatigue=(min:number):C=>({type:'need',id:'fatigue',min});
const target=(condition:C):C=>({type:'target',condition});
const study=activity('self_study'),train=activity('sword_training');
// Missing production/letter/performance evidence is explicitly blocked, never invented.
const rules:Record<string,Rule>={
 'SER-01':{owner:'serena',conditions:[target({type:'any',conditions:[study,train,activity('magic_training')]})]},
 'SER-02':{owner:'serena',after:'SER-01',conditions:[{type:'location',id:'academy-arena'},target({type:'proficiency',id:'proficiency-sword',min:2})],interaction:'sparring'},
 'SER-03':{owner:'serena',after:'SER-02',conditions:[fatigue(70)],interaction:'request_help'},
 'SER-04':{owner:'serena',after:'SER-03',conditions:[{type:'need',id:'fatigue',min:0,max:50}]},
 'ADE-01':{owner:'adelia',signal:'AcademicChanged',outcomes:['midterm','final'],conditions:[{type:'academic_competitor',maxDifference:15}],interaction:'study_together'},
 'ADE-02':{owner:'adelia',after:'ADE-01',conditions:[study,fatigue(55),{type:'time',minuteFrom:300,minuteUntil:480}],interaction:'offer_help'},
 'ADE-03':{owner:'adelia',deferred:'편지 작성과 수신은 다름: 실제 가문 발신·배달·수신 계약 필요'},
 'ADE-04':{owner:'adelia',after:'ADE-02',conditions:[{type:'need',id:'fatigue',min:0,max:50}]},
 'LUM-01':{owner:'lumiel',conditions:[activity('attend_class'),{type:'need',id:'sleepiness',min:70}]},
 'LUM-02':{owner:'lumiel',deferred:'검증된 연구 자료 발견·현상 기록 필요'},
 'LUM-03':{owner:'lumiel',after:'LUM-01',conditions:[activity('magic_training'),target({type:'proficiency',id:'proficiency-magic-theory',min:2})],interaction:'study_together'},
 'LUM-04':{owner:'lumiel',after:'LUM-03',conditions:[fatigue(75)],interaction:'request_help'},
 'LIS-01':{owner:'lisette',interaction:'friendly_chat'},
 'LIS-02':{owner:'lisette',after:'LIS-01',conditions:[{type:'event',definitionId:'personal/lis-01',status:'completed',outcomeIds:['strained','guarded']},{type:'relationship',metric:'affection',min:-100,max:-1}],interaction:'reconcile'},
 'LIS-03':{owner:'lisette',after:'LIS-02',conditions:[target(fatigue(65))],interaction:'offer_help'},
 'LIS-04':{owner:'lisette',after:'LIS-03',interaction:'friendly_chat'},
 'NIA-01':{owner:'nia',conditions:[{type:'location',id:'academy-arena'},target({type:'proficiency',id:'proficiency-sword',min:2})],interaction:'sparring'},
 'NIA-02':{owner:'nia',signal:'CombatCompleted',conditions:[{type:'combat_result',result:'defeat'}]},
 'NIA-03':{owner:'nia',after:'NIA-02',conditions:[train]},
 'CAM-01':{owner:'camilla',signal:'DailyLifeExperienced',outcomes:['quiet-request']},
 'CAM-02':{owner:'camilla',deferred:'사적인 실수의 실제 실행·목격 근거 필요'},
 'CAM-03':{owner:'camilla',after:'CAM-01',interaction:'request_help'},
 'MIE-01':{owner:'miel',conditions:[target({type:'need',id:'social',min:55})],interaction:'friendly_chat'},
 'MIE-02':{owner:'miel',signal:'SocialCommitmentChanged',outcomes:['missed'],interaction:'request_help'},
 'MIE-03':{owner:'miel',conditions:[fatigue(75)],interaction:'request_help'},
 'EST-01':{owner:'estelle',conditions:[{type:'organization',id:'academy-council'},activity('office_work')]},
 'EST-02':{owner:'estelle',after:'EST-01',conditions:[target({type:'organization',id:'academy-council'})],interaction:'request_help'},
 'EST-03':{incoming:true,owner:'estelle',signal:'InteractionCompleted',definitions:['offer_help']},
 'EST-04':{owner:'estelle',after:'EST-03',interaction:'friendly_chat'},
 'FIO-01':{owner:'fiona',deferred:'연금술 제작 실험의 실제 공통 판정 결과 필요'},
 'FIO-02':{owner:'fiona',after:'FIO-01',deferred:'실제 실패 원인·재료 준비 원장 필요'},
 'FIO-03':{owner:'fiona',after:'FIO-02',deferred:'연구 결과물·발표 판정 필요'},
 'NOE-01':{owner:'noel',signal:'InteractionCompleted',definitions:['argue']},
 'NOE-02':{owner:'noel',deferred:'실제 귀여운 아이템 보유·목격 증거 어댑터 필요'},
 'NOE-03':{owner:'noel',after:'NOE-01',conditions:[{type:'relationship',metric:'affection',min:-100,max:-1}],interaction:'reconcile'},
 'BRI-01':{owner:'brina',deferred:'제작품 원장과 실제 제작 완료 판정 필요'},
 'BRI-02':{owner:'brina',after:'BRI-01',deferred:'발명품 실제 성능 시험 필요'},
 'BRI-03':{owner:'brina',after:'BRI-02',deferred:'공동 제작·재료 소비·수리 판정 필요'},
 'ELI-01':{incoming:true,owner:'elisia',signal:'InteractionCompleted',definitions:['request_help']},
 'ELI-02':{owner:'elisia',after:'ELI-01',conditions:[fatigue(75)]},
 'ELI-03':{owner:'elisia',after:'ELI-02',interaction:'request_help'},
 'THE-01':{owner:'thea',deferred:'실제 지도 아이템·기지 탐험 정보 근거 필요'},
 'THE-02':{owner:'thea',after:'THE-01',deferred:'지도에서 확인한 실제 탐험 목적지·이동 계획 필요'},
 'THE-03':{owner:'thea',after:'THE-02',deferred:'실제 탐험 완료·사고 결과 필요'},
 'VIO-01':{owner:'violetta',deferred:'연주·공연의 실제 품질 판정 필요'},
 'VIO-02':{owner:'violetta',after:'VIO-01',deferred:'음악 숙련도와 실제 공연 평가 어댑터 필요'},
 'VIO-03':{owner:'violetta',after:'VIO-02',deferred:'실제 공동 공연·참가자·품질 판정 필요'},
 'IRI-01':{owner:'iris',interaction:'friendly_chat'},
 'IRI-02':{owner:'iris',deferred:'본인이 알게 된 친구의 관계 변화 정보 검증 필요'},
 'IRI-03':{owner:'iris',after:'IRI-01',interaction:'friendly_chat'},
 'ENS-01':{owner:'adelia',target:'miel',conditions:[{type:'location',id:'academy-library'}],interaction:'study_together'},
 'ENS-02':{owner:'camilla',target:'nia',conditions:[{type:'location',id:'academy-arena'}],interaction:'train_together'},
 'ENS-03':{owner:'lumiel',target:'fiona',conditions:[target({type:'proficiency',id:'proficiency-alchemy',min:2})],interaction:'study_together'},
 'ENS-04':{owner:'lisette',target:'noel',interaction:'friendly_chat'},
 'ENS-05':{owner:'brina',target:'fiona',deferred:'공동 마도공학 실험의 실제 재료·판정 필요'},
 'ENS-06':{owner:'estelle',target:'thea',deferred:'실제 탐험 신청·조직 승인 권한 필요'},
 'ENS-07':{owner:'violetta',target:'miel',deferred:'실제 공연 연습·참가자 기록 필요'},
 'ENS-08':{owner:'elisia',conditions:[target(fatigue(65))],interaction:'offer_help'},
 'ENS-09':{owner:'serena',conditions:[{type:'location',id:'academy-arena'},target({type:'proficiency',id:'proficiency-sword',min:3})],interaction:'sparring'},
 'ENS-10':{owner:'iris',signal:'DailyLifeExperienced',outcomes:['evening-chat']},
 'ENS-11':{owner:'adelia',signal:'AcademicChanged',outcomes:['midterm','final'],conditions:[{type:'academic_competitor',maxDifference:10}],interaction:'friendly_chat'},
 'ENS-12':{owner:'lisette',signal:'InteractionCompleted',definitions:['pass_rumor']},
};
export const storyId=(code:string)=>'personal/'+code.toLowerCase();
export const personalStoryContent=content.map(row=>({...row,...rules[row.code],id:storyId(row.code),ownerId:'fixed-'+rules[row.code].owner,implementation:rules[row.code].deferred?'blocked' as const:'connected' as const}));
export const personalStoryDefinitions:WorldEventDefinition[]=personalStoryContent.map(row=>{
 const r=rules[row.code],conditions:C[]=[{type:'character',id:row.ownerId},...(r.after?[{type:'event' as const,definitionId:storyId(r.after),status:'completed' as const}]:[]),...(r.conditions??[])];
 if(r.deferred)conditions.push({type:'external',key:row.code,description:r.deferred});
 const trigger:EventTriggerRule={id:'opportunity',subjectRole:r.incoming?'target':'actor',type:r.signal?'emergent':'conditional',probability:r.signal?1:.3,everyMinutes:240,conditions:[],...(r.signal?{domainTypes:[r.signal],domainDefinitionIds:r.definitions,domainOutcomes:r.outcomes}:{})};
 const count=r.interaction||r.target||row.code==='SER-01'?2:1;
 return {personalScene:row.ownerId==='fixed-serena'?personalSceneRegistry.get(row.code):undefined,id:row.id,name:row.name,description:row.description,category:'personal_story',scale:row.code.startsWith('ENS')?'relationship':'personal',tags:['fixed-student',row.ownerId,row.code],importance:80,visibility:'restricted',triggerRules:[trigger],participantRules:{actorId:row.ownerId,...r.target?{targetId:'fixed-'+r.target}:{},count,conditions:[...conditions,{type:'not',condition:{type:'event',definitionId:row.id,status:'completed'}}]},stages:[{id:'experience',name:row.name,durationMinutes:1,timeoutMinutes:150,entryConditions:[],completionConditions:[],failureConditions:[],effects:[],nextStageIds:[],...(r.interaction?{interactionId:r.interaction}:{})}],outcomeRules:r.interaction?[{id:'strained',name:'갈등을 남긴 공동 경험',conditions:[{type:'relationship',metric:'affection',min:-100,max:-1}],weight:1,effects:[]},{id:'shared',name:'신뢰를 확인한 공동 경험',conditions:[{type:'relationship',metric:'affection',min:0},{type:'relationship',metric:'trust',min:40}],weight:1,effects:[]},{id:'guarded',name:'조심스러운 공동 경험',conditions:[{type:'not',condition:{type:'relationship',metric:'affection',min:-100,max:-1}},{type:'not',condition:{type:'relationship',metric:'trust',min:40}}],weight:1,effects:[]}]:[{id:'reflect',name:'경험을 되짚음',conditions:[{type:'need',id:'fatigue',min:0,max:69}],weight:1,effects:[{id:'settle',type:'need_delta',target:'actor',needId:'recognition',delta:-2}]},{id:'burden',name:'부담을 자각함',conditions:[fatigue(70)],weight:1,effects:[]}],followUpRules:[],cooldownMinutes:1440,participantCooldownMinutes:1440,maxOccurrences:3,limitations:r.deferred?[r.deferred]:['행동 결과·승패·물품은 공통 엔진만 변경한다. 서사 완료가 장기 목표 달성을 뜻하지 않는다.']};
});
// Successors wait for their own real-world conditions; no automatic teleport or forced success.
for(const row of personalStoryContent){if(!row.after||row.deferred)continue;const parent=personalStoryDefinitions.find(d=>d.id===storyId(row.after!))!;parent.followUpRules.push({id:row.code,definitionId:row.id,relation:'continues',conditions:[],probability:1,consequence:{kind:'delay',delayMinutes:180,windowMinutes:180*1440,retryMinutes:360}});}
