import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve,join,basename,dirname} from 'node:path';
import {pathToFileURL} from 'node:url';
import {getRegistry,selectValidation,assertRegistry,gitChanged} from './academy-validation-registry.mjs';
import {parseOptions,validationFingerprint,shortReport} from './academy-validation.mjs';
import {bundleScenarios} from './academy-scenario.mjs';
import {runTask} from './academy-check.mjs';
import {environment} from './academy-check.mjs';
assert.deepEqual(environment({}, {PATH:'keep',WORLD_EVENT_STRESS:'1',INTERACTION_BATCH:'1',ACADEMY_BROWSER_CASE:'partial'}),{PATH:'keep'});
const registry=await getRegistry();assert(await assertRegistry(registry)>40);
for(const profile of ['quick','standard','extended','full']){const p=await selectValidation({profile,registry});assert.equal(p.profile,profile);assert(p.tests.length&&p.scenarios.length);if(profile==='full'){assert(p.tests.some(t=>t.requiresBrowser));assert(p.scenarios.includes('large-integration'));}}
const social=await selectValidation({changed:['src/AcademySurvival/systems/interactions.ts'],registry});
for(const group of ['interactions','relationships','memory'])assert(social.groups.includes(group));assert(!social.tests.some(t=>t.requiresBrowser));
assert(!social.tests.some(t=>t.id==='knowledge'),'composition-root consumer must not select unrelated knowledge tests');
const central=await selectValidation({changed:['src/AcademySurvival/systems/gameTime.ts'],registry});assert.equal(central.profile,'extended');assert(central.tests.length>10);
const ui=await selectValidation({changed:['src/AcademySurvival/components/MemoryTester.tsx'],registry});assert(ui.tests.some(t=>t.requiresBrowser&&t.systems.includes('memory')));
const fallback=await selectValidation({analysisError:'fixture-unreadable-git',registry});assert.equal(fallback.profile,'extended');assert(fallback.tests.length>10);assert(fallback.scenarios.length);
const unknown=await selectValidation({changed:['src/AcademySurvival/systems/newUnregistered.ts'],registry});assert(unknown.uncertain&&unknown.tests.length>10);
assert.throws(()=>gitChanged({base:'fixture-nonexistent-ref-DO-NOT-CREATE'}));
for(const args of [['--profile','bogus'],['--count','0'],['--minutes','0'],['--shell','x'],['--seed'],['--run','--plan']])assert.throws(()=>parseOptions(args));
const dir=await mkdtemp(join(tmpdir(),'academy-validation-'));
try{
 await mkdir(join(dir,'src/AcademySurvival'),{recursive:true});await mkdir(join(dir,'scripts'));
 await writeFile(join(dir,'src/AcademySurvival/fixture.ts'),'one');const first=await validationFingerprint({}, {},dir);await writeFile(join(dir,'src/AcademySurvival/fixture.ts'),'two');assert.notEqual(await validationFingerprint({}, {},dir),first,'dirty content invalidates reuse');
 await writeFile(join(dir,'timeout.mjs'),'setInterval(()=>{},1000)');const timed=await runTask({script:'timeout.mjs',env:{},timeoutMs:150},dir,dir);assert.match(timed.error,/timeout/);
}finally{assert.equal(dirname(resolve(dir)),resolve(tmpdir()));assert(basename(dir).startsWith('academy-validation-'));await rm(dir,{recursive:true,force:true});}
const bundle=resolve('test-results/academy-validation-fixtures/engine.mjs');await bundleScenarios(bundle);const m=await import(pathToFileURL(bundle).href);
const sample=m.runValidationScenario('world-clock-basic',{count:3,minutes:10}).snapshot,before=JSON.stringify(sample);assert.deepEqual(m.checkWorldInvariants(sample),[]);assert.equal(JSON.stringify(sample),before);
const corrupt=structuredClone(sample),c=corrupt.world.world.characters[0],now=corrupt.world.world.absoluteMinute;
corrupt.world.execution.current.push(...['sleep','attend_class'].map(activityId=>({characterId:c.id,occurrenceId:'fixture/'+activityId,activityId,targetLocationId:c.location.currentLocationId,status:'active',actualStartTime:now,lateMinutes:0,absent:false,resumes:0})));
const conflict=m.checkWorldInvariants(corrupt).find(i=>i.code==='ACTIVITY_CONFLICT');assert(conflict);assert(conflict.characterIds.includes(c.id));assert.equal(conflict.worldTime,now);assert(conflict.activityIds.length===2);
assert(m.checkWorldInvariants(sample,now+1).some(i=>i.code==='TIME_REVERSED'));
assert.equal(m.firstWorldDifference({a:1},{a:2}).path,'$.a');
for(const id of ['social-commitment','academy-registration','academy-exam','player-autolife','world-clock-basic','npc-movement','npc-needs','npc-ai','npc-interaction','memory-information','relationship','world-events','causal-events','step-vs-jump','save-load','academy-day']){
 const {result}=m.runValidationScenario(id,{count:3,minutes:60});assert.equal(result.status,'passed',id+': '+JSON.stringify(result.issues));
}
const failureA=m.runValidationScenario('npc-interaction',{seed:'repro-failure',count:1,minutes:10}).result,failureB=m.runValidationScenario('npc-interaction',{seed:'repro-failure',count:1,minutes:10}).result;
assert.equal(failureA.status,'failed');assert.deepEqual(failureA.issues,failureB.issues);
assert.equal(m.runValidationScenario('culture-activity').result.status,'not_available');
const text=shortReport({profile:'quick',status:'failed',summary:{passed:1,failed:1,skipped:0,reused:0},warnings:[],elapsedMs:1,results:[{id:'fixture',status:'failed',scenario:failureA,reproduce:'fixture-command'}],reportPath:'fixture.json'});assert(text.includes('SCENARIO_SIZE')&&text.length<1200);
console.log(`Validation infrastructure passed: ${registry.length} registered tests; impact/UI/fallback/risk selection, timeout, dirty hash, read-only conflict details, deterministic failure, actual scenario/step/save contracts, unavailable features and compact reporting.`);
