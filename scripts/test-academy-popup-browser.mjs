import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {mkdir} from 'node:fs/promises';

const base=(process.env.ACADEMY_TEST_URL||'http://127.0.0.1:5178/web-hub')+'/games/academy-survival/';
await mkdir('.build-projects',{recursive:true});
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
 page.setDefaultTimeout(12000);page.on('pageerror',e=>errors.push(e.message));
 const close=async()=>{await page.getByRole('button',{name:'상세 닫기',exact:true}).click();await page.getByRole('dialog').waitFor({state:'detached'});};
 const count=async(selector,n)=>{await page.waitForFunction(({selector,n})=>document.querySelectorAll(selector).length===n,{selector,n});};
 await page.goto(base+'?view=catalog');await count('.ac-trait-impact-card',405);
 assert.equal(await page.locator('.ac-detail').count(),0);
 assert.equal(await page.locator('.ac-trait-impact-card p').count(),0);
 const first=page.locator('.ac-trait-impact-card').first();await first.click();await page.getByRole('dialog').waitFor();
 assert.equal(await page.evaluate(()=>document.body.style.overflow),'hidden');
 assert(await page.getByRole('dialog').locator('blockquote').isVisible());
 await page.keyboard.press('Escape');await page.getByRole('dialog').waitFor({state:'detached'});
 assert(await first.evaluate(el=>el===document.activeElement),'restore opener focus');
 assert.notEqual(await page.evaluate(()=>document.body.style.overflow),'hidden');
 await page.getByRole('button',{name:'기프트 403',exact:true}).click();await count('.ac-gift-card',403);
 assert.equal(await page.locator('.ac-gift-card p').count(),0);
 const cards=await page.locator('.ac-gift-card').evaluateAll(nodes=>nodes.slice(0,6).map(n=>({x:n.getBoundingClientRect().x,y:n.getBoundingClientRect().y,h:n.getBoundingClientRect().height})));
 assert(cards.filter(c=>c.y===cards[0].y).length>=4,'at least four desktop columns');assert(cards[0].h<135);
 await page.getByLabel('도감 검색',{exact:true}).fill('새벽의 계승자');await count('.ac-gift-card',1);await page.locator('.ac-gift-card').click();await page.getByRole('dialog').getByRole('heading',{name:'새벽의 계승자',exact:true}).waitFor();
 await page.reload();await page.getByRole('dialog').waitFor();await close();assert.equal(await page.getByLabel('도감 검색',{exact:true}).inputValue(),'새벽의 계승자');
 await page.getByRole('button',{name:'특성 405',exact:true}).click();await page.getByLabel('특성 정렬',{exact:true}).selectOption('tree');await count('.ac-node',405);assert(await page.locator('.ac-tree svg path').count()>0);await page.locator('.ac-node').first().click();await close();
 // All catalog types use the exact same controlled popup, including old deep links.
 for(const [kind,id,selector] of [
  ['stat','STR','.ac-rank-row'],['proficiency','proficiency-sword','.ac-rank-row'],
  ['status','status-rabbit-form','.ac-status-detail'],['position','position-crown-heir','.ac-detail'],
  ['title','title-chosen','.ac-detail'],['character','fixed-serena','.ac-character-panel'],
 ]){
  await page.goto(base+`?view=catalog&kind=${kind}&item=${id}&debug=1`);
  const dialog=page.getByRole('dialog');await dialog.locator(selector).first().waitFor();
  if(kind==='stat'||kind==='proficiency'){assert.equal(await dialog.locator('.ac-rank-row').count(),10);await dialog.getByRole('button',{name:'모두 접기',exact:true}).click();assert.equal(await dialog.locator('.ac-rank-row p:visible').count(),0);}
  if(kind==='character'){
   assert((await dialog.getByTestId('character-impact').innerText()).startsWith('726'));
   await dialog.locator('.ac-character-stats a').first().click();await dialog.locator('.ac-rank-row').first().waitFor();await page.goBack();await dialog.locator('.ac-character-panel').waitFor();
  }
  await close();assert.equal(await page.locator('.ac-detail-container').count(),0);
 }
 await page.goto(base+'?view=catalog&kind=organization');
 const node=id=>page.locator(`[data-org-select="${id}"]`);
 await count('[data-org-select]',2);await page.getByRole('button',{name:'전체 펼치기',exact:true}).click();await count('[data-org-select]',33);
 assert.equal(await page.locator('.ac-org-branch>ul').count()>5,true);
 await node('royal-first-platoon').click();await page.getByRole('dialog').getByRole('heading',{name:'제1소대',exact:true}).waitFor();
 assert((await page.getByRole('navigation',{name:'소속 계층 경로'}).innerText()).includes('제국 > 제국군 > 황실기사단 > 제1소대'));await close();
 await node('royal-order').focus();await page.keyboard.press('ArrowLeft');await count('[data-org-select]',31);await page.keyboard.press('ArrowRight');await count('[data-org-select]',33);
 await page.getByRole('button',{name:'전체 접기',exact:true}).click();await count('[data-org-select]',2);
 await page.getByLabel('조직 검색',{exact:true}).fill('금지술식');await node('abyss-forbidden').waitFor();await node('abyss-forbidden').click();await page.getByRole('dialog').getByRole('heading',{name:'금지술식 연구부',exact:true}).waitFor();await close();
 await page.getByLabel('조직 검색',{exact:true}).fill('');await page.getByRole('button',{name:'전체 펼치기',exact:true}).click();await page.screenshot({path:'.build-projects/academy-organization-tree.png'});
 // Background click and Tab stay correct; narrow layouts have no page-level overflow.
 await page.setViewportSize({width:390,height:844});await page.goto(base+'?view=catalog&kind=gift');await count('.ac-gift-card',403);
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await page.locator('.ac-gift-card').first().click();
 await page.keyboard.press('Shift+Tab');assert(await page.getByRole('dialog').evaluate(el=>el.contains(document.activeElement)));
 assert(await page.getByRole('dialog').evaluate(el=>el.scrollWidth<=el.clientWidth+1));await page.screenshot({path:'.build-projects/academy-popup-mobile.png'});
 await close();await page.goto(base+'?view=catalog&kind=organization');await page.getByRole('button',{name:'전체 펼치기',exact:true}).click();await count('[data-org-select]',33);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 await node('abyss-forbidden').click();await page.getByRole('dialog').waitFor();await close();
 await page.goto(base+'?view=catalog&kind=gift&item=missing-record');await page.getByRole('dialog').getByRole('alert').waitFor();await close();
 assert.deepEqual(errors,[]);
 console.log('Popup UI passed: compact 405 traits/403 gifts, evolution view, all 9 entry types, deep links/reload/history, focus trap/return, scroll lock, 10 ranks, Serena726, connected33-node tree/collapse/search/keyboard and 390px layout.');
}finally{await browser.close();}
