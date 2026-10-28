import {useState} from 'react';
import type {PlaySession} from '../systems/playSession';

const names={personal:'개인 이야기',daily:'일상',bond:'깊어지는 사이',milestone:'중요한 이야기',epilogue:'다시 만난 이야기'};
export default function HeroineOpportunities({session,ownerId,onAccepted}:{session:PlaySession;ownerId:string;onAccepted:()=>void}){
 const [error,setError]=useState(''),engine=session.world.runtime.ai.worldEvents;
 const rows=engine?.getPersonalOpportunities(ownerId,session.playerId)??[];
 if(!rows.length)return null;
 return <section className="ac-heroine-opportunities" aria-label="지금 나눌 수 있는 이야기"><h4>지금 나눌 수 있는 이야기</h4><div className="ac-npc-action-grid">{rows.slice(0,4).map(row=><button key={row.id} disabled={session.isAdvancing()||!!session.life?.getState().pending.length} onClick={()=>{try{session.playerCommand(l=>l.openPersonalScene(row.id,ownerId));setError('');onAccepted();}catch(e){setError(e instanceof Error?e.message:String(e));}}}><small>{names[row.kind]}</small><span>{row.title}</span></button>)}</div>{error&&<p role="alert">{error}</p>}</section>;
}
