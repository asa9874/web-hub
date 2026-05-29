import type { Scene } from '../../types/index.ts';

// ── 공통 헬퍼 ──────────────────────────────────────────────────────────────────
const back = (id: string, nextSceneId: string, label = '뒤로 나간다') => ({
  id,
  label,
  type: 'deterministic' as const,
  outcomes: { success: { nextSceneId, narrativeText: '' } },
});

// ══════════════════════════════════════════════════════════════════════════════
// 전환 씬 (방 매핑 없음 — apartment_start 분기)
// ══════════════════════════════════════════════════════════════════════════════

// ── 복도 엿보기 (숨기 성공) ────────────────────────────────────────────────────

const ART_CORRIDOR_PEEK = `
  ┌──────────────────────────────────────────────────────┐
  │  ████ 302 ████                       ████ 304 ████  │
  │              ░░░░░░░░░░░░░░░░░░░░░░░               │
  │              │           3F 복도     │              │
  │      틈 ──── │  창문빛이 기어든다    │ ──── 조용    │
  │              └───────────────────────┘              │
  │                       ↓ 계단                        │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const corridorPeek: Scene = {
  id: 'corridor_peek',
  title: '3층 복도',
  asciiArt: ART_CORRIDOR_PEEK,
  description:
    `문 틈에 눈을 댔다.\n\n` +
    `복도는 비어 있다. 아까 소리가 나던 304호 쪽 — 잠잠하다.\n` +
    `깨진 창문에서 잿빛 빛이 기어든다. 먼지가 떠 있다.\n\n` +
    `당신의 숨이 그것을 흔든다.\n` +
    `지금은, 안전하다.`,
  choices: [
    {
      id: 'peek_out',
      label: '복도로 나선다',
      type: 'deterministic',
      outcomes: {
        success: { nextSceneId: 'a1_corridor_3f', narrativeText: '문을 밀었다. 복도의 공기가 차갑다.' },
      },
    },
    back('peek_stay', 'apartment_start', '방 안에 머문다'),
  ],
};

// ── 발각 (숨기 실패) ──────────────────────────────────────────────────────────

const ART_DISCOVERED = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │     문이 안으로 꺾인다.                              │
  │                                                      │
  │         ,----.,----.     ← 한때 인간이었을 것        │
  │        /  눈없음   \\                                 │
  │       /             \\   손가락이 너무 많다            │
  │      /               \\                              │
  │     '─────────────────'                              │
  │                                                      │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const apartmentDiscovered: Scene = {
  id: 'apartment_discovered',
  title: '302호 — 발각',
  asciiArt: ART_DISCOVERED,
  description:
    `문이 안으로 꺾인다.\n\n` +
    `들어오는 것은 한때 노인이었을지도 모른다.\n` +
    `눈 있던 자리가 비어 있고, 손가락이 너무 많다.\n\n` +
    `복도를 향해 달려야 한다.\n` +
    `지금.`,
  choices: [
    {
      id: 'disc_run',
      label: '계단으로 전력 질주한다',
      type: 'rng',
      successProbability: 0.55,
      outcomes: {
        success: {
          nextSceneId: 'a1_corridor_3f',
          narrativeText:
            `팔을 밀치고 복도로 뛰쳐나왔다.\n` +
            `긁히고 피가 났지만 — 달린다. 계단이 보인다.`,
          hpDelta: -5,
        },
        failure: {
          nextSceneId: 'apartment_discovered',
          narrativeText:
            `붙잡혔다. 무언가가 어깨를 파고든다.\n` +
            `비틀어 빠져나왔다. 등이 타들어간다.\n` +
            `다시 시도해야 한다.`,
          hpDelta: -15,
          corruptionDelta: 5,
        },
      },
    },
    {
      id: 'disc_window',
      label: '창문을 깨고 뛰어내린다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a1_lobby',
          narrativeText:
            `창문을 주먹으로 깼다. 유리가 손을 찢었다.\n` +
            `낙하 — 기억이 끊어진다 — 1층 쓰레기 더미.\n\n` +
            `살아있다. 발목이 비명을 지른다.`,
          hpDelta: -25,
        },
      },
    },
    {
      id: 'disc_hide_again',
      label: '다시 어둠 속에 납작 엎드린다',
      type: 'rng',
      successProbability: 0.4,
      outcomes: {
        success: {
          nextSceneId: 'apartment_start',
          narrativeText:
            `그것이 지나쳤다.\n` +
            `냉장고 뒤에 얼굴을 묻고 숨을 참았다.\n` +
            `발소리가 멀어진다. 당신은 아직 여기 있다.`,
          corruptionDelta: 8,
        },
        failure: {
          nextSceneId: 'apartment_discovered',
          narrativeText:
            `그것이 돌아봤다. 냄새를 맡는다.\n` +
            `혹은 다른 감각으로 당신을 찾는다.\n` +
            `다시, 선택해야 한다.`,
          hpDelta: -10,
          corruptionDelta: 5,
        },
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// A1 방 씬 (ROOM_SCENES 매핑 있음)
// ══════════════════════════════════════════════════════════════════════════════

// ── 4층 복도 (a1-4f, danger) ─────────────────────────────────────────────────

const ART_4F = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  ████ ████ ██    ← 천장 일부 붕괴                    │
  │            ██  ██                                    │
  │  ──────── 통과하려면 기어야 한다 ────────            │
  │                                                      │
  │  ║401║             ║406║      ↑ 옥상 계단 ↑          │
  │                                                      │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a1Corridor4f: Scene = {
  id: 'a1_corridor_4f',
  title: '4층 복도',
  asciiArt: ART_4F,
  description:
    `4층 복도는 일부 붕괴되어 있다.\n\n` +
    `천장이 내려앉아 통과하려면 몸을 숙여야 한다.\n` +
    `콘크리트 분진이 떠돌아다닌다 — 폐가 따갑다.\n\n` +
    `401호와 406호 문이 양쪽에 있다.\n` +
    `끝에 옥상으로 이어지는 계단이 보인다.`,
  choices: [
    {
      id: '4f_roof',
      label: '옥상으로 올라간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'a1_roof', narrativeText: '계단 끝에 무거운 철문이 있다.' } },
    },
    back('4f_down', 'a1_corridor_3f', '3층으로 내려간다'),
  ],
};

// ── 옥상 (a1-roof, npc) — 이세아 첫 조우 ─────────────────────────────────────

const ART_ROOF = `
  ┌──────────────────────────────────────────────────────┐
  │  ░░░░░░░░░░░░░░░░░░ 하늘 ░░░░░░░░░░░░░░░░░░░░░░░░  │
  │                                                      │
  │                    서울 폐허                         │
  │   ~~연기~~    ~~연기~~    ~~연기~~    ~~연기~~       │
  │                                                      │
  │  ═══ 난간 ══════════════════════════════════════════ │
  │  [잠긴 철문]                                         │
  └──────────────────────────────────────────────────────┘
