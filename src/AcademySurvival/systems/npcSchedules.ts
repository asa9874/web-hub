import type {Character} from '../types/character';
import type {RelationshipGraph} from './relationships';
import type {CharacterSchedule,ScheduleEntry,ScheduleIntent,ActivityExecution,ScheduleLog,ScheduleLogType,ScheduleRuntimeSave} from '../types/schedule';
import type {LocationWorld} from './locationWorld';
import {activityRegistry,SCHEDULE_RULES} from '../data/schedules';
import {generateScheduleForCharacter,getCharacterSchedule,resolveScheduleConflicts,scheduleEntryIssues} from './schedulePlanning';
import {MINUTES_PER_DAY,MAX_ABSOLUTE_MINUTE,assertAbsoluteMinute} from './calendar';
import {forecastDeparture} from './locationRouting';
import {statusRegistry} from './statusRegistry';
interface Wake {at:number;id:string;token:number}
class WakeQueue {
 private heap:Wake[]=[];
 entries(){return this.heap.slice();}
 clear(){this.heap=[];}
 peek(){return this.heap[0];}
 push(item:Wake){const h=this.heap;h.push(item);let i=h.length-1;while(i){const p=(i-1)>>1;if(this.compare(h[p],item)<=0)break;h[i]=h[p];i=p;}h[i]=item;}
 pop(){const h=this.heap,first=h[0],last=h.pop();if(h.length&&last){let i=0;while(true){let child=i*2+1;if(child>=h.length)break;if(child+1<h.length&&this.compare(h[child+1],h[child])<0)child++;if(this.compare(last,h[child])<=0)break;h[i]=h[child];i=child;}h[i]=last;}return first;}
 private compare(a:Wake,b:Wake){return a.at-b.at||(a.id<b.id?-1:a.id>b.id?1:0);}
}
export function createNpcScheduleEngine(world:LocationWorld,options:{seed?:string;plans?:CharacterSchedule[];autoConnect?:boolean;includePlayer?:boolean;deferInitialProcessing?:boolean;initialExecution?:ScheduleRuntimeSave;relationships?:RelationshipGraph;intentGate?:(intent:ScheduleIntent,character:Character)=>{approved:boolean;reason?:string}}={}){
 const autonomous=new Map<string,ScheduleIntent>();
 const clock=world.clock,plans=new Map<string,CharacterSchedule>(),history=new Map<string,Map<string,ActivityExecution>>(),current=new Map<string,ActivityExecution>(),reserved=new Map<string,string>(),resumePending=new Set<string>(),paused=new Map<string,Set<string>>(),tokens=new Map<string,number>(),cache=new Map<string,Map<number,ScheduleIntent[]>>(),listeners=new Set<()=>void>(),executionListeners=new Set<(id:string)=>void>(),queue=new WakeQueue();
 let epoch=clock.getSnapshot(),revision=0,sequence=0,processing=false,stop:(()=>void)|undefined,logs:ScheduleLog[]=[];let counters={completed:0,failed:0,late:0,absent:0,interrupted:0,resumed:0,processedEvents:0};
 const notify=()=>{if(clock.isProcessingTimeline())return;revision++;listeners.forEach(fn=>fn());};
 const log=(type:ScheduleLogType,id:string|undefined,message:string,at=clock.getSnapshot())=>{logs.push({id:++sequence,at,characterId:id,type,message,important:['late','absent','failure','interrupt','seek'].includes(type)});if(logs.length>SCHEDULE_RULES.maxLogs)logs=logs.slice(-SCHEDULE_RULES.maxLogs);};
 const validatePlan=(plan:CharacterSchedule)=>{if(!world.getCharacters().some(c=>c.id===plan.characterId))throw new Error('일과표 캐릭터 참조 오류');const entries=[...plan.overrides,...plan.temporaryEntries];for(const e of entries){const issues=scheduleEntryIssues(e);if(issues.length)throw new Error(issues.join(' / '));}if(new Set(plan.overrides.map(e=>e.id)).size!==plan.overrides.length||new Set(plan.temporaryEntries.map(e=>e.id)).size!==plan.temporaryEntries.length)throw new Error('일정 ID 중복');};
 for(const c of world.getCharacters())if(options.includePlayer||c.kind!=='player'){const plan=options.plans?.find(p=>p.characterId===c.id)??generateScheduleForCharacter(c,{seed:options.seed});validatePlan(plan);plans.set(c.id,structuredClone(plan));history.set(c.id,new Map());}
 const wake=(id:string,at:number)=>{if(at>MAX_ABSOLUTE_MINUTE)return;const token=(tokens.get(id)??0)+1;tokens.set(id,token);queue.push({id,at,token});};
 const cleanQueue=()=>{while(queue.peek()&&tokens.get(queue.peek()!.id)!==queue.peek()!.token)queue.pop();};
 const dayIntents=(id:string,day:number)=>{let days=cache.get(id);if(!days){days=new Map();cache.set(id,days);}if(!days.has(day)){days.set(day,getCharacterSchedule(world.getCharacter(id),plans.get(id)!,day*MINUTES_PER_DAY));for(const d of days.keys())if(d<day-2||d>day+2)days.delete(d);}return days.get(day)!;};
 const window=(id:string,at:number)=>{const day=Math.floor(at/MINUTES_PER_DAY);return [day-1,day,day+1].filter(d=>d>=0&&d*MINUTES_PER_DAY<=MAX_ABSOLUTE_MINUTE).flatMap(d=>dayIntents(id,d)).concat(autonomous.has(id)?[autonomous.get(id)!]:[]);};
 const record=(intent:ScheduleIntent)=>{const row=history.get(intent.characterId)!;let r=row.get(intent.occurrenceId);if(!r){r={characterId:intent.characterId,occurrenceId:intent.occurrenceId,entryId:intent.entryId,activityId:intent.activityId,targetLocationId:intent.targetLocationId,status:'planned',plannedStartTime:intent.plannedStartTime,plannedEndTime:intent.plannedEndTime,lateMinutes:0,absent:false,resumes:0};row.set(intent.occurrenceId,r);}return r;};
 const absent=(r:ActivityExecution,intent:ScheduleIntent,reason:string,at:number)=>{if(intent.mandatory&&r.actualStartTime===undefined&&!r.absent){r.absent=true;counters.absent++;log('absent',intent.characterId,`${intent.name??activityRegistry.get(intent.activityId)!.name} 미수행: ${reason}`,at);}};
 const fail=(r:ActivityExecution,intent:ScheduleIntent,reason:string,at:number)=>{if(r.status==='failed')return;r.status='failed';r.reason=reason;r.actualEndTime=at;counters.failed++;absent(r,intent,reason,at);log('failure',intent.characterId,`${intent.name??activityRegistry.get(intent.activityId)!.name}: ${reason}`,at);reserved.delete(intent.characterId);current.set(intent.characterId,structuredClone(r));};
 const blockedActivity=(c:Character,activityId:string)=>{const a=activityRegistry.get(activityId)!;const reasons:string[]=[];for(const instance of c.statuses){const def=statusRegistry.get(instance.definitionId);if(!def){reasons.push('상태 참조 오류');continue;}for(const effect of [...def.effects,...(def.stages.find(s=>s.id===instance.stageId)?.effects??[])])if(effect.type==='BLOCK_ACTION'&&[activityId,...a.actionTags].includes(effect.action))reasons.push(effect.reason);}return reasons;};
 const terminal=(r:ActivityExecution|undefined)=>!!r&&['completed','failed','skipped'].includes(r.status);
 const forecast=(c:Character,intent:ScheduleIntent,now:number)=>intent.targetLocationId&&!intent.destinationError?forecastDeparture(c,c.location!.currentLocationId,intent.targetLocationId,intent.plannedStartTime,now,world.catalog):null;
 function processCharacter(id:string,now:number){
  if(!plans.has(id))return;const c=world.getCharacter(id),all=window(id,now),row=history.get(id)!,previous=current.get(id);
  // Finish/mark missed occurrences at their real boundary, never invent history from before attachment.
  for(const intent of all.filter(e=>e.plannedEndTime<=now&&e.plannedEndTime>epoch).sort((a,b)=>a.plannedEndTime-b.plannedEndTime)){
   const r=record(intent);if(r.actualEndTime!==undefined||terminal(r))continue;
   if(reserved.get(id)===intent.occurrenceId&&c.location!.movement){world.cancelMovement(id);reserved.delete(id);}
   if(r.actualStartTime!==undefined){if(r.status!=='interrupted'){r.status='completed';counters.completed++;log('complete',id,`${activityRegistry.get(intent.activityId)!.name} 종료`,intent.plannedEndTime);}else r.reason='일정 종료 시각이 지나 재개하지 않음';r.actualEndTime=intent.plannedEndTime;}
   else {r.status='skipped';r.actualEndTime=intent.plannedEndTime;r.reason='시간 충돌 또는 종료 전 미도착';absent(r,intent,r.reason,intent.plannedEndTime);}
  }
  c.location=world.getCharacterLocation(id);
  const eligible=all.filter(e=>e.plannedEndTime>now&&!terminal(row.get(e.occurrenceId))&&!paused.get(id)?.has(e.occurrenceId));
  const active=resolveScheduleConflicts(eligible.filter(e=>e.plannedStartTime<=now));let chosen=active[0];
  const held=eligible.find(e=>e.occurrenceId===reserved.get(id));if(held&&(c.location!.movement||now<held.plannedStartTime)&&(!chosen||chosen.priority<=held.priority))chosen=held;
  const old=previous?.occurrenceId?all.find(e=>e.occurrenceId===previous.occurrenceId):undefined;
  const locked=old&&old.plannedEndTime>now&&!old.interruptible&&previous?.actualStartTime!==undefined&&!paused.get(id)?.has(old.occurrenceId)&&!terminal(row.get(old.occurrenceId));
  if(locked)chosen=old;
  const future=eligible.filter(e=>e.plannedStartTime>now).sort((a,b)=>a.plannedStartTime-b.plannedStartTime||b.priority-a.priority||a.entryId.localeCompare(b.entryId));
  const upcoming=future[0],ahead=upcoming&&upcoming.plannedStartTime-now<=SCHEDULE_RULES.routeLookaheadMinutes&&!c.location!.movement?forecast(c,upcoming,now):null;
  if(upcoming&&ahead?.route.ok&&ahead.departure<=now&&!locked&&(!chosen||chosen.interruptible&&upcoming.priority>chosen.priority))chosen=upcoming;
  const controlled=autonomous.get(id);if(controlled&&controlled.plannedStartTime<=now&&controlled.plannedEndTime>now&&!locked&&!terminal(row.get(controlled.occurrenceId)))chosen=controlled;
  if(chosen){
   const r=record(chosen);if(r.status==='interrupted'&&r.actualStartTime!==undefined)resumePending.add(JSON.stringify([id,chosen.occurrenceId]));
   if(previous?.occurrenceId!==chosen.occurrenceId){
    if(old&&old.plannedEndTime>now){const oldRecord=row.get(old.occurrenceId);if(oldRecord&&!terminal(oldRecord)&&oldRecord.status!=='interrupted'){oldRecord.status='interrupted';oldRecord.reason=`${chosen.entryId} 일정 전환`;counters.interrupted++;log('interrupt',id,`${activityRegistry.get(old.activityId)!.name} 중단`,now);}}
    if(c.location!.movement&&reserved.has(id)){world.cancelMovement(id);c.location=world.getCharacterLocation(id);}
    log(chosen.temporary?'temporary':'selection',id,`${chosen.name??activityRegistry.get(chosen.activityId)!.name} 선택`,now);
   }
   const approval=options.intentGate?.(structuredClone(chosen),structuredClone(c));
   if(approval&&!approval.approved)fail(r,chosen,approval.reason??'외부 행동 정책이 일정을 거절했습니다.',now);
   else if(chosen.destinationError||!chosen.targetLocationId)fail(r,chosen,chosen.destinationError??'목적지 미설정',now);
   else if(c.location!.movement){r.status='traveling';r.arrivalTime=c.location!.movement.arrivalTime;r.reason=c.location!.movement.destinationLocationId===chosen.targetLocationId?undefined:'다른 이동 완료 후 일정 수행 대기';current.set(id,structuredClone(r));}
   else if(c.location!.currentLocationId!==chosen.targetLocationId){
    const result=world.requestMovement(id,chosen.targetLocationId);if(!result.ok)fail(r,chosen,result.reasons.join(' / '),now);else{reserved.set(id,chosen.occurrenceId);r.status='traveling';r.arrivalTime=world.getCharacterLocation(id).movement?.arrivalTime??now;current.set(id,structuredClone(r));log('departure',id,`${world.catalog.getLocation(c.location!.currentLocationId).name} → ${world.catalog.getLocation(chosen.targetLocationId).name}`,now);}
   }else if(now<chosen.plannedStartTime){reserved.set(id,chosen.occurrenceId);r.status='planned';current.set(id,structuredClone(r));}
   else {
    const reasons=blockedActivity(c,chosen.activityId);if(reasons.length)fail(r,chosen,reasons.join(' / '),now);else{
     if(resumePending.delete(JSON.stringify([id,chosen.occurrenceId]))){r.resumes++;counters.resumed++;log('resume',id,`${activityRegistry.get(chosen.activityId)!.name} 재개`,now);}
     if(r.actualStartTime===undefined){r.actualStartTime=now;r.lateMinutes=now===epoch&&chosen.plannedStartTime<epoch?0:now-chosen.plannedStartTime;if(r.lateMinutes>0){counters.late++;log('late',id,`${activityRegistry.get(chosen.activityId)!.name} ${r.lateMinutes}분 지각`,now);}log('start',id,`${activityRegistry.get(chosen.activityId)!.name} 시작`,now);}
     r.status=r.lateMinutes?'late':'active';r.reason=undefined;reserved.delete(id);current.set(id,structuredClone(r));
    }
   }
  }else {reserved.delete(id);current.set(id,{characterId:id,status:'idle',lateMinutes:0,absent:false,resumes:0});}
  if(chosen&&row.get(chosen.occurrenceId)?.status==='failed'&&eligible.some(e=>e.occurrenceId!==chosen.occurrenceId&&e.plannedStartTime<=now&&!terminal(row.get(e.occurrenceId)))){wake(id,now);return;}
  const times=all.flatMap(e=>[e.plannedStartTime,e.plannedEndTime,e.plannedStartTime-SCHEDULE_RULES.routeLookaheadMinutes]).filter(t=>t>now);
  if(upcoming&&ahead?.route.ok&&ahead.departure>now)times.push(ahead.departure);
  const movement=world.getCharacterLocation(id).movement;if(movement)times.push(movement.arrivalTime);
  times.push((Math.floor(now/MINUTES_PER_DAY)+1)*MINUTES_PER_DAY);const next=Math.min(...times.filter(t=>t>now));if(Number.isFinite(next))wake(id,next);
  for(const [key,r] of row)if((r.plannedEndTime??now)<now-35*MINUTES_PER_DAY){row.delete(key);paused.get(id)?.delete(key);resumePending.delete(JSON.stringify([id,key]));}
 }
 const processAt=(at:number)=>{processing=true;try{cleanQueue();while(queue.peek()&&queue.peek()!.at<=at){const event=queue.pop()!;if(tokens.get(event.id)!==event.token)continue;counters.processedEvents++;processCharacter(event.id,at);executionListeners.forEach(fn=>fn(event.id));cleanQueue();}}finally{processing=false;}};
 const refresh=(id:string)=>{if(!plans.has(id))return;cache.delete(id);wake(id,clock.getSnapshot());if(!clock.isProcessingTimeline()&&!processing){processAt(clock.getSnapshot());notify();}};
 const resetExecution=(execute=true)=>{epoch=clock.getSnapshot();history.clear();current.clear();reserved.clear();resumePending.clear();paused.clear();cache.clear();queue.clear();tokens.clear();counters={completed:0,failed:0,late:0,absent:0,interrupted:0,resumed:0,processedEvents:0};for(const id of plans.keys()){history.set(id,new Map());wake(id,epoch);}if(execute)processAt(epoch);};
 function loadExecution(input:ScheduleRuntimeSave){
  if(input.version!=='schedule-runtime-v1'||input.absoluteMinute!==clock.getSnapshot())throw new Error('일정 실행 저장 버전·시각 오류');assertAbsoluteMinute(input.epoch);if(input.epoch>input.absoluteMinute)throw new Error('일정 실행 기준 시각 오류');
  const data=structuredClone(input),ids=new Set(data.plans.map(p=>p.characterId));if(ids.size!==data.plans.length)throw new Error('일과표 소유자 중복');data.plans.forEach(validatePlan);
  for(const r of [...data.current,...data.history.flatMap(([,rs])=>rs)]){if(!ids.has(r.characterId)||r.activityId&&!activityRegistry.has(r.activityId)||r.targetLocationId&&!world.catalog.nodes.has(r.targetLocationId)||!['idle','planned','traveling','active','completed','late','skipped','failed','interrupted'].includes(r.status))throw new Error('일정 실행 참조·상태 오류');for(const n of [r.plannedStartTime,r.plannedEndTime,r.actualStartTime,r.actualEndTime,r.arrivalTime])if(n!==undefined)assertAbsoluteMinute(n);}
  for(const [id,rs] of data.history)if(!ids.has(id)||rs.some(r=>r.characterId!==id)||new Set(rs.map(r=>r.occurrenceId)).size!==rs.length)throw new Error('일정 이력 참조·중복 오류');
  for(const w of data.wakes){assertAbsoluteMinute(w.at);if(!ids.has(w.id)||!Number.isSafeInteger(w.at)||w.at<input.absoluteMinute)throw new Error('일정 예약 오류');}for(const key of Object.keys(counters)){const n=data.counters[key as keyof typeof counters];if(!Number.isSafeInteger(n)||n<0)throw new Error('일정 집계 오류');}
  if(new Set(data.current.map(r=>r.characterId)).size!==data.current.length||new Set(data.history.map(([id])=>id)).size!==data.history.length||new Set(data.wakes.map(w=>w.id)).size!==data.wakes.length)throw new Error('일정 실행 중복 인물');for(const [id,occurrence] of data.reserved)if(!data.history.find(([owner])=>owner===id)?.[1].some(r=>r.occurrenceId===occurrence))throw new Error('예약 발생 건 참조 오류');for(const [id] of [...data.reserved,...data.paused])if(!ids.has(id))throw new Error('보류·중단 인물 참조 오류');for(const r of data.current)if(!Number.isSafeInteger(r.lateMinutes)||r.lateMinutes<0)throw new Error('지각 시간 오류');
  if(new Set((data.autonomous??[]).map(i=>i.characterId)).size!==(data.autonomous??[]).length)throw new Error('자율 활동 소유자 중복');for(const intent of data.autonomous??[]){assertAbsoluteMinute(intent.plannedStartTime);assertAbsoluteMinute(intent.plannedEndTime);if(!ids.has(intent.characterId)||!activityRegistry.has(intent.activityId)||!intent.targetLocationId||!world.catalog.nodes.has(intent.targetLocationId)||intent.plannedEndTime<=intent.plannedStartTime||!Number.isInteger(intent.priority)||intent.priority<0||intent.priority>100)throw new Error('자율 활동 저장 참조 오류');}autonomous.clear();for(const intent of data.autonomous??[])autonomous.set(intent.characterId,intent);
  plans.clear();data.plans.forEach(p=>plans.set(p.characterId,p));history.clear();data.history.forEach(([id,rows])=>history.set(id,new Map(rows.map(r=>[r.occurrenceId!,r]))));for(const id of ids)if(!history.has(id))history.set(id,new Map());current.clear();data.current.forEach(r=>current.set(r.characterId,r));reserved.clear();data.reserved.forEach(([id,r])=>{reserved.set(id,r);});paused.clear();data.paused.forEach(([id,rs])=>paused.set(id,new Set(rs)));resumePending.clear();data.resumePending.forEach(r=>resumePending.add(r));cache.clear();queue.clear();tokens.clear();data.wakes.forEach(w=>wake(w.id,w.at));epoch=data.epoch;counters=data.counters;notify();
 }
 const connect=()=>{if(!stop){resetExecution(!options.deferInitialProcessing&&!options.initialExecution);if(options.initialExecution)loadExecution(options.initialExecution);const timeline=clock.subscribeTimeline({priority:10,beforeAdvance:(from,to)=>{if(to-from>SCHEDULE_RULES.maxAdvanceDays*MINUTES_PER_DAY)throw new RangeError(`생활 시뮬레이션은 한 번에 ${SCHEDULE_RULES.maxAdvanceDays}일까지 진행할 수 있습니다.`);},nextEventTime:(_current,limit)=>{cleanQueue();return queue.peek()&&queue.peek()!.at<=limit?queue.peek()!.at:null;},processAt,onSeek:change=>{logs=[];autonomous.clear();resetExecution();log('seek',undefined,'시간 직접 설정: 실행 기록과 예약을 새 시점에서 다시 시작',change.to);}});
 const actorEvents=world.subscribeActors(event=>{if(!plans.has(event.id)&&event.kind==='register'){const c=world.getCharacter(event.id);if(c.kind==='player'&&!options.includePlayer)return;plans.set(c.id,generateScheduleForCharacter(c,{seed:options.seed}));history.set(c.id,new Map());}if(processing)return;if(event.kind==='arrival'&&reserved.has(event.id))log('arrival',event.id,`${world.catalog.getLocation(world.getCharacterLocation(event.id).currentLocationId).name} 도착`);if(['arrival','cancel','placement','update','register','movement'].includes(event.kind))refresh(event.id);});
 const changes=clock.subscribeChanges(()=>notify());stop=()=>{timeline();actorEvents();changes();};notify();}return ()=>{stop?.();stop=undefined;};};
 if(options.autoConnect!==false)connect();
 const getPlan=(id:string)=>{const plan=plans.get(id);if(!plan)throw new Error('등록된 NPC 일과표가 없습니다.');return plan;};
 const changeEntry=(id:string,entry:ScheduleEntry,temporary:boolean)=>{const issues=scheduleEntryIssues(entry);if(issues.length)throw new Error(issues.join(' / '));const plan=getPlan(id);if(temporary&&entry.absoluteDay===undefined)entry={...entry,absoluteDay:Math.floor(clock.getSnapshot()/MINUTES_PER_DAY)};if(temporary&&entry.absoluteDay!==undefined){const end=entry.absoluteDay*MINUTES_PER_DAY+entry.endMinuteOfDay+(entry.endMinuteOfDay<=entry.startMinuteOfDay?MINUTES_PER_DAY:0);if(end<=clock.getSnapshot())throw new Error('이미 종료된 날짜·시간에는 임시 일정을 삽입할 수 없습니다.');}const list=temporary?plan.temporaryEntries:plan.overrides;const i=list.findIndex(e=>e.id===entry.id);if(i>=0)list[i]=structuredClone(entry);else list.push(structuredClone(entry));plan.cancelledEntryIds=plan.cancelledEntryIds.filter(x=>x!==entry.id);const r=history.get(id)!;for(const [key,record] of r)if(record.entryId===entry.id&&(record.plannedEndTime??0)>clock.getSnapshot()){if(reserved.get(id)===key&&world.getCharacterLocation(id).movement){processing=true;world.cancelMovement(id);processing=false;reserved.delete(id);}r.delete(key);}refresh(id);log(temporary?'temporary':'selection',id,`${entry.id} ${temporary?'임시 일정':'개인 일정'} 등록`);notify();};
 return {
  startAutonomousActivity:(id:string,intent:ScheduleIntent)=>{assertAbsoluteMinute(intent.plannedStartTime);assertAbsoluteMinute(intent.plannedEndTime);if(!Number.isInteger(intent.priority)||intent.priority<0||intent.priority>100)throw new Error('자율 활동 우선순위 오류');if(!plans.has(id)||intent.characterId!==id||!activityRegistry.has(intent.activityId)||!intent.targetLocationId||!world.catalog.nodes.has(intent.targetLocationId)||intent.plannedStartTime!==clock.getSnapshot()||intent.plannedEndTime<=intent.plannedStartTime)throw new Error('자율 활동 의도 오류');if(!activityRegistry.get(intent.activityId)!.requiredPlaceTags.some(tag=>world.catalog.getLocation(intent.targetLocationId!).activityTags.includes(tag)))throw new Error('자율 활동 장소 태그 불일치');autonomous.set(id,structuredClone(intent));refresh(id);},
  endAutonomousActivity:(id:string,expectedEntryId?:string)=>{const intent=autonomous.get(id);if(!intent||expectedEntryId!==undefined&&intent.entryId!==expectedEntryId)return;const row=history.get(id)?.get(intent.occurrenceId);if(row&&!terminal(row)){row.status='interrupted';row.actualEndTime=clock.getSnapshot();row.reason='자율 행동 전환';}autonomous.delete(id);if(reserved.get(id)===intent.occurrenceId){reserved.delete(id);world.cancelMovement(id);}refresh(id);},
  saveExecution:():ScheduleRuntimeSave=>({version:'schedule-runtime-v1',autonomous:structuredClone([...autonomous.values()]),absoluteMinute:clock.getSnapshot(),epoch,plans:structuredClone([...plans.values()]),history:structuredClone([...history].map(([id,rows])=>[id,[...rows.values()]])),current:structuredClone([...current.values()]),reserved:[...reserved],paused:[...paused].map(([id,rows])=>[id,[...rows]]),resumePending:[...resumePending],wakes:queue.entries().filter(w=>tokens.get(w.id)===w.token).map(({id,at})=>({id,at})),counters:{...counters}}),loadExecution,
  world,clock,connect,subscribeExecution:(fn:(id:string)=>void)=>{executionListeners.add(fn);return ()=>{executionListeners.delete(fn);};},dispose:()=>{stop?.();stop=undefined;listeners.clear();},subscribe:(fn:()=>void)=>{listeners.add(fn);return ()=>{listeners.delete(fn);};},getSnapshot:()=>revision,hasSchedule:(id:string)=>plans.has(id),getPlans:()=>structuredClone([...plans.values()]),
  getCharacterPlan:(id:string)=>structuredClone(getPlan(id)),
  getCharacterSchedule:(id:string,date=clock.getSnapshot())=>getCharacterSchedule(world.getCharacter(id),getPlan(id),date),
  getScheduleAtTime:(id:string,at=clock.getSnapshot())=>resolveScheduleConflicts(window(id,at).filter(e=>e.plannedStartTime<=at&&e.plannedEndTime>at)),
  getNextScheduleEntry:(id:string,at=clock.getSnapshot())=>window(id,at).filter(e=>e.plannedStartTime>at).sort((a,b)=>a.plannedStartTime-b.plannedStartTime)[0]??null,
  getUpcomingActivities:(id:string,at=clock.getSnapshot())=>window(id,at).filter(e=>e.plannedEndTime>at).sort((a,b)=>a.plannedStartTime-b.plannedStartTime),
  getCurrentActivity:(id:string):ActivityExecution=>structuredClone(current.get(id)??{characterId:id,status:'idle',lateMinutes:0,absent:false,resumes:0}),
  getExecutionChangesAt:(id:string,at=clock.getSnapshot())=>structuredClone([...(history.get(id)?.values()??[])].filter(r=>r.actualStartTime===at||r.actualEndTime===at||r.status==='interrupted'&&r.actualEndTime===undefined)),
  getHistory:(id?:string)=>structuredClone(id?[...(history.get(id)?.values()??[])]:[...history.values()].flatMap(row=>[...row.values()])),
  getLogs:()=>structuredClone(logs),getCounters:()=>({...counters}),
  getSocialContext:(id:string)=>options.relationships?.hasCharacter(id)?{friends:options.relationships.getFriendsOf(id),trusted:options.relationships.getTrustedCharactersOf(id),known:options.relationships.getKnownCharactersOf(id)}:{friends:[],trusted:[],known:[]},
  getStatistics:()=>{const actors=world.getCharacters().filter(c=>plans.has(c.id)),states=actors.map(c=>current.get(c.id)),count=(type:string)=>states.filter(s=>s&&['active','late'].includes(s.status)&&s.activityId&&activityRegistry.get(s.activityId)?.type===type).length;return {total:actors.length,traveling:actors.filter(c=>c.location?.movement).length,classes:count('class'),meals:count('meal'),training:count('training'),sleeping:count('sleep'),resting:count('rest'),working:count('work'),failedNpcs:[...history.values()].filter(row=>[...row.values()].some(r=>r.status==='failed')).length,classLate:[...history.values()].flatMap(row=>[...row.values()]).filter(r=>r.lateMinutes>0&&r.activityId&&activityRegistry.get(r.activityId)?.type==='class').length,...counters};},
  forecastDeparture:(id:string,intent:ScheduleIntent)=>forecast(world.getCharacter(id),intent,clock.getSnapshot()),
  addTemporarySchedule:(id:string,e:ScheduleEntry)=>changeEntry(id,e,true),updateScheduleEntry:(id:string,e:ScheduleEntry)=>changeEntry(id,e,false),
  cancelScheduleEntry:(id:string,entryId:string)=>{const p=getPlan(id);p.cancelledEntryIds=[...new Set([...p.cancelledEntryIds,entryId])];const r=current.get(id);if(r?.entryId===entryId){processing=true;try{world.cancelMovement(id);}finally{processing=false;}if(r.occurrenceId){const stored=history.get(id)?.get(r.occurrenceId);if(stored){stored.status='skipped';stored.reason='명시적 일정 취소';stored.actualEndTime=clock.getSnapshot();}}reserved.delete(id);}log('cancel',id,`${entryId} 취소`);refresh(id);},
  interruptActivity:(id:string)=>{const r=current.get(id);if(!r?.occurrenceId)throw new Error('중단할 활동이 없습니다.');const set=paused.get(id)??new Set();set.add(r.occurrenceId);paused.set(id,set);const stored=history.get(id)!.get(r.occurrenceId)!;stored.status='interrupted';stored.reason='개발자 강제 중단';counters.interrupted++;processing=true;try{world.cancelMovement(id);}finally{processing=false;}reserved.delete(id);log('interrupt',id,`${r.entryId} 강제 중단`);refresh(id);},
  resumeScheduleEntry:(id:string,entryId:string)=>{const intent=window(id,clock.getSnapshot()).find(e=>e.entryId===entryId&&e.plannedStartTime<=clock.getSnapshot()&&e.plannedEndTime>clock.getSnapshot());if(!intent)throw new Error('종료된 일정은 재개할 수 없습니다.');paused.get(id)?.delete(intent.occurrenceId);const r=history.get(id)?.get(intent.occurrenceId);if(r&&['failed','skipped'].includes(r.status)){r.status='interrupted';r.actualEndTime=undefined;}refresh(id);},
  refreshCharacter:refresh,
  advanceTime:(minutes:number)=>world.advanceTime(minutes),
  advanceNpcSchedules:(previousTime:number,nextTime:number)=>{assertAbsoluteMinute(nextTime);if(previousTime!==clock.getSnapshot()||nextTime<previousTime)throw new Error('현재 세계 시간에서 앞으로만 진행할 수 있습니다.');return world.advanceTime(nextTime-previousTime);},
 };
}
export type NpcScheduleEngine=ReturnType<typeof createNpcScheduleEngine>;
