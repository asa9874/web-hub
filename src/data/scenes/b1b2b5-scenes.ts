import type { Scene } from '../../types/index.ts';

const back = (id: string, nextSceneId: string, label = '뒤로 나간다') => ({
  id,
  label,
  type: 'deterministic' as const,
  outcomes: { success: { nextSceneId, narrativeText: '' } },
});

// ══════════════════════════════════════════════════════════════════════════════
// B1 망가진 골목
// ══════════════════════════════════════════════════════════════════════════════

// ── 북쪽 도로 (b1-n) ──────────────────────────────────────────────────────────

const ART_B1_NORTH = `
  ┌──────────────────────────────────────────────────────┐
  │         ↑ B5 회색거리 방향                           │
  │                                                      │
  │   ──────────────────────────────────────────         │
  │                   북쪽 도로                          │
  │   ──────────────────────────────────────────         │
  │                                                      │
  │  [잔해 더미]   [교차점]   [동쪽 골목 →]             │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b1NorthRoad: Scene = {
  id: 'b1_north_road',
  title: '북쪽 도로',
  asciiArt: ART_B1_NORTH,
  description:
    `B5 방향으로 이어지는 북쪽 도로.\n\n` +
    `완전히 노출된 구역이다.\n` +
    `방호벽도, 숨을 곳도 없다.\n\n` +
    `서쪽엔 잔해 더미가 보인다. 교차점은 남쪽.`,
  choices: [
    {
      id: 'b1n_rubble',
      label: '잔해 더미 쪽을 살핀다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b1_rubble', narrativeText: '잔해 쪽으로 다가갔다.' } },
    },
    {
      id: 'b1n_crs',
      label: '교차점으로 간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b1_crossroads', narrativeText: '남쪽 교차점으로 걸어갔다.' } },
    },
    {
      id: 'b1n_east',
      label: '동쪽 골목을 살핀다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b1_east_alley', narrativeText: '동쪽으로 걸음을 옮겼다.' } },
    },
  ],
};

// ── 잔해 더미 (b1-rub, item) — 지하통로 발견 ─────────────────────────────────

const ART_B1_RUBBLE = `
  ┌──────────────────────────────────────────────────────┐
  │  ████████ 붕괴된 건물 잔해 ████████                  │
  │       ████████████████                               │
  │  ■■■■■■■████████████████■■■■■■■                     │
  │          ↓ 뭔가 있다                                 │
  │       틈새가 보인다                                   │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b1Rubble: Scene = {
  id: 'b1_rubble',
  title: '잔해 더미',
  asciiArt: ART_B1_RUBBLE,
  description:
    `붕괴된 건물 잔해가 쌓여 있다.\n\n` +
    `교차점 경고판 뒤에서 읽은 메모가 떠오른다:\n` +
    `"지하 통로 — 잔해 더미 서쪽 틈."\n\n` +
    `콘크리트 파편 사이에 뭔가 보인다.`,
  choices: [
    {
      id: 'rub_dig',
      label: '잔해를 치우고 틈새를 판다',
      type: 'rng',
      successProbability: 0.7,
      outcomes: {
        success: {
          nextSceneId: 'b1_rubble',
          narrativeText:
            `콘크리트 블록 두 개를 옮기자 — 아래로 내려가는 계단이 나왔다.\n` +
            `지하 통로다. B3 방향으로 이어진다.`,
        },
        failure: {
          nextSceneId: 'b1_rubble',
          narrativeText:
            `잔해가 무거웠다. 조금 치웠지만 아직 막혀 있다.\n` +
            `다시 시도해야 한다.`,
          hpDelta: -5,
        },
      },
    },
    {
      id: 'rub_alley',
      label: '뒷골목 쪽을 살핀다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b1_alley_ryumin', narrativeText: '잔해 더미 뒤쪽으로 돌아갔다.' } },
    },
    back('rub_back', 'b1_north_road', '북쪽 도로로 돌아간다'),
  ],
};

// ── 중앙 교차점 (b1-crs, item) ────────────────────────────────────────────────

