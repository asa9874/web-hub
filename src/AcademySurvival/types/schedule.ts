import type {Condition} from './index';
export type ScheduleRole='student'|'professor'|'guard'|'staff'|'demon-worker'|'civilian';
export type ActivityExecutionStatus='idle'|'planned'|'traveling'|'active'|'completed'|'late'|'skipped'|'failed'|'interrupted';
export type PlaceBinding='home'|'classroom'|'training'|'office'|'guard'|'patrol'|'meal'|'leisure';
export interface ActivityDefinition {id:string;name:string;description:string;type:'sleep'|'meal'|'class'|'training'|'work'|'rest'|'free';requiredPlaceTags:string[];defaultLocations:string[];defaultPriority:number;interruptible:boolean;actionTags:string[];futureEffectKeys:string[]}
export type ScheduleCondition={type:'weekday';days:number[]}|{type:'academic';kinds:string[]}|{type:'shared';condition:Condition};
export interface ScheduleEntry {id:string;name?:string;activityId:string;startMinuteOfDay:number;endMinuteOfDay:number;targetLocationId?:string;binding?:PlaceBinding;priority:number;mandatory:boolean;interruptible:boolean;conditions:ScheduleCondition[];absoluteDay?:number}
export interface ScheduleTemplate {id:string;name:string;description:string;applicableRoles:ScheduleRole[];entries:ScheduleEntry[]}
export interface CharacterSchedule {characterId:string;version:'schedule-v1';templateId:string;role:ScheduleRole;shift:'day'|'night';timeOffset:number;bindings:Partial<Record<PlaceBinding,string>>;overrides:ScheduleEntry[];temporaryEntries:ScheduleEntry[];cancelledEntryIds:string[];diagnostics:string[]}
export interface ScheduleIntent {characterId:string;occurrenceId:string;entryId:string;activityId:string;targetLocationId?:string;priority:number;mandatory:boolean;interruptible:boolean;plannedStartTime:number;plannedEndTime:number;temporary:boolean;destinationError?:string;name?:string}
export interface ActivityExecution {characterId:string;occurrenceId?:string;entryId?:string;activityId?:string;targetLocationId?:string;status:ActivityExecutionStatus;plannedStartTime?:number;plannedEndTime?:number;actualStartTime?:number;actualEndTime?:number;expectedDepartureTime?:number;arrivalTime?:number;lateMinutes:number;absent:boolean;reason?:string;resumes:number}
export type ScheduleLogType='selection'|'start'|'complete'|'departure'|'arrival'|'late'|'absent'|'failure'|'interrupt'|'resume'|'temporary'|'cancel'|'seek';
export interface ScheduleLog {id:number;at:number;characterId?:string;type:ScheduleLogType;important:boolean;message:string}
