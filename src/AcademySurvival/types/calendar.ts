export type CalendarId='imperial'|'abyss';
export interface CalendarDate {year:number;month:number;day:number}
export interface GameDateTime extends CalendarDate {hour:number;minute:number}
export type DateInput=CalendarDate&Partial<Pick<GameDateTime,'hour'|'minute'>>;
export interface CalendarDefinition {id:CalendarId;name:string;formalName:string;epoch:string;history:string;monthsPerYear:number;daysPerMonth:number;yearOffset:number;official:true;monthNames?:readonly {name:string;symbol:string}[]}
export type TimeChangeReason='advance'|'set'|'load'|'reset';
export interface TimeChange {from:number;to:number;elapsedMinutes:number;reason:TimeChangeReason;direction:'forward'|'backward'|'unchanged'}
export interface TimeCommit extends TimeChange {listenerErrors:unknown[]}
export interface TimeSave {version:'academy-time-v1';absoluteMinute:number}
export type TimeBoundary='hour'|'day'|'week'|'imperial-month'|'abyss-month'|'year';
export interface ScheduledTime {id:string;at:number;everyMinutes?:number;until?:number}
export interface TimeOccurrence {scheduleId:string;at:number}
