import {locations,locationConnections} from '../data/locations';
import type {LocationDefinition,LocationConnection,AccessRule} from '../types/location';
import {organizationRegistry} from './organizations';
import {calendarRegistry} from '../data/calendars';
import {positionRegistry} from './socialRules';
import {traitRegistry} from './registry';
export function createLocationCatalog(definitions:readonly LocationDefinition[],connections:readonly LocationConnection[]){
 const nodes=new Map<string,LocationDefinition>(),edges=new Map<string,LocationConnection>(),children=new Map<string,string[]>(),adjacency=new Map<string,{connection:LocationConnection;to:string}[]>();
 for(const l of definitions){if(nodes.has(l.id))throw new Error(`장소 ID 중복: ${l.id}`);nodes.set(l.id,structuredClone(l));}
 const rules=(rs:AccessRule[])=>{for(const r of rs){if(!r.description)throw new Error('출입 조건 설명 누락');if(r.type==='time'){for(const t of [r.start,r.end])if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(t))throw new Error(`잘못된 출입 시간: ${t}`);}else if(r.type==='organization'){for(const id of r.organizationIds)if(!organizationRegistry.has(id))throw new Error(`소속 참조 오류: ${id}`);}else if(r.type==='position'){for(const id of r.positionIds)if(!positionRegistry.has(id))throw new Error(`직급 참조 오류: ${id}`);if(r.organizationId&&!organizationRegistry.has(r.organizationId))throw new Error('직급 관할 오류');}else if(r.type==='condition'){const visit=(c:typeof r.condition):void=>{if(c.kind==='trait'&&!traitRegistry.has(c.id))throw new Error(`특성 참조 오류: ${c.id}`);if(c.kind==='all'||c.kind==='any')c.conditions.forEach(visit);if(c.kind==='not')visit(c.condition);};visit(r.condition);}else if(r.type==='all'||r.type==='any'){if(!r.rules.length)throw new Error('빈 복합 조건');rules(r.rules);}else if(r.type==='not')rules([r.rule]);else if(r.type==='permission'&&!r.permissionId)throw new Error('허가 ID 누락');}};
 for(const l of nodes.values()){
  if(!l.id||!l.name||!l.description||l.parentId===l.id||l.parentId!==null&&!nodes.has(l.parentId))throw new Error(`장소 부모·필수 데이터 오류: ${l.id}`);
  if(l.organizationId&&!organizationRegistry.has(l.organizationId)||l.calendarId&&!calendarRegistry.has(l.calendarId))throw new Error(`장소 외부 참조 오류: ${l.id}`);
  if(l.capacity!==undefined&&(!Number.isInteger(l.capacity)||l.capacity<1)||!Number.isInteger(l.dangerLevel)||l.dangerLevel<0)throw new Error(`장소 수치 오류: ${l.id}`);
  const seen=new Set<string>();let cursor:LocationDefinition|undefined=l;while(cursor){if(seen.has(cursor.id))throw new Error(`장소 순환: ${l.id}`);seen.add(cursor.id);cursor=cursor.parentId?nodes.get(cursor.parentId):undefined;}
  if(l.parentId)children.set(l.parentId,[...(children.get(l.parentId)??[]),l.id]);rules(l.accessRules);
 }
 for(const c of connections){if(!c.id||edges.has(c.id)||!nodes.has(c.fromLocationId)||!nodes.has(c.toLocationId)||c.fromLocationId===c.toLocationId||!Number.isFinite(c.baseTravelMinutes)||c.baseTravelMinutes<0||c.distanceMeters!==undefined&&(!Number.isFinite(c.distanceMeters)||c.distanceMeters<0)||!['normal','rough'].includes(c.terrainType)||!c.allowedModes.length||c.allowedModes.some(m=>!['walk','run','ride','teleport'].includes(m)))throw new Error(`이동 연결 오류: ${c.id}`);rules(c.accessRules);const owned=structuredClone(c);edges.set(c.id,owned);adjacency.set(c.fromLocationId,[...(adjacency.get(c.fromLocationId)??[]),{connection:owned,to:c.toLocationId}]);if(c.bidirectional)adjacency.set(c.toLocationId,[...(adjacency.get(c.toLocationId)??[]),{connection:owned,to:c.fromLocationId}]);}
 const getLocation=(id:string)=>{const l=nodes.get(id);if(!l)throw new Error(`존재하지 않는 장소: ${id}`);return l;};
 const getLocationPath=(id:string)=>{const path:LocationDefinition[]=[];let l:LocationDefinition|undefined=getLocation(id);while(l){path.push(l);l=l.parentId?nodes.get(l.parentId):undefined;}return path.reverse();};
 // Catalog topology is static; cache only reference lists, never character/time-dependent permission results.
 const entryLocations=new Map<string,Map<string,LocationDefinition[]>>();
 const getEntryLocations=(id:string,from?:string)=>{let sources=entryLocations.get(id);if(!sources){sources=new Map();entryLocations.set(id,sources);}const key=from??'';let row=sources.get(key);if(!row){const already=new Set(from?getLocationPath(from).map(l=>l.id):[]);row=getLocationPath(id).filter(l=>!already.has(l.id));Object.freeze(row);sources.set(key,row);}return row;};
 const getLocationDescendants=(id:string)=>{getLocation(id);const result:LocationDefinition[]=[],queue=[...(children.get(id)??[])];for(let i=0;i<queue.length;i++){result.push(getLocation(queue[i]));queue.push(...(children.get(queue[i])??[]));}return result;};
 return {nodes,edges,adjacency,getEntryLocations,getLocation,getLocationPath,getLocationChildren:(id:string)=>{getLocation(id);return (children.get(id)??[]).map(getLocation);},getLocationAncestors:(id:string)=>getLocationPath(id).slice(0,-1),getLocationDescendants,getLocationFullName:(id:string)=>getLocationPath(id).map(l=>l.name).join(' > '),getLocationDepth:(id:string)=>getLocationPath(id).length-1,
  // Static catalogs are replaced atomically after validation; deleting a parent with children is rejected.
  canDelete:(id:string)=>{getLocation(id);return !(children.get(id)?.length);}};
}
export const locationCatalog=createLocationCatalog(locations,locationConnections);
export type LocationCatalog=ReturnType<typeof createLocationCatalog>;
export const {getLocation,getLocationChildren,getLocationAncestors,getLocationDescendants,getLocationPath,getLocationFullName,getLocationDepth}=locationCatalog;
