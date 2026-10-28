import type {CalendarId,DateInput,TimeChange,TimeCommit,TimeChangeReason,TimeSave} from '../types/calendar';
import {TIME_RULES} from '../data/calendars';
import {DEFAULT_ABSOLUTE_MINUTE,MAX_ABSOLUTE_MINUTE,assertAbsoluteMinute,advanceTime,toAbsoluteMinute,fromAbsoluteMinute} from './calendar';
export function serializeGameTime(value:number):TimeSave{assertAbsoluteMinute(value);return {version:TIME_RULES.version,absoluteMinute:value};}
export function deserializeGameTime(save:unknown):number{
 if(save===undefined)return DEFAULT_ABSOLUTE_MINUTE;
 if(!save||typeof save!=='object'||!('version' in save)||save.version!==TIME_RULES.version||!('absoluteMinute' in save)||typeof save.absoluteMinute!=='number')throw new Error('지원하지 않거나 손상된 시간 저장 데이터입니다.');
 assertAbsoluteMinute(save.absoluteMinute);return save.absoluteMinute;
}
export function timeChange(from:number,to:number,reason:TimeChangeReason):TimeChange{assertAbsoluteMinute(from);assertAbsoluteMinute(to);return {from,to,elapsedMinutes:to-from,reason,direction:to>from?'forward':to<from?'backward':'unchanged'};}
export interface TimelineParticipant {
 id?:string;
 priority:number;
 nextEventTime:(current:number,limit:number)=>number|null;
 processAt:(minute:number)=>void;
 beforeStep?:(from:number,to:number)=>void;
 beforeAdvance?:(from:number,to:number)=>void;
 onSeek?:(change:TimeChange)=>void;
}
/** Explicit clock ownership, no timers, browser storage, global date or NPC side effects. */
export function createGameClock(initial=DEFAULT_ABSOLUTE_MINUTE){
 assertAbsoluteMinute(initial);let current=initial,notifying=false,timelineProcessing=false,stopRequested=false;const timeline=new Set<TimelineParticipant>();const renders=new Set<()=>void>(),listeners=new Set<(change:TimeChange)=>void>();
 const ordered=()=>[...timeline].sort((a,b)=>a.priority-b.priority||(a.id&&b.id?a.id.localeCompare(b.id):0));
 let diagnostics={boundaries:0,stageCalls:0,lastAdvanceBoundaries:0,lastAdvanceStageCalls:0};
 const inspect=(limit=MAX_ABSOLUTE_MINUTE)=>{assertAbsoluteMinute(limit);if(limit<current)throw Error('예약 조회는 현재 이후만 가능합니다.');return ordered().map((p,index)=>{const at=p.nextEventTime(current,limit);if(at!==null&&(!Number.isSafeInteger(at)||at<current||at>limit))throw Error('예약 이벤트 시각 오류');return {id:p.id??`stage-${p.priority}-${index}`,priority:p.priority,at};});};
 const commit=(next:number,reason:TimeChangeReason):TimeCommit=>{
  if(notifying)throw new Error('시간 변경 알림 중에는 같은 시계를 다시 변경할 수 없습니다. 예약 작업은 알림 뒤 처리하세요.');
  stopRequested=false;assertAbsoluteMinute(next);const from=current,listenerErrors:unknown[]=[];let processed=false;
  const participants=ordered();diagnostics={...diagnostics,lastAdvanceBoundaries:0,lastAdvanceStageCalls:0};
  notifying=true;try{if(reason==='advance')for(const p of participants)p.beforeAdvance?.(from,next);}catch(error){notifying=false;throw error;}
  notifying=true;timelineProcessing=true;
  try{
   if(reason==='advance'){
    let steps=0,sameMinutePasses=0,lastAt=-1;
    while(true){let at=Infinity;for(const p of participants){const candidate=p.nextEventTime(current,next);if(candidate!==null){if(!Number.isSafeInteger(candidate)||candidate<current||candidate>next)throw new Error('예약 이벤트 시각 오류');at=Math.min(at,candidate);}}
     if(!Number.isFinite(at))break;if(++steps>TIME_RULES.maxTimelineEvents)throw new Error('예약 이벤트 처리 한도 초과');sameMinutePasses=at===lastAt?sameMinutePasses+1:1;lastAt=at;if(sameMinutePasses>256)throw Error('동일 시각 예약 처리256회 초과: 무한 재예약을 확인하세요.');processed=true;for(const p of participants)p.beforeStep?.(current,at);current=at;diagnostics.boundaries++;diagnostics.lastAdvanceBoundaries++;for(const p of participants){diagnostics.stageCalls++;diagnostics.lastAdvanceStageCalls++;p.processAt(at);}if(stopRequested)break;
    }
    if(current<next&&!stopRequested){for(const p of participants)p.beforeStep?.(current,next);current=next;diagnostics.boundaries++;diagnostics.lastAdvanceBoundaries++;for(const p of participants){diagnostics.stageCalls++;diagnostics.lastAdvanceStageCalls++;p.processAt(next);}}
   }else{current=next;const seek=timeChange(from,next,reason);if(seek.direction!=='unchanged')for(const p of participants)p.onSeek?.(seek);}
  }catch(error){listenerErrors.push(error);}
  finally{timelineProcessing=false;}
  const change=timeChange(from,current,reason);
  try{if(change.direction!=='unchanged'||listenerErrors.length||processed){for(const callback of [...listeners])try{callback({...change});}catch(error){listenerErrors.push(error);}for(const callback of [...renders])try{callback();}catch(error){listenerErrors.push(error);}}}finally{notifying=false;}
  return {...change,listenerErrors};
 };
 return {
  getSnapshot:()=>current,
  stopAfterBoundary:()=>{if(timelineProcessing)stopRequested=true;},
  getTimelineInfo:inspect,
  getTimelineDiagnostics:()=>({...diagnostics}),
  isProcessingTimeline:()=>timelineProcessing,
  subscribeTimeline:(participant:TimelineParticipant)=>{if(participant.id&&[...timeline].some(p=>p.id===participant.id))throw Error('중복 시뮬레이션 단계 ID');timeline.add(participant);return ()=>{timeline.delete(participant);};},
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
