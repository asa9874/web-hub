import {AI_HABIT_NAMES} from '../data/ai/config';
import type {DailyLifeEngine} from '../types/dailyLife';
import {residenceRooms} from '../data/dailyLife';
import {LIFE_SIGNALS} from '../data/dailyLife/events';
import {activityRegistry} from '../data/schedules';
import {formatGameTime} from '../systems/calendar';
import './DailyLife.css';
export default function DailyLifeCatalog({onTest}:{onTest:()=>void}){
 return <section className="ac-daily-life"><header><h2>아카데미 일상생활·기숙사</h2><button onClick={onTest}>시뮬레이션</button></header><p>학생·교수·교직원은 방과 침대를 배정받아 생활합니다. 거주지와 현재 위치는 별개이며, 귀가에는 실제 이동 시간이 필요합니다.</p><p>학생 생활관 {residenceRooms.filter(r=>r.residentKind==='student').length}실 · 교수 숙소 {residenceRooms.filter(r=>r.residentKind==='professor').length}실 · 교직원 숙소 {residenceRooms.filter(r=>r.residentKind==='staff').length}실. 정원이 없으면 배정 대기하며 임의로 침대를 늘리지 않습니다.</p><h3>공동 공간과 방문</h3><p>공용 휴게실·공동 학습실·세탁실·욕실·기숙사 식당·정원은 실제 장소입니다. 사적인 방은 입주자·직원 또는08~22시 허가된 방문자만 입장할 수 있습니다. 성별·종족으로 입주 여부를 결정하지 않습니다.</p><h3>일과와 자율성</h3><p>평일·주말·방학의 기존 일과, 욕구, 목표와 AI 습관을 재사용합니다. 룸메이트는 친구를 뜻하지 않으며, 실제 동석과 수락 후에만 공동 활동과 관계 변화가 발생합니다. 수면·식사·성장의 효과는 원래 엔진이 한 번만 적용합니다.</p><h3>생활 사건 {LIFE_SIGNALS.length}종</h3><p>아래 사건은 실제 이동·활동·상호작용의 완료 증거로 기록됩니다. 편지의 원격 배달, 고향 소식, 실물 선물·경제 결과는 생성하지 않습니다.</p>{LIFE_SIGNALS.map(([id,name,description])=><details key={id}><summary>{name}</summary><p>{description}</p><p>세계 이벤트 ID: daily-{id} · 개인 기록/당사자 기억 · 실제 수행 효과의 중복 지급 없음.</p></details>)}</section>;
}
export function CharacterDailyLifePanel({engine,characterId,owner=false,debug=false,onInspect}:{engine?:DailyLifeEngine;characterId:string;owner?:boolean;debug?:boolean;onInspect?:(id:string)=>void}){
 const a=engine?.getAssignment(characterId);if(!engine||!a)return null;
 if(!owner&&!debug&&a.visibility!=='public')return <section className="ac-character-life"><h3>거주·생활</h3><p>개인 거주지와 생활 기록은 비공개입니다.</p></section>;
 const p=engine.getProfile(characterId),home=a.roomId??a.residenceId;
 return <section className="ac-character-life"><h3>거주·생활</h3><p>{engine.world.catalog.getLocationFullName(home)} · {a.status==='active'?'입주 중':a.status==='pending'?'배정 대기':'퇴실'}</p><p>룸메이트: {engine.getRoommates(characterId).map(id=><button key={id} onClick={()=>onInspect?.(id)}>{engine.world.getCharacterReadSnapshot(id).name}</button>)}{!engine.getRoommates(characterId).length&&'없음'}</p>{p&&<p>생활 습관 {engine.getHabits(characterId).map(h=>AI_HABIT_NAMES[h]??h).join(' · ')||'미설정'} · 정리 선호 {p.tidiness} · 조용한 환경 선호 {p.quietPreference} · 취향 {p.preferredActivities.map(id=>activityRegistry.get(id)?.name).join(' · ')||'추가 경험 없음'}</p>}<details><summary>최근 생활 경험</summary>{engine.getLogs(characterId).slice(-8).reverse().map(r=><p key={r.id}>{formatGameTime(r.at)} · {r.message}</p>)}</details></section>;
}
