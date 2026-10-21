export type DispositionCategory='ethics'|'philosophy'|'social'|'motivation'|'emotion'|'order'|'complex';
export interface NumericRange {min:number;max:number}
export interface DispositionDefinition {
 id:string;name:string;category:DispositionCategory;description:string;psychology:string;behavior:string;examples:string[];
 tags:string[];behaviorTags:string[];moralRelation:string;karmaRelation:string;
 moralPreference?:NumericRange;karmaPreference?:NumericRange;
 compatibleWith:string[];incompatibleWith:string[];
}
export interface KarmaChangeRecord {before:number;after:number;requestedDelta:number;appliedDelta:number;reason:string;sourceId?:string}
export interface CharacterMorality {
 morality:number;karma:number;dispositionIds:string[];
 dispositionVisibility?:Record<string,'public'|'secret'>;
 karmaHistory?:KarmaChangeRecord[];
 karmaOrigin?:{source:'generated-background'|'request-override';initialValue:number;description:string};
}
export interface MoralityGenerationRequest {moralityRange?:NumericRange;karmaRange?:NumericRange;requiredDispositionIds?:string[];dispositionCount?:1|2|3|'random'}
export interface MoralityGenerationConfig {
 version:string;counts:{count:1|2|3;probability:number}[];moralSpread:number;studentKarmaSpread:number;adultKarmaSpread:number;
 studentKarmaRange:NumericRange;adultKarmaRange:NumericRange;preferenceBoost:number;compatibleBoost:number;
}
