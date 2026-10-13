import { chromium } from 'playwright';
import { build } from 'esbuild';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const output=new URL('../.build-projects/',import.meta.url);
await mkdir(output,{recursive:true});
await build({entryPoints:[fileURLToPath(new URL('../src/ForgottenWitch/model.ts',import.meta.url))],bundle:true,platform:'node',format:'esm',outfile:fileURLToPath(new URL('witch-model.mjs',output))});
const {createActor,createWorld,moveActor,checkLights,bridgeCanSnap}=await import(new URL('witch-model.mjs',output));
// Physics contracts: edge grace, buffered landing, obstacle collision, actual bridge collision.
let actor=createActor(),world=createWorld();actor.x=1660;actor.y=550;actor.grounded=false;
for(let i=0;i<60;i++)moveActor(actor,world,1/120,0,false);
assert(actor.y>570,'Unsolved bridge must not have a collider');
actor=createActor();world.bridge='SOLVED';actor.x=1660;actor.y=550;actor.grounded=false;
for(let i=0;i<60;i++)moveActor(actor,world,1/120,0,false);
assert.equal(actor.y,570);assert(actor.grounded);
actor=createActor();actor.grounded=false;actor.coyote=70;moveActor(actor,world,1/120,0,true);assert(actor.vy<0,'Coyote jump');
actor=createActor();actor.y=568;actor.vy=180;actor.grounded=false;actor.coyote=0;
moveActor(actor,world,1/120,0,true);moveActor(actor,world,1/120,0,false);moveActor(actor,world,1/120,0,false);assert(actor.vy<0,'Buffered landing jump');
actor=createActor();actor.x=900;
for(let i=0;i<80;i++)moveActor(actor,world,1/120,1,false);
assert(actor.x<=928,'Low obstacle must block walking');
actor=createActor();actor.x=4075;
for(let i=0;i<60;i++)moveActor(actor,world,1/120,1,false);
assert(actor.x<=4080,'Closed curtain blocks entry');
world.lights='SOLVED';for(let i=0;i<60;i++)moveActor(actor,world,1/120,1,false);assert(actor.x>4080,'Open curtain removes entry barrier');
assert(checkLights(['moon','star','flower']));assert(!checkLights(['flower','star','moon']));assert(bridgeCanSnap(1660,570));assert(!bridgeCanSnap(1500,430));
console.log('Physics and puzzle contracts passed.');
const base=process.env.WITCH_TEST_URL||'http://127.0.0.1:5173/web-hub';
const browser=await chromium.launch({headless:true});
try {
 const page=await browser.newPage({viewport:{width:1440,height:940}}),errors=[],missing=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)missing.push(r.status()+' '+r.url());});
 await page.addInitScript(()=>{
   const Original=window.AudioContext,contexts=[];window.__theaterAudioContexts=contexts;
   window.AudioContext=class extends Original {constructor(options){super(options);contexts.push(this);}};
 });
 await page.goto(base+'/games/forgotten-witch/',{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready);
 const menu=page.getByRole('navigation',{name:'극장 메인 메뉴'});
 await menu.getByRole('button',{name:'소리 끄기'}).click();await menu.getByRole('button',{name:'소리 켜기'}).click();
 assert.equal(await page.locator('.wt-title-screen').evaluate(element=>element.scrollTop),0,'Menu focus must not scroll/crop the title frame');
 await page.screenshot({path:fileURLToPath(new URL('witch-title.png',output))});
 await page.getByRole('button',{name:'극장에 들어가기'}).click();
 const canvas=page.locator('.wt-game canvas');assert.equal(await canvas.count(),1,'StrictMode must create one engine');
 const state=()=>canvas.evaluate(c=>JSON.parse(c.dataset.theater));
 const checkRig=async()=>{
   const {rods,s}=await canvas.evaluate(c=>({rods:JSON.parse(c.dataset.theaterRig),s:JSON.parse(c.dataset.theater)}));
   assert(rods.length>=80,'Every stage cutout/support must be registered');
   for(const rod of rods){assert(Number.isFinite(rod.start.x)&&Number.isFinite(rod.start.y));assert.equal(rod.end.y,rod.edge==='top'?-16:736,'Support reaches outside viewport boundary: '+rod.name);}
   for(const prefix of ['rear-tree-','middle-tree-','foreground-tree-','hanging-star-','platform-','clock-flower-','final-curtain-'])assert(rods.some(r=>r.name.startsWith(prefix)),prefix+' has supports');
   assert(rods.some(r=>r.name==='hanging-moon'&&r.edge==='top'));
   const pole=rods.find(r=>r.name==='player');assert(pole.visible);assert(Math.abs(pole.start.x-(s.x-s.camera))<25,'Rod follows puppet transform/flip');
   return {...pole,actorY:s.y};
 };
 const waitState=async(test,arg)=>{
   try{await page.waitForFunction(({code,arg})=>{const c=document.querySelector('.wt-game canvas');return c?.dataset.theater&&new Function('s','arg',code)(JSON.parse(c.dataset.theater),arg);},{code:'return '+test,arg},{timeout:18000});}
   catch(error){console.log('Failed condition',test,'state',await state());await page.screenshot({path:fileURLToPath(new URL('witch-failure.png',output))});throw error;}
 };
 const runTo=async x=>{
   const s=await state();const key=s.x<x?'d':'a';await page.keyboard.down(key);
   try{await waitState(key==='d'?'s.x >= arg':'s.x <= arg',x);}finally{await page.keyboard.up(key);}
   await page.waitForTimeout(220);
 };
 await checkRig();
 await page.keyboard.down('d');await waitState('s.pose === "witch-walk"');await page.waitForTimeout(100);await checkRig();await page.screenshot({path:fileURLToPath(new URL('witch-walk.png',output))});await page.keyboard.up('d');await waitState('s.pose === "witch-puppet"');
 await page.keyboard.down('a');await waitState('s.pose === "witch-walk"');await checkRig();await page.keyboard.up('a');await waitState('s.pose === "witch-puppet"');
 await page.keyboard.press('Space');await page.waitForTimeout(160);assert((await state()).y<540,'Space jumps');assert.equal((await state()).pose,'witch-jump');
 const jumpRod=await checkRig();assert(jumpRod.start.y<jumpRod.actorY-25,'Jump support extends from the body, not a detached fixed-length bar');await page.screenshot({path:fileURLToPath(new URL('witch-jump.png',output))});
 await waitState('s.grounded');
 await runTo(470);await page.keyboard.press('Space');await page.waitForTimeout(700);assert((await state()).y===515,'Land on a practice board');
 await runTo(890);await page.keyboard.down('d');await page.keyboard.press('Space');await waitState('s.x > 1120');await page.keyboard.up('d');await page.waitForTimeout(300);
 await runTo(1220);assert((await state()).camera>600,'Camera follows');
 await checkRig();
 await page.keyboard.press('e');await waitState('s.mode === "bridge"');
 const frozen=await state();await page.keyboard.down('d');await page.keyboard.press('Space');await page.waitForTimeout(200);await page.keyboard.up('d');assert.equal((await state()).x,frozen.x,'Bridge mode freezes actor');
 await page.keyboard.press('Escape');await waitState('s.mode === "explore"');await page.keyboard.press('e');await waitState('s.mode === "bridge"');
 const bounds=await canvas.boundingBox();
 const point=(x,y)=>({x:bounds.x+x*bounds.width/1280,y:bounds.y+y*bounds.height/720});
 let s=await state(),start=point(s.bridgeX-s.camera,s.bridgeY+30),end=point(1660-s.camera,585);
 await page.mouse.move(start.x,start.y);await page.mouse.down();await page.mouse.move(end.x,end.y,{steps:24});await page.mouse.up();
 await checkRig();
 await waitState('s.bridge === "SOLVED" && s.mode === "explore"');
 await runTo(1640);assert.equal((await state()).y,570,'Actually standing on connected bridge');
 await page.screenshot({path:fileURLToPath(new URL('witch-bridge.png',output))});
 await runTo(2580);await page.keyboard.press('e');await waitState('s.mode === "dialogue"');
 await page.locator('.wt-dialogue-paper').waitFor();await page.waitForTimeout(100);
 const portraits=await page.locator('.wt-portrait').evaluateAll(images=>images.map(image=>({source:image.getAttribute('src'),z:Number(getComputedStyle(image).zIndex),bottom:image.getBoundingClientRect().bottom,top:image.getBoundingClientRect().top})));
 const dialoguePaper=await page.locator('.wt-dialogue-paper').evaluate(element=>({z:Number(getComputedStyle(element).zIndex),top:element.getBoundingClientRect().top}));
 assert(portraits.every(p=>p.z<dialoguePaper.z&&p.top<dialoguePaper.top-200&&p.bottom>dialoguePaper.top),'Knee-up portraits are independent actors behind the dialogue paper');
 assert(portraits.every(p=>p.source.includes('-knee.png')),'Both speakers use matching knee-up art');
 const atDialogue=(await state()).x;
 await page.keyboard.down('d');await page.keyboard.press('Space');await page.waitForTimeout(200);await page.keyboard.up('d');assert.equal((await state()).x,atDialogue,'Dialogue freezes movement');
 // Space reveals one line; Enter advances one line, without native button double activation.
 await page.keyboard.press('Enter');await page.waitForTimeout(100);
 assert.equal(await page.locator('.wt-speaker').innerText(),'견습 마녀\n무표정');
 await page.screenshot({path:fileURLToPath(new URL('witch-dialogue.png',output))});
 for(let i=0;i<25&&(await state()).mode==='dialogue';i++){await page.keyboard.press('Enter');await page.waitForTimeout(60);}
 await waitState('s.mode === "explore" && s.visits === 1');
 await page.keyboard.press('e');await waitState('s.mode === "dialogue"');
 assert((await page.locator('.wt-dialogue-paper p').getAttribute('aria-label')).startsWith('다시 오셨네요'),'Repeat dialogue branch');
 for(let i=0;i<12&&(await state()).mode==='dialogue';i++){await page.keyboard.press('Enter');await page.waitForTimeout(60);}
 await waitState('s.mode === "explore" && s.visits === 2');
 await runTo(3580);await page.keyboard.press('e');await page.locator('[data-puzzle-state="OPEN"]').waitFor();
 const lightPosition=(await state()).x;await page.keyboard.down('a');await page.waitForTimeout(160);await page.keyboard.up('a');assert.equal((await state()).x,lightPosition,'Popup freezes physics');
 const dragTile=async(id,index)=>{
   const source=await page.locator(`[data-symbol="${id}"]`).boundingBox(),target=await page.locator(`[data-light-slot="${index}"]`).boundingBox();
   await page.mouse.move(source.x+source.width/2,source.y+source.height/2);await page.mouse.down();await page.mouse.move(target.x+target.width/2,target.y+target.height/2,{steps:16});await page.mouse.up();
 };
 for(const [index,id] of ['flower','star','moon'].entries())await dragTile(id,index);
 await page.getByRole('button',{name:'조명 켜기'}).click();await page.locator('[data-puzzle-state="FAILED"]').waitFor();assert.equal((await state()).lights,'OPEN','Wrong answer leaves curtain closed');
 await page.locator('[data-puzzle-state="OPEN"]').waitFor();
 await dragTile('moon',0); // Swap with flower in slot 0; the existing star remains.
 await page.screenshot({path:fileURLToPath(new URL('witch-light-puzzle.png',output))});
 await page.getByRole('button',{name:'조명 켜기'}).click();await waitState('s.lights === "SOLVED" && s.mode === "explore"');
 await page.keyboard.press('Escape');await waitState('s.mode === "pause"');const paused=(await state()).x;await page.keyboard.down('d');await page.waitForTimeout(150);await page.keyboard.up('d');assert.equal((await state()).x,paused);await page.keyboard.press('Escape');await waitState('s.mode === "explore"');
 await page.keyboard.down('d');await waitState('s.mode === "complete"');await page.keyboard.up('d');await page.getByRole('dialog',{name:'프로토타입 완료'}).waitFor();
 await page.screenshot({path:fileURLToPath(new URL('witch-complete.png',output))});
 assert.equal((await state()).bridge,'SOLVED');assert.deepEqual(errors,[]);assert.deepEqual(missing,[]);
 await page.getByRole('button',{name:'한 번 더 공연하기'}).click();await page.getByRole('button',{name:'극장에 들어가기'}).waitFor();assert.equal(await canvas.count(),1,'Restart cleans engine');
 await page.waitForFunction(()=>window.__theaterAudioContexts.length>0&&window.__theaterAudioContexts.every(context=>context.state==='closed'));
 await page.reload({waitUntil:'networkidle'});await page.getByRole('button',{name:'극장에 들어가기'}).waitFor();assert.equal(await canvas.count(),1,'Direct URL reload');
 await page.setViewportSize({width:900,height:600});await page.screenshot({path:fileURLToPath(new URL('witch-resize.png',output))});
 await page.getByRole('button',{name:'극장에 들어가기'}).click();await waitState('s.mode === "explore"');
 await checkRig();
 await page.getByRole('link',{name:'← web hub'}).click();await page.locator('.hub').waitFor();assert.equal(await page.locator('canvas').count(),0,'Unmount cleans canvas');
 assert.equal(await page.evaluate(()=>document.body.style.overflow),'','Unmount restores page scrolling');
 await page.waitForFunction(()=>window.__theaterAudioContexts.length>0&&window.__theaterAudioContexts.every(context=>context.state==='closed'));
 // A missing image must produce a recoverable UI rather than a silently broken stage.
 await page.route('**/witch-theater/witch-puppet.png',route=>route.abort());
 await page.goto(base+'/games/forgotten-witch/',{waitUntil:'networkidle'});
 await page.getByRole('alert').waitFor();assert((await page.getByRole('alert').innerText()).includes('에셋'));
 await page.unroute('**/witch-theater/witch-puppet.png');await page.getByRole('button',{name:'다시 불러오기'}).click();
 await page.getByRole('button',{name:'극장에 들어가기'}).waitFor();assert.equal(await canvas.count(),1,'Asset retry cleans broken engine');
 console.log('Real input playthrough passed: movement, jumping, camera, bridge drag/collision, dialogue/branch/input lock, wrong/right light drag, pause, curtain, completion, replay, reload, resize, unmount, asset-error recovery.');
} finally { await browser.close(); }
