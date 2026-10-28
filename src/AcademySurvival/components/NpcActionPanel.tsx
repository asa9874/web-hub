import HeroineOpportunities from './HeroineOpportunities';
import {actionLine,actionCompletionLine} from '../data/dialogue/actionLines';
import {useEventScene} from './eventSceneHooks';
import {locationBackgrounds} from '../data/locationBackgrounds';
import {fixedSpeech} from '../systems/fixedStudents';
import {renderConversationTurn} from '../systems/conversationPresentation';
import {useState} from 'react';
import type {PlaySession} from '../systems/playSession';
import {getNpcActions,isNearbyNpc,executeNpcAction,NPC_ACTION_GROUPS} from '../systems/npcActions';
import type {NpcAction} from '../systems/npcActions';
export default function NpcActionPanel({session,targetId,onAccepted,onError}:{session:PlaySession;targetId:string;onAccepted:()=>void;onError:(message:string)=>void}){
 const presentation=useEventScene();
 const [query,setQuery]=useState(''),[error,setError]=useState('');
 if(!isNearbyNpc(session,targetId))return <p className="ac-help">지금 같은 장소에 머무는 인물이 아닙니다. 상호작용하려면 먼저 만나야 합니다.</p>;
 const rows=getNpcActions(session,targetId),busy=session.isAdvancing(),name=session.world.runtime.world.getCharacterReadSnapshot(targetId).name;
 const act=(id:string)=>{setError('');void (async()=>{
  const row=rows.find(r=>r.id===id);if(!row)return;
  const world=session.world.runtime.world,character=world.getCharacterReadSnapshot(targetId),background=locationBackgrounds[character.location!.currentLocationId],api=session.world.runtime.interactions?.getConversations(),before=new Set(api?.getRecords(session.playerId).map(r=>r.id));
  if((row.group==='combat'||row.dangerous)&&presentation){const answer=await presentation.present({title:row.name,character,expression:'serious',background,speech:fixedSpeech(targetId,'greet','neutral'),message:row.command.kind==='combat'?'실전 공격을 시작하시겠습니까? 실제 체력이 손상되며 상대의 동의를 요구하지 않는 공격입니다.':row.name+'을 제안하시겠습니까? 상대는 수락하거나 거절할 수 있습니다.'});if(answer!=='yes')return;}
  try{await executeNpcAction(session,targetId,id,onAccepted);}catch(e){const message=e instanceof Error?e.message:String(e);setError(message);onError(message);if(presentation?.resultsEnabled)await presentation.present({title:'행동 결과',kind:'result',character,expression:'worried',background,message});return;}
  if(!presentation?.resultsEnabled||session.life?.getState().pending.length||session.world.runtime.ai.getCombat()?.getActive(session.playerId))return;
  const record=api?.getRecords(session.playerId).filter(r=>!before.has(r.id)&&r.targetId===targetId).at(-1),reply=record?.turns.filter(t=>t.speakerId===targetId).at(-1),offer=row.command.kind==='item'?session.world.runtime.ai.getItems()?.getOffers().filter(o=>o.sourceId===session.playerId&&o.targetId===targetId).at(-1):undefined;
  const rejected=record?.status==='rejected'||offer?.status==='rejected',definitionId=row.command.kind==='interaction'?row.command.definitionId:undefined;
  await presentation.present({title:row.name+' · 결과',kind:'result',character,expression:rejected?'worried':'happy',background,speech:reply&&record?renderConversationTurn(record,reply):offer?.status==='accepted'&&row.command.kind==='item'&&row.command.offerKind==='gift'?actionLine(targetId,'gift')??'선물해 주셔서 고마워요.':rejected?fixedSpeech(targetId,'greet','refused'):row.command.kind==='interaction'&&session.world.runtime.interactions?.getInstances().some(i=>i.initiatorCharacterId===session.playerId&&i.targetCharacterId===targetId&&i.definitionId===definitionId&&i.status==='completed')?actionCompletionLine(targetId):undefined,message:offer?'물건 제안 · '+({pending:'상대의 응답을 기다리고 있습니다.',accepted:'수락 · 실제 물품 원장에 반영되었습니다.',rejected:'거절 · 물건은 전달되지 않았습니다.',expired:'제안이 만료되었습니다.'})[offer.status]:record?.reason??row.name+' 처리가 끝났습니다. 자세한 내용은 나의 기록에서 확인할 수 있습니다.'});
 })().catch(e=>{const message=String(e);setError(message);onError(message);});};
 const button=(row:NpcAction)=><button key={row.id} data-npc-action={row.id} data-danger={row.dangerous} disabled={!row.available} title={row.reasons.join(' · ')||row.description} onClick={()=>act(row.id)}><strong>{row.name}</strong><small>{row.available?row.minutes?row.minutes+'분 · 상대가 거절할 수 있습니다.':'실제 체력 손상':row.reasons[0]}</small></button>;
 return <><HeroineOpportunities session={session} ownerId={targetId} onAccepted={onAccepted}/><section className="ac-npc-actions" aria-label={name+'에게 할 행동'}><header><div><span className="ac-eyebrow">INTERACT</span><h3>{name}에게 무엇을 할까요?</h3></div><small>같은 장소에 머무는 중</small></header><div className="ac-npc-combat-mode" role="group" aria-label="전투 진행 방식">{([['manual','직접 턴제 전투'],['automatic','자동 전투 · 결과 확인']] as const).map(([id,label])=><button disabled={busy} key={id} aria-pressed={session.getCombatMode()===id} onClick={()=>{try{session.setCombatMode(id);setError('');}catch(e){setError(String(e));}}}>{label}</button>)}</div><div className="ac-npc-action-grid">{rows.filter(r=>r.quick).sort((a,b)=>Number(a.dangerous)-Number(b.dangerous)||Number(b.available)-Number(a.available)).map(button)}</div><details><summary>더 많은 상호작용·대화</summary><input aria-label="인물 행동 검색" placeholder="행동이나 이야기 주제 찾기" value={query} onChange={e=>setQuery(e.target.value)}/>{Object.entries(NPC_ACTION_GROUPS).map(([group,label])=>{const filtered=rows.filter(r=>!r.quick&&r.group===group&&(!query||[r.name,r.description].join(' ').includes(query)));return filtered.length?<section key={group}><h4>{label}</h4><div className="ac-npc-action-grid">{filtered.map(button)}</div></section>:null;})}</details>{error&&<p role="alert">{error}</p>}</section></>;
}
