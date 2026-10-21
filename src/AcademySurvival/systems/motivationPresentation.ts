import type {StatId} from '../types/knowledge';
import type {GoalCondition} from '../types/motivation';
import {goalRegistry,needRegistry} from '../data/motivations';
import {activityRegistry} from '../data/schedules';
import {locationCatalog} from './locationRegistry';
import {organizationRegistry} from './organizations';
import {proficiencyRegistry,statRegistry} from './knowledgeRegistry';
import {positionRegistry,titleRegistry} from './socialRules';
import {statusRegistry} from './statusRegistry';
export const horizonNames={short:'단기',medium:'중기',long:'장기'};
export const goalStatusNames={active:'활성',completed:'완료',failed:'실패',abandoned:'포기',paused:'일시정지'};
export function goalConditionText(c:GoalCondition):string{switch(c.type){case 'all':case 'any':return '('+c.conditions.map(goalConditionText).join(c.type==='all'?' 그리고 ':' 또는 ')+')';case 'not':return '아님: '+goalConditionText(c.condition);case 'external':return '판정 보류 · '+c.description;case 'stat':return `${statRegistry.get(c.id as StatId)?.name??c.id} ${c.min} 이상`;case 'proficiency':return `${proficiencyRegistry.get(c.id)?.name??c.id} 경지 ${c.min} 이상`;case 'organization':return `${organizationRegistry.get(c.id)?.name??c.id} 가입`;case 'position':return `${positionRegistry.get(c.id)?.name??c.id} 보유`;case 'title':return `${titleRegistry.get(c.id)?.name??c.id} 유효 칭호`;case 'status':return `${statusRegistry.get(c.id)?.name??c.id} 상태 유지`;case 'statusDuration':return `${statusRegistry.get(c.id)?.name??c.id} 상태 ${c.minutes}분 유지`;case 'home':return '이동을 마치고 자신의 거주지에 도착';case 'visit':return `${locationCatalog.nodes.get(c.id)?.name??c.id} 실제 방문`;case 'activity':return `${activityRegistry.get(c.id)?.name??c.id} 완료 ${c.count}회`;case 'activityMinutes':return `${activityRegistry.get(c.id)?.name??c.id} 실제 수행 ${c.minutes}분`;case 'need':return `${needRegistry.get(c.id)?.name??c.id} ${c.max} 이하`;case 'relationship':return `${c.target==='selected'?'지정 상대':'아는 상대'}에게 느끼는 ${({trust:'신뢰도',affection:'호감도',intimacy:'친밀도',respect:'존경도',fear:'두려움'})[c.metric]} ${c.min} 이상`+(c.also?.length?' · 같은 상대: '+c.also.map(q=>goalConditionText({type:'relationship',target:c.target,...q})).join(' 그리고 '):'');}}
export const goalName=(id:string)=>goalRegistry.get(id)?.name??id;
