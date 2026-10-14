import { Link } from 'react-router-dom';
import { useState } from 'react';
import { assetUrl } from './config';
export default function TitleScreen({ready,muted,onStart,onOpening,onChapter,onSound,onIllustrations,onCodex,onExit}:{ready:boolean;muted:boolean;onStart:()=>void;onOpening:()=>void;onChapter:()=>void;onSound:()=>void;onIllustrations:()=>void;onCodex:()=>void;onExit?:React.MouseEventHandler<HTMLAnchorElement>}) {
  const [videoReady,setVideoReady]=useState(false);
  return <section className={`wt-title-screen${videoReady?' wt-title-video-ready':''}`} inert={!ready} aria-label="게임 타이틀 화면" onKeyDown={event=>{
    const button=event.target as HTMLElement;
    if((event.key==='Enter'||event.key===' ')&&button.tagName==='BUTTON'){
      event.preventDefault();if(!event.repeat)button.click();
    }
    if(event.key==='ArrowDown'||event.key==='ArrowUp'){
      const items=Array.from(event.currentTarget.querySelectorAll<HTMLElement>('.wt-title-menu button:not(:disabled),.wt-title-menu a'));
      const i=items.indexOf(button);event.preventDefault();items[(i+(event.key==='ArrowDown'?1:-1)+items.length)%items.length]?.focus({preventScroll:true});
    }
  }}>
    <video className="wt-title-video" src={assetUrl('video/main_video.mp4')} autoPlay loop muted playsInline preload="auto" aria-hidden="true" onPlaying={()=>setVideoReady(true)} onError={()=>setVideoReady(false)} />
    <div className="wt-title-video-shade" aria-hidden="true" />
    <div className="wt-title-light" aria-hidden="true" />
    <div className="wt-title-orbit" aria-hidden="true"><span>☾</span><i/><i/><i/></div>
    <img className="wt-title-hero" src={assetUrl('witch-knee.png')} alt="극장의 견습 마녀" />
    <div className="wt-title-content">
      <div className="wt-title-kicker"><span/>THE FORGOTTEN WITCH’S THEATER</div>
      <h1><span>잊혀진</span><strong>마녀의 극장</strong></h1>
      <div className="wt-title-chapter"><span>ACT I</span>막이 오르지 않는 숲</div>
      <nav className="wt-title-menu" aria-label="극장 메인 메뉴">
        <button disabled={!ready} onClick={onOpening} className="wt-title-start"><span className="wt-menu-mark" aria-hidden="true">✦</span>극장에 들어가기 <small>오프닝</small></button>
        <button disabled={!ready} onClick={onChapter}><span className="wt-menu-mark" aria-hidden="true">◇</span>Chapter 01 · 이어하기</button>
        <button disabled={!ready} onClick={onStart}><span className="wt-menu-mark" aria-hidden="true">◇</span>{ready?'테스트':'무대 준비 중…'}<span className="wt-menu-arrow" aria-hidden="true">→</span></button>
        <button onClick={onSound}><span className="wt-menu-mark" aria-hidden="true">◇</span>{muted?'소리 켜기':'소리 끄기'}</button>
        <button onClick={onIllustrations}><span className="wt-menu-mark" aria-hidden="true">◇</span>일러스트레이션</button>
        <button onClick={onCodex}><span className="wt-menu-mark" aria-hidden="true">◇</span>설정집</button>
        <Link to="/" onClick={onExit}><span className="wt-menu-mark" aria-hidden="true">◇</span>허브로 돌아가기</Link>
      </nav>
    </div>
    <div className="wt-title-bottom"><span>키보드 + 마우스</span><i/><span>챕터 1 · 개발 중</span><strong>PROTOTYPE v0.1</strong></div>
  </section>;
}
