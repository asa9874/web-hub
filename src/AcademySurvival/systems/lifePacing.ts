import {assertAbsoluteMinute,toAbsoluteMinute,toImperialDate,MINUTES_PER_DAY} from './calendar';
import {activityRegistry} from '../data/schedules';
import type {WorldSimulation} from './worldSimulation';
import type {PlayerLife} from './playerLife';
import type {ScheduleEntry} from '../types/schedule';

export type LifePeriod='next'|'day'|'week'|'month'|'term'|'year';
export const PLAN_ACTIVITIES=['automatic','self_study','reading','sword_training','magic_training','rest','walk_garden'] as const;
export type PlanActivity=typeof PLAN_ACTIVITIES[number];
export const PLAN_WINDOWS=[{id:'morning',name:'주말 오전',start:540,end:660},{id:'afternoon',name:'방과 후',start:990,end:1080},{id:'evening',name:'저녁',start:1170,end:1260}] as const;
export interface WeekSlot {day:number;window:string;activity:PlanActivity}
type Baseline=ReturnType<PlayerLife['baseline']>&{money:number};
export interface LifeRun {from:number;until:number;label:string;status:'running'|'interrupted'|'completed'|'cancelled';baseline:Baseline}
export interface LifeReport {from:number;to:number;label:string;activities:Record<string,number>;stats:Record<string,number>;proficiencies:Record<string,number>;needs:Record<string,number>;money:number;relationshipsChanged:boolean;memoryDelta:number}
export interface PacingSave {version:'life-pacing-v1';current?:LifeRun;reports:LifeReport[]}
export function periodTarget(now:number,period:LifePeriod,next?:number){
 assertAbsoluteMinute(now);const d=toImperialDate(now);let target:number;
 if(period==='next'){if(next===undefined||next<=now)throw Error('다음에 시작할 일정이 없습니다.');target=next;}
 else if(period==='day'||period==='week')target=now+(period==='day'?1:7)*MINUTES_PER_DAY;
 else if(period==='month')target=toAbsoluteMinute({year:d.year+(d.month===12?1:0),month:d.month===12?1:d.month+1,day:1});
 else if(period==='year')target=toAbsoluteMinute({year:d.year+1,month:1,day:1});
 else if(period==='term'){const ends=[{year:d.year,month:6,day:30,hour:18},{year:d.year,month:11,day:30,hour:18},{year:d.year+1,month:6,day:30,hour:18}].map(d=>toAbsoluteMinute(d));target=ends.find(t=>t>now)!;}
 else throw Error('지원하지 않는 생활 기간');assertAbsoluteMinute(target);return target;
}
const labels:Record<LifePeriod,string>={next:'다음 일정까지',day:'하루 생활',week:'일주일 생활',month:'이번 달 마무리',term:'학기 마무리',year:'올해 마무리'};
const PREFIX='player-week/';
const numeric=(v:unknown)=>!!v&&typeof v==='object'&&!Array.isArray(v)&&Object.values(v).every(n=>typeof n==='number'&&Number.isFinite(n));
const delta=(a:Record<string,number>,b:Record<string,number>)=>Object.fromEntries([...new Set([...Object.keys(a),...Object.keys(b)])].map(k=>[k,(b[k]??0)-(a[k]??0)]).filter(([,v])=>v!==0));

