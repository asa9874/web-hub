import type { Potion } from '../types';

export const POTION_LIBRARY: Potion[] = [
  {
    id: 'heal_potion',
    name: '치유 포션',
    description: 'HP +20 회복',
  },
  {
    id: 'strength_potion',
    name: '힘 포션',
    description: '이번 전투 힘 +3',
  },
  {
    id: 'explosive_potion',
    name: '폭발 포션',
    description: '모든 적에게 10 피해',
  },
  {
    id: 'draw_potion',
    name: '드로우 포션',
    description: '카드 3장 드로우',
  },
];
