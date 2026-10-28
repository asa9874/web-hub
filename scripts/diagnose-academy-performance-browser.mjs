import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const folder=process.env.ACADEMY_PERFORMANCE_RESULTS_DIR??'test-results/academy-performance',initial=await readFile(`${folder}/browser-initial.json`,'utf8'),data=JSON.parse(initial);
assert.equal(data.ai.states.length,100);assert(data.worldEvents&&data.knowledge&&data.interactions&&data.outcomes);
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}});page.setDefaultTimeout(45000);
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto((process.env.ACADEMY_TEST_URL??'http://127.0.0.1:5183/web-hub')+'/games/academy-survival/?view=world-event-tester');
 await page.getByRole('heading',{name:'세계 이벤트 테스트 · 격리 샌드박스'}).waitFor();
 const samples=[];
 for(let run=0;run<2;run++){
  await page.getByLabel('실제 NPC AI 실행').uncheck();
  await page.getByLabel('세계 이벤트 저장 JSON').fill(initial);
  await page.getByRole('button',{name:'통합 JSON 복원',exact:true}).click();
  assert.equal(await page.getByRole('alert').count(),0);
  await page.getByLabel('실제 NPC AI 실행').check();
  const started=performance.now();await page.getByRole('button',{name:'+1시간',exact:true}).click();
  await page.waitForFunction(()=>!document.querySelector('fieldset')?.disabled);
  await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(resolve)));
  const elapsedMs=performance.now()-started;
  await page.getByRole('button',{name:'통합 JSON 저장',exact:true}).click();
  const after=JSON.parse(await page.getByLabel('세계 이벤트 저장 JSON').inputValue());
  assert.equal(after.world.absoluteMinute-data.world.absoluteMinute,60);assert.equal(after.ai.states.length,100);
  assert.equal(after.knowledge.counters.errors,0);assert.equal(await page.getByRole('alert').count(),0);
  samples.push({run:run+1,elapsedMs,actualMinutes:60,aiCount:after.ai.states.length,stateSha256:createHash('sha256').update(JSON.stringify(after)).digest('hex'),decisions:after.ai.states.reduce((sum,s)=>sum+s.decisionIndex,0)-data.ai.states.reduce((sum,s)=>sum+s.decisionIndex,0),worldEvents:after.worldEvents.instances.length-data.worldEvents.instances.length,memories:after.knowledge.memories.length-data.knowledge.memories.length});
 }
 assert.deepEqual(errors,[]);
 const report={browser:browser.version(),headless:true,viewport:{width:1440,height:1000},scenario:'classes; same initial 100-NPC full-engine snapshot as Node fixture',scope:'Existing sandbox UI click through completion/next animation frame; includes Playwright click overhead. Not a released campaign or weekly benchmark.',samples,meanMs:samples.reduce((sum,s)=>sum+s.elapsedMs,0)/samples.length,slowestMs:Math.max(...samples.map(s=>s.elapsedMs))};
 await writeFile(`${folder}/browser-report.json`,JSON.stringify(report,null,2));console.log(report);
}finally{await browser.close();}
