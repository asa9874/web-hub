export type ImpactDomain='combat'|'magic'|'politics'|'society'|'economy'|'academia'|'religion'|'information'|'mind'|'fate'|'other';
export interface ImpactMetadata {version:'impact-1000-v1';baseImpact:number;domains:ImpactDomain[];originTags?:string[]}
export interface LegacyImpact {version:'legacy-100';value:number;domains:ImpactDomain[];originTags?:string[]}
