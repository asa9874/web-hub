import {interactionRegistry} from '../data/interactions';
import type {NpcAiEngine} from './npcAi';
import type {RelationshipGraph} from './relationships';
import type {DailyLifeSave,DailyLifeProfile,ResidenceAssignment,DailyLifeLog,DailyLifeEngine} from '../types/dailyLife';
import type {DomainEvent} from '../types/actionEffects';
import {DAILY_LIFE_RULES as R,residenceRooms,residenceRoomRegistry,roomPermission,visitorPermission} from '../data/dailyLife';
import {lifeSignalRegistry} from '../data/dailyLife/events';
import {activityRegistry} from '../data/schedules';
import {scheduleRole} from './schedulePlanning';
import {seededRandom,seedHash} from './seededRandom';
import {findRoute} from './locationRouting';
import {assertAbsoluteMinute} from './calendar';

/** Residence authority + an observer of the existing activity/interaction execution.
 * No clock, movement, need effects or social activity is simulated a second time. */
export function createDailyLifeEngine(ai:NpcAiEngine,graph:RelationshipGraph,options:{seed:string;initial?:DailyLifeSave;assignNew?:boolean} ):DailyLifeEngine{
 const {world,schedule,clock,interactions}=ai,effects=interactions?.effects,now=clock.getSnapshot,seed=options.initial?.seed??options.seed;
 const assignments=new Map<string,ResidenceAssignment>(),profiles=new Map<string,DailyLifeProfile>(),tracking=new Map<string,DailyLifeSave['tracking'][number]>(),days=new Map<string,DailyLifeSave['days'][number]>(),processed=new Map<string,number>(),firstMeetings=new Set<string>(),roomIndex=new Map<string,Set<string>>();
 let maintenanceDay=-1;let serial=0,logs:DailyLifeLog[]=[],stop:(()=>void)|undefined,revision=0;
 const listeners=new Set<()=>void>(),notify=()=>{if(clock.isProcessingTimeline())return;revision++;listeners.forEach(f=>f());};
 const active=(id:string)=>{const a=assignments.get(id);return a?.status==='active'?a:undefined;};
 const occupants=(roomId:string)=>[...(roomIndex.get(roomId)??[])];
 const roommates=(id:string)=>{const a=active(id);return a?.roomId?occupants(a.roomId).filter(other=>other!==id):[];};
 const atHome=(id:string)=>{const c=world.getCharacterReadSnapshot(id),a=active(id);return !!a&&!c.location!.movement&&c.location!.currentLocationId===(a.roomId??a.residenceId);};
 const prune=()=>{const day=Math.floor(now()/1440),floor=(day-R.retentionDays)*1440;if(day!==maintenanceDay){maintenanceDay=day;for(const [key,value] of days)if(value.day<day-R.retentionDays)days.delete(key);for(const [key,at] of processed)if(at<floor)processed.delete(key);}while(processed.size>R.maxProcessed)processed.delete(processed.keys().next().value!);};
 const log=(id:string,eventId:string,message:string,targetId?:string,locationId?:string,importance=20)=>{logs.push({id:'life/'+seed+'/'+(++serial),at:now(),characterId:id,targetId,locationId,eventId,message,importance});logs=logs.slice(-R.maxLogs);notify();};
 const signal=(id:string,key:string,sourceId:string,targetId?:string)=>{
  if(!lifeSignalRegistry.has(key)||!profiles.has(id))return;
  const once=[id,key,Math.floor(now()/1440)].join('|');if(processed.has(once))return;processed.set(once,now());prune();
  const c=world.getCharacterReadSnapshot(id);if(c.location!.movement)return;
  const def=lifeSignalRegistry.get(key)!;log(id,key,def.name,targetId,c.location!.currentLocationId,['quiet-request','tidy-request','first-roommate','reconcile','hobby-discovery'].includes(key)?45:20);
  const routine=!['quiet-request','tidy-request','first-roommate','reconcile','hobby-discovery','roommate-study','morning-greeting','evening-chat'].includes(key),worldKey='world-signal/'+key+'/'+Math.floor(now()/1440);if(routine&&processed.has(worldKey))return;if(routine)processed.set(worldKey,now());
  effects?.recordDomainEvent({id:'daily/'+seed+'/'+serial,sourceId,type:'DailyLifeExperienced',occurredAt:now(),actorCharacterId:id,targetCharacterId:targetId,locationId:c.location!.currentLocationId,visibility:'private',details:{definitionId:'daily-'+key,outcomeType:key,reason:def.name}});
 };
 const aggregate=(id:string,activityId:string,from:number,to:number,target=days)=>{
  for(let at=from;at<to;){const day=Math.floor(at/1440),end=Math.min(to,(day+1)*1440),key=id+'/'+day,row=target.get(key)??{characterId:id,day,activities:{}};row.activities[activityId]=(row.activities[activityId]??0)+(end-at);target.set(key,row);at=end;}
 };
 function observeActivity(id:string){
  if(!profiles.has(id))return;const old=tracking.get(id),at=now();if(old?.activityId&&at>old.since)aggregate(id,old.activityId,old.since,at);
  const c=world.getCharacterReadSnapshot(id),r=schedule.getCurrentActivity(id);
  tracking.set(id,{characterId:id,activityId:!c.location!.movement&&['active','late'].includes(r.status)?r.activityId:undefined,locationId:c.location!.currentLocationId,since:at});prune();
 }
 function relate(id:string,oldRoom:string|undefined,newRoom:string|undefined){
  if(oldRoom)for(const other of occupants(oldRoom).filter(x=>x!==id)){
   const r=graph.getRelationship(id,other);if(r?.relationshipTypeIds.includes('relation-roommate')){for(const [a,b] of [[id,other],[other,id]]){const record=graph.getRelationship(a,b);if(record?.relationshipTypeIds.length===1)graph.addRelationshipType(a,b,'relation-acquaintance');}graph.removeRelationshipType(id,other,'relation-roommate');}
  }
  if(newRoom)for(const other of occupants(newRoom).filter(x=>x!==id)){
   const record=graph.getRelationship(id,other),reverse=graph.getRelationship(other,id);if(record){if(record.visibility==='private'&&(!reverse||reverse.visibility==='private'))graph.addRelationshipType(id,other,'relation-roommate');}
   else if(!reverse||reverse.visibility==='private')graph.createRelationship({sourceCharacterId:id,targetCharacterId:other,relationshipTypeIds:['relation-roommate'],familiarity:'known',visibility:'private'});
  }
 }
 function assign(id:string,roomId:string){
  const c=world.getCharacterReadSnapshot(id),room=residenceRoomRegistry.get(roomId);if(!room)throw Error('배정 가능한 실제 방이 아닙니다.');
  const role=scheduleRole(c),kind=role==='student'?'student':role==='professor'?'professor':['staff','guard'].includes(role)?'staff':undefined;
  if(room.residentKind!==kind)throw Error('역할과 숙소 입주 대상이 다릅니다.');
  const old=active(id),used=new Set(occupants(roomId).filter(other=>other!==id).map(other=>active(other)!.bedId)),bedId=room.beds.find(b=>!used.has(b));if(!bedId)throw Error('방의 침대 정원이 가득 찼습니다.');
  const permissions=[...(c.accessPermissions??[]).filter(p=>!p.startsWith('residence/')),roomPermission(roomId)];
  const route=findRoute({...c,accessPermissions:permissions},c.location!.currentLocationId,roomId,now(),'walk',world.catalog);if(!route.ok)throw Error('숙소까지 유효한 경로 없음: '+route.reasons.join(' · '));
  if(old?.roomId)relate(id,old.roomId,undefined);
  if(old?.roomId)roomIndex.get(old.roomId)?.delete(id);
  assignments.set(id,{characterId:id,residenceId:room.buildingId,roomId,bedId,assignedAt:now(),status:'active',kind:room.residentKind,visibility:'private'});
  const set=roomIndex.get(roomId)??new Set();set.add(id);roomIndex.set(roomId,set);
  world.updateCharacter(id,actor=>({...actor,accessPermissions:[...new Set(permissions)]}));world.setHomeLocation(id,roomId);
  if(schedule.hasSchedule(id))schedule.setResidenceBindings(id,roomId,kind==='student'?'academy-life-lounge':undefined);
  relate(id,undefined,roomId);log(id,'assignment',world.catalog.getLocation(roomId).name+' · 침대 '+bedId.split('-').at(-1)+' 배정',undefined,roomId,30);ai.requestReevaluation(id);return structuredClone(assignments.get(id)!);
 }
 function external(id:string,locationId:string){
  const place=world.catalog.getLocation(locationId);world.getCharacterReadSnapshot(id);if(!place.activityTags.includes('sleep'))throw Error('실제 수면 가능한 외부 주거지가 필요합니다.');
  const route=world.findRoute(id,locationId);if(!route.ok)throw Error('외부 거주지까지 이동 경로가 없습니다.');
  const old=active(id);if(old?.roomId){relate(id,old.roomId,undefined);roomIndex.get(old.roomId)?.delete(id);world.updateCharacter(id,a=>({...a,accessPermissions:(a.accessPermissions??[]).filter(p=>p!==roomPermission(old.roomId!))}));}
  assignments.set(id,{characterId:id,residenceId:locationId,status:'active',kind:'external',assignedAt:now(),visibility:'private'});world.setHomeLocation(id,locationId);if(schedule.hasSchedule(id))schedule.setResidenceBindings(id,locationId);ai.requestReevaluation(id);log(id,'assignment','외부 거주지 등록',undefined,locationId);return structuredClone(assignments.get(id)!);
 }
 function syncCharacters(){
  graph.setCharacterIds(world.getCharacters().map(c=>c.id));
  for(const c of world.getCharacters().sort((a,b)=>a.id.localeCompare(b.id))){
   if(!profiles.has(c.id)){const rng=seededRandom(seed+'/'+c.id+'/life');profiles.set(c.id,{characterId:c.id,quietPreference:Math.round(rng()*100),tidiness:Math.round(rng()*100),preferredActivities:[],activityCounts:{}});}
   if(assignments.has(c.id)&&assignments.get(c.id)!.status!=='pending')continue;const role=scheduleRole(c),kind=role==='student'?'student':role==='professor'?'professor':['staff','guard'].includes(role)?'staff':undefined;
   const home=c.location?.homeLocationId;
   if(home&&!residenceRoomRegistry.has(home)&&!['academy-dorm','academy-staff-residence','academy-room-305','academy-room-306','academy-room-205'].includes(home)&&world.catalog.nodes.get(home)?.activityTags.includes('sleep')){try{external(c.id,home);observeActivity(c.id);continue;}catch{/* Unreachable legacy homes are not treated as active housing. */}}
   if(kind){const rooms=residenceRooms.filter(r=>r.residentKind===kind).sort((a,b)=>seedHash(seed+'/'+a.id)-seedHash(seed+'/'+b.id)||a.id.localeCompare(b.id));let assigned=false;
    for(const room of rooms)if(occupants(room.id).length<room.beds.length){try{assign(c.id,room.id);assigned=true;break;}catch{/* Try another reachable room, without teleporting. */}}
    if(!assigned){world.setHomeLocation(c.id,undefined);if(schedule.hasSchedule(c.id))schedule.setResidenceBindings(c.id,undefined);assignments.set(c.id,{characterId:c.id,residenceId:kind==='student'?'academy-life-hall':'academy-staff-residence',kind,assignedAt:now(),status:'pending',visibility:'private'});log(c.id,'pending','유효한 빈 침대 배정 대기');}
   }
   observeActivity(c.id);
  }
 }
 const canInteract=(a:string,b:string,id:string)=>{
  if(!roommates(a).includes(b)||!atHome(a)||!atHome(b))return ['같은 방에 실제로 있는 룸메이트만 생활 조정을 요청할 수 있습니다.'];
  if(id==='quiet_request'){
   const minute=now()%1440,noise=schedule.getCurrentActivity(b),awake=schedule.getCurrentActivity(a);
   if(minute>=300&&minute<1260||!['active','late'].includes(noise.status)||!['crafting','cultural_play','conversation','study_together'].includes(noise.activityId??'')||awake.activityId==='sleep'||(profiles.get(a)?.quietPreference??0)<60)return ['야간의 실제 소음 활동과 깨어 있는 관찰자가 필요합니다.'];
  }else if(id==='tidy_request'&&(!(profiles.get(a)?.activityCounts.clean_room)||Math.abs((profiles.get(a)?.tidiness??0)-(profiles.get(b)?.tidiness??0))<30))return ['실제 청소 경험과 정리 선호 차이가 있어야 합니다.'];
  return [];
 };
 function onDomain(e:DomainEvent){
  const id=e.actorCharacterId;if(!id||!profiles.has(id)||e.occurredAt!==now()||e.type==='SocialCommitmentChanged'||e.type==='WorldEventCompleted')return;
  if(!['ActivityStarted','ActivityCompleted','ActivityInterrupted','InteractionCompleted'].includes(e.type)||processed.has('source/'+e.id))return;
  processed.set('source/'+e.id,now());prune();
  const c=world.getCharacterReadSnapshot(id),minute=now()%1440,activity=e.details.activityId;
  if(e.type==='ActivityStarted'){processed.set('start/'+e.sourceId,now());if(activity==='sleep'&&atHome(id))signal(id,'sleep',e.id);return;}
  if(e.type==='ActivityCompleted'||e.type==='ActivityInterrupted'){
   const began=processed.get('start/'+e.sourceId)??schedule.getExecutionChangesAt(id).find(r=>JSON.stringify(['activity',id,r.occurrenceId])===e.sourceId)?.actualStartTime;if(!activity||began===undefined||now()<=began)return;const profile=profiles.get(id)!;profile.activityCounts[activity]=(profile.activityCounts[activity]??0)+1;
   if(activity==='sleep'){signal(id,'wake',e.id);if(minute>=540&&minute<900)signal(id,'late-wake',e.id);}
   if(e.type!=='ActivityCompleted')return;
   const mapping:Record<string,string>={clean_room:'clean',laundry:'laundry',personal_hygiene:'hygiene',walk_garden:'walk',letter_writing:'letter',gardening:'hobby',crafting:'hobby',cultural_play:'hobby'};
   if(mapping[activity])signal(id,mapping[activity],e.id);
   if(activity==='breakfast'){signal(id,'breakfast',e.id);if(minute>=540)signal(id,'late-breakfast',e.id);}
   if(activity==='rest'){if(atHome(id))signal(id,'room-rest',e.id);if(c.location!.currentLocationId==='academy-life-lounge')signal(id,'lounge-rest',e.id);}
   if(activity==='self_study'&&atHome(id))signal(id,'room-study',e.id);
   if(activity==='reading'&&atHome(id)&&(minute>=1260||minute<300))signal(id,'night-reading',e.id);
   return;
  }
  const target=e.targetCharacterId;if(!target||!world.hasCharacter(target))return;const b=world.getCharacterReadSnapshot(target);
  if(c.location!.movement||b.location!.movement||c.location!.currentLocationId!==b.location!.currentLocationId)return;
  const instance=interactions?.getInstance(e.sourceId);if(!instance||instance.status!=='completed')return;
  const d=instance.definitionId,pair=[id,target].sort().join('|'),mates=roommates(id).includes(target);
  if(mates&&['casual_chat','friendly_chat'].includes(d)){
   if(!firstMeetings.has(pair)){firstMeetings.add(pair);signal(id,'first-roommate',e.id,target);}
   if(minute>=300&&minute<540)signal(id,'morning-greeting',e.id,target);if(minute>=1200||minute<300)signal(id,'evening-chat',e.id,target);
  }
  if(d==='study_together'){signal(id,'shared-study',e.id,target);if(mates)signal(id,'roommate-study',e.id,target);}
  if(d==='meal_together')signal(id,'shared-meal',e.id,target);
  if(['casual_chat','friendly_chat'].includes(d)&&c.location!.currentLocationId==='academy-life-lounge')signal(id,'lounge-chat',e.id,target);
  if(['serious_talk','comfort'].includes(d))signal(id,'counsel',e.id,target);
  if(mates&&d==='reconcile')signal(id,'reconcile',e.id,target);
  if(d==='quiet_request')signal(id,'quiet-request',e.id,target);if(d==='tidy_request')signal(id,'tidy-request',e.id,target);
  if(['study_together','train_together','friendly_chat','meal_together'].includes(d))for(const who of [id,target]){
   const profile=profiles.get(who);if(!profile)continue;const act=d==='study_together'?'self_study':d==='train_together'?'sword_training':d==='meal_together'?'lunch':'reading',key='joint/'+act;profile.activityCounts[key]=(profile.activityCounts[key]??0)+1;
   if(profile.activityCounts[key]>=3&&!profile.preferredActivities.includes(act)){profile.preferredActivities.push(act);signal(who,'hobby-discovery',e.id,who===id?target:id);}
  }
 }
 function getIntents(id:string){
  if(!profiles.has(id)||!active(id))return [];const c=world.getCharacterReadSnapshot(id),home=c.location!.homeLocationId,minute=now()%1440,rows:{activityId:string;targetLocationId:string;score:number;targetCharacterId?:string;interactionId?:string}[]=[];
  const add=(activityId:string,targetLocationId:string|undefined,score:number,targetCharacterId?:string,interactionId?:string)=>{if(targetLocationId)rows.push({activityId,targetLocationId,score,targetCharacterId,interactionId});};
  const counts=profiles.get(id)!.activityCounts,academyFacilities=!!home&&(residenceRoomRegistry.has(home)||home==='capital-commuter-home');
  if(academyFacilities&&atHome(id)&&minute>=390&&minute<480){add('personal_hygiene','academy-life-bath',25);if(!counts.clean_room)add('clean_room',home,25);}
  if(academyFacilities&&minute>=960&&minute<1260){add('walk_garden','academy-life-garden',25);add('laundry','academy-life-laundry',counts.laundry?15:27);add('clean_room',home,counts.clean_room?15:25);}
  if(minute>=1260||minute<360){const habits=ai.hasCharacter(id)?ai.getState(id).habits:[];add('sleep',home,habits.includes('night-owl')&&minute<1380?22:45);}
  for(const activityId of profiles.get(id)!.preferredActivities.slice(0,4))add(activityId,['self_study','reading'].includes(activityId)?home:activityRegistry.get(activityId)?.defaultLocations[0],25);
  if(!c.location!.movement&&interactions)for(const targetId of roommates(id).filter(other=>world.getCharacterReadSnapshot(other).location!.currentLocationId===c.location!.currentLocationId)){
   for(const interactionId of ['quiet_request','tidy_request','study_together','casual_chat','meal_together'])if(interactions.canRequest(id,targetId,interactionId).ok){const activityId=interactionId==='study_together'?'study_together':interactionId==='meal_together'?'lunch':'conversation';add(activityId,c.location!.currentLocationId,interactionId==='quiet_request'?60:30,targetId,interactionId);}
  }
  return rows;
 }
 function connect(){if(!stop){for(const id of profiles.keys())if(!tracking.has(id))observeActivity(id);interactions?.setResidenceGuard(canInteract);const a=effects?.subscribeDomainEvents(onDomain),b=schedule.subscribeExecution(observeActivity),c=world.subscribeActors(e=>{if(e.kind==='arrival'&&atHome(e.id))signal(e.id,'homecoming','arrival/'+e.id+'/'+now());if(['arrival','movement','cancel','placement'].includes(e.kind))observeActivity(e.id);}),d=clock.subscribeChanges(notify);stop=()=>{a?.();b();c();d();interactions?.setResidenceGuard(undefined);stop=undefined;};}return ()=>stop?.();}
 function save():DailyLifeSave{return JSON.parse(JSON.stringify({version:R.version,absoluteMinute:now(),seed,serial,assignments:[...assignments.values()],profiles:[...profiles.values()],tracking:[...tracking.values()],days:[...days.values()],logs,processed:[...processed].map(([key,at])=>({key,at})),firstMeetings:[...firstMeetings]}));}
 if(options.initial){const data=options.initial;if(data.version!==R.version||data.absoluteMinute!==now()||typeof data.seed!=='string'||!Number.isSafeInteger(data.serial)||data.serial<0)throw Error('생활 저장 버전·시각 오류');serial=data.serial;
  const beds=new Set<string>();for(const a of data.assignments){world.getCharacterReadSnapshot(a.characterId);assertAbsoluteMinute(a.assignedAt);if(assignments.has(a.characterId)||a.assignedAt>now()||!['active','pending','ended'].includes(a.status))throw Error('중복·잘못된 거주 배정');world.catalog.getLocation(a.residenceId);if(a.status==='active'){const room=a.roomId?residenceRoomRegistry.get(a.roomId):undefined;if(a.roomId&&(!room||!room.beds.includes(a.bedId??'')||room.buildingId!==a.residenceId||beds.has(a.bedId!)))throw Error('침대 중복·방 참조 오류');if(a.bedId)beds.add(a.bedId);const c=world.getCharacterReadSnapshot(a.characterId);if(c.location!.homeLocationId!==(a.roomId??a.residenceId)||a.roomId&&!c.accessPermissions?.includes(roomPermission(a.roomId)))throw Error('거주지·입주 권한 불일치');if(a.roomId){const set=roomIndex.get(a.roomId)??new Set();set.add(a.characterId);roomIndex.set(a.roomId,set);}}assignments.set(a.characterId,structuredClone(a));}
  for(const p of data.profiles){world.getCharacterReadSnapshot(p.characterId);if(profiles.has(p.characterId)||[p.quietPreference,p.tidiness].some(n=>!Number.isInteger(n)||n<0||n>100)||p.preferredActivities.some(id=>!activityRegistry.has(id))||Object.values(p.activityCounts).some(n=>!Number.isSafeInteger(n)||n<0))throw Error('생활 습관 저장 오류');profiles.set(p.characterId,structuredClone(p));}
  for(const r of data.tracking){world.getCharacterReadSnapshot(r.characterId);world.catalog.getLocation(r.locationId);assertAbsoluteMinute(r.since);if(r.since>now()||r.activityId&&!activityRegistry.has(r.activityId)||tracking.has(r.characterId))throw Error('생활 구간 저장 오류');tracking.set(r.characterId,structuredClone(r));}
  for(const r of data.days){world.getCharacterReadSnapshot(r.characterId);if(!Number.isSafeInteger(r.day)||r.day<0||r.day>Math.floor(now()/1440)||Object.entries(r.activities).some(([id,n])=>!activityRegistry.has(id)||!Number.isSafeInteger(n)||n<0)||Object.values(r.activities).reduce((a,b)=>a+b,0)>1440||days.has(r.characterId+'/'+r.day))throw Error('생활 일별 통계 오류');days.set(r.characterId+'/'+r.day,structuredClone(r));}
  if(data.logs.length>R.maxLogs||data.processed.length>R.maxProcessed||data.firstMeetings.length>world.getCharacters().length**2)throw Error('생활 저장 보존 한도 오류');logs=structuredClone(data.logs);for(const r of logs){world.getCharacterReadSnapshot(r.characterId);assertAbsoluteMinute(r.at);if(r.at>now())throw Error('미래 생활 기록');}for(const p of data.processed){assertAbsoluteMinute(p.at);if(p.at>now()||processed.has(p.key))throw Error('생활 중복 키 오류');processed.set(p.key,p.at);}data.firstMeetings.forEach(key=>firstMeetings.add(key));
 }else if(options.assignNew!==false)syncCharacters();
 const summary=(id?:string)=>{const copy=new Map([...days].map(([key,value])=>[key,structuredClone(value)]));for(const r of tracking.values())if(r.activityId&&(!id||r.characterId===id)&&now()>r.since)aggregate(r.characterId,r.activityId,r.since,now(),copy);return [...copy.values()].filter(r=>(!id||r.characterId===id)&&r.day>=Math.floor(now()/1440)-R.retentionDays).sort((a,b)=>b.day-a.day||a.characterId.localeCompare(b.characterId));};
 const api={world,clock,getCurrentActivity:schedule.getCurrentActivity,getHabits:(id:string)=>ai.hasCharacter(id)?ai.getState(id).habits:[],getInteractionOptions:(id:string,targetId:string)=>['casual_chat','study_together','meal_together','request_help','serious_talk','reconcile','quiet_request','tidy_request'].map(key=>({id:key,name:interactionRegistry.get(key)!.name,...interactions?.canRequest(id,targetId,key)??{ok:false,reasons:['상호작용 엔진 없음']}})),connect,disconnect:()=>stop?.(),save,syncCharacters,getIntents,canInteract,getAssignment:(id:string)=>structuredClone(assignments.get(id)??null),getAssignments:()=>structuredClone([...assignments.values()]),getRoommates:roommates,getRoomOccupants:occupants,getProfile:(id:string)=>structuredClone(profiles.get(id)??null),getSummary:summary,getLogs:(id?:string)=>structuredClone(logs.filter(r=>!id||r.characterId===id||r.targetId===id)),assignResidence:assign,setExternalResidence:external,
  endResidence:(id:string)=>{const a=active(id);if(!a)throw Error('활성 거주 배정이 없습니다.');if(a.roomId){relate(id,a.roomId,undefined);roomIndex.get(a.roomId)?.delete(id);world.updateCharacter(id,c=>({...c,accessPermissions:(c.accessPermissions??[]).filter(p=>p!==roomPermission(a.roomId!))}));}a.status='ended';a.endedAt=now();world.setHomeLocation(id,undefined);if(schedule.hasSchedule(id))schedule.setResidenceBindings(id,undefined);log(id,'departure','거주 계약 종료',undefined,a.roomId??a.residenceId);},
  grantVisit:(id:string,roomId:string,allow:boolean)=>{if(!residenceRoomRegistry.has(roomId))throw Error('방 참조 오류');world.updateCharacter(id,c=>({...c,accessPermissions:allow?[...new Set([...(c.accessPermissions??[]),visitorPermission(roomId)])]:(c.accessPermissions??[]).filter(p=>p!==visitorPermission(roomId))}));log(id,'visit',allow?'08~22시 방문 허가':'방문 허가 회수',undefined,roomId);},
  setPreference:(id:string,key:'tidiness'|'quietPreference',value:number)=>{const p=profiles.get(id);if(!p||!['tidiness','quietPreference'].includes(key)||!Number.isInteger(value)||value<0||value>100)throw Error('생활 선호는0~100 정수');p[key]=value;ai.requestReevaluation(id);log(id,'preference','개인 생활 선호 변경');},
  subscribe:(f:()=>void)=>{listeners.add(f);return ()=>{listeners.delete(f);};},getSnapshot:()=>revision,
 };
 ai.attachDailyLife(api);return api;
}
export type {DailyLifeEngine} from '../types/dailyLife';
