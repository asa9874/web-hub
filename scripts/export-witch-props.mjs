import {build} from 'esbuild';
import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';
const bundled=await build({stdin:{contents:"export {createPaperTextures} from './src/ForgottenWitch/paper';export {StageLighting} from './src/ForgottenWitch/StageLighting';export {StageRig} from './src/ForgottenWitch/rig';",resolveDir:process.cwd()},bundle:true,write:false,format:'esm',define:{'import.meta.env.BASE_URL':'"/web-hub/"'}});
const browser=await chromium.launch({headless:true});
try{
  const page=await browser.newPage();
  const props=await page.evaluate(async source=>{
    const mod=await import('data:text/javascript;base64,'+btoa(source)),canvases={};
    const dummy=new Proxy({}, {get:()=>()=>dummy});
    const scene={textures:{exists:key=>key in canvases,createCanvas:(key,w,h)=>{const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;canvases[key]=canvas;return {context:canvas.getContext('2d'),refresh(){}};}},add:{rectangle:()=>dummy,image:()=>dummy}};
    mod.createPaperTextures(scene);new mod.StageLighting(scene);
    const rod=document.createElement('canvas');rod.width=80;rod.height=600;const c=rod.getContext('2d');
    const g={setScrollFactor(){return this;},setDepth(){return this;},setVisible(){return this;},clear(){c.clearRect(0,0,80,600);return this;},lineStyle(width,color,alpha){c.lineWidth=width;c.strokeStyle='#'+color.toString(16).padStart(6,'0');c.globalAlpha=alpha;return this;},lineBetween(x,y,xx,yy){c.beginPath();c.moveTo(x,y);c.lineTo(xx,yy);c.stroke();return this;}};
    const rig=new mod.StageRig({add:{graphics:()=>g},cameras:{main:{width:80,height:584,scrollX:0,scrollY:0}}});
    rig.attach({width:20,height:20,originX:.5,originY:1,depth:10,rotation:0,visible:true,alpha:1,scrollFactorX:1,scrollFactorY:1,getData:()=>undefined,getWorldTransformMatrix:()=>({transformPoint:(x,y)=>({x:40+x,y:30+y})}),getBounds:()=>({left:30,right:50,top:10,bottom:30})},'preview');rig.update();canvases.rod=rod;
    return Object.fromEntries(Object.entries(canvases).map(([key,canvas])=>[key,canvas.toDataURL('image/png').split(',')[1]]));
  },bundled.outputFiles[0].text);
  const out=new URL('../public/witch-theater/objects/',import.meta.url);await mkdir(out,{recursive:true});
  for(const [key,data] of Object.entries(props))await writeFile(new URL(key+'.png',out),Buffer.from(data,'base64'));
  console.log(`Exported ${Object.keys(props).length} exact paper/lighting textures.`);
}finally{await browser.close();}
