import Phaser from 'phaser3';
import { assetUrl, STAGE, TUNING, TEST_AREAS } from './config';
import type { TestArea } from './config';
import { bridgeCanSnap, createActor, createWorld, moveActor } from './model';
import type { GameMode, WorldState } from './model';
import { TheaterInput } from './input';
import { createPaperTextures } from './paper';
import { TheaterSound } from './sound';
import { StageRig } from './rig';
import { puppetPose } from './poses';
import { StageLife } from './StageLife';
import { StageLighting } from './StageLighting';
import type { Emotion, Speaker } from './dialogueModel';
import { CombatStage } from './CombatStage';
import { updateCombat } from './combatModel';

export interface TheaterView {
  mode:GameMode; area:string; prompt:string; message:string;
  bridgeSolved:boolean; lightsSolved:boolean; talked:boolean; dialogue:'first'|'repeat'|'lit';
  lives:number;
}
export interface TheaterCallbacks {
  view:(view:TheaterView)=>void; ready:(scene:TheaterScene)=>void;
  advance:()=>void; error:(message:string)=>void;
}
export class TheaterScene extends Phaser.Scene {
  readonly actor=createActor();
  readonly world:WorldState=createWorld();
  mode:GameMode='intro';
  private controls!:TheaterInput;
  private puppet!:Phaser.GameObjects.Image;
  private rig!:StageRig;
  private stageLife!:StageLife;
  private footstepX=200;
  private flora!:Phaser.GameObjects.Image;
  private bridge!:Phaser.GameObjects.Image;
  private guide!:Phaser.GameObjects.Graphics;
  private curtains:Phaser.GameObjects.Image[]=[];
  private lighting!:StageLighting;
  private combat!:CombatStage;
  private respawnPoint=200;
  private lightAmount=0;
  private hint!:Phaser.GameObjects.Text;
  private dragging=false;
  private dragOffset={x:0,y:0};
  private nextMessageUntil=0;
  private message='';
  private lastView='';
  private dialogue:'first'|'repeat'|'lit'='first';
  private loadErrors:string[]=[];
  private distantApplausePlayed=false;
  private theaterSound=new TheaterSound();
  private callbacks:TheaterCallbacks;
  constructor(callbacks:TheaterCallbacks) { super('theater');this.callbacks=callbacks; }
  preload() {
    this.load.on('loaderror',(file:Phaser.Loader.File)=>this.loadErrors.push(file.key));
    for(const name of ['witch-puppet','witch-walk','witch-jump','flora-puppet','witch-portrait','flora-portrait','paper-tree']) this.load.image(name,assetUrl(name+(name.startsWith('flora')?'-clean':'')+'.png'));
    for(const name of ['witch-knee','flora-knee','title-arch'])this.load.image(name,assetUrl(name+'.png'));
    for(const name of ['witch-attack','clapper-idle','clapper-walk','clapper-attack','game-over'])this.load.image(name,assetUrl(name+'.png'));
  }
  create() {
    if(this.loadErrors.length){this.callbacks.error('에셋을 불러오지 못했습니다: '+this.loadErrors.join(', '));return;}
    createPaperTextures(this);
    this.cameras.main.setBackgroundColor('#F3E5CE');
    this.cameras.main.setBounds(0,0,TUNING.worldWidth,TUNING.height);
    this.add.tileSprite(0,0,1280,720,'paper').setOrigin(0).setScrollFactor(0).setTint(0x777187);
    this.rig=new StageRig(this);
    this.stageLife=new StageLife(this);
    this.lighting=new StageLighting(this);
    this.drawSet();
    this.combat=new CombatStage(this,this.rig);
    this.bridge=this.add.image(STAGE.bridge.startX,STAGE.bridge.startY,'bridge').setDisplaySize(STAGE.bridge.width,58).setOrigin(.5,0).setDepth(6);
    this.bridge.setInteractive({useHandCursor:true});
    this.rig.attach(this.bridge,'movable-bridge','bottom',.5,.55,10);
    this.lighting.shadow(this.bridge,.14);
    this.guide=this.add.graphics().setDepth(5).setVisible(false);
    this.guide.lineStyle(3,0x736477,.7);this.guide.strokeRect(STAGE.gap.left,570,480,55);
    for(let x=STAGE.gap.left+12;x<STAGE.gap.right;x+=32){this.guide.lineStyle(2,0xfff2d5,.9);this.guide.lineBetween(x,581,x+14,581);}
    this.guide.fillStyle(0xfff0c8,.18);this.guide.fillRect(STAGE.gap.left,570,480,55);
    this.puppet=this.add.image(this.actor.x,this.actor.y,'witch-puppet').setOrigin(.5,1).setDepth(10);
    this.puppet.setScale(198/this.puppet.height);
    this.rig.attach(this.puppet,'player','bottom',.5,.79,10);
    this.lighting.shadow(this.puppet,.16);
    this.flora=this.add.image(STAGE.floraX,570,'flora-puppet').setOrigin(.5,1).setDepth(9);
    this.flora.setScale(190/this.flora.height);
    this.rig.attach(this.flora,'flora','bottom',.5,.84,9);
    this.lighting.shadow(this.flora,.14);
    this.hint=this.add.text(0,0,'',{fontFamily:'WT Readable, sans-serif',fontSize:'21px',color:'#302836',backgroundColor:'#f5ead7',padding:{x:14,y:8}}).setOrigin(.5,1).setDepth(14);
    this.controls=new TheaterInput(this);
    const down=(pointer:Phaser.Input.Pointer)=>{
      if(this.mode!=='bridge')return;
      const x=pointer.x+this.cameras.main.scrollX,y=pointer.y;
      if(Math.abs(x-this.bridge.x)<255 && y>this.bridge.y-22 && y<this.bridge.y+80){
        this.dragging=true;this.world.bridge='DRAGGING';this.dragOffset={x:x-this.bridge.x,y:y-this.bridge.y};this.theaterSound.cue('paper');
      }
    };
    const move=(pointer:Phaser.Input.Pointer)=>{
      if(!this.dragging||this.mode!=='bridge')return;
      this.bridge.x=Phaser.Math.Clamp(pointer.x+this.cameras.main.scrollX-this.dragOffset.x,STAGE.gap.left-320,STAGE.gap.right+240);
      this.bridge.y=Phaser.Math.Clamp(pointer.y-this.dragOffset.y,250,625);
      if(bridgeCanSnap(this.bridge.x,this.bridge.y)){this.bridge.setPosition(STAGE.bridge.targetX,STAGE.bridge.targetY);this.guide.setAlpha(1);}else this.guide.setAlpha(.55);
    };
    const up=()=>{
      if(!this.dragging)return;this.dragging=false;
      if(bridgeCanSnap(this.bridge.x,this.bridge.y)){
        this.bridge.setPosition(STAGE.bridge.targetX,STAGE.bridge.targetY);this.world.bridge='SOLVED';this.guide.setVisible(false);
        this.mode='explore';this.theaterSound.cue('solve');this.toast('종이 다리가 연결됐습니다. 이제 건널 수 있어요.');this.controls.clear();
        this.tweens.add({targets:this.bridge,angle:1.2,duration:110,yoyo:true,repeat:1});
        this.stageLife.impact(STAGE.gap.left,570);this.stageLife.impact(STAGE.gap.right,570);
      }else this.world.bridge='ACTIVE';
      this.publish();
    };
    this.input.on('pointerdown',down);this.input.on('pointermove',move);this.input.on('pointerup',up);this.input.on('pointerupoutside',up);
    const blur=()=>{if(this.mode==='explore')this.pause();else if(this.mode==='bridge')this.closePuzzle();};
    this.game.events.on(Phaser.Core.Events.BLUR,blur);
    let cleaned=false;
    const cleanup=()=>{
      if(cleaned)return;cleaned=true;
      this.game.events.off(Phaser.Core.Events.BLUR,blur);this.theaterSound.destroy();
      this.input.off('pointerdown',down);this.input.off('pointermove',move);this.input.off('pointerup',up);this.input.off('pointerupoutside',up);
    };
    this.events.once(Phaser.Scenes.Events.SHUTDOWN,cleanup);
    this.events.once(Phaser.Scenes.Events.DESTROY,cleanup);
    this.rig.update();this.callbacks.ready(this);this.publish();
  }
  private drawSet() {
    // Rear flats, middle cutouts and foreground wings each have their own scroll factor.
    for(let i=0;i<15;i++){
      const tree=this.add.image(90+i*380,555,'tree-plum').setOrigin(.5,1).setDisplaySize(290,390+(i%3)*40).setTint(0x756a83).setAlpha(.48).setScrollFactor(.22).setDepth(1);
      this.stageLife.sway(tree,.18);this.rig.attach(tree,`rear-tree-${i}`,'bottom',.51,.88,4);
    }
    for(let i=0;i<19;i++){
      const tree=this.add.image(30+i*260,565,'paper-tree').setOrigin(.5,1).setDisplaySize(225+(i%2)*45,350+(i%3)*55).setFlipX(i%2===0).setTint(0xaaa5b3).setAlpha(.72).setScrollFactor(.62).setDepth(2);
      this.rig.attach(tree,`middle-tree-${i}`,'bottom',.5,.87,6);
      this.stageLife.sway(tree,.22);this.lighting.shadow(tree,.12);
    }
    const moon=this.add.image(300,165,'moon').setDisplaySize(110,110).setScrollFactor(.18).setDepth(2);
    this.rig.attach(moon,'hanging-moon','top',.25,.5,5);this.stageLife.sway(moon,.65);this.lighting.glow(moon,.65);
    for(let i=0;i<12;i++){
      const x=410+i*300,y=108+(i%3)*45;
      const star=this.add.image(x,y,'star').setDisplaySize(37,37).setScrollFactor(.38).setDepth(3);
      this.rig.attach(star,`hanging-star-${i}`,'top',.5,.5,3);this.stageLife.hang(star);
      this.lighting.glow(star,.48);
    }
    const gap=this.add.graphics().setDepth(3);gap.fillStyle(0x5c485e,.7);gap.fillRect(1420,610,480,110);gap.lineStyle(2,0x9b7e8f,.6);
    for(let x=1435;x<1900;x+=34)gap.lineBetween(x,633,x+70,720);
    const floors=[{x:0,width:1420},{x:1900,width:TUNING.worldWidth-1900}];
    for(const [index,floor] of floors.entries()){
      // Opaque scenery backing also occludes supports through texture alpha/NPOT tiling.
      this.add.rectangle(floor.x,582,floor.width,138,0xc8a581).setOrigin(0).setDepth(5.9);
      const panel=this.add.tileSprite(floor.x,570,floor.width,150,'floor').setOrigin(0).setDepth(6);
      for(let x=160;x<floor.width;x+=400)this.rig.attach(panel,`floor-${index}-${x}`,'bottom',x/floor.width,.2,10);
    }
    STAGE.platforms.forEach((p,i)=>{
      const platform=this.add.image(p.x+p.width/2,p.y,'bridge').setDisplaySize(p.width,42).setOrigin(.5,0).setDepth(6);
      this.rig.attach(platform,`platform-${i}`,'bottom',.5,.5,9);this.lighting.shadow(platform,.16);
    });
    const bridgeDevice=this.add.image(STAGE.consoleX,570,'device').setDisplaySize(120,112).setOrigin(.5,1).setDepth(7);
    const lightDevice=this.add.image(STAGE.lightX,570,'device').setDisplaySize(146,138).setOrigin(.5,1).setDepth(7);
    this.rig.attach(bridgeDevice,'bridge-device','bottom',.5,.85,8);this.lighting.shadow(bridgeDevice,.17);
    this.rig.attach(lightDevice,'light-device','bottom',.5,.85,8);this.lighting.shadow(lightDevice,.17);
    this.add.text(STAGE.consoleX,585,'무대 조작',{fontFamily:'WT Readable',fontSize:'19px',color:'#382c3c'}).setOrigin(.5).setDepth(8);
    this.add.text(STAGE.lightX,585,'조명 제어',{fontFamily:'WT Readable',fontSize:'19px',color:'#382c3c'}).setOrigin(.5).setDepth(8);
    for(let i=0;i<10;i++){
      const flower=this.add.image(2220+i*100,570,'flower').setDisplaySize(55+(i%2)*17,90+(i%3)*16).setOrigin(.5,1).setDepth(6).setAngle((i%3-1)*5);
      this.rig.attach(flower,`clock-flower-${i}`,'bottom',.5,.91,4);this.stageLife.plant(flower);
      this.stageLife.sway(flower,.35);this.lighting.shadow(flower,.13);
    }
    this.rig.attach(this.add.rectangle(4320,380,295,380,0x4a3c53).setDepth(3).setStrokeStyle(16,0xceab88),'door-flat','bottom',.5,.88,10);
    this.rig.attach(this.add.image(4320,260,'moon').setDisplaySize(65,65).setDepth(4),'door-moon','top',.25,.5,4);
    for(const [index,[x,flip]] of ([[4205,false],[4435,true]] as const).entries()){
      const curtain=this.add.image(x,570,'curtain').setDisplaySize(230,480).setOrigin(.5,1).setFlipX(flip).setDepth(12);
      this.curtains.push(curtain);this.rig.attach(curtain,`final-curtain-${index}`,'top',.5,.12,8);
    }
    const beam=this.add.graphics().setDepth(1);beam.fillStyle(0xffffff,.07);beam.fillTriangle(440,0,0,570,950,570);
    for(const [i,x] of [0,1120,3230,4920].entries()){
      const tree=this.add.image(x,680,'tree-plum').setOrigin(.5,1).setDisplaySize(310,450).setScrollFactor(1.18).setTint(0x625168).setAlpha(.9).setDepth(15);
      this.rig.attach(tree,`foreground-tree-${i}`,'bottom',.51,.9,8);this.stageLife.sway(tree,.12);
    }
    for(const [i,x] of [-90,1370].entries()){
      const wing=this.add.image(x,740,'paper-tree').setOrigin(.5,1).setDisplaySize(270,320).setScrollFactor(0).setFlipX(i===1).setTint(0x594653).setDepth(15);
      this.rig.attach(wing,`edge-wing-${i}`,'bottom',.5,.87,7);this.stageLife.sway(wing,.1);
    }
    this.rig.attach(this.add.image(-25,570,'curtain').setDisplaySize(165,610).setOrigin(.5,1).setDepth(15),'entrance-curtain','top',.75,.14,8);
    const frame=this.add.graphics().setScrollFactor(0).setDepth(16);
    frame.fillStyle(0x634d64,.9);frame.fillRect(0,0,1280,35);frame.fillStyle(0xd6b38c,1);frame.fillRect(0,35,1280,9);
    frame.lineStyle(2,0xf3e5ce,.55);frame.lineBetween(0,24,1280,24);
    this.add.text(640,17,'THE FORGOTTEN WITCH’S THEATER',{fontFamily:'Georgia',fontSize:'13px',letterSpacing:5,color:'#eddbc1'}).setOrigin(.5).setScrollFactor(0).setDepth(17);
  }
  start() {this.theaterSound.unlock();this.mode='explore';this.controls.clear();this.publish();}
  teleport(target:TestArea){
    if(this.mode!=='explore')return;
    const area=TEST_AREAS.find(item=>item.id===target)!;
    Object.assign(this.actor,createActor(),{x:area.x});this.respawnPoint=area.x;this.world.checkpoint=area.x;this.combat.reset();
    this.cameras.main.scrollX=Phaser.Math.Clamp(area.x-440,0,TUNING.worldWidth-1280);this.controls.clear();this.theaterSound.cue('ui');this.publish();
  }
  async prepareRespawn(){
    if(this.mode!=='gameover')return;
    Object.assign(this.actor,createActor(),{x:this.respawnPoint});this.combat.reset();this.cameras.main.scrollX=Phaser.Math.Clamp(this.actor.x-440,0,TUNING.worldWidth-1280);this.controls.clear();this.publish();
    await new Promise<void>(resolve=>requestAnimationFrame(()=>requestAnimationFrame(()=>resolve())));
  }
  finishRespawn(){if(this.mode==='gameover'){this.mode='explore';this.combat.state.invulnerable=1.5;this.controls.clear();this.publish();}}
  pause() {if(this.mode==='explore'){this.mode='pause';this.controls.clear();this.publish();}}
  resume() {if(this.mode==='pause'){this.mode='explore';this.controls.clear();this.publish();}}
  closePuzzle() {
    if(this.mode==='bridge'){
      this.dragging=false;this.world.bridge='IDLE';this.guide.setVisible(false);this.bridge.setPosition(STAGE.bridge.startX,STAGE.bridge.startY);
    }else if(this.mode==='lights' && this.world.lights!=='SOLVED')this.world.lights='CLOSED';
    else return;
    this.mode='explore';this.controls.clear();this.publish();
  }
  finishDialogue() {if(this.mode!=='dialogue')return;this.world.talked=true;this.world.visits++;this.mode='explore';this.controls.clear();this.publish();}
  checkingLights() { if(this.mode==='lights')this.world.lights='CHECKING'; }
  retryLights() { if(this.mode==='lights')this.world.lights='OPEN'; }
  solveLights() {
    if(this.mode!=='lights')return;this.world.lights='SOLVED';this.mode='explore';this.controls.clear();
    this.tweens.add({targets:this.curtains[0],x:4070,duration:1900,ease:'Sine.easeInOut'});
    this.tweens.add({targets:this.curtains[1],x:4570,duration:1900,ease:'Sine.easeInOut'});
    this.theaterSound.cue('solve');this.toast('조명이 켜지고 마지막 커튼이 열립니다.');this.publish();
  }
  toggleSound(){this.theaterSound.unlock();this.theaterSound.muted=!this.theaterSound.muted;return this.theaterSound.muted;}
  speak(speaker:Speaker,emotion:Emotion,pace:number){if(this.mode==='dialogue')this.theaterSound.blip(speaker,emotion,pace);}
  curtainSound(){this.theaterSound.cue('curtain');}
  private toast(text:string){this.message=text;this.nextMessageUntil=this.time.now+4700;}
  private nearby() {
    if(Math.abs(this.actor.x-STAGE.consoleX)<150&&this.world.bridge!=='SOLVED')return 'bridge';
    if(Math.abs(this.actor.x-STAGE.floraX)<150)return 'flora';
    if(Math.abs(this.actor.x-STAGE.lightX)<150&&this.world.lights!=='SOLVED')return 'lights';
    return '';
  }
  private interact() {
    const target=this.nearby();this.actor.vx=0;
    if(target==='bridge'){this.mode='bridge';this.world.bridge='ACTIVE';this.guide.setVisible(true);this.toast('떠 있는 다리를 점선 위치로 옮겨 주세요.');}
    if(target==='flora'){
      this.mode='dialogue';this.dialogue=this.world.lights==='SOLVED'?'lit':this.world.visits?'repeat':'first';
      this.actor.facing=this.actor.x<STAGE.floraX?1:-1;this.theaterSound.cue('paper');
    }
    if(target==='lights'){this.mode='lights';this.world.lights='OPEN';this.theaterSound.cue('paper');}
    this.controls.clear();this.publish();
  }
  update(_time:number,delta:number) {
    if(!this.controls)return;
    const input=this.controls.read(),dt=Math.min(delta/1000,.033);
    if(input.escape){
      if(this.mode==='bridge'||this.mode==='lights')this.closePuzzle();else if(this.mode==='pause')this.resume();else if(this.mode==='explore')this.pause();
    }else if(this.mode==='dialogue') {if(input.jump||input.next)this.callbacks.advance();}
    else if(this.mode==='explore') {
      if(input.interact&&this.actor.grounded)this.interact();
      if(this.mode==='explore') {
        const wasGrounded=this.actor.grounded;
        if(moveActor(this.actor,this.world,dt,input.direction,input.jump)==='rescued')this.toast('무대 아래는 아직 준비 중입니다. 안전한 자리로 돌아왔어요.');
        if(!wasGrounded&&this.actor.grounded){this.stageLife.impact(this.actor.x,this.actor.y);this.theaterSound.cue('footstep');}
        const events=updateCombat(this.combat.state,this.actor,dt,input.attack);
        for(const event of events){
          this.theaterSound.cue(event);
          if(event==='hit')this.stageLife.impact(this.actor.x+this.actor.facing*90,this.actor.y-65,4);
          if(event==='gameover'){this.mode='gameover';this.actor.vx=0;this.controls.clear();}
        }
        if(this.world.lights==='SOLVED'&&this.lightAmount>.98&&this.actor.x>STAGE.doorX&&this.actor.x<4600){this.mode='complete';this.actor.vx=0;this.theaterSound.cue('applause');}
      }
    }
    if(this.mode==='explore'){
      const target=Phaser.Math.Clamp(this.actor.x-440,0,TUNING.worldWidth-1280);
      this.cameras.main.scrollX+=(target-this.cameras.main.scrollX)*(1-Math.exp(-TUNING.cameraFollow*dt));
    }
    const t=this.time.now/1000;
    if(this.mode==='explore'){
      if(!this.distantApplausePlayed&&this.actor.x>2400){this.distantApplausePlayed=true;this.theaterSound.cue('applause');}
    }
    const walk=this.mode==='explore'&&Math.abs(this.actor.vx)>20&&this.actor.grounded;
    const tilt=!this.actor.grounded?Phaser.Math.Clamp(this.actor.vy/2700,-.16,.18):walk?Math.sin(t*14)*.08:Math.sin(t*1.8)*.018;
    const bounce=walk?Math.abs(Math.sin(t*14))*4:0;
    if(walk&&Math.abs(this.actor.x-this.footstepX)>80){this.footstepX=this.actor.x;this.stageLife.impact(this.actor.x,this.actor.y,2);this.theaterSound.cue('footstep');}
    if(!walk)this.footstepX=this.actor.x;
    const pose=this.mode==='explore'&&this.combat.state.casting>0?{texture:'witch-attack',height:198,joint:{u:.48,v:.79}}:puppetPose(this.actor.grounded,this.actor.vx,this.mode);
    if(this.puppet.texture.key!==pose.texture)this.puppet.setTexture(pose.texture);
    this.puppet.setOrigin(this.actor.facing<0?1-pose.joint.u:pose.joint.u,1).setData('rodJoint',pose.joint);
    this.puppet.setPosition(this.actor.x,this.actor.y-bounce).setFlipX(this.actor.facing<0).setRotation(tilt+(this.mode==='dialogue'?this.actor.facing*.055:0));
    const squash=this.actor.landing*.09;
    this.puppet.setScale(pose.height/this.puppet.height*(1+squash),pose.height/this.puppet.height*(1-squash));
    this.puppet.setAlpha(this.combat.state.invulnerable>0?.65+Math.sin(this.combat.state.clock*24)*.2:1);
    const greeting=Math.abs(this.actor.x-STAGE.floraX)<170?(this.actor.x<STAGE.floraX?-.018:.018):0;
    this.flora.setRotation(Math.sin(t*1.3)*.016+greeting);
    this.stageLife.update(dt,this.mode==='explore'||this.mode==='intro',this.lightAmount);
    this.combat.render();
    this.rig.update();
    if(this.world.lights==='SOLVED'&&this.mode==='explore')this.lightAmount=Math.min(1,this.lightAmount+dt*.32);
    this.lighting.update(this.actor.x,this.actor.y,this.actor.grounded,this.world.bridge==='SOLVED',this.lightAmount);
    const near=this.nearby();
    this.hint.setVisible(Boolean(near)&&this.mode==='explore').setPosition(this.actor.x,this.actor.y-212).setText(near==='flora'?'E  플로라와 대화':near==='bridge'?'E  무대 조작':'E  조명 조사');
    if(this.message&&this.time.now>this.nextMessageUntil)this.message='';
    // Read-only telemetry for browser regression tests; no debug controls or bypasses.
    this.game.canvas.dataset.theater=JSON.stringify({x:this.actor.x,y:this.actor.y,grounded:this.actor.grounded,camera:this.cameras.main.scrollX,mode:this.mode,bridge:this.world.bridge,lights:this.world.lights,visits:this.world.visits,bridgeX:this.bridge.x,bridgeY:this.bridge.y,pose:this.puppet.texture.key,lightAmount:this.lightAmount,lighting:this.lighting.snapshot(),environment:this.stageLife.snapshot(),combat:this.combat.state,audio:this.theaterSound.snapshot()});
    this.game.canvas.dataset.theaterRig=JSON.stringify(this.rig.snapshot());
    this.publish();
  }
  private publish() {
    const area=this.actor.x>4600?'소품실 · 전투':this.actor.x<1100?'숲의 입구':this.actor.x<2110?'부서진 종이 다리':this.actor.x<3280?'시계꽃 정원':'마지막 커튼';
    const view:TheaterView={mode:this.mode,area,prompt:this.nearby(),message:this.message,bridgeSolved:this.world.bridge==='SOLVED',lightsSolved:this.world.lights==='SOLVED',talked:this.world.talked,dialogue:this.dialogue,lives:this.combat.state.lives};
    const key=JSON.stringify(view);if(key!==this.lastView){this.lastView=key;this.callbacks.view(view);}
  }
}
