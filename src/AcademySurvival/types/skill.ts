import type {NpcAiEngine} from '../systems/npcAi';
import type {Category} from './index';
export interface SkillDefinition {id:string;name:string;description:string;family:string;category:Category;kind:'mastery'|'passive'|'technique';parents:string[];proficiencyId?:string;tier:number;practiceMinutes:number;minRank:number;hidden:boolean;legacyOnly:boolean;exclusiveGroup?:string;techniqueId?:string;replaces?:string}
export interface SkillProgress {rank:number;xp:number;acquiredAt:number;sourceId:string;evolvedFrom?:string}
export interface SkillHistory {at:number;skillId:string;kind:'acquired'|'mastery'|'evolved';sourceId:string;message:string}
/** Character-owned authority. traitIds is a compatibility projection of learned legacy skill IDs. */
export interface CharacterSkillBook {version:'skills-v1';entries:Record<string,SkillProgress>;supersededIds:string[];practice:Record<string,number>;daily:{day:number;minutes:Record<string,number>;contacts:string[]};challenges:Record<string,number>;techniqueUses:Record<string,number>;discovered:string[];history:SkillHistory[]}
export interface SkillSave {version:'skills-v1';absoluteMinute:number;floorMinute:number;processed:string[];initializedIds:string[]}
export interface SkillAvailability {id:string;owned:boolean;available:boolean;blocked:boolean;reasons:string[];visible:boolean}
export interface SkillEngine {ai:NpcAiEngine;connect:()=>()=>void;disconnect:()=>void;save:()=>SkillSave;subscribe:(f:()=>void)=>()=>void;getSnapshot:()=>number;initialize:(id:string)=>void;getAvailability:(id:string,skillId:string)=>SkillAvailability;choose:(id:string,skillId:string)=>void;getCheckBonus:(id:string,checkId:string)=>number;diagnose:()=>string[]}
