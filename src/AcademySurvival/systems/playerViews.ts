import {calculateCharacterImpact} from './characterImpact';
import {characterImpactCatalogs} from './characterImpactCatalogs';
import {ACTIVE_CHARACTER_IMPACT_CONFIG} from '../data/characterImpactConfig';
import type {WorldSimulation} from './worldSimulation';
import {visibleAffiliations,organizationRegistry} from './organizations';
import {activityRegistry} from '../data/schedules';
import {describeClaim} from './memoryPresentation';
import {MEMORY_SOURCES} from '../data/memory';
import {relationshipTypeRegistry} from './relationships';

const impactScores=new WeakMap<object,number>();
export interface PlayerRecord {id:string;at:number;kind:string;source:string;message:string;importance?:number;category?:string}
export function getPlayerRecords(simulation:WorldSimulation,playerId:string):PlayerRecord[]{
 const {world,knowledge}=simulation.runtime;
 const memories=(knowledge?.getCharacterMemories(playerId)??[]).filter(m=>!m.isForgotten).map(m=>({id:m.id,at:m.createdAt,kind:'information',importance:m.importance,category:m.category,source:MEMORY_SOURCES[m.source],message:describeClaim(knowledge!.getMemoryClaim(playerId,m.id),id=>world.hasCharacter(id)?world.getCharacterReadSnapshot(id).name:'알 수 없는 인물')}));
 const movement=world.getLogs().filter(l=>l.characterId===playerId&&l.type!=='time').map(l=>({id:'movement/'+l.id,at:l.at,kind:'movement',source:'나의 이동',message:l.message}));
 return [...memories,...movement].sort((a,b)=>b.at-a.at||a.id.localeCompare(b.id)).slice(0,60);
}

/** Ordinary play projections. Never return an unfiltered NPC/model/decision/graph. */
export function getPlayerView(simulation:WorldSimulation,playerId:string,observedLocationId?:string){
 const {world,schedule,graph}=simulation.runtime,player=world.getCharacterReadSnapshot(playerId),now=world.clock.getSnapshot();
 const here=player.location!.currentLocationId,locationId=observedLocationId??here,place=world.catalog.getLocation(locationId),canObserve=!player.location!.movement&&locationId===here;
 const nearby=canObserve?world.getCharacterIdsAtLocation(here).filter(id=>id!==playerId).map(id=>{
  const c=world.getCharacterReadSnapshot(id),activity=schedule.getCurrentActivity(id),ownRelation=graph.getRelationship(playerId,id);
  let impact=impactScores.get(c);if(impact===undefined){impact=calculateCharacterImpact(c,characterImpactCatalogs,ACTIVE_CHARACTER_IMPACT_CONFIG).impact;impactScores.set(c,impact);}
  return {id:c.id,name:c.name,impact,impactBand:Math.max(0,Math.ceil(impact/100)-1),schoolYear:c.schoolYear,affiliations:visibleAffiliations(c,false).map(a=>organizationRegistry.get(a.organizationId)?.name??a.organizationId),activity:['active','late'].includes(activity.status)?activityRegistry.get(activity.activityId??'')?.name:'머무는 중',relationship:ownRelation?.familiarity==='known'?{affection:ownRelation.affection,trust:ownRelation.trust,types:ownRelation.relationshipTypeIds.map(type=>relationshipTypeRegistry.get(type)?.name??type)}:null};
 }).sort((a,b)=>b.impact-a.impact||a.id.localeCompare(b.id)):[];
 const records=getPlayerRecords(simulation,playerId);
 return {now,player,location:{id:place.id,name:place.name,path:world.catalog.getLocationFullName(place.id),description:place.description,access:place.accessRules.map(r=>r.description),canObserve},nearby,records,information:records.filter(r=>r.kind==='information').slice(0,40),places:[...world.catalog.nodes.values()].map(p=>({id:p.id,name:world.catalog.getLocationFullName(p.id)}))};
}
