import type {OpeningStage} from './openingData';
// Original local score and ambience, synthesized with Web Audio; no external services or recordings.
export class OpeningAudio {
 private ctx:AudioContext;
 private master:GainNode;
 private noise:AudioBuffer;
 private sources:AudioScheduledSourceNode[]=[];
 private nextNote=0;private nextTick=0;private nextAir=0;private previous='';private dead=false;
 muted=false;
 constructor(){this.ctx=new AudioContext();void this.ctx.resume();this.master=this.ctx.createGain();this.master.gain.value=.65;this.master.connect(this.ctx.destination);this.noise=this.ctx.createBuffer(1,this.ctx.sampleRate*2,this.ctx.sampleRate);const data=this.noise.getChannelData(0);let last=0;for(let i=0;i<data.length;i++){last=(last+(Math.random()*2-1)*.05)/1.04;data[i]=last;}}
 private tone(hz:number,duration:number,gain:number,type:OscillatorType='sine'){if(this.dead)return;const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=type;o.frequency.value=hz;const now=this.ctx.currentTime;g.gain.setValueAtTime(0,now);g.gain.linearRampToValueAtTime(gain,now+.015);g.gain.exponentialRampToValueAtTime(.0001,now+duration);o.connect(g);g.connect(this.master);o.start();o.stop(now+duration+.03);this.sources.push(o);o.onended=()=>{o.disconnect();g.disconnect();this.sources=this.sources.filter(s=>s!==o);};}
 private air(gain:number,frequency:number,duration=.5){if(this.dead)return;const n=this.ctx.createBufferSource(),f=this.ctx.createBiquadFilter(),g=this.ctx.createGain();n.buffer=this.noise;f.type='lowpass';f.frequency.value=frequency;const now=this.ctx.currentTime;g.gain.setValueAtTime(0,now);g.gain.linearRampToValueAtTime(gain,now+.06);g.gain.linearRampToValueAtTime(0,now+duration);n.connect(f);f.connect(g);g.connect(this.master);n.start();n.stop(now+duration);this.sources.push(n);n.onended=()=>{n.disconnect();f.disconnect();g.disconnect();this.sources=this.sources.filter(s=>s!==n);};}
 cue(kind:'page'|'impact'|'door'){if(kind==='page')this.air(.16,1700,.18);else if(kind==='impact'){this.air(.42,900,.45);this.tone(105,.35,.06,'triangle');}else{this.air(.24,550,1.8);this.tone(82,1.7,.035,'triangle');}}
 update(stage:OpeningStage,t:number,dt:number){if(this.dead)return;const fade=stage==='chapter'?Math.min(1,Math.max(0,(11-t)/2)):1;this.master.gain.setTargetAtTime(this.muted?0:.65*fade,this.ctx.currentTime,.08);if(this.previous!==stage){this.previous=stage;this.nextNote=0;if(stage==='whiteout'){for(const s of this.sources){try{s.stop();}catch{ /* already ended */ }}this.sources=[];}if(stage==='landing')this.cue('impact');if(stage==='door')this.cue('door');}
 if(stage==='whiteout'&&t<.5)return;
 this.nextNote-=dt;this.nextTick-=dt;this.nextAir-=dt;
 if(stage==='whiteout'||stage==='fall'){if(this.nextAir<=0){this.air(.05+Math.min(.18,t*.006),360+Math.min(650,t*17),.6);this.nextAir=.25;}if(this.nextNote<=0){this.tone([130.81,164.81,196,246.94][Math.floor(t/4)%4],2.8,.022,'triangle');if(t>16)this.tone(261.63,3.2,.016,'triangle');this.nextNote=3;}}
 else if(stage==='library'||stage==='library-intro'){if(this.nextTick<=0){this.tone(1200,.035,.014,'triangle');this.air(.016,420,.8);this.nextTick=1;}if(this.nextNote<=0){const notes=[261.63,329.63,392,523.25,392,329.63];this.tone(notes[Math.floor(t*1.3)%notes.length],1.8,.035);this.tone(notes[Math.floor(t*1.3)%notes.length]*2,.5,.008);this.nextNote=.8;}}
 else if(stage==='chapter'||stage==='tutorial'||stage==='door'){if(this.nextNote<=0){this.tone([392,493.88,587.33,783.99][Math.floor(t*1.4)%4],1.6,stage==='tutorial'?.014:.035);this.nextNote=.7;}}
 else if(stage.startsWith('book')){if(this.nextNote<=0){this.cue('page');this.tone(392+t*40,.4,.025);this.nextNote=stage==='book-burst'?.18:.65;}}
 }
 suspend(){void this.ctx.suspend();}resume(){void this.ctx.resume();}
 destroy(){this.dead=true;for(const s of this.sources){try{s.stop();}catch{ /* ended */ }}this.sources=[];void this.ctx.close();}
}
