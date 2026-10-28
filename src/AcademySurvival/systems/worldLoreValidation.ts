import {races,subraces,geographies,polities,loreRegions,lorePlaces,cultures,initialDiplomacy,travelPlans} from '../data/worldLore';
import type {LocationDefinition} from '../types/location';
import type {OrganizationDefinition} from '../types/organization';
export const worldLoreData={races,subraces,geographies,polities,regions:loreRegions,places:lorePlaces,cultures,diplomacy:initialDiplomacy,travelPlans};
export function worldLoreIssues(data=worldLoreData,external?:{locations:readonly LocationDefinition[];organizations:readonly OrganizationDefinition[]}):string[]{
 const issues:string[]=[],fail=(id:string,message:string)=>issues.push(id+': '+message);
 const globalIds=new Set<string>();
 for(const [kind,rows] of Object.entries(data)){const ids=new Set<string>();for(const row of rows){if(!row.id||ids.has(row.id))fail(kind,'중복/빈 ID '+row.id);ids.add(row.id);if(globalIds.has(row.id))fail(kind,'전역 ID 충돌 '+row.id);globalIds.add(row.id);if('description' in row&&!row.description)fail(row.id,'설명 누락');if('name' in row&&!row.name)fail(row.id,'이름 누락');}}
 const raceMap=new Map(data.races.map(r=>[r.id,r])),subMap=new Map(data.subraces.map(r=>[r.id,r])),geo=new Set(data.geographies.map(g=>g.id)),states=new Map(data.polities.map(p=>[p.id,p])),regions=new Map(data.regions.map(r=>[r.id,r])),places=new Map(data.places.map(p=>[p.id,p])),cultureMap=new Map(data.cultures.map(c=>[c.id,c]));
 const refs=(owner:string,ids:readonly string[],valid:(id:string)=>boolean)=>{if(new Set(ids).size!==ids.length||ids.some(id=>!valid(id)))fail(owner,'참조 또는 중복 오류: '+ids.join(','));};
 for(const r of data.races){refs(r.id,r.subraceIds,id=>subMap.get(id)?.raceId===r.id);refs(r.id,r.originGeographyIds,id=>geo.has(id));if(!Number.isInteger(r.lifespan.min)||!Number.isInteger(r.lifespan.max)||r.lifespan.min<=0||r.lifespan.max<r.lifespan.min||r.lifespan.status!=='reference')fail(r.id,'수명 참고 범위 오류');}
 for(const s of data.subraces)if(!raceMap.get(s.raceId)?.subraceIds.includes(s.id))fail(s.id,'종족·계통 역참조 오류');
 for(const p of data.polities){refs(p.id,p.geographyIds,id=>geo.has(id));refs(p.id,p.centralRaceIds,id=>raceMap.has(id as never));refs(p.id,p.cultureIds,id=>cultureMap.has(id));refs(p.id,p.regionIds,id=>regions.get(id)?.polityIds.includes(p.id)??false);if(places.get(p.capitalSettlementId)?.polityId!==p.id)fail(p.id,'수도/중심 정착지 국가 불일치');if(p.calendarId&&!['imperial','abyss'].includes(p.calendarId)||!p.government)fail(p.id,'공통 달력/정치 체제 오류');}
 for(const r of data.regions){refs(r.id,r.geographyIds,id=>geo.has(id));refs(r.id,r.polityIds,id=>states.get(id)?.regionIds.includes(r.id)??false);}
 for(const p of data.places){const region=regions.get(p.regionId);if(!region||p.polityId&&!region.polityIds.includes(p.polityId))fail(p.id,'지역·국가 불일치');refs(p.id,p.raceIds,id=>raceMap.has(id as never));refs(p.id,p.cultureIds,id=>cultureMap.has(id));}
 for(const c of data.cultures)refs(c.id,c.polityIds,id=>states.has(id));
 const pairs=new Set<string>();for(const r of data.diplomacy){const pair=[...r.polityIds].sort().join('|');if(r.polityIds.length!==2||r.polityIds[0]===r.polityIds[1]||r.polityIds.some(id=>!states.has(id))||pairs.has(pair))fail(r.id,'초기 외교 쌍 참조/중복 오류');pairs.add(pair);}
 for(const r of data.travelPlans)if(!places.has(r.fromPlaceId)||!places.has(r.toPlaceId)||r.fromPlaceId===r.toPlaceId||r.status!=='unconfigured')fail(r.id,'미설정 통행 참조 오류');
 if(external){const locations=new Map(external.locations.map(l=>[l.id,l])),organizations=new Map(external.organizations.map(o=>[o.id,o]));for(const row of [...data.geographies,...data.polities,...data.regions,...data.places])if(!locations.has(row.locationId))fail(row.id,'실제 장소 참조 누락');for(const p of data.polities)refs(p.id,p.organizationIds,id=>organizations.get(id)?.polityId===p.id);for(const o of external.organizations)if(o.polityId&&!states.has(o.polityId))fail(o.id,'조직 국가 참조 오류');}
 return issues;
}
