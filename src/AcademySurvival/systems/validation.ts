import type { Condition, Effect, Entry, EventReference, Issue, SpecialRule, Trait } from '../types';
import { CATEGORIES, FAMILIES, GIFT_CATEGORIES, PROBABILITY, RARITIES } from '../data/config';
export function validateCatalog(traits:Trait[],gifts:Entry[],events:EventReference[],rules:Record<string,SpecialRule>):Issue[] {
 const issues:Issue[]=[],entries:Entry[]=[...traits,...gifts],ids=new Set(entries.map(e=>e.id)),eventIds=new Set(events.map(e=>e.id));
 const error=(id:string,message:string)=>issues.push({id,message});
 const chance=(n:unknown)=>n===null||(typeof n==='number'&&Number.isFinite(n)&&n>=0&&n<=1);
 if(traits.length<100)error('catalog','특성 100개 미만');if(gifts.length<100)error('catalog','기프트 100개 미만');
 for(const key of ['id','name'] as const){const seen=new Set<string>();for(const entry of entries){if(!entry[key]||seen.has(entry[key]))error(entry.id,`${key} 누락/중복`);seen.add(entry[key]);}}
 const condition=(c:Condition,id:string):void=>{
  if(!c||typeof c!=='object'){error(id,'조건 누락');return;}
  switch(c.kind){
   case 'all':case 'any':if(!Array.isArray(c.conditions)||!c.conditions.length)error(id,'빈 논리 조건');else c.conditions.forEach(item=>condition(item,id));break;
   case 'not':condition(c.condition,id);break;
   case 'trait':if(!traits.some(t=>t.id===c.id))error(id,'조건의 특성 참조 오류');break;
   case 'stat':if(!c.key||!Number.isFinite(c.min))error(id,'능력치 조건 오류');break;
   case 'flag':case 'tag':if(!c.key)error(id,'빈 조건 키');break;
   default:error(id,'알 수 없는 조건 타입');
  }
 };
 const effects=(list:Effect[],id:string):void=>{
  if(!Array.isArray(list)||!list.length){error(id,'효과 없음');return;}
  const seen=new Set<string>();
  for(const e of list){
   if(!e.id||seen.has(e.id))error(id,'동일 범위 효과 ID 중복');seen.add(e.id);
   switch(e.type){
    case 'STAT_MODIFIER':if(!e.target||!Number.isFinite(e.amount))error(id,'능력치 효과 오류');break;
    case 'CHECK_MODIFIER':if(!e.target||!Number.isFinite(e.amount)||!['score','percentagePoints'].includes(e.unit))error(id,'판정 단위/수치 오류');break;
    case 'GROWTH_MODIFIER':case 'ACTION_WEIGHT':case 'EVENT_WEIGHT':if(!e.target||!Number.isFinite(e.multiplier)||e.multiplier<0)error(id,'가중치/배율 오류');break;
    case 'UNLOCK_OPTION':if(!e.option)error(id,'선택지 누락');break;
    case 'CONDITIONAL_EFFECT':condition(e.condition,id);effects(e.effects,id);break;
    case 'SPECIAL_RULE':if(!rules[e.ruleId])error(id,'고유 규칙 정의 누락');break;
    default:error(id,'알 수 없는 효과 타입');
   }
  }
 };
 for(const entry of entries){
  if(!/^(trait|gift)-[a-z0-9-]+$/.test(entry.id))error(entry.id,'ID 형식 오류');
  if(!entry.lore?.trim()||!entry.system?.trim())error(entry.id,'인게임/시스템 설명 누락');
  if(!(entry.rarity in RARITIES))error(entry.id,'희귀도 오류');
  effects(entry.effects,entry.id);
  if(!entry.birth||typeof entry.birth.eligible!=='boolean'||!Number.isFinite(entry.birth.weight)||entry.birth.weight<0)error(entry.id,'추첨 가중치 오류');
  if(entry.birth.condition)condition(entry.birth.condition,entry.id);
  for(const exclude of entry.birth.excludes)if(!ids.has(exclude)||exclude===entry.id)error(entry.id,'상호 배타 참조 오류');
  if(!entry.eventTags.length||entry.eventTags.some(tag=>!tag||!/^[a-z][a-z0-9-]*$/.test(tag)))error(entry.id,'이벤트 태그 오류');
  for(const id of entry.eventIds)if(!eventIds.has(id))error(entry.id,'이벤트 ID 참조 오류');
  if(entry.kind==='trait'){
   if(!(entry.category in CATEGORIES)||!FAMILIES[entry.family]||FAMILIES[entry.family].category!==entry.category)error(entry.id,'분류/계열 오류');
   if(!Number.isInteger(entry.tier)||entry.tier<0)error(entry.id,'단계 오류');
   for(const acquisition of entry.acquisitions){if(!chance(acquisition.chance))error(entry.id,'획득 확률 오류');condition(acquisition.condition,entry.id);}
   const destinations=new Set<string>();
   for(const edge of entry.evolutions){const target=traits.find(t=>t.id===edge.to);if(!target||target.family!==entry.family||target.tier<=entry.tier||destinations.has(edge.to))error(entry.id,'진화 참조/단계 오류');destinations.add(edge.to);if(!chance(edge.chance))error(entry.id,'진화 확률 오류');condition(edge.condition,entry.id);}
  } else {
   if('evolutions' in entry||'tier' in entry||'growth' in entry)error(entry.id,'기프트에 성장/진화 필드 존재');
   if(!(entry.category in GIFT_CATEGORIES)||!entry.activation||!Number.isFinite(entry.impact)||entry.impact<0||entry.impact>100)error(entry.id,'기프트 분류/발동/영향력 오류');
  }
 }
 const visiting=new Set<string>(),visited=new Set<string>(),map=new Map(traits.map(t=>[t.id,t]));
 const walk=(id:string)=>{if(visiting.has(id)){error(id,'진화 순환 참조');return;}if(visited.has(id))return;visiting.add(id);map.get(id)?.evolutions.forEach(edge=>walk(edge.to));visiting.delete(id);visited.add(id);};traits.forEach(t=>walk(t.id));
 for(const [key,distribution] of Object.entries(PROBABILITY)){
  if(Math.abs(distribution.reduce((n,r)=>n+r.probability,0)-1)>1e-10)error(key,'개수 확률 합이 1이 아님');
  if(distribution.some(r=>!chance(r.probability)||!Number.isInteger(r.count)||r.count<0))error(key,'개수 분포 오류');
 }
 const seenEvents=new Set<string>();for(const event of events){if(seenEvents.has(event.id)||!/^event-[a-z-]+$/.test(event.id)||!event.title||event.status!=='planned'||!event.tags.length)error(event.id,'이벤트 참조 형식 오류');seenEvents.add(event.id);condition(event.condition,event.id);}
 for(const rule of Object.values(rules))if(!rule.id||!ids.has(rule.id)||!['reveal','prevent','create','transform','transfer','bind','remember','conceal','repeat','move','delay','guarantee'].includes(rule.operation)||!rule.trigger||!rule.target||!Number.isFinite(rule.value)||!rule.unit||!rule.limit||!rule.restriction)error(rule.id,'고유 규칙 형식 오류');
 return issues;
}
