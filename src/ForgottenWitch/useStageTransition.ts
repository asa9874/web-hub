import {useCallback,useEffect,useRef,useState} from 'react';
export default function useStageTransition(lock:(value:boolean)=>void,cue:()=>void){
  const [phase,setPhase]=useState<'idle'|'closing'|'covered'|'opening'>('idle');
  const busy=useRef(false),alive=useRef(true),timers=useRef(new Map<number,()=>void>()),callbacks=useRef({lock,cue});
  useEffect(()=>{callbacks.current={lock,cue};});
  useEffect(()=>{alive.current=true;const pending=timers.current;return()=>{alive.current=false;for(const [id,resolve] of pending){window.clearTimeout(id);resolve();}pending.clear();callbacks.current.lock(false);};},[]);
  const wait=useCallback((ms:number)=>new Promise<void>(resolve=>{const id=window.setTimeout(()=>{timers.current.delete(id);resolve();},ms);timers.current.set(id,resolve);}),[]);
  const run=useCallback(async(action:()=>void|Promise<void>)=>{
    if(busy.current||!alive.current)return;busy.current=true;callbacks.current.lock(true);callbacks.current.cue();setPhase('closing');
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    try{await wait(reduced?90:340);if(!alive.current)return;setPhase('covered');await action();if(!alive.current)return;await wait(80);if(!alive.current)return;setPhase('opening');callbacks.current.cue();await wait(reduced?100:420);}
    finally{busy.current=false;callbacks.current.lock(false);if(alive.current)setPhase('idle');}
  },[wait]);
  return {run,phase,active:phase!=='idle'};
}
