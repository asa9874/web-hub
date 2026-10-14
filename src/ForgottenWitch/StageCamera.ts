import type {Actor} from './model';
import {TUNING} from './config';
// Camera presentation never feeds back into actor physics.
export class StageCamera {
  lead=0;
  reset(){this.lead=0;}
  follow(actor:Actor,x:number,y:number,dt:number){
    this.lead+=(Math.max(-40,Math.min(40,actor.vx*.10))-this.lead)*(1-Math.exp(-TUNING.cameraLeadFollow*dt));
    const targetX=Math.max(0,Math.min(TUNING.worldWidth-TUNING.width,actor.x-440+this.lead));
    const targetY=Math.max(-28,Math.min(0,actor.y-400));
    const ease=1-Math.exp(-TUNING.cameraFollow*dt);
    return {x:x+(targetX-x)*ease,y:y+(targetY-y)*(1-Math.exp(-3.5*dt))};
  }
}
