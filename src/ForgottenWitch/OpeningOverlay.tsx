import {useState} from 'react';
import type {OpeningView} from './OpeningScene';
import {OPENING_STAGES} from './openingData';
import type {OpeningStage} from './openingData';
import './Opening.css';
export default function OpeningOverlay({view,onSkip,onPause,onScene,onReplay}:{view:OpeningView;onSkip:()=>void;onPause:()=>void;onScene:(stage:OpeningStage)=>void;onReplay:()=>void}){
 const [debug,setDebug]=useState(false);
 return <div className="wt-opening-ui" data-opening-stage={view.stage}>
  {view.stage!=='library-intro'&&<nav aria-label="오프닝 조작"><button onClick={onPause}>{view.paused?'계속하기':'Ⅱ'}</button>{!['library','tutorial'].includes(view.stage)&&<button onClick={onSkip}>컷신 건너뛰기</button>}<button onClick={()=>setDebug(v=>!v)}>장면 테스트</button></nav>}
  {debug&&<aside className="wt-opening-scenes"><strong>오프닝 · 장면 직접 진입</strong><p>선택한 장면부터 정상 타이밍으로 진행합니다.</p>{OPENING_STAGES.map(s=><button key={s.id} onClick={()=>{onScene(s.id);setDebug(false);}}>{s.label}</button>)}<button onClick={()=>setDebug(false)}>닫기</button></aside>}
  {view.paused&&!debug&&<div className="wt-opening-pause"><small>INTERMISSION</small><h2>잠시 막간</h2><button onClick={onPause}>계속하기</button><button onClick={onReplay}>오프닝 다시보기</button></div>}
 </div>;
}
