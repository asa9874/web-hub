import {useSyncExternalStore} from 'react';
import type {CharacterSchedule} from '../types/schedule';
import type {NpcScheduleEngine} from '../systems/npcSchedules';
import {activityRegistry,roleNames,activityStatusNames} from '../data/schedules';
import {DEFAULT_ABSOLUTE_MINUTE,formatGameTime} from '../systems/calendar';
import {useOptionalScheduleEngine} from './scheduleHooks';
import ScheduleDay from './ScheduleDay';
import {getCharacterSchedule} from '../systems/schedulePlanning';
import type {Character} from '../types/character';
const noop=()=>()=>{},zero=()=>0;

export default function CharacterSchedulePanel({character,characterId,engine:provided,plan:providedPlan}:{character?:Character;characterId:string;engine?:NpcScheduleEngine|null;plan?:CharacterSchedule}){
 const shared=useOptionalScheduleEngine(),engine=provided===null?null:provided??shared;useSyncExternalStore(engine?.subscribe??noop,engine?.getSnapshot??zero,zero);
 const live=engine?.hasSchedule(characterId),plan=providedPlan??engine?.getPlans().find(p=>p.characterId===characterId),now=engine?.clock.getSnapshot()??DEFAULT_ABSOLUTE_MINUTE,state=live?engine!.getCurrentActivity(characterId):null;
 const entries=live?engine!.getCharacterSchedule(characterId,now):providedPlan&&character?getCharacterSchedule(character,providedPlan,now):[];
 return <section className="ac-character-schedule" aria-label="캐릭터 일과표"><h3>현재 활동 · 일과표</h3>{state?<><p><b>{state.activityId?activityRegistry.get(state.activityId)?.name:'활동 없음'}</b> · {activityStatusNames[state.status]}</p>{state.actualStartTime!==undefined&&<p>실제 시작 {formatGameTime(state.actualStartTime)} / 종료 예정 {state.plannedEndTime!==undefined?formatGameTime(state.plannedEndTime):'없음'}</p>}{state.arrivalTime!==undefined&&state.status==='traveling'&&<p>예상 도착 {formatGameTime(state.arrivalTime)}</p>}{state.lateMinutes>0&&<p>지각 {state.lateMinutes}분</p>}{state.reason&&<p>{state.reason}</p>}</>:<p>현재 실행 정보 없음 · 플레이어는 수동 조작하며, 새 NPC의 계획은 활동 세계 등록 후 실행됩니다.</p>}{plan&&<><p>{roleNames[plan.role]} {plan.role==='guard'?`· ${plan.shift==='day'?'주간조':'야간조'}`:''}</p><details><summary>오늘 일과 {entries.length}개 보기</summary><ScheduleDay entries={entries}/></details></>}</section>;
}
