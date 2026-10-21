import type {CalendarId,DateInput,GameDateTime,CalendarDate} from '../types/calendar';
import {TIME_RULES,CALENDARS,calendarRegistry,SCENARIO_TIME,WEEKDAY_ANCHOR,WEEKDAYS,SEASONS,TIME_PERIODS,ACADEMIC_SCHEDULE} from '../data/calendars';
export const MINUTES_PER_DAY=TIME_RULES.minutesPerHour*TIME_RULES.hoursPerDay;
export const MINUTES_PER_YEAR=TIME_RULES.daysPerYear*MINUTES_PER_DAY;
export const MAX_ABSOLUTE_MINUTE=TIME_RULES.maxImperialYear*MINUTES_PER_YEAR-1;
const integer=(n:number,min:number,max:number,label:string)=>{if(!Number.isSafeInteger(n)||n<min||n>max)throw new RangeError(`${label}: ${min}~${max}의 정수가 필요합니다.`);};
export function assertAbsoluteMinute(value:number){integer(value,0,MAX_ABSOLUTE_MINUTE,'절대 시간');}
export function calendarDefinition(id:CalendarId){const definition=calendarRegistry.get(id);if(!definition)throw new RangeError('지원하지 않는 달력: '+id);return definition;}
export function toAbsoluteMinute(date:DateInput,id:CalendarId='imperial'):number{
 const c=calendarDefinition(id);if(!date||typeof date!=='object')throw new RangeError('날짜 객체가 필요합니다.');
 integer(date.year,TIME_RULES.minImperialYear+c.yearOffset,TIME_RULES.maxImperialYear+c.yearOffset,c.name+' 연도');integer(date.month,1,c.monthsPerYear,c.name+' 월');integer(date.day,1,c.daysPerMonth,c.name+' 일');integer(date.hour===undefined?0:date.hour,0,TIME_RULES.hoursPerDay-1,'시');integer(date.minute===undefined?0:date.minute,0,TIME_RULES.minutesPerHour-1,'분');
 return ((date.year-c.yearOffset-1)*TIME_RULES.daysPerYear+(date.month-1)*c.daysPerMonth+date.day-1)*MINUTES_PER_DAY+(date.hour??0)*TIME_RULES.minutesPerHour+(date.minute??0);
}
export function fromAbsoluteMinute(value:number,id:CalendarId='imperial'):GameDateTime{
 assertAbsoluteMinute(value);const c=calendarDefinition(id),absoluteDay=Math.floor(value/MINUTES_PER_DAY),dayOfYear=absoluteDay%TIME_RULES.daysPerYear,time=value%MINUTES_PER_DAY;
 return {year:Math.floor(absoluteDay/TIME_RULES.daysPerYear)+1+c.yearOffset,month:Math.floor(dayOfYear/c.daysPerMonth)+1,day:dayOfYear%c.daysPerMonth+1,hour:Math.floor(time/TIME_RULES.minutesPerHour),minute:time%TIME_RULES.minutesPerHour};
}
export const toImperialDate=(value:number)=>fromAbsoluteMinute(value,'imperial');
export const toAbyssDate=(value:number)=>fromAbsoluteMinute(value,'abyss');
export const imperialToAbyss=(date:DateInput)=>toAbyssDate(toAbsoluteMinute(date,'imperial'));
export const abyssToImperial=(date:DateInput)=>toImperialDate(toAbsoluteMinute(date,'abyss'));
export const DEFAULT_ABSOLUTE_MINUTE=toAbsoluteMinute(SCENARIO_TIME.start,SCENARIO_TIME.calendarId);
const anchorDay=Math.floor(toAbsoluteMinute(WEEKDAY_ANCHOR.date)/MINUTES_PER_DAY),mod=(n:number,d:number)=>(n%d+d)%d;
export function getWeekday(value:number){assertAbsoluteMinute(value);const index=mod(Math.floor(value/MINUTES_PER_DAY)-anchorDay+WEEKDAY_ANCHOR.index,TIME_RULES.daysPerWeek);return {index,name:WEEKDAYS[index],shortName:WEEKDAYS[index].slice(0,1)};}
export function getSeason(date:CalendarDate){toAbsoluteMinute(date);return SEASONS.find(s=>(s.months as readonly number[]).includes(date.month))!;}
export function getTimePeriod(date:GameDateTime){toAbsoluteMinute(date);const minute=date.hour*TIME_RULES.minutesPerHour+date.minute;return TIME_PERIODS.find(p=>p.ranges.some(([start,end])=>minute>=start&&minute<end))!;}
export function getAcademicPeriod(date:CalendarDate){toAbsoluteMinute(date);return ACADEMIC_SCHEDULE.find(p=>p.month===date.month)!;}
export function advanceTime(value:number,minutes:number){assertAbsoluteMinute(value);integer(minutes,0,MAX_ABSOLUTE_MINUTE,'진행 분');const next=value+minutes;assertAbsoluteMinute(next);return next;}
export function getElapsedMinutes(start:number,end:number){assertAbsoluteMinute(start);assertAbsoluteMinute(end);return end-start;}
/** Calendar-day distance, not rounded 24-hour duration. Negative means a past date. */
export function getDaysUntil(target:number,from:number){assertAbsoluteMinute(target);assertAbsoluteMinute(from);return Math.floor(target/MINUTES_PER_DAY)-Math.floor(from/MINUTES_PER_DAY);}
export function formatGameDate(value:number,id:CalendarId='imperial',numericMonth=false){const c=calendarDefinition(id),d=fromAbsoluteMinute(value,id);return `${c.name} ${d.year}년 ${c.monthNames&&!numericMonth?c.monthNames[d.month-1].name:d.month+'월'} ${d.day}일`;}
export function formatGameTime(value:number){const d=toImperialDate(value);return `${String(d.hour).padStart(2,'0')}:${String(d.minute).padStart(2,'0')}`;}
export function calendarMonthGrid(value:number,id:CalendarId){const date=fromAbsoluteMinute(value,id),definition=calendarDefinition(id),start=toAbsoluteMinute({...date,day:1,hour:0,minute:0},id);return {date,leadingBlanks:getWeekday(start).index,days:Array.from({length:definition.daysPerMonth},(_,i)=>({day:i+1,absoluteMinute:start+i*MINUTES_PER_DAY,weekday:getWeekday(start+i*MINUTES_PER_DAY)}))};}
export function calendarDataIssues():string[]{
 const errors:string[]=[],ids=new Set<string>();for(const c of CALENDARS){if(ids.has(c.id)||!c.name||!c.epoch||!c.history||!c.official||c.monthsPerYear*c.daysPerMonth!==TIME_RULES.daysPerYear)errors.push('달력 정의 오류: '+c.id);ids.add(c.id);if(c.monthNames&&(c.monthNames.length!==c.monthsPerYear||new Set(c.monthNames.map(m=>m.name)).size!==c.monthNames.length||c.monthNames.some(m=>!m.name||!m.symbol)))errors.push('월 이름 오류: '+c.id);}
 for(let minute=0;minute<MINUTES_PER_DAY;minute++)if(TIME_PERIODS.filter(p=>p.ranges.some(([a,b])=>minute>=a&&minute<b)).length!==1)errors.push('시간대 누락/중복: '+minute);
 for(let month=1;month<=12;month++)if(ACADEMIC_SCHEDULE.filter(p=>p.month===month).length!==1||SEASONS.filter(s=>(s.months as readonly number[]).includes(month)).length!==1)errors.push('학사/계절 누락: '+month);
 return errors;
}
