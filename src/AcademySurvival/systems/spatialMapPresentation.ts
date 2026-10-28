import type {LocationCatalog} from './locationRegistry';
import {campusMapPositions} from '../data/campusMap';
export type MapScope='academy'|'capital'|'demon'|'all';
export function createSpatialMap(catalog:LocationCatalog,scope:MapScope,interiorId=''){
 const rootId=interiorId||(scope==='academy'?'academy':scope==='capital'?'imperial-capital':scope==='demon'?'demon-castle-place':'world');
 const all=[...catalog.nodes.values()],interior=!!interiorId;
 const locations=scope==='all'&&!interior?all.filter(l=>['realm','nation','city'].includes(l.type)).slice(0,40):all.filter(l=>l.parentId===rootId);
 const points=locations.map((location,index)=>{
  const authored=!interior&&scope==='academy'?campusMapPositions[location.id]:undefined;
  return {...location,...authored??{x:interior?150+(index%4)*270:180+(index%4)*280,y:interior?150+Math.floor(index/4)*150:150+Math.floor(index/4)*160,zone:interior?'실내':location.type==='nation'?'국가':'지역',labelOffset:25}};
 });
 const ids=new Set(points.map(p=>p.id));
 const project=(id:string)=>{const ancestors=catalog.getLocationPath(id);for(let i=ancestors.length-1;i>=0;i--)if(ids.has(ancestors[i].id))return points.find(p=>p.id===ancestors[i].id);return undefined;};
 return {rootId,interior,points,project,width:1200,height:Math.max(800,200+Math.ceil(points.length/4)*150)};
}
