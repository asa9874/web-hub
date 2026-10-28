import {culturalProfileIssues} from './cultureLife';
import {characterWorldIdentityIssues} from './worldIdentity';
import {characterLocationIssues} from './locationWorld';
import {validateMoralityProfile} from './morality';
import {validateCharacterAffiliations} from './organizationValidation';
import type {Condition,Entry,Issue} from '../types';
import type {Character,CharacterIdentity,FixedCharacterTemplate} from '../types/character';
import {stats,proficiencyRegistry,statGradeFor} from './knowledgeRegistry';
import {giftRegistry,traitRegistry} from './registry';
import {compatible} from './probability';
import {applyStatus,validateInstance} from './statusApplication';
import {makeInstance} from './statusApplication';
import {randomSlotPool,templateContext,templateOwned} from './characterRules';
import {statusRegistry} from './statusRegistry';
import {validateSocialIdentity} from './socialValidation';
import {socialSlotPool,positionRegistry,titleRegistry,positionConflict} from './socialRules';
const unique=(values:string[])=>new Set(values).size===values.length;
function conditionValid(c:Condition):boolean{
 if(!c||typeof c!=='object')return false;
 switch(c.kind){case 'all':case 'any':return !!c.conditions.length&&c.conditions.every(conditionValid);case 'not':return conditionValid(c.condition);case 'trait':return traitRegistry.has(c.id);case 'stat':return !!c.key&&Number.isFinite(c.min);case 'flag':case 'tag':return !!c.key;default:return false;}
}
function identityIssues(identity:CharacterIdentity,id:string):Issue[]{
 const issues:Issue[]=[];
 if(['name','gender','species','origin','affiliation','title','introduction','summary','objective'].some(key=>!String(identity[key as keyof CharacterIdentity]??'').trim()))issues.push({id,message:'기본 소개/정체성 누락'});
 if(!Number.isInteger(identity.age)||identity.age<0||!Number.isInteger(identity.schoolYear)||identity.schoolYear<0)issues.push({id,message:'나이/학년 오류'});
 if(!identity.background.length||!identity.personality.length||!identity.values.length||!identity.appearance.description||!identity.tendencies.every(t=>t.id&&t.label&&t.description)||!unique(identity.tendencies.map(t=>t.id)))issues.push({id,message:'배경/성격/외형/성향 오류'});
 if(identity.appearance.portrait&&(!identity.appearance.portrait.src||!identity.appearance.portrait.alt))issues.push({id,message:'초상화 참조 오류'});
 return issues;
}
function abilityIssues(traitIds:string[],giftIds:string[],id:string){
 const issues:Issue[]=[],owned:Entry[]=[];
 if(!unique(traitIds)||!unique(giftIds))issues.push({id,message:'특성/기프트 중복'});
 for(const [kind,ids] of [['trait',traitIds],['gift',giftIds]] as const)for(const item of ids){const entry=(kind==='trait'?traitRegistry:giftRegistry).get(item);if(!entry){issues.push({id,message:`${kind} 참조 오류: ${item}`});continue;}if(!compatible(entry,owned))issues.push({id,message:`특성/기프트 충돌: ${item}`});owned.push(entry);}
 return issues;
}
export function validateFixedCharacters(templates:FixedCharacterTemplate[]):Issue[]{
 const issues:Issue[]=[],ids=new Set<string>(),fail=(id:string,message:string)=>issues.push({id,message});
 for(const t of templates){
  issues.push(...validateMoralityProfile(t.moralityProfile??{}).map(message=>({id:t.id,message})));
  issues.push(...validateSocialIdentity(t.social.fixed,t.id),...validateCharacterAffiliations({...t.affiliations,schoolYear:t.identity.schoolYear,positions:t.social.fixed.positions},t.id));
  for(const slot of t.social.randomSlots){
   if(!slot.id||!slot.description||slot.drawAt!=='campaign-start'||!slot.withoutReplacement||!['position','title'].includes(slot.kind)||!slot.candidates.length||!unique(slot.candidates.map(c=>c.entryId+'@'+(c.organizationId??''))))fail(t.id,'사회적 랜덤 슬롯 오류');
   for(const c of slot.candidates){if(!Number.isFinite(c.weight)||c.weight<=0||(c.condition&&!conditionValid(c.condition))||(slot.kind==='position'?!positionRegistry.has(c.entryId)||!!positionConflict({definitionId:c.entryId,organizationId:c.organizationId??''},t.social.fixed.positions):!titleRegistry.has(c.entryId)||t.social.fixed.titles.some(t=>t.definitionId===c.entryId)))fail(t.id,'직급/칭호 슬롯 후보 오류');}
   if(!socialSlotPool(slot,templateContext(t),t.social.fixed).length)fail(t.id,'사회적 랜덤 슬롯 후보 없음');
  }
  if(!unique([...t.randomSlots,...t.social.randomSlots].map(s=>s.id)))fail(t.id,'전체 슬롯 ID 중복');
  if(!/^fixed-[a-z][a-z-]*$/.test(t.id)||ids.has(t.id))fail(t.id,'템플릿 ID 중복/형식 오류');ids.add(t.id);issues.push(...identityIssues(t.identity,t.id),...abilityIssues(t.fixedTraitIds,t.fixedGiftIds,t.id));
  if(!t.role||!t.coreNotes.length)fail(t.id,'고정 역할/핵심 설정 누락');
  if(Object.keys(t.stats).length!==stats.length)fail(t.id,'기본 능력치 7종 필요');
  for(const stat of stats){const r=t.stats[stat.id];if(!r||![r.base,r.min,r.max].every(n=>Number.isSafeInteger(n)&&n>=0)||r.min>r.base||r.base>r.max||!statGradeFor(stat.id,r.base))fail(t.id,'능력치 기준/범위 오류: '+stat.id);}
  if(!unique(t.proficiencies.map(p=>p.id)))fail(t.id,'숙련도 중복');
  for(const p of t.proficiencies)if(!proficiencyRegistry.has(p.id)||![p.base,p.min,p.max].every(n=>Number.isInteger(n)&&n>=0&&n<=9)||p.min>p.base||p.base>p.max)fail(t.id,'숙련도 참조/경지 오류: '+p.id);
  const slotIds=new Set<string>();for(const slot of t.randomSlots){
   if(!slot.id||slotIds.has(slot.id)||!['trait','gift'].includes(slot.kind)||!slot.description||slot.drawAt!=='campaign-start'||slot.withoutReplacement!==true)fail(t.id,'랜덤 슬롯 정의 오류');slotIds.add(slot.id);
   if(!slot.candidates.length||!unique(slot.candidates.map(c=>c.entryId)))fail(t.id,'랜덤 후보 중복/공백');
   for(const c of slot.candidates){const entry=(slot.kind==='trait'?traitRegistry:giftRegistry).get(c.entryId);if(!entry||entry.kind!==slot.kind||!Number.isFinite(c.weight)||c.weight<=0||(c.condition&&!conditionValid(c.condition)))fail(t.id,'랜덤 후보 참조/가중치/조건 오류');if(entry&&!compatible(entry,templateOwned(t)))fail(t.id,'고정 항목과 랜덤 후보 충돌');}
   if(!randomSlotPool(slot,templateContext(t),templateOwned(t)).length)fail(t.id,'추첨 가능한 랜덤 후보 없음');
  }
  let instances:Character['statuses']=[];for(const instance of t.statuses.fixed){const result=applyStatus(instances,instance);if(!result.ok)fail(t.id,'초기 상태 충돌: '+result.message);else instances=result.instances;}
  if(instances.length!==t.statuses.fixed.length)fail(t.id,'고정 상태의 교체/중첩 충돌');
  if(!Number.isInteger(t.statuses.maxSelections)||t.statuses.maxSelections<0||!Number.isFinite(t.statuses.noneWeight)||t.statuses.noneWeight<0||!unique(t.statuses.optional.map(s=>s.id)))fail(t.id,'초기 상태 선택 규칙 오류');
  for(const candidate of t.statuses.optional){const d=statusRegistry.get(candidate.definitionId);if(!candidate.id||!candidate.description||!Number.isFinite(candidate.weight)||candidate.weight<=0||!d||d.bodyRequired||validateInstance(makeInstance(candidate.definitionId,candidate.id,candidate.stageId)))fail(t.id,'선택 상태 참조/단계 오류');}
  for(const v of t.variation)if(!v.id||!v.description||!v.options.length||!unique(v.options.map(o=>o.id))||v.options.some(o=>!o.id||!o.label||!Number.isFinite(o.weight)||o.weight<=0))fail(t.id,'회차별 변수 정의 오류');
  if(!unique(t.variation.map(v=>v.id)))fail(t.id,'회차 변수 ID 중복');
  for(const e of t.events)if(!e.id||e.status!=='planned'||!e.description||!e.tags.length)fail(t.id,'예정 인물 이벤트 오류');
  for(const mapping of t.contentMappings)if(!(traitRegistry.has(mapping.actualId)||giftRegistry.has(mapping.actualId)||proficiencyRegistry.has(mapping.actualId))||!mapping.requested||!mapping.reason)fail(t.id,'콘텐츠 대응 참조 오류');
 }
 return issues;
}
export function validateCharacters(characters:Character[],templates:FixedCharacterTemplate[]=[]):Issue[]{
 const issues:Issue[]=[],ids=new Set<string>(),fail=(id:string,message:string)=>issues.push({id,message});
 for(const c of characters){
  if(c.location)issues.push(...characterLocationIssues(c).map(message=>({id:c.id,message})));
  issues.push(...[...characterWorldIdentityIssues(c.worldIdentity),...culturalProfileIssues(c.culturalProfile)].map(message=>({id:c.id,message})));
  issues.push(...validateMoralityProfile(c).map(message=>({id:c.id,message})));
  issues.push(...validateSocialIdentity(c,c.id),...validateCharacterAffiliations(c,c.id));
  if(!c.id||ids.has(c.id))fail(c.id,'캐릭터 ID 중복/누락');ids.add(c.id);issues.push(...identityIssues(c,c.id),...abilityIssues(c.traitIds,c.giftIds,c.id));
  if(!['player','random_npc','fixed_npc'].includes(c.kind))fail(c.id,'캐릭터 종류 오류');
  const template=templates.find(t=>t.id===c.templateId);
  if((c.templateId&&!template)||(c.kind==='fixed_npc'&&!template))fail(c.id,'캐릭터 템플릿 참조 오류');
  if(template&&(c.name!==template.identity.name||!template.fixedTraitIds.every(id=>c.traitIds.includes(id))||!template.fixedGiftIds.every(id=>c.giftIds.includes(id))))fail(c.id,'고정 핵심 정보/능력 누락');
  if(Object.keys(c.stats).length!==stats.length||stats.some(s=>!statGradeFor(s.id,c.stats[s.id])))fail(c.id,'캐릭터 능력치 7종/값 오류');
  for(const [id,level] of Object.entries(c.proficiencyRanks))if(!proficiencyRegistry.has(id)||!Number.isInteger(level)||level<0||level>9)fail(c.id,'캐릭터 숙련도 참조/경지 오류');
  if(!unique(c.statuses.map(s=>s.id)))fail(c.id,'상태 인스턴스 ID 중복');
  let canonical:Character['statuses']=[];for(const i of c.statuses){const result=applyStatus(canonical,i);if(!result.ok)fail(c.id,'상태 인스턴스 오류: '+result.message);else canonical=result.instances;}
  if(canonical.length!==c.statuses.length)fail(c.id,'상태 충돌/중첩을 정규화하지 않은 레코드');
  if(!unique(c.relationships.map(r=>r.targetId))||c.relationships.some(r=>!r.targetId||!r.label||!r.description||(r.affinity!==null&&!Number.isFinite(r.affinity))))fail(c.id,'관계 데이터 오류');
 }
 return issues;
}
