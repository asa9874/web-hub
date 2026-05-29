import type { Scene } from '../../types/index.ts';

const back = (id: string, nextSceneId: string, label = '뒤로 나간다') => ({
  id,
  label,
  type: 'deterministic' as const,
  outcomes: { success: { nextSceneId, narrativeText: '' } },
});

// ══════════════════════════════════════════════════════════════════════════════
// B6 연세대 폐허
// ══════════════════════════════════════════════════════════════════════════════

// ── 본관 (b6-main) ────────────────────────────────────────────────────────────

const ART_B6_MAIN = `
  ┌──────────────────────────────────────────────────────┐
  │  연세대학교 본관.                                    │
  │                                                      │
  │  [1F 행정실]  [2F 강의실]  [3F 연구실]              │
  │                                                      │
  │  캠퍼스가 놀랍도록 조용하다.                         │
  │  타락자들도 이곳을 피하는 것 같다.                   │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b6Main: Scene = {
  id: 'b6_main',
  title: 'B6 연세대 — 본관',
  asciiArt: ART_B6_MAIN,
  description:
    `본관 건물. 유리가 깨져있지만 구조는 멀쩡하다.\n\n` +
    `캠퍼스가 조용하다. 바람 소리만 들린다.\n` +
    `타락자들이 여기를 피하는 이유가 있을 것이다.\n\n` +
    `공학관 방향에서 가끔 빛이 깜박인다.`,
  backgroundContext: `B6 캠퍼스가 고요한 이유: 정도석이 공학관 지하에서 오염 차폐 장치를 운영하고 있다.`,
  choices: [
    {
      id: 'b6m_eng',
      label: '공학관 방향으로 간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b6_engineering', narrativeText: '빛이 깜박이는 공학관으로 향했다.' } },
    },
    {
      id: 'b6m_lib',
      label: '도서관을 살핀다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b6_library', narrativeText: '도서관 건물로 들어갔다.' } },
    },
    {
      id: 'b6m_sq',
      label: '중앙 광장을 가로지른다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b6_square', narrativeText: '광장으로 나갔다.' } },
    },
  ],
};

// ── 도서관 (b6-lib, item) ─────────────────────────────────────────────────────

const ART_B6_LIB = `
  ┌──────────────────────────────────────────────────────┐
  │  지하 서고.                                          │
  │                                                      │
  │  [의학교재]  [생명공학]  [논문 사본]                 │
  │                                                      │
  │  책들이 보존 상태가 좋다.                            │
  │  누군가 정기적으로 관리한 것 같다.                   │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b6Library: Scene = {
  id: 'b6_library',
  title: 'B6 도서관',
  asciiArt: ART_B6_LIB,
  description:
    `지하 서고. 책들이 생각보다 보존이 잘 되어있다.\n\n` +
    `누군가 책들을 정리하고 있다. 최근에도.\n` +
    `의학교재와 생명공학 논문 사본이 빼곡하다.\n\n` +
    `한 책에 메모지가 꽂혀있다.`,
  choices: [
    {
      id: 'b6l_memo',
      label: '메모지가 꽂힌 책을 읽는다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b6_library',
          narrativeText:
            `생명공학 논문: "비생물적 공명 현상과 세포막 투과성"\n\n` +
            `메모지의 글씨:\n` +
            `"이주원 박사의 가설이 맞다.\n` +
            `주파수 상쇄 가능 — 단, 생물학적 촉매 없이는 불완전.\n` +
            `마법소녀의 '정화력'은 물리적 실체가 있다.\n` +
            `— J.D."`,
        },
      },
    },
    {
      id: 'b6l_search',
      label: '다른 책들을 뒤진다',
      type: 'rng',
      successProbability: 0.4,
      outcomes: {
        success: {
          nextSceneId: 'b6_library',
          narrativeText:
            `서고 안쪽 — 진통제 한 병과 붕대.\n` +
            `사서가 비상용으로 둔 것 같다.`,
          itemsGained: ['painkiller'],
        },
        failure: {
          nextSceneId: 'b6_library',
          narrativeText: '책뿐이다.',
        },
      },
    },
    back('b6l_back', 'b6_main', '본관으로 돌아간다'),
  ],
};

// ── 중앙 광장 (b6-sq) ────────────────────────────────────────────────────────

