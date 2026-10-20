import type { Effect, GiftCategory, Rarity, Trait } from '../types';
import { trait, gift, rule, flag, when, check, unlock } from './factories';
export { attribute as a, check as c, growth as g, action as w, event as ev, unlock as u, when, flag, tag, all, stat } from './factories';
export const EXPANSION_RARITY:Record<string,Rarity>={c:'common',u:'uncommon',r:'rare',e:'epic',l:'legendary'};
export function T(id:string,family:string,name:string,lore:string,effects:Effect[],acquisition:string,rarity='u'):Trait {
 return trait('x-'+id,family,0,name,lore,EXPANSION_RARITY[rarity],effects,{exclusiveGroup:undefined,
  acquisitions:[{condition:flag('learn-'+id),chance:rarity==='e'?null:.25,note:acquisition}],
 });
}
export function G(id:string,category:GiftCategory,name:string,lore:string,impact:number,activation:string,effects:Effect[],tags:string[],rarity='u'){
 return gift('x-'+id,category,name,lore,EXPANSION_RARITY[rarity],impact,activation,effects,tags);
}
// Ordinary effects remain ordinary. One-shot/context keys are supplied by future event adapters.
export const at=(key:string,...effects:Effect[])=>when(flag(key),...effects);
export const optionCheck=(key:string,option:string,target:string,score:number):Effect[]=>[at(key,unlock(option),check(target,score))];
export function R(id:string,category:GiftCategory,name:string,lore:string,impact:number,activation:string,operation:Parameters<typeof rule>[1],target:string,value:number,unit:string,limit:string,restriction:string,tags:string[],rarity='r'){
 // Human-readable targets are stable authored rule keys and display labels, never parsed into code.
 return gift('x-'+id,category,name,lore,EXPANSION_RARITY[rarity],impact,activation,rule('trigger-'+id,operation,target,value,unit,limit,restriction),tags);
}
