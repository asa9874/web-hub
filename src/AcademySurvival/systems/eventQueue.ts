import type {EventJob} from '../types/worldEvent';
/** A stable min heap. World time owns execution; this queue never advances it. */
export class EventQueue {
 private rows:EventJob[]=[];
 private before(a:EventJob,b:EventJob){return a.at<b.at||a.at===b.at&&a.order<b.order;}
 peek(){return this.rows[0];}
 get size(){return this.rows.length;}
 push(job:EventJob){this.rows.push(job);let n=this.rows.length-1;while(n){const p=(n-1)>>1;if(!this.before(this.rows[n],this.rows[p]))break;[this.rows[p],this.rows[n]]=[this.rows[n],this.rows[p]];n=p;}}
 pop(){const result=this.rows[0],last=this.rows.pop();if(this.rows.length&&last){this.rows[0]=last;let n=0;while(true){let k=n;for(const c of [n*2+1,n*2+2])if(c<this.rows.length&&this.before(this.rows[c],this.rows[k]))k=c;if(k===n)break;[this.rows[k],this.rows[n]]=[this.rows[n],this.rows[k]];n=k;}}return result;}
 save(){return structuredClone(this.rows).sort((a,b)=>a.at-b.at||a.order-b.order);}
 load(rows:EventJob[]){this.rows=[];rows.forEach(j=>this.push(structuredClone(j)));}
}
