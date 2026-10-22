import assert from 'node:assert/strict';
import {chromium} from 'playwright';
const browser=await chromium.launch({headless:true});
const base=(process.env.ACADEMY_TEST_URL||'http://127.0.0.1:5181/web-hub')+'/games/academy-survival/';
try{
 const p=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.goto(base+'?view=catalog&kind=interaction');await p.getByRole('heading',{name:'NPC 상호작용',exact:true,level:2}).waitFor();assert.equal(await p.locator('.ac-tabs button').count(),21);assert.equal(await p.locator('.ac-interaction-grid button').count(),23);
 await p.getByRole('button',{name:'친목 대화',exact:false}).click();await p.getByRole('dialog').waitFor();assert((await p.getByRole('dialog').innerText()).includes('수락'));await p.keyboard.press('Escape');
 const source=await p.getByRole('button',{name:'현재 게임 날짜 상세',exact:true}).innerText();await p.getByRole('button',{name:'테스트',exact:true}).click();await p.getByRole('heading',{name:'NPC 상호작용 테스트',exact:true}).waitFor();
 await p.getByRole('button',{name:'NPC 10명 생성',exact:true}).click();assert.equal(await p.getByLabel('상호작용 행위자').locator('option').count(),11);
 // Test explicit preparation at an evening time without changing the real clock.
 await p.getByText('시간 직접 설정',{exact:true}).click();await p.getByLabel('상호작용 시간 시').fill('19');await p.getByRole('button',{name:'시간 적용',exact:true}).click();
 await p.getByRole('button',{name:'두 인물 강제 배치·대기',exact:true}).click();assert.equal(await p.locator('[role=alert]').count(),0,await p.locator('[role=alert]').allTextContents());
 await p.getByLabel('상호작용 종류').selectOption('casual_chat');await p.getByRole('button',{name:'상호작용 요청',exact:true}).click();assert((await p.getByTestId('interaction-result').innerText()).includes('proposed'));
 await p.getByRole('button',{name:'+1분',exact:true}).click();assert((await p.getByTestId('interaction-result').innerText()).match(/active|rejected/));await p.getByRole('button',{name:'+1시간',exact:true}).click();assert((await p.getByTestId('interaction-result').innerText()).match(/completed|rejected|interrupted/));
 await p.getByRole('button',{name:'프로필 미리보기',exact:true}).click();assert((await p.getByTestId('effect-preview').innerText()).includes('stat'));await p.getByRole('button',{name:'효과 실제 적용',exact:true}).click();assert((await p.getByTestId('effect-result').innerText()).includes('applied'));await p.getByRole('button',{name:'동일 결과 중복 적용 시도',exact:true}).click();assert((await p.getByTestId('effect-result').innerText()).includes('already_applied'));
 await p.getByLabel('효과 시험 프로필').selectOption('resource');await p.getByRole('button',{name:'프로필 미리보기',exact:true}).click();assert(await p.getByRole('button',{name:'효과 실제 적용',exact:true}).isDisabled());assert((await p.getByTestId('effect-preview').innerText()).includes('자원'));
 await p.getByRole('button',{name:'캐릭터 상세',exact:true}).click();await p.getByRole('dialog').waitFor();assert((await p.getByRole('dialog').innerText()).includes('상호작용·성장 기록'));await p.keyboard.press('Escape');
 await p.getByText('전체 샌드박스 JSON 저장·복원',{exact:true}).click();await p.getByRole('button',{name:'JSON 저장',exact:true}).click();const saved=JSON.parse(await p.getByLabel('상호작용 저장 JSON').inputValue());assert(saved.outcomes.applied.length>0);assert(saved.interactions.instances.length>0);await p.getByRole('button',{name:'JSON 불러오기',exact:true}).click();assert.equal(await p.locator('[role=alert]').count(),0,await p.locator('[role=alert]').allTextContents());
 await p.setViewportSize({width:390,height:844});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await p.getByRole('button',{name:'초기화',exact:true}).click();assert.equal(await p.getByLabel('상호작용 행위자').locator('option').count(),1);await p.getByRole('button',{name:'닫기',exact:true}).click();assert.equal(await p.getByRole('button',{name:'현재 게임 날짜 상세',exact:true}).innerText(),source);
 await p.goto(base+'?view=catalog&kind=outcome');await p.getByRole('heading',{name:'행동 결과·효과',exact:true,level:2}).waitFor();await p.getByRole('button',{name:'테스트',exact:true}).click();await p.getByRole('heading',{name:'행동 결과·효과 테스트',exact:true}).waitFor();assert.deepEqual(errors,[]);
 console.log('Interaction/effects UI: 21 tabs, 23 compact cards, popup, requests, shared states, actual/duplicate/failed effects, character growth, JSON, mobile, reset, both test entries and source-world isolation passed.');
}finally{await browser.close();}
