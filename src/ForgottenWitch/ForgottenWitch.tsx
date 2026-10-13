import { useEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent, RefObject } from 'react';
import { Link } from 'react-router-dom';
import { assetUrl, SYMBOLS, TUNING } from './config';
import type { SymbolId } from './config';
import { checkLights } from './model';
import type { TheaterScene, TheaterView } from './TheaterScene';
import dialogueData from './dialogue.json';
import './ForgottenWitch.css';

const initialView:TheaterView={mode:'intro',area:'숲의 입구',prompt:'',message:'',bridgeSolved:false,lightsSolved:false,talked:false,dialogue:'first'};
function useModalFocus(ref:RefObject<HTMLDivElement|null>) {
  useEffect(()=>{
    const previous=document.activeElement as HTMLElement|null;
    const box=ref.current;box?.querySelector<HTMLElement>('button')?.focus({preventScroll:true});
    const trap=(event:KeyboardEvent)=>{
      if(event.key!=='Tab'||!box)return;
      const items=Array.from(box.querySelectorAll<HTMLElement>('button:not(:disabled),a[href]'));
      if(!items.length){event.preventDefault();return;}
      const index=items.indexOf(document.activeElement as HTMLElement);
      event.preventDefault();items[(index+(event.shiftKey?-1:1)+items.length)%items.length].focus();
    };
    document.addEventListener('keydown',trap);
    return ()=>{document.removeEventListener('keydown',trap);previous?.focus({preventScroll:true});};
  },[ref]);
}
function Dialogue({script,advanceRef,onEnd}:{script:keyof typeof dialogueData;advanceRef:RefObject<(()=>void)|null>;onEnd:()=>void}) {
  const [index,setIndex]=useState(0),[visible,setVisible]=useState(0);
  const line=dialogueData[script][index];
  const modal=useRef<HTMLDivElement>(null);useModalFocus(modal);
  useEffect(()=>{
    const timer=window.setInterval(()=>setVisible(n=>Math.min(line.text.length,n+1)),29);
    return ()=>window.clearInterval(timer);
  },[line]);
  const next=()=>{
    if(visible<line.text.length)setVisible(line.text.length);
    else if(index<dialogueData[script].length-1){setIndex(index+1);setVisible(0);}else onEnd();
  };
  useEffect(()=>{advanceRef.current=next;return ()=>{advanceRef.current=null;};});
  return <div className="wt-dialogue" ref={modal} role="dialog" aria-modal="true" aria-label="플로라와 대화">
    <img className={`wt-portrait wt-portrait-left ${line.speaker==='witch'?'speaking':''}`} src={assetUrl('witch-portrait.png')} alt="견습 마녀" />
    <img className={`wt-portrait wt-portrait-right ${line.speaker==='flora'?'speaking':''}`} src={assetUrl('flora-portrait-clean.png')} alt="플로라" />
    <div className="wt-dialogue-paper">
      <div className="wt-speaker">{line.speaker==='witch'?'견습 마녀':'플로라'}<span>{line.emotion}</span></div>
      <p aria-live="polite" aria-label={line.text}>{line.text.slice(0,visible)}<span className="wt-type-cursor">▏</span></p>
      <div className="wt-dialogue-actions"><span>Enter / Space</span><button onKeyDown={event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();if(!event.repeat)next();}}} onClick={next}>{visible<line.text.length?'문장 펼치기':index===dialogueData[script].length-1?'대화 마치기':'다음 문장'} <span>→</span></button></div>
    </div>
  </div>;
}
function LightPuzzle({onClose,onCheck,onRetry,onSolve}:{onClose:()=>void;onCheck:()=>void;onRetry:()=>void;onSolve:()=>void}) {
  const [slots,setSlots]=useState<(SymbolId|null)[]>([null,null,null]);
  const [selected,setSelected]=useState<SymbolId|null>(null);
  const [ghost,setGhost]=useState<{id:SymbolId;x:number;y:number}|null>(null);
  const [status,setStatus]=useState<'OPEN'|'CHECKING'|'FAILED'|'SOLVED'>('OPEN');
  const drag=useRef<{id:SymbolId;pointer:number;moved:boolean;x:number;y:number}|null>(null);
  const timer=useRef<number|undefined>(undefined);
  const modal=useRef<HTMLDivElement>(null);useModalFocus(modal);
  const place=(id:SymbolId,index:number)=>setSlots(current=>{
    const next=[...current],from=next.indexOf(id),displaced=next[index];
    if(from>=0)next[from]=displaced;
    next[index]=id;return next;
  });
  useEffect(()=>()=>window.clearTimeout(timer.current),[]);
  const down=(id:SymbolId,event:ReactPointerEvent<HTMLButtonElement>)=>{
    if(status!=='OPEN')return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current={id,pointer:event.pointerId,moved:false,x:event.clientX,y:event.clientY};setSelected(id);
  };
  const move=(event:ReactPointerEvent<HTMLButtonElement>)=>{
    const current=drag.current;if(!current||current.pointer!==event.pointerId)return;
    if(Math.hypot(event.clientX-current.x,event.clientY-current.y)>5)current.moved=true;
    if(current.moved)setGhost({id:current.id,x:event.clientX,y:event.clientY});
  };
  const up=(event:ReactPointerEvent<HTMLButtonElement>)=>{
    const current=drag.current;if(!current)return;
    const target=document.elementFromPoint(event.clientX,event.clientY)?.closest<HTMLElement>('[data-light-slot]');
    if(target){place(current.id,Number(target.dataset.lightSlot));setSelected(null);}
    setGhost(null);drag.current=null;
  };
  const tile=(id:SymbolId)=><button className={`wt-symbol wt-symbol-${id} ${selected===id?'selected':''}`} data-symbol={id} aria-label={SYMBOLS[id].label+' 판넬'} onPointerDown={e=>down(id,e)} onPointerMove={move} onPointerUp={up} onPointerCancel={()=>{drag.current=null;setGhost(null);}} onClick={()=>setSelected(id)}><span>{SYMBOLS[id].glyph}</span><small>{SYMBOLS[id].label}</small></button>;
  const check=()=>{
    if(status!=='OPEN')return;
    onCheck();setStatus('CHECKING');setSelected(null);
    timer.current=window.setTimeout(()=>{
      if(checkLights(slots)){setStatus('SOLVED');timer.current=window.setTimeout(onSolve,800);}
      else {setStatus('FAILED');onRetry();timer.current=window.setTimeout(()=>setStatus('OPEN'),700);}
    },350);
  };
  return <div className="wt-modal-backdrop"><div ref={modal} className={`wt-puzzle-paper ${status==='FAILED'?'wt-shake':''}`} role="dialog" aria-modal="true" aria-labelledby="wt-light-title" data-puzzle-state={status}>
    <button className="wt-close" aria-label="조명 퍼즐 닫기" onClick={onClose}>×</button>
    <div className="wt-eyebrow">무대 장치 · LIGHTING</div><h2 id="wt-light-title">숲에 빛을 돌려주는 순서</h2>
    <p className="wt-puzzle-description">플로라의 말을 떠올려 보세요.<br/>종이 판넬을 끌어서 세 칸에 놓습니다.</p>
    <div className="wt-light-slots">{slots.map((id,index)=><div key={index} className="wt-light-slot" data-light-slot={index}>
      <span className="wt-slot-number">0{index+1}</span>
      {id?tile(id):<button className="wt-empty-slot" aria-label={`${index+1}번 칸에 선택한 판넬 놓기`} onClick={()=>{if(selected){place(selected,index);setSelected(null);}}}><span>+</span></button>}
    </div>)}</div>
    <div className="wt-symbol-rack">{(['flower','star','moon'] as const).filter(id=>!slots.includes(id)).map(id=><div key={id}>{tile(id)}</div>)}</div>
    <p className="wt-puzzle-result" role="status">{status==='FAILED'?'종이가 떨립니다. 이 순서는 아닌 것 같아요.':status==='SOLVED'?'달이 깨어나고, 별이 빛나고, 꽃이 피어납니다.':status==='CHECKING'?'장치가 순서를 읽고 있습니다…':'클릭으로 판넬 선택 → 빈 칸 클릭도 가능합니다.'}</p>
    <button className="wt-primary" disabled={slots.some(s=>s===null)||status!=='OPEN'} onClick={check}>조명 켜기 <span>✦</span></button>
    <small className="wt-puzzle-escape">Esc · 무대로 돌아가기</small>
    {ghost&&<div className="wt-drag-ghost" style={{left:ghost.x,top:ghost.y}}>{SYMBOLS[ghost.id].glyph}</div>}
  </div></div>;
}
export default function ForgottenWitch() {
  const host=useRef<HTMLDivElement>(null),scene=useRef<TheaterScene|null>(null);
  const advanceRef=useRef<(()=>void)|null>(null);
  const [view,setView]=useState(initialView),[ready,setReady]=useState(false),[error,setError]=useState('');
  const [muted,setMuted]=useState(false),[restart,setRestart]=useState(0);
  useEffect(()=>{
    let active=true;let dispose:(()=>void)|undefined;
    const overflow=document.body.style.overflow;document.body.style.overflow='hidden';
    void Promise.all([import('phaser3'),import('./TheaterScene')]).then(([{default:Phaser},{TheaterScene}])=>{
      if(!active||!host.current)return;
      const instance=new TheaterScene({view:value=>{if(active)setView(value);},ready:value=>{if(active){scene.current=value;setReady(true);}},advance:()=>advanceRef.current?.(),error:value=>{if(active)setError(value);}});
      const game=new Phaser.Game({type:Phaser.AUTO,parent:host.current,width:TUNING.width,height:TUNING.height,backgroundColor:'#F3E5CE',scene:[instance],render:{antialias:true},scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},audio:{noAudio:true}});
      dispose=()=>game.destroy(true);
    }).catch(cause=>{if(active)setError('게임 엔진을 불러오지 못했습니다. '+String(cause));});
    return ()=>{active=false;scene.current=null;dispose?.();document.body.style.overflow=overflow;};
  },[restart]);
  const replay=()=>{setReady(false);setError('');setView(initialView);setMuted(false);setRestart(n=>n+1);};
  return <main className="wt-page">
    <header className="wt-topbar"><Link to="/">← web hub</Link><span>잊혀진 마녀의 극장 <small>v0.1</small></span><button onClick={()=>{if(scene.current)setMuted(scene.current.toggleSound());}} aria-label={muted?'소리 켜기':'소리 끄기'}>{muted?'소리 꺼짐':'소리 켜짐'}</button></header>
    <div className="wt-stage-shell">
      <div className="wt-game" ref={host} role="application" aria-label="잊혀진 마녀의 극장 게임. A D 이동, Space 점프, E 상호작용" />
      <div className="wt-overlay" data-game-mode={view.mode}>
        {error?<div className="wt-modal-backdrop"><div className="wt-intro-paper"><h2>무대를 준비하지 못했습니다.</h2><p role="alert">{error}</p><button onClick={replay}>다시 불러오기</button><Link to="/">허브로 돌아가기</Link></div></div>:view.mode==='intro'?<div className="wt-modal-backdrop wt-opening"><div className="wt-intro-paper">
          <div className="wt-ticket">첫 번째 막 · 01</div><div className="wt-eyebrow">THE FORGOTTEN WITCH’S THEATER</div>
          <h1>잊혀진<br/>마녀의 극장</h1><div className="wt-intro-rule"/><h2>막이 오르지 않는 숲</h2>
          <p>멈춘 다리, 시간을 잃은 꽃, 불이 꺼진 무대.<br/>견습 마녀의 첫 공연을 준비해 주세요.</p>
          <button className="wt-primary" disabled={!ready} onClick={()=>scene.current?.start()}>{ready?'극장에 들어가기':'무대 준비 중…'} <span>→</span></button>
          <small>키보드 + 마우스 · 약 3–7분 · 진행은 이번 공연 동안 유지됩니다.</small>
        </div><img className="wt-opening-puppet" src={assetUrl('witch-puppet.png')} alt="골판지 견습 마녀 인형" /></div>:null}
        {!['intro','complete'].includes(view.mode)&&<div className="wt-hud"><div><small>첫 번째 막</small><strong>{view.area}</strong></div><ol aria-label="공연 준비 진행"><li className={view.bridgeSolved?'done':''}>다리</li><li className={view.talked?'done':''}>플로라</li><li className={view.lightsSolved?'done':''}>조명</li></ol><button aria-label="일시정지" disabled={view.mode!=='explore'} onClick={()=>scene.current?.pause()}>Ⅱ</button></div>}
        {view.message&&view.mode==='explore'&&<div className="wt-toast" role="status">{view.message}</div>}
        {view.mode==='bridge'&&<div className="wt-bridge-help"><div><small>무대 조작 모드</small><h2>다리를 제자리로</h2><p>떠 있는 종이 다리를 오른쪽 점선으로 끌어 놓으세요.</p></div><button onClick={()=>scene.current?.closePuzzle()}>닫기 · Esc</button></div>}
        {view.mode==='dialogue'&&<Dialogue key={view.dialogue} script={view.dialogue} advanceRef={advanceRef} onEnd={()=>scene.current?.finishDialogue()} />}
        {view.mode==='lights'&&<LightPuzzle onClose={()=>scene.current?.closePuzzle()} onCheck={()=>scene.current?.checkingLights()} onRetry={()=>scene.current?.retryLights()} onSolve={()=>scene.current?.solveLights()} />}
        {view.mode==='pause'&&<div className="wt-modal-backdrop"><div className="wt-intro-paper wt-pause" role="dialog" aria-modal="true" aria-label="일시정지"><div className="wt-eyebrow">INTERMISSION</div><h2>잠시 쉬어가는 막간</h2><p>무대는 그 자리에서 기다립니다.</p><button className="wt-primary" onClick={()=>scene.current?.resume()}>계속하기</button><button className="wt-secondary" onClick={replay}>처음부터 다시</button><Link to="/">허브로 나가기</Link></div></div>}
        {view.mode==='complete'&&<div className="wt-modal-backdrop wt-completion"><div className="wt-intro-paper" role="dialog" aria-modal="true" aria-label="프로토타입 완료"><div className="wt-ticket">CURTAIN CALL</div><div className="wt-eyebrow">달 · 별 · 꽃</div><h2>첫 번째 막의 준비가<br/>끝났습니다.</h2><p>Prototype v0.1 Complete</p><button className="wt-primary" onClick={replay}>한 번 더 공연하기</button><Link to="/">프로젝트 목록으로</Link></div></div>}
      </div>
    </div>
    <footer className="wt-control-strip"><span><kbd>A</kbd><kbd>D</kbd> / ← → 이동</span><span><kbd>Space</kbd> 점프</span><span><kbd>E</kbd> 상호작용</span><span>마우스 · 판넬 드래그</span><span><kbd>Esc</kbd> 닫기 / 일시정지</span>{view.talked&&<strong>기억한 순서 · 달 → 별 → 꽃</strong>}</footer>
  </main>;
}