`.trimStart();

const ART_ROOF_OPEN = `
  ┌──────────────────────────────────────────────────────┐
  │  ░░░░░░░░░░░░░░░░░░ 하늘 ░░░░░░░░░░░░░░░░░░░░░░░░  │
  │                                                      │
  │                                    /\\               │
  │   ~~연기~~    ~~연기~~            /  \\  ← 인물      │
  │                                  /____\\             │
  │  ═══ 난간 ════════════════════════════════════════   │
  │  [열린 철문]              ↑ 이세아가 서 있다         │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a1Roof: Scene = {
  id: 'a1_roof',
  title: '옥상',
  asciiArt: ART_ROOF,
  description:
    `옥상으로 이어지는 철문.\n\n` +
    `잠겨 있다. 두꺼운 자물쇠.`,
  backgroundContext: `관리인이 D+5에 "옥상 문 잠금"이라고 기록했다. 무엇을 막으려 했는지는 적지 않았다.`,
  choices: [
    {
      id: 'roof_open',
      label: '마스터키로 문을 연다',
      type: 'deterministic',
      required: { items: ['master_key'] },
      outcomes: {
        success: {
          nextSceneId: 'a1_roof_open',
          narrativeText:
            `자물쇠가 열렸다.\n\n` +
            `옥상 — 그리고 그녀가 거기 있다.`,
        },
      },
    },
    back('roof_back', 'a1_corridor_4f', '4층으로 내려간다'),
  ],
};

