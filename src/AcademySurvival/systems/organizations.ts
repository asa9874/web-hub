import type {OrganizationDefinition,CharacterAffiliations,CharacterAffiliation} from '../types/organization';
import {organizationDefinitions} from '../data/organizations';
export const organizations=organizationDefinitions;
export const organizationRegistry=new Map(organizations.map(o=>[o.id,o]));
export function organizationPath(id:string,registry:ReadonlyMap<string,OrganizationDefinition>=organizationRegistry):OrganizationDefinition[]{
 const path:OrganizationDefinition[]=[],seen=new Set<string>();let current=registry.get(id);
 while(current&&!seen.has(current.id)){seen.add(current.id);path.unshift(current);current=current.parentOrganizationId?registry.get(current.parentOrganizationId):undefined;}return path;
}
export const organizationWithin=(child:string,parent:string,registry:ReadonlyMap<string,OrganizationDefinition>=organizationRegistry)=>organizationPath(child,registry).some(o=>o.id===parent);
export function normalizeAffiliations(identity:CharacterAffiliations,registry:ReadonlyMap<string,OrganizationDefinition>=organizationRegistry):CharacterAffiliations{
 const affiliations=identity.affiliations.filter((a,i,rows)=>!rows.slice(0,i).some(b=>b.organizationId===a.organizationId)&&!rows.some(b=>b.organizationId!==a.organizationId&&organizationWithin(b.organizationId,a.organizationId,registry)));
 return {affiliations:affiliations.map(a=>({...a})),primaryOrganizationId:affiliations.some(a=>a.organizationId===identity.primaryOrganizationId)?identity.primaryOrganizationId:affiliations[0]?.organizationId};
}
export function addAffiliation(identity:CharacterAffiliations,affiliation:CharacterAffiliation,registry:ReadonlyMap<string,OrganizationDefinition>=organizationRegistry){if(!registry.has(affiliation.organizationId))throw new Error('존재하지 않는 조직: '+affiliation.organizationId);return normalizeAffiliations({...identity,affiliations:[...identity.affiliations,{...affiliation}]},registry);}
export function setPrimaryOrganization(identity:CharacterAffiliations,id:string):CharacterAffiliations|null{return identity.affiliations.some(a=>a.organizationId===id)?{...identity,primaryOrganizationId:id}:null;}
export function removeAffiliation(identity:CharacterAffiliations,id:string){return normalizeAffiliations({...identity,affiliations:identity.affiliations.filter(a=>a.organizationId!==id)});}
export function visibleAffiliations(identity:CharacterAffiliations,developer=false){return identity.affiliations.filter(a=>developer||(a.visibility==='public'&&organizationPath(a.organizationId).every(o=>o.visibility!=='secret')));}
export const organizationSearch=(entry:OrganizationDefinition,query:string)=>[entry.name,entry.description,entry.lore,entry.kind,entry.type,...entry.tags,...(entry.aliases??[])].join(' ').normalize('NFKC').toLocaleLowerCase().includes(query.normalize('NFKC').trim().toLocaleLowerCase());
