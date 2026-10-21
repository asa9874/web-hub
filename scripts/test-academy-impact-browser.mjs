import {popupActions} from './academy-popup-test-helpers.mjs';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {mkdir} from 'node:fs/promises';
await mkdir('.build-projects',{recursive:true});
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 const popup=popupActions(page);
 const base=(process.env.ACADEMY_TEST_URL||'http://127.0.0.1:5178/web-hub')+'/games/academy-survival/';
 await page.goto(base+'?view=catalog&kind=character&item=fixed-serena&debug=1');
 await page.getByRole('heading',{name:'기준 캐릭터 영향력',exact:true}).waitFor();
 const score=page.getByTestId('character-impact');assert((await score.innerText()).startsWith('726'));assert.equal(await page.locator('.ac-character-impact meter').count(),6);
 await page.getByLabel('대표 칭호 변경',{exact:true}).selectOption('title-chosen');assert((await score.innerText()).startsWith('726'));
 await page.locator('.ac-character-social li').filter({has:page.getByRole('link',{name:'용사 ↗',exact:true})}).getByRole('button',{name:'보유 제거 테스트'}).click();
 await page.waitForFunction(()=>document.querySelector('[data-testid="character-impact"]')?.textContent.startsWith('596'));
 await page.reload();await page.waitForFunction(()=>document.querySelector('[data-testid="character-impact"]')?.textContent.startsWith('726'));
 await page.getByLabel('공통 상태창 표시 테스트').selectOption('player');await page.getByRole('heading',{name:'최종 캐릭터 영향력',exact:true}).waitFor();const playerScore=await score.innerText();
 await page.getByLabel('공통 상태창 표시 테스트').selectOption('random_npc');assert.equal(await score.innerText(),playerScore);
 await popup.close();await page.getByRole('button',{name:'수치 체계',exact:true}).click();await page.getByRole('heading',{name:'캐릭터 영향력 계산식 v1',exact:true}).waitFor();assert.equal(await page.locator('.ac-tabs button').count(),12);assert.equal(await page.getByRole('button',{name:'특성 405',exact:true}).getAttribute('aria-pressed'),'false');
 assert((await page.locator('.ac-numeric-systems').innerText()).includes('0.25'));
 await page.reload();await page.getByRole('heading',{name:'캐릭터 영향력 계산식 v1',exact:true}).waitFor();await page.screenshot({path:'.build-projects/academy-impact-rules.png',fullPage:true});
 await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'numeric mobile overflow');
 await popup.close();await page.getByRole('button',{name:'고정 등장인물 1',exact:true}).click();await page.locator('.ac-character-card').click();await page.getByRole('heading',{name:'기준 캐릭터 영향력',exact:true}).waitFor();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'panel mobile overflow');await page.screenshot({path:'.build-projects/academy-impact-panel.png',fullPage:true});
 assert.deepEqual(errors,[]);console.log('Impact UI passed: baseline726, six contributions, representative invariance, removed hero596/reset726, player/random parity, numeric page reload + 390px ten-tab layout.');
}finally{await browser.close();}
