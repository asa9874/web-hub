import type { Actor } from './model';
export const COMBAT={arenaStart:5050,arenaEnd:6100,spawn:5200,enemyPositions:[5510,5840],missileSpeed:580,missileLifetime:1.25,castCooldown:.38,invulnerability:1.25} as const;
export interface Monster {id:number;x:number;home:number;hp:number;facing:number;phase:'walk'|'windup'|'recover'|'dead';timer:number}
export interface Missile {id:number;x:number;y:number;baseY:number;direction:number;age:number}
export interface CombatState {lives:number;invulnerable:number;cooldown:number;casting:number;clock:number;serial:number;monsters:Monster[];missiles:Missile[]}
export type CombatEvent='cast'|'hit'|'hurt'|'enemyAttack'|'gameover';
export function createCombat():CombatState{return {lives:3,invulnerable:0,cooldown:0,casting:0,clock:0,serial:0,missiles:[],monsters:COMBAT.enemyPositions.map((x,id)=>({id,x,home:x,hp:3,facing:-1,phase:'walk',timer:0}))};}
export function updateCombat(state:CombatState,actor:Actor,dt:number,attack:boolean):CombatEvent[]{
  if(state.lives<=0)return [];
  const events:CombatEvent[]=[];state.clock+=dt;state.invulnerable=Math.max(0,state.invulnerable-dt);state.cooldown=Math.max(0,state.cooldown-dt);state.casting=Math.max(0,state.casting-dt);
  if(attack&&state.cooldown===0){state.cooldown=COMBAT.castCooldown;state.casting=.3;state.missiles.push({id:state.serial++,x:actor.x+actor.facing*52,y:actor.y-65,baseY:actor.y-65,direction:actor.facing,age:0});events.push('cast');}
  for(const monster of state.monsters){
    if(monster.hp<=0){monster.phase='dead';continue;}
    const distance=actor.x-monster.x,close=Math.abs(distance)<550&&Math.abs(actor.y-570)<140;
    if(monster.phase==='walk'){
      if(close)monster.facing=distance<0?-1:1;
      else if(monster.x>monster.home+100)monster.facing=-1;else if(monster.x<monster.home-100)monster.facing=1;
      if(close&&Math.abs(distance)<105){monster.phase='windup';monster.timer=.55;}
      else monster.x=Math.max(COMBAT.arenaStart+75,Math.min(COMBAT.arenaEnd-75,monster.x+monster.facing*(close?88:43)*dt));
    }else if(monster.phase==='windup'){
      monster.timer-=dt;if(monster.timer<=0){monster.phase='recover';monster.timer=.95;events.push('enemyAttack');
        if(Math.abs(actor.x-monster.x)<135&&Math.abs(actor.y-570)<105&&state.invulnerable===0){state.lives--;state.invulnerable=COMBAT.invulnerability;actor.vx=monster.facing*180;events.push(state.lives===0?'gameover':'hurt');}
      }
    }else if(monster.phase==='recover'){monster.timer-=dt;if(monster.timer<=0)monster.phase='walk';}
  }
  for(const missile of state.missiles){
    missile.age+=dt;missile.x+=missile.direction*COMBAT.missileSpeed*dt;missile.y=missile.baseY+Math.sin(missile.age*13)*2+Math.sin(missile.age*21)*.6;
    for(const monster of state.monsters)if(monster.hp>0&&Math.abs(missile.x-monster.x)<48&&missile.y>455&&missile.y<575){monster.hp--;missile.age=COMBAT.missileLifetime;events.push('hit');break;}
  }
  state.missiles=state.missiles.filter(m=>m.age<COMBAT.missileLifetime);
  return events;
}