const ART_B1_CRS = `
  ┌──────────────────────────────────────────────────────┐
  │           ↑ B5 / A1                                  │
  │                                                      │
  │  ← A1   ──────────────────────   →                  │
  │              교차점                                  │
  │  ← A1   ──────────────────────   →                  │
  │                                                      │
  │  [경고판]  "출입 금지  // 타락자 목격"               │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b1Crossroads: Scene = {
  id: 'b1_crossroads',
  title: '중앙 교차점',
  asciiArt: ART_B1_CRS,
  description:
    `B1 중심부. 사방이 트여 있다.\n\n` +
    `녹슨 경고판이 세워져 있다: "출입 금지 — 타락자 목격."\n` +
    `경고판 뒷면에 누군가 손으로 쓴 메모가 붙어있다.`,
  backgroundContext: `이 교차점은 D+8에 마지막으로 정리대가 지나쳤다. 그 이후엔 아무도 없다.`,
  choices: [
    {
      id: 'crs_memo',
      label: '경고판 뒷면 메모를 읽는다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b1_crossroads',
          narrativeText:
            `"지하통로 입구 — 잔해 더미 서쪽 / 뒷골목 안쪽 통로도 있음\n` +
            `B3 지하철역까지 약 20분 / 혼자 가지 마라"\n\n` +
            `손 글씨. 뒷골목을 아는 사람이 쓴 것 같다.`,
        },
      },
    },
    {
      id: 'crs_rubble',
      label: '잔해 더미 쪽으로 간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b1_rubble', narrativeText: '서쪽 잔해 더미 방향으로 이동했다.' } },
    },
    back('crs_back', 'b1_north_road', '북쪽 도로로 돌아간다'),
  ],
};

// ── 뒷골목 — 류민 (b1-alley, npc) ────────────────────────────────────────────

const ART_B1_ALLEY = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  골목 폭 1m. 양쪽 벽이 무너져 좁아졌다.             │
  │                                                      │
  │  ████████████   ← 건물 잔해                          │
  │  ████████████   [?] 인기척                           │
  │  ████████████                                        │
  │                  ↓ B3 지하통로                       │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b1AlleyRyumin: Scene = {
  id: 'b1_alley_ryumin',
  title: '뒷골목',
  asciiArt: ART_B1_ALLEY,
  description:
    `폭 1m도 안 되는 골목. 양쪽 건물이 무너져 좁아졌다.\n\n` +
    `발소리를 죽이고 들어서자 — 뭔가 움직였다.\n\n` +
    `"움직이지 마. 한 발짝만 더 오면."\n\n` +
    `벽 뒤에서 목소리가 들린다. 두려움이 가득하다.`,
  backgroundContext: `류민은 D+4부터 이 골목에 숨어있다. 밖이 너무 무서워서 떠나지 못하고 있다.`,
  choices: [
    {
      id: 'ry_identify',
      label: '"나는 위에서 내려왔어요. 적이 아니에요."',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b1_alley_ryumin',
          narrativeText:
            `침묵.\n\n` +
            `"...위에서? 아직 살아있는 사람이 있었어."\n\n` +
            `머리 하나가 벽 뒤로 조심스럽게 나타났다.\n` +
            `30대 중반. 눈이 충혈되어 있다. 여러 날 못 잔 얼굴이다.`,
        },
      },
    },
    {
      id: 'ry_ask_b3',
      label: '"B3로 가는 길을 알고 있나요?"',
      type: 'deterministic',
      required: { items: ['survival_memo'] },
      outcomes: {
        success: {
          nextSceneId: 'b1_alley_ryumin',
          narrativeText:
            `"그 메모 — 203호에서 가져온 거야?"\n\n` +
            `그가 잠깐 뭔가를 생각하더니 종이를 꺼냈다.\n` +
            `"지하통로 입구는 저 잔해 뒤야. 내가 표시해뒀어.\n` +
            `B3까지 직통이야. 조심하고. 거긴 나보다 더 무섭거든."`,
          itemsGained: ['ryumin_note'],
        },
      },
    },
    {
      id: 'ry_ask_area',
      label: '"이 골목 주변에 대해 알고 있나요?"',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b1_alley_ryumin',
          narrativeText:
            `"동쪽 골목엔 두 개가 있어. 낮엔 가끔 잔다.\n` +
            `밤엔 절대 안 돼. B2 편의점은 비어가고 있고,\n` +
            `B5는..." 그가 말을 멈췄다.\n\n` +
            `"B5는 이미 포기해. 교차로가 완전히 망가졌어."`,
        },
      },
    },
    back('ry_back', 'b1_rubble', '잔해 더미 쪽으로 돌아간다'),
  ],
};

