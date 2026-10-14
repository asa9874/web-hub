import type {ActingPose} from './actingData';
import type {Emotion} from './dialogueModel';
export type StageActor='player'|'npc';
export type FocusTarget=StageActor|'pair'|'flower'|'bridge';
export interface ActorCue {who:StageActor;pose:ActingPose|'idle'|'strike';dx?:number;dy?:number;at?:number;seconds?:number;facing?:1|-1}
export interface StageCue {
 id:string;seconds:number;hideDialogue?:boolean;
 camera?:{target:FocusTarget;zoom:number;seconds?:number;follow?:boolean;shake?:number};
 actors?:ActorCue[];
 effects?:{at:number;target:FocusTarget;kind:'tap'|'surprise'|'magic'}[];
 prop?:{target:'flower'|'bridge';at:number;dy:number;angle:number;seconds:number};
}
export interface StagePoint {x:number;y:number}
export const progress=(elapsed:number,at=0,seconds=.6)=>Math.max(0,Math.min(1,(elapsed-at)/Math.max(.01,seconds)));
export const smooth=(v:number)=>v*v*(3-2*v);
export function sampleActor(cue:ActorCue,start:StagePoint,elapsed:number){const q=smooth(progress(elapsed,cue.at,cue.seconds));return {x:start.x+(cue.dx??0)*q,y:start.y+(cue.dy??0)*Math.sin(Math.PI*q),pose:elapsed>=(cue.at??0)?cue.pose:'idle' as const,facing:cue.facing??((cue.dx??0)<0?-1:1)};}
export function focusPoint(target:FocusTarget,points:Record<Exclude<FocusTarget,'pair'>,StagePoint>):StagePoint{if(target==='pair')return {x:(points.player.x+points.npc.x)/2,y:500};if(target==='player'||target==='npc')return {x:points[target].x,y:490};return points[target];}
export function defaultStageCue(speaker:StageActor,emotion:Emotion|boolean='neutral'):StageCue{const angry=emotion===true||emotion==='angry',surprised=emotion==='worry'||emotion==='flustered';return {id:'line-'+speaker,seconds:.8,camera:{target:angry?speaker:'pair',zoom:angry?1.55:1.35,seconds:.8},actors:[{who:speaker,pose:angry?'point':surprised?'recoil':'talk'}]};}
