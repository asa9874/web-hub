import type {NpcScheduleEngine} from '../systems/npcSchedules';
import {generateScheduleForCharacter} from '../systems/schedulePlanning';
import {useState} from 'react';
import type {Character} from '../types/character';
import type {RelationshipGraph} from '../systems/relationships';
import DetailDialog from './DetailDialog';
import CharacterStatusPanel from './CharacterStatusPanel';
import CatalogEntryDialog,{catalogEntryReference} from './CatalogEntryDialog';
import type {CatalogEntryReference} from './CatalogEntryDialog';
import {useOptionalRelationships} from './RelationshipContext';
export default function LocationCharacterDialog({character,onClose,graph,characters,debug=false,scheduleEngine}:{character:Character;onClose:()=>void;graph?:RelationshipGraph;characters?:readonly Character[];debug?:boolean;scheduleEngine?:NpcScheduleEngine|null}){
 const shared=useOptionalRelationships(),all=characters??shared?.world.getCharacters()??[character],activeGraph=graph??shared?.graph;
 const [reference,setReference]=useState<CatalogEntryReference|null>(null),[history,setHistory]=useState([character.id]);
 const active=all.find(c=>c.id===history.at(-1))??character;
 if(reference)return <CatalogEntryDialog reference={reference} debug={debug} onNavigate={setReference} onClose={()=>setReference(null)}/>;
 return <DetailDialog title={active.name} wide onClose={onClose}>{history.length>1&&<button onClick={()=>setHistory(old=>old.slice(0,-1))}>이전 인물로 돌아가기</button>}<div onClickCapture={e=>{const a=(e.target as Element).closest<HTMLAnchorElement>('a[href]');if(!a||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;const url=new URL(a.href),ref=catalogEntryReference(url.searchParams);if(ref&&url.origin===location.origin&&url.pathname===location.pathname){e.preventDefault();e.stopPropagation();setReference(ref);}}}><CharacterStatusPanel key={active.id} mode="actual" character={active} scheduleEngine={scheduleEngine!==undefined?scheduleEngine:graph&&graph!==shared?.graph?null:undefined} schedule={graph&&graph!==shared?.graph&&!scheduleEngine?generateScheduleForCharacter(active):undefined} relationshipGraph={activeGraph} relationshipCharacters={all} onInspectCharacter={id=>setHistory(old=>[...old,id])} density="compact" debug={debug}/></div></DetailDialog>;
}
