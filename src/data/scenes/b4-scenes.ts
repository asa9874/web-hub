import type { Scene } from '../../types/index.ts';

const back = (id: string, nextSceneId: string, label = '뒤로 나간다') => ({
  id,
  label,
  type: 'deterministic' as const,
  outcomes: { success: { nextSceneId, narrativeText: '' } },
});

// ══════════════════════════════════════════════════════════════════════════════
// B4 붕괴된 병원
// ══════════════════════════════════════════════════════════════════════════════

// ── 병원 출입구 (b4-exit) ─────────────────────────────────────────────────────

const ART_B4_ENT = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  ██████████████  붕괴된 병원  ███████████████████    │
  │                                                      │
  │  자동문이 반쯤 열린 채 멈춰있다.                     │
  │  안에서 공기가 흘러나온다 — 차갑고 낯선 냄새.        │
  │                                                      │
  │  [1층 응급실 →]             옥상이 일부 내려앉았다.  │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b4Entrance: Scene = {
  id: 'b4_entrance',
  title: '붕괴된 병원 — 출입구',
  asciiArt: ART_B4_ENT,
  description:
    `자동문이 반쯤 열린 채 고장났다.\n\n` +
    `병원 안에서 공기가 흘러나온다.\n` +
    `차갑고, 소독약과 무언가 다른 것이 섞인 냄새.\n\n` +
    `건물 외벽에 기울어진 표지판: "연세세브란스 B관"`,
  backgroundContext: `B4 병원은 D+2에 외부 통제를 잃었다. 마지막 의료 기록은 수술실 303에 있다.`,
  choices: [
    {
      id: 'b4e_in',
      label: '안으로 들어간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b4_emergency', narrativeText: '자동문 틈으로 비집고 들어갔다.' } },
    },
    back('b4e_back', 'b4_entrance', '밖에서 더 살핀다'),
  ],
};

// ── 응급실 (b4-er, item) ──────────────────────────────────────────────────────

const ART_B4_ER = `
  ┌──────────────────────────────────────────────────────┐
  │  [침대 1] [침대 2] [침대 3]  ← 빈 침대들             │
  │                                                      │
  │  [처치실 ←]        [복도 ⚠]        [지하 ↓]         │
  │                                                      │
  │  업무 일지가 데스크에 열려 있다.                     │
  │  마지막 항목: 05:47                                  │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b4Emergency: Scene = {
  id: 'b4_emergency',
  title: 'B4 1층 응급실',
  asciiArt: ART_B4_ER,
  description:
    `응급실. 침대들이 비어 있다.\n\n` +
    `데스크 위 업무 일지가 열려 있다.\n` +
    `마지막 항목 시간: 05:47.\n\n` +
    `환자가 들어왔고, 담당 의사 이름이 적혀있다 — 이주원.`,
  backgroundContext: `이주원은 D+2 새벽에 마지막으로 환자를 봤다. 그 이후 자신의 연구실로 올라갔다.`,
  choices: [
    {
      id: 'b4er_log',
      label: '업무 일지를 읽는다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b4_emergency',
          narrativeText:
            `마지막 항목:\n` +
            `"05:47 — 환자 이름 미상. 오염 증상 4단계.\n` +
            `정화 처치 불가. 오염이 신경계를 통해 전이됨.\n` +
            `내가 연구하던 것과 동일한 주파수 패턴. 올라가서 확인해야 한다.\n` +
            `— 이주원"\n\n` +
            `거기서 일지는 끝났다.`,
        },
      },
    },
    {
      id: 'b4er_3f',
      label: '계단으로 3층 수술실로 올라간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b4_corridor_3f', narrativeText: '계단을 올라갔다. 2층을 건너뛰었다.' } },
    },
    {
      id: 'b4er_tr',
      label: '처치실을 살핀다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b4_treatment', narrativeText: '처치실 커튼을 당겼다.' } },
    },
    {
      id: 'b4er_fac',
      label: '지하 시설실로 내려간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b4_facility', narrativeText: '지하로 내려가는 계단을 찾았다.' } },
    },
  ],
};

// ── 처치실 (b4-tr, item) ──────────────────────────────────────────────────────

