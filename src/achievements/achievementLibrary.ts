import type { Achievement } from '../types';

export const ACHIEVEMENT_LIBRARY: Achievement[] = [
  {
    id: 'first_victory',
    name: '첫 승리',
    description: '첫 번째 전투에서 승리하세요.',
    reward: { type: 'gold', amount: 20, description: '골드 +20' },
  },
  {
    id: 'untouchable',
    name: '무적',
    description: '피해를 받지 않고 전투에서 승리하세요.',
    reward: { type: 'heal', amount: 15, description: 'HP +15 회복' },
  },
  {
    id: 'boss_slayer',
    name: '보스 처치',
    description: '다크 로드를 물리치세요.',
    reward: { type: 'gold', amount: 50, description: '골드 +50' },
  },
  {
    id: 'elite_slayer',
    name: '엘리트 사냥꾼',
    description: '엘리트 몬스터를 처치하세요.',
    reward: { type: 'heal', amount: 20, description: 'HP +20 회복' },
  },
  {
    id: 'relic_collector',
    name: '유물 수집가',
    description: '유물을 3개 이상 수집하세요.',
    reward: { type: 'gold', amount: 30, description: '골드 +30' },
  },
  {
    id: 'card_master',
    name: '카드 수집가',
    description: '덱에 카드를 15장 이상 보유하세요.',
    reward: { type: 'max_hp', amount: 10, description: '최대 HP +10' },
  },
  {
    id: 'big_earner',
    name: '재물의 신',
    description: '골드를 200개 이상 보유하세요.',
    reward: { type: 'gold', amount: 30, description: '골드 +30' },
  },
  {
    id: 'survivor',
    name: '생존자',
    description: 'HP가 10 이하인 상태에서 전투에서 승리하세요.',
    reward: { type: 'heal', amount: 20, description: 'HP +20 회복' },
  },
];
