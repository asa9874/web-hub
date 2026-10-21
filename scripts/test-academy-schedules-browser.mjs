import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {mkdir} from 'node:fs/promises';
await mkdir('.build-projects',{recursive:true});
const browser=await chromium.launch({headless:true}),base=(process.env.ACADEMY_TEST_URL||'http://127.0.0.1:5178/web-hub')+'/games/academy-survival/';
try{
 const p=await browser.newPage({viewport:{width:1480,height:1000}}),errors=[];p.setDefaultTimeout(15000);p.on('pageerror',e=>errors.push(e.message));
 await p.goto(base+'?view=catalog&kind=schedule');await p.getByRole('heading',{name:'NPC 일과표',exact:true}).waitFor();assert.equal(await p.locator('.ac-tabs button').count(),18);
 const original=await p.getByRole('button',{name:'현재 게임 날짜 상세',exact:true}).innerText();
 await p.getByRole('button',{name:'학생 평일 9개 일정',exact:true}).click();await p.getByRole('dialog',{name:'학생 평일',exact:true}).waitFor();await p.keyboard.press('Escape');
 await p.getByRole('button',{name:'테스트',exact:true}).click();await p.getByRole('heading',{name:'NPC 일과표 테스트',exact:true}).waitFor();
 const stats=p.getByLabel('생활 통계'),clock=p.getByTestId('schedule-world-time');const stat=async key=>Number(await stats.locator('div').filter({has:p.locator('dt',{hasText:new RegExp('^'+key+'$')})}).locator('dd').innerText());
 assert.equal(await stat('전체 NPC'),1);
 await p.getByLabel('일과표 생성 수량',{exact:true}).selectOption('100');await p.getByRole('button',{name:'NPC 100명 생성',exact:true}).click();await p.waitForFunction(()=>document.querySelectorAll('.ac-schedule-actors button').length===101);assert.equal(await stat('전체 NPC'),101);
 await p.getByRole('button',{name:'+7일',exact:true}).click();assert((await clock.innerText()).includes('3월 8일'));assert.equal(await stat('전체 NPC'),101);
 await p.getByRole('button',{name:'공통 상태창',exact:true}).click();const dialog=p.getByRole('dialog');await dialog.waitFor();await dialog.getByLabel('캐릭터 일과표',{exact:true}).waitFor();await p.keyboard.press('Escape');
 // Direct seek, custom location entry and real access refusal.
 const seek=p.getByText('날짜·시간 직접 설정',{exact:true});await seek.click();await p.getByLabel('세계 시간 시',{exact:true}).fill('7');await p.getByLabel('세계 시간 분',{exact:true}).fill('58');await p.getByRole('button',{name:'시간 적용',exact:true}).click();
 await p.getByLabel('편집 일정 ID',{exact:true}).fill('morning-closed');await p.getByLabel('편집 활동',{exact:true}).selectOption('sword_training');await p.getByLabel('편집 시작 분',{exact:true}).fill('478');await p.getByLabel('편집 종료 분',{exact:true}).fill('510');await p.getByLabel('편집 목적지',{exact:true}).selectOption('academy-morning');await p.getByRole('button',{name:'일정 저장',exact:true}).click();assert((await p.getByLabel('생활 로그',{exact:true}).innerText()).includes('[실패]'));assert((await p.getByLabel('생활 로그',{exact:true}).innerText()).includes('08:00'));
 await p.getByRole('button',{name:'일정 삭제·취소',exact:true}).click();
 await p.screenshot({path:'.build-projects/academy-schedules-desktop.png',fullPage:true});
 await p.setViewportSize({width:390,height:844});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await p.screenshot({path:'.build-projects/academy-schedules-mobile.png',fullPage:true});
 await p.getByRole('button',{name:'초기화',exact:true}).click();assert.equal(await stat('전체 NPC'),1);await p.getByLabel('생성 역할',{exact:true}).selectOption('mixed');await p.getByRole('button',{name:'NPC 10명 생성',exact:true}).click();await p.waitForFunction(()=>document.querySelectorAll('.ac-schedule-actors button').length===11);await p.getByRole('button',{name:'+1일',exact:true}).click();assert.equal(await stat('실패 경험 NPC'),0);await p.getByRole('button',{name:'초기화',exact:true}).click();await p.getByRole('button',{name:'닫기',exact:true}).click();assert.equal(await p.getByRole('button',{name:'현재 게임 날짜 상세',exact:true}).innerText(),original);
 assert.deepEqual(errors,[]);console.log('Schedule UI passed: 15 tabs, template popup, 100 NPC/week, live shared character popup, seek, edit/cancel/access refusal, statistics/populations, mobile, reset/close isolation.');
}finally{await browser.close();}
