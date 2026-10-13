import { LIGHT_ORDER, STAGE, TUNING } from './config';
import type { SymbolId } from './config';
export type GameMode = 'intro' | 'explore' | 'bridge' | 'dialogue' | 'lights' | 'pause' | 'complete' | 'gameover';
export type BridgeState = 'IDLE' | 'ACTIVE' | 'DRAGGING' | 'SOLVED';
export type LightState = 'CLOSED' | 'OPEN' | 'CHECKING' | 'SOLVED';
export interface WorldState {
  bridge: BridgeState; lights: LightState; talked: boolean; visits: number; checkpoint: number;
}
export interface Actor {
  x: number; y: number; vx: number; vy: number; grounded: boolean; facing: number;
  coyote: number; buffer: number; landing: number;
}
export const createActor = (): Actor => ({ x: 200, y: TUNING.floor, vx: 0, vy: 0, grounded: true, facing: 1, coyote: 100, buffer: 0, landing: 0 });
export const createWorld = (): WorldState => ({ bridge: 'IDLE', lights: 'CLOSED', talked: false, visits: 0, checkpoint: 200 });
export function moveActor(actor: Actor, world: WorldState, dt: number, direction: number, jump: boolean) {
  const ms = dt * 1000;
  actor.buffer = jump ? TUNING.bufferMs : Math.max(0, actor.buffer - ms);
  actor.coyote = actor.grounded ? TUNING.coyoteMs : Math.max(0, actor.coyote - ms);
  actor.landing = Math.max(0, actor.landing - dt * 5);
  const target = direction * TUNING.speed;
  const amount = (direction ? TUNING.acceleration : TUNING.friction) * dt;
  actor.vx += Math.sign(target - actor.vx) * Math.min(Math.abs(target - actor.vx), amount);
  if (direction) actor.facing = direction;
  if (actor.buffer > 0 && actor.coyote > 0) {
    actor.vy = -TUNING.jumpSpeed; actor.buffer = 0; actor.coyote = 0; actor.grounded = false;
  }
  const oldY = actor.y;
  const wasGrounded = actor.grounded;
  actor.vy += TUNING.gravity * dt;
  const oldX=actor.x;
  actor.x = Math.min(TUNING.worldWidth - 80, Math.max(70, actor.x + actor.vx * dt));
  if(world.lights!=='SOLVED'){
    const left=STAGE.doorX-240,right=STAGE.doorX+240;
    if(oldX<=left&&actor.x>left){actor.x=left;actor.vx=0;}
    else if(oldX>=right&&actor.x<right){actor.x=right;actor.vx=0;}
  }
  // The low practice obstacle is a solid box; the other suspended boards are one-way platforms.
  const obstacle=STAGE.platforms[2],half=TUNING.bodyWidth/2;
  if(actor.y>obstacle.y+1 && actor.y-TUNING.bodyHeight<TUNING.floor) {
    if(oldX+half<=obstacle.x && actor.x+half>obstacle.x){actor.x=obstacle.x-half;actor.vx=0;}
    else if(oldX-half>=obstacle.x+obstacle.width && actor.x-half<obstacle.x+obstacle.width){actor.x=obstacle.x+obstacle.width+half;actor.vx=0;}
  }
  actor.y += actor.vy * dt;
  actor.grounded = false;
  const surfaces: {x:number;y:number;width:number}[] = [
    { x: 0, y: TUNING.floor, width: STAGE.gap.left },
    { x: STAGE.gap.right, y: TUNING.floor, width: TUNING.worldWidth - STAGE.gap.right }, ...STAGE.platforms,
  ];
  if (world.bridge === 'SOLVED') surfaces.push({ x: STAGE.gap.left, y: TUNING.floor, width: STAGE.bridge.width });
  if (actor.vy >= 0) {
    for (const surface of surfaces.sort((a,b) => a.y - b.y)) {
      if (actor.x + TUNING.bodyWidth / 2 > surface.x && actor.x - TUNING.bodyWidth / 2 < surface.x + surface.width && oldY <= surface.y + 1 && actor.y >= surface.y) {
        actor.y = surface.y; actor.vy = 0; actor.grounded = true;
        if (!wasGrounded) actor.landing = 1;
        break;
      }
    }
  }
  if (actor.x > 2040 && actor.grounded) world.checkpoint = 2040;
  if (actor.y > 790) { actor.x = world.checkpoint; actor.y = TUNING.floor; actor.vx = 0; actor.vy = 0; actor.grounded = true; return 'rescued'; }
  return null;
}
export function bridgeCanSnap(x:number,y:number) { return Math.hypot(x-STAGE.bridge.targetX,y-STAGE.bridge.targetY) <= STAGE.bridge.snap; }
export function checkLights(slots: readonly (SymbolId | null)[]) { return LIGHT_ORDER.every((id,index) => slots[index] === id); }
