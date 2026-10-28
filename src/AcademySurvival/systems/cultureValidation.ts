import {cultureDetails,culturalPractices,culturalContents} from '../data/culture';
import {culturalWorldEvents} from '../data/culture/events';
import {cultureRegistry,regionRegistry,raceRegistry} from '../data/worldLore';
import {activityRegistry} from '../data/schedules';
import {locationCatalog} from './locationRegistry';
export function cultureDataIssues():string[]{
 const issues:string[]=[],ids=new Set<string>();
 for(const row of [...cultureDetails,...culturalPractices,...culturalContents,...culturalWorldEvents]){if(ids.has(row.id))issues.push('중복 '+row.id);ids.add(row.id);if(!row.name)issues.push('이름 누락 '+row.id);}
 for(const c of cultureDetails){for(const kind of ['food','clothing','hobby','gift'])if(!culturalContents.some(row=>row.kind===kind&&row.cultureIds.includes(c.id)))issues.push('문화 생활 콘텐츠 누락 '+c.id+' '+kind);if(!cultureRegistry.has(c.id)||c.archetypes.length!==2||c.regionIds.some(id=>!regionRegistry.has(id))||c.associatedRaceIds.some(id=>!raceRegistry.has(id as never))||![c.history,c.dailyLife,c.greeting,c.etiquette,c.giftMeaning,c.family,c.education,c.diversity,c.namingStyle].every(Boolean))issues.push('문화 상세 참조/내용 '+c.id);}
 for(const c of culturalContents)if(!c.description||!c.cultureIds.length||c.cultureIds.some(id=>!cultureRegistry.has(id)))issues.push('콘텐츠 참조 '+c.id);
 for(const p of culturalPractices){const activity=activityRegistry.get(p.activityId);if(!p.description||!p.responseRule||!activity||p.cultureIds.some(id=>!cultureRegistry.has(id))||p.contentId&&!culturalContents.some(c=>c.id===p.contentId)||!culturalWorldEvents.some(e=>e.id===p.eventId&&e.stages[0].conversationProposal?.kind==='culture')||p.locationIds.some(id=>{const l=locationCatalog.nodes.get(id);return !l||!activity.requiredPlaceTags.some(t=>l.tags.includes(t)||l.activityTags.includes(t));}))issues.push('관습 실행 참조 '+p.id);}
 return issues;
}
