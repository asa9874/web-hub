import type {Context} from '../types';
import {EMPTY_CONTEXT} from '../data/config';
import {entries} from '../systems/registry';
import {stats,proficiencies} from '../systems/knowledgeRegistry';
import {statuses} from '../systems/statusRegistry';
import {fixedCharacters} from '../systems/characterRegistry';
import {positions,titles} from '../systems/socialRegistry';
import {organizations} from '../systems/organizations';
import EntryDetail from './EntryDetail';
import {KnowledgeEntryDetail} from './KnowledgeCatalog';
import {StatusDetail} from './StatusCatalog';
import {SocialDetail} from './SocialCatalog';
import {OrganizationDetail} from './OrganizationCatalog';
import {FixedCharacterDetail} from './FixedCharacterCatalog';
import DetailDialog from './DetailDialog';
import '../AcademySurvival.css';

export type CatalogEntryKind='trait'|'gift'|'stat'|'proficiency'|'status'|'character'|'position'|'title'|'organization';
export interface CatalogEntryReference {kind:CatalogEntryKind;id:string}
const kinds:CatalogEntryKind[]=['trait','gift','stat','proficiency','status','character','position','title','organization'];
export function catalogEntryReference(params:URLSearchParams):CatalogEntryReference|null{
 const kind=params.get('kind')??'trait',id=params.get('item');
 return id&&kinds.includes(kind as CatalogEntryKind)?{kind:kind as CatalogEntryKind,id}:null;
}
/** No routing, filters or game state: the caller owns selection and closing. */
export default function CatalogEntryDialog({reference,debug=false,context=EMPTY_CONTEXT,onNavigate,onClose}:{reference:CatalogEntryReference;debug?:boolean;context?:Context;onNavigate:(reference:CatalogEntryReference)=>void;onClose:()=>void}){
 const {kind,id}=reference,navigate=(next:string)=>onNavigate({kind,id:next});
 const entry=entries.find(e=>e.id===id&&e.kind===kind);
 const knowledge=[...stats,...proficiencies].find(e=>e.id===id&&e.kind===kind);
 const status=kind==='status'?statuses.find(e=>e.id===id):undefined;
 const social=[...positions,...titles].find(e=>e.id===id&&e.kind===kind);
 const organization=kind==='organization'?organizations.find(e=>e.id===id):undefined;
 const character=kind==='character'?fixedCharacters.find(e=>e.id===id):undefined;
 const title=entry?.name??knowledge?.name??status?.name??social?.name??organization?.name??character?.identity.name??'기록을 찾을 수 없습니다';
 return <DetailDialog title={title} onClose={onClose}><div key={kind+'/'+id} onClickCapture={event=>{
  const link=(event.target as Element).closest<HTMLAnchorElement>('a[href]');
  if(!link||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button!==0)return;
  const url=new URL(link.href),next=catalogEntryReference(url.searchParams);
  if(url.origin===location.origin&&url.pathname===location.pathname&&next){event.preventDefault();event.stopPropagation();onNavigate(next);}
 }}>
  {entry?<EntryDetail entry={entry} debug={debug} context={context} onSelect={next=>onNavigate({kind:next.startsWith('gift-')?'gift':'trait',id:next})}/>:knowledge?<KnowledgeEntryDetail selected={knowledge} debug={debug} onOpen={next=>onNavigate({kind:next.startsWith('gift-')?'gift':'trait',id:next})} onStat={next=>onNavigate({kind:'stat',id:next})}/>:status?<StatusDetail selected={status} debug={debug} select={navigate}/>:social?<SocialDetail selected={social} debug={debug} select={navigate}/>:organization?<OrganizationDetail selected={organization} debug={debug} select={navigate}/>:character?<FixedCharacterDetail selected={character} debug={debug}/>:<p role="alert" className="ac-empty">존재하지 않는 기록입니다. ({kind} / {id})</p>}
 </div></DetailDialog>;
}
