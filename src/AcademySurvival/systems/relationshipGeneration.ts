import {positionRegistry} from './socialRules';
import type {Character} from '../types/character';
import type {RelationshipGenerationOptions,RelationshipGenerationResult,RelationshipRecord} from '../types/relationship';
import {RELATIONSHIP_V1 as config} from '../data/relationships/config';
import {fixedRelationshipSeeds} from '../data/relationships';
import {createRelationshipGraph} from './relationships';
import {seededRandom,randomInt} from './seededRandom';
import {organizationPath} from './organizations';
import {locationCatalog} from './locationRegistry';
const has=(c:Character,keys:readonly string[])=>c.dispositionIds?.some(id=>keys.includes(id))??false;
const clamp=(n:number,min:number,max:number)=>Math.max(min,Math.min(max,Math.round(n)));
function contacts(c:Character){const keys=new Set<string>();for(const a of c.affiliations)for(const org of organizationPath(a.organizationId))keys.add('org:'+org.id);if(c.classId)keys.add('class:'+c.classId);if(c.location?.homeLocationId)keys.add('home:'+c.location.homeLocationId);if(c.location&&!c.location.movement)keys.add('place:'+c.location.currentLocationId);if(c.specializationId)keys.add('specialization:'+c.specializationId);return keys;}
function contactChance(a:Character,b:Character){
 const direct=new Set(a.affiliations.map(o=>o.organizationId)),paths=new Set(a.affiliations.flatMap(o=>organizationPath(o.organizationId).map(p=>p.id))),sharedDirect=b.affiliations.some(o=>direct.has(o.organizationId)),sharedOrg=b.affiliations.some(o=>organizationPath(o.organizationId).some(p=>paths.has(p.id)));
 const sameClass=!!a.classId&&a.classId===b.classId,sameHome=!!a.location?.homeLocationId&&a.location.homeLocationId===b.location?.homeLocationId,samePlace=!!a.location&&!a.location.movement&&!b.location?.movement&&a.location.currentLocationId===b.location?.currentLocationId;
 const department=sharedDirect&&a.affiliations.some(o=>b.affiliations.some(p=>p.organizationId===o.organizationId)&&organizationPath(o.organizationId).at(-1)?.scale==='unit');
 const region=(c:Character)=>c.location?locationCatalog.getLocationPath(c.location.currentLocationId).find(l=>l.type==='city'||l.type==='region')?.id:undefined;
 let p=sameClass?config.contact.sameClass:sameHome?config.contact.sameHome:department?config.contact.sameDepartment:sharedDirect?config.contact.sameOrganization:samePlace?config.contact.sameLocation:sharedOrg?config.contact.sameRegion:region(a)&&region(a)===region(b)?config.contact.sameRegion:config.contact.none;
 if(sharedOrg&&a.schoolYear>0&&a.schoolYear===b.schoolYear)p+=config.similarityBonus.year;
 if(a.specializationId&&a.specializationId===b.specializationId)p+=config.similarityBonus.specialization;
 if(a.traitIds.some(id=>b.traitIds.includes(id)))p+=config.similarityBonus.traits;
 if(Math.abs(a.age-b.age)<=2)p+=config.similarityBonus.age;
 if(has(a,config.dispositions.social)||has(b,config.dispositions.social))p*=config.socialMultiplier;if(has(a,config.dispositions.isolated)||has(b,config.dispositions.isolated))p*=config.isolatedMultiplier;
 return Math.min(.95,p);
}
export function generateInitialRelationships(characters:readonly Character[],options:RelationshipGenerationOptions={}):RelationshipGenerationResult{
 const sorted=[...characters].sort((a,b)=>a.id.localeCompare(b.id)),byId=new Map(sorted.map(c=>[c.id,c])),ids=new Set(byId.keys()),average=options.averageConnections??config.defaultConnections;
 if(sorted.length>config.maxCharacters||ids.size!==sorted.length||sorted.some(c=>!c.id))throw new Error('관계 생성 캐릭터 ID 중복·수량 오류');
 if(!Number.isFinite(average)||average<0||average>config.maxConnections)throw new Error(`평균 관계 수는 0~${config.maxConnections}여야 합니다.`);
 if(options.seed!==undefined&&typeof options.seed!=='string'&&(!Number.isSafeInteger(options.seed)))throw new Error('잘못된 관계 시드');
 const allIds=sorted.map(c=>c.id);
 const seed=String(options.seed??'relationships-v1-default'),graph=createRelationshipGraph(ids,options.includeExistingRelationships===false?[]:options.existingRecords??[],{now:()=>options.at}),diagnostics:string[]=[],pools=new Map<string,string[]>(),keys=new Map(sorted.map(c=>[c.id,contacts(c)]));
 for(const c of sorted)for(const key of keys.get(c.id)!){const pool=pools.get(key)??[];pool.push(c.id);pools.set(key,pool);}
 const neighbors=new Map(sorted.map(c=>[c.id,new Set<string>()]));
 const link=(a:string,b:string)=>{neighbors.get(a)!.add(b);neighbors.get(b)!.add(a);};
 // Canonically confirmed seeds win, only when both endpoints are in this world.
 for(const fixed of options.fixedSeeds??fixedRelationshipSeeds){if(!ids.has(fixed.sourceCharacterId)||!ids.has(fixed.targetCharacterId))throw new Error('고정 관계에 존재하지 않는 캐릭터 참조');const old=graph.getRelationship(fixed.sourceCharacterId,fixed.targetCharacterId);if(old){const {sourceCharacterId:source,targetCharacterId:target,createdAt:_created,updatedAt:_updated,origin:_origin,...changes}=fixed;graph.updateRelationship(source,target,changes);}else graph.createRelationship({...fixed,origin:'fixed'});}
 graph.getRecords().forEach(r=>link(r.sourceCharacterId,r.targetCharacterId));let consideredPairs=0;
 const createDirection=(a:Character,b:Character,random:()=>number):RelationshipRecord=>{
  const competitive=has(a,config.dispositions.competitive),justice=has(a,config.dispositions.justice),cautious=has(a,config.dispositions.cautious),ambitious=has(a,config.dispositions.ambitious),badDeeds=(b.karma??0)<-200;
  const extreme=options.allowHostileRelationships!==false&&random()<config.extremeChance;
  let affection=randomInt(random,-20,45)+(justice&&badDeeds?-25:0)+Math.round((a.morality??0)/20),trust=randomInt(random,-10,45)-(cautious?20:0),intimacy=randomInt(random,8,40),respect=randomInt(random,0,55),fear=randomInt(random,0,18);
  const sharedHome=!!a.location?.homeLocationId&&a.location.homeLocationId===b.location?.homeLocationId,sharedClass=!!a.classId&&a.classId===b.classId;
  let type='relation-acquaintance';if(sharedHome)type='relation-roommate';else if(sharedClass)type='relation-classmate';else if(random()<config.rivalChance*(competitive?2:1)){type='relation-rival';respect+=20;}else if(affection>20&&random()<.65)type='relation-friend';else if(a.affiliations.some(x=>b.affiliations.some(y=>x.organizationId===y.organizationId))&&random()<.4)type='relation-colleague';
  if(options.allowHostileRelationships!==false&&(extreme||random()<config.hostileChance&&(justice&&badDeeds||competitive))&&!sharedHome&&!sharedClass){type='relation-hostile';affection=extreme?randomInt(random,-95,-65):randomInt(random,-65,-40);trust=randomInt(random,-65,0);fear+=randomInt(random,10,45);}
  if(options.allowRomanticRelationships&&a.age>=config.romanticMinAge&&b.age>=config.romanticMinAge&&Math.abs(a.age-b.age)<=config.romanticMaxAgeGap&&random()<config.romanticChance&&!sharedHome&&!sharedClass){type='relation-crush';affection=randomInt(random,35,85);intimacy=randomInt(random,5,30);}
  if(ambitious&&Math.max(0,...b.positions.map(p=>positionRegistry.get(p.definitionId)?.impact.baseImpact??0))>Math.max(0,...a.positions.map(p=>positionRegistry.get(p.definitionId)?.impact.baseImpact??0))+100){respect+=15;fear+=10;}if(options.allowHostileRelationships===false)affection=Math.max(-30,affection);
  return {sourceCharacterId:a.id,targetCharacterId:b.id,affection:clamp(affection,-100,100),trust:clamp(trust,-100,100),intimacy:clamp(intimacy,0,100),respect:clamp(respect,0,100),fear:clamp(fear,0,100),relationshipTypeIds:[type],familiarity:'known',visibility:type==='relation-crush'?'private':'public',origin:'generated'};
 };
 for(const a of sorted){const random=seededRandom(`${seed}/candidates/${a.id}`),target=average===0?0:Math.min(config.maxConnections,sorted.length-1,Math.max(0,Math.round(average+(has(a,config.dispositions.social)?2:0)-(has(a,config.dispositions.isolated)?3:0)))),candidateIds=new Set<string>(),aKeys=[...keys.get(a.id)!];
  // Bounded sampling from real contact buckets, plus a few low-probability strangers. No N² pair pass.
  for(let i=0;i<config.maxCandidates*3&&candidateIds.size<config.maxCandidates;i++){let pool:readonly string[]=allIds;if(aKeys.length&&i%5!==0)pool=pools.get(aKeys[randomInt(random,0,aKeys.length-1)])!;if(pool.length){const id=pool[randomInt(random,0,pool.length-1)];if(id!==a.id)candidateIds.add(id);}}
  for(const bid of candidateIds){if(neighbors.get(a.id)!.size>=target)break;if(neighbors.get(bid)!.size>=config.maxConnections||neighbors.get(a.id)!.has(bid))continue;const b=byId.get(bid)!;consideredPairs++;const pairRandom=seededRandom(`${seed}/contact/${[a.id,b.id].sort().join('/')}`);if(pairRandom()>contactChance(a,b))continue;
   const forward=createDirection(a,b,seededRandom(`${seed}/emotion/${a.id}/${b.id}`)),reverse=createDirection(b,a,seededRandom(`${seed}/emotion/${b.id}/${a.id}`));graph.createRelationship(forward);
   if(graph.getRelationship(b.id,a.id)){const {sourceCharacterId:_source,targetCharacterId:_target,origin:_origin,...changes}=reverse;graph.updateRelationship(b.id,a.id,{...changes,relationshipTypeIds:[...new Set([...graph.getRelationship(b.id,a.id)!.relationshipTypeIds,...reverse.relationshipTypeIds])]});}else graph.createRelationship(reverse);link(a.id,b.id);
  }
 }
 if(sorted.length&&graph.getRecords().length===0&&average>0)diagnostics.push('접점·확률·기존 관계 조건에 따라 새 관계가 형성되지 않았습니다.');
 return {version:config.version,seed,records:graph.getRecords(),consideredPairs,diagnostics};
}
