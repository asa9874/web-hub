import type {PositionDefinition,TitleDefinition} from '../types/social';
import {impactGrade} from './impact';
import {normalize} from './search';
export function filterSocialEntries<T extends PositionDefinition|TitleDefinition>(entries:T[],params:URLSearchParams):T[]{
 const q=normalize(params.get('q')??''),category=params.get('category')??'all',domain=params.get('domain')??'all',grade=params.get('grade')??'all',acquire=params.get('acquire')??'all',group=params.get('group')??'all',visibility=params.get('visibility')??'all';
 const number=(key:string,fallback:number)=>{const value=params.get(key);return value===null||!Number.isFinite(Number(value))?fallback:Math.min(1000,Math.max(0,Number(value)));};
 const min=number('min',0),max=Math.max(min,number('max',1000)),order=params.get('order')??'name';
 return entries.filter(e=>normalize(e.name).includes(q)&&normalize(e.acquisition.rule.description).includes(normalize(params.get('condition')??''))&&(category==='all'||e.categoryId===category)&&e.impact.baseImpact>=min&&e.impact.baseImpact<=max&&(domain==='all'||e.impact.domains.includes(domain as never))&&(grade==='all'||impactGrade(e.impact.baseImpact)?.id===grade)&&(acquire==='all'||e.acquisition.type===acquire)&&(e.kind==='position'?(group==='all'||(group==='none'?e.exclusiveGroupId===null:e.exclusiveGroupId===group)):(visibility==='all'||e.publicity.default===visibility))).sort((a,b)=>(order==='impact-desc'?b.impact.baseImpact-a.impact.baseImpact:order==='impact-asc'?a.impact.baseImpact-b.impact.baseImpact:0)||a.name.localeCompare(b.name,'ko'));
}
