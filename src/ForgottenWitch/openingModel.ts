import {OPENING_TIMES} from './openingData';
import type {OpeningStage} from './openingData';
export interface OpeningState {stage:OpeningStage;elapsed:number;total:number;x:number;y:number;vx:number;vy:number;grounded:boolean;facing:number;left:boolean;right:boolean;jumped:boolean;crossed:boolean;note:string;noteTime:number;paused:boolean;complete:boolean}
export const createOpening=(stage:OpeningStage='library-intro'):OpeningState=>({stage,elapsed:0,total:0,x:stage==='tutorial'?640:580,y:570,vx:0,vy:0,grounded:true,facing:1,left:false,right:false,jumped:false,crossed:false,note:'',noteTime:0,paused:false,complete:false});
const NEXT:Partial<Record<OpeningStage,OpeningStage>>={'library-intro':'library','book-focus':'book-burst','book-burst':'whiteout',whiteout:'fall',fall:'landing',landing:'tutorial',door:'chapter'};
export function enterOpening(s:OpeningState,stage:OpeningStage){s.stage=stage;s.elapsed=0;s.vx=0;s.vy=0;s.grounded=true;s.note='';s.noteTime=0;if(stage==='library'){s.x=580;s.y=570;}if(stage==='tutorial'){s.x=640;s.y=570;s.left=false;s.right=false;s.jumped=false;s.crossed=false;}if(stage==='door'||stage==='chapter'){s.x=2320;s.y=570;}}
export function tickOpening(s:OpeningState,dt:number,direction:number,jump:boolean,jumpHeld:boolean,interact:boolean){
 if(s.paused||s.complete)return;s.elapsed+=dt;s.total+=dt;s.noteTime=Math.max(0,s.noteTime-dt);
 const duration=OPENING_TIMES[s.stage as keyof typeof OPENING_TIMES];
 if(duration!==undefined&&s.elapsed>=duration){if(s.stage==='chapter'){s.complete=true;return;}enterOpening(s,NEXT[s.stage]!);}
 if(s.stage!=='library'&&s.stage!=='tutorial')return;
 if(direction)s.facing=Math.sign(direction);
 const target=direction*330;s.vx+=(target-s.vx)*(1-Math.exp(-14*dt));
 const previous=s.x;s.x=Math.max(100,Math.min(s.stage==='library'?1760:2390,s.x+s.vx*dt));
 if(s.stage==='library'){s.y=570;if(interact&&Math.abs(s.x-1600)<125)enterOpening(s,'book-focus');return;}
 if(direction<0)s.left=true;if(direction>0)s.right=true;
 if(jump&&s.grounded){s.vy=-670;s.grounded=false;s.jumped=true;}
 if(!jumpHeld&&s.vy<-350)s.vy=-350;
 s.vy+=1900*dt;const oldY=s.y;s.y+=s.vy*dt;s.grounded=false;
 // A harmless solid paper step. No pit, enemy or life damage in this scene.
 if(s.y>520&&s.x>900&&s.x<1080){if(previous<=900)s.x=900;else if(previous>=1080)s.x=1080;}
 const floor=s.x>900&&s.x<1080?520:570;
 if(s.vy>=0&&oldY<=floor+2&&s.y>=floor){s.y=floor;s.vy=0;s.grounded=true;}
 if(s.x>1110&&s.jumped)s.crossed=true;
 if(interact&&s.x>2210){if(s.left&&s.right&&s.crossed)enterOpening(s,'door');else {s.note='조금만 더 걸어 보고, 종이 단차를 넘어가 보자.';s.noteTime=4;}}
}
export function skipOpening(s:OpeningState){if(s.stage==='library-intro'){enterOpening(s,'library');return;}if(s.stage==='door'||s.stage==='chapter'){s.complete=true;return;}if(s.stage!=='library'&&s.stage!=='tutorial')enterOpening(s,'tutorial');}
export const fallDepth=(t:number)=>Math.min(1,(Math.max(0,t)/30)**1.8);
