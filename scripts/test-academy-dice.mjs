import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {mkdir,writeFile} from 'node:fs/promises';
const dir='test-results/academy-dice';await mkdir(dir,{recursive:true});
await build({stdin:{contents:"export * from './src/AcademySurvival/systems/dicePresentation';export * from './src/AcademySurvival/systems/playSession';",resolveDir:process.cwd()},bundle:true,platform:'node',format:'esm',outfile:dir+'/engine.mjs'});
const m=await import('../'+dir+'/engine.mjs');
for(let luck=-10;luck<=9;luck++){
 const check={id:'check/'+luck,actorId:'player',actionId:'attack',contextId:'fixture',actor:{abilityScore:21,proficiencyScore:10,modifierTotal:3,score:34,appliedModifierIds:[],unsupported:[]},targetScore:35,luckRoll:luck,margin:luck-1,outcome:luck>=1?'success':'failure',success:luck>=1};
 const original=structuredClone(check),view=m.checkDice(check,'검술');assert.equal(view.value,luck+11);assert.equal(Number(view.lines.find(l=>l.label==='최종 내 판정 점수').value),34+luck);assert.deepEqual(check,original);
 const altered=m.checkDice({...check,rawLuckRoll:luck,luckRoll:0},'기프트');assert.equal(altered.value,luck+11);if(luck!==0)assert(altered.lines.some(l=>l.label==='기프트 적용 후 운 보정'&&l.value==='0'));
 const opposed=m.checkDice({...check,targetId:'secret',defender:{score:999,appliedModifierIds:['secret-gift']}},'대항');assert(!JSON.stringify(opposed).includes('secret-gift'));assert(!opposed.lines.some(l=>l.label==='목표 점수'));
}
assert.equal(m.percentileDice('p','추첨',0,'실제 결과').value,1);assert.equal(m.percentileDice('p','추첨',.999999,'실제 결과').value,100);assert.throws(()=>m.percentileDice('p','추첨',1,'결과'));
assert.equal(m.readDiceSettings('broken').frequency,'important');assert.equal(m.readDiceSettings(JSON.stringify({frequency:'result',manual:false,fast:true})).frequency,'result');
assert(!m.isDiceCombatChoice({techniqueId:'surrender'}));
const session=m.createPlaySession({seed:'dice-integrity',count:2,enableFixedStudents:false,player:{name:'주사위 검증',gender:'여성',focus:'combat'}});
let clone;
try{
 const world=session.world.runtime.world,enemy=world.getCharacters().find(c=>c.kind!=='player'&&session.world.runtime.schedule.hasSchedule(c.id));
 session.life.prepareDirectControl();
 for(const id of [session.playerId,enemy.id]){session.world.command({type:'ai_pause',characterId:id});const placed=session.world.command({type:'force_place',characterId:id,locationId:'academy-arena'});assert(placed.accepted,placed.result);}
 
 const engine=session.world.runtime.ai.getCombat(),battle=engine.start({mode:'sparring',teams:[[session.playerId],[enemy.id]],manualIds:[session.playerId],detailed:true,important:true,reason:'주사위 표시 불변식'},true);
 const storage={setItem:()=>{},getItem:()=>null},saved=session.save(storage,1,'2026-10-28T00:00:00Z');clone=m.createPlaySession({save:saved});
 const choice=engine.getCandidates(battle.id,session.playerId).find(c=>c.available&&m.isDiceCombatChoice(c.choice));assert(choice,'real check candidate');
 const rows=await m.executeCombatDice(session,choice.choice);await clone.combatTurn(choice.choice);
 assert.deepEqual(engine.save(),clone.world.runtime.ai.getCombat().save(),'presentation adapter and normal command produce identical combat state');
 assert(rows.length>0,'actual player check produced');await writeFile(dir+'/readouts.json',JSON.stringify(rows,null,2));
 for(const row of rows){const source=engine.getBattle(battle.id).logs.find(l=>l.check?.id===row.id);assert(source);assert.equal(row.value,(source.check.rawLuckRoll??source.check.luckRoll)+11);assert.equal(source.actorId,session.playerId);}
 const before=engine.save();for(const row of rows)JSON.stringify(row);assert.deepEqual(engine.save(),before,'reviewing results is read-only');
 const restored=m.createPlaySession({save:session.save(storage,1)});try{assert.deepEqual(restored.world.runtime.ai.getCombat().save(),engine.save(),'saved committed roll is restored, not rerolled');}finally{restored.dispose();}
 await writeFile(dir+'/results.json',JSON.stringify({passed:true,checks:['20 exact D20 mappings','gift raw/effective distinction','opponent modifier privacy','D100 bounds','settings validation','same actual combat command/state','read-only results','save/load no reroll'],scope:'two-participant prepared arena in a normal session, one real manual round; no long AI simulation'},null,2));console.log('PASS dice: exact D20/D100 mapping, privacy, real combat equivalence and save/load.');
}finally{clone?.dispose();session.dispose();}