export const a1RoofOpen: Scene = {
  id: 'a1_roof_open',
  title: '옥상 — 이세아',
  asciiArt: ART_ROOF_OPEN,
  description:
    `옥상 난간에 누군가 앉아 있다.\n\n` +
    `마법소녀복 — 대부분 손상되어 있다.\n` +
    `그녀는 당신이 올라오는 걸 이미 알고 있었던 것처럼 돌아본다.\n\n` +
    `"살아있었군요."\n\n` +
    `담담한 목소리다. 안도도, 놀람도 없다.`,
  backgroundContext: `이세아는 마지막 마법소녀 군단에서 살아남은 세 명 중 하나다. 그 셋이 지금 어디 있는지는 그녀만 안다.`,
  choices: [
    {
      id: 'iseah_ask_situation',
      label: '"지금 상황이 어떻게 된 거죠?"',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a1_roof_open',
          narrativeText:
            `"부정의 탑이 오염을 방출하고 있어요. 3주 전부터."\n\n` +
            `그녀는 서울 스카이라인을 가리킨다.\n` +
            `탑이 보인다 — 한강 북쪽, 하늘을 찌르는 무언가.\n\n` +
            `"우리가 막으려 했는데 — 못 막았어요.\n` +
            `이제 방법을 찾아야 합니다. 탑 안에서."`,
        },
      },
    },
    {
      id: 'iseah_ask_way',
      label: '"어디로 가야 하죠?"',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a1_roof_open',
          narrativeText:
            `"일단 이 건물에서 나가세요.\n` +
            `B1 골목으로 나가면 지하 통로가 있어요.\n` +
            `거기서 A2 지하 공동체에 연락하거나,\n` +
            `B6 대학에서 정보를 찾거나."\n\n` +
            `"저는 다시 봐요. 아마."`,
        },
      },
    },
    back('iseah_leave', 'a1_corridor_4f', '내려간다'),
  ],
};

// ── 3층 복도 (a1-3f) ──────────────────────────────────────────────────────────

