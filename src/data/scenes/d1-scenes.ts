import type { Scene } from '../../types/index.ts';

const back = (id: string, nextSceneId: string, label = '뒤로 나간다') => ({
  id,
  label,
  type: 'deterministic' as const,
  outcomes: { success: { nextSceneId, narrativeText: '' } },
});

// ══════════════════════════════════════════════════════════════════════════════
// D1 부정의 탑
// ══════════════════════════════════════════════════════════════════════════════

// ── D1 진입 (d1-nc2) ──────────────────────────────────────────────────────────

const ART_D1_ENT = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │            ████████████████████████████             │
  │          ████ 부정의 탑 ███████████████             │
  │         ████████████████████████████████            │
  │                                                      │
  │  탑이 눈앞에 있다. 이제 됐어야 할 것들이 느껴진다.  │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const d1Entrance: Scene = {
  id: 'd1_entrance',
  title: 'D1 — 부정의 탑 앞',
  asciiArt: ART_D1_ENT,
  description:
    `탑이 눈앞에 있다.\n\n` +
    `콘크리트와 강철이 아니다. 무언가 다른 것이 자랐다.\n` +
    `도시가 이것에 흡수되고 있다는 것을 이제 실감한다.\n\n` +
    `광장이 앞에 펼쳐진다.`,
  choices: [
    {
      id: 'd1e_square',
      label: '탑 광장으로 들어간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'd1_square', narrativeText: '광장으로 발을 내딛었다.' } },
    },
  ],
};

// ── 탑 광장 (d1-sq) ───────────────────────────────────────────────────────────

const ART_D1_SQ = `
  ┌──────────────────────────────────────────────────────┐
  │          ████████████████████████████               │
  │         ████      탑       ████████████             │
  │        ████████████████████████████████             │
  │                                                      │
  │  광장                                               │
  │  바닥 패턴이 변형되어 있다.  [하나의 흔적 →]        │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const d1Square: Scene = {
  id: 'd1_square',
  title: 'D1 탑 광장',
  asciiArt: ART_D1_SQ,
  description:
    `광장 바닥에 패턴이 새겨져 있다.\n\n` +
    `처음엔 단순한 균열처럼 보이지만 — 너무 규칙적이다.\n` +
    `무언가 의도적으로 만든 것.\n\n` +
    `광장 한쪽에 검게 탄 원형 자국이 있다.`,
  backgroundContext: `탑 광장의 패턴은 탑이 성장하면서 자연스럽게 생겼다. 탑은 이 패턴을 통해 오염을 방출한다.`,
  choices: [
    {
      id: 'd1sq_hana',
      label: '검게 탄 원형 자국을 살핀다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'd1_hana', narrativeText: '그 자국 쪽으로 다가갔다.' } },
    },
    {
      id: 'd1sq_tower',
      label: '탑 안으로 들어간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'd1_floor1', narrativeText: '탑 입구를 통해 안으로 들어갔다.' } },
    },
  ],
};

// ── 하나의 흔적 (d1-hana, npc) — special_key ─────────────────────────────────

const ART_D1_HANA = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │          검게 탄 바닥. 원형, 지름 3m.               │
  │                                                      │
  │  바닥이 가끔 따뜻해진다.                            │
  │                                                      │
  │  "누군가 여기서 모든 것을 쏟아냈다."                │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const d1Hana: Scene = {
  id: 'd1_hana',
  title: '하나의 흔적',
  asciiArt: ART_D1_HANA,
  description:
    `검게 탄 바닥. 완전한 원형. 지름 약 3m.\n\n` +
    `무릎을 꿇고 손을 댔다 — 따뜻하다.\n` +
    `오염이 가장 극도로 높은 이 장소에서\n` +
    `유일하게 따뜻한 곳이다.\n\n` +
    `원형 중심에 무언가 빛나는 것이 박혀있다.`,
  backgroundContext: `하나는 D+2에 혼자 탑 안으로 들어갔다. 탑 1층에서 정화를 시도했고, 여기서 모든 것을 소진했다. 다시는 나오지 않았다.`,
  choices: [
    {
      id: 'hana_key',
      label: '중심에서 빛나는 것을 꺼낸다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'd1_hana',
          narrativeText:
            `열쇠다.\n\n` +
            `손에 쥐자 따뜻함이 전해졌다.\n` +
            `하나가 남긴 것.\n` +
            `탑 3층까지 가라는 메시지처럼.`,
          itemsGained: ['special_key'],
        },
      },
    },
    {
      id: 'hana_feel',
      label: '잠시 머문다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'd1_hana',
          narrativeText:
            `눈을 감았다.\n\n` +
            `오염 속에서 이곳만 다르다.\n` +
            `오염도가 조금 낮아지는 것 같은 느낌.\n` +
            `아니면 착각인지도 모른다.`,
          corruptionDelta: -8,
        },
      },
    },
    back('hana_back', 'd1_square', '광장으로 돌아간다'),
  ],
};

// ── 탑 1층 (d1-1f, danger) ────────────────────────────────────────────────────

const ART_D1_1F = `
  ┌──────────────────────────────────────────────────────┐
  │  멈춘 시계들.                                        │
  │                                                      │
  │  ⏱  ⏱  ⏱  ⏱  ⏱  ⏱  ⏱  ⏱  ⏱  ⏱                   │
  │  모두 다른 시각에 멈춰있다.                          │
  │                                                      │
  │  생각이 느려진다.                                    │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const d1Floor1: Scene = {
  id: 'd1_floor1',
  title: '부정의 탑 — 1층',
  asciiArt: ART_D1_1F,
  description:
    `탑 내부.\n\n` +
    `벽에 시계들이 가득하다. 모두 멈춰있다. 다른 시각에.\n\n` +
    `생각이 느려진다.\n` +
    `한 문장을 완성하는 데 평소보다 시간이 걸린다.\n\n` +
    `이세아가 있다면 조금 나을 것이다.`,
  choices: [
    {
      id: 'd1_1f_clocks',
      label: '시계들을 살펴본다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'd1_floor1',
          narrativeText:
            `시계들의 멈춘 시각.\n` +
            `D+0 — 05:47 / D+1 — 11:32 / D+2 — 06:03\n\n` +
            `각각 그 날 탑이 처음 오염을 방출한 시각인 것 같다.\n` +
            `아니면 이 탑이 기억하고 있는 시각들이거나.`,
        },
      },
    },
    {
      id: 'd1_1f_up',
      label: '2층으로 올라간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'd1_floor2', narrativeText: '계단을 올라갔다.' } },
    },
    back('d1_1f_down', 'd1_square', '광장으로 나간다'),
  ],
};

