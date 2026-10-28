import type {CombatStart,CombatChoice} from './combat';
import type {ConversationProposal} from './conversation';
import type {AiSandboxSave} from '../systems/aiSandbox';
import type {NeedId} from './motivation';
import type {StatusInstance} from './status';
import type {RelationshipMetric} from './relationship';
import type {SimulationTier} from './simulation';
import type {ItemCommand} from './item';
export type WorldCommand = ItemCommand
 | {type:'rift_initialize'}
 | {type:'rift_chronology'}
 | {type:'rift_policy';siteId:string;policy:import('./riftCrisis').RiftPolicy}
 | {type:'official_events_initialize'}
 | {type:'combat_initialize'}
 | {type:'combat_start';request:CombatStart}
 | {type:'combat_action';battleId:string;characterId:string;choice:CombatChoice}
 | {type:'combat_interrupt';battleId:string;reason:string}
 | {type:'group_initialize'}
 | {type:'group_control';action:'select'|'election'|'meeting'|'advisor'|'review'|'dissolve'|'join'|'leave'|'appoint';groupId:string;characterId:string}
 | {type:'life_activity';characterId:string;activityId:string;minutes:number;locationId?:string}
 | {type:'residence_initialize'}
 | {type:'residence_end';characterId:string}
 | {type:'residence_assign';characterId:string;roomId:string}
 | {type:'residence_external';characterId:string;locationId:string}
 | {type:'residence_preference';characterId:string;key:'quietPreference'|'tidiness';value:number}
 | {type:'residence_visit';characterId:string;roomId:string;allow:boolean}

 | {type:'play'|'pause'}
 | {type:'time_request';minutes:number}
 | {type:'spawn'; count:number; seed:string}
 | {type:'move'|'force_place'; characterId:string; locationId:string}
 | {type:'ai_pause'|'ai_resume'|'ai_evaluate'|'activity_interrupt'; characterId:string}
 | {type:'action_select'; characterId:string; candidateId:string}
 | {type:'culture_preference';characterId:string;preferenceId:string;value:number}
 | {type:'need'; characterId:string; needId:NeedId; value:number}
 | {type:'goal_add'; characterId:string; definitionId:string; targetCharacterId?:string; targetLocationId?:string; targetOrganizationId?:string}
 | {type:'goal_priority'|'goal_progress'; characterId:string; goalId:string; value:number}
 | {type:'relationship'; characterId:string; targetId:string; changes:Partial<Record<RelationshipMetric,number>> & {relationshipTypeIds?:string[]}}
 | {type:'status_apply'; characterId:string; status:StatusInstance}
 | {type:'status_remove'; characterId:string; definitionId:string}
 | {type:'conversation';characterId:string;targetId:string;proposal:ConversationProposal;direct?:boolean}
 | {type:'conversation_choice';characterId:string;conversationId:string;choice:ConversationProposal|'accept'|'decline'|'later'|'end'}
 | {type:'interaction'; characterId:string; targetId:string; definitionId:string}
 | {type:'event_request'; definitionId:string; characterId?:string; targetId?:string; bypassTrigger:boolean}
 | {type:'event_cancel'|'event_fail'; eventId:string; reason:string}
 | {type:'lod'; characterId:string; tier?:SimulationTier}
 | {type:'region'; regionId:string; active:boolean}
 | {type:'lod_enabled'; enabled:boolean}
 | {type:'importance'; characterId:string}
 | {type:'population'; locationId:string; total:number}
 | {type:'resident'; regionId:string; slot:string};
export interface WorldCommandRecord {id:string;at:number;command:WorldCommand;accepted:boolean;result:string}
export interface WorldSimulationSave {version:'world-simulation-v1';name:string;seed:string;nextCommandId:number;commands:WorldCommandRecord[];world:AiSandboxSave}
export interface WorldLog {id:string;at:number;category:string;message:string;characterIds:string[];locationId?:string;eventId?:string;important:boolean}
export interface WorldIssue {severity:'error'|'warning'|'info';code:string;message:string;entityId?:string}
