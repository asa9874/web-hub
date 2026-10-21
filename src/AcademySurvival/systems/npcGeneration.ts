import {generateInitialRelationships} from './relationshipGeneration';
import {generateMorality,validateMoralityRequest,validateMoralityGenerationConfig} from './moralityGeneration';
import {validateDispositions,validateMoralityProfile} from './morality';
import type {Character} from '../types/character';
import type {Context,Entry,Condition} from '../types';
import type {StatId,RankLevel} from '../types/knowledge';
import type {NpcGenerationRequest,NpcGenerationContext,GeneratedNpcResult,BatchGenerationResult,NpcDiagnostic,GrowthType,BackgroundProfile,GenerationEvidence} from '../types/npcGeneration';
import {seededRandom,seedHash,randomInt,weightedPick} from './seededRandom';
import {meets} from './conditions';
const gcd=(a:number,b:number):number=>b?gcd(b,a%b):a;
const flagsFor=(c:Condition):string[]=>c.kind==='flag'?[c.key]:c.kind==='all'?c.conditions.flatMap(flagsFor):[];
export class NpcGenerationError extends Error {diagnostics:NpcDiagnostic[];constructor(diagnostics:NpcDiagnostic[]){super(diagnostics.map(d=>d.message).join(' · '));this.name='NpcGenerationError';this.diagnostics=diagnostics;}}
const error=(code:string,message:string):NpcDiagnostic=>({level:'error',code,message});
export function validateGenerationSetup(context:NpcGenerationContext):NpcDiagnostic[]{
 const c=context.config,issues:NpcDiagnostic[]=[...validateMoralityGenerationConfig(context.config.morality).map(message=>error('morality-config',message)),...validateDispositions([...context.dispositions.values()]).map(issue=>error('disposition-data',issue.id+': '+issue.message))],fail=(message:string)=>issues.push(error('profile',message));
 for(const id of Object.values(c.initialLocations??{}))if(!context.locations.has(id))fail('생성 초기 위치 참조 오류: '+id);
 if(!c.initialLocations?.student||!c.initialLocations?.adult)fail('생성 초기 위치 설정 누락');
 if(!c.version||!Number.isInteger(c.maxCount)||c.maxCount<1||c.maxCount>1000||!Number.isInteger(c.maxAttempts)||c.maxAttempts<1||c.maxAttempts>100||!Number.isInteger(c.maxBatchAttempts)||c.maxBatchAttempts<c.maxCount*c.maxAttempts)fail('수량·재시도 예산 오류');
 const probability=(n:number)=>Number.isFinite(n)&&n>=0&&n<=1;
 for(const rows of [c.traitCounts,c.giftCounts])if(!rows.length||rows.some(r=>!Number.isInteger(r.count)||r.count<0||r.count>5||!probability(r.probability))||Math.abs(rows.reduce((n,r)=>n+r.probability,0)-1)>1e-9)fail('특성·기프트 개수 분포 오류');
 for(const n of [c.secondaryChance,c.hobbyChance,c.backgroundChance,c.statusChance,c.rareTalentChance,c.rareRankChance])if(!probability(n))fail('생성 확률 오류');
 for(const n of [c.coreOffset,c.supportOffset,c.noise,c.personalSpread,c.variantBonus,c.rareTalentBonus,c.rareRankBonus,c.relatedTraitMultiplier,c.relatedGiftMultiplier,c.impactPenalty,c.preferenceMultiplier])if(!Number.isFinite(n)||n<0)fail('생성 보정 수치 오류');
 if(!Number.isInteger(c.maxRank)||c.maxRank<1||c.maxRank>9||!Number.isInteger(c.statMin)||!Number.isInteger(c.statMax)||c.statMin<0||c.statMax<c.statMin)fail('능력치·경지 범위 오류');
 const bands=[...Object.values(c.years),c.adult];for(const b of bands)for(const range of [b.average,b.primary,b.age])if(range.length!==2||range.some(n=>!Number.isInteger(n)||n<0)||range[0]>range[1])fail('성장 기준 범위 오류');
 if(bands.some(b=>b.primary[1]>c.maxRank||b.average[1]>c.statMax))fail('성장 기준이 허용 수치 범위를 넘습니다.');
 if(Object.keys(c.years).join(',')!=='1,2,3,4')fail('학년 기준 1~4 필요');
 if(c.names.given.flatMap(g=>c.names.family.map(f=>g+' '+f)).filter(name=>!context.reservedNames.has(name)).length<c.maxCount)fail('중복 없는 이름 후보가 최대 생성 수보다 부족합니다.');
 if(!Number.isFinite(c.nonCoreOffset))fail('비주력 능력치 보정 오류');
 if(!c.names.given.length||!c.names.family.length||!c.genders.length||!c.personalities.length||!c.objectives.length)fail('이름·기본 인적 정보 후보 없음');
 if(new Set(c.specializations.map(p=>p.id)).size!==c.specializations.length||!c.specializations.length)fail('전공 ID 중복/누락');
 for(const p of c.specializations){if(!p.core.length||!p.primary.length||!Number.isFinite(p.weight)||p.weight<=0||!p.variants.length||new Set([...p.core,...p.support]).size!==p.core.length+p.support.length)fail('전공 구성 오류: '+p.id);for(const id of [...p.core,...p.support,...p.variants.map(v=>v.stat)])if(!['STR','AGI','VIT','MAG','INT','WIL','CHA'].includes(id))fail('능력치 참조 없음: '+id);for(const id of [...p.primary,...p.secondary])if(!context.proficiencies.has(id))fail('숙련도 참조 없음: '+id);for(const family of p.traitFamilies)if(!context.traits.some(t=>t.family===family))fail('특성 계열 없음: '+family);}
 for(const [id,g] of Object.entries(c.growth))if(!Number.isFinite(g.weight)||g.weight<=0||![g.shift,g.coreBonus,g.rankShift,g.rareTraitBoost,g.unusualBonus].every(Number.isFinite))fail('성장 유형 오류: '+id);
 for(const profile of c.specializations){if(!profile.organizationId)continue;let o=context.organizations.get(profile.organizationId);const seen=new Set<string>();while(o&&o.id!==c.academyId&&!seen.has(o.id)){seen.add(o.id);o=o.parentOrganizationId?context.organizations.get(o.parentOrganizationId):undefined;}if(!o||o.id!==c.academyId)fail('전공 소속과 아카데미 학적 불일치: '+profile.id);}
 for(const org of [c.academyId,c.adultOrganizationId,...c.specializations.flatMap(p=>p.organizationId?[p.organizationId]:[])])if(!context.organizations.has(org))fail('생성 소속 참조 오류: '+org);
 const grants=[...Object.values(c.years).map(y=>({kind:'position' as const,id:y.positionId,organizationId:c.academyId})),{kind:'position' as const,id:c.citizen.positionId,organizationId:c.citizen.organizationId},{kind:'title' as const,id:c.studentAdmissionTitleId},...[...c.backgrounds,...c.statuses].flatMap(b=>b.grants)];
 for(const g of grants){if(g.kind==='affiliation'){if(!context.organizations.has(g.id))fail('소속 참조 오류: '+g.id);}else if(g.kind==='position'){if(!context.positions.has(g.id)||context.positionConflict({definitionId:g.id,organizationId:g.organizationId??''},[]))fail('직급/소속 참조 오류: '+g.id);}else if(g.kind==='title'){if(!context.titles.has(g.id))fail('칭호 참조 오류: '+g.id);}else{const result=context.applyStatus([],context.makeStatus(g.id,'profile-check',g.stageId));if(!result.ok)fail('상태 참조 오류: '+g.id+' '+result.message);}}
 return issues;
}
function validateRequest(request:NpcGenerationRequest,context:NpcGenerationContext){
 const c=context.config,issues=[...validateGenerationSetup(context),...validateMoralityRequest(request,context.dispositions).map(message=>error('morality-request',message))];
 if(!Number.isInteger(request.count)||request.count<1||request.count>c.maxCount)issues.push(error('request','생성 수량은1~'+c.maxCount+'의 정수여야 합니다.'));
 if(typeof request.academyStudent!=='boolean'||(request.academyYear!==undefined&&request.academyYear!=='random'&&![1,2,3,4].includes(request.academyYear)))issues.push(error('request','생도 여부/학년 조건 오류'));
 if(request.specializationId&&request.specializationId!=='random'&&!c.specializations.some(s=>s.id===request.specializationId))issues.push(error('request','알 수 없는 전공: '+request.specializationId));
 if(request.growthType&&request.growthType!=='random'&&!Object.hasOwn(c.growth,request.growthType))issues.push(error('request','알 수 없는 성장 유형'));
 if(request.impactPreference&&!['balanced','combat','social'].includes(request.impactPreference))issues.push(error('request','알 수 없는 영향력 성향'));
 if(request.targetImpact&&(!Number.isInteger(request.targetImpact.min)||!Number.isInteger(request.targetImpact.max)||request.targetImpact.min<0||request.targetImpact.max>1000||request.targetImpact.min>request.targetImpact.max))issues.push(error('request','목표 영향력은0~1000의 올바른 범위여야 합니다.'));
 if(request.startIndex!==undefined&&(!Number.isSafeInteger(request.startIndex)||request.startIndex<0||request.startIndex>1000000))issues.push(error('request','시작 인덱스 오류'));
 if(request.seed!==undefined&&(typeof request.seed!=='string'||request.seed.length>256))issues.push(error('request','시드는256자 이하여야 합니다.'));
 if(issues.length)throw new NpcGenerationError(issues);
}
const distance=(value:number,target:NpcGenerationRequest['targetImpact'])=>!target?0:value<target.min?target.min-value:value>target.max?value-target.max:0;
function candidate(request:NpcGenerationRequest,context:NpcGenerationContext,rootSeed:string,index:number,attempt:number):GeneratedNpcResult {
 const c=context.config,seed=rootSeed+'/npc/'+index,identityRandom=seededRandom(seed+'/identity'),identityInt=(a:number,b:number)=>randomInt(identityRandom,a,b),identityPick=<T,>(items:readonly T[])=>items[identityInt(0,items.length-1)],random=seededRandom(seed+'/attempt/'+attempt),pick=<T,>(items:readonly T[])=>items[randomInt(random,0,items.length-1)],int=(a:number,b:number)=>randomInt(random,a,b);
 const profile=request.specializationId&&request.specializationId!=='random'?c.specializations.find(p=>p.id===request.specializationId)!:weightedPick(c.specializations.map(p=>({value:p,weight:p.weight})),identityRandom)!;
 const growthType=request.growthType&&request.growthType!=='random'?request.growthType:weightedPick((Object.entries(c.growth) as [GrowthType,typeof c.growth[GrowthType]][]).map(([value,g])=>({value,weight:g.weight})),identityRandom)!;
 const growth=c.growth[growthType],year=request.academyStudent?(request.academyYear&&request.academyYear!=='random'?request.academyYear:identityInt(1,4) as 1|2|3|4):0;
 const band=year?c.years[year as 1|2|3|4]:c.adult,variant=identityPick(profile.variants),ids=['STR','AGI','VIT','MAG','INT','WIL','CHA'] as StatId[];
 const latent=int(...band.average)+growth.shift+(random()*2-1)*c.personalSpread;
 const offsets=ids.map(id=>profile.core.includes(id)?c.coreOffset+growth.coreBonus:profile.support.includes(id)?c.supportOffset:c.nonCoreOffset),center=offsets.reduce((a,b)=>a+b,0)/ids.length;
 const anomaly=growthType==='unusual'?identityPick(ids.filter(id=>!profile.core.includes(id))):null,rare=random()<c.rareTalentChance;
 const values=ids.map((id,i)=>Math.max(c.statMin,Math.min(c.statMax,Math.round(latent+offsets[i]-center+(random()+random()+random()-1.5)*c.noise+(variant.stat===id?variant.bonus*c.variantBonus:0)+(anomaly===id?growth.unusualBonus:0)+(rare&&profile.core[0]===id?c.rareTalentBonus:0)))));
 const stats=Object.fromEntries(ids.map((id,i)=>[id,values[i]])) as Character['stats'];
 const mainId=identityPick(profile.primary),rank=Math.max(0,Math.min(c.maxRank,int(...band.primary)+growth.rankShift+(random()<c.rareRankChance?c.rareRankBonus:0))) as RankLevel;
 const proficiencyRanks:Character['proficiencyRanks']={[mainId]:rank};
 for(const id of profile.secondary)if(random()<c.secondaryChance)proficiencyRanks[id]=Math.max(0,rank-int(1,2)) as RankLevel;
 if(random()<c.hobbyChance){const id=pick([...context.proficiencies.keys()].filter(id=>!profile.primary.includes(id)&&!profile.secondary.includes(id)));if(id)proficiencyRanks[id]=int(0,Math.min(1,rank)) as RankLevel;}
 const names=c.names.given.flatMap(given=>c.names.family.map(family=>given+' '+family)).filter(name=>!context.reservedNames.has(name)),offset=seedHash(rootSeed+'/names')%names.length;let stride=seedHash(rootSeed+'/name-stride')%names.length||1;while(gcd(stride,names.length)!==1)stride++;const name=names[(offset+index*stride)%names.length];
 if(!name)throw new NpcGenerationError([error('names','예약 이름을 제외한 이름 풀이 부족합니다.')]);
 const personality=identityPick(c.personalities),objective=identityPick(c.objectives),id='npc-'+seedHash(rootSeed).toString(16)+'-'+index;
 const character:Character={id,kind:'random_npc',specializationId:profile.id,name,age:identityInt(...band.age),gender:identityPick(c.genders),species:'인간',origin:'제국의 아카데미 권역',schoolYear:year,affiliation:year?'본교 아카데미':'도시 생활권',title:profile.name+' '+(year?'전공 생도':'기술 수련자'),introduction:'각자의 사정으로 '+profile.name+'의 길을 선택한 '+name+'.',summary:profile.name+' · '+variant.name+' 성향. '+personality,background:[],personality:[personality],values:['스스로 선택한 일의 결과를 책임지려 한다.'],weaknesses:growthType==='weak'?['동료의 속도와 자신을 비교하며 조급해지곤 한다.']:[],appearance:{description:'단정한 '+(year?'아카데미 교복':'일상복')+'에 손질한 개인 소지품을 챙겼다.',provisional:true},objective,tendencies:[{id:'specialization',label:'전공 · '+profile.name,description:variant.name+' 성향으로 자신의 주특기를 다듬는다.'},{id:'growth',label:'성장 유형 · '+growth.name,description:anomaly?anomaly+'에 비주력 재능이 드러난다.':'성장 유형은 현재 생성 분포이며 미래의 성장을 고정하지 않는다.'}],stats,proficiencyRanks,traitIds:[],giftIds:[],positions:[],titles:[],statuses:[],relationships:[],affiliations:[]};
 Object.assign(character,generateMorality(request,!!year,character.age,seededRandom(seed+'/morality'),context.dispositions,c.morality));
 const diagnostics:NpcDiagnostic[]=[],evidence:GenerationEvidence[]=[],flags:string[]=[];
 const ctx=():Context=>({stats:{...stats,...Object.fromEntries(Object.entries(c.aliases).map(([key,id])=>[key,stats[id]])),...Object.fromEntries(profile.traitFamilies.map(f=>[f,stats[profile.core[0]]]))},flags:[...flags],tags:[profile.id,...profile.giftTags],traits:[...character.traitIds],gifts:[...character.giftIds]});
 const grant=(b:BackgroundProfile)=>{
  const proof:GenerationEvidence={id:b.id,description:b.description,grants:[],flags:[]};
  for(const g of b.grants){
   if(g.kind==='affiliation'){if(context.organizations.has(g.id)){character.affiliations.push({organizationId:g.id,visibility:g.visibility??'public',sourceId:'npc-background/'+b.id});proof.grants.push(g);}else diagnostics.push(error('affiliation-reference',g.id+' 조직 정의 없음'));continue;}
   if(g.kind==='status'){const instance=context.makeStatus(g.id,id+'/'+g.id,g.stageId);instance.sourceId='npc-background/'+b.id;const applied=context.applyStatus(character.statuses,instance);if(applied.ok){character.statuses=applied.instances;proof.grants.push(g);}else diagnostics.push(error('status',applied.message));continue;}
   const def=g.kind==='position'?context.positions.get(g.id):context.titles.get(g.id);if(!def){diagnostics.push(error('reference',g.id+' 정의 없음'));continue;}
   const qualification=flagsFor(def.acquisition.rule.condition);const current={...ctx(),flags:[...flags,...qualification]};
   if(!meets(def.acquisition.rule.condition,current)){diagnostics.push(error('qualification',g.id+' 부여 조건 미충족'));continue;}
   if(g.kind==='position'){const holding={definitionId:g.id,organizationId:g.organizationId??'',sourceEventId:'npc-background/'+b.id},conflict=context.positionConflict(holding,character.positions);if(conflict){diagnostics.push(error('position-conflict',conflict));continue;}character.positions.push(holding);}else{character.titles.push({definitionId:g.id,fact:'confirmed',visibility:(def.kind==='title'?def.publicity.default:'public'),recognizedBy:[year?c.academyId:'city-court'],state:'active',sourceEventId:'npc-background/'+b.id});}
   flags.push(...qualification);proof.flags.push(...qualification);proof.grants.push(g);
  }
  evidence.push(proof);character.background.push(b.description);
 };
 const entryGrants=[{kind:'affiliation' as const,id:year?(profile.organizationId??c.academyId):c.adultOrganizationId},{kind:'position' as const,id:c.citizen.positionId,organizationId:c.citizen.organizationId},...(year?[{kind:'position' as const,id:c.years[year as 1|2|3|4].positionId,organizationId:c.academyId},{kind:'title' as const,id:c.studentAdmissionTitleId}]:[])];
 grant({id:'registration',name:'공식 등록',description:year?year+'학년의 선수 과정과 학적 심사를 마치고 해당 학년에 등록했다. 첫 입학 절차와 시민 신분도 공적 장부에 확인되어 있고 학부 배정 또는 교육기관 소속 등록을 별도로 마쳤다.':'도시의 시민 등록 요건을 갖추고 신원을 등록했다. 거주 여부와 별도로 '+context.organizations.get(c.adultOrganizationId)?.name+'의 규약에 동의하고 자발적인 가입을 마쳤다.',weight:1,audience:'both',grants:entryGrants});
 const suitable=(b:BackgroundProfile)=>(b.audience==='both'||b.audience===(year?'student':'adult'))&&(!b.minYear||year>=b.minYear)&&(!b.specializations||b.specializations.includes(profile.id))&&(!b.growthTypes||b.growthTypes.includes(growthType));
 if(random()<c.backgroundChance){const bg=weightedPick(c.backgrounds.filter(suitable).map(b=>({value:b,weight:b.weight*(b.preferences?.includes(request.impactPreference??'balanced')?c.preferenceMultiplier:1)})),random);if(bg)grant(bg);}
 if(random()<c.statusChance){const state=weightedPick(c.statuses.filter(suitable).map(b=>({value:b,weight:b.weight})),random);if(state)grant(state);}
 const owned:Entry[]=[];
 for(const kind of ['trait','gift'] as const){const count=weightedPick((kind==='trait'?c.traitCounts:c.giftCounts).map(row=>({value:row.count,weight:row.probability})),random)??0;
  for(let slot=0;slot<count;slot++){
   const pool=context.birthPool([...(kind==='trait'?context.traits:context.gifts)],ctx(),owned);
   const chosen=weightedPick(pool.map(({entry,weight})=>{
    const related=entry.kind==='trait'?profile.traitFamilies.includes(entry.family):entry.eventTags.some(t=>profile.giftTags.includes(t))||profile.giftTags.includes(entry.category);
    const rarity=entry.rarity==='rare'||entry.rarity==='epic'||entry.rarity==='legendary'?growth.rareTraitBoost:1;
    const preference=request.impactPreference==='combat'?entry.impact.domains.some(d=>d==='combat'||d==='magic'):request.impactPreference==='social'?entry.impact.domains.some(d=>d==='society'||d==='politics'):false;
    const fitness=entry.kind==='trait'&&profile.traitFamilies.includes(entry.family)?1+stats[profile.core[0]]/100:1;
    return {value:entry,weight:weight*(related?(kind==='trait'?c.relatedTraitMultiplier:c.relatedGiftMultiplier):1)*rarity*fitness*(preference?c.preferenceMultiplier:1)/(1+entry.impact.baseImpact/1000*c.impactPenalty)};
   }),random);
   if(!chosen){diagnostics.push({level:'warning',code:'empty-pool',message:kind+' 적격 후보 부족: 요청 슬롯을 비워 둡니다.'});break;}owned.push(chosen);(kind==='trait'?character.traitIds:character.giftIds).push(chosen.id);
  }
 }
 Object.assign(character,context.normalizeAffiliations({affiliations:character.affiliations,primaryOrganizationId:year?(profile.organizationId??c.academyId):c.adultOrganizationId}));
 character.primaryPositionId=year?c.years[year as 1|2|3|4].positionId:character.positions[0]?.definitionId;character.primaryTitleId=character.titles[0]?.definitionId;
 if(growthType!=='ordinary'||rare)diagnostics.push({level:'info',code:'intentional-variation',message:growth.name+' 유형/희귀 재능에 따른 학년 평균 이탈은 의도된 편차입니다.'});
 for(const message of validateMoralityProfile(character,true,context.dispositions))diagnostics.push(error('morality-validation',message));
 character.location={characterId:character.id,currentLocationId:year?c.initialLocations.student:c.initialLocations.adult,movement:null};
 for(const issue of context.validateCharacter(character))diagnostics.push(error('character-validation',issue.message));
 const impact=context.calculateImpact(character);for(const issue of impact.issues)diagnostics.push(error('impact-reference',issue.path+': '+issue.message));
 const valid=!diagnostics.some(d=>d.level==='error'),targetMet=distance(impact.impact,request.targetImpact)===0;
 return {character,impact,success:valid&&targetMet,targetMet,valid,attempts:attempt+1,index,seed,specializationId:profile.id,growthType,primaryProficiencyId:mainId,variant:variant.name,evidence,diagnostics};
}
export function generateNpcs(request:NpcGenerationRequest,context:NpcGenerationContext):BatchGenerationResult {
 validateRequest(request,context);const rootSeed=request.seed??'npc-v1-default',results:GeneratedNpcResult[]=[];
 for(let n=0;n<request.count;n++){
  const index=(request.startIndex??0)+n;let best:GeneratedNpcResult|undefined,attempts=0;
  for(let attempt=0;attempt<context.config.maxAttempts;attempt++){
   const current=candidate(request,context,rootSeed,index,attempt);attempts++;
   if(!best||(current.valid&&!best.valid)||(current.valid===best.valid&&distance(current.impact.impact,request.targetImpact)<distance(best.impact.impact,request.targetImpact)))best=current;
   if(current.success){best=current;break;}
  }
  best!.attempts=attempts;if(!best!.success)best!.diagnostics.push({level:best!.valid?'warning':'error',code:'target-unmet',message:attempts+'회'+' 내 목표/유효성 조건을 만족하지 못했습니다. 가장 가까운 후보이며 조건을 완화하지 않았습니다.'});results.push(best!);
 }
 const relationships=generateInitialRelationships([...(context.relationshipCharacters??[]),...results.filter(r=>r.valid).map(r=>r.character)],{...context.relationshipOptions,seed:context.relationshipOptions?.seed??rootSeed+'/relationships'});
 return {relationships,request:{...request,seed:rootSeed,...(request.targetImpact?{targetImpact:{...request.targetImpact}}:{})},seed:rootSeed,version:context.config.version,results,diagnostics:[]};
}
export function generateNpc(request:Omit<NpcGenerationRequest,'count'>,context:NpcGenerationContext){return generateNpcs({...request,count:1},context).results[0];}

/** Companion API retaining the graph while keeping generateNpc's stable per-index result contract. */
export function generateNpcWithRelationships(request:Omit<NpcGenerationRequest,'count'>,context:NpcGenerationContext){const batch=generateNpcs({...request,count:1},context);return {npc:batch.results[0],relationships:batch.relationships};}
