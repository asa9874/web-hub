import type {Character} from '../types/character';
import type {ImpactMetadata} from '../types/impact';
import {ownedEntries} from './characterRules';
import {socialSources} from './socialRules';
export interface ImpactSource {kind:'trait'|'gift'|'position'|'title';definitionId:string;impact:ImpactMetadata;organizationId?:string;sourceEventId?:string;fact?:'confirmed'|'alleged'|'disputed';visibility?:'public'|'group'|'secret'}
// A boundary for a future replaceable calculator. No sum, coefficient, final score or representative bonus.
export function characterImpactSources(character:Character):ImpactSource[]{
 const social=socialSources(character);
 return [...ownedEntries(character).map(e=>({kind:e.kind,definitionId:e.id,impact:e.impact})),...social.positions.map(p=>({kind:'position' as const,definitionId:p.definitionId,impact:p.definition.impact,organizationId:p.organizationId,sourceEventId:p.sourceEventId})),...social.titles.map(t=>({kind:'title' as const,definitionId:t.definitionId,impact:t.definition.impact,sourceEventId:t.sourceEventId,fact:t.fact,visibility:t.visibility}))];
}
