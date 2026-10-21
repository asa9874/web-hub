import {MORALITY_LIMITS,KARMA_LIMITS} from '../data/dispositions/config';
import type {CharacterMorality,DispositionDefinition,MoralityGenerationConfig,MoralityGenerationRequest,NumericRange} from '../types/morality';
import {weightedPick} from './seededRandom';
import {validateMoralityProfile,validRange} from './morality';
export function validateMoralityRequest(request:MoralityGenerationRequest,registry:ReadonlyMap<string,DispositionDefinition>):string[]{
 const issues:string[]=[],ids=request.requiredDispositionIds??[];
 if(request.moralityRange&&!validRange(request.moralityRange,MORALITY_LIMITS.min,MORALITY_LIMITS.max))issues.push('도덕 범위는 -100~100 정수여야 합니다.');
 if(request.karmaRange&&!validRange(request.karmaRange,KARMA_LIMITS.min,KARMA_LIMITS.max))issues.push('카르마 범위는 -1000~1000 정수여야 합니다.');
 if(request.dispositionCount!==undefined&&request.dispositionCount!=='random'&&![1,2,3].includes(request.dispositionCount))issues.push('성향 개수는 랜덤 또는 1~3개입니다.');
 issues.push(...validateMoralityProfile({dispositionIds:ids},false,registry));
 if(typeof request.dispositionCount==='number'&&ids.length>request.dispositionCount)issues.push('포함할 성향 수가 요청 성향 개수보다 많습니다.');
 return issues;
}
export function validateMoralityGenerationConfig(c:MoralityGenerationConfig):string[]{
 if(!c||!c.version||c.counts.length!==3||new Set(c.counts.map(r=>r.count)).size!==3||c.counts.some(r=>![1,2,3].includes(r.count)||!Number.isFinite(r.probability)||r.probability<0)||Math.abs(c.counts.reduce((n,r)=>n+r.probability,0)-1)>1e-9||[c.moralSpread,c.studentKarmaSpread,c.adultKarmaSpread,c.preferenceBoost,c.compatibleBoost].some(n=>!Number.isFinite(n)||n<=0)||!validRange(c.studentKarmaRange,KARMA_LIMITS.min,KARMA_LIMITS.max)||!validRange(c.adultKarmaRange,KARMA_LIMITS.min,KARMA_LIMITS.max))return ['도덕·카르마 생성 설정 오류'];
 return [];
}
// Box-Muller, provided seeded stream only. No global random or time.
const normal=(random:()=>number)=>Math.sqrt(-2*Math.log(Math.max(Number.EPSILON,random())))*Math.cos(2*Math.PI*random());
function centered(range:NumericRange,spread:number,random:()=>number,custom:boolean){const center=custom?(range.min+range.max)/2:Math.max(range.min,Math.min(range.max,0));return Math.round(Math.max(range.min,Math.min(range.max,center+normal(random)*Math.min(spread,(range.max-range.min)/3))));}
export function generateMorality(request:MoralityGenerationRequest,student:boolean,age:number,random:()=>number,registry:ReadonlyMap<string,DispositionDefinition>,config:MoralityGenerationConfig):CharacterMorality{
 const errors=[...validateMoralityRequest(request,registry),...validateMoralityGenerationConfig(config)];if(errors.length)throw new Error(errors.join(' · '));
 const morality=centered(request.moralityRange??MORALITY_LIMITS,config.moralSpread,random,!!request.moralityRange);
 const karma=centered(request.karmaRange??(student?config.studentKarmaRange:config.adultKarmaRange),student?config.studentKarmaSpread:config.adultKarmaSpread*Math.min(1.5,Math.max(.6,age/30)),random,!!request.karmaRange);
 const ids=[...(request.requiredDispositionIds??[])];
 const count=typeof request.dispositionCount==='number'?request.dispositionCount:weightedPick(config.counts.filter(row=>row.count>=ids.length).map(row=>({value:row.count,weight:row.probability})),random);
 if(count===undefined)throw new Error('요청 성향 개수의 추첨 확률이 0입니다.');
 const preference=(range:NumericRange|undefined,value:number)=>!range?1:value>=range.min&&value<=range.max?config.preferenceBoost:1;
 while(ids.length<count){
  const pool=[...registry.values()].filter(d=>!ids.includes(d.id)&&!ids.some(id=>d.incompatibleWith.includes(id)||registry.get(id)?.incompatibleWith.includes(d.id)));
  const chosen=weightedPick(pool.map(d=>({value:d.id,weight:preference(d.moralPreference,morality)*preference(d.karmaPreference,karma)*(ids.some(id=>d.compatibleWith.includes(id))?config.compatibleBoost:1)})),random);
  if(!chosen)throw new Error('조건을 만족하는 성향 조합이 없습니다.');ids.push(chosen);
 }
 const description=Math.abs(karma)<50?'초기 과거사에는 소소한 도움과 다툼이 섞여 있으며 뚜렷한 선악의 규모는 작다.':karma>0?(karma>=500?'지속적인 재난 구호와 피난 지원에 참여해 많은 사람을 살린 과거를 상정한다.':'대가 없는 간병과 구호 활동을 이어 와 주변 사람들에게 실질적인 도움을 남겼다.'):(karma<=-500?'조직적 착취와 무고한 사람들에 대한 중대한 가해에 관여한 과거를 상정한다.':'약자의 몫을 빼앗거나 타인을 배신해 실제 피해를 남긴 과거를 상정한다.');
 return {morality,karma,dispositionIds:ids,karmaOrigin:{source:request.karmaRange?'request-override':'generated-background',initialValue:karma,description:(request.karmaRange?'테스트 범위 지정에 따른 생성용 과거사: ':'생성용 과거사 요약: ')+description+' 실제 이벤트 실행 기록은 아니다.'}};
}
