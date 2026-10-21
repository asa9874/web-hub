import type {Character} from '../types/character';
import {fixedCharacters} from './characterRegistry';
import {INITIAL_LOCATIONS} from '../data/locations/config';
/** Explicit development baseline. Unresolved template random slots are never rolled here. */
export function createInitialLocationCharacters():Character[]{
 const t=fixedCharacters[0];
 const serena:Character={...structuredClone(t.identity),summary:t.identity.summary+' · 기준 미리보기: 고정 보유만 표시, 회차 랜덤 슬롯 미확정.',id:t.id,templateId:t.id,kind:'fixed_npc',...structuredClone(t.affiliations),...structuredClone(t.social.fixed),...structuredClone(t.moralityProfile),stats:Object.fromEntries(Object.entries(t.stats).map(([id,r])=>[id,r.base])) as Character['stats'],proficiencyRanks:Object.fromEntries(t.proficiencies.map(p=>[p.id,p.base])),traitIds:[...t.fixedTraitIds],giftIds:[...t.fixedGiftIds],statuses:structuredClone(t.statuses.fixed),relationships:[],location:{characterId:t.id,currentLocationId:INITIAL_LOCATIONS.fixed,movement:null}};
 const player:Character={id:'preview-player',kind:'player',name:'플레이어',age:17,gender:'미설정',species:'인간',origin:'개발 미리보기',schoolYear:1,affiliation:'왕립 아카데미',title:'신입 생도',introduction:'장소 엔진을 검증하는 플레이어 기준 인물.',summary:'본게임 캐릭터 생성 이전의 개발 미리보기입니다.',background:['본게임 이전 장소 테스트용 기준 인물이다.'],personality:['성격 미설정'],values:['가치관 미설정'],weaknesses:[],appearance:{description:'외형 미설정',provisional:true},objective:'교정을 둘러보기',tendencies:[],stats:{STR:50,AGI:50,VIT:50,MAG:50,INT:50,WIL:50,CHA:50},proficiencyRanks:{},traitIds:[],giftIds:[],statuses:[],relationships:[],positions:[{definitionId:'position-academy-year-one',organizationId:'academy-main'}],titles:[],primaryPositionId:'position-academy-year-one',affiliations:[{organizationId:'academy-main',visibility:'public'}],primaryOrganizationId:'academy-main',location:{characterId:'preview-player',currentLocationId:INITIAL_LOCATIONS.player,movement:null}};
 return [player,serena];
}
