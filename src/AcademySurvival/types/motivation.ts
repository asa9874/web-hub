export const NEED_IDS=['hunger','fatigue','sleepiness','social','recreation','growth','safety','recognition','autonomy','curiosity'] as const;
export type NeedId=typeof NEED_IDS[number];
export interface NeedDefinition {id:NeedId;name:string;description:string;category:'physical'|'social'|'psychological';defaultChangePerHour:number;thresholds:{low:number;moderate:number;high:number;critical:number};urgencyWeight:number;activities:string[];tags:string[]}
export interface CharacterNeedState {characterId:string;values:Record<NeedId,number>;sensitivities:Record<NeedId,number>;units:Record<NeedId,number>;lastUpdatedAt:number;visibility:'private'|'public'}
export type GoalHorizon='short'|'medium'|'long';
export type RelationshipGoalMetric='trust'|'affection'|'intimacy'|'respect'|'fear';
export type GoalCondition=
 |{type:'all'|'any';conditions:GoalCondition[]}|{type:'not';condition:GoalCondition}
 |{type:'stat';id:string;min:number}|{type:'proficiency';id:string;min:number}
 |{type:'organization'|'position'|'title'|'status';id:string}
 |{type:'relationship';metric:RelationshipGoalMetric;min:number;target:'selected'|'any';also?:{metric:RelationshipGoalMetric;min:number}[]}
 |{type:'home'}|{type:'visit';id:string}|{type:'activity';id:string;count:number}
 |{type:'activityMinutes';id:string;minutes:number}|{type:'statusDuration';id:string;minutes:number}|{type:'need';id:NeedId;max:number}
 |{type:'external';key:string;description:string};
export interface GoalDefinition {manualOnly?:boolean;id:string;name:string;description:string;category:string;horizon:GoalHorizon;basePriority:number;roles:string[];eligibilityConditions:GoalCondition[];completionConditions:GoalCondition[];failureConditions:GoalCondition[];suggestedActivities:string[];tags:string[];preferredDispositions:string[];relatedNeeds:NeedId[];visibility:'public'|'private'|'secret';deadlineMinutes?:number;deadlinePolicy?:'duration'|'day-end';targetKind?:'character';logicalExclusionGroup?:string}
export interface CharacterGoalState {id:string;characterId:string;goalDefinitionId:string;targetCharacterId?:string;targetOrganizationId?:string;targetLocationId?:string;priority:number;progress:number;status:'active'|'completed'|'failed'|'abandoned'|'paused';createdAt:number;updatedAt:number;deadlineAt?:number;visibility:'public'|'private'|'secret';baseline?:{activityMinutes:Record<string,number>;activityCounts:Record<string,number>;statusMinutes:Record<string,number>};reason?:string}
export interface MotivationEvidence {activityMinutes:Record<string,number>;activityCounts:Record<string,number>;statusMinutes:Record<string,number>;statusSince:Record<string,number>;visitedLocationIds:string[];completedOccurrences:string[];externalFacts:Record<string,boolean>}
export interface CharacterMotivationState {characterId:string;needs:CharacterNeedState;goals:CharacterGoalState[];evidence:MotivationEvidence;diagnostics:string[]}
export interface MotivationIntent {characterId:string;activityId:string;source:'need'|'goal';sourceId:string;targetLocationId?:string;targetCharacterId?:string;motivationScore:number;reason:string;feasibility:{scope:'route-only';checked:boolean;possible?:boolean;reasons:string[]}}
export interface GoalEvaluation {result:'met'|'unmet'|'unsupported';progress:number;reasons:string[]}
export interface MotivationSave {version:'motivation-v1';absoluteMinute:number;states:CharacterMotivationState[]}
