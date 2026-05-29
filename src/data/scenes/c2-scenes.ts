import type { Scene } from '../../types/index.ts';

const back = (id: string, nextSceneId: string, label = '뒤로 나간다') => ({
  id,
  label,
  type: 'deterministic' as const,
  outcomes: { success: { nextSceneId, narrativeText: '' } },
});

// ══════════════════════════════════════════════════════════════════════════════
// C2 심층 구역 경계
// ══════════════════════════════════════════════════════════════════════════════

// ── C1에서 C2로 진입 (c2-nc1) ─────────────────────────────────────────────────

const ART_C2_ENT = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  공기가 바뀐다.                                      │
  │                                                      │
  │  ─────────── 경계 구역 시작 ──────────────           │
  │                                                      │
  │  북쪽으로 갈수록 오염 농도가 높아진다.               │
  │  발걸음이 무거워지는 느낌이 드는 건 착각이 아니다.   │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const c2Entrance: Scene = {
  id: 'c2_entrance',
  title: 'C2 심층 구역 경계 — 입구',
  asciiArt: ART_C2_ENT,
  description:
    `공기가 바뀐다.\n\n` +
    `C1을 벗어나는 순간, 무언가 다른 것이 피부에 닿는 것처럼 느껴진다.\n` +
    `오염 농도가 더 높다. 생각하는 속도가 조금 느려진 것 같다.\n\n` +
    `북쪽으로 경계선이 있다.`,
  backgroundContext: `C2 경계 구역은 한때 마법소녀 군단의 최전선이었다. 그들이 물러날 때 아무것도 남기지 않았다.`,
  choices: [
    {
      id: 'c2e_base',
      label: '은별 거점을 찾아 북쪽으로 간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'c2_eunbyeol', narrativeText: '북쪽으로 걸어갔다.' } },
    },
    back('c2e_back', 'c1_road', 'C1으로 돌아간다'),
  ],
};

// ── 은별 거점 (c2-base, npc) ★ ────────────────────────────────────────────────

const ART_C2_BASE = `
  ┌──────────────────────────────────────────────────────┐
  │  폐건물 1층. 두꺼운 커튼이 쳐져 있다.               │
  │                                                      │
  │  침구  ·  식량  ·  날짜별 기록 노트                  │
  │                                                      │
  │  "어제보다 5m 더 남쪽."                              │
  │  기록들이 쌓여있다.                                  │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const c2Eunbyeol: Scene = {
  id: 'c2_eunbyeol',
  title: 'C2 — 은별 거점',
  asciiArt: ART_C2_BASE,
  description:
    `폐건물 1층. 두꺼운 커튼이 밖을 가리고 있다.\n\n` +
    `바닥에 날짜별 기록 노트가 쌓여있다.\n` +
    `모두 같은 내용: 경계선 위치와 이동 거리.\n\n` +
    `여성이 커튼 너머를 보다 돌아봤다. 눈이 지쳐있다.`,
  backgroundContext: `은별은 D+5부터 혼자 이곳에 있다. 3주째 하루도 빠지지 않고 경계를 기록했다.`,
  choices: [
    {
      id: 'eb_ask_line',
      label: '"경계선이 얼마나 빠르게 이동하고 있나요?"',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'c2_eunbyeol',
          narrativeText:
            `"하루 평균 5m. 처음엔 2m였어요."\n\n` +
            `그녀가 노트를 넘겼다.\n\n` +
            `"3주 전엔 저기 있었어요." 창문 너머 멀리를 가리켰다.\n` +
            `"지금은 여기서 200m 북쪽이에요.\n` +
            `이 속도면..." 그녀가 말을 멈췄다.`,
        },
      },
    },
    {
      id: 'eb_ask_d1',
      label: '"D1에 직접 들어간 사람이 있나요?"',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'c2_eunbyeol',
          narrativeText:
            `"마법소녀들이요. 전부.\n` +
            `그 중 한 명이 1층까지 갔어요. 하나라고.\n` +
            `돌아오지 않았어요."\n\n` +
            `"혼자는 안 돼요. 경계선 넘는 순간부터\n` +
            `오염이 기하급수로 쌓여요. 마법소녀 없이는."`,
        },
      },
    },
    {
      id: 'eb_ask_iseah',
      label: '"이세아와 함께라면?"',
      type: 'deterministic',
      required: { items: ['iseah_pact'] },
      outcomes: {
        success: {
          nextSceneId: 'c2_eunbyeol',
          narrativeText:
            `은별이 처음으로 표정이 바뀌었다.\n\n` +
            `"이세아가 당신과 함께 가겠다고 했어요?"\n\n` +
            `잠깐의 침묵.\n\n` +
            `"그럼 가능할 수도 있어요. 경계선은\n` +
            `저 위 관측소를 통해 나가면 돼요.\n` +
            `...잘 됐으면 좋겠네요."`,
        },
      },
    },
    {
      id: 'eb_obs',
      label: '경계선 관측소로 간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'c2_observation', narrativeText: '관측소 방향으로 걸음을 옮겼다.' } },
    },
  ],
};

// ── 경계선 관측 (c2-obs, item) ────────────────────────────────────────────────

