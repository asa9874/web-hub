import { useEffect, useMemo, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { assetUrl } from './config';
import scripts from './dialogue.json';
import { buildTimeline, EMOTIONS, lineText, portrait, SPEAKERS } from './dialogueModel';
import type { DialogueLine, Emotion, Speaker } from './dialogueModel';

export default function Dialogue({script,advanceRef,onEnd,onBlip}:{script:keyof typeof scripts;advanceRef:RefObject<(()=>void)|null>;onEnd:()=>void;onBlip:(speaker:Speaker,emotion:Emotion,pace:number)=>void}){
  const lines=scripts[script] as DialogueLine[];
  const [index,setIndex]=useState(0),[visible,setVisible]=useState(0),[pace,setPace]=useState(1);
  const [faces,setFaces]=useState<Record<Speaker,Emotion>>({witch:'neutral',flora:'neutral'});
  const line=lines[index],timeline=useMemo(()=>buildTimeline(line),[line]),text=lineText(line);
  const done=visible>=timeline.length;
  const live=useRef({pace,onBlip});useEffect(()=>{live.current={pace,onBlip};},[pace,onBlip]);
  const root=useRef<HTMLDivElement>(null),speed=useRef<HTMLInputElement>(null);
  useEffect(()=>{
    const previous=document.activeElement as HTMLElement|null;speed.current?.focus({preventScroll:true});
    return ()=>previous?.focus({preventScroll:true});
  },[]);
  useEffect(()=>{
    let count=0,timer=0,active=true,lastSound=-Infinity;
    const step=()=>{
      if(!active)return;
      const glyph=timeline[count];if(!glyph)return;
      count++;setVisible(count);
      const now=performance.now();
      if(glyph.sound&&now-lastSound>35){live.current.onBlip(line.speaker,line.emotion,live.current.pace);lastSound=now;}
      if(count<timeline.length)timer=window.setTimeout(step,glyph.delayMs/live.current.pace);
    };
    timer=window.setTimeout(step,90);
    return ()=>{active=false;window.clearTimeout(timer);};
  },[line,timeline]);
  const next=()=>{
    if(!done)return;
    if(index===lines.length-1)onEnd();
    else {setFaces(current=>({...current,[line.speaker]:line.emotion}));setIndex(index+1);setVisible(0);}
  };
  useEffect(()=>{advanceRef.current=next;return ()=>{advanceRef.current=null;};});
  const expression=(speaker:Speaker)=>line.speaker===speaker?line.emotion:faces[speaker];
  return <div className="wt-dialogue" ref={root} role="dialog" aria-modal="true" aria-label="플로라와 대화" data-dialogue-index={index} data-typing={done?'complete':'typing'} data-emotion={line.emotion} data-speaker={line.speaker} onKeyDown={event=>{
    if((event.target as HTMLInputElement).type==='range'&&event.key.startsWith('Arrow'))event.stopPropagation();
    if(event.key==='Enter'||event.key===' '){event.preventDefault();event.stopPropagation();if(!event.repeat)next();}
    if(event.key==='Tab'){
      const items=Array.from(root.current?.querySelectorAll<HTMLElement>('button:not(:disabled),input')??[]);
      const current=items.indexOf(document.activeElement as HTMLElement);event.preventDefault();items[(current+(event.shiftKey?-1:1)+items.length)%items.length]?.focus({preventScroll:true});
    }
  }}>
    {(['witch','flora'] as const).map((speaker,i)=><img key={speaker} className={`wt-portrait wt-portrait-${i?'right':'left'} ${line.speaker===speaker?'speaking':''}`} data-expression={expression(speaker)} src={assetUrl(portrait(speaker,expression(speaker)))} alt={`${SPEAKERS[speaker].name} · ${EMOTIONS[expression(speaker)].label}`} />)}
    <div className="wt-dialogue-paper">
      <div className={`wt-nameplate wt-nameplate-${line.speaker}`}><strong className="wt-speaker">{SPEAKERS[line.speaker].name}</strong><span>{EMOTIONS[line.emotion].label}</span></div>
      <p className="wt-dialogue-text" aria-label={text}>
        {line.segments.map((segment,i)=>{
          const before=timeline.filter(g=>g.segment<i).length,characters=timeline.filter(g=>g.segment===i).map(g=>g.text);
          return <span key={i} data-text-segment={i} style={{color:segment.color,fontSize:segment.size?`${segment.size}em`:undefined,fontWeight:segment.weight}}>{characters.slice(0,Math.max(0,visible-before)).join('')}</span>;
        })}
        {!done&&<span className="wt-type-cursor" aria-hidden="true">▏</span>}
      </p>
      <div className="wt-dialogue-actions"><label className="wt-text-speed">대사 속도 <input ref={speed} aria-label="대사 출력 속도" type="range" min="0.6" max="1.8" step="0.2" value={pace} onChange={event=>setPace(Number(event.target.value))} /><output>{pace.toFixed(1)}×</output></label><span className="wt-dialogue-status" aria-live="polite">{done?'Enter / Space':'말하는 중'}</span><button className="wt-dialogue-next" disabled={!done} onClick={next}>{!done?'대사 출력 중':index===lines.length-1?'대화 마치기':'다음 문장'} <span aria-hidden="true">{done?'▸':'…'}</span></button></div>
    </div>
  </div>;
}
