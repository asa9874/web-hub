import type {PlaySession} from './playSession';
import type {CombatStart} from '../types/combat';
import type {ConversationProposal} from '../types/conversation';
import {interactions as definitions} from '../data/interactions';
import {conversationIntents,meetingKinds} from '../data/conversations';
import {culturalPracticeRegistry} from '../data/culture';
import {formatGameTime} from './calendar';

export const NPC_ACTION_GROUPS={items:'물건·선물·대여',conversation:'대화·교류',cooperation:'함께 하는 활동',combat:'대련·전투',information:'정보·소문',culture:'문화 교류',appointments:'만남·약속',conflict:'갈등·거리 두기'} as const;
export type NpcActionGroup=keyof typeof NPC_ACTION_GROUPS;
export type NpcActionCommand={kind:'item';itemId:string;offerKind:'gift'|'transfer'|'loan'|'return';quantity:number}|{kind:'interaction';definitionId:string;information?:{claimId?:string;topicKey?:string}}|{kind:'conversation';proposal:ConversationProposal}|{kind:'combat';request:CombatStart};
export interface NpcAction {id:string;name:string;description:string;group:NpcActionGroup;minutes?:number;quick:boolean;dangerous:boolean;available:boolean;reasons:string[];command:NpcActionCommand}
const quickIds=new Set(['casual_chat','study_together','train_together','meal_together','sparring']);
export function isNearbyNpc(session:PlaySession,targetId:string){const world=session.world.runtime.world;if(targetId===session.playerId||!world.hasCharacter(targetId))return false;const a=world.getCharacterReadSnapshot(session.playerId),b=world.getCharacterReadSnapshot(targetId);return !a.location!.movement&&!b.location!.movement&&a.location!.currentLocationId===b.location!.currentLocationId;}
/** Read-only player action menu. New ordinary interaction definitions appear without a new UI button implementation. */
export function getNpcActions(session:PlaySession,targetId:string):NpcAction[]{
 if(!isNearbyNpc(session,targetId))return [];
 const {interactions,ai,knowledge}=session.world.runtime,actor=session.playerId,common=[...(!session.life?['새 생활 세션에서 사용할 수 있습니다.']:[]),...(session.isAdvancing()?['시간 진행 중입니다.']:[]),...(session.life?.getState().pending.length?['먼저 대기 중인 제안에 응답하세요.']:[])],rows:NpcAction[]=[],known=knowledge?.getKnownClaims(actor)??[],combat=ai.getCombat();
 const add=(row:Omit<NpcAction,'available'>)=>{const reasons=[...new Set([...common,...row.reasons])];rows.push({...row,reasons,available:!reasons.length});};
 if(interactions)for(const d of definitions){
  const reasons=[...interactions.getRequestAvailability(actor,targetId,d.id).reasons];let information:{claimId?:string}|undefined;
  if(d.id==='sparring'&&!combat)reasons.push('나의 상태에서 전투 시스템을 연결하세요.');
  if(d.outcomeResolver==='information'){
   if(!knowledge)reasons.push('정보 시스템이 연결되지 않았습니다.');
   else if(!['ask_information','verify_information'].includes(d.id)){const candidates=known.filter(r=>d.id==='share_secret'?r.claim.visibility!=='public':r.claim.visibility==='public').sort((a,b)=>b.memory.importance-a.memory.importance||a.claim.id.localeCompare(b.claim.id)),selected=candidates.find(r=>knowledge.evaluateInformationSharing(actor,targetId,r.claim.id).allowed);if(!selected)reasons.push('현재 공유할 수 있는 보유 정보가 없습니다.');else information={claimId:selected.claim.id};}
  }
  const group:NpcActionGroup=d.outcomeResolver==='information'?'information':({social:'conversation',cooperation:'cooperation',competition:'combat',conflict:'conflict'} as const)[d.category];
  add({id:'interaction/'+d.id,name:d.id==='avoid'?'상대 피하기':d.name+' 요청',description:d.description,group,minutes:d.baseDurationMinutes,quick:quickIds.has(d.id),dangerous:d.negative,reasons,command:{kind:'interaction',definitionId:d.id,information}});
 }
 const request:CombatStart={mode:'real',teams:[[actor],[targetId]],reason:'플레이어가 인물 상세에서 명시적으로 실전 공격을 선택',manualIds:[actor],important:true,detailed:true};
 add({id:'combat/attack',name:'실전 공격',description:'상대의 동의 없이 실전 전투를 시작합니다. 실제 체력이 손상됩니다.',group:'combat',quick:true,dangerous:true,reasons:combat?combat.getStartAvailability(request).reasons:['나의 상태에서 전투 시스템을 연결하세요.'],command:{kind:'combat',request}});
 const conversation=interactions?.getConversations();
 if(conversation)for(const p of conversation.options(actor,targetId)){
  const d=conversationIntents[p.intent],group:NpcActionGroup=p.kind==='culture'?'culture':p.kind==='information'?'information':p.kind==='meeting'||p.kind==='meeting_response'?'appointments':'conversation',name=p.kind==='culture'?(culturalPracticeRegistry.get(p.practiceId)?.name??'문화')+' · '+d.name:p.kind==='meeting'?meetingKinds[p.meetingKind].name+' 약속 제안':d.name+(p.kind==='academic'?' · 공동 수업':p.kind==='memory'?' · 기억하는 사건':p.kind==='information'?' · 보유 정보':''),reasons=interactions!.getRequestAvailability(actor,targetId,p.kind==='information'?p.intent:'friendly_chat',d.minutes).reasons;
  add({id:'conversation/'+JSON.stringify(p),name,description:d.line+(p.kind==='meeting'?' · '+formatGameTime(p.scheduledAt)+' · '+session.world.runtime.world.catalog.getLocation(p.locationId).name:''),group,minutes:d.minutes,quick:false,dangerous:false,reasons,command:{kind:'conversation',proposal:p}});
 }
 const possessions=ai.getItems();if(possessions)for(const i of possessions.getInventory(actor).filter(i=>i.location.kind==='inventory')){const loan=possessions.getLoans().find(l=>l.itemId===i.id&&l.returnedAt===undefined);const kinds=loan?(loan.ownerId===targetId?['return'] as const:[]):['gift','transfer','loan'] as const;for(const kind of kinds){const info=possessions.getView(actor,i.id),name=info.name+' · '+({gift:'선물 제안',transfer:'양도 제안',loan:'하루 대여 제안',return:'반환'})[kind];add({id:'item/'+kind+'/'+i.id,name,description:kind==='loan'?'원소유권은 유지하고 스택 전체를 하루 동안 빌려줍니다.':'소유·실제 만남·수신자의 동의 확인 후 처리합니다.',group:'items',quick:false,dangerous:false,reasons:[],command:{kind:'item',itemId:i.id,offerKind:kind,quantity:kind==='loan'||kind==='return'?i.quantity:1}});}}
 return rows.sort((a,b)=>Number(b.available)-Number(a.available)||Number(b.quick)-Number(a.quick)||a.name.localeCompare(b.name,'ko')||a.id.localeCompare(b.id));
}
/** Re-resolve the menu at execution: an old dialog cannot act on someone who moved away. */
export async function executeNpcAction(session:PlaySession,targetId:string,actionId:string,onAccepted?:()=>void){
 const action=getNpcActions(session,targetId).find(row=>row.id===actionId);if(!action)throw Error('지금 같은 장소에 있는 인물의 현재 행동만 선택할 수 있습니다.');if(!action.available)throw Error(action.reasons.join(' · '));
 const command=action.command;
 session.playerCommand(l=>{if(command.kind==='interaction'){const result=l.requestInteraction(targetId,command.definitionId,command.information);if(result.status==='rejected')throw Error(result.failureReason??'요청이 거절되었습니다.');}else if(command.kind==='conversation'){const result=l.requestConversation(targetId,command.proposal);if(result.status==='rejected')throw Error(result.reason??'대화 요청이 거절되었습니다.');}else if(command.kind==='item')session.world.runtime.ai.getItems()!.propose(session.playerId,targetId,command.itemId,command.offerKind,command.quantity,command.offerKind==='loan'?session.getView().now+1440:undefined);else{l.beginDirectControl();session.world.runtime.ai.getCombat()!.start(command.request);}});
 onAccepted?.();
 if(command.kind==='item'){await session.advance(1);session.finishDirect();return;}
 if(command.kind==='combat'){if(session.getCombatMode()==='automatic')await session.resolveCombat();return;}
 await session.settleInteraction();
}
