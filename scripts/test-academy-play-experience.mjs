import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {mkdir,writeFile} from 'node:fs/promises';
await mkdir('test-results/academy-ui-experience',{recursive:true});
await build({stdin:{contents:"export * from './src/AcademySurvival/systems/playSession';export * from './src/AcademySurvival/systems/playerUi';export * from './src/AcademySurvival/types/player';",resolveDir:process.cwd()},bundle:true,platform:'node',format:'esm',outfile:'test-results/academy-ui-experience/engine.mjs'});
const m=await import('../test-results/academy-ui-experience/engine.mjs');
let policy=m.DEFAULT_PLAYER_POLICY;
for(const key of ['studyWeight','trainingWeight','socialWeight','restWeight'])for(let value=0;value<=100;value++){
 const next=m.rebalancePolicy(policy,key,value);m.assertPlayerPolicy(next);assert.equal(next[key],value);assert.notEqual(next,policy);policy=next;
}
assert.equal(m.recordTone({kind:'information',importance:90,message:'사건'}).id,'important');
assert.equal(m.recordTone({kind:'movement',message:'출입 거부'}).id,'warning');
const session=m.createPlaySession({seed:'experience-ui',count:3,player:{name:'아렌',gender:'미설정',focus:'balanced'}}),world=session.world.runtime.world;
session.playerCommand(l=>l.setMode('manual'));
const npc=world.getCharacters().find(c=>c.kind!=='player');
session.world.command({type:'ai_pause',characterId:npc.id});
for(const id of [session.playerId,npc.id]){
 session.world.command({type:'force_place',characterId:id,locationId:'academy-arena'});
 for(const needId of ['fatigue','hunger','sleepiness','safety'])session.world.command({type:'need',characterId:id,needId,value:0});
 for(const e of session.world.runtime.schedule.getUpcomingActivities(id))session.world.runtime.schedule.cancelScheduleEntry(id,e.entryId);
}
const request=session.world.runtime.interactions.request(npc.id,session.playerId,'train_together');assert.equal(request.status,'proposed',request.failureReason);
session.life.detect();assert(session.life.getState().pending.some(p=>p.interactionId===request.id));
const raw=new Map(),storage={getItem:key=>raw.get(key)??null,setItem:(key,value)=>raw.set(key,value)},save=session.save(storage,1,'2026-10-24T00:00:00Z');
await writeFile('test-results/academy-ui-experience/request-save.json',JSON.stringify(save));
await writeFile('test-results/academy-ui-experience/fixture.json',JSON.stringify({npcId:npc.id,npcName:npc.name,requestId:request.id}));
const restore=m.createPlaySession({save:JSON.parse(JSON.stringify(save))});assert.deepEqual(restore.life.getState().pending,session.life.getState().pending);restore.playerCommand(l=>l.respond(request.id,'accept'));assert.equal(restore.world.runtime.interactions.getInstance(request.id).status,'active');
restore.dispose();session.playerCommand(l=>l.respond(request.id,'decline'));assert.equal(session.world.runtime.interactions.getInstance(request.id).status,'rejected');session.dispose();
console.log('Experience contracts passed: 404 slider redistributions, zero/full allocation, exact sum/range, record severity, real incoming joint-training request, save/load and independent accept/decline.');