const ART_3F = `
  ┌──────────────────────────────────────────────────────┐
  │ ║301║      ║302★║          ║304?║                   │
  │  문          (시작점)        〰 긁힘 소리             │
  │  ─────────────────────────────────────────────      │
  │                    3F CORRIDOR                      │
  │  ─────────────────────────────────────────────      │
  │  ↑ 4층     창문빛           ↓ 2층 계단               │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a1Corridor3f: Scene = {
  id: 'a1_corridor_3f',
  title: '3층 복도',
  asciiArt: ART_3F,
  description:
    `복도는 비교적 온전하다.\n\n` +
    `302호 맞은편 — 301호 문이 반쯤 열려 있다.\n` +
    `복도 끝 304호에서 낮고 느린 긁힘 소리가 들린다.\n\n` +
    `계단은 4층과 2층 양쪽으로 이어진다.`,
  choices: [
    {
      id: '3f_301',
      label: '301호를 살펴본다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'a1_room_301', narrativeText: '열린 문을 밀고 들어갔다.' } },
    },
    {
      id: '3f_304',
      label: '304호 쪽을 살핀다',
      type: 'rng',
      successProbability: 0.65,
      outcomes: {
        success: {
          nextSceneId: 'a1_room_304',
          narrativeText: '문 가까이 다가갔다. 아직 당신을 감지하지 못했다.',
        },
        failure: {
          nextSceneId: 'a1_corridor_3f',
          narrativeText:
            `마룻바닥이 소리를 냈다.\n` +
            `304호의 긁힘이 빨라진다. 서둘러 물러났다.`,
          hpDelta: -5,
          corruptionDelta: 5,
        },
      },
    },
    {
      id: '3f_up',
      label: '4층으로 올라간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'a1_corridor_4f', narrativeText: '계단을 올라갔다.' } },
    },
    {
      id: '3f_down',
      label: '계단을 내려간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'a1_corridor_2f', narrativeText: '발소리를 죽이며 계단을 내려갔다.' } },
    },
  ],
};

// ── 301호 (a1-301) ────────────────────────────────────────────────────────────

const ART_301 = `
  ┌──────────────────────────────────────────────────────┐
  │  .───────────.    .─────────────────.                │
  │  │ 서랍장    │    │ ~~~ 이불 ~~~    │ 침대           │
  │  │ (비어있음)│    │ (정리된 채로)   │                │
  │  '───────────'    '─────────────────'                │
  │                                                      │
  │  서둘러 떠난 흔적.                                   │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a1Room301: Scene = {
  id: 'a1_room_301',
  title: '301호',
  asciiArt: ART_301,
  description:
    `이웃의 방이다.\n\n` +
    `이불은 반듯이 개어 있다. 서랍은 모두 열려 있고 비어 있다.\n` +
    `서둘러 떠난 것 같다 — 아니면 다른 무언가가 먼저 왔거나.`,
  choices: [
    {
      id: '301_search',
      label: '방 안을 찬찬히 뒤진다',
      type: 'rng',
      successProbability: 0.4,
      outcomes: {
        success: {
          nextSceneId: 'a1_room_301',
          narrativeText:
            `침대 매트리스 아래 — 찢긴 편지 조각.\n` +
            `글씨가 번져 대부분 읽히지 않는다.\n` +
            `한 줄만 남아 있다: "지하에 가지 마라."`,
        },
        failure: {
          nextSceneId: 'a1_room_301',
          narrativeText: '아무것도 없다. 남겨진 것이 없다.',
        },
      },
    },
    back('301_back', 'a1_corridor_3f', '복도로 나간다'),
  ],
};

// ── 304호 (a1-304, danger) ───────────────────────────────────────────────────

const ART_304 = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  ████████████████████████████████████████████████   │
  │  ████           304              ██████████████████  │
  │  ████ ←← 규칙적인 긁힘 소리 →→  ██████████████████  │
  │  ████████████████████████████████████████████████   │
  │                                                      │
  │  문 밑 틈에서 오염의 냄새가 흘러나온다.              │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a1Room304: Scene = {
  id: 'a1_room_304',
  title: '304호 앞',
  asciiArt: ART_304,
  description:
    `문이 닫혀 있다.\n\n` +
    `안에서 소리가 난다. 느리고 규칙적인 긁힘.\n` +
    `벽과 바닥 사이를 오가는 것 같다.\n\n` +
    `오염의 냄새가 문 밑 틈으로 흘러나온다.\n` +
    `이 문을 열어서는 안 된다.`,
  choices: [
    {
      id: '304_listen',
      label: '문에 귀를 댄다',
      type: 'rng',
      successProbability: 0.5,
      outcomes: {
        success: {
          nextSceneId: 'a1_room_304',
          narrativeText:
            `긁힘 사이 — 인간의 목소리 같은 것이 들렸다.\n` +
            `무언가를 반복하고 있다. 들을수록 머리가 무거워진다.`,
          corruptionDelta: 8,
        },
        failure: {
          nextSceneId: 'a1_room_304',
          narrativeText:
            `문에 이마를 댔을 때 — 반대편에서 노크 소리가 났다.\n` +
            `세 번. 인간처럼.\n` +
            `당신은 뒤로 물러났다.`,
          corruptionDelta: 5,
        },
      },
    },
    back('304_back', 'a1_corridor_3f', '복도로 돌아간다'),
  ],
};

// ── 2층 복도 (a1-2f) ──────────────────────────────────────────────────────────

