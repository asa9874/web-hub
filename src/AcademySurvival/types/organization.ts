import type {CalendarId} from './calendar';
import type {OrganizationType} from './social';
export type OrganizationVisibility='public'|'restricted'|'secret';
export interface OrganizationDefinition {polityId?:string;impactStatus?:'rated'|'unrated';
 id:string;name:string;calendarId?:CalendarId;parentOrganizationId?:string;type:OrganizationType;kind:string;description:string;lore:string;
 impact:number;scale:'continental'|'national'|'regional'|'institution'|'unit';visibility:OrganizationVisibility;
 purposes:string[];features:string[];admissionRules:string[];departureRules:string[];tags:string[];aliases?:string[];
}
export interface CharacterAffiliation {organizationId:string;visibility:'public'|'secret';joinedAt?:string;sourceId?:string}
export interface CharacterAffiliations {affiliations:CharacterAffiliation[];primaryOrganizationId?:string}
export interface PositionAffiliationBinding {positionId:string;organizationId?:string;scope:'holding'|'fixed';required:boolean;description:string}
