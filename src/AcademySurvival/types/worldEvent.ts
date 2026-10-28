import type {PersonalSceneDefinition,PersonalSceneDecision} from './personalScene';
import type {ConversationProposal} from './conversation';
import type {DomainEventType,ActionEffect,AppliedOutcome} from './actionEffects';
import type {StatId} from './knowledge';
import type {NeedId} from './motivation';
import type {RelationshipMetric} from './relationship';
export const EVENT_CATEGORIES={daily:'일상',relationship:'인간관계',academy:'학원·학사',combat:'전투·경쟁',health:'건강·사고',organization:'조직·정치',economy:'경제·거래',exploration:'탐색·발견',rumor:'소문·비밀',environment:'환경·재난',personal_story:'개인 서사',world:'세계·대형 사건'} as const;
export type EventCategory=keyof typeof EVENT_CATEGORIES;
export type WorldEventStatus='scheduled'|'pending'|'active'|'completed'|'failed'|'cancelled'|'expired';
export type EventRelationType='causes'|'enables'|'blocks'|'continues'|'contributes';
export type EventCondition=
 |{type:'all'|'any';conditions:EventCondition[]}|{type:'not';condition:EventCondition}
 |{type:'time';min?:number;max?:number;minuteFrom?:number;minuteUntil?:number}
 |{type:'calendar';months?:number[];days?:number[];weekdays?:number[];seasons?:string[];academicKinds?:string[]}
 |{type:'source_signal';domainType:DomainEventType;definitionIds?:string[];outcomes?:string[];conversationIntents?:string[]}
 |{type:'academic_exam_soon';withinMinutes:number}
 |{type:'character_kind';kind:'player'|'fixed_npc'|'random_npc'}
 |{type:'academic_competitor';maxDifference:number}
 |{type:'combat_result';result:'victory'|'defeat'|'draw'}
 |{type:'character';id:string}|{type:'target';condition:EventCondition}|{type:'external';key:string;description:string}
 |{type:'culture_practice';id:string}
 |{type:'location';id:string}|{type:'activity';id:string}|{type:'stat';id:StatId;min:number;max?:number}
 |{type:'proficiency';id:string;min:number}|{type:'status'|'disposition'|'organization';id:string}
 |{type:'school_year';min:number;max:number}
 |{type:'need';id:NeedId;min:number;max?:number}|{type:'goal';id?:string;status:string}
 |{type:'relationship';metric:RelationshipMetric;min:number;max?:number}
 |{type:'belief';topicKey:string;value?:string|number|boolean;minConfidence?:number}
 |{type:'fact';eventType:DomainEventType;outcome?:string}
 |{type:'shared_memory';eventTypes:DomainEventType[];definitionIds?:string[];outcomes?:string[];combatResult?:'victory'|'defeat'|'draw';minCount:number;minAgeMinutes?:number}
 |{type:'relationship_type';id:string;mutual?:boolean}
 |{type:'separation';minMinutes:number}
 |{type:'scene_choice';definitionId:string;choiceIds:string[]}
 |{type:'event';definitionId:string;status:WorldEventStatus;outcomeIds?:string[];minAgeMinutes?:number;maxAgeMinutes?:number};
