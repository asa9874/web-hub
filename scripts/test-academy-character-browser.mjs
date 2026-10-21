import {popupActions} from './academy-popup-test-helpers.mjs';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {mkdir} from 'node:fs/promises';
await mkdir('.build-projects',{recursive:true});
const browser=await chromium.launch({headless:true});
const base=(process.env.ACADEMY_TEST_URL||'http://127.0.0.1:5178/web-hub')+'/games/academy-survival/';
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 const popup=popupActions(page);
 const count=(selector,n)=>page.waitForFunction(({selector,n})=>document.querySelectorAll(selector).length===n,{selector,n});
 if(!process.env.ACADEMY_CHARACTER_CASE){
 await page.goto(base);await page.getByRole('button',{name:/설정집 기록 열람/}).click();await popup.close();await page.getByRole('button',{name:'고정 등장인물 1',exact:true}).click();await count('.ac-character-card',1);await page.locator('.ac-character-card').click();
 await page.locator('.ac-character-hero h2').filter({hasText:'세레나'}).waitFor();await count('.ac-character-stats dl>div',7);await count('.ac-character-proficiencies li',6);await count('.ac-character-traits .ac-fixed-slot',4);await count('.ac-random-slot',1);await count('.ac-character-gifts .ac-fixed-slot',3);
 assert((await page.locator('.ac-character-stats').innerText()).includes('S · 초인'));assert((await page.locator('.ac-character-current-status').innerText()).includes('현재 특별한 상태 없음'));
 await page.locator('.ac-random-slot summary').click();assert((await page.locator('.ac-random-slot').innerText()).includes('후보 6개'));assert.equal(await page.locator('.ac-random-slot a').count(),0);
 const values=await page.locator('.ac-character-stats').innerText();await page.reload();await page.locator('.ac-character-hero h2').filter({hasText:'세레나'}).waitFor();assert.equal(await page.locator('.ac-character-stats').innerText(),values);await count('.ac-random-slot',1);
 const links=[['.ac-character-stats a','근력 STR'],['.ac-character-proficiencies a','검술'],['.ac-character-traits a','부러지지 않은 이름'],['.ac-character-gifts a','새벽의 계승자']];
 for(const [selector,title] of links){await page.locator(selector).first().click();await page.getByRole('heading',{level:2,name:title,exact:true}).first().waitFor();await page.goBack();await page.locator('.ac-character-hero h2').filter({hasText:'세레나'}).waitFor();}
 await page.locator('.ac-character-current-status summary').click();await page.locator('.ac-character-current-status').getByRole('link',{name:/행복함/}).click();await page.locator('.ac-status-detail h2').filter({hasText:'행복함'}).waitFor();await page.goBack();await page.locator('.ac-character-hero h2').filter({hasText:'세레나'}).waitFor();
 await popup.close();await page.getByRole('searchbox',{name:'고정 등장인물 검색'}).fill('없는인물');await count('.ac-character-card',0);await page.getByRole('heading',{name:'일치하는 인물이 없습니다'}).waitFor();await page.getByRole('button',{name:'전체 인물 보기'}).click();await count('.ac-character-card',1);
 await popup.close();await page.getByLabel('DEBUG',{exact:true}).click();await page.locator('.ac-character-card').click();await page.locator('.ac-character-debug').waitFor();assert((await page.locator('.ac-character-debug').innerText()).includes('모든 도감 참조 검사 통과'));
 await page.getByLabel('공통 상태창 표시 테스트').selectOption('player');await page.locator('.ac-character-panel[data-mode="actual"]').waitFor();assert.equal(await page.locator('.ac-random-slot').count(),0);assert((await page.locator('.ac-character-current-status').innerText()).includes('왼팔'));assert((await page.locator('.ac-character-traits').innerText()).includes('보유 특성 없음'));
 const playerStats=await page.locator('.ac-character-stats').innerText();await page.getByLabel('공통 상태창 표시 테스트').selectOption('random_npc');await page.waitForFunction(()=>document.querySelector('.ac-character-hero .ac-kicker').textContent.includes('랜덤 NPC'));assert.equal(await page.locator('.ac-character-stats').innerText(),playerStats);
 await page.getByLabel('공통 상태창 표시 테스트').selectOption('template');await page.locator('.ac-character-panel[data-mode="template"]').waitFor();await popup.close();await page.getByLabel('DEBUG',{exact:true}).click();await popup.reopen();await page.locator('.ac-character-demo').waitFor({state:'hidden'});await page.screenshot({path:'.build-projects/academy-character-desktop.png',fullPage:true});
 }
 await page.setViewportSize({width:390,height:844});await page.goto(base+'?view=catalog&kind=character&item=fixed-serena');await page.locator('.ac-character-hero h2').filter({hasText:'세레나'}).waitFor();
 assert.equal(await page.locator('.ac-tabs button').count(),15);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'mobile overflow');await page.screenshot({path:'.build-projects/academy-character-mobile.png',fullPage:true});
 await popup.close();await page.getByRole('button',{name:'상태 150',exact:true}).click();await count('.ac-status-card',150);await popup.close();await page.getByRole('button',{name:'숙련도 49',exact:true}).click();await count('.ac-knowledge-nav button',49);await popup.close();await page.getByRole('button',{name:'기프트 403',exact:true}).click();await count('.ac-gift-card',403);await popup.close();await page.getByRole('button',{name:'특성 405',exact:true}).click();await page.getByLabel('특성 정렬').selectOption('tree');await count('.ac-node',405);
 assert.deepEqual(errors,[]);console.log(`Character UI ${process.env.ACADEMY_CHARACTER_CASE||'full'} passed: entry, Serena slots, automatic grades, all five catalog backlinks/history, stable preview, DEBUG actual modes, empty records, eight tabs and 390px layout.`);
}finally{await browser.close();}
