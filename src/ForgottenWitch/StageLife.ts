import type Phaser from 'phaser3';
interface Fleck {x:number;y:number;vx:number;vy:number;life:number;max:number}
// Presentation only: these light/dust effects never participate in collisions or puzzles.
export class StageLife {
  private dust:Phaser.GameObjects.Graphics;
  private impacts:Phaser.GameObjects.Graphics;
  private clockHands:Phaser.GameObjects.Graphics;
  private stars:Phaser.GameObjects.Image[]=[];
  private props:{image:Phaser.GameObjects.Image;angle:number;amplitude:number}[]=[];
  private scene:Phaser.Scene;
  private nextMystery=19;
  private mystery:{index:number;start:number}|null=null;
  private flowers:Phaser.GameObjects.Image[]=[];
  private flecks:Fleck[]=[];
  private clock=0;
  private flowerClock=0;
  private motionReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  constructor(scene:Phaser.Scene) {
    this.scene=scene;
    this.dust=scene.add.graphics().setScrollFactor(0).setDepth(4.5);
    this.impacts=scene.add.graphics().setDepth(13);
    this.clockHands=scene.add.graphics().setDepth(6.2);
  }
  hang(star:Phaser.GameObjects.Image){this.stars.push(star);}
  sway(image:Phaser.GameObjects.Image,amplitude=.25){this.props.push({image,angle:image.angle,amplitude});}
  plant(flower:Phaser.GameObjects.Image){this.flowers.push(flower);}
  impact(x:number,y:number,count=7) {
    if(this.motionReduced)return;
    for(let i=0;i<count;i++)this.flecks.push({x:x+(i-count/2)*4,y:y-3,vx:(i-count/2)*18,vy:-20-(i%3)*15,life:.42,max:.42});
    if(this.flecks.length>50)this.flecks.splice(0,this.flecks.length-50);
  }
  update(dt:number,animate:boolean,lightAmount:number) {
    if(animate&&!this.motionReduced){this.clock+=dt;this.flowerClock+=dt*lightAmount;}
    const t=this.clock;
    this.dust.clear();
    for(let i=0;i<27;i++) {
      const x=(i*193.7+Math.sin(t*.21+i)*23)%1280,y=((i*113.4-t*(3+i%4))+1440)%720;
      const alpha=.10+Math.sin(t*.8+i)*.04+lightAmount*.06;
      this.dust.fillStyle(0xfff4d2,alpha).fillCircle(x,y,i%3===0?1.6:.8);
    }
    this.stars.forEach((star,i)=>star.setAngle(this.motionReduced?0:Math.sin(t*.7+i*.8)*1.7));
    if(animate&&!this.motionReduced&&t>this.nextMystery){
      const camera=this.scene.cameras.main;
      const index=this.props.findIndex(p=>{const x=p.image.x-camera.scrollX*p.image.scrollFactorX;return x>220&&x<1050;});
      this.mystery=index<0?null:{index,start:t};this.nextMystery=t+28;
    }
    this.props.forEach((prop,i)=>{
      const elapsed=this.mystery?.index===i?t-this.mystery.start:-1;
      const odd=elapsed>=0&&elapsed<3?Math.sin(elapsed*Math.PI/3)*.9:0;
      prop.image.setAngle(prop.angle+(this.motionReduced?0:Math.sin(t*.32+i*1.3)*prop.amplitude+odd));
    });
    this.clockHands.clear();
    this.flowers.forEach((flower,i)=>{
      const angle=-.35+this.flowerClock*(.6+i*.013);
      const point=flower.getWorldTransformMatrix().transformPoint(77-flower.originX*flower.width,65-flower.originY*flower.height);
      const radius=flower.displayHeight*.075;
      this.clockHands.lineStyle(1.2,0x736477,.85).lineBetween(point.x,point.y,point.x+Math.sin(angle)*radius,point.y-Math.cos(angle)*radius);
      this.clockHands.lineBetween(point.x,point.y,point.x+Math.cos(angle*.16)*radius*.65,point.y+Math.sin(angle*.16)*radius*.65);
    });
    this.impacts.clear();
    for(const fleck of this.flecks){
      if(animate){fleck.life-=dt;fleck.x+=fleck.vx*dt;fleck.y+=fleck.vy*dt;fleck.vy+=95*dt;}
      if(fleck.life>0)this.impacts.fillStyle(0xe5c49c,fleck.life/fleck.max*.5).fillRect(fleck.x,fleck.y,3,1.5);
    }
    this.flecks=this.flecks.filter(fleck=>fleck.life>0);
  }
  snapshot(){return {clock:this.clock,reducedMotion:this.motionReduced,hanging:this.stars.length,swaying:this.props.length,mysteryActive:Boolean(this.mystery&&this.clock-this.mystery.start<3)};}
}
