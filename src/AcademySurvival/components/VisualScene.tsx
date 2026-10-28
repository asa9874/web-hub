import {createContext,useEffect,useRef,useState} from 'react';
import type {ReactNode} from 'react';
import type {EventSceneData} from './EventScene';
import {characterArt} from '../data/characterArt';
export const VisualModeContext=createContext(false);

/** Alternate presentation of an existing choice, never a second choice authority. */
export function VisualSceneDialog({scene,children,onClose,dismissible}:{scene:EventSceneData;children:ReactNode;onClose:()=>void;dismissible:boolean}){
 const dialog=useRef<HTMLDialogElement>(null),[instant,setInstant]=useState(false),[failed,setFailed]=useState('');
 useEffect(()=>{const el=dialog.current;el?.showModal();return()=>{el?.close();};},[]);
 const src=scene.character?characterArt(scene.character,scene.expression):'';
 return <dialog ref={dialog} className="avn-dialog" aria-label={scene.title} onCancel={e=>{e.preventDefault();if(dismissible)onClose();}}><div className="avn-scene" style={scene.background?{backgroundImage:`url("${scene.background.src}")`}:undefined}>
 <header><span>{scene.kind==='result'?'AFTER THE MOMENT':'A MOMENT WITH YOU'}</span><h2>{scene.title}</h2>{dismissible&&<button onClick={onClose} aria-label="장면 닫기">×</button>}</header>
 {scene.character&&<div className="avn-scene-actor">{failed!==src?<img key={src} src={src} alt={scene.character.name} onError={()=>setFailed(src)}/>:<span className="avn-silhouette">{scene.character.name}</span>}</div>}
 <div className="avn-dialogue"><span className="avn-speaker">{scene.character?.name??'ACADEMY'}</span>{scene.speech&&<p className={instant?'':'avn-line-enter'} key={scene.speech}>{scene.speech}</p>}<p className="avn-narration">{scene.message}</p><div className="avn-choices">{children}</div><footer><button aria-pressed={instant} onClick={()=>setInstant(v=>!v)}>{instant?'즉시 표시':'빠른 공개'}</button><span>선택 전에는 세계 시간이 멈춥니다</span></footer></div>
 </div></dialog>;
}
