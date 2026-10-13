import type Phaser from 'phaser3';
import { TUNING } from './config';

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
  name:string;edge:RodEdge;visible:boolean;start:RodPoint;end:RodPoint;
}
export class StageRig {
  private bindings:RodBinding[]=[];
  private floorFront:Phaser.GameObjects.Graphics;
  private records:RodSnapshot[]=[];
  private scene:Phaser.Scene;
  constructor(scene:Phaser.Scene) {
    this.scene=scene;
    // The front of the cardboard floor would otherwise hide every scenery support.
    // Only the section below its top edge is redrawn here, below devices/characters.
    this.floorFront=scene.add.graphics().setScrollFactor(0).setDepth(6.4);
  }
  attach(owner:Owner,name:string,edge:RodEdge='bottom',u=.5,v=.88,width=6) {
    const graphics=this.scene.add.graphics().setScrollFactor(0).setDepth(owner.depth-.1);
    this.bindings.push({owner,name,edge,u,v,width,graphics});return owner;
  }
  update() {
    const camera=this.scene.cameras.main;
    this.floorFront.clear();this.records=[];
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
      const visible=owner.visible&&bounds.right-sx>=0&&bounds.left-sx<=camera.width&&bounds.bottom-sy>=0&&bounds.top-sy<=camera.height;
      const rod=edgeRod({x:world.x-sx,y:world.y-sy},camera.width,camera.height,edge,owner.rotation*44);
      graphics.clear().setVisible(visible);
      if(visible){
        this.stroke(graphics,rod.start,rod.end,width,owner.alpha);
        if(edge==='bottom'&&owner.depth<6.4){
          // Preserve occlusion by the cutout itself; reveal the remaining support on the floor.
          const y=Math.max(TUNING.floor,bounds.bottom-sy);
          if(y<rod.end.y&&rod.start.y<rod.end.y){
            const t=Math.max(0,(y-rod.start.y)/(rod.end.y-rod.start.y));
            this.stroke(this.floorFront,{x:rod.start.x+(rod.end.x-rod.start.x)*t,y:Math.max(y,rod.start.y)},rod.end,width,owner.alpha);
          }
        }
      }
      this.records.push({name,edge,visible,start:rod.start,end:rod.end});
    }
  }
  private stroke(g:Phaser.GameObjects.Graphics,start:RodPoint,end:RodPoint,width:number,alpha:number) {
    g.lineStyle(width+2,0x846249,alpha*.86).lineBetween(start.x,start.y,end.x,end.y);
    g.lineStyle(width,0xb98f64,alpha*.95).lineBetween(start.x,start.y,end.x,end.y);
    g.lineStyle(Math.max(1,width*.22),0xe9c89a,alpha*.8).lineBetween(start.x-width*.19,start.y,end.x-width*.19,end.y);
  }
  snapshot() {return this.records;}
}
