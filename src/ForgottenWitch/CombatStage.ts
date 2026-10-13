import type Phaser from 'phaser3';
import { createCombat } from './combatModel';
import type { CombatState } from './combatModel';
import type { StageRig } from './rig';
export class CombatStage {
  state:CombatState=createCombat();
  private enemies:Phaser.GameObjects.Image[]=[];
  private shots=new Map<number,Phaser.GameObjects.Image>();
  private bars:Phaser.GameObjects.Graphics;
  private scene:Phaser.Scene;
  private rig:StageRig;
  constructor(scene:Phaser.Scene,rig:StageRig){
    this.scene=scene;this.rig=rig;this.bars=scene.add.graphics().setDepth(10.6);
    for(const monster of this.state.monsters){const image=scene.add.image(monster.x,570,'clapper-idle').setOrigin(.5,1).setDepth(9);this.enemies.push(image);rig.attach(image,`monster-${monster.id}`,'bottom',.5,.84,9);}
  }
  reset(){this.state=createCombat();for(const image of this.shots.values()){this.rig.detach(image);image.destroy();}this.shots.clear();}
  render(){
    const t=this.state.clock;this.bars.clear();
    for(const monster of this.state.monsters){
      const image=this.enemies[monster.id];image.setVisible(monster.hp>0);if(monster.hp<=0)continue;
      const key=monster.phase==='windup'?'clapper-attack':monster.phase==='walk'?'clapper-walk':'clapper-idle';if(image.texture.key!==key)image.setTexture(key);
      const attack=monster.phase==='windup'?Math.sin((.55-monster.timer)/.55*Math.PI)*.13:0;
      image.setPosition(monster.x,570-(monster.phase==='walk'?Math.abs(Math.sin(t*7+monster.id))*3:0)).setFlipX(monster.facing<0).setRotation(monster.phase==='walk'?Math.sin(t*7+monster.id)*.055:monster.facing*attack).setScale(155/image.height);
      this.bars.fillStyle(0x382a40,.55).fillEllipse(monster.x,579,80,12);
      for(let i=0;i<3;i++)this.bars.fillStyle(i<monster.hp?0xbca0c6:0x5b465c,.9).fillRect(monster.x-21+i*15,387,11,5);
    }
    const alive=new Set(this.state.missiles.map(m=>m.id));
    for(const [id,image] of this.shots)if(!alive.has(id)){this.rig.detach(image);image.destroy();this.shots.delete(id);}
    for(const missile of this.state.missiles){
      let image=this.shots.get(missile.id);if(!image){image=this.scene.add.image(missile.x,missile.y,'star').setDisplaySize(42,42).setDepth(10.3).setTint(0xe6cfeb);this.rig.attach(image,`missile-${missile.id}`,'bottom',.5,.6,5);this.shots.set(missile.id,image);}
      image.setPosition(missile.x,missile.y).setAngle(Math.sin(missile.age*10)*4);
    }
  }
}
