import type { Scene } from '../../types/index.ts';

const back = (id: string, nextSceneId: string, label = '뒤로 나간다') => ({
  id,
  label,
  type: 'deterministic' as const,
  outcomes: { success: { nextSceneId, narrativeText: '' } },
});

// ══════════════════════════════════════════════════════════════════════════════
// A2 심층 구역 (발전기실 · 봉인 사무실)
// ══════════════════════════════════════════════════════════════════════════════

// ── 발전기실 (a2-gen, item) — a2_key 발견 ────────────────────────────────────

const ART_A2_GEN = `
  ┌──────────────────────────────────────────────────────┐
  │  대형 발전기 2기.                                    │
  │                                                      │
  │  [발전기 A]              [발전기 B]                  │
  │  ████████████████████████████████████               │
  │                                                      │
  │  철판 뒤에 뭔가 있다. 손잡이 흔적.                  │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a2Generator: Scene = {
  id: 'a2_generator',
  title: 'A2 발전기실',
  asciiArt: ART_A2_GEN,
  description:
    `발전기실. 대형 발전기 두 기가 낮게 돌아가고 있다.\n\n` +
    `지하 3구역 전체의 전력이 여기서 나온다.\n` +
    `발전기 B 뒤쪽 철판에 손잡이 자국이 있다.\n` +
    `최근에 누군가 건드린 것 같다.`,
  choices: [
    {
      id: 'a2gen_search',
      label: '철판 뒤를 확인한다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a2_generator',
          narrativeText:
            `철판을 당기자 — 작은 공간이 나타났다.\n\n` +
            `먼지 쌓인 선반에 열쇠 하나.\n` +
            `라벨: "봉인 사무실 — 오기범 보관"\n\n` +
            `누군가 이걸 여기에 숨겨뒀다.`,
          itemsGained: ['a2_key'],
        },
      },
    },
    {
      id: 'a2gen_ask',
      label: '발전기 상태를 점검한다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a2_generator',
          narrativeText:
            `연료가 30% 남아있다.\n` +
            `이 연료로 약 2주를 더 버틸 수 있다.\n` +
            `2주 후엔 다른 연료원이 필요하다.`,
        },
      },
    },
    back('a2gen_back', 'a2_office', '집무실로 돌아간다'),
  ],
};

// ── 봉인 사무실 (a2-seal, item) — 신호장비 획득 ────────────────────────────

const ART_A2_SEAL = `
  ┌──────────────────────────────────────────────────────┐
  │  이중 잠금 — [잠금 A][잠금 B]                        │
  │                                                      │
  │  문이 열렸다.                                        │
  │                                                      │
  │  [신호장비]  먼지 쌓인 박스 위에 놓여있다.           │
  │  [서류들]   오기범의 손 글씨.                        │
  └──────────────────────────────────────────────────────┘
`.trimStart();

const ART_A2_SEAL_LOCKED = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  이중 자물쇠.                                        │
  │                                                      │
  │  [잠금 A ▓▓▓]   [잠금 B ▓▓▓]                        │
  │                                                      │
  │  A2 봉인 열쇠가 필요하다.                            │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a2SealedOffice: Scene = {
  id: 'a2_sealed_office',
  title: 'A2 봉인 사무실',
  asciiArt: ART_A2_SEAL_LOCKED,
  description:
    `이중 자물쇠가 걸려있다.\n\n` +
    `"봉인 구역 — 오기범 허가 필수"`,
  choices: [
    {
      id: 'a2seal_open',
      label: 'A2 봉인 열쇠로 문을 연다',
      type: 'deterministic',
      required: { items: ['a2_key'] },
      outcomes: {
        success: {
          nextSceneId: 'a2_sealed_open',
          narrativeText:
            `두 자물쇠가 차례로 열렸다.\n` +
            `문이 삐걱이며 열렸다.`,
        },
      },
    },
    back('a2seal_back', 'a2_generator', '발전기실로 돌아간다'),
  ],
};

export const a2SealedOpen: Scene = {
  id: 'a2_sealed_open',
  title: 'A2 봉인 사무실 — 내부',
  asciiArt: ART_A2_SEAL,
  description:
    `안에 들어갔다.\n\n` +
    `먼지가 쌓인 박스 위에 장비가 있다.\n` +
    `무선 신호장비다. 외부 통신이 가능하다.\n\n` +
    `옆에 오기범의 손 글씨 메모:\n` +
    `"마지막 수단. 신호를 보내면 위치가 노출된다."`,
  choices: [
    {
      id: 'a2so_take',
      label: '신호장비를 챙긴다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a2_sealed_open',
          narrativeText:
            `신호장비를 가방에 넣었다.\n\n` +
            `배터리가 살아있다.\n` +
            `사용할 타이밍을 골라야 한다.`,
          itemsGained: ['signal_device'],
        },
      },
    },
    {
      id: 'a2so_docs',
      label: '서류들을 훑어본다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a2_sealed_open',
          narrativeText:
            `오기범의 메모들.\n\n` +
            `"경계선 후퇴 속도 계산 — 48일 후 A2 도달"\n` +
            `"신호 발신 시 예상 응답 시간: 72시간 이상"\n` +
            `"탑 정화 가설 — 이주원 박사 연구 참고"\n\n` +
            `오기범도 이주원의 연구를 알고 있었다.`,
        },
      },
    },
    back('a2so_back', 'a2_sealed_office', '문 쪽으로 돌아간다'),
  ],
};
