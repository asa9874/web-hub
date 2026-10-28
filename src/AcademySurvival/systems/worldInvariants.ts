import type {AiSandboxSave} from './aiSandbox';
import {createAiSandbox} from './aiSandbox';
import type {WorldSimulationSave} from '../types/worldSimulation';
import type {ValidationIssue} from '../types/validation';
import {imperialToAbyss,abyssToImperial,toImperialDate} from './calendar';

/** Observes an isolated snapshot. Validation never repairs or recalls game state. */
export function checkWorldInvariants(input:WorldSimulationSave|AiSandboxSave,previousTime?:number):ValidationIssue[]{
 const data=input.version==='world-simulation-v1'?input.world:input,now=data.world.absoluteMinute,issues:ValidationIssue[]=[];
 const issue=(code:string,message:string,extra:Partial<ValidationIssue>={})=>issues.push({code,severity:'error',message,worldTime:now,...extra});
 if(previousTime!==undefined&&now<previousTime)issue('TIME_REVERSED','세계 시각 역행',{expected:previousTime,actual:now,suspectedSystem:'gameTime'});
 try{const date=toImperialDate(now);if(JSON.stringify(abyssToImperial(imperialToAbyss(date)))!==JSON.stringify(date))issue('CALENDAR_ROUNDTRIP','달력 왕복 불일치');}catch(e){issue('WORLD_TIME',String(e));return issues;}
 const chars=new Map(data.world.characters.map(c=>[c.id,c])),active=data.execution.current.filter(a=>['active','late'].includes(a.status));
 const held=new Map<string,string>();
 for(const a of active){
  const other=held.get(a.characterId);if(other)issue('ACTIVITY_CONFLICT','동일 NPC의 배타적 현재 활동 중복',{characterIds:[a.characterId],activityIds:[other,a.activityId??'unknown'],path:'execution.current',suspectedSystem:'npcSchedules'});
  held.set(a.characterId,a.activityId??'unknown');const c=chars.get(a.characterId);
  if(!c)issue('CHARACTER_REFERENCE','활동 대상 없음',{characterIds:[a.characterId]});
  else if(c.location?.movement||a.targetLocationId&&c.location?.currentLocationId!==a.targetLocationId)issue('ACTIVITY_LOCATION','활동과 실제 위치 불일치',{characterIds:[c.id],locationId:c.location?.currentLocationId,activityIds:[a.activityId??'unknown'],expected:a.targetLocationId,actual:c.location?.movement??c.location?.currentLocationId});
  if(a.actualStartTime!==undefined&&(a.actualStartTime>now||a.actualEndTime!==undefined&&a.actualEndTime<a.actualStartTime))issue('ACTIVITY_TIME','활동 시각 모순',{characterIds:[a.characterId],actual:a});
 }
 const joint=new Map<string,string>();
 for(const i of data.interactions?.instances??[])if(i.status==='active')for(const id of i.definitionId==='avoid'?[i.initiatorCharacterId]:[i.initiatorCharacterId,i.targetCharacterId]){
  if(joint.has(id))issue('JOINT_ACTIVITY_CONFLICT','동시 공동 활동 잠금 중복',{characterIds:[id],activityIds:[joint.get(id)!,i.id],suspectedSystem:'interactions'});joint.set(id,i.id);
  const c=chars.get(id);if(!c||c.location?.movement||c.location?.currentLocationId!==i.locationId)issue('JOINT_LOCATION','공동 활동 참여자 위치 불일치',{characterIds:[id],locationId:i.locationId,activityIds:[i.id]});
 }
 const unique=(ids:string[],path:string)=>{const seen=new Set<string>();for(const id of ids){if(seen.has(id))issue('DUPLICATE_ID','중복 식별자',{path,actual:id});seen.add(id);}};
 unique(data.world.characters.map(c=>c.id),'world.characters');unique(data.outcomes?.applied.map(a=>a.id)??[],'outcomes.applied');unique(data.worldEvents?.instances.map(e=>e.id)??[],'worldEvents.instances');
 // Existing canonical loaders own stat/need/status/reference/RNG/queue/DAG validation.
 try{const restored=createAiSandbox(data,{enableLod:!!data.simulation});
  for(const c of data.world.characters)if(c.location?.movement&&restored.world.getCharacterIdsAtLocation(c.location.currentLocationId).includes(c.id))issue('MOVING_POPULATION','이동 인물의 정지 인원 중복',{characterIds:[c.id]});
  for(const error of restored.worldEvents?.getDiagnostics()??[])issue('EVENT_GRAPH',error,{suspectedSystem:'worldEvents'});
 }catch(error){issue('SNAPSHOT_CONTRACT',error instanceof Error?error.message:String(error),{suspectedSystem:'canonical-loaders'});}
 return issues;
}

/** Only keyed collections are sorted. Ordered histories/lineage/route arrays retain semantics. */
export function canonicalWorldState(input:WorldSimulationSave|AiSandboxSave):unknown{
 const raw=structuredClone(input.version==='world-simulation-v1'?input.world:input);
 raw.execution.wakes.sort((a,b)=>a.at-b.at||a.id.localeCompare(b.id));
 const normalize=(value:unknown):unknown=>typeof value==='number'&&Object.is(value,-0)?0:Array.isArray(value)?value.map(normalize):value&&typeof value==='object'?Object.fromEntries(Object.entries(value).sort(([a],[b])=>a.localeCompare(b)).map(([k,v])=>[k,normalize(v)])):value;
 return normalize(raw);
}
export function firstWorldDifference(expected:unknown,actual:unknown,path='$'): {path:string;expected:unknown;actual:unknown}|undefined{
 if(Object.is(expected,actual))return;if(typeof expected!==typeof actual||!expected||!actual||typeof expected!=='object')return {path,expected,actual};
 const a=expected as Record<string,unknown>,b=actual as Record<string,unknown>;
 for(const k of [...new Set([...Object.keys(a),...Object.keys(b)])].sort()){const result=firstWorldDifference(a[k],b[k],`${path}.${k}`);if(result)return result;}
}
