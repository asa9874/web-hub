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
  // ═══════════════════════════════════════════════════════════════════
  //  공격 — 일반 추가 (Common Attack — Extended)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'moon_cut',
    name: '달빛 절단',
    cost: 1,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '7의 피해를 입힙니다.',
    originLore: '달의 빛을 검날에 응집해 수평으로 쭉 그어내는 기본기. 루나가 초기 훈련에서 가장 많이 반복한 동작이다. 단순하지만 정확하다.',
    trivia: '수련 일지 — "천 번을 하면 저절로 나온다. 스승이 그랬다. 나는 오늘 천 한 번을 했다."',
    onPlay: (u, t) => applyDamage(t[0], 7, u),
    upgrade: (c) => { c.upgraded = true; c.description = '10의 피해를 입힙니다.'; c.onPlay = (u, t) => applyDamage(t[0], 10, u); },
  },

  {
    id: 'star_bolt',
    name: '별빛 화살',
    cost: 1,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '5의 피해를 입히고\n취약 1을 부여합니다.',
    originLore: '별빛 에너지를 화살 형태로 응집해 발사하는 마법. 명중하면 표적의 방어가 잠시 느슨해진다. 루나가 처음으로 상태이상을 응용한 기술이다.',
    trivia: '화살 수련 일지 — "빠르게 쏘는 것과 정확하게 쏘는 것. 오늘은 정확함을 골랐다."',
    onPlay: (u, t) => { applyDamage(t[0], 5, u); addStatus(t[0], 'vulnerable', 1); },
    upgrade: (c) => { c.upgraded = true; c.description = '7의 피해를 입히고\n취약 1을 부여합니다.'; c.onPlay = (u, t) => { applyDamage(t[0], 7, u); addStatus(t[0], 'vulnerable', 1); }; },
  },

  {
    id: 'lunar_kick',
    name: '달빛 발차기',
    cost: 0,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '4의 피해를 입힙니다.',
    originLore: '마나 없이도 쓸 수 있는 순수한 신체 기술. 달빛 에너지를 발끝에 아주 조금만 담아도 충분하다. 루나는 이 기술을 쓸 때 가장 자유롭다고 한다.',
    trivia: '신체 훈련 일지 — "마법이 없어도 싸울 수 있어야 한다. 몸이 먼저다."',
    onPlay: (u, t) => applyDamage(t[0], 4, u),
    upgrade: (c) => { c.upgraded = true; c.description = '6의 피해를 입힙니다.'; c.onPlay = (u, t) => applyDamage(t[0], 6, u); },
  },

  {
    id: 'crescent_slash',
    name: '초승달 참격',
    cost: 1,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '9의 피해를 입힙니다.',
    originLore: '초승달 모양으로 검을 휘두르는 한 번의 강격. 보름달보다 초승달이 더 날카롭다는 것을 루나는 이 기술을 만들면서 처음 이해했다.',
    trivia: '달 관측 일지 — "초승달은 얇고 날카롭다. 두껍지 않아서 더 위험하다."',
    onPlay: (u, t) => applyDamage(t[0], 9, u),
    upgrade: (c) => { c.upgraded = true; c.description = '13의 피해를 입힙니다.'; c.onPlay = (u, t) => applyDamage(t[0], 13, u); },
  },

  {
    id: 'shooting_star_strike',
    name: '별똥별',
    cost: 1,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '5의 피해를 2번 입힙니다.',
    originLore: '두 개의 유성이 같은 궤적으로 떨어지는 것을 모방한 연속 타격. 하나의 흔적이 다음 하나를 이끈다.',
    trivia: '유성우 관측 일지 — "두 유성이 나란히 떨어지는 것을 봤다. 같은 곳에서 왔을 텐데 왜 함께인지는 모른다."',
    onPlay: (u, t) => { applyDamage(t[0], 5, u); applyDamage(t[0], 5, u); },
    upgrade: (c) => { c.upgraded = true; c.description = '7의 피해를 2번 입힙니다.'; c.onPlay = (u, t) => { applyDamage(t[0], 7, u); applyDamage(t[0], 7, u); }; },
  },

  {
    id: 'light_arrow',
    name: '빛의 화살',
    cost: 1,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '6의 피해를 입히고\n카드 1장을 드로우합니다.',
    originLore: '순수한 빛 에너지를 화살로 응집해 발사하는 동시에, 그 빛의 흐름을 따라 다음 행동의 실마리를 잡는다.',
    trivia: '복합 훈련 일지 — "공격하면서 생각하는 것. 처음에는 불가능했다. 지금은 자연스럽다."',
    onPlay: (u, t) => { applyDamage(t[0], 6, u); u.pendingDraw = (u.pendingDraw ?? 0) + 1; },
    upgrade: (c) => { c.upgraded = true; c.description = '8의 피해를 입히고\n카드 1장을 드로우합니다.'; c.onPlay = (u, t) => { applyDamage(t[0], 8, u); u.pendingDraw = (u.pendingDraw ?? 0) + 1; }; },
  },

  {
    id: 'sparkle_hit',
    name: '반짝이는 일격',
    cost: 0,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '5의 피해를 입힙니다.',
    originLore: '작은 별 조각을 손가락 끝으로 튕겨내는 즉석 타격. 화려해 보이지만 실제로는 날카롭다. 루나의 비공식 기술이다.',
    trivia: '잡기술 일지 — "아무도 안 가르쳐준 건데 저절로 생겼다. 이게 진짜 내 기술이다."',
    onPlay: (u, t) => applyDamage(t[0], 5, u),
    upgrade: (c) => { c.upgraded = true; c.description = '8의 피해를 입힙니다.'; c.onPlay = (u, t) => applyDamage(t[0], 8, u); },
  },

  {
    id: 'dawn_strike',
    name: '여명의 일격',
    cost: 1,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '7의 피해를 입히고\n방어도 2를 획득합니다.',
    originLore: '새벽빛이 어둠을 물러나게 하듯, 공격과 동시에 자신을 보호하는 빛을 남기는 기술. 어둠이 가장 짙은 새벽 직전에 쓰기 가장 어울리는 기술이라 루나는 생각한다.',
    trivia: '새벽 훈련 일지 — "해가 뜨기 직전의 하늘이 제일 어둡다고 한다. 그런데 그 직후에 가장 밝아진다."',
    onPlay: (u, t) => { applyDamage(t[0], 7, u); u.block += 2; },
    upgrade: (c) => { c.upgraded = true; c.description = '10의 피해를 입히고\n방어도 3을 획득합니다.'; c.onPlay = (u, t) => { applyDamage(t[0], 10, u); u.block += 3; }; },
  },

  {
    id: 'star_pulse',
    name: '별빛 파동',
    cost: 2,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '11의 피해를 입힙니다.',
    originLore: '별빛 에너지를 파동 형태로 방출하는 강타. 코스트가 높은 만큼 일반 베기보다 확실한 충격을 가한다.',
    trivia: '에너지 제어 일지 — "한번에 많이 내보내면 반동이 온다. 파동은 그것을 전방으로만 집중시킨다."',
    onPlay: (u, t) => applyDamage(t[0], 11, u),
    upgrade: (c) => { c.upgraded = true; c.description = '15의 피해를 입힙니다.'; c.onPlay = (u, t) => applyDamage(t[0], 15, u); },
  },

  {
    id: 'moon_cleave',
    name: '달빛 가르기',
    cost: 2,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '14의 피해를 입힙니다.',
    originLore: '달빛을 검신에 최대한 담아 내려치는 강력한 단타. 루나가 소꿉친구 하루카와의 싸움을 떠올리며 개발했다. 온 힘을 담으면 된다.',
    trivia: '분노의 날 일지 — "화가 났다. 그 에너지를 검에 담았더니 지금까지 중에 가장 강한 타격이 나왔다."',
    onPlay: (u, t) => applyDamage(t[0], 14, u),
    upgrade: (c) => { c.upgraded = true; c.description = '20의 피해를 입힙니다.'; c.onPlay = (u, t) => applyDamage(t[0], 20, u); },
  },

  {
    id: 'stellar_jab',
    name: '별빛 찌르기',
    cost: 0,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '3의 피해를 입힙니다.',
    originLore: '검 끝에 최소한의 별빛만 담아 찌르는 기습 동작. 마나 소비 없이 쓸 수 있어 위기 상황에서 유용하다.',
    trivia: '절약 훈련 일지 — "적을 이기는 데 꼭 큰 힘이 필요한 건 아니다. 빈틈을 찌르면 된다."',
    onPlay: (u, t) => applyDamage(t[0], 3, u),
    upgrade: (c) => { c.upgraded = true; c.description = '5의 피해를 입힙니다.'; c.onPlay = (u, t) => applyDamage(t[0], 5, u); },
  },

  {
    id: 'star_pierce',
    name: '별빛 관통',
    cost: 1,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '10의 피해를 입힙니다.',
    originLore: '빛의 속도로 직진하는 관통 타격. 방어도가 두꺼운 적에게 특히 효과적이다. 루나가 기사단장 케인과 싸우며 필요를 느껴 개발했다.',
    trivia: '철갑 연구 일지 — "두꺼운 갑옷은 막는다. 하지만 빠르고 좁게 들어가면 막을 수 없다."',
    onPlay: (u, t) => applyDamage(t[0], 10, u),
    upgrade: (c) => { c.upgraded = true; c.description = '14의 피해를 입힙니다.'; c.onPlay = (u, t) => applyDamage(t[0], 14, u); },
  },

  {
    id: 'moonbeam',
    name: '달빛 광선',
    cost: 1,
    cardType: 'attack',
    rarity: 'common',
    targetType: 'single',
    description: '6의 피해를 입히고\n약화 1을 부여합니다.',
    originLore: '달빛 에너지를 광선 형태로 압축해 발사한다. 닿은 자리에서 빛이 퍼지며 상대의 공격력을 일시적으로 약화시킨다.',
    trivia: '광선 실험 일지 — "빛은 직진하지만 닿으면 퍼진다. 퍼지는 그 순간에 효과가 있다."',
    onPlay: (u, t) => { applyDamage(t[0], 6, u); addStatus(t[0], 'weak', 1); },
    upgrade: (c) => { c.upgraded = true; c.description = '9의 피해를 입히고\n약화 1을 부여합니다.'; c.onPlay = (u, t) => { applyDamage(t[0], 9, u); addStatus(t[0], 'weak', 1); }; },
  },

  // ═══════════════════════════════════════════════════════════════════
  //  스킬 — 일반 추가 (Common Skill — Extended)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'quick_guard',
    name: '빠른 수비',
    cost: 0,
    cardType: 'skill',
    rarity: 'common',
    targetType: 'single',
    description: '방어도 3을 획득합니다.',
    originLore: '마나 없이도 즉각 발동할 수 있는 순간 방어 기술. 반사신경만으로 쳐올리는 방어막이라, 완벽하지 않아도 쓸 수 있다.',
    trivia: '반사 훈련 일지 — "생각보다 몸이 먼저 반응했다. 그 순간을 기술로 만들었다."',
    onPlay: (u) => { u.block += 3; },
    upgrade: (c) => { c.upgraded = true; c.description = '5의 방어도를 획득합니다.'; c.onPlay = (u) => { u.block += 5; }; },
  },

  {
    id: 'lunar_heal',
    name: '달빛 치유',
    cost: 1,
    cardType: 'skill',
    rarity: 'common',
    targetType: 'single',
    description: 'HP를 4 회복합니다.',
    originLore: '달의 온화한 에너지를 상처 위에 흘려보내는 기초 치유 기술. 크지는 않지만 확실하다.',
    trivia: '치유 수련 일지 — "달은 상처를 닫아준다. 처음 성공했을 때 따뜻한 느낌이 들었다."',
    onPlay: (u) => { heal(u, 4); },
    upgrade: (c) => { c.upgraded = true; c.description = 'HP를 7 회복합니다.'; c.onPlay = (u) => { heal(u, 7); }; },
  },

  {
    id: 'starlit_step',
    name: '별빛 발걸음',
    cost: 1,
    cardType: 'skill',
    rarity: 'common',
    targetType: 'single',
    description: '방어도 3을 획득하고\n카드 1장을 드로우합니다.',
    originLore: '별빛 궤도를 따라 한 발 물러서며 방어 자세를 취하고, 그 흐름 속에서 다음 선택지를 읽는 기술.',
    trivia: '이동 수련 일지 — "물러서는 것도 기술이다. 제자리에 있는 것보다 낫다."',
    onPlay: (u) => { u.block += 3; u.pendingDraw = (u.pendingDraw ?? 0) + 1; },
    upgrade: (c) => { c.upgraded = true; c.description = '방어도 5를 획득하고\n카드 1장을 드로우합니다.'; c.onPlay = (u) => { u.block += 5; u.pendingDraw = (u.pendingDraw ?? 0) + 1; }; },
  },

  {
    id: 'moon_veil',
    name: '달의 베일',
    cost: 1,
    cardType: 'skill',
    rarity: 'common',
    targetType: 'single',
    description: '방어도 7을 획득합니다.',
    originLore: '달의 은빛 에너지를 얇고 넓게 펼쳐 몸 전체를 감싸는 방어막. 보름달이 아닌 달빛이 더 넓게 퍼진다.',
    trivia: '달빛 명상 일지 — "달빛을 얇게 펴면 더 넓게 퍼진다. 방어도 마찬가지다."',
    onPlay: (u) => { u.block += 7; },
    upgrade: (c) => { c.upgraded = true; c.description = '방어도 10을 획득합니다.'; c.onPlay = (u) => { u.block += 10; }; },
  },

  {
    id: 'dust_ward',
    name: '별가루 수호',
    cost: 1,
    cardType: 'skill',
    rarity: 'common',
    targetType: 'single',
    description: '방어도 5를 획득합니다.',
    originLore: '작은 별가루 입자들을 모아 방어막을 형성하는 기술. 하나하나는 미약하지만 모이면 단단하다.',
    trivia: '입자 연구 일지 — "먼지도 모이면 산이 된다. 별가루도 마찬가지다."',
    onPlay: (u) => { u.block += 5; },
    upgrade: (c) => { c.upgraded = true; c.description = '방어도 8을 획득합니다.'; c.onPlay = (u) => { u.block += 8; }; },
  },

  {
    id: 'star_meditate',
    name: '별빛 명상',
    cost: 2,
    cardType: 'skill',
    rarity: 'common',
    targetType: 'single',
    description: 'HP를 6 회복하고\n카드 2장을 드로우합니다.',
    originLore: '별들의 에너지와 함께 깊은 호흡을 하며 상처를 회복하고 전황을 읽는 기술. 전투 중 사용하기는 어렵지만, 그만큼 강력하다.',
    trivia: '명상 수련 일지 — "고요함 속에서 가장 많은 것이 보인다."',
    onPlay: (u) => { heal(u, 6); u.pendingDraw = (u.pendingDraw ?? 0) + 2; },
    upgrade: (c) => { c.upgraded = true; c.description = 'HP를 9 회복하고\n카드 2장을 드로우합니다.'; c.onPlay = (u) => { heal(u, 9); u.pendingDraw = (u.pendingDraw ?? 0) + 2; }; },
  },

  {
    id: 'energy_cycle',
    name: '에너지 환류',
    cost: 0,
    cardType: 'skill',
    rarity: 'common',
    targetType: 'single',
    description: '마나를 1 회복합니다.',
    originLore: '사용한 에너지를 순환시켜 일부를 되돌려받는 기술. 아무것도 완전히 사라지지 않는다는 에너지 법칙의 응용.',
    trivia: '에너지 연구 일지 — "에너지는 사라지지 않고 변환된다. 그렇다면 되돌릴 수도 있다."',
    onPlay: (u) => { u.mana = Math.min(u.maxMana, u.mana + 1); },
    upgrade: (c) => { c.upgraded = true; c.description = '마나를 2 회복합니다.'; c.onPlay = (u) => { u.mana = Math.min(u.maxMana, u.mana + 2); }; },
  },

  {
    id: 'dodge_step',
    name: '회피 발걸음',
    cost: 0,
    cardType: 'skill',
    rarity: 'common',
    targetType: 'single',
    description: '방어도 4를 획득합니다.',
    originLore: '한 발 옆으로 빠지며 다음 공격을 예측하는 동작. 마나 없이 쓸 수 있는 순수한 몸의 기술이다.',
    trivia: '발 훈련 일지 — "발이 먼저 반응해야 한다. 생각이 따라잡는다."',
    onPlay: (u) => { u.block += 4; },
    upgrade: (c) => { c.upgraded = true; c.description = '방어도 6을 획득합니다.'; c.onPlay = (u) => { u.block += 6; }; },
  },

  {
    id: 'shield_form',
    name: '방어 자세',
    cost: 1,
    cardType: 'skill',
    rarity: 'common',
    targetType: 'single',
    description: '방어도 8을 획득합니다.',
    originLore: '전신의 별빛 에너지를 방어 형태로 집중시키는 자세. 공격을 완전히 포기한 대신 단단한 방어를 얻는다.',
    trivia: '방어 특훈 일지 — "오늘은 공격이 아니라 버티는 연습을 했다. 지지 않는 것도 이기는 것이다."',
    onPlay: (u) => { u.block += 8; },
    upgrade: (c) => { c.upgraded = true; c.description = '방어도 12를 획득합니다.'; c.onPlay = (u) => { u.block += 12; }; },
  },

  {
    id: 'starlight_touch',
    name: '별빛 손길',
    cost: 1,
    cardType: 'skill',
    rarity: 'common',
    targetType: 'single',
    description: 'HP를 3 회복하고\n방어도 3을 획득합니다.',
    originLore: '별빛을 손바닥에 담아 상처를 어루만지는 동시에 방어막을 형성하는 복합 기술. 섬세하고 조용하다.',
    trivia: '섬세함의 날 일지 — "강한 것만이 기술이 아니다. 이것은 부드러운 기술이다."',
    onPlay: (u) => { heal(u, 3); u.block += 3; },
    upgrade: (c) => { c.upgraded = true; c.description = 'HP를 5 회복하고\n방어도 5를 획득합니다.'; c.onPlay = (u) => { heal(u, 5); u.block += 5; }; },
  },

  // ═══════════════════════════════════════════════════════════════════
  //  파워 — 일반 (Common Power)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'moon_glow',
    name: '달빛 광채',
    cost: 1,
    cardType: 'power',
    rarity: 'common',
    targetType: 'single',
    description: '매 턴 시작 시\n방어도 2를 획득합니다.',
    originLore: '달빛이 항상 은은하게 존재하듯, 루나의 몸에 달빛 광채가 자리잡아 매 순간 소량의 방어막을 만들어낸다.',
    trivia: '달빛 수련 일지 — "강한 방어막 하나보다 꾸준한 작은 방어막이 더 믿음직스럽다."',
    onPlay: (u) => { addStatus(u, 'starAura', 2); },
    upgrade: (c) => { c.upgraded = true; c.description = '매 턴 시작 시\n방어도 3을 획득합니다.'; c.onPlay = (u) => { addStatus(u, 'starAura', 3); }; },
  },

  {
    id: 'star_resolve',
    name: '별빛 결의',
    cost: 2,
    cardType: 'power',
    rarity: 'common',
    targetType: 'single',
    description: '힘 2를 영구 획득합니다.',
    originLore: '하루카를 구하겠다는 루나의 결의가 별빛 에너지로 굳어지는 순간. 작은 힘이지만 영원하다.',
    trivia: '결의 일지 — "결심을 입 밖으로 내면 돌이킬 수 없다. 그래서 이 기술은 영구적이다."',
    onPlay: (u) => { addStatus(u, 'strength', 2); },
    upgrade: (c) => { c.upgraded = true; c.description = '힘 3을 영구 획득합니다.'; c.onPlay = (u) => { addStatus(u, 'strength', 3); }; },
  },

  {
    id: 'nebula_heart',
    name: '성운 심장',
    cost: 1,
    cardType: 'power',
    rarity: 'common',
    targetType: 'single',
    description: '매 턴 시작 시\n방어도 1을 획득하고 카드 1장을 드로우합니다.',
    originLore: '성운의 에너지를 심장 가까이 품어 매 순간 방어와 통찰이 동시에 흘러나오게 하는 파워.',
    trivia: '성운 관측 일지 — "성운은 별을 낳는 곳이다. 내 심장도 그런 곳이 될 수 있을까."',
    onPlay: (u) => { addStatus(u, 'starAura', 1); addStatus(u, 'constellation', 1); },
    upgrade: (c) => { c.upgraded = true; c.description = '매 턴 시작 시\n방어도 2를 획득하고 카드 1장을 드로우합니다.'; c.onPlay = (u) => { addStatus(u, 'starAura', 2); addStatus(u, 'constellation', 1); }; },
  },

  {
    id: 'lunar_core',
    name: '달빛 핵',
    cost: 2,
    cardType: 'power',
    rarity: 'common',
    targetType: 'single',
    description: '힘 1을 얻고\n매 턴 시작 시 방어도 2를 획득합니다.',
    originLore: '달빛 에너지의 핵을 몸 내부에 자리잡히는 기술. 공격과 방어 양면에 영구적인 작은 강화를 제공한다.',
    trivia: '핵 형성 일지 — "작은 핵 하나가 별 하나를 밝힌다. 내 안에도 그런 핵이 있다."',
    onPlay: (u) => { addStatus(u, 'strength', 1); addStatus(u, 'starAura', 2); },
    upgrade: (c) => { c.upgraded = true; c.description = '힘 2를 얻고\n매 턴 시작 시 방어도 3을 획득합니다.'; c.onPlay = (u) => { addStatus(u, 'strength', 2); addStatus(u, 'starAura', 3); }; },
  },

  {
    id: 'minor_star',
    name: '작은 별',
    cost: 1,
    cardType: 'power',
    rarity: 'common',
    targetType: 'single',
    description: '힘 1을 영구 획득하고\n매 턴 시작 시 방어도 1을 획득합니다.',
    originLore: '우주에서 가장 작은 별도 빛을 발한다. 루나는 이 기술을 만들며 작은 것들의 의미를 다시 생각했다.',
    trivia: '소성 관측 일지 — "눈에 잘 안 보이는 별이 가장 많다. 그것들이 모여 은하수가 된다."',
    onPlay: (u) => { addStatus(u, 'strength', 1); addStatus(u, 'starAura', 1); },
    upgrade: (c) => { c.upgraded = true; c.description = '힘 2를 영구 획득하고\n매 턴 시작 시 방어도 2를 획득합니다.'; c.onPlay = (u) => { addStatus(u, 'strength', 2); addStatus(u, 'starAura', 2); }; },
  },

  // ═══════════════════════════════════════════════════════════════════
  //  공격 — 비범 추가 (Uncommon Attack — Extended)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'celestial_spear',
    name: '천상의 창',
    cost: 2,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'single',
    description: '16의 피해를 입힙니다.',
    originLore: '하늘에서 떨어지는 창처럼 일직선으로 내리꽂는 강타. 성천원에 도달했을 때의 분위기를 상상하며 루나가 개발한 기술이다.',
    trivia: '창격 연구 일지 — "창은 휘지 않는다. 그것이 창의 강함이다."',
    onPlay: (u, t) => applyDamage(t[0], 16, u),
    upgrade: (c) => { c.upgraded = true; c.description = '22의 피해를 입힙니다.'; c.onPlay = (u, t) => applyDamage(t[0], 22, u); },
  },

  {
    id: 'eclipse_strike',
    name: '일식 강타',
    cost: 2,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'single',
    description: '14의 피해를 입히고\n힘 1을 얻습니다.',
    originLore: '달이 태양을 가리는 순간의 에너지를 담은 공격. 충격과 동시에 자신이 강해진다. 일식처럼 짧고 강렬하다.',
    trivia: '일식 관측 일지 — "달이 태양보다 크게 보인다. 위치의 문제다. 위치가 모든 걸 바꾼다."',
    onPlay: (u, t) => { applyDamage(t[0], 14, u); addStatus(u, 'strength', 1); },
    upgrade: (c) => { c.upgraded = true; c.description = '18의 피해를 입히고\n힘 1을 얻습니다.'; c.onPlay = (u, t) => { applyDamage(t[0], 18, u); addStatus(u, 'strength', 1); }; },
  },

  {
    id: 'pulsar_volley',
    name: '펄서 연사',
    cost: 2,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'single',
    description: '5의 피해를 3번 입힙니다.',
    originLore: '펄서처럼 규칙적인 간격으로 에너지 파동을 연속 발사하는 기술. 리듬이 일정해야 효과가 최대로 발휘된다.',
    trivia: '리듬 연습 일지 — "규칙적인 것이 불규칙적인 것보다 강하다. 예측 가능한 것이 더 빠르다."',
    onPlay: (u, t) => { applyDamage(t[0], 5, u); applyDamage(t[0], 5, u); applyDamage(t[0], 5, u); },
    upgrade: (c) => { c.upgraded = true; c.description = '7의 피해를 3번 입힙니다.'; c.onPlay = (u, t) => { applyDamage(t[0], 7, u); applyDamage(t[0], 7, u); applyDamage(t[0], 7, u); }; },
  },

  {
    id: 'nova_fist',
    name: '노바 주먹',
    cost: 1,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'single',
    description: '10의 피해를 입힙니다.',
    originLore: '별빛 에너지를 주먹에 담아 근거리에서 폭발시키는 충격 기술. 원거리 기술이 많은 루나가 의외로 아끼는 근거리 기술이다.',
    trivia: '근거리 훈련 일지 — "가까이 있어야 닿는 공격이 더 확실하다고 스승이 말했다."',
    onPlay: (u, t) => applyDamage(t[0], 10, u),
    upgrade: (c) => { c.upgraded = true; c.description = '14의 피해를 입힙니다.'; c.onPlay = (u, t) => applyDamage(t[0], 14, u); },
  },

  {
    id: 'comet_impact',
    name: '혜성 충돌',
    cost: 2,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'single',
    description: '10의 피해를 입히고\n방어도 6을 획득합니다.',
    originLore: '혜성이 표면에 충돌할 때 폭발의 반동으로 먼지 방어막이 형성되는 원리를 응용했다. 공격의 반동을 방어로 전환한다.',
    trivia: '혜성 연구 일지 — "충돌의 에너지가 분산된다. 일부는 앞으로, 일부는 뒤로. 뒤로 가는 것을 막으면 방어가 된다."',
    onPlay: (u, t) => { applyDamage(t[0], 10, u); u.block += 6; },
    upgrade: (c) => { c.upgraded = true; c.description = '13의 피해를 입히고\n방어도 8을 획득합니다.'; c.onPlay = (u, t) => { applyDamage(t[0], 13, u); u.block += 8; }; },
  },

  {
    id: 'star_rain',
    name: '별비',
    cost: 1,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'all',
    description: '모든 적에게 4의 피해를 입힙니다.',
    originLore: '하늘에서 별이 비처럼 쏟아지는 것처럼, 루나가 별빛 파편들을 광범위하게 뿌리는 공격. 낮은 위력이지만 전장 전체를 덮는다.',
    trivia: '산개 훈련 일지 — "넓게 뿌리는 것과 좁게 집중하는 것 중 선택해야 할 때가 있다."',
    onPlay: (u, ts) => ts.forEach(t => applyDamage(t, 4, u)),
    upgrade: (c) => { c.upgraded = true; c.description = '모든 적에게 6의 피해를 입힙니다.'; c.onPlay = (u, ts) => ts.forEach(t => applyDamage(t, 6, u)); },
  },

  {
    id: 'void_slash',
    name: '공허 베기',
    cost: 2,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'single',
    description: '20의 피해를 입힙니다.',
    originLore: '공허의 에너지를 검에 담아 단번에 내려치는 강격. 별빛 탑에서 공허와 접촉한 이후 루나가 개발한 역설적인 기술이다.',
    trivia: '공허 일지 — "아무것도 없는 에너지. 그런데 그게 제일 강했다."',
    onPlay: (u, t) => applyDamage(t[0], 20, u),
    upgrade: (c) => { c.upgraded = true; c.description = '28의 피해를 입힙니다.'; c.onPlay = (u, t) => applyDamage(t[0], 28, u); },
  },

  {
    id: 'moonbow_arrow',
    name: '달빛 활격',
    cost: 2,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'single',
    description: '12의 피해를 입히고\n독 2를 부여합니다.',
    originLore: '달빛을 활시위에 담아 독이 스민 화살을 발사하는 복합 기술. 독은 달빛 에너지가 공허와 혼합되면서 자연스럽게 생성된다.',
    trivia: '독 연구 일지 — "달빛이 어둠과 섞이면 독이 된다. 그 독은 내가 제어할 수 있다."',
    onPlay: (u, t) => { applyDamage(t[0], 12, u); addStatus(t[0], 'poison', 2); },
    upgrade: (c) => { c.upgraded = true; c.description = '16의 피해를 입히고\n독 2를 부여합니다.'; c.onPlay = (u, t) => { applyDamage(t[0], 16, u); addStatus(t[0], 'poison', 2); }; },
  },

  {
    id: 'twin_crescent',
    name: '쌍초승달',
    cost: 1,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'single',
    description: '6의 피해를 2번 입힙니다.',
    originLore: '두 개의 초승달을 그리는 교차 참격. 각 타격이 서로 다른 각도에서 들어와 방어가 어렵다.',
    trivia: '교차 훈련 일지 — "같은 방향에서 두 번 오면 막힌다. 다른 방향에서 오면 막기 어렵다."',
    onPlay: (u, t) => { applyDamage(t[0], 6, u); applyDamage(t[0], 6, u); },
    upgrade: (c) => { c.upgraded = true; c.description = '8의 피해를 2번 입힙니다.'; c.onPlay = (u, t) => { applyDamage(t[0], 8, u); applyDamage(t[0], 8, u); }; },
  },

  {
    id: 'stellar_pierce',
    name: '성체 관통',
    cost: 2,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'single',
    description: '18의 피해를 입히고\n취약 1을 부여합니다.',
    originLore: '별빛 에너지를 극도로 집중시켜 관통력을 극대화한 기술. 명중한 자리에서 취약점이 드러난다.',
    trivia: '집중 훈련 일지 — "넓게 퍼지는 것과 좁게 집중하는 것. 오늘은 집중을 선택했다."',
    onPlay: (u, t) => { applyDamage(t[0], 18, u); addStatus(t[0], 'vulnerable', 1); },
    upgrade: (c) => { c.upgraded = true; c.description = '24의 피해를 입히고\n취약 1을 부여합니다.'; c.onPlay = (u, t) => { applyDamage(t[0], 24, u); addStatus(t[0], 'vulnerable', 1); }; },
  },

  {
    id: 'moon_spiral',
    name: '달빛 나선',
    cost: 2,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'single',
    description: '4의 피해를 4번 입힙니다.',
    originLore: '달빛 에너지를 나선형으로 감아 연속 타격하는 기술. 나선이 조여들수록 충격이 축적된다.',
    trivia: '나선 연구 일지 — "나선은 중심으로 갈수록 힘이 모인다. 네 번째 타격이 가장 강한 이유다."',
    onPlay: (u, t) => { for (let i = 0; i < 4; i++) applyDamage(t[0], 4, u); },
    upgrade: (c) => { c.upgraded = true; c.description = '6의 피해를 4번 입힙니다.'; c.onPlay = (u, t) => { for (let i = 0; i < 4; i++) applyDamage(t[0], 6, u); }; },
  },

  {
    id: 'dark_pulse',
    name: '어둠 파동',
    cost: 1,
    cardType: 'attack',
    rarity: 'uncommon',
    targetType: 'single',
    description: '8의 피해를 입히고\n약화 2를 부여합니다.',
    originLore: '공허와 접촉하며 터득한 어둠 에너지 응용 기술. 루나는 이 기술을 쓸 때마다 조금 불편하다고 한다.',
    trivia: '어둠 일지 — "내가 싫어하는 에너지를 쓰는 것. 하지만 도구는 도구다."',
    onPlay: (u, t) => { applyDamage(t[0], 8, u); addStatus(t[0], 'weak', 2); },
    upgrade: (c) => { c.upgraded = true; c.description = '11의 피해를 입히고\n약화 2를 부여합니다.'; c.onPlay = (u, t) => { applyDamage(t[0], 11, u); addStatus(t[0], 'weak', 2); }; },
  },

  // ═══════════════════════════════════════════════════════════════════
  //  스킬 — 비범 추가 (Uncommon Skill — Extended)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'astral_wall',
    name: '성진 방벽',
    cost: 2,
    cardType: 'skill',
    rarity: 'uncommon',
    targetType: 'single',
    description: '방어도 16을 획득합니다.',
    originLore: '성운 숲에서 배운 성진 에너지로 두꺼운 방벽을 형성하는 기술. 하나의 두터운 벽이 모든 것을 막는다.',
    trivia: '방벽 수련 일지 — "성운의 에너지는 방어에 특화되어 있다. 그것을 이용하지 않을 이유가 없다."',
    onPlay: (u) => { u.block += 16; },
    upgrade: (c) => { c.upgraded = true; c.description = '방어도 22를 획득합니다.'; c.onPlay = (u) => { u.block += 22; }; },
  },

  {
    id: 'lunar_vortex',
    name: '달빛 소용돌이',
    cost: 2,
    cardType: 'skill',
    rarity: 'uncommon',
    targetType: 'all',
    description: '방어도 8을 획득하고\n모든 적에게 약화 2를 부여합니다.',
    originLore: '달빛 에너지를 소용돌이 형태로 방출하여 자신을 보호하는 동시에 주변 적들의 공격력을 약화시킨다.',
    trivia: '소용돌이 연구 일지 — "빙글빙글 도는 것이 방어도 되고 공격도 된다."',
    onPlay: (u, ts) => { u.block += 8; ts.forEach(t => addStatus(t, 'weak', 2)); },
    upgrade: (c) => { c.upgraded = true; c.description = '방어도 12를 획득하고\n모든 적에게 약화 2를 부여합니다.'; c.onPlay = (u, ts) => { u.block += 12; ts.forEach(t => addStatus(t, 'weak', 2)); }; },
  },

  {
    id: 'star_mend',
    name: '별빛 치유',
    cost: 1,
    cardType: 'skill',
    rarity: 'uncommon',
    targetType: 'single',
    description: 'HP를 6 회복하고\n카드 1장을 드로우합니다.',
    originLore: '별빛 에너지의 치유 속성을 활용해 상처를 회복하면서 동시에 다음 행동의 실마리를 잡는 기술.',
    trivia: '치유 연구 일지 — "몸이 나아지면 마음도 맑아진다. 그래서 치유하면 다음이 보인다."',
    onPlay: (u) => { heal(u, 6); u.pendingDraw = (u.pendingDraw ?? 0) + 1; },
    upgrade: (c) => { c.upgraded = true; c.description = 'HP를 9 회복하고\n카드 1장을 드로우합니다.'; c.onPlay = (u) => { heal(u, 9); u.pendingDraw = (u.pendingDraw ?? 0) + 1; }; },
  },

  {
    id: 'constellation_wisdom',
    name: '성좌 지혜',
    cost: 1,
    cardType: 'skill',
    rarity: 'uncommon',
    targetType: 'single',
    description: '카드 2장을 드로우하고\n방어도 2를 획득합니다.',
    originLore: '하늘의 성좌로부터 전술적 통찰을 얻으면서 동시에 방어 에너지를 부수적으로 생성하는 기술.',
    trivia: '성좌 일지 — "별자리가 다음에 일어날 일을 알려준다고 한다. 나는 그것을 전투에 적용했다."',
    onPlay: (u) => { u.pendingDraw = (u.pendingDraw ?? 0) + 2; u.block += 2; },
    upgrade: (c) => { c.upgraded = true; c.description = '카드 3장을 드로우하고\n방어도 3을 획득합니다.'; c.onPlay = (u) => { u.pendingDraw = (u.pendingDraw ?? 0) + 3; u.block += 3; }; },
  },

  {
    id: 'moonrise',
    name: '달뜨기',
    cost: 1,
    cardType: 'skill',
    rarity: 'uncommon',
    targetType: 'single',
    description: '힘 1을 얻고\n방어도 5를 획득합니다.',
    originLore: '달이 지평선 위로 솟아오르는 순간처럼, 공격력과 방어력이 동시에 솟구치는 기술. 전환점이 필요할 때 쓴다.',
    trivia: '달뜨기 일지 — "달이 뜨는 순간 밤이 시작된다. 내 전투도 그 순간부터 달라진다."',
    onPlay: (u) => { addStatus(u, 'strength', 1); u.block += 5; },
    upgrade: (c) => { c.upgraded = true; c.description = '힘 2를 얻고\n방어도 7을 획득합니다.'; c.onPlay = (u) => { addStatus(u, 'strength', 2); u.block += 7; }; },
  },

  {
    id: 'stellar_ward',
    name: '성체 수호',
    cost: 2,
    cardType: 'skill',
    rarity: 'uncommon',
    targetType: 'single',
    description: '방어도 14를 획득합니다.',
    originLore: '별의 에너지를 몸 전체에 두르는 수호 기술. 별의 첨탑에서 적대적 에너지로 가득 찬 환경에서 생존하기 위해 개발했다.',
    trivia: '탑 생존 일지 — "탑 안에서는 모든 것이 공격이었다. 버티는 것이 전략이었다."',
    onPlay: (u) => { u.block += 14; },
    upgrade: (c) => { c.upgraded = true; c.description = '방어도 20을 획득합니다.'; c.onPlay = (u) => { u.block += 20; }; },
  },

  {
    id: 'cosmos_heal',
    name: '우주 호흡',
    cost: 1,
    cardType: 'skill',
    rarity: 'uncommon',
    targetType: 'single',
    description: 'HP를 5 회복하고\n마나를 1 회복합니다.',
    originLore: '우주의 에너지를 호흡하여 상처를 회복하면서 마법의 흐름을 되살리는 기술. 성천원에서 처음으로 완성했다.',
    trivia: '우주 명상 일지 — "우주는 숨을 쉰다. 그 리듬을 따라 하면 회복이 된다."',
    onPlay: (u) => { heal(u, 5); u.mana = Math.min(u.maxMana, u.mana + 1); },
    upgrade: (c) => { c.upgraded = true; c.description = 'HP를 8 회복하고\n마나를 1 회복합니다.'; c.onPlay = (u) => { heal(u, 8); u.mana = Math.min(u.maxMana, u.mana + 1); }; },
  },

  {
    id: 'battle_meditation',
    name: '전투 명상',
    cost: 1,
    cardType: 'skill',
    rarity: 'uncommon',
    targetType: 'single',
    description: '방어도 6을 획득하고\n힘 1을 얻습니다.',
    originLore: '전투 중 순간적으로 마음을 비워 별빛 에너지의 흐름에 집중하는 기술. 공격력과 방어력이 동시에 올라간다.',
    trivia: '전투 중 명상 일지 — "싸우면서 생각하지 않는 법. 그것이 가장 어렵고 가장 효과적이다."',
    onPlay: (u) => { u.block += 6; addStatus(u, 'strength', 1); },
    upgrade: (c) => { c.upgraded = true; c.description = '방어도 9를 획득하고\n힘 2를 얻습니다.'; c.onPlay = (u) => { u.block += 9; addStatus(u, 'strength', 2); }; },
  },

  {
    id: 'star_pulse_guard',
    name: '성진 파동',
    cost: 2,
    cardType: 'skill',
    rarity: 'uncommon',
    targetType: 'single',
    description: '방어도 12를 획득하고\n카드 1장을 드로우합니다.',
    originLore: '성운 에너지의 파동으로 방어막을 형성하는 동시에 파동의 흐름에서 다음 행동의 단서를 읽는 기술.',
    trivia: '파동 연구 일지 — "파동은 퍼지면서 정보도 가져온다. 방어하면서 볼 수 있다."',
    onPlay: (u) => { u.block += 12; u.pendingDraw = (u.pendingDraw ?? 0) + 1; },
    upgrade: (c) => { c.upgraded = true; c.description = '방어도 16을 획득하고\n카드 1장을 드로우합니다.'; c.onPlay = (u) => { u.block += 16; u.pendingDraw = (u.pendingDraw ?? 0) + 1; }; },
  },

  {
    id: 'silver_echo',
    name: '은빛 메아리',
    cost: 0,
    cardType: 'skill',
    rarity: 'uncommon',
    targetType: 'single',
    description: '카드 1장을 드로우하고\n방어도 3을 획득합니다.',
    originLore: '은빛 에너지의 메아리를 통해 다음 행동을 읽으면서 소량의 방어도를 얻는다. 마나 없이 쓸 수 있는 복합 기술이다.',
    trivia: '메아리 연구 일지 — "메아리는 돌아온다. 내가 보낸 에너지도 돌아온다."',
    onPlay: (u) => { u.pendingDraw = (u.pendingDraw ?? 0) + 1; u.block += 3; },
    upgrade: (c) => { c.upgraded = true; c.description = '카드 1장을 드로우하고\n방어도 5를 획득합니다.'; c.onPlay = (u) => { u.pendingDraw = (u.pendingDraw ?? 0) + 1; u.block += 5; }; },
  },

  // ═══════════════════════════════════════════════════════════════════
  //  파워 — 비범 추가 (Uncommon Power — Extended)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'star_fury',
    name: '별빛 분노',
    cost: 2,
    cardType: 'power',
    rarity: 'uncommon',
    targetType: 'single',
    description: '힘 2를 얻고\n매 턴 시작 시 방어도 2를 획득합니다.',
    originLore: '하루카를 향한 분노와 걱정이 별빛 에너지로 굳어지는 파워. 공격력과 방어력이 동시에 영구 강화된다.',
    trivia: '분노의 날 일지 — "분노를 억누르는 대신 에너지로 만들었다. 이것이 더 건강하다고 생각한다."',
    onPlay: (u) => { addStatus(u, 'strength', 2); addStatus(u, 'starAura', 2); },
    upgrade: (c) => { c.upgraded = true; c.description = '힘 3을 얻고\n매 턴 시작 시 방어도 3을 획득합니다.'; c.onPlay = (u) => { addStatus(u, 'strength', 3); addStatus(u, 'starAura', 3); }; },
  },

  {
    id: 'moon_grace',
    name: '달의 은총',
    cost: 2,
    cardType: 'power',
    rarity: 'uncommon',
    targetType: 'single',
    description: '매 턴 시작 시\n방어도 2를 획득하고 카드 1장을 드로우합니다.',
    originLore: '달의 은총이 루나에게 매 순간 방어와 지혜를 부여하는 파워. 루미아가 루나에게 주는 축복과도 비슷하다.',
    trivia: '축복 일지 — "달은 항상 같은 곳에 있다. 그리고 항상 빛난다. 그것이 은총이다."',
    onPlay: (u) => { addStatus(u, 'starAura', 2); addStatus(u, 'constellation', 1); },
    upgrade: (c) => { c.upgraded = true; c.description = '매 턴 시작 시\n방어도 3을 획득하고 카드 1장을 드로우합니다.'; c.onPlay = (u) => { addStatus(u, 'starAura', 3); addStatus(u, 'constellation', 1); }; },
  },

  {
    id: 'nebula_form',
    name: '성운의 형태',
    cost: 1,
    cardType: 'power',
    rarity: 'uncommon',
    targetType: 'single',
    description: '매 턴 시작 시\n방어도 3을 획득합니다.',
    originLore: '성운처럼 퍼지고 흐르는 형태로 몸을 유지해 매 순간 방어 에너지를 자동 생성하는 파워.',
    trivia: '형태 연구 일지 — "성운은 고정되지 않는다. 흘러야 강하다."',
    onPlay: (u) => { addStatus(u, 'starAura', 3); },
    upgrade: (c) => { c.upgraded = true; c.description = '매 턴 시작 시\n방어도 5를 획득합니다.'; c.onPlay = (u) => { addStatus(u, 'starAura', 5); }; },
  },

  {
    id: 'cosmic_barrier',
    name: '우주 방벽',
    cost: 2,
    cardType: 'power',
    rarity: 'uncommon',
    targetType: 'single',
    description: '매 턴 시작 시\n방어도 5를 획득합니다.',
    originLore: '우주의 경계처럼 모든 것을 막아내는 방어 파워. 성천원에서 인과율의 흐름을 막는 법을 배우며 개발했다.',
    trivia: '성천원 일지 — "우주에는 경계가 없다. 하지만 내 방어막에는 있다."',
    onPlay: (u) => { addStatus(u, 'starAura', 5); },
    upgrade: (c) => { c.upgraded = true; c.description = '매 턴 시작 시\n방어도 7을 획득합니다.'; c.onPlay = (u) => { addStatus(u, 'starAura', 7); }; },
  },

  {
    id: 'stellar_focus',
    name: '성체 집중',
    cost: 1,
    cardType: 'power',
    rarity: 'uncommon',
    targetType: 'single',
    description: '힘 1을 얻고\n매 턴 시작 시 카드 1장을 드로우합니다.',
    originLore: '별의 에너지를 집중해 힘과 통찰을 동시에 얻는 파워. 전투가 길어질수록 강해진다.',
    trivia: '집중 일지 — "집중하면 힘이 생긴다. 그리고 집중하면 보이지 않던 것이 보인다."',
    onPlay: (u) => { addStatus(u, 'strength', 1); addStatus(u, 'constellation', 1); },
    upgrade: (c) => { c.upgraded = true; c.description = '힘 2를 얻고\n매 턴 시작 시 카드 1장을 드로우합니다.'; c.onPlay = (u) => { addStatus(u, 'strength', 2); addStatus(u, 'constellation', 1); }; },
  },

  // ═══════════════════════════════════════════════════════════════════
  //  공격 — 희귀 추가 (Rare Attack — Extended)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'quasar_cannon',
    name: '퀘이사 포',
    cost: 3,
    cardType: 'attack',
    rarity: 'rare',
    targetType: 'all',
    description: '모든 적에게 22의 피해를 입힙니다.',
    originLore: '우주에서 가장 강렬한 에너지를 방출하는 퀘이사를 모방한 전방위 폭격 기술. 루나의 모든 별빛 에너지를 한 번에 방출한다.',
    trivia: '한계 돌파 일지 — "전부 다 쏟아부으면 어떻게 되는지 시험해봤다. 이것이 결과다."',
    onPlay: (u, ts) => ts.forEach(t => applyDamage(t, 22, u)),
    upgrade: (c) => { c.upgraded = true; c.description = '모든 적에게 30의 피해를 입힙니다.'; c.onPlay = (u, ts) => ts.forEach(t => applyDamage(t, 30, u)); },
  },

  {
    id: 'binary_assault',
    name: '쌍성 강습',
    cost: 3,
    cardType: 'attack',
    rarity: 'rare',
    targetType: 'single',
    description: '16의 피해를 2번 입힙니다.',
    originLore: '두 별이 서로를 공전하듯, 루나의 두 번의 강격이 같은 리듬으로 적을 강타한다. 첫 번째 타격이 두 번째를 이끈다.',
    trivia: '쌍성 관측 일지 — "두 별이 서로를 잡아당기며 함께 간다. 내 두 타격도 그렇다."',
    onPlay: (u, t) => { applyDamage(t[0], 16, u); applyDamage(t[0], 16, u); },
    upgrade: (c) => { c.upgraded = true; c.description = '22의 피해를 2번 입힙니다.'; c.onPlay = (u, t) => { applyDamage(t[0], 22, u); applyDamage(t[0], 22, u); }; },
  },

  {
    id: 'stellar_doom',
    name: '성변 선고',
    cost: 2,
    cardType: 'attack',
    rarity: 'rare',
    targetType: 'single',
    description: '22의 피해를 입히고\n취약 3을 부여합니다.',
    originLore: '별의 변동(성변)이 일어나듯 단숨에 상대를 약화시키는 선고 기술. 피해와 함께 상대의 방어를 폭로한다.',
    trivia: '성변 연구 일지 — "별이 폭발하기 전에는 반드시 징조가 있다. 이 기술이 그 징조다."',
    onPlay: (u, t) => { applyDamage(t[0], 22, u); addStatus(t[0], 'vulnerable', 3); },
    upgrade: (c) => { c.upgraded = true; c.description = '28의 피해를 입히고\n취약 3을 부여합니다.'; c.onPlay = (u, t) => { applyDamage(t[0], 28, u); addStatus(t[0], 'vulnerable', 3); }; },
  },

  {
    id: 'moonlit_requiem',
    name: '달빛 진혼',
    cost: 3,
    cardType: 'attack',
    rarity: 'rare',
    targetType: 'single',
    description: '26의 피해를 입히고\n독 4를 부여합니다.',
    originLore: '기억을 잃어가는 마법소녀들에 대한 진혼곡. 그 슬픔이 독이 되어 적에게 흘러들어간다.',
    trivia: '진혼의 날 일지 — "이사벨라를 위해 이 기술을 만들었다. 기억을 잃어도 이름은 남는다."',
    onPlay: (u, t) => { applyDamage(t[0], 26, u); addStatus(t[0], 'poison', 4); },
    upgrade: (c) => { c.upgraded = true; c.description = '34의 피해를 입히고\n독 4를 부여합니다.'; c.onPlay = (u, t) => { applyDamage(t[0], 34, u); addStatus(t[0], 'poison', 4); }; },
  },

  {
    id: 'eclipse_impact',
    name: '일식 충격',
    cost: 3,
    cardType: 'attack',
    rarity: 'rare',
    targetType: 'single',
    description: '34의 피해를 입힙니다.',
    originLore: '일식의 순간처럼 모든 빛이 사라지는 폭발적인 단타. 루나가 개발한 최대 단발 피해 기술이다.',
    trivia: '극한 일지 — "달이 태양을 완전히 가리는 순간. 그 어둠이 폭발하면 어떻게 될까."',
    onPlay: (u, t) => applyDamage(t[0], 34, u),
    upgrade: (c) => { c.upgraded = true; c.description = '44의 피해를 입힙니다.'; c.onPlay = (u, t) => applyDamage(t[0], 44, u); },
  },

  {
    id: 'starquake',
    name: '별 진동',
    cost: 3,
    cardType: 'attack',
    rarity: 'rare',
    targetType: 'all',
    description: '모든 적에게 14의 피해를 입힙니다.',
    originLore: '별의 진동이 공간 전체를 뒤흔드는 것처럼, 별빛 에너지의 파동이 전장을 강타한다.',
    trivia: '진동 연구 일지 — "별이 진동한다는 걸 배웠다. 그 진동이 여기까지 오면 어떨까."',
    onPlay: (u, ts) => ts.forEach(t => applyDamage(t, 14, u)),
    upgrade: (c) => { c.upgraded = true; c.description = '모든 적에게 20의 피해를 입힙니다.'; c.onPlay = (u, ts) => ts.forEach(t => applyDamage(t, 20, u)); },
  },

  {
    id: 'lunar_annihilation',
    name: '달빛 소멸',
    cost: 2,
    cardType: 'attack',
    rarity: 'rare',
    targetType: 'single',
    description: '15의 피해를 입히고\n취약 2와 약화 2를 부여합니다.',
    originLore: '달빛 에너지를 소멸하는 힘으로 역전시켜 적에게 복합적인 약화를 가하는 기술. 달이 사라지는 순간의 에너지를 담았다.',
    trivia: '소멸 연구 일지 — "사라지는 것도 에너지다. 그 에너지를 무기로 삼는 것이 가능하다."',
    onPlay: (u, t) => { applyDamage(t[0], 15, u); addStatus(t[0], 'vulnerable', 2); addStatus(t[0], 'weak', 2); },
    upgrade: (c) => { c.upgraded = true; c.description = '20의 피해를 입히고\n취약 2와 약화 2를 부여합니다.'; c.onPlay = (u, t) => { applyDamage(t[0], 20, u); addStatus(t[0], 'vulnerable', 2); addStatus(t[0], 'weak', 2); }; },
  },

  // ═══════════════════════════════════════════════════════════════════
  //  스킬 — 희귀 추가 (Rare Skill — Extended)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'astral_armor',
    name: '성체 갑옷',
    cost: 2,
    cardType: 'skill',
    rarity: 'rare',
    targetType: 'single',
    description: '방어도 24를 획득합니다.',
    originLore: '별의 에너지로 이루어진 완전한 갑옷. 순간적이지만 어떤 공격도 막아낼 수 있는 강도를 가진다.',
    trivia: '갑옷 연구 일지 — "가장 강한 방어가 필요할 때를 위해 만들었다."',
    onPlay: (u) => { u.block += 24; },
    upgrade: (c) => { c.upgraded = true; c.description = '방어도 32를 획득합니다.'; c.onPlay = (u) => { u.block += 32; }; },
  },

  {
    id: 'stellar_vision',
    name: '성체 통찰',
    cost: 2,
    cardType: 'skill',
    rarity: 'rare',
    targetType: 'single',
    description: '힘 3을 얻고\n카드 2장을 드로우합니다.',
    originLore: '별들의 운행을 통해 전장을 통찰하고 힘을 집중하는 고급 기술. 보이는 것이 달라지면 힘도 달라진다.',
    trivia: '통찰 일지 — "보이지 않던 것이 보이기 시작했다. 그 순간 모든 것이 달라졌다."',
    onPlay: (u) => { addStatus(u, 'strength', 3); u.pendingDraw = (u.pendingDraw ?? 0) + 2; },
    upgrade: (c) => { c.upgraded = true; c.description = '힘 4를 얻고\n카드 3장을 드로우합니다.'; c.onPlay = (u) => { addStatus(u, 'strength', 4); u.pendingDraw = (u.pendingDraw ?? 0) + 3; }; },
  },

  {
    id: 'moonlit_veil',
    name: '달빛 장막',
    cost: 3,
    cardType: 'skill',
    rarity: 'rare',
    targetType: 'all',
    description: '방어도 20을 획득하고\n모든 적에게 약화 2와 취약 2를 부여합니다.',
    originLore: '달빛 에너지를 거대한 장막으로 펼쳐 자신을 완전히 보호하는 동시에 그 에너지가 적들에게 침투해 약화시킨다.',
    trivia: '달빛 연구의 정수 — "달빛은 어둠을 가린다. 그러나 동시에 어둠 속의 것들을 드러낸다."',
    onPlay: (u, ts) => { u.block += 20; ts.forEach(t => { addStatus(t, 'weak', 2); addStatus(t, 'vulnerable', 2); }); },
    upgrade: (c) => { c.upgraded = true; c.description = '방어도 26을 획득하고\n모든 적에게 약화 3과 취약 3을 부여합니다.'; c.onPlay = (u, ts) => { u.block += 26; ts.forEach(t => { addStatus(t, 'weak', 3); addStatus(t, 'vulnerable', 3); }); }; },
  },

  {
    id: 'celestial_mend',
    name: '천상 치유',
    cost: 2,
    cardType: 'skill',
    rarity: 'rare',
    targetType: 'single',
    description: 'HP를 16 회복하고\n방어도 8을 획득합니다.',
    originLore: '성천원의 에너지를 빌려 대량의 치유와 방어를 동시에 수행하는 최고급 회복 기술.',
    trivia: '천상 치유 일지 — "하늘의 에너지를 빌리는 대신, 대가를 치르지 않아도 된다. 이것이 신세계다."',
    onPlay: (u) => { heal(u, 16); u.block += 8; },
    upgrade: (c) => { c.upgraded = true; c.description = 'HP를 22 회복하고\n방어도 12를 획득합니다.'; c.onPlay = (u) => { heal(u, 22); u.block += 12; }; },
  },

  {
    id: 'stellar_oath',
    name: '성체 서약',
    cost: 1,
    cardType: 'skill',
    rarity: 'rare',
    targetType: 'single',
    description: '힘 4를 얻습니다.\n(4의 피해를 받습니다.)',
    originLore: '별에게 서약하는 대가로 강력한 힘을 얻는 기술. 서약에는 항상 대가가 따른다. 루나는 그것을 알면서도 사용한다.',
    trivia: '서약의 날 일지 — "대가를 알면서도 서약한다. 그것이 진짜 서약이다."',
    onPlay: (u) => { addStatus(u, 'strength', 4); applyDamage(u, 4, u); },
    upgrade: (c) => { c.upgraded = true; c.description = '힘 6을 얻습니다.\n(4의 피해를 받습니다.)'; c.onPlay = (u) => { addStatus(u, 'strength', 6); applyDamage(u, 4, u); }; },
  },

  {
    id: 'cosmic_flow',
    name: '우주의 흐름',
    cost: 2,
    cardType: 'skill',
    rarity: 'rare',
    targetType: 'single',
    description: '카드 3장을 드로우하고\n마나를 2 회복합니다.',
    originLore: '우주의 에너지 흐름에 완전히 합류하여 마법의 흐름을 최대한으로 확장하는 기술. 성천원에서만 완전히 발휘된다.',
    trivia: '흐름 일지 — "흐름을 막지 않으면 모든 것이 자연스럽게 온다."',
    onPlay: (u) => { u.pendingDraw = (u.pendingDraw ?? 0) + 3; u.mana = Math.min(u.maxMana, u.mana + 2); },
    upgrade: (c) => { c.upgraded = true; c.description = '카드 4장을 드로우하고\n마나를 2 회복합니다.'; c.onPlay = (u) => { u.pendingDraw = (u.pendingDraw ?? 0) + 4; u.mana = Math.min(u.maxMana, u.mana + 2); }; },
  },

  // ═══════════════════════════════════════════════════════════════════
  //  파워 — 희귀 추가 (Rare Power — Extended)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'supernova_heart',
    name: '초신성의 심장',
    cost: 3,
    cardType: 'power',
    rarity: 'rare',
    targetType: 'single',
    description: '힘 7을 영구 획득합니다.',
    originLore: '별이 죽으면서 내뿜는 초신성의 에너지를 심장에 담는 극한의 파워. 루나의 모든 공격이 그 에너지로 가득 찬다.',
    trivia: '극한 파워 일지 — "별이 죽어야 이 힘이 생긴다. 나는 그 별들에게 빚을 졌다."',
    onPlay: (u) => { addStatus(u, 'strength', 7); },
    upgrade: (c) => { c.upgraded = true; c.description = '힘 10을 영구 획득합니다.'; c.onPlay = (u) => { addStatus(u, 'strength', 10); }; },
  },

  {
    id: 'eternal_moonbeam',
    name: '영원한 달빛',
    cost: 3,
    cardType: 'power',
    rarity: 'rare',
    targetType: 'single',
    description: '매 턴 시작 시\n방어도 8을 획득하고 카드 2장을 드로우합니다.',
    originLore: '달빛이 영원히 사라지지 않는다면. 루나가 가장 힘든 밤에 꿈꾼 파워다. 매 순간 달빛이 방어와 통찰을 제공한다.',
    trivia: '달빛 꿈 일지 — "달이 지지 않는다면 어떨까. 이 기술을 쓸 때마다 그 꿈을 꾼다."',
    onPlay: (u) => { addStatus(u, 'starAura', 8); addStatus(u, 'constellation', 2); },
    upgrade: (c) => { c.upgraded = true; c.description = '매 턴 시작 시\n방어도 10을 획득하고 카드 2장을 드로우합니다.'; c.onPlay = (u) => { addStatus(u, 'starAura', 10); addStatus(u, 'constellation', 2); }; },
  },

  {
    id: 'star_pact',
    name: '별의 계약',
    cost: 1,
    cardType: 'power',
    rarity: 'rare',
    targetType: 'single',
    description: '힘 3을 얻고\n매 턴 시작 시 카드 2장을 드로우합니다.',
    originLore: '루나와 루미아의 계약처럼, 별들과의 계약을 통해 공격력과 통찰을 영구적으로 강화하는 파워.',
    trivia: '계약 일지 — "계약은 대가가 있다. 이 계약의 대가가 무엇인지 나는 아직 모른다."',
    onPlay: (u) => { addStatus(u, 'strength', 3); addStatus(u, 'constellation', 2); },
    upgrade: (c) => { c.upgraded = true; c.description = '힘 4를 얻고\n매 턴 시작 시 카드 2장을 드로우합니다.'; c.onPlay = (u) => { addStatus(u, 'strength', 4); addStatus(u, 'constellation', 2); }; },
  },

  {
    id: 'void_mastery',
    name: '공허 정복',
    cost: 3,
    cardType: 'power',
    rarity: 'rare',
    targetType: 'single',
    description: '힘 5를 얻고\n매 턴 시작 시 방어도 5를 획득합니다.',
    originLore: '공허의 에너지를 두려워하는 대신 완전히 지배하는 파워. 루나가 공허와의 접촉에서 패배 대신 승리를 선택한 결과다.',
    trivia: '공허 정복 일지 — "두려운 것을 피하는 것과 정복하는 것. 나는 정복을 선택했다."',
    onPlay: (u) => { addStatus(u, 'strength', 5); addStatus(u, 'starAura', 5); },
    upgrade: (c) => { c.upgraded = true; c.description = '힘 7을 얻고\n매 턴 시작 시 방어도 7을 획득합니다.'; c.onPlay = (u) => { addStatus(u, 'strength', 7); addStatus(u, 'starAura', 7); }; },
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
