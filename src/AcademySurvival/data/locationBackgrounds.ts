import {locations} from './locations';
import type {LocationDefinition} from '../types/location';

/** Share art by physical setting, independently of room IDs, residents or access. */
export const backgroundDescriptions={
 plaza:'아카데미 중앙광장의 회랑과 분수',classroom:'나무 책상과 큰 창이 있는 학습 공간',
 library:'책장과 열람 탁자가 놓인 도서관',corridor:'돌 아치와 나무 문이 이어지는 복도',
 dining:'긴 식탁과 벤치가 있는 공동 식당',training:'훈련용 인형과 넓은 연습 마당',magic:'마력 실습을 위한 보호 설비와 훈련 공간',
 sharedBedroom:'침대와 책상이 있는 공동 생활실',singleBedroom:'침대 하나와 책상이 있는 개인 생활실',
 lounge:'소파와 작은 탁자가 있는 공용 휴게실',washroom:'칸막이와 세면 시설이 있는 공동 욕실',laundry:'세탁대와 건조 공간이 있는 세탁실',
 garden:'나무와 화단 사이로 이어지는 정원 산책로',office:'책상과 서류장이 있는 집무 공간',
 academyGate:'왕립 아카데미의 입구와 건물 외관',dormitory:'아카데미 생활관 외관',
 market:'상점과 시장 가판대가 늘어선 도시 거리',castle:'성벽과 탑이 있는 성채 외관',throneRoom:'기둥과 단상이 있는 알현 공간',
 landscape:'길과 구릉이 이어지는 넓은 평원',forest:'큰 나무 사이로 빛이 비치는 숲길',mountains:'산봉우리와 돌길이 이어지는 산악 풍경',
 coast:'바다와 부두가 보이는 해안 풍경',village:'작은 집과 열린 마당이 있는 정착지',underground:'암벽과 석조 시설이 이어지는 지하 공간',
} as const;
export type BackgroundKind=keyof typeof backgroundDescriptions;
export const backgroundFiles:Record<BackgroundKind,string>={
 plaza:'academy-plaza-detailed-v1.webp',classroom:'classroom-v1.webp',library:'library-v1.webp',corridor:'corridor-v1.webp',
 dining:'dining-v1.webp',training:'training-v1.webp',magic:'magic-v1.webp',sharedBedroom:'shared-bedroom-v1.webp',singleBedroom:'single-bedroom-v1.webp',
 lounge:'lounge-v1.webp',washroom:'washroom-v1.webp',laundry:'laundry-v1.webp',garden:'garden-v1.webp',office:'office-v1.webp',
 academyGate:'academy-gate-v1.webp',dormitory:'dormitory-v1.webp',market:'market-v1.webp',castle:'castle-v1.webp',throneRoom:'throne-room-v1.webp',
 landscape:'landscape-v1.webp',forest:'forest-v1.webp',mountains:'mountains-v1.webp',coast:'coast-v1.webp',village:'village-v1.webp',underground:'underground-v1.webp',
};
const exact:Record<string,BackgroundKind>={
 'academy-plaza':'plaza','academy':'academyGate','academy-gate':'academyGate','academy-class-building':'academyGate',
 'academy-corridor':'corridor','academy-dorm-floor-3':'corridor','academy-library':'library','abyss-library':'library',
 'academy-life-study':'classroom','academy-dining':'dining','academy-life-dining':'dining','demon-dining':'dining',
 'academy-arena':'training','academy-morning':'training','demon-training':'training','academy-magic-training':'magic',
 'academy-professor-office':'office','academy-admin-office':'office','academy-council-office':'office','academy-guard-post':'office','demon-office':'office',
 'academy-life-lounge':'lounge','academy-student-hall':'lounge','academy-life-laundry':'laundry','academy-life-bath':'washroom','academy-life-garden':'garden',
 'academy-dorm':'dormitory','academy-life-hall':'dormitory','academy-dorm-men':'dormitory','academy-dorm-women':'dormitory',
 'academy-staff-residence':'dormitory','academy-professor-residence':'dormitory','academy-staff-rooms':'dormitory',
 'capital-commuter-home':'singleBedroom','demon-residence':'sharedBedroom',
 'capital-market':'market','capital-palace':'castle','demon-castle-place':'castle','demon-gate':'castle','demon-audience':'throneRoom',
 'lore-kardum-undercity':'underground','lore-kardum-mines':'underground','lore-hobgoblin-city':'castle',
};
export function backgroundKindFor(place:Pick<LocationDefinition,'id'|'type'|'tags'>):BackgroundKind{
 const {id,type,tags}=place;
 if(exact[id])return exact[id];
 if(/^academy-class-\d+-\d+$/.test(id))return 'classroom';
 if(/^academy-professor-residence-\d+$/.test(id))return 'singleBedroom';
 if(/^academy-life-room-|^academy-room-|^academy-staff-rooms-\d+$/.test(id))return 'sharedBedroom';
 if(type==='floor')return 'corridor';
 if(/elosil|spirit-sanctuary|forest/.test(id))return 'forest';
 if(tags.includes('port')||tags.includes('island')||tags.includes('archipelago')||/coast|southsea|sephira/.test(id))return 'coast';
 if(tags.includes('village')||/settlement|village|council|grassland-town/.test(id))return 'village';
 if(/mountain|north-pass|highland|kardum|grakhar/.test(id))return 'mountains';
 if(type==='city'||type==='district')return 'market';
 return 'landscape';
}
export interface LocationBackground {kind:BackgroundKind;src:string;alt:string}
// Relative default permits Node asset audits, while Vite provides the deployed base path.
const base=import.meta.env?.BASE_URL??'/web-hub/';
export const locationBackgrounds:Record<string,LocationBackground>=Object.fromEntries(locations.map(place=>{
 const kind=backgroundKindFor(place);
 return [place.id,{kind,src:base+'academy/backgrounds/'+backgroundFiles[kind],alt:place.name+' · '+backgroundDescriptions[kind]+'을 표현한 인물 없는 공용 배경 일러스트.'}];
}));
