import {createRiftCrisisEngine} from './riftCrisis';
import {createAcademyEventEngine} from './academyEvents';
import {createFixedStudents,fixedStudentRelationships} from './fixedStudents';
import {createItemEngine} from './items';
import {createCombatEngine} from './combat';
import {createAcademyGroupEngine} from './academyGroups';
import {createDailyLifeEngine} from './dailyLife';
import {culturalPracticeRegistry,culturalContentRegistry} from '../data/culture';
import type {PlayerLifePolicy} from '../types/player';
import type {Character} from '../types/character';
import {createAiSandbox, createFreshAiSandbox, snapshotAi} from './aiSandbox';
import type {AiSandboxSave} from './aiSandbox';
import type {WorldCommand, WorldCommandRecord, WorldSimulationSave, WorldLog, WorldIssue} from '../types/worldSimulation';
import {assertAbsoluteMinute, DEFAULT_ABSOLUTE_MINUTE} from './calendar';
import {generateNpcs} from './npcGeneration';
import {npcGenerationContext} from './npcGenerationContext';
import {prepareScheduleDemoCharacter} from './scheduleDemo';
import {createInitialLocationCharacters} from './locationInitialState';
import {characterLocationIssues} from './locationWorld';
import {activityRegistry} from '../data/schedules';
import {NEED_IDS} from '../types/motivation';
import type {WorldEventDefinition} from '../types/worldEvent';
import type {ActionOutcome} from '../types/actionEffects';
const textError=(e:unknown)=>e instanceof Error?e.message:String(e);
const countCheck=(n:number)=>{if(!Number.isSafeInteger(n)||n<1||n>100)throw Error('기존 생성기 범위: 한 번에1~100명');};

