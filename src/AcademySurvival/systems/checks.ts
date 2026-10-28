import {skillCheckBonus} from './skillRules';
import type {Character} from '../types/character';
import type {CheckRequest,CheckResult,CheckScore,CheckDefinition} from '../types/check';
import type {Effect,Context} from '../types';
import {CHECK_RULES as R,checkRegistry} from '../data/checks';
import {proficiencyRegistry} from './knowledgeRegistry';
import {traitRegistry,giftRegistry} from './registry';
import {statusRegistry} from './statusRegistry';
import {commonEffect} from '../data/statuses/define';
import {actionAvailability} from './statusApplication';
import {meets} from './conditions';
import {seededRandom,randomInt} from './seededRandom';
const bound=(n:number)=>Math.max(R.modifierMin,Math.min(R.modifierMax,n));
export function getCheckDefinition(id:string){const d=checkRegistry.get(id);if(!d)throw Error('알 수 없는 공통 판정: '+id);return d;}
export function scoreCheck(c:Character,definition:CheckDefinition,tags:string[]=[],situation=0,equipmentEffects:Effect[]=[]):CheckScore{
 for(const stat of [definition.primary,definition.secondary])if(!Number.isFinite(c.stats[stat])||c.stats[stat]<0)throw Error('판정 능력치 오류');
 if(!Number.isFinite(situation))throw Error('상황 보정 오류');
 if(definition.proficiencyId&&!proficiencyRegistry.has(definition.proficiencyId))throw Error('존재하지 않는 판정 숙련도');const rank=definition.proficiencyId?c.proficiencyRanks[definition.proficiencyId]??0:0;if(!Number.isInteger(rank)||rank<0||rank>9||definition.proficiencyId&&!definition.allowUntrained&&rank===0)throw Error('해당 판정의 학습·숙련 조건 미달');
 const context:Context={stats:c.stats,traits:c.traitIds,gifts:c.giftIds,flags:[],tags:[...new Set([...definition.tags,...tags,...c.accessTags??[]])]},appliedModifierIds:string[]=[],unsupported:string[]=[];
 let check=0;const stats:Record<string,number>={};const visit=(source:string,e:Effect)=>{if(e.type==='CONDITIONAL_EFFECT'){if(meets(e.condition,context))e.effects.forEach(x=>visit(source,x));return;}const id=source+'/'+e.id;if(appliedModifierIds.includes(id))return;
  if(e.type==='STAT_MODIFIER'&&[definition.primary,definition.secondary].includes(e.target as CheckDefinition['primary'])){stats[e.target]=(stats[e.target]??0)+e.amount;appliedModifierIds.push(id);}
  else if(e.type==='CHECK_MODIFIER'&&[definition.id,...definition.tags].includes(e.target)){if(e.unit==='score'){check+=e.amount;appliedModifierIds.push(id);}else unsupported.push(id+' · %p는 점수에 암묵적으로 합산하지 않음');}
  else if(e.type==='SPECIAL_RULE'&&!giftRegistry.get(source)?.power)unsupported.push(id+' · 전용 실행 어댑터 필요');
 };
 for(const id of c.traitIds){const d=traitRegistry.get(id);if(!d)throw Error('판정 특성 참조 오류');d.effects.forEach(e=>visit(id,e));}
 for(const id of c.giftIds){const d=giftRegistry.get(id);if(!d)throw Error('판정 기프트 참조 오류');d.effects.forEach(e=>visit(id,e));}
 for(const instance of c.statuses){const d=statusRegistry.get(instance.definitionId);if(!d)throw Error('판정 상태 참조 오류');for(let stack=0;stack<(d.stacking.effects==='per-stack'?instance.stacks:1);stack++)for(const e of [...d.effects,...d.stages.find(s=>s.id===instance.stageId)?.effects??[]].filter(commonEffect))visit(instance.id+'/'+stack,e);}
 equipmentEffects.forEach(e=>visit('equipment',e));
 const exchange=c.giftIds.find(id=>{const p=giftRegistry.get(id)?.power;return p?.kind==='exchange-weights'&&p.checks.includes(definition.id);});if(exchange)appliedModifierIds.push(exchange+'/power');
 const baseAbility=Math.round((c.stats[definition.primary]*R.primaryWeight+c.stats[definition.secondary]*R.secondaryWeight)*R.statFactor),effectiveAbility=Math.round((Math.max(0,c.stats[definition.primary]+(stats[definition.primary]??0))*(exchange?R.secondaryWeight:R.primaryWeight)+Math.max(0,c.stats[definition.secondary]+(stats[definition.secondary]??0))*(exchange?R.primaryWeight:R.secondaryWeight))*R.statFactor),modifierTotal=bound(effectiveAbility-baseAbility+check+situation+skillCheckBonus(c,definition)),proficiencyScore=rank*R.skillPerRank;
 return {abilityScore:baseAbility,proficiencyScore,modifierTotal,score:baseAbility+proficiencyScore+modifierTotal,appliedModifierIds,unsupported};
}
export function resolveCheck(request:CheckRequest,lookup:(id:string)=>Character,seed:string,luckOverride?:number,equipment?:(id:string)=>Effect[]):CheckResult{
 if(!request.id||!request.contextId||!seed||!!request.opposition===(request.difficulty!==undefined))throw Error('고유 판정 ID·문맥·시드와 난이도/대항 중 하나 필요');
 const d=getCheckDefinition(request.actionId),actorCharacter=lookup(request.actorId),blocked=[d.id,...d.tags].flatMap(tag=>actionAvailability(actorCharacter.statuses,tag).reasons);if(blocked.length)throw Error(blocked.join(' · '));const actor=scoreCheck(actorCharacter,d,request.tags,request.situationModifier,equipment?.(request.actorId)),defender=request.opposition?scoreCheck(lookup(request.opposition.targetId),getCheckDefinition(request.opposition.actionId),request.tags,request.opposition.situationModifier,equipment?.(request.opposition.targetId)):undefined,targetScore=defender?.score??request.difficulty!;
 if(!Number.isFinite(targetScore)||targetScore<0||request.opposition?.targetId===request.actorId)throw Error('대항 대상·난이도 오류');let luckRoll=luckOverride??randomInt(seededRandom(seed+'/'+request.contextId+'/'+request.id),R.luckMin,R.luckMax);if(!Number.isInteger(luckRoll)||luckRoll<R.luckMin||luckRoll>R.luckMax)throw Error('판정 난수 범위 오류');
 const rawLuckRoll=luckRoll,giftEffects:string[]=[];for(const id of [...actorCharacter.giftIds].sort()){const p=giftRegistry.get(id)?.power;if(!p||p.kind==='memory-anchor'||p.kind==='exchange-weights'||p.checks.length&&!p.checks.includes(d.id))continue;if(p.kind==='steady-luck'){luckRoll=0;giftEffects.push(id);}if(p.kind==='extreme-luck'){luckRoll=luckRoll<0?R.luckMin:R.luckMax;giftEffects.push(id);}}
 const margin=actor.score-targetScore+luckRoll;let outcome:CheckResult['outcome']=margin>=R.greatMargin?'great_success':margin>=0?'success':d.partial&&margin>=R.partialMargin?'partial_success':d.critical&&margin<=R.criticalMargin?'critical_failure':'failure';
 for(const id of [...actorCharacter.giftIds].sort()){const p=giftRegistry.get(id)?.power;if(!p||p.kind==='memory-anchor'||p.checks.length&&!p.checks.includes(d.id))continue;if(p.kind==='precision'&&margin>=0&&margin<=2){outcome='great_success';giftEffects.push(id);}}
 return {id:request.id,actorId:request.actorId,targetId:request.opposition?.targetId,actionId:d.id,contextId:request.contextId,actor,targetScore,defender,luckRoll,...(giftEffects.length?{rawLuckRoll,giftEffects}:{}),margin,outcome,success:margin>=0,cost:outcome==='partial_success'?d.partial!.cost:undefined,consequence:outcome==='critical_failure'?d.critical!.consequence:undefined};
}
/** Exact twenty-outcome distribution; querying it never consumes a world RNG. */
export function getCheckDistribution(request:CheckRequest,lookup:(id:string)=>Character,equipment?:(id:string)=>Effect[]){const rows=Array.from({length:20},(_,i)=>resolveCheck(request,lookup,'distribution',i-10,equipment));return {probability:rows.filter(r=>r.success).length/20,actor:rows[0].actor,targetScore:rows[0].targetScore,outcomes:rows.map(r=>({luck:r.luckRoll,margin:r.margin,outcome:r.outcome}))};}
