import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {spawnSync,execFileSync} from 'node:child_process';
import {cpus,availableParallelism,release} from 'node:os';
import {Session} from 'node:inspector';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

// Diagnostics only: all engines stay enabled. Each sample is an isolated fresh world.
// No daily/weekly extrapolation is reported as an actual measurement.
const args=process.argv.slice(2),arg=(key,fallback)=>args.includes(key)?args[args.indexOf(key)+1]:fallback;
const minutes=Number(arg('--minutes','60')),runs=Number(arg('--runs','2'));
assert(Number.isInteger(minutes)&&minutes>=1&&minutes<=(args.includes('--extended')?480:60),'Short diagnostic: 1..60 game minutes; explicit --extended permits at most 8 hours');
assert(Number.isInteger(runs)&&runs>=1&&runs<=3,'1..3 independent samples only');
const folder=arg('--directory','test-results/academy-performance'),bundle=arg('--bundle','.build-projects/academy-performance.mjs');
const scenarios={
 classes:{name:'수업 주간의 오전 수업 구간',date:{year:427,month:3,day:1,hour:8,minute:20}},
 social:{name:'교류가 많은 주간의 자유시간 구간',date:{year:427,month:3,day:1,hour:19},place:'academy-plaza'},
 exams:{name:'시험 월 일정 안내 구간 (실제 시험·행사 실행은 아님)',date:{year:427,month:5,day:1,hour:7,minute:59}},
 events:{name:'세계 이벤트가 활성화된 훈련 구간',date:{year:427,month:3,day:1,hour:16},place:'academy-arena',event:'rival-challenge'},
};
const selected=arg('--scenarios',Object.keys(scenarios).join(',')).split(',');
assert(selected.every(key=>Object.hasOwn(scenarios,key)),'Unknown scenario');
const labels={0:'movement',10:'schedule',20:'motivation',25:'interactions',26:'effects',28:'memory',29:'world-events',30:'AI'};
const difference=(a,b)=>Object.fromEntries(Object.keys(b).filter(k=>typeof b[k]==='number'&&typeof a[k]==='number').map(k=>[k,b[k]-a[k]]));

