import { useEffect, useRef, useState } from 'react';
import artworks from './illustrations.json';
import { assetUrl } from './config';

export default function Illustrations({onClose}:{onClose:()=>void}) {
  const [selected,setSelected]=useState<(typeof artworks)[number]|null>(null);
  const root=useRef<HTMLDivElement>(null),close=useRef<HTMLButtonElement>(null);
  useEffect(()=>{
    const previous=document.activeElement as HTMLElement|null;
    close.current?.focus({preventScroll:true});
    return ()=>previous?.focus({preventScroll:true});
  },[]);
  return <div className="wt-gallery" ref={root} role="dialog" aria-modal="true" aria-label="일러스트레이션" onKeyDown={event=>{
    event.stopPropagation();
    if(event.key==='Escape'){event.preventDefault();if(selected)setSelected(null);else onClose();}
    if(event.key==='Tab'){
      const scope=selected?root.current?.querySelector('.wt-art-detail'):root.current;
      const items=Array.from(scope?.querySelectorAll<HTMLElement>('button,a[href]')??[]);
      const index=items.indexOf(document.activeElement as HTMLElement);
      if(items.length){event.preventDefault();items[(index+(event.shiftKey?-1:1)+items.length)%items.length].focus({preventScroll:true});document.activeElement?.scrollIntoView({block:'nearest'});}
    }
  }}>
    <header className="wt-gallery-header"><div><small>THE FORGOTTEN WITCH’S THEATER / ARTWORKS</small><h2>일러스트레이션 <span>20</span></h2><p>아직 쓰이지 않은 장면들. 이야기와 실제 사용 여부는 미정입니다.</p></div><button ref={close} onClick={onClose}>← 메인 화면</button></header>
    <div className="wt-art-grid">{artworks.map((art,index)=><article className="wt-art-card" key={art.id}>
      <button className="wt-art-image" onClick={()=>setSelected(art)} aria-label={art.title+' 상세보기'}><img src={assetUrl(art.image)} alt={art.title} loading="lazy" /></button>
      <div><small>SCENE {String(index+1).padStart(2,'0')} · {art.id.startsWith('chibi')?'CHIBI':'ILLUSTRATION'}</small><h3>{art.title}</h3><p>{art.description}</p><button onClick={()=>setSelected(art)}>상세보기 <span>↗</span></button></div>
    </article>)}</div>
    {selected&&<ArtworkDetail key={selected.id} art={selected} onClose={()=>setSelected(null)} />}
  </div>;
}
function ArtworkDetail({art,onClose}:{art:(typeof artworks)[number];onClose:()=>void}) {
  const button=useRef<HTMLButtonElement>(null);
  useEffect(()=>{const previous=document.activeElement as HTMLElement|null;button.current?.focus({preventScroll:true});return ()=>previous?.focus({preventScroll:true});},[]);
  return <section className="wt-art-detail" role="dialog" aria-modal="true" aria-label={art.title+' 상세보기'}>
    <header><div><small>CUTSCENE CONCEPT / NOT CANON</small><h2>{art.title}</h2></div><button ref={button} onClick={onClose}>닫기 · Esc</button></header>
    <div className="wt-art-detail-scroll"><img src={assetUrl(art.image)} alt={art.title} /><p>{art.description}</p><div className="wt-art-prompt"><h3>생성 프롬프트</h3><p>기준 그림: witch-portrait.png · 실제 생성 도구: image_gen</p><pre>{art.prompt}</pre></div></div>
  </section>;
}
