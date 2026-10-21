import type {Context,Entry} from '../types';
import type {Character,FixedCharacterTemplate,RandomAbilitySlot} from '../types/character';
import {entries,giftRegistry,traitRegistry} from './registry';
import {compatible,slotPool} from './probability';
import {meets} from './conditions';
// This is a read-only pool query, not a campaign generator. No Math.random or storage calls.
export function randomSlotPool(slot:RandomAbilitySlot,context:Context,owned:Entry[]){
 const registry=slot.kind==='trait'?traitRegistry:giftRegistry;
 const candidates=slot.candidates.flatMap(candidate=>{const entry=registry.get(candidate.entryId);return entry&&candidate.weight>0? [{entry,candidate}]:[];});
 const commonEligible=new Set(slotPool(candidates.map(row=>row.entry),context,owned).map(row=>row.entry.id));
 const eligible=candidates.filter(({entry,candidate})=>commonEligible.has(entry.id)&&(!candidate.condition||meets(candidate.condition,context))&&compatible(entry,owned));
 const total=eligible.reduce((n,row)=>n+row.candidate.weight,0);
 return eligible.map(({entry,candidate})=>({entry,weight:candidate.weight,probability:candidate.weight/total}));
}
export function templateContext(t:FixedCharacterTemplate):Context{return {stats:Object.fromEntries(Object.entries(t.stats).map(([id,range])=>[id,range.base])),flags:[],tags:[],traits:[...t.fixedTraitIds],gifts:[...t.fixedGiftIds]};}
export function ownedEntries(character:Pick<Character,'traitIds'|'giftIds'>){return entries.filter(e=>(e.kind==='trait'?character.traitIds:character.giftIds).includes(e.id));}
export function templateOwned(t:FixedCharacterTemplate){return ownedEntries({traitIds:t.fixedTraitIds,giftIds:t.fixedGiftIds});}