const ART_B6_SQ = `
  ┌──────────────────────────────────────────────────────┐
  │  캠퍼스 중앙 광장.                                   │
  │                                                      │
  │  조각상이 서 있다. 바람이 분다.                      │
  │  아무도 없다.                                        │
  │                                                      │
  │  [도서관]   [공학관]   [본관]                        │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b6Square: Scene = {
  id: 'b6_square',
  title: 'B6 중앙 광장',
  asciiArt: ART_B6_SQ,
  description:
    `캠퍼스 중앙 광장. 조각상이 서 있다.\n\n` +
    `사람이 없다. 발자국만 있다.\n` +
    `공학관 방향으로 이어지는 발자국.`,
  choices: [
    {
      id: 'b6sq_eng',
      label: '공학관으로 간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b6_engineering', narrativeText: '발자국을 따라 공학관으로 향했다.' } },
    },
    back('b6sq_back', 'b6_main', '본관으로 돌아간다'),
  ],
};

// ── 공학관 (b6-eng, item) ─────────────────────────────────────────────────────

const ART_B6_ENG = `
  ┌──────────────────────────────────────────────────────┐
  │  공학관 1층.                                         │
  │                                                      │
  │  지하로 내려가는 계단.                               │
  │  [DEV 차폐 장치] 소리가 들린다.                      │
  │                                                      │
  │  문 앞에 메모: "노크할 것. 여러 번."                 │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b6Engineering: Scene = {
  id: 'b6_engineering',
  title: 'B6 공학관',
  asciiArt: ART_B6_ENG,
  description:
    `공학관 로비. 지하로 내려가는 계단이 있다.\n\n` +
    `계단 입구에 종이 메모가 붙어있다:\n` +
    `"노크할 것. 여러 번. 대답 없으면 그냥 가시오."`,
  choices: [
    {
      id: 'b6e_lab',
      label: '지하로 내려가 노크한다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'b6_lab_doseok', narrativeText: '계단을 내려가 문을 두드렸다. 여러 번.' } },
    },
    back('b6e_back', 'b6_main', '본관으로 돌아간다'),
  ],
};

// ── 지하 연구실 (b6-lab, npc) ★ — 정도석 ────────────────────────────────────

const ART_B6_LAB = `
  ┌──────────────────────────────────────────────────────┐
  │  차폐된 공간. 모니터 빛이 유일한 광원.               │
  │                                                      │
  │  [모니터 x3]  [화이트보드 — 수식 가득]              │
  │                                                      │
  │  55세쯤 되어 보이는 남성.                           │
  │  "당신은 누구요?"                                   │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const b6LabDoseok: Scene = {
  id: 'b6_lab_doseok',
  title: 'B6 지하 연구실 — 정도석',
  asciiArt: ART_B6_LAB,
  description:
    `지하 연구실. 모니터 세 개에서 데이터가 흐르고 있다.\n\n` +
    `화이트보드에 수식과 그래프. 탑의 위성 이미지.\n\n` +
    `의자에서 남성이 천천히 일어섰다.\n` +
    `"당신은 누구요?"`,
  backgroundContext: `정도석 — 전 연세대 생명공학과 교수. D+1부터 이 연구실에서 탑을 관측하고 있다. 스핑크스 문서는 마법소녀 군단이 버리고 간 기밀 보고서다.`,
  choices: [
    {
      id: 'b6l_introduce',
      label: '"생존자입니다. A1에서 왔어요."',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b6_lab_doseok',
          narrativeText:
            `"A1에서 여기까지." 그가 반복했다.\n\n` +
            `"나는 정도석이오. 여기 있는 이유는 하나야.\n` +
            `저 탑이 뭔지 알아내는 것."`,
        },
      },
    },
    {
      id: 'b6l_memo',
      label: '"이주원 박사님 메모를 가지고 있어요."',
      type: 'deterministic',
      required: { items: ['memo_iwon'] },
      outcomes: {
        success: {
          nextSceneId: 'b6_lab_doseok',
          narrativeText:
            `정도석의 눈이 커졌다.\n\n` +
            `"이주원 박사가... 살아있었군. 아니, 메모가 있다는 건—"\n\n` +
            `그가 잠시 눈을 감았다. 그리고 책상 서랍을 열었다.\n\n` +
            `"이걸 줘야 할 것 같군. 이걸 이해할 수 있는 사람을 기다렸어."`,
          itemsGained: ['sphinx_doc'],
        },
      },
    },
    {
      id: 'b6l_persuade',
      label: '"탑을 멈추는 방법을 찾고 있어요. 도와주세요."',
      type: 'rng',
      successProbability: 0.5,
      outcomes: {
        success: {
          nextSceneId: 'b6_lab_doseok',
          narrativeText:
            `긴 침묵.\n\n` +
            `"...당신이 포기하지 않는 타입이군."\n\n` +
            `그가 서랍에서 두꺼운 봉투를 꺼냈다.\n` +
            `"스핑크스 문서야. 마법소녀 군단이 놓고 간 것.\n` +
            `이걸 가지고 이세아를 찾아요. 한강변 어딘가에 있을 거야."`,
          itemsGained: ['sphinx_doc'],
        },
        failure: {
          nextSceneId: 'b6_lab_doseok',
          narrativeText:
            `"당신을 아직 믿을 수 없어요.\n` +
            `이주원 박사 메모를 가지고 오면 생각해보겠소."`,
        },
      },
    },
    {
      id: 'b6l_ask_tower',
      label: '"탑에 대해 알고 있는 것을 말해줄 수 있나요?"',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'b6_lab_doseok',
          narrativeText:
            `"탑은 살아있어요."\n\n` +
            `그가 화이트보드를 가리켰다.\n` +
            `"오염이 아니야. 오염을 방출하는 생명체.\n` +
            `먹이를 먹고 있는 것처럼 성장하고 있어.\n\n` +
            `방법은 세 가지:\n` +
            `1. 내부에서 정화 — 가장 확실, 가장 위험\n` +
            `2. 외부 지원 요청 — 신호장비 필요\n` +
            `3. 아무것도 안 한다 — 두 달 후 서울이 D1이 됨"`,
        },
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// C1 한강변
// ══════════════════════════════════════════════════════════════════════════════

