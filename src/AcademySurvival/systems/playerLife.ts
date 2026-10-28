import {generateStartingCharacter} from './admission';
import {conversationIntents} from '../data/conversations';
import type {ConversationProposal} from '../types/conversation';
import type {WorldSimulation} from './worldSimulation';
import type {PlayerCreation,PlayerLifePolicy} from '../types/player';
import {DEFAULT_PLAYER_POLICY,assertPlayerPolicy} from '../types/player';
import {generateNpcs} from './npcGeneration';
import {npcGenerationContext} from './npcGenerationContext';
import {activityRegistry} from '../data/schedules';
import {describeClaim} from './memoryPresentation';
import {assertAbsoluteMinute} from './calendar';
export function createPlayerCharacter(seed:string,input:PlayerCreation){
 if(!input||typeof input.name!=='string'||!input.name.trim()||input.name.trim().length>24||typeof input.gender!=='string'||input.gender.length>40||!['balanced','combat','social'].includes(input.focus))throw Error('이름1~24자·외형40자 이내·기본 능력 성향을 확인하세요.');
 assertPlayerPolicy(input.policy??DEFAULT_PLAYER_POLICY);
 const result=input.startingProfile?generateStartingCharacter(seed,input.startingProfile,input.worldIdentity):generateNpcs({count:1,worldIdentity:input.worldIdentity??{raceId:'human',originPolityId:'astel_empire'},seed:seed+'/player',academyStudent:true,academyYear:1,growthType:'ordinary',specializationId:'random',impactPreference:input.focus},npcGenerationContext).results[0];
 if(!result.valid)throw Error('공통 캐릭터 생성 검증 실패');
 const c=structuredClone(result.character);c.id='preview-player';c.kind='player';c.name=input.name.trim();c.gender=input.gender||'미설정';c.age=17;c.schoolYear=1;c.summary='왕립 아카데미에서 생활을 시작한 신입 생도.';c.introduction=c.summary;c.background=[];c.objective='나의 아카데미 생활';c.location={characterId:c.id,currentLocationId:'academy-plaza',homeLocationId:'academy-dorm',movement:null};return c;
}
export interface PlayerAction {activityId:string;locationId:string;remaining:number;endsAt:number;entryId:string}
export interface PlayerChoice {id:string;at:number;kind:'request'|'memory'|'danger'|'academic'|'conversation'|'personal_scene'|'growth';message:string;interactionId?:string;conversationId?:string;sceneEventId?:string}
export interface PlayerSummary {from:number;to:number;activities:Record<string,number>;needs:Record<string,number>;stats:Record<string,number>;proficiencies:Record<string,number>;relationships:number;records:number}
export interface PlayerLifeSave {growthNotificationsInitialized?:boolean;version:'player-life-v1';mode:'automatic'|'manual';directControl?:boolean;policy:PlayerLifePolicy;serial:number;action?:PlayerAction;suspended?:PlayerAction;pending:PlayerChoice[];seen:string[];activityMinutes:Record<string,number>;summaries:PlayerSummary[]}
/** Decision adapter only: real execution, rewards, needs and NPCs belong to existing engines. */
export function createPlayerLife(simulation:WorldSimulation,id:string,input?:PlayerLifeSave,policy=DEFAULT_PLAYER_POLICY){
 const {world,schedule,motivation,ai,interactions,knowledge}=simulation.runtime,clock=world.clock,now=clock.getSnapshot;
 const data:PlayerLifeSave=input?structuredClone(input):{version:'player-life-v1',mode:'automatic',policy:structuredClone(policy),serial:0,pending:[],seen:[],activityMinutes:{},summaries:[]};
 if(data.version!=='player-life-v1'||!['automatic','manual'].includes(data.mode)||!Number.isSafeInteger(data.serial)||data.serial<0||!Array.isArray(data.pending)||data.pending.length>32||!Array.isArray(data.seen)||data.seen.length>512||new Set(data.seen).size!==data.seen.length||data.seen.some(id=>typeof id!=='string')||!data.activityMinutes||Object.values(data.activityMinutes).some(n=>!Number.isSafeInteger(n)||n<0)||!Array.isArray(data.summaries)||data.summaries.length>14)throw Error('플레이어 생활 저장 형식 오류');
 const numericRecord=(value:unknown,nonnegative=false)=>!!value&&typeof value==='object'&&!Array.isArray(value)&&Object.values(value).every(n=>Number.isSafeInteger(n)&&(!nonnegative||Number(n)>=0));
 for(const summary of data.summaries){if(!summary||!Number.isSafeInteger(summary.from)||!Number.isSafeInteger(summary.to)||summary.from<0||summary.to<summary.from||summary.to>now()||!numericRecord(summary.activities,true)||Object.keys(summary.activities).some(id=>!activityRegistry.has(id))||!numericRecord(summary.needs)||!numericRecord(summary.stats)||!numericRecord(summary.proficiencies)||![0,1].includes(summary.relationships)||!Number.isSafeInteger(summary.records)||summary.records<0)throw Error('진행 요약 저장 오류');}
 if(new Set(data.pending.map(p=>p.id)).size!==data.pending.length)throw Error('개입 대기 중복');
 assertPlayerPolicy(data.policy);for(const a of [data.action,data.suspended])if(a){assertAbsoluteMinute(a.endsAt);if(!activityRegistry.has(a.activityId)||!world.catalog.nodes.has(a.locationId)||!Number.isSafeInteger(a.remaining)||a.remaining<1||a.remaining>1440||typeof a.entryId!=='string')throw Error('플레이어 행동 저장 오류');}
 if(data.directControl!==undefined&&typeof data.directControl!=='boolean')throw Error('직접 행동 제어 저장 오류');
 for(const p of data.pending){assertAbsoluteMinute(p.at);if(p.at>now()||!['request','memory','danger','academic','conversation','personal_scene','growth'].includes(p.kind)||typeof p.id!=='string'||typeof p.message!=='string'||p.interactionId&&!interactions?.getInstance(p.interactionId))throw Error('개입 대기 저장 오류');}
 const growthKey=(h:{skillId:string;kind:string;at:number;sourceId:string})=>JSON.stringify(['skill',h.skillId,h.kind,h.at,h.sourceId]);
 if(data.growthNotificationsInitialized!==undefined&&typeof data.growthNotificationsInitialized!=='boolean')throw Error('성장 알림 저장 오류');
 if(!data.growthNotificationsInitialized){for(const h of world.getCharacterReadSnapshot(id).skillBook?.history??[])data.seen.push(growthKey(h));data.seen=data.seen.slice(-512);data.growthNotificationsInitialized=true;}
 if(!schedule.hasSchedule(id))throw Error('플레이어 공통 일과표가 필요합니다.');
 ai.setPlayerPolicy(id,data.policy);interactions?.setPlayerDecisionGate(id);
 const applyMode=()=>{const direct=data.mode==='manual'||!!data.directControl;schedule.setPlayerControl(id,direct,data.policy.attendScheduledClasses);if(direct||data.action&&data.action.endsAt>now())ai.pauseCharacter(id);else ai.resumeCharacter(id);};
 for(const p of data.pending)if(p.sceneEventId&&ai.worldEvents?.getPendingPersonalScene(id)?.id!==p.sceneEventId)throw Error('개인 장면 대기 참조 오류');
 const hasDirectWork=()=>!!(data.action&&data.action.endsAt>now()||world.getCharacterReadSnapshot(id).location!.movement||interactions?.getActive(id)||ai.getCombat()?.getActive(id)||data.pending.length);
 const releaseDirectControl=()=>{if(data.directControl&&!hasDirectWork()){data.directControl=false;applyMode();}};
 const beginDirectControl=()=>{data.directControl=true;applyMode();};
 // Restored queues and wake times are authoritative; do not wake on load.
 if(!input)applyMode();
 const mark=(choice:PlayerChoice)=>{if(data.seen.includes(choice.id)||data.pending.some(p=>p.id===choice.id))return;data.seen=[...data.seen,choice.id].slice(-512);if(data.pending.length<32)data.pending.push(choice);};
 const detect=()=>{
  data.pending=data.pending.filter(p=>(!p.conversationId||interactions?.getConversations()?.getPending(id)?.id===p.conversationId)&&(!p.sceneEventId||ai.worldEvents?.getPendingPersonalScene(id)?.id===p.sceneEventId));
  const scene=ai.worldEvents?.getPendingPersonalScene(id);if(scene)mark({id:'personal-scene/'+scene.id,sceneEventId:scene.id,at:now(),kind:'personal_scene',message:'개인 장면의 선택'});
  if(data.action&&data.action.endsAt<=now())data.action=undefined;
  const academic=ai.getAcademics()?.getPendingDecision(id);if(academic)mark({...academic,at:now(),kind:'academic'});
  const conversation=interactions?.getConversations()?.getPending(id);if(conversation)mark({id:'conversation/'+conversation.id,conversationId:conversation.id,at:now(),kind:'conversation',message:world.getCharacterReadSnapshot(conversation.initiatorId===id?conversation.targetId:conversation.initiatorId).name+'와의 중요한 대화/직접 선택'});
  const p=data.policy.interruptionPolicy;
  for(const i of [interactions?.getActive(id)].filter((i):i is NonNullable<typeof i>=>!!i))if(i.targetCharacterId===id&&i.status==='proposed'&&i.definitionId!=='avoid'&&!interactions?.getConversations()?.describe(i).intent){
   // Consent is always explicit, even if optional personal-event notifications are disabled.
   mark({id:i.id,interactionId:i.id,at:now(),kind:'request',message:world.getCharacterReadSnapshot(i.initiatorCharacterId).name+'의 '+i.definitionId+' 요청'});
  }
  for(const m of knowledge?.getCharacterMemories(id)??[]){if(m.isForgotten||data.seen.includes(m.id))continue;const personal=m.subjectCharacterId===id||m.targetCharacterId===id;
   if(m.importance>=p.minimumImportance&&(personal?p.pauseForMajorPersonalEvents:p.pauseForImportantNearbyEvents))mark({id:m.id,at:now(),kind:'memory',message:describeClaim(knowledge!.getMemoryClaim(id,m.id),other=>world.getCharacterReadSnapshot(other).name)});
  }
  if(p.pauseForMajorPersonalEvents){const changes=(world.getCharacterReadSnapshot(id).skillBook?.history??[]).filter(h=>['acquired','evolved'].includes(h.kind)&&!data.seen.includes(growthKey(h)));if(changes.length){for(const h of changes.slice(1))data.seen.push(growthKey(h));mark({id:growthKey(changes[0]),at:now(),kind:'growth',message:changes.map(h=>h.message).join(' · ')});}}
  if(p.pauseForDanger)for(const s of world.getCharacterReadSnapshot(id).statuses)if(['status-fracture','status-exhaustion'].includes(s.definitionId))mark({id:'danger/'+s.definitionId,at:now(),kind:'danger',message:'현재 신체 상태 확인 필요: '+s.definitionId});
  if(data.pending.length)clock.stopAfterBoundary();else releaseDirectControl();
 };
 ai.setPlayerDecisionGate(id,()=>{detect();return !data.pending.length;});
 const stop=clock.subscribeTimeline({id:'player-control',priority:90,nextEventTime:()=>null,beforeStep:(from,to)=>{const a=schedule.getCurrentActivity(id);if(['active','late'].includes(a.status)&&a.activityId&&!world.getCharacterReadSnapshot(id).location!.movement)data.activityMinutes[a.activityId]=(data.activityMinutes[a.activityId]??0)+to-from;},processAt:detect});
 const setMode=(mode:'automatic'|'manual')=>{if(!['automatic','manual'].includes(mode))throw Error('잘못된 제어 모드');data.mode=mode;applyMode();};
 const interrupt=()=>{const active=interactions?.getActive(id);if(active){interactions!.interruptCharacter(id,'플레이어 행동 중단');data.action=undefined;return;}const a=schedule.getCurrentActivity(id);if(data.action&&data.action.endsAt>now()&&activityRegistry.get(data.action.activityId)?.interruptible){data.suspended={...data.action,remaining:Math.min(data.action.remaining,Math.max(1,data.action.endsAt-now()))};}if(a.occurrenceId)schedule.interruptActivity(id);schedule.endAutonomousActivity(id);if(world.getCharacterReadSnapshot(id).location!.movement)world.cancelMovement(id);data.action=undefined;};
 function act(activityId:string,minutes=60,locationId?:string){
  if(data.pending.length)throw Error('대기 중인 사건을 먼저 확인하세요.');if(!Number.isSafeInteger(minutes)||minutes<1||minutes>1440)throw Error('행동 시간은1~1440분입니다.');
  const a=activityRegistry.get(activityId);if(!a||!['rift_observation','combat_recovery','self_study','reading','sword_training','magic_training','rest','sleep','idle_wait','breakfast','lunch','dinner','clean_room','laundry','personal_hygiene','walk_garden','letter_writing','gardening','crafting','cultural_play','student_work'].includes(activityId))throw Error('지원하지 않는 직접 활동');
  const current=schedule.getCurrentActivity(id);if(['active','late'].includes(current.status)&&!activityRegistry.get(current.activityId??'')?.interruptible)throw Error('중단할 수 없는 활동입니다.');
  const c=world.getCharacterReadSnapshot(id),destination=locationId??(activityId==='idle_wait'?c.location!.currentLocationId:activityId==='sleep'?c.location!.homeLocationId:a.defaultLocations[0]);if(!destination)throw Error('활동 목적지 없음');
  const route=world.findRoute(id,destination);if(!route.ok)throw Error(route.reasons.join(' / '));if(!a.requiredPlaceTags.some(t=>world.catalog.getLocation(destination).activityTags.includes(t)))throw Error('장소 용도 불일치');
  beginDirectControl();interrupt();const entryId=`ai/player/${++data.serial}`,endsAt=now()+route.travelMinutes+minutes;assertAbsoluteMinute(endsAt);
  schedule.startAutonomousActivity(id,{characterId:id,entryId,occurrenceId:entryId+'/'+now(),activityId,targetLocationId:destination,plannedStartTime:now(),plannedEndTime:endsAt,priority:100,mandatory:false,interruptible:a.interruptible,temporary:true});const execution=schedule.getCurrentActivity(id);if(execution.status==='failed'){schedule.endAutonomousActivity(id,entryId);throw Error(execution.reason??'활동 실행 실패');}data.action={activityId,entryId,locationId:destination,remaining:minutes,endsAt};return data.action;
 }
 const baseline=()=>({at:now(),activityMinutes:{...data.activityMinutes},needs:motivation.getCharacterNeeds(id).values,stats:world.getCharacter(id).stats,proficiencies:world.getCharacter(id).proficiencyRanks,relations:JSON.stringify(simulation.runtime.graph.getRelationshipsOf(id)),memories:knowledge?.getCharacterMemories(id).length??0});
 const diff=(a:Record<string,number>,b:Record<string,number>)=>Object.fromEntries([...new Set([...Object.keys(a),...Object.keys(b)])].map(k=>[k,(b[k]??0)-(a[k]??0)]).filter(([,n])=>n!==0));
 return {hasPendingChoices:()=>data.pending.length>0,save:()=>structuredClone(data),getState:()=>structuredClone(data),getCurrent:()=>schedule.getCurrentActivity(id),getNeeds:()=>motivation.getCharacterNeeds(id),getGoals:()=>motivation.getCharacterGoals(id),baseline,
  summarize:(before:ReturnType<typeof baseline>)=>{const after=baseline(),summary:PlayerSummary={from:before.at,to:after.at,activities:diff(before.activityMinutes,after.activityMinutes),needs:diff(before.needs,after.needs),stats:diff(before.stats,after.stats),proficiencies:diff(before.proficiencies,after.proficiencies),relationships:before.relations===after.relations?0:1,records:Math.max(0,after.memories-before.memories)};data.summaries=[...data.summaries,summary].slice(-14);return summary;},
  setMode,beginDirectControl,releaseDirectControl,prepareDirectControl:()=>{beginDirectControl();interrupt();},
  useAutomaticDefault:()=>{if(data.mode==='manual'){data.mode='automatic';data.directControl=hasDirectWork();applyMode();}},
  setPolicy:(p:PlayerLifePolicy)=>{assertPlayerPolicy(p);data.policy=structuredClone(p);ai.setPlayerPolicy(id,p);schedule.setPlayerControl(id,data.mode==='manual'||!!data.directControl,p.attendScheduledClasses);},act,interrupt:()=>{interrupt();releaseDirectControl();},
  resume:()=>{const saved=data.suspended;if(!saved)throw Error('재개할 개인 활동이 없습니다.');act(saved.activityId,saved.remaining,saved.locationId);data.suspended=undefined;},
  openPersonalScene:(definitionId:string,ownerId:string)=>{if(data.pending.length)throw Error('먼저 대기 중인 응답을 완료하세요.');if(!ai.worldEvents?.getPersonalOpportunities(ownerId,id).some(d=>d.id===definitionId))throw Error('현재 나눌 수 없는 이야기입니다.');const event=ai.worldEvents.requestEvent(definitionId,{actorId:ownerId,targetId:id});if(!event)throw Error('시간·장소·실제 교류 조건이 달라졌습니다.');detect();},
  choosePersonalScene:(eventId:string,choiceId:string)=>{ai.worldEvents!.choosePersonalScene(eventId,id,choiceId);},
  acknowledgePersonalScene:(eventId:string)=>{ai.worldEvents!.acknowledgePersonalScene(eventId,id);data.pending=data.pending.filter(p=>p.sceneEventId!==eventId);releaseDirectControl();},
  respond:(choiceId:string,answer:'continue'|'stop'|'accept'|'decline')=>{const choice=data.pending.find(p=>p.id===choiceId);if(!choice)throw Error('대기 중인 사건 없음');if(choice.sceneEventId)throw Error('개인 장면의 선택지를 사용하세요.');if(choice.conversationId){interactions!.getConversations()!.choose(id,choice.conversationId,answer==='accept'?'accept':answer==='decline'?'decline':answer==='stop'?'end':'later');}else if(choice.interactionId){if(!['accept','decline'].includes(answer))throw Error('요청 수락 또는 거절을 선택하세요.');interactions!.respondPlayer(choice.interactionId,answer==='accept');}else if(answer==='stop')interrupt();else if(answer!=='continue')throw Error('지원하지 않는 사건 선택');if(answer==='accept'){data.action=undefined;beginDirectControl();}if(choice.kind==='academic')ai.getAcademics()?.acknowledgeDecision(choice.id);data.pending=data.pending.filter(p=>p.id!==choiceId);releaseDirectControl();},
  requestConversation:(target:string,proposal:ConversationProposal)=>{if(data.pending.length)throw Error('사건 응답 대기 중');const api=interactions?.getConversations();if(!api)throw Error('대화 엔진 없음');const check=interactions!.canRequest(id,target,proposal.kind==='information'?proposal.intent:'friendly_chat',undefined,undefined,conversationIntents[proposal.intent].minutes);if(!check.ok)throw Error(check.reasons.join(' · '));beginDirectControl();interrupt();try{return api.request(id,target,proposal,true);}finally{releaseDirectControl();}},
  respondConversation:(conversationId:string,choice:Parameters<NonNullable<ReturnType<NonNullable<typeof interactions>['getConversations']>>['choose']>[2])=>{interactions!.getConversations()!.choose(id,conversationId,choice);if(!['decline','later','end'].includes(typeof choice==='string'?choice:'')){data.action=undefined;beginDirectControl();}data.pending=data.pending.filter(p=>p.conversationId!==conversationId);releaseDirectControl();},
  requestInteraction:(target:string,definitionId:string,information?:{claimId?:string;topicKey?:string})=>{if(data.pending.length)throw Error('사건 응답 대기 중');const check=interactions!.getRequestAvailability(id,target,definitionId);if(!check.ok)throw Error(check.reasons.join(' · '));beginDirectControl();interrupt();try{return interactions!.request(id,target,definitionId,information);}finally{releaseDirectControl();}},
  detect,dispose:()=>{stop();ai.setPlayerDecisionGate(id);},
 };
}
export type PlayerLife=ReturnType<typeof createPlayerLife>;
