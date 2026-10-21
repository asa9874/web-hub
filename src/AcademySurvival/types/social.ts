import type {Condition,Effect} from './index';
import type {ImpactMetadata} from './impact';
import type {RandomContentSlot} from './slots';
export type PositionCategory='royalty'|'academy'|'military'|'clergy'|'research'|'commerce'|'legal'|'world';
export type TitleCategory='learning'|'battle'|'research'|'heroic'|'infamy'|'relations'|'eccentric'|'legend';
export type OrganizationType='polity'|'academy'|'order'|'church'|'tower'|'guild'|'court'|'network'|'settlement'|'world';
export type AcquisitionKind='achievement'|'event'|'reputation'|'relationship'|'secret'|'dishonor'|'special';
export interface SocialCondition {condition:Condition;description:string}
export interface SocialBase {id:string;name:string;description:string;systemDescription:string;impact:ImpactMetadata;eventTags:string[];effects:Effect[]}
export interface PositionDefinition extends SocialBase {
 kind:'position';categoryId:PositionCategory;organizationType:OrganizationType;
 acquisition:{type:'birth'|'admission'|'appointment'|'election'|'qualification'|'judgment'|'contract'|'recognition';rule:SocialCondition};
 loss:SocialCondition;permissions:string[];duties:string[];
 exclusiveGroupId:string|null;parentIds:string[];changes:{to:string|null;kind:'promotion'|'graduation'|'appointment'|'retirement'|'dismissal'|'revocation'|'expulsion'|'sentence-end';rule:SocialCondition}[];
}
export interface TitleDefinition extends SocialBase {
 kind:'title';categoryId:TitleCategory;acquisition:{type:AcquisitionKind;rule:SocialCondition};
 publicity:{default:'public'|'group'|'secret';recognition:string};
 loss:{possible:boolean;rule:SocialCondition|null};reactionTags:string[];relatedTitleIds:string[];
}
export interface PositionHolding {definitionId:string;organizationId:string;sourceEventId?:string}
export interface TitleHolding {definitionId:string;fact:'confirmed'|'alleged'|'disputed';visibility:'public'|'group'|'secret';recognizedBy:string[];state:'active'|'revoked'|'invalidated';sourceEventId?:string}
export interface CharacterSocialIdentity {positions:PositionHolding[];titles:TitleHolding[];primaryPositionId?:string;primaryTitleId?:string}
export type RandomSocialSlot=RandomContentSlot<'position'|'title'>;
