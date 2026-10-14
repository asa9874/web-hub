import { Link } from 'react-router-dom';
import { assetUrl } from './config';
export default function TitleScreen({ready,muted,onStart,onSound,onIllustrations,onCodex,onExit}:{ready:boolean;muted:boolean;onStart:()=>void;onSound:()=>void;onIllustrations:()=>void;onCodex:()=>void;onExit?:React.MouseEventHandler<HTMLAnchorElement>}) {
  return <section className="wt-title-screen" inert={!ready} aria-label="게임 타이틀 화면" onKeyDown={event=>{
    const button=event.target as HTMLElement;
    if((event.key==='Enter'||event.key===' ')&&button.tagName==='BUTTON'){
      event.preventDefault();if(!event.repeat)button.click();
    }
    if(event.key==='ArrowDown'||event.key==='ArrowUp'){
      const items=Array.from(event.currentTarget.querySelectorAll<HTMLElement>('.wt-title-menu button:not(:disabled),.wt-title-menu a'));
      const i=items.indexOf(button);event.preventDefault();items[(i+(event.key==='ArrowDown'?1:-1)+items.length)%items.length]?.focus({preventScroll:true});
    }
  }}>
    <div className="wt-title-light" aria-hidden="true" />
    <div className="wt-title-orbit" aria-hidden="true"><span>☾</span><i/><i/><i/></div>
    <img className="wt-title-hero" src={assetUrl('witch-knee.png')} alt="극장의 견습 마녀" />
    <div className="wt-title-content">
      <div className="wt-title-kicker"><span/>THE FORGOTTEN WITCH’S THEATER</div>
      <h1><span>잊혀진</span><strong>마녀의 극장</strong></h1>
      <div className="wt-title-chapter"><span>ACT I</span>막이 오르지 않는 숲</div>
      <nav className="wt-title-menu" aria-label="극장 메인 메뉴">
        <button disabled className="wt-title-start"><span className="wt-menu-mark" aria-hidden="true">✦</span>극장에 들어가기 <small>준비 중</small></button>
        <button disabled={!ready} onClick={onStart}><span className="wt-menu-mark" aria-hidden="true">◇</span>{ready?'테스트':'무대 준비 중…'}<span className="wt-menu-arrow" aria-hidden="true">→</span></button>
        <button onClick={onSound}><span className="wt-menu-mark" aria-hidden="true">◇</span>{muted?'소리 켜기':'소리 끄기'}</button>
        <button onClick={onIllustrations}><span className="wt-menu-mark" aria-hidden="true">◇</span>일러스트레이션</button>
        <button onClick={onCodex}><span className="wt-menu-mark" aria-hidden="true">◇</span>설정집</button>
        <Link to="/" onClick={onExit}><span className="wt-menu-mark" aria-hidden="true">◇</span>허브로 돌아가기</Link>
      </nav>
    </div>
    <img className="wt-title-arch" src={assetUrl('title-arch.png')} alt="" aria-hidden="true" />
    <div className="wt-title-bottom"><span>키보드 + 마우스</span><i/><span>첫 번째 공연 · 3–7분</span><strong>PROTOTYPE v0.1</strong></div>
  </section>;
}
