import assert from 'node:assert/strict';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {chromium} from 'playwright';
const dir='test-results/academy-npc-actions';await mkdir(dir,{recursive:true});
const fixture=JSON.parse(await readFile(dir+'/fixture.json','utf8'));
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 const url=(process.env.ACADEMY_TEST_URL??'http://127.0.0.1:5193/web-hub')+'/games/academy-survival/';
 async function load(){await page.goto(url);await page.evaluate(save=>{localStorage.clear();localStorage.setItem('web-hub.academy.play.v0.5.slot.1',JSON.stringify(save));},fixture);await page.reload();await page.getByRole('button',{name:'슬롯 1 이어하기',exact:true}).click();}
 const nav=page.getByRole('navigation',{name:'플레이 메뉴'});
 async function inspect(){await page.locator('.ac-scene-people .ac-person-card').first().click();return page.getByRole('dialog').last();}
 await load();assert.equal(await nav.getByRole('button',{name:'전투·판정',exact:true}).count(),0);
 const hud=page.getByLabel('나의 상태 요약');assert.equal(await hud.locator('[data-resource] meter').count(),3);
 let dialog=await inspect();const actions=dialog.locator('.ac-npc-actions');await actions.waitFor();
 for(const id of ['casual_chat','study_together','train_together','sparring'])assert.equal(await actions.locator(`[data-npc-action="interaction/${id}"]`).count(),1);
 await dialog.screenshot({path:dir+'/character-actions.png'});
 await actions.locator('[data-npc-action="combat/attack"]').click();await page.getByLabel('이벤트 대화',{exact:true}).getByRole('button',{name:'예 · 진행',exact:true}).click();const battle=page.getByRole('region',{name:'턴제 전투'});await battle.waitFor();
 await battle.getByRole('button',{name:/^항복/}).click();await battle.waitFor({state:'hidden'});
 await nav.getByRole('button',{name:'나의 사건 기록',exact:true}).click();await page.getByRole('region',{name:'나의 전투 기록'}).waitFor();assert.match(await page.getByRole('region',{name:'나의 전투 기록'}).innerText(),/실전|전투/);
 await load();dialog=await inspect();await dialog.getByRole('button',{name:'자동 전투 · 결과 확인',exact:true}).click();await dialog.locator('[data-npc-action="interaction/sparring"]').click();await page.getByLabel('이벤트 대화',{exact:true}).getByRole('button',{name:'예 · 진행',exact:true}).click();await page.getByLabel('이벤트 대화',{exact:true}).getByRole('button',{name:'확인',exact:true}).click();
 await page.waitForFunction(()=>document.querySelector('.ac-play-run-state')?.textContent==='선택 대기');
 assert.equal(await page.getByRole('region',{name:'턴제 전투'}).count(),0);
 await nav.getByRole('button',{name:'나의 사건 기록',exact:true}).click();assert.match(await page.getByRole('region',{name:'나의 전투 기록'}).innerText(),/대련/);
 assert.equal(await nav.getByRole('button',{name:'생활·행동',exact:true}).count(),0);assert.equal(await page.getByRole('heading',{name:'함께 할 활동',exact:true}).count(),0);
 assert.equal(await nav.getByRole('button',{name:'대화·사회생활',exact:true}).count(),0);assert.equal(await page.getByLabel('대화 상대',{exact:true}).count(),0);
 await load();await nav.getByRole('button',{name:'주변 인물',exact:true}).click();await page.locator('.ac-play-cards .ac-person-card').first().click();await page.locator('.ac-npc-actions').waitFor();
 await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await page.screenshot({path:dir+'/mobile-actions.png'});
 assert.deepEqual(errors,[]);await writeFile(dir+'/browser.json',JSON.stringify({passed:true,removedCombatMenu:true,resources:true,sceneAndNearbyDetails:true,manualAndAutomaticCombat:true,history:true,mobile:true,errors},null,2));
 console.log('NPC actions UI passed: resource HUD, scene/nearby action entry, manual/automatic combat, history, consolidated controls and mobile.');
}finally{await browser.close();}
