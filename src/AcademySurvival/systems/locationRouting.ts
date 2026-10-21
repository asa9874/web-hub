import type {Character} from '../types/character';
import type {MovementMode,RouteResult} from '../types/location';
import {locationCatalog} from './locationRegistry';
import type {LocationCatalog} from './locationRegistry';
import {MOVEMENT_V1} from '../data/locations/config';
import {accessDenials,canEnterLocation,mobilityReasons,travelFactor} from './locationAccess';
import {assertAbsoluteMinute,MAX_ABSOLUTE_MINUTE} from './calendar';
/** Dijkstra over time-labelled simple paths. A later arrival must not be discarded when an earlier one meets a closed door. No implicit waiting or cycling to wait. */
export function findRoute(character:Character,from:string,to:string,departureTime:number,mode:MovementMode='walk',catalog:LocationCatalog=locationCatalog):RouteResult{
 assertAbsoluteMinute(departureTime);const fail=(reasons:string[],expanded=0):RouteResult=>({ok:false,reasons,routeLocationIds:[],legs:[],travelMinutes:0,distanceMeters:0,arrivalTime:departureTime,expanded});
 if(!catalog.nodes.has(from)||!catalog.nodes.has(to))return fail(['존재하지 않는 출발지 또는 목적지']);
 if(from===to)return {...fail([]),ok:true,routeLocationIds:[from]};
 const blocked=mobilityReasons(character,mode);if(blocked.length)return fail(blocked);
 type Label={at:string;raw:number;route:string[];legs:RouteResult['legs'];distance:number};
 const queue:Label[]=[{at:from,raw:0,route:[from],legs:[],distance:0}],denials=new Set<string>();let expanded=0;
 while(queue.length){queue.sort((a,b)=>Math.ceil(a.raw)-Math.ceil(b.raw)||a.raw-b.raw);const label=queue.shift()!;
  if(++expanded>MOVEMENT_V1.maxRouteLabels)return fail(['경로 탐색 한도 초과: 조건을 좁히거나 이동 그래프를 점검하세요.'],expanded);
  if(label.at===to)return {ok:true,reasons:[],routeLocationIds:label.route,legs:label.legs,travelMinutes:Math.ceil(label.raw),distanceMeters:label.distance,arrivalTime:departureTime+Math.ceil(label.raw),expanded};
  for(const {connection:e,to:next} of catalog.adjacency.get(label.at)??[]){
   if(label.route.includes(next))continue;if(!e.allowedModes.includes(mode)){denials.add('해당 연결에서 선택한 이동 방식을 사용할 수 없습니다.');continue;}
   const base=Math.max(e.baseTravelMinutes,(e.distanceMeters??0)/MOVEMENT_V1.walkMetersPerMinute),cost=mode==='teleport'?0:Math.max(1,base*MOVEMENT_V1.terrain[e.terrainType]*travelFactor(character,mode));
   const raw=label.raw+cost,leave=departureTime+Math.ceil(label.raw),arrive=departureTime+Math.ceil(raw);if(raw>MOVEMENT_V1.maxRouteMinutes||arrive>MAX_ABSOLUTE_MINUTE){denials.add('지원 이동 시간 범위 초과');continue;}
   const reasons=[...accessDenials(character,e.accessRules,leave),...accessDenials(character,e.accessRules,arrive),...canEnterLocation(character,next,leave,catalog,label.at).reasons,...canEnterLocation(character,next,arrive,catalog,label.at).reasons.map(r=>`도착 시각: ${r}`)];
   if(reasons.length){reasons.forEach(r=>denials.add(r));continue;}
   queue.push({at:next,raw,route:[...label.route,next],distance:label.distance+(e.distanceMeters??0),legs:[...label.legs,{connectionId:e.id,from:label.at,to:next,departureTime:leave,arrivalTime:arrive,distanceMeters:e.distanceMeters??0}]});
  }
 }
 return fail(['유효한 이동 경로가 없습니다.',...[...denials].slice(0,12)],expanded);
}
export const calculateTravelTime=(...args:Parameters<typeof findRoute>)=>findRoute(...args);
