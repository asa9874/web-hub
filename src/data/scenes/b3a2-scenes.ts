import type { Scene } from '../../types/index.ts';

const back = (id: string, nextSceneId: string, label = '뒤로 나간다') => ({
  id,
  label,
  type: 'deterministic' as const,
  outcomes: { success: { nextSceneId, narrativeText: '' } },
});

// ══════════════════════════════════════════════════════════════════════════════
// B3 지하철역 (폐역)
// ══════════════════════════════════════════════════════════════════════════════

// ── 대합실 (b3-hall, item) ────────────────────────────────────────────────────

const ART_B3_HALL = `
  ┌──────────────────────────────────────────────────────┐
  │  [개찰구 — 모두 열려있음]     [자판기 — 1대 열림]   │
  │                                                      │
  │  지상에서 내려오는 계단이 등 뒤에 있다.              │
  │                                                      │
  │  바닥 화살표: "3구역 →  ↓ 에스컬레이터"            │
  │                                                      │
  │  ↓ 에스컬레이터                                      │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b3Hall: Scene = {
  id: 'b3_hall',
  title: 'B3 지하철역 — 대합실',
  asciiArt: ART_B3_HALL,
  description:
    `폐역 대합실. 개찰구가 모두 열려 있다.\n\n` +
    `바닥에 페인트로 쓴 화살표: "3구역 →"\n` +
    `누군가 안내 표시를 직접 그려놨다.\n\n` +
    `자판기 하나가 반파된 채 열려 있다. 안쪽에 뭔가 남아있다.`,
  backgroundContext: `B3는 B1 지하통로와 A2를 잇는 유일한 지하 경로다. 이 역은 D+10부터 비공식 통행로로 쓰였다.`,
  choices: [
    {
      id: 'b3h_vending',
      label: '자판기 안을 뒤진다',
      type: 'rng',
      successProbability: 0.6,
      outcomes: {
        success: {
          nextSceneId: 'b3_hall',
          narrativeText:
            `자판기 방출구 안쪽 — 캔이 몇 개 남아있다.\n` +
            `유통기한 라벨이 긁혀 안 보이지만, 봉인은 살아있다.`,
          itemsGained: ['food_can'],
        },
        failure: {
          nextSceneId: 'b3_hall',
          narrativeText: '이미 누군가 다 가져갔다.',
        },
      },
    },
    {
      id: 'b3h_memo',
      label: '벽에 적힌 메모들을 읽는다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b3_hall',
          narrativeText:
            `벽 곳곳에 메모들이 붙어있다.\n\n` +
            `"플랫폼 B는 절대 가지 마시오 — 이미 오염됨"\n` +
            `"3구역 입구 — 에스컬레이터 → 플랫폼 A → 터널"\n` +
            `"경비원에게 오기범 이름 대면 통과 가능"`,
        },
      },
    },
    {
      id: 'b3h_esc',
      label: '에스컬레이터로 내려간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b3_escalator', narrativeText: '에스컬레이터를 걸어서 내려갔다.' } },
    },
  ],
};

// ── 에스컬레이터 (b3-esc) ─────────────────────────────────────────────────────

const ART_B3_ESC = `
  ┌──────────────────────────────────────────────────────┐
  │  ▲ 대합실                                            │
  │   \\ \\ \\ \\ \\ \\ \\ \\                                   │
  │    \\ \\ \\ \\ \\ \\ \\ \\   정지된 에스컬레이터              │
  │     \\ \\ \\ \\ \\ \\ \\ \\                                 │
  │  [종이 끼워짐]                                       │
  │      \\ \\ \\ \\ \\ \\ \\ \\                                │
  │  ↙ 플랫폼 A     ↘ 플랫폼 B [위험]                   │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b3Escalator: Scene = {
  id: 'b3_escalator',
  title: 'B3 지하철역 — 에스컬레이터',
  asciiArt: ART_B3_ESC,
  description:
    `멈춘 에스컬레이터를 도보로 내려간다.\n\n` +
    `계단 사이에 종이가 끼워져 있다. 반쯤 빠져나와 있다.\n\n` +
    `아래에서 플랫폼 A와 B로 나뉜다.\n` +
    `B 방향에서 낮게 윙윙거리는 소리가 난다.`,
  choices: [
    {
      id: 'b3e_note',
      label: '끼워진 종이를 꺼내 읽는다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b3_escalator',
          narrativeText:
            `접힌 쪽지.\n\n` +
            `"플랫폼 A 측면 유지보수문 — 비밀번호 0413\n` +
            `B 방향엔 절대 가지 말 것\n` +
            `— 오기범"`,
        },
      },
    },
    {
      id: 'b3e_plA',
      label: '플랫폼 A로 간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b3_platform_a', narrativeText: '플랫폼 A로 내려갔다.' } },
    },
    {
      id: 'b3e_plB',
      label: '플랫폼 B를 확인한다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b3_platform_b', narrativeText: '플랫폼 B 쪽으로 다가갔다.' } },
    },
    back('b3e_back', 'b3_hall', '대합실로 올라간다'),
  ],
};

