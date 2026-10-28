import {useState} from 'react';
import type {NpcAiEngine} from '../systems/npcAi';
import {fixedCharacters} from '../systems/characterRegistry';
import StoryGraph from './StoryGraph';

export default function HeroineGraphCatalog({ai,debug=false}:{ai:NpcAiEngine;debug?:boolean}){
 const [owner,setOwner]=useState('fixed-serena'),viewer=ai.world.getCharacters().find(c=>c.kind==='player')?.id;
 return <section aria-label="히로인별 사건 기록"><h2>{debug?'히로인 서사 관찰':'인물과 나의 이야기'}</h2><label>인물 선택<select aria-label="서사 그래프 인물" value={owner} onChange={e=>setOwner(e.target.value)}>{fixedCharacters.map(c=><option key={c.id} value={c.id}>{c.identity.name}</option>)}</select></label>{ai.worldEvents?<StoryGraph key={owner+String(debug)} engine={ai.worldEvents} ai={ai} ownerId={owner} viewerId={viewer} debug={debug}/>:<p>이 회차에는 세계 사건 기록이 연결되지 않았습니다.</p>}</section>;
}
