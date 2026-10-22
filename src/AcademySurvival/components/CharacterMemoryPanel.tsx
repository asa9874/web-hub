import {describeClaim} from '../systems/memoryPresentation';
import {useSyncExternalStore,useState} from 'react';
import {useOptionalAi} from './aiHooks';
import type {NpcAiEngine} from '../systems/npcAi';
import type {MemoryView} from '../types/memory';
import {MEMORY_SOURCES} from '../data/memory';
import DetailDialog from './DetailDialog';
const noop=()=>()=>{},zero=()=>0;
export default function CharacterMemoryPanel({id,engine:provided,debug=false}:{id:string;engine?:NpcAiEngine|null;debug?:boolean}){const shared=useOptionalAi(),engine=provided===null?null:provided??shared,knowledge=engine?.knowledge,[selected,setSelected]=useState<MemoryView|null>(null);useSyncExternalStore(knowledge?.subscribe??noop,knowledge?.getSnapshot??zero,zero);if(!knowledge||!debug||!engine?.hasCharacter(id))return null;const all=knowledge.getCharacterMemories(id),current=selected?all.find(m=>m.id===selected.id):undefined,rows=[...all].sort((a,b)=>b.importance-a.importance).slice(0,8);return <section aria-label="캐릭터 기억과 정보"><h3>기억·정보 <small>개발자</small></h3>{!rows.length?<p>아직 기억 없음</p>:rows.map(m=><button key={m.id} onClick={()=>setSelected(m)}>{MEMORY_SOURCES[m.source]} · {describeClaim(knowledge.getMemoryClaim(id,m.id),who=>engine.world.getCharacter(who).name)} · 중요도 {m.importance} · {m.state}</button>)}{selected&&<DetailDialog title="기억 상세 · 개발자" onClose={()=>setSelected(null)}><div className="ac-interaction-details"><p>{MEMORY_SOURCES[current?.source??selected.source]} · 확신도 {current?.effectiveConfidence??0} · 감정 {current?.emotionalWeight??0}</p><pre>{current?JSON.stringify(knowledge.getMemoryClaim(id,current.id),null,2):'보존 정책으로 정리된 기억입니다.'}</pre><p>전달 계보: {selected.lineage.map(h=>h.characterId).join(' → ')}</p></div></DetailDialog>}</section>;}
