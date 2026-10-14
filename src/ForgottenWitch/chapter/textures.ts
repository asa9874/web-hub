import type Phaser from 'phaser3';
import {prepareActingFrames} from '../actingData';
export function chapterTextures(scene:Phaser.Scene,frames=true){
 if(frames)prepareActingFrames(scene,['rabbit','mongsil','chef']);
 const draw=(key:string,w:number,h:number,paint:(c:CanvasRenderingContext2D)=>void)=>{if(scene.textures.exists(key))return;const tex=scene.textures.createCanvas(key,w,h)!,c=tex.context;paint(c);c.save();c.globalCompositeOperation='source-atop';for(let i=0;i<180;i++){c.strokeStyle=i%2?'#ffffff22':'#79604d16';c.lineWidth=2;c.beginPath();c.moveTo((i*73)%w,(i*47)%h);c.lineTo((i*73)%w+18,(i*47)%h+3);c.stroke();}c.restore();tex.refresh();};
 const outline=(c:CanvasRenderingContext2D,color:string)=>{c.fillStyle=color;c.strokeStyle='#b38c6a';c.lineWidth=12;c.lineJoin='round';c.fill();c.stroke();c.strokeStyle='#f6e4c7';c.lineWidth=4;c.stroke();};
 draw('ch-flower',320,230,c=>{for(let i=0;i<8;i++){c.save();c.translate(160,125);c.rotate(i*Math.PI/4);c.beginPath();c.ellipse(0,-60,34,62,0,0,Math.PI*2);outline(c,i%2?'#e7aeb6':'#d7b8cf');c.restore();}c.beginPath();c.arc(160,125,43,0,Math.PI*2);outline(c,'#efd596');});
 draw('ch-carrot',120,170,c=>{c.beginPath();c.moveTo(24,42);c.lineTo(96,42);c.lineTo(55,157);c.closePath();outline(c,'#d99e72');c.beginPath();c.moveTo(55,48);c.lineTo(30,10);c.lineTo(60,23);c.lineTo(82,6);c.lineTo(78,50);outline(c,'#a9c9b4');});
 draw('ch-crown',180,120,c=>{c.beginPath();c.moveTo(18,104);c.lineTo(12,24);c.lineTo(52,52);c.lineTo(90,8);c.lineTo(132,52);c.lineTo(170,24);c.lineTo(160,104);c.closePath();outline(c,'#efd596');});
 draw('ch-sword',100,220,c=>{c.beginPath();c.moveTo(42,10);c.lineTo(65,42);c.lineTo(61,150);c.lineTo(83,150);c.lineTo(83,166);c.lineTo(62,168);c.lineTo(62,211);c.lineTo(38,211);c.lineTo(38,168);c.lineTo(16,166);c.lineTo(16,150);c.lineTo(38,150);c.lineTo(38,42);c.closePath();outline(c,'#b9cbd4');});
 draw('ch-chest',210,150,c=>{c.beginPath();c.roundRect(14,15,182,122,16);outline(c,'#ceaa82');c.fillStyle='#efcf94';c.fillRect(22,53,166,15);c.fillRect(87,60,32,30);});
 draw('ch-material',170,120,c=>{for(let i=0;i<3;i++){c.beginPath();c.moveTo(14+i*8,24+i*8);c.lineTo(137+i*6,14+i*8);c.lineTo(155-i*8,92+i*6);c.lineTo(12+i*8,105-i*8);c.closePath();outline(c,['#e7aeb6','#b9a3d4','#a9c9b4'][i]);}});
 draw('ch-kitchen',460,320,c=>{c.beginPath();c.roundRect(12,90,436,213,15);outline(c,'#c9b1a2');c.beginPath();c.roundRect(34,14,392,85,15);outline(c,'#e6baa9');for(let i=0;i<3;i++){c.beginPath();c.arc(90+i*135,175,43,0,Math.PI*2);outline(c,'#f3e5ce');}c.fillStyle='#736477';c.fillRect(48,235,115,44);c.fillRect(210,233,190,46);});
 draw('ch-rain',520,290,c=>{c.beginPath();c.rect(10,10,500,270);outline(c,'#b2b7ce');for(let i=0;i<26;i++){c.strokeStyle='#dce4eb';c.lineWidth=5;c.beginPath();c.moveTo(20+i*19,25+i%3*70);c.lineTo(5+i*19,80+i%3*70);c.stroke();}});
 draw('ch-sun',520,290,c=>{c.beginPath();c.rect(10,10,500,270);outline(c,'#e8d6ad');c.beginPath();c.arc(260,110,56,0,Math.PI*2);outline(c,'#efc97e');});
 draw('ch-night',520,290,c=>{c.beginPath();c.rect(10,10,500,270);outline(c,'#8c879f');c.fillStyle='#f6e4c7';for(let i=0;i<15;i++)c.fillRect(30+i*31,40+i%4*45,8,8);});
}
