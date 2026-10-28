import type {WorldSimulationSave} from './worldSimulation';
export interface ValidationIssue {
 code:string;severity:'critical'|'error'|'warning'|'info';message:string;worldTime:number;
 characterIds?:string[];locationId?:string;activityIds?:string[];eventId?:string;
 path?:string;expected?:unknown;actual?:unknown;suspectedSystem?:string;
}
export interface ScenarioResult {
 id:string;seed:string;status:'passed'|'failed'|'not_available';npcCount:number;durationMinutes:number;
 issues:ValidationIssue[];metrics?:Record<string,number>;fingerprint?:string;
 reproduction:{scenario:string;seed:string;count:number;minutes:number};
 // Developer-only artifact, never a production save or publicly published fixture.
 failureSnapshot?:WorldSimulationSave;
}
export interface ValidationReport {
 version:'academy-validation-v1';profile:string;status:string;elapsedMs:number;
 summary:{passed:number;failed:number;skipped:number;reused:number};
 results:Array<{id:string;status:string;elapsedMs?:number;log?:string;reproduce?:string;scenario?:ScenarioResult;error?:string;outputBytes?:number}>;
}
