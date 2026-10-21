import type {Effect} from '../../types';
import type {BodyPartId,DurationType,Polarity,StatusCategory,StatusDefinition,StatusEffect,StatusStage,StatusTrigger} from '../../types/status';
import {effectText} from '../../systems/effectResolver';
import {statusTargetLabel as label} from './labels';
export const trigger=(key:string,description:string):StatusTrigger=>({condition:{kind:'flag',key},description});
export const stat=(target:string,amount:number):StatusEffect=>({id:'stat-'+target,type:'STAT_MODIFIER',target,amount});
export const check=(target:string,amount:number):StatusEffect=>({id:'check-'+target,type:'CHECK_MODIFIER',target,amount,unit:'score'});
export const weight=(target:string,multiplier:number,type:'ACTION_WEIGHT'|'EVENT_WEIGHT'|'GROWTH_MODIFIER'='ACTION_WEIGHT'):StatusEffect=>({id:type.toLowerCase()+'-'+target,type,target,multiplier});
export const block=(action:string,reason:string,scope:'self'|'body'='self'):StatusEffect=>({id:'block-'+action,type:'BLOCK_ACTION',action,scope,reason});
export const allow=(action:string,reason:string):StatusEffect=>({id:'allow-'+action,type:'ALLOW_ACTION',action,scope:'self',reason});
export const body=(fn:'grip'|'locomotion'|'sight'|'speech'|'hearing'|'organic'|'all',mode:'limited'|'disabled',reason:string):StatusEffect=>({id:'body-'+fn,type:'BODY_FUNCTION',function:fn,mode,reason});
export const rate=(resource:'health'|'mana'|'stamina',amount:number,note:string):StatusEffect=>({id:'rate-'+resource,type:'RESOURCE_RATE',resource,amount,per:'hour',note});
export const rule=(key:string,description:string,target:string,operation:'reveal'|'conceal'|'transform'|'restrict'|'notify'|'record'='notify'):StatusEffect=>({id:'rule-'+key,type:'STATUS_RULE',key,trigger:key,operation,target,limit:'해당 조건에서만 · 실행 어댑터 미구현',description});
export const option=(name:string):StatusEffect=>({id:'option-'+name,type:'UNLOCK_OPTION',option:name});
export function statusEffectText(e:StatusEffect):string{
 switch(e.type){
  case 'BLOCK_ACTION':return `${e.scope==='body'?'지정 부위: ':''}행동 금지 ${label(e.action)} — ${e.reason}`;
  case 'ALLOW_ACTION':return `행동 허용 ${label(e.action)} — ${e.reason} (금지 규칙을 덮어쓰지 않음)`;
  case 'BODY_FUNCTION':return `${label(e.function)} 기능 ${e.mode==='disabled'?'사용 불가':'제한'}: ${e.reason}`;
  case 'RESOURCE_RATE':return `${label(e.resource)} ${e.amount>=0?'+':''}${e.amount}/시간: ${e.note} (자동 진행 없음)`;
  case 'STATUS_RULE':return `${e.description} (조건부 고유 규칙 · 실행 예정)`;
  case 'CONDITIONAL_EFFECT':return `조건 충족 시: ${e.effects.map(statusEffectText).join(' / ')}`;
  default:{const text=effectText(e);return 'target' in e?text.replace(e.target,label(e.target)):text;}
 }
}
export type StageInput=[id:string,name:string,description:string,effects:StatusEffect[],nextCondition?:string];
type Options={parts?:BodyPartId[];material?:StatusDefinition['material'];duration?:DurationType;hours?:number;durationNote?:string;stages?:StageInput[];stacks?:number;group?:string;priority?:number;replace?:boolean;tags?:string[];worsening?:string;permanent?:boolean};
export function S(category:StatusCategory,id:string,name:string,subcategoryId:string,polarity:Polarity,description:string,onset:string,recovery:string,effects:StatusEffect[],o:Options={}):StatusDefinition{
 const definitionId='status-'+id;
 const stages:StatusStage[]=(o.stages??[]).map(([key,title,text,modifiers,next],index,rows)=>({id:key,name:title,description:text,order:index,effects:modifiers,...(next&&rows[index+1]?{next:{stageId:rows[index+1][0],trigger:trigger(definitionId+'-'+key+'-advance',next)}}:{})}));
 return {id:definitionId,name,categoryId:category,subcategoryId,polarity,description,systemDescription:effects.map(statusEffectText).join(' / '),stages,allowedBodyParts:o.parts??[],bodyRequired:!!o.parts?.length,material:o.material??'any',duration:{type:o.permanent?'permanent':o.duration??'treatment',hours:o.duration==='timed'?o.hours??8:null,note:o.durationNote??recovery},onset:[trigger(definitionId+'-onset',onset)],recovery:[trigger(definitionId+'-recover',recovery)],worsening:o.worsening?[trigger(definitionId+'-worsen',o.worsening)]:[],stacking:{mode:o.stacks?'stack':'unique',max:o.stacks??1,scope:o.parts?.length?'body':'character',effects:o.stacks?'per-stack':'once'},conflicts:{group:o.group??null,scope:o.parts?.length?'body':'character',priority:o.priority??0,replaceOnHigher:o.replace??false},effects,transitions:[],eventTags:o.tags??[]};
}
export const commonEffect=(e:StatusEffect):e is Effect=>!['BLOCK_ACTION','ALLOW_ACTION','BODY_FUNCTION','RESOURCE_RATE','STATUS_RULE'].includes(e.type);
type StatusArgs=Parameters<typeof S> extends [unknown,...infer R]?R:never;
export const category=(id:StatusCategory)=>(...args:StatusArgs)=>S(id,...args);
