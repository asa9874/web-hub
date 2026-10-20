import type {CharacterImpactInput,CharacterImpactCatalogs,CharacterImpactConfig,CharacterImpactResult,CharacterImpactIssue,CharacterImpactDomain} from '../types/characterImpact';
import {impactGrade,validImpact} from './impact';
export function validateCharacterImpactConfig(config:CharacterImpactConfig){
 const values=[config.maximum,...Object.values(config.caps),config.stats.ceiling,config.proficiency.maxRank,...Object.values(config.decay),config.stats.topWeight,config.stats.allWeight];
 if(!config.version||values.some(v=>!Number.isFinite(v)||v<0)||config.maximum!==1000||config.stats.ceiling<=0||config.proficiency.maxRank<=0||!config.stats.ids.length||new Set(config.stats.ids).size!==config.stats.ids.length||!Number.isInteger(config.stats.topCount)||config.stats.topCount<1||config.stats.topCount>config.stats.ids.length||Math.abs(config.stats.topWeight+config.stats.allWeight-1)>1e-9||Math.abs(Object.values(config.caps).reduce((a,b)=>a+b,0)-config.maximum)>1e-9)throw new Error('Invalid character impact configuration');
}
// Pure: no catalog singleton, console output, RNG, mutation, effect application or persistent score.
export function calculateCharacterImpact(character:CharacterImpactInput,catalogs:CharacterImpactCatalogs,config:CharacterImpactConfig):CharacterImpactResult {
 validateCharacterImpactConfig(config);
 const issues:CharacterImpactIssue[]=[];
 const issue=(code:CharacterImpactIssue['code'],path:string,message:string)=>issues.push({code,path,message});
 const clamp=(n:number,max:number)=>Math.max(0,Math.min(max,n));
 const number=(value:number|undefined,path:string,max:number)=>{if(value===undefined){issue('missing-stat',path,'누락된 능력치를 0으로 계산');return 0;}if(!Number.isFinite(value)){issue('invalid-value',path,'유효하지 않은 수치를 0으로 계산');return 0;}if(value<0)issue('invalid-value',path,'음수 수치를 0으로 제한');return clamp(value,max);};
 const decay=(values:number[])=>Math.min(config.maximum,[...values].sort((a,b)=>b-a).reduce((sum,v,i)=>sum+v*(i===0?config.decay.first:i===1?config.decay.second:i===2?config.decay.third:config.decay.rest),0));
 for(const field of ['proficiencyRanks','traitIds','giftIds','positions','titles'] as const)if(character[field]===undefined)issue('missing-data',field,'누락된 보유 목록을 빈 목록으로 계산');
 const seen=new Set<string>();
 const element=(kind:'traits'|'gifts'|'positions'|'titles',id:string,key=id,active=true)=>{
  const path=kind+'.'+key,entry=catalogs[kind].get(id);
  if(!entry){issue('missing-reference',path,'존재하지 않는 도감 ID: '+id);return [];}
  if(!validImpact(entry.impact)){issue('invalid-value',path,'잘못된 요소 영향력 메타데이터');return [];}
  if(seen.has(path)){issue('duplicate',path,'중복 보유 요소를 한 번만 계산');return [];}seen.add(path);
  return active?[entry.impact.baseImpact]:[];
 };
 const stats=config.stats.ids.map(id=>number(character.stats?.[id],'stats.'+id,config.stats.ceiling));
 const top=[...stats].sort((a,b)=>b-a).slice(0,config.stats.topCount);
 const statScore=(top.reduce((a,b)=>a+b,0)/top.length*config.stats.topWeight+stats.reduce((a,b)=>a+b,0)/stats.length*config.stats.allWeight)/config.stats.ceiling*config.maximum;
 const ranks=Object.entries(character.proficiencyRanks??{}).flatMap(([id,rank])=>{
  if(!catalogs.proficiencies.has(id)){issue('missing-reference','proficiencies.'+id,'존재하지 않는 숙련도 ID: '+id);return [];}
  if(!Number.isInteger(rank)||rank<0||rank>config.proficiency.maxRank){issue('invalid-value','proficiencies.'+id,'유효하지 않은 경지를 0으로 계산');return [];}
  return [rank/config.proficiency.maxRank*config.maximum];
 });
 const domainScores:Record<CharacterImpactDomain,number>={
  stats:clamp(statScore,config.maximum),proficiencies:decay(ranks),
  traits:decay((character.traitIds??[]).flatMap(id=>element('traits',id))),
  gifts:decay((character.giftIds??[]).flatMap(id=>element('gifts',id))),
  positions:decay((character.positions??[]).flatMap(p=>{if(!catalogs.organizations.has(p.organizationId)){issue('missing-reference','positions.'+p.definitionId,'존재하지 않는 소속 ID: '+p.organizationId);return [];}return element('positions',p.definitionId,p.definitionId+'@'+p.organizationId);})),
  titles:decay((character.titles??[]).flatMap(t=>element('titles',t.definitionId,t.definitionId,t.state==='active'))),
 };
 const contributions=Object.fromEntries((Object.keys(domainScores) as CharacterImpactDomain[]).map(key=>[key,config.caps[key]*domainScores[key]/config.maximum])) as Record<CharacterImpactDomain,number>;
 const impact=clamp(Math.round(Object.values(contributions).reduce((sum,n)=>sum+n,0)),config.maximum);
 return {impact,grade:impactGrade(impact),version:config.version,contributions,domainScores,issues};
}
