import type Phaser from 'phaser3';

type Owner=Phaser.GameObjects.Image|Phaser.GameObjects.TileSprite|Phaser.GameObjects.Rectangle;
export type RodEdge='top'|'bottom';
export interface RodPoint {x:number;y:number}
export function edgeRod(point:RodPoint,width:number,height:number,edge:RodEdge,lean=0) {
  // Overshoot the clipping boundary: no rounded tip or resize seam inside the theater.
  return {start:point,end:{x:Math.max(8,Math.min(width-8,point.x+lean)),y:edge==='top'?-16:height+16}};
}
interface RodBinding {
  owner:Owner;name:string;edge:RodEdge;u:number;v:number;width:number;graphics:Phaser.GameObjects.Graphics;
}
export interface RodSnapshot {
  name:string;edge:RodEdge;visible:boolean;start:RodPoint;end:RodPoint;depth:number;
}
export class StageRig {
  private bindings:RodBinding[]=[];
  private records:RodSnapshot[]=[];
  private scene:Phaser.Scene;
  constructor(scene:Phaser.Scene) {
    this.scene=scene;
  }
  attach(owner:Owner,name:string,edge:RodEdge='bottom',u=.5,v=.88,width=6) {
    // All supports sit behind BOTH their cutout and the solid terrain (depth 6).
    const graphics=this.scene.add.graphics().setScrollFactor(0).setDepth(Math.min(owner.depth-.1,5.8));
    this.bindings.push({owner,name,edge,u,v,width,graphics});return owner;
  }
  detach(owner:Owner){this.bindings=this.bindings.filter(binding=>{if(binding.owner!==owner)return true;binding.graphics.destroy();return false;});}
  update() {
    const camera=this.scene.cameras.main;
    this.records=[];
    for(const binding of this.bindings) {
      const {owner,edge,u,v,width,graphics,name}=binding;
      const joint=owner.getData('rodJoint') as {u:number;v:number}|undefined;
      const ax=joint?.u??u,ay=joint?.v??v;
      const flipX='flipX' in owner&&owner.flipX,flipY='flipY' in owner&&owner.flipY;
      const localX=((flipX?1-ax:ax)-owner.originX)*owner.width;
      const localY=((flipY?1-ay:ay)-owner.originY)*owner.height;
      const world=owner.getWorldTransformMatrix().transformPoint(localX,localY);
      const sx=camera.scrollX*owner.scrollFactorX,sy=camera.scrollY*owner.scrollFactorY;
      const bounds=owner.getBounds();
      const z=camera.zoom,cx=camera.width/2,cy=camera.height/2;
      const screenX=(x:number)=>cx+(x-sx-cx)*z,screenY=(y:number)=>cy+(y-sy-cy)*z;
      const visible=owner.visible&&screenX(bounds.right)>=0&&screenX(bounds.left)<=camera.width&&screenY(bounds.bottom)>=0&&screenY(bounds.top)<=camera.height;
      const rod=edgeRod({x:world.x-sx,y:world.y-sy},camera.width,camera.height,edge,owner.rotation*44);
      rod.end={x:Math.max(cx-(cx-8)/z,Math.min(cx+(cx-8)/z,rod.start.x+owner.rotation*44)),y:edge==='top'?cy-(cy+16)/z:cy+(cy+16)/z};
      graphics.setDepth(Math.min(owner.depth-.1,5.8));
      graphics.clear().setVisible(visible);
      if(visible){
        this.stroke(graphics,rod.start,rod.end,width,owner.alpha);
      }
      this.records.push({name,edge,visible,start:rod.start,end:rod.end,depth:graphics.depth});
    }
  }
  private stroke(g:Phaser.GameObjects.Graphics,start:RodPoint,end:RodPoint,width:number,alpha:number) {
    g.lineStyle(width+2,0x846249,alpha*.86).lineBetween(start.x,start.y,end.x,end.y);
    g.lineStyle(width,0xb98f64,alpha*.95).lineBetween(start.x,start.y,end.x,end.y);
    g.lineStyle(Math.max(1,width*.22),0xe9c89a,alpha*.8).lineBetween(start.x-width*.19,start.y,end.x-width*.19,end.y);
  }
  snapshot() {return this.records;}
}
