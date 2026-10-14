import type Phaser from 'phaser3';
// Preserve source PNGs; upload smaller render surfaces suitable for a 1280px stage.
export function budgetStageTextures(scene:Phaser.Scene){
  let before=0,after=0,count=0;
  for(const key of scene.textures.getTextureKeys()){
    const texture=scene.textures.get(key),source=texture.getSourceImage() as HTMLImageElement;
    if(!source?.width||!source.height)continue;
    const cap=key==='title-arch'?1536:key==='paper-tree'?768:512;
    before+=source.width*source.height;
    const scale=Math.min(1,cap/Math.max(source.width,source.height));
    if(scale<1){
      const canvas=document.createElement('canvas');canvas.width=Math.ceil(source.width*scale);canvas.height=Math.ceil(source.height*scale);
      const context=canvas.getContext('2d')!;context.imageSmoothingEnabled=true;context.imageSmoothingQuality='high';context.drawImage(source,0,0,canvas.width,canvas.height);
      scene.textures.remove(key);scene.textures.addCanvas(key,canvas);after+=canvas.width*canvas.height;count++;
    }else after+=source.width*source.height;
  }
  return {count,beforePixels:before,afterPixels:after};
}
export class FrameBudget {
  private samples:number[]=[];
  record(delta:number){if(delta>0&&delta<250){this.samples.push(delta);if(this.samples.length>180)this.samples.shift();}}
  snapshot(){const sorted=[...this.samples].sort((a,b)=>a-b);return {samples:sorted.length,p95Ms:sorted[Math.floor((sorted.length-1)*.95)]??0};}
}
