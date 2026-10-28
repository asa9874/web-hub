/** Presentation only: never reads or consumes world RNG, and never delays commands. */
export type SoundCue='click'|'select'|'page'|'event'|'growth'|'gift'|'dice'|'success'|'failure';
export interface AudioSettings {volume:number;muted:boolean;detail:'full'|'essential'}
export const AUDIO_STORAGE='academy.audio.v1';
export const DEFAULT_AUDIO:AudioSettings={volume:.45,muted:false,detail:'full'};
export function readAudioSettings(raw:string|null):AudioSettings {
 try{const s=JSON.parse(raw??'null');return {volume:typeof s?.volume==='number'&&Number.isFinite(s.volume)?Math.min(1,Math.max(0,s.volume)):DEFAULT_AUDIO.volume,muted:typeof s?.muted==='boolean'?s.muted:false,detail:s?.detail==='essential'?'essential':'full'};}catch{return {...DEFAULT_AUDIO};}
}
export interface SoundNote {at:number;duration:number;frequency:number;gain:number;type:OscillatorType;end?:number}
const note=(frequency:number,at=0,duration=.16,gain=.12,type:OscillatorType='sine',end?:number):SoundNote=>({frequency,at,duration,gain,type,end});
/** A common pentatonic glass/wood palette; bounded local variants, no random sampling. */
export function soundScore(cue:SoundCue,variant=0):SoundNote[]{
 const shift=[1,1.012,.992][Math.abs(variant)%3];
 const scores:Record<SoundCue,SoundNote[]>={
  click:[note(440,0,.055,.085,'triangle',330),note(1320,.008,.075,.025)],
  select:[note(523.25,0,.11,.1,'triangle'),note(783.99,.035,.17,.07)],
  page:[note(261.63,0,.14,.07,'triangle',392),note(523.25,.055,.18,.05)],
  event:[note(392,0,.42,.09),note(587.33,.08,.48,.075),note(783.99,.18,.55,.045)],
  growth:[note(392,0,.22,.1,'triangle'),note(523.25,.09,.28,.09),note(783.99,.19,.48,.08)],
  gift:[note(261.63,0,.7,.09),note(523.25,.1,.8,.08),note(783.99,.23,.7,.06),note(1046.5,.36,.6,.045)],
  dice:[0,.07,.16,.28,.43].map((at,i)=>note(220+i*53,at,.045,.08-i*.008,'triangle',100+i*20)),
  success:[note(523.25,0,.25,.1),note(659.25,.07,.3,.07),note(783.99,.14,.4,.07)],
  failure:[note(392,0,.2,.085,'triangle'),note(293.66,.09,.28,.065,'triangle')],
 };return scores[cue].map(n=>({...n,frequency:n.frequency*shift,end:n.end===undefined?undefined:n.end*shift}));
}
export function createGameAudio(makeContext:()=>AudioContext|undefined=()=>{
 if(typeof window==='undefined'||!window.AudioContext)return undefined;return new window.AudioContext();
}){
 let context:AudioContext|undefined,master:GainNode|undefined,settings={...DEFAULT_AUDIO},disposed=false,variant=0,last=-Infinity;
 const recent=new Map<SoundCue,number>();
 const active=new Set<OscillatorNode|AudioBufferSourceNode>();
 const clear=()=>{for(const source of active){try{source.stop();}catch{/* Already ended. */}source.disconnect();}active.clear();};
 const gain=()=>settings.muted?0:settings.volume*.65;
 const update=(next:AudioSettings)=>{settings=readAudioSettings(JSON.stringify(next));if(context&&master)master.gain.setTargetAtTime(gain(),context.currentTime,.015);if(settings.muted||settings.volume===0)clear();};
 // Called synchronously from a user gesture. Never construct contexts at render/startup.
 const unlock=()=>{if(disposed||settings.muted||settings.volume===0)return;try{if(!context){context=makeContext();if(context){master=context.createGain();master.gain.value=gain();master.connect(context.destination);}}if(context?.state==='suspended')void context.resume().catch(()=>{});}catch{/* Unsupported/blocked audio must never block play. */}};
 const play=(cue:SoundCue)=>{
  if(disposed||settings.muted||settings.volume===0||!context||!master||context.state!=='running')return false;
  if(settings.detail==='essential'&&['click','select','page','dice'].includes(cue))return false;
  const now=context.currentTime;
  if((['click','select','page'].includes(cue)&&now-last<.045)||now-(recent.get(cue)??-Infinity)<.12||active.size>24)return false;last=now;recent.set(cue,now);
  try{
   const track=(s:OscillatorNode|AudioBufferSourceNode,env:GainNode,start:number,end:number)=>{active.add(s);s.onended=()=>{active.delete(s);s.disconnect();env.disconnect();};s.connect(env);env.connect(master!);s.start(start);s.stop(end);};
   for(const n of soundScore(cue,variant++)){
    const start=now+n.at+.005,end=start+n.duration,osc=context.createOscillator(),env=context.createGain();osc.type=n.type;osc.frequency.setValueAtTime(n.frequency,start);if(n.end)osc.frequency.exponentialRampToValueAtTime(n.end,end);env.gain.setValueAtTime(0,start);env.gain.linearRampToValueAtTime(n.gain,start+.004);env.gain.exponentialRampToValueAtTime(.0001,end);track(osc,env,start,end+.01);
   }
   // Quiet filtered paper/dice friction: one tiny transient buffer, no asset fetch.
   if(cue==='page'||cue==='dice'){
    const buffer=context.createBuffer(1,Math.ceil(context.sampleRate*.06),context.sampleRate),data=buffer.getChannelData(0);let seed=431;
    for(let i=0;i<data.length;i++){seed=(seed*1664525+1013904223)>>>0;data[i]=(seed/4294967296*2-1)*(1-i/data.length)*.12;}
    const src=context.createBufferSource(),env=context.createGain();src.buffer=buffer;env.gain.value=.08;track(src,env,now,now+.065);
   }return true;
  }catch{clear();return false;}
 };
 return {unlock,play,update,silence:clear,suspend(){clear();if(context?.state==='running')void context.suspend().catch(()=>{});},dispose(){disposed=true;clear();if(context)void context.close().catch(()=>{});context=undefined;master=undefined;}};
}
