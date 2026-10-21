import assert from 'node:assert/strict';
import {chromium} from 'playwright';
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.setDefaultTimeout(12000);page.on('pageerror',e=>errors.push(e.message));
 const base=(process.env.ACADEMY_TEST_URL||'http://127.0.0.1:5178/web-hub')+'/games/academy-survival/';
 await page.goto(base+'?view=npc-generator');await page.getByLabel('생성 수량',{exact:true}).selectOption('1');await page.getByRole('button',{name:'NPC 생성',exact:true}).click();await page.locator('.ac-character-panel').waitFor();
 const record=await page.locator('.ac-character-debug pre').textContent();
 await page.locator('.ac-character-traits a').first().click();await page.getByRole('dialog').locator('.ac-detail').waitFor();
 await page.evaluate(()=>{Object.defineProperty(navigator.clipboard,'writeText',{configurable:true,value:async text=>{window.__copiedEntryUrl=text;}});});
 await page.getByRole('dialog').getByRole('button',{name:'항목 링크 복사 ↗',exact:true}).click();
 const copied=new URL(await page.evaluate(()=>window.__copiedEntryUrl));assert.equal(copied.searchParams.get('view'),'catalog');assert.equal(copied.pathname,new URL(base).pathname);assert.equal(copied.searchParams.get('item'),new URL(page.url()).searchParams.get('item'));
 assert(new URL(page.url()).searchParams.get('view')==='npc-generator','opening reference must keep the caller mounted');
 assert.equal(await page.locator('.ac-character-debug pre').textContent(),record);
 // Click outside the native modal rectangle: backdrop dismisses without a route change.
 await page.mouse.click(2,2);await page.getByRole('dialog').waitFor({state:'detached'});
 assert.equal(await page.locator('.ac-character-debug pre').textContent(),record,'closing preserves generated NPC and worker results');
 assert(await page.locator('.ac-character-traits a').first().evaluate(el=>el===document.activeElement));
 await page.goto(base+'?view=catalog&kind=status&item=status-bleeding&debug=1');await page.getByRole('dialog').locator('.ac-status-tester').waitFor();
 await page.getByLabel('테스트 상태',{exact:true}).selectOption('status-fracture');await page.getByLabel('테스트 부위',{exact:true}).selectOption('left-arm');await page.getByRole('button',{name:'임시 적용',exact:true}).click();await page.locator('.ac-status-instance').waitFor();
 await page.getByLabel('test-1 단계',{exact:true}).selectOption('broken');assert((await page.locator('.ac-status-action-result').innerText()).includes('수행 불가'));
 await page.keyboard.press('Escape');await page.getByRole('dialog').waitFor({state:'detached'});assert.notEqual(await page.evaluate(()=>document.body.style.overflow),'hidden');
 assert.deepEqual(errors,[]);console.log('Popup reuse passed: generated NPC stays mounted and unchanged, catalog link opens overlay, backdrop close/focus return, DEBUG status application/stage restrictions inside modal.');
}finally{await browser.close();}
