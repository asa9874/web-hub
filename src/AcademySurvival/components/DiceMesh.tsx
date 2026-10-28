import {useEffect,useRef} from 'react';
type V=[number,number,number];
const cross=(a:V,b:V):V=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],sub=(a:V,b:V):V=>[a[0]-b[0],a[1]-b[1],a[2]-b[2]];
function mesh(sides:20|10){
 const phi=(1+Math.sqrt(5))/2;
 const vertices:V[]=sides===20?[-1,1].flatMap(a=>[-phi,phi].flatMap(b=>[[0,a,b],[a,b,0],[b,0,a]] as V[])):[[0,0,1.4],[0,0,-1.4],...Array.from({length:5},(_,i)=>[Math.cos(i*Math.PI*2/5),Math.sin(i*Math.PI*2/5),0] as V)];
 const faces:number[][]=[];
 for(let i=0;i<vertices.length;i++)for(let j=i+1;j<vertices.length;j++)for(let k=j+1;k<vertices.length;k++){
  const a=vertices[i],normal=cross(sub(vertices[j],a),sub(vertices[k],a));let pos=false,neg=false;
  for(const v of vertices){const delta=sub(v,a),d=normal.reduce((s,n,index)=>s+n*delta[index],0);if(d>1e-6)pos=true;if(d< -1e-6)neg=true;}
  if(pos&&neg)continue;const center=a.map((n,index)=>(n+vertices[j][index]+vertices[k][index])/3) as V;
  faces.push(normal.reduce((s,n,index)=>s+n*center[index],0)<0?[i,k,j]:[i,j,k]);
 }
 return {vertices,faces};
}
/** Small software-rendered 3D polyhedron. Animation has no game RNG or physics authority. */
export default function DiceMesh({value,sides=20,rolling=false,fast=false}:{value:number;sides?:20|10;rolling?:boolean;fast?:boolean}){
 const ref=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{const canvas=ref.current,ctx=canvas?.getContext('2d');if(!canvas||!ctx)return;
  const {vertices,faces}=mesh(sides),face=faces[sides===20?value-1:value],a=vertices[face[0]],n=cross(sub(vertices[face[1]],a),sub(vertices[face[2]],a)),finalY=Math.atan2(-n[0],n[2]),finalX=Math.atan2(n[1],Math.hypot(n[0],n[2]));
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches,duration=rolling&&!reduced?(fast?450:1050):0,start=performance.now();let frame=0;
  const draw=(now:number)=>{const t=duration?Math.min(1,(now-start)/duration):1,ease=1-Math.pow(1-t,3),spin=1-ease,ry=finalY+spin*Math.PI*4,rx=finalX+spin*Math.PI*6,rz=spin*Math.PI*2;
   const rotated=vertices.map(([x,y,z])=>{const ax=x*Math.cos(ry)+z*Math.sin(ry),az=-x*Math.sin(ry)+z*Math.cos(ry),by=y*Math.cos(rx)-az*Math.sin(rx),bz=y*Math.sin(rx)+az*Math.cos(rx);return [ax*Math.cos(rz)-by*Math.sin(rz),ax*Math.sin(rz)+by*Math.cos(rz),bz] as V;});
   const bounce=Math.sin(t*Math.PI*4)*Math.pow(1-t,2)*25,scale=sides===20?58:85;
   const point=([x,y,z]:V)=>[140+x*scale*(4/(4-z*.25)),135-y*scale*(4/(4-z*.25))-bounce];
   ctx.clearRect(0,0,280,280);ctx.fillStyle='#0005';ctx.beginPath();ctx.ellipse(140,242,65*(1-Math.abs(bounce)/90),13,0,0,Math.PI*2);ctx.fill();
   faces.map((f,index)=>({f,index,z:f.reduce((s,id)=>s+rotated[id][2],0)/3})).sort((a,b)=>a.z-b.z).forEach(({f,index})=>{const va=rotated[f[0]],normal=cross(sub(rotated[f[1]],va),sub(rotated[f[2]],va));if(normal[2]<=0)return;
    const length=Math.hypot(...normal),light=Math.max(0,(normal[0]*-.4+normal[1]*.6+normal[2]*.7)/length),points=f.map(id=>point(rotated[id]));ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.fillStyle=`rgb(${22+light*35},${42+light*55},${65+light*70})`;ctx.fill();ctx.lineWidth=1.4;ctx.strokeStyle='#c8a875';ctx.stroke();
    const center=points.reduce((s,p)=>[s[0]+p[0]/3,s[1]+p[1]/3],[0,0]);ctx.fillStyle='#fff0cf';ctx.font=`600 ${Math.max(10,22*normal[2]/length)}px Georgia`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(String(sides===20?index+1:index),center[0],center[1]);
   });if(t<1)frame=requestAnimationFrame(draw);
  };frame=requestAnimationFrame(draw);return()=>cancelAnimationFrame(frame);
 },[value,sides,rolling,fast]);
 return <canvas ref={ref} width="280" height="280" aria-hidden="true"/>;
}
