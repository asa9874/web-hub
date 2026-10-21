// Stable FNV-1a seed hash and Mulberry32 stream, independent of JS global random/time.
export function seedHash(seed:string){let hash=2166136261;for(let i=0;i<seed.length;i++)hash=Math.imul(hash^seed.charCodeAt(i),16777619);return hash>>>0;}
export function seededRandom(seed:string){let state=seedHash(seed);return ()=>{state=(state+0x6D2B79F5)|0;let t=Math.imul(state^(state>>>15),1|state);t^=t+Math.imul(t^(t>>>7),61|t);return ((t^(t>>>14))>>>0)/4294967296;};}
export function weightedPick<T>(rows:readonly {value:T;weight:number}[],random:()=>number):T|undefined{const total=rows.reduce((n,row)=>n+row.weight,0);if(!Number.isFinite(total)||total<=0||rows.some(r=>!Number.isFinite(r.weight)||r.weight<0))return;let roll=random()*total;for(const row of rows){roll-=row.weight;if(roll<0)return row.value;}return rows.at(-1)?.value;}
export const randomInt=(random:()=>number,min:number,max:number)=>min+Math.floor(random()*(max-min+1));
