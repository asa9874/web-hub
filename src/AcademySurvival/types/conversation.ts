import type {DialoguePresentation,DialogueSave} from './dialogue';
import type {DialogueDirector} from '../systems/dialogueDirector';
import type {AppliedOutcome,ActionOutcome} from './actionEffects';
import type {InteractionInstance} from './interaction';
export type ConversationIntent='greet'|'check_in'|'small_talk'|'question'|'answer'|'praise'|'thank'|'encourage'|'comfort'|'advice'|'share_information'|'pass_rumor'|'boast'|'declare_rival'|'challenge'|'apologize'|'complain'|'rebut'|'request_help'|'offer_help'|'propose_commitment'|'accept_commitment'|'reject_commitment'|'reconcile'|'goodbye'|'confess'|'end_relationship'|'research_proposal';
export type MeetingKind='study'|'training'|'sparring'|'consultation'|'meal'|'meeting';
export type ConversationProposal=
 |{kind:'culture';intent:'small_talk'|'question'|'thank'|'apologize';practiceId:string;mode:'share'|'gift'|'explain';contentId?:string}
 |{kind:'general';intent:ConversationIntent}
 |{kind:'memory';intent:'praise'|'thank'|'apologize'|'comfort'|'boast';memoryId:string}
 |{kind:'academic';intent:'question'|'advice'|'complain'|'declare_rival';sectionId:string}
 |{kind:'information';intent:'share_information'|'pass_rumor';claimId:string}
 |{kind:'meeting';intent:'propose_commitment'|'challenge'|'research_proposal';meetingKind:MeetingKind;locationId:string;scheduledAt:number;duration:number}
 |{kind:'meeting_response';intent:'accept_commitment'|'reject_commitment';commitmentId:string};
export interface ConversationTurn {presentation?:DialoguePresentation;id:string;speakerId:string;intent:ConversationIntent;at:number;reaction:'warm'|'neutral'|'uneasy'|'refused';proposal?:ConversationProposal}
export interface ConversationRecord {sourceWorldEventId?:string;opening?:ConversationTurn;id:string;interactionId:string;initiatorId:string;targetId:string;locationId:string;topic:string;proposal:ConversationProposal;status:'proposed'|'active'|'awaiting_player'|'completed'|'rejected'|'interrupted';createdAt:number;endedAt?:number;awaitingPlayerId?:string;direct:boolean;durationOverride?:number;firstMeetingIds?:string[];consent?:boolean;reaction?:ConversationTurn['reaction'];turns:ConversationTurn[];outcomeId?:string;commitmentId?:string;reason?:string;appliedChanges?:AppliedOutcome['changes'];relationshipChanges?:ActionOutcome['effects'];informationResult?:InteractionInstance['informationResult']}
export interface SocialCommitment {id:string;sourceConversationId:string;proposerId:string;participantIds:string[];kind:MeetingKind;locationId:string;scheduledAt:number;duration:number;status:'scheduled'|'active'|'completed'|'cancelled'|'missed';interactionId?:string;reason?:string;settled:boolean}
export interface SocialDay {day:number;characterId:string;conversations:number;firstMeetings:number;information:number;byPartner:Record<string,number>;byIntent:Record<string,number>}
export interface ConversationSave {dialogue?:DialogueSave;version:'conversation-v1';absoluteMinute:number;seed:string;records:ConversationRecord[];commitments:SocialCommitment[];days:SocialDay[];serial:number;lastMaintenanceDay:number}
export interface ConversationController {
 dialogue?:DialogueDirector;
 onRequest:(instance:InteractionInstance,proposal?:ConversationProposal,direct?:boolean)=>void;
 awaiting:(instance:InteractionInstance)=>string|undefined;
 activity?:(instance:InteractionInstance)=>string|undefined;
 duration:(instance:InteractionInstance)=>number|undefined;
 resolve:(instance:InteractionInstance)=>ActionOutcome|undefined;
 transition:(instance:InteractionInstance)=>void;
 describe:(instance:InteractionInstance)=>{intent?:ConversationIntent;topic?:string;routine?:boolean};
 request:(source:string,target:string,proposal?:ConversationProposal,direct?:boolean)=>ConversationRecord;
 choose:(playerId:string,conversationId:string,choice:ConversationProposal|'accept'|'decline'|'later'|'end')=>void;
 options:(source:string,target:string)=>ConversationProposal[];
 getRecords:(viewerId?:string)=>ConversationRecord[];
 getCommitments:(viewerId?:string)=>SocialCommitment[];
 getSummary:(viewerId:string,from:number,to:number)=>SocialDay[];
 getPending:(playerId:string)=>ConversationRecord|undefined;
 save:()=>ConversationSave;load:(data:ConversationSave)=>void;connect:()=>()=>void;dispose:()=>void;
}
