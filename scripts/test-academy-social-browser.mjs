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
 if(process.env.ACADEMY_SOCIAL_CASE==='condition'){
 await page.goto(base+'?view=catalog&kind=position');await count('.ac-social-card',200);
 await page.getByLabel('직급 획득 조건 검색').fill('선거');await page.waitForFunction(()=>document.querySelectorAll('.ac-social-card').length>0&&document.querySelectorAll('.ac-social-card').length<200);
 assert((await page.locator('.ac-social-card').allTextContents()).some(t=>t.includes('학생회장')));
 await page.setViewportSize({width:390,height:844});const input=page.getByLabel('최대 영향력',{exact:true});assert.equal(await input.inputValue(),'1000');assert((await input.boundingBox()).width>=80);
 console.log('Acquisition condition search and mobile 1000 input passed.');
 }
 if(!process.env.ACADEMY_SOCIAL_CASE){
 await page.goto(base+'?view=catalog&kind=position');await count('.ac-social-card',200);assert.equal(await page.locator('.ac-tabs button').count(),11);
 await page.getByRole('navigation',{name:'직급·칭호 대분류'}).getByRole('button',{name:'아카데미·교육 30',exact:true}).click();await count('.ac-social-card',30);
 await page.getByLabel('직급 배타 그룹').selectOption('academic-year');await count('.ac-social-card',4);
 await popup.close();await page.getByRole('button',{name:'필터 초기화',exact:true}).click();await count('.ac-social-card',200);
 await popup.close();await page.getByRole('searchbox',{name:'직급·칭호 이름 검색'}).fill('용사');await count('.ac-social-card',1);await page.locator('.ac-social-card').click();await page.locator('#ac-social-detail h2').filter({hasText:'용사'}).waitFor();assert((await page.locator('#ac-social-detail').innerText()).includes('830'));
 await page.reload();await count('.ac-social-card',1);
 await popup.close();await page.getByRole('button',{name:'필터 초기화',exact:true}).click();await popup.close();await page.getByLabel('영향력 등급',{exact:true}).selectOption('continental');await count('.ac-social-card',4);
 }
 if(!process.env.ACADEMY_SOCIAL_CASE||process.env.ACADEMY_SOCIAL_CASE==='filters'){
 if(process.env.ACADEMY_SOCIAL_CASE==='filters'){await page.goto(base+'?view=catalog&kind=position&grade=continental');await count('.ac-social-card',4);}
 await page.getByLabel('영향력 분야',{exact:true}).selectOption('politics');await page.waitForFunction(()=>[...document.querySelectorAll('.ac-social-card')].length>0&&[...document.querySelectorAll('.ac-social-card')].every(e=>e.textContent.includes('정치')));assert((await page.locator('.ac-social-card').allTextContents()).every(text=>text.includes('정치')));
 await popup.close();await page.getByRole('button',{name:'칭호 200',exact:true}).click();await count('.ac-social-card',200);await page.getByLabel('직급·칭호 정렬').selectOption('impact-desc');await page.waitForFunction(()=>document.querySelector('.ac-social-card small>b')?.textContent==='1000');
 await page.getByLabel('칭호 공개 여부').selectOption('secret');await page.waitForFunction(()=>document.querySelectorAll('.ac-social-card').length<200);assert(await page.locator('.ac-social-card').count()>0);
 await popup.close();await page.getByRole('button',{name:'필터 초기화',exact:true}).click();await popup.close();await page.getByRole('searchbox',{name:'직급·칭호 이름 검색'}).fill('연쇄살인마');await count('.ac-social-card',1);await page.locator('.ac-social-card').click();await page.locator('#ac-social-detail h2').filter({hasText:'연쇄살인마'}).waitFor();assert((await page.locator('#ac-social-detail').innerText()).includes('누명'));
 await popup.close();await page.getByRole('searchbox',{name:'직급·칭호 이름 검색'}).fill('없는사회요소');await count('.ac-social-card',0);await page.getByRole('heading',{name:'일치하는 기록이 없습니다'}).waitFor();
 await popup.close();await page.getByRole('button',{name:'특성 405',exact:true}).click();await page.getByLabel('특성 정렬').selectOption('tree');await count('.ac-node',405);assert((await page.locator('.ac-node-impact').first().innerText()).includes('40'));
 await page.getByLabel('특성 정렬').selectOption('impact-desc');await count('.ac-trait-impact-card',405);await page.getByLabel('최소 영향력',{exact:true}).fill('800');await count('.ac-trait-impact-card',1);assert((await page.locator('.ac-trait-impact-card').innerText()).includes('수평선을 긋는 자'));
 await popup.close();await page.getByRole('button',{name:'기프트 403',exact:true}).click();await count('.ac-gift-card',403);assert((await page.locator('.ac-gift-bottom>b').first().innerText()).includes('990'));await popup.close();await page.getByRole('searchbox',{name:'도감 검색'}).fill('새벽의 계승자');await count('.ac-gift-card',1);await page.locator('.ac-gift-card').click();await page.locator('.ac-detail h2').filter({hasText:'새벽의 계승자'}).waitFor();assert((await page.locator('.ac-impact-detail').innerText()).includes('880'));
 }
 if(process.env.ACADEMY_SOCIAL_CASE!=='mobile'){
 await page.goto(base+'?view=catalog&kind=character&item=fixed-serena&debug=1');await page.locator('.ac-social-overview').waitFor();assert((await page.locator('.ac-social-overview').innerText()).includes('새벽의 희망'));
 await page.getByLabel('대표 칭호 변경',{exact:true}).selectOption('title-chosen');await page.waitForFunction(()=>document.querySelector('.ac-social-overview').textContent.includes('선택받은 자'));
 await page.locator('.ac-character-social li').filter({has:page.getByRole('link',{name:'선택받은 자 ↗',exact:true})}).getByRole('button',{name:'박탈 테스트'}).click();await page.waitForFunction(()=>document.querySelector('.ac-social-overview').textContent.includes('새벽의 희망'));assert((await page.locator('.ac-character-social').innerText()).includes('박탈 이력'));
 await page.locator('.ac-character-social li').filter({has:page.getByRole('link',{name:'용사 ↗',exact:true})}).getByRole('button',{name:'보유 제거 테스트'}).click();await page.waitForFunction(()=>document.querySelector('.ac-social-overview').textContent.includes('아카데미 1학년'));
 await page.reload();await page.locator('.ac-social-overview').waitFor();assert((await page.locator('.ac-social-overview').innerText()).includes('용사'));await page.locator('.ac-character-social').getByRole('link',{name:'용사 ↗',exact:true}).click();await page.locator('#ac-social-detail h2').filter({hasText:'용사'}).waitFor();await page.goBack();await page.locator('.ac-social-overview').waitFor();
 await page.screenshot({path:'.build-projects/academy-social-character.png',fullPage:true});
 }
 await page.setViewportSize({width:390,height:844});await page.goto(base+'?view=catalog&kind=position&item=position-crown-heir&debug=1&q=황태자');await page.locator('#ac-social-detail h2').filter({hasText:'제국 황태자'}).waitFor();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'mobile overflow');await page.screenshot({path:'.build-projects/academy-social-mobile.png',fullPage:true});
 await page.setViewportSize({width:1440,height:1000});await page.screenshot({path:'.build-projects/academy-social-desktop.png',fullPage:true});
 assert.deepEqual(errors,[]);if(process.env.ACADEMY_SOCIAL_CASE!=='condition')console.log(`Social UI ${process.env.ACADEMY_SOCIAL_CASE||'full'} passed: 200/200 catalogs, filters/search/grades/ordering, trait tree + impact list, migrated gift display, representatives/removal/history/backlinks and 390px ten-tab layout.`);
}finally{await browser.close();}
