import {useEffect,useRef} from 'react';
import {assetUrl} from './config';
export default function ActingFrame({file,frame,label}:{file:string;frame:number;label:string}){
 const canvas=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{let alive=true;const image=new Image();image.onload=()=>{if(!alive||!canvas.current)return;const c=canvas.current.getContext('2d')!;const w=image.naturalWidth/2,h=image.naturalHeight/2;canvas.current.width=w;canvas.current.height=h;c.clearRect(0,0,w,h);c.drawImage(image,(frame%2)*w,Math.floor(frame/2)*h,w,h,0,0,w,h);};image.src=assetUrl(file);return()=>{alive=false;image.onload=null;};},[file,frame]);
 return <canvas className="wt-acting-frame" ref={canvas} role="img" aria-label={label}/>;
}
