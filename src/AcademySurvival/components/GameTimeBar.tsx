import {useState} from 'react';
import {useGameClock,useClockMinute} from './GameTimeContext';
import {formatGameDate,formatGameTime,toImperialDate,getWeekday,getSeason,getTimePeriod,getAcademicPeriod} from '../systems/calendar';
import DetailDialog from './DetailDialog';
export function TimeReadout({minute}:{minute:number}){
 const d=toImperialDate(minute);
 return <dl className="ac-time-readout"><div><dt>제국력</dt><dd>{formatGameDate(minute)} ({getWeekday(minute).name}) {formatGameTime(minute)}</dd></div><div><dt>심연력</dt><dd>{formatGameDate(minute,'abyss')} ({getWeekday(minute).name}) {formatGameTime(minute)}</dd></div><div><dt>계절 · 시간대</dt><dd>{getSeason(d).name} · {getTimePeriod(d).name}</dd></div><div><dt>학사 일정</dt><dd>{getAcademicPeriod(d).name} · {getAcademicPeriod(d).term}</dd></div><div><dt>내부 절대 분</dt><dd>{minute}</dd></div></dl>;
}
export default function GameTimeBar({onOpenCalendar}:{onOpenCalendar:()=>void}){
 const clock=useGameClock(),minute=useClockMinute(clock),d=toImperialDate(minute),[open,setOpen]=useState(false);
 return <><button className="ac-game-time" aria-label="현재 게임 날짜 상세" onClick={()=>setOpen(true)}><strong>{formatGameDate(minute)} ({getWeekday(minute).shortName})</strong><span>{getTimePeriod(d).name} {formatGameTime(minute)} · {getSeason(d).name} · {getAcademicPeriod(d).term}</span></button>{open&&<DetailDialog title="현재 게임 시간" onClose={()=>setOpen(false)}><section className="ac-time-dialog"><TimeReadout minute={minute}/><p>제국력과 심연력은 같은 시간을 표현합니다. 현재는 자동 시간 진행이 없으며 개발자 테스트기의 시계와 분리되어 있습니다.</p><button onClick={()=>{setOpen(false);onOpenCalendar();}}>시간·달력 설정집 보기</button></section></DetailDialog>}</>;
}
