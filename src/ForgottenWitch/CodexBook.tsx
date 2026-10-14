import {useEffect,useRef,useState} from 'react';
import {assetUrl} from './config';
import ActingFrame from './ActingFrame';
import {CODEX_CATEGORIES,codexEntries} from './codexData';
import type {CodexEntry} from './codexData';
export default function CodexBook({onClose}:{onClose:()=>void}){
  const [category,setCategory]=useState<(typeof CODEX_CATEGORIES)[number]>('등장인물'),[selected,setSelected]=useState<CodexEntry|null>(null),[image,setImage]=useState(0);
  const root=useRef<HTMLDivElement>(null),grid=useRef<HTMLDivElement>(null);
  useEffect(()=>{const previous=document.activeElement as HTMLElement|null;root.current?.querySelector<HTMLElement>('button')?.focus({preventScroll:true});return ()=>previous?.focus({preventScroll:true});},[]);
  return <div className="wt-gallery wt-codex" ref={root} role="dialog" aria-modal="true" aria-label="설정집" onKeyDown={event=>{
    event.stopPropagation();if(event.key==='Escape'){if(selected)setSelected(null);else onClose();}
    if(event.key==='Tab'){const scope=selected?root.current?.querySelector('.wt-codex-detail'):root.current,items=Array.from(scope?.querySelectorAll<HTMLElement>('button')??[]);event.preventDefault();const i=items.indexOf(document.activeElement as HTMLElement);items[(i+(event.shiftKey?-1:1)+items.length)%items.length]?.focus({preventScroll:true});}
  }}>
    <header className="wt-gallery-header"><div><small>THE WITCH’S FIELD NOTES</small><h2>설정집</h2><p>모든 설정은 임시 단계이며, 확정된 이야기가 아닙니다.</p></div><button onClick={onClose}>← 메인 화면</button></header>
    <nav className="wt-codex-tabs" aria-label="설정집 카테고리">{CODEX_CATEGORIES.map(c=><button key={c} aria-pressed={category===c} onClick={()=>{setCategory(c);if(grid.current)grid.current.scrollTop=0;}}>{c}</button>)}</nav>
    <div className="wt-art-grid" ref={grid}>{codexEntries.filter(entry=>entry.category===category).map(entry=><button key={entry.id} className="wt-codex-card" onClick={()=>{setSelected(entry);setImage(0);}}><img src={assetUrl(entry.images[0].file)} alt=""/><strong>{entry.name}</strong><span>{entry.subtitle}</span></button>)}</div>
    {selected&&<section className="wt-codex-detail" role="dialog" aria-label={selected.name+' 설정'}><header><div><small>임시 설정 · {selected.category}</small><h2>{selected.name}</h2></div><button onClick={()=>setSelected(null)}>닫기 · Esc</button></header><div className="wt-codex-detail-body"><div className="wt-codex-standing">{selected.images[image].frame!==undefined?<ActingFrame file={selected.images[image].file} frame={selected.images[image].frame!} label={selected.name+' · '+selected.images[image].label}/>:<img src={assetUrl(selected.images[image].file)} alt={selected.name+' · '+selected.images[image].label}/>}<div><button disabled={selected.images.length<2} aria-label="이전 이미지" onClick={()=>setImage((image-1+selected.images.length)%selected.images.length)}>←</button><span>{selected.images[image].label} · {image+1}/{selected.images.length}</span><button disabled={selected.images.length<2} aria-label="다음 이미지" onClick={()=>setImage((image+1)%selected.images.length)}>→</button></div></div><div className="wt-codex-writing"><p>{selected.description}</p><h3>특징</h3><ul>{selected.traits.map(trait=><li key={trait}>{trait}</li>)}</ul><aside><h3>마녀의 노트</h3><p>{selected.note}</p></aside>{selected.musicPrompt&&<section><h3>Suno AI 제작 프롬프트</h3><span className="wt-music-status">음원 미제작</span><pre className="wt-music-prompt">{selected.musicPrompt}</pre></section>}</div></div></section>}
  </div>;
}
