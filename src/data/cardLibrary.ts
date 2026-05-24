/**
 * 루나 실버의 카드 라이브러리 (SSOT).
 * 전투 엔진, 카드 보상 화면, 카드 도감이 모두 이 데이터를 읽는다.
 */
import type { Card } from '../types';
import { applyDamage, addStatus } from '../utils/combat';

// ── 헬퍼 ────────────────────────────────────────────────────────────────────────

function heal(user: { hp: number; maxHp: number }, amount: number): void {
  user.hp = Math.min(user.maxHp, user.hp + amount);
}

// ── 카드 라이브러리 ──────────────────────────────────────────────────────────────

export const CARD_LIBRARY: Card[] = [

  // ═══════════════════════════════════════════════════════════════════
  //  공격 — 일반 (Common Attack)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'silver_slash',
    name: '은빛 베기',
    cost: 1,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '6의 피해를 입힙니다.',
    originLore:
      '별빛항의 해안가에서 루나가 처음으로 마법력을 검에 담는 법을 익힌 날, 검날에 은빛 달빛이 스며드는 것을 보았다. 가장 기본적인 기술이지만, 루나는 이 베기 안에서 자신의 시작을 본다.',
    trivia:
      '훈련 2일 차 밤 일지 — "선생님이 오늘도 기본기를 틀렸다고 했다. 하지만 이상하게도 검을 휘두를 때마다 팔 끝에서 빛이 느껴진다. 이게 마법인 걸까."',
    onPlay: (u, t) => applyDamage(t[0], 6, u),
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '9의 피해를 입힙니다.';
      c.onPlay = (u, t) => applyDamage(t[0], 9, u);
    },
  },

  {
    id: 'moonlight_slash',
    name: '달빛 참격',
    cost: 1,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '8의 피해를 입힙니다.',
    originLore:
      '보름달 밤에만 쓸 수 있다는 전설의 검기. 루나는 비가 오는 밤에 홀로 이 기술을 완성해냈다 — 달이 없어도 마음 속에 달이 있다면 충분하다는 것을 그날 배웠다.',
    trivia:
      '빗속의 밤 일지 — "달이 없는데도 할 수 있었다. 달빛은 하늘에서 오는 게 아니라 내 안에서 온다는 걸 처음 알았다."',
    onPlay: (u, t) => applyDamage(t[0], 8, u),
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '11의 피해를 입힙니다.';
      c.onPlay = (u, t) => applyDamage(t[0], 11, u);
    },
  },

  {
    id: 'star_fragment',
    name: '별의 파편',
    cost: 0,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '3의 피해를 입힙니다.',
    originLore:
      '별빛항 하늘에서 떨어진 유성 조각을 루나가 손바닥에 담아 던진 것이 최초였다. 하찮아 보이는 이 기술이 루나의 첫 전투에서 목숨을 살렸다.',
    trivia:
      '첫 전투 일지 — "작은 것도 소중하다. 이 빛 조각이 없었다면 지금 여기 없었을 것이다."',
    onPlay: (u, t) => applyDamage(t[0], 3, u),
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '5의 피해를 입힙니다.';
      c.onPlay = (u, t) => applyDamage(t[0], 5, u);
    },
  },

  {
    id: 'nebula_impact',
    name: '성운 충격',
    cost: 1,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '4의 피해를 입히고\n방어도 3을 획득합니다.',
    originLore:
      '성운의 기운을 오른손에는 공격으로, 왼손에는 방패로 담아 동시에 발출하는 기술. 스승은 "별빛 마법사는 공과 수를 분리하지 않는다"고 가르쳤다.',
    trivia:
      '중급 수련 일지 — "오른손에는 공격, 왼손에는 방어. 처음엔 뇌가 분리되는 느낌이었다. 그런데 둘이 하나가 되는 순간, 전혀 다른 힘이 생겨났다."',
    onPlay: (u, t) => { applyDamage(t[0], 4, u); u.block += 3; },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '6의 피해를 입히고\n방어도 4를 획득합니다.';
      c.onPlay = (u, t) => { applyDamage(t[0], 6, u); u.block += 4; };
    },
  },

  {
    id: 'twin_star_strike',
    name: '쌍성 연타',
    cost: 1,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '4의 피해를 2번 입힙니다.',
    originLore:
      '하늘의 이중성(쌍성)에서 영감을 받아 루나가 개발한 연타 기술. 두 발의 타격이 두 별의 공전처럼 정확하게 이어지며, 리듬이 어긋나면 위력이 줄어든다.',
    trivia:
      '천문 관측 일지 — "쌍성을 보며 깨달았다. 두 별이 함께 도는 것처럼, 두 타격도 서로를 잡아당겨야 해."',
    onPlay: (u, t) => { applyDamage(t[0], 4, u); applyDamage(t[0], 4, u); },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '5의 피해를 2번 입힙니다.';
      c.onPlay = (u, t) => { applyDamage(t[0], 5, u); applyDamage(t[0], 5, u); };
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  //  스킬 — 일반 (Common Skill)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'starlight_barrier',
    name: '별빛 결계',
    cost: 1,
    cardType: 'skill',
    rarity: 'common',
    targetType: 'single',
    description: '방어도 6을 획득합니다.',
    originLore:
      '마법소녀 계약 직후 루나에게 각인된 첫 방어 주문. 별빛을 짜내어 투명한 방어막을 만들 때, 손끝에서 작은 별들이 맴도는 것을 루나는 아직도 잊지 못한다.',
    trivia:
      '계약의 날 일지 — "처음 결계를 쳤을 때 손 주변에 별들이 춤추는 걸 봤다. 예쁘다는 생각이 들었다가, 이 별들이 나를 지키기 위해 모인 거란 걸 알고 울 뻔했다."',
    onPlay: (u) => { u.block += 6; },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '방어도 9를 획득합니다.';
      c.onPlay = (u) => { u.block += 9; };
    },
  },

  {
    id: 'moonlight_shield',
    name: '달빛 방패',
    cost: 1,
    cardType: 'skill',
    rarity: 'common',
    targetType: 'single',
    description: '방어도 8을 획득합니다.',
    originLore:
      '달의 인력을 빌려 만드는 묵직한 방어막. 별빛 결계보다 두껍고 투박하지만, 그만큼 확실하다. 루나는 이 방패가 달처럼 묵묵하다고 생각한다.',
    trivia:
      '수련 일지 — "달빛 방패는 예쁘지 않다. 투박하고 무겁다. 그런데 이 투박함이 더 안심된다. 달처럼, 조용히 내 곁에 있어주는."',
    onPlay: (u) => { u.block += 8; },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '방어도 12를 획득합니다.';
      c.onPlay = (u) => { u.block += 12; };
    },
  },

  {
    id: 'stardust_scatter',
    name: '별가루 산포',
    cost: 1,
    cardType: 'skill',
    rarity: 'common',
    targetType: 'single',
    description: '방어도 4를 획득하고\n카드 1장을 드로우합니다.',
    originLore:
      '별 조각들을 뿌려 방어막을 치는 동시에 그 기운으로 손끝을 밝혀 다음 주문서를 펼치는 연계 기술. 방어와 통찰이 동시에 오는 순간.',
    trivia:
      '연구 일지 — "별가루를 뿌리면서 카드를 뽑는 게 왠지 책 페이지를 넘기는 느낌이다. 마법이 언어로 이루어져 있다는 말이 이런 뜻일까."',
    onPlay: (u) => { u.block += 4; u.pendingDraw = (u.pendingDraw ?? 0) + 1; },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '방어도 5를 획득하고\n카드 1장을 드로우합니다.';
      c.onPlay = (u) => { u.block += 5; u.pendingDraw = (u.pendingDraw ?? 0) + 1; };
    },
  },

  {
    id: 'silver_focus',
    name: '은빛 집중',
    cost: 0,
    cardType: 'skill',
    rarity: 'common',
    targetType: 'single',
    description: '카드 1장을 드로우합니다.',
    originLore:
      '마음을 은빛 달빛처럼 고요하게 가라앉혀 직관으로 다음 행동을 꿰뚫어 보는 명상 기술. 마나 소비 없이 쓸 수 있지만, 완전한 고요가 필요하다.',
    trivia:
      '명상 일지 — "아무것도 안 하는 것처럼 보이는데 사실 가장 어렵다. 마음을 비우는 게 칼을 휘두르는 것보다 훨씬 힘들다."',
    onPlay: (u) => { u.pendingDraw = (u.pendingDraw ?? 0) + 1; },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '카드 2장을 드로우합니다.';
      c.onPlay = (u) => { u.pendingDraw = (u.pendingDraw ?? 0) + 2; };
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  //  공격 — 비범 (Uncommon Attack)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'starlight_combo',
    name: '별빛 연격',
    cost: 2,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'single',
    description: '4의 피해를 3번 입힙니다.',
    originLore:
      '세 개의 별을 연속으로 담아 연타하는 기술. 별빛항 출신 선배 마법사가 전수해 준 연격술이다. 세 번의 타격이 모두 같은 리듬을 가져야 완성된다.',
    trivia:
      '선배의 말 — "리듬을 잃으면 마지막 타격이 흐트러진다. 세 별이 함께 뜨듯, 세 타격이 하나여야 해."',
    onPlay: (u, t) => {
      applyDamage(t[0], 4, u); applyDamage(t[0], 4, u); applyDamage(t[0], 4, u);
    },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '5의 피해를 3번 입힙니다.';
      c.onPlay = (u, t) => {
        applyDamage(t[0], 5, u); applyDamage(t[0], 5, u); applyDamage(t[0], 5, u);
      };
    },
  },

  {
    id: 'twinkling_spark',
    name: '반짝이는 스파크',
    cost: 1,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'single',
    description: '2의 피해를 4번 입힙니다.',
    originLore:
      '별 주변을 맴도는 작은 빛 입자들을 모아 연속 발사하는 기술. 하나하나는 약하지만 네 발이 모이면 강하다. 루나가 밤하늘을 보며 독자적으로 개발했다.',
    trivia:
      '발명 일지 — "별빛을 쪼개면 어떻게 될까, 라는 생각에서 시작했다. 네 번 때렸을 때 적의 표정이 재미있었다."',
    onPlay: (u, t) => {
      applyDamage(t[0], 2, u); applyDamage(t[0], 2, u);
      applyDamage(t[0], 2, u); applyDamage(t[0], 2, u);
    },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '3의 피해를 4번 입힙니다.';
      c.onPlay = (u, t) => {
        applyDamage(t[0], 3, u); applyDamage(t[0], 3, u);
        applyDamage(t[0], 3, u); applyDamage(t[0], 3, u);
      };
    },
  },

  {
    id: 'moons_judgment',
    name: '달의 심판',
    cost: 2,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'single',
    description: '12의 피해를 입히고\n취약 2를 부여합니다.',
    originLore:
      '달이 밤하늘에서 모든 것을 꿰뚫어 보듯, 루나가 적의 방어를 폭로하며 큰 피해를 가하는 심판의 기술. 달의 빛 아래서는 어떤 방어도 완전할 수 없다.',
    trivia:
      '달빛 아래 일지 — "달은 모든 걸 드러낸다고 했다. 이 기술을 쓸 때 그 말이 진심으로 와닿았다."',
    onPlay: (u, t) => { applyDamage(t[0], 12, u); addStatus(t[0], 'vulnerable', 2); },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '15의 피해를 입히고\n취약 2를 부여합니다.';
      c.onPlay = (u, t) => { applyDamage(t[0], 15, u); addStatus(t[0], 'vulnerable', 2); };
    },
  },

  {
    id: 'meteor_shower',
    name: '유성우',
    cost: 2,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'all',
    description: '모든 적에게 5의 피해를 입힙니다.',
    originLore:
      '수십 개의 유성이 대기를 가르듯, 루나가 별의 파편들을 무수히 만들어 적 전체에게 퍼붓는 기술. 홀로 모든 별이 되는 순간.',
    trivia:
      '유성우의 밤 일지 — "유성우를 보며 이 기술을 완성했다. 모든 별이 함께 떨어지는 것처럼, 내 별들도 모두를 향해 날아간다."',
    onPlay: (u, ts) => ts.forEach(t => applyDamage(t, 5, u)),
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '모든 적에게 7의 피해를 입힙니다.';
      c.onPlay = (u, ts) => ts.forEach(t => applyDamage(t, 7, u));
    },
  },

  {
    id: 'silver_chain_strike',
    name: '은빛 연환격',
    cost: 2,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'single',
    description: '3의 피해를 5번 입힙니다.',
    originLore:
      '은하수처럼 이어지는 다섯 번의 타격. 끊김 없이 흘러야만 완성되는 기술로, 루나가 가장 오래 연습한 기술 중 하나다.',
    trivia:
      '연습 기록 일지 — "다섯 번이 하나처럼 이어지는 데 한 달이 걸렸다. 다섯 번째 타격에서 팔이 떨리는 날은 아직도 있다."',
    onPlay: (u, t) => {
      for (let i = 0; i < 5; i++) applyDamage(t[0], 3, u);
    },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '4의 피해를 5번 입힙니다.';
      c.onPlay = (u, t) => { for (let i = 0; i < 5; i++) applyDamage(t[0], 4, u); };
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  //  스킬 — 비범 (Uncommon Skill)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'milky_way_guidance',
    name: '은하수의 인도',
    cost: 1,
    cardType: 'skill',
    rarity: 'uncommon',
    targetType: 'single',
    description: '카드 2장을 드로우합니다.',
    originLore:
      '은하수가 나그네를 인도하듯, 루나의 직관이 다음 행동 두 가지를 밝혀주는 기술. 길을 잃었을 때 하늘의 강을 따라가라는 고대 별빛 마법사의 가르침.',
    trivia:
      '방황의 밤 일지 — "길을 잃어서 하늘을 봤더니 은하수가 보였다. 그날 이 기술의 이름이 결정됐다."',
    onPlay: (u) => { u.pendingDraw = (u.pendingDraw ?? 0) + 2; },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '카드 3장을 드로우합니다.';
      c.onPlay = (u) => { u.pendingDraw = (u.pendingDraw ?? 0) + 3; };
    },
  },

  {
    id: 'nebula_cloak',
    name: '성운의 망토',
    cost: 2,
    cardType: 'skill',
    rarity: 'uncommon',
    targetType: 'single',
    description: '방어도 18을 획득합니다.',
    originLore:
      '성운의 짙은 먼지와 기체를 모아 두꺼운 방어막을 치는 기술. 단단한 껍질이 아닌 부드럽게 흐르는 성운처럼, 모든 충격을 흡수한다.',
    trivia:
      '전략 일지 — "얼마나 강한 방패를 만들 수 있는지 시험해봤다. 성운의 망토는 내 한계에 도전한 기술이다."',
    onPlay: (u) => { u.block += 18; },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '방어도 24를 획득합니다.';
      c.onPlay = (u) => { u.block += 24; };
    },
  },

  {
    id: 'moons_blessing',
    name: '달의 축복',
    cost: 2,
    cardType: 'skill',
    rarity: 'uncommon',
    targetType: 'single',
    description: 'HP를 8 회복합니다.',
    originLore:
      '달의 치유 에너지를 몸 안으로 불러들여 상처를 회복하는 기술. 달빛이 상처를 닫아주는 느낌은 따뜻하고도 슬프다.',
    trivia:
      '치유의 날 일지 — "달이 나를 치유해줄 때, 달빛이 상처를 스치는 느낌이 들었다. 따뜻한데 울고 싶었다."',
    onPlay: (u) => { heal(u, 8); },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = 'HP를 12 회복합니다.';
      c.onPlay = (u) => { heal(u, 12); };
    },
  },

  {
    id: 'starlight_acceleration',
    name: '별빛 가속',
    cost: 0,
    cardType: 'skill',
    rarity: 'uncommon',
    targetType: 'single',
    description: '이번 턴 마나를 2 회복합니다.',
    originLore:
      '별빛의 속도를 빌려 이번 턴의 마법 흐름을 가속시키는 기술. 별빛은 우주에서 가장 빠르기 때문에, 그 에너지를 빌리면 순간적으로 흐름이 열린다.',
    trivia:
      '물리학 일지 — "빛의 속도를 생각했다. 빛처럼 빠르게 움직이면 시간이 느려진다고 했다. 이 기술은 그 반대 — 내 시간을 빠르게 만든다."',
    onPlay: (u) => { u.mana = Math.min(u.maxMana, u.mana + 2); },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '이번 턴 마나를 3 회복합니다.';
      c.onPlay = (u) => { u.mana = Math.min(u.maxMana, u.mana + 3); };
    },
  },

  {
    id: 'song_of_stars',
    name: '별의 노래',
    cost: 2,
    cardType: 'skill',
    rarity: 'uncommon',
    targetType: 'single',
    description: '카드 3장을 드로우합니다.',
    originLore:
      '고대 별빛 마법사들이 전해 내려온 성가(星歌). 별들의 이름을 읊으면 별빛이 응답하여 지식을 펼쳐 보인다. 루나는 이 노래를 부를 때만 목소리가 떨린다고 한다.',
    trivia:
      '성가 일지 — "처음 이 노래를 불렀을 때 별들이 내 주변에 모여드는 느낌이 들었다. 울지 않으려 했는데 눈물이 났다."',
    onPlay: (u) => { u.pendingDraw = (u.pendingDraw ?? 0) + 3; },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '카드 4장을 드로우합니다.';
      c.onPlay = (u) => { u.pendingDraw = (u.pendingDraw ?? 0) + 4; };
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  //  공격 — 희귀 (Rare Attack)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'supernova',
    name: '초신성',
    cost: 3,
    cardType: 'attack',
    rarity: 'rare',
    targetType: 'single',
    description: '20의 피해를 입힙니다.',
    originLore:
      '별이 죽으면서 만드는 초신성 폭발. 루나가 모든 별빛 에너지를 한 점으로 모아 발사하는 최강의 단일 공격. 이 기술을 쓰고 나면 루나는 한동안 별들이 슬프다고 느낀다.',
    trivia:
      '한계의 밤 일지 — "별 하나가 죽어서 이만큼의 빛이 나온다. 나는 그 별들을 빌려 싸운다. 빌린 빛으로 싸우는 것이 때로는 무겁다."',
    onPlay: (u, t) => applyDamage(t[0], 20, u),
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '26의 피해를 입힙니다.';
      c.onPlay = (u, t) => applyDamage(t[0], 26, u);
    },
  },

  {
    id: 'galaxy_shockwave',
    name: '은하 충격파',
    cost: 3,
    cardType: 'attack',
    rarity: 'rare',
    targetType: 'all',
    description: '모든 적에게 8의 피해를 입힙니다.',
    originLore:
      '은하계 전체를 흐르는 충격파를 모방하여 전장의 모든 적에게 동시에 피해를 주는 기술. 루나의 별빛 마법이 우주적 스케일로 확장된 순간.',
    trivia:
      '우주 관측 일지 — "은하의 충격파가 수만 광년을 달린다는 걸 배웠다. 내 버전은 겨우 몇 미터지만, 방향은 같다."',
    onPlay: (u, ts) => ts.forEach(t => applyDamage(t, 8, u)),
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '모든 적에게 12의 피해를 입힙니다.';
      c.onPlay = (u, ts) => ts.forEach(t => applyDamage(t, 12, u));
    },
  },

  {
    id: 'constellation_arrow',
    name: '성좌의 화살',
    cost: 2,
    cardType: 'attack',
    rarity: 'rare',
    targetType: 'single',
    description: '14의 피해를 입히고\n카드 1장을 드로우합니다.',
    originLore:
      '하늘의 성좌를 따라 그어지는 빛의 화살. 명중하는 순간 성좌의 지식이 루나에게 흘러들어온다.',
    trivia:
      '사수자리 아래 일지 — "화살이 목표에 닿을 때 성좌가 나에게 속삭이는 느낌이 든다. 지식은 승리 안에 있다."',
    onPlay: (u, t) => { applyDamage(t[0], 14, u); u.pendingDraw = (u.pendingDraw ?? 0) + 1; },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '18의 피해를 입히고\n카드 1장을 드로우합니다.';
      c.onPlay = (u, t) => { applyDamage(t[0], 18, u); u.pendingDraw = (u.pendingDraw ?? 0) + 1; };
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  //  스킬 — 희귀 (Rare Skill)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'time_reversal',
    name: '시간의 역행',
    cost: 3,
    cardType: 'skill',
    rarity: 'rare',
    targetType: 'single',
    description: '방어도 16을 획득하고\n힘 1을 얻습니다.',
    originLore:
      '별의 시간을 역행시켜 공격의 충격을 방어와 힘으로 전환하는 고급 마법. 성천원에 전해 내려오는 시간 마법의 기초 응용편으로, 루나가 아직 완전히 터득하지 못했다.',
    trivia:
      '시간 마법 일지 — "시간을 거슬러 가는 게 가능하다면, 그 힘을 방어에 쓰면 어떨까. 아직 불완전하지만, 언젠가는."',
    onPlay: (u) => { u.block += 16; addStatus(u, 'strength', 1); },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '방어도 22를 획득하고\n힘 2를 얻습니다.';
      c.onPlay = (u) => { u.block += 22; addStatus(u, 'strength', 2); };
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  //  파워 — 비범 (Uncommon Power)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'lunar_awakening',
    name: '루나 어웨이큰',
    cost: 2,
    cardType: 'power',
    rarity: 'uncommon',
    targetType: 'single',
    description: '힘 3을 영구 획득합니다.',
    originLore:
      '마법소녀로서의 루나가 진정으로 각성하는 순간. 달의 힘이 몸 안에서 완전히 깨어나 모든 공격에 영구적인 추가 피해를 부여한다. 각성은 한번뿐이며, 되돌릴 수 없다.',
    trivia:
      '각성의 날 일지 — "오늘 무언가가 달랐다. 검을 들었을 때 전과 다른 무게가 느껴졌다. 무거운 게 아니라 — 충만한 느낌이었다."',
    onPlay: (u) => { addStatus(u, 'strength', 3); },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '힘 5를 영구 획득합니다.';
      c.onPlay = (u) => { addStatus(u, 'strength', 5); };
    },
  },

  {
    id: 'star_aura',
    name: '별의 아우라',
    cost: 1,
    cardType: 'power',
    rarity: 'uncommon',
    targetType: 'single',
    description: '매 턴 시작 시\n방어도 4를 획득합니다.',
    originLore:
      '루나의 별빛 기운이 몸 밖으로 흘러나와 영구적인 수호의 빛으로 자리잡는 기술. 매 전투 턴마다 이 빛이 일정량의 방어도를 자동으로 제공한다.',
    trivia:
      '별빛 명상 일지 — "명상 중에 내 몸 주변에 빛이 남는 것을 느꼈다. 사라지지 않는 빛 — 이게 아우라인 걸까."',
    onPlay: (u) => { addStatus(u, 'starAura', 4); },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '매 턴 시작 시\n방어도 6을 획득합니다.';
      c.onPlay = (u) => { addStatus(u, 'starAura', 6); };
    },
  },

  {
    id: 'constellation_revelation',
    name: '성좌의 계시',
    cost: 1,
    cardType: 'power',
    rarity: 'uncommon',
    targetType: 'single',
    description: '매 턴 시작 시\n카드 1장을 추가 드로우합니다.',
    originLore:
      '하늘의 성좌가 루나에게 지식의 빛을 지속적으로 보내는 파워. 매 턴 별자리의 계시가 도착하여 루나의 손패를 넓혀준다.',
    trivia:
      '별자리 일지 — "오리온이 나를 보고 있는 것 같았다. 밤마다 새로운 것을 알려주는 것처럼."',
    onPlay: (u) => { addStatus(u, 'constellation', 1); },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '매 턴 시작 시\n카드 2장을 추가 드로우합니다.';
      c.onPlay = (u) => { addStatus(u, 'constellation', 2); };
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  //  파워 — 희귀 (Rare Power)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'moonlight_resonance',
    name: '달빛 공명',
    cost: 2,
    cardType: 'power',
    rarity: 'rare',
    targetType: 'single',
    description: '힘 5를 영구 획득합니다.',
    originLore:
      '루나의 내부 달빛과 외부 달의 공명이 일어나 모든 공격력이 크게 강화되는 현상. 달이 가장 크게 뜨는 보름달 밤에 루나가 우연히 발견했다.',
    trivia:
      '보름달의 밤 일지 — "달과 내가 같은 주파수로 진동하는 순간이 있었다. 그날 이후로 달빛은 더 이상 밖에만 있지 않다."',
    onPlay: (u) => { addStatus(u, 'strength', 5); },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '힘 7을 영구 획득합니다.';
      c.onPlay = (u) => { addStatus(u, 'strength', 7); };
    },
  },

  {
    id: 'silver_will',
    name: '은빛 의지',
    cost: 2,
    cardType: 'power',
    rarity: 'rare',
    targetType: 'single',
    description: '힘 2를 얻고\n매 턴 시작 시 방어도 3을 획득합니다.',
    originLore:
      '루나의 흔들리지 않는 의지 자체가 마법이 되는 순간. 별빛과 달빛이 동시에 깨어나 공격과 방어 양면에 영구적인 강화를 가져온다.',
    trivia:
      '의지의 일지 — "포기하려고 했다. 그런데 포기하는 나 자신이 싫었다. 그 순간 빛이 쏟아졌다."',
    onPlay: (u) => { addStatus(u, 'strength', 2); addStatus(u, 'starAura', 3); },
    upgrade: (c) => {
      c.upgraded = true;
      c.description = '힘 3을 얻고\n매 턴 시작 시 방어도 5를 획득합니다.';
      c.onPlay = (u) => { addStatus(u, 'strength', 3); addStatus(u, 'starAura', 5); };
    },
  },
];

// ── 스타터 덱 ID 목록 (런 시작 시 사용하는 10장) ────────────────────────────────

export const STARTER_DECK_IDS: string[] = [
  'silver_slash',       // ×3  — 기본 공격
  'silver_slash',
  'silver_slash',
  'moonlight_slash',    // ×2  — 조금 더 강한 공격
  'moonlight_slash',
  'starlight_barrier',  // ×3  — 기본 방어
  'starlight_barrier',
  'starlight_barrier',
  'moonlight_shield',   // ×2  — 더 두꺼운 방패
  'moonlight_shield',
];
