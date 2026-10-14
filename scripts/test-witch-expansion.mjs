import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {chromium} from 'playwright';
import {mkdir,readFile,access} from 'node:fs/promises';
await mkdir('.build-projects',{recursive:true});
await build({stdin:{contents:"export * from './src/ForgottenWitch/castData';export * from './src/ForgottenWitch/combatModel';export * from './src/ForgottenWitch/model';export * from './src/ForgottenWitch/codexData';export * from './src/ForgottenWitch/dialogueModel';",resolveDir:process.cwd()},bundle:true,platform:'node',format:'esm',outfile:'.build-projects/witch-expansion-model.mjs'});
const {MONSTERS,BOSS,NPCS,createCombat,createActor,createWorld,moveActor,translateActor,beginBlink,updateCombat,codexEntries,SPEAKERS,conversationLabel}=await import('../.build-projects/witch-expansion-model.mjs');
assert.equal(MONSTERS.length,20);assert.equal(NPCS.length,6);assert.equal(new Set(Object.values(SPEAKERS).map(s=>s.frequency)).size,8);
for(const d of [...MONSTERS,BOSS]){
  const state=createCombat(d.id),actor=createActor();actor.x=state.monsters[0].x-((d.pattern==='clap'||d.pattern==='guard')?50:240);state.invulnerable=100;
  const seen=new Set(),actions=new Set();let shots=false,airborne=false;
  for(let i=0;i<2400;i++){updateCombat(state,actor,1/120,false);seen.add(state.monsters[0].phase);actions.add(state.monsters[0].action);shots ||= state.hazards.length>0;airborne ||= state.monsters[0].y<560;}
  assert(seen.has('windup')&&seen.has('recover'),d.id+' actual attack state cycle');
  if(['charge','hop'].includes(d.pattern))assert(seen.has('active'),d.id+' active movement');
  if(d.pattern==='hop')assert(airborne,d.id+' physically leaves ground');
  if(['ranged','fan','wave','boss'].includes(d.pattern))assert(shots,d.id+' actual hostile projectile');
  if(d.pattern==='boss')assert(['charge','fan','wave'].every(a=>actions.has(a)),'Boss rotates three attacks');
}
let fight=createCombat('acorn'),actor=createActor();actor.x=5200;const guard=fight.monsters[0];
fight.missiles.push({id:0,x:guard.x-20,y:505,baseY:505,direction:1,age:0});updateCombat(fight,actor,1/120,false);assert.equal(guard.hp,5,'Guard blocks front');
fight.missiles.push({id:1,x:guard.x+20,y:505,baseY:505,direction:-1,age:0});updateCombat(fight,actor,1/120,false);assert.equal(guard.hp,4,'Guard rear is vulnerable');
fight=createCombat();actor.x=5500;assert(beginBlink(fight,actor));assert(!beginBlink(fight,actor),'Blink cooldown prevents retrigger');fight.monsters[0].phase='windup';fight.monsters[0].timer=.01;updateCombat(fight,actor,.02,false);assert.equal(fight.lives,3,'Blink rejects real melee hit');assert.equal(fight.casting,0);
actor=createActor();actor.x=4075;const world=createWorld();translateActor(actor,world,230);assert.equal(actor.x,4080,'Blink retains closed-door collision');
fight=createCombat(BOSS.id);actor=createActor();actor.x=5200;const boss=fight.monsters[0];boss.phase='windup';boss.action='fan';boss.timer=.01;updateCombat(fight,actor,.02,false);assert.equal(fight.hazards.length,3);boss.hp=17;boss.phase='windup';boss.action='fan';boss.timer=.01;fight.hazards=[];updateCombat(fight,actor,.02,false);assert.equal(fight.hazards.length,5,'Boss phase two adds projectiles');
if(process.argv.includes('--logic-only')){console.log('20 monsters, boss cycle/phase two, guard, blink immunity/collision and 8 voices passed.');process.exit(0);}
for(const entry of codexEntries)for(const image of entry.images)await access(new URL('../public/witch-theater/'+image.file,import.meta.url));
const dialogue=JSON.parse(await readFile('src/ForgottenWitch/npc-dialogue.json','utf8'));assert(Object.values(dialogue).every(lines=>new Set(lines.map(l=>l.emotion)).size===5));
const browser=await chromium.launch({headless:true});
try{
  const base=process.env.WITCH_TEST_URL||'http://127.0.0.1:5173/web-hub',page=await browser.newPage({viewport:{width:1440,height:940}}),errors=[],missing=[];
 const settle=()=>page.waitForFunction(()=>!document.querySelector('.wt-scene-transition,.wt-motion-panel.is-leaving,.wt-loading'),null,{timeout:30000});
 const clickTravel=async button=>{await button.click();await settle();};
  page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)missing.push(r.url());});
  await page.addInitScript(()=>{const A=window.AudioContext;window.__tones=[];window.AudioContext=class extends A{createOscillator(){const node=super.createOscillator(),set=node.frequency.setValueAtTime.bind(node.frequency);node.frequency.setValueAtTime=(value,...args)=>{window.__tones.push(value);return set(value,...args);};return node;}};});
  await page.goto(base+'/games/forgotten-witch/',{waitUntil:'networkidle'});const menu=page.getByRole('navigation',{name:'극장 메인 메뉴'});
  await clickTravel(menu.getByRole('button',{name:'설정집',exact:true}));
  for(const [category,count] of [['등장인물',8],['몬스터',21],['사물',31],['음악',6]]){await page.getByRole('button',{name:category,exact:true}).click();assert.equal(await page.locator('.wt-codex-card').count(),count);}
  await page.locator('.wt-codex-card').first().click();assert((await page.locator('.wt-music-prompt').innerText()).includes('Instrumental'));await page.keyboard.press('Escape');await clickTravel(page.getByRole('button',{name:'← 메인 화면'}));
  await clickTravel(menu.getByRole('button',{name:'테스트',exact:true}));const canvas=page.locator('.wt-game canvas');
  const state=()=>canvas.evaluate(c=>JSON.parse(c.dataset.theater));
  const open=async()=>{await page.getByRole('button',{name:'테스트 위치',exact:true}).click();await page.getByRole('navigation',{name:'기능별 테스트 이동'}).waitFor();};
  for(const d of [...MONSTERS,BOSS]){
    await open();const before=await state();await page.waitForTimeout(150);assert.equal((await state()).combat.clock,before.combat.clock,'Choosing pauses combat');
    await page.getByLabel('테스트할 몬스터').selectOption(d.id);await clickTravel(page.getByRole('button',{name:'선택 몬스터 소환'}));
    await page.waitForFunction(id=>JSON.parse(document.querySelector('.wt-game canvas').dataset.theater).combat.selection===id,d.id);
    const s=await state();assert.equal(s.combat.monsters[0].kind,d.id);assert.equal(s.combat.monsters[0].hp,d.hp);
    if(d.id===BOSS.id){const bar=page.getByRole('progressbar',{name:BOSS.name+' 체력'});assert.equal(await bar.getAttribute('aria-valuenow'),'36');await page.keyboard.press('f');await page.waitForFunction(()=>Number(document.querySelector('.wt-boss-health [role=progressbar]')?.getAttribute('aria-valuenow'))<36,null,{timeout:12000});assert(Number(await bar.getAttribute('aria-valuenow'))<36,'Boss bar follows real hit');await page.screenshot({path:'.build-projects/witch-boss.png'});}
  }
  await open();await clickTravel(page.getByRole('button',{name:'이동 · 점프',exact:true}));const beforeBlink=await state();await page.keyboard.press('Shift');
  await page.waitForFunction(()=>JSON.parse(document.querySelector('.wt-game canvas').dataset.theater).combat.blinkTime>0);
  assert((await canvas.evaluate(c=>JSON.parse(c.dataset.theaterRig))).some(r=>r.name==='player'&&r.end.y===736));await page.screenshot({path:'.build-projects/witch-roll.png'});await page.waitForFunction(()=>JSON.parse(document.querySelector('.wt-game canvas').dataset.theater).combat.blinkTime===0);assert((await state()).x-beforeBlink.x>200,'Blink moves rapidly forward');
  for(const n of NPCS){
    await open();await page.getByLabel('소환할 NPC').selectOption(n.id);await clickTravel(page.getByRole('button',{name:'선택 NPC 소환'}));await page.keyboard.press('e');
    const box=page.getByRole('dialog',{name:conversationLabel(n.id)});await box.waitFor();await page.getByLabel('대사 출력 속도').press('End');
    const tonesBefore=await page.evaluate(()=>window.__tones.length),seen=new Set();
    while((await state()).mode==='dialogue'){
      seen.add(await box.getAttribute('data-emotion'));const s=await state();await page.keyboard.press('d');assert.equal((await state()).x,s.x,'NPC dialogue locks movement');
      await page.waitForFunction(()=>document.querySelector('.wt-dialogue')?.dataset.typing==='complete',null,{timeout:30000});
      const portrait=page.locator('.wt-portrait-right');await portrait.evaluate(img=>img.decode());assert((await portrait.getAttribute('src')).includes('/npcs/'+n.id+'-'));
      if(seen.size===1){await page.screenshot({path:'.build-projects/witch-npc-'+n.id+'.png'});}
      await page.getByRole('button',{name:/다음 문장|대화 마치기/}).click();
    }
    await settle();assert.equal(seen.size,5,n.id+' five emotion examples');const tones=await page.evaluate(start=>window.__tones.slice(start),tonesBefore);assert(tones.some(f=>Math.abs(f-n.frequency)<12),n.id+' unique voice');
  }
  await clickTravel(page.getByRole('link',{name:'← web hub'}));assert.equal(await page.locator('.wt-game canvas').count(),0,'Unmount cleans scene');assert.deepEqual(errors,[]);assert.deepEqual(missing,[]);
  console.log('Actual-input 21 enemy selections, boss HP, blinking, six NPCs/five expressions/unique voices, codex objects/music and cleanup passed.');
}finally{await browser.close();}
