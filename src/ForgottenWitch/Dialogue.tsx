import { useEffect, useMemo, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { assetUrl } from './config';
import scripts from './dialogue.json';
import ActingFrame from './ActingFrame';
import npcScripts from './npc-dialogue.json';
import stageScript from './stage-dialogue.json';
import {defaultStageCue} from './directionModel';
import type {StageCue} from './directionModel';
import type {NpcId} from './castData';
import { buildTimeline, EMOTIONS, lineText, portrait, SPEAKERS,conversationLabel,resolveNpcBeats } from './dialogueModel';
import type { DialogueBeat,DialogueLine,NpcDialogueBeat, Emotion, Speaker } from './dialogueModel';
const EMPTY_LINE:DialogueLine={speaker:'witch',emotion:'neutral',segments:[]};

export default function Dialogue({script,npc='flora',demo=false,paused=false,customBeats,cast,advanceRef,onEnd,onBlip,onStage}:{script:keyof typeof scripts;npc?:NpcId;demo?:boolean;paused?:boolean;customBeats?:DialogueBeat[];cast?:Speaker;advanceRef:RefObject<(()=>void)|null>;onEnd:()=>void;onBlip:(speaker:Speaker,emotion:Emotion,pace:number)=>void;onStage:(cue:StageCue,done:()=>void)=>()=>void}){
  const lines=useMemo<DialogueBeat[]>(()=>npc==='flora'?scripts[script] as DialogueBeat[]:resolveNpcBeats(npcScripts[npc] as NpcDialogueBeat[],npc),[npc,script]);
  const beats=useMemo<DialogueBeat[]>(()=>customBeats??(demo?stageScript.map(entry=>'cue' in entry?entry as DialogueBeat:{...entry,speaker:entry.speaker==='npc'?npc:entry.speaker} as DialogueLine):lines),[customBeats,demo,lines,npc]);
  const [index,setIndex]=useState(0),[visible,setVisible]=useState(0),[pace,setPace]=useState(1);
  const [faces,setFaces]=useState<Partial<Record<Speaker,Emotion>>>({witch:'neutral',[npc]:'neutral'});
  const entry=beats[index],staging='cue' in entry;
  const line=staging?(beats.slice(0,index).filter((beat):beat is DialogueLine=>'segments' in beat).at(-1)??beats.find((beat):beat is DialogueLine=>'segments' in beat)??EMPTY_LINE):entry;
  const partner=customBeats?(beats.slice(0,index+1).filter((beat):beat is DialogueLine=>'segments' in beat&&beat.speaker!=='witch').at(-1)?.speaker??cast??npc):npc;
  const timeline=useMemo(()=>staging?[]:buildTimeline(line),[line,staging]),text=lineText(line);
  const done=!staging&&!paused&&visible>=timeline.length;
  const live=useRef({pace,onBlip,onStage,paused,onEnd});useEffect(()=>{live.current={pace,onBlip,onStage,paused,onEnd};},[pace,onBlip,onStage,paused,onEnd]);
  const root=useRef<HTMLDivElement>(null),speed=useRef<HTMLInputElement>(null);
  useEffect(()=>{
    let active=true;
    const cue=staging?entry.cue:line.direction??defaultStageCue(line.speaker==='witch'?'player':'npc',line.emotion);
    const cancel=live.current.onStage(cue,()=>{if(active&&staging){if(index===beats.length-1)live.current.onEnd();else {setIndex(current=>current+1);setVisible(0);}}});
    return ()=>{active=false;cancel();};
  },[entry,line,staging,index,beats.length]);
  useEffect(()=>{
    const previous=document.activeElement as HTMLElement|null;speed.current?.focus({preventScroll:true});
    return ()=>previous?.focus({preventScroll:true});
  },[]);
  useEffect(()=>{
    if(staging)return;
    let count=0,timer=0,active=true,lastSound=-Infinity;
    const step=()=>{
      if(!active)return;
      if(live.current.paused){timer=window.setTimeout(step,50);return;}
      const glyph=timeline[count];if(!glyph)return;
      count++;setVisible(count);
      const now=performance.now();
      if(glyph.sound&&now-lastSound>35){live.current.onBlip(line.speaker,line.emotion,live.current.pace);lastSound=now;}
      if(count<timeline.length)timer=window.setTimeout(step,glyph.delayMs/live.current.pace);
    };
    timer=window.setTimeout(step,90);
    return ()=>{active=false;window.clearTimeout(timer);};
  },[line,timeline,staging]);
  const next=()=>{
    if(!done)return;
    if(index===beats.length-1)onEnd();
    else {setFaces(current=>({...current,[line.speaker]:line.emotion}));setIndex(index+1);setVisible(0);}
  };
  useEffect(()=>{advanceRef.current=next;return ()=>{advanceRef.current=null;};});
  const expression=(speaker:Speaker)=>line.speaker===speaker?line.emotion:faces[speaker]??'neutral';
  return <div className={`wt-dialogue ${staging?'wt-dialogue-hidden':''}`} ref={root} role="dialog" aria-modal="true" aria-label={conversationLabel(partner)} aria-hidden={staging||undefined} data-dialogue-index={index} data-typing={staging?'stage':done?'complete':'typing'} data-emotion={line.emotion} data-speaker={line.speaker} onKeyDown={event=>{
    if((event.target as HTMLInputElement).type==='range'&&event.key.startsWith('Arrow'))event.stopPropagation();
    if(event.key==='Enter'||event.key===' '){event.preventDefault();event.stopPropagation();if(!event.repeat)next();}
    if(event.key==='Tab'){
      const items=Array.from(root.current?.querySelectorAll<HTMLElement>('button:not(:disabled),input')??[]);
      const current=items.indexOf(document.activeElement as HTMLElement);event.preventDefault();items[(current+(event.shiftKey?-1:1)+items.length)%items.length]?.focus({preventScroll:true});
    }
  }}>
    {(['witch',partner] as const).map((speaker,i)=>['rabbit','mongsil','chef'].includes(speaker)?<div key={speaker} className={`wt-portrait wt-portrait-${i?'right':'left'}`}><ActingFrame file={`chapter/${speaker}-poses.png`} frame={line.emotion==='joy'?3:line.emotion==='flustered'?2:line.emotion==='worry'?1:0} label={SPEAKERS[speaker].name}/></div>:<img key={speaker} className={`wt-portrait wt-portrait-${i?'right':'left'} ${line.speaker===speaker?'speaking':''}`} data-expression={expression(speaker)} src={assetUrl(portrait(speaker,expression(speaker)))} alt={`${SPEAKERS[speaker].name} · ${EMOTIONS[expression(speaker)].label}`} />)}
    <div className="wt-dialogue-paper">
      <div className={`wt-nameplate wt-nameplate-${line.speaker}`}><strong className="wt-speaker">{SPEAKERS[line.speaker].name}</strong><span>{EMOTIONS[line.emotion].label}</span></div>
      <p className="wt-dialogue-text" aria-label={text}>
        {line.segments.map((segment,i)=>{
          const before=timeline.filter(g=>g.segment<i).length,characters=timeline.filter(g=>g.segment===i).map(g=>g.text);
          return <span key={i} data-text-segment={i} style={{color:segment.color,fontSize:segment.size?`${segment.size}em`:undefined,fontWeight:segment.weight}}>{characters.slice(0,Math.max(0,visible-before)).join('')}</span>;
        })}
        {!done&&<span className="wt-type-cursor" aria-hidden="true">▏</span>}
      </p>
      <div className="wt-dialogue-actions"><label className="wt-text-speed">대사 속도 <input ref={speed} aria-label="대사 출력 속도" type="range" min="0.6" max="1.8" step="0.2" value={pace} onChange={event=>setPace(Number(event.target.value))} /><output>{pace.toFixed(1)}×</output></label><span className="wt-dialogue-status" aria-live="polite">{paused?'막간':done?'Enter / Space':'말하는 중'}</span><button className="wt-dialogue-next" disabled={!done} onClick={next}>{!done?'대사 출력 중':index===beats.length-1?'대화 마치기':'다음 문장'} <span aria-hidden="true">{done?'▸':'…'}</span></button></div>
    </div>
  </div>;
}