/** Owns lifecycle and commands, not a second copy of any engine's authoritative state. */
export function createWorldSimulation(options:{initial?:WorldSimulationSave|AiSandboxSave;name?:string;seed?:string;count?:number;absoluteMinute?:number;startLocationId?:string;definitions?:WorldEventDefinition[];playerCharacter?:Character;playerPolicy?:PlayerLifePolicy;enableAcademics?:boolean;enableDailyLife?:boolean;enableGroups?:boolean;enableCombat?:boolean;enableItems?:boolean;enableFixedStudents?:boolean}={}) {
 if(options.initial!==undefined&&(!options.initial||typeof options.initial!=='object'||!['world-simulation-v1','ai-sandbox-v1'].includes(options.initial.version)))throw Error('지원하지 않거나 손상된 세계 저장 버전');
 const saved=options.initial&&options.initial.version==='world-simulation-v1'?structuredClone(options.initial):undefined;
 const initial=saved?.world??(options.initial?.version==='ai-sandbox-v1'?options.initial:undefined);
 const seed=saved?.seed??initial?.ai.seed??options.seed??'world-simulation-v1',name=saved?.name??options.name??'세계 시뮬레이션';
 if(typeof name!=='string'||name.length>80||typeof seed!=='string'||seed.length>200)throw Error('세계 이름·시드 범위 오류');
 if(options.count!==undefined)countCheck(options.count);
 const useFixed=options.enableFixedStudents??false;
 const baseline=useFixed?[createInitialLocationCharacters()[0],...createFixedStudents(seed)]:createInitialLocationCharacters();
 const characters=baseline.map(c=>c.kind==='player'&&options.playerCharacter?structuredClone(options.playerCharacter):c);
 if(options.startLocationId)characters.find(c=>c.kind==='player')!.location!.currentLocationId=options.startLocationId;
 const runtime=initial?createAiSandbox(initial,{enableLod:true,enableWorldEvents:true,enableAcademics:options.enableAcademics,worldEventDefinitions:options.definitions}):createFreshAiSandbox({seed,absoluteMinute:options.absoluteMinute??DEFAULT_ABSOLUTE_MINUTE,characters,includePlayer:!!options.playerCharacter,enableAcademics:options.enableAcademics,enableDailyLife:options.enableDailyLife!==false,enableGroups:options.enableGroups!==false,enableCombat:options.enableCombat!==false,enableItems:options.enableItems!==false,enableEconomy:options.enableItems!==false,enableSkills:true,definitions:options.definitions,relationships:useFixed?fixedStudentRelationships(options.absoluteMinute??DEFAULT_ABSOLUTE_MINUTE):undefined});
 const {world,graph,schedule,motivation,ai,simulation:lod,worldEvents:events,outcomes:effects,interactions,knowledge}=runtime,clock=world.clock;
 let commands:WorldCommandRecord[]=saved?.commands??[],serial=saved?.nextCommandId??0;
 if(!Number.isSafeInteger(serial)||serial<0||commands.length>500||new Set(commands.map(c=>c.id)).size!==commands.length||saved&&saved.seed!==initial!.ai.seed)throw Error('세계 저장 명령·시드 오류');
 for(const r of commands){assertAbsoluteMinute(r.at);const n=Number(r.id.replace('control/',''));if(!Number.isSafeInteger(n)||n<1||n>serial||r.at>clock.getSnapshot()||typeof r.accepted!=='boolean'||typeof r.result!=='string'||!r.command?.type)throw Error('세계 명령 기록 오류');}
 let revision=0,playing=false,advancing=false,disposed=false,failure:string|undefined;
 const listeners=new Set<()=>void>();
 let metrics={calls:0,wallMs:0,worldMinutes:0,lastWallMs:0,lastWorldMinutes:0},recentErrors:{at:number;message:string}[]=[];
 const notify=()=>{revision++;listeners.forEach(fn=>fn());};
 const ensure=()=>{if(disposed)throw Error('폐기된 시뮬레이션');if(advancing)throw Error('시간 처리 중 명령을 중첩할 수 없습니다.');};
 if(options.playerPolicy&&options.playerCharacter)ai.setPlayerPolicy(options.playerCharacter.id,options.playerPolicy);
 const disconnect=runtime.connect();let leases=0;
 const dispose=()=>{if(disposed)return;ai.getRiftCrisis()?.disconnect();ai.getAcademyEvents()?.disconnect();ai.getGroups()?.disconnect();playing=false;disposed=true;disconnect();listeners.clear();};
 const snapshot=():WorldSimulationSave=>{ensure();if(failure)throw Error('오류가 발생한 부분 상태는 정상 스냅샷으로 저장하지 않습니다.');return {version:'world-simulation-v1',name,seed,nextCommandId:serial,commands:structuredClone(commands),world:snapshotAi(ai,graph)};};
 function advance(minutes:number, publish=true){
  ensure();if(failure)throw Error('오류 상태: 스냅샷 복원 또는 초기화가 필요합니다.');if(!Number.isSafeInteger(minutes)||minutes<0)throw Error('현재에서 앞으로 정수 분만 진행할 수 있습니다.');
  assertAbsoluteMinute(clock.getSnapshot()+minutes);const start=clock.getSnapshot(),wall=performance.now();advancing=true;
  try{let left=minutes;do{const step=Math.min(left,31*1440),result=clock.advanceTime(step);if(result.listenerErrors.length)throw Error(result.listenerErrors.map(textError).join(' / '));left-=result.elapsedMinutes;if(result.elapsedMinutes<step)break;}while(left>0);return {from:start,to:clock.getSnapshot(),elapsedMinutes:clock.getSnapshot()-start};}
  catch(e){playing=false;failure=textError(e);recentErrors=[...recentErrors,{at:clock.getSnapshot(),message:failure}].slice(-30);throw e;}
  finally{advancing=false;metrics={calls:metrics.calls+1,wallMs:metrics.wallMs+performance.now()-wall,worldMinutes:metrics.worldMinutes+clock.getSnapshot()-start,lastWallMs:performance.now()-wall,lastWorldMinutes:clock.getSnapshot()-start};if(publish)notify();}
 }
 const spawn=(count:number,generationSeed:string)=>{
  countCheck(count);const batch=generateNpcs({count,seed:generationSeed,academyStudent:true,academyYear:'random',specializationId:'random',growthType:'random'},npcGenerationContext);
  if(batch.results.length!==count||batch.results.some(r=>!r.valid))throw Error('생성 결과 검증 실패');
  const generated=batch.results.map((r,i)=>prepareScheduleDemoCharacter(r.character,(['student','professor','guard','staff','demon-worker'] as const)[i%5]));
  if(generated.some(c=>world.hasCharacter(c.id)))throw Error('이미 존재하는 생성 시드/인물 ID');
  generated.forEach(c=>world.registerCharacter(c));graph.setCharacterIds(world.getCharacters().map(c=>c.id));
  for(const record of batch.relationships.records)graph.createRelationship(record);ai.syncCharacters();ai.getDailyLife()?.syncCharacters();return generated.map(c=>c.id);
 };
 function command(input:WorldCommand):WorldCommandRecord {
  ensure();if(failure)throw Error('오류 상태의 세계를 수정할 수 없습니다.');
  const c=structuredClone(input),id='control/'+(++serial),at=clock.getSnapshot();let accepted=true,result='';
  try{
   if('characterId' in c&&c.characterId)world.getCharacterReadSnapshot(c.characterId);
   switch(c.type){
    case 'play':playing=true;result='재생 시작 · 세계 시간 기준';break;
    case 'pause':playing=false;result='일시정지 · 세계 상태 유지';break;
    case 'time_request':if(!Number.isSafeInteger(c.minutes)||c.minutes<0)throw Error('진행 요청은0이상의 정수 분');assertAbsoluteMinute(at+c.minutes);result=`${c.minutes}분 요청 · 아직 완료되지 않음`;break;
    case 'spawn':result=spawn(c.count,c.seed).join(',');break;
    case 'move':{
     const current=schedule.getCurrentActivity(c.characterId);if(interactions?.getActive(c.characterId)||['active','late'].includes(current.status)&&activityRegistry.get(current.activityId??'')?.interruptible===false)throw Error('공동 활동 또는 중단 불가능한 활동 중입니다.');
     const route=world.requestMovement(c.characterId,c.locationId);if(!route.ok)throw Error(route.reasons.join(' / '));result=`이동 요청 승인 · 도착 ${world.getCharacterReadSnapshot(c.characterId).location!.movement?.arrivalTime??clock.getSnapshot()}`;break;
    }
    case 'force_place':{
     world.catalog.getLocation(c.locationId);interactions?.interruptCharacter(c.characterId,'개발자 강제 배치');const active=schedule.getCurrentActivity(c.characterId);if(active.occurrenceId)schedule.interruptActivity(c.characterId);schedule.endAutonomousActivity(c.characterId);world.forcePlace([c.characterId],c.locationId);result='강제 배치 · 실제 경로 우회 명시';break;
    }
    case 'ai_pause':ai.pauseCharacter(c.characterId);result='AI 판단만 일시정지 · 기존 이동·일과·효과는 계속';break;
    case 'ai_resume':ai.resumeCharacter(c.characterId);result='AI 재개';break;
    case 'ai_evaluate':if(ai.isCharacterPaused(c.characterId))throw Error('먼저 AI를 재개하세요.');ai.requestReevaluation(c.characterId);result='같은 시각의 중앙 처리 순서로 재평가';break;
    case 'activity_interrupt':interactions?.interruptCharacter(c.characterId,'개발자 활동 중단');if(schedule.getCurrentActivity(c.characterId).occurrenceId)schedule.interruptActivity(c.characterId);schedule.endAutonomousActivity(c.characterId);result='현재 활동 중단 요청';break;
    case 'action_select':ai.evaluate(c.characterId,c.candidateId);result='공통 효용·의무·긴급·출입 검사로 행동 선택';break;
    case 'life_activity':{const actor=world.getCharacterReadSnapshot(c.characterId),activity=activityRegistry.get(c.activityId),current=schedule.getCurrentActivity(c.characterId);if(!activity||!Number.isSafeInteger(c.minutes)||c.minutes<1||c.minutes>720)throw Error('활동·수행 시간 범위 오류');if(actor.location!.movement||interactions?.getActive(c.characterId)||['active','late'].includes(current.status)&&activityRegistry.get(current.activityId??'')?.interruptible===false)throw Error('현재 이동·공동 활동·중단 불가 활동을 먼저 마쳐야 합니다.');const destination=c.locationId??(['sleep','rest','clean_room'].includes(c.activityId)?actor.location!.homeLocationId:activity.defaultLocations[0]);if(!destination)throw Error('활동 장소 없음');const route=world.findRoute(c.characterId,destination);if(!route.ok)throw Error(route.reasons.join(' · '));if(!activity.requiredPlaceTags.some(t=>world.catalog.getLocation(destination).activityTags.includes(t)))throw Error('활동 장소 용도 불일치');const end=at+route.travelMinutes+c.minutes;if(end-at>=1440)throw Error('하루 미만의 개발 생활 일정만 지원합니다.');schedule.addTemporarySchedule(c.characterId,{id:'life-command/'+id,name:activity.name,activityId:c.activityId,startMinuteOfDay:at%1440,endMinuteOfDay:end%1440,absoluteDay:Math.floor(at/1440),targetLocationId:destination,priority:90,mandatory:true,interruptible:activity.interruptible,conditions:[]});result='실제 경로·출입·시간을 사용하는 개발 생활 일정 추가';break;}
    case 'residence_initialize':if(ai.getDailyLife())throw Error('이미 생활 엔진이 연결되어 있습니다.');createDailyLifeEngine(ai,graph,{seed}).connect();result='기존 세계에 거주 배정 연결 · 위치 순간이동 없음';break;
    case 'residence_end':if(!ai.getDailyLife())throw Error('생활 엔진 미연결');ai.getDailyLife()!.endResidence(c.characterId);result='퇴실 처리 · 인간관계 보존';break;
    case 'residence_assign':if(!ai.getDailyLife())throw Error('생활 엔진 미연결');result=ai.getDailyLife()!.assignResidence(c.characterId,c.roomId).roomId!;break;
    case 'residence_external':if(!ai.getDailyLife())throw Error('생활 엔진 미연결');result=ai.getDailyLife()!.setExternalResidence(c.characterId,c.locationId).residenceId;break;
    case 'residence_preference':if(!ai.getDailyLife())throw Error('생활 엔진 미연결');ai.getDailyLife()!.setPreference(c.characterId,c.key,c.value);result='생활 선호 변경';break;
    case 'residence_visit':if(!ai.getDailyLife())throw Error('생활 엔진 미연결');ai.getDailyLife()!.grantVisit(c.characterId,c.roomId,c.allow);result='방문 허가 변경 · 08~22시 제한 유지';break;
    case 'rift_initialize':if(ai.getRiftCrisis())throw Error('이미 세계 변화 연결됨');createRiftCrisisEngine(ai,{seed}).connect();result='현재 시점부터 장기 세계 변화 연결';break;
    case 'rift_chronology':if(!ai.getRiftCrisis())throw Error('세계 변화 미연결');ai.getRiftCrisis()!.adoptChronology();result='기존 역사 보존 · 미래 진행에 연대기 정책 적용';break;
    case 'rift_policy':if(!ai.getRiftCrisis())throw Error('세계 변화 미연결');ai.getRiftCrisis()!.setPolicy(c.siteId,c.policy);result='격리 세계 지역 대응 정책 변경';break;
    case 'official_events_initialize':if(ai.getAcademyEvents())throw Error('이미 공식 행사 연결됨');if(!ai.getAcademics()||!ai.getCombat())throw Error('학사·전투 엔진 연결 필요');createAcademyEventEngine(ai,{seed}).connect();result='현재 시점 이후 공식 행사 운영 연결';break;
    case 'items_initialize':if(ai.getItems())throw Error('이미 아이템 연결됨');createItemEngine(ai,{seed,initialize:true}).connect();result='아이템 원장 연결';break;
    case 'item_create':result=JSON.stringify(ai.getItems()!.create(c.definitionId,{kind:'inventory',characterId:c.characterId},c.characterId,c.quantity));break;
    case 'item_equip':ai.getItems()!.equip(c.characterId,c.itemId);result='장비 착용';break;
    case 'item_unequip':ai.getItems()!.unequip(c.characterId,c.itemId);result='장비 해제';break;
    case 'item_use':ai.getItems()!.use(c.characterId,c.itemId);result='아이템 사용';break;
    case 'item_store':ai.getItems()!.store(c.characterId,c.itemId,c.storageId);result='보관';break;
    case 'item_recover':ai.getItems()!.recover(c.characterId,c.itemId);result='현장 회수';break;
    case 'item_discard':ai.getItems()!.discard(c.characterId,c.itemId);result='현장에 내려놓음';break;
    case 'item_appraise':result=ai.getItems()!.appraise(c.characterId,c.itemId).success?'감정 성공':'감정 실패';break;
    case 'item_awaken':ai.getItems()!.awaken(c.characterId,c.itemId);result='봉인 해제';break;
    case 'item_merge':ai.getItems()!.merge(c.characterId,c.itemId,c.targetItemId);result='스택 병합';break;
    case 'item_offer':result=JSON.stringify(ai.getItems()!.propose(c.characterId,c.targetId,c.itemId,c.kind,c.quantity,c.dueAt));break;
    case 'item_respond':result=JSON.stringify(ai.getItems()!.respond(c.characterId,c.offerId,c.accept));break;
    case 'combat_initialize':{if(ai.getCombat())throw Error('이미 전투 연결됨');createCombatEngine(ai,graph,{seed}).connect();result='공통 전투 연결';break;}
    case 'combat_start':{const combat=ai.getCombat();if(!combat)throw Error('전투 미연결');result='개발 전투 시작: '+combat.start(c.request,true).id;break;}
    case 'combat_action':{const combat=ai.getCombat();if(!combat)throw Error('전투 미연결');combat.queueAction(c.battleId,c.characterId,c.choice,true);result='개발 전투 행동 지정';break;}
    case 'combat_interrupt':{ai.getCombat()?.interrupt(c.battleId,c.reason);result='개발 전투 중단';break;}
    case 'group_initialize':{if(ai.getGroups())throw Error('이미 학내 조직 연결됨');createAcademyGroupEngine(ai,graph,{seed}).connect();result='학내 조직 운영 연결';break;}
    case 'group_control':{const groups=ai.getGroups();if(!groups)throw Error('학내 조직 운영 미설정');switch(c.action){case 'select':groups.selectMembers(c.groupId);break;case 'election':groups.announceElection(c.groupId);break;case 'meeting':groups.planMeeting([c.groupId],clock.getSnapshot()+30,clock.getSnapshot()+90);break;case 'advisor':groups.assignAdvisor(c.groupId,c.characterId);break;case 'review':groups.reviewRegistration(c.groupId,c.characterId);break;case 'dissolve':groups.dissolve(c.groupId,c.characterId);break;case 'join':groups.apply(c.characterId,c.groupId);groups.selectMembers(c.groupId);break;case 'leave':groups.withdraw(c.characterId,c.groupId);break;case 'appoint':groups.appoint(c.groupId,c.characterId,'president');break;}result='학내 집단 개입: '+c.action;break;}
    case 'culture_preference':{if(!Number.isInteger(c.value)||c.value< -100||c.value>100||!culturalPracticeRegistry.has(c.preferenceId)&&!culturalContentRegistry.has(c.preferenceId))throw Error('문화 선호 범위·참조 오류');world.updateCharacter(c.characterId,actor=>{if(!actor.culturalProfile)throw Error('개인 문화 미설정');actor.culturalProfile.preferences[c.preferenceId]=c.value;return actor;});ai.requestReevaluation(c.characterId);result='개인 문화 선호 변경';break;}
    case 'need':{const old=motivation.getCharacterNeeds(c.characterId).values[c.needId];motivation.setNeed(c.characterId,c.needId,c.value);ai.requestReevaluation(c.characterId);result=`${c.needId}: ${old} → ${c.value}`;break;}
    case 'goal_add':result=motivation.addGoal(c.characterId,c.definitionId,{targetCharacterId:c.targetCharacterId,targetLocationId:c.targetLocationId,targetOrganizationId:c.targetOrganizationId}).id;break;
    case 'goal_priority':motivation.setGoalPriority(c.characterId,c.goalId,c.value);result='목표 우선순위 변경';break;
    case 'goal_progress':motivation.updateGoalProgress(c.characterId,c.goalId,c.value);result='표시 진행도 변경 · 완료 조건은 별도';break;
    case 'relationship':if(graph.getRelationship(c.characterId,c.targetId))graph.updateRelationship(c.characterId,c.targetId,c.changes);else graph.createRelationship({sourceCharacterId:c.characterId,targetCharacterId:c.targetId,...c.changes});result='방향성 관계 변경 · 역방향 감정 복사 없음';break;
    case 'status_apply':case 'status_remove':{
     if(!effects)throw Error('공통 효과 엔진 없음');
     const outcome:ActionOutcome={id:id+'/outcome',sourceType:'system',sourceId:id,actorCharacterId:c.characterId,occurredAt:at,outcomeType:'developer-control',effects:[c.type==='status_apply'?{id:id+'/status',type:'status_apply',target:'actor',status:c.status}:{id:id+'/status',type:'status_remove',target:'actor',definitionId:c.definitionId}]};
     const applied=effects.applyActionEffects(outcome);if(applied.status==='failed')throw Error(applied.errors.join(' / '));result=applied.status;break;
    }
    case 'conversation':{const dialogue=interactions?.getConversations();if(!dialogue)throw Error('대화 엔진 없음');const row=dialogue.request(c.characterId,c.targetId,c.proposal,c.direct);if(row.status==='rejected')throw Error(row.reason??'대화 거절');result=row.id;break;}
    case 'conversation_choice':{const dialogue=interactions?.getConversations();if(!dialogue)throw Error('대화 엔진 없음');dialogue.choose(c.characterId,c.conversationId,c.choice);result='대화 선택 기록';break;}
    case 'interaction':{if(!interactions)throw Error('상호작용 엔진 없음');const i=interactions.request(c.characterId,c.targetId,c.definitionId);if(['rejected','failed','cancelled'].includes(i.status))throw Error(i.failureReason??i.status);result=i.id;break;}
    case 'event_request':{if(!events)throw Error('사건 엔진 없음');const e=c.bypassTrigger?events.requestEvent(c.definitionId,{actorId:c.characterId,targetId:c.targetId}):null;if(c.bypassTrigger){if(!e)throw Error('참여·출입·쿨다운 조건 미충족');result=e.id+' · 트리거만 개발자 우회';}else result=JSON.stringify(events.evaluateOpportunity(c.definitionId));break;}
    case 'event_cancel':if(!events)throw Error('사건 엔진 없음');events.cancel(c.eventId,c.reason);result='사건 취소';break;
    case 'event_fail':if(!events)throw Error('사건 엔진 없음');events.interrupt(c.eventId,c.reason);result='사건 실패/중단';break;
    case 'lod':lod!.forceTier(c.characterId,c.tier);result='안전 정밀도 명령';break;
    case 'region':lod!.setRegionActive(c.regionId,c.active);result='지역 활성 정책 변경';break;
    case 'lod_enabled':lod!.setEnabled(c.enabled);result=c.enabled?'LOD 활성':'전체 정밀';break;
    case 'importance':lod!.promote(c.characterId,'critical');result='주요 인물 보존';break;
    case 'population':lod!.definePopulation(c.locationId,c.total);result='인구 집계 · 개별 NPC 생성 없음';break;
    case 'resident':{
     result=lod!.materializeResident(c.regionId,c.slot,(residentSeed,residentId)=>{const generated=generateNpcs({count:1,seed:residentSeed,academyStudent:false,academyYear:'random',specializationId:'random',growthType:'random'},npcGenerationContext).results[0];if(!generated?.valid)throw Error('주민 생성 실패');return {...generated.character,id:residentId,kind:'random_npc',schoolYear:0,classId:undefined,positions:[],primaryPositionId:undefined,affiliations:[],primaryOrganizationId:undefined,location:{characterId:residentId,currentLocationId:c.regionId,homeLocationId:c.regionId,movement:null}};}).id;break;
    }
    default:throw Error('지원하지 않는 명령');
   }
  }catch(e){accepted=false;result=textError(e);}
  const record={id,at,command:c,accepted,result};commands=[...commands,record].slice(-500);
  // Complete same-minute deferred work in the existing stage order, never advance a second clock.
  if(accepted&&!['play','pause','time_request'].includes(c.type))advance(0,false);notify();return structuredClone(record);
 }
 function getLogs(filter:{characterId?:string;locationId?:string;category?:string;important?:boolean;from?:number;to?:number;eventId?:string;limit?:number}={}):WorldLog[]{
  const rows:WorldLog[]=[];
  recentErrors.forEach((e,i)=>rows.push({id:'system/'+e.at+'/'+i,at:e.at,category:'system',message:e.message,characterIds:[],important:true}));
  for(const b of ai.getCombat()?.getBattles()??[])rows.push({id:b.id,at:b.endedAt??b.startedAt,category:'combat',message:(b.mode==='sparring'?'대련':'실전')+' · '+b.round+'라운드 · '+(b.outcome??'진행 중'),characterIds:b.fighters.map(f=>f.characterId),locationId:b.locationId,important:b.important||b.mode==='real'});
  for(const l of ai.getGroups()?.getLogs()??[])rows.push({id:l.id,at:l.at,category:'academy-group',message:l.message,characterIds:l.characterIds,locationId:l.locationId,important:['election','inaugurated','dissolved','registered'].includes(l.kind)});
  for(const l of world.getLogs())if(l.type!=='time')rows.push({id:'move/'+l.id,at:l.at,category:'movement',message:l.message,locationId:l.locationId,characterIds:l.characterId?[l.characterId]:[],important:['denied','failure','cancel'].includes(l.type)});
  for(const l of schedule.getLogs())rows.push({id:'activity/'+l.id,at:l.at,category:'activity',message:l.message,locationId:l.locationId,characterIds:l.characterId?[l.characterId]:[],important:l.important});
  for(const e of effects?.getEvents()??[]){const category=e.type.startsWith('Interaction')?'interaction':e.type==='RelationshipChanged'?'relationship':e.type==='StatChanged'||e.type==='ProficiencyChanged'?'growth':e.type.startsWith('Status')?'status':e.type.startsWith('World')?'event':'outcome';rows.push({id:'domain/'+e.id,at:e.occurredAt,category,message:e.type+' · '+JSON.stringify(e.details),characterIds:[e.actorCharacterId,e.targetCharacterId].filter((x):x is string=>!!x),locationId:e.locationId,eventId:e.details.worldEventId,important:!e.type.startsWith('Activity')});}
  for(const e of events?.getInstances(true)??[])for(const [i,h] of e.history.entries())rows.push({id:`event/${e.id}/${i}`,at:h.at,category:'event',message:`${e.definitionId}: ${h.status} · ${h.reason}`,characterIds:e.participantCharacterIds,locationId:e.locationId,eventId:e.id,important:true});
  for(const l of knowledge?.getDeliveries()??[])rows.push({id:'information/'+l.id,at:l.at,category:'information',message:l.status+' · '+l.reason,characterIds:[l.sourceId,l.targetId],important:l.distorted});
  if(filter.characterId)for(const m of knowledge?.getCharacterMemories(filter.characterId)??[])rows.push({id:'memory/'+m.id,at:m.createdAt,category:'memory',message:m.source+' · '+m.category+' · 확신 '+m.confidence,characterIds:[m.ownerCharacterId],locationId:m.relatedLocationId,important:m.importance>=75});
  return rows.filter(l=>(!filter.characterId||l.characterIds.includes(filter.characterId))&&(!filter.locationId||l.locationId===filter.locationId)&&(!filter.category||filter.category==='all'||l.category===filter.category)&&(!filter.important||l.important)&&(filter.from===undefined||l.at>=filter.from)&&(filter.to===undefined||l.at<=filter.to)&&(!filter.eventId||l.eventId===filter.eventId)).sort((a,b)=>a.at-b.at||a.id.localeCompare(b.id)).slice(-Math.min(500,Math.max(1,filter.limit??100)));
 }
 function diagnose():WorldIssue[]{
  const issues:WorldIssue[]=[],data=snapshotAi(ai,graph),ids=new Set(data.world.characters.map(c=>c.id));
  for(const c of data.world.characters){for(const message of characterLocationIssues(c,world.catalog))issues.push({severity:'error',code:'location',message,entityId:c.id});const active=schedule.getCurrentActivity(c.id);if(c.location!.movement&&['active','late'].includes(active.status))issues.push({severity:'error',code:'activity-location',entityId:c.id,message:'이동 중 정지 활동 수행'});}
  const held=new Set<string>();for(const i of interactions?.getInstances()??[])if(i.status==='active')for(const id of [i.initiatorCharacterId,...i.definitionId==='avoid'?[]:[i.targetCharacterId]]){const c=world.getCharacterReadSnapshot(id);if(held.has(id)||c.location!.movement||c.location!.currentLocationId!==i.locationId)issues.push({severity:'error',code:'joint-conflict',entityId:id,message:'공동 활동 중복 또는 실제 위치 불일치'});held.add(id);}
  for(const message of events?.getDiagnostics()??[])issues.push({severity:'error',code:'event-graph',message});
  for(const c of commands)if('characterId' in c.command&&c.command.characterId&&!ids.has(c.command.characterId))issues.push({severity:'warning',code:'historical-command-reference',entityId:c.id,message:'과거 명령의 대상이 현재 세계에 없음'});
  try{createAiSandbox(data,{enableLod:true,worldEventDefinitions:events?[...events.definitions.values()]:undefined});clock.getTimelineInfo();}catch(e){issues.push({severity:'error',code:'snapshot-contract',message:textError(e)});}
  if(!issues.length)issues.push({severity:'info',code:'valid',message:'저장 참조·수치·예약·활동·인과관계 계약 검사 통과'});return issues.slice(0,100);
 }
 const statistics=()=>{
  const chars=world.getCharacters().filter(c=>c.kind!=='player'),states=chars.map(c=>motivation.getCharacterState(c.id)),activityMinutes:Record<string,number>={};
  for(const s of states)for(const [id,n] of Object.entries(s.evidence.activityMinutes))activityMinutes[id]=(activityMinutes[id]??0)+n;
  const retained=events?.getInstances(true)??[];
  return {time:clock.getSnapshot(),npcs:chars.length,schedules:schedule.getStatistics(),ai:ai.getStatistics(),interactions:interactions?.getStatistics(),events:events?.getStatistics(),eventsToday:retained.filter(e=>e.occurredAt!==undefined&&Math.floor(e.occurredAt/1440)===Math.floor(clock.getSnapshot()/1440)).length,memory:knowledge?.getStatistics(),effects:effects?.getStatistics(),activityMinutes,averageNeeds:Object.fromEntries(NEED_IDS.map(id=>[id,states.length?Math.round(states.reduce((n,s)=>n+s.needs.values[id],0)/states.length):0])),goalsCompleted:states.flatMap(s=>s.goals).filter(g=>g.status==='completed').length,metrics:{...metrics},timeline:clock.getTimelineDiagnostics(),nextStages:clock.getTimelineInfo(),errors:structuredClone(recentErrors),lod:lod?.getStatistics()};
 };
 if(!initial&&options.count){const needed=Math.max(0,options.count-world.getCharacters().filter(c=>c.kind!=='player').length);if(needed)command({type:'spawn',count:needed,seed:seed+'/initial'});}
 return {name,seed,runtime,advance,advanceTo:(at:number,publish=true)=>{assertAbsoluteMinute(at);if(at<clock.getSnapshot())throw Error('과거 이동은 스냅샷 복원으로 수행하세요.');return advance(at-clock.getSnapshot(),publish);},advanceToNext:()=>{const next=Math.min(...clock.getTimelineInfo().flatMap(r=>r.at===null?[]:[r.at]));if(!Number.isFinite(next))throw Error('예약 작업 없음');return advance(next-clock.getSnapshot());},
  pause:()=>{playing=false;notify();},resume:()=>{ensure();if(failure)throw Error(failure);playing=true;notify();},isPlaying:()=>playing,getFailure:()=>failure,
  command,snapshot,getLogs,diagnose,getStatistics:statistics,getCommands:()=>structuredClone(commands),publish:notify,
  finishTimeRequest:(id:string)=>{const row=commands.find(c=>c.id===id);if(!row||!row.accepted||row.command.type!=='time_request')throw Error('진행 요청 기록 없음');row.result=`요청 ${row.command.minutes}분 / 실제 ${clock.getSnapshot()-row.at}분 진행`;notify();},
  subscribe:(fn:()=>void)=>{listeners.add(fn);return()=>{listeners.delete(fn);};},getSnapshot:()=>revision,
  retain:()=>{ensure();leases++;return()=>{leases--;queueMicrotask(()=>{if(leases===0)dispose();});};},dispose,
 };
}
export type WorldSimulation=ReturnType<typeof createWorldSimulation>;