const ART_2F = `
  ┌──────────────────────────────────────────────────────┐
  │ ║201║  ████  ║202║  ████  ║203※║  ████  ║204║       │
  │  잠김          잠김          열림!          잠김      │
  │  ──────────────────────────────────────────────     │
  │                    2F CORRIDOR                      │
  │  ──────────────────────────────────────────────     │
  │  ↑ 3층                               ↓ 1층           │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a1Corridor2f: Scene = {
  id: 'a1_corridor_2f',
  title: '2층 복도',
  asciiArt: ART_2F,
  description:
    `2층 복도. 문들이 대부분 잠겨 있다.\n\n` +
    `예외 하나 — 203호 문이 열려 있다.\n` +
    `안에서 바람이 나온다. 빛도 들어온다.\n\n` +
    `계단은 3층과 1층 양쪽으로 이어진다.`,
  choices: [
    {
      id: '2f_203',
      label: '203호로 들어간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'a1_room_203', narrativeText: '문을 밀었다. 안에서 바람이 불어왔다.' } },
    },
    {
      id: '2f_up',
      label: '3층으로 올라간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'a1_corridor_3f', narrativeText: '계단을 올라갔다.' } },
    },
    {
      id: '2f_down',
      label: '1층으로 내려간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'a1_lobby', narrativeText: '계단을 내려갔다.' } },
    },
  ],
};

// ── 203호 (a1-203, item) — 생존 기록 메모 ────────────────────────────────────

const ART_203 = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  벽 전체가 글씨로 가득하다.                          │
  │                                                      │
  │  "D+3: 수도 끊김  /  D+7: 이웃 실종"                │
  │  "D+12: 밤마다 소리  /  D+21: 침묵"                 │
  │  "D+22: 지하에 사람들이 있다고 한다"                 │
  │                                                      │
  │  마지막 줄은 다른 사람 글씨:  "나는 간다"            │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a1Room203: Scene = {
  id: 'a1_room_203',
  title: '203호',
  asciiArt: ART_203,
  description:
    `벽 전체가 손 글씨로 덮여 있다.\n\n` +
    `날짜별 생존 일지.\n` +
    `"D+3: 수도 끊김. D+7: 이웃 실종.\n` +
    `D+21: 침묵 — 밖에서 아무 소리도 안 난다."\n\n` +
    `마지막 줄은 다른 필체다:\n` +
    `"지하에 사람들이 있다."`,
  backgroundContext: `203호 주인은 D+22에 아파트를 떠났다. 아마 B1 지하통로를 통해 A2로 향했을 것이다.`,
  choices: [
    {
      id: '203_memo',
      label: '메모를 뜯어 챙긴다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a1_room_203',
          narrativeText:
            `벽에서 메모 조각들을 뜯어냈다.\n` +
            `누군가의 마지막 기록. 도움이 될지도 모른다.`,
          itemsGained: ['survival_memo'],
        },
      },
    },
    back('203_back', 'a1_corridor_2f', '복도로 나간다'),
  ],
};

// ── 1층 로비 (a1-1f) ──────────────────────────────────────────────────────────

