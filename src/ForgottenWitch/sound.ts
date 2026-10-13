export class TheaterSound {
  private context: AudioContext | null = null;
  muted = false;
  unlock() { this.context ??= new AudioContext(); void this.context.resume(); }
  cue(kind:'paper'|'solve'|'applause') {
    if(!this.context||this.muted) return;
    const ctx=this.context;
    if(kind==='applause') {
      const buffer=ctx.createBuffer(1,ctx.sampleRate*.9,ctx.sampleRate);
      const data=buffer.getChannelData(0);
      for(let i=0;i<data.length;i++){const t=i/ctx.sampleRate;data[i]=(Math.random()*2-1)*Math.exp(-t*4)*Math.pow(Math.sin(t*44),8)*.08;}
      const source=ctx.createBufferSource();source.buffer=buffer;source.connect(ctx.destination);source.start();return;
    }
    const tones=kind==='solve'?[392,494,587]:[180];
    tones.forEach((frequency,i)=>{
      const oscillator=ctx.createOscillator(),gain=ctx.createGain();oscillator.type='sine';oscillator.frequency.value=frequency;
      const t=ctx.currentTime+i*.11;gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(.035,t+.015);gain.gain.exponentialRampToValueAtTime(.0001,t+.22);
      oscillator.connect(gain);gain.connect(ctx.destination);oscillator.start(t);oscillator.stop(t+.25);
    });
  }
  destroy(){ if(this.context) void this.context.close();this.context=null; }
}
