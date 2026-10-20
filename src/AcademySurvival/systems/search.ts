import type { Entry, Gift } from '../types';
export const normalize=(s:string)=>s.normalize('NFKC').toLocaleLowerCase('ko-KR').trim();
export function matches(entry:Entry,query:string):boolean {
 const haystack=normalize([entry.name,entry.lore,entry.system,entry.id,...entry.eventTags].join(' '));
 return normalize(query).split(/\s+/).filter(Boolean).every(term=>haystack.includes(term));
}
export function sortGifts(gifts:Gift[],order:string):Gift[] {
 return [...gifts].sort((a,b)=>(order==='impact-desc'?b.impact.baseImpact-a.impact.baseImpact:order==='impact-asc'?a.impact.baseImpact-b.impact.baseImpact:0)||a.name.localeCompare(b.name,'ko'));
}
