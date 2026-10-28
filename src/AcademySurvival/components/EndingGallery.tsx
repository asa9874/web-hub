import {useState} from 'react';
import {ENDING_DEFINITIONS,readEndingCollection} from '../systems/endingCollection';
import type {EndingCollection} from '../systems/endingCollection';
import {formatGameDate} from '../systems/calendar';

export default function EndingGallery(){
 const [selected,setSelected]=useState('');
 let collection:EndingCollection={version:'academy-endings-v1',discoveries:[]},error='';
 try{if(typeof window!=='undefined')collection=readEndingCollection(window.localStorage);}catch(e){error=e instanceof Error?e.message:String(e);}
 return <section className="ac-ending-gallery" aria-label="엔딩 도감"><header><small>CHRONICLE OF YOUR LIVES</small><h2>당신이 남긴 이야기</h2><p>발견 {collection.discoveries.length} / {ENDING_DEFINITIONS.length} · 엔딩과 삶의 이정표는 세이브와 별도로 남습니다.</p></header>{error&&<p role="alert">{error}</p>}<div className="ac-start-choice-grid">{ENDING_DEFINITIONS.map(e=>{const found=collection.discoveries.find(d=>d.id===e.id);return <button key={e.id} disabled={!found} aria-pressed={selected===e.id} onClick={()=>setSelected(e.id)}><small>{e.category==='bad'?'BAD END':'인생의 이정표'}</small><strong>{found?e.title:'아직 펼치지 않은 이야기'}</strong><span>{found?e.description:'제목과 발견 조건은 숨겨져 있습니다.'}</span></button>;})}</div>{ENDING_DEFINITIONS.filter(e=>e.id===selected&&collection.discoveries.some(d=>d.id===e.id)).map(e=>{const found=collection.discoveries.find(d=>d.id===e.id)!;return <article className="ac-ending-replay" key={e.id}><small>{e.category==='bad'?'종료된 회차':'플레이는 계속됩니다'}</small><h3>{e.title}</h3>{e.lines.map(line=><p key={line}>{line}</p>)}<details><summary>최초 발견 기록</summary><p>{new Date(found.firstDiscoveredAt).toLocaleString()} · {formatGameDate(found.worldMinute)}</p><p className="ac-ending-run">회차 {found.runId}</p></details><button onClick={()=>setSelected('')}>접기</button></article>;})}</section>;
}
