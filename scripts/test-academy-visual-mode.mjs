import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
const dir='test-results/academy-visual-mode';await mkdir(dir,{recursive:true});
await build({stdin:{contents:"export {default as VisualGameplay} from './src/AcademySurvival/components/VisualGameplay';export {default as Gameplay} from './src/AcademySurvival/components/Gameplay';export {PlaySessionContext} from './src/AcademySurvival/components/playSessionHooks';export {createPlaySession} from './src/AcademySurvival/systems/playSession';",resolveDir:process.cwd()},bundle:true,platform:'node',format:'esm',packages:'external',jsx:'automatic',define:{'import.meta.env.BASE_URL':JSON.stringify('/web-hub/'),'import.meta.env.DEV':'false'},loader:{'.css':'empty'},outfile:dir+'/bundle.mjs'});
const {VisualGameplay,Gameplay,PlaySessionContext,createPlaySession}=await import('../'+dir+'/bundle.mjs');
const session=createPlaySession({seed:'visual-mode-check',count:2,enableFixedStudents:false,player:{name:'아린',gender:'여성',focus:'balanced'}});
const entries=new Map(),storage={getItem:k=>entries.get(k)??null,setItem:(k,v)=>entries.set(k,v)};
const context={session,generation:0,start:()=>{throw Error('UI must not replace the session');},load:()=>{},save:s=>session.save(storage,s),slots:()=>[1,2,3].map(slot=>({slot,empty:true}))};
const render=Component=>renderToStaticMarkup(createElement(PlaySessionContext.Provider,{value:context},createElement(Component,{session,onText:()=>{},onArchive:()=>{},onSimulator:()=>{}})));
try{
 const before=session.world.snapshot(),revision=session.getSnapshot();const markup=render(VisualGameplay);render(Gameplay);
 assert(markup.includes('비주얼 아카데미 생활'));assert(markup.includes('생활 계획'));assert(markup.includes('텍스트 모드'));assert(!markup.includes('ac-play-grid'),'new layout is independent of legacy panel layout');
 assert.deepEqual(session.world.snapshot(),before,'rendering or opening the new mode does not advance time, draw RNG or mutate the world');assert.equal(session.getSnapshot(),revision);
 await session.performAction('rest',10);
 assert(session.world.runtime.world.clock.getSnapshot()>before.world.world.absoluteMinute,'same command authority advances actual world time');
 const stateAfter=session.world.snapshot();render(VisualGameplay);assert.deepEqual(session.world.snapshot(),stateAfter,'result render does not reward or execute twice');
 const saved=session.save(storage,1,'2026-10-27T00:00:00.000Z'),restored=createPlaySession({save:saved});
 try{assert.deepEqual(restored.world.snapshot(),saved.world,'visual-mode actions restore through the existing save format');}finally{restored.dispose();}
 const source=await readFile('src/AcademySurvival/components/Gameplay.tsx','utf8');assert(source.includes('setVisual(v=>!v)'));assert(source.includes('<VisualGameplay session={session}'),'mode switching retains the same session reference');
 await writeFile(dir+'/results.json',JSON.stringify({passed:true,npcCount:2,checks:['independent stage markup','opening/rendering is read-only','same session command advances actual time','no duplicate result effects','existing save/load round trip','shared session on mode switch'],limits:['headless render/command fixture; browser input, layout, focus and visual quality not verified','no long simulation or performance benchmark']},null,2));
 console.log('PASS visual mode: read-only rendering, actual rest command, existing save/load, shared session.');
}finally{session.dispose();}