const ART_LOBBY = `
  ┌──────────────────────────────────────────────────────┐
  │  [우편함]   [ELEVATOR]   [관리실]                    │
  │  모두 열림  │  [ ☓ ]  │  (닫혀있음)                 │
  │             │  작동불가│                             │
  │             └──────────┘                            │
  │                                                      │
  │  [출입구 → B1 골목]            [↓ 지하 주차장]       │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a1Lobby: Scene = {
  id: 'a1_lobby',
  title: '1층 로비',
  asciiArt: ART_LOBBY,
  description:
    `로비. 엘리베이터는 고장났다.\n\n` +
    `우편함 문들이 모두 열려 있다 — 누군가 이미 다 뒤졌다.\n` +
    `관리실 문이 보인다. 잠기진 않은 것 같다.\n\n` +
    `출입구는 판자로 막혀 있다.\n` +
    `안에서 막은 것이다.`,
  choices: [
    {
      id: 'lobby_mgmt',
      label: '관리실로 들어간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'a1_mgmt', narrativeText: '관리실 문을 밀었다. 삐걱거린다.' } },
    },
    {
      id: 'lobby_b1f',
      label: '지하 주차장으로 내려간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'a1_b1f', narrativeText: '계단 입구가 보인다. 아래에서 차가운 공기가 올라온다.' } },
    },
    {
      id: 'lobby_exit',
      label: '판자를 뜯고 밖으로 나간다',
      type: 'rng',
      successProbability: 0.6,
      required: { minHp: 20 },
      outcomes: {
        success: {
          nextSceneId: 'a1_lobby',
          narrativeText:
            `판자가 삐걱이며 떨어졌다.\n` +
            `밖이 보인다. 잿빛 골목.\n` +
            `탈출구가 생겼다. 나갈 준비가 됐을 때.`,
        },
        failure: {
          nextSceneId: 'a1_lobby',
          narrativeText:
            `판자가 꿈쩍도 않는다.\n` +
            `체력이 더 필요하거나, 다른 방법을 찾아야 한다.`,
        },
      },
    },
    {
      id: 'lobby_up',
      label: '위층으로 올라간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'a1_corridor_2f', narrativeText: '계단을 올라갔다.' } },
    },
  ],
};

// ── 관리실 (a1-mgmt, item) — 마스터키 획득 ───────────────────────────────────

const ART_MGMT = `
  ┌──────────────────────────────────────────────────────┐
  │  .───────────.   ┌────────────────────────┐          │
  │  │  사물함   │   │ 벽 키박스              │          │
  │  │ ■ ■ ■ ■  │   │ [■][■][■][■][■][KEY?] │          │
  │  '───────────'   └────────────────────────┘          │
  │                                                      │
  │  .──────────────────────────────────────────.        │
  │  │ 책상  ·  건물 도면  ·  야간 근무 일지   │        │
  │  '──────────────────────────────────────────'        │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a1Mgmt: Scene = {
  id: 'a1_mgmt',
  title: '관리실',
  asciiArt: ART_MGMT,
  description:
    `관리실은 좁고 낡았다.\n\n` +
    `책상 위에 건물 도면과 야간 근무 일지가 펼쳐져 있다.\n` +
    `벽의 키박스 — 대부분 열려 있고 열쇠가 없다.\n` +
    `마지막 칸에 뭔가 끼워져 있다.`,
  backgroundContext: `관리인은 D+5에 기록을 멈췄다. 마지막 메모: "옥상 문 잠금. 이유는 쓰지 않는다."`,
  choices: [
    {
      id: 'mgmt_key',
      label: '키박스 마지막 칸을 확인한다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a1_mgmt',
          narrativeText:
            `마스터키다.\n` +
            `이 건물의 모든 잠긴 문을 열 수 있다.`,
          itemsGained: ['master_key'],
        },
      },
    },
    {
      id: 'mgmt_plan',
      label: '건물 도면을 살펴본다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a1_mgmt',
          narrativeText:
            `도면에 손으로 쓴 메모들이 있다.\n` +
            `"B1 전기실 — 3번·4번 서킷 차단됨"\n` +
            `"옥상 — 마스터키 필요"\n` +
            `"지하 창고 — 비상 물자 보관"`,
        },
      },
    },
    back('mgmt_back', 'a1_lobby', '로비로 나간다'),
  ],
};

// ── 지하 주차장 (a1-b1f, danger) ─────────────────────────────────────────────

const ART_B1F = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  [자동차]  [자동차]    ░░░ 어둠 ░░░   [자동차]       │
  │                                                      │
  │  [ 전기실 ]                       [ 창  고 ]         │
  │                                                      │
  │  ── 깊은 곳 ──  무거운 발소리가 들린다  ── ──        │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a1B1f: Scene = {
  id: 'a1_b1f',
  title: '지하 주차장',
  asciiArt: ART_B1F,
  description:
    `지하 주차장은 어둡고 넓다.\n\n` +
    `방치된 차들이 줄지어 있다.\n` +
    `깊은 곳에서 소리가 들린다 — 느리고 무거운 발소리.\n\n` +
    `전기실과 창고가 입구 가까이 있다.\n` +
    `서두르는 게 좋을 것 같다.`,
  choices: [
    {
      id: 'b1f_elec',
      label: '전기실로 간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'a1_elec', narrativeText: '전기실 문에 손을 댔다.' } },
    },
    {
      id: 'b1f_stor',
      label: '창고로 간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'a1_stor', narrativeText: '창고 방향으로 걸음을 옮겼다.' } },
    },
    back('b1f_up', 'a1_lobby', '로비로 올라간다'),
  ],
};

