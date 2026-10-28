import type {Character} from '../types/character';
import type {CulturalProfile} from '../types/culture';
import type {ConversationProposal,ConversationRecord} from '../types/conversation';
import type {InteractionEngine} from './interactions';
import {cultureRegistry} from '../data/worldLore';
import {CULTURE_RULES as R,culturalPractices,culturalPracticeRegistry,culturalContentRegistry,cultureDetailRegistry} from '../data/culture';
import {seededRandom} from './seededRandom';
type Proposal=Extract<ConversationProposal,{kind:'culture'}>;
export function generateCulturalProfile(character:Character,seed:string):CulturalProfile|undefined {
 if(!character.worldIdentity)return undefined;
 const random=seededRandom(seed+'/culture-life-v1'),heritage=[...character.worldIdentity.cultureIds],preferences:Record<string,number>={};
 for(const p of culturalPractices)preferences[p.id]=Math.round(random()*140-70)+(p.cultureIds.some(id=>heritage.includes(id))?10:0);
 for(const c of culturalContentRegistry.values())preferences[c.id]=Math.round(random()*160-80)||0;
 return {version:R.version,heritageCultureIds:heritage,currentCultureIds:[...heritage],familiarityByCulture:Object.fromEntries(heritage.map(id=>[id,70])),preferences,lifestyleTags:culturalPractices.filter(p=>preferences[p.id]>25).map(p=>p.activityId).filter((id,i,a)=>a.indexOf(id)===i).slice(0,4),lastPracticeAt:{},experiences:{}};
}
export function culturalProfileIssues(p:CulturalProfile|undefined):string[]{
 if(p===undefined)return [];const errors:string[]=[];
 if(!p||p.version!==R.version)return ['문화 프로필 버전 오류'];
 for(const ids of [p.heritageCultureIds,p.currentCultureIds])if(!Array.isArray(ids)||new Set(ids).size!==ids.length||ids.some(id=>!cultureRegistry.has(id)))errors.push('문화 프로필 참조 오류');
 for(const [key,min,max,valid] of [['familiarityByCulture',0,100,(id:string)=>cultureRegistry.has(id)],['preferences',-100,100,(id:string)=>culturalPracticeRegistry.has(id)||culturalContentRegistry.has(id)],['experiences',0,Number.MAX_SAFE_INTEGER,(id:string)=>culturalPracticeRegistry.has(id)],['lastPracticeAt',0,Number.MAX_SAFE_INTEGER,(id:string)=>culturalPracticeRegistry.has(id)]] as const){const row=p[key];if(!row||typeof row!=='object'||Array.isArray(row)||Object.entries(row).some(([id,n])=>!valid(id)||!Number.isSafeInteger(n)||n<min||n>max))errors.push('문화 프로필 '+key+' 오류');}
 if(!Array.isArray(p.lifestyleTags)||p.lifestyleTags.length>12||p.lifestyleTags.some(t=>!culturalPractices.some(pr=>pr.activityId===t)))errors.push('생활양식 참조 오류');return errors;
}
export function cultureProposalIssues(c:Character,p:Proposal,now:number):string[]{
 const d=culturalPracticeRegistry.get(p.practiceId);if(!d)return ['알 수 없는 문화 관습'];const issues:string[]=[];
 if(!['share','gift','explain'].includes(p.mode))issues.push('문화 행동 방식 오류');
 if(!d.locationIds.includes(c.location!.currentLocationId))issues.push('문화 활동에 적합한 실제 장소가 필요합니다.');
 if(!c.culturalProfile)issues.push('문화 프로필이 미설정입니다.');
 if((c.culturalProfile?.lastPracticeAt[d.id]??-Infinity)+R.practiceCooldown>now)issues.push('같은 문화 관습의 하루 재시도 대기');
 if(p.mode==='gift'&&(!p.contentId||culturalContentRegistry.get(p.contentId)?.kind!=='gift'))issues.push('유효한 상징 선물 콘텐츠를 선택하세요.');
 if(p.contentId&&!culturalContentRegistry.has(p.contentId))issues.push('문화 콘텐츠 참조 오류');
 if(p.mode!=='explain'&&!d.cultureIds.some(id=>(c.culturalProfile?.familiarityByCulture[id]??0)>=20))issues.push('관습을 먼저 배우거나 설명을 요청해야 합니다.');
 return issues;
}
export function cultureExchangeIssues(a:Character,b:Character,p:Proposal,now:number):string[]{const issues=cultureProposalIssues(a,p,now),d=culturalPracticeRegistry.get(p.practiceId);if(!b.culturalProfile)issues.push('상대의 문화 프로필 미설정');if((b.culturalProfile?.lastPracticeAt[p.practiceId]??-Infinity)+R.practiceCooldown>now)issues.push('상대가 같은 관습을 경험한 뒤 하루 대기');if(d&&p.mode==='explain'&&!d.cultureIds.some(id=>Math.max(a.culturalProfile?.familiarityByCulture[id]??0,b.culturalProfile?.familiarityByCulture[id]??0)>=20))issues.push('양쪽 모두 설명할 실제 문화 경험이 없습니다.');return issues;}
export function cultureOptions(c:Character,now:number):Proposal[]{
 if(c.location?.movement||!c.culturalProfile)return [];
 return culturalPractices.filter(p=>p.privacy==='public'&&(c.culturalProfile!.preferences[p.id]??0)>-35).flatMap(p=>{const share:Proposal={kind:'culture',intent:'small_talk',practiceId:p.id,mode:'share'},gifts=[...culturalContentRegistry.values()].filter(g=>g.kind==='gift'&&g.cultureIds.some(id=>p.cultureIds.includes(id))&&(c.culturalProfile!.preferences[g.id]??0)>25).sort((a,b)=>(c.culturalProfile!.preferences[b.id]??0)-(c.culturalProfile!.preferences[a.id]??0)||a.id.localeCompare(b.id));return [share,...gifts[0]?[{...share,mode:'gift' as const,contentId:gifts[0].id}]:[]];}).filter(p=>!cultureProposalIssues(c,p,now).length).sort((a,b)=>(c.culturalProfile!.preferences[b.practiceId]??0)+(b.mode==='gift'?5:0)-(c.culturalProfile!.preferences[a.practiceId]??0)-(a.mode==='gift'?5:0)||a.practiceId.localeCompare(b.practiceId)).slice(0,3);
}
export function cultureReaction(engine:InteractionEngine,aId:string,bId:string,p:Proposal):'warm'|'neutral'|'uneasy'|'refused'{
 const b=engine.world.getCharacterReadSnapshot(bId),profile=b.culturalProfile,practice=culturalPracticeRegistry.get(p.practiceId)!,rel=engine.graph.getRelationship(bId,aId),preference=p.mode==='gift'?(profile?.preferences[p.contentId!]??0):(profile?.preferences[p.practiceId]??0),knowledge=Math.max(0,...practice.cultureIds.map(id=>profile?.familiarityByCulture[id]??0));
 // No penalty simply for a different race/culture. Personal tastes outweigh background familiarity.
 const value=50+preference*.6+Math.max(-15,Math.min(15,(rel?.trust??0)*.15+(rel?.affection??0)*.1))-engine.motivation.getCharacterNeeds(bId).values.fatigue*.12+knowledge*.04+(b.dispositionIds?.includes('disposition-tolerant')?8:0)+(p.mode==='explain'?8:0);
 if(preference<=-65)return 'refused';if(value>=65)return 'warm';if(value>=38)return 'neutral';return value>=23?'uneasy':'refused';
}
export function completeCulturalExchange(engine:InteractionEngine,r:ConversationRecord){
 if(r.proposal.kind!=='culture')return;const d=culturalPracticeRegistry.get(r.proposal.practiceId)!,now=engine.clock.getSnapshot();
 for(const id of [r.initiatorId,r.targetId]){const c=engine.world.getCharacter(id),p=c.culturalProfile;if(!p)continue;if((p.lastPracticeAt[d.id]??-1)>=now)continue;
  p.lastPracticeAt[d.id]=now;p.experiences[d.id]=Math.min(Number.MAX_SAFE_INTEGER,(p.experiences[d.id]??0)+1);
  if(r.reaction!=='refused')for(const cultureId of d.cultureIds){p.familiarityByCulture[cultureId]=Math.min(100,(p.familiarityByCulture[cultureId]??0)+R.knowledgeGain);if(p.familiarityByCulture[cultureId]>=30&&!p.currentCultureIds.includes(cultureId))p.currentCultureIds.push(cultureId);}
  const change=r.reaction==='warm'?R.preferenceGain:r.reaction==='uneasy'?-R.preferenceGain:0;p.preferences[d.id]=Math.max(-100,Math.min(100,(p.preferences[d.id]??0)+change));
  if(p.experiences[d.id]>=3&&p.preferences[d.id]>=20&&!p.lifestyleTags.includes(d.activityId))p.lifestyleTags=[...p.lifestyleTags,d.activityId].slice(-12);
  if(p.preferences[d.id]<=-20)p.lifestyleTags=p.lifestyleTags.filter(t=>t!==d.activityId);
  engine.world.updateCharacter(id,()=>c);
 }
 engine.effects.recordDomainEvent({id:r.id+'/culture',type:'SocialCommitmentChanged',sourceId:r.id,actorCharacterId:r.initiatorId,targetCharacterId:r.targetId,locationId:r.locationId,occurredAt:now,visibility:d.privacy==='personal'?'private':'public',details:{definitionId:d.id,conversationTopic:d.topic,outcomeType:'culture_'+r.reaction,reason:d.name+' · 실제 공동 활동 완료 · 물품/원격 배달 생성 없음'}});
}
export function culturalActivityBias(c:Character,activityId:string):number{const p=c.culturalProfile;if(!p)return 0;const matches=culturalPractices.filter(d=>d.activityId===activityId);if(!matches.length)return 0;return Math.max(-R.maxAdjustment,Math.min(R.maxAdjustment,Math.round(matches.reduce((v,d)=>Math.max(v,p.preferences[d.id]??0),-100)/8)));}
export function describeCulture(c:Character){const p=c.culturalProfile;return p?{heritage:p.heritageCultureIds.map(id=>cultureDetailRegistry.get(id)?.name??id),current:p.currentCultureIds.map(id=>cultureDetailRegistry.get(id)?.name??id),preferred:culturalPractices.filter(d=>(p.preferences[d.id]??0)>25),disliked:culturalPractices.filter(d=>(p.preferences[d.id]??0)<-25)}:null;}
