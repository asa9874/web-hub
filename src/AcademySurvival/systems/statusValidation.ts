import type {Condition,Issue} from '../types';
import type {StatusDefinition,StatusEffect} from '../types/status';
import {BODY_PARTS,DURATIONS,POLARITIES,STATUS_CATEGORIES,STATUS_SUBCATEGORIES} from '../data/statuses/config';
const conditionValid=(c:Condition):boolean=>!!c&&(c.kind==='all'||c.kind==='any'?c.conditions.length>0&&c.conditions.every(conditionValid):c.kind==='not'?conditionValid(c.condition):c.kind==='stat'?!!c.key&&Number.isFinite(c.min):c.kind==='trait'?!!c.id:(c.kind==='flag'||c.kind==='tag')&&!!c.key);
export function statusEffectValid(e:StatusEffect):boolean{
 if(!e?.id)return false;
 switch(e.type){
  case 'STAT_MODIFIER':return !!e.target&&Number.isFinite(e.amount);
  case 'CHECK_MODIFIER':return !!e.target&&['score','percentagePoints'].includes(e.unit)&&Number.isFinite(e.amount);
  case 'GROWTH_MODIFIER':case 'EVENT_WEIGHT':case 'ACTION_WEIGHT':return !!e.target&&Number.isFinite(e.multiplier)&&e.multiplier>=0;
  case 'UNLOCK_OPTION':return !!e.option;
  case 'CONDITIONAL_EFFECT':return conditionValid(e.condition)&&e.effects.length>0&&e.effects.every(statusEffectValid);
  case 'SPECIAL_RULE':return false; // Status-specific descriptors use STATUS_RULE, not an unregistered gift rule.
  case 'BLOCK_ACTION':case 'ALLOW_ACTION':return !!e.action&&!!e.reason&&['self','body'].includes(e.scope);
  case 'BODY_FUNCTION':return ['grip','locomotion','sight','speech','hearing','organic','all'].includes(e.function)&&['limited','disabled'].includes(e.mode)&&!!e.reason;
  case 'RESOURCE_RATE':return ['health','mana','stamina'].includes(e.resource)&&Number.isFinite(e.amount)&&e.per==='hour'&&!!e.note;
  case 'STATUS_RULE':return !!e.key&&!!e.trigger&&!!e.target&&!!e.limit&&!!e.description&&['reveal','conceal','transform','restrict','notify','record'].includes(e.operation);
  default:return false;
 }
}
export function validateStatuses(data:StatusDefinition[]):Issue[]{
 const issues:Issue[]=[],fail=(id:string,message:string)=>issues.push({id,message}),ids=new Set<string>(),names=new Set<string>(),texts=new Set<string>();
 if(data.length!==150)fail('statuses','상태 정의는 정확히 150종 필요');
 const recordText=(id:string,text:string)=>{if(!text?.trim()||text.length<12)fail(id,'빈 설명 또는 짧은 설명');else if(texts.has(text.normalize('NFKC').replace(/\s/g,'')))fail(id,'고유 설명 중복');texts.add(text?.normalize('NFKC').replace(/\s/g,''));};
 for(const d of data){
  if(!/^status-[a-z][a-z-]*$/.test(d.id)||ids.has(d.id))fail(d.id,'ID 중복/형식 오류');ids.add(d.id);
  if(!d.name?.trim()||names.has(d.name))fail(d.id,'상태명 중복/공백');names.add(d.name);
  recordText(d.id,d.description);if(!d.systemDescription?.trim())fail(d.id,'시스템 설명 없음');
  if(!(d.categoryId in STATUS_CATEGORIES)||!(d.subcategoryId in STATUS_SUBCATEGORIES)||!(d.polarity in POLARITIES))fail(d.id,'분류/극성 오류');
  if(!Array.isArray(d.eventTags)||d.eventTags.some(t=>!t.trim()))fail(d.id,'이벤트 태그 오류');
  if(d.allowedBodyParts.some(p=>!(p in BODY_PARTS))||new Set(d.allowedBodyParts).size!==d.allowedBodyParts.length||d.bodyRequired!==!!d.allowedBodyParts.length)fail(d.id,'부위 참조/필수 여부 오류');
  if(!['any','organic','mechanical','missing'].includes(d.material))fail(d.id,'재질 규칙 오류');
  if(!(d.duration.type in DURATIONS)||!d.duration.note?.trim()||(d.duration.type==='timed'?!(d.duration.hours!==null&&Number.isFinite(d.duration.hours)&&d.duration.hours>0):d.duration.hours!==null))fail(d.id,'지속 방식 오류');
  if(!['unique','stack'].includes(d.stacking.mode)||!['character','body'].includes(d.stacking.scope)||!['once','per-stack'].includes(d.stacking.effects)||!Number.isInteger(d.stacking.max)||d.stacking.max<1||(d.stacking.mode==='unique'&&d.stacking.max!==1)||(d.stacking.scope==='body'&&!d.bodyRequired))fail(d.id,'중첩 규칙 오류');
  if(!Number.isFinite(d.conflicts.priority)||typeof d.conflicts.replaceOnHigher!=='boolean'||!['character','body'].includes(d.conflicts.scope)||(d.conflicts.group!==null&&!d.conflicts.group.trim()))fail(d.id,'충돌 규칙 오류');
  const checkEffects=(effects:StatusEffect[])=>{if(new Set(effects.map(e=>e.id)).size!==effects.length||effects.some(e=>!statusEffectValid(e)))fail(d.id,'효과 ID/타입/수치 오류');};
  if(!d.effects.length)fail(d.id,'효과 없음');checkEffects(d.effects);
  const triggers=[...d.onset,...d.recovery,...d.worsening];
  if(!d.onset.length||!d.recovery.length||triggers.some(t=>!t.description?.trim()||!conditionValid(t.condition)))fail(d.id,'발생/회복/악화 조건 오류');
  if(new Set(d.stages.map(s=>s.id)).size!==d.stages.length)fail(d.id,'단계 ID 중복');
  d.stages.forEach((s,index)=>{if(s.order!==index||!s.name||!s.id)fail(d.id,'단계 순서/이름 오류');recordText(d.id,s.description);checkEffects(s.effects);if(s.next&&(!d.stages.some(t=>t.id===s.next?.stageId&&t.order>s.order)||!conditionValid(s.next.trigger.condition)||!s.next.trigger.description))fail(d.id,'다음 단계 참조 오류');});
  if(new Set(d.transitions.map(t=>t.id)).size!==d.transitions.length)fail(d.id,'변화 ID 중복');
  for(const t of d.transitions){const target=data.find(x=>x.id===t.to);if((t.to!==null&&!target)||!['worsen','improve','treat','special'].includes(t.kind)||!['preserve','clear'].includes(t.body)||!conditionValid(t.trigger.condition)||!t.trigger.description||(t.stageId&&!d.stages.some(s=>s.id===t.stageId)))fail(d.id,'상태 변화 참조/조건 오류');if(t.body==='preserve'&&target?.bodyRequired&&!d.allowedBodyParts.some(p=>target.allowedBodyParts.includes(p)))fail(d.id,'변화 경로의 부위 호환 없음');if(t.loop&&(!t.loop.id||!t.loop.reason))fail(d.id,'의도된 순환 사유 없음');}
 }
 const visiting=new Set<string>(),done=new Set<string>();
 const visit=(id:string)=>{if(visiting.has(id)){fail(id,'의도하지 않은 변화 순환');return;}if(done.has(id))return;visiting.add(id);data.find(d=>d.id===id)?.transitions.filter(t=>t.to&&!t.loop).forEach(t=>visit(t.to!));visiting.delete(id);done.add(id);};data.forEach(d=>visit(d.id));
 return issues;
}
