import type { Context, Effect, Entry, SpecialRule } from '../types';
import { TARGET_NAMES } from '../data/config';
import { specialRules } from '../data/factories';
import { RULE_TARGET_LABELS } from '../data/ruleLabels';
import { meets } from './conditions';
const label=(key:string)=>TARGET_NAMES[key]??key;
const signed=(n:number)=>(n>=0?'+':'')+n;
export function effectText(e:Effect):string {
 switch(e.type){
  case 'STAT_MODIFIER':return `${label(e.target)} ${signed(e.amount)}`;
  case 'GROWTH_MODIFIER':return `${label(e.target)} 성장 효율 ×${e.multiplier}`;
  case 'ACTION_WEIGHT':return `${label(e.target)} 행동 가중치 ×${e.multiplier}`;
  case 'EVENT_WEIGHT':return `${label(e.target)} 사건 발생 가중치 ×${e.multiplier} (확률 아님)`;
  case 'CHECK_MODIFIER':return `${label(e.target)} 판정 ${signed(e.amount)}${e.unit==='score'?'점':'%p'}`;
  case 'UNLOCK_OPTION':return `선택지 해금: ${e.option}`;
  case 'CONDITIONAL_EFFECT':return `조건 충족 시: ${e.effects.map(effectText).join(' / ')}`;
  case 'SPECIAL_RULE':{const r=specialRules[e.ruleId];return r?`${RULE_TARGET_LABELS[r.target]??r.target}: ${r.value}${r.unit} / ${r.limit}. ${r.restriction}`:'정의되지 않은 고유 규칙';}
 }
}
export interface Resolved {
 stats:Record<string,number>; growth:Record<string,number>; actions:Record<string,number>; events:Record<string,number>;
 checks:Record<string,{score:number;percentagePoints:number}>;options:string[];rules:{sourceId:string;definition:SpecialRule}[];
}
// Resolves definitions only. SPECIAL_RULE descriptors are handed to a future event adapter, not executed here.
export function resolveEffects(entries:Pick<Entry,'id'|'effects'>[],ctx:Context):Resolved {
 const output:Resolved={stats:{},growth:{},actions:{},events:{},checks:{},options:[],rules:[]},seen=new Set<string>();
 const apply=(sourceId:string,e:Effect)=>{
  if(e.type==='CONDITIONAL_EFFECT'){if(meets(e.condition,ctx))e.effects.forEach(child=>apply(sourceId,child));return;}
  const key=sourceId+'/'+e.id;if(seen.has(key))return;seen.add(key);
  if(e.type==='STAT_MODIFIER')output.stats[e.target]=(output.stats[e.target]??0)+e.amount;
  else if(e.type==='CHECK_MODIFIER'){const check=output.checks[e.target]??={score:0,percentagePoints:0};check[e.unit]+=e.amount;}
  else if(e.type==='UNLOCK_OPTION'){if(!output.options.includes(e.option))output.options.push(e.option);}
  else if(e.type==='SPECIAL_RULE'){if(specialRules[e.ruleId])output.rules.push({sourceId,definition:specialRules[e.ruleId]});}
  else {const bucket=e.type==='GROWTH_MODIFIER'?output.growth:e.type==='ACTION_WEIGHT'?output.actions:output.events;bucket[e.target]=(bucket[e.target]??1)*e.multiplier;}
 };
 entries.forEach(entry=>entry.effects.forEach(effect=>apply(entry.id,effect)));return output;
}
export const applyPercentagePoints=(probability:number,points:number)=>Math.min(1,Math.max(0,probability+points/100));
export const applyWeight=(weight:number,multiplier:number)=>Math.max(0,weight*multiplier);
