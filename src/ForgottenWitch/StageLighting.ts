import type Phaser from 'phaser3';
import {surfaceHeight} from './livingModel';
import type {MovingSurface} from './livingModel';
import { STAGE, TUNING } from './config';

interface Shadow {owner:Phaser.GameObjects.Image;image:Phaser.GameObjects.Image}
interface Glow {owner:Phaser.GameObjects.Image;image:Phaser.GameObjects.Image;strength:number}
// Soft painted light, not bloom. All textures are local and shared by the scene.
export class StageLighting {
  private shadows:Shadow[]=[];
  private glows:Glow[]=[];
  private spotlight:Phaser.GameObjects.Image;
  private contact:Phaser.GameObjects.Image;
  private lamps:Phaser.GameObjects.Image[]=[];
  private shade:Phaser.GameObjects.Rectangle;
  private scene:Phaser.Scene;
  constructor(scene:Phaser.Scene) {
    this.scene=scene;
    const texture=(key:string,w:number,h:number,draw:(c:CanvasRenderingContext2D)=>void)=>{
      if(scene.textures.exists(key))return;
      const canvas=scene.textures.createCanvas(key,w,h)!;draw(canvas.context);canvas.refresh();
    };
    texture('wt-soft-light',512,512,c=>{
      const g=c.createRadialGradient(256,256,8,256,256,256);
      g.addColorStop(0,'rgba(255,232,190,.34)');g.addColorStop(.35,'rgba(255,229,185,.18)');g.addColorStop(1,'rgba(255,229,185,0)');
      c.fillStyle=g;c.fillRect(0,0,512,512);
    });
    texture('wt-contact-shadow',256,80,c=>{
      c.scale(1,.3125);const g=c.createRadialGradient(128,128,5,128,128,128);
      g.addColorStop(0,'rgba(34,25,42,.38)');g.addColorStop(.45,'rgba(34,25,42,.20)');g.addColorStop(1,'rgba(34,25,42,0)');c.fillStyle=g;c.fillRect(0,0,256,256);
    });
    texture('wt-stage-beam',512,720,c=>{
      c.save();c.beginPath();c.moveTo(228,0);c.lineTo(284,0);c.lineTo(512,720);c.lineTo(0,720);c.closePath();c.clip();
      const g=c.createLinearGradient(0,0,0,720);g.addColorStop(0,'rgba(255,230,183,.16)');g.addColorStop(.65,'rgba(255,230,183,.08)');g.addColorStop(1,'rgba(255,230,183,0)');c.fillStyle=g;c.fillRect(0,0,512,720);c.restore();
      c.globalCompositeOperation='destination-in';const edge=c.createLinearGradient(0,0,512,0);edge.addColorStop(0,'transparent');edge.addColorStop(.35,'white');edge.addColorStop(.65,'white');edge.addColorStop(1,'transparent');c.fillStyle=edge;c.fillRect(0,0,512,720);c.globalCompositeOperation='source-over';
    });
    texture('wt-vignette',1280,720,c=>{
      const g=c.createRadialGradient(640,350,220,640,350,750);g.addColorStop(0,'rgba(29,21,38,0)');g.addColorStop(.6,'rgba(29,21,38,.04)');g.addColorStop(1,'rgba(29,21,38,.38)');c.fillStyle=g;c.fillRect(0,0,1280,720);
    });
    this.shade=scene.add.rectangle(0,0,1280,720,0x241d32,.12).setOrigin(0).setScrollFactor(0).setDepth(4.3);
    this.spotlight=scene.add.image(0,0,'wt-soft-light').setDisplaySize(430,540).setDepth(9.7).setAlpha(.7);
    this.contact=scene.add.image(0,0,'wt-contact-shadow').setDepth(6.3).setDisplaySize(86,24);
    for(const x of [3600,2300,600,4300])this.lamps.push(scene.add.image(x,44,'wt-stage-beam').setOrigin(.5,0).setDepth(11).setAlpha(0));
    scene.add.image(640,360,'wt-vignette').setScrollFactor(0).setDepth(13.5);
  }
  shadow(owner:Phaser.GameObjects.Image,strength=.16) {
    const image=this.scene.add.image(owner.x+9,owner.y+7,owner.texture.key).setTint(0x201829).setAlpha(strength).setDepth(owner.depth-.2);
    image.setData('shadowStrength',strength);this.shadows.push({owner,image});
  }
  glow(owner:Phaser.GameObjects.Image,strength=.5) {
    const image=this.scene.add.image(owner.x,owner.y,'wt-soft-light').setDepth(owner.depth-.05);
    this.glows.push({owner,image,strength});
  }
  update(x:number,y:number,grounded:boolean,bridgeSolved:boolean,amount:number,surfaces:readonly MovingSurface[]=[]) {
    this.spotlight.setPosition(x,y-95).setAlpha(.64+amount*.17);
    const platform=STAGE.platforms.find(p=>x>=p.x&&x<=p.x+p.width&&y<=p.y+2);
    const moving=surfaces.filter(p=>x>=p.x&&x<=p.x+p.width&&y<=surfaceHeight(p,x)+3).sort((a,b)=>surfaceHeight(a,x)-surfaceHeight(b,x))[0];
    const floor=moving?surfaceHeight(moving,x):platform?.y??TUNING.floor;
    const onSurface=Boolean(platform)||Boolean(moving)||x<STAGE.gap.left||x>STAGE.gap.right||bridgeSolved;
    const height=Math.max(0,floor-y),scale=Math.max(.35,1-height/330);
    this.contact.setPosition(x,floor+8).setScale(86/256*scale,24/80*scale).setAlpha(onSurface?(grounded?.95:Math.max(.15,.7-height/400)):0);
    this.shade.setAlpha(.12*(1-amount*.55));
    this.lamps.forEach((lamp,i)=>lamp.setAlpha(Math.max(0,Math.min(1,(amount-i*.13)/.45))));
    for(const {owner,image} of this.shadows){
      if(image.texture.key!==owner.texture.key||image.frame.name!==owner.frame.name)image.setTexture(owner.texture.key,owner.frame.name);
      image.setOrigin(owner.originX,owner.originY).setPosition(owner.x+9,owner.y+7).setScale(owner.scaleX,owner.scaleY).setRotation(owner.rotation).setFlip(owner.flipX,owner.flipY).setScrollFactor(owner.scrollFactorX,owner.scrollFactorY).setDepth(owner.depth-.2).setVisible(owner.visible).setAlpha(owner.alpha*Number(image.getData('shadowStrength')));
    }
    for(const {owner,image,strength} of this.glows){
      const point=owner.getCenter();image.setPosition(point.x,point.y).setScrollFactor(owner.scrollFactorX,owner.scrollFactorY).setDisplaySize(owner.displayWidth*2.4,owner.displayHeight*2.4).setAlpha(strength*(.7+amount*.3));
    }
  }
  snapshot(){return {spotlightX:this.spotlight.x,spotlightY:this.spotlight.y,lamps:this.lamps.map(lamp=>lamp.alpha),glows:this.glows.length,shadows:this.shadows.length};}
}
