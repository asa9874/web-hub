import type {ScheduleIntent} from './schedule';
export type AiStatus='idle'|'evaluating'|'traveling'|'performing'|'interrupted'|'replanning'|'waiting';
export type AiSource='schedule'|'need'|'goal'|'local'|'social'|'emergency';
export interface AiCandidate {id:string;characterId:string;activityId:string;targetLocationId?:string;targetCharacterId?:string;sources:AiSource[];baseScore:number;priority:number;estimatedTravelMinutes:number;estimatedDurationMinutes:number;interruptible:boolean;reasonCodes:string[];components:Record<string,number>;score:number;feasible:boolean;denialReasons:string[];mandatory:boolean;scheduleIntent?:ScheduleIntent}
export interface AiFailure {at:number;candidateId:string;reason:string;retryAt:number}
export interface AiDecision {at:number;selectedId?:string;activityId?:string;reason:string;top:{id:string;score:number;feasible:boolean}[]}
export interface AiState {characterId:string;status:AiStatus;currentActionId?:string;currentActivityId?:string;currentTargetLocationId?:string;currentTargetCharacterId?:string;actionStartedAt?:number;actionEndsAt?:number;nextDecisionAt:number;decisionIndex:number;lastDecisionAt?:number;sameMinuteDecisions?:number;habits:string[];recentFailures:AiFailure[];recentDecisions:AiDecision[];deviations:{at:number;planned:string;selected:string;reason:string;returnPossible:boolean}[]}
export interface JointActivity {id:string;requesterId:string;targetId:string;activityId:string;locationId:string;status:'requested'|'accepted'|'rejected'|'active'|'completed'|'interrupted';createdAt:number;startedAt?:number;endAt?:number;reason?:string}
export interface AiSave {version:'npc-ai-v1';absoluteMinute:number;seed:string;states:AiState[];joints:JointActivity[]}