const ART_C2_OBS = `
  ┌──────────────────────────────────────────────────────┐
  │  ─ ─ ─ ─ ─ ─ 경계선 (어제 위치) ─ ─ ─ ─ ─ ─        │
  │  ━━━━━━━━━━━━ 경계선 (오늘 위치) ━━━━━━━━━━━━        │
  │                                                      │
  │  ← 5m 이동했다. 북쪽이 밀려오고 있다.               │
  │                                                      │
  │  탑이 보인다.                                        │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const c2Observation: Scene = {
  id: 'c2_observation',
  title: 'C2 경계선 관측',
  asciiArt: ART_C2_OBS,
  description:
    `관측 지점. 두 개의 선이 그어져 있다.\n\n` +
    `어제 경계선과 오늘 경계선.\n` +
    `5m. 하루 만에.\n\n` +
    `북쪽으로 탑이 보인다. 여기서도 가깝다.`,
  choices: [
    {
      id: 'obs_measure',
      label: '경계선 이동 속도를 직접 측정한다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'c2_observation',
          narrativeText:
            `관측 기록과 대조했다.\n\n` +
            `하루 5m. 가속 추이: +0.2m/일.\n\n` +
            `"이 속도면 A2까지 48일.\n` +
            `그 전에 뭔가 달라져야 한다."`,
        },
      },
    },
    {
      id: 'obs_line',
      label: '경계선 쪽으로 다가간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'c2_boundary', narrativeText: '경계선 쪽으로 발걸음을 옮겼다.' } },
    },
    back('obs_back', 'c2_eunbyeol', '거점으로 돌아간다'),
  ],
};

// ── 경계선 (c2-line, danger) — 이세아와 통과 ────────────────────────────────

const ART_C2_LINE = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  붉은 천 표식들이 줄지어 있다.                       │
  │                                                      │
  │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
  │       경계선. 이 선을 넘으면 타락이 가속된다.        │
  │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
  │                                                      │
  │  북쪽에 탑이 있다.                                   │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const c2Boundary: Scene = {
  id: 'c2_boundary',
  title: 'C2 경계선',
  asciiArt: ART_C2_LINE,
  description:
    `붉은 천 표식들이 일직선으로 늘어서 있다.\n\n` +
    `은별의 기록에서 읽은 것: 이 선을 넘는 순간\n` +
    `오염 농도가 급격히 올라간다.\n\n` +
    `혼자서는 넘을 수 없다.`,
  backgroundContext: `경계선은 마법소녀 군단이 설정한 최후의 경고선이다. 그들이 설정하고 물러났다.`,
  choices: [
    {
      id: 'line_cross',
      label: '이세아와 함께 경계를 넘는다',
      type: 'deterministic',
      required: { items: ['iseah_pact'] },
      outcomes: {
        success: {
          nextSceneId: 'c2_boundary',
          narrativeText:
            `이세아가 옆에 섰다.\n\n` +
            `"제 손을 잡아요."\n\n` +
            `그녀의 손에서 희미한 빛이 났다.\n` +
            `마지막으로 남은 정화력.\n\n` +
            `경계를 넘었다. 오염이 파도처럼 밀려왔지만\n` +
            `이세아가 막아냈다.\n\n` +
            `"빨리 가요. 내가 오래 버티진 못해요."`,
          corruptionDelta: 10,
        },
      },
    },
    {
      id: 'line_alone',
      label: '혼자 넘어보려 한다',
      type: 'rng',
      successProbability: 0.2,
      outcomes: {
        success: {
          nextSceneId: 'c2_boundary',
          narrativeText:
            `경계를 넘었다.\n\n` +
            `오염이 온몸을 찌른다. 생각이 흐릿해진다.\n` +
            `몇 걸음 갔다가 돌아왔다. 이건 아니다.`,
          hpDelta: -20,
          corruptionDelta: 25,
        },
        failure: {
          nextSceneId: 'c2_boundary',
          narrativeText:
            `발이 선을 넘는 순간 — 쓰러졌다.\n\n` +
            `오염이 한꺼번에 쏟아진다.\n` +
            `간신히 선 안으로 기어 돌아왔다.\n` +
            `이세아 없이는 불가능하다.`,
          hpDelta: -30,
          corruptionDelta: 20,
        },
      },
    },
    back('line_back', 'c2_observation', '관측소로 돌아간다'),
  ],
};

// ── 분출구 (c2-vent, danger) — 접근 금지 ────────────────────────────────────

const ART_C2_VENT = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  ⚠ ⚠ ⚠  접근 절대 금지  ⚠ ⚠ ⚠                      │
  │                                                      │
  │  땅에서 검은 연기가 솟아오르고 있다.                 │
  │  반경 10m — 즉각 타락 경고.                          │
  │                                                      │
  │  여기선 아무것도 찾을 수 없다. 나가야 한다.          │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const c2Vent: Scene = {
  id: 'c2_vent',
  title: 'C2 분출구 ☠',
  asciiArt: ART_C2_VENT,
  description:
    `땅에서 검은 연기가 솟아오른다.\n\n` +
    `오염 농도가 급격히 치솟는다.\n` +
    `여기 있을 이유가 없다. 즉시 물러나야 한다.`,
  choices: [
    back('vent_back', 'c2_boundary', '경계선 쪽으로 달린다'),
  ],
};
