import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {mkdir} from 'node:fs/promises';
import {chromium} from 'playwright';
await mkdir('.build-projects',{recursive:true});
await build({stdin:{contents:"export * from './src/ForgottenWitch/model';export * from './src/ForgottenWitch/config';export * from './src/ForgottenWitch/PlayerMotion';export {DEFENSE} from './src/ForgottenWitch/combatModel';",resolveDir:process.cwd()},bundle:true,platform:'node',format:'esm',outfile:'.build-projects/witch-movement-model.mjs'});
const {createActor,createWorld,moveActor,TUNING,PlayerMotion,DEFENSE}=await import('../.build-projects/witch-movement-model.mjs');
const actor=createActor(),world=createWorld(),motion=new PlayerMotion(),beats=[];
const tick=(direction,jump=false)=>{const before={...actor};moveActor(actor,world,1/120,direction,jump);beats.push(...motion.update(actor,before,1/120,direction,false));};
for(let i=0;i<16;i++)tick(1);assert.equal(actor.vx,405,'Full speed reached in 133ms');
for(let i=0;i<16;i++)tick(-1);assert(actor.vx<-180,'Quick direction reversal');
for(let i=0;i<12;i++)tick(0);assert.equal(actor.vx,0,'Ground stopping distance stays short');
let highest=570;tick(0,true);for(let i=0;i<110;i++){tick(0);highest=Math.min(highest,actor.y);}assert(actor.grounded);assert(570-highest>108&&570-highest<120,'Faster jump retains useful height');assert(beats.some(b=>b.kind==='jump')&&beats.some(b=>b.kind==='land'));
assert.equal(DEFENSE.blinkDistance,230,'Blink distance is explicit');
if(process.argv.includes('--logic-only')){console.log('Acceleration, reversal, stopping, jump height and presentation events passed.');process.exit(0);}
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:1440,height:940}}),base=process.env.WITCH_TEST_URL||'http://127.0.0.1:5173/web-hub',errors=[],missing=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)missing.push(r.url());});
 const settle=()=>page.waitForFunction(()=>!document.querySelector('.wt-loading,.wt-scene-transition,.wt-motion-panel.is-leaving'));
 await page.goto(base+'/games/forgotten-witch/',{waitUntil:'networkidle'});await page.getByRole('button',{name:'테스트',exact:true}).click();await settle();
 const canvas=page.locator('.wt-game canvas'),state=()=>canvas.evaluate(c=>JSON.parse(c.dataset.theater));
 await page.evaluate(()=>{window.__movementPoses=new Set();window.__maxParticles=0;window.__sawBlinkRecovery=false;const record=()=>{const c=document.querySelector('.wt-game canvas');if(c?.dataset.theater){const s=JSON.parse(c.dataset.theater);window.__movementPoses.add(s.pose);if(s.combat.blinkTime===0&&s.combat.blinkCooldown>0)window.__sawBlinkRecovery=true;window.__maxParticles=Math.max(window.__maxParticles,s.environment.particles);}requestAnimationFrame(record);};record();});
 await page.keyboard.down('d');await page.waitForFunction(()=>JSON.parse(document.querySelector('.wt-game canvas').dataset.theater).x>350);await page.keyboard.up('d');await page.waitForFunction(()=>JSON.parse(document.querySelector('.wt-game canvas').dataset.theater).vx===0);
 const poses=await page.evaluate(()=>[...window.__movementPoses]);assert(poses.includes('witch-walk')&&!poses.includes('witch-walk-alt'),'Walking preserves a coherent silhouette');assert((await state()).environment.emitted.step>0);assert((await state()).environment.emitted.brake>0);
 await page.keyboard.press('Space');await page.waitForFunction(()=>window.__movementPoses.has('witch-fall'));assert(await page.evaluate(()=>window.__movementPoses.has('witch-fall')),'Descending pose is observed in real rendering frames');await page.screenshot({path:'.build-projects/witch-fall-motion.png'});
 await page.waitForFunction(()=>JSON.parse(document.querySelector('.wt-game canvas').dataset.theater).grounded);let s=await state();assert(s.environment.emitted.jump>0&&s.environment.emitted.land>0);assert(await page.evaluate(()=>window.__maxParticles>0&&window.__maxParticles<=90),'Particles render and stay bounded');
 await page.keyboard.press('Escape');await page.waitForFunction(()=>JSON.parse(document.querySelector('.wt-game canvas').dataset.theater).mode==='pause');const frozen=await state();await page.waitForTimeout(200);s=await state();assert.equal(s.movement.clock,frozen.movement.clock);assert.equal(s.environment.particles,frozen.environment.particles);
 await page.keyboard.press('Escape');await page.waitForFunction(()=>JSON.parse(document.querySelector('.wt-game canvas').dataset.theater).mode==='explore');await settle();await page.waitForTimeout(650);assert.equal((await state()).environment.particles,0,'Expired particles are released');
 await page.keyboard.press('Shift');await page.waitForFunction(()=>JSON.parse(document.querySelector('.wt-game canvas').dataset.theater).combat.blinkTime>0);await page.screenshot({path:'.build-projects/witch-roll-motion.png'});await page.waitForFunction(()=>JSON.parse(document.querySelector('.wt-game canvas').dataset.theater).combat.blinkTime===0);assert(await page.evaluate(()=>window.__sawBlinkRecovery),'Blink ends before its cooldown, observed across rendering frames');
 const rods=await canvas.evaluate(c=>JSON.parse(c.dataset.theaterRig));assert(rods.find(r=>r.name==='player').end.y===736);assert(rods.every(r=>r.depth<6));
 await page.keyboard.press('f');await page.waitForFunction(()=>JSON.parse(document.querySelector('.wt-game canvas').dataset.theater).environment.emitted.cast>0);
 await page.emulateMedia({reducedMotion:'reduce'});await page.reload({waitUntil:'networkidle'});await page.getByRole('button',{name:'테스트',exact:true}).click();await settle();await page.keyboard.press('Space');await page.waitForTimeout(750);assert.equal((await state()).environment.particles,0,'Reduced motion suppresses extra particles');
 assert.deepEqual(errors,[]);assert.deepEqual(missing,[]);console.log('Real-input coherent walk cutout, fall frame, jump/landing/braking/blink/cast particles, lifetime cap, pause freeze, rods and reduced motion passed.');
}finally{await browser.close();}
