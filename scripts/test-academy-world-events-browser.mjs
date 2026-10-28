import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {mkdir} from 'node:fs/promises';
const browser=await chromium.launch({headless:true});
const base=(process.env.ACADEMY_TEST_URL??'http://127.0.0.1:5181/web-hub')+'/games/academy-survival/';
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base+'?view=catalog&kind=world-event');await page.getByRole('heading',{name:'세계 이벤트',exact:true}).waitFor();
 assert.equal(await page.locator('.ac-tabs button').count(),22);assert.equal(await page.locator('.ac-interaction-grid button').count(),21);
 await page.getByRole('button',{name:'분실물 발견',exact:false}).first().click();await page.getByRole('dialog').waitFor();assert((await page.getByRole('dialog').innerText()).includes('실제 발동 조건'));await page.keyboard.press('Escape');
 const sourceDate=await page.getByRole('button',{name:'현재 게임 날짜 상세',exact:true}).innerText();
 await page.getByRole('button',{name:'테스트',exact:true}).click();await page.getByRole('heading',{name:'세계 이벤트 테스트 · 격리 샌드박스'}).waitFor();
 await page.getByRole('button',{name:'시드 적용·초기화',exact:true}).click();await page.getByLabel('강제 발생 이벤트').selectOption('class-question');await page.getByRole('button',{name:'확률·조건 기회 판정',exact:true}).click();await page.getByRole('button',{name:'확률·조건 기회 판정',exact:true}).click();assert((await page.getByLabel('이벤트 조작 결과').innerText()).includes('"alreadyProcessed": true'));await page.getByLabel('강제 발생 이벤트').selectOption('lost-property');
 await page.getByRole('button',{name:'NPC 생성',exact:true}).click();await page.getByRole('button',{name:'조건 준비: 선택 인물 광장 대기',exact:true}).click();
 await page.getByText('개발자 조건 준비',{exact:true}).click();await page.getByLabel('조건 준비 장소').selectOption('academy-plaza');await page.getByLabel('조건 준비 활동').selectOption('idle_wait');await page.getByRole('button',{name:'선택 장소·활동 강제 준비',exact:true}).click();await page.getByLabel('조건 준비 욕구 수치').fill('10');await page.getByRole('button',{name:'선택 인물 욕구 변경',exact:true}).click();assert.equal(await page.getByRole('alert').count(),0);
 await page.getByRole('button',{name:'NPC 상태·기억 확인',exact:true}).click();await page.getByRole('dialog').waitFor();assert((await page.getByRole('dialog').innerText()).includes('영향력'));await page.keyboard.press('Escape');
 await page.getByRole('button',{name:'강제 발생 (트리거만 우회)',exact:true}).click();assert.equal(await page.getByRole('alert').count(),0);
 await page.getByRole('button',{name:'+10분',exact:true}).click();await page.getByRole('button',{name:'+10분',exact:true}).waitFor({state:'visible'});await page.waitForFunction(()=>!document.querySelector('fieldset')?.disabled);
 assert.equal(await page.getByRole('alert').count(),0);assert(await page.locator('.ac-event-cards button').count()>0);
 await page.getByLabel('강제 발생 이벤트',{exact:true}).selectOption('rival-challenge');await page.getByRole('button',{name:'강제 발생 (트리거만 우회)',exact:true}).click();await page.getByRole('button',{name:'+10분',exact:true}).click();await page.waitForFunction(()=>!document.querySelector('fieldset')?.disabled);
 await page.getByRole('button',{name:'인과관계 그래프',exact:true}).click();assert.equal(await page.getByLabel('세계 이벤트 인과관계 그래프').count(),1);assert(await page.locator('svg [role=button]').count()>0);assert(await page.locator('path.ac-edge').count()>0);await mkdir('test-results/world-events',{recursive:true});await page.screenshot({path:'test-results/world-events/graph.png',fullPage:true});
 await page.getByLabel('그래프 확대').click();await page.locator('svg [role=button]').first().focus();await page.keyboard.press('Enter');await page.getByRole('dialog').waitFor();assert((await page.getByRole('dialog').innerText()).includes('발생 근거'));await page.keyboard.press('Escape');
 await page.getByRole('button',{name:'통합 JSON 저장',exact:true}).click();const save=JSON.parse(await page.getByLabel('세계 이벤트 저장 JSON').inputValue());assert(save.worldEvents.instances.length>0);assert(save.relationships.length>0);assert.equal(save.world.absoluteMinute,save.worldEvents.absoluteMinute);
 await page.getByRole('button',{name:'통합 JSON 복원',exact:true}).click();assert.equal(await page.getByRole('alert').count(),0);
 await page.setViewportSize({width:390,height:844});await mkdir('test-results/world-events',{recursive:true});await page.screenshot({path:'test-results/world-events/mobile.png',fullPage:false});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+2));
 await page.getByRole('button',{name:'초기화',exact:true}).click();await page.getByRole('button',{name:'닫기',exact:true}).click();await page.getByRole('heading',{name:'세계 이벤트',exact:true}).waitFor();assert.equal(await page.getByRole('button',{name:'현재 게임 날짜 상세',exact:true}).innerText(),sourceDate);
 assert.deepEqual(errors,[]);console.log('World events UI passed: catalogue/popup, sandbox generation/event/time, graph/keyboard/zoom, restore, mobile, reset and source isolation.');
}finally{await browser.close();}
