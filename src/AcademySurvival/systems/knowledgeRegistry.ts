import {stats} from '../data/knowledge/stats';
import {martialProficiencies} from '../data/knowledge/proficienciesMartial';
import {elementalProficiencies} from '../data/knowledge/proficienciesElemental';
import {applicationProficiencies} from '../data/knowledge/proficienciesApplication';
import {academicProficiencies} from '../data/knowledge/proficienciesAcademic';
import {socialProficiencies} from '../data/knowledge/proficienciesSocial';
import {explorationProficiencies} from '../data/knowledge/proficienciesExploration';
import {lifeProficiencies} from '../data/knowledge/proficienciesLife';
import {entries,events} from './registry';
import {validateKnowledge} from './knowledgeValidation';
import type {Condition,Effect} from '../types';
import type {KnowledgeDefinition} from '../types/knowledge';
import {STAT_GRADE_BANDS} from '../data/knowledge/config';
export {stats};
export const proficiencies=[...martialProficiencies,...elementalProficiencies,...applicationProficiencies,...academicProficiencies,...socialProficiencies,...explorationProficiencies,...lifeProficiencies];
export const statRegistry=new Map(stats.map(s=>[s.id,s]));
export const proficiencyRegistry=new Map(proficiencies.map(p=>[p.id,p]));
export const knowledgeIssues=validateKnowledge(stats,proficiencies);
export function statBandFor(value:number){if(!Number.isSafeInteger(value)||value<0)return null;return STAT_GRADE_BANDS.find(g=>value>=g.min&&(g.max===null||value<=g.max))??null;}
export function statGradeFor(id:string,value:number){const band=statBandFor(value);return band?stats.find(s=>s.id===id)?.grades.find(g=>g.grade===band.grade)??null:null;}
export function proficiencyRankFor(id:string,level:number){if(!Number.isInteger(level)||level<0||level>9)return null;return proficiencyRegistry.get(id)?.ranks.find(r=>r.level===level)??null;}
export interface EffectReference {sourceId:string;sourceKind:'trait'|'gift';sourceName:string;effectId:string;type:Effect['type'];target:string;conditions:Condition[];status:'connected'}
const references:EffectReference[]=[];
for(const entry of entries){const visit=(effect:Effect,conditions:Condition[])=>{
 if(effect.type==='CONDITIONAL_EFFECT'){effect.effects.forEach(e=>visit(e,[...conditions,effect.condition]));return;}
 if(effect.type==='STAT_MODIFIER'||effect.type==='GROWTH_MODIFIER'||effect.type==='CHECK_MODIFIER')references.push({sourceId:entry.id,sourceKind:entry.kind,sourceName:entry.name,effectId:effect.id,type:effect.type,target:effect.target,conditions,status:'connected'});
};entry.effects.forEach(e=>visit(e,[]));}
// Explicit exact-target aliases are a documentation bridge, never a runtime projection.
export const effectReferencesFor=(definition:KnowledgeDefinition)=>references.filter(ref=>[definition.id,...definition.effectTargets].includes(ref.target));
export const derivedReferencesFor=(definition:KnowledgeDefinition)=>definition.kind==='stat'?references.filter(ref=>definition.derivedTargets.includes(ref.target)):[];
export const eventReferencesFor=(definition:KnowledgeDefinition)=>events.filter(event=>event.tags.some(tag=>definition.checkTags.includes(tag)));
export const knowledgeReferencesForEntry=(sourceId:string)=>[...stats,...proficiencies].filter(def=>effectReferencesFor(def).some(ref=>ref.sourceId===sourceId));
