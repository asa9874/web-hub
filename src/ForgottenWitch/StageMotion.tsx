import {useEffect,useRef,useState} from 'react';
import type {ReactNode} from 'react';
import {assetUrl} from './config';
export interface LoadingStatus {progress:number;label:string}
export function LoadingScreen({status,leaving}:{status:LoadingStatus;leaving:boolean}){
  return <section className={`wt-loading ${leaving?'is-leaving':''}`} aria-label="무대 로딩" aria-busy={!leaving}>
    <small>막 뒤의 준비 시간</small><h2>무대를 준비하고 있습니다.</h2>
    <div className="wt-loading-company" aria-hidden="true">{['flora-puppet-clean.png','witch-puppet.png','clapper-idle.png'].map((file,i)=><div className={`wt-loading-puppet puppet-${i}`} key={file}><i/><img src={assetUrl(file)} alt=""/></div>)}<div className="wt-loading-floor"/></div>
    <div className="wt-loading-meter" role="progressbar" aria-label="무대 준비 진행률" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(status.progress*100)}><i style={{width:`${status.progress*100}%`}}/></div>
    <p>{status.label}<span>{Math.round(status.progress*100)}%</span></p><small>이미지 · 글꼴 · 효과음</small>
  </section>;
}
export function StageCurtain({phase}:{phase:'idle'|'closing'|'covered'|'opening'}){
  return phase==='idle'?null:<div className={`wt-scene-transition wt-transition-${phase}`} aria-label="무대 전환 중" role="status" data-transition-phase={phase}><div className="wt-scene-wing wing-left"/><div className="wt-scene-wing wing-right"/><span>✦</span></div>;
}
export function MotionPanel({show,children,name}:{show:boolean;children:ReactNode;name:string}){
  const [mounted,setMounted]=useState(show),[leaving,setLeaving]=useState(false);
  const timer=useRef<number|undefined>(undefined);
  useEffect(()=>{
    let active=true;window.clearTimeout(timer.current);
    queueMicrotask(()=>{if(!active)return;if(show){setMounted(true);setLeaving(false);}else if(mounted){setLeaving(true);timer.current=window.setTimeout(()=>{setMounted(false);setLeaving(false);},180);}});
    return()=>{active=false;window.clearTimeout(timer.current);};
  },[show,mounted]);
  return mounted?<div className={`wt-motion-panel ${leaving?'is-leaving':''}`} data-panel={name} inert={leaving}>{children}</div>:null;
}
export function AreaCaption({area}:{area:string}){return <div key={area} className="wt-area-caption" aria-hidden="true"><span>—</span>{area}<span>—</span></div>;}
