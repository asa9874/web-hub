import type {CalendarId,DateInput,TimeChange,TimeCommit,TimeChangeReason,TimeSave} from '../types/calendar';
import {TIME_RULES} from '../data/calendars';
import {DEFAULT_ABSOLUTE_MINUTE,assertAbsoluteMinute,advanceTime,toAbsoluteMinute,fromAbsoluteMinute} from './calendar';
export function serializeGameTime(value:number):TimeSave{assertAbsoluteMinute(value);return {version:TIME_RULES.version,absoluteMinute:value};}
export function deserializeGameTime(save:unknown):number{
 if(save===undefined)return DEFAULT_ABSOLUTE_MINUTE;
 if(!save||typeof save!=='object'||!('version' in save)||save.version!==TIME_RULES.version||!('absoluteMinute' in save)||typeof save.absoluteMinute!=='number')throw new Error('지원하지 않거나 손상된 시간 저장 데이터입니다.');
 assertAbsoluteMinute(save.absoluteMinute);return save.absoluteMinute;
}
export function timeChange(from:number,to:number,reason:TimeChangeReason):TimeChange{assertAbsoluteMinute(from);assertAbsoluteMinute(to);return {from,to,elapsedMinutes:to-from,reason,direction:to>from?'forward':to<from?'backward':'unchanged'};}
/** Explicit clock ownership, no timers, browser storage, global date or NPC side effects. */
export function createGameClock(initial=DEFAULT_ABSOLUTE_MINUTE){
 assertAbsoluteMinute(initial);let current=initial,notifying=false;const renders=new Set<()=>void>(),listeners=new Set<(change:TimeChange)=>void>();
 const commit=(next:number,reason:TimeChangeReason):TimeCommit=>{
  if(notifying)throw new Error('시간 변경 알림 중에는 같은 시계를 다시 변경할 수 없습니다. 예약 작업은 알림 뒤 처리하세요.');
  const change=timeChange(current,next,reason),listenerErrors:unknown[]=[];current=next;
  if(change.direction!=='unchanged'){notifying=true;try{for(const callback of [...listeners])try{callback({...change});}catch(error){listenerErrors.push(error);}for(const callback of [...renders])try{callback();}catch(error){listenerErrors.push(error);}}finally{notifying=false;}}
  return {...change,listenerErrors};
 };
 return {
  getSnapshot:()=>current,
  getGameDateTime:(calendarId:CalendarId='imperial')=>fromAbsoluteMinute(current,calendarId),
  setGameDateTime:(date:DateInput,calendarId:CalendarId='imperial')=>commit(toAbsoluteMinute(date,calendarId),'set'),
  setAbsoluteMinute:(minute:number)=>commit(minute,'set'),
  advanceTime:(minutes:number)=>commit(advanceTime(current,minutes),'advance'),
  reset:()=>commit(initial,'reset'),
  save:()=>serializeGameTime(current),
  load:(save:unknown)=>commit(deserializeGameTime(save),'load'),
  subscribe:(callback:()=>void)=>{renders.add(callback);return ()=>{renders.delete(callback);};},
  subscribeChanges:(callback:(change:TimeChange)=>void)=>{listeners.add(callback);return ()=>{listeners.delete(callback);};},
 };
}
export type GameClock=ReturnType<typeof createGameClock>;
