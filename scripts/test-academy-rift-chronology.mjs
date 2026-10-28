import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {mkdir,writeFile} from 'node:fs/promises';
const dir='test-results/academy-rift-chronology';await mkdir(dir,{recursive:true});
await build({stdin:{contents:["export * from './src/AcademySurvival/systems/aiSandbox';","export * from './src/AcademySurvival/systems/riftCrisis';","export * from './src/AcademySurvival/systems/calendar';","export * from './src/AcademySurvival/data/riftCrisis';","export * from './src/AcademySurvival/systems/riftChronology';"].join('\n'),resolveDir:process.cwd()},bundle:true,platform:'node',format:'esm',outfile:dir+'/engine.mjs'});
const m=await import('../'+dir+'/engine.mjs'),json=x=>JSON.parse(JSON.stringify(x)),date=(year,month=1,day=1)=>m.toAbsoluteMinute({year,month,day,hour:8}),at=date(427,3),end=m.toAbsoluteMinute({year:427,month:12,day:30,hour:23,minute:59}),begin=performance.now();
function fresh(seed){const r=m.createFreshAiSandbox({seed,absoluteMinute:at,characters:[],definitions:m.riftWorldDefinitions});r.connect(false);return r;}
function until(r,target,step=7*1440){while(r.world.clock.getSnapshot()<target)r.world.advanceTime(Math.min(step,target-r.world.clock.getSnapshot()));}
const a=fresh('chronicle-427'),b=fresh('chronicle-427');until(a,end);until(b,end,1440);
assert.deepEqual(json(a.ai.getRiftCrisis().save()),json(b.ai.getRiftCrisis().save()));assert.deepEqual(json(a.worldEvents.save()),json(b.worldEvents.save()));
const first=a.ai.getRiftCrisis().save(),evidence=first.chronicle.preludes.filter(p=>p.status==='recorded');assert.equal(evidence.length,5);assert(first.sites.every(s=>!['stable','gate'].includes(s.stage)&&s.damage===0&&s.knownTruthIds.length===0));assert(first.history.every(h=>!['RIFT-07','RIFT-10','RIFT-11','RIFT-17'].includes(h.code)));assert(evidence.every(p=>p.at<=p.deadlineAt&&p.measurement&&p.signature&&p.worldEventId));
for(const p of evidence)assert(a.worldEvents.save().instances.some(e=>e.id===p.worldEventId));
// Save/resume must retain pending/recorded jobs and the actual source graph.
const snapshot=m.snapshotAi(a.ai,a.graph),restored=m.createAiSandbox(json(snapshot),{worldEventDefinitions:m.riftWorldDefinitions});restored.connect(false);
for(const s of a.ai.getRiftCrisis().save().sites)a.ai.getRiftCrisis().setPolicy(s.id,'investigate');for(const s of restored.ai.getRiftCrisis().save().sites)restored.ai.getRiftCrisis().setPolicy(s.id,'investigate');
until(a,date(430));until(restored,date(430),3*1440);assert.deepEqual(json(a.ai.getRiftCrisis().save()),json(restored.ai.getRiftCrisis().save()));
const later=a.ai.getRiftCrisis().save(),links=later.chronicle.preludes.filter(p=>p.researchAt);assert(links.length>0,'later real signals should match retained observations');for(const p of links){assert(p.researchAt>=date(428));assert(a.worldEvents.save().relations.some(r=>r.sourceEventId===p.worldEventId&&r.targetEventId===p.researchEventId));}
assert.deepEqual(a.ai.getRiftCrisis().diagnose(),[]);
// A late new world creates no fictitious first-year experience or archive.
const late=m.createFreshAiSandbox({seed:'late-chronicle',characters:[],absoluteMinute:date(430),definitions:m.riftWorldDefinitions});late.connect(false);assert(late.ai.getRiftCrisis().save().chronicle.preludes.every(p=>p.status==='expired'));until(late,date(431));assert(late.ai.getRiftCrisis().save().chronicle.preludes.every(p=>!p.researchAt));
// Legacy saves keep their actual past and old progression policy, not silently rewind it.
const legacy=json(snapshot);delete legacy.riftCrisis.chronicle;const old=m.createAiSandbox(legacy,{worldEventDefinitions:m.riftWorldDefinitions});old.connect(false);assert.equal(old.ai.getRiftCrisis().save().chronicle,undefined);assert.deepEqual(old.ai.getRiftCrisis().save().sites,legacy.riftCrisis.sites);old.ai.getRiftCrisis().adoptChronology();assert.deepEqual(old.ai.getRiftCrisis().save().sites,legacy.riftCrisis.sites);assert(old.ai.getRiftCrisis().save().chronicle.preludes.every(p=>p.status==='expired'));old.ai.getRiftCrisis().adoptChronology();assert.equal(old.ai.getRiftCrisis().save().chronicle.preludes.length,5);
// Invalid archival references reject load; no fabricated retroactive evidence.
const bad=json(snapshot);bad.riftCrisis.chronicle.preludes[0].siteId='missing';assert.throws(()=>m.createAiSandbox(bad,{worldEventDefinitions:m.riftWorldDefinitions}),/증거 참조/);
const tampered=json(snapshot);tampered.riftCrisis.chronicle.preludes[0].measurement++;assert.throws(()=>m.createAiSandbox(tampered,{worldEventDefinitions:m.riftWorldDefinitions}),/측정 증거/);
// World clock/crisis continue beyond the chronology guide. This is not a graduation implementation test.
until(late,date(437));assert.equal(m.toImperialDate(late.world.clock.getSnapshot()).year,437);assert.deepEqual(late.ai.getRiftCrisis().diagnose(),[]);
await writeFile(dir+'/results.json',JSON.stringify({passed:true,mode:'regional-aggregate-only',detailedNpcCount:0,fullNpcAi:false,firstYear:{from:'427-03-01',to:'427-12-30 23:59',preludes:evidence.map(p=>({id:p.id,at:m.toImperialDate(p.at),source:p.worldEventId})),siteCount:first.sites.length,damage:first.sites.map(s=>s.damage)},researchBy430:links.length,weekVsDay:true,saveResume:true,noPastFabrication:true,legacyPreserved:true,continuedTo437:true,elapsedMs:Math.round(performance.now()-begin),riftBytes:JSON.stringify(later).length},null,2));
for(const r of [a,b,restored,late,old])r.ai.getRiftCrisis().disconnect();console.log('Rift chronology passed: sparse 427 evidence, later real research/DAG, calendar jumps, save/resume, no retroactive records, legacy compatibility and continued clock beyond 436. Aggregate actors only; no full NPC-year performance claim.');
