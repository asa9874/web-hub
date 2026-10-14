import type {Actor} from './model';
import {TUNING} from './config';
export type MotionEffect='step'|'jump'|'land'|'brake'|'roll'|'trail'|'cast'|'hit';
export interface MotionBeat {kind:MotionEffect;x:number;y:number;direction:number;strength:number}
// Presentation follows actual travel, not wall time: paused actors and walls cannot run in place.
export class PlayerMotion {
  stride=0;
  clock=0;
  lean=0;
  private brake=0;
  private trail=0;
  private rolling=false;
  recovery=0;
  reset(){this.stride=0;this.clock=0;this.lean=0;this.brake=0;this.trail=0;this.rolling=false;this.recovery=0;}
  update(actor:Actor,before:Actor,dt:number,direction:number,rolling:boolean):MotionBeat[]{
    const beats:MotionBeat[]=[];
    const emit=(kind:MotionEffect,strength=1)=>beats.push({kind,x:actor.x,y:actor.y,direction:actor.facing,strength});
    this.clock+=dt;this.recovery=Math.max(0,this.recovery-dt);if(this.rolling&&!rolling)this.recovery=.10;this.brake=Math.max(0,this.brake-dt);
    if(rolling){
      if(!this.rolling){emit('roll');this.trail=0;}
      this.trail+=dt;if(this.trail>=.055){emit('trail');this.trail=0;}
    }else{
      const travel=Math.abs(actor.x-before.x);
      if(actor.grounded&&travel<80&&travel>0){
        const step=Math.floor(this.stride/116);this.stride+=travel;
        if(step!==Math.floor(this.stride/116))emit('step');
      }
      if(actor.grounded&&this.brake===0&&((Math.abs(before.vx)>150&&direction*before.vx<0)||(Math.abs(before.vx)>80&&Math.abs(actor.vx)<=80&&direction===0))){emit('brake');this.brake=.18;}
    }
    if(before.grounded&&!actor.grounded&&actor.vy<0)emit('jump');
    if(!before.grounded&&actor.grounded)emit('land',Math.min(1.6,Math.max(.6,before.vy/650)));
    this.rolling=rolling;
    const target=actor.grounded?actor.vx/TUNING.speed*.055+(Math.abs(actor.vx)>20?Math.sin(this.stride/58*Math.PI)*.045:0):Math.max(-.15,Math.min(.18,actor.vy/4000));
    this.lean+=(target-this.lean)*(1-Math.exp(-18*dt));
    return beats;
  }
  shape(actor:Actor,moving:boolean){
    const landing=actor.landing*.14+this.recovery*.3;
    const airborne=!actor.grounded?Math.min(.045,Math.abs(actor.vy)/16000):0;
    return {bounce:moving?Math.abs(Math.sin(this.stride/58*Math.PI))*3.5:0,x:1+landing-airborne,y:1-landing+airborne};
  }
  snapshot(){return {stride:this.stride,clock:this.clock,lean:this.lean};}
}
