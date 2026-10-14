import type Phaser from 'phaser3';
/** Small animated props are code-native; cinematic illustrations remain separate files. */
export function createOpeningProps(scene:Phaser.Scene){
 if(!scene.textures.exists('opening-book-prop')){
  const canvas=document.createElement('canvas');canvas.width=180;canvas.height=220;const c=canvas.getContext('2d')!;
  c.fillStyle='#d6b38c';c.fillRect(8,5,164,210);c.fillStyle='#403348';c.fillRect(15,10,150,195);c.strokeStyle='#bfa07b';c.lineWidth=3;c.strokeRect(24,20,129,171);c.fillStyle='#e1be86';c.beginPath();c.arc(92,94,37,0,Math.PI*2);c.fill();c.fillStyle='#403348';c.beginPath();c.arc(107,83,34,0,Math.PI*2);c.fill();c.strokeStyle='#75677f';c.lineWidth=2;for(let i=0;i<120;i++){const x=(i*71)%146+16,y=(i*97)%192+11;c.beginPath();c.moveTo(x,y);c.lineTo(x+4,y+2);c.stroke();}scene.textures.addCanvas('opening-book-prop',canvas);
 }
 if(!scene.textures.exists('opening-door-glow')){
  const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;const c=canvas.getContext('2d')!,g=c.createRadialGradient(128,128,0,128,128,128);g.addColorStop(0,'rgba(255,245,212,.9)');g.addColorStop(.35,'rgba(255,223,173,.35)');g.addColorStop(1,'rgba(255,223,173,0)');c.fillStyle=g;c.fillRect(0,0,256,256);scene.textures.addCanvas('opening-door-glow',canvas);
 }
}
