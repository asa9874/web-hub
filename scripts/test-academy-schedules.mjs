import assert from 'node:assert/strict';import {build} from 'esbuild';import {mkdir,writeFile} from 'node:fs/promises';
await mkdir('.build-projects',{recursive:true});await build({stdin:{contents:["export * from './src/AcademySurvival/systems/npcSchedules';","export * from './src/AcademySurvival/systems/schedulePlanning';","export * from './src/AcademySurvival/data/schedules';","export * from './src/AcademySurvival/systems/gameTime';","export * from './src/AcademySurvival/systems/calendar';","export * from './src/AcademySurvival/systems/locationWorld';","export * from './src/AcademySurvival/systems/npcGeneration';","export * from './src/AcademySurvival/systems/npcGenerationContext';","export * from './src/AcademySurvival/systems/locationRouting';","export * from './src/AcademySurvival/systems/scheduleDemo';","export * from './src/AcademySurvival/systems/characterValidation';"].join('\n'),resolveDir:process.cwd()},bundle:true,platform:'node',format:'esm',outfile:'.build-projects/academy-schedule-model.mjs'});
const m=await import('../.build-projects/academy-schedule-model.mjs');assert.deepEqual(m.scheduleDataIssues(),[]);
const time=(hour=6,minute=0,day=1,month=3,year=427)=>m.toAbsoluteMinute({year,month,day,hour,minute});
const raw=m.generateNpcs({count:100,seed:'schedule-audit',academyStudent:true,academyYear:3,growthType:'ordinary',specializationId:'sword'},m.npcGenerationContext).results.map(r=>r.character);
const people=raw.map(c=>({...structuredClone(c),location:{...c.location,currentLocationId:'academy-dorm',homeLocationId:'academy-dorm',movement:null}}));
const c=people[0],plan=m.generateScheduleForCharacter(c,{seed:'test'});assert.deepEqual(plan,m.generateScheduleForCharacter(c,{seed:'test'}));
assert.equal(m.templateForDate(plan,time()).id,'student-weekday');assert.equal(m.templateForDate(plan,time(6,0,6)).id,'student-holiday');assert.equal(m.templateForDate(plan,time(6,0,1,7)).id,'student-vacation');assert.equal(m.templateForDate(plan,time(6,0,1,2)).id,'student-preparation');assert.equal(m.templateForDate(plan,time(6,0,1,5)).id,'student-exam-prep');
let day=m.getCharacterSchedule(c,plan,time());assert.equal(day.find(e=>e.entryId==='morning-class').plannedStartTime,time(8,30));assert.equal(day.find(e=>e.entryId==='morning-class').targetLocationId,'academy-class-3-1');assert(day.find(e=>e.activityId==='sleep').plannedEndTime>time(0,0,2));
function simulation(characters=people.slice(0,1),at=time(),plans){const world=m.createLocationWorld({clock:m.createGameClock(at),characters:structuredClone(characters),allowForcePlacement:true});const engine=m.createNpcScheduleEngine(world,{plans,seed:'test'});return {world,engine};}
let {world,engine}=simulation();engine.advanceTime(1440);assert.equal(world.clock.getSnapshot(),time(6,0,2));assert.equal(world.getCharacterLocation(c.id).currentLocationId,'academy-dorm');assert.equal(engine.getCurrentActivity(c.id).activityId,'sleep');assert(engine.getLogs().some(l=>l.type==='departure'));assert(engine.getLogs().some(l=>l.type==='start'&&l.message.includes('수업')));assert(engine.getHistory(c.id).some(r=>r.activityId==='attend_class'&&r.actualStartTime===time(8,30)));
const saved={locations:world.snapshot(),history:engine.getHistory(),current:engine.getCurrentActivity(c.id),counters:engine.getCounters()};
const small=simulation();for(let n=0;n<1440;n++)small.engine.advanceTime(1);assert.deepEqual(small.world.snapshot(),saved.locations);assert.deepEqual(small.engine.getHistory(),saved.history);assert.deepEqual(small.engine.getCounters(),saved.counters);
console.log('day',saved.counters);
const distant={...structuredClone(c),location:{...c.location,currentLocationId:'capital-market'}};({world,engine}=simulation([distant],time(8,29)));engine.advanceTime(50);const lesson=engine.getHistory(c.id).find(r=>r.entryId==='morning-class');assert(lesson.lateMinutes>0);assert(lesson.actualStartTime>time(8,30));assert.equal(world.getCharacterLocation(c.id).currentLocationId,'academy-class-3-1');
const entry=(id,activity,start,end,target,priority=40,mandatory=false)=>({id,activityId:activity,startMinuteOfDay:start,endMinuteOfDay:end,targetLocationId:target,priority,mandatory,interruptible:true,conditions:[],absoluteDay:Math.floor(time()/1440)});
// Isolate the 5-minute arrival restriction from unrelated residence permissions.
({world,engine}=simulation([{...c,location:{...c.location,currentLocationId:'academy-plaza'}}],time(7,58)));engine.addTemporarySchedule(c.id,entry('restricted','sword_training',478,510,'academy-morning',100,true));assert(engine.getHistory(c.id).some(r=>r.entryId==='restricted'&&r.status==='failed'&&r.reason.includes('08:00')));assert.notEqual(world.getCharacterLocation(c.id).currentLocationId,'academy-morning');
({world,engine}=simulation([c],time(16,0)));engine.advanceTime(15);engine.addTemporarySchedule(c.id,entry('urgent','rest',975,990,'academy-dorm',100));engine.advanceTime(30);assert(engine.getLogs().some(l=>l.type==='interrupt'));assert(engine.getLogs().some(l=>l.type==='resume'));assert(engine.getCurrentActivity(c.id).activityId==='sword_training');
({world,engine}=simulation([c],time(8,29)));const unreachable=entry('unreachable','patrol',509,530,'demon-gate',100,true);engine.addTemporarySchedule(c.id,unreachable);assert(engine.getHistory(c.id).some(r=>r.entryId==='unreachable'&&r.status==='failed'));
({world,engine}=simulation([c],time(6)));const snapshot=world.snapshot();assert.throws(()=>engine.advanceTime(32*1440));assert.deepEqual(world.snapshot(),snapshot);
for(const n of [10,50,100]){const sim=simulation(people.slice(0,n));sim.engine.advanceTime(10080);assert.equal(sim.world.clock.getSnapshot(),time()+10080);assert.equal(sim.world.getCharacters().length,n);const stationary=sim.world.getCharacters().filter(c=>!c.location.movement).length;const moving=sim.world.getTravelers().length;assert.equal(stationary+moving,n);assert(sim.engine.getCounters().processedEvents<10080*n);if(n===100){const result={count:n,counters:sim.engine.getCounters(),statistics:sim.engine.getStatistics(),moving,stationary};await writeFile('.build-projects/academy-schedule-report.json',JSON.stringify(result,null,2));console.log('week',result);}}
console.log('Schedule engine focused tests passed.');

