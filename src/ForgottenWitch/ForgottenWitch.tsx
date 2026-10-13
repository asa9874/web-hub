import { useEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent, RefObject } from 'react';
import { Link } from 'react-router-dom';
import { SYMBOLS, TUNING } from './config';
import type { SymbolId } from './config';
import { checkLights } from './model';
import type { TheaterScene, TheaterView } from './TheaterScene';
import Dialogue from './Dialogue';
import './ForgottenWitch.css';
import './Expansion.css';
import DomPaperRods from './DomPaperRods';
import TitleScreen from './TitleScreen';
import Illustrations from './Illustrations';
import CodexBook from './CodexBook';
import Lives from './Lives';
import GameOver from './GameOver';
import TestPanel from './TestPanel';

const initialView:TheaterView={mode:'intro',area:'숲의 입구',prompt:'',message:'',bridgeSolved:false,lightsSolved:false,talked:false,dialogue:'first',lives:3,npc:'flora',monster:'clapper',boss:null};
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
    if(current.moved){
      const bounds=modal.current?.closest('.wt-overlay')?.getBoundingClientRect();
      if(bounds)setGhost({id:current.id,x:(event.clientX-bounds.left)*1280/bounds.width,y:(event.clientY-bounds.top)*720/bounds.height});
    }
  };
  const up=(event:ReactPointerEvent<HTMLButtonElement>)=>{
    const current=drag.current;if(!current)return;
    const target=document.elementFromPoint(event.clientX,event.clientY)?.closest<HTMLElement>('[data-light-slot]');
    if(target){place(current.id,Number(target.dataset.lightSlot));setSelected(null);}
    setGhost(null);drag.current=null;
  };
  const tile=(id:SymbolId)=><button className={`wt-symbol wt-symbol-${id} ${selected===id?'selected':''}`} data-paper-rod={id} data-symbol={id} aria-label={SYMBOLS[id].label+' 판넬'} onPointerDown={e=>down(id,e)} onPointerMove={move} onPointerUp={up} onPointerCancel={()=>{drag.current=null;setGhost(null);}} onClick={()=>setSelected(id)}><span>{SYMBOLS[id].glyph}</span><small>{SYMBOLS[id].label}</small></button>;
  const check=()=>{
    if(status!=='OPEN')return;
    onCheck();setStatus('CHECKING');setSelected(null);
    timer.current=window.setTimeout(()=>{
      if(checkLights(slots)){setStatus('SOLVED');timer.current=window.setTimeout(onSolve,800);}
      else {setStatus('FAILED');onRetry();timer.current=window.setTimeout(()=>setStatus('OPEN'),700);}
    },350);
  };
  return <div className="wt-modal-backdrop"><DomPaperRods /><div ref={modal} className={`wt-puzzle-paper ${status==='FAILED'?'wt-shake':''}`} role="dialog" aria-modal="true" aria-labelledby="wt-light-title" data-puzzle-state={status}>
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
    {ghost&&<div className="wt-drag-ghost" data-paper-rod="drag-ghost" style={{left:ghost.x,top:ghost.y}}>{SYMBOLS[ghost.id].glyph}</div>}
  </div></div>;
}
export default function ForgottenWitch() {
  const host=useRef<HTMLDivElement>(null),scene=useRef<TheaterScene|null>(null);
  const advanceRef=useRef<(()=>void)|null>(null);
  const [view,setView]=useState(initialView),[ready,setReady]=useState(false),[error,setError]=useState('');
  const [muted,setMuted]=useState(false),[restart,setRestart]=useState(0);
  const [gallery,setGallery]=useState(false),[uiScale,setUiScale]=useState(1);
  const [codex,setCodex]=useState(false);
  const shell=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const element=shell.current;if(!element)return;
    const resize=()=>setUiScale(element.clientWidth/TUNING.width);
    const observer=new ResizeObserver(resize);observer.observe(element);resize();
    return ()=>observer.disconnect();
  },[]);
  useEffect(()=>{
    let active=true;let dispose:(()=>void)|undefined;
    const overflow=document.body.style.overflow;document.body.style.overflow='hidden';
    void Promise.all([import('phaser3'),import('./TheaterScene'),document.fonts.load('500 22px "WT Readable"')]).then(([{default:Phaser},{TheaterScene}])=>{
      if(!active||!host.current)return;
      const instance=new TheaterScene({view:value=>{if(active)setView(value);},ready:value=>{if(active){scene.current=value;setReady(true);}},advance:()=>advanceRef.current?.(),error:value=>{if(active)setError(value);}});
      const game=new Phaser.Game({type:Phaser.AUTO,parent:host.current,width:TUNING.width,height:TUNING.height,backgroundColor:'#F3E5CE',scene:[instance],render:{antialias:true},scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},audio:{noAudio:true}});
      dispose=()=>game.destroy(true);
    }).catch(cause=>{if(active)setError('게임 엔진을 불러오지 못했습니다. '+String(cause));});
    return ()=>{active=false;scene.current=null;dispose?.();document.body.style.overflow=overflow;};
  },[restart]);
  const replay=()=>{setReady(false);setError('');setView(initialView);setMuted(false);setGallery(false);setCodex(false);setRestart(n=>n+1);};
  return <main className="wt-page">
    <header className="wt-topbar"><Link to="/">← web hub</Link><span>잊혀진 마녀의 극장 <small>v0.1</small></span><button onKeyDown={event=>{if(view.mode==='dialogue'&&(event.key==='Enter'||event.key===' '))event.preventDefault();}} onClick={()=>{if(scene.current)setMuted(scene.current.toggleSound());}} aria-label={muted?'소리 켜기':'소리 끄기'}>{muted?'소리 꺼짐':'소리 켜짐'}</button></header>
    <div className="wt-stage-shell" ref={shell}>
      <div className="wt-game" ref={host} role="application" aria-label="잊혀진 마녀의 극장 게임. A D 이동, Space 점프, E 상호작용" />
      <div className="wt-overlay" data-game-mode={view.mode} style={{transform:`scale(${uiScale})`}}>
        {error?<div className="wt-modal-backdrop"><div className="wt-intro-paper"><h2>무대를 준비하지 못했습니다.</h2><p role="alert">{error}</p><button onClick={replay}>다시 불러오기</button><Link to="/">허브로 돌아가기</Link></div></div>:view.mode==='intro'?<TitleScreen ready={ready} muted={muted} onStart={()=>scene.current?.start()} onIllustrations={()=>setGallery(true)} onCodex={()=>setCodex(true)} onSound={()=>{if(scene.current)setMuted(scene.current.toggleSound());}} />:null}
        {gallery&&<Illustrations onClose={()=>setGallery(false)} />}
        {codex&&<CodexBook onClose={()=>setCodex(false)} />}
        {!['intro','complete'].includes(view.mode)&&<div className="wt-hud"><div className="wt-stage-ticket"><small>첫 번째 막 · TEST</small><strong>{view.area}</strong></div><ol aria-label="공연 준비 진행"><li className={view.bridgeSolved?'done':''}>다리</li><li className={view.talked?'done':''}>플로라</li><li className={view.lightsSolved?'done':''}>조명</li></ol><Lives count={view.lives}/><button disabled={!['explore','testing'].includes(view.mode)} aria-expanded={view.mode==='testing'} onClick={()=>scene.current?.testMenu(view.mode!=='testing')}>테스트 위치</button><button aria-label="일시정지" disabled={view.mode!=='explore'} onClick={()=>scene.current?.pause()}>Ⅱ</button></div>}
        {view.mode==='testing'&&<TestPanel monsterId={view.monster} npcId={view.npc} onArea={id=>scene.current?.teleport(id)} onMonster={id=>scene.current?.testMonster(id)} onNpc={id=>scene.current?.testNpc(id)} onClose={()=>scene.current?.testMenu(false)}/>}
        {view.boss&&!['intro','testing','gameover','dialogue'].includes(view.mode)&&<section className="wt-boss-health" aria-label="보스 체력"><div><strong>{view.boss.name}</strong><span>{view.boss.hp===0?'막간 · 지휘자가 쉬어 갑니다':`제${view.boss.act}막 · ${view.boss.hp} / ${view.boss.maxHp}`}</span></div><div role="progressbar" aria-label={view.boss.name+' 체력'} aria-valuemin={0} aria-valuemax={view.boss.maxHp} aria-valuenow={view.boss.hp}><i style={{width:`${view.boss.hp/view.boss.maxHp*100}%`}}/></div></section>}
        {view.message&&view.mode==='explore'&&<div className="wt-toast" role="status">{view.message}</div>}
        {view.mode==='bridge'&&<div className="wt-bridge-help"><div><small>무대 조작 모드</small><h2>다리를 제자리로</h2><p>떠 있는 종이 다리를 오른쪽 점선으로 끌어 놓으세요.</p></div><button onClick={()=>scene.current?.closePuzzle()}>닫기 · Esc</button></div>}
        {view.mode==='dialogue'&&<Dialogue key={view.dialogue+view.npc} script={view.dialogue} npc={view.npc} advanceRef={advanceRef} onEnd={()=>scene.current?.finishDialogue()} onBlip={(speaker,emotion,pace)=>scene.current?.speak(speaker,emotion,pace)} />}
        {view.mode==='lights'&&<LightPuzzle onClose={()=>scene.current?.closePuzzle()} onCheck={()=>scene.current?.checkingLights()} onRetry={()=>scene.current?.retryLights()} onSolve={()=>scene.current?.solveLights()} />}
        {view.mode==='gameover'&&<GameOver onPrepare={()=>scene.current?.prepareRespawn()??Promise.resolve()} onFinish={()=>scene.current?.finishRespawn()} onCurtain={()=>scene.current?.curtainSound()} />}
        {view.mode==='pause'&&<div className="wt-modal-backdrop"><div className="wt-intro-paper wt-pause" role="dialog" aria-modal="true" aria-label="일시정지"><div className="wt-eyebrow">INTERMISSION / 막간</div><h2>잠깐, 숨을 고르고.</h2><p>모자를 고쳐 쓰면 다시 시작.</p><button className="wt-primary" onClick={()=>scene.current?.resume()}>공연 계속하기</button><button className="wt-secondary" onClick={replay}>테스트 처음부터</button><Link to="/">허브로 나가기</Link></div></div>}
        {view.mode==='complete'&&<div className="wt-modal-backdrop wt-completion"><div className="wt-intro-paper" role="dialog" aria-modal="true" aria-label="프로토타입 완료"><div className="wt-ticket">CURTAIN CALL</div><div className="wt-eyebrow">달 · 별 · 꽃</div><h2>첫 번째 막의 준비가<br/>끝났습니다.</h2><p>Prototype v0.1 Complete</p><button className="wt-primary" onClick={replay}>한 번 더 공연하기</button><Link to="/">프로젝트 목록으로</Link></div></div>}
      </div>
    </div>
    <footer className="wt-control-strip"><span><kbd>A</kbd><kbd>D</kbd> 이동</span><span><kbd>Space</kbd> 점프</span><span><kbd>E</kbd> 상호작용</span><span><kbd>F</kbd> / <kbd>J</kbd> 마법</span><span><kbd>Shift</kbd> / <kbd>K</kbd> 구르기</span><span>마우스 · 드래그</span><span><kbd>Esc</kbd> 일시정지</span>{view.talked&&<strong>달 → 별 → 꽃</strong>}</footer>
  </main>;
}
