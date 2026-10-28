import type {EventCondition as C,EventTriggerRule as Trigger,WorldEventDefinition as Def} from '../../types/worldEvent';

const DAY=1440;
const at=(id:string):C=>({type:'location',id});
const activity=(id:string):C=>({type:'activity',id});
const need=(min:number):C=>({type:'need',id:'fatigue',min});
const target=(condition:C):C=>({type:'target',condition});
const signal=(type:NonNullable<Trigger['domainTypes']>[number],domainOutcomes?:string[],domainDefinitionIds?:string[]):Trigger=>({id:'actual',type:'emergent',probability:1,conditions:[],domainTypes:[type],domainOutcomes,domainDefinitionIds});
const opportunity=(probability=.12):Trigger=>({id:'encounter',type:'conditional',everyMinutes:240,probability,conditions:[]});
type Row={code:string;name:string;description:string;trigger?:Trigger;conditions?:C[];interaction?:string;pair?:boolean;blocked?:string;limitation?:string};
/** Unsupported causes stay blocked. An ordinary chat is not a party, fabrication or delivered letter. */
export const academyStoryContent:Row[]=[
 {code:'ACA-01',name:'시험 전날의 공부 모임',description:'동일한 실제 수강 분반의 평가가 24시간 안에 예정된 학생들이 함께 공부할지 결정한다.',trigger:opportunity(.25),conditions:[at('academy-library'),{type:'academic_exam_soon',withinMinutes:DAY}],interaction:'study_together',pair:true,limitation:'시험 일정은 실제 개설 분반과 미실시 평가만 조회한다. 공부가 시험 점수를 미리 생성하지 않는다.'},
 {code:'ACA-02',name:'사라진 강의 자료',description:'실제로 분실된 강의 자료의 경로를 조사한다.',blocked:'강의 자료 소유·분실·오배송 원장 없음. 분실/범인/해결을 생성하지 않는다.'},
 {code:'ACA-03',name:'조별 과제의 불협화음',description:'역할 분담과 실제 공동 과제 결과를 다룬다.',blocked:'조별 과제 배역·평가 원장 필요. 일반 공동 공부를 과제 성과로 부르지 않는다.'},
 {code:'ACA-04',name:'예상 밖의 시험 결과',description:'동일 시험에 실제 응시한 가까운 성적의 학생들이 결과를 이야기한다.',trigger:signal('AcademicChanged',['midterm','final']),conditions:[{type:'academic_competitor',maxDifference:10}],interaction:'friendly_chat',pair:true},
 {code:'ACA-05',name:'교수의 특별 과제',description:'권한 있는 교수가 실력과 일정에 맞는 과제를 제안한다.',blocked:'교수의 개별 특별 과제 발급·제출 계약 필요.'},
 {code:'ACA-06',name:'마력 실습의 이상값',description:'본인이 실제로 읽은 427년 측정 기록을 두고 의문을 정리한다. 원인은 미확인이다.',trigger:signal('RiftChanged',undefined,['rift-archive/rift-prelude/427/measurement']),limitation:'현장 실습을 직접 겪었다고 바꾸지 않는다. 원본 보존 자료와 원인 사건을 참조한다.'},
 {code:'DOR-01',name:'깊은 밤의 소음',description:'실제 야간 소음을 인지하고 조정한 룸메이트의 경험이다.',trigger:signal('DailyLifeExperienced',['quiet-request']),limitation:'소음 조정 대화의 관계 효과는 생활 엔진에서 이미 적용한다.'},
 {code:'DOR-02',name:'사라진 개인 물건',description:'소유 원장에 근거한 분실과 회수, 실제 오해를 다룬다.',blocked:'아이템 분실/절도 원인과 조사 경로 없음. 회수 가능한 유물을 개인 분실물로 조작하지 않는다.'},
 {code:'DOR-03',name:'룸메이트의 비밀 연습',description:'실제 연습을 목격한 룸메이트의 조율이다.',blocked:'비밀 연습·소음 원인과 목격 연결 어댑터 필요.'},
 {code:'DOR-04',name:'몸살에 걸린 학생',description:'실제로 발열 상태인 학생이 곁에 있는 상대에게 도움을 요청한다.',trigger:opportunity(.2),conditions:[{type:'status',id:'status-fever'}],interaction:'request_help',pair:true,limitation:'도움 요청만으로 치료 완료나 출석 면제를 지급하지 않는다.'},
 {code:'DOR-05',name:'작은 기숙사 파티',description:'입주자의 일정과 선호가 맞을 때 열리는 작은 모임이다.',blocked:'파티 참가·공간 예약 계약 필요. 저녁 잡담 완료를 파티 개최로 간주하지 않는다.'},
 {code:'DOR-06',name:'방 배정 문제',description:'실제 룸메이트의 정리 분담 논의에서 생활 차이를 확인한다.',trigger:signal('DailyLifeExperienced',['tidy-request']),limitation:'생활 차이 확인 경로만 연결. 방 재배정 심사·권한 처리는 후속 구현이다.'},
 {code:'CLB-01',name:'동아리 예산 부족',description:'실제 조직 예산 부족에 따라 활동을 조정한다.',blocked:'동아리 화폐 예산 원장 필요. 행사 준비물 부족을 예산 부족으로 바꾸지 않는다.'},
 {code:'CLB-02',name:'신입 부원의 실수',description:'실제 신규 회원의 수행 오류를 교육과 재시도에 연결한다.',blocked:'신입의 실제 수행 오류·교육 결과 계약 필요.'},
 {code:'CLB-03',name:'공동 연구 제안',description:'실제로 수락하고 완료한 연구 약속 제안의 의미를 정리한다.',trigger:{...signal('InteractionCompleted'),domainConversationIntents:['research_proposal']},pair:true,limitation:'제안 대화 완료이며 연구 성과 완료가 아니다. 실제 약속은 기존 대화 시스템이 소유한다.'},
 {code:'CLB-04',name:'발명품 시험 행사',description:'실제 제작품과 재료 소유권, 성능 판정을 요구한다.',blocked:'제작·성능 시험 어댑터 없음. 물건 보유나 마법 훈련을 발명 성공으로 처리하지 않는다.'},
 {code:'CLB-05',name:'동아리 간 경쟁',description:'실제로 기록된 조직 간 경쟁을 개인 경험과 후속 협의로 연결한다.',trigger:signal('AcademyGroupChanged',['competition']),limitation:'조직 배정·점수·평판은 원래 조직 규칙을 따르며 이 기록에서 재지급하지 않는다.'},
 {code:'CLB-06',name:'정체불명의 표본',description:'실제 보존 표본 자료를 접한 사람이 미확인 흔적을 검토한다.',trigger:signal('RiftChanged',undefined,['rift-archive/rift-prelude/427/material']),limitation:'실제 표본 원본 자료가 있어야 하며 에르하·이계의 정체를 공개하지 않는다.'},
 {code:'TRN-01',name:'훈련장 선점 다툼',description:'실제 시설 예약 충돌에서 일정 조정·공동 훈련·갈등으로 이어진다.',blocked:'훈련장 개인 예약 충돌 원인 필요. 같은 장소의 두 학생을 자동 분쟁 당사자로 만들지 않는다.'},
 {code:'TRN-02',name:'뜻밖의 강자',description:'실제 전투에서 승리한 숙련된 랜덤 학생을 당사자가 인식한다.',trigger:signal('CombatCompleted'),conditions:[{type:'combat_result',result:'victory'},{type:'character_kind',kind:'random_npc'},{type:'proficiency',id:'proficiency-sword',min:3}],pair:true},
 {code:'TRN-03',name:'무리한 훈련',description:'현재 훈련 중인 학생의 높은 피로가 휴식 판단에 영향을 준다.',trigger:opportunity(.2),conditions:[need(75),{type:'any',conditions:[activity('sword_training'),activity('magic_training')]}]},
 {code:'TRN-04',name:'기술 교환 제안',description:'실제 훈련장의 학생이 숙련된 상대에게 함께 훈련하자고 제안한다.',trigger:opportunity(.1),conditions:[at('academy-arena'),activity('sword_training'),target({type:'proficiency',id:'proficiency-sword',min:2})],interaction:'train_together',pair:true,limitation:'다른 기술의 자동 습득이 아니다. 실제 수락·공동 활동·공통 성장 규칙을 따른다.'},
 {code:'TRN-05',name:'대련 판정 논란',description:'실제 규정 위반 신고와 대련 기록을 재검토한다.',blocked:'규정 위반·이의 신청·재심 권한 계약 필요. 패배를 곧 판정 논란으로 취급하지 않는다.'},
 {code:'TRN-06',name:'부상당한 참가자',description:'실제 타박상 상태가 적용된 사람이 현장의 상대에게 지원을 요청한다.',trigger:signal('StatusApplied'),conditions:[{type:'status',id:'status-bruise'}],interaction:'request_help',pair:true,limitation:'원래 부상·전투 결과를 변경하거나 자동 치료하지 않는다.'},
 {code:'SOC-01',name:'같이 점심 먹을래?',description:'점심 시간의 식당에서 실제로 함께 식사할 상대에게 제안한다.',trigger:opportunity(.2),conditions:[at('academy-dining'),{type:'time',minuteFrom:690,minuteUntil:810}],interaction:'meal_together',pair:true},
 {code:'SOC-02',name:'전해지지 않은 편지',description:'발신·배달·반송 기록에 따라 편지의 운명이 달라진다.',blocked:'발신자·수신자·배달 원장 없음. 편지 작성만으로 전달/미전달을 결정하지 않는다.'},
 {code:'SOC-03',name:'생일을 기억하는 사람',description:'실제 생일과 인지한 관계에 근거한 축하이다.',blocked:'캐릭터별 확정 생일 데이터 없음. 나이에서 생일을 임의 추정하지 않는다.'},
 {code:'SOC-04',name:'어긋난 약속',description:'실제 이행되지 않은 약속의 당사자가 다시 대화할지 결정한다.',trigger:signal('SocialCommitmentChanged',['missed']),interaction:'reconcile',pair:true,limitation:'본인에게 전달된 약속 당사자만 사용한다. 이동 중·원거리는 기다리다 만료될 수 있다.'},
 {code:'SOC-05',name:'문화제 준비의 우연한 만남',description:'실제 문화제 준비 의견 차이 뒤 현장의 학생과 대화를 요청한다.',trigger:signal('AcademicChanged',['EVT-03']),interaction:'friendly_chat',pair:true,limitation:'함께 준비한 참가자로 소급 기록하지 않는다. 새 현장 만남의 상대는 실제 주변 인물이다.'},
 {code:'SOC-06',name:'졸업생의 방문',description:'실제 졸업생이나 적격 외부 인물의 방문과 진로 상담이다.',blocked:'졸업 이후 학적·방문 계약 필요. 재학생을 졸업생으로 바꾸지 않는다.'},
];
export const academyStoryId=(code:string)=>'academy-story/'+code.toLowerCase();
export const academyStoryDefinitions:Def[]=academyStoryContent.map(row=>({
 id:academyStoryId(row.code),name:row.name,description:row.description,category:row.code.startsWith('TRN')?'combat':row.code.startsWith('ACA')?'academy':row.code.startsWith('CLB')?'organization':'daily',tags:['academy-story',row.code],scale:row.pair?'relationship':'personal',importance:50,visibility:'restricted',
 triggerRules:row.blocked?[]:[row.trigger!.type==='conditional'?{...row.trigger!,conditions:row.conditions??[]}:row.trigger!],participantRules:{count:row.pair?2:1,conditions:[{type:'school_year',min:1,max:4},...(row.conditions??[]),...(row.trigger?.type==='emergent'?[{type:'source_signal' as const,domainType:row.trigger.domainTypes![0],definitionIds:row.trigger.domainDefinitionIds,outcomes:row.trigger.domainOutcomes,conversationIntents:row.trigger.domainConversationIntents}]:[]),...(row.blocked?[{type:'external' as const,key:row.code,description:row.blocked}]:[])]},
 stages:[{id:'encounter',name:row.interaction?'현장 제안과 응답':'실제 경험 정리',durationMinutes:1,timeoutMinutes:150,entryConditions:[],completionConditions:[],failureConditions:[],effects:[],nextStageIds:[],interactionId:row.interaction}],
 outcomeRules:row.pair?[
  {id:'conflict',name:'갈등이 남은 만남',conditions:[{type:'relationship',metric:'affection',min:-100,max:-1}],weight:1,effects:[]},
  {id:'cooperation',name:'신뢰를 바탕으로 한 만남',conditions:[{type:'relationship',metric:'affection',min:0},{type:'relationship',metric:'trust',min:40}],weight:1,effects:[]},
  {id:'cautious',name:'조심스러운 접점',conditions:[{type:'not',condition:{type:'relationship',metric:'affection',min:-100,max:-1}},{type:'not',condition:{type:'relationship',metric:'trust',min:40}}],weight:1,effects:[]},
 ]:[{id:'recorded',name:'실제 경험을 정리함',conditions:[],weight:1,effects:[]}],followUpRules:[],cooldownMinutes:3*DAY,participantCooldownMinutes:7*DAY,maxOccurrences:60,
 ...(row.code==='TRN-03'?{intent:{activityId:'rest',score:65,target:'home' as const}}:{}),limitations:[...(row.blocked?[row.blocked]:[]),...(row.limitation?[row.limitation]:[]),'이미 발생한 공통 활동의 성장·관계·부상 효과를 다시 적용하지 않는다.'],
}));