if(args.includes('--sample')){
 const scenarioId=arg('--sample'),scenario=scenarios[scenarioId],m=await import('../'+bundle);
 assert(scenario,'Unknown sample');
 const seed='performance-v1.1',batch=m.generateNpcs({count:100,seed,academyStudent:true,academyYear:'random',specializationId:'random',growthType:'random'},m.npcGenerationContext);
 assert.equal(batch.results.length,100);assert(batch.results.every(r=>r.valid));
 const chars=batch.results.map(r=>{const c=m.prepareScheduleDemoCharacter(r.character,'student');if(scenario.place)c.location.currentLocationId=scenario.place;return c;});
 const at=m.toAbsoluteMinute(scenario.date),clock=m.createGameClock(at),timeline={};
 const subscribe=clock.subscribeTimeline;
 clock.subscribeTimeline=p=>{
  const name=labels[p.priority]??String(p.priority),row=timeline[name]??={probes:0,calls:0,processMs:0,beforeStepCalls:0,beforeStepMs:0};
  return subscribe({...p,nextEventTime:(...a)=>{row.probes++;return p.nextEventTime(...a);},processAt:t=>{row.calls++;const start=performance.now();try{return p.processAt(t);}finally{row.processMs+=performance.now()-start;}},...p.beforeStep?{beforeStep:(...a)=>{row.beforeStepCalls++;const start=performance.now();try{return p.beforeStep(...a);}finally{row.beforeStepMs+=performance.now()-start;}}}:{}});
 };
 const world=m.createLocationWorld({clock,characters:chars,allowForcePlacement:true}),graph=m.createRelationshipGraph(chars.map(c=>c.id),batch.relationships.records);
 const reads={};let measuring=false;
 for(const key of ['getCharacter','getCharacterReadSnapshot','getCharacters','getCharacterLocation','getCharactersAtLocation','getCharacterIdsAtLocation','findRoute'])if(typeof world[key]==='function'){const original=world[key];world[key]=(...a)=>{if(measuring)reads[key]=(reads[key]??0)+1;return original(...a);};}
 if(scenarioId==='social')for(let n=0;n<100;n+=2){const a=chars[n].id,b=chars[n+1].id;for(const [sourceCharacterId,targetCharacterId] of [[a,b],[b,a]]){const changes={affection:70,trust:70,intimacy:70,respect:50};if(graph.getRelationship(sourceCharacterId,targetCharacterId))graph.updateRelationship(sourceCharacterId,targetCharacterId,changes);else graph.createRelationship({sourceCharacterId,targetCharacterId,...changes,relationshipTypeIds:['relation-friend']});}}
 let ai;
 const schedule=m.createNpcScheduleEngine(world),motivation=m.createMotivationEngine(schedule,{relationships:graph}),effects=m.createActionEffectsEngine(motivation,graph),interactions=m.createInteractionEngine(motivation,graph,effects),memory=m.createNpcMemoryEngine(motivation,graph,effects,interactions),events=m.createWorldEventEngine(motivation,graph,effects,interactions,memory,{seed,wake:ids=>ids.forEach(id=>ai?.requestReevaluation(id))});
 let preparedInteractionRequests=0;
 if(scenarioId==='social'){
  // Explicit initial meeting scenario, not a freeze: interruptible preparation,
  // real requests/consent/outcomes and all AI decisions remain enabled.
  for(const c of chars.slice(0,40)){world.forcePlace([c.id],'academy-plaza');schedule.startAutonomousActivity(c.id,{characterId:c.id,entryId:'ai/perf-preparation/'+c.id,occurrenceId:'ai/perf-preparation/'+c.id,activityId:'idle_wait',targetLocationId:'academy-plaza',priority:20,mandatory:false,interruptible:true,plannedStartTime:at,plannedEndTime:at+10,temporary:true});}
  for(let n=0;n<40;n+=2){interactions.request(chars[n].id,chars[n+1].id,'friendly_chat');preparedInteractionRequests++;}
 }
 if(scenario.event)events.requestEvent(scenario.event,{actorId:chars[0].id,targetId:chars[1].id,force:true});
 ai=m.createNpcAiEngine(motivation,{seed,relationships:graph,interactions,knowledge:memory,worldEvents:events});
 assert.equal(ai.getStatistics().total,100);
 const stats=()=>({ai:ai.getStatistics(),schedule:schedule.getStatistics(),effects:effects.getStatistics(),memory:memory.getStatistics(),events:events.getStatistics(),interactions:interactions.getStatistics()});
 const before=stats(),oldRelations=graph.getRecords(),oldTimeline=structuredClone(timeline);
 if(args.includes('--save-initial'))await writeFile(arg('--save-initial'),JSON.stringify({version:'ai-sandbox-v1',worldEvents:events.save(),knowledge:memory.save(),outcomes:effects.save(),interactions:interactions.save(),world:world.snapshot(),execution:schedule.saveExecution(),relationships:graph.getRecords(),motivation:motivation.save(),ai:ai.save()}));
 let profiler,profile;
 const post=(method,params={})=>new Promise((resolve,reject)=>profiler.post(method,params,(error,result)=>error?reject(error):resolve(result)));
 if(args.includes('--profile')){profiler=new Session();profiler.connect();await post('Profiler.enable');await post('Profiler.start');}
 const stepMinutes=Number(arg('--step-minutes',String(minutes)));assert(Number.isInteger(stepMinutes)&&stepMinutes>0&&stepMinutes<=minutes);
 const begin=performance.now(),cpuBegin=process.cpuUsage();measuring=true;for(let left=minutes;left>0;){const step=Math.min(left,stepMinutes);world.advanceTime(step);left-=step;}measuring=false;const elapsedMs=performance.now()-begin,cpu=process.cpuUsage(cpuBegin);
 if(profiler){profile=(await post('Profiler.stop')).profile;profiler.disconnect();}
 assert.equal(clock.getSnapshot(),at+minutes);assert.deepEqual(events.getDiagnostics(),[]);assert.deepEqual(memory.getDiagnostics(),[]);
 assert(world.getCharacters().every(c=>world.catalog.nodes.has(c.location.currentLocationId)));
 const after=stats(),changes=Object.fromEntries(Object.keys(before).map(k=>[k,difference(before[k],after[k])]));
 const previous=new Map(oldRelations.map(r=>[JSON.stringify([r.sourceCharacterId,r.targetCharacterId]),r])),current=graph.getRecords();
 let changedPairs=0,addedPairs=0,absoluteEmotionChange=0;
 for(const r of current){const old=previous.get(JSON.stringify([r.sourceCharacterId,r.targetCharacterId]));if(!old){addedPairs++;continue;}const amount=['affection','trust','intimacy','respect','fear'].reduce((sum,k)=>sum+Math.abs(r[k]-old[k]),0);if(amount)changedPairs++;absoluteEmotionChange+=amount;}
 const measuredTimeline=Object.fromEntries(Object.entries(timeline).map(([key,row])=>[key,difference(oldTimeline[key],row)]));
 const result={scenarioId,name:scenario.name,seed,npcCount:100,allAiEnabled:true,start:scenario.date,requestedMinutes:minutes,actualMinutes:clock.getSnapshot()-at,interventionScenario:false,preparedInteractionRequests,profiled:!!profile,elapsedMs,cpuMs:(cpu.user+cpu.system)/1000,changes,relationships:{before:oldRelations.length,after:current.length,addedPairs,changedPairs,absoluteEmotionChange},timeline:measuredTimeline,reads,retainedMemory:after.memory.memories,heapMiB:Math.round(process.memoryUsage().heapUsed/1048576)};
 const finalState={version:'ai-sandbox-v1',worldEvents:events.save(),knowledge:memory.save(),outcomes:effects.save(),interactions:interactions.save(),world:world.snapshot(),execution:schedule.saveExecution(),relationships:graph.getRecords(),motivation:motivation.save(),ai:ai.save()},serialized=JSON.stringify(finalState);
 result.stateSha256=createHash('sha256').update(serialized).digest('hex');
 if(args.includes('--save-final'))await writeFile(arg('--save-final'),serialized);
 if(profile){
  const text=await readFile(bundle,'utf8'),lines=text.split('\n');let source='bundle';const sourceAt=lines.map(line=>{if(line.startsWith('// src/'))source=line.slice(3);return source;});
  const nodes=new Map(profile.nodes.map(node=>[node.id,node])),functions=new Map(),sources=new Map();let total=0;
  for(let n=0;n<(profile.samples??[]).length;n++){const node=nodes.get(profile.samples[n]),delta=profile.timeDeltas[n]??0,frame=node.callFrame,url=frame.url,src=url.includes('academy-performance.mjs')?(sourceAt[frame.lineNumber]??'bundle'):(url||frame.functionName||'native');const name=(frame.functionName||'(anonymous)')+' @ '+src;functions.set(name,(functions.get(name)??0)+delta);sources.set(src,(sources.get(src)??0)+delta);total+=delta;}
  const ranked=map=>[...map].sort((a,b)=>b[1]-a[1]).slice(0,18).map(([name,us])=>({name,selfMs:us/1000,percent:Math.round(us/total*1000)/10}));
  result.profile={sampledMs:total/1000,functions:ranked(functions),sources:ranked(sources)};
  await writeFile(`${folder}/${scenarioId}.cpuprofile`,JSON.stringify(profile));
 }
 await writeFile(arg('--output'),JSON.stringify(result,null,2));
 console.log(`${scenarioId}: ${elapsedMs.toFixed(1)}ms / ${minutes} game minutes; decisions ${changes.ai.decisions}; world events ${changes.events.created}`);
}else{
 await mkdir(folder,{recursive:true});await mkdir('.build-projects',{recursive:true});
 const previous=args.includes('--resume')?JSON.parse(await readFile(`${folder}/report.json`,'utf8')):undefined;
 if(previous)assert.equal(previous.minutes,minutes,'Cannot mix different window lengths');
 else await build({stdin:{contents:[['worldEvents','systems'],['npcAi','systems'],['npcMemory','systems'],['interactions','systems'],['actionEffects','systems'],['motivationEngine','systems'],['npcSchedules','systems'],['locationWorld','systems'],['relationships','systems'],['gameTime','systems'],['calendar','systems'],['npcGeneration','systems'],['npcGenerationContext','systems'],['scheduleDemo','systems']].map(([name,dir])=>`export * from './src/AcademySurvival/${dir}/${name}';`).join('\n'),resolveDir:process.cwd()},bundle:true,platform:'node',format:'esm',outfile:bundle});
 const bundleSha256=createHash('sha256').update(await readFile(bundle)).digest('hex');
 if(previous)assert.equal(previous.bundleSha256,bundleSha256,'Retained bundle changed or hash missing; do not merge different engine builds');
 const results=(previous?.results??[]).filter(row=>!selected.includes(row.scenarioId)),failures=(previous?.failures??[]).filter(row=>!selected.includes(row.scenario));
 scenarioLoop:for(const scenario of selected)for(let run=0;run<runs+(args.includes('--profile')?1:0);run++){
  const profile=run===runs,path=`${folder}/${scenario}-${profile?'profile':run+1}.json`;
  const sample=spawnSync(process.execPath,[fileURLToPath(import.meta.url),'--sample',scenario,'--minutes',String(minutes),'--directory',folder,'--bundle',bundle,'--output',path,...args.includes('--extended')?['--extended']:[],...args.includes('--snapshots')?['--save-final',`${folder}/${scenario}-${run}-state.json`]:[],...profile?['--profile']:[]],{encoding:'utf8',timeout:45000,maxBuffer:1024*1024});
  await writeFile(`${folder}/${scenario}-${run}.log`,sample.stdout+'\n'+sample.stderr+(sample.error?'\n'+sample.error.message:''));
  if(sample.status!==0){failures.push({scenario,run,profile,status:sample.status,signal:sample.signal,error:sample.error?.message,log:`${folder}/${scenario}-${run}.log`});console.log(`${scenario}: failed/budget exceeded; see log`);break scenarioLoop;}
  results.push(JSON.parse(await readFile(path,'utf8')));process.stdout.write(sample.stdout);
 }
 const summary=[...new Set([...results.map(row=>row.scenarioId),...failures.map(row=>row.scenario)])].map(scenario=>{const samples=results.filter(r=>r.scenarioId===scenario&&!r.profiled),times=samples.map(r=>r.elapsedMs);return {scenario,samples:times.length,meanMs:times.length?times.reduce((a,b)=>a+b,0)/times.length:null,slowestMs:times.length?Math.max(...times):null,oneHourTargetMs:minutes===60?300:null,oneHourWarningExceeded:times.length?minutes===60&&times.some(t=>t>1000):null};});
 // Attribute clone self-time to its nearest caller in the retained engine bundle.
 for(const result of results.filter(row=>row.profiled)){
  const profile=JSON.parse(await readFile(`${folder}/${result.scenarioId}.cpuprofile`,'utf8')),nodes=new Map(profile.nodes.map(n=>[n.id,n])),parents=new Map(),origins=new Map();let total=0;
  for(const node of profile.nodes)for(const child of node.children??[])parents.set(child,node.id);
  for(let n=0;n<profile.samples.length;n++){const node=nodes.get(profile.samples[n]),delta=profile.timeDeltas[n]??0;total+=delta;if(node.callFrame.functionName!=='structuredClone')continue;let parent=parents.get(node.id);while(parent){const frame=nodes.get(parent).callFrame;if(frame.url.includes('academy-performance.mjs')){const name=frame.functionName||'(anonymous)';origins.set(name,(origins.get(name)??0)+delta);break;}parent=parents.get(parent);}}
  result.profile.cloneOrigins=[...origins].sort((a,b)=>b[1]-a[1]).slice(0,12).map(([name,us])=>({name,selfMs:us/1000,percent:Math.round(us/total*1000)/10}));
 }
 const report={version:'performance-diagnostic-v1.1',createdAt:new Date().toISOString(),head:execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),bundleSha256,environment:{node:process.version,platform:process.platform,arch:process.arch,osRelease:release(),cpu:cpus()[0]?.model,logicalCpus:availableParallelism()},scope:'Node headless fresh-world engine advance only. No DOM/render/save/setup timing. Full AI, schedule, movement, motivation, relationships, interactions, effects, memory, world events enabled. No 8h/day/week or intervention performance claims.',minutes,summary,results,failures};
 await writeFile(`${folder}/report.json`,JSON.stringify(report,null,2));
 console.log(JSON.stringify(summary));if(failures.length)process.exitCode=1;
}
