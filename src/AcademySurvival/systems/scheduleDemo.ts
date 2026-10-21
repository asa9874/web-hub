import type {Character} from '../types/character';
import {normalizeAffiliations} from './organizations';
import type {ScheduleRole} from '../types/schedule';
/** Explicit sandbox role seed, never applied to real characters or fixed templates. */
export function prepareScheduleDemoCharacter(source:Character,role:ScheduleRole):Character{
 const c=structuredClone(source);if(role==='student'){c.location={characterId:c.id,currentLocationId:'academy-dorm',homeLocationId:'academy-dorm',movement:null};return c;}
 c.schoolYear=0;c.positions=c.positions.filter(p=>!p.definitionId.startsWith('position-academy-year-'));c.primaryPositionId=undefined;
 if(role==='demon-worker'){c.affiliations=[...c.affiliations,{organizationId:'demon-executive',visibility:'public'}];c.primaryOrganizationId='demon-executive';c.location={characterId:c.id,currentLocationId:'demon-residence',homeLocationId:'demon-residence',movement:null};c.accessPermissions=[...(c.accessPermissions??[]),'demon-office'];}
 else {const positionId=role==='professor'?'position-professor':role==='guard'?'position-academy-guard':'position-academy-librarian';c.positions.push({definitionId:positionId,organizationId:'academy-main'});c.primaryPositionId=positionId;c.affiliations=[...c.affiliations,{organizationId:'academy-main',visibility:'public'}];c.primaryOrganizationId='academy-main';c.location={characterId:c.id,currentLocationId:'academy-staff-residence',homeLocationId:'academy-staff-residence',movement:null};}
 Object.assign(c,normalizeAffiliations(c));c.background.push(`개발 샌드박스 역할 시드: ${role}. 실제 회차·고정 설정에 반영하지 않는다.`);return c;
}