/** Cross-links are possibilities conditioned on real cast/history; no extra copy of a personal event. */
export const academyCrossLinks:[string,string[]][]=[
 ['ENS-01',['ACA-01','ACA-03']],['ENS-02',['TRN-01','TRN-05']],['ENS-03',['ACA-06','CLB-03']],['ENS-04',['DOR-01','SOC-04']],['ENS-05',['CLB-04']],['ENS-06',['ACA-05']],['ENS-07',['DOR-03','SOC-05']],['ENS-08',['DOR-04','SOC-04']],['ENS-09',['TRN-02','TRN-05']],['ENS-10',['DOR-01','DOR-05']],['ENS-11',['ACA-04']],['ENS-12',['ACA-02','DOR-02','SOC-02']],
];
export function connectAcademyStoryNetwork(definitions:Def[]){
 for(const [ensemble,codes] of academyCrossLinks){const target=definitions.find(d=>d.id==='personal/'+ensemble.toLowerCase())!;for(const code of codes){const source=definitions.find(d=>d.id===academyStoryId(code))!;source.followUpRules.push({id:'cross/'+ensemble,definitionId:target.id,relation:'enables',conditions:[],probability:1,consequence:{kind:'unlock',delayMinutes:DAY,windowMinutes:30*DAY,retryMinutes:360}});}}
 const exhausted=definitions.find(d=>d.id===academyStoryId('TRN-03'))!;
 exhausted.followUpRules.push({id:'rest-followup',definitionId:'overwork',relation:'continues',conditions:[],probability:1,consequence:{kind:'modify',delayMinutes:60,windowMinutes:DAY,retryMinutes:60,activationConditions:[need(85)],outcomeWeights:{resolved:2,unresolved:1}}});
 const training=definitions.find(d=>d.id===academyStoryId('TRN-04'))!;
 training.followUpRules.push({id:'different-plan',definitionId:training.id,relation:'continues',statuses:['failed','expired'],conditions:[need(75)],probability:1,consequence:{kind:'redirect',redirectDefinitionId:exhausted.id,delayMinutes:60,windowMinutes:DAY,retryMinutes:120}});
 const recovery=definitions.find(d=>d.id===academyStoryId('DOR-04'))!;
 recovery.followUpRules.push({id:'cancel-overwork',definitionId:'overwork',relation:'blocks',outcomeIds:['cooperation'],conditions:[{type:'need',id:'fatigue',min:0,max:50}],probability:1,cancelActive:true});
}