// ── 플랫폼 A (b3-plA) ─────────────────────────────────────────────────────────

const ART_B3_PLA = `
  ┌──────────────────────────────────────────────────────┐
  │  ──────────────── 선로 ────────────────              │
  │                                                      │
  │  [플랫폼 A]   A2 터널 램프 신호가 깜박인다           │
  │                                                      │
  │  [유지보수문]         [자재 창고]                    │
  │  비밀번호 필요                                       │
  │  ↓ A2 터널 방향                                      │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b3PlatformA: Scene = {
  id: 'b3_platform_a',
  title: 'B3 지하철역 — 플랫폼 A',
  asciiArt: ART_B3_PLA,
  description:
    `플랫폼 A. 선로 방향 벽에 램프가 깜박이고 있다.\n\n` +
    `"A2 →" 라고 쓰인 화살표가 터널 입구를 가리킨다.\n` +
    `측면에 유지보수문이 있다. 자재 창고로 이어지는 문.`,
  choices: [
    {
      id: 'b3a_tunnel',
      label: 'A2 터널로 들어간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'a2_tunnel', narrativeText: '터널에 발을 내딛었다. 걷는 데 10분이 걸렸다.' } },
    },
    {
      id: 'b3a_maint',
      label: '유지보수문을 열어본다 (번호 0413)',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b3_tunnel', narrativeText: '번호를 입력했다. 딸깍 — 문이 열렸다.' } },
    },
    {
      id: 'b3a_storage',
      label: '자재 창고를 확인한다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b3_platform_a',
          narrativeText:
            `자재 창고 안. 철근, 공구, 안전모.\n` +
            `안전모 하나를 챙겼다. 머리를 보호할 수 있을 것 같다.`,
        },
      },
    },
    back('b3a_back', 'b3_escalator', '에스컬레이터로 돌아간다'),
  ],
};

// ── 플랫폼 B (b3-plB, danger) ─────────────────────────────────────────────────

const ART_B3_PLB = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  ░░░░░░░ 조명 없음 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░    │
  │                                                      │
  │  부정 농도 ★★★★                                    │
  │                                                      │
  │  봉인 너머에서 소리가 들린다.                        │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b3PlatformB: Scene = {
  id: 'b3_platform_b',
  title: 'B3 지하철역 — 플랫폼 B',
  asciiArt: ART_B3_PLB,
  description:
    `조명이 없다. 완전한 어둠.\n\n` +
    `라이터를 켜면 — 바닥에 봉인 테이프가 쳐져 있다.\n` +
    `그 너머에서 소리가 들린다. 리듬이 없는 소리.\n\n` +
    `오염이 피부에 닿는 것처럼 느껴진다.\n` +
    `여기선 오래 있으면 안 된다.`,
  choices: [
    {
      id: 'b3b_listen',
      label: '봉인 너머 소리에 귀를 기울인다',
      type: 'rng',
      successProbability: 0.4,
      outcomes: {
        success: {
          nextSceneId: 'b3_platform_b',
          narrativeText:
            `소리가 조금 명확해졌다.\n` +
            `무언가가 말하는 것처럼 들렸다. 하지만 언어가 아니다.\n` +
            `역방향으로 반복되는 음절들.`,
          corruptionDelta: 12,
        },
        failure: {
          nextSceneId: 'b3_platform_b',
          narrativeText:
            `봉인이 흔들렸다.\n` +
            `빨리 물러나야 한다.`,
          hpDelta: -8,
          corruptionDelta: 10,
        },
      },
    },
    back('b3b_back', 'b3_escalator', '에스컬레이터로 뛰어 올라간다'),
  ],
};

// ── 유지보수 터널 (b3-tun, item) ─────────────────────────────────────────────

const ART_B3_TUN = `
  ┌──────────────────────────────────────────────────────┐
  │  좁고 낮은 터널.                                     │
  │                                                      │
  │  벽 곳곳에 좌표와 방향이 새겨져 있다.               │
  │  N37.5° E126.9°  /  B3↔A2 +340m                    │
  │                                                      │
  │  [비상 외부 출구] — 잠겨 있다                        │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b3Tunnel: Scene = {
  id: 'b3_tunnel',
  title: 'B3 — 유지보수 터널',
  asciiArt: ART_B3_TUN,
  description:
    `유지보수 터널. 허리를 굽혀야 지나갈 수 있는 높이.\n\n` +
    `벽에 좌표가 새겨져 있다. 작은 글씨로 빼곡히.\n` +
    `비상 외부 출구가 끝에 있다 — 잠겨 있다.`,
  choices: [
    {
      id: 'b3t_coords',
      label: '좌표 메모를 읽는다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b3_tunnel',
          narrativeText:
            `좌표들이 순서 없이 적혀 있다.\n` +
            `마지막에 다른 색 펜으로 쓴 글씨:\n\n` +
            `"부정의 탑 — N37.561 E126.975\n` +
            `경계선이 하루 5m씩 남하 중"`,
        },
      },
    },
    back('b3t_back', 'b3_platform_a', '플랫폼 A로 돌아간다'),
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// A2 지하 3구역
// ══════════════════════════════════════════════════════════════════════════════

