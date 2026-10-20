import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {mkdir} from 'node:fs/promises';
await mkdir('.build-projects',{recursive:true});
await build({stdin:{contents:["export * from './src/AcademySurvival/systems/knowledgeRegistry';","export * from './src/AcademySurvival/systems/knowledgeValidation';","export * from './src/AcademySurvival/data/knowledge/config';","export * from './src/AcademySurvival/systems/registry';"].join('\n'),resolveDir:process.cwd()},bundle:true,platform:'node',format:'esm',outfile:'.build-projects/academy-knowledge-model.mjs'});
const m=await import('../.build-projects/academy-knowledge-model.mjs');
assert.deepEqual(m.knowledgeIssues,[]);assert.deepEqual(m.validationIssues,[]);
assert.deepEqual(m.stats.map(s=>s.id),['STR','AGI','VIT','MAG','INT','WIL','CHA']);assert.equal(m.proficiencies.length,49);
assert.equal(m.stats.flatMap(s=>s.grades).length,70);assert.equal(m.proficiencies.flatMap(p=>p.ranks).length,490);
const descriptions=[...m.stats.flatMap(s=>s.grades),...m.proficiencies.flatMap(p=>p.ranks)].map(r=>r.flavorText);
assert.equal(new Set(descriptions).size,560);
const expected=[['F',0,9],['E',10,29],['D',30,49],['C',50,69],['B',70,89],['A',90,100],['S',101,120],['SS',121,150],['SSS',151,199],['EX',200,99999]];
for(const [grade,min,max] of expected)for(const n of [min,max])for(const stat of m.stats){assert.equal(m.statGradeFor(stat.id,n).grade,grade);assert.equal(m.statBandFor(n).grade,grade);assert.equal(m.statGradeFor(stat.id,n).flavorText,stat.grades.find(g=>g.grade===grade).flavorText);}
for(const invalid of [-1,1.5,NaN,Infinity])assert.equal(m.statBandFor(invalid),null);
assert.equal(m.statGradeFor('NONE',50),null);assert.equal(m.proficiencyRankFor('NONE',0),null);
for(const p of m.proficiencies)for(let level=0;level<10;level++){assert.equal(m.proficiencyRankFor(p.id,level).name,m.PROFICIENCY_RANKS[level].name);assert(p.relatedStats.every(id=>m.statRegistry.has(id)));}
for(const level of [-1,10,1.2,NaN])assert.equal(m.proficiencyRankFor('proficiency-sword',level),null);
assert.equal(m.PROFICIENCY_EXPERIENCE_THRESHOLDS,null);
const before=JSON.stringify(m.entries),profiles=[{skillRank:6,traitId:'trait-sword-grip'},{skillRank:1,traitId:'trait-sword-horizon'}];
assert.equal(m.proficiencyRankFor('proficiency-sword',profiles[0].skillRank).name,'종사');assert.equal(m.proficiencyRankFor('proficiency-sword',profiles[1].skillRank).name,'입문');
assert.equal(m.traitRegistry.get(profiles[0].traitId).tier,0);assert.equal(m.traitRegistry.get(profiles[1].traitId).tier,4);
function flatten(e){return e.type==='CONDITIONAL_EFFECT'?e.effects.flatMap(flatten):[e];}
let references=0;
for(const def of [...m.stats,...m.proficiencies]){
 for(const ref of [...m.effectReferencesFor(def),...m.derivedReferencesFor(def)]){const source=m.entries.find(e=>e.id===ref.sourceId);assert(source);assert.equal(ref.status,'connected');assert(source.effects.flatMap(flatten).some(e=>e.id===ref.effectId&&e.type===ref.type&&e.target===ref.target));references++;}
 for(const event of m.eventReferencesFor(def)){assert(m.events.some(e=>e.id===event.id));assert.equal(event.status,'planned');assert(event.tags.some(tag=>def.checkTags.includes(tag)));}
}
assert(references>0);assert.equal(JSON.stringify(m.entries),before,'Definition lookup must not mutate traits/gifts or their progression');
const badStats=structuredClone(m.stats);badStats[0].grades[1].min=9;badStats[1].grades[0].flavorText=badStats[0].grades[0].flavorText;badStats[2].grades.pop();
const badSkills=structuredClone(m.proficiencies);badSkills[0].relatedStats.push('MISSING');badSkills[1].id=badSkills[0].id;badSkills[2].ranks[2].level=5;badSkills[3].ranks[0].flavorText='';badSkills[4].name=badSkills[5].name;
const invalid=m.validateKnowledge(badStats,badSkills).map(i=>i.message).join(' / ');
for(const word of ['공백/중첩','설명 중복','10개','관련 능력치 참조','ID 중복','경지 순서','빈 설명','이름 중복'])assert(invalid.includes(word),word);
console.log(`Knowledge: 7 stats / 49 proficiencies / 560 authored grade/rank texts; all boundaries, 10 ranks, exact source references, planned events, independent traits and invalid-data detection passed (${references} reference rows).`);
