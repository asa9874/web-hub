import PersonalSceneDialog from './PersonalSceneDialog';
import {interactionIntro} from '../data/dialogue/actionLines';
import {renderConversationTurn} from '../systems/conversationPresentation';
import {useState} from 'react';
import type {PlaySession} from '../systems/playSession';
import {EventSceneDialog} from './EventScene';
import {locationBackgrounds} from '../data/locationBackgrounds';
import {expressionForEmotion} from '../data/characterArt';
import {fixedSpeech} from '../systems/fixedStudents';
import {interactionRegistry} from '../data/interactions';
import {conversationIntents} from '../data/conversations';
import {formatGameTime} from '../systems/calendar';
import type {ConversationProposal} from '../types/conversation';

export default function PlayerResponseDialog({session,onClose}:{session:PlaySession;onClose:()=>void}){
 const [error,setError]=useState(''),life=session.life!,pending=life.getState().pending,choice=pending[0];
 if(!choice)return null;
 if(choice.sceneEventId)return <PersonalSceneDialog key={choice.sceneEventId} session={session} eventId={choice.sceneEventId}/>;
 const engine=session.world.runtime.interactions,interaction=choice.interactionId?engine?.getInstance(choice.interactionId):undefined;
 const api=engine?.getConversations(),conversation=choice.conversationId?api?.getPending(session.playerId):undefined;
 const name=(id:string)=>session.world.runtime.world.getCharacterReadSnapshot(id).name;
 const person=interaction?name(interaction.initiatorCharacterId):conversation?name(conversation.initiatorId===session.playerId?conversation.targetId:conversation.initiatorId):undefined;
 const action=interaction?interactionRegistry.get(interaction.definitionId)?.name:conversation?conversationIntents[conversation.proposal.intent].name:undefined;
 const respond=(answer:'accept'|'decline'|'continue'|'stop')=>{try{session.playerCommand(l=>l.respond(choice.id,answer));setError('');if(answer==='accept')void session.settleInteraction().catch(e=>setError(String(e)));else if(answer==='continue'||answer==='decline')void session.resumeAfterChoice().catch(e=>setError(String(e)));}catch(e){setError(e instanceof Error?e.message:String(e));}};
 const choose=(proposal:ConversationProposal|'accept'|'decline'|'later'|'end')=>{try{session.playerCommand(l=>l.respondConversation(conversation!.id,proposal));setError('');if(proposal!=='decline'&&proposal!=='later'&&proposal!=='end')void session.settleInteraction().catch(e=>setError(String(e)));}catch(e){setError(e instanceof Error?e.message:String(e));}};
 const world=session.world.runtime.world,initiator=interaction?.initiatorCharacterId??conversation?.initiatorId,speakerId=initiator===session.playerId?(interaction?.targetCharacterId??conversation?.targetId):initiator,speaker=speakerId?world.getCharacterReadSnapshot(speakerId):undefined;
 const speech=conversation&&conversation.opening&&conversation.opening.speakerId===speakerId?renderConversationTurn(conversation,conversation.opening):speaker?(interactionIntro(speaker.id,interaction?.definitionId)??fixedSpeech(speaker.id,'greet','neutral')??'잠깐, 이야기할 수 있을까요?'):undefined;
 return <EventSceneDialog scene={{title:'당신의 응답을 기다리고 있습니다',character:speaker,expression:expressionForEmotion(conversation?.opening?.presentation?.emotion),background:locationBackgrounds[world.getCharacterReadSnapshot(session.playerId).location!.currentLocationId],speech,message:(person&&action?`${person} 님이 ${action} 활동을 제안했습니다.`:choice.message)+'\n'+formatGameTime(choice.at)+' · 응답 대기 '+pending.length+'건 · 세계 시간 멈춤'}} onClose={onClose}><section className="ac-player-response" aria-label="플레이어 응답"><div className="ac-response-actions">{conversation?<>{conversation.initiatorId===session.playerId&&conversation.proposal.kind!=='information'?api?.options(session.playerId,conversation.targetId).filter(p=>p.kind!=='information').map((p,i)=><button key={i} onClick={()=>choose(p)}>{conversationIntents[p.intent].line}</button>):<button className="ac-response-accept" onClick={()=>choose('accept')}>제안 수락</button>}<button onClick={()=>choose('decline')}>거절</button><button onClick={()=>choose('later')}>나중에 이야기</button><button onClick={()=>choose('end')}>대화 종료</button></>:choice.kind==='request'?<><button className="ac-response-accept" onClick={()=>respond('accept')}>함께 하기</button><button onClick={()=>respond('decline')}>정중히 거절</button></>:<><button className="ac-response-accept" onClick={()=>respond('continue')}>확인하고 계속</button><button onClick={()=>respond('stop')}>이번 행동 취소 · 자동 생활</button></>}</div><p className="ac-help">닫아도 응답은 보류됩니다. 상단의 ‘응답’ 버튼으로 다시 열 수 있습니다.</p>{error&&<p role="alert">{error}</p>}</section></EventSceneDialog>;
}
