import type {Condition} from './index';
import type {CalendarId} from './calendar';
export type LocationType='world'|'realm'|'nation'|'region'|'city'|'district'|'facility'|'building'|'floor'|'room'|'outdoor'|'special';
export type MovementMode='walk'|'run'|'ride'|'teleport';
export type AccessRule=(
 |{type:'time';start:string;end:string}
 |{type:'position';positionIds:string[];organizationId?:string}
 |{type:'organization';organizationIds:string[]}
 |{type:'permission';permissionId:string}
 |{type:'condition';condition:Condition}
 |{type:'all'|'any';rules:AccessRule[]}
 |{type:'not';rule:AccessRule})&{description:string};
export interface LocationDefinition {id:string;name:string;parentId:string|null;type:LocationType;description:string;organizationId?:string;calendarId?:CalendarId;tags:string[];activityTags:string[];capacity?:number;dangerLevel:number;accessRules:AccessRule[]}
export interface LocationConnection {id:string;fromLocationId:string;toLocationId:string;distanceMeters?:number;baseTravelMinutes:number;terrainType:'normal'|'rough';allowedModes:MovementMode[];bidirectional:boolean;accessRules:AccessRule[]}
export interface MovementLeg {connectionId:string;from:string;to:string;departureTime:number;arrivalTime:number;distanceMeters:number}
export interface MovementState {originLocationId:string;destinationLocationId:string;routeLocationIds:string[];departureTime:number;arrivalTime:number;movementMode:MovementMode;legs:MovementLeg[];nextLeg:number}
export interface CharacterLocationState {characterId:string;currentLocationId:string;homeLocationId?:string;primaryLocationId?:string;movement:MovementState|null}
export interface RouteResult {ok:boolean;reasons:string[];routeLocationIds:string[];legs:MovementLeg[];travelMinutes:number;distanceMeters:number;arrivalTime:number;expanded:number}
export interface LocationLog {id:number;at:number;type:'departure'|'waypoint'|'arrival'|'cancel'|'denied'|'placement'|'time'|'no-route'|'failure';characterId?:string;message:string}
