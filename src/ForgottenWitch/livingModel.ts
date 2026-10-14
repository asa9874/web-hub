import type {Actor} from './model';
import type {Emotion} from './dialogueModel';
export interface MovingSurface {x:number;y:number;width:number;previousY:number;dx:number;dy:number;tilt:number;previousTilt?:number}
export interface MovementEnvironment {wind:number;platforms:MovingSurface[];barrier?:number}
export function surfaceHeight(p:MovingSurface,x:number,previous=false){
  return (previous?p.previousY:p.y)+Math.tan(previous?(p.previousTilt??p.tilt):p.tilt)*(x-(p.x-(previous?p.dx:0)+p.width/2));
}
export interface LivingState {
  clock:number;windDirection:number;windOn:boolean;bell:number;mill:number;lamp:boolean;
  secretOpen:boolean;discovered:boolean;checkpoint:number|null;rests:number;
  platformDrop:number;platforms:MovingSurface[];teeth:'idle'|'warning'|'active'|'cooldown';trapTimer:number;
  reaction:{kind:string;text:string;emotion:Emotion;remaining:number}|null;nearNpc:boolean;npcCooldown:number;
  idle:number;gesture:'none'|'hat'|'glance'|'wand';gestureTime:number;
}
export function createLiving():LivingState{return {clock:0,windDirection:1,windOn:true,bell:0,mill:0,lamp:false,secretOpen:false,discovered:false,checkpoint:null,rests:0,platformDrop:0,platforms:[{x:8420,y:500,previousY:500,width:150,dx:0,dy:0,tilt:0},{x:8660,y:455,previousY:455,width:160,dx:0,dy:0,tilt:0}],teeth:'idle',trapTimer:0,reaction:null,nearNpc:false,npcCooldown:0,idle:0,gesture:'none',gestureTime:0};}
const REACTIONS:Record<string,readonly [string,string,string]>={
  플로라:['오늘도 꽃들이 기다렸어요.','모자가 날아가겠어요!','꽃잎은 태우지 말아 주세요.'],
  루미:['불빛을 따라오세요.','별에 닿을 뻔했어요!','등불보다 밝네요.'],
  세린:['없는 페이지도 자리는 남겨 둬요.','망토가 책갈피 같네요.','그 장면, 기록해도 될까요?'],
  노엘:['발판은 고쳐 놨어. 아마도.','착지할 곳부터 봐야지.','장치에 쏘면 네가 고쳐.'],
  미라:['혹시 표 한 장 남았나요?','공중에서도 인사는 해야죠!','제 망토에는 쏘지 말아요.'],
  이리스:['이 무대는 소리가 다르네요.','발소리까지 반짝이네요.','소리굽쇠가 떨리고 있어요.'],
  포피:['망토 끝이 풀렸네요. 잠깐만요.','치맛단은 제가 잡아 드릴게요!','그을리면 다시 꿰매면 되죠.'],
};
export function reaction(state:LivingState,kind:'greet'|'jump'|'magic',npcName:string){
  if(state.npcCooldown>0&&state.reaction?.kind===kind)return;
  const lines=REACTIONS[npcName]??['어서 와요. 발밑을 조심해요.','모자가 날아가겠어요!','마법은 살살 부탁해요.'];
  const text=`${npcName}: ${lines[kind==='greet'?0:kind==='jump'?1:2]}`;
  state.reaction={kind,text,emotion:kind==='magic'?'worry':kind==='jump'?'joy':'neutral',remaining:Math.max(2.6,text.length*.09)};state.npcCooldown=kind==='greet'?3:1.8;
}
export function updateLiving(state:LivingState,actor:Actor,dt:number,npcX:number,npcName:string,inCombat:boolean){
  state.clock+=dt;state.bell=Math.max(0,state.bell-dt);state.mill=Math.max(0,state.mill-dt);state.npcCooldown=Math.max(0,state.npcCooldown-dt);
  if(state.reaction){state.reaction.remaining-=dt;if(state.reaction.remaining<=0)state.reaction=null;}
  const near=Math.abs(actor.x-npcX)<230;
  if(near&&!state.nearNpc&&state.npcCooldown===0)reaction(state,'greet',npcName);state.nearNpc=near;
  const resting=actor.grounded&&Math.abs(actor.vx)<8&&!inCombat;
  state.idle=resting?state.idle+dt:0;
  if(!resting){state.gesture='none';state.gestureTime=0;}
  else if(state.gesture!=='none'){state.gestureTime+=dt;if(state.gestureTime>1.3){state.gesture='none';state.gestureTime=0;state.idle=0;}}
  else if(state.idle>=5){state.gesture=near?'glance':actor.x>5000&&actor.x<6300?'wand':'hat';state.gestureTime=0;}
  const onSink=actor.grounded&&Math.abs(actor.y-surfaceHeight(state.platforms[0],actor.x))<3&&actor.x>state.platforms[0].x-20&&actor.x<state.platforms[0].x+170;
  const target=onSink?38:0;state.platformDrop+=(target-state.platformDrop)*(1-Math.exp(-3*dt));
  const targets=[{x:8420+Math.sin(state.clock*.65)*38,y:500+state.platformDrop,tilt:onSink?.055:0},{x:8660,y:455+Math.sin(state.clock*.8)*22,tilt:Math.sin(state.clock*.8)*.025}];
  state.platforms=state.platforms.map((p,i)=>({...p,...targets[i],previousY:p.y,previousTilt:p.tilt,dx:targets[i].x-p.x,dy:targets[i].y-p.y}));
  if(state.teeth==='idle'&&actor.grounded&&Math.abs(actor.x-9360)<110){state.teeth='warning';state.trapTimer=.55;}
  else if(state.teeth!=='idle'){state.trapTimer-=dt;if(state.trapTimer<=0){state.teeth=state.teeth==='warning'?'active':state.teeth==='active'?'cooldown':'idle';state.trapTimer=state.teeth==='active'?.65:1.2;}}
}
export function movementEnvironment(state:LivingState,actor:Actor):MovementEnvironment{return {wind:state.windOn&&actor.x>=7780&&actor.x<=8240?state.windDirection*(actor.grounded?55:130)*(1+Math.sin(state.clock*.6)*.15):0,platforms:state.platforms,barrier:state.secretOpen?undefined:10140};}
export function trapContact(state:LivingState,actor:Actor){
  const moonX=9630+Math.sin(state.clock*1.3)*110,moonY=430+Math.cos(state.clock*1.3)*45;
  return state.teeth==='active'&&Math.abs(actor.x-9360)<65&&actor.y>530||Math.abs(actor.x-moonX)<65&&moonY>actor.y-110&&moonY<actor.y+10;
}
export function hitMagicProp(state:LivingState,x:number,y:number):'bell'|'mill'|'lamp'|null{
  if(y<450||y>545)return null;
  if(Math.abs(x-7190)<38){state.bell=1.2;return 'bell';}
  if(Math.abs(x-7370)<42){state.mill=3;state.windOn=!state.windOn;return 'mill';}
  if(Math.abs(x-7550)<38){state.lamp=!state.lamp;return 'lamp';}
  return null;
}
