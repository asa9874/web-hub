import type Phaser from 'phaser3';
import {NPCS} from './castData';
import type {Speaker} from './dialogueModel';
export const ACTING_CAST:Speaker[]=['witch','flora',...NPCS.map(n=>n.id)];
export const ACTING_POSES=['talk','point','run','recoil'] as const;
export type ActingPose=typeof ACTING_POSES[number];
export const ACTING_LABELS:Record<ActingPose,string>={talk:'말하기 · 인사',point:'가리키기',run:'달리기 · 도망',recoil:'놀람 · 물러서기'};
export const actingFile=(id:Speaker)=>`acting/${id}-poses.png`;
/** Frames are alpha-trimmed in memory; the original generated sheets remain untouched. */
export function prepareActingFrames(scene:Phaser.Scene,cast:Speaker[]=ACTING_CAST){
 for(const id of cast){
  const texture=scene.textures.get('acting-'+id),source=texture.getSourceImage() as HTMLCanvasElement;
  const canvas=document.createElement('canvas');canvas.width=source.width;canvas.height=source.height;
  const ctx=canvas.getContext('2d',{willReadFrequently:true})!;ctx.drawImage(source,0,0);const pixels=ctx.getImageData(0,0,canvas.width,canvas.height).data;
  const cw=Math.floor(canvas.width/2),ch=Math.floor(canvas.height/2);
  ACTING_POSES.forEach((pose,i)=>{
   const ox=(i%2)*cw,oy=Math.floor(i/2)*ch;let left=cw,top=ch,right=0,bottom=0;
   for(let y=0;y<ch;y++)for(let x=0;x<cw;x++)if(pixels[((oy+y)*canvas.width+ox+x)*4+3]>120){left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);}
   if(right<=left){left=0;top=0;right=cw-1;bottom=ch-1;}
   if(!texture.has(pose))texture.add(pose,0,ox+Math.max(0,left-3),oy+Math.max(0,top-3),Math.min(cw-left,right-left+7),Math.min(ch-top,bottom-top+7));
  });
 }
}
export function applyActingPose(image:Phaser.GameObjects.Image,id:Speaker,pose:ActingPose,height:number,facing=1,time=0){
 image.setTexture('acting-'+id,pose).setOrigin(.5,1).setData('rodJoint',{u:.5,v:.8}).setFlipX(facing<0).setScale(height/image.height);
 const moving=pose==='run';image.setRotation(Math.sin(time*(moving?14:2))*(moving?.035:.013)*facing);
 if(moving)image.y-=Math.abs(Math.sin(time*14))*4;
}
