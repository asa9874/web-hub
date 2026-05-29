import type { Scene } from '../../types/index.ts';

const confirm = (id: string, nextSceneId: string) => ({
  id,
  label: '[ 확인 ]',
  type: 'deterministic' as const,
  outcomes: { success: { nextSceneId, narrativeText: '' } },
});

export const txHub: Scene = {
  id: 'tx_hub',
  title: '허브  [ DEV ]',
  description:
    `개발 테스트 공간의 중심 허브.\n\n` +
    `각 방으로 이동하면 해당 방의 씬이 로드된다.\n` +
    `내부지도에서 방을 클릭해 이동할 수 있다.\n\n` +
    `[ 좌열 ] 씬 연결 → 위험 패널티 → NPC 대화\n` +
    `[ 우열 ] 아이템 → 조건부 선택지 → 저장/기록지`,
  choices: [confirm('tx_hub_ok', 'tx_hub')],
};

export const txSceneLink: Scene = {
  id: 'tx_scene_link',
  title: '씬 연결 테스트  [ DEV ]',
  description:
    `맵 이동 ↔ 씬 전환 연결 기능 테스트방.\n\n` +
    `이 씬이 표시된다면 맵-씬 연결이 정상 작동 중이다.\n\n` +
    `테스트 항목:\n` +
    `  · 방 이동 시 씬 자동 전환\n` +
    `  · 씬이 없는 방 이동 시 유지\n` +
    `  · 씬 이동 후 맵 위치 유지`,
  choices: [
    {
      id: 'tx_scene_rng',
      label: '[ RNG 테스트 ] 주사위를 굴린다 (50%)',
      type: 'rng',
      successProbability: 0.5,
      outcomes: {
        success: { nextSceneId: 'tx_scene_link', narrativeText: '성공 — RNG 결과가 정상 출력됐다.' },
        failure: { nextSceneId: 'tx_scene_link', narrativeText: '실패 — RNG 실패 경로도 정상이다.' },
      },
    },
    confirm('tx_scene_ok', 'tx_scene_link'),
  ],
};

export const txItem: Scene = {
  id: 'tx_item',
  title: '아이템 테스트  [ DEV ]',
  description:
    `아이템 시스템 테스트방.\n\n` +
    `현재 미구현 — 아이템 데이터가 비어 있다.\n\n` +
    `구현 예정:\n` +
    `  · 아이템 획득 (itemsGained)\n` +
    `  · 아이템 소실 (itemsLost)\n` +
    `  · 아이템 사용 액션 + 효과 적용\n` +
    `  · 인벤토리 클릭 인터랙션\n\n` +
    `DEV CONSOLE → 아이템 조작 섹션으로 임시 테스트 가능.`,
  choices: [
    {
      id: 'tx_item_gain',
      label: '[ 아이템 획득 ] 테스트 아이템을 줍는다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId:   'tx_item',
          narrativeText: '아이템을 획득했다. (itemsGained 기능 확인)',
          itemsGained:   ['test_item'],
        },
      },
    },
    {
      id: 'tx_item_lose',
      label: '[ 아이템 소실 ] 테스트 아이템을 버린다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId:   'tx_item',
          narrativeText: '아이템을 버렸다. (itemsLost 기능 확인)',
          itemsLost:     ['test_item'],
        },
      },
    },
    confirm('tx_item_ok', 'tx_item'),
  ],
};

export const txDanger: Scene = {
  id: 'tx_danger',
  title: '위험 패널티 테스트  [ DEV ]',
  description:
    `위험 구역 패널티 기능 테스트방.\n\n` +
    `현재 미구현 — danger 타입 방 진입 시 패널티 없음.\n\n` +
    `구현 예정:\n` +
    `  · danger 방 진입 시 HP -5 또는 오염도 +10\n` +
    `  · locked 방은 아이템/조건 없이 진입 불가\n\n` +
    `아래 선택지로 수동 패널티를 테스트할 수 있다.`,
  choices: [
    {
      id: 'tx_danger_hp',
      label: '[ HP 패널티 ] 독가스를 마신다 (-20 HP)',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId:   'tx_danger',
          narrativeText: '독가스가 폐를 태웠다. HP가 감소했다.',
          hpDelta:       -20,
        },
      },
    },
    {
      id: 'tx_danger_cor',
      label: '[ 오염도 패널티 ] 부정을 흡수한다 (+20 오염도)',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId:      'tx_danger',
          narrativeText:    '어둠이 스몄다. 오염도가 증가했다.',
          corruptionDelta:  20,
        },
      },
    },
    {
      id: 'tx_danger_death',
      label: '[ 사망 테스트 ] HP 0으로 만든다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId:   'tx_danger',
          narrativeText: '당신은 쓰러졌다. 사망 판정 화면을 확인하라.',
          hpDelta:       -9999,
        },
      },
    },
    confirm('tx_danger_ok', 'tx_danger'),
  ],
};

