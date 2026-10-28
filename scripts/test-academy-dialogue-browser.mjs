import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {chromium} from 'playwright';
const fixture=JSON.parse(await readFile('test-results/academy-dialogue/fixture.json','utf8'));
const initial={version:'world-simulation-v1',name:'대화 테스트',seed:fixture.ai.seed,nextCommandId:0,commands:[],world:fixture};
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:1400,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 const base=(process.env.ACADEMY_TEST_URL??'http://127.0.0.1:5193/web-hub')+'/games/academy-survival/';
 await page.goto(base+'?view=simulation');
 await page.getByText('새 세계 설정·저장 불러오기',{exact:true}).click();
 await page.getByLabel('불러올 세계 JSON',{exact:true}).fill(JSON.stringify(initial));
 await page.getByRole('button',{name:'세계 JSON 불러오기',exact:true}).click();
 await page.getByLabel('대화 발화자').selectOption('fixed-adelia');await page.getByLabel('대화 상대',{exact:true}).selectOption('fixed-estelle');
 await page.getByText('대사 후보·말투 디버그',{exact:true}).click();assert.match(await page.locator('.ac-dialogue-debug').innerText(),/390개/);
 await page.locator('.ac-dialogue-record').first().locator('summary').click();const transcript=page.locator('.ac-dialogue-transcript').first();await transcript.waitFor();
 const before=await page.locator('.ac-dialogue-feed').innerText();
 await transcript.getByRole('button',{name:'한 마디씩 읽기',exact:true}).click();
 if(await transcript.getByRole('button',{name:'다음 대사',exact:true}).count())await transcript.getByRole('button',{name:'다음 대사',exact:true}).click();
 await transcript.getByRole('button',{name:'모두 보기',exact:true}).click();assert.equal(await page.locator('.ac-dialogue-feed').innerText(),before);
 const scene=page.locator('.ac-dialogue-feed details').filter({hasText:'함께 나눈 이야기'}).first();await scene.locator('summary').click();assert.equal(await scene.locator('.ac-dialogue-utterance').count(),4);
 await scene.scrollIntoViewIfNeeded();await page.screenshot({path:'test-results/academy-dialogue/desktop.png'});
 const playerId=fixture.world.characters.find(c=>c.kind==='player').id;
 await page.evaluate(save=>localStorage.setItem('web-hub.academy.play.v0.5.slot.1',JSON.stringify(save)),{version:'academy-play-v0.5',savedAt:0,playerId,world:initial});
 await page.goto(base);await page.getByRole('button',{name:'슬롯 1 이어하기',exact:true}).click();await page.getByRole('button',{name:'나의 사건 기록',exact:true}).click();
 assert.equal(await page.locator('.ac-dialogue-feed details').count(),0,'private NPC transcript not shown to player');
 await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1));await page.screenshot({path:'test-results/academy-dialogue/mobile.png'});assert.deepEqual(errors,[]);
 console.log('Dialogue browser passed: developer facts and profiles, read controls, 4 timed utterances, private transcript filtering, mobile layout, no page errors.');
}finally{await browser.close();}
