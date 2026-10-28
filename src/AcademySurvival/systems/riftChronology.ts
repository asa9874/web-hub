import type {NpcAiEngine} from './npcAi';
import type {RiftCrisisSave,RiftChronicle,RiftSite,RiftPreludeRecord} from '../types/riftCrisis';
import {riftPreludeDefinitions} from '../data/riftCrisis/chronology';
import {toAbsoluteMinute,toImperialDate} from './calendar';
import {seededRandom} from './seededRandom';
const DAY=1440;
export function initialRiftChronicle(seed:string,now:number,firstAt:number):RiftChronicle{
 return {version:'chronicle-v1',preludes:riftPreludeDefinitions.map(d=>{
  const start=toAbsoluteMinute({year:427,month:d.months[0],day:1}),end=toAbsoluteMinute({year:427,month:d.months[1],day:30,hour:23,minute:59});
  const earliest=Math.max(start,now,firstAt+1),due=earliest+Math.floor(seededRandom(seed+'/prelude/'+d.id)()*Math.max(1,end-earliest));
  return {id:'rift-prelude/427/'+d.id,kind:d.id,scheduledAt:Math.min(end,due),deadlineAt:end,status:earliest>end?'expired':'scheduled'};
 })};
}
/** Five bounded archival observations; independent of NPC memory retention and UI reads. */
export function createRiftChronology(ai:NpcAiEngine,data:RiftCrisisSave){
 const now=ai.clock.getSnapshot,rows=()=>data.chronicle?.preludes??[];
 const definition=(p:RiftPreludeRecord)=>riftPreludeDefinitions.find(d=>d.id===p.kind)!;
 const fingerprint=(s:RiftSite)=>'wave/'+s.regionId+'/'+Math.floor(seededRandom(data.seed+'/'+s.regionId+'/wave')()*1e8);
 const measurement=(s:RiftSite)=>100+Math.floor(seededRandom(data.seed+'/'+s.regionId+'/measurement')()*900);
 function perceive(p:RiftPreludeRecord,id:string,locationId:string,context:string){
  if(p.status!=='recorded'||!ai.knowledge!.canPerceiveCurrentLocation(id))return;
  const revisited=p.researchAt!==undefined&&p.researchAt<=now(),key='rift-archive/'+p.id+(revisited?'/revisit':''),known=ai.knowledge!.getKnownClaims(id);
  if(known.some(r=>r.claim.evidenceDefinitionId===key))return;
  // Current archive reading is direct experience of a document, never witnessing the old event.
  ai.interactions!.effects.recordDomainEvent({id:key+'/'+id+'/'+now(),type:'RiftChanged',sourceId:p.id,actorCharacterId:id,locationId,occurredAt:now(),visibility:'private',details:{definitionId:key,worldEventId:revisited?p.researchEventId:p.worldEventId,reason:(revisited?'현재 표본과 과거 관측 기록의 파형 일치 확인 · ':'')+context+' · '+definition(p).text+(p.kind==='report'?' [미검증 보고]':' [보존 관측 자료]')}});
 }
 function process(){
  for(const p of rows().filter(p=>p.status==='scheduled'&&p.scheduledAt<=now())){
   const s=data.sites[0];
   if(!s||p.kind==='material'&&!['micro','unstable','stable','gate'].includes(s.stage)){
    if(now()+7*DAY<=p.deadlineAt)p.scheduledAt=now()+7*DAY;else p.status='expired';continue;
   }
   const event=ai.worldEvents?.recordRegionalOccurrence('rift-prelude/'+p.kind,s.locationId,p.id,s.lastEventId);
   if(ai.worldEvents&&!event){p.scheduledAt=now()+DAY;if(p.scheduledAt>p.deadlineAt)p.status='expired';continue;}
   p.status='recorded';p.at=now();p.siteId=s.id;p.locationId=s.locationId;p.signature=fingerprint(s);p.measurement=measurement(s);p.worldEventId=event?.id;
   if(p.kind==='material')s.samples++;
   for(const id of ai.world.getCharacterIdsAtLocation(s.locationId))perceive(p,id,s.locationId,'현재 지역 관측 기록');
  }
  for(const p of rows().filter(p=>p.status==='recorded'&&!p.researchAt&&p.signature)){
   const s=data.sites.find(s=>s.id===p.siteId);if(!s||toImperialDate(now()).year<428||s.research<15||s.signalSamples<3||p.signature!==fingerprint(s)||p.measurement!==measurement(s))continue;
   // A later real signal sample is compared with the retained earlier measurement.
   const event=ai.worldEvents?.recordRegionalOccurrence('rift-prelude/revisit',s.locationId,p.id+'/revisit',p.worldEventId);
   if(ai.worldEvents&&!event)continue;p.researchAt=now();p.researchEventId=event?.id;
   p.researchSourceEventId=s.lastEventId;
   for(const id of ai.world.getCharacterIdsAtLocation(s.locationId))perceive(p,id,s.locationId,'현재 조사에서 과거 측정 자료를 재검토');
  }
 }
 function readAtLesson(id:string,locationId:string){
  // Only already recorded material is available; no future knowledge or claimed past attendance.
  const p=rows().filter(p=>p.status==='recorded'&&(p.at??Infinity)<=now()).find(p=>!ai.knowledge!.getKnownClaims(id).some(r=>r.claim.evidenceDefinitionId==='rift-archive/'+p.id+(p.researchAt!==undefined?'/revisit':'')));if(p)perceive(p,id,locationId,'실제 수업에서 관측 자료 열람');
 }
 function validate(){
  if(!data.chronicle)return;
  if(data.nextAt>Math.min(Infinity,...rows().filter(p=>p.status==='scheduled').map(p=>p.scheduledAt)))throw Error('전조 다음 예약 누락');
  if(data.chronicle.version!=='chronicle-v1'||rows().length!==5||new Set(rows().map(p=>p.id)).size!==5)throw Error('전조 저장 버전·중복 오류');
  for(const p of rows()){
   if(!riftPreludeDefinitions.some(d=>d.id===p.kind)||p.id!=='rift-prelude/427/'+p.kind||!['scheduled','recorded','expired'].includes(p.status)||!Number.isSafeInteger(p.scheduledAt)||!Number.isSafeInteger(p.deadlineAt)||p.scheduledAt>p.deadlineAt&&p.status!=='expired')throw Error('전조 예약 오류');
   if(p.status==='recorded'&&(!Number.isSafeInteger(p.at)||p.at!>now()||p.at!>p.deadlineAt||!data.sites.some(s=>s.id===p.siteId&&s.locationId===p.locationId)||!p.signature||!Number.isSafeInteger(p.measurement)))throw Error('전조 증거 참조 오류');
   if(p.status==='recorded'){const s=data.sites.find(s=>s.id===p.siteId)!;if(p.at!<Math.max(data.startedAt,s.createdAt)||p.signature!==fingerprint(s)||p.measurement!==measurement(s))throw Error('전조 측정 증거 불일치');}
   if(p.researchAt!==undefined&&(!Number.isSafeInteger(p.researchAt)||p.researchAt>now()||p.researchAt<(p.at??Infinity)||toImperialDate(p.researchAt).year<428))throw Error('전조 후속 연구 시각 오류');
  }
 }
 return {process,validate,readAtLesson,nextAt:()=>Math.min(Infinity,...rows().filter(p=>p.status==='scheduled').map(p=>p.scheduledAt)),perceiveSite:(s:RiftSite,id:string)=>{for(const p of rows().filter(p=>p.siteId===s.id))perceive(p,id,s.locationId,'현재 현장 보존 기록 열람');}};
}