const ART_B4_TR = `
  ┌──────────────────────────────────────────────────────┐
  │  커튼이 쳐진 처치대 3개.                             │
  │                                                      │
  │  [커튼 1]   [커튼 2]   [커튼 3]                     │
  │  (비어있음)             (뭔가 있다?)                  │
  │                                                      │
  │  약품 선반 — 일부 남아있다.                          │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b4Treatment: Scene = {
  id: 'b4_treatment',
  title: 'B4 처치실',
  asciiArt: ART_B4_TR,
  description:
    `처치실. 커튼이 쳐진 처치대 세 개.\n\n` +
    `약품 선반에 생리식염수와 붕대가 남아있다.\n` +
    `마지막 커튼 — 뭔가 있는 것 같다.`,
  choices: [
    {
      id: 'b4tr_supplies',
      label: '약품 선반을 뒤진다',
      type: 'rng',
      successProbability: 0.65,
      outcomes: {
        success: {
          nextSceneId: 'b4_treatment',
          narrativeText:
            `생리식염수 팩 두 개와 붕대.\n` +
            `유통기한이 지났지만 봉인은 살아있다.`,
          itemsGained: ['bandage'],
        },
        failure: {
          nextSceneId: 'b4_treatment',
          narrativeText: '이미 다 가져갔거나, 원래 없었던 것 같다.',
        },
      },
    },
    {
      id: 'b4tr_curtain',
      label: '마지막 커튼을 열어본다',
      type: 'rng',
      successProbability: 0.5,
      outcomes: {
        success: {
          nextSceneId: 'b4_treatment',
          narrativeText:
            `비어있다.\n` +
            `하지만 베개 밑에 진통제 반 병이 있다.`,
          itemsGained: ['painkiller'],
        },
        failure: {
          nextSceneId: 'b4_treatment',
          narrativeText:
            `비어있지 않다.\n\n` +
            `거기엔 사람이 있었다. 아니, 있었던 흔적이.\n` +
            `누군가 마지막 숨을 거두었다. 아무도 없는 처치실에서.`,
          corruptionDelta: 5,
        },
      },
    },
    back('b4tr_back', 'b4_emergency', '응급실로 나간다'),
  ],
};

// ── 3층 수술실 복도 (b4-3f) ──────────────────────────────────────────────────

const ART_B4_3F = `
  ┌──────────────────────────────────────────────────────┐
  │        ↑ 4층 소아과 (권장하지 않음)                  │
  │                                                      │
  │  ──────────── 수술실 구역 ────────────               │
  │  [301] [302] [303★] [304] [305]                      │
  │                ↑ 이주원                              │
  │                                                      │
  │        ↓ 2층 내과 (타락자 다수)                      │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b4Corridor3f: Scene = {
  id: 'b4_corridor_3f',
  title: 'B4 3층 수술실 복도',
  asciiArt: ART_B4_3F,
  description:
    `3층 수술실 복도. 타락자가 드물다.\n\n` +
    `창문에서 들어오는 빛이 먼지를 비춘다.\n` +
    `복도가 고요하다. 불안할 정도로.\n\n` +
    `303호 문이 살짝 열려 있다.`,
  backgroundContext: `이주원은 D+1부터 혼자 수술실에 남아 연구를 계속했다. 왜 타락자가 3층을 피하는지 그녀만 알았다.`,
  choices: [
    {
      id: 'b4_3f_303',
      label: '303호로 들어간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b4_surgery_303', narrativeText: '303호 문을 밀었다.' } },
    },
    {
      id: 'b4_3f_4f',
      label: '4층으로 올라간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b4_floor_4f', narrativeText: '위층으로 이어지는 계단을 올라갔다.' } },
    },
    back('b4_3f_back', 'b4_emergency', '1층으로 내려간다'),
  ],
};

// ── 수술실 303 (b4-303, item) ★ ───────────────────────────────────────────────

const ART_B4_303 = `
  ┌──────────────────────────────────────────────────────┐
  │  수술대  ·  무영등 (꺼짐)  ·  기기들                 │
  │                                                      │
  │  .─────────────────────────────────────.             │
  │  │  ♪♪♪  메모지들  ♪♪♪                │             │
  │  │  주파수 그래프 · 수식 · 스케치      │             │
  │  '─────────────────────────────────────'             │
  │                                                      │
  │  청진기가 수술대 위에 놓여 있다.                     │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b4Surgery303: Scene = {
  id: 'b4_surgery_303',
  title: '수술실 303 — 이주원의 흔적',
  asciiArt: ART_B4_303,
  description:
    `303호는 수술실이 아니라 연구실이 되어있다.\n\n` +
    `벽에 주파수 그래프와 수식들이 가득하다.\n` +
    `수술대 위에 청진기 하나가 놓여있다.\n\n` +
    `이주원은 없다. 어디로 갔는지 알 수 없다.`,
  backgroundContext: `이주원이 탑 오염의 주파수 패턴을 처음 기록한 사람이다. 그녀의 연구는 여기서 끝났다.`,
  choices: [
    {
      id: 'b4_303_stethoscope',
      label: '청진기를 집는다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b4_surgery_303',
          narrativeText:
            `청진기를 집어들었다.\n` +
            `귀에 대봤다 — 무언가 들린다. 낮고 규칙적인 진동.\n` +
            `주파수다. 오염의 주파수.`,
          itemsGained: ['stethoscope'],
        },
      },
    },
    {
      id: 'b4_303_memo',
      label: '메모들을 읽는다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b4_surgery_303',
          narrativeText:
            `빼곡한 글씨들.\n\n` +
            `"오염은 공명 주파수를 가진다.\n` +
            `탑의 핵에서 방출되는 주파수 — F0.\n` +
            `반대 주파수(F0') 적용 시 상쇄 가능.\n\n` +
            `필요 조건:\n` +
            `1. 마법소녀의 정화력 (촉매)\n` +
            `2. 신호장비 (주파수 증폭기)\n` +
            `3. 탑의 핵에 직접 접촉\n\n` +
            `— 이주원, D+2 새벽 6시"`,
          itemsGained: ['memo_iwon'],
        },
      },
    },
    back('b4_303_back', 'b4_corridor_3f', '복도로 나간다'),
  ],
};

