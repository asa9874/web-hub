import type {Condition,Effect} from './index';
export type BodyPartId='head'|'face'|'torso'|'left-arm'|'right-arm'|'left-hand'|'right-hand'|'left-leg'|'right-leg'|'left-foot'|'right-foot'|'whole';
export type StatusCategory='injury'|'physiology'|'emotion'|'magic'|'alteration'|'society'|'anomaly';
export type Polarity='positive'|'negative'|'neutral'|'mixed';
export type DurationType='timed'|'action'|'treatment'|'event'|'conditional'|'permanent'|'special';
export interface StatusTrigger {condition:Condition;description:string}
export type StatusEffect=Effect
 | {id:string;type:'BLOCK_ACTION'|'ALLOW_ACTION';action:string;scope:'self'|'body';reason:string}
 | {id:string;type:'BODY_FUNCTION';function:'grip'|'locomotion'|'sight'|'speech'|'hearing'|'organic'|'all';mode:'limited'|'disabled';reason:string}
 | {id:string;type:'RESOURCE_RATE';resource:'health'|'mana'|'stamina';amount:number;per:'hour';note:string}
 | {id:string;type:'STATUS_RULE';key:string;trigger:string;operation:'reveal'|'conceal'|'transform'|'restrict'|'notify'|'record';target:string;limit:string;description:string};
export interface StatusStage {id:string;name:string;order:number;description:string;effects:StatusEffect[];next?:{stageId:string;trigger:StatusTrigger}}
export interface StatusTransition {id:string;to:string|null;kind:'worsen'|'improve'|'treat'|'special';trigger:StatusTrigger;stageId?:string;body:'preserve'|'clear';loop?:{id:string;reason:string}}
export interface StatusDefinition {
 id:string;name:string;categoryId:StatusCategory;subcategoryId:string;description:string;systemDescription:string;polarity:Polarity;
 stages:StatusStage[];allowedBodyParts:BodyPartId[];bodyRequired:boolean;material:'any'|'organic'|'mechanical'|'missing';
 duration:{type:DurationType;hours:number|null;note:string};
 onset:StatusTrigger[];recovery:StatusTrigger[];worsening:StatusTrigger[];
 stacking:{mode:'unique'|'stack';max:number;scope:'character'|'body';effects:'once'|'per-stack'};
 conflicts:{group:string|null;scope:'character'|'body';priority:number;replaceOnHigher:boolean};
 effects:StatusEffect[];transitions:StatusTransition[];eventTags:string[];
}
export interface StatusInstance {id:string;definitionId:string;stageId?:string;bodyPartId?:BodyPartId;remainingHours?:number;stacks:number;sourceId:string}
