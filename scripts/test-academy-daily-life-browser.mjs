import assert from 'node:assert/strict';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import {chromium} from 'playwright';
const dir='test-results/academy-daily-life';await mkdir(dir,{recursive:true});
const fixture=JSON.parse(await readFile(dir+'/fixture.json','utf8')),meta=JSON.parse(await readFile(dir+'/meta.json','utf8'));
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 const base=(process.env.ACADEMY_TEST_URL??'http://127.0.0.1:5193/web-hub')+'/games/academy-survival/';await page.goto(base);
 await page.getByRole('button',{name:'새 생활 시작',exact:true}).click();await page.getByRole('button',{name:'수동 조작',exact:true}).click();
 const menu=page.getByRole('navigation',{name:'플레이 메뉴',exact:true});await menu.getByRole('button',{name:'기숙사·생활',exact:true}).click();const own=page.getByLabel('나의 기숙사 생활',{exact:true});await own.waitFor();assert.match(await own.innerText(),/2인실|개인실/);assert.match(await own.innerText(),/침대/);assert.match(await own.innerText(),/방에서 현재 상태 확인/,'remote roommate presence is not revealed');
 await own.getByRole('button',{name:'귀가·휴식',exact:true}).click();assert.match(await page.getByLabel('나의 상태 요약',{exact:true}).innerText(),/이동 중/);
 await page.getByRole('button',{name:'+1시간',exact:true}).click();await page.waitForFunction(()=>document.querySelector('.ac-play-run-state')?.textContent==='선택 대기');if(await page.getByLabel('플레이어 응답',{exact:true}).count())await page.keyboard.press('Escape');
 await page.screenshot({path:dir+'/player.png'});assert(await page.evaluate(()=>document.documentElement.scrollHeight<=innerHeight+1));
 await menu.getByRole('button',{name:'저장·이어하기',exact:true}).click();await page.getByRole('button',{name:'슬롯 1 저장',exact:true}).click();await page.getByText('슬롯 1에 저장했습니다.',{exact:true}).waitFor();const original=await page.evaluate(()=>localStorage.getItem('web-hub.academy.play.v0.5.slot.1'));
 await menu.getByRole('button',{name:'설정집',exact:true}).click();await page.getByText('개발 자료·도구',{exact:true}).click();await page.getByRole('button',{name:'개발 시뮬레이터 열기',exact:true}).click();await page.getByText('새 세계 설정·저장 불러오기',{exact:true}).click();await page.getByLabel('불러올 세계 JSON',{exact:true}).fill(JSON.stringify(fixture));await page.getByRole('button',{name:'세계 JSON 불러오기',exact:true}).click();
 await page.getByText('기숙사·생활 관찰',{exact:true}).click();const panel=page.getByLabel('생활 관찰·기숙사 관리',{exact:true});await panel.getByLabel('생활 관찰 인물',{exact:true}).selectOption(meta.a);await panel.getByText('거주·습관 개발 명령',{exact:true}).click();
 const currentPlace=await panel.locator('.ac-residence-cards>section').nth(1).getByRole('heading').innerText();await panel.getByLabel('생활 배정 방',{exact:true}).selectOption(meta.spareId);await panel.getByRole('button',{name:'선택 방 배정·변경',exact:true}).click();assert.equal(await panel.locator('.ac-residence-cards>section').nth(1).getByRole('heading').innerText(),currentPlace,'room assignment is not teleportation');assert.equal(await panel.getByRole('alert').count(),0);
 await panel.getByLabel('생활 선호 tidiness',{exact:true}).fill('90');assert.equal(await panel.getByLabel('생활 선호 tidiness',{exact:true}).inputValue(),'90');
 await panel.getByText('생활관 전체 점유 현황',{exact:true}).click();await panel.getByText(/^생활 사건 기록 ·/).click();await panel.getByLabel('생활 기록 사건',{exact:true}).selectOption('clean');assert.match(await panel.innerText(),/방 정리 완료/);await page.screenshot({path:dir+'/simulator.png',fullPage:false});
 await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await page.screenshot({path:dir+'/mobile.png',fullPage:false});
 await page.getByRole('button',{name:'닫기',exact:true}).click();await page.getByRole('button',{name:'플레이로 돌아가기',exact:true}).click();assert.equal(await page.evaluate(()=>localStorage.getItem('web-hub.academy.play.v0.5.slot.1')),original,'sandbox does not write actual game save');
 await menu.getByRole('button',{name:'기숙사·생활',exact:true}).click();await own.waitFor();assert(await page.evaluate(()=>document.documentElement.scrollHeight<=innerHeight+1));
 assert.deepEqual(errors,[]);await writeFile(dir+'/browser.json',JSON.stringify({passed:true,checks:['player residence/room/bed','private presence','real return movement','save','sandbox load, room change without teleport','preference slider','occupancy and event filters','mobile','source save unchanged'],pageErrors:errors},null,2));console.log('Daily-life UI passed: player housing, real return, private presence, developer room/preference controls, filters, mobile and sandbox isolation.');
}finally{await browser.close();}
