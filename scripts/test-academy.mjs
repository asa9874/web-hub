import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {mkdir} from 'node:fs/promises';
await mkdir('.build-projects',{recursive:true});
await build({stdin:{contents:["export * from './src/AcademySurvival/systems/registry';","export * from './src/AcademySurvival/systems/probability';","export * from './src/AcademySurvival/systems/effectResolver';","export * from './src/AcademySurvival/systems/conditions';","export * from './src/AcademySurvival/systems/validation';","export * from './src/AcademySurvival/systems/search';","export * from './src/AcademySurvival/data/config';","export * from './src/AcademySurvival/data/expansion';"].join('\n'),resolveDir:process.cwd()},bundle:true,platform:'node',format:'esm',outfile:'.build-projects/academy-model.mjs'});
const m=await import('../.build-projects/academy-model.mjs');
const {traits,gifts,events,specialRules,validationIssues,EMPTY_CONTEXT,PROBABILITY}=m;
assert.deepEqual(validationIssues,[]);
assert(traits.length>=100&&gifts.length>=100);
assert.equal(m.expansionTraits.length,m.EXPANSION_BATCH.traits);
assert.equal(m.expansionGifts.length,m.EXPANSION_BATCH.gifts);
assert.equal(traits.length,104+300);assert.equal(gifts.length,100+300);
assert.equal(new Set(m.entries.map(e=>e.lore)).size,m.entries.length,'Every literary description is individually authored');
const effectTargets=new Set();const collect=e=>{if(e.effects)e.effects.forEach(collect);if(e.target)effectTargets.add(e.target);};m.entries.forEach(collect);
assert([...effectTargets].every(target=>m.TARGET_NAMES[target]),'All ordinary targets have readable labels');
const sugar=traits.find(t=>t.id==='trait-x-sugar-crash');
assert.equal(m.resolveEffects([sugar,sugar],{...EMPTY_CONTEXT,tags:['sugar-high','sugar-crash']}).stats.focus,-2,'Distinct signed modifiers survive while repeated sources are deduplicated');
for(const entry of m.expansionTraits){assert(entry.acquisitions.every(a=>a.note.length>=10));if(entry.evolutions.length){const evolved=m.traitRegistry.get(entry.evolutions[0].to);assert(!m.compatible(evolved,[entry]));}}
assert.equal(new Set([...traits,...gifts].map(e=>e.name)).size,traits.length+gifts.length);
assert.equal(new Set(gifts.map(g=>g.lore)).size,gifts.length);
assert(gifts.filter(g=>g.impact>=95).length<=3);
assert(gifts.some(g=>g.impact===0)&&gifts.some(g=>g.impact>=95));
assert(traits.some(t=>t.evolutions.length>1));assert(traits.some(t=>!t.evolutions.length&&!m.previousTraits(t.id).length));
for(const distribution of Object.values(PROBABILITY))assert(Math.abs(distribution.reduce((n,r)=>n+r.probability,0)-1)<1e-12);
for(const [kind,entries] of [['trait',traits],['gift',gifts]]){
 const pool=m.slotPool(entries,EMPTY_CONTEXT);assert(Math.abs(pool.reduce((n,r)=>n+r.probability,0)-1)<1e-12);
 let state=20261020;const random=()=>((state=(Math.imul(state,1664525)+1013904223)>>>0)/4294967296);
 for(let i=0;i<10000;i++){
  const draw=m.drawBirth(entries,EMPTY_CONTEXT,kind,random);assert.equal(draw.shortfall,0);
  assert.equal(draw.entries.length,draw.requested);assert.equal(new Set(draw.entries.map(e=>e.id)).size,draw.entries.length);
  for(const entry of draw.entries)assert(m.compatible(entry,draw.entries.filter(e=>e.id!==entry.id)));
 }
}
const prodigy=traits.find(t=>t.id==='trait-sword-horizon');assert(!m.slotPool(traits,EMPTY_CONTEXT).some(r=>r.entry.id===prodigy.id));assert(m.slotPool(traits,{...EMPTY_CONTEXT,stats:{sword:60}}).some(r=>r.entry.id===prodigy.id));
const diligence=traits.find(t=>t.id==='trait-diligence-morning');
assert(!m.slotPool(traits,EMPTY_CONTEXT,[diligence]).some(r=>r.entry.exclusiveGroup==='work-habit'));
assert(!m.slotPool(traits,{...EMPTY_CONTEXT,traits:[diligence.id]}).some(r=>r.entry.exclusiveGroup==='work-habit'));
const selected=traits.find(t=>t.id==='trait-sword-line'),resolved=m.resolveEffects([selected,selected],EMPTY_CONTEXT);
assert.equal(resolved.checks.sword.score,16);assert.equal(resolved.growth.sword,1.28);assert.equal(resolved.options.length,1);
const conditional=gifts.find(g=>g.id==='gift-borrowed-edge');assert.deepEqual(m.resolveEffects([conditional],EMPTY_CONTEXT).checks,{});
assert.equal(m.resolveEffects([conditional],{...EMPTY_CONTEXT,tags:['duel'],flags:['borrowed-with-consent']}).checks.sword.score,12);
const points=gifts.find(g=>g.id==='gift-unbroken-promise');assert.equal(m.resolveEffects([points],{...EMPTY_CONTEXT,flags:['ten-promises-kept']}).checks.bargain.percentagePoints,10);
assert.equal(m.applyPercentagePoints(.4,10),.5);assert.equal(m.applyPercentagePoints(.95,10),1);assert.equal(m.applyWeight(10,1.5),15);
const special=gifts.find(g=>specialRules[g.id]);assert.equal(m.resolveEffects([special],EMPTY_CONTEXT).rules.length,0);assert.equal(m.resolveEffects([special],{...EMPTY_CONTEXT,flags:[specialRules[special.id].trigger]}).rules.length,1);
assert.deepEqual(m.resolveEffects([{...special,impact:100}],EMPTY_CONTEXT),m.resolveEffects([{...special,impact:0}],EMPTY_CONTEXT),'Impact never adds effects');
for(const entry of [...traits,...gifts]){assert(entry.lore.length>=15&&entry.system.length>5);assert(m.relatedEvents(entry).length>0);assert(m.relatedEvents(entry).every(e=>e.status==='planned'));}
assert(m.matches(gifts[0],gifts[0].name));assert(!m.matches(gifts[0],'不存在的搜索词'));assert(m.matches(traits[0],' 흔들리는   칼끝 '));
const descending=m.sortGifts(gifts,'impact-desc'),ascending=m.sortGifts(gifts,'impact-asc'),named=m.sortGifts(gifts,'name');
assert(descending.every((g,i)=>!i||descending[i-1].impact>=g.impact));assert(ascending.every((g,i)=>!i||ascending[i-1].impact<=g.impact));assert(named.every((g,i)=>!i||named[i-1].name.localeCompare(g.name,'ko')<=0));
const changed=structuredClone(traits);changed[0].evolutions.push({to:changed[0].id,condition:{kind:'flag',key:'test'},chance:2,note:'invalid'});
assert(m.validateCatalog(changed,gifts,events,specialRules).some(i=>i.message.includes('순환')));
assert(m.validateCatalog(changed,gifts,events,specialRules).some(i=>i.message.includes('확률')));
const brokenGifts=structuredClone(gifts);brokenGifts[0].evolutions=[];brokenGifts[1].impact=101;brokenGifts[2].effects=[{id:'bad',type:'BAD'}];brokenGifts[3].eventIds=['event-missing'];brokenGifts[4].name=brokenGifts[5].name;
const bad=m.validateCatalog(traits,brokenGifts,events,specialRules);assert(bad.some(i=>i.message.includes('진화')));assert(bad.some(i=>i.message.includes('영향력')));assert(bad.some(i=>i.message.includes('효과 타입')));assert(bad.some(i=>i.message.includes('이벤트 ID')));assert(bad.some(i=>i.message.includes('name')));
console.log(`Academy: ${traits.length} traits / ${gifts.length} gifts / ${Object.keys(m.FAMILIES).length} families / ${events.length} planned events. Schema, DAG/forks, 20,000 weighted birth draws, exclusions, normalized probabilities, conditions, deduplication/units, search/sorts and invalid-data detection passed.`);
