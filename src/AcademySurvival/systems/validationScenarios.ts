import {createPlayerCharacter,createPlayerLife} from './playerLife';
import {createWorldSimulation} from './worldSimulation';
import {checkWorldInvariants,canonicalWorldState,firstWorldDifference} from './worldInvariants';
import type {ScenarioResult,ValidationIssue} from '../types/validation';
import type {WorldSimulationSave} from '../types/worldSimulation';
import {DEFAULT_ABSOLUTE_MINUTE} from './calendar';

export const validationScenarios=[
 ...['social-commitment','academy-registration','academy-exam','player-autolife','world-clock-basic','world-schedule','npc-movement','npc-activity','npc-needs','npc-ai','npc-interaction','relationship','memory-information','world-events','causal-events','academy-class','npc-conversation','save-load','step-vs-jump','academy-day','large-integration'].map(id=>({id,available:true,reason:''})),
 ...[['culture-activity','문화 생활 실행 엔진 미구현']].map(([id,reason])=>({id,available:false,reason})),
];
export function runValidationScenario(id:string,{seed='validation-v1',count=5,minutes=60}:{seed?:string;count?:number;minutes?:number}={}):{result:ScenarioResult;snapshot?:WorldSimulationSave}{
 const definition=validationScenarios.find(s=>s.id===id);if(!definition)throw Error('알 수 없는 시나리오: '+id);
 if(!Number.isSafeInteger(count)||count<1||count>100||!Number.isSafeInteger(minutes)||minutes<1)throw Error('시나리오 수량·기간 범위 오류');
 if(id==='academy-day')minutes=1440;
 const result:ScenarioResult={id,seed,status:definition.available?'passed':'not_available',npcCount:count,durationMinutes:minutes,issues:[],reproduction:{scenario:id,seed,count,minutes}};
 if(!definition.available){result.issues.push({code:'NOT_AVAILABLE',severity:'info',message:definition.reason,worldTime:0});return {result};}
 // Social completion fixtures run at19:00; mandatory08:30 classes correctly interrupt08:01 chat.
 const social=['social-commitment','npc-interaction','npc-conversation','memory-information'].includes(id);
 const created:ReturnType<typeof createWorldSimulation>[]=[],create=()=>{const s=createWorldSimulation({seed,count,enableAcademics:['academy-registration','academy-exam'].includes(id),playerCharacter:['player-autolife','academy-registration','academy-exam'].includes(id)?createPlayerCharacter(seed,{name:'검증 생도',gender:'미설정',focus:'balanced'}):undefined,absoluteMinute:DEFAULT_ABSOLUTE_MINUTE+(social?11*60:0)});created.push(s);return s;},s=create(),r=s.runtime,start=r.world.clock.getSnapshot();let snapshot:WorldSimulationSave|undefined;
 const expect=(ok:unknown,code:string,message:string,extra:Partial<ValidationIssue>={})=>{if(!ok){result.issues.push({code,severity:'error',message,worldTime:r.world.clock.getSnapshot(),...extra});throw Error(message);}};
 const ids=r.world.getCharacters().filter(c=>c.kind!=='player').map(c=>c.id),a=ids[0],b=ids[1];
 const prepare=(who:string,activityId='idle_wait',place='academy-plaza')=>{
  s.command({type:'ai_pause',characterId:who});s.command({type:'force_place',characterId:who,locationId:place});
  for(const needId of ['hunger','fatigue','sleepiness','safety'] as const)s.command({type:'need',characterId:who,needId,value:5});
  const entryId='validation/'+who;r.schedule.startAutonomousActivity(who,{characterId:who,entryId,occurrenceId:entryId,activityId,targetLocationId:place,priority:100,mandatory:false,interruptible:true,plannedStartTime:start,plannedEndTime:start+Math.max(minutes,120),temporary:true});
 };
 const compare=(left:WorldSimulationSave,right:WorldSimulationSave)=>{const diff=firstWorldDifference(canonicalWorldState(left),canonicalWorldState(right));expect(!diff,'STATE_MISMATCH','논리 상태 불일치',diff?{path:diff.path,expected:diff.expected,actual:diff.actual}:{});};
 try{
  if(id==='academy-registration'||id==='academy-exam'){const academic=r.ai.getAcademics()!;if(!academic.getState().sections.length){const teacher=r.world.getCharacters().find(c=>academic.roles(c).includes('professor'));expect(teacher,'ACADEMIC_FACULTY','학사 검증에는 교수1명 이상 필요');r.world.updateCharacter(teacher!.id,c=>({...c,proficiencyRanks:{...c.proficiencyRanks,'proficiency-history':3}}));}academic.admin({type:'registration_open'});academic.closeRegistration();const lecture=academic.getState().sections.find(s=>s.enrolled.length&&s.weekday===0);expect(lecture,'ACADEMIC_OFFERING','실제 개설·선발 강의가 없음');expect(academic.getState().sections.every(s=>s.enrolled.length<=s.capacity),'ACADEMIC_CAPACITY','정원 초과');if(id==='academy-exam'){s.advance(lecture!.start-r.world.clock.getSnapshot()%1440);academic.admin({type:'assessment',sectionId:lecture!.id,examKind:'midterm'});s.advance(lecture!.end-lecture!.start);expect(academic.getState().exams.some(e=>e.sectionId===lecture!.id&&e.participated),'ACADEMIC_EXAM','실제 참여 시험 결과 없음');}}
  else if(id==='player-autolife'){const player=r.world.getCharacters().find(c=>c.kind==='player')!,life=createPlayerLife(s,player.id);try{life.act('self_study',20);s.advance(25);expect(r.world.getCharacterReadSnapshot(player.id).location!.currentLocationId==='academy-library','PLAYER_ROUTE','플레이어 실제 학습 이동 실패');expect((life.getState().activityMinutes.self_study??0)>0,'PLAYER_ACTIVITY','실제 활동 구간 누락');life.setMode('automatic');s.advance(10);expect(r.ai.hasCharacter(player.id),'PLAYER_CONTROL','공통 AI 제어 미연결');}finally{life.dispose();}}
  else if(id==='step-vs-jump'){const other=create();s.advance(minutes);for(let n=0;n<minutes;n++)other.advance(1,false);compare(s.snapshot(),other.snapshot());}
  else if(id==='save-load'){const other=create(),split=Math.floor(minutes/2);s.advance(minutes);other.advance(split);const restored=createWorldSimulation({initial:JSON.parse(JSON.stringify(other.snapshot()))});created.push(restored);restored.advance(minutes-split);compare(s.snapshot(),restored.snapshot());}
  else if(id==='npc-movement'){
   const player=r.world.getCharacters().find(c=>c.kind==='player')!.id;
   expect(s.command({type:'force_place',characterId:player,locationId:'academy-plaza'}).accepted,'PLACEMENT','명시적 테스트 배치 실패');
   expect(s.command({type:'move',characterId:player,locationId:'academy-arena'}).accepted,'MOVE_REQUEST','실제 이동 요청 실패');
   expect(!r.world.getCharacterIdsAtLocation('academy-plaza').includes(player),'MOVING_POPULATION','이동 중 정지 인원');s.advance(minutes);
   expect(r.world.getCharacterLocation(player).currentLocationId==='academy-arena','MOVE_ARRIVAL','목적지 미도착',{characterIds:[player]});
  }else if(id==='npc-needs'){
   prepare(a,'breakfast','academy-dining');r.motivation.setNeed(a,'hunger',80);s.advance(Math.min(minutes,20));expect(r.motivation.getCharacterNeeds(a).values.hunger<80,'MEAL_EFFECT','실제 식사 구간의 허기 감소 없음',{characterIds:[a]});
  }else if(id==='social-commitment'){
   expect(b,'SCENARIO_SIZE','약속에는2명 이상 필요');prepare(a);prepare(b);for(const [characterId,targetId] of [[a,b],[b,a]])s.command({type:'relationship',characterId,targetId,changes:{affection:100,trust:100,intimacy:70}});const dialogue=r.interactions!.getConversations()!;const row=dialogue.request(a,b,{kind:'meeting',intent:'propose_commitment',meetingKind:'study',locationId:'academy-library',scheduledAt:start+60,duration:60});s.advance(6);expect(dialogue.getRecords(a).some(r=>r.id===row.id&&r.status==='completed'),'DISCUSSION_COMPLETION','실제 약속 제안 대화 미완료');const meeting=dialogue.getCommitments(a)[0];expect(meeting,'MEETING_SCHEDULE','실제 수락 약속이 등록되지 않음');for(const id of [a,b])r.schedule.endAutonomousActivity(id);s.advance(130);expect(['completed','missed'].includes(dialogue.getCommitments(a)[0].status),'MEETING_EXECUTION','실제 약속 이행/불이행 판정 누락');
  }else if(['npc-interaction','npc-conversation','memory-information'].includes(id)){
   expect(b,'SCENARIO_SIZE','사회 시나리오에는 NPC2명 이상 필요');prepare(a);prepare(b);
   for(const [characterId,targetId] of [[a,b],[b,a]])s.command({type:'relationship',characterId,targetId,changes:{affection:100,trust:100,intimacy:70}});
   const i=r.interactions!.request(a,b,'friendly_chat',{conversation:{kind:'general',intent:'encourage'}});s.advance(1);const accepted=r.interactions!.getInstance(i.id);
   expect(accepted.status==='active','SOCIAL_ACCEPTANCE','준비한 대화가 거절됨 · 같은 시드로 재현 가능',{characterIds:[a,b],actual:accepted});
   s.advance(Math.max(1,(accepted.expectedEndAt??start+30)-r.world.clock.getSnapshot()));expect(r.interactions!.getInstance(i.id).status==='completed','SOCIAL_COMPLETION','공동 대화 미완료',{actual:r.interactions!.getInstance(i.id)});
   expect(r.knowledge!.getCharacterMemories(a).some(m=>m.category==='interaction'),'MEMORY_GENERATION','완료 대화의 직접 기억 없음');
   // Actual source-bearing information dialogue, never direct global distribution.
   if(id==='memory-information'){s.advance(20);const delivery=r.interactions!.request(a,b,'share_information');s.advance(31);expect(['completed','rejected'].includes(r.interactions!.getInstance(delivery.id).status),'INFORMATION_TRANSITION','정보 대화 전이 오류');}
  }else if(id==='relationship'){
   expect(b,'SCENARIO_SIZE','관계에는 NPC2명 이상 필요');const before=r.graph.getRelationship(b,a)?.trust;
   expect(s.command({type:'relationship',characterId:a,targetId:b,changes:{trust:73}}).accepted,'RELATION_UPDATE','방향성 관계 변경 실패');expect(r.graph.getRelationship(a,b)?.trust===73&&r.graph.getRelationship(b,a)?.trust===before,'RELATION_DIRECTION','역방향 감정 자동 복사');
  }else if(['world-events','causal-events'].includes(id)){
   prepare(a);if(b)prepare(b);const cause=r.worldEvents!.requestEvent(id==='causal-events'?'rival-challenge':'lost-property',{actorId:a,targetId:b});expect(cause,'EVENT_START','실제 카탈로그 사건 생성 실패');s.advance(12);
   expect(r.worldEvents!.getInstance(cause!.id).status==='completed','EVENT_COMPLETION','다단계 사건 미완료');
   if(id==='causal-events')expect(r.worldEvents!.getRelations().some(e=>e.sourceEventId===cause!.id&&e.type==='enables'),'CAUSAL_LINK','후속 사건 인과관계 없음');
  }else{
   s.advance(id==='academy-day'?1440:minutes);expect(r.world.clock.getSnapshot()===start+(id==='academy-day'?1440:minutes),'CLOCK_ELAPSED','전역 시간 중복/누락');
   if(id==='npc-ai')expect(r.ai.getStatistics().decisions>0,'AI_DECISIONS','AI 판단 없음');
   if(['academy-day','academy-class','world-schedule'].includes(id))expect(r.schedule.getStatistics().processedEvents>0,'SCHEDULE_EVENTS','일과 예약 처리 없음');
  }
  snapshot=s.snapshot();result.issues.push(...checkWorldInvariants(snapshot,start));
 }catch(error){if(!result.issues.some(i=>['error','critical'].includes(i.severity)))result.issues.push({code:'SCENARIO_EXCEPTION',severity:'error',message:error instanceof Error?error.message:String(error),worldTime:r.world.clock.getSnapshot()});try{snapshot=s.snapshot();}catch{/* A failed partial world is not a valid replay save. */}}
 const stats=s.getStatistics();result.durationMinutes=r.world.clock.getSnapshot()-start;
 result.status=result.issues.some(i=>['critical','error'].includes(i.severity))?'failed':'passed';
 result.metrics={worldMinutes:result.durationMinutes,npcs:stats.npcs,decisions:stats.ai.decisions,events:stats.events?.created??0,interactions:stats.interactions?.requests??0,memories:stats.memory?.memories??0,relationshipChanges:stats.effects?.relationshipChanges??0,stageCalls:stats.timeline.stageCalls,logs:s.getLogs({limit:500}).length,saveCharacters:snapshot?JSON.stringify(snapshot).length:0};
 if(result.status==='failed'&&snapshot)result.failureSnapshot=snapshot;
 created.forEach(c=>c.dispose());return {result,snapshot};
}
