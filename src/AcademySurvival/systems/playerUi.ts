import type {PlayerLifePolicy} from '../types/player';
import type {PlayerRecord} from './playerViews';

const weights=['studyWeight','trainingWeight','socialWeight','restWeight'] as const;
/** Integer, sum-preserving proportional redistribution for the policy sliders. */
export function rebalancePolicy(policy:PlayerLifePolicy,key:typeof weights[number],value:number):PlayerLifePolicy{
 const next={...policy},selected=Math.max(0,Math.min(100,Math.round(value))),others=weights.filter(k=>k!==key),remaining=100-selected,total=others.reduce((n,k)=>n+policy[k],0);
 const shares=others.map(k=>({key:k,value:total?remaining*policy[k]/total:remaining/others.length}));
 next[key]=selected;for(const share of shares)next[share.key]=Math.floor(share.value);
 const extra=remaining-shares.reduce((n,s)=>n+Math.floor(s.value),0);
 shares.sort((a,b)=>(b.value%1)-(a.value%1)||weights.indexOf(a.key)-weights.indexOf(b.key));
 for(let i=0;i<extra;i++)next[shares[i].key]++;
 return next;
}
export function recordTone(record:PlayerRecord){
 if((record.importance??0)>=75)return {id:'important',label:'중요'};
 if(record.category==='conflict'||/거부|실패|취소|부상|위험/.test(record.message))return {id:'warning',label:'주의'};
 if(record.kind==='movement')return {id:'movement',label:'이동'};
 if(record.category==='relationship'||record.category==='interaction')return {id:'social',label:'교류'};
 if(record.category==='achievement')return {id:'achievement',label:'성과'};
 return {id:'information',label:'정보'};
}
