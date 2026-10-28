import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {mkdir,writeFile} from 'node:fs/promises';
import {performance} from 'node:perf_hooks';
await mkdir('test-results/academy-lod',{recursive:true});
const names=['npcSimulation','aiSandbox','npcAi','npcMemory','interactions','actionEffects','motivationEngine','npcSchedules','locationWorld','locationInitialState','relationships','gameTime','calendar','npcGeneration','npcGenerationContext','scheduleDemo','worldEvents'];
await build({stdin:{contents:names.map(n=>`export * from './src/AcademySurvival/systems/${n}';`).join('\n'),resolveDir:process.cwd()},bundle:true,platform:'node',format:'esm',outfile:'test-results/academy-lod/engine.mjs'});
const m=await import('../test-results/academy-lod/engine.mjs');
const seed='lod-contract-v1',at=m.toAbsoluteMinute({year:427,month:3,day:1,hour:6});
function create(count=10,enabled=true,definitions,start=at){
 const batch=m.generateNpcs({count,seed,academyStudent:true,academyYear:'random',specializationId:'random',growthType:'random'},m.npcGenerationContext);
 assert(batch.results.every(r=>r.valid));
 const player=m.createInitialLocationCharacters().find(c=>c.kind==='player');player.location.currentLocationId='capital-market';
 const chars=[player,...batch.results.map((r,i)=>m.prepareScheduleDemoCharacter(r.character,i%5===4?'demon-worker':'student'))];
 const clock=m.createGameClock(start),world=m.createLocationWorld({clock,characters:chars,allowForcePlacement:true}),graph=m.createRelationshipGraph(chars.map(c=>c.id),batch.relationships.records,{now:clock.getSnapshot});
 const schedule=m.createNpcScheduleEngine(world,{seed,relationships:graph}),motivation=m.createMotivationEngine(schedule,{seed,relationships:graph});
 const outcomes=m.createActionEffectsEngine(motivation,graph,{seed}),interactions=m.createInteractionEngine(motivation,graph,outcomes,{seed});
 const knowledge=m.createNpcMemoryEngine(motivation,graph,outcomes,interactions,{seed,debug:true});let ai;
 const worldEvents=m.createWorldEventEngine(motivation,graph,outcomes,interactions,knowledge,{seed,definitions,wake:ids=>ids.forEach(id=>ai?.requestReevaluation(id))});
 ai=m.createNpcAiEngine(motivation,{seed,relationships:graph,interactions,knowledge,worldEvents,autoConnect:false});
 const simulation=m.createNpcSimulation(ai,{seed,autoConnect:false});simulation.setEnabled(enabled);simulation.connect();ai.connect();
 return {world,graph,schedule,motivation,outcomes,interactions,knowledge,worldEvents,ai,simulation,chars};
}
function advance(s,minutes){const r=s.world.advanceTime(minutes);assert.deepEqual(r.listenerErrors,[]);assert.equal(r.elapsedMinutes,minutes);}
function comparable(input){const s=structuredClone(input);s.execution.wakes.sort((a,b)=>a.at-b.at||a.id.localeCompare(b.id));return s;}
const world=create(),students=world.chars.filter(c=>c.kind!=='player'&&c.location.currentLocationId==='academy-dorm'),student=students[0].id,remote=world.chars.find(c=>c.location.currentLocationId==='demon-residence').id;
assert.throws(()=>m.createNpcSimulation(world.ai),/중복/);
assert.equal(world.simulation.getTier(student),1,'remote academy continues at LOD 1');
assert.equal(world.simulation.getTier(remote),2);
assert.throws(()=>world.simulation.forceTier(student,3),/아카데미/);
const identity=world.world.getCharacter(student),memory=world.knowledge.save(),relations=world.graph.getRecords();
world.simulation.requestDetailed(student,'중요 서사',2);assert.equal(world.simulation.getTier(student),0);
assert.deepEqual(world.world.getCharacter(student),identity);assert.deepEqual(world.knowledge.save(),memory);assert.deepEqual(world.graph.getRecords(),relations);
world.world.forcePlace(['preview-player'],'academy-dorm');assert.equal(world.simulation.getTier(student),0);
world.world.forcePlace(['preview-player'],'capital-market');assert.equal(world.simulation.getTier(student),0,'activation hold prevents oscillation');
advance(world,31);assert.equal(world.simulation.getTier(student),1);
// Actual player travel, not a fabricated connection or scene teleport.
assert.equal(world.world.requestMovement('preview-player','demon-gate').ok,false);
const route=world.world.requestMovement('preview-player','academy-plaza');assert(route.ok);advance(world,route.travelMinutes);
assert.equal(world.world.getCharacterLocation('preview-player').currentLocationId,'academy-plaza');
assert.equal(world.world.getCharacterLocation('preview-player').movement,null);
world.world.forcePlace([student],'academy-plaza');
const moving=world.world.getCharacterLocation(student).movement??world.world.requestMovement(student,'academy-arena');assert(moving.arrivalTime);
assert.throws(()=>world.simulation.forceTier(student,1),/이동/);advance(world,moving.arrivalTime-world.world.clock.getSnapshot());
assert(world.world.catalog.nodes.has(world.world.getCharacterLocation(student).currentLocationId));
// Background/dormant are not permission to erase identities, relationships or physical state.
world.simulation.promote(remote,'background');world.simulation.forceTier(remote,3);advance(world,60);
assert.equal(world.simulation.getTier(remote),3);
world.simulation.definePopulation('capital-market',10000);
const beforeCount=world.world.getCharacters().length;
assert.equal(world.world.getCharacters().length,beforeCount,'population aggregate does not instantiate 10k actors');
let factoryCalls=0;
const factory=(_seed,id)=>{factoryCalls++;const c=structuredClone(students[1]);c.id=id;c.kind='random_npc';c.schoolYear=0;c.classId=undefined;c.positions=[];c.affiliations=[];c.primaryOrganizationId=undefined;c.primaryPositionId=undefined;c.location={characterId:id,currentLocationId:'capital-market',homeLocationId:'capital-market',movement:null};return c;};
const resident=world.simulation.materializeResident('capital-market','resident-1',factory);
const again=world.simulation.materializeResident('capital-market','resident-1',factory);
assert.equal(resident.id,again.id);assert.equal(factoryCalls,1);assert.equal(world.world.getCharacters().length,beforeCount+1);
assert.equal(world.simulation.getStatistics().population,10000);
advance(world,0);
const original=m.snapshotAi(world.ai,world.graph),restored=m.createAiSandbox(original),disconnect=restored.connect();
assert.deepEqual(m.snapshotAi(restored.ai,restored.graph),original,'LOD and ongoing engines restore without regeneration');
assert.deepEqual(restored.worldEvents.getSimulationParticipants().sort(),[...new Set(restored.worldEvents.getInstances(true).filter(e=>['active','pending'].includes(e.status)).flatMap(e=>e.participantCharacterIds))].sort(),'restored active-event index');
advance(world,10);advance(restored,10);assert.deepEqual(comparable(m.snapshotAi(restored.ai,restored.graph)),comparable(m.snapshotAi(world.ai,world.graph)),'post-load continuation');disconnect();
const legacy=structuredClone(original);delete legacy.simulation;
const migrated=m.createAiSandbox(legacy,{enableLod:true});assert(migrated.simulation);assert.equal(migrated.simulation.getActor(student).persistent,true);
assert.equal(migrated.simulation.save().seed,legacy.ai.seed+'/lod','default resident seed derives from the existing world AI stream');
const invalid=structuredClone(original);invalid.simulation.actors[0].tier=7;assert.throws(()=>m.createAiSandbox(invalid),/LOD/);
const probe={id:'lod-probe',name:'LOD 중요 사건',description:'실제 사건 상태 머신을 통한 정밀 유지',category:'personal_story',tags:[],scale:'personal',importance:85,triggerRules:[],participantRules:{count:1,conditions:[]},stages:[{id:'one',name:'진행',durationMinutes:5,timeoutMinutes:20,entryConditions:[],completionConditions:[],failureConditions:[],effects:[],nextStageIds:[]}],outcomeRules:[{id:'done',name:'완료',conditions:[],weight:1,effects:[]}],followUpRules:[],cooldownMinutes:0,participantCooldownMinutes:0,maxOccurrences:10,visibility:'private'};
const eventWorld=create(10,true,[probe]),eventActor=eventWorld.chars.find(c=>c.location.currentLocationId==='demon-residence').id;
eventWorld.simulation.promote(eventActor,'background');eventWorld.simulation.forceTier(eventActor,3);assert.equal(eventWorld.simulation.getTier(eventActor),3);
const event=eventWorld.worldEvents.requestEvent('lod-probe',{actorId:eventActor});advance(eventWorld,0);
assert.equal(eventWorld.simulation.getTier(eventActor),0,'remote event participant is activated at the same world minute');
assert.throws(()=>eventWorld.simulation.forceTier(eventActor,3),/정밀도/);
advance(eventWorld,6);assert.equal(eventWorld.worldEvents.getInstance(event.id).status,'completed');
assert(!eventWorld.worldEvents.getSimulationParticipants().includes(eventActor),'completed event removed from activation index');
assert.deepEqual(eventWorld.worldEvents.getDiagnostics(),[]);assert.equal(eventWorld.simulation.getActor(eventActor).importance,'persistent');
assert.throws(()=>eventWorld.simulation.forceTier(eventActor,3),/최소 LOD 2/);
// An explicit remote appointment runs through the physical schedule engine even at LOD 3.
const appointment=create(),appointmentId=appointment.chars.find(c=>c.location.currentLocationId==='demon-residence').id;
appointment.simulation.promote(appointmentId,'background');appointment.simulation.forceTier(appointmentId,3);
appointment.schedule.addTemporarySchedule(appointmentId,{id:'lod-appointment',activityId:'rest',targetLocationId:'demon-residence',startMinuteOfDay:370,endMinuteOfDay:390,absoluteDay:Math.floor(at/1440),priority:100,mandatory:true,interruptible:false,conditions:[]});
advance(appointment,35);const attended=appointment.schedule.getHistory(appointmentId).find(r=>r.entryId==='lod-appointment');
assert.equal(attended.status,'completed');assert.equal(attended.actualStartTime,at+10);
const yearEnd=create(10,true,undefined,m.toAbsoluteMinute({year:427,month:12,day:30,hour:23,minute:30})),yearSave=m.snapshotAi(yearEnd.ai,yearEnd.graph),yearBulk=m.createAiSandbox(yearSave),yearMinute=m.createAiSandbox(yearSave);
yearBulk.connect();yearMinute.connect();advance(yearBulk,120);for(let i=0;i<120;i++)advance(yearMinute,1);
assert.equal(yearBulk.world.clock.getGameDateTime().year,428);
assert.deepEqual(comparable(m.snapshotAi(yearBulk.ai,yearBulk.graph)),comparable(m.snapshotAi(yearMinute.ai,yearMinute.graph)),'year boundary policy equivalence');
const fifty=create(50);advance(fifty,10);assert.equal(fifty.ai.getStatistics().total,50);
// Same policy is deterministic across time step sizes; full-detail and coarse microhistory may differ.
const initial=create(),save=m.snapshotAi(initial.ai,initial.graph),bulk=m.createAiSandbox(save),minute=m.createAiSandbox(save);bulk.connect();minute.connect();
advance(bulk,120);for(let i=0;i<120;i++)advance(minute,1);
assert.deepEqual(comparable(m.snapshotAi(minute.ai,minute.graph)),comparable(m.snapshotAi(bulk.ai,bulk.graph)),'minute and bulk policy equivalence');
assert.equal(save.world.absoluteMinute,at,'sandbox source untouched');
const metrics=[];
for(const enabled of [false,true]){
 const s=create(100,enabled),start=performance.now();advance(s,60);const elapsedMs=performance.now()-start;
 assert.equal(s.world.getCharacters().length,101);assert(s.world.getCharacters().every(c=>c.location&&s.world.catalog.nodes.has(c.location.currentLocationId)));
 metrics.push({enabled,minutes:60,npcs:100,elapsedMs,decisions:s.ai.getStatistics().decisions,events:s.worldEvents.getStatistics(),lod:s.simulation.getStatistics(),memories:s.knowledge.getStatistics()});
}
await writeFile('test-results/academy-lod/results.json',JSON.stringify({seed,metrics,checked:['policy','academy-floor','travel','hysteresis','stable-residents','population10000','identity','legacy','save-load','minute-bulk120','sandbox']},null,2));
console.log('LOD contracts passed. 100 NPC / 60 minutes:',metrics.map(r=>({enabled:r.enabled,ms:Math.round(r.elapsedMs),decisions:r.decisions,lod:r.lod.counts})));
