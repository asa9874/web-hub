import type {CalendarId} from './calendar';
export type LoreStatus='confirmed'|'baseline'|'provisional';
export type RaceId='human'|'demonkin'|'beastkin'|'elf'|'dwarf'|'greenskin';
export interface RaceDefinition {id:RaceId;name:string;englishName:string;description:string;biologicalTraits:string[];culturalNotes:string[];originGeographyIds:string[];subraceIds:string[];lifespan:{min:number;max:number;upperOpen?:boolean;status:'reference'}}
export interface SubraceDefinition {id:string;raceId:RaceId;name:string;description:string;status:LoreStatus}
export interface GeographyDefinition {id:string;name:string;englishName:string;kind:'continent'|'archipelago';description:string;locationId:string;status:LoreStatus}
export interface PolityDefinition {id:string;name:string;government:string;description:string;geographyIds:string[];centralRaceIds:RaceId[];cultureIds:string[];regionIds:string[];capitalSettlementId:string;organizationIds:string[];locationId:string;calendarId?:CalendarId;status:LoreStatus}
export interface LoreRegion {id:string;name:string;description:string;geographyIds:string[];polityIds:string[];terrain:string;climate?:string;population?:number;locationId:string;status:LoreStatus}
export interface LorePlace {id:string;name:string;description:string;kind:'city'|'village'|'port'|'meeting_ground'|'sanctuary'|'pass'|'mining_area'|'island'|'wilderness';regionId:string;polityId?:string;raceIds:RaceId[];cultureIds:string[];locationId:string;status:LoreStatus}
export interface CultureDefinition {id:string;name:string;description:string;polityIds:string[];customs:string[];education:string[];languageIds:string[];religionIds:string[];namingNotes?:string;status:LoreStatus}
export interface InitialDiplomacy {id:string;polityIds:[string,string];description:string;kind:'exchange'|'cooperation'|'tension'|'autonomy'|'neutral_trade';status:'baseline'}
export interface CharacterWorldIdentity {version:'world-lore-v1';raceId?:RaceId;subraceId?:string;originPolityId?:string;originRegionId?:string;originSettlementId?:string;cultureIds:string[];citizenshipPolityIds:string[]}
export interface WorldIdentityRequest {raceId?:RaceId|'random';subraceId?:string|'random';originPolityId?:string|'random';cultureId?:string|'random';cultureIds?:string[];originSettlementId?:string;citizenshipPolityIds?:string[]}
export interface LoreTravelPlan {id:string;fromPlaceId:string;toPlaceId:string;kind:'road'|'mountain'|'forest'|'river'|'sea'|'special';status:'unconfigured';description:string}
