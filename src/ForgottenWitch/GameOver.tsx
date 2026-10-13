import {useEffect,useRef,useState} from 'react';
import {assetUrl} from './config';
export default function GameOver({onPrepare,onFinish,onCurtain}:{onPrepare:()=>Promise<void>;onFinish:()=>void;onCurtain:()=>void}){
  const [phase,setPhase]=useState<'poster'|'closing'|'opening'>('poster');
  const actions=useRef({onPrepare,onFinish,onCurtain});useEffect(()=>{actions.current={onPrepare,onFinish,onCurtain};},[onPrepare,onFinish,onCurtain]);
  useEffect(()=>{
    let active=true;const timers:number[]=[];
    const later=(fn:()=>void,ms:number)=>timers.push(window.setTimeout(()=>{if(active)fn();},ms));
    later(()=>{setPhase('closing');actions.current.onCurtain();later(()=>{void actions.current.onPrepare().then(()=>{if(!active)return;later(()=>{setPhase('opening');actions.current.onCurtain();later(()=>actions.current.onFinish(),1050);},300);});},1100);},2200);
    return ()=>{active=false;timers.forEach(window.clearTimeout);};
    // Callbacks refer to the current scene and remain valid for this one transition.
  },[]);
  return <div className={`wt-game-over wt-rebirth-${phase}`} role="dialog" aria-modal="true" aria-label="게임 오버와 재등장" data-rebirth-phase={phase} onKeyDown={event=>{event.preventDefault();event.stopPropagation();}}>
    <div className="wt-game-over-poster"><img src={assetUrl('game-over.png')} alt="눈이 X가 된 작은 마녀가 GAME OVER 종이 글자에 눌린 모습" /><p>잠깐, 모자를 다시 써야겠어.</p><small>마지막 테스트 시작점에서 다시 준비합니다.</small></div>
    <div className="wt-rebirth-curtain wt-rebirth-left" aria-hidden="true"/><div className="wt-rebirth-curtain wt-rebirth-right" aria-hidden="true"/>
  </div>;
}
