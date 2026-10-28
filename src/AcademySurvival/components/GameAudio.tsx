import {createContext,useContext,useEffect,useRef,useState} from 'react';
import type {ReactNode} from 'react';
import {AUDIO_STORAGE,createGameAudio,readAudioSettings} from '../systems/gameAudio';
import type {AudioSettings,SoundCue} from '../systems/gameAudio';
import './GameAudio.css';
const Context=createContext<{settings:AudioSettings;update:(s:AudioSettings)=>void;play:(cue:SoundCue)=>void;preview:()=>void}|null>(null);
export const useGameAudio=()=>useContext(Context);
export function GameAudioProvider({children}:{children:ReactNode}){
 const [settings,setSettings]=useState(()=>{try{return readAudioSettings(localStorage.getItem(AUDIO_STORAGE));}catch{return readAudioSettings(null);}});
 const engine=useRef<ReturnType<typeof createGameAudio>|null>(null);
 useEffect(()=>{const audio=createGameAudio();engine.current=audio;audio.update(settings);const hide=()=>{if(document.hidden)audio.suspend();};document.addEventListener('visibilitychange',hide);return()=>{document.removeEventListener('visibilitychange',hide);audio.dispose();engine.current=null;};},[]);
 useEffect(()=>{engine.current?.update(settings);},[settings]);
 const update=(s:AudioSettings)=>{const normalized=readAudioSettings(JSON.stringify(s));engine.current?.update(normalized);setSettings(normalized);try{localStorage.setItem(AUDIO_STORAGE,JSON.stringify(normalized));}catch{/* Session setting remains available. */}};
 const play=(cue:SoundCue)=>{if(!document.hidden)engine.current?.play(cue);};
 return <Context.Provider value={{settings,update,play,preview:()=>{engine.current?.unlock();play('gift');}}}><div className="ac-audio-root" onPointerDownCapture={()=>engine.current?.unlock()} onKeyDownCapture={e=>{if(e.key==='Enter'||e.key===' ')engine.current?.unlock();}} onClickCapture={e=>{
  const el=e.target instanceof Element?e.target.closest('button,a,summary,input[type=checkbox],input[type=radio]'):null;
  if(!el||el.closest('[data-sfx="off"]')||el.matches(':disabled,[aria-disabled=true]'))return;
  play(el.closest('nav')?'page':el.matches('[aria-pressed],input')?'select':'click');
 }} onChangeCapture={e=>{if(e.target instanceof HTMLSelectElement)play('select');}}>{children}</div></Context.Provider>;
}
export function AudioSettingsPanel(){const api=useGameAudio();if(!api)return null;const s=api.settings;return <fieldset className="ac-audio-settings" data-sfx="off"><legend>효과음 · 아카데미의 울림</legend><label><input type="checkbox" checked={s.muted} onChange={e=>api.update({...s,muted:e.target.checked})}/>효과음 음소거</label><label>효과음 볼륨 <output>{Math.round(s.volume*100)}%</output><input aria-label="효과음 볼륨" type="range" min="0" max="100" value={Math.round(s.volume*100)} onChange={e=>api.update({...s,volume:Number(e.target.value)/100})}/></label><label>소리 연출<select value={s.detail} onChange={e=>api.update({...s,detail:e.target.value as AudioSettings['detail']})}><option value="full">조작과 주요 순간</option><option value="essential">중요 순간만 · 조작·주사위 소리 끄기</option></select></label><button type="button" disabled={s.muted||s.volume===0} onClick={api.preview}>효과음 미리 듣기</button><small>종·현·종이의 짧은 울림. BGM은 포함하지 않습니다.</small></fieldset>;}
/** One sound per visible scene; rerenders and typewriter text do not retrigger it. */
export function useSceneSound(key:string,cue:SoundCue){const audio=useGameAudio(),last=useRef('');useEffect(()=>{if(last.current===key)return;last.current=key;audio?.play(cue);},[key,cue,audio]);}
