import type {Character} from '../types/character';
import type {StartingProfile,AdmissionResult,AcademyClass,StartingDifficulty} from '../types/admission';
import type {StatId} from '../types/knowledge';
import type {GrowthType} from '../types/npcGeneration';
import {generateNpc} from './npcGeneration';
import {npcGenerationContext} from './npcGenerationContext';
import {proficiencyRegistry} from './knowledgeRegistry';

// Existing influence includes titles and offices: these are realistic first-year bands,
// not the 400–800 social/political influence of established exceptional figures.
export const STARTING_DIFFICULTIES:Record<StartingDifficulty,{name:string;description:string;growth:GrowthType;min:number;max:number}>={
 gentle:{name:'순탄한 출발',description:'뛰어난 기초와 숙련 · 입학에 유리',growth:'genius',min:180,max:350},
 ordinary:{name:'평범한 출발',description:'추천 · 장단점이 있는 신입생',growth:'ordinary',min:90,max:160},
 hard:{name:'험난한 출발',description:'부족한 기본기 · 입학 미달 가능',growth:'weak',min:60,max:100},
 bottom:{name:'밑바닥에서',description:'기초 준비 부족 · 불합격 위험 높음',growth:'weak',min:0,max:70},
};
export const STARTING_DIRECTIONS={sword:'검술형',magic:'마법형',academic:'학술형',balanced:'균형형',random:'완전 랜덤'} as const;
export function assertStartingProfile(p:StartingProfile){
 if(!p||p.version!=='academy-start-v1'||!Object.hasOwn(STARTING_DIFFICULTIES,p.difficulty)||!Object.hasOwn(STARTING_DIRECTIONS,p.direction)||!Number.isSafeInteger(p.roll)||p.roll<0||p.roll>9999)throw Error('시작 자질 설정 오류');
}
export function generateStartingCharacter(seed:string,profile:StartingProfile,worldIdentity?:Parameters<typeof generateNpc>[0]['worldIdentity']){
 assertStartingProfile(profile);
 const band=STARTING_DIFFICULTIES[profile.difficulty],base=npcGenerationContext.config;
 const academic={...base.specializations.find(s=>s.id==='alchemy')!,id:'academic',name:'학술',core:['INT','WIL'] as ('INT'|'WIL')[],support:['MAG','CHA'] as ('MAG'|'CHA')[],primary:['proficiency-magic-theory'],secondary:['proficiency-alchemy'],variants:[{name:'이론 탐구',stat:'INT' as const,bonus:12}]};
 let specializations=[...base.specializations,academic];
 // Balanced changes only the local profile offsets; it does not modify shared NPC rules.
 if(profile.direction==='balanced')specializations=[...base.specializations,academic].map(s=>({...s,core:['STR','AGI','VIT','MAG','INT','WIL','CHA'] as StatId[],support:[],variants:s.variants.map(v=>({...v,bonus:0}))}));
 const context={...npcGenerationContext,config:{...base,specializations}};
 const result=generateNpc({seed:seed+'/start/v1/'+profile.roll,academyStudent:true,academyYear:1,specializationId:profile.direction==='random'||profile.direction==='balanced'?'random':profile.direction,growthType:band.growth,targetImpact:{min:band.min,max:band.max},impactPreference:'balanced',worldIdentity:worldIdentity??{raceId:'human',originPolityId:'astel_empire'}},context);
 if(!result.valid)throw Error('초기 자질 생성 검증 실패');
 return result;
}
export function evaluateAdmission(character:Character):AdmissionResult{
 const s=character.stats,values=Object.values(s);
 if(values.length!==7||values.some(v=>!Number.isFinite(v)||v<0))throw Error('입학 평가 능력치 오류');
 const ranks=Object.entries(character.proficiencyRanks);
 if(ranks.some(([id,v])=>!proficiencyRegistry.has(id)||!Number.isInteger(v)||v<0||v>9))throw Error('입학 평가 숙련도 오류');
 const score100=(v:number)=>Math.round(Math.max(0,Math.min(100,v)));
 const foundation=score100([...values].sort((a,b)=>b-a).slice(0,3).reduce((a,b)=>a+b,0)/3);
 const practicalFor=([id,rank]:[string,number])=>{const related=proficiencyRegistry.get(id)!.relatedStats;return (related.length?related.reduce((n,k)=>n+s[k],0)/related.length:foundation)*.6+rank*12;};
 const strongest=ranks.sort((a,b)=>practicalFor(b)-practicalFor(a)||a[0].localeCompare(b[0]))[0];
 const practical=score100(strongest?practicalFor(strongest):foundation*.6),written=score100(s.INT*.65+s.WIL*.2+(character.proficiencyRanks['proficiency-magic-theory']??0)*6);
 // Potential is demonstrated specialization, not an assumed benefit of rare gift flavor.
 const potential=score100(Math.max(foundation,practical,written));
 const score=score100(foundation*.2+practical*.35+written*.2+potential*.25),passed=score>=22;
 const classId=admissionClassForScore(score);
 return {version:'academy-admission-v1',characterId:character.id,passed,classId,score,foundation,practical,written,potential,strongestField:strongest?proficiencyRegistry.get(strongest[0])!.name:'기초 능력',explanation:passed?`${classId}반 배정 · 가장 두드러진 분야: ${strongest?proficiencyRegistry.get(strongest[0])!.name:'기초 능력'}. 실기·필기·기초 및 전문 강점을 함께 평가했습니다.`:'종합 평가가 최소 기준 22점에 미달했습니다. 무작위 탈락 판정 없이 현재 능력치와 숙련도를 평가했습니다.'};
}

export function admissionClassForScore(score:number):AcademyClass|undefined{return score<22?undefined:score>=85?'S':score>=72?'A':score>=60?'B':score>=48?'C':score>=38?'D':score>=29?'E':'F';}
