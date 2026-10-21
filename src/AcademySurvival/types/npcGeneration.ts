import type {MoralityGenerationRequest,MoralityGenerationConfig,DispositionDefinition} from './morality';
import type {CharacterAffiliation,OrganizationDefinition} from './organization';
import type {Character} from './character';
import type {StatId,RankLevel} from './knowledge';
import type {Context,Entry,Trait,Gift,Issue} from './index';
import type {PositionDefinition,TitleDefinition} from './social';
import type {StatusInstance} from './status';
import type {CharacterImpactResult} from './characterImpact';
export type GrowthType='ordinary'|'talented'|'genius'|'weak'|'unusual';
export type ImpactPreference='balanced'|'combat'|'social';
export interface NpcGenerationRequest extends MoralityGenerationRequest {count:number;seed?:string;academyStudent:boolean;academyYear?:1|2|3|4|'random';specializationId?:string;growthType?:GrowthType|'random';targetImpact?:{min:number;max:number};impactPreference?:ImpactPreference;startIndex?:number}
export interface SpecializationProfile {id:string;name:string;weight:number;organizationId?:string;core:StatId[];support:StatId[];primary:string[];secondary:string[];traitFamilies:string[];giftTags:string[];variants:{name:string;stat:StatId;bonus:number}[]}
export interface GrowthProfile {name:string;weight:number;shift:number;coreBonus:number;rankShift:number;rareTraitBoost:number;unusualBonus:number}
export interface GenerationGrant {kind:'position'|'title'|'status'|'affiliation';id:string;organizationId?:string;stageId?:string;visibility?:'public'|'secret'}
export interface BackgroundProfile {id:string;name:string;description:string;weight:number;audience:'student'|'adult'|'both';minYear?:number;specializations?:string[];growthTypes?:GrowthType[];preferences?:ImpactPreference[];grants:GenerationGrant[]}
export interface NpcGenerationConfig {
 morality:MoralityGenerationConfig;
 initialLocations:{student:string;adult:string};
 version:string;maxCount:number;maxAttempts:number;maxBatchAttempts:number;statMin:number;statMax:number;coreOffset:number;supportOffset:number;nonCoreOffset:number;noise:number;personalSpread:number;variantBonus:number;rareTalentChance:number;rareTalentBonus:number;rareRankChance:number;rareRankBonus:number;maxRank:RankLevel;
 years:Record<1|2|3|4,{average:[number,number];primary:[number,number];positionId:string;age:[number,number]}>;
 adult:{average:[number,number];primary:[number,number];age:[number,number]};
 growth:Record<GrowthType,GrowthProfile>;specializations:SpecializationProfile[];
 traitCounts:{count:number;probability:number}[];giftCounts:{count:number;probability:number}[];
 relatedTraitMultiplier:number;relatedGiftMultiplier:number;impactPenalty:number;secondaryChance:number;hobbyChance:number;backgroundChance:number;statusChance:number;preferenceMultiplier:number;
 aliases:Record<string,StatId>;names:{given:string[];family:string[]};genders:string[];personalities:string[];objectives:string[];
 backgrounds:BackgroundProfile[];statuses:BackgroundProfile[];studentAdmissionTitleId:string;citizen:{positionId:string;organizationId:string};academyId:string;adultOrganizationId:string;
}
export interface GenerationEvidence {id:string;description:string;grants:GenerationGrant[];flags:string[]}
export interface NpcDiagnostic {level:'info'|'warning'|'error';code:string;message:string}
export interface GeneratedNpcResult {character:Character;impact:CharacterImpactResult;success:boolean;targetMet:boolean;valid:boolean;attempts:number;index:number;seed:string;specializationId:string;growthType:GrowthType;primaryProficiencyId:string;variant:string;evidence:GenerationEvidence[];diagnostics:NpcDiagnostic[]}
export interface BatchGenerationResult {request:NpcGenerationRequest;seed:string;version:string;results:GeneratedNpcResult[];diagnostics:NpcDiagnostic[]}
export interface NpcGenerationContext {
 locations:ReadonlyMap<string,{id:string}>;
 dispositions:ReadonlyMap<string,DispositionDefinition>;
 organizations:ReadonlyMap<string,OrganizationDefinition>;normalizeAffiliations:(character:{affiliations:CharacterAffiliation[];primaryOrganizationId?:string})=>{affiliations:CharacterAffiliation[];primaryOrganizationId?:string};
 config:NpcGenerationConfig;traits:readonly Trait[];gifts:readonly Gift[];proficiencies:ReadonlyMap<string,{id:string}>;positions:ReadonlyMap<string,PositionDefinition>;titles:ReadonlyMap<string,TitleDefinition>;reservedNames:ReadonlySet<string>;
 calculateImpact:(character:Character)=>CharacterImpactResult;validateCharacter:(character:Character)=>Issue[];
 positionConflict:(candidate:Character['positions'][number],owned:Character['positions'])=>string|null;
 makeStatus:(id:string,instanceId:string,stageId?:string)=>StatusInstance;applyStatus:(owned:StatusInstance[],candidate:StatusInstance)=>{ok:boolean;instances:StatusInstance[];message:string};
 birthPool:(entries:Entry[],context:Context,owned:Entry[])=>{entry:Entry;weight:number}[];
}
