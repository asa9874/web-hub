import type {NpcAiEngine} from '../systems/npcAi';
export type GroupKind='club'|'student_council'|'informal_group';
export interface GroupDefinition {id:string;name:string;purpose:string;kind:GroupKind;organizationId?:string;activityId:string;interactionId:string;proficiencyIds:string[];interests:string[];locationId:string;weekday:number;start:number;end:number;capacity:number;selection:'open'|'skill'|'recommendation'|'mixed';minimumRank:number}
export interface GroupMembership {characterId:string;joinedAt:number;leftAt?:number;reason?:string;contribution:number}
export interface GroupOfficer {characterId:string;role:'president'|'vice'|'operations'|'events'|'voice';from:number;until:number;endedAt?:number}
export interface GroupGoal {id:string;name:string;target:number;progress:number;status:'active'|'completed';horizon:'short'|'medium'|'long'}
export interface AcademyGroup {definition:GroupDefinition;status:'forming'|'active'|'suspended'|'dissolved';foundedAt:number;dissolvedAt?:number;members:GroupMembership[];officers:GroupOfficer[];advisorId?:string;goals:GroupGoal[];reputation:number;supplies:boolean;schoolSupport:boolean;nextReview:number;lastMeetingDay?:number;registration:'approved'|'unrequested'|'pending'|'rejected';registrationReason?:string}
export interface GroupApplication {id:string;groupId:string;characterId:string;at:number;status:'pending'|'accepted'|'rejected'|'withdrawn';score:number;reason?:string}
export interface GroupMeeting {id:string;groupIds:string[];locationId:string;activityId:string;interactionId:string;start:number;end:number;status:'planned'|'active'|'completed'|'cancelled';invited:string[];minutes:Record<string,number>;attendance:string[];interactions:string[];reason?:string}
export interface GroupElection {id:string;groupId:string;phase:'registration'|'campaign'|'voting'|'completed'|'cancelled';announcedAt:number;registrationEnds:number;votingStarts:number;votingEnds:number;termEnds:number;candidates:{characterId:string;pledge:string;publicMerit:number}[];electorate:string[];votes:Record<string,string>;winnerId?:string}
export interface GroupProposal {id:string;groupId:string;authorId:string;kind:'goal'|'policy'|'cooperation'|'competition'|'petition';title:string;status:'open'|'approved'|'rejected'|'submitted';votes:Record<string,boolean>;otherGroupId?:string}
export interface GroupLog {id:string;at:number;groupId:string;kind:string;message:string;characterIds:string[];locationId?:string}
export interface LeadershipOffer {groupId:string;characterId:string;electionId:string;at:number;status:'pending'|'accepted'|'declined'}
export interface GroupSave {offers?:LeadershipOffer[];version:'academy-groups-v1';absoluteMinute:number;seed:string;serial:number;nextDaily:number;groups:AcademyGroup[];applications:GroupApplication[];meetings:GroupMeeting[];elections:GroupElection[];proposals:GroupProposal[];logs:GroupLog[];links:{from:string;to:string;kind:'cooperation'|'competition';at:number}[];lastFormationAt:number}
export interface AcademyGroupEngine {
 ai:NpcAiEngine;connect:()=>()=>void;disconnect:()=>void;subscribe:(fn:()=>void)=>()=>void;getSnapshot:()=>number;save:()=>GroupSave;
 getGroups:()=>AcademyGroup[];getGroup:(id:string)=>AcademyGroup;getMemberships:(id:string)=>AcademyGroup[];getMeetings:()=>GroupMeeting[];getLogs:()=>GroupLog[];getApplications:()=>GroupApplication[];getElections:(debug?:boolean)=>GroupElection[];getProposals:()=>GroupProposal[];getLinks:()=>GroupSave['links'];
 eligibility:(id:string,groupId:string)=>string[];interest:(id:string,groupId:string)=>number;apply:(id:string,groupId:string)=>GroupApplication;withdraw:(id:string,groupId:string,reason?:string)=>void;selectMembers:(groupId:string)=>void;
 appoint:(groupId:string,id:string,role:GroupOfficer['role'])=>void;resign:(groupId:string,id:string)=>void;assignAdvisor:(groupId:string,id:string)=>void;dissolve:(groupId:string,actorId:string)=>void;
 planMeeting:(groupIds:string[],start:number,end:number,locationId?:string)=>GroupMeeting;attend:(id:string,meetingId:string)=>void;
 form:(authorId:string,name:string,purpose:string,memberIds:string[],referenceId:string)=>AcademyGroup;requestRegistration:(groupId:string,authorId:string)=>void;reviewRegistration:(groupId:string,reviewerId:string)=>void;
 announceElection:(groupId:string)=>GroupElection;registerCandidate:(id:string,electionId:string,pledge:string)=>void;vote:(id:string,electionId:string,candidateId:string)=>void;
 getLeadershipOffers:()=>LeadershipOffer[];acceptLeadership:(groupId:string,id:string,accept:boolean)=>void;
 propose:(groupId:string,authorId:string,kind:GroupProposal['kind'],title:string,otherGroupId?:string)=>GroupProposal;opine:(id:string,proposalId:string,support:boolean)=>void;
 diagnose:()=>string[];
}