// ── 동쪽 골목 (b1-e, danger) ─────────────────────────────────────────────────

const ART_B1_EAST = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  어둡다. 골목 입구에서 30m 앞이 보이지 않는다.       │
  │                                                      │
  │  //  //  //  ← 손톱 자국이 벽에 그어져 있다          │
  │                                                      │
  │  [타락자 흔적]   조심해야 한다                       │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b1EastAlley: Scene = {
  id: 'b1_east_alley',
  title: '동쪽 골목',
  asciiArt: ART_B1_EAST,
  description:
    `좁고 어두운 골목.\n\n` +
    `벽에 손톱 자국이 길게 그어져 있다. 높이가 맞지 않는 각도다.\n` +
    `류민이 말했던 것 — 낮엔 잔다고.\n\n` +
    `안쪽에서 낮은 숨소리 같은 게 들린다.`,
  choices: [
    {
      id: 'east_sneak',
      label: '몸을 낮추고 조용히 지나간다',
      type: 'rng',
      successProbability: 0.55,
      outcomes: {
        success: {
          nextSceneId: 'b1_east_alley',
          narrativeText:
            `벽에 붙어 숨을 참았다.\n` +
            `그것들이 천천히 지나갔다 — 당신을 감지하지 못했다.`,
        },
        failure: {
          nextSceneId: 'b1_east_alley',
          narrativeText:
            `발이 빈 깡통을 건드렸다.\n` +
            `하나가 돌아봤다. 도망쳤다.`,
          hpDelta: -12,
          corruptionDelta: 8,
        },
      },
    },
    back('east_back', 'b1_north_road', '북쪽 도로로 돌아간다'),
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// B2 폐편의점
// ══════════════════════════════════════════════════════════════════════════════

// ── 입구 (b2-ent) ─────────────────────────────────────────────────────────────

const ART_B2_ENT = `
  ┌──────────────────────────────────────────────────────┐
  │   [자동문]                                           │
  │    반파됨      CONVENIENCE STORE                     │
  │   ──┤  ├──                                           │
  │      ↓                                               │
  │   [진열대 구역]              [계산대]                 │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b2Entrance: Scene = {
  id: 'b2_entrance',
  title: '폐편의점 — 입구',
  asciiArt: ART_B2_ENT,
  description:
    `자동문이 반파된 채 멈춰 있다. 비틀어 통과할 수 있다.\n\n` +
    `편의점 안. 형광등은 꺼져 있고 외부 빛만 들어온다.\n` +
    `대부분의 진열대가 비어 있다.`,
  choices: [
    {
      id: 'b2e_shelf',
      label: '진열대 쪽을 살핀다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b2_shelf', narrativeText: '진열대 구역으로 걸어들어갔다.' } },
    },
    {
      id: 'b2e_counter',
      label: '계산대를 확인한다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b2_entrance',
          narrativeText:
            `계산대 아래 서랍이 열려 있다.\n` +
            `잔돈과 영수증 뭉치. 마지막 거래 날짜 — D-1.\n` +
            `평범한 날이었다.`,
        },
      },
    },
    back('b2e_back', 'b2_entrance', '입구에서 대기한다'),
  ],
};

// ── 진열대 (b2-shf, item) ─────────────────────────────────────────────────────

const ART_B2_SHELF = `
  ┌──────────────────────────────────────────────────────┐
  │  │ ─── │ ─── │  ─── │  ─── │  빈 진열대             │
  │  │     │     │       │      │                        │
  │  │     │  ?  │       │  ?   │  일부가 남아있다        │
  │  │─────│─────│───────│──────│                        │
  │  │     │     │       │      │                        │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b2Shelf: Scene = {
  id: 'b2_shelf',
  title: '폐편의점 — 진열대',
  asciiArt: ART_B2_SHELF,
  description:
    `진열대 대부분이 비어있다.\n\n` +
    `누군가 이미 훑고 갔다. 하지만 구석과 높은 선반은\n` +
    `아직 확인 안 된 것 같다.`,
  choices: [
    {
      id: 'b2s_high',
      label: '높은 선반 구석을 뒤진다',
      type: 'rng',
      successProbability: 0.5,
      outcomes: {
        success: {
          nextSceneId: 'b2_shelf',
          narrativeText:
            `손이 닿지 않던 구석 — 통조림 두 개.\n` +
            `라벨이 반쯤 떨어졌지만 봉인은 살아있다.`,
          itemsGained: ['food_can'],
        },
        failure: {
          nextSceneId: 'b2_shelf',
          narrativeText: '먼지뿐이다. 누군가 꼼꼼하게 다 가져갔다.',
        },
      },
    },
    {
      id: 'b2s_stor',
      label: '창고 쪽으로 간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b2_storage', narrativeText: '후방 창고 쪽으로 이동했다.' } },
    },
    back('b2s_back', 'b2_entrance', '입구로 돌아간다'),
  ],
};

