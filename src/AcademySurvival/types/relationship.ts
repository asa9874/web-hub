export type RelationshipMetric='affection'|'trust'|'intimacy'|'respect'|'fear';
export type RelationshipVisibility='public'|'private'|'secret';
export type RelationshipCategory='family'|'friendship'|'conflict'|'authority'|'romance'|'special';
export interface RelationshipTypeDefinition {id:string;name:string;description:string;category:RelationshipCategory;reciprocalTypeId?:string;symmetric:boolean;reciprocity:'required'|'perceptual';tags:string[]}
export type RelationshipEmotions=Record<RelationshipMetric,number>;
export interface RelationshipRecord extends RelationshipEmotions {sourceCharacterId:string;targetCharacterId:string;relationshipTypeIds:string[];familiarity:'unknown'|'known';visibility:RelationshipVisibility;createdAt?:number;updatedAt?:number;origin:'manual'|'generated'|'fixed'|'reciprocal'}
export type RelationshipInput=Pick<RelationshipRecord,'sourceCharacterId'|'targetCharacterId'>&Partial<Omit<RelationshipRecord,'sourceCharacterId'|'targetCharacterId'>>;
export type RelationshipChanges=Partial<Omit<RelationshipRecord,'sourceCharacterId'|'targetCharacterId'|'createdAt'|'updatedAt'|'origin'>>;
export interface FixedRelationshipSeed extends RelationshipInput {relationshipTypeIds:string[]}
export interface RelationshipLog {id:number;at?:number;action:string;sourceCharacterId?:string;targetCharacterId?:string;message:string}
export interface RelationshipGenerationOptions {seed?:string|number;averageConnections?:number;includeExistingRelationships?:boolean;allowHostileRelationships?:boolean;allowRomanticRelationships?:boolean;existingRecords?:readonly RelationshipRecord[];fixedSeeds?:readonly FixedRelationshipSeed[];at?:number}
export interface RelationshipGenerationResult {version:string;seed:string;records:RelationshipRecord[];consideredPairs:number;diagnostics:string[]}