// Role seeds are explicit sandbox data, use the same Character validation and real routes.
for(const role of ['professor','guard','staff','demon-worker']){
 const person=m.prepareScheduleDemoCharacter(m.generateNpcs({count:1,seed:'adult/'+role,academyStudent:false},m.npcGenerationContext).results[0].character,role);
 assert.deepEqual(m.validateCharacters([person]),[]);
 const p=m.generateScheduleForCharacter(person,{seed:'roles'});assert.equal(p.role,role);
 const sim=simulation([person],time(),[p]);sim.engine.advanceTime(1440);
 assert(sim.engine.getHistory().some(r=>r.actualStartTime!==undefined));
 assert.equal(sim.engine.getCounters().failed,0,JSON.stringify(sim.engine.getLogs().filter(l=>l.type==='failure')));
}
const guard=m.prepareScheduleDemoCharacter(c,'guard'),dayShift=m.generateScheduleForCharacter(guard,{shift:'day'}),nightShift=m.generateScheduleForCharacter(guard,{shift:'night'});
assert.notEqual(dayShift.templateId,nightShift.templateId);
const gd=m.getCharacterSchedule(guard,dayShift,time()).find(e=>e.entryId==='guard'),gn=m.getCharacterSchedule(guard,nightShift,time()).find(e=>e.entryId==='guard');assert.equal((gn.plannedStartTime-gd.plannedStartTime+1440)%1440,720);
// Priority, mandatory tie, stable ID, non-interruptible attendance, cancellation and expiry.
const baseIntent=day[0];assert.equal(m.resolveScheduleConflicts([{...baseIntent,entryId:'z',priority:10},{...baseIntent,entryId:'a',priority:10}])[0].entryId,'a');assert.equal(m.resolveScheduleConflicts([{...baseIntent,mandatory:false},{...baseIntent,entryId:'must',mandatory:true}])[0].entryId,'must');
({world,engine}=simulation([c],time(8)));engine.advanceTime(60);engine.addTemporarySchedule(c.id,entry('during-class','rest',540,550,'academy-dorm',100));assert.equal(engine.getCurrentActivity(c.id).activityId,'attend_class');engine.advanceTime(15);assert(engine.getHistory().some(r=>r.entryId==='during-class'&&r.status==='skipped'));assert.throws(()=>engine.resumeScheduleEntry(c.id,'during-class'));
engine.cancelScheduleEntry(c.id,'afternoon-class');assert(!engine.getCharacterSchedule(c.id).some(e=>e.entryId==='afternoon-class'));
assert.throws(()=>engine.addTemporarySchedule(c.id,entry('past','rest',10,20,'academy-dorm')));
assert.throws(()=>engine.addTemporarySchedule(c.id,{...entry('bad','rest',560,600,'missing'),priority:101}));
// A missing residence or incompatible place is visible, never repaired by teleportation.
const missing=m.generateScheduleForCharacter(c,{bindings:{home:'missing'}});({world,engine}=simulation([c],time(22,15),[missing]));assert(engine.getHistory().some(r=>r.status==='failed'&&r.reason.includes('목적지')));
// Month/year/day boundaries and a week's step-size invariance.
for(const at of [time(23,59,30,3),time(23,59,30,12)]){const sim=simulation([c],at);sim.engine.advanceTime(2);assert.equal(sim.world.clock.getSnapshot(),at+2);}
const large=simulation(),stepped=simulation();large.engine.advanceTime(10080);for(let i=0;i<10080;i++)stepped.engine.advanceTime(1);assert.deepEqual(large.world.snapshot(),stepped.world.snapshot());assert.deepEqual(large.engine.getHistory(),stepped.engine.getHistory());assert.deepEqual(large.engine.getCounters(),stepped.engine.getCounters());
const original=structuredClone(c),isolated=simulation([original]);isolated.world.forcePlace([c.id],'demon-gate');isolated.engine.advanceTime(1440);assert.deepEqual(original,c);
console.log('Schedule role, collision, expiry, boundary, week step-size and sandbox checks passed.');

