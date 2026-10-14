import { chromium } from 'playwright';
import { build } from 'esbuild';
import { mkdir } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const output=new URL('../.build-projects/',import.meta.url);
await mkdir(output,{recursive:true});
await build({entryPoints:[fileURLToPath(new URL('../src/ForgottenWitch/model.ts',import.meta.url))],bundle:true,platform:'node',format:'esm',outfile:fileURLToPath(new URL('witch-model.mjs',output))});
const {createActor,createWorld,moveActor,checkLights,bridgeCanSnap}=await import(new URL('witch-model.mjs',output));
// Physics contracts: edge grace, buffered landing, obstacle collision, actual bridge collision.
let actor=createActor(),world=createWorld();actor.x=1660;actor.y=550;actor.grounded=false;
for(let i=0;i<40;i++)moveActor(actor,world,1/120,0,false);
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
await build({entryPoints:[fileURLToPath(new URL('../src/ForgottenWitch/dialogueModel.ts',import.meta.url))],bundle:true,platform:'node',format:'esm',outfile:fileURLToPath(new URL('witch-dialogue-model.mjs',output))});
const {buildTimeline,lineText,EMOTIONS}=await import(new URL('witch-dialogue-model.mjs',output));
const scripts=JSON.parse(await readFile(new URL('../src/ForgottenWitch/dialogue.json',import.meta.url),'utf8'));
const angry=scripts.first.find(line=>line.emotion==='angry'),fast=scripts.first.find(line=>line.emotion==='flustered');
const beats=buildTimeline(angry);assert(beats.some(beat=>beat.delayMs>400),'Angry punctuation and segment pauses create deliberate beats');assert(buildTimeline(fast)[0].delayMs<20,'Flustered speech can rush');assert(beats.filter(beat=>beat.text==='.').every(beat=>!beat.sound),'Punctuation is silent');assert.equal(buildTimeline(angry).map(beat=>beat.text).join(''),lineText(angry));assert(EMOTIONS.angry.gain>EMOTIONS.worry.gain);
console.log('Dialogue rhythm, punctuation silence and emotion voice contracts passed.');
await build({entryPoints:[fileURLToPath(new URL('../src/ForgottenWitch/combatModel.ts',import.meta.url))],bundle:true,platform:'node',format:'esm',outfile:fileURLToPath(new URL('witch-combat-model.mjs',output))});
const {createCombat,updateCombat}=await import(new URL('witch-combat-model.mjs',output));
let fight=createCombat(),fighter=createActor();fighter.x=5200;
for(let i=0;i<120;i++)updateCombat(fight,fighter,1/120,i===0);assert.equal(fight.monsters[0].hp,2,'A real projectile damages the target');assert.equal(fight.missiles.length,0,'Hit projectile is consumed');
fight=createCombat();fighter.x=5500;fight.invulnerable=10;for(let i=0;i<360;i++)updateCombat(fight,fighter,1/120,false);assert.equal(fight.lives,3,'Invulnerability rejects repeated enemy hits');
fight.invulnerable=0;for(let i=0;i<1200;i++)updateCombat(fight,fighter,1/120,false);assert.equal(fight.lives,0);const stopped=fight.clock;updateCombat(fight,fighter,1,true);assert.equal(fight.clock,stopped,'Life zero freezes combat');
console.log('Combat projectile, invulnerability and game-over contracts passed.');
const base=process.env.WITCH_TEST_URL||'http://127.0.0.1:5173/web-hub';
const browser=await chromium.launch({headless:true});
try {
 const page=await browser.newPage({viewport:{width:1440,height:940}}),errors=[],missing=[];
 const settle=()=>page.waitForFunction(()=>!document.querySelector('.wt-scene-transition,.wt-motion-panel.is-leaving,.wt-loading'),null,{timeout:30000});
 const clickTravel=async button=>{await button.click();await settle();};
 page.on('pageerror',e=>errors.push(e.message));
 page.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)missing.push(r.status()+' '+r.url());});
 await page.addInitScript(()=>{
   const Original=window.AudioContext,contexts=[];window.__theaterAudioContexts=contexts;window.__theaterTones=[];
   window.AudioContext=class extends Original {constructor(options){super(options);contexts.push(this);}createOscillator(){const node=super.createOscillator(),start=node.start.bind(node),set=node.frequency.setValueAtTime.bind(node.frequency);let frequency=null;node.frequency.setValueAtTime=(value,...args)=>{frequency=value;return set(value,...args);};node.start=(...args)=>{window.__theaterTones.push({frequency:frequency??node.frequency.value,type:node.type});return start(...args);};return node;}};
 });
 await page.goto(base+'/games/forgotten-witch/',{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready);
 const menu=page.getByRole('navigation',{name:'극장 메인 메뉴'});
 await menu.getByRole('button',{name:'소리 끄기'}).click();await menu.getByRole('button',{name:'소리 켜기'}).click();
 assert.equal(await page.locator('.wt-title-screen').evaluate(element=>element.scrollTop),0,'Menu focus must not scroll/crop the title frame');
 await page.screenshot({path:fileURLToPath(new URL('witch-title.png',output))});
 const layout=()=>page.evaluate(()=>{
   const stage=document.querySelector('.wt-stage-shell').getBoundingClientRect(),canvas=document.querySelector('.wt-game canvas').getBoundingClientRect(),overlay=document.querySelector('.wt-overlay').getBoundingClientRect(),title=document.querySelector('.wt-title-content').getBoundingClientRect();
   return {left:(title.left-stage.left)/stage.width,top:(title.top-stage.top)/stage.height,width:title.width/stage.width,align:Math.max(Math.abs(canvas.left-overlay.left),Math.abs(canvas.top-overlay.top),Math.abs(canvas.width-overlay.width),Math.abs(canvas.height-overlay.height))};
 });
 const originalLayout=await layout();
 for(const viewport of [{width:900,height:600},{width:640,height:480},{width:1920,height:1080}]){
   await page.setViewportSize(viewport);await page.waitForTimeout(200);const current=await layout();
   assert(current.align<2,'Canvas and all UI share the same scaled viewport');
   for(const key of ['left','top','width'])assert(Math.abs(current[key]-originalLayout[key])<.005,'Uniform UI layout: '+key);
 }
 await page.setViewportSize({width:1440,height:940});
 await page.evaluate(()=>document.body.style.zoom='1.5');await page.waitForTimeout(250);assert((await layout()).align<2,'UI stays aligned under browser-style CSS zoom');
 await page.evaluate(()=>document.body.style.zoom='');await page.waitForTimeout(200);
 await clickTravel(menu.getByRole('button',{name:'일러스트레이션'}));
 assert.equal(await page.locator('.wt-art-card').count(),20);
 await page.locator('.wt-art-card img').evaluateAll(images=>images.forEach(image=>image.loading='eager'));
 await page.waitForFunction(()=>Array.from(document.querySelectorAll('.wt-art-card img')).every(image=>image.complete&&image.naturalWidth>0));
 await page.screenshot({path:fileURLToPath(new URL('witch-illustrations.png',output))});
 await page.getByRole('button',{name:'마지막 표 한 장 상세보기'}).click();
 await page.getByRole('dialog',{name:'마지막 표 한 장 상세보기'}).waitFor();
 assert((await page.locator('.wt-art-prompt pre').innerText()).includes('rain-soaked abandoned theater'));
 await page.screenshot({path:fileURLToPath(new URL('witch-art-detail.png',output))});
 await page.keyboard.press('Escape');await clickTravel(page.getByRole('button',{name:'← 메인 화면'}));
 assert(await menu.getByRole('button',{name:/극장에 들어가기/}).isDisabled(),'Story entry remains disabled');
 await clickTravel(menu.getByRole('button',{name:'설정집',exact:true}));assert.equal(await page.locator('.wt-codex-tabs button').count(),7);
 await page.getByRole('button',{name:/^견습 마녀/}).click();await page.getByRole('dialog',{name:'견습 마녀 설정'}).waitFor();await page.getByRole('button',{name:'다음 이미지'}).click();assert((await page.locator('.wt-codex-standing img').getAttribute('src')).includes('witch-joy'));assert((await page.locator('.wt-codex-writing aside').innerText()).includes('마녀의 노트'));
 await page.getByRole('button',{name:'닫기 · Esc',exact:true}).click();await clickTravel(page.getByRole('button',{name:'← 메인 화면'}));
 await clickTravel(page.getByRole('button',{name:'테스트',exact:true}));
 const canvas=page.locator('.wt-game canvas');assert.equal(await canvas.count(),1,'StrictMode must create one engine');
 const state=()=>canvas.evaluate(c=>JSON.parse(c.dataset.theater));
 const checkRig=async()=>{
   const {rods,s}=await canvas.evaluate(c=>({rods:JSON.parse(c.dataset.theaterRig),s:JSON.parse(c.dataset.theater)}));
   assert(rods.length>=80,'Every stage cutout/support must be registered');
   for(const rod of rods){assert(Number.isFinite(rod.start.x)&&Number.isFinite(rod.start.y));assert(rod.depth<6,'Every rod is behind terrain');assert.equal(rod.end.y,rod.edge==='top'?-16:736,'Support reaches outside viewport boundary: '+rod.name);}
   for(const prefix of ['rear-tree-','middle-tree-','foreground-tree-','hanging-star-','platform-','clock-flower-','final-curtain-'])assert(rods.some(r=>r.name.startsWith(prefix)),prefix+' has supports');
   assert(rods.some(r=>r.name==='hanging-moon'&&r.edge==='top'));
   const pole=rods.find(r=>r.name==='player');assert(pole.visible);assert(Math.abs(pole.start.x-(s.x-s.camera))<25,'Rod follows puppet transform/flip');
   return {...pole,actorY:s.y};
 };
 const waitState=async(test,arg)=>{
   try{await page.waitForFunction(({code,arg})=>{const c=document.querySelector('.wt-game canvas');return c?.dataset.theater&&new Function('s','arg',code)(JSON.parse(c.dataset.theater),arg);},{code:'return '+test,arg},{timeout:18000});await settle();}
   catch(error){console.log('Failed condition',test,'state',await state());await page.screenshot({path:fileURLToPath(new URL('witch-failure.png',output))});throw error;}
 };
 const runTo=async x=>{
   const s=await state();const key=s.x<x?'d':'a';await page.keyboard.down(key);
   try{await waitState(key==='d'?'s.x >= arg':'s.x <= arg',x);}finally{await page.keyboard.up(key);}
   await page.waitForTimeout(220);
 };
 await checkRig();
 const initialLighting=await state();assert.equal(initialLighting.lighting.glows,13);assert(initialLighting.lighting.shadows>=30);assert(initialLighting.lighting.lamps.every(alpha=>alpha===0));
 await page.keyboard.down('d');await waitState('s.pose.startsWith("witch-walk")');await page.waitForTimeout(100);await checkRig();await page.screenshot({path:fileURLToPath(new URL('witch-walk.png',output))});await page.keyboard.up('d');await waitState('s.pose === "witch-puppet"');
 await page.keyboard.down('a');await waitState('s.pose.startsWith("witch-walk")');await checkRig();await page.keyboard.up('a');await waitState('s.pose === "witch-puppet"');
 await runTo(250);await page.keyboard.press('Space');await waitState('s.pose === "witch-jump" && s.y < 540');
 const jumpRod=await checkRig();assert(jumpRod.start.y<jumpRod.actorY-25,'Jump support extends from the body, not a detached fixed-length bar');await page.screenshot({path:fileURLToPath(new URL('witch-jump.png',output))});
 await waitState('s.grounded');
 await runTo(470);await page.keyboard.press('Space');await waitState('!s.grounded');await waitState('s.grounded && s.y === 515');
 await runTo(890);await page.keyboard.down('d');await page.keyboard.press('Space');await waitState('s.x > 1120');await page.keyboard.up('d');await page.waitForTimeout(300);
 await runTo(1220);assert((await state()).camera>600,'Camera follows');
 assert(Math.abs((await state()).lighting.spotlightX-(await state()).x)<2,'Soft spotlight follows the player in world space');
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
 await page.locator('.wt-dialogue-paper').waitFor();
 const dialogue=page.locator('.wt-dialogue'),next=page.locator('.wt-dialogue-next');
 assert(await next.isDisabled());await page.keyboard.press('Enter');await page.keyboard.press('Space');assert.equal(await dialogue.getAttribute('data-dialogue-index'),'0');
 const portraits=await page.locator('.wt-portrait').evaluateAll(images=>images.map(image=>({source:image.getAttribute('src'),z:Number(getComputedStyle(image).zIndex),bottom:image.getBoundingClientRect().bottom,top:image.getBoundingClientRect().top})));
 const dialoguePaper=await page.locator('.wt-dialogue-paper').evaluate(element=>({z:Number(getComputedStyle(element).zIndex),top:element.getBoundingClientRect().top}));
 assert(portraits.every(p=>p.z<dialoguePaper.z&&p.top<dialoguePaper.top-200&&p.bottom>dialoguePaper.top),'Knee-up portraits are independent actors behind the dialogue paper');
 assert(portraits.every(p=>p.source.includes('-knee.png')),'Initial speakers use the base knee-up art');
 const atDialogue=(await state()).x;
 await page.keyboard.down('d');await page.keyboard.press('Space');await page.waitForTimeout(200);await page.keyboard.up('d');assert.equal((await state()).x,atDialogue,'Dialogue freezes movement');
 // While typing, neither Enter nor Space reveals/skips a line or queues advancement.
 await page.getByRole('slider',{name:'대사 출력 속도'}).focus();await page.keyboard.press('ArrowRight');assert.equal(await page.locator('.wt-text-speed output').innerText(),'1.2×');await page.keyboard.press('ArrowLeft');
 await page.getByRole('button',{name:'소리 끄기'}).click();const mutedCount=await page.evaluate(()=>window.__theaterTones.length);await page.waitForTimeout(150);assert.equal(await page.evaluate(()=>window.__theaterTones.length),mutedCount,'Mute suppresses character blips');await page.getByRole('button',{name:'소리 켜기'}).click();await page.getByRole('slider',{name:'대사 출력 속도'}).focus();
 assert.equal(await dialogue.getAttribute('data-dialogue-index'),'0');
 await page.waitForFunction(()=>document.querySelector('.wt-dialogue')?.dataset.typing==='complete');
 assert.equal(await dialogue.getAttribute('data-dialogue-index'),'0','Early input is not queued');
 await page.keyboard.press('Enter');await page.waitForFunction(()=>document.querySelector('.wt-dialogue')?.dataset.dialogueIndex==='1');
 assert.equal(await page.locator('.wt-speaker').innerText(),'견습 마녀');
 await page.screenshot({path:fileURLToPath(new URL('witch-dialogue.png',output))});
 const seen=new Set(['neutral']);
 for(let i=0;i<20&&(await state()).mode==='dialogue';i++){
   await page.waitForFunction(()=>document.querySelector('.wt-dialogue')?.dataset.typing==='complete');
   const feeling=await dialogue.getAttribute('data-emotion'),speaker=await dialogue.getAttribute('data-speaker');seen.add(feeling);
   if(feeling!=='neutral')assert((await page.locator('.wt-portrait.speaking').getAttribute('src')).includes(`${speaker}-${feeling}.png`),'Expression follows the emotion');
   if(feeling==='angry'){
     const style=await page.locator('[data-text-segment="0"]').evaluate(e=>({size:parseFloat(getComputedStyle(e).fontSize),color:getComputedStyle(e).color}));assert(style.size>25);assert.equal(style.color,'rgb(139, 40, 56)');
     await page.screenshot({path:fileURLToPath(new URL(`witch-dialogue-${speaker}-angry.png`,output))});
   }
   if(feeling==='flustered')await page.screenshot({path:fileURLToPath(new URL(`witch-dialogue-${speaker}-flustered.png`,output))});
   await page.keyboard.press('Enter');await page.waitForTimeout(90);
 }
 assert.deepEqual([...seen].sort(),['angry','flustered','joy','neutral','worry']);
 const tones=await page.evaluate(()=>window.__theaterTones);
 assert(tones.some(t=>t.type==='triangle'&&t.frequency>160&&t.frequency<225),'Witch lower voice');assert(tones.some(t=>t.type==='sine'&&t.frequency>270&&t.frequency<380),'Flora higher voice');
 await waitState('s.mode === "explore" && s.visits === 1');
 await page.keyboard.press('e');await waitState('s.mode === "dialogue"');
 assert((await page.locator('.wt-dialogue-paper p').getAttribute('aria-label')).startsWith('다시 오셨네요'),'Repeat dialogue branch');
 for(let i=0;i<8&&(await state()).mode==='dialogue';i++){await page.waitForFunction(()=>document.querySelector('.wt-dialogue')?.dataset.typing==='complete');await page.keyboard.press('Enter');await page.waitForTimeout(90);}
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
 await waitState('s.lightAmount > .25 && s.lightAmount < 1');
 const transition=await state();assert(transition.lighting.lamps[0]>transition.lighting.lamps[3],'Stage lighting comes on in sequence');
 await page.screenshot({path:fileURLToPath(new URL('witch-stage-lighting.png',output))});
 await page.keyboard.press('Escape');await waitState('s.mode === "pause"');const paused=await state();await page.keyboard.down('d');await page.waitForTimeout(150);await page.keyboard.up('d');assert.equal((await state()).x,paused.x);assert.equal((await state()).environment.clock,paused.environment.clock,'Paused environment animations keep their phase');await page.keyboard.press('Escape');await waitState('s.mode === "explore"');
 await page.keyboard.down('d');await waitState('s.mode === "complete"');await page.keyboard.up('d');await page.getByRole('dialog',{name:'프로토타입 완료'}).waitFor();
 await page.screenshot({path:fileURLToPath(new URL('witch-complete.png',output))});
 assert((await state()).lighting.lamps.every(alpha=>alpha>.98),'All stage lamps finish fading in');
 assert.equal((await state()).bridge,'SOLVED');assert.deepEqual(errors,[]);assert.deepEqual(missing,[]);
 await clickTravel(page.getByRole('button',{name:'한 번 더 공연하기'}));await page.getByRole('button',{name:'테스트',exact:true}).waitFor();assert.equal(await canvas.count(),1,'Restart cleans engine');
 await page.waitForFunction(()=>window.__theaterAudioContexts.length>0&&window.__theaterAudioContexts.every(context=>context.state==='closed'));
 await page.reload({waitUntil:'networkidle'});await page.getByRole('button',{name:'테스트',exact:true}).waitFor();assert.equal(await canvas.count(),1,'Direct URL reload');
 await page.setViewportSize({width:900,height:600});await page.screenshot({path:fileURLToPath(new URL('witch-resize.png',output))});
 await clickTravel(page.getByRole('button',{name:'테스트',exact:true}));await waitState('s.mode === "explore"');
 await checkRig();
 await page.keyboard.press('f');await waitState('s.pose === "witch-attack" && s.combat.missiles.length > 0');
 assert((await canvas.evaluate(c=>JSON.parse(c.dataset.theaterRig))).some(rod=>rod.name.startsWith('missile-')&&rod.end.y===736),'Magic missile has a procedural rod');
 await waitState('s.combat.missiles.length === 0');assert(!(await canvas.evaluate(c=>JSON.parse(c.dataset.theaterRig))).some(rod=>rod.name.startsWith('missile-')),'Expired missiles clean their supports');
 await page.getByRole('button',{name:'테스트 위치',exact:true}).click();await clickTravel(page.getByRole('button',{name:'전투 · 라이프',exact:true}));await waitState('s.x === 5200');assert.equal((await state()).combat.lives,3);
 for(let i=0;i<3;i++){await waitState('s.combat.cooldown === 0');await page.keyboard.press('f');await waitState('s.combat.monsters[0].hp <= arg',2-i);}
 assert.equal((await state()).combat.monsters[0].hp,0,'Magic missiles defeat the monster');
 await runTo(5740);await waitState('s.mode === "gameover"');await page.getByRole('dialog',{name:'게임 오버와 재등장'}).waitFor();assert.equal((await state()).combat.lives,0);await page.screenshot({path:fileURLToPath(new URL('witch-game-over.png',output))});
 await page.waitForFunction(()=>{
   const curtains=Array.from(document.querySelectorAll('.wt-rebirth-curtain'),e=>e.getBoundingClientRect()),stage=document.querySelector('.wt-stage-shell').getBoundingClientRect();
   return curtains.length===2&&curtains[0].left<=stage.left+2&&curtains[0].right>=curtains[1].left&&curtains[1].right>=stage.right-2&&curtains.every(r=>r.top<=stage.top+1&&r.bottom>=stage.bottom-1);
 },undefined,{timeout:10000});
 await waitState('s.mode === "explore" && s.combat.lives === 3');assert.equal((await state()).x,5200,'Respawn prepared at last test checkpoint');
 await waitState('s.audio.loaded === 9');assert.deepEqual((await state()).audio.errors,[],'Local CC0 effects decoded successfully');
 await page.getByRole('link',{name:'← web hub'}).click();await page.locator('.hub').waitFor();assert.equal(await page.locator('canvas').count(),0,'Unmount cleans canvas');
 assert.equal(await page.evaluate(()=>document.body.style.overflow),'','Unmount restores page scrolling');
 await page.waitForFunction(()=>window.__theaterAudioContexts.length>0&&window.__theaterAudioContexts.every(context=>context.state==='closed'));
 // A missing image must produce a recoverable UI rather than a silently broken stage.
 await page.route('**/witch-theater/witch-puppet.png',route=>route.abort());
 await page.goto(base+'/games/forgotten-witch/',{waitUntil:'networkidle'});
 await page.getByRole('alert').waitFor();assert((await page.getByRole('alert').innerText()).includes('에셋'));
 await page.unroute('**/witch-theater/witch-puppet.png');await page.getByRole('button',{name:'다시 불러오기'}).click();
 await page.getByRole('button',{name:'테스트',exact:true}).waitFor();assert.equal(await canvas.count(),1,'Asset retry cleans broken engine');
 await page.emulateMedia({reducedMotion:'reduce'});await page.reload({waitUntil:'networkidle'});await waitState('s.environment.reducedMotion');
 await page.waitForTimeout(200);assert.equal((await state()).environment.clock,0,'Reduced motion disables ambient sway and mystery movements');
 console.log('Real input playthrough passed: movement, camera, bridge, emotion portraits/voices/rhythm/input lock, light puzzle, gallery/codex, missiles/monster defeat/lives, full curtains/respawn, CC0 audio decode, resize, teardown and recovery.');
} finally { await browser.close(); }
