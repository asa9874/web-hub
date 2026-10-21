import type {ImpactMetadata,LegacyImpact} from '../types/impact';
import {IMPACT_DOMAINS,IMPACT_GRADES} from '../data/impactConfig';
export function impactGrade(value:number){return Number.isInteger(value)?IMPACT_GRADES.find(g=>value>=g.min&&value<=g.max)??null:null;}
export function validImpact(impact:ImpactMetadata):boolean{return !!impact&&impact.version==='impact-1000-v1'&&!!impactGrade(impact.baseImpact)&&Array.isArray(impact.domains)&&impact.domains.length>0&&new Set(impact.domains).size===impact.domains.length&&impact.domains.every(d=>d in IMPACT_DOMAINS)&&(!impact.originTags||impact.originTags.every(t=>!!t.trim()));}
// Source version is mandatory. Small v1 values must never be mistaken for legacy values.
export function migrateGiftImpact(source:LegacyImpact|ImpactMetadata):ImpactMetadata{
 const result:ImpactMetadata=source.version==='legacy-100'?{version:'impact-1000-v1',baseImpact:source.value*10,domains:[...source.domains],...(source.originTags?{originTags:[...source.originTags]}:{})}:{...source,domains:[...source.domains]};
 if(source.version==='legacy-100'&&(!Number.isInteger(source.value)||source.value<0||source.value>100))throw new Error('Invalid legacy impact');
 if(!validImpact(result))throw new Error('Invalid 0–1000 impact metadata');return result;
}
// Deliberately no character score, sum, combat modifier or rarity/probability conversion here.
export const makeImpact=(baseImpact:number,domains:ImpactMetadata['domains'],originTags?:string[]):ImpactMetadata=>({version:'impact-1000-v1',baseImpact,domains,...(originTags?{originTags}: {})});
