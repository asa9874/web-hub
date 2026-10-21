import type { Context, Entry, Trait } from '../types';
import { PROBABILITY } from '../data/config';
import { meets } from './conditions';
export function compatible(candidate:Entry,owned:Entry[]):boolean {
 return !owned.some(other=>other.id===candidate.id || candidate.birth.excludes.includes(other.id) || other.birth.excludes.includes(candidate.id) ||
  (candidate.kind==='trait'&&other.kind==='trait'&&candidate.exclusiveGroup&&candidate.exclusiveGroup===(other as Trait).exclusiveGroup));
}
export function slotPool<T extends Entry>(entries:T[],ctx:Context,owned:Entry[]=[]):{entry:T;weight:number;probability:number}[] {
 owned=[...owned,...entries.filter(entry=>(entry.kind==='trait'?ctx.traits:ctx.gifts).includes(entry.id))];
 const pool=entries.filter(entry=>entry.birth.eligible && entry.birth.weight>0 && (!entry.birth.condition||meets(entry.birth.condition,ctx)) && compatible(entry,owned));
 const total=pool.reduce((sum,entry)=>sum+entry.birth.weight,0);
 return pool.map(entry=>({entry,weight:entry.birth.weight,probability:entry.birth.weight/total}));
}
function pick<T>(rows:{value:T;weight:number}[],random:()=>number):T|undefined {
 const total=rows.reduce((sum,r)=>sum+r.weight,0);if(total<=0)return;
 let draw=Math.max(0,Math.min(1-Number.EPSILON,random()))*total;
 for(const row of rows){draw-=row.weight;if(draw<0)return row.value;}return rows.at(-1)?.value;
}
export function drawBirth<T extends Entry>(entries:T[],ctx:Context,kind:'trait'|'gift',random:()=>number=Math.random):{requested:number;entries:T[];shortfall:number} {
 const distribution=kind==='trait'?PROBABILITY.traitCounts:PROBABILITY.giftCounts;
 const count=pick(distribution.map(r=>({value:r.count,weight:r.probability})),random)??0,result:T[]=[];
 const owned=entries.filter(entry=>(entry.kind==='trait'?ctx.traits:ctx.gifts).includes(entry.id));
 for(let slot=0;slot<count;slot++){
  const current={...ctx,traits:[...ctx.traits,...result.filter(e=>e.kind==='trait').map(e=>e.id)],gifts:[...ctx.gifts,...result.filter(e=>e.kind==='gift').map(e=>e.id)]};
  const entry=pick(slotPool(entries,current,[...owned,...result]).map(r=>({value:r.entry,weight:r.weight})),random);
  if(entry)result.push(entry);
 }
 return {requested:count,entries:result,shortfall:count-result.length};
}
export const formatChance=(n:number|null)=>n===null?'미설정':(n*100).toLocaleString('ko-KR',{maximumFractionDigits:5})+'%';
