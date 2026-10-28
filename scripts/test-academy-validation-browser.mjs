import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {mkdir} from 'node:fs/promises';
import {scenarioTask} from './academy-scenario.mjs';
const scenario=await scenarioTask({scenario:'npc-interaction',count:1,minutes:10,seed:'repro-failure'});assert.equal(scenario.status,'failed');
const report=JSON.stringify({version:'academy-validation-v1',profile:'fixture',status:'failed',elapsedMs:scenario.elapsedMs,summary:{passed:0,failed:1,skipped:0,reused:0},results:[{id:'scenario/npc-interaction',status:'failed',scenario}]});
await mkdir('test-results/academy-validation-ui',{recursive:true});const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:1280,height:900}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto((process.env.ACADEMY_TEST_URL??'http://127.0.0.1:5191/web-hub')+'/games/academy-survival/?view=catalog&kind=features');
 const sourceDate=await page.getByRole('button',{name:'현재 게임 날짜 상세',exact:true}).innerText();
 await page.getByRole('button',{name:'시뮬레이션',exact:true}).click();await page.getByRole('heading',{name:'세계 시뮬레이션 · 관찰·통제',exact:true}).waitFor();
 const sandboxDate=await page.getByLabel('시뮬레이션 현재 시각',{exact:true}).innerText();
 await page.getByRole('button',{name:'자동 검증',exact:true}).click();
 await page.getByLabel('검증 보고서 JSON',{exact:true}).fill('{"version":"wrong"}');await page.getByRole('button',{name:'검증 결과 가져오기',exact:true}).click();await page.getByRole('alert').waitFor();
 await page.getByLabel('검증 보고서 JSON',{exact:true}).fill(report);await page.getByRole('button',{name:'검증 결과 가져오기',exact:true}).click();
 assert.match(await page.getByLabel('검증 요약',{exact:true}).innerText(),/실패 1/);
 await page.getByRole('button',{name:'실패·상태 상세',exact:true}).click();assert.match(await page.getByRole('dialog').innerText(),/SCENARIO_SIZE/);await page.keyboard.press('Escape');
 await page.getByRole('button',{name:'격리된 시드로 재현',exact:true}).click();await page.getByRole('dialog',{name:'격리 재현 결과',exact:true}).waitFor();assert.match(await page.getByRole('dialog').innerText(),/SCENARIO_SIZE/);await page.keyboard.press('Escape');
 assert.equal(await page.getByLabel('시뮬레이션 현재 시각',{exact:true}).innerText(),sandboxDate);
 await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await page.screenshot({path:'test-results/academy-validation-ui/mobile.png',fullPage:true});
 await page.getByRole('button',{name:'닫기',exact:true}).click();assert.equal(await page.getByRole('button',{name:'현재 게임 날짜 상세',exact:true}).innerText(),sourceDate);assert.deepEqual(errors,[]);
 console.log('Validation UI passed: invalid input, structured failure, details, isolated seeded replay, unchanged sandbox/live time, mobile.');
}finally{await browser.close();}