// ── 탑 2층 전망대 (d1-2f, danger) ────────────────────────────────────────────

const ART_D1_2F = `
  ┌──────────────────────────────────────────────────────┐
  │  창문이 없다. 서울 전체가 보인다.                   │
  │                                                      │
  │  검은 도시. 경계선이 밀려오고 있다.                  │
  │                                                      │
  │  목소리가 들린다.                                    │
  │  어디서 오는지 알 수 없는.                           │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const d1Floor2: Scene = {
  id: 'd1_floor2',
  title: '부정의 탑 — 2층 전망대',
  asciiArt: ART_D1_2F,
  description:
    `2층 전망대. 창문이 없다. 서울이 한눈에 보인다.\n\n` +
    `도시가 검다. 경계선이 밀려오는 것이 눈에 보인다.\n\n` +
    `그때 목소리가 들렸다.\n` +
    `방향이 없다. 안에서 들리는 것 같다.`,
  backgroundContext: `탑 2층에서 "심연의 목소리"가 처음으로 들린다. 그것은 말을 건다.`,
  choices: [
    {
      id: 'd1_2f_listen',
      label: '목소리에 집중한다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'd1_floor2',
          narrativeText:
            `"당신이 왔군요."\n\n` +
            `낮고 중성적인 목소리.\n\n` +
            `"오래 기다렸어요.\n` +
            `많은 것들이 왔다가 갔는데, 당신은 달라요.\n` +
            `아직 선택하지 않았으니까."`,
          corruptionDelta: 8,
        },
      },
    },
    {
      id: 'd1_2f_ignore',
      label: '목소리를 무시하고 올라간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'd1_floor3', narrativeText: '목소리를 뒤에 두고 계단을 올라갔다.' } },
    },
    back('d1_2f_down', 'd1_floor1', '1층으로 내려간다'),
  ],
};

// ── 탑 3층 특수구역 (d1-3f, item) — 스핑크스 마지막 기록 ─────────────────────

