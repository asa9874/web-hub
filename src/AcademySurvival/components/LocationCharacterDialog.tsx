import {useState} from 'react';
import type {Character} from '../types/character';
import DetailDialog from './DetailDialog';
import CharacterStatusPanel from './CharacterStatusPanel';
import CatalogEntryDialog,{catalogEntryReference} from './CatalogEntryDialog';
import type {CatalogEntryReference} from './CatalogEntryDialog';
export default function LocationCharacterDialog({character,onClose}:{character:Character;onClose:()=>void}){const [reference,setReference]=useState<CatalogEntryReference|null>(null);if(reference)return <CatalogEntryDialog reference={reference} debug onNavigate={setReference} onClose={()=>setReference(null)}/>;return <DetailDialog title={character.name} wide onClose={onClose}><div onClickCapture={e=>{const a=(e.target as Element).closest<HTMLAnchorElement>('a[href]');if(!a||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;const url=new URL(a.href),ref=catalogEntryReference(url.searchParams);if(ref&&url.origin===location.origin&&url.pathname===location.pathname){e.preventDefault();e.stopPropagation();setReference(ref);}}}><CharacterStatusPanel mode="actual" character={character} density="compact" debug/></div></DetailDialog>;}
