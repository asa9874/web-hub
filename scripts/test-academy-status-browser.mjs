import {popupActions} from './academy-popup-test-helpers.mjs';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {mkdir} from 'node:fs/promises';
await mkdir('.build-projects',{recursive:true});
const browser=await chromium.launch({headless:true});
const base=(process.env.ACADEMY_TEST_URL||'http://127.0.0.1:5178/web-hub')+'/games/academy-survival/';
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 const popup=popupActions(page);
 const count=(selector,n)=>page.waitForFunction(({selector,n})=>document.querySelectorAll(selector).length===n,{selector,n});
 const choose=async(id)=>{await page.getByLabel('테스트 상태',{exact:true}).selectOption('status-'+id);};
 const apply=async()=>{await page.getByRole('button',{name:'임시 적용',exact:true}).click();};
 if(!process.env.ACADEMY_STATUS_CASE){
 await page.goto(base);await page.getByRole('button',{name:/설정집 기록 열람/}).click();await popup.close();await page.getByRole('button',{name:'상태 150',exact:true}).click();await count('.ac-status-card',150);
 const names=await page.locator('.ac-status-card h3').allTextContents();assert(names.every((n,i)=>!i||names[i-1].localeCompare(n,'ko')<=0));
 assert.equal(await page.locator('.ac-status-tester').count(),0);
 await page.getByRole('navigation',{name:'상태 대분류'}).getByRole('button',{name:'신체·부상 25',exact:true}).click();await count('.ac-status-card',25);
 await page.getByLabel('상태 세부 분류',{exact:true}).selectOption('rehabilitation');await count('.ac-status-card',4);
 await popup.close();await page.getByRole('button',{name:'필터 초기화',exact:true}).click();await count('.ac-status-card',150);
 await page.getByLabel('상태 극성',{exact:true}).selectOption('positive');await page.waitForFunction(()=>document.querySelectorAll('.ac-status-card').length<150);assert.equal(await page.locator('.ac-status-card:not(.ac-polarity-positive)').count(),0);
 await popup.close();await page.getByRole('button',{name:'필터 초기화',exact:true}).click();await page.getByLabel('상태 지속 필터',{exact:true}).selectOption('permanent');await page.waitForFunction(()=>document.querySelectorAll('.ac-status-card').length<150);assert((await page.locator('.ac-status-card').allTextContents()).every(t=>t.includes('영구 지속')));
 await popup.close();await page.getByRole('button',{name:'필터 초기화',exact:true}).click();await page.getByLabel('상태 단계 필터',{exact:true}).selectOption('yes');await page.locator('.ac-status-card').first().click();await page.waitForFunction(()=>document.querySelectorAll('.ac-status-stage').length>0);assert((await page.locator('.ac-status-card').allTextContents()).every(t=>!t.includes('단계 없음')));
 await popup.close();await page.getByRole('button',{name:'필터 초기화',exact:true}).click();await popup.close();await page.getByRole('searchbox',{name:'상태 이름 검색'}).fill('토끼');await count('.ac-status-card',1);await page.locator('.ac-status-card').click();await page.locator('.ac-status-detail h2').filter({hasText:'토끼 변이'}).waitFor();await page.reload();await count('.ac-status-card',1);
 await popup.close();await page.getByRole('searchbox',{name:'상태 이름 검색'}).fill('존재하지않는상태');await count('.ac-status-card',0);await page.getByRole('heading',{name:'일치하는 상태가 없습니다'}).waitFor();
 }
 if(process.env.ACADEMY_STATUS_CASE!=='mobile'){
 await page.goto(base+'?view=catalog&kind=status&item=status-bleeding&debug=1');await page.locator('.ac-status-detail h2').filter({hasText:'출혈'}).waitFor();
 await page.locator('.ac-status-relations').getByRole('button',{name:'과다출혈',exact:true}).click();await page.locator('.ac-status-detail h2').filter({hasText:'과다출혈'}).waitFor();
 await choose('fracture');await page.getByLabel('테스트 부위',{exact:true}).selectOption('left-arm');await apply();await count('.ac-status-instance',1);
 await page.getByLabel('test-1 단계',{exact:true}).selectOption('broken');await page.waitForFunction(()=>document.querySelector('.ac-status-action-result').textContent.includes('수행 불가'));
 await page.getByLabel('test-1 부위',{exact:true}).selectOption('right-arm');assert.equal(await page.getByLabel('test-1 부위',{exact:true}).inputValue(),'right-arm');
 await page.getByLabel('테스트 부위',{exact:true}).selectOption('right-arm');await apply();await count('.ac-status-instance',1);assert((await page.locator('.ac-status-test-message').innerText()).includes('하나의 인스턴스'));
 await choose('amputation');await page.getByLabel('테스트 부위',{exact:true}).selectOption('right-arm');await apply();await count('.ac-status-instance',1);assert((await page.locator('.ac-status-instance').innerText()).includes('절단'));
 await choose('muscle-soreness');await page.getByLabel('테스트 부위',{exact:true}).selectOption('right-arm');await apply();await count('.ac-status-instance',1);assert((await page.locator('.ac-status-test-message').innerText()).includes('생체 상태'));
 await choose('mechanical-arm');await page.getByLabel('테스트 부위',{exact:true}).selectOption('right-arm');await apply();await count('.ac-status-instance',1);await page.locator('.ac-status-instance strong').filter({hasText:'기계화 팔'}).waitFor();
 await choose('happiness');await apply();await count('.ac-status-instance',2);await choose('sadness');await apply();await count('.ac-status-instance',3);
 await page.locator('.ac-status-instance').filter({hasText:'슬픔'}).getByRole('button',{name:/제거/}).click();await count('.ac-status-instance',2);
 await page.getByRole('button',{name:'전체 초기화',exact:true}).click();await count('.ac-status-instance',0);
 await page.screenshot({path:'.build-projects/academy-status-desktop.png',fullPage:true});
 }
 await page.setViewportSize({width:390,height:844});await page.goto(base+'?view=catalog&kind=status&item=status-rabbit-form');await page.locator('.ac-status-detail h2').filter({hasText:'토끼 변이'}).waitFor();
 assert.equal(await page.locator('.ac-tabs button').count(),16);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'mobile overflow');
 await popup.close();await page.getByRole('searchbox',{name:'상태 이름 검색'}).fill('행복');await count('.ac-status-card',1);await page.locator('.ac-status-card').click();await page.locator('.ac-status-detail h2').filter({hasText:'행복함'}).waitFor();await page.screenshot({path:'.build-projects/academy-status-mobile.png',fullPage:true});
 await popup.close();await page.getByRole('button',{name:'능력치 7',exact:true}).click();await page.locator('.ac-knowledge-nav button').first().click();await count('.ac-rank-row',10);await popup.close();await page.getByRole('button',{name:'기프트 403',exact:true}).click();await count('.ac-gift-card',403);await popup.close();await page.getByRole('button',{name:'숙련도 49',exact:true}).click();await count('.ac-knowledge-nav button',49);await popup.close();await page.getByRole('button',{name:'특성 405',exact:true}).click();await page.getByLabel('특성 정렬').selectOption('tree');await count('.ac-node',405);
 assert.deepEqual(errors,[]);console.log(`Status UI ${process.env.ACADEMY_STATUS_CASE||'full'} passed: catalog filters/search/links, DEBUG state edits/collisions, 390px layout and existing four tabs.`);
}finally{await browser.close();}