// ── 전기실 (a1-elec, item) ────────────────────────────────────────────────────

const ART_ELEC = `
  ┌──────────────────────────────────────────────────────┐
  │  ┌────────────────────────────────────────────────┐  │
  │  │ 배전반                                         │  │
  │  │  [1] [2] [3✗] [4✗] [5] [6] [7] [8]            │  │
  │  │              ↑차단↑                            │  │
  │  └────────────────────────────────────────────────┘  │
  │                                                      │
  │  3번: 2층 조명  /  4번: 엘리베이터                   │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a1Elec: Scene = {
  id: 'a1_elec',
  title: '전기실',
  asciiArt: ART_ELEC,
  description:
    `배전반이 벽 한쪽을 가득 채우고 있다.\n\n` +
    `3번과 4번 서킷이 차단된 상태다.\n` +
    `도면에서 본 메모가 생각난다:\n` +
    `3번은 2층 조명, 4번은 엘리베이터.`,
  choices: [
    {
      id: 'elec_3',
      label: '3번 서킷을 복구한다 (2층 조명)',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a1_elec',
          narrativeText:
            `레버를 올렸다. 멀리서 형광등이 깜박이는 소리.\n` +
            `2층 복도에 희미한 빛이 들어왔을 것이다.`,
        },
      },
    },
    {
      id: 'elec_4',
      label: '4번 서킷을 복구한다 (엘리베이터)',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a1_elec',
          narrativeText:
            `모터 돌아가는 소리. 엘리베이터가 살아났다.\n` +
            `층간 이동이 훨씬 빨라질 것이다.`,
        },
      },
    },
    back('elec_back', 'a1_b1f', '지하 주차장으로 나간다'),
  ],
};

// ── 창고 (a1-stor, item) ──────────────────────────────────────────────────────

const ART_STOR = `
  ┌──────────────────────────────────────────────────────┐
  │  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐                 │
  │  │   │  │ ? │  │   │  │ ? │  │   │  상자들          │
  │  └───┘  └───┘  └───┘  └───┘  └───┘                 │
  │                                                      │
  │  대부분 열려있고 비어있다.                           │
  │  몇 개는 아직 닫혀 있다.                             │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a1Stor: Scene = {
  id: 'a1_stor',
  title: '창고',
  asciiArt: ART_STOR,
  description:
    `창고에 상자들이 쌓여 있다.\n\n` +
    `대부분 열려 있고 비어 있다.\n` +
    `몇몇은 아직 닫혀 있다. 무언가 남아 있을 수도 있다.`,
  choices: [
    {
      id: 'stor_search',
      label: '상자들을 뒤진다',
      type: 'rng',
      successProbability: 0.6,
      outcomes: {
        success: {
          nextSceneId: 'a1_stor',
          narrativeText:
            `먼지 쌓인 상자 안에 — 붕대 한 롤.\n` +
            `유통기한은 오래 전이지만, 없는 것보다는 낫다.`,
          itemsGained: ['bandage'],
        },
        failure: {
          nextSceneId: 'a1_stor',
          narrativeText: '먼지뿐이다. 누군가 이미 다 가져갔다.',
        },
      },
    },
    {
      id: 'stor_herb',
      label: '구석 선반을 확인한다',
      type: 'rng',
      successProbability: 0.3,
      outcomes: {
        success: {
          nextSceneId: 'a1_stor',
          narrativeText:
            `선반 뒤쪽에 묶음 약초가 걸려있다.\n` +
            `어딘가에서 읽은 것 같다 — 오염을 씻어낸다고.`,
          itemsGained: ['herb'],
        },
        failure: {
          nextSceneId: 'a1_stor',
          narrativeText: '아무것도 없다.',
        },
      },
    },
    back('stor_back', 'a1_b1f', '지하 주차장으로 나간다'),
  ],
};
