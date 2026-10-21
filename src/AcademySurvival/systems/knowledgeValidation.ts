import type {Issue} from '../types';
import type {ProficiencyDefinition,StatDefinition} from '../types/knowledge';
import {PROFICIENCY_CATEGORIES,PROFICIENCY_RANKS,STAT_GRADE_BANDS} from '../data/knowledge/config';
export function validateKnowledge(stats:StatDefinition[],proficiencies:ProficiencyDefinition[]):Issue[]{
 const issues:Issue[]=[],error=(id:string,message:string)=>issues.push({id,message});
 const required=['STR','AGI','VIT','MAG','INT','WIL','CHA'];
 if(stats.length<7||required.some(id=>!stats.some(s=>s.id===id)))error('knowledge','기본 능력치 7종 누락');
 if(proficiencies.length<40)error('knowledge','숙련도 40종 미만');
 const ids=new Set<string>(),names=new Set<string>(),texts=new Map<string,string>(),stripped=new Map<string,string>();
 const normalize=(text:string)=>text.normalize('NFKC').replace(/[\s\p{P}\p{S}]/gu,'').toLocaleLowerCase();
 for(const definition of [...stats,...proficiencies]){
  if(ids.has(definition.id)||!definition.id)error(definition.id,'ID 중복 또는 누락');ids.add(definition.id);
  if(names.has(definition.name)||!definition.name)error(definition.id,'이름 중복 또는 누락');names.add(definition.name);
  if(!definition.description?.trim()||!definition.checkTags?.length||new Set(definition.effectTargets).size!==definition.effectTargets.length)error(definition.id,'소개/판정 태그/대상 별칭 오류');
  const rows=definition.kind==='stat'?definition.grades:definition.ranks;
  if(rows.length!==10)error(definition.id,'10개 등급/경지 필요');
  for(const row of rows){
   if(!row.flavorText?.trim()||row.flavorText.length<20){error(definition.id,'빈 설명 또는 지나치게 짧은 설명');continue;}
   const key=normalize(row.flavorText),withoutName=normalize(row.flavorText.replaceAll(definition.name,''));
   if(texts.has(key))error(definition.id,`설명 중복: ${texts.get(key)}`);texts.set(key,definition.id);
   if(stripped.has(withoutName))error(definition.id,`명칭만 다른 설명: ${stripped.get(withoutName)}`);stripped.set(withoutName,definition.id);
  }
  if(definition.kind==='stat'){
   if(!required.includes(definition.id))error(definition.id,'미등록 능력치 ID');
   definition.grades.forEach((grade,index)=>{
    const band=STAT_GRADE_BANDS[index];if(!band||grade.grade!==band.grade||grade.title!==band.title||grade.min!==band.min||grade.max!==band.max)error(definition.id,'등급 설정 불일치');
    if(!Number.isInteger(grade.min)||grade.min<0||(grade.max!==null&&(!Number.isInteger(grade.max)||grade.max<grade.min)))error(definition.id,'등급 범위 오류');
    if(index===0&&grade.min!==0)error(definition.id,'첫 범위는 0부터');
    if(index&&definition.grades[index-1].max!==grade.min-1)error(definition.id,'등급 범위 공백/중첩');
    if((index===9)!==(grade.max===null))error(definition.id,'마지막 등급만 상한 없음');
   });
  }else{
   if(!/^proficiency-[a-z][a-z-]*$/.test(definition.id)||!(definition.categoryId in PROFICIENCY_CATEGORIES))error(definition.id,'숙련도 ID/분류 오류');
   if(!definition.relatedStats.length||definition.relatedStats.some(id=>!stats.some(s=>s.id===id)))error(definition.id,'관련 능력치 참조 오류');
   if(new Set(definition.relatedStats).size!==definition.relatedStats.length)error(definition.id,'관련 능력치 중복');
   definition.ranks.forEach((rank,index)=>{if(rank.level!==index||rank.name!==PROFICIENCY_RANKS[index]?.name)error(definition.id,'경지 순서/명칭 오류');});
   if('evolutions' in definition||'traitTier' in definition||'experienceThresholds' in definition)error(definition.id,'숙련도에 특성 동기화/확정 경험치 규칙 존재');
  }
 }
 return issues;
}
