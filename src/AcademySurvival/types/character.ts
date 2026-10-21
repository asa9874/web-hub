import type {NpcAiEngine} from '../systems/npcAi';
import type {MotivationEngine} from '../systems/motivationEngine';
import type {CharacterMotivationState} from './motivation';
import type {NpcScheduleEngine} from '../systems/npcSchedules';
import type {CharacterSchedule} from './schedule';
import type {RelationshipGraph} from '../systems/relationships';
import type {CharacterMorality} from './morality';
import type {CharacterAffiliations} from './organization';
import type {CharacterSocialIdentity,RandomSocialSlot} from './social';
import type {RandomContentSlot} from './slots';
import type {CharacterKnowledge,RankLevel,StatId} from './knowledge';
import type {StatusInstance} from './status';
import type {CharacterLocationState,MovementMode} from './location';
export type CharacterKind='player'|'random_npc'|'fixed_npc';
export interface CharacterIdentity {
 name:string;englishName?:string;age:number;gender:string;species:string;origin:string;schoolYear:number;affiliation:string;title:string;
 introduction:string;summary:string;background:string[];personality:string[];values:string[];weaknesses:string[];
 appearance:{description:string;provisional:boolean;portrait?:{src:string;alt:string}};
 objective:string;tendencies:{id:string;label:string;description:string}[];
}
export interface CharacterRelationship {targetId:string;label:string;description:string;affinity:number|null}
export interface Character extends Partial<CharacterMorality>,CharacterIdentity,CharacterKnowledge,CharacterSocialIdentity,CharacterAffiliations {
 id:string;templateId?:string;kind:CharacterKind;statuses:StatusInstance[];relationships:CharacterRelationship[];
 // Legacy records may be unset; every active character must be registered with a valid location.
 classId?:string;specializationId?:string;generationGrowthType?:'ordinary'|'talented'|'genius'|'weak'|'unusual';
 location?:CharacterLocationState;accessPermissions?:string[];accessTags?:string[];movementModes?:MovementMode[];
}
export type RandomAbilitySlot=RandomContentSlot<'trait'|'gift'>;
export interface FixedCharacterTemplate {
 moralityProfile?:Partial<CharacterMorality>;
 affiliations:CharacterAffiliations;
 id:string;identity:CharacterIdentity;role:string;coreNotes:string[];
 stats:Record<StatId,{base:number;min:number;max:number}>;
 proficiencies:{id:string;base:RankLevel;min:RankLevel;max:RankLevel}[];
 fixedTraitIds:string[];fixedGiftIds:string[];randomSlots:RandomAbilitySlot[];
 social:{fixed:CharacterSocialIdentity;randomSlots:RandomSocialSlot[]};
 statuses:{fixed:StatusInstance[];optional:{id:string;definitionId:string;stageId?:string;weight:number;description:string}[];noneWeight:number;maxSelections:number};
 variation:{id:string;description:string;options:{id:string;label:string;weight:number}[]}[];
 relationships:{targetRole:string;description:string}[];
 events:{id:string;tags:string[];status:'planned';description:string}[];
 contentMappings:{requested:string;actualId:string;reason:string}[];
}
// The panel's discriminant prevents unresolved slots being passed off as a real campaign character.
export type CharacterPanelProps=({mode:'template';template:FixedCharacterTemplate}|{mode:'actual';character:Character})&{aiEngine?:NpcAiEngine|null;motivationEngine?:MotivationEngine|null;motivation?:CharacterMotivationState;scheduleEngine?:NpcScheduleEngine|null;schedule?:CharacterSchedule;relationshipGraph?:RelationshipGraph;relationshipCharacters?:readonly Character[];onInspectCharacter?:(id:string)=>void;debug?:boolean;density?:'comfortable'|'compact';onSocialChange?:(social:CharacterSocialIdentity)=>void};
