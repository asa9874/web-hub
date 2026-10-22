import type {DomainEvent} from './actionEffects';
export type MemorySource='direct'|'witnessed'|'heard'|'inferred';
export type MemoryCategory='interaction'|'relationship'|'achievement'|'conflict'|'location'|'information'|'personal';
export type InformationVisibility='public'|'restricted'|'private';
export type ClaimPredicate='winner'|'interaction_occurred'|'activity_performed'|'status_changed'|'achievement'|'personal_report';
export interface InformationClaim {id:string;topicKey:string;subjectId?:string;targetId?:string;predicate:ClaimPredicate;objectId?:string;value?:string|number|boolean;relatedEventId?:string;locationId?:string;occurredAt:number;severity:number;visibility:InformationVisibility;definitionId?:string;activityId?:string}
export interface InformationHop {characterId:string;memoryId:string;receivedAt:number;method:MemorySource}
export interface NpcMemory {id:string;ownerCharacterId:string;category:MemoryCategory;source:MemorySource;subjectCharacterId?:string;targetCharacterId?:string;relatedEventId?:string;relatedLocationId?:string;claimId:string;createdAt:number;refreshedAt:number;lastRecalledAt?:number;importance:number;confidence:number;emotionalWeight:number;isSecret:boolean;isForgotten:boolean;sourceCharacterId?:string;basisMemoryIds?:string[];lineage:InformationHop[];recalls:number}
export interface MemoryView extends NpcMemory {clarity:number;effectiveConfidence:number;state:'active'|'faded'|'forgotten'}
export interface WorldFact {event:DomainEvent;claimId:string;directCharacterIds:string[];witnessCharacterIds:string[]}
export type InformationMode='share_information'|'pass_rumor'|'share_secret'|'ask_information'|'verify_information';
export interface InformationDelivery {id:string;interactionId:string;sourceId:string;targetId:string;claimId?:string;receivedClaimId?:string;at:number;status:'shared'|'withheld'|'unavailable'|'confirmed'|'disputed';reason:string;distorted:boolean;confidence?:number}
export interface MemoryContext {goalId?:string;targetCharacterId?:string;locationId?:string;topicKey?:string;activityId?:string;limit?:number}
export interface MemorySave {version:'npc-memory-v1';seed:string;absoluteMinute:number;epoch:number;floorMinute:number;serial:number;diagnostics:string[];memories:NpcMemory[];claims:InformationClaim[];facts:WorldFact[];processed:{id:string;at:number}[];deliveries:InformationDelivery[];counters:{errors:number;generated:number;direct:number;witnessed:number;heard:number;inferred:number;shared:number;withheld:number;distorted:number;evicted:number;importantEvicted:number;recalls:number;forgotten:number};nextMaintenanceAt:number}