// ── 4층 소아과 (b4-4f, danger) ────────────────────────────────────────────────

const ART_B4_4F = `
  ┌──────────────────────────────────────────────────────┐
  │  ⚠ 4층 소아과 ⚠                                     │
  │                                                      │
  │  작은 그림들이 벽에 붙어 있다.                       │
  │  아이들이 그린 것들.                                 │
  │                                                      │
  │  소리가 들린다. 어린아이 같은 소리.                  │
  │  하지만 아이가 낼 수 있는 소리가 아니다.             │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b4Floor4f: Scene = {
  id: 'b4_floor_4f',
  title: 'B4 4층 소아과',
  asciiArt: ART_B4_4F,
  description:
    `4층 소아과.\n\n` +
    `벽에 아이들이 그린 그림들이 붙어있다.\n` +
    `하늘, 꽃, 가족. 평범한 그림들.\n\n` +
    `복도 어딘가에서 소리가 들린다.\n` +
    `어린아이 같다 — 하지만 아이가 낼 수 있는 소리가 아니다.\n` +
    `빨리 내려가야 한다.`,
  choices: [
    back('b4_4f_down', 'b4_corridor_3f', '3층으로 빠르게 내려간다'),
  ],
};

// ── 위험 복도 (b4-cor, danger) ────────────────────────────────────────────────

const ART_B4_COR = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  복도 벽에 손톱 자국이 길게 그어져 있다.             │
  │                                                      │
  │  //  //  //  //  //  //  //  //  //                 │
  │                                                      │
  │  멀리서 두 개체가 천천히 움직이고 있다.              │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b4DangerousHall: Scene = {
  id: 'b4_dangerous_hall',
  title: 'B4 위험 복도',
  asciiArt: ART_B4_COR,
  description:
    `복도 벽 전체에 손톱 자국이 그어져 있다.\n\n` +
    `높이가 제각각이다. 두 개체가 배회하고 있다.\n` +
    `한때 의료진이었을 것들이.`,
  choices: [
    {
      id: 'b4cor_sneak',
      label: '벽에 붙어 조용히 지나간다',
      type: 'rng',
      successProbability: 0.5,
      outcomes: {
        success: {
          nextSceneId: 'b4_dangerous_hall',
          narrativeText: '숨을 참았다. 그것들이 반대 방향으로 멀어졌다.',
        },
        failure: {
          nextSceneId: 'b4_dangerous_hall',
          narrativeText:
            `하나가 돌아봤다.\n` +
            `흰 가운이 찢겨있다. 청진기가 아직 목에 걸려있다.\n` +
            `도망쳤다.`,
          hpDelta: -15,
          corruptionDelta: 10,
        },
      },
    },
    back('b4cor_back', 'b4_emergency', '응급실로 돌아간다'),
  ],
};

// ── 지하 시설실 (b4-fac, item) ────────────────────────────────────────────────

const ART_B4_FAC = `
  ┌──────────────────────────────────────────────────────┐
  │  ┌──────────────────────────────────────────────┐    │
  │  │ 배전반                                       │    │
  │  │  [1층 전자잠금]  [비상조명]  [엘리베이터]    │    │
  │  └──────────────────────────────────────────────┘    │
  │                                                      │
  │  약품보관실 전자잠금 — 여기서 해제 가능              │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b4Facility: Scene = {
  id: 'b4_facility',
  title: 'B4 지하 시설실',
  asciiArt: ART_B4_FAC,
  description:
    `지하 시설실. 건물 전기 시스템이 여기 있다.\n\n` +
    `배전반에 레이블이 붙어있다.\n` +
    `"약품보관실 전자잠금 — 이 패널에서 해제 가능"\n\n` +
    `잠겨있던 약품보관실을 열 수 있을지도 모른다.`,
  choices: [
    {
      id: 'b4fac_unlock',
      label: '약품보관실 잠금을 해제한다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b4_facility',
          narrativeText:
            `스위치를 올렸다. 멀리서 전자 잠금음이 해제되는 소리.\n` +
            `약품보관실에 들어갈 수 있게 됐다.`,
        },
      },
    },
    back('b4fac_back', 'b4_emergency', '응급실로 올라간다'),
  ],
};
