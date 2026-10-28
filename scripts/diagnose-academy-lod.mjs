import {build} from 'esbuild';
import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {performance} from 'node:perf_hooks';
import os from 'node:os';
import assert from 'node:assert/strict';
const args=process.argv.slice(2),arg=(k,f)=>args.includes(k)?args[args.indexOf(k)+1]:f;
const minutes=Number(arg('--minutes','60')),runs=Number(arg('--runs','2')),selected=arg('--scenarios','nearby-class,remote-class,remote-social,exam-month,world-events').split(',');
if(!Number.isInteger(minutes)||minutes<1||minutes>480||!Number.isInteger(runs)||runs<1||runs>3)throw Error('짧은 측정만 지원: 1~480분, 1~3회');
const directory=`test-results/academy-lod/benchmark-${minutes}`;await mkdir(directory,{recursive:true});
await build({stdin:{contents:['npcSimulation','npcAi','npcMemory','interactions','actionEffects','motivationEngine','npcSchedules','locationWorld','locationInitialState','relationships','gameTime','calendar','npcGeneration','npcGenerationContext','scheduleDemo','worldEvents'].map(n=>`export * from './src/AcademySurvival/systems/${n}';`).join('\n'),resolveDir:process.cwd()},bundle:true,platform:'node',format:'esm',outfile:directory+'/engine.mjs'});
const m=await import('../'+directory+'/engine.mjs'),seed='lod-benchmark-v1';
function fixture(scenario,enabled){
 const at=m.toAbsoluteMinute({year:427,month:scenario==='exam-month'?5:3,day:1,hour:['remote-social','world-events'].includes(scenario)?16:9});
 const batch=m.generateNpcs({count:100,seed,academyStudent:true,academyYear:'random',specializationId:'random',growthType:'random'},m.npcGenerationContext);
 assert(batch.results.every(r=>r.valid));const player=m.createInitialLocationCharacters().find(c=>c.kind==='player');player.location.currentLocationId=scenario==='nearby-class'?'academy-plaza':'capital-market';
 const npcs=batch.results.map(r=>m.prepareScheduleDemoCharacter(r.character,'student')),chars=[player,...npcs],clock=m.createGameClock(at),world=m.createLocationWorld({clock,characters:chars,allowForcePlacement:true});
 const graph=m.createRelationshipGraph(chars.map(c=>c.id),batch.relationships.records,{now:clock.getSnapshot}),schedule=m.createNpcScheduleEngine(world,{seed,relationships:graph}),motivation=m.createMotivationEngine(schedule,{seed,relationships:graph});
 const effects=m.createActionEffectsEngine(motivation,graph,{seed}),interactions=m.createInteractionEngine(motivation,graph,effects,{seed}),knowledge=m.createNpcMemoryEngine(motivation,graph,effects,interactions,{seed});let ai;
 const events=m.createWorldEventEngine(motivation,graph,effects,interactions,knowledge,{seed,wake:ids=>ids.forEach(id=>ai?.requestReevaluation(id))});
 let preparedRequests=0;
 if(scenario==='remote-social'){
  for(const c of npcs.slice(0,40)){world.forcePlace([c.id],'academy-plaza');schedule.startAutonomousActivity(c.id,{characterId:c.id,entryId:'ai/lod-preparation/'+c.id,occurrenceId:'ai/lod-preparation/'+c.id,activityId:'idle_wait',targetLocationId:'academy-plaza',priority:20,mandatory:false,interruptible:true,plannedStartTime:at,plannedEndTime:at+10,temporary:true});}
  for(let n=0;n<40;n+=2){for(const [a,b] of [[npcs[n].id,npcs[n+1].id],[npcs[n+1].id,npcs[n].id]]){const old=graph.getRelationship(a,b),patch={affection:70,trust:70,intimacy:70};if(old)graph.updateRelationship(a,b,patch);else graph.createRelationship({sourceCharacterId:a,targetCharacterId:b,...patch,relationshipTypeIds:['relation-friend']});}interactions.request(npcs[n].id,npcs[n+1].id,'friendly_chat');preparedRequests++;}
 }
 if(scenario==='world-events')events.requestEvent('rival-challenge',{actorId:npcs[0].id,targetId:npcs[1].id,force:true});
 ai=m.createNpcAiEngine(motivation,{seed,relationships:graph,interactions,knowledge,worldEvents:events,autoConnect:false});
 const lod=m.createNpcSimulation(ai,{seed,autoConnect:false});lod.setEnabled(enabled);lod.connect();ai.connect();
 return {world,graph,schedule,motivation,effects,interactions,knowledge,events,ai,lod,preparedRequests};
}
const results=[];
for(const scenario of selected){if(!['nearby-class','remote-class','remote-social','exam-month','world-events'].includes(scenario))throw Error('시나리오 오류');
 for(let run=0;run<runs;run++)for(const enabled of (run%2?[true,false]:[false,true])){
  const s=fixture(scenario,enabled),before={decisions:s.ai.getStatistics().decisions,relationships:s.graph.getRecords(),memories:s.knowledge.getStatistics()},start=performance.now(),result=s.world.advanceTime(minutes),elapsedMs=performance.now()-start;
  assert.deepEqual(result.listenerErrors,[]);assert.equal(result.elapsedMinutes,minutes);assert.equal(s.ai.getStatistics().total,100);
  const after=s.graph.getRecords(),old=new Map(before.relationships.map(r=>[r.sourceCharacterId+'/'+r.targetCharacterId,JSON.stringify(r)]));
  const row={scenario,enabled,run,minutes,npcs:100,elapsedMs,preparedRequests:s.preparedRequests,ai:s.ai.getStatistics(),newDecisions:s.ai.getStatistics().decisions-before.decisions,schedule:s.schedule.getStatistics(),events:s.events.getStatistics(),effects:s.effects.getStatistics(),interactions:s.interactions.getStatistics(),memories:s.knowledge.getStatistics(),relationshipRecords:after.length,relationshipChanges:after.filter(r=>old.get(r.sourceCharacterId+'/'+r.targetCharacterId)!==JSON.stringify(r)).length,lod:s.lod.getStatistics(),heapMiB:process.memoryUsage().heapUsed/2**20};
  results.push(row);console.log(JSON.stringify({scenario,enabled,run,ms:Math.round(elapsedMs),newDecisions:row.newDecisions,lod:row.lod.counts}));
 }
}
const report={bundleSha256:createHash('sha256').update(await readFile(directory+'/engine.mjs')).digest('hex'),environment:{node:process.version,os:os.platform()+' '+os.release(),cpu:os.cpus()[0].model,logicalCpus:os.cpus().length},seed,minutes,runs,scope:'Engine only. All 100 NPCs registered in the same Utility AI; enabled precision policy changes micro decisions. All physical schedules, shared interactions, outcomes, memories and world events remain connected. Exam-month is not actual grading/exam gameplay. Fresh world, not 10-year proof.',results};
await writeFile(directory+'/results.json',JSON.stringify(report,null,2));