// ── 창고 (b2-stor, item) ──────────────────────────────────────────────────────

const ART_B2_STOR = `
  ┌──────────────────────────────────────────────────────┐
  │  ┌───┐ ┌───┐ ┌───┐    빈 상자들                     │
  │  │   │ │   │ │   │                                   │
  │  └───┘ └───┘ └───┘    냉장 냉동 장비 — 꺼져 있음    │
  │                                                      │
  │  뒷문 → 골목 방향                                    │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b2Storage: Scene = {
  id: 'b2_storage',
  title: '폐편의점 — 창고',
  asciiArt: ART_B2_STOR,
  description:
    `후방 창고. 냉동고와 냉장고가 꺼져 있다.\n\n` +
    `냄새가 난다. 오래된 냄새.\n` +
    `뒷문이 보인다 — 뒤쪽 골목으로 나가는 문.`,
  choices: [
    {
      id: 'b2stor_search',
      label: '냉동고 안을 확인한다',
      type: 'rng',
      successProbability: 0.35,
      outcomes: {
        success: {
          nextSceneId: 'b2_storage',
          narrativeText:
            `냉동고 안 — 얼었다 녹은 것들 사이에서 붕대 팩이 나왔다.\n` +
            `방수 포장이 살아있다.`,
          itemsGained: ['bandage'],
        },
        failure: {
          nextSceneId: 'b2_storage',
          narrativeText: '열지 않는 게 나았을 것 같은 냄새가 났다.',
          corruptionDelta: 3,
        },
      },
    },
    back('b2stor_back', 'b2_shelf', '진열대로 돌아간다'),
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// B5 회색 거리 (허브 — 간략 씬)
// ══════════════════════════════════════════════════════════════════════════════

// ── 교차로 (b5-crs, danger) ───────────────────────────────────────────────────

const ART_B5_CRS = `
  ┌──────────────────────────────────────────────────────┐
  │  ↑ C1 한강변              ↖ B6 연세대                │
  │                                                      │
  │  ────────────────── 4차선 도로 ──────────────────    │
  │          ↗ B4 병원                                   │
  │  ────────────────────────────────────────────────    │
  │                                                      │
  │  ↓ B1 골목          [완전 노출 — 위험]               │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b5Crossroads: Scene = {
  id: 'b5_crossroads',
  title: '회색 거리 교차로',
  asciiArt: ART_B5_CRS,
  description:
    `B5 중심 교차로. 완전히 노출된 구역이다.\n\n` +
    `4차선 도로가 엇갈린다. 어느 방향이든 갈 수 있지만,\n` +
    `숨을 곳이 없다.\n\n` +
    `타락자들이 낮에도 배회한다.`,
  backgroundContext: `B5 회색 거리는 생존 구역과 경계 구역 사이의 완충지대다. 아무도 이 구역을 차지하지 못했다.`,
  choices: [
    {
      id: 'b5crs_sprint',
      label: '전력 질주로 가로지른다',
      type: 'rng',
      successProbability: 0.7,
      required: { minHp: 30 },
      outcomes: {
        success: {
          nextSceneId: 'b5_crossroads',
          narrativeText:
            `숨을 참고 달렸다. 무언가가 뒤를 돌아봤지만\n` +
            `당신은 이미 반대편에 있었다.`,
        },
        failure: {
          nextSceneId: 'b5_crossroads',
          narrativeText:
            `발이 얼어붙었다. 타락자가 이쪽을 보고 있다.\n` +
            `최대한 빨리 몸을 낮추고 숨었다.`,
          hpDelta: -10,
          corruptionDelta: 10,
        },
      },
    },
    {
      id: 'b5crs_building',
      label: '근처 폐건물로 피한다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b5_building', narrativeText: '교차로 옆 폐건물로 몸을 숨겼다.' } },
    },
  ],
};

