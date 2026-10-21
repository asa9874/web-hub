import type { Category, GiftCategory, Rarity } from '../types';
import {EXPANSION_LABELS} from './expansionLabels';
import {impactGrade} from '../systems/impact';
export const RARITIES: Record<Rarity, { name: string; weight: number }> = {
  common: { name: '보통', weight: 100 }, uncommon: { name: '비범', weight: 35 }, rare: { name: '희귀', weight: 8 }, epic: { name: '영웅', weight: 1.5 }, legendary: { name: '전설', weight: .15 },
};
export const CATEGORIES: Record<Category, string> = { martial: '무술', magic: '마법', body: '신체', mind: '정신', intellect: '지성', social: '사회', personality: '성격', special: '특수' };
export const GIFT_CATEGORIES: Record<GiftCategory, string> = { combat: '전투', survival: '생존', information: '정보', relations: '감정·관계', fortune: '확률·운명', space: '시간·공간', memory: '인식·기억', omen: '저주·축복', society: '경제·사회', daily: '기묘한 일상' };
export const FAMILIES: Record<string, { name: string; category: Category }> = Object.fromEntries([
  ['sword','검술','martial'],['spear','창술','martial'],['bow','궁술','martial'],['fist','격투술','martial'],['stealth','잠행','martial'],['shield','방패술','martial'],
  ['flame','화염','magic'],['frost','빙결','magic'],['storm','뇌전','magic'],['healing','치유','magic'],['barrier','결계','magic'],['arcane','비전','magic'],
  ['strength','근력','body'],['recovery','회복','body'],['senses','감각','body'],['constitution','체질','body'],
  ['will','의지','mind'],['focus','집중','mind'],['fear','공포','mind'],['madness','심연','mind'],
  ['study','학습','intellect'],['research','연구','intellect'],['memory','기억','intellect'],['inference','추리','intellect'],
  ['speech','화술','social'],['etiquette','예법','social'],['leadership','통솔','social'],['bargain','협상','social'],
  ['diligence','근면','personality'],['laziness','태만','personality'],['pride','오만','personality'],['timidity','소심','personality'],['frugality','검약','personality'],
  ['curse','저주','special'],['blessing','축복','special'],['spirit','정령 친화','special'],['forbidden','금기','special'],
  ['fieldcraft','야전 전술','martial'],['armscraft','병장기 운용','martial'],['materialmagic','물질 마법','magic'],['ritualmagic','의식술','magic'],
  ['physiology','몸의 버릇','body'],['innerlife','내면과 감정','mind'],['scholarship','학술 실무','intellect'],['craft','제작과 정비','intellect'],
  ['citizenship','공동체 실무','social'],['habit','생활 습관','personality'],['values','신념과 결점','personality'],['liminal','경계의 흔적','special'],
].map(([id,name,category]) => [id,{ name, category: category as Category }]));
export const PROBABILITY = {
  traitCounts: [{ count: 1, probability: .98 }, { count: 2, probability: .019 }, { count: 3, probability: .001 }],
  giftCounts: [{ count: 0, probability: .87 }, { count: 1, probability: .129 }, { count: 2, probability: .001 }],
};
// Central tuning: tier 0..4. These numbers carry no rarity/impact-derived combat bonus.
export const TUNING = { skillScore: [4,9,16,25,38], training: [1.08,1.16,1.28,1.42,1.65], stat: [2,5,9,14,20], resist: [5,12,22,35,50], action: [1.15,1.3,1.5,1.75,2] };
export const EFFECT_BALANCE = { statScale:1, checkScoreScale:1, percentagePointScale:1, growthDeltaScale:1, actionDeltaScale:1, eventDeltaScale:1 };
export const EMPTY_CONTEXT = { stats: {}, flags: [], tags: [], traits: [], gifts: [] };
export const impactLabel = (n:number) => impactGrade(n)?.name??'평가 오류';
export const TARGET_NAMES: Record<string,string> = {
 'mana-control':'마력 제어','holy-magic':'신성마법','despair-resistance':'절망 저항','ally-morale-recovery':'동료 사기 회복 기여',
 ...EXPANSION_LABELS,
 strength:'근력', endurance:'지구력', perception:'지각', recovery:'회복', mana:'마력', will:'의지', focus:'집중', charisma:'매력', intellect:'지성', stress:'스트레스', health:'건강',
 sword:'검술',spear:'창술',bow:'궁술',fist:'격투',stealth:'잠행',shield:'방패',flame:'화염',frost:'빙결',storm:'뇌전',healing:'치유',barrier:'결계',arcane:'비전',
 fear:'공포 저항',madness:'심연 저항',study:'학습',research:'연구',memory:'기억',inference:'추리',speech:'설득',etiquette:'예법',leadership:'통솔',bargain:'협상',
 training:'훈련',rest:'휴식',explore:'탐색',socialize:'교류',spirit:'정령 교감',curse:'저주 저항',blessing:'축복',forbidden:'금기 해석',
 poison:'독 저항',intimidation:'위협',navigation:'길찾기',measurement:'측량',exam:'필기시험',accounting:'정산',
 'tactical-retreat':'전술적 후퇴','social-boundary':'사회적 거리 파악','minor-illness':'가벼운 질환 회복','face-identification':'얼굴 식별','name-recall':'이름 회상',
 'minor-discovery':'작은 발견','moth-visit':'나방 방문',warning:'위험 예고',duel:'결투',purchase:'구매',
};
