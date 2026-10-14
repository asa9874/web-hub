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
import {PlayerMotion} from './PlayerMotion';
import { StageLighting } from './StageLighting';
import type { Emotion, Speaker } from './dialogueModel';
import {conversationLabel} from './dialogueModel';
import { CombatStage } from './CombatStage';
import { updateCombat,beginRoll,damagePlayer,COMBAT } from './combatModel';
import {monsterDefinitions,monsterFile,NPCS,monsterById,npcPuppetFile} from './castData';
import type {NpcId} from './castData';
import {SPEAKERS} from './dialogueModel';
import {createLiving,updateLiving,movementEnvironment,trapContact,hitMagicProp,reaction} from './livingModel';
import {StageCamera} from './StageCamera';
import {budgetStageTextures,FrameBudget} from './renderBudget';
import {LivingStage} from './LivingStage';
import {LIVING_TESTS} from './livingData';
import type {LivingTest} from './livingData';

export interface TheaterView {
  mode:GameMode; area:string; prompt:string; message:string;
  bridgeSolved:boolean; lightsSolved:boolean; talked:boolean; dialogue:'first'|'repeat'|'lit';
  lives:number;
  quality?:{p95Ms:number;textureMiB:number};restPhase?:string;
  reaction?:{text:string;emotion:Emotion;npc:NpcId;x:number};resting?:boolean;
  npc:NpcId;monster:string;boss:{name:string;hp:number;maxHp:number;act:number}|null;
}
export interface TheaterCallbacks {
  view:(view:TheaterView)=>void; ready:(scene:TheaterScene)=>void;
  advance:()=>void; error:(message:string)=>void;
  progress?:(value:number)=>void;
}
export class TheaterScene extends Phaser.Scene {
  readonly actor=createActor();
  readonly world:WorldState=createWorld();
  mode:GameMode='intro';
  private controls!:TheaterInput;
  private puppet!:Phaser.GameObjects.Image;
  private rig!:StageRig;
  private stageLife!:StageLife;
  private playerMotion=new PlayerMotion();
  private flora!:Phaser.GameObjects.Image;
  private bridge!:Phaser.GameObjects.Image;
  private guide!:Phaser.GameObjects.Graphics;
  private curtains:Phaser.GameObjects.Image[]=[];
  private lighting!:StageLighting;
  private combat!:CombatStage;
  private respawnPoint=200;
  private npc:NpcId='flora';
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
  private motionLocked=false;
  private softLockUntil=0;
  private disposed=false;
  private living=createLiving();
  private livingStage!:LivingStage;
  private restRemaining=0;
  private hitStop=0;
  private cameraRig=new StageCamera();
  private frameBudget=new FrameBudget();
  private textureBudget={count:0,beforePixels:0,afterPixels:0};
  private queued={jump:false,attack:false,roll:false};
  constructor(callbacks:TheaterCallbacks) { super('theater');this.callbacks=callbacks; }
  preload() {
    this.load.on('progress',(value:number)=>this.callbacks.progress?.(value));
    this.load.on('loaderror',(file:Phaser.Loader.File)=>this.loadErrors.push(file.key));
    for(const name of ['witch-puppet','witch-walk','witch-walk-alt','witch-jump','witch-fall','flora-puppet','paper-tree']) this.load.image(name,assetUrl(name+(name.startsWith('flora')?'-clean':'')+'.png'));
    for(const name of ['title-arch','witch-idle-hat','witch-idle-wand','witch-walk-pass','witch-apex','witch-land'])this.load.image(name,assetUrl(name+'.png'));
    for(const name of ['witch-attack','clapper-idle','clapper-walk','clapper-attack','game-over'])this.load.image(name,assetUrl(name+'.png'));
    this.load.image('witch-roll',assetUrl('witch-roll-clean.png'));
    for(const m of monsterDefinitions)if(m.id!=='clapper')this.load.image(`monster-${m.id}`,assetUrl(monsterFile(m.id)));
    for(const n of NPCS)this.load.image(`npc-${n.id}`,assetUrl(npcPuppetFile(n.id)));
  }
  create() {
    if(this.loadErrors.length){this.callbacks.error('에셋을 불러오지 못했습니다: '+this.loadErrors.join(', '));return;}
    this.textureBudget=budgetStageTextures(this);
    createPaperTextures(this);
    this.cameras.main.setBackgroundColor('#F3E5CE');
    this.cameras.main.setBounds(0,-32,TUNING.worldWidth,TUNING.height+32);
    this.add.tileSprite(0,0,1280,720,'paper').setOrigin(0).setScrollFactor(0).setTint(0x777187);
    this.rig=new StageRig(this);
    this.stageLife=new StageLife(this);
    this.lighting=new StageLighting(this);
    this.drawSet();
    this.livingStage=new LivingStage(this,this.rig);
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
      const x=pointer.x+this.cameras.main.scrollX,y=pointer.y+this.cameras.main.scrollY;
      if(Math.abs(x-this.bridge.x)<255 && y>this.bridge.y-22 && y<this.bridge.y+80){
        this.dragging=true;this.world.bridge='DRAGGING';this.dragOffset={x:x-this.bridge.x,y:y-this.bridge.y};this.theaterSound.cue('paper');
      }
    };
    const move=(pointer:Phaser.Input.Pointer)=>{
      if(!this.dragging||this.mode!=='bridge')return;
      this.bridge.x=Phaser.Math.Clamp(pointer.x+this.cameras.main.scrollX-this.dragOffset.x,STAGE.gap.left-320,STAGE.gap.right+240);
      this.bridge.y=Phaser.Math.Clamp(pointer.y+this.cameras.main.scrollY-this.dragOffset.y,250,625);
      if(bridgeCanSnap(this.bridge.x,this.bridge.y)){this.bridge.setPosition(STAGE.bridge.targetX,STAGE.bridge.targetY);this.guide.setAlpha(1);this.bridge.setTint(0xffedbf);}else {this.guide.setAlpha(.55);this.bridge.clearTint();}
    };
    const up=()=>{
      if(!this.dragging)return;this.dragging=false;this.bridge.clearTint();
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
      this.game.events.off(Phaser.Core.Events.BLUR,blur);this.disposeAudio();
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
    for(let i=0;i<7;i++){const cloud=this.add.image(580+i*700,125+i%2*65,'cloud').setDisplaySize(210+i%3*35,95).setScrollFactor(.16).setDepth(.9).setTint(0xb6abbc).setAlpha(.6);this.rig.attach(cloud,`hanging-cloud-${i}`,'top',.5,.25,5);this.stageLife.sway(cloud,.22);}
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
    this.rig.attach(this.add.image(4320,380,'door-flat').setDepth(3),'door-flat','bottom',.5,.88,10);
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
    this.add.image(0,0,'stage-frame').setOrigin(0).setScrollFactor(0).setDepth(16);
    this.add.text(640,17,'THE FORGOTTEN WITCH’S THEATER',{fontFamily:'Georgia',fontSize:'13px',letterSpacing:5,color:'#eddbc1'}).setOrigin(.5).setScrollFactor(0).setDepth(17);
  }
  prepareAudio(progress?:(value:number)=>void){return this.theaterSound.prepare(progress);}
  disposeAudio(){this.disposed=true;this.theaterSound.destroy();}
  unlockAudio(){return this.theaterSound.unlock();}
  motionLock(value:boolean){this.motionLocked=value;this.controls?.clear();}
  async start() {await this.theaterSound.unlock();if(this.disposed)return;this.mode='explore';this.controls.clear();this.publish();}
  teleport(target:TestArea){
    if(this.mode!=='explore'&&this.mode!=='testing')return;
    this.mode='explore';
    const area=TEST_AREAS.find(item=>item.id===target)!;
    Object.assign(this.actor,createActor(),{x:area.x});this.respawnPoint=area.x;this.world.checkpoint=area.x;this.world.restPoint=undefined;this.living.checkpoint=null;this.living.reaction=null;this.living.nearNpc=false;this.living.npcCooldown=0;this.living.idle=0;this.living.gesture='none';this.restRemaining=0;this.combat.reset();this.playerMotion.reset();this.cameraRig.reset();this.hitStop=0;this.queued={jump:false,attack:false,roll:false};this.stageLife.clearMotion();
    this.cameras.main.scrollY=0;this.cameras.main.scrollX=Phaser.Math.Clamp(area.x-440,0,TUNING.worldWidth-1280);this.controls.clear();this.theaterSound.cue('ui');this.publish();
  }
  testLiving(id:LivingTest){
    if(this.mode!=='testing')return;const test=LIVING_TESTS.find(t=>t.id===id)!;this.teleport('entrance');
    this.actor.x=test.x;this.respawnPoint=test.x;this.world.checkpoint=test.x;this.living.idle=0;this.living.gesture='none';this.living.nearNpc=false;
    if(id==='wind'){this.living.windOn=true;this.living.windDirection=1;}
    if(id==='traps'){this.living.teeth='idle';this.living.trapTimer=0;}
    this.cameras.main.scrollY=0;this.cameras.main.scrollX=Phaser.Math.Clamp(test.x-440,0,TUNING.worldWidth-1280);this.toast(test.help);this.publish();
  }
  testMenu(open:boolean){if(open&&this.mode==='explore')this.mode='testing';else if(!open&&this.mode==='testing'){this.mode='explore';this.softLockUntil=this.time.now+180;}this.controls.clear();this.publish();}
  testMonster(id:string){if(this.mode!=='testing')return;this.teleport('combat');this.combat.reset(id);this.publish();}
  testNpc(id:NpcId){if(this.mode!=='testing')return;this.npc=id;this.flora.setTexture(id==='flora'?'flora-puppet':`npc-${id}`).setScale(190/this.flora.height);this.teleport('dialogue');this.actor.x=STAGE.floraX-100;this.actor.facing=1;this.publish();}
  async prepareRespawn(){
    if(this.mode!=='gameover')return;
    Object.assign(this.actor,createActor(),{x:this.respawnPoint});this.combat.reset();this.playerMotion.reset();this.cameraRig.reset();this.hitStop=0;this.queued={jump:false,attack:false,roll:false};this.stageLife.clearMotion();this.cameras.main.scrollY=0;this.cameras.main.scrollX=Phaser.Math.Clamp(this.actor.x-440,0,TUNING.worldWidth-1280);this.controls.clear();this.publish();
    await new Promise<void>(resolve=>requestAnimationFrame(()=>requestAnimationFrame(()=>resolve())));
  }
  finishRespawn(){if(this.mode==='gameover'){this.mode='explore';this.hitStop=0;this.queued={jump:false,attack:false,roll:false};this.combat.state.invulnerable=1.5;this.controls.clear();this.publish();}}
  pause() {if(this.mode==='explore'){this.mode='pause';this.controls.clear();this.publish();}}
  resume() {if(this.mode==='pause'){this.mode='explore';this.softLockUntil=this.time.now+180;this.controls.clear();this.publish();}}
  closePuzzle() {
    if(this.mode==='bridge'){
      this.dragging=false;this.world.bridge='IDLE';this.guide.setVisible(false);this.bridge.setPosition(STAGE.bridge.startX,STAGE.bridge.startY);
    }else if(this.mode==='lights' && this.world.lights!=='SOLVED')this.world.lights='CLOSED';
    else return;
    this.mode='explore';this.softLockUntil=this.time.now+180;this.controls.clear();this.publish();
  }
  finishDialogue() {if(this.mode!=='dialogue')return;if(this.npc==='flora'){this.world.talked=true;this.world.visits++;}this.mode='explore';this.softLockUntil=this.time.now+180;this.controls.clear();this.publish();}
  checkingLights() { if(this.mode==='lights')this.world.lights='CHECKING'; }
  retryLights() { if(this.mode==='lights')this.world.lights='OPEN'; }
  solveLights() {
    if(this.mode!=='lights')return;this.world.lights='SOLVED';this.mode='explore';this.softLockUntil=this.time.now+180;this.controls.clear();
    this.tweens.add({targets:this.curtains[0],x:4070,duration:1900,ease:'Sine.easeInOut'});
    this.tweens.add({targets:this.curtains[1],x:4570,duration:1900,ease:'Sine.easeInOut'});
    this.theaterSound.cue('solve');this.toast('조명이 켜지고 마지막 커튼이 열립니다.');this.publish();
  }
  toggleSound(){this.theaterSound.unlock();this.theaterSound.muted=!this.theaterSound.muted;return this.theaterSound.muted;}
  speak(speaker:Speaker,emotion:Emotion,pace:number){if(this.mode==='dialogue')this.theaterSound.blip(speaker,emotion,pace);}
  paperSound(){this.theaterSound.cue('paper');}
  curtainSound(){this.theaterSound.cue('curtain');}
  private toast(text:string){this.message=text;this.nextMessageUntil=this.time.now+4700;}
  private nearby() {
    if(Math.abs(this.actor.x-2180)<90||Math.abs(this.actor.x-8960)<120)return 'rest';
    if(this.actor.x>7780&&this.actor.x<8240)return 'wind';
    if(this.actor.x>9920&&this.actor.x<10180&&!this.living.secretOpen)return 'secret';
    if(Math.abs(this.actor.x-STAGE.consoleX)<150&&this.world.bridge!=='SOLVED')return 'bridge';
    if(Math.abs(this.actor.x-STAGE.floraX)<150)return 'flora';
    if(Math.abs(this.actor.x-STAGE.lightX)<150&&this.world.lights!=='SOLVED')return 'lights';
    return '';
  }
  private interact() {
    const target=this.nearby();this.actor.vx=0;
    if(target==='rest'){this.living.checkpoint=this.actor.x;this.living.rests++;this.respawnPoint=this.actor.x;this.world.checkpoint=this.actor.x;this.world.restPoint=this.actor.x;this.combat.state.lives=3;this.restRemaining=1.2;this.theaterSound.cue('solve');this.toast('분장대에서 숨을 고릅니다. 여기가 새 재등장 위치입니다.');}
    if(target==='wind'){this.living.windDirection*=-1;this.theaterSound.cue('paper');this.toast('바람의 방향이 바뀌었습니다.');}
    if(target==='secret'){this.living.secretOpen=true;this.theaterSound.cue('paper');this.toast('커튼 뒤에 다른 무대가 있습니다.');}
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
    if(this.mode==='explore'&&!this.motionLocked)this.frameBudget.record(delta);
    const input=this.controls.read(),dt=Math.min(delta/1000,.033);
    const stopped=this.mode==='explore'&&this.hitStop>0;
    if(stopped&&!this.motionLocked){this.hitStop=Math.max(0,this.hitStop-dt);for(const key of ['jump','attack','roll'] as const)this.queued[key] ||= input[key];}
    else if(this.mode==='explore'){for(const key of ['jump','attack','roll'] as const){input[key] ||= this.queued[key];this.queued[key]=false;}}
    else this.queued={jump:false,attack:false,roll:false};
    if(this.mode==='explore'&&!this.motionLocked&&!stopped)this.restRemaining=Math.max(0,this.restRemaining-dt);
    const locked=this.motionLocked||this.time.now<this.softLockUntil||this.restRemaining>0;
    if(!locked){
    if(input.escape){
      if(this.mode==='bridge'||this.mode==='lights')this.closePuzzle();else if(this.mode==='testing')this.testMenu(false);else if(this.mode==='pause')this.resume();else if(this.mode==='explore')this.pause();
    }else if(this.mode==='dialogue') {if(input.jump||input.next)this.callbacks.advance();}
    else if(this.mode==='explore'&&!stopped) {
      if(input.interact&&this.actor.grounded)this.interact();
      if(this.mode==='explore') {
        if(input.jump||input.roll||input.attack||input.interact){this.living.idle=0;this.living.gesture='none';}
        const previousReaction=this.living.reaction?.kind;
        updateLiving(this.living,this.actor,dt,STAGE.floraX,SPEAKERS[this.npc].name,this.actor.x>5050&&this.actor.x<6100&&this.combat.state.monsters.some(m=>m.hp>0));
        if(this.living.reaction&&this.living.reaction.kind!==previousReaction)this.theaterSound.blip(this.npc,this.living.reaction.emotion,1);
        if(this.living.gesture==='glance')this.actor.facing=this.actor.x<STAGE.floraX?1:-1;
        const before={...this.actor};
        if(input.roll&&beginRoll(this.combat.state,this.actor))this.theaterSound.cue('paper');
        const rolling=this.combat.state.rolling>0;
        const rescued=moveActor(this.actor,this.world,dt,rolling?this.combat.state.rollFacing:input.direction,!rolling&&input.jump,rolling,movementEnvironment(this.living,this.actor),input.jumpHeld)==='rescued';
        if(rescued){this.toast('무대 아래는 아직 준비 중입니다. 안전한 자리로 돌아왔어요.');this.playerMotion.reset();this.cameraRig.reset();this.hitStop=0;this.queued={jump:false,attack:false,roll:false};this.stageLife.clearMotion();}
        else for(const beat of this.playerMotion.update(this.actor,before,dt,input.direction,rolling)){
          this.stageLife.motion(beat.kind,beat.x,beat.y,beat.direction,beat.strength);
          if(beat.kind==='jump'&&Math.abs(this.actor.x-STAGE.floraX)<230)reaction(this.living,'jump',SPEAKERS[this.npc].name);
          if(beat.kind==='step'||beat.kind==='land')this.theaterSound.cue('footstep');
        }
        const events=updateCombat(this.combat.state,this.actor,dt,input.attack);
        for(const missile of this.combat.state.missiles){const hit=hitMagicProp(this.living,missile.x,missile.y);if(hit){missile.age=COMBAT.missileLifetime;this.theaterSound.cue(hit==='bell'?'solve':'paper');this.toast(hit==='bell'?'종이 종이 울립니다.':hit==='mill'?'풍차가 움직이며 바람 장치가 전환됩니다.':'등불의 빛이 바뀝니다.');}}
        this.combat.state.missiles=this.combat.state.missiles.filter(m=>m.age<COMBAT.missileLifetime);
        if(trapContact(this.living,this.actor)){const event=damagePlayer(this.combat.state);if(event)events.push(event);}
        if(this.living.secretOpen&&!this.living.discovered&&this.actor.x>10290){this.living.discovered=true;this.theaterSound.cue('solve');this.toast('접힌 대본 한 장을 발견했습니다. 커튼 뒤의 기록이 펼쳐집니다.');}
        for(const event of events){
          if(event==='warning'){this.theaterSound.cue('paper');continue;}
          this.theaterSound.cue(event);
          if(event==='cast'&&Math.abs(this.actor.x-STAGE.floraX)<230)reaction(this.living,'magic',SPEAKERS[this.npc].name);
          if(event==='cast')this.stageLife.motion('cast',this.actor.x+this.actor.facing*52,this.actor.y-65,this.actor.facing);
          if(event==='hit')for(const mark of this.combat.state.impacts){this.stageLife.motion('hit',mark.x,mark.y,mark.direction,mark.blocked?.4:1);if(!mark.blocked)this.hitStop=TUNING.hitStop;}
          if(event==='hurt'&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches)this.cameras.main.shake(90,.0015);
          if(event==='gameover'){this.mode='gameover';this.actor.vx=0;this.controls.clear();}
        }
        if(this.world.lights==='SOLVED'&&this.lightAmount>.98&&this.actor.x>STAGE.doorX&&this.actor.x<4600){this.mode='complete';this.actor.vx=0;this.theaterSound.cue('applause');}
      }
    }
    }
    if(this.mode==='explore'&&!locked&&!stopped){
      const point=this.cameraRig.follow(this.actor,this.cameras.main.scrollX,this.cameras.main.scrollY,dt);
      this.cameras.main.setScroll(point.x,point.y);
    }
    const t=this.playerMotion.clock;
    if(this.mode==='explore'){
      if(!this.distantApplausePlayed&&this.actor.x>2400){this.distantApplausePlayed=true;this.theaterSound.cue('applause');}
    }
    if(this.mode!=='pause'&&this.mode!=='testing'&&!stopped&&(!locked||this.restRemaining>0)){
    const walk=this.mode==='explore'&&Math.abs(this.actor.vx)>20&&this.actor.grounded;
    const shape=this.playerMotion.shape(this.actor,walk);
    const tilt=this.playerMotion.lean+(this.living.gesture==='glance'?this.actor.facing*.035:0)+(walk?0:Math.sin(this.playerMotion.clock*1.8)*.012);
    const bounce=shape.bounce;
    const rolling=this.mode==='explore'&&this.combat.state.rolling>0;
    const gesture=this.mode==='explore'&&this.actor.grounded&&Math.abs(this.actor.vx)<8?this.living.gesture:'none';
    const pose=this.restRemaining>0?{texture:'witch-idle-wand',height:198,joint:{u:.53,v:.79}}:gesture==='hat'||gesture==='wand'?{texture:gesture==='hat'?'witch-idle-hat':'witch-idle-wand',height:198,joint:{u:.53,v:.79}}:rolling?{texture:'witch-roll',height:120,joint:{u:.5,v:.5}}:this.mode==='explore'&&this.combat.state.casting>0?{texture:'witch-attack',height:198,joint:{u:.48,v:.79}}:puppetPose(this.actor.grounded,this.actor.vx,this.mode,this.playerMotion.stride,this.actor.vy,this.actor.landing,this.playerMotion.recovery);
    if(this.puppet.texture.key!==pose.texture)this.puppet.setTexture(pose.texture);
    this.puppet.setOrigin(this.actor.facing<0?1-pose.joint.u:pose.joint.u,rolling?.5:1).setData('rodJoint',pose.joint);
    this.puppet.setPosition(this.actor.x,this.actor.y-(rolling?88:bounce)).setFlipX(this.actor.facing<0).setRotation(rolling?this.actor.facing*(1-this.combat.state.rolling/COMBAT.rollDuration)*Math.PI*2:tilt+(this.mode==='dialogue'?this.actor.facing*.055:0)+(this.combat.state.casting>0?-Math.sin(Math.PI*this.combat.state.casting/.3)*.095*this.actor.facing:0));
    this.puppet.setScale(pose.height/this.puppet.height*shape.x,pose.height/this.puppet.height*shape.y);
    this.puppet.setAlpha(this.combat.state.invulnerable>0?.65+Math.sin(this.combat.state.clock*24)*.2:1);
    }
    const greeting=Math.abs(this.actor.x-STAGE.floraX)<170?(this.actor.x<STAGE.floraX?-.018:.018):0;
    this.flora.setFlipX(this.actor.x>STAGE.floraX).setRotation(Math.sin(t*1.3)*.016+greeting+(this.living.reaction?.kind==='magic'?Math.sin(t*12)*.05:0));
    this.livingStage.update(this.living,this.actor,dt,!locked&&!stopped&&this.mode==='explore');
    this.stageLife.update(dt,!locked&&!stopped&&(this.mode==='explore'||this.mode==='intro'),this.lightAmount);
    this.combat.render();
    this.rig.update();
    if(this.world.lights==='SOLVED'&&this.mode==='explore'&&!locked&&!stopped)this.lightAmount=Math.min(1,this.lightAmount+dt*.32);
    this.lighting.update(this.actor.x,this.actor.y,this.actor.grounded,this.world.bridge==='SOLVED',this.lightAmount,this.living.platforms);
    const near=this.nearby();
    this.hint.setVisible(Boolean(near)&&this.mode==='explore').setPosition(this.actor.x,this.actor.y-212).setText(near==='flora'?`E  ${conversationLabel(this.npc)}`:near==='bridge'?'E  무대 조작':near==='rest'?'E  쉬기 · 체크포인트':near==='wind'?'E  바람 방향':near==='secret'?'E  커튼 틈 조사':'E  조명 조사');
    if(this.message&&this.time.now>this.nextMessageUntil)this.message='';
    // Read-only telemetry for browser regression tests; no debug controls or bypasses.
    this.game.canvas.dataset.theater=JSON.stringify({x:this.actor.x,y:this.actor.y,vx:this.actor.vx,vy:this.actor.vy,movement:this.playerMotion.snapshot(),living:this.living,livingStage:this.livingStage.snapshot(),grounded:this.actor.grounded,camera:this.cameras.main.scrollX,cameraY:this.cameras.main.scrollY,quality:{hitStop:this.hitStop,lead:this.cameraRig.lead,textures:this.textureBudget,frames:this.frameBudget.snapshot()},mode:this.mode,motionLocked:this.motionLocked||this.time.now<this.softLockUntil||this.restRemaining>0,bridge:this.world.bridge,lights:this.world.lights,visits:this.world.visits,bridgeX:this.bridge.x,bridgeY:this.bridge.y,pose:this.puppet.texture.key,lightAmount:this.lightAmount,lighting:this.lighting.snapshot(),environment:this.stageLife.snapshot(),combat:this.combat.state,audio:this.theaterSound.snapshot()});
    this.game.canvas.dataset.theaterRig=JSON.stringify(this.rig.snapshot());
    this.publish();
  }
  private publish() {
    const area=this.actor.x>6400?'무대 실험실':this.actor.x>4600?'소품실 · 전투':this.actor.x<1100?'숲의 입구':this.actor.x<2110?'부서진 종이 다리':this.actor.x<3280?'시계꽃 정원':'마지막 커튼';
    const boss=this.actor.x>4600&&this.actor.x<6400?this.combat.state.monsters.find(m=>monsterById(m.kind).pattern==='boss'):undefined;
    const view:TheaterView={mode:this.mode,area,resting:this.restRemaining>0,restPhase:this.restRemaining>.8?'숨 고르기':this.restRemaining>.4?'라이프 회복':'위치 기록 완료',quality:this.mode==='testing'?{p95Ms:Math.round(this.frameBudget.snapshot().p95Ms*10)/10,textureMiB:Math.round(this.textureBudget.afterPixels*4/1048576)}:undefined,reaction:this.mode==='explore'&&Math.abs(this.actor.x-STAGE.floraX)<320&&this.living.reaction?{text:this.living.reaction.text,emotion:this.living.reaction.emotion,npc:this.npc,x:Math.max(100,Math.min(900,Math.round((STAGE.floraX-this.cameras.main.scrollX)/4)*4-155))}:undefined,prompt:this.nearby(),message:this.message,bridgeSolved:this.world.bridge==='SOLVED',lightsSolved:this.world.lights==='SOLVED',talked:this.world.talked,dialogue:this.dialogue,lives:this.combat.state.lives,npc:this.npc,monster:this.combat.state.selection,boss:boss?{name:monsterById(boss.kind).name,hp:boss.hp,maxHp:boss.maxHp,act:boss.hp<boss.maxHp/2?2:1}:null};
    const key=JSON.stringify(view);if(key!==this.lastView){this.lastView=key;this.callbacks.view(view);}
  }
}
