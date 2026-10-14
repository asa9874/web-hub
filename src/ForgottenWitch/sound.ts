import { EMOTIONS, SPEAKERS } from './dialogueModel';
import type { Emotion, Speaker } from './dialogueModel';
import { assetUrl } from './config';
type Cue='paper'|'footstep'|'solve'|'applause'|'cast'|'hit'|'hurt'|'gameover'|'curtain'|'ui'|'enemyAttack';
export class TheaterSound {
  private context: AudioContext | null = null;
  muted = false;
  private syllable=0;
  private lastCue=new Map<Cue,number>();
  private cueSerial=0;
  private buffers=new Map<string,AudioBuffer>();
  private loading=false;
  private abort=new AbortController();
  private sampleErrors:string[]=[];
  private raw=new Map<string,ArrayBuffer>();
  private preparation:Promise<void>|null=null;
  private decoding:Promise<void>|null=null;
  prepare(progress?:(value:number)=>void){
    if(this.preparation)return this.preparation;
    const keys=['paper','footstep','solve','cast','hit','hurt','gameover','curtain','ui'];let done=0;
    this.preparation=Promise.all(keys.map(async key=>{try{const response=await fetch(assetUrl(`audio/${key}.ogg`),{signal:AbortSignal.any([this.abort.signal,AbortSignal.timeout(15000)])});if(!response.ok)throw Error(key);const data=await response.arrayBuffer();if(!this.abort.signal.aborted)this.raw.set(key,data);}catch{if(!this.abort.signal.aborted)this.sampleErrors.push(key);}finally{if(!this.abort.signal.aborted)progress?.(++done/keys.length);}})).then(()=>{});
    return this.preparation;
  }
  blip(speaker:Speaker,emotion:Emotion,pace=1){
    if(!this.context||this.muted||this.context.state!=='running')return;
    const ctx=this.context,voice=SPEAKERS[speaker],feeling=EMOTIONS[emotion];
    const oscillator=ctx.createOscillator(),gain=ctx.createGain(),filter=ctx.createBiquadFilter();
    const t=ctx.currentTime,duration=feeling.duration/Math.sqrt(pace);
    oscillator.type=voice.wave;oscillator.frequency.setValueAtTime(voice.frequency*feeling.pitch*(1+((this.syllable++%5)-2)*.008),t);
    oscillator.frequency.exponentialRampToValueAtTime(voice.frequency*feeling.pitch*.91,t+duration);
    filter.type='lowpass';filter.frequency.value=speaker==='witch'?1100:1900;
    gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(.027*feeling.gain,t+.006);gain.gain.exponentialRampToValueAtTime(.0001,t+duration);
    oscillator.connect(filter);filter.connect(gain);gain.connect(ctx.destination);
    oscillator.onended=()=>{oscillator.disconnect();filter.disconnect();gain.disconnect();};
    oscillator.start(t);oscillator.stop(t+duration+.012);
  }
  unlock() { this.context ??= new AudioContext(); void this.context.resume().catch(()=>{});
    if(!this.loading){this.loading=true;const ctx=this.context;this.decoding=this.prepare().then(async()=>{await Promise.all([...this.raw].map(async([key,data])=>{try{const buffer=await ctx.decodeAudioData(data.slice(0));if(this.context===ctx)this.buffers.set(key,buffer);}catch{if(!this.abort.signal.aborted)this.sampleErrors.push(key);}}));});}
    return this.decoding??Promise.resolve();
  }
  snapshot(){return {loaded:this.buffers.size,errors:this.sampleErrors};}
  cue(kind:Cue) {
    if(!this.context||this.muted||this.context.state!=='running') return;
    const ctx=this.context;
    const gap=kind==='footstep'?.065:kind==='paper'?.09:kind==='enemyAttack'?.10:kind==='hit'?.035:0;
    if(ctx.currentTime-(this.lastCue.get(kind)??-10)<gap)return;this.lastCue.set(kind,ctx.currentTime);
    const key=kind==='enemyAttack'?'hit':kind,buffer=this.buffers.get(key);
    if(buffer){const source=ctx.createBufferSource(),gain=ctx.createGain();source.buffer=buffer;const variation=((this.cueSerial++%5)-2)*.015;source.playbackRate.value=(kind==='footstep'||kind==='paper'||kind==='hit')?1+variation:1;gain.gain.value=(kind==='footstep'?.12:kind==='hurt'?.24:kind==='enemyAttack'?.13:.20)*(1+variation);source.connect(gain);gain.connect(ctx.destination);source.onended=()=>{source.disconnect();gain.disconnect();};source.start();return;}
    if(kind==='applause') {
      const buffer=ctx.createBuffer(1,ctx.sampleRate*.9,ctx.sampleRate);
      const data=buffer.getChannelData(0);
      for(let i=0;i<data.length;i++){const t=i/ctx.sampleRate;data[i]=(Math.random()*2-1)*Math.exp(-t*4)*Math.pow(Math.sin(t*44),8)*.08;}
      const source=ctx.createBufferSource();source.buffer=buffer;source.connect(ctx.destination);source.onended=()=>source.disconnect();source.start();return;
    }
    const tones=kind==='solve'?[392,494,587]:[180];
    tones.forEach((frequency,i)=>{
      const oscillator=ctx.createOscillator(),gain=ctx.createGain();oscillator.type='sine';oscillator.frequency.value=frequency;
      const t=ctx.currentTime+i*.11;gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(kind==='footstep'?.009:.035,t+.015);gain.gain.exponentialRampToValueAtTime(.0001,t+(kind==='footstep'?.09:.22));
      oscillator.connect(gain);gain.connect(ctx.destination);oscillator.onended=()=>{oscillator.disconnect();gain.disconnect();};oscillator.start(t);oscillator.stop(t+.25);
    });
  }
  destroy(){ this.abort.abort();this.buffers.clear();this.raw.clear();this.lastCue.clear();if(this.context) void this.context.close();this.context=null; }
}
