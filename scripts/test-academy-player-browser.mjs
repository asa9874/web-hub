import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {mkdir} from 'node:fs/promises';
await mkdir('test-results/academy-player',{recursive:true});
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:1360,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 const url=(process.env.ACADEMY_TEST_URL??'http://127.0.0.1:5192/web-hub')+'/games/academy-survival/';await page.goto(url);
 await page.getByText('세계·출신 배경 설정',{exact:true}).click();await page.getByLabel('플레이 시드',{exact:true}).fill('player-browser');await page.getByLabel('플레이 NPC 수',{exact:true}).fill('3');await page.getByLabel('플레이어 이름',{exact:true}).fill('하린');
 await page.getByRole('button',{name:'새 생활 시작',exact:true}).click();await page.getByRole('heading',{name:'나의 생활',exact:true}).waitFor();assert.match(await page.locator('.ac-play-grid>aside').innerText(),/하린/);
 assert.equal(await page.getByRole('button',{name:'수동 조작',exact:true}).count(),0);assert.equal(await page.getByRole('button',{name:'일시정지',exact:true}).count(),0);await page.getByRole('group',{name:'플레이어 활동',exact:true}).getByRole('button',{name:'자율 학습',exact:true}).click();await page.getByLabel('플레이어 행동 분',{exact:true}).fill('30');await page.getByRole('button',{name:'행동 시작',exact:true}).click();
 await page.waitForFunction(()=>document.querySelector('.ac-play-heading [role="status"]')?.textContent==='선택 대기');assert.match(await page.locator('.ac-play-grid>aside').innerText(),/도서관/);
 await page.getByText('생활 방침 편집',{exact:true}).click();await page.getByLabel('방침 학업',{exact:true}).fill('40');await page.getByRole('button',{name:'생활 방침 적용',exact:true}).click();assert.equal(await page.locator('[role="alert"]').count(),0);
 await page.getByRole('button',{name:'+1시간',exact:true}).click();await page.waitForFunction(()=>document.querySelector('.ac-play-heading [role="status"]')?.textContent==='선택 대기');
 await page.getByText('최근 진행 요약',{exact:true}).click();assert.match(await page.getByLabel('플레이어 생활·행동').innerText(),/실제 \d+분/);
 await page.getByRole('button',{name:'저장·이어하기',exact:true}).click();await page.getByRole('button',{name:'슬롯 1 저장',exact:true}).click();await page.getByText('슬롯 1에 저장했습니다.',{exact:true}).waitFor();
 const time=await page.getByLabel('플레이 현재 시각',{exact:true}).innerText();await page.reload();await page.getByRole('button',{name:'슬롯 1 이어하기',exact:true}).click();assert.equal(await page.getByLabel('플레이 현재 시각',{exact:true}).innerText(),time);assert.match(await page.locator('.ac-play-grid>aside').innerText(),/하린/);await page.getByText('생활 방침 편집',{exact:true}).click();assert.equal(await page.getByLabel('방침 학업',{exact:true}).inputValue(),'40');
 await page.getByRole('button',{name:'설정집',exact:true}).click();await page.getByText('개발 자료·도구',{exact:true}).click();await page.getByRole('button',{name:'개발 시뮬레이터 열기',exact:true}).click();await page.getByText('플레이어 생활·행동 제어',{exact:true}).waitFor();await page.getByText('플레이어 생활·행동 제어',{exact:true}).click();await page.getByRole('button',{name:'플레이어 수동 모드',exact:true}).click();await page.getByRole('button',{name:'플레이어 포함 새 세계',exact:true}).click();await page.getByText('플레이어 생활·행동 제어',{exact:true}).waitFor();await page.getByRole('button',{name:'닫기',exact:true}).click();await page.getByRole('button',{name:'플레이로 돌아가기',exact:true}).click();assert.equal(await page.getByLabel('플레이 현재 시각',{exact:true}).innerText(),time,'developer control does not change actual world');
 await page.screenshot({path:'test-results/academy-player/desktop.png',fullPage:true});await page.setViewportSize({width:390,height:844});await page.screenshot({path:'test-results/academy-player/mobile.png',fullPage:true});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'mobile overflow');assert.deepEqual(errors,[]);
 console.log('Player browser passed: named creation, direct study with automatic time and life return, policy edit, automatic hour, real summary, save/reload continuation, mobile and no page errors.');
}finally{await browser.close();}
