import type Phaser from 'phaser3';
import {AMBIENT_NPCS} from './ambientDialogueData';
import type {NpcId} from './castData';
import {StageRig} from './rig';
import {applyActingPose} from './actingData';
interface Resident {id:string;near:boolean;cooldown:number;elapsed:number;serial:number;text:string;visible:number;puppet:Phaser.GameObjects.Image;paper:Phaser.GameObjects.Image;label:Phaser.GameObjects.Text}
export class AmbientSpeech {
 private residents:Resident[]=[];
 private blip:(id:NpcId)=>void;
 constructor(scene:Phaser.Scene,rig:StageRig,blip:(id:NpcId)=>void){
  this.blip=blip;
  const key='ambient-speech-paper';
  if(!scene.textures.exists(key)){
   const canvas=document.createElement('canvas');canvas.width=360;canvas.height=160;const c=canvas.getContext('2d')!;
   c.fillStyle='#bb9471';c.beginPath();c.moveTo(5,7);c.lineTo(351,3);c.lineTo(357,126);c.lineTo(210,132);c.lineTo(184,155);c.lineTo(163,131);c.lineTo(3,135);c.closePath();c.fill();
   c.fillStyle='#f3e5ce';c.fillRect(10,11,337,114);c.strokeStyle='#dfc8a7';c.lineWidth=1;for(let i=0;i<200;i++){const x=(i*71)%326+14,y=(i*59)%108+14;c.beginPath();c.moveTo(x,y);c.lineTo(x+3,y+1);c.stroke();}scene.textures.addCanvas(key,canvas);
  }
  for(const d of AMBIENT_NPCS){const puppet=scene.add.image(d.x,d.y,d.npc==='flora'?'flora-puppet':`npc-${d.npc}`).setOrigin(.5,1).setDepth(9);puppet.setScale(160/puppet.height);rig.attach(puppet,'ambient-npc-'+d.id,'bottom',.5,.8,7);
   const paper=scene.add.image(d.x,d.y-280,key).setDisplaySize(330,146).setDepth(12).setVisible(false);rig.attach(paper,'speech-'+d.id,'top',.5,.08,3);
   const label=scene.add.text(d.x-140,d.y-340,'',{fontFamily:'WT Readable',fontSize:'20px',color:'#403348',wordWrap:{width:275},lineSpacing:5}).setDepth(12.1).setVisible(false);
   this.residents.push({id:d.id,near:false,cooldown:0,elapsed:0,serial:0,text:'',visible:0,puppet,paper,label});
  }
 }
 nearby(x:number){return AMBIENT_NPCS.find(d=>d.trigger==='interact'&&Math.abs(d.x-x)<d.radius);}
 interact(x:number){const d=this.nearby(x);if(!d)return false;const r=this.residents.find(r=>r.id===d.id)!;if(r.cooldown<=0)this.say(r);return true;}
 private say(r:Resident){const d=AMBIENT_NPCS.find(d=>d.id===r.id)!;r.text=d.lines[r.serial++%d.lines.length];r.elapsed=0;r.visible=0;r.cooldown=d.cooldown;}
 clear(){for(const r of this.residents){r.text='';r.visible=0;r.near=false;r.cooldown=0;r.paper.setVisible(false);r.label.setVisible(false);}}
 update(dt:number,active:boolean,x:number,visible=true){for(const r of this.residents){const d=AMBIENT_NPCS.find(d=>d.id===r.id)!,near=Math.abs(x-d.x)<d.radius;r.puppet.setVisible(visible);
   if(active){r.cooldown=Math.max(0,r.cooldown-dt);if(near&&!r.near&&d.trigger==='near'&&r.cooldown===0)this.say(r);r.near=near;if(r.text){r.elapsed+=dt;const count=Math.min(Array.from(r.text).length,Math.floor(r.elapsed*23));if(count>r.visible&&/[^\s\p{P}]/u.test(Array.from(r.text)[count-1]??''))this.blip(d.npc);r.visible=count;if(r.elapsed>d.seconds||Math.abs(x-d.x)>600)r.text='';}}
   const showing=active&&visible&&Boolean(r.text);r.paper.setVisible(showing);r.label.setVisible(showing);
   if(showing){const fade=Math.min(1,r.elapsed/.2,(d.seconds-r.elapsed)/.5);r.paper.setAlpha(fade);r.label.setAlpha(fade).setText(Array.from(r.text).slice(0,r.visible).join(''));r.puppet.setPosition(d.x,d.y);applyActingPose(r.puppet,d.npc,'talk',160,x<d.x?-1:1,r.elapsed);}
   else {const key=d.npc==='flora'?'flora-puppet':`npc-${d.npc}`;r.puppet.setTexture(key).setOrigin(.5,1).setPosition(d.x,d.y).setScale(160/r.puppet.height).setRotation(0).setData('rodJoint',{u:.5,v:.8});}
  }}
 snapshot(){return this.residents.map(r=>({id:r.id,visible:r.paper.visible,text:r.label.text,elapsed:r.elapsed,cooldown:r.cooldown,x:r.puppet.x}));}
}
