import type { Actor } from './model';
import {monsterById} from './castData';
import type {Pattern} from './castData';
export const COMBAT={arenaStart:5050,arenaEnd:6100,spawn:5200,enemyPositions:[5510,5840],missileSpeed:580,missileLifetime:1.25,castCooldown:.38,invulnerability:1.25} as const;
export interface Monster {aim:number;id:number;kind:string;x:number;y:number;home:number;hp:number;maxHp:number;facing:number;phase:'walk'|'windup'|'active'|'recover'|'dead';timer:number;cycle:number;action:Pattern;travel:number;stagger:number;knock:number;deathAge:number}
export interface Missile {id:number;x:number;y:number;baseY:number;direction:number;age:number}
export interface Hazard {id:number;x:number;y:number;vx:number;vy:number;age:number;life:number;wave:boolean}
export interface HitMark {x:number;y:number;direction:number;blocked:boolean}
export const DEFENSE={blinkDistance:230,blinkDuration:.18,blinkCooldown:.85,shieldMax:100,blockCost:25,regenDelay:1.4,regenRate:22,breakDuration:.9} as const;
export interface CombatState {blinkTime:number;blinkCooldown:number;shielding:boolean;shield:number;shieldDelay:number;shieldBroken:number;blockGrace:number;blockFlash:number;knockback:number;impacts:HitMark[];selection:string;lives:number;invulnerable:number;cooldown:number;casting:number;clock:number;serial:number;monsters:Monster[];missiles:Missile[];hazards:Hazard[]}
export type CombatEvent='cast'|'hit'|'hurt'|'enemyAttack'|'gameover'|'warning'|'block'|'shieldBreak';
export function createCombat(selection='clapper'):CombatState{
  const d=monsterById(selection),positions=d.pattern==='boss'?[5730]:COMBAT.enemyPositions;
  return {blinkTime:0,blinkCooldown:0,shielding:false,shield:100,shieldDelay:0,shieldBroken:0,blockGrace:0,blockFlash:0,knockback:0,impacts:[],selection:d.id,lives:3,invulnerable:0,cooldown:0,casting:0,clock:0,serial:0,missiles:[],hazards:[],monsters:positions.map((x,id)=>({aim:0,id,kind:d.id,x,y:570,home:x,hp:d.hp,maxHp:d.hp,facing:-1,phase:'walk',timer:0,cycle:0,action:d.pattern,travel:0,stagger:0,knock:0,deathAge:0}))};
}
export function damagePlayer(state:CombatState,sourceDirection=1):CombatEvent|null {
  if(state.invulnerable>0||state.blinkTime>0||state.blockGrace>0||state.lives<=0)return null;
  if(state.shielding&&state.shield>0){
    state.shield=Math.max(0,state.shield-DEFENSE.blockCost);state.shieldDelay=DEFENSE.regenDelay;state.blockGrace=.22;state.blockFlash=.22;state.knockback=sourceDirection*210;
    if(state.shield===0){state.shielding=false;state.shieldBroken=DEFENSE.breakDuration;return 'shieldBreak';}
    return 'block';
  }
  state.lives--;state.invulnerable=COMBAT.invulnerability;return state.lives===0?'gameover':'hurt';
}
export function beginBlink(state:CombatState){
  if(state.lives<=0||state.blinkCooldown>0||state.shielding)return false;
  state.blinkTime=DEFENSE.blinkDuration;state.blinkCooldown=DEFENSE.blinkCooldown;state.casting=0;return true;
}
export function updateDefense(state:CombatState,dt:number,held:boolean){
  for(const key of ['blinkTime','blinkCooldown','shieldBroken','blockGrace','blockFlash'] as const)state[key]=Math.max(0,state[key]-dt);
  state.shielding=held&&(state.shielding?state.shield>0:state.shield>=DEFENSE.blockCost)&&state.shieldBroken===0&&state.blinkTime===0&&state.lives>0;
  if(held)state.shieldDelay=DEFENSE.regenDelay;
  else {state.shieldDelay=Math.max(0,state.shieldDelay-dt);if(state.shieldDelay===0)state.shield=Math.min(DEFENSE.shieldMax,state.shield+DEFENSE.regenRate*dt);}
  state.knockback*=Math.exp(-12*dt);
}
export function updateCombat(state:CombatState,actor:Actor,dt:number,attack:boolean):CombatEvent[]{
  if(state.lives<=0)return [];
  const events:CombatEvent[]=[];state.impacts=[];state.clock+=dt;
  for(const key of ['invulnerable','cooldown','casting'] as const)state[key]=Math.max(0,state[key]-dt);
  const hurt=(direction=1)=>{const event=damagePlayer(state,direction);if(event)events.push(event);};
  const spawn=(m:Monster,angle:number,speed:number,wave=false)=>state.hazards.push({id:state.serial++,x:m.x+m.facing*60,y:wave?555:m.y-75,vx:Math.cos(angle)*speed*m.facing,vy:Math.sin(angle)*speed,age:0,life:3,wave});
  if(attack&&state.cooldown===0&&state.blinkTime===0&&!state.shielding){state.cooldown=COMBAT.castCooldown;state.casting=.3;state.missiles.push({id:state.serial++,x:actor.x+actor.facing*52,y:actor.y-65,baseY:actor.y-65,direction:actor.facing,age:0});events.push('cast');}
  for(const m of state.monsters){
    const d=monsterById(m.kind);
    if(m.hp<=0){m.phase='dead';m.deathAge+=dt;continue;}
    m.x=Math.max(COMBAT.arenaStart+75,Math.min(COMBAT.arenaEnd-75,m.x+m.knock*dt));m.knock*=Math.exp(-12*dt);
    if(m.stagger>0){m.stagger=Math.max(0,m.stagger-dt);continue;}
    const distance=actor.x-m.x,close=Math.abs(distance)<700&&Math.abs(actor.y-570)<220;
    if(m.phase==='walk'){
      if(close)m.facing=distance<0?-1:1;else if(m.x>m.home+100)m.facing=-1;else if(m.x<m.home-100)m.facing=1;
      const reach=d.pattern==='clap'||d.pattern==='guard'?105:d.pattern==='hop'?330:650;
      if(close&&Math.abs(distance)<reach){const sequence=d.bossPatterns??['charge','fan','wave'];m.aim=Math.max(-.35,Math.min(.35,Math.atan2(actor.y-65-(m.y-75),Math.abs(distance))));events.push('warning');m.phase='windup';m.timer=d.windup;m.action=d.pattern==='boss'?sequence[m.cycle%sequence.length]:d.pattern;}
      else m.x+=m.facing*(close?d.speed:d.speed*.5)*dt;
    }else if(m.phase==='windup'){
      m.timer-=dt;
      if(m.timer<=0){events.push('enemyAttack');m.cycle++;m.travel=0;
        if(m.action==='charge'||m.action==='hop'){m.phase='active';m.timer=m.action==='charge'?.62:.8;}
        else{
          m.phase='recover';m.timer=d.recovery;
          if(m.action==='clap'||m.action==='guard'){if(Math.abs(distance)<135&&Math.abs(actor.y-m.y)<105)hurt(m.facing);}
          else if(m.action==='ranged'){spawn(m,m.aim,265);}
          else if(m.action==='fan'){for(const a of [-.22,0,.22])spawn(m,a,d.pattern==='boss'?305:230);if(d.pattern==='boss'&&m.hp<m.maxHp/2)for(const a of [-.44,.44])spawn(m,a,305);}
          else if(m.action==='wave'){spawn(m,0,245,true);if(d.pattern==='boss'){spawn({...m,facing:-m.facing},0,245,true);if(m.hp<m.maxHp/2)spawn(m,0,340,true);}}
        }
      }
    }else if(m.phase==='active'){
      m.timer-=dt;m.travel+=dt;m.x+=m.facing*(m.action==='charge'?d.speed*4.2:d.speed*2)*dt;
      m.y=m.action==='hop'?570-Math.sin(Math.min(1,m.travel/.8)*Math.PI)*145:570;
      if(m.action==='charge'&&Math.abs(actor.x-m.x)<78&&Math.abs(actor.y-m.y)<105)hurt(m.facing);
      if(m.timer<=0){m.y=570;m.phase='recover';m.timer=d.recovery;if(m.action==='hop'&&Math.abs(actor.x-m.x)<135&&Math.abs(actor.y-570)<105)hurt(m.facing);}
    }else if(m.phase==='recover'){m.timer-=dt;if(m.timer<=0)m.phase='walk';}
    m.x=Math.max(COMBAT.arenaStart+75,Math.min(COMBAT.arenaEnd-75,m.x));
  }
  for(const missile of state.missiles){
    missile.age+=dt;missile.x+=missile.direction*COMBAT.missileSpeed*dt;missile.y=missile.baseY+Math.sin(missile.age*13)*2+Math.sin(missile.age*21)*.6;
    for(const m of state.monsters){const d=monsterById(m.kind);if(m.hp>0&&Math.abs(missile.x-m.x)<(d.pattern==='boss'?100:48)&&missile.y>m.y-d.height*.8&&missile.y<m.y+5){
      const blocked=d.pattern==='guard'&&m.phase==='walk'&&missile.direction===-m.facing;state.impacts.push({x:missile.x,y:missile.y,direction:missile.direction,blocked});
      if(!blocked){m.hp--;m.stagger=.14;m.knock=missile.direction*(d.pattern==='boss'?55:150);}
      missile.age=COMBAT.missileLifetime;events.push('hit');if(m.hp===0&&d.pattern==='boss')state.hazards=[];break;
    }}
  }
  for(const h of state.hazards){h.age+=dt;h.x+=h.vx*dt;h.y+=h.vy*dt;if(Math.abs(actor.x-h.x)<30&&h.y>actor.y-115&&h.y<actor.y+10){hurt(Math.sign(h.vx)||1);h.age=h.life;}}
  state.missiles=state.missiles.filter(m=>m.age<COMBAT.missileLifetime);
  state.hazards=state.hazards.filter(h=>h.age<h.life&&h.x>COMBAT.arenaStart-150&&h.x<COMBAT.arenaEnd+150&&h.y>250&&h.y<610);
  return events;
}

export function attackTell(m:Monster){
  const d=monsterById(m.kind),clamp=(x:number)=>Math.max(COMBAT.arenaStart+75,Math.min(COMBAT.arenaEnd-75,x));
  const end=clamp(m.x+m.facing*d.speed*(m.action==='charge'?4.2*.62:2*.8));
  return {start:m.x,end,radius:m.action==='clap'||m.action==='guard'||m.action==='hop'?135:78,aim:m.aim};
}

// Same spread and facing as actual projectile spawning, including the boss second act.
export function attackRays(m:Monster){
  const d=monsterById(m.kind),angles=m.action==='fan'?[-.22,0,.22,...(d.pattern==='boss'&&m.hp<m.maxHp/2?[-.44,.44]:[])]:[m.action==='ranged'?m.aim:0];
  const rays=angles.map(angle=>({x:m.x+m.facing*60,y:m.action==='wave'?555:m.y-75,dx:m.facing*Math.cos(angle)*260,dy:Math.sin(angle)*260}));
  if(m.action==='wave'&&d.pattern==='boss')rays.push({x:m.x-m.facing*60,y:555,dx:-m.facing*260,dy:0});
  return rays;
}
