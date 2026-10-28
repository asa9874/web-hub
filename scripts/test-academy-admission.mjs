import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {mkdir,writeFile} from 'node:fs/promises';
import {performance} from 'node:perf_hooks';
const dir='test-results/academy-admission';await mkdir(dir,{recursive:true});
await build({stdin:{contents:"export * from './src/AcademySurvival/systems/admission';export * from './src/AcademySurvival/systems/playSession';export * from './src/AcademySurvival/systems/endingCollection';export * from './src/AcademySurvival/systems/playerLife';export * from './src/AcademySurvival/systems/calendar';export * from './src/AcademySurvival/systems/npcGenerationContext';",resolveDir:process.cwd()},bundle:true,platform:'node',format:'esm',outfile:dir+'/engine.mjs'});
const m=await import('../'+dir+'/engine.mjs'),clone=v=>JSON.parse(JSON.stringify(v));
const profile=(difficulty='ordinary',direction='sword',roll=0)=>({version:'academy-start-v1',difficulty,direction,roll});
const rows=[],before=performance.now();let failureSeed;
for(const difficulty of Object.keys(m.STARTING_DIFFICULTIES))for(const direction of Object.keys(m.STARTING_DIRECTIONS))for(let i=0;i<5;i++){
 const p=profile(difficulty,direction),seed='start-audit-'+i,a=m.generateStartingCharacter(seed,p),b=m.generateStartingCharacter(seed,p),assessment=m.evaluateAdmission(a.character);
 assert.deepEqual(a,b,'same seed/profile replay');assert(a.valid);assert(a.attempts<=16);assert.equal(m.npcGenerationContext.calculateImpact(a.character).impact,a.impact.impact);assert.deepEqual(m.evaluateAdmission(a.character),assessment);assert.equal(assessment.passed,assessment.score>=22);assert(a.character.traitIds.length>=1);
 rows.push({difficulty,direction,seed,impact:a.impact.impact,attempts:a.attempts,targetMet:a.targetMet,score:assessment.score,classId:assessment.classId??'failed',gifts:a.character.giftIds.length});
 if(difficulty==='ordinary')assert(assessment.passed,'ordinary sample should not randomly fail');
 if(difficulty==='bottom'&&direction==='sword'&&!assessment.passed)failureSeed=seed;
}
failureSeed='probe-2';assert.equal(m.evaluateAdmission(m.generateStartingCharacter(failureSeed,profile('bottom')).character).passed,false,'known real low-preparation candidate');
assert.deepEqual([21,22,29,38,48,60,72,85].map(m.admissionClassForScore),[undefined,'F','E','D','C','B','A','S']);
assert.throws(()=>m.generateStartingCharacter('x',{...profile(),roll:-1}));assert.throws(()=>m.generateStartingCharacter('x',{...profile(),difficulty:'toString'}));
const original=m.generateStartingCharacter('equal',profile()),rerolled=m.generateStartingCharacter('equal',profile('ordinary','sword',1));assert.notDeepEqual(original.character.stats,rerolled.character.stats);
// Same rule for every character: name/kind do not change examination marks.
const candidate=clone(original.character),npc=m.evaluateAdmission(candidate);candidate.kind='player';candidate.name='이름만 변경';assert.deepEqual(m.evaluateAdmission(candidate),npc);
const extreme=clone(candidate);for(const id of Object.keys(extreme.stats))extreme.stats[id]=180;for(const id of Object.keys(extreme.proficiencyRanks))extreme.proficiencyRanks[id]=9;assert.equal(m.evaluateAdmission(extreme).classId,'S');assert(extreme.stats.STR>100,'score display caps do not mutate stats');
const empty=new Map(),storage={getItem:k=>empty.get(k)??null,setItem:(k,v)=>empty.set(k,v)},time=m.DEFAULT_ABSOLUTE_MINUTE;
const input={name:'입학 검증',gender:'미설정',focus:'balanced',startingProfile:profile()};
const session=m.createPlaySession({seed:'admission-session',enableFixedStudents:false,count:3,player:input});
assert(session.getAdmission().player.passed);assert(session.getAdmission().placements.length>=3);for(const p of session.getAdmission().placements)assert.equal(session.world.runtime.world.getCharacter(p.characterId).classId,p.classId);
const saved=session.save(storage,1),restored=m.createPlaySession({save:clone(saved)});assert.deepEqual(restored.getAdmission(),session.getAdmission());assert.deepEqual(clone(restored.world.snapshot().world.world.characters),clone(session.world.snapshot().world.world.characters));
const malformed=clone(saved);malformed.admission.placements[0].classId='Z';assert.throws(()=>m.createPlaySession({save:malformed}),/입학/);
const missing=clone(saved);missing.admission=null;assert.throws(()=>m.createPlaySession({save:missing}),/입학/);
const old=clone(saved);delete old.admission;const legacy=m.createPlaySession({save:old});assert.equal(legacy.getAdmission(),undefined,'old saves are not re-examined');
assert.throws(()=>m.createPlaySession({seed:failureSeed,enableFixedStudents:false,count:3,player:{...input,startingProfile:profile('bottom')}}),/입학 기준 미달/);
// No world or playable save is created for failed admission; collection is separate and idempotent.
const oldSlot=storage.getItem(m.PLAY_SLOT_PREFIX+'1');m.discoverEnding(storage,'bad-00','failed-run',time,'2026-10-27T00:00:00Z');m.discoverEnding(storage,'bad-00','another-run',time,'2026-10-28T00:00:00Z');assert.equal(m.readEndingCollection(storage).discoveries.length,1);assert.equal(m.readEndingCollection(storage).discoveries[0].runId,'failed-run');assert.equal(storage.getItem(m.PLAY_SLOT_PREFIX+'1'),oldSlot);
const next=m.createPlaySession({seed:'another-new-life',enableFixedStudents:false,count:3,player:input});assert.equal(m.readEndingCollection(storage).discoveries.length,1,'new game retains discoveries');
assert.equal(m.recordLongLifeMilestone(storage,'long-life',time+3600*1440-1),false);assert.equal(m.recordLongLifeMilestone(storage,'long-life',time+3600*1440),true);assert.equal(m.readEndingCollection(storage).discoveries.length,2,'ten years is a collection milestone, not game termination');
storage.setItem(m.ENDING_COLLECTION_KEY,'broken');assert.throws(()=>m.discoverEnding(storage,'bad-00','retry',time));assert.equal(storage.getItem(m.ENDING_COLLECTION_KEY),'broken','corrupt data is not silently erased');
const elapsed=performance.now()-before;for(const s of [session,restored,legacy,next])s.dispose();
await writeFile(dir+'/results.json',JSON.stringify({passed:true,generationSamples:rows.length,rows,contractMs:elapsed,failureSeed,savedBytes:JSON.stringify(saved).length,scope:'100 generation samples × replay, 3-NPC actual world save/restore; no long simulation or performance claim'},null,2));
console.log('PASS admission: 100 generation samples + replay, real session/save/legacy/failure and separate ending collection. '+dir+'/results.json');
