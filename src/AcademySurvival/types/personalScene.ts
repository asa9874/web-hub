import type {ConversationProposal,MeetingKind} from './conversation';
import type {EventCondition} from './worldEvent';

export interface PersonalSceneChoice {
 id:string;label:string;response:string;mode:'engage'|'reflect'|'withdraw';
 stance:'support'|'independent'|'challenge';interactionId?:string;intentNote:string;
 conditions?:EventCondition[];conversation?:ConversationProposal;meeting?:{kind:MeetingKind;locationId:string;delayMinutes:number};
}
export interface PersonalSceneDefinition {
 id:string;ownerId:string;title:string;narration:string;kind?:'personal'|'daily'|'bond'|'milestone'|'epilogue';
 variants?:{conditions:EventCondition[];opening:{speaker:'owner'|'partner';text:string}[];narration?:string}[];
 opening:{speaker:'owner'|'partner';text:string}[];
 choices:PersonalSceneChoice[];
 autonomous:{cooperative:string;independent:string;strained:string};
}
/** The decision is an intention. Stage/interaction completion remains authoritative. */
export interface PersonalSceneDecision {
 awaitingPlayerId?:string;choiceId?:string;selectedBy?:string;selectedAt?:number;
 acknowledgedBy?:string;autonomous?:boolean;
}
