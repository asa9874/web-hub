import type {LocationDefinition} from '../../types/location';
import type {OrganizationDefinition} from '../../types/organization';
import {WORLD_LORE_VERSION,geographies,polities,loreRegions,lorePlaces,geographyRegistry,polityRegistry,regionRegistry} from './index';
const meta=(status:string)=>({worldLoreVersion:WORLD_LORE_VERSION,loreStatus:status,simulationScope:'definition_only'});
/** Pure idempotent catalog upsert; never touches characters, world time, or dynamic records. */
export function seedLoreLocations(base:readonly LocationDefinition[]):LocationDefinition[]{
 const nodes=new Map(base.map(l=>[l.id,structuredClone(l)]));
 const add=(l:Omit<LocationDefinition,'dangerLevel'|'accessRules'>)=>{if(!nodes.has(l.id))nodes.set(l.id,{dangerLevel:0,accessRules:[],...l});};
 for(const g of geographies)add({id:g.locationId,name:g.name,parentId:'world',type:'region',description:g.description,tags:[g.kind,'world-lore'],activityTags:[],metadata:meta(g.status)});
 for(const p of polities)add({id:p.locationId,name:p.name,parentId:geographyRegistry.get(p.geographyIds[0])!.locationId,type:'nation',description:p.description,calendarId:p.calendarId,organizationId:p.organizationIds[0],tags:['nation','world-lore'],activityTags:[],metadata:meta(p.status)});
 for(const r of loreRegions)add({id:r.locationId,name:r.name,parentId:r.polityIds.length===1?polityRegistry.get(r.polityIds[0])!.locationId:geographyRegistry.get(r.geographyIds[0])!.locationId,type:'region',description:r.description,tags:['region',r.terrain,'world-lore'],activityTags:['rift-observe'],metadata:meta(r.status)});
 for(const p of lorePlaces)add({id:p.locationId,name:p.name,parentId:regionRegistry.get(p.regionId)!.locationId,type:['city','port','village'].includes(p.kind)?'city':'outdoor',description:p.description,tags:[p.kind,'world-lore'],activityTags:[],metadata:meta(p.status)});
 const patch=(id:string,fields:Partial<LocationDefinition>)=>{const old=nodes.get(id);if(old)nodes.set(id,{...old,...fields,metadata:{...old.metadata,...fields.metadata,worldLoreVersion:WORLD_LORE_VERSION}});};
 patch('empire-land',{name:'아스텔 제국',parentId:'continent-erdia',description:polityRegistry.get('astel_empire')!.description});
 patch('imperial-capital',{name:'황도 라디온',parentId:'astel-capital-region',description:'아스텔 제국의 수도. 기존 황궁과 중앙시장 ID 및 이동 연결을 유지한다.'});
 patch('academy',{parentId:'arven-city'});
 patch('demon-land',{name:'마르카디아(마계)',parentId:'world',type:'region',description:geographyRegistry.get('marcadia')!.description,tags:['continent','world-lore'],organizationId:'demon-realm'});
 patch('demon-domain',{name:'카르메인 마왕령',parentId:'demon-land',type:'nation',description:polityRegistry.get('carmine_demon_realm')!.description,calendarId:'abyss',organizationId:'state-carmine-demon-realm'});
 patch('demon-castle-place',{parentId:'carmine-capital'});
 return [...nodes.values()];
}
export function seedLoreOrganizations(base:readonly OrganizationDefinition[]):OrganizationDefinition[]{
 const nodes=new Map(base.map(o=>[o.id,structuredClone(o)]));
 for(const p of polities){const id=p.organizationIds[0];if(!nodes.has(id))nodes.set(id,{id,name:p.name,type:'polity',kind:p.government,description:p.description,lore:p.description,impact:0,impactStatus:'unrated',scale:'national',visibility:'public',purposes:['정치 공동체 운영'],features:[p.government],admissionRules:['시민권과 조직 가입은 독립적으로 확인한다.'],departureRules:['세부 시민권 변경 절차는 미설정'],tags:['world-lore','polity'],calendarId:p.calendarId,polityId:p.id});}
 const old=nodes.get('empire');if(old)nodes.set(old.id,{...old,name:'아스텔 제국',aliases:[...new Set([...(old.aliases??[]),'제국'])],polityId:'astel_empire'});
 const demon=nodes.get('demon-realm');if(demon)nodes.set(demon.id,{...demon,name:'마계 문명권',aliases:[...new Set([...(demon.aliases??[]),'마계'])],kind:'동대륙 문명권 · 조직 네트워크',description:'같은 세계의 마르카디아 대륙에 존재하는 문명·교류권. 단일 국가나 다른 차원이 아니다.',lore:'카르메인·벨카르·아쉬라와 다양한 공동체가 공존한다. 대륙 전체가 마왕의 직접 통치 영토는 아니다.'});
 const beneath=(id:string,ancestor:string)=>{const seen=new Set<string>();let node=nodes.get(id);while(node&&!seen.has(node.id)){if(node.id===ancestor)return true;seen.add(node.id);node=node.parentOrganizationId?nodes.get(node.parentOrganizationId):undefined;}return false;};
 for(const [id,o] of nodes){if(beneath(id,'empire'))o.polityId='astel_empire';else if(['demon-castle','demon-army','demon-noble-council','abyss-academy'].some(root=>beneath(id,root)))o.polityId='carmine_demon_realm';}
 return [...nodes.values()];
}
