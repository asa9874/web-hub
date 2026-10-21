import type {CharacterMorality,DispositionDefinition,NumericRange} from '../types/morality';
import type {Issue} from '../types';
import {dispositions} from '../data/dispositions';
import {BEHAVIOR_TAGS,DISPOSITION_CATEGORIES,MORALITY_GRADES,KARMA_GRADES,MORALITY_LIMITS,KARMA_LIMITS} from '../data/dispositions/config';
export {dispositions};
export const dispositionRegistry:ReadonlyMap<string,DispositionDefinition>=new Map(dispositions.map(d=>[d.id,d]));
export const moralityGrade=(value:number)=>Number.isInteger(value)?MORALITY_GRADES.find(g=>value>=g.min&&value<=g.max):undefined;
export const karmaGrade=(value:number)=>Number.isInteger(value)?KARMA_GRADES.find(g=>value>=g.min&&value<=g.max):undefined;
export const signed=(value:number)=>Number.isFinite(value)?`${value>0?'+':''}${value}`:'미설정';
export const validRange=(range:NumericRange,min:number,max:number)=>!!range&&Number.isInteger(range.min)&&Number.isInteger(range.max)&&range.min>=min&&range.max<=max&&range.min<=range.max;
const clamp=(n:number,min:number,max:number)=>{if(!Number.isSafeInteger(n))throw new RangeError('도덕·카르마는 안전한 정수여야 합니다.');return Math.max(min,Math.min(max,n));};
export const clampMorality=(n:number)=>clamp(n,MORALITY_LIMITS.min,MORALITY_LIMITS.max);
export const clampKarma=(n:number)=>clamp(n,KARMA_LIMITS.min,KARMA_LIMITS.max);
/** No mutation, AI, score/trait changes or automatically inferred moral judgements. */
export function applyKarmaChange<T extends Partial<CharacterMorality>>(character:T,delta:number,reason:string,sourceId?:string):T&{karma:number;karmaHistory:NonNullable<CharacterMorality['karmaHistory']>}{
 if(!reason.trim()||!Number.isSafeInteger(delta))throw new Error('정수 변화량과 변경 사유가 필요합니다.');
 const before=character.karma??0;if(!karmaGrade(before))throw new Error('기존 카르마 수치가 유효하지 않습니다.');
 const after=delta>KARMA_LIMITS.max-before?KARMA_LIMITS.max:delta<KARMA_LIMITS.min-before?KARMA_LIMITS.min:clampKarma(before+delta);
 return {...character,karma:after,karmaHistory:[...(character.karmaHistory??[]),{before,after,requestedDelta:delta,appliedDelta:after-before,reason:reason.trim(),...(sourceId?{sourceId}:{})}]};
}
/** Missing legacy fields remain distinguishable from an assigned set of dispositions. */
export const moralitySnapshot=(value:Partial<CharacterMorality>)=>({morality:value.morality??0,karma:value.karma??0,dispositionIds:value.dispositionIds??[],configured:!!value.dispositionIds?.length});
export function validateMoralityProfile(value:Partial<CharacterMorality>,requireConfigured=false,registry=dispositionRegistry):string[]{
 const errors:string[]=[],ids=value.dispositionIds??[];
 if(!moralityGrade(value.morality??0))errors.push('도덕은 -100~100 정수여야 합니다.');
 if(!karmaGrade(value.karma??0))errors.push('카르마는 -1000~1000 정수여야 합니다.');
 if((requireConfigured&&ids.length<1)||ids.length>3)errors.push('성향은 1~3개여야 합니다.');
 if(new Set(ids).size!==ids.length)errors.push('성향 중복 보유');
 for(const id of ids){const d=registry.get(id);if(!d){errors.push('성향 참조 없음: '+id);continue;}for(const other of d.incompatibleWith)if(ids.includes(other)&&id<other)errors.push(d.name+' / '+registry.get(other)?.name+' 성향 충돌');}
 for(const [id,visibility] of Object.entries(value.dispositionVisibility??{}))if(!ids.includes(id)||!['public','secret'].includes(visibility))errors.push('성향 공개 정책 참조 오류: '+id);
 if(value.karmaOrigin&&(!karmaGrade(value.karmaOrigin.initialValue)||!value.karmaOrigin.description||!['generated-background','request-override'].includes(value.karmaOrigin.source)))errors.push('초기 카르마 근거 오류');
 const history=value.karmaHistory??[];
 history.forEach((row,i)=>{if(!karmaGrade(row.before)||!karmaGrade(row.after)||!Number.isSafeInteger(row.requestedDelta)||!Number.isSafeInteger(row.appliedDelta)||row.after-row.before!==row.appliedDelta||!row.reason?.trim()||row.after!==Math.max(KARMA_LIMITS.min,Math.min(KARMA_LIMITS.max,row.before+row.requestedDelta))||(i>0&&history[i-1].after!==row.before))errors.push('카르마 변경 이력 오류: '+i);});
 if(history.length&&history.at(-1)!.after!==(value.karma??0))errors.push('카르마 현재값과 변경 이력 불일치');
 return errors;
}
export function validateDispositions(source:readonly DispositionDefinition[]):Issue[]{
 const issues:Issue[]=[],registry=new Map(source.map(d=>[d.id,d])),ids=new Set<string>(),names=new Set<string>(),texts=new Set<string>(),fail=(id:string,message:string)=>issues.push({id,message});
 if(source.length<100)fail('dispositions','성향 정의 100종 이상 필요');
 for(const d of source){
  if(ids.has(d.id)||!/^disposition-[a-z-]+$/.test(d.id))fail(d.id,'ID 중복/형식 오류');ids.add(d.id);
  if(!d.name||names.has(d.name))fail(d.id,'이름 중복/누락');names.add(d.name);
  if(!Object.hasOwn(DISPOSITION_CATEGORIES,d.category))fail(d.id,'분류 오류');
  for(const field of [d.description,d.psychology,d.behavior,...d.examples,d.moralRelation,d.karmaRelation]){if(!field?.trim()||texts.has(field))fail(d.id,'설명 누락/중복');texts.add(field);}
  if(!d.examples.length||!d.behaviorTags.length||d.behaviorTags.some(t=>!Object.hasOwn(BEHAVIOR_TAGS,t)))fail(d.id,'행동 예시/태그 오류');
  if(d.moralPreference&&!validRange(d.moralPreference,MORALITY_LIMITS.min,MORALITY_LIMITS.max)||d.karmaPreference&&!validRange(d.karmaPreference,KARMA_LIMITS.min,KARMA_LIMITS.max))fail(d.id,'선호 범위 오류');
  for(const field of ['compatibleWith','incompatibleWith'] as const){if(new Set(d[field]).size!==d[field].length)fail(d.id,'관계 중복');for(const target of d[field])if(target===d.id||!registry.has(target)||!registry.get(target)![field].includes(d.id))fail(d.id,'관계 참조/대칭 오류: '+target);}
  if(d.compatibleWith.some(id=>d.incompatibleWith.includes(id)))fail(d.id,'추천/금지 관계 중복');
  if('impact' in d)fail(d.id,'성향에는 영향력을 부여하지 않음');
 }
 return issues;
}
export const dispositionIssues=validateDispositions(dispositions);