export interface EventTriggerRule {domainActivityIds?:string[];domainConversationIntents?:string[];subjectRole?:'actor'|'target';id:string;type:'scheduled'|'conditional'|'random'|'emergent'|'narrative';everyMinutes?:number;minuteOfDay?:number;domainTypes?:DomainEventType[];domainDefinitionIds?:string[];domainOutcomes?:string[];probability:number;conditions:EventCondition[]}
export interface EventStageDefinition {conversationProposal?:ConversationProposal;id:string;name:string;durationMinutes:number;timeoutMinutes:number;entryConditions:EventCondition[];completionConditions:EventCondition[];failureConditions:EventCondition[];effects:ActionEffect[];nextStageIds:string[];interactionId?:string}
export interface EventOutcomeRule {id:string;name:string;conditions:EventCondition[];weight:number;effects:ActionEffect[]}
export interface EventFollowUpRule {statuses?:WorldEventStatus[];id:string;definitionId:string;relation:EventRelationType;outcomeIds?:string[];conditions:EventCondition[];probability:number;join?:{mode:'all'|'any';definitionIds:string[]};cancelActive?:boolean;consequence?:{kind:'unlock'|'modify'|'delay'|'redirect';delayMinutes:number;windowMinutes:number;retryMinutes:number;activationConditions?:EventCondition[];redirectDefinitionId?:string;outcomeWeights?:Record<string,number>}}
/** A possibility, not an event that already happened. Stored on its real cause. */
export interface EventConsequence {blockedByEventId?:string;ruleId:string;definitionId:string;causeEventIds:string[];earliestAt:number;expiresAt:number;nextEvaluationAt?:number;status:'waiting'|'occurred'|'blocked'|'expired';reason:string;resultEventId?:string}
export interface WorldEventDefinition {opportunityGroup?:{id:string;cooldownMinutes:number};personalScene?:PersonalSceneDefinition;id:string;name:string;description:string;category:EventCategory;tags:string[];triggerRules:EventTriggerRule[];scale:'personal'|'relationship'|'location'|'organization'|'region'|'nation'|'world';importance:number;participantRules:{actorId?:string;targetId?:string;count:0|1|2;locationId?:string;conditions:EventCondition[]};stages:EventStageDefinition[];outcomeRules:EventOutcomeRule[];followUpRules:EventFollowUpRule[];cooldownMinutes:number;participantCooldownMinutes:number;maxOccurrences:number;visibility:'public'|'restricted'|'private';intent?:{activityId:string;score:number;target?:'current'|'home'|'schedule';targetLocationId?:string;interactionId?:string};observerIntent?:{activityId:string;interactionId:string;score:number;maxAgeMinutes:number};limitations?:string[]}
export interface EventBranchAudit {at:number;roll?:number;selectedOutcomeId?:string;candidates:{outcomeId:string;baseWeight:number;multiplier:number;effectiveWeight:number;conditionResults:boolean[]}[]}
export interface WorldEventInstance {branchAudit?:EventBranchAudit;sceneDecision?:PersonalSceneDecision;consequences?:EventConsequence[];outcomeWeights?:Record<string,number>;triggerEvidence?:{domainId?:string;domainType?:DomainEventType;domainOutcome?:string;combatResult?:'victory'|'defeat'|'draw'};id:string;sequence:number;definitionId:string;status:WorldEventStatus;scheduledAt:number;occurredAt?:number;endedAt?:number;nextEvaluationAt?:number;participantCharacterIds:string[];locationId?:string;currentStageId?:string;stageStartedAt?:number;stageTransitions:number;outcomeId?:string;causeEventIds:string[];resultEventIds:string[];triggerContextId:string;chainDepth:number;interactionId?:string;relatedInteractionIds?:string[];effectIds:string[];appliedEffects?:{id:string;changes:AppliedOutcome['changes']}[];evidence:string[];pendingConditions?:EventCondition[];roll?:number;reason?:string;visibility:WorldEventDefinition['visibility'];history:{at:number;status:WorldEventStatus;stageId?:string;reason:string}[]}
export interface WorldEventIntent {eventId:string;activityId:string;score:number;targetLocationId:string;targetCharacterId?:string;interactionId?:string;reason:string}
export interface EventRelation {id:string;sourceEventId:string;targetEventId:string;type:EventRelationType;createdAt:number;reason:string}
export interface EventJob {id:string;at:number;order:number;kind:'trigger'|'stage'|'consequence';ruleId?:string;definitionId:string;triggerId?:string;instanceId?:string;actorId?:string;targetId?:string;domainId?:string;domainOutcome?:string;domainType?:DomainEventType;combatResult?:'victory'|'defeat'|'draw';causeEventId?:string}
export interface WorldEventSave {version:'world-events-v1';absoluteMinute:number;seed:string;serial:number;jobSerial:number;instances:WorldEventInstance[];relations:EventRelation[];jobs:EventJob[];processed:{key:string;at:number}[];cooldowns:Record<string,number>;occurrences:Record<string,number>;counters:{created:number;completed:number;failed:number;cancelled:number;expired:number;blocked:number;limited:number;archived:number};logs:{at:number;message:string}[]}