const ART_D1_3F = `
  ┌──────────────────────────────────────────────────────┐
  │  특수 열쇠로 열린 문.                                │
  │                                                      │
  │  테이블에 문서들이 펼쳐져 있다.                     │
  │                                                      │
  │  마법소녀 군단 최후의 기록.                          │
  │  "스핑크스 — 최종 보고서"                           │
  └──────────────────────────────────────────────────────┘
`.trimStart();

const ART_D1_3F_LOCKED = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  특수 열쇠가 필요한 문.                              │
  │                                                      │
  │  [▓▓▓▓ 잠겨 있다 ▓▓▓▓]                              │
  │                                                      │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const d1Floor3: Scene = {
  id: 'd1_floor3',
  title: '부정의 탑 — 3층',
  asciiArt: ART_D1_3F_LOCKED,
  description:
    `3층 특수구역 입구.\n\n` +
    `두꺼운 금속 문. 탑의 소재와 다른, 인간이 만든 문이다.\n` +
    `특수 열쇠 구멍이 있다.`,
  choices: [
    {
      id: 'd1_3f_open',
      label: '특수 열쇠로 문을 연다',
      type: 'deterministic',
      required: { items: ['special_key'] },
      outcomes: {
        success: {
          nextSceneId: 'd1_floor3_open',
          narrativeText: '열쇠를 돌렸다. 무거운 문이 열렸다.',
        },
      },
    },
    back('d1_3f_down', 'd1_floor2', '2층으로 내려간다'),
  ],
};

export const d1Floor3Open: Scene = {
  id: 'd1_floor3_open',
  title: '부정의 탑 — 3층 특수구역',
  asciiArt: ART_D1_3F,
  description:
    `안에 테이블이 있다. 문서들이 펼쳐져 있다.\n\n` +
    `마법소녀 군단 최후의 보고서.\n` +
    `"스핑크스 프로젝트 — 최종 단계 프로토콜"`,
  choices: [
    {
      id: 'd1_3f_read',
      label: '최종 보고서를 읽는다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'd1_floor3_open',
          narrativeText:
            `"정화 프로토콜 — 최종 버전\n\n` +
            `1. 탑의 핵(지하 심연)에 도달할 것\n` +
            `2. 역공명 주파수를 발생시킬 것\n` +
            `   — 마법소녀의 정화력 (촉매)\n` +
            `   — 신호장비 (증폭)\n` +
            `   — 이주원 박사의 주파수 공식 (F0')\n` +
            `3. 탑의 핵이 공명하기 시작하면 물러나지 말 것\n\n` +
            `경고: 이 프로토콜을 실행하는 자는 생환을 보장할 수 없음.\n` +
            `— 하나, D+2 새벽"`,
        },
      },
    },
    {
      id: 'd1_3f_sub',
      label: '지하 심연의 핵으로 내려간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'd1_abyss_core', narrativeText: '탑 깊숙이 내려가는 계단을 찾았다.' } },
    },
    back('d1_3f_back', 'd1_floor2', '2층으로 내려간다'),
  ],
};

// ── 지하 심연의 핵 (d1-sub, danger) ★ 최종 분기 ────────────────────────────

