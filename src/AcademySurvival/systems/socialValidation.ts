import type {Issue} from '../types';
import type {CharacterSocialIdentity,PositionDefinition,TitleDefinition} from '../types/social';
import {validImpact} from './impact';
import {POSITION_CATEGORIES,TITLE_CATEGORIES,ORGANIZATION_TYPES,POSITION_ACQUISITIONS,EXCLUSIVE_GROUPS,ACQUISITION_TYPES} from '../data/social/config';
import {positionConflict,titleRegistry} from './socialRules';
import {statusEffectValid} from './statusValidation';
export function validateSocialCatalog(positions:PositionDefinition[],titles:TitleDefinition[]):Issue[]{
 const issues:Issue[]=[],fail=(id:string,message:string)=>issues.push({id,message}),ids=new Set<string>(),texts=new Set<string>();
 if(positions.length<200||titles.length<200)fail('social','직급·칭호 각각 200종 이상 필요');
 for(const list of [positions,titles]){const names=new Set<string>();for(const d of list){
  if(!/^(position|title)-[a-z][a-z-]*$/.test(d.id)||ids.has(d.id))fail(d.id,'ID 중복/형식 오류');ids.add(d.id);
  if(!d.name||names.has(d.name))fail(d.id,'이름 중복/공백');names.add(d.name);
  for(const text of [d.description,d.systemDescription]){const key=text?.normalize('NFKC').replace(/[\s\p{P}]/gu,'');if(!key||text.length<15)fail(d.id,'필수 설명 없음/짧음');else if(texts.has(key))fail(d.id,'고유 설명 중복');texts.add(key);}
  if(!validImpact(d.impact))fail(d.id,'영향력 오류');
  if(!d.eventTags.length||d.eventTags.some(t=>!/^[a-z][a-z-]*$/.test(t))||d.effects.some(e=>!statusEffectValid(e)))fail(d.id,'이벤트 태그/효과 오류');
  if(!d.acquisition.rule.description||d.acquisition.rule.condition.kind!=='flag'||!d.acquisition.rule.condition.key)fail(d.id,'획득 조건 오류');
  if(d.kind==='position'){
   if(!(d.categoryId in POSITION_CATEGORIES)||!(d.organizationType in ORGANIZATION_TYPES)||!(d.acquisition.type in POSITION_ACQUISITIONS))fail(d.id,'직급 분류/획득 유형 오류');
   if(d.exclusiveGroupId!==null&&!(d.exclusiveGroupId in EXCLUSIVE_GROUPS))fail(d.id,'배타 그룹 참조 오류');
   if(!d.permissions.length||!d.duties.length||!d.loss.description||!d.loss.condition||d.permissions.some(p=>!p.trim())||d.duties.some(p=>!p.trim()))fail(d.id,'권한/의무/상실 조건 오류');
   if(new Set(d.parentIds).size!==d.parentIds.length||d.parentIds.some(id=>!positions.some(p=>p.id===id)))fail(d.id,'상위 직급 참조 오류');
   if(d.changes.some(c=>(c.to!==null&&!positions.some(p=>p.id===c.to))||!c.rule.description||!c.rule.condition))fail(d.id,'직급 변화 참조 오류');
  }else{
   if(!(d.categoryId in TITLE_CATEGORIES)||!(d.acquisition.type in ACQUISITION_TYPES)||!['public','group','secret'].includes(d.publicity.default)||!d.publicity.recognition)fail(d.id,'칭호 분류/획득/공개 오류');
   if(d.loss.possible!==!!d.loss.rule||(d.loss.rule&&!d.loss.rule.description)||!d.reactionTags.length||d.relatedTitleIds.some(id=>!titles.some(t=>t.id===id)))fail(d.id,'칭호 상실/반응/참조 오류');
  }
 }}
 const checkCycles=(edges:(p:PositionDefinition)=>string[],label:string)=>{const visiting=new Set<string>(),done=new Set<string>();const visit=(id:string)=>{if(visiting.has(id)){fail(id,label+' 순환');return;}if(done.has(id))return;visiting.add(id);const p=positions.find(p=>p.id===id);if(p)edges(p).forEach(visit);visiting.delete(id);done.add(id);};positions.forEach(p=>visit(p.id));};
 checkCycles(p=>p.parentIds,'상하 관계');checkCycles(p=>p.changes.flatMap(c=>c.to?[c.to]:[]),'직급 변화');
 return issues;
}
export function validateSocialIdentity(s:CharacterSocialIdentity,id:string):Issue[]{
 const issues:Issue[]=[],fail=(message:string)=>issues.push({id,message});
 if(!s||!Array.isArray(s.positions)||!Array.isArray(s.titles))return [{id,message:'공통 직급·칭호 보유 구조 누락'}];
 const owned:CharacterSocialIdentity['positions']=[];for(const holding of s.positions){const error=positionConflict(holding,owned);if(error)fail(error);owned.push(holding);}
 const seen=new Set<string>();for(const h of s.titles){if(!titleRegistry.has(h.definitionId)||seen.has(h.definitionId))fail('칭호 참조/중복 오류');seen.add(h.definitionId);if(!['confirmed','alleged','disputed'].includes(h.fact)||!['public','group','secret'].includes(h.visibility)||!['active','revoked','invalidated'].includes(h.state)||!Array.isArray(h.recognizedBy)||h.recognizedBy.some(v=>!v.trim()))fail('칭호 사실·공개·인지·보존 상태 오류');}
 if(s.primaryPositionId&&!s.positions.some(p=>p.definitionId===s.primaryPositionId))fail('대표 직급 미보유');
 if(s.primaryTitleId&&!s.titles.some(t=>t.definitionId===s.primaryTitleId&&t.state==='active'))fail('대표 칭호 미보유/비활성');
 return issues;
}
