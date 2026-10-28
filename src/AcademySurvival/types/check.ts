import type {StatId} from './knowledge';
export interface CheckDefinition {id:string;name:string;primary:StatId;secondary:StatId;proficiencyId?:string;allowUntrained:boolean;tags:string[];partial?:{cost:string};critical?:{consequence:string}}
export type CheckOutcome='great_success'|'success'|'partial_success'|'failure'|'critical_failure';
export interface CheckScore {abilityScore:number;proficiencyScore:number;modifierTotal:number;score:number;appliedModifierIds:string[];unsupported:string[]}
export interface CheckRequest {id:string;actorId:string;actionId:string;contextId:string;tags?:string[];situationModifier?:number;opposition?:{targetId:string;actionId:string;situationModifier?:number};difficulty?:number}
export interface CheckResult {rawLuckRoll?:number;giftEffects?:string[];id:string;actorId:string;targetId?:string;actionId:string;contextId:string;actor:CheckScore;targetScore:number;defender?:CheckScore;luckRoll:number;margin:number;outcome:CheckOutcome;success:boolean;cost?:string;consequence?:string}