export const txCond: Scene = {
  id: 'tx_cond',
  title: '조건부 선택지 테스트  [ DEV ]',
  description:
    `조건부 선택지 기능 테스트방.\n\n` +
    `아래 선택지들은 각각 다른 조건을 가진다.\n` +
    `DEV CONSOLE 또는 다른 씬을 통해 아이템·스탯을 조절해 테스트하라.\n\n` +
    `필요 조건을 충족하지 못한 선택지는 흐리게 표시된다.`,
  choices: [
    {
      id: 'tx_cond_lighter',
      label: '라이터로 신호를 보낸다',
      type: 'deterministic',
      required: { items: ['lighter'] },
      outcomes: { success: { nextSceneId: 'tx_cond', narrativeText: '라이터 불꽃이 깜박였다. 아이템 조건 선택지가 작동한다.' } },
    },
    {
      id: 'tx_cond_hp',
      label: '전력으로 달린다  (HP 60 이상 필요)',
      type: 'rng',
      successProbability: 0.7,
      required: { minHp: 60 },
      outcomes: {
        success: { nextSceneId: 'tx_cond', narrativeText: '충분한 체력으로 달려나갔다. HP 조건 + RNG 선택지 복합 테스트 성공.' },
        failure: { nextSceneId: 'tx_cond', narrativeText: '발을 헛디뎠다. HP 조건은 충족했지만 RNG에서 실패했다.' },
      },
    },
    {
      id: 'tx_cond_cor',
      label: '맑은 정신으로 집중한다  (오염도 30 이하 필요)',
      type: 'deterministic',
      required: { maxCorruption: 30 },
      outcomes: { success: { nextSceneId: 'tx_cond', narrativeText: '깨끗한 정신으로 집중했다. 오염도 조건이 작동한다.' } },
    },
    {
      id: 'tx_cond_combo',
      label: '진통제를 먹고 집중한다  (진통제 + HP 40 + 오염도 50 이하)',
      type: 'deterministic',
      required: { items: ['painkiller'], minHp: 40, maxCorruption: 50 },
      outcomes: {
        success: {
          nextSceneId:   'tx_cond',
          narrativeText: '세 가지 조건을 모두 충족했다. 복합 조건 선택지가 정상 작동한다.',
          itemsLost:     ['painkiller'],
        },
      },
    },
    confirm('tx_cond_ok', 'tx_cond'),
  ],
};

export const txNpc: Scene = {
  id: 'tx_npc',
  title: 'NPC 대화 테스트  [ DEV ]',
  description:
    `NPC 조우·대화 시스템 테스트방.\n\n` +
    `현재 미구현 — 정적 선택지만 존재한다.\n\n` +
    `구현 예정:\n` +
    `  · NPC별 대화 트리 데이터\n` +
    `  · 호감도/신뢰도 수치\n` +
    `  · 조건부 대화 분기\n` +
    `  · NPC 초상화 / 아스키아트`,
  choices: [confirm('tx_npc_ok', 'tx_npc')],
};

export const txSave: Scene = {
  id: 'tx_save',
  title: '저장 / 기록지 테스트  [ DEV ]',
  description:
    `저장·불러오기·기록지 기능 테스트방.\n\n` +
    `현재 미구현 — 우측 패널 버튼이 연결되지 않음.\n\n` +
    `구현 예정:\n` +
    `  · LocalStorage 기반 저장/불러오기\n` +
    `  · 기록지 패널 — 선택 이력 시간순 표시\n` +
    `  · 복수 슬롯 저장`,
  choices: [confirm('tx_save_ok', 'tx_save')],
};
