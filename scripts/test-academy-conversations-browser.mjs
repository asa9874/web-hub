import assert from 'node:assert/strict';
import {readFile,mkdir} from 'node:fs/promises';
import {chromium} from 'playwright';
const fixture=JSON.parse(await readFile('test-results/academy-conversations/browser-save.json','utf8'));
await mkdir('test-results/academy-conversations',{recursive:true});
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:1400,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 const base=(process.env.ACADEMY_TEST_URL??'http://127.0.0.1:5192/web-hub')+'/games/academy-survival/';await page.goto(base);
 await page.evaluate(save=>localStorage.setItem('web-hub.academy.play.v0.5.slot.1',JSON.stringify(save)),fixture);await page.reload();await page.getByRole('button',{name:'슬롯 1 이어하기',exact:true}).click();
 const response=page.getByLabel('플레이어 응답',{exact:true});await response.waitFor();const before=await page.getByLabel('플레이 현재 시각').innerText();
 await response.getByRole('button',{name:'함께 생각해 보고 싶은 질문이 있어요.',exact:true}).first().click();await response.getByRole('button',{name:'확인하고 계속',exact:true}).click();await response.waitFor({state:'detached'});await page.waitForFunction(()=>document.querySelector('.ac-play-run-state')?.textContent==='선택 대기');
 await page.getByRole('button',{name:'나의 사건 기록',exact:true}).click();const panel=page.getByLabel('선택한 메뉴 내용',{exact:true});assert.equal(await panel.getByRole('button',{name:'대화 시간 +1분',exact:true}).count(),0);
 await panel.locator('.ac-dialogue-record').first().locator('summary').click();assert.notEqual(await page.getByLabel('플레이 현재 시각').innerText(),before,'accepted conversation advances its actual duration');assert.match(await panel.innerText(),/completed|완료/);assert.match(await panel.innerText(),/제가 아는 범위|물어봐|관점/);
 const recordIds=await panel.locator('.ac-dialogue-record').evaluateAll(rows=>rows.map(r=>r.dataset.conversationId)),records=recordIds.length;assert(records>0);await page.screenshot({path:'test-results/academy-conversations/desktop.png',fullPage:true});
 await page.getByRole('button',{name:'저장·이어하기',exact:true}).click();await page.getByRole('button',{name:'슬롯 2 저장',exact:true}).click();await page.reload();await page.getByRole('button',{name:'슬롯 2 이어하기',exact:true}).click();await page.keyboard.press('Escape');await page.getByRole('button',{name:'나의 사건 기록',exact:true}).click();assert.equal(await panel.locator('.ac-dialogue-record').count(),records);
 // Existing simulator clones the actual dialogue state, including private records.
 await page.getByRole('button',{name:'설정집',exact:true}).click();await page.getByText('개발 자료·도구',{exact:true}).click();await page.getByRole('button',{name:'개발 시뮬레이터 열기',exact:true}).click();await page.getByRole('heading',{name:'세계 시뮬레이션 · 관찰·통제',exact:true}).waitFor();const cloned=page.getByLabel('대화·사회생활',{exact:true});const cloneIds=await cloned.locator('.ac-play-record').evaluateAll(rows=>rows.map(r=>r.dataset.conversationId));assert(recordIds.every(id=>cloneIds.includes(id)),'developer clone retains every player record; private NPC records may also exist');const debugRequest=cloned.getByRole('button',{name:'대화 요청',exact:true});if(await debugRequest.isEnabled())await debugRequest.click();await page.getByRole('button',{name:'닫기',exact:true}).first().click();
 await page.getByRole('button',{name:'플레이로 돌아가기',exact:true}).click();await page.keyboard.press('Escape');await page.getByRole('button',{name:'나의 사건 기록',exact:true}).click();assert.equal(await panel.locator('.ac-dialogue-record').count(),records);
 await page.setViewportSize({width:390,height:844});await page.screenshot({path:'test-results/academy-conversations/mobile.png',fullPage:true});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1));assert.deepEqual(errors,[]);
 console.log('Conversation browser passed: persisted direct-choice pause, distinct question selection, automatic actual time/completion, rendered dialogue, slot restore, cloned observer state, mobile layout and no page errors.');
}finally{await browser.close();}
