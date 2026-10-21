import type { Condition, Context } from '../types';
import { FAMILIES, TARGET_NAMES } from '../data/config';
export function meets(condition:Condition,ctx:Context):boolean {
 switch(condition.kind){
  case 'stat': return (ctx.stats[condition.key]??0)>=condition.min;
  case 'flag':return ctx.flags.includes(condition.key);
  case 'tag':return ctx.tags.includes(condition.key);
  case 'trait':return ctx.traits.includes(condition.id);
  case 'all':return condition.conditions.every(c=>meets(c,ctx));
  case 'any':return condition.conditions.some(c=>meets(c,ctx));
  case 'not':return !meets(condition.condition,ctx);
 }
}
export function conditionText(c:Condition):string {
 switch(c.kind){
  case 'stat':return `${TARGET_NAMES[c.key]??c.key} ${c.min} 이상`;
  case 'flag':{if(c.key.startsWith('training-'))return `${FAMILIES[c.key.slice(9)]?.name??'해당 계열'} 실습 이수`;if(c.key.startsWith('assessment-'))return `${FAMILIES[c.key.slice(11)]?.name??'해당 계열'} 승급 심사 이수`;return c.key==='path-adaptation'?'응용 실험 이수':c.key==='path-stability'?'안정화 실습 이수':'필수 상황 기록 충족';}
  case 'tag':return `상황: ${c.key}`;
  case 'trait':return `특성 보유: ${c.id}`;
  case 'all':return c.conditions.map(conditionText).join(' + ');
  case 'any':return '('+c.conditions.map(conditionText).join(' 또는 ')+')';
  case 'not':return '미충족: '+conditionText(c.condition);
 }
}