// ── 폐건물 (b5-bld) ──────────────────────────────────────────────────────────

const ART_B5_BLD = `
  ┌──────────────────────────────────────────────────────┐
  │  ████████████████  폐건물 내부  ████████████████      │
  │                                                      │
  │  1층: 어둡고 넓다. 몸을 숨길 수 있다.               │
  │  2층: 교차로가 내려다보인다.                         │
  │                                                      │
  │  [1층 은신]          [2층 전망 →]                    │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b5Building: Scene = {
  id: 'b5_building',
  title: '폐건물',
  asciiArt: ART_B5_BLD,
  description:
    `교차로 옆 낡은 건물. 창문이 모두 깨져 있다.\n\n` +
    `1층은 충분히 어두워서 몸을 숨길 수 있다.\n` +
    `2층에서는 교차로 전체가 내려다보인다.`,
  choices: [
    {
      id: 'b5bld_observe',
      label: '2층에서 교차로를 관찰한다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b5_building',
          narrativeText:
            `교차로에 타락자 셋이 배회하고 있다.\n` +
            `패턴이 있다 — 규칙적으로 같은 경로를 반복한다.\n` +
            `틈이 생기는 시간은 약 30초.`,
        },
      },
    },
    {
      id: 'b5bld_rest',
      label: '1층 구석에서 잠깐 쉰다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b5_building',
          narrativeText:
            `어둠 속에 앉아 숨을 고른다.\n` +
            `쉬고 나니 몸이 조금 나아졌다.`,
          hpDelta: 5,
        },
      },
    },
    back('b5bld_back', 'b5_crossroads', '교차로로 돌아간다'),
  ],
};

// ── B5 상가 (b5-shpB, 통합) ──────────────────────────────────────────────────

const ART_B5_SHOP = `
  ┌──────────────────────────────────────────────────────┐
  │  [상가 A]    [상가 B]    [상가 C]                    │
  │   서쪽        중앙         동쪽                       │
  │                                                      │
  │   빈 가게들. 유리창이 깨져 있다.                     │
  │   대부분 이미 약탈당했다.                            │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b5ShopB: Scene = {
  id: 'b5_shop_b',
  title: '상가 잔해',
  asciiArt: ART_B5_SHOP,
  description:
    `교차로 주변 상가들. 유리창이 모두 깨져 있다.\n\n` +
    `음식점, 약국, 편의점 — 다 비어 있다.\n` +
    `약탈의 흔적. 서두른 흔적. 포기한 흔적.`,
  choices: [
    {
      id: 'b5shop_pharmacy',
      label: '약국 잔재를 뒤진다',
      type: 'rng',
      successProbability: 0.3,
      outcomes: {
        success: {
          nextSceneId: 'b5_shop_b',
          narrativeText:
            `약품장 안쪽 서랍 — 진통제 한 병.\n` +
            `봉인이 살아있다.`,
          itemsGained: ['painkiller'],
        },
        failure: {
          nextSceneId: 'b5_shop_b',
          narrativeText: '빈 병들만 굴러다닌다.',
        },
      },
    },
    back('b5shop_back', 'b5_crossroads', '교차로로 돌아간다'),
  ],
};