const ART_D1_CORE = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  탑의 심연.                                          │
  │                                                      │
  │  오염의 원점.                                        │
  │                                                      │
  │  그리고 목소리.                                      │
  │                                                      │
  │  "선택할 때가 됐어요."                               │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const d1AbyssCore: Scene = {
  id: 'd1_abyss_core',
  title: '지하 심연의 핵',
  asciiArt: ART_D1_CORE,
  description:
    `지하 공간. 탑의 심장.\n\n` +
    `바닥에서 오염이 솟아오른다. 공기가 검다.\n` +
    `하지만 또렷하게 보인다 — 중심에 무언가 있다.\n\n` +
    `목소리가 다시 들렸다. 이번엔 더 가깝다.\n\n` +
    `"선택할 때가 됐어요.\n` +
    `무엇을 원하나요?"`,
  backgroundContext: `심연의 핵은 탑의 의식적 중심이다. 그것은 생각한다. 원한다. 그리고 기다린다.`,
  choices: [
    {
      id: 'core_purify',
      label: '역공명으로 탑을 정화한다',
      type: 'deterministic',
      required: { items: ['sphinx_doc', 'memo_iwon', 'iseah_pact'] },
      outcomes: {
        success: {
          nextSceneId: 'ending_purify',
          narrativeText:
            `이세아가 앞으로 나섰다.\n\n` +
            `신호장비가 이주원의 주파수를 증폭했다.\n` +
            `정화력이 핵을 향해 쏟아졌다.`,
        },
      },
    },
    {
      id: 'core_escape',
      label: '신호장비로 외부에 도움을 요청한다',
      type: 'deterministic',
      required: { items: ['signal_device'] },
      outcomes: {
        success: {
          nextSceneId: 'ending_escape',
          narrativeText:
            `신호장비의 스위치를 올렸다.\n\n` +
            `주파수가 하늘로 솟았다.`,
        },
      },
    },
    {
      id: 'core_merge',
      label: '"나는 당신의 일부가 되겠습니다."',
      type: 'deterministic',
      required: { minCorruption: 60 },
      outcomes: {
        success: {
          nextSceneId: 'ending_merge',
          narrativeText:
            `목소리가 잠잠해졌다.\n\n` +
            `그리고 따뜻해졌다.`,
        },
      },
    },
    {
      id: 'core_silence',
      label: '아무것도 하지 않는다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'ending_silence',
          narrativeText:
            `당신은 서 있었다.\n\n` +
            `탑도 기다렸다.`,
        },
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// 엔딩 씬들 (id prefix: 'ending_')
// ══════════════════════════════════════════════════════════════════════════════

// ── 정화 엔딩 ─────────────────────────────────────────────────────────────────

export const endingPurify: Scene = {
  id: 'ending_purify',
  title: '정화 엔딩',
  description:
    `탑이 진동했다.\n\n` +
    `이세아의 정화력과 이주원의 주파수가 만났다.\n` +
    `핵이 역공명하기 시작했다.\n\n` +
    `오염이 역류했다. 탑에서 쏟아내던 것들이\n` +
    `탑 안으로 빨려들어갔다.\n\n` +
    `이세아가 쓰러졌다. 모든 것을 소진했다.\n` +
    `하지만 살아있었다.\n\n` +
    `처음으로 하늘이 보였다.\n` +
    `서울의 하늘이 — 잿빛이지만 — 보였다.\n\n` +
    `탑은 잠잠해졌다.\n` +
    `아직 끝난 건 아니다. 하지만 멈췄다.\n\n` +
    `그것으로 충분하다.`,
  choices: [],
};

// ── 탈출 엔딩 ─────────────────────────────────────────────────────────────────

export const endingEscape: Scene = {
  id: 'ending_escape',
  title: '탈출 엔딩',
  description:
    `신호가 하늘로 솟았다.\n\n` +
    `주파수가 대기를 가로질렀다.\n` +
    `서울 밖 어딘가에서 그 신호를 받았다.\n\n` +
    `72시간 후.\n\n` +
    `헬기 소리가 들렸다.\n\n` +
    `탑은 여전히 서 있다.\n` +
    `오염은 계속된다.\n` +
    `하지만 당신은 나갔다.\n\n` +
    `살아서.\n\n` +
    `그것으로 충분하다.`,
  choices: [],
};

// ── 융합 엔딩 ─────────────────────────────────────────────────────────────────

export const endingMerge: Scene = {
  id: 'ending_merge',
  title: '융합 엔딩',
  description:
    `목소리가 잠잠해졌다.\n\n` +
    `따뜻해졌다.\n\n` +
    `이상하게도 — 평화로웠다.\n\n` +
    `경계가 사라졌다.\n` +
    `당신과 탑 사이의 경계,\n` +
    `오염과 정화 사이의 경계.\n\n` +
    `당신은 탑의 일부가 되었다.\n\n` +
    `탑이 달라졌다.\n` +
    `조금씩, 천천히.`,
  choices: [],
};

// ── 침묵 엔딩 ─────────────────────────────────────────────────────────────────

export const endingSilence: Scene = {
  id: 'ending_silence',
  title: '침묵 엔딩',
  description:
    `당신은 서 있었다.\n\n` +
    `탑도 기다렸다.\n\n` +
    `아무것도 하지 않았다.\n` +
    `할 수 없어서가 아니라, 하지 않기로 했다.\n\n` +
    `탑이 당신을 삼켰다.\n\n` +
    `서울은 변하지 않았다.\n` +
    `오염은 계속 퍼졌다.\n` +
    `경계선은 계속 밀렸다.\n\n` +
    `당신은 사라졌지만\n` +
    `아무도 모른다.`,
  choices: [],
};
