import type Phaser from 'phaser3';
import type {Actor} from './model';
import type {CombatState} from './combatModel';
import {DEFENSE} from './combatModel';
import type {StageRig} from './rig';
interface Portal {x:number;y:number;age:number;arrival:boolean}
export class DefenseStage {
  private shield:Phaser.GameObjects.Image;
  private magic:Phaser.GameObjects.Graphics;
  private portals:Portal[]=[];
  private reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  constructor(scene:Phaser.Scene,rig:StageRig){
    const canvas=scene.textures.createCanvas('witch-shield',256,300)!;const c=canvas.context;
    c.beginPath();c.ellipse(128,150,112,138,0,0,Math.PI*2);c.fillStyle='rgba(185,163,212,.36)';c.fill();
    c.strokeStyle='#d6b38c';c.lineWidth=9;c.stroke();c.strokeStyle='#f3e5ce';c.lineWidth=3;c.stroke();
    c.strokeStyle='rgba(243,229,206,.65)';c.lineWidth=2;c.beginPath();c.ellipse(128,150,94,120,0,0,Math.PI*2);c.stroke();
    for(let i=0;i<8;i++){const a=i*Math.PI/4;c.save();c.translate(128+Math.cos(a)*103,150+Math.sin(a)*128);c.rotate(a);c.fillStyle='#f3e5ce';c.fillRect(-5,-2,10,4);c.restore();}
    canvas.refresh();this.shield=scene.add.image(0,0,'witch-shield').setDisplaySize(184,216).setDepth(10.5).setVisible(false);
    rig.attach(this.shield,'player-shield','bottom',.5,.74,5);
    this.magic=scene.add.graphics().setDepth(11.2);
  }
  blink(from:number,to:number,y:number){this.portals=[{x:from,y:y-94,age:0,arrival:false},{x:to,y:y-94,age:0,arrival:true}];}
  clear(){this.portals=[];this.shield.setVisible(false);this.magic.clear();}
  update(actor:Actor,state:CombatState,dt:number,active:boolean){
    const flash=state.blockFlash/.22;
    this.shield.setVisible(state.shielding||flash>0).setPosition(actor.x,actor.y-102).setScale(184/256*(1+flash*.05),216/300*(1-flash*.035)).setAlpha(state.shielding?.78:flash*.7).setTint(state.shieldBroken>0?0xe7aeb6:flash>0?0xffedc1:0xffffff);
    this.magic.clear();
    for(const p of this.portals){
      if(active)p.age+=dt;const progress=p.age/.48,alpha=Math.max(0,1-progress);
      if(alpha<=0)continue;
      const width=(p.arrival?28+progress*100:90-progress*60);
      this.magic.lineStyle(this.reduced?2:3,0xf3ded3,alpha*.85).strokeEllipse(p.x,p.y,width,180*(1-progress*.3));
      this.magic.lineStyle(1.5,0xb9a3d4,alpha*.8).strokeEllipse(p.x,p.y,width+16,200);
      if(!this.reduced)for(let i=0;i<12;i++){const a=i*Math.PI/6+progress*.7,x=p.x+Math.cos(a)*(width/2+progress*24),y=p.y+Math.sin(a)*(90+progress*10);this.magic.fillStyle(i%2?0xb9a3d4:0xf3e5ce,alpha*.7).fillRect(x,y,4,7);}
    }
    this.portals=this.portals.filter(p=>p.age<.48);
  }
  snapshot(state:CombatState){return {shieldVisible:this.shield.visible,portals:this.portals.length,blinkPhase:state.blinkTime/DEFENSE.blinkDuration};}
}
