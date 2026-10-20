import { traits as rawTraits } from '../data/traits';
import { gifts as rawGifts } from '../data/gifts';
import { events } from '../data/events';
import { specialRules } from '../data/factories';
import { effectText } from './effectResolver';
import { validateCatalog } from './validation';
import type { Entry, Gift, Trait } from '../types';
function prepare<T extends Entry>(entry:T):T {
 return {...entry,system:entry.effects.map(effectText).join(' · '),eventIds:events.filter(event=>event.tags.some(tag=>entry.eventTags.includes(tag))).map(event=>event.id)};
}
export const traits:Trait[]=rawTraits.map(prepare),gifts:Gift[]=rawGifts.map(prepare);
export const traitRegistry=new Map(traits.map(t=>[t.id,t]));
export const giftRegistry=new Map(gifts.map(g=>[g.id,g]));
export const entries:Entry[]=[...traits,...gifts];
export const validationIssues=validateCatalog(traits,gifts,events,specialRules);
export const previousTraits=(id:string)=>traits.filter(trait=>trait.evolutions.some(e=>e.to===id));
export const relatedEvents=(entry:Entry)=>events.filter(event=>entry.eventIds.includes(event.id)||event.tags.some(tag=>entry.eventTags.includes(tag)));
export {events,specialRules};
