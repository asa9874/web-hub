import {ORGANIZATION_TYPES} from '../data/social/config';
import type {Issue} from '../types';
import type {CharacterAffiliations,OrganizationDefinition} from '../types/organization';
import type {Character} from '../types/character';
import {organizationRegistry,organizationWithin} from './organizations';
import {POSITION_AFFILIATION_BINDINGS,ACADEMY_YEAR_POSITIONS} from '../data/organizations/bindings';
import {positionRegistry} from './socialRules';
export function validateOrganizations(entries:readonly OrganizationDefinition[]):Issue[]{
 const issues:Issue[]=[],registry=new Map<string,OrganizationDefinition>(),fail=(id:string,message:string)=>issues.push({id,message});
 for(const entry of entries){if(registry.has(entry.id))fail(entry.id,'조직 ID 중복');registry.set(entry.id,entry);if(!/^[a-z][a-z0-9-]*$/.test(entry.id)||!entry.name||!entry.description||!entry.lore||!entry.kind||!entry.purposes.length||!entry.features.length||!entry.admissionRules.length||!entry.departureRules.length)fail(entry.id,'조직 필수 설정 누락');if(!Number.isInteger(entry.impact)||entry.impact<0||entry.impact>1000)fail(entry.id,'조직 영향력 범위 오류');if(!Object.hasOwn(ORGANIZATION_TYPES,entry.type)||!['continental','national','regional','institution','unit'].includes(entry.scale))fail(entry.id,'조직 유형·규모 오류');if(!['public','restricted','secret'].includes(entry.visibility))fail(entry.id,'조직 공개 범위 오류');}
 for(const entry of entries){if(entry.parentOrganizationId===entry.id)fail(entry.id,'조직 자기 참조');if(entry.parentOrganizationId&&!registry.has(entry.parentOrganizationId))fail(entry.id,'부모 조직 참조 오류');let current:OrganizationDefinition|undefined=entry;const seen=new Set<string>();while(current){if(seen.has(current.id)){fail(entry.id,'조직 계층 순환');break;}seen.add(current.id);current=current.parentOrganizationId?registry.get(current.parentOrganizationId):undefined;}}
 return issues;
}
export function validateCharacterAffiliations(character:CharacterAffiliations&Pick<Character,'schoolYear'|'positions'>,id:string):Issue[]{
 const issues:Issue[]=[],fail=(message:string)=>issues.push({id,message}),rows=character.affiliations;
 if(!Array.isArray(rows))return [{id,message:'공통 직접 소속 목록 누락'}];
 const seen=new Set<string>();for(const row of rows){if(!organizationRegistry.has(row.organizationId))fail('존재하지 않는 소속: '+row.organizationId);if(seen.has(row.organizationId))fail('중복 직접 소속');seen.add(row.organizationId);if(!['public','secret'].includes(row.visibility))fail('직접 소속 공개 범위 오류');if(rows.some(other=>other.organizationId!==row.organizationId&&organizationWithin(other.organizationId,row.organizationId)))fail('상위·하위 소속 중복 저장');}
 if(character.primaryOrganizationId&&!rows.some(a=>a.organizationId===character.primaryOrganizationId))fail('대표 소속 미보유');
 const has=(scope:string)=>rows.some(a=>organizationWithin(a.organizationId,scope));
 const years=character.positions.filter(p=>p.definitionId in ACADEMY_YEAR_POSITIONS);if(years.some(p=>ACADEMY_YEAR_POSITIONS[p.definitionId]!==character.schoolYear))fail('학년 직급과 캐릭터 학적 충돌');
 if(character.schoolYear>0&&!years.length)fail('재학생의 학년 직급 누락');
 for(const holding of character.positions){const binding=POSITION_AFFILIATION_BINDINGS.find(b=>b.positionId===holding.definitionId);if(!binding?.required)continue;const scope=binding.scope==='holding'?holding.organizationId:binding.organizationId!;if(!organizationRegistry.has(scope)||!has(scope))fail('직급의 필수 소속 미충족: '+holding.definitionId+' → '+scope);}
 return issues;
}
export function validateOrganizationBindings(){return POSITION_AFFILIATION_BINDINGS.filter(b=>!positionRegistry.has(b.positionId)||(b.scope==='fixed'&&!organizationRegistry.has(b.organizationId??''))).map(b=>({id:b.positionId,message:'직급·소속 연결 참조 오류'}));}
export const organizationIssues=[...validateOrganizations([...organizationRegistry.values()]),...validateOrganizationBindings()];
