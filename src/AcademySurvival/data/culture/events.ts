import type {WorldEventDefinition} from '../../types/worldEvent';
import {culturalPractices} from './index';
/** Campus adaptations; no unconfirmed historical festival date is made canonical. */
export const culturalWorldEvents:WorldEventDefinition[]=culturalPractices.map(p=>({
 id:p.eventId,name:p.name+' · 학내 교류',description:p.description,category:'academy',tags:['culture',p.id,p.topic],scale:'relationship',importance:p.privacy==='personal'?60:45,
 triggerRules:[{id:'campus-opportunity',type:'random',everyMinutes:720,probability:.08,conditions:[{type:'location',id:p.locationIds[0]},{type:'culture_practice',id:p.id},...p.id==='practice-firstleaf'?[{type:'calendar' as const,seasons:['spring']}]:p.id==='practice-harvest'?[{type:'calendar' as const,seasons:['autumn']}]:[]]}],
 participantRules:{count:2,locationId:p.locationIds[0],conditions:[]},
 stages:[{id:'exchange',name:'현장 초대·수락·공동 활동',durationMinutes:1,timeoutMinutes:120,entryConditions:[],completionConditions:[],failureConditions:[],effects:[],nextStageIds:[],interactionId:'friendly_chat',conversationProposal:{kind:'culture',intent:'small_talk',practiceId:p.id,mode:'share'}}],
 outcomeRules:[{id:'experienced',name:'실제 문화 교류 완료',conditions:[],weight:1,effects:[]}],followUpRules:[],cooldownMinutes:1440,participantCooldownMinutes:1440,maxOccurrences:200,visibility:p.privacy==='personal'?'private':'public',limitations:['공식 축제 날짜 미확정. 캠퍼스의 실제 현장 소규모 교류만 실행. 물품 재고·판매 수익·원격 배달·귀향 완료 없음. 효과는 공동 상호작용에서 한 번만 적용한다.'],
}));