// ── 터널 입구 (a2-tun) ───────────────────────────────────────────────────────

const ART_A2_TUN = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  터널 끝. 앞이 넓어진다.                             │
  │                                                      │
  │  ──────────────────── 철창문 ─────────────────────   │
  │  "A2 지하 3구역  /  무단 접근 금지"                  │
  │                                                      │
  │  창구 뒤에서 눈이 당신을 보고 있다.                  │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a2Tunnel: Scene = {
  id: 'a2_tunnel',
  title: 'A2 지하 3구역 — 터널 입구',
  asciiArt: ART_A2_TUN,
  description:
    `터널이 끝나고 공간이 넓어진다.\n\n` +
    `앞에 철창문이 있다. "A2 지하 3구역 / 무단 접근 금지."\n\n` +
    `창구 뒤에서 누군가 당신을 주시하고 있다.`,
  choices: [
    {
      id: 'a2t_approach',
      label: '검문소로 다가간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'a2_checkpoint', narrativeText: '창구 쪽으로 다가갔다.' } },
    },
    back('a2t_back', 'b3_platform_a', '터널로 돌아간다'),
  ],
};

// ── 검문소 (a2-gate, npc) — 오기범 허가 ──────────────────────────────────────

const ART_A2_GATE = `
  ┌──────────────────────────────────────────────────────┐
  │  ████████████ 철창문 ████████████████████████████    │
  │                                                      │
  │  [창구]                                              │
  │  "이름. 출발지. 목적."                               │
  │                                                      │
  │  중년 남성. 눈이 차갑다.                             │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a2Checkpoint: Scene = {
  id: 'a2_checkpoint',
  title: 'A2 검문소',
  asciiArt: ART_A2_GATE,
  description:
    `창구 뒤에 중년 남성이 서 있다.\n\n` +
    `"이름. 출발지. 목적."\n\n` +
    `짧고 건조한 목소리. 뒤에 더 있는 것 같다.`,
  backgroundContext: `오기범은 D+3에 이 구역을 접수했다. 검문소는 그가 직접 설계했다.`,
  choices: [
    {
      id: 'a2g_survival',
      label: '생존 기록을 보여준다',
      type: 'deterministic',
      required: { items: ['survival_memo'] },
      outcomes: {
        success: {
          nextSceneId: 'a2_checkpoint',
          narrativeText:
            `메모를 창구 사이로 밀었다.\n\n` +
            `그가 훑어봤다. 잠시 침묵.\n\n` +
            `"위에서 왔군. A1 구역 생존자는 오랜만이야.\n` +
            `들어와. 규칙은 안에서 설명해줄 거야."`,
          itemsGained: ['a2_pass'],
        },
      },
    },
    {
      id: 'a2g_ryumin',
      label: '류민의 메모를 내민다',
      type: 'deterministic',
      required: { items: ['ryumin_note'] },
      outcomes: {
        success: {
          nextSceneId: 'a2_checkpoint',
          narrativeText:
            `류민의 메모를 보자 표정이 약간 풀렸다.\n\n` +
            `"류민이 아직 살아있어? 그 겁쟁이가."\n` +
            `코웃음. 하지만 나쁘지 않은 코웃음이다.\n\n` +
            `"들어와."`,
          itemsGained: ['a2_pass'],
        },
      },
    },
    {
      id: 'a2g_persuade',
      label: '"살아남는 데 도움이 되고 싶습니다."',
      type: 'rng',
      successProbability: 0.45,
      outcomes: {
        success: {
          nextSceneId: 'a2_checkpoint',
          narrativeText:
            `긴 침묵.\n\n` +
            `"우리한테 필요한 사람이 어떤 사람인지 알아?\n` +
            `죽지 않는 사람이야. 네가 여기까지 온 걸 보면,\n` +
            `일단은 그 조건은 됐어."\n\n` +
            `철창문이 열렸다.`,
          itemsGained: ['a2_pass'],
        },
        failure: {
          nextSceneId: 'a2_checkpoint',
          narrativeText:
            `"말만 그런 사람들 많이 봤어.\n` +
            `돌아가. 네가 도움이 된다는 증거가 있으면 다시 와."`,
        },
      },
    },
  ],
};

