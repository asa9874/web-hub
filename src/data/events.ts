/** 이벤트 선택지 실행 효과 (판별 유니언) */
export type EventEffect =
  | { type: 'none' }
  | { type: 'gold'; amount: number }
  | { type: 'hp'; amount: number }
  | { type: 'max_hp'; amount: number }
  | { type: 'card_reward'; count: number }
  | { type: 'relic_reward'; count: number }
  | { type: 'card_upgrade' }
  | { type: 'card_remove_free' }
  | { type: 'potion_reward'; count: number };

export interface EventChoice {
  label: string;
  effects: EventEffect[];
  /** 즉시 전환 없이 종료될 때 표시할 결과 텍스트 */
  outcome?: string;
  requireGold?: number;
  /** 이 선택지를 고르려면 최소 이 HP가 있어야 함 */
  requireHp?: number;
}

export interface EventData {
  id: string;
  title: string;
  description: string;
  choices: EventChoice[];
}

export const EVENT_LIBRARY: EventData[] = [
  {
    id: 'shady_merchant',
    title: '수상한 상인',
    description: '낯선 상인이 당신에게 다가오며 좋은 물건이 있다고 속삭입니다. 그의 눈빛이 어딘가 수상하지만, 제시한 물건은 확실히 값어치가 있어 보입니다.',
    choices: [
      {
        label: '75G를 지불한다',
        requireGold: 75,
        effects: [{ type: 'gold', amount: -75 }, { type: 'card_reward', count: 1 }],
      },
      {
        label: '거절한다',
        effects: [{ type: 'none' }],
        outcome: '상인은 아쉬운 표정으로 사라집니다. 현명한 선택이었을지도 모릅니다.',
      },
    ],
  },
  {
    id: 'cursed_altar',
    title: '저주받은 제단',
    description: '어두운 돌 제단이 희미한 보라빛으로 빛나고 있습니다. 손을 올리면 강력한 힘을 얻을 수 있을 것 같지만, 그 대가는 피입니다.',
    choices: [
      {
        label: '제물을 바친다 (HP -10)',
        requireHp: 11,
        effects: [{ type: 'hp', amount: -10 }, { type: 'relic_reward', count: 1 }],
      },
      {
        label: '무시하고 지나친다',
        effects: [{ type: 'none' }],
        outcome: '제단의 빛이 서서히 꺼집니다. 그냥 지나치길 잘한 것 같기도 합니다.',
      },
    ],
  },
  {
    id: 'ancient_library',
    title: '낡은 도서관',
    description: '먼지 쌓인 책장에 가득한 마법서들이 보입니다. 오랜 세월의 지혜가 담긴 이 곳에서 무언가를 배우거나, 필요 없는 지식을 버릴 수 있습니다.',
    choices: [
      {
        label: '카드를 업그레이드한다 (무료)',
        effects: [{ type: 'card_upgrade' }],
      },
      {
        label: '카드를 제거한다 (무료)',
        effects: [{ type: 'card_remove_free' }],
      },
    ],
  },
  {
    id: 'herb_pile',
    title: '약초 더미',
    description: '싱그러운 향기가 코를 간지럽힙니다. 길가에 신선한 약초들이 수북이 쌓여 있습니다. 오늘 운이 좋은 것 같습니다.',
    choices: [
      {
        label: '약초를 채집한다 (+20 HP)',
        effects: [{ type: 'hp', amount: 20 }],
        outcome: '약초의 기운이 온몸으로 퍼집니다. 몸이 한결 가벼워졌습니다.',
      },
      {
        label: '지나친다',
        effects: [{ type: 'none' }],
        outcome: '뒤를 돌아보니 약초 더미가 멀어집니다. 지금은 시간이 없습니다.',
      },
    ],
  },
  {
    id: 'demon_contract',
    title: '악마의 계약',
    description: '그림자 속에서 붉은 눈의 존재가 나타납니다. "영혼의 일부와 힘을 교환하지 않겠나?" 악마의 목소리가 머릿속에 울립니다.',
    choices: [
      {
        label: '계약한다 (최대 HP -5)',
        effects: [{ type: 'max_hp', amount: -5 }, { type: 'card_reward', count: 2 }],
      },
      {
        label: '거절한다',
        effects: [{ type: 'none' }],
        outcome: '악마는 씁쓸한 미소를 지으며 사라집니다. "다음 기회에..."',
      },
    ],
  },
  {
    id: 'potion_stash',
    title: '포션 창고',
    description: '낡은 창고 문이 삐걱거리며 열립니다. 안에는 먼지 쌓인 포션들이 가득합니다. 아직 사용할 수 있을 것 같습니다.',
    choices: [
      {
        label: '포션을 챙긴다',
        effects: [{ type: 'potion_reward', count: 2 }],
      },
      {
        label: '지나친다',
        effects: [{ type: 'none' }],
        outcome: '창고를 닫고 자리를 떠납니다. 포션은 다른 모험가가 쓸 것입니다.',
      },
    ],
  },
];
