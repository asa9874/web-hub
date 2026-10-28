import {studentAbilityRegistry} from './studentAbilities';
import raw from './students.json';
import type {FixedCharacterTemplate} from '../../types/character';
import type {StatId,RankLevel} from '../../types/knowledge';

// Authored starting abilities, not hidden bonuses. All growth uses the common engines.
const setup:[string,number,string,string,string[]][]=[
 ['adelia',1,'인간','magic',['magic-theory','etiquette']],
 ['lumiel',2,'엘프','magic',['arcane','magic-theory']],
 ['lisette',1,'마족','stealth',['stealth','rhetoric']],
 ['nia',1,'수인','sword',['unarmed','sword']],
 ['camilla',3,'인간','sword',['sword','shield']],
 ['miel',1,'인간','tactics',['rhetoric','etiquette']],
 ['estelle',2,'인간','tactics',['administration','rhetoric']],
 ['fiona',1,'인간','alchemy',['alchemy','herbalism']],
 ['noel',2,'인간','magic',['detection','magic-theory']],
 ['brina',2,'드워프','alchemy',['alchemy','magic-circles']],
 ['elisia',3,'인간','holy',['healing','medicine']],
 ['thea',1,'인간','archery',['tracking','detection']],
 ['violetta',2,'인간','tactics',['etiquette','rhetoric']],
 ['iris',1,'마족','magic',['mana-control','barrier']],
];
const statIds:StatId[]=['STR','AGI','VIT','MAG','INT','WIL','CHA'];
export const studentProfiles=raw.map(p=>({...p,id:'fixed-'+p.key}));
export const studentProfileRegistry=new Map(studentProfiles.map(p=>[p.id,p]));
export const additionalStudents:FixedCharacterTemplate[]=setup.map(([key,year,species,,skills])=>{
 const p=studentProfiles.find(p=>p.key===key)!,id=p.id,ability=studentAbilityRegistry.get(key)!,values=ability.stats;
 return {id,role:'고정 학생',identity:{name:p.name,englishName:key[0].toUpperCase()+key.slice(1),age:16+year,gender:'여성',species,origin:species==='마족'?'마계':species==='엘프'?'엘프 거주 지역':species==='드워프'?'드워프 거주 지역':'제국',schoolYear:year,affiliation:'왕립 아카데미',title:year+'학년 생도',summary:p.concept,introduction:p.personality,background:[p.objective,p.gap],personality:[p.personality],values:[p.objective],weaknesses:p.weaknesses,appearance:{description:p.appearance,provisional:false},objective:p.objective,tendencies:p.behavior.map((description,i)=>({id:key+'-'+i,label:description,description}))},affiliations:{affiliations:[{organizationId:'academy-main',visibility:'public',sourceId:'fixed-enrollment'}],primaryOrganizationId:'academy-main'},coreNotes:[p.arc,'핵심 성격은 관계 변화로 삭제되지 않는다. 실제 가입·시험·제작·공연 결과를 임의 확정하지 않는다.'],stats:Object.fromEntries(statIds.map((s,i)=>[s,{base:values[i],min:values[i],max:values[i]}])) as FixedCharacterTemplate['stats'],proficiencies:skills.map((id,i)=>({id:'proficiency-'+id,base:(i===0?8:7) as RankLevel,min:(i===0?8:7) as RankLevel,max:(i===0?8:7) as RankLevel})),fixedTraitIds:['trait-signature-'+key,ability.secondary],fixedGiftIds:['gift-signature-'+key,ability.support],randomSlots:[],social:{fixed:{positions:[{definitionId:['','position-academy-year-one','position-academy-year-two','position-academy-year-three'][year],organizationId:'academy-main'}],titles:[]},randomSlots:[]},statuses:{fixed:[],optional:[],noneWeight:1,maxSelections:0},variation:[],relationships:[],events:[],contentMappings:[]};
});
export const fixedStudentSpecializations=Object.fromEntries(setup.map(([key,,,spec])=>['fixed-'+key,spec]));
