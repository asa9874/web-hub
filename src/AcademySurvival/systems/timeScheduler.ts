import type {TimeChange,TimeBoundary,ScheduledTime,TimeOccurrence} from '../types/calendar';
import {TIME_RULES,WEEKDAY_ANCHOR} from '../data/calendars';
import {MINUTES_PER_DAY,MINUTES_PER_YEAR,assertAbsoluteMinute,toAbsoluteMinute,calendarDefinition} from './calendar';
const weekOffset=(Math.floor(toAbsoluteMinute(WEEKDAY_ANCHOR.date)/MINUTES_PER_DAY)-WEEKDAY_ANCHOR.index)%TIME_RULES.daysPerWeek*MINUTES_PER_DAY;
const steps:Record<TimeBoundary,{step:number;offset:number}>={hour:{step:TIME_RULES.minutesPerHour,offset:0},day:{step:MINUTES_PER_DAY,offset:0},week:{step:MINUTES_PER_DAY*TIME_RULES.daysPerWeek,offset:weekOffset},'imperial-month':{step:MINUTES_PER_DAY*calendarDefinition('imperial').daysPerMonth,offset:0},'abyss-month':{step:MINUTES_PER_DAY*calendarDefinition('abyss').daysPerMonth,offset:0},year:{step:MINUTES_PER_YEAR,offset:0}};
const forward=(change:TimeChange,includeSeeks=false)=>{assertAbsoluteMinute(change.from);assertAbsoluteMinute(change.to);return change.to>change.from&&(change.reason==='advance'||includeSeeks);};
/** Catch-up interval is (from,to]. Seek/load/reset are excluded unless explicitly requested. */
export function boundaryCount(change:TimeChange,unit:TimeBoundary,includeSeeks=false){if(!forward(change,includeSeeks))return 0;const {step,offset}=steps[unit];return Math.floor((change.to-offset)/step)-Math.floor((change.from-offset)/step);}
export function* iterateTimeBoundaries(change:TimeChange,unit:TimeBoundary,includeSeeks=false):Generator<number>{if(!forward(change,includeSeeks))return;const {step,offset}=steps[unit];for(let at=(Math.floor((change.from-offset)/step)+1)*step+offset;at<=change.to;at+=step)yield at;}
export const boundarySummary=(change:TimeChange)=>Object.fromEntries((Object.keys(steps) as TimeBoundary[]).map(unit=>[unit,boundaryCount(change,unit)])) as Record<TimeBoundary,number>;
/** Lazy chronological query. Never executes events, consumes a global queue or drops occurrences. */
export function* scheduledOccurrences(change:TimeChange,schedules:readonly ScheduledTime[],includeSeeks=false):Generator<TimeOccurrence>{
 const ids=new Set<string>();for(const task of schedules){if(!task.id||ids.has(task.id))throw new Error('일정 ID 누락/중복');ids.add(task.id);assertAbsoluteMinute(task.at);if(task.until!==undefined){assertAbsoluteMinute(task.until);if(task.until<task.at)throw new Error('일정 종료 시점 오류');}if(task.everyMinutes!==undefined&&(!Number.isSafeInteger(task.everyMinutes)||task.everyMinutes<=0))throw new Error('반복 주기는 양의 정수여야 합니다.');}
 if(!forward(change,includeSeeks))return;
 const pending=schedules.map(task=>{const at=task.at>change.from?task.at:task.everyMinutes===undefined?Infinity:task.at+(Math.floor((change.from-task.at)/task.everyMinutes)+1)*task.everyMinutes;return {task,at};});
 while(true){let selected:typeof pending[number]|undefined;for(const row of pending)if(row.at<=change.to&&row.at<=(row.task.until??Infinity)&&(!selected||row.at<selected.at||row.at===selected.at&&row.task.id<selected.task.id))selected=row;if(!selected)return;yield {scheduleId:selected.task.id,at:selected.at};selected.at=selected.task.everyMinutes===undefined?Infinity:selected.at+selected.task.everyMinutes;}
}
