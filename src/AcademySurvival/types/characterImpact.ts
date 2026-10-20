import type {Character} from './character';
import type {StatId} from './knowledge';
import type {ImpactMetadata} from './impact';
export type CharacterImpactDomain='stats'|'proficiencies'|'traits'|'gifts'|'positions'|'titles';
export type CharacterImpactInput=Partial<Pick<Character,'traitIds'|'giftIds'|'positions'|'titles'>>&{stats?:Partial<Record<StatId,number>>;proficiencyRanks?:Record<string,number>};
export interface CharacterImpactConfig {
 readonly version:string;readonly maximum:number;
 readonly caps:Readonly<Record<CharacterImpactDomain,number>>;
 readonly stats:{readonly ids:readonly StatId[];readonly ceiling:number;readonly topCount:number;readonly topWeight:number;readonly allWeight:number};
 readonly proficiency:{readonly maxRank:number};
 readonly decay:{readonly first:number;readonly second:number;readonly third:number;readonly rest:number};
}
export interface CharacterImpactCatalogs {
 traits:ReadonlyMap<string,{impact:ImpactMetadata}>;gifts:ReadonlyMap<string,{impact:ImpactMetadata}>;
 positions:ReadonlyMap<string,{impact:ImpactMetadata}>;titles:ReadonlyMap<string,{impact:ImpactMetadata}>;
 proficiencies:ReadonlyMap<string,{id:string}>;organizations:ReadonlySet<string>;
}
export interface CharacterImpactIssue {code:'missing-data'|'missing-stat'|'invalid-value'|'missing-reference'|'duplicate';path:string;message:string}
export interface CharacterImpactResult {
 impact:number;grade:{id:string;name:string;min:number;max:number}|null;version:string;
 contributions:Record<CharacterImpactDomain,number>;domainScores:Record<CharacterImpactDomain,number>;
 issues:CharacterImpactIssue[];
}