// ── 입구 복도 (a2-hall) ──────────────────────────────────────────────────────

const ART_A2_HALL = `
  ┌──────────────────────────────────────────────────────┐
  │  벽을 따라 이름들이 적혀 있다.                       │
  │                                                      │
  │  김○○  박○○  이○○  최○○  정○○  ...               │
  │  남녀노소. 수백 개.                                  │
  │                                                      │
  │  살아있다는 표시인지, 죽은 사람 명단인지.            │
  │                          ↓ 메인 홀                   │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a2Corridor: Scene = {
  id: 'a2_corridor',
  title: 'A2 지하 3구역 — 입구 복도',
  asciiArt: ART_A2_HALL,
  description:
    `복도 양쪽 벽이 이름으로 가득하다.\n\n` +
    `손으로 쓴 이름들 — 수백 개.\n` +
    `날짜가 적힌 것도 있고, 주소가 적힌 것도 있다.\n\n` +
    `누군가 지속적으로 추가하고 있다.`,
  backgroundContext: `오기범은 구역에 들어온 모든 사람의 이름을 벽에 기록하게 했다. "살아있다는 증거"라고 했다.`,
  choices: [
    {
      id: 'a2h_names',
      label: '이름들을 훑어본다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a2_corridor',
          narrativeText:
            `수백 개의 이름 중 몇 개가 눈에 들어온다.\n` +
            `날짜가 있는 것들 — 가장 최근은 3일 전.\n` +
            `아직도 사람들이 들어오고 있다는 뜻이다.`,
        },
      },
    },
    {
      id: 'a2h_main',
      label: '메인 홀로 들어간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'a2_main', narrativeText: '복도를 지나 메인 홀로 들어갔다.' } },
    },
  ],
};

// ── 메인 홀 (a2-main, npc) — 서하 ────────────────────────────────────────────

const ART_A2_MAIN = `
  ┌──────────────────────────────────────────────────────┐
  │  [배급 카운터]          [공지 게시판]                │
  │                                                      │
  │  사람들이 있다. 20~30명.                             │
  │  웅성거리는 소리. 아이 울음소리.                     │
  │                                                      │
  │  [서쪽 → 거주구역]    [동쪽 → 의료실·집무실]        │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a2Main: Scene = {
  id: 'a2_main',
  title: 'A2 지하 3구역 — 메인 홀',
  asciiArt: ART_A2_MAIN,
  description:
    `처음으로 사람들이 있다.\n\n` +
    `배급 카운터 앞에 줄이 서 있다. 어린아이도 있다.\n` +
    `공지 게시판에 규칙들이 빼곡하다.\n\n` +
    `한 여성이 배급 업무를 보다가 당신을 발견한다.`,
  choices: [
    {
      id: 'a2m_seha',
      label: '그녀에게 말을 건다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a2_main',
          narrativeText:
            `"새로 온 사람이군요. 저는 서하예요."\n\n` +
            `조심스럽지만 친절한 목소리다.\n\n` +
            `"오기범씨한테 허가 받았으면 일단 안전해요.\n` +
            `규칙은 세 가지예요 — 일, 배급, 비밀 없음.\n` +
            `...그리고 봉인 사무실엔 절대 가지 마세요."`,
        },
      },
    },
    {
      id: 'a2m_board',
      label: '공지 게시판을 읽는다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a2_main',
          narrativeText:
            `규칙:\n` +
            `1. 모든 구성원은 하루 2시간 이상 공동작업\n` +
            `2. 배급은 작업량에 비례\n` +
            `3. 외부 정보는 오기범에게 즉시 보고\n` +
            `4. 봉인 구역 접근 금지\n\n` +
            `가장 아래: "이 규칙을 어기는 자는 퇴출"`,
        },
      },
    },
    {
      id: 'a2m_office',
      label: '오기범 집무실로 간다',
      type: 'deterministic',
      required: { items: ['a2_pass'] },
      outcomes: { success: { nextSceneId: 'a2_office', narrativeText: '동쪽 복도를 따라 집무실로 향했다.' } },
    },
  ],
};