// ── 강변북로 (c1-rd) ──────────────────────────────────────────────────────────

const ART_C1_RD = `
  ┌──────────────────────────────────────────────────────┐
  │  ↑ 관측 지점 (고가도로)                              │
  │                                                      │
  │  ─────────────────── 강변북로 ──────────────────     │
  │  방호벽이 줄지어 있다. 부분 은신 가능.               │
  │  ─────────────────────────────────────────────      │
  │                                                      │
  │  강이 보인다 — 검다. 움직인다.                       │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const c1Road: Scene = {
  id: 'c1_road',
  title: 'C1 강변북로',
  asciiArt: ART_C1_RD,
  description:
    `강변북로. 4차선 도로가 비어있다.\n\n` +
    `방호벽 뒤로 몸을 숨길 수 있다.\n` +
    `멀리 고가도로 위 관측 지점이 보인다.\n\n` +
    `한강이 보인다 — 검게 변해있다. 움직임이 있다.`,
  backgroundContext: `한강이 검게 변한 것은 D+8이다. 이후로 강변에 접근하면 오염이 심하게 증가한다.`,
  choices: [
    {
      id: 'c1rd_obs',
      label: '고가도로 위 관측 지점으로 올라간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'c1_observation', narrativeText: '고가도로 위로 올라갔다.' } },
    },
    {
      id: 'c1rd_dep',
      label: '강변 창고를 살핀다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'c1_depot', narrativeText: '강변 창고 쪽으로 방향을 틀었다.' } },
    },
    {
      id: 'c1rd_riverside',
      label: '강변 산책로로 내려간다',
      type: 'deterministic',
      outcomes: { success: { nextSceneId: 'c1_riverside', narrativeText: '강변 쪽으로 내려갔다.' } },
    },
  ],
};

// ── 관측 지점 (c1-obs, npc) ★ — 이세아 동행 ─────────────────────────────────

const ART_C1_OBS = `
  ┌──────────────────────────────────────────────────────┐
  │  고가도로 위 8m.                                     │
  │                                                      │
  │  한강과 서울이 한눈에 보인다.                        │
  │  북쪽 — 부정의 탑이 하늘을 찌른다.                  │
  │                                                      │
  │  난간에 누군가 서 있다.                              │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const c1Observation: Scene = {
  id: 'c1_observation',
  title: 'C1 관측 지점 — 이세아',
  asciiArt: ART_C1_OBS,
  description:
    `고가도로 위 8m. 서울 전체가 보인다.\n\n` +
    `북쪽으로 탑이 하늘을 찌른다.\n` +
    `검은 연기가 도시를 덮고 있다.\n\n` +
    `난간에 누군가 서 있다. 뒤를 보지 않고도 당신이 온 걸 안다.`,
  backgroundContext: `이세아는 이 지점에서 매일 탑을 관측한다. 경계선이 얼마나 빠르게 좁혀오는지 계산하면서.`,
  choices: [
    {
      id: 'c1obs_sphinx',
      label: '"스핑크스 문서를 가지고 왔어요."',
      type: 'deterministic',
      required: { items: ['sphinx_doc'] },
      outcomes: {
        success: {
          nextSceneId: 'c1_observation',
          narrativeText:
            `이세아가 돌아봤다.\n\n` +
            `"그걸 찾았군요."\n\n` +
            `짧은 침묵. 강바람이 불었다.\n\n` +
            `"혼자 들어가면 죽어요. 나도 혼자는 안 돼요.\n` +
            `당신이 신호장비를 가지거나, 이주원 박사 메모를 가지거나.\n` +
            `그러면 — 같이 가요. D1까지."`,
          itemsGained: ['iseah_pact'],
        },
      },
    },
    {
      id: 'c1obs_ask',
      label: '"D1에는 어떻게 들어가야 하나요?"',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'c1_observation',
          narrativeText:
            `"C2를 통해서요. 경계선 너머."` +
            ` 그녀가 북쪽을 가리켰다.\n\n` +
            `"내가 없으면 경계선 근처에서 오염이 너무 빠르게 쌓여요.\n` +
            `나는 잠깐 오염 속도를 늦출 수 있거든요.\n` +
            `마법소녀 능력 중 유일하게 남은 게 그거예요."`,
        },
      },
    },
    {
      id: 'c1obs_iwon',
      label: '"이주원 박사 메모를 찾았어요."',
      type: 'deterministic',
      required: { items: ['memo_iwon'] },
      outcomes: {
        success: {
          nextSceneId: 'c1_observation',
          narrativeText:
            `이세아가 메모를 훑어봤다.\n\n` +
            `"이주원 박사가 다 알고 있었군요."\n\n` +
            `그녀의 표정이 미묘하게 흔들렸다.\n\n` +
            `"스핑크스 문서도 구하면, 같이 가요.\n` +
            `정도석 교수한테 물어봐요. 연세대 공학관 지하에 있을 거예요."`,
        },
      },
    },
  ],
};

