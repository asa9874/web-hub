import type {ActivityExecution} from './schedule';
import type {LocationWorld} from '../systems/locationWorld';
export interface DailyLifeIntent {activityId:string;targetLocationId:string;score:number;targetCharacterId?:string;interactionId?:string}
export interface DailyLifeEngine {
 world:LocationWorld;clock:LocationWorld['clock'];connect:()=>()=>void;disconnect:()=>void;save:()=>DailyLifeSave;syncCharacters:()=>void;
 getCurrentActivity:(id:string)=>ActivityExecution;getHabits:(id:string)=>string[];getInteractionOptions:(id:string,targetId:string)=>{id:string;name:string;ok:boolean;reasons:string[]}[];getIntents:(id:string)=>DailyLifeIntent[];canInteract:(a:string,b:string,id:string)=>string[];
 getAssignment:(id:string)=>ResidenceAssignment|null;getAssignments:()=>ResidenceAssignment[];
 getRoommates:(id:string)=>string[];getRoomOccupants:(id:string)=>string[];getProfile:(id:string)=>DailyLifeProfile|null;
 getSummary:(id?:string)=>DailyLifeSave['days'];getLogs:(id?:string)=>DailyLifeLog[];
 assignResidence:(id:string,roomId:string)=>ResidenceAssignment;setExternalResidence:(id:string,locationId:string)=>ResidenceAssignment;
 endResidence:(id:string)=>void;grantVisit:(id:string,roomId:string,allow:boolean)=>void;setPreference:(id:string,key:'tidiness'|'quietPreference',value:number)=>void;
 subscribe:(fn:()=>void)=>()=>void;getSnapshot:()=>number;
}
export interface ResidenceAssignment {
 characterId:string;residenceId:string;roomId?:string;bedId?:string;assignedAt:number;endedAt?:number;
 status:'active'|'pending'|'ended';kind:'student'|'professor'|'staff'|'external';visibility:'public'|'private';
}
export interface ResidenceRoom {id:string;buildingId:string;floor:number;kind:'single'|'twin'|'shared';residentKind:'student'|'professor'|'staff';beds:string[];activities:string[]}
export interface DailyLifeProfile {characterId:string;quietPreference:number;tidiness:number;preferredActivities:string[];activityCounts:Record<string,number>}
export interface LifeActivitySegment {characterId:string;activityId:string;locationId:string;from:number;to:number}
export interface DailyLifeLog {id:string;at:number;characterId:string;targetId?:string;locationId?:string;eventId:string;message:string;importance:number}
export interface DailyLifeSave {
 version:'daily-life-v1';absoluteMinute:number;seed:string;serial:number;
 assignments:ResidenceAssignment[];profiles:DailyLifeProfile[];
 tracking:{characterId:string;activityId?:string;locationId:string;since:number}[];
 days:{characterId:string;day:number;activities:Record<string,number>}[];
 logs:DailyLifeLog[];processed:{key:string;at:number}[];firstMeetings:string[];
}
