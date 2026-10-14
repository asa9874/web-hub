import Phaser from 'phaser3';
import {applyActingPose} from './actingData';
import type {Speaker} from './dialogueModel';
import {focusPoint,progress,smooth,sampleActor} from './directionModel';
import type {StageCue,StageActor,StagePoint} from './directionModel';
type Puppet=Phaser.GameObjects.Image;
interface PoseState extends StagePoint {pose:'idle'|'strike'|Parameters<typeof applyActingPose>[2];facing:1|-1}
export class StageDirector {
 private scene:Phaser.Scene;private puppets:Record<StageActor,Puppet>;private props:Record<'flower'|'bridge',Puppet>;
 private cast:Record<StageActor,Speaker>={player:'witch',npc:'flora'};
 private positions:Record<StageActor,PoseState>={player:{x:0,y:570,pose:'idle',facing:1},npc:{x:0,y:570,pose:'idle',facing:-1}};
 private cue:StageCue|null=null;private time=0;private clock=0;private token=0;private done:(()=>void)|null=null;
 private starts!:Record<StageActor,StagePoint>;private cameraFrom={x:0,y:0,zoom:1};private originalCamera={x:0,y:0,zoom:1};
 private propBase:{x:number;y:number;rotation:number}|null=null;private emitted=new Set<number>();private active=false;private returning=0;private fresh=false;
 private effect:(kind:'tap'|'surprise'|'magic',point:StagePoint)=>void;private cameraTarget:StagePoint={x:0,y:0};
 paused=false;
 constructor(scene:Phaser.Scene,player:Puppet,npc:Puppet,flower:Puppet,bridge:Puppet,effect:(kind:'tap'|'surprise'|'magic',point:StagePoint)=>void){this.scene=scene;this.puppets={player,npc};this.props={flower,bridge};this.effect=effect;}
 open(npc:Speaker){const c=this.scene.cameras.main,original=this.returning>0?this.originalCamera:{x:c.scrollX,y:c.scrollY,zoom:c.zoom};this.reset();this.active=true;this.fresh=true;this.cast.npc=npc;this.originalCamera=original;for(const who of ['player','npc'] as const){const p=this.puppets[who],facesRight=who==='player'?p.x<this.puppets.npc.x:this.puppets.player.x>p.x;this.positions[who]={x:p.x,y:570,pose:'idle',facing:facesRight?1:-1};}}
 start(cue:StageCue,done:()=>void){
  this.restoreProp();const token=++this.token;this.cue={...cue,actors:cue.actors?.map(a=>({...a}))};this.time=0;this.done=done;this.emitted.clear();
  if(this.fresh){this.fresh=false;const actors=this.cue.actors??=[];for(const who of ['player','npc'] as const){const existing=actors.find(a=>a.who===who);if(existing&&existing.dx===undefined){existing.dx=who==='player'?-75:75;existing.seconds=.65;}else if(!existing)actors.push({who,pose:'idle',dx:who==='player'?-75:75,seconds:.65});}}
  this.starts={player:{...this.positions.player},npc:{...this.positions.npc}};const c=this.scene.cameras.main;this.cameraFrom={x:c.scrollX,y:c.scrollY,zoom:c.zoom};
  if(cue.camera)this.cameraTarget=focusPoint(cue.camera.target,{player:this.positions.player,npc:this.positions.npc,flower:this.props.flower.getCenter(),bridge:this.props.bridge.getCenter()});
  if(cue.prop){const p=this.props[cue.prop.target];this.propBase={x:p.x,y:p.y,rotation:p.rotation};}
  if(cue.camera?.shake&&!this.reduced())c.shake(180,Math.min(.004,cue.camera.shake));
  return ()=>{if(this.token===token){this.restoreProp();this.done=null;this.cue=null;}};
 }
 private reduced(){return window.matchMedia('(prefers-reduced-motion: reduce)').matches;}
 private restoreProp(){if(this.propBase&&this.cue?.prop){const p=this.props[this.cue.prop.target];p.setPosition(this.propBase.x,this.propBase.y).setRotation(this.propBase.rotation);}this.propBase=null;}
 end(){this.restoreProp();this.done=null;this.cue=null;this.token++;this.paused=false;if(this.active){this.returning=.65;const c=this.scene.cameras.main;this.cameraFrom={x:c.scrollX,y:c.scrollY,zoom:c.zoom};}this.active=false;}
 reset(){this.restoreProp();this.done=null;this.cue=null;this.token++;this.active=false;this.returning=0;this.paused=false;}
 get ownsCamera(){return this.active||this.returning>0;}
 get running(){return this.active;}
 update(dt:number,running:boolean){
  const cam=this.scene.cameras.main;
  if(this.returning>0){if(running){this.returning=Math.max(0,this.returning-dt);const q=smooth(1-this.returning/.65);cam.setZoom(Phaser.Math.Linear(this.cameraFrom.zoom,this.originalCamera.zoom,q));cam.setScroll(Phaser.Math.Linear(this.cameraFrom.x,this.originalCamera.x,q),Phaser.Math.Linear(this.cameraFrom.y,this.originalCamera.y,q));}return;}
  if(!this.active)return;if(running&&!this.paused){this.clock+=dt;if(this.cue)this.time+=dt;}
  const cue=this.cue,t=this.time;
  if(cue){for(const a of cue.actors??[]){if(t<(a.at??0))continue;const p=sampleActor(a,this.starts[a.who],t);this.positions[a.who]={...p,facing:a.facing??this.positions[a.who].facing};}}
  for(const who of ['player','npc'] as const){const p=this.puppets[who],s=this.positions[who];p.setPosition(s.x,s.y).setAlpha(1);if(s.pose==='strike'&&who==='player'){p.setTexture('witch-attack').setOrigin(.5,1).setData('rodJoint',{u:.5,v:.8}).setFlipX(s.facing<0).setScale(198/p.height).setRotation(-Math.sin(t*5)*.07);}else if(s.pose!=='idle')applyActingPose(p,this.cast[who],s.pose==='strike'?'point':s.pose,who==='player'?198:190,s.facing,this.clock);}
  const points={player:this.positions.player,npc:this.positions.npc,flower:this.props.flower.getCenter(),bridge:this.props.bridge.getCenter()};
  if(cue?.camera){const q=smooth(progress(t,0,cue.camera.seconds??.8)),target=cue.camera.follow?focusPoint(cue.camera.target,points):this.cameraTarget,zoom=Phaser.Math.Clamp(cue.camera.zoom,1,2.2);cam.setZoom(Phaser.Math.Linear(this.cameraFrom.zoom,zoom,q));cam.setScroll(Phaser.Math.Linear(this.cameraFrom.x,target.x-640,q),Phaser.Math.Linear(this.cameraFrom.y,target.y-360,q));}
  if(cue?.prop&&this.propBase){const q=progress(t,cue.prop.at,cue.prop.seconds),w=Math.sin(q*Math.PI);this.props[cue.prop.target].setY(this.propBase.y+cue.prop.dy*w).setRotation(this.propBase.rotation+cue.prop.angle*w);}
  if(running&&!this.paused)for(const [i,e] of (cue?.effects??[]).entries())if(t>=e.at&&!this.emitted.has(i)){this.emitted.add(i);this.effect(e.kind,focusPoint(e.target,points));}
  if(cue&&t>=cue.seconds&&this.done){const done=this.done;this.done=null;done();}
 }
 snapshot(){return {active:this.active,paused:this.paused,busy:Boolean(this.done),hidden:this.cue?.hideDialogue??false,id:this.cue?.id??'',elapsed:Math.round(this.time*10)/10,actors:this.positions,zoom:this.scene.cameras.main.zoom,returning:this.returning};}
}
