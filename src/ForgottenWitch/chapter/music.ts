// Original region score, synthesized locally; no copyrighted recordings or API calls.
export class ChapterMusic {
 private ctx:AudioContext|null=null;private master:GainNode|null=null;private notes=new Set<OscillatorNode>();private clock=0;private next=0;private beat=0;
 muted=false;
 unlock(){this.ctx??=new AudioContext();this.master??=this.ctx.createGain();this.master.gain.value=.06;this.master.connect(this.ctx.destination);void this.ctx.resume();}
 update(dt:number,region:number,celebrate=false){if(!this.ctx||!this.master)return;this.master.gain.setTargetAtTime(this.muted?0:.06,this.ctx.currentTime,.15);this.clock+=dt;this.next-=dt;if(this.next>0)return;this.next=celebrate?.22:.42;const scale=[0,4,7,12,9,7,4,2],offset=[0,5,7,0,5,7][region]??0;this.note(261.63*2**((scale[(this.beat+region)%8]+offset)/12),celebrate?.28:.52,'sine');if(this.beat%4===0)this.note(130.815*2**(offset/12),1.1,'triangle');this.beat++;}
 effect(kind:'laugh'|'bounce'|'chew'){if(!this.ctx)return;const notes=kind==='laugh'?[330,392,330,440]:kind==='chew'?[140,185,125]:[220,440,330];notes.forEach((hz,i)=>this.note(hz,.1,'triangle',i*.13));}
 private note(hz:number,duration:number,type:OscillatorType,delay=0){const c=this.ctx!,o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.value=hz;const now=c.currentTime+delay;g.gain.setValueAtTime(0,now);g.gain.linearRampToValueAtTime(.5,now+.02);g.gain.exponentialRampToValueAtTime(.001,now+duration);o.connect(g);g.connect(this.master!);this.notes.add(o);o.onended=()=>{this.notes.delete(o);o.disconnect();g.disconnect();};o.start(now);o.stop(now+duration+.03);}
 pause(value:boolean){if(this.ctx)void(value?this.ctx.suspend():this.ctx.resume());}
 destroy(){for(const n of this.notes){try{n.stop();}catch{/* already ended */}}this.notes.clear();if(this.ctx)void this.ctx.close();this.ctx=null;}
}