const mixedRoles=['student','professor','guard','staff','demon-worker'];
const mixed=Array.from({length:100},(_,i)=>m.prepareScheduleDemoCharacter(m.generateNpcs({count:1,seed:'life-mixed/'+i,academyStudent:i%5===0,academyYear:(i%4)+1},m.npcGenerationContext).results[0].character,mixedRoles[i%5]));
const mixedSim=simulation(mixed);mixedSim.engine.advanceTime(10080);assert.equal(mixedSim.engine.getStatistics().total,100);assert.equal(mixedSim.world.getTravelers().length+mixedSim.world.getCharacters().filter(c=>!c.location.movement).length,100);assert.deepEqual(m.validateCharacters(mixedSim.world.getCharacters()),[]);
const report={students:JSON.parse(await (await import('node:fs/promises')).readFile('.build-projects/academy-schedule-report.json','utf8')),mixed:{statistics:mixedSim.engine.getStatistics(),samples:mixed.slice(0,5).map(c=>({name:c.name,role:mixedSim.engine.getPlans().find(p=>p.characterId===c.id).role,location:mixedSim.world.getCharacterLocation(c.id).currentLocationId,activity:mixedSim.engine.getCurrentActivity(c.id)}))}};
await writeFile('.build-projects/academy-schedule-report.json',JSON.stringify(report,null,2));console.log('Mixed 100/week:',report.mixed.statistics);

const dateOverride=structuredClone(plan);dateOverride.temporaryEntries=[entry('breakfast','breakfast',430,470,'academy-dining')];const overridden=m.getCharacterSchedule(c,dateOverride,time());assert.equal(overridden.filter(e=>e.entryId==='breakfast').length,1);assert.equal(overridden.find(e=>e.entryId==='breakfast').plannedStartTime,time(7,10));assert.equal(overridden.find(e=>e.entryId==='breakfast').temporary,true);assert.equal(m.getCharacterSchedule(c,dateOverride,time(6,0,2)).find(e=>e.entryId==='breakfast').temporary,false);
console.log('Date-scoped override replaces one occurrence without duplicate IDs.');
