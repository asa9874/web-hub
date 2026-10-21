import type {Character} from '../types/character';
import type {LocationLog,MovementMode} from '../types/location';
import type {GameClock} from './gameTime';
import type {LocationCatalog} from './locationRegistry';
import {locationCatalog} from './locationRegistry';
import {findRoute} from './locationRouting';
import {canEnterLocation,canTraverseConnection,mobilityReasons} from './locationAccess';
import {MOVEMENT_V1} from '../data/locations/config';
import {assertAbsoluteMinute} from './calendar';
export function characterLocationIssues(c:Character,catalog:LocationCatalog=locationCatalog):string[]{
 if(!c.location)return ['활성 캐릭터 위치 미설정'];const l=c.location,issues:string[]=[];
 if(!c.id||l.characterId!==c.id)issues.push('위치 소유자 ID 불일치');
 if(!l.currentLocationId)issues.push('현재 위치 ID 누락');
 for(const id of [l.currentLocationId,l.homeLocationId,l.primaryLocationId])if(id!==undefined&&!catalog.nodes.has(id))issues.push(`존재하지 않는 장소 참조: ${id}`);
 const m=l.movement;if(m){
  if(!m.legs.length||!Number.isInteger(m.nextLeg)||m.nextLeg<0||m.nextLeg>=m.legs.length||m.routeLocationIds.length!==m.legs.length+1)issues.push('이동 구간 구조 오류');
  if(m.originLocationId!==m.routeLocationIds[0]||m.destinationLocationId!==m.routeLocationIds.at(-1)||l.currentLocationId!==m.routeLocationIds[m.nextLeg]||m.departureTime!==m.legs[0]?.departureTime||m.arrivalTime!==m.legs.at(-1)?.arrivalTime)issues.push('이동 경로 불일치');
  for(const [i,leg] of m.legs.entries()){const e=catalog.edges.get(leg.connectionId);if(!e||!(e.fromLocationId===leg.from&&e.toLocationId===leg.to||e.bidirectional&&e.toLocationId===leg.from&&e.fromLocationId===leg.to)||m.routeLocationIds[i]!==leg.from||m.routeLocationIds[i+1]!==leg.to)issues.push('이동 연결 참조 오류');if(!Number.isSafeInteger(leg.departureTime)||!Number.isSafeInteger(leg.arrivalTime)||leg.arrivalTime<leg.departureTime||i>0&&m.legs[i-1].arrivalTime!==leg.departureTime)issues.push('이동 시간 오류');try{assertAbsoluteMinute(leg.departureTime);assertAbsoluteMinute(leg.arrivalTime);}catch{issues.push('이동 절대 시간 범위 오류');}}
 }
 return issues;
}
export interface LocationWorldSnapshot {version:'location-v1';absoluteMinute:number;characters:Character[]}
/** Owns cloned active records. There is one clock subscription, never one advancing clock per NPC. */
export function createLocationWorld({clock,characters,catalog=locationCatalog,allowForcePlacement=false,autoConnect=true}:{clock:GameClock;characters:Character[];catalog?:LocationCatalog;allowForcePlacement?:boolean;autoConnect?:boolean}){
 const actorListeners=new Set<(event:{kind:string;id:string})=>void>();
 const emitActor=(kind:string,id:string)=>{for(const fn of actorListeners)fn({kind,id});};
 const actors=new Map<string,Character>(),listeners=new Set<()=>void>();let revision=0,sequence=0,logs:LocationLog[]=[],disconnect:(()=>void)|undefined;
 const notify=()=>{if(clock.isProcessingTimeline())return;revision++;listeners.forEach(fn=>fn());};
 const log=(type:LocationLog['type'],message:string,characterId?:string,at=clock.getSnapshot())=>{logs.push({id:++sequence,at,type,message,characterId});if(logs.length>MOVEMENT_V1.maxLogs)logs=logs.slice(-MOVEMENT_V1.maxLogs);};
 const actor=(id:string)=>{const c=actors.get(id);if(!c)throw new Error(`활성 캐릭터 없음: ${id}`);return c;};
 const register=(c:Character)=>{if(actors.has(c.id))throw new Error(`캐릭터 ID 중복: ${c.id}`);const issues=characterLocationIssues(c,catalog);if(issues.length)throw new Error(`${c.name}: ${issues.join(', ')}`);actors.set(c.id,structuredClone(c));};
 characters.forEach(register);
 const stationary=(id:string)=>[...actors.values()].filter(c=>c.location!.currentLocationId===id&&!c.location!.movement);
 const cancel=(id:string,reason='이동 취소',at=clock.getSnapshot())=>{const c=actor(id);if(!c.location!.movement)return false;c.location!.movement=null;emitActor('cancel',id);log('cancel',`${c.name}: ${reason} · ${catalog.getLocation(c.location!.currentLocationId).name}에 정지`,id,at);return true;};
 const checkLeg=(c:Character,index:number)=>{const m=c.location!.movement!,leg=m.legs[index],e=catalog.edges.get(leg.connectionId);return [...mobilityReasons(c,m.movementMode),...(!e||!e.allowedModes.includes(m.movementMode)?['이동 연결 또는 방식이 변경되었습니다.']:[]),...canTraverseConnection(c,leg.connectionId,leg.departureTime,catalog).reasons,...canTraverseConnection(c,leg.connectionId,leg.arrivalTime,catalog).reasons,...canEnterLocation(c,leg.to,leg.departureTime,catalog,leg.from).reasons,...canEnterLocation(c,leg.to,leg.arrivalTime,catalog,leg.from).reasons];};
 const advanceMovement=(gameTime:number)=>{
  assertAbsoluteMinute(gameTime);if(gameTime!==clock.getSnapshot())throw new Error('공통 세계 시각과 다른 시각으로 이동을 갱신할 수 없습니다.');
  // Event-driven: each pending segment processed exactly once, including intermediate arrivals in a large jump.
  while(true){let next:Character|undefined,earliest=Infinity;for(const c of actors.values()){const m=c.location!.movement;if(m&&m.legs[m.nextLeg].arrivalTime<=gameTime&&m.legs[m.nextLeg].arrivalTime<earliest){next=c;earliest=m.legs[m.nextLeg].arrivalTime;}}if(!next)break;
   const m=next.location!.movement!,leg=m.legs[m.nextLeg],reasons=checkLeg(next,m.nextLeg),cap=catalog.getLocation(leg.to).capacity;
   if(cap!==undefined&&stationary(leg.to).length>=cap)reasons.push('도착 장소의 수용 인원이 가득 찼습니다.');
   if(reasons.length){cancel(next.id,reasons.join(' / '),earliest);continue;}
   next.location!.currentLocationId=leg.to;m.nextLeg++;
   if(m.nextLeg===m.legs.length){next.location!.movement=null;emitActor('arrival',next.id);log('arrival',`${next.name} → ${catalog.getLocation(leg.to).name} 도착`,next.id,earliest);}
   else {emitActor('waypoint',next.id);log('waypoint',`${next.name} → ${catalog.getLocation(leg.to).name} 경유`,next.id,earliest);const changed=checkLeg(next,m.nextLeg);if(changed.length)cancel(next.id,changed.join(' / '),earliest);}
  }
 };
 const connect=()=>{if(!disconnect){const stopTimeline=clock.subscribeTimeline({priority:0,nextEventTime:(current,limit)=>{let next=Infinity;for(const c of actors.values()){const m=c.location!.movement;if(m)next=Math.min(next,m.legs[m.nextLeg].arrivalTime);}return next<=limit?Math.max(current,next):null;},processAt:advanceMovement,onSeek:change=>{for(const c of actors.values())cancel(c.id,'시간 직접 설정·불러오기: 남은 이동 취소',change.to);}});
 const stopChanges=clock.subscribeChanges(change=>{if(change.reason==='advance')advanceMovement(change.to);log('time',`세계 시간 ${change.elapsedMinutes>=0?'+':''}${change.elapsedMinutes}분 · ${change.reason}`,undefined,change.to);notify();});disconnect=()=>{stopTimeline();stopChanges();};}return ()=>{disconnect?.();disconnect=undefined;};};
 if(autoConnect)connect();
 return {
  clock,catalog,connect,subscribeActors:(fn:(event:{kind:string;id:string})=>void)=>{actorListeners.add(fn);return ()=>{actorListeners.delete(fn);};},dispose:()=>{disconnect?.();disconnect=undefined;listeners.clear();actorListeners.clear();},subscribe:(fn:()=>void)=>{listeners.add(fn);return ()=>{listeners.delete(fn);};},getSnapshot:()=>revision,
  getCharacters:()=>structuredClone([...actors.values()]),getCharacter:(id:string)=>structuredClone(actor(id)),getCharacterLocation:(id:string)=>structuredClone(actor(id).location!),getLogs:()=>structuredClone(logs),
  registerCharacter:(c:Character)=>{register(c);emitActor('register',c.id);notify();},
  getCharacterIdsAtLocation:(id:string)=>{catalog.getLocation(id);return stationary(id).map(c=>c.id);},
  getCharactersAtLocation:(id:string)=>{catalog.getLocation(id);return structuredClone(stationary(id));},
  getCharactersInLocationTree:(id:string)=>{const ids=new Set([id,...catalog.getLocationDescendants(id).map(l=>l.id)]);return structuredClone([...actors.values()].filter(c=>ids.has(c.location!.currentLocationId)&&!c.location!.movement));},
  getLocationPopulation:(id:string)=>{const ids=new Set([id,...catalog.getLocationDescendants(id).map(l=>l.id)]);return {direct:stationary(id).length,includingDescendants:[...actors.values()].filter(c=>ids.has(c.location!.currentLocationId)&&!c.location!.movement).length};},
  getTravelers:(locationId?:string)=>{if(locationId)catalog.getLocation(locationId);return structuredClone([...actors.values()].filter(c=>c.location!.movement&&(!locationId||c.location!.movement.routeLocationIds.includes(locationId))));},
  canEnterLocation:(id:string,place:string,time=clock.getSnapshot())=>canEnterLocation(actor(id),place,time,catalog),
  canTraverseConnection:(id:string,edge:string,time=clock.getSnapshot())=>canTraverseConnection(actor(id),edge,time,catalog),
  getAccessDenialReasons:(id:string,place:string,time=clock.getSnapshot())=>canEnterLocation(actor(id),place,time,catalog).reasons,
  findRoute:(id:string,to:string,mode:MovementMode='walk')=>{const c=actor(id);return findRoute(c,c.location!.currentLocationId,to,clock.getSnapshot(),mode,catalog);},
  requestMovement:(id:string,to:string,mode:MovementMode='walk')=>{const c=actor(id);if(c.location!.movement){const result={ok:false,reasons:['이미 이동 중입니다. 취소 후 다시 요청하세요.']};log('failure',`${c.name}: ${result.reasons[0]}`,id);notify();return result;}const result=findRoute(c,c.location!.currentLocationId,to,clock.getSnapshot(),mode,catalog);if(!result.ok){log(result.reasons.some(r=>r.includes('시각')||r.includes('허가')||r.includes('필요')||r.includes('입장'))?'denied':'no-route',`${c.name}: ${result.reasons.join(' / ')}`,id);notify();return result;}if(result.legs.length){c.location!.movement={originLocationId:c.location!.currentLocationId,destinationLocationId:to,routeLocationIds:result.routeLocationIds,departureTime:clock.getSnapshot(),arrivalTime:result.arrivalTime,movementMode:mode,legs:result.legs,nextLeg:0};emitActor('movement',id);log('departure',`${c.name}: ${catalog.getLocation(c.location!.currentLocationId).name} → ${catalog.getLocation(to).name} · ${result.travelMinutes}분`,id);if(result.travelMinutes===0)advanceMovement(clock.getSnapshot());}notify();return result;},
  cancelMovement:(id:string)=>{const result=cancel(id);notify();return result;},
  forcePlace:(ids:string[],place:string)=>{if(!allowForcePlacement)throw new Error('강제 배치는 개발 샌드박스에서만 허용됩니다.');catalog.getLocation(place);ids.forEach(actor);for(const id of new Set(ids)){const c=actor(id);c.location!.currentLocationId=place;c.location!.movement=null;emitActor('placement',id);log('placement',`${c.name} → ${catalog.getLocation(place).name} 강제 배치 (경로·출입 우회)`,id);}notify();},
  updateCharacter:(id:string,update:(c:Character)=>Character)=>{const old=actor(id),changed=structuredClone(update(structuredClone(old)));if(changed.id!==id||JSON.stringify(changed.location)!==JSON.stringify(old.location))throw new Error('위치·ID는 전용 이동 API로만 변경하세요.');const issues=characterLocationIssues(changed,catalog);if(issues.length)throw new Error(issues.join(', '));actors.set(id,changed);if(changed.location!.movement){const reasons=checkLeg(changed,changed.location!.movement.nextLeg);if(reasons.length)cancel(id,`이동 도중 조건 변경: ${reasons.join(' / ')}`);}emitActor('update',id);notify();},
  advanceMovement,advanceTime:(minutes:number)=>{const result=clock.advanceTime(minutes);if(result.listenerErrors.length)throw new Error('시간 연동 처리 실패: '+result.listenerErrors.map(String).join(', '));return result;},
  snapshot:():LocationWorldSnapshot=>({version:'location-v1',absoluteMinute:clock.getSnapshot(),characters:structuredClone([...actors.values()])}),
 };
}
export type LocationWorld=ReturnType<typeof createLocationWorld>;
