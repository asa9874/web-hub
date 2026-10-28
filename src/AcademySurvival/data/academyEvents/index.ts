import type {AcademyEventDefinition} from '../../types/academyEvent';
export const OFFICIAL_EVENT_RULES={minimumEntrants:2,maximumEntrants:16,registrationDays:7,deadlineDays:1,checkInLeadMinutes:60,graceMinutes:5,matchSlotMinutes:30,matchReserveMinutes:28,minimumTaskMinutes:10,preparationMinutes:20,logLimit:600} as const;
export const officialEventDefinitions:AcademyEventDefinition[]=[
 {id:'welcome',name:'신학기 환영식',kind:'welcome',month:3,day:3,minute:1080,duration:60,locationId:'academy-plaza'},
 {id:'recruitment',name:'동아리 공개 모집',kind:'recruitment',month:8,day:3,minute:1080,duration:90,locationId:'academy-plaza'},
 {id:'spring-tournament',name:'춘계 공식 개인 대련 · 통합 부문',kind:'tournament',month:4,day:20,minute:540,duration:540,locationId:'academy-arena',weekend:true},
 {id:'festival',name:'아카데미 문화제',kind:'festival',month:9,day:18,minute:540,duration:480,locationId:'academy-plaza',weekend:true},
 {id:'research',name:'학술·연구 공개 발표회',kind:'research',month:11,day:12,minute:1080,duration:120,locationId:'academy-library'},
 {id:'awards',name:'학기 종료 · 우수 활동 표창',kind:'awards',month:6,day:30,minute:1140,duration:60,locationId:'academy-plaza'},
];
export const officialEventRegistry=new Map(officialEventDefinitions.map(d=>[d.id,d]));
export const boothDefinitions=[
 {id:'alchemy',name:'연금술 체험',groupId:'club-alchemy',activityId:'magic_training',checkId:'knowledge',requiredTags:['alchemy'],limitation:'실제 시약 제작을 확정하지 않는 도구 시연'},
 {id:'engineering',name:'마도공학 전시',groupId:'club-engineering',activityId:'self_study',checkId:'craft',requiredTags:['crafted-exhibit'],limitation:'제작품 원장이 없으면 자료 설명으로 축소'},
 {id:'sword',name:'검술 체험',groupId:'club-sword',activityId:'sword_training',checkId:'physical-defense',requiredTags:[],limitation:'비살상 기초 자세 체험'},
 {id:'magic',name:'마법 시연',groupId:'club-battle-magic',activityId:'magic_training',checkId:'magic-attack',requiredTags:[],limitation:'공통 마법 제어 판정'},
 {id:'music',name:'음악 공연',groupId:'club-music',activityId:'cultural_play',checkId:'persuade',requiredTags:['instrument'],limitation:'악기 없이는 공연 취소·문화 소개로 축소. 음악 전문 판정 미지원'},
 {id:'cooking',name:'요리 나눔',groupId:'club-cooking',activityId:'lunch',checkId:'knowledge',requiredTags:['food'],limitation:'화폐 매출·제작을 만들지 않고 보유 음식만 공유'},
 {id:'history',name:'역사·문헌 전시',groupId:'club-history',activityId:'self_study',checkId:'knowledge',requiredTags:[],limitation:'기존 학습 자료의 설명; 새로운 연구 성과를 생성하지 않음'},
 {id:'exploration',name:'탐험 기록관',groupId:'club-exploration',activityId:'self_study',checkId:'observe',requiredTags:['map'],limitation:'방문 증거 없이는 안전 탐험 안내로 축소'},
 {id:'council',name:'학생회 안내소',groupId:'academy-council',activityId:'office_work',checkId:'persuade',requiredTags:[],limitation:'실제 학생회 회원만 운영'},
] as const;
export const officialSignals=[['EVT-01','공식 행사 개최 공지'],['EVT-02','참가 신청 마감'],['EVT-03','공동 준비 의견 차이'],['EVT-04','참가자 불참'],['EVT-05','실력으로 남긴 기록'],['EVT-06','친구의 현장 응원'],['EVT-07','공식 결과 발표'],['EVT-08','행사 이후의 협력 제안'],['FEST-01','부스 자리 경쟁'],['FEST-02','준비물 부족'],['FEST-03','시연의 실제 판정'],['FEST-04','실제 소유 전시품 공개'],['FEST-05','공연 전의 긴장'],['FEST-06','친구와 문화제 방문'],['FEST-07','운영팀의 갈등'],['FEST-08','문화제 마지막 기록']] as const;
export const EVENT_PHASE_NAMES={scheduled:'예정',registration:'모집·준비',ready:'명단 확정',running:'진행 중',completed:'종료',cancelled:'취소'};
