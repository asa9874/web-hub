import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
await mkdir('.build-projects',{recursive:true});
const base=process.env.WITCH_TEST_URL||'http://127.0.0.1:5173/web-hub';
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:1440,height:940}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(()=>{window.__motionAudio=[];const A=window.AudioContext;window.AudioContext=class extends A{constructor(...args){super(...args);window.__motionAudio.push(this);}};});
 await page.route('**/witch-theater/witch-walk.png',async route=>{await new Promise(r=>setTimeout(r,1600));await route.continue();});
 await page.route('**/witch-theater/audio/ui.ogg',async route=>{await new Promise(r=>setTimeout(r,2200));await route.continue();});
 await page.goto(base+'/games/forgotten-witch/',{waitUntil:'domcontentloaded'});
 const meter=page.getByRole('progressbar',{name:'무대 준비 진행률'});
 await meter.waitFor();assert.equal(await page.locator('.wt-loading-puppet img').count(),3);
 await page.waitForFunction(()=>Number(document.querySelector('.wt-loading-meter')?.getAttribute('aria-valuenow'))>=20);
 assert(Number(await meter.getAttribute('aria-valuenow'))<100,'Real delayed resources prevent fake completion');
 assert(await page.locator('.wt-title-screen').evaluate(e=>e.inert),'Loading blocks keyboard access to menu');
 await page.screenshot({path:'.build-projects/witch-loading.png'});
 const settle=()=>page.waitForFunction(()=>!document.querySelector('.wt-scene-transition,.wt-motion-panel.is-leaving,.wt-loading'),null,{timeout:30000});
 await settle();assert.equal(await page.evaluate(()=>window.__motionAudio.length),0,'No audio context before a user gesture');
 const canvas=page.locator('.wt-game canvas'),state=()=>canvas.evaluate(c=>JSON.parse(c.dataset.theater));
 await page.evaluate(()=>{window.__covered=false;window.__phases=[];window.__lockedFrames=0;window.__lockMoved=false;const origin=JSON.parse(document.querySelector(".wt-game canvas").dataset.theater).x;const inspect=()=>{const e=document.querySelector('.wt-scene-transition');if(e){const state=JSON.parse(document.querySelector('.wt-game canvas').dataset.theater);if(state.motionLocked){window.__lockedFrames++;window.__lockMoved ||= state.x!==origin;}window.__phases.push(e.dataset.transitionPhase);if(e.dataset.transitionPhase==='covered'){const s=e.getBoundingClientRect(),[a,b]=[...e.querySelectorAll('.wt-scene-wing')].map(e=>e.getBoundingClientRect());window.__covered=a.left<=s.left+1&&a.right>=b.left&&b.right>=s.right-1&&a.top<=s.top+1&&a.bottom>=s.bottom-1;}}requestAnimationFrame(inspect);};inspect();});
 const initial=await state();await page.getByRole('button',{name:'테스트',exact:true}).click();
 await page.locator('.wt-transition-closing').waitFor();await page.keyboard.press('Space');await page.keyboard.press('d');
 // Capture locked frames in the browser so slow test RPCs cannot mistake a finished transition for a locked frame.
 await settle();assert(await page.evaluate(()=>window.__lockedFrames>2&&!window.__lockMoved),'Closed curtain locks player input');assert(await page.evaluate(()=>window.__covered),'Curtain covers the whole logical stage without a seam');assert((await page.evaluate(()=>window.__phases)).includes('opening'));
 assert.equal((await state()).mode,'explore');assert.equal((await state()).audio.loaded,9);assert.equal((await state()).motionLocked,false);
 await page.keyboard.down('d');await page.waitForFunction(x=>JSON.parse(document.querySelector('.wt-game canvas').dataset.theater).x>x+15,initial.x);await page.keyboard.up('d');
 await page.keyboard.press('Escape');await page.getByRole('dialog',{name:'일시정지'}).waitFor();
 await page.evaluate(()=>{window.__exitingPanel=false;const observer=new MutationObserver(()=>{if(document.querySelector('[data-panel=pause].is-leaving')?.inert){window.__exitingPanel=true;observer.disconnect();}});observer.observe(document.querySelector('.wt-overlay'),{subtree:true,attributes:true,attributeFilter:['class','inert']});});
 await page.keyboard.press('Escape');await page.waitForFunction(()=>window.__exitingPanel);await settle();assert(await page.evaluate(()=>window.__exitingPanel),'Exiting panels are inert');
 await page.getByRole('button',{name:'테스트 위치',exact:true}).click();await page.getByRole('button',{name:'이동 · 점프',exact:true}).click();await settle();assert.equal((await state()).motionLocked,false);
 await page.getByRole('link',{name:'← web hub'}).click();await page.locator('.hub').waitFor();assert.equal(await canvas.count(),0);await page.waitForFunction(()=>window.__motionAudio.every(c=>c.state==='closed'));
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto(base+'/games/forgotten-witch/',{waitUntil:'domcontentloaded'});await page.locator('.wt-loading-puppet').first().waitFor();assert.equal(await page.locator('.wt-loading-puppet').first().evaluate(e=>getComputedStyle(e).animationName),'none');await settle();
 await page.getByRole('button',{name:'테스트',exact:true}).click();await settle();assert.equal((await state()).environment.reducedMotion,true);
 await page.getByRole('link',{name:'← web hub'}).click();await page.locator('.hub').waitFor();
 // Leave while the delayed image/audio requests are still pending, before Scene.create runs.
 await page.goto(base+'/games/forgotten-witch/',{waitUntil:'domcontentloaded'});await meter.waitFor();await page.getByRole('link',{name:'← web hub'}).click();await page.locator('.hub').waitFor();await page.waitForTimeout(2300);assert.equal(await canvas.count(),0);assert(await page.evaluate(()=>window.__motionAudio.every(c=>c.state==='closed')));
 assert.deepEqual(errors,[]);console.log('Real resource loading, three SD puppets, gesture-only audio, curtain coverage/input lock, panel exit, teleport, reduced motion and teardown passed.');
}finally{await browser.close();}
