import type Phaser from 'phaser3';
import {createCombat} from './combatModel';
import type {CombatState} from './combatModel';
import {monsterById} from './castData';
import type {StageRig} from './rig';
export class CombatStage {
  state:CombatState=createCombat();
  private enemies:Phaser.GameObjects.Image[]=[];
  private tells:Phaser.GameObjects.Text[]=[];
  private shots=new Map<string,Phaser.GameObjects.Image>();
  private bars:Phaser.GameObjects.Graphics;
  private scene:Phaser.Scene;
  private rig:StageRig;
  constructor(scene:Phaser.Scene,rig:StageRig){this.scene=scene;this.rig=rig;this.bars=scene.add.graphics().setDepth(10.6);this.reset();}
  reset(selection=this.state.selection){
    this.state=createCombat(selection);
    for(const image of [...this.enemies,...this.shots.values()]){this.rig.detach(image);image.destroy();}this.shots.clear();this.enemies=[];for(const text of this.tells)text.destroy();this.tells=[];
    for(const monster of this.state.monsters){const image=this.scene.add.image(monster.x,570,monster.kind==='clapper'?'clapper-idle':`monster-${monster.kind}`).setOrigin(.5,1).setDepth(9);this.enemies.push(image);this.tells.push(this.scene.add.text(monster.x,350,'',{fontFamily:'WT Readable',fontSize:'18px',color:'#fff0d4',backgroundColor:'#594051',padding:{x:8,y:5}}).setOrigin(.5).setDepth(12));this.rig.attach(image,`monster-${monster.id}`,'bottom',.5,.84,9);}
  }
  render(){
    const t=this.state.clock;this.bars.clear();
    for(const monster of this.state.monsters){
      const image=this.enemies[monster.id],d=monsterById(monster.kind);image.setVisible(monster.hp>0||monster.deathAge<.55);this.tells[monster.id].setVisible(monster.hp>0&&monster.phase==='windup');if(monster.hp<=0){const fold=Math.min(1,monster.deathAge/.55);image.setDepth(5.7).setPosition(monster.x,monster.y+fold*180).setRotation(monster.facing*fold*.8).setScale(d.height/image.height*(1-fold*.65),d.height/image.height*(1-fold*.8));continue;}image.setDepth(9).setTint(monster.stagger>0?0xffedc1:0xffffff);
      const key=monster.kind==='clapper'?(monster.phase==='windup'?'clapper-attack':monster.phase==='walk'?'clapper-walk':'clapper-idle'):`monster-${monster.kind}`;
      if(image.texture.key!==key)image.setTexture(key);
      const winding=monster.phase==='windup',walk=monster.phase==='walk';
      image.setPosition(monster.x,monster.y-(walk?Math.abs(Math.sin(t*7+monster.id))*3:0)).setFlipX(monster.facing<0).setRotation(walk?Math.sin(t*7+monster.id)*.055:monster.facing*(winding?-.13:monster.phase==='active'?.18:0)).setScale(d.height/image.height*(winding?1.06:1),d.height/image.height*(winding?.94:1));
      this.bars.fillStyle(0x382a40,.55).fillEllipse(monster.x,579,d.height*.55,12);
      if(d.pattern!=='boss')for(let i=0;i<d.hp;i++)this.bars.fillStyle(i<monster.hp?0xbca0c6:0x5b465c,.9).fillRect(monster.x-d.hp*7+i*14,monster.y-d.height-17,10,5);
      this.tells[monster.id].setPosition(monster.x,monster.y-d.height-64).setText(monster.action==='charge'?(monster.facing<0?'← 돌진 준비':'돌진 준비 →'):monster.action==='hop'?'도약 준비':monster.action==='fan'?'부채꼴 마법':monster.action==='wave'?'바닥 파동':monster.action==='guard'?'방패 · 박수 준비':monster.action==='clap'?'박수 준비':'조준 준비');
      if(winding){const progress=1-Math.max(0,monster.timer)/d.windup;this.bars.fillStyle(0xe7aeb6,.85).fillRect(monster.x-40,monster.y-d.height-26,80*progress,4);this.bars.lineStyle(2,0xe7aeb6,.85).strokeEllipse(monster.x,576,monster.action==='charge'?200:110,18);this.bars.fillStyle(0xf3e5ce,.85).fillTriangle(monster.x-6,monster.y-d.height-35,monster.x+6,monster.y-d.height-35,monster.x,monster.y-d.height-22);}
    }
    const all=[...this.state.missiles.map(m=>({id:`p-${m.id}`,x:m.x,y:m.y,age:m.age,enemy:false,wave:false})),...this.state.hazards.map(h=>({id:`h-${h.id}`,x:h.x,y:h.y,age:h.age,enemy:true,wave:h.wave}))];
    const alive=new Set(all.map(m=>m.id));
    for(const [id,image] of this.shots)if(!alive.has(id)){this.rig.detach(image);image.destroy();this.shots.delete(id);}
    for(const missile of all){let image=this.shots.get(missile.id);if(!image){image=this.scene.add.image(missile.x,missile.y,missile.wave?'moon':'star').setDisplaySize(missile.wave?64:42,missile.wave?28:42).setDepth(10.3).setTint(missile.enemy?0xe7aeb6:0xe6cfeb);this.rig.attach(image,`missile-${missile.id}`,'bottom',.5,.6,5);this.shots.set(missile.id,image);}image.setPosition(missile.x,missile.y+Math.sin(missile.age*13)*1.5).setAngle(Math.sin(missile.age*10)*4);}
  }
}
