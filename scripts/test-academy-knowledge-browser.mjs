import {popupActions} from './academy-popup-test-helpers.mjs';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {mkdir} from 'node:fs/promises';

await mkdir('.build-projects',{recursive:true});
const browser=await chromium.launch({headless:true});
const base=(process.env.ACADEMY_TEST_URL||'http://127.0.0.1:5178/web-hub')+'/games/academy-survival/';
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 const popup=popupActions(page);
 const count=(selector,n)=>page.waitForFunction(({selector,n})=>document.querySelectorAll(selector).length===n,{selector,n});
 if(!['tail','mobile'].includes(process.env.ACADEMY_KNOWLEDGE_CASE)){
 if(process.env.ACADEMY_KNOWLEDGE_CASE!=='remaining'){
 await page.goto(base);
 await page.getByRole('button',{name:/설정집 기록 열람/}).click();
 await page.getByLabel('특성 정렬').selectOption('tree');await count('.ac-node',405);
 await popup.close();await page.getByRole('button',{name:'능력치 7',exact:true}).click();
 await count('.ac-knowledge-nav button',7);await page.locator('.ac-knowledge-nav button').first().click();await count('.ac-rank-row',10);
 assert((await page.locator('.ac-rank-list').innerText()).includes('90~100'));
 assert((await page.locator('.ac-rank-list').innerText()).includes('200 이상'));
 const strength=await page.locator('.ac-rank-list').innerText();
 await popup.close();await page.getByRole('button',{name:'매력 CHA',exact:true}).click();
 await page.locator('.ac-rank-reading h2').filter({hasText:'매력 CHA'}).waitFor();
 assert.notEqual(await page.locator('.ac-rank-list').innerText(),strength);
 }else{
 await page.goto(base+'?view=catalog&kind=stat&item=CHA');
 await page.locator('.ac-rank-reading h2').filter({hasText:'매력 CHA'}).waitFor();
 }
 await popup.close();await page.getByRole('button',{name:'숙련도 49',exact:true}).click();
 await count('.ac-knowledge-nav button',49);
 await page.getByRole('navigation',{name:'숙련도 대분류'}).getByRole('button',{name:'생활 7',exact:true}).click();
 await count('.ac-knowledge-nav button',7);
 await popup.close();await page.getByRole('searchbox',{name:'능력치·숙련도 검색'}).fill('요리');
 await count('.ac-knowledge-nav button',1);
 await page.getByRole('navigation',{name:'숙련도 빠른 이동'}).getByRole('button',{name:'요리',exact:true}).click();
 await page.locator('.ac-rank-reading h2').filter({hasText:'요리'}).waitFor();await count('.ac-rank-row',10);
 await page.getByRole('button',{name:'모두 접기'}).click();await count('.ac-rank-row p:not([hidden])',0);
 await page.getByRole('button',{name:'모두 펼치기'}).click();await count('.ac-rank-row p:not([hidden])',10);
 await popup.close();await page.getByLabel('DEBUG',{exact:true}).click();await popup.reopen();await count('.ac-knowledge-detail .ac-debug',1);
 assert((await page.locator('.ac-knowledge-detail .ac-debug').innerText()).includes('proficiency-cooking'));
 await page.reload();await count('.ac-rank-row',10);
 assert((await page.locator('.ac-rank-reading h2').innerText()).includes('요리'));
 await popup.close();await page.getByRole('button',{name:'필터 초기화',exact:true}).click();await count('.ac-knowledge-nav button',49);
 await popup.close();await page.getByRole('searchbox',{name:'능력치·숙련도 검색'}).fill('존재하지않는기술기록');await count('.ac-knowledge-nav button',0);
 await page.getByRole('heading',{name:'일치하는 기록이 없습니다'}).waitFor();
 await page.goto(base+'?view=catalog&kind=proficiency&item=proficiency-sword&debug=1');await count('.ac-rank-row',10);
 await page.locator('.ac-reference-group').first().locator('summary').click();
 await page.locator('.ac-reference-list button').first().click();
 await page.waitForURL(/kind=trait/);await page.locator('.ac-detail .ac-debug').waitFor();
 await page.locator('.ac-debug summary').filter({hasText:'능력치·숙련도 정의 참조'}).waitFor();
 }
 if(process.env.ACADEMY_KNOWLEDGE_CASE!=='mobile'){
 await page.goto(base+'?view=catalog&kind=gift&item=gift-world-small-error');
 await page.getByRole('heading',{name:'세계의 작은 오기',exact:true,level:2}).waitFor();await count('.ac-gift-card',403);
 await popup.close();await page.getByLabel('기프트 정렬').selectOption('impact-asc');
 await page.waitForFunction(()=>document.querySelector('.ac-gift-bottom>b')?.textContent.trim()==='IMPACT 0');
 await page.goto(base+'?view=catalog&kind=stat&item=STR&debug=1');await count('.ac-rank-row',10);
 await page.screenshot({path:'.build-projects/academy-knowledge-desktop.png',fullPage:true});
 }else{
 await page.goto(base+'?view=catalog&kind=stat&item=STR&debug=1');await count('.ac-rank-row',10);
 }
 await page.setViewportSize({width:390,height:844});
 await popup.close();await page.getByRole('button',{name:'숙련도 49',exact:true}).click();await count('.ac-knowledge-nav button',49);
 await popup.close();await page.getByRole('searchbox',{name:'능력치·숙련도 검색'}).fill('시계');
 await count('.ac-knowledge-nav button',1);
 await page.locator('.ac-knowledge-nav button').click();await page.waitForURL(/item=proficiency-clockwork/);
 await page.locator('.ac-rank-reading h2').filter({hasText:'정밀기계'}).waitFor();
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'mobile document overflow');
 assert.equal(await page.locator('.ac-tabs button').count(),11);
 await page.screenshot({path:'.build-projects/academy-knowledge-mobile.png',fullPage:true});
 assert.deepEqual(errors,[]);
 console.log(`Knowledge UI case ${process.env.ACADEMY_KNOWLEDGE_CASE||'full'} passed. Full scope: eight tabs, 7 stats, 49 skills, grade/rank reading, filters/search/empty state, expand/collapse, DEBUG, URL restoration, real content backlinks, existing gift sorting and 390px layout.`);
}finally{await browser.close();}
