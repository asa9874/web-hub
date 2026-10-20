import type {Context} from '../types';
import type {BodyPartId,StatusDefinition,StatusEffect,StatusInstance} from '../types/status';
import {statusRegistry} from './statusRegistry';
import {BODY_PARTS,covers} from '../data/statuses/config';
import {commonEffect} from '../data/statuses/define';
import {resolveEffects} from './effectResolver';
const prostheses=new Set(['status-mechanical-arm','status-mechanical-leg','status-rune-eye','status-metal-lungs']);
export interface ApplyResult {ok:boolean;instances:StatusInstance[];message:string}
const overlap=(a:BodyPartId|undefined,b:BodyPartId|undefined)=>!!a&&!!b&&(covers(a,b)||covers(b,a));
export function validateInstance(i:StatusInstance):string|null{
 const d=statusRegistry.get(i.definitionId);if(!d)return '알 수 없는 상태 정의';
 if(!i.id?.trim()||!i.sourceId?.trim())return '인스턴스/출처 ID 필요';
 if(d.bodyRequired?(!i.bodyPartId||!d.allowedBodyParts.includes(i.bodyPartId)):!!i.bodyPartId)return '적용 불가능한 신체 부위';
 if(d.stages.length?!d.stages.some(s=>s.id===i.stageId):!!i.stageId)return '유효한 단계 선택 필요';
 if(!Number.isInteger(i.stacks)||i.stacks<1||i.stacks>d.stacking.max)return '중첩 한도 오류';
 if(d.duration.type==='timed'?(i.remainingHours===undefined||!Number.isFinite(i.remainingHours)||i.remainingHours<0):i.remainingHours!==undefined)return '남은 시간 오류';
 return null;
}
export function makeInstance(definitionId:string,id:string,stageId?:string,bodyPartId?:BodyPartId):StatusInstance{
 const def=statusRegistry.get(definitionId);return {id,definitionId,stageId:stageId||def?.stages[0]?.id,bodyPartId,stacks:1,sourceId:'debug-manual',...(def?.duration.type==='timed'?{remainingHours:def.duration.hours!}:{})};
}
export function applyStatus(current:StatusInstance[],candidate:StatusInstance,editingId?:string):ApplyResult{
 const reject=(message:string):ApplyResult=>({ok:false,instances:current,message});
 const invalid=validateInstance(candidate);if(invalid)return reject(invalid);
 if(current.some(i=>validateInstance(i)))return reject('기존 인스턴스가 유효하지 않습니다');
 if(new Set(current.map(i=>i.id)).size!==current.length)return reject('기존 인스턴스 ID 중복');
 if(editingId&&!current.some(i=>i.id===editingId))return reject('수정할 인스턴스 없음');
 let others=current.filter(i=>i.id!==editingId);if(others.some(i=>i.id===candidate.id))return reject('인스턴스 ID 중복');
 const d=statusRegistry.get(candidate.definitionId)!;
 const occupied=others.filter(i=>i.bodyPartId&&candidate.bodyPartId&&covers(i.bodyPartId,candidate.bodyPartId)&&(statusRegistry.get(i.definitionId)?.material==='missing'||prostheses.has(i.definitionId)));
 if(d.material==='organic'&&occupied.length)return reject('상실되거나 의체인 부위에는 생체 상태를 적용할 수 없습니다');
 if(d.material==='mechanical'&&!prostheses.has(d.id)&&!occupied.some(i=>prostheses.has(i.definitionId)))return reject('기계 손상에는 해당 부위의 의체가 먼저 필요합니다');
 if(prostheses.has(d.id)&&others.some(i=>prostheses.has(i.definitionId)&&overlap(i.bodyPartId,candidate.bodyPartId)))return reject('같은 부위에 의체가 이미 있습니다');
 if(d.material==='missing'&&occupied.some(i=>prostheses.has(i.definitionId)))return reject('의체를 먼저 제거한 뒤 부위 상실을 기록하세요');
 const duplicate=others.find(i=>i.definitionId===candidate.definitionId&&(d.stacking.scope==='character'||i.bodyPartId===candidate.bodyPartId));
 if(duplicate&&d.stacking.mode==='unique')return reject('같은 상태·부위는 하나의 인스턴스입니다. 단계 변경을 사용하세요');
 // A structural change replaces covered organic conditions, never emotions or unrelated limbs.
 if(d.material==='missing'||prostheses.has(d.id))others=others.filter(i=>!i.bodyPartId||!candidate.bodyPartId||!covers(candidate.bodyPartId,i.bodyPartId)||!(statusRegistry.get(i.definitionId)?.material==='organic'||statusRegistry.get(i.definitionId)?.material==='missing'||prostheses.has(i.definitionId)));
 const same=others.find(i=>i.definitionId===candidate.definitionId&&(d.stacking.scope==='character'||i.bodyPartId===candidate.bodyPartId));
 if(same){
  if(editingId||d.stacking.mode==='unique')return reject('같은 상태·부위는 하나의 인스턴스입니다. 단계 변경을 사용하세요');
  if(same.stageId!==candidate.stageId)return reject('다른 단계는 중첩하지 않습니다. 단계 변경을 사용하세요');
  if(same.stacks+candidate.stacks>d.stacking.max)return reject(`최대 ${d.stacking.max}중첩입니다`);
  return {ok:true,instances:others.map(i=>i.id===same.id?{...i,stacks:i.stacks+candidate.stacks}:i),message:'기존 인스턴스 중첩 증가 · 남은 시간은 갱신하지 않음'};
 }
 if(d.conflicts.group){
  const clashes=others.filter(i=>{const other=statusRegistry.get(i.definitionId)!;return other.conflicts.group===d.conflicts.group&&(d.conflicts.scope==='character'||other.conflicts.scope==='character'||overlap(i.bodyPartId,candidate.bodyPartId));});
  if(clashes.length){if(!d.conflicts.replaceOnHigher||clashes.some(i=>statusRegistry.get(i.definitionId)!.conflicts.priority>=d.conflicts.priority))return reject('상호 배타 그룹 충돌: 더 높은 우선순위와 교체 허용 필요');others=others.filter(i=>!clashes.includes(i));}
 }
 // Do not strand mechanical damage when moving/replacing its supporting prosthesis.
 const next=[...others,{...candidate}];
 if(next.some(i=>statusRegistry.get(i.definitionId)?.material==='mechanical'&&!prostheses.has(i.definitionId)&&!next.some(base=>prostheses.has(base.definitionId)&&base.bodyPartId&&i.bodyPartId&&covers(base.bodyPartId,i.bodyPartId))))return reject('의체 손상이 남은 부위의 의체를 옮기거나 없앨 수 없습니다');
 return {ok:true,instances:next,message:editingId?'인스턴스 변경 완료':'임시 상태 적용 완료'};
}
export function removeStatus(current:StatusInstance[],id:string):StatusInstance[]{
 const base=current.find(i=>i.id===id);
 return current.filter(i=>i.id!==id&&!(base&&prostheses.has(base.definitionId)&&base.bodyPartId&&i.bodyPartId&&covers(base.bodyPartId,i.bodyPartId)&&statusRegistry.get(i.definitionId)?.material==='mechanical'&&!prostheses.has(i.definitionId)));
}
export function instanceEffects(i:StatusInstance):StatusEffect[]{const d=statusRegistry.get(i.definitionId);return d?[...d.effects.map(e=>({...e,id:'base/'+e.id})),...(d.stages.find(s=>s.id===i.stageId)?.effects??[]).map(e=>({...e,id:`stage/${i.stageId}/${e.id}`}))]:[];}
export function resolveStatuses(instances:StatusInstance[],context:Context){
 const seen=new Set<string>(),valid=instances.filter(i=>{if(validateInstance(i)||seen.has(i.id))return false;seen.add(i.id);return true;});
 const sourcesFor=(rows:StatusInstance[])=>rows.flatMap(i=>{const def=statusRegistry.get(i.definitionId)!;const count=def.stacking.effects==='per-stack'?i.stacks:1;return Array.from({length:count},(_,index)=>({id:i.id+'/'+index,effects:instanceEffects(i).filter(commonEffect)}));});
 const extensions=valid.flatMap(i=>instanceEffects(i).filter(e=>!commonEffect(e)).map(effect=>({instanceId:i.id,definitionId:i.definitionId,bodyPartId:i.bodyPartId,effect,stacks:statusRegistry.get(i.definitionId)!.stacking.effects==='per-stack'?i.stacks:1})));
 const byBody=Object.fromEntries([...new Set(valid.flatMap(i=>i.bodyPartId?[i.bodyPartId]:[]))].map(part=>[part,resolveEffects(sourcesFor(valid.filter(i=>i.bodyPartId===part)),context)]));
 return {common:resolveEffects(sourcesFor(valid.filter(i=>!i.bodyPartId)),context),byBody,extensions};
}
export function actionAvailability(instances:StatusInstance[],action:string,requiredParts:BodyPartId[]=[],requiredFunction?:'grip'|'locomotion'|'sight'|'speech'|'hearing'){
 const reasons:string[]=[],permissions:string[]=[];
 for(const i of instances){if(validateInstance(i))continue;const def:StatusDefinition=statusRegistry.get(i.definitionId)!;
  const relevant=!i.bodyPartId||requiredParts.some(p=>covers(i.bodyPartId!,p));
  for(const effect of instanceEffects(i)){
   if(effect.type==='BLOCK_ACTION'&&effect.action===action&&(effect.scope==='self'||relevant)){
    if(effect.action==='two-handed-weapon'&&i.bodyPartId&&!['left-arm','right-arm','left-hand','right-hand','whole'].includes(i.bodyPartId))continue;
    reasons.push(effect.reason);
   }
   if(effect.type==='BODY_FUNCTION'&&effect.mode==='disabled'&&relevant&&(effect.function==='all'||effect.function===requiredFunction))reasons.push(`${i.bodyPartId?BODY_PARTS[i.bodyPartId]+': ':''}${effect.reason}`);
   if(effect.type==='ALLOW_ACTION'&&effect.action===action)permissions.push(effect.reason);
  }
  if(def.material==='missing'&&relevant)reasons.push('필요한 신체 부위 상실');
 }
 return {allowed:reasons.length===0,reasons:[...new Set(reasons)],permissions};
}
