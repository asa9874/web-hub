export type StartingDifficulty='gentle'|'ordinary'|'hard'|'bottom';
export type StartingDirection='sword'|'magic'|'academic'|'balanced'|'random';
export interface StartingProfile {version:'academy-start-v1';difficulty:StartingDifficulty;direction:StartingDirection;roll:number}
export type AcademyClass='S'|'A'|'B'|'C'|'D'|'E'|'F';
export interface AdmissionResult {
 version:'academy-admission-v1';characterId:string;passed:boolean;classId?:AcademyClass;
 score:number;foundation:number;practical:number;written:number;potential:number;
 strongestField:string;explanation:string;
}
export interface AdmissionSave {
 version:'academy-admission-v1';profile:StartingProfile;player:AdmissionResult;
 placements:{characterId:string;classId:AcademyClass}[];
}