/** A saved destination and repeat intents over the existing world clock, not another simulator. */
export function createLifePacing({world,life,playerId,advance,available,publish,stop}:{world:WorldSimulation;life?:PlayerLife;playerId:string;advance:(minutes:number)=>Promise<void>;available:()=>void;publish:()=>void;stop:()=>void},input?:PacingSave){
 if(input===null)throw Error('생활 진행 저장 오류');
 const now=world.runtime.world.clock.getSnapshot,data:PacingSave=input?structuredClone(input):{version:'life-pacing-v1',reports:[]};
 const validBaseline=(b:Baseline)=>b&&Number.isSafeInteger(b.at)&&b.at>=0&&b.at<=now()&&numeric(b.activityMinutes)&&numeric(b.stats)&&numeric(b.proficiencies)&&numeric(b.needs)&&typeof b.relations==='string'&&Number.isSafeInteger(b.memories)&&b.memories>=0&&Number.isSafeInteger(b.money);
 if(!data||data.version!=='life-pacing-v1'||!Array.isArray(data.reports)||data.reports.length>12)throw Error('생활 진행 저장 오류');
 if(data.current){const r=data.current;assertAbsoluteMinute(r.from);assertAbsoluteMinute(r.until);if(!life||r.from>now()||r.until<=r.from||r.until-r.from>360*MINUTES_PER_DAY||!['running','interrupted','completed','cancelled'].includes(r.status)||typeof r.label!=='string'||r.label.length>80||!validBaseline(r.baseline)||r.baseline.at!==r.from||r.status==='completed'&&now()<r.until)throw Error('생활 목표·시작 상태 저장 오류');if(r.status==='running')r.status='interrupted';}
 for(const r of data.reports){if(!r||!Number.isSafeInteger(r.from)||!Number.isSafeInteger(r.to)||r.from<0||r.to<r.from||r.to>now()||typeof r.label!=='string'||r.label.length>80||!numeric(r.activities)||!numeric(r.stats)||!numeric(r.proficiencies)||!numeric(r.needs)||!Number.isSafeInteger(r.money)||!Number.isSafeInteger(r.memoryDelta)||typeof r.relationshipsChanged!=='boolean')throw Error('생활 보고 저장 오류');}
 const baseline=():Baseline=>{if(!life)throw Error('플레이어 생활 세션이 필요합니다.');return {...life.baseline(),relations:JSON.stringify(world.runtime.graph.getRelationshipsOf(playerId).filter(r=>r.sourceCharacterId===playerId&&r.familiarity==='known')),money:world.runtime.ai.getEconomy()?.getAccount(playerId).balance??0};};
 const report=(r:LifeRun):LifeReport=>{const a=r.baseline,b=baseline();return {from:r.from,to:now(),label:r.label,activities:delta(a.activityMinutes,b.activityMinutes),stats:delta(a.stats,b.stats),proficiencies:delta(a.proficiencies,b.proficiencies),needs:delta(a.needs,b.needs),money:b.money-a.money,relationshipsChanged:a.relations!==b.relations,memoryDelta:b.memories-a.memories};};
 const nextSchedule=()=>world.runtime.schedule.getUpcomingActivities(playerId).filter(e=>!e.entryId.startsWith('ai/')&&e.plannedStartTime>now()).sort((a,b)=>a.plannedStartTime-b.plannedStartTime)[0]?.plannedStartTime;
 function onSettled(){const r=data.current;if(!r||r.status==='cancelled'||r.status==='completed')return;r.status=now()>=r.until?'completed':'interrupted';const summary=report(r),index=data.reports.findIndex(p=>p.from===r.from&&p.label===r.label);if(index>=0)data.reports[index]=summary;else data.reports.push(summary);data.reports=data.reports.slice(-12);}
 async function resume(){available();const r=data.current;if(!r||r.status==='cancelled'||now()>=r.until)throw Error('이어갈 생활 진행이 없습니다.');if(life?.hasPendingChoices()||world.runtime.ai.getCombat()?.isChoicePending())throw Error('중요한 선택·전투를 먼저 완료하세요.');r.status='running';publish();await advance(r.until-now());}
 const readWeek=():WeekSlot[]=>{const plan=world.runtime.schedule.getCharacterPlan(playerId);return Array.from({length:7},(_,day)=>PLAN_WINDOWS.filter(w=>day>=5||w.id!=='morning').map(w=>{const id=PREFIX+day+'/'+w.id,e=plan.overrides.find(e=>e.id===id&&!plan.cancelledEntryIds.includes(id));return {day,window:w.id,activity:(e?.activityId??'automatic') as PlanActivity};})).flat();};
 function setWeek(slots:WeekSlot[]){available();if(!life)throw Error('생활 세션 필요');const ids=new Set<string>();const normalized=slots.map(slot=>{const w=PLAN_WINDOWS.find(w=>w.id===slot.window);if(!w||!Number.isInteger(slot.day)||slot.day<0||slot.day>6||slot.day<5&&w.id==='morning'||!PLAN_ACTIVITIES.includes(slot.activity))throw Error('주간 활동·요일·시간 오류');const id=PREFIX+slot.day+'/'+w.id;if(ids.has(id))throw Error('주간 시간 중복');ids.add(id);if(slot.activity==='automatic')return {id};const activity=activityRegistry.get(slot.activity)!,place=slot.activity==='rest'?(world.runtime.world.getCharacterReadSnapshot(playerId).location?.homeLocationId??activity.defaultLocations[0]):activity.defaultLocations[0];if(!place||!world.runtime.world.catalog.nodes.has(place)||!activity.requiredPlaceTags.some(t=>world.runtime.world.catalog.getLocation(place).activityTags.includes(t)))throw Error('계획 활동 장소 오류');return {id,entry:{id,name:'나의 계획 · '+activity.name,activityId:activity.id,startMinuteOfDay:w.start,endMinuteOfDay:w.end,targetLocationId:place,priority:75,mandatory:false,interruptible:true,conditions:[{type:'weekday',days:[slot.day]}]} as ScheduleEntry};});
  if(ids.size!==16)throw Error('주말 오전2칸·매일 방과 후/저녁14칸을 확인하세요.');const schedule=world.runtime.schedule,current=schedule.getCharacterPlan(playerId);for(const row of normalized){const existing=current.overrides.find(e=>e.id===row.id);if(row.entry){if(JSON.stringify(existing)!==JSON.stringify(row.entry)||current.cancelledEntryIds.includes(row.id))schedule.updateScheduleEntry(playerId,row.entry);}else if(existing&&!current.cancelledEntryIds.includes(row.id))schedule.cancelScheduleEntry(playerId,row.id);}publish();
 }
 return {save:():PacingSave=>structuredClone(data),current:()=>data.current?{from:data.current.from,until:data.current.until,label:data.current.label,status:data.current.status}:undefined,getState:()=>({current:data.current?{from:data.current.from,until:data.current.until,label:data.current.label,status:data.current.status}:undefined,reports:structuredClone(data.reports)}),readWeek,setWeek,onSettled,nextSchedule,
  target:(period:LifePeriod)=>periodTarget(now(),period,nextSchedule()),resume,
  start:async(period:LifePeriod)=>{available();if(!life)throw Error('생활 세션 필요');if(life.hasPendingChoices()||world.runtime.ai.getCombat()?.isChoicePending())throw Error('중요한 선택·전투를 먼저 완료하세요.');if(data.current&&data.current.status!=='cancelled'&&data.current.status!=='completed'&&now()<data.current.until)throw Error('진행 중인 생활을 이어가거나 먼저 종료하세요.');const until=periodTarget(now(),period,nextSchedule());data.current={from:now(),until,label:labels[period],status:'interrupted',baseline:baseline()};await resume();},
  cancel:()=>{stop();onSettled();if(data.current&&data.current.status!=='completed')data.current.status='cancelled';publish();},
 };
}
