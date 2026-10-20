import type { EventReference } from '../types';
import { flag } from './factories';
export const events:EventReference[] = [
 {id:'event-duel',title:'귀족 학생의 결투 신청',tags:['duel','sword','spear','bow','fist','shield','storm','pride'],status:'planned',condition:flag('duel-challenge')},
 {id:'event-practical',title:'마법 실기 시험',tags:['flame','frost','storm','arcane','focus','study'],status:'planned',condition:flag('practical-exam')},
 {id:'event-midterm',title:'중간고사와 빈 답안',tags:['study','memory','research'],status:'planned',condition:flag('midterm')},
 {id:'event-dungeon',title:'던전 실습의 갈림길',tags:['explore','senses','stealth','strength','fear','constitution'],status:'planned',condition:flag('dungeon-practice')},
 {id:'event-rescue',title:'뒤처진 동료의 구조 신호',tags:['rescue','leadership','will','healing','recovery','shield','strength'],status:'planned',condition:flag('companion-distress')},
 {id:'event-professor',title:'검술 교수의 빈 수업 시간',tags:['sword','training','diligence','laziness'],status:'planned',condition:flag('professor-invitation')},
 {id:'event-ball',title:'왕실 후원 연회',tags:['etiquette','society','speech','pride','timidity'],status:'planned',condition:flag('royal-invitation')},
 {id:'event-ruin',title:'봉인 유적의 미서명 계약',tags:['forbidden','curse','barrier','madness','arcane'],status:'planned',condition:flag('ruin-discovery')},
 {id:'event-forest',title:'정령림의 잃어버린 종',tags:['spirit','forest','bow','spear'],status:'planned',condition:flag('forest-expedition')},
 {id:'event-ward',title:'신전 병동의 긴 밤',tags:['healing','blessing','recovery','constitution'],status:'planned',condition:flag('ward-volunteer')},
 {id:'event-market',title:'장학금과 공동 구매 장부',tags:['bargain','frugality','society'],status:'planned',condition:flag('market-day')},
 {id:'event-dorm',title:'기숙사의 평범하지 않은 저녁',tags:['daily','socialize','speech','memory','laziness'],status:'planned',condition:flag('dorm-evening')},
 {id:'event-reconcile',title:'돌려주지 못한 사과',tags:['reconciliation','speech','timidity','will'],status:'planned',condition:flag('unresolved-quarrel')},
 {id:'event-investigate',title:'사라진 인장 수사',tags:['investigation','inference','research','stealth'],status:'planned',condition:flag('missing-seal')},
 {id:'event-night',title:'종탑 아래의 야간 경계',tags:['ambush','fear','senses','perception','defense'],status:'planned',condition:flag('night-watch')},
];
