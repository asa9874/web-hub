import type { Relic } from '../types';

/**
 * 전체 유물 풀.
 * - common: 일반 전투 보상 등에서 등장
 * - rare: 엘리트 전투 보상 등에서 등장
 * - boss: 보스 격파 보상에서만 등장
 */
export const RELIC_LIBRARY: Relic[] = [
  // ── Common ───────────────────────────────────────────────────────────────
  {
    id: 'flame_amulet',
    name: '불꽃 부적',
    description: '매 턴 처음 사용하는 공격 카드의\n비용이 1 감소합니다.',
    tier: 'common',
  },
  {
    id: 'bone_ring',
    name: '뼈 반지',
    description: '플레이어 턴 시작 시\n방어도 4를 획득합니다.',
    tier: 'common',
  },
  // ── Rare ─────────────────────────────────────────────────────────────────
  {
    id: 'toxic_crystal',
    name: '독성 결정',
    description: '독 상태이상을 부여할 때\n스택이 1 추가됩니다.',
    tier: 'rare',
  },
  {
    id: 'old_coin',
    name: '낡은 동전',
    description: '상점의 모든 가격이\n10% 할인됩니다.',
    tier: 'rare',
  },
  // ── Boss ─────────────────────────────────────────────────────────────────
  {
    id: 'blood_sword',
    name: '피의 검',
    description: 'HP가 50% 이하일 때\n공격 피해가 +3 증가합니다.',
    tier: 'boss',
  },
  {
    id: 'mana_crystal',
    name: '마나 수정',
    description: '최대 마나가 1 증가합니다.\n(획득 즉시 영구 적용)',
    tier: 'boss',
  },
];