// ── 강변산책로 (c1-walk, danger) ─────────────────────────────────────────────

const ART_C1_WALK = `
  ┌──────────────────────────────────────────────────────┐
  │  검은 강이 바로 옆이다.                              │
  │                                                      │
  │  ~~~~~~~~~~~~~~~~~~~~~~~~ 한강 (검은) ~~~~~~~~~~~    │
  │                                                      │
  │  수면에서 연기가 올라온다.                           │
  │  강물이 움직인다. 조류와 다른 방향으로.              │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const c1Riverside: Scene = {
  id: 'c1_riverside',
  title: 'C1 강변산책로',
  asciiArt: ART_C1_WALK,
  description:
    `강변산책로. 한강이 바로 옆이다.\n\n` +
    `강물이 검다. 수면에서 연기가 피어오른다.\n` +
    `물이 움직인다 — 조류와 다른 방향으로.\n\n` +
    `발이 강 쪽으로 끌리는 것 같다. 착각이길 바란다.`,
  choices: [
    {
      id: 'c1w_observe',
      label: '강물을 자세히 들여다본다',
      type: 'rng',
      successProbability: 0.45,
      outcomes: {
        success: {
          nextSceneId: 'c1_riverside',
          narrativeText:
            `강 건너편 — 무언가 보인다.\n` +
            `탑보다 큰 그림자. 움직이지 않는다.\n` +
            `바라보는 것 같다.`,
          corruptionDelta: 12,
        },
        failure: {
          nextSceneId: 'c1_riverside',
          narrativeText:
            `강물이 발끝을 적셨다.\n\n` +
            `너무 가까이 왔다. 물러났다.`,
          hpDelta: -8,
          corruptionDelta: 18,
        },
      },
    },
    back('c1w_back', 'c1_road', '강변북로로 돌아간다'),
  ],
};

// ── 강변 창고 (c1-dep, item) ──────────────────────────────────────────────────

const ART_C1_DEP = `
  ┌──────────────────────────────────────────────────────┐
  │  강변 창고.                                          │
  │                                                      │
  │  구명조끼  /  방수장비  /  조명탄  /  밧줄           │
  │                                                      │
  │  이세아의 흔적이 있다. 최근에 왔다 간 것 같다.       │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export const c1Depot: Scene = {
  id: 'c1_depot',
  title: 'C1 강변 창고',
  asciiArt: ART_C1_DEP,
  description:
    `강변 창고. 탐색 장비들이 정리되어 있다.\n\n` +
    `구명조끼, 방수장비, 조명탄, 밧줄.\n` +
    `누군가 최근에 여기서 무언가를 가져갔다.\n\n` +
    `벽에 손바닥만한 메모지가 붙어있다.`,
  choices: [
    {
      id: 'c1dep_memo',
      label: '메모지를 읽는다',
      type: 'deterministic',
      outcomes: {
        success: {
          nextSceneId: 'c1_depot',
          narrativeText:
            `"필요한 것 가져가세요.\n` +
            `C2는 내가 막아볼게요.\n` +
            `하지만 혼자선 오래 못 해요.\n` +
            `— 이세아"`,
        },
      },
    },
    {
      id: 'c1dep_supplies',
      label: '남아있는 물자를 챙긴다',
      type: 'rng',
      successProbability: 0.55,
      outcomes: {
        success: {
          nextSceneId: 'c1_depot',
          narrativeText:
            `창고 구석에 약초 뭉치가 남아있다.\n` +
            `이세아가 두고 간 것 같다.`,
          itemsGained: ['herb'],
        },
        failure: {
          nextSceneId: 'c1_depot',
          narrativeText: '이미 대부분 가져간 것 같다.',
        },
      },
    },
    back('c1dep_back', 'c1_road', '강변북로로 돌아간다'),
  ],
};
