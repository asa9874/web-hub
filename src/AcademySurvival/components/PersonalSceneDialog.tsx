import {useState} from 'react';
import type {PlaySession} from '../systems/playSession';
import {EventSceneDialog} from './EventScene';
import {locationBackgrounds} from '../data/locationBackgrounds';

export default function PersonalSceneDialog({session,eventId}:{session:PlaySession;eventId:string}){
 const [error,setError]=useState(''),engine=session.world.runtime.ai.worldEvents!;
 const event=engine.getPendingPersonalScene(session.playerId);
 if(!event||event.id!==eventId)return null;
 const scene=engine.getScenePresentation(event.id)!;
 const world=session.world.runtime.world,owner=world.getCharacterReadSnapshot(scene.ownerId);
 const partnerId=event.participantCharacterIds.find(id=>id!==owner.id);
 const choices=engine.getSceneChoices(event.id),selected=choices.find(c=>c.id===event.sceneDecision?.choiceId);
 const mixed=scene.opening.some(l=>l.speaker==='partner');
 const speech=selected?selected.response:scene.opening.filter(l=>l.speaker==='owner'||partnerId).map(l=>(mixed?(l.speaker==='owner'?owner.name:world.getCharacterReadSnapshot(partnerId!).name)+' : ':'')+l.text).join('\n');
 const choose=(id:string)=>{try{session.playerCommand(l=>l.choosePersonalScene(event.id,id));setError('');}catch(e){setError(String(e));}};
 const confirm=()=>{try{session.playerCommand(l=>l.acknowledgePersonalScene(event.id));const current=engine.getInstance(event.id);const continuation=current.status==='active'&&!current.interactionId?session.advance(Math.max(1,(current.nextEvaluationAt??world.clock.getSnapshot()+1)-world.clock.getSnapshot())):session.resumeAfterChoice();void continuation.catch(e=>setError(String(e)));}catch(e){setError(String(e));}};
 return <EventSceneDialog dismissible={false} onClose={()=>{}} scene={{title:scene.title,character:owner,expression:selected?.stance==='challenge'?'serious':selected?.stance==='support'?'happy':'neutral',background:locationBackgrounds[event.locationId!],speech,message:selected?selected.intentNote:scene.narration+'\n선택을 기다리는 동안 세계 시간이 멈춥니다.'}}>
  {selected?<button autoFocus onClick={confirm}>확인 · 선택한 방향으로 계속</button>:choices.map(c=><button key={c.id} style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:5}} disabled={!c.allowed} title={c.reasons.join(' · ')} onClick={()=>choose(c.id)}><span>{c.label}</span>{!c.allowed&&<small>{c.reasons[0]}</small>}</button>)}
  {error&&<p role="alert">{error}</p>}
 </EventSceneDialog>;
}
