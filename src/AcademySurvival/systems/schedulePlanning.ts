import type {Character} from '../types/character';
import type {CharacterSchedule,ScheduleEntry,ScheduleIntent,ScheduleRole,ScheduleCondition,PlaceBinding} from '../types/schedule';
import {activities,activityRegistry,scheduleTemplates,scheduleTemplateRegistry,SCHEDULE_RULES} from '../data/schedules';
import {locationCatalog} from './locationRegistry';
import {organizationWithin} from './organizations';
import {getWeekday,getAcademicPeriod,toImperialDate,MINUTES_PER_DAY,MAX_ABSOLUTE_MINUTE,assertAbsoluteMinute} from './calendar';
import {seededRandom,randomInt,seedHash} from './seededRandom';
import {meets} from './conditions';
export function scheduleRole(c:Character):ScheduleRole{
 const position=(ids:string[])=>c.positions.some(p=>ids.includes(p.definitionId)&&organizationWithin(p.organizationId,'academy-main'));
 const roles:ScheduleRole[]=[];
 if(position(['position-professor','position-lecturer','position-department-head','position-academy-dean']))roles.push('professor');
 if(position(['position-academy-guard']))roles.push('guard');
 if(position(['position-academy-librarian','position-archive-curator','position-teaching-assistant','position-clinic-officer']))roles.push('staff');
 if(c.schoolYear>0&&c.affiliations.some(a=>organizationWithin(a.organizationId,'academy-main')))roles.push('student');
 if(c.affiliations.some(a=>organizationWithin(a.organizationId,'demon-castle')||organizationWithin(a.organizationId,'demon-army')))roles.push('demon-worker');
 return SCHEDULE_RULES.rolePrecedence.find(r=>roles.includes(r))??'civilian';
}
export function generateScheduleForCharacter(c:Character,options:{seed?:string;bindings?:Partial<Record<PlaceBinding,string>>;shift?:'day'|'night'}={}):CharacterSchedule{
 const role=scheduleRole(c),random=seededRandom(`${options.seed??'schedule-v1'}/${c.id}`),shift=options.shift??(seedHash(c.id)%2?'night':'day');
 const training=c.specializationId==='magic'||c.specializationId==='holy'?'academy-magic-training':c.specializationId==='alchemy'||c.specializationId==='tactics'?'academy-library':'academy-arena';
 const secluded=c.dispositionIds?.includes('disposition-recluse')||c.traitIds.includes('trait-study-review');
 const bindings:CharacterSchedule['bindings']=role==='student'?{home:c.location?.homeLocationId??'academy-dorm',classroom:`academy-class-${Math.min(4,Math.max(1,c.schoolYear))}-1`,meal:'academy-dining',training,leisure:secluded?'academy-library':'academy-plaza'}:role==='professor'?{home:c.location?.homeLocationId??'academy-staff-residence',classroom:'academy-class-1-1',meal:'academy-dining',office:'academy-professor-office',leisure:'academy-plaza'}:role==='guard'?{home:c.location?.homeLocationId??'academy-staff-residence',meal:'academy-dining',guard:'academy-guard-post',patrol:'academy-gate',leisure:'academy-plaza'}:role==='staff'?{home:c.location?.homeLocationId??'academy-staff-residence',office:'academy-admin-office',meal:'academy-dining',leisure:'academy-plaza'}:role==='demon-worker'?{home:c.location?.homeLocationId??'demon-residence',office:'demon-office',meal:'demon-dining',leisure:'demon-gate'}:{home:c.location?.homeLocationId,leisure:c.location?.primaryLocationId??c.location?.currentLocationId};
 if(c.classId&&locationCatalog.nodes.get(c.classId)?.activityTags.includes('classroom'))bindings.classroom=c.classId;
 const templateId=role==='student'?'student-weekday':role==='professor'?'professor-weekday':role==='guard'?`guard-${shift}`:role==='staff'?'staff-weekday':role==='demon-worker'?'demon-worker':'civilian';
 return {characterId:c.id,version:'schedule-v1',role,templateId,shift,timeOffset:randomInt(random,-SCHEDULE_RULES.flexMinutes,SCHEDULE_RULES.flexMinutes),bindings:{...bindings,...options.bindings},overrides:[],temporaryEntries:[],cancelledEntryIds:[],diagnostics:role==='civilian'?['직무를 확인할 수 없어 일반 생활 기준을 사용합니다. 거주지가 없으면 관련 일정이 실패합니다.']:[]};
}
export function templateForDate(plan:CharacterSchedule,minute:number){
 const weekend=getWeekday(minute).index>=5,academic=getAcademicPeriod(toImperialDate(minute)),breakTime=academic.kind==='vacation'||academic.kind==='preparation';
 let id=plan.templateId;
 if(plan.role==='student')id=academic.kind==='vacation'?'student-vacation':academic.kind==='preparation'?'student-preparation':weekend?'student-holiday':academic.kind==='midterm'||academic.kind==='final'?'student-exam-prep':'student-weekday';
 if(plan.role==='professor')id=weekend||breakTime?'professor-holiday':'professor-weekday';
 if(plan.role==='staff')id=weekend?'staff-holiday':'staff-weekday';
 const t=scheduleTemplateRegistry.get(id);if(!t)throw new Error(`일과표 템플릿 참조 오류: ${id}`);return t;
}
function conditionMet(condition:ScheduleCondition,c:Character,at:number){if(condition.type==='weekday')return condition.days.includes(getWeekday(at).index);if(condition.type==='academic')return condition.kinds.includes(getAcademicPeriod(toImperialDate(at)).kind);return meets(condition.condition,{stats:c.stats,traits:c.traitIds,gifts:c.giftIds,flags:c.accessPermissions??[],tags:c.accessTags??[]});}
export function scheduleEntryIssues(e:ScheduleEntry):string[]{const issues:string[]=[];if(!e.id||!activityRegistry.has(e.activityId))issues.push('일정·활동 ID 오류');for(const n of [e.startMinuteOfDay,e.endMinuteOfDay])if(!Number.isInteger(n)||n<0||n>=MINUTES_PER_DAY)issues.push('하루 시각은 0~1439 정수여야 합니다.');if(e.startMinuteOfDay===e.endMinuteOfDay)issues.push('시작·종료가 같은 일정은 허용하지 않습니다.');if(!Number.isInteger(e.priority)||e.priority<0||e.priority>100)issues.push('우선순위는 0~100 정수여야 합니다.');if(e.targetLocationId&&!locationCatalog.nodes.has(e.targetLocationId))issues.push('존재하지 않는 목적지');if(e.absoluteDay!==undefined&&(!Number.isInteger(e.absoluteDay)||e.absoluteDay<0||(e.absoluteDay+1)*MINUTES_PER_DAY>MAX_ABSOLUTE_MINUTE+1))issues.push('임시 일정 날짜 오류');return issues;}
export function scheduleDataIssues(){const issues:string[]=[],ids=new Set<string>();for(const a of activities){if(ids.has(a.id)||!a.name||!a.description)issues.push('활동 정의 중복·누락');ids.add(a.id);for(const id of a.defaultLocations)if(!locationCatalog.nodes.has(id))issues.push(`활동 기본 장소 참조 오류: ${id}`);}for(const t of scheduleTemplates){const entries=new Set<string>();for(const e of t.entries){issues.push(...scheduleEntryIssues(e));if(entries.has(e.id))issues.push(`템플릿 안 일정 ID 중복: ${t.id}`);entries.add(e.id);}}return issues;}
export function getCharacterSchedule(c:Character,plan:CharacterSchedule,minute:number):ScheduleIntent[]{
 assertAbsoluteMinute(minute);const day=Math.floor(minute/MINUTES_PER_DAY),base=day*MINUTES_PER_DAY,t=templateForDate(plan,base),entries=new Map(t.entries.map(e=>[e.id,structuredClone(e)]));
 for(const e of plan.overrides)if(e.absoluteDay===undefined||e.absoluteDay===day)entries.set(e.id,structuredClone(e));
 for(const e of plan.temporaryEntries.filter(e=>e.absoluteDay===day))entries.set(e.id,e);
 const all=[...entries.values()];
 return all.filter(e=>!plan.cancelledEntryIds.includes(e.id)&&e.conditions.every(rule=>conditionMet(rule,c,base))).map(e=>{
  const override=plan.overrides.some(o=>o.id===e.id),temporary=plan.temporaryEntries.includes(e),jitter=e.mandatory||override||temporary?0:plan.timeOffset;
  // A supplied date/override is exact; fixed class and duty times never jitter.
  const start=base+e.startMinuteOfDay+jitter,end=base+e.endMinuteOfDay+jitter+(e.endMinuteOfDay<e.startMinuteOfDay?MINUTES_PER_DAY:0);
  let activityId=e.activityId;if(plan.role==='student'&&e.id==='training'&&!override&&!temporary&&activityId==='sword_training')activityId=plan.bindings.training==='academy-library'?'self_study':plan.bindings.training==='academy-magic-training'?'magic_training':'sword_training';
  const activity=activityRegistry.get(activityId)!;let target=e.targetLocationId??(e.binding?plan.bindings[e.binding]:undefined)??activity.defaultLocations.find(id=>{const l=locationCatalog.nodes.get(id);return l&&activity.requiredPlaceTags.some(tag=>l.activityTags.includes(tag));});
  if((e.binding==='home')&&!plan.bindings.home&&!e.targetLocationId)target=undefined;
  const place=target?locationCatalog.nodes.get(target):undefined,error=!target?'목적지를 찾을 수 없습니다.':!place?'목적지 ID가 없습니다.':!activity.requiredPlaceTags.some(tag=>place.activityTags.includes(tag))?'활동에 맞는 장소 태그가 없습니다.':undefined;
  return {characterId:c.id,occurrenceId:`${e.id}@${day}`,entryId:e.id,activityId,targetLocationId:target,priority:e.priority,mandatory:e.mandatory,interruptible:e.interruptible,plannedStartTime:Math.max(0,start),plannedEndTime:Math.min(MAX_ABSOLUTE_MINUTE,end),temporary,name:e.name,destinationError:error};
 }).sort((a,b)=>a.plannedStartTime-b.plannedStartTime||a.entryId.localeCompare(b.entryId));
}
export function resolveScheduleConflicts(entries:readonly ScheduleIntent[]){return [...entries].sort((a,b)=>b.priority-a.priority||Number(b.mandatory)-Number(a.mandatory)||a.plannedStartTime-b.plannedStartTime||a.entryId.localeCompare(b.entryId));}
