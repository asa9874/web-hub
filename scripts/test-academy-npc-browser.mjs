import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {mkdir} from 'node:fs/promises';
await mkdir('.build-projects',{recursive:true});
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',error=>errors.push(error.message));
 const base=(process.env.ACADEMY_TEST_URL||'http://127.0.0.1:5178/web-hub')+'/games/academy-survival/';
 await page.goto(base+'?view=npc-generator');await page.getByRole('heading',{name:'NPC 생성 테스트기',exact:true}).waitFor();
 await page.getByLabel('생성 수량',{exact:true}).selectOption('1');await page.getByLabel('랜덤 시드',{exact:true}).fill('academy-v1-audit');
 const generate=async(count)=>{const before=Number(await page.locator('.ac-npc-generator').getAttribute('data-completed'));await page.getByRole('button',{name:'NPC 생성',exact:true}).click();await page.waitForFunction(previous=>Number(document.querySelector('.ac-npc-generator')?.getAttribute('data-completed'))>previous,before);await page.waitForFunction(expected=>document.querySelectorAll('.ac-npc-table tbody tr').length===expected,count);assert.equal(await page.locator('.ac-npc-table tbody tr').count(),count);};
 const record=async()=>JSON.parse(await page.locator('.ac-character-debug pre').textContent());
 if(process.env.NPC_TEST_CASE==='refresh'){
 await page.getByLabel('생성 학년',{exact:true}).selectOption('1');await generate(1);assert((await page.locator('.ac-character-social').textContent()).includes('아카데미 1학년'));
 await page.getByLabel('생성 학년',{exact:true}).selectOption('4');await generate(1);assert((await page.locator('.ac-character-social').textContent()).includes('아카데미 4학년'));assert(!(await page.locator('.ac-character-social').textContent()).includes('아카데미 1학년'));assert.equal((await record()).schoolYear,4);
 console.log('NPC regenerated same seed/index with changed grade: social holdings and derived impact reset correctly.');
 }else{
 await generate(1);const first=await record();assert.equal(first.kind,'random_npc');assert.equal(await page.locator('.ac-character-impact meter').count(),6);
 await generate(1);assert.deepEqual(await record(),first);
 await page.getByLabel('생성 수량',{exact:true}).selectOption('100');await generate(100);assert.deepEqual(await record(),first);assert((await page.locator('.ac-npc-stat-grid>div').first().textContent()).includes('총 생성100'));await page.locator('.ac-npc-table tbody tr').nth(1).getByRole('button').click();assert.notEqual((await record()).name,first.name);
 await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'generator mobile overflow');await page.screenshot({path:'.build-projects/academy-npc-mobile.png',fullPage:false});
 await page.getByLabel('생성 수량',{exact:true}).selectOption('1');await page.getByLabel('생성 학년',{exact:true}).selectOption('1');await page.getByLabel('생성 전공',{exact:true}).selectOption('sword');await page.getByLabel('생성 성장 유형',{exact:true}).selectOption('ordinary');await page.getByLabel('목표 영향력 최소',{exact:true}).fill('1000');await page.getByLabel('목표 영향력 최대',{exact:true}).fill('1000');await generate(1);assert((await page.locator('.ac-npc-evidence').innerText()).includes('16회'));assert((await page.locator('.ac-npc-table tbody').innerText()).includes('범위 미충족'));assert.equal((await record()).schoolYear,1);
 await page.getByLabel('목표 영향력 최소',{exact:true}).fill('900');await page.getByLabel('목표 영향력 최대',{exact:true}).fill('100');await page.getByRole('button',{name:'NPC 생성',exact:true}).click();await page.getByRole('alert').filter({hasText:'목표 영향력'}).waitFor();
 await page.getByLabel('목표 영향력 최소',{exact:true}).fill('');await page.getByLabel('목표 영향력 최대',{exact:true}).fill('');await page.getByLabel('아카데미 생도',{exact:true}).uncheck();await generate(1);assert.equal((await record()).schoolYear,0);assert(!(await record()).positions.some(p=>p.definitionId.startsWith('position-academy-year-')));
 await page.goto(base+'?view=catalog&kind=numbers');await page.getByRole('heading',{name:'아카데미 생도 성장 기준',exact:true}).waitFor();assert.equal(await page.locator('.ac-numeric-systems .ac-npc-table tbody tr').count(),4);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'growth table mobile overflow');
 await page.getByRole('button',{name:'NPC 생성 테스트',exact:true}).click();await page.getByRole('heading',{name:'NPC 생성 테스트기',exact:true}).waitFor();assert.equal(await page.locator('.ac-npc-table tbody tr').count(),0,'results are ephemeral');
 }
 assert.deepEqual(errors,[]);if(!process.env.NPC_TEST_CASE)console.log('NPC UI passed: real worker 1/100 generation, seed replay/prefix, selected common panel, 390px, bounded target failure, invalid range diagnostics, nonstudent, growth bands and ephemeral results.');
}finally{await browser.close();}