// ── 오기범 집무실 (a2-off, npc) ──────────────────────────────────────────────

const ART_A2_OFFICE = `
  ┌──────────────────────────────────────────────────────┐
  │  [지도]       [무전기]      [서랍 — 잠김]            │
  │                                                      │
  │  지도에 구역별 생존자 수가 표시되어 있다.            │
  │                                                      │
  │  오기범이 앉아 당신을 기다리고 있다.                 │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const a2Office: Scene = {
  id: 'a2_office',
  title: 'A2 집무실 — 오기범',
  asciiArt: ART_A2_OFFICE,
  description:
    `좁은 집무실. 벽에 지도가 가득하다.\n\n` +
    `오기범이 책상 앞에 앉아 있다.\n` +
    `무전기가 깜박이고 있다.\n\n` +
    `"앉아. 몇 가지 물어볼 게 있어."`,
  backgroundContext: `오기범은 D+3 이후 이 구역 전체의 생존을 책임지고 있다. 그것이 그를 이렇게 만들었다.`,
  choices: [
    {
      id: 'a2o_situation',
      label: '"위쪽 상황을 말씀드릴게요."',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a2_office',
          narrativeText:
            `A1 아파트 상황, 타락자 배치, 이세아를 봤다는 것까지.\n\n` +
            `오기범의 표정이 굳었다.\n\n` +
            `"마법소녀가 아직 살아있다고? 그렇다면..."` +
            `그가 지도 쪽을 봤다.\n\n` +
            `"그 이야기가 사실이면 우리한테 시간이 많지 않아."`,
        },
      },
    },
    {
      id: 'a2o_signal',
      label: '"신호장비가 있다고 들었어요."',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'a2_office',
          narrativeText:
            `오기범의 눈이 좁아졌다.\n\n` +
            `"누구한테 들었어?"\n\n` +
            `잠깐의 침묵.\n\n` +
            `"있어. 봉인 사무실에. 하지만 그건 최후 수단이야.\n` +
            `외부에 신호를 보내면 우리 위치가 노출돼.\n` +
            `그게 좋은 것만 불러온다는 보장이 없거든."`,
        },
      },
    },
    {
      id: 'a2o_join',
      label: '"공동체에 합류하고 싶습니다."',
      type: 'deterministic',
      required: { items: ['a2_pass'] },
      outcomes: {
        success: {
          nextSceneId: 'a2_office',
          narrativeText:
            `"이미 들어왔잖아."\n\n` +
            `건조한 대답. 하지만 틀린 말은 아니다.\n\n` +
            `"규칙대로 살면 돼. 나가는 건 네 선택이고.\n` +
            `나갔다가 오염되어 들어오면 — 다시는 못 들어온다.\n` +
            `그게 전부야."`,
        },
      },
    },
  ],
};
