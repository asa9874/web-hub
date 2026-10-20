import type { Condition, Effect, Evolution, Gift, GiftCategory, Rarity, SpecialRule, Trait } from '../types';
import { EFFECT_BALANCE, FAMILIES, RARITIES, TUNING } from './config';
import {traitImpact} from './traitImpact';
import {migrateGiftImpact} from '../systems/impact';
import type {ImpactMetadata,ImpactDomain} from '../types/impact';
export const flag = (key: string): Condition => ({ kind:'flag',key });
export const tag = (key: string): Condition => ({ kind:'tag',key });
export const stat = (key: string, min: number): Condition => ({ kind:'stat',key,min });
export const all = (...conditions: Condition[]): Condition => ({kind:'all',conditions});
export const check = (target:string, amount:number, unit:'score'|'percentagePoints'='score'): Effect => ({id:`check-${target}-${unit}-${amount}`,type:'CHECK_MODIFIER',target,amount:amount*(unit==='score'?EFFECT_BALANCE.checkScoreScale:EFFECT_BALANCE.percentagePointScale),unit});
export const attribute = (target:string, amount:number): Effect => ({id:`stat-${target}-${amount}`,type:'STAT_MODIFIER',target,amount:amount*EFFECT_BALANCE.statScale});
export const growth = (target:string,multiplier:number): Effect => ({id:`growth-${target}`,type:'GROWTH_MODIFIER',target,multiplier:1+(multiplier-1)*EFFECT_BALANCE.growthDeltaScale});
export const action = (target:string,multiplier:number): Effect => ({id:`action-${target}`,type:'ACTION_WEIGHT',target,multiplier:1+(multiplier-1)*EFFECT_BALANCE.actionDeltaScale});
export const event = (target:string,multiplier:number): Effect => ({id:`event-${target}`,type:'EVENT_WEIGHT',target,multiplier:1+(multiplier-1)*EFFECT_BALANCE.eventDeltaScale});
export const unlock = (option:string): Effect => ({id:`option-${option}`,type:'UNLOCK_OPTION',option});
export const when = (condition:Condition,...effects:Effect[]): Effect => ({id:'when-'+effects.map(e=>e.id).join('-'),type:'CONDITIONAL_EFFECT',condition,effects});
export const skill = (target:string,tier:number): Effect[] => [check(target,TUNING.skillScore[tier]),growth(target,TUNING.training[tier])];
export const evolve = (to:string, condition:Condition, note:string, chance:number|null=.65): Evolution => ({to,condition,note,chance});
export function trait(id:string,family:string,tier:number,name:string,lore:string,rarity:Rarity,effects:Effect[], extra:Partial<Pick<Trait,'evolutions'|'acquisitions'|'birth'|'exclusiveGroup'>> = {}): Trait {
  return {kind:'trait',id:'trait-'+id,impact:traitImpact('trait-'+id,family),name,lore,system:'',family,category:FAMILIES[family].category,tier,rarity,effects,eventTags:[family],eventIds:[],
    birth:{eligible:tier<2,weight:RARITIES[rarity].weight,excludes:[]},exclusiveGroup:family,
    acquisitions:[{condition:all(stat(family,(tier+1)*12),flag('training-'+family)),chance:tier<2?.3:null,note:`${FAMILIES[family].name} 실습 기록 ${tier+1}단계와 평가 충족. 수치는 임시 밸런스.`}],evolutions:[],...extra};
}
export const specialRules: Record<string,SpecialRule> = {};
type RuleInput = Omit<SpecialRule,'id'>;
export function gift(id:string,category:GiftCategory,name:string,lore:string,rarity:Rarity,legacyImpact:number|ImpactMetadata,activation:string,effects:Effect[]|RuleInput,tags:string[]): Gift {
  const fullId='gift-'+id;
  if(!Array.isArray(effects)) specialRules[fullId]={id:fullId,...effects};
  const domains:Record<GiftCategory,ImpactDomain[]>={combat:['combat'],survival:['other'],information:['information'],relations:['society','mind'],fortune:['fate'],space:['magic'],memory:['information','mind'],omen:['magic','religion'],society:['economy','society'],daily:['other']};
  const impact=migrateGiftImpact(typeof legacyImpact==='number'?{version:'legacy-100',value:legacyImpact,domains:domains[category]}:legacyImpact);
  if(['heir-of-dawn','unbroken-star','sacred-sword-answer'].includes(id))impact.originTags=['prophecy-selection'];
  return {kind:'gift',id:fullId,name,lore,rarity,impact,category,activation,system:'',eventTags:tags,eventIds:[],birth:{eligible:true,weight:RARITIES[rarity].weight,excludes:[]},effects:Array.isArray(effects)?effects:[when(flag(effects.trigger),{id:'fixed-rule',type:'SPECIAL_RULE',ruleId:fullId})]};
}
export const rule = (trigger:string,operation:SpecialRule['operation'],target:string,value:number,unit:string,limit:string,restriction:string): RuleInput => ({trigger,operation,target,value,unit,limit,restriction});
