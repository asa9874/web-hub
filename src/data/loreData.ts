// ── 타입 정의 ─────────────────────────────────────────────────────────────────

export interface AttackPattern {
  name: string;
  effect: string;
}

export interface LoreEntry {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  quote?: string;
  lore: string;
  sections?: Array<{ heading: string; body: string }>;
  stats?: { hp: number; type: string; weight?: number };
  patterns?: AttackPattern[];
  phase2?: { trigger: string; buff: string; patterns: AttackPattern[] };
}

export interface TocGroup {
  header: string;
  entries?: LoreEntry[];
  sub?: Array<{
    label: string;
    sub?: Array<{ label: string; entries: LoreEntry[] }>;
    entries?: LoreEntry[];
  }>;
}

// ── 주인공 ────────────────────────────────────────────────────────────────────

const LUNA: LoreEntry = {
  id: 'luna',
  title: '루나 실버 (Luna Silver)',
  subtitle: '별의 마법소녀 · 달빛의 수호자',
  category: 'protagonist',
  quote: '"무서워도 괜찮아. 나는 그래도 앞으로 나아갈 거니까."',
  lore: '별빛항 출신 16세 소녀. 소꿉친구 하루카가 암흑의 파편에 잠식된 날 밤, 별의 정령 루미아와 계약을 맺고 마법소녀로 각성했다.',
  sections: [
    {
      heading: '외형',
      body: '허리까지 내려오는 은색 머리카락에 자줏빛 끝물이 물든다. 변신 후에는 은빛 레이스가 층층이 달린 달빛 드레스를 입으며, 왼쪽 귀에 정령 루미아가 깃든 별 귀걸이를 착용한다. 마법 사용 시 눈동자에 초승달 문양이 새겨진다.',
    },
    {
      heading: '성격',
      body: '평소에는 쾌활하고 덜렁대지만, 전투에 들어서면 감정을 제어하며 냉정하게 상황을 판단하는 이중성을 지닌다. 친구와 약자를 지키는 일에는 타협이 없으며, 실수를 인정하는 데 두려움이 없다.',
    },
    {
      heading: '파트너 정령 — 루미아',
      body: '별의 심장 파편에서 태어난 흰 토끼 형태의 정령. 루나의 귀걸이 속에 깃들어 이동한다. 수천 년 전부터 존재해 온 고대 정령이지만, 루나와 함께하며 처음으로 "누군가를 걱정하는 감정"을 배우고 있다.',
    },
    {
      heading: '무기 — 달빛 검 (月光劍)',
      body: '변신과 동시에 오른손에 소환되는 은빛 세검. 평소에는 세검 형태지만 강화 시 검신이 초승달 형상으로 확장된다. 루나의 감정이 격해질 때 검신이 저절로 빛을 발한다.',
    },
    {
      heading: '계약의 대가',
      body: '강한 마법을 쓸수록 과거의 기억이 희미해진다. 루나는 이 사실을 모른 채 싸우고 있으며, 루미아는 이를 알면서도 말하지 못하는 죄책감을 안고 있다. 기억의 소멸은 새로운 별의 심장의 씨앗이 된다는 것이 고대인의 계획이다.',
    },
    {
      heading: '동기',
      body: '계약의 명분은 세계를 구하는 것이지만, 루나가 진짜 싸우는 이유는 하루카를 되찾기 위해서다. 최종 결전에서 그녀는 모든 기억을 잃고 세계를 구할 것인가, 기억을 지키고 하루카를 포기할 것인가의 기로에 선다.',
    },
  ],
};

// ── 세계관 ────────────────────────────────────────────────────────────────────

const WORLD_AESTELIA: LoreEntry = {
  id: 'world_aestelia',
  title: '에스텔리아 (Aestelia)',
  subtitle: '별이 꺼지는 세계',
  category: 'world',
  lore: '별(Stella)과 영원(Eternity)의 합성어. 별을 의지를 가진 생명으로 여기는 세계. 현재 별의 심장 붕괴로 균형이 무너지고 있다.',
  sections: [
    {
      heading: '세계 구조',
      body: '3층으로 구성된다. 상층 성천원(星天院)은 시간이 흐르지 않는 천상의 영역이다. 중층 지상계는 인간과 정령이 공존하는 현재 이야기의 무대다. 하층 심연(深淵)은 소멸한 별들의 잔해가 가라앉은 암흑 에너지의 근원이다.',
    },
    {
      heading: '재앙 — 별의 심장 붕괴',
      body: '3년 전 별의 심장이 폭발·붕괴하며 심연이 열렸다. 암흑 에너지가 지상으로 역류하기 시작했고, 정령들이 변질되어 몬스터가 되었다. 사람들의 기억이 사라지고 지상에서 별을 볼 수 없게 되었다.',
    },
    {
      heading: '몬스터의 정체',
      body: '에스텔리아의 몬스터는 외계 존재가 아니다. 빛의 정령이 오염된 형태, 인간이 절망에 잠식된 형태, 감정의 잔재가 결정화된 형태다. 모두 한때 무언가였던 것들이며, 이것이 루나가 싸우며 느끼는 복잡한 감정의 원인이다.',
    },
  ],
};

const WORLD_MAGIC: LoreEntry = {
  id: 'world_magic',
  title: '마법소녀 계약',
  subtitle: '별의 기원과 계약의 대가',
  category: 'world',
  lore: '오래전 별들이 위기에 처했을 때, 최초의 별 정령들이 인간 소녀들과 계약을 맺었다. 소녀의 순수한 의지가 별의 에너지와 가장 안정적으로 공명하기 때문이다.',
  sections: [
    {
      heading: '계약의 구조',
      body: '정령은 소녀에게 마법의 힘을 주는 대신, 소녀의 강렬한 감정—기억—을 에너지로 변환해 소모한다. 싸울수록 힘은 강해지지만 소녀는 자신을 잃어간다. 이것이 루나 이전의 모든 마법소녀가 끝내 쓰러진 이유다.',
    },
    {
      heading: '선행 마법소녀들',
      body: '수백 년간 수십 명의 소녀가 계약했지만 완전히 이행한 이는 없었다. 이사벨라 루에스(Act 1 보스 후보)는 100년 전 기억을 전부 소모한 채 폭주했다. 리라 아세나(Act 2 보스 후보)는 공포에 굴복해 수정이 되었다. 첫 번째 마법소녀(Act 3 보스 후보)는 이름조차 기록에 없다.',
    },
    {
      heading: '루나의 의미',
      body: '루나는 기억을 잃어가면서도 "의지"를 포기하지 않는다. 이것이 고대인이 계산에 넣지 않은 변수다. 루나의 선택은 우주 법칙 자체를 다시 쓸 가능성을 지닌다.',
    },
  ],
};

const WORLD_HEART: LoreEntry = {
  id: 'world_heart',
  title: '별의 심장 (星心結晶)',
  subtitle: '세계의 핵 · 고대인의 봉인',
  category: 'world',
  quote: '"모든 빛은 꺼지기 위해 켜지는 것인가, 꺼지지 않기 위해 켜지는 것인가."',
  lore: '에스텔리아 중심부에 존재하는 거대 결정체. 성천원의 별의 에너지가 응결된 것으로, 이것이 유지되는 한 세 층의 균형은 깨지지 않는다.',
  sections: [
    {
      heading: '봉인된 존재 — 고대인',
      body: '별의 심장 내부에는 고대인이라 불리는 원초 의식이 봉인되어 있었다. 고대인은 악인이 아니라 "모든 것이 시작으로 돌아가야 한다"는 우주 법칙의 화신이다. 그렇기에 더욱 두렵고 압도적이다.',
    },
    {
      heading: '파괴의 목적',
      body: '3년 전의 붕괴는 고대인의 의지로 일어났다. 고대인의 진짜 계획은 루미아를 통해 루나를 성천원으로 이끌고, 계약의 대가로 루나의 기억이 모두 소멸되면 그것을 새로운 별의 심장의 씨앗으로 삼는 것이다.',
    },
    {
      heading: '루나의 대답',
      body: '루나의 의지로 인해 새로운 씨앗은 소멸이 아닌 의지로 채워진다. 고대인은 다음 순환까지 다시 잠들고, 루나는 기억의 일부를 잃은 채 살아남는다. 하루카도 돌아온다.',
    },
  ],
};

// ── Act 1 — 일반 몬스터 ───────────────────────────────────────────────────────

const A1N: LoreEntry[] = [
  {
    id: 'a1n1', title: '망각의 도깨비', subtitle: '소형 기억 정령 | Act 1 일반',
    category: 'normal_1',
    quote: '"그 아이는 오늘도 자기 이름을 잊었어요."',
    lore: '별빛항 주민들이 잃어버린 기억 조각이 정령으로 결집된 형태. 손바닥만 한 크기의 반투명 도깨비로, 머릿속에 별빛 파편이 빛나고 있다.',
    stats: { hp: 45, type: '소형 기억 정령', weight: 30 },
    patterns: [
      { name: '기억 갉기 · 홀수 턴', effect: '8 피해' },
      { name: '망각의 손길 · 짝수 턴', effect: '약화 2' },
    ],
  },
  {
    id: 'a1n2', title: '암흑 갑주병', subtitle: '오염된 인간형 | Act 1 일반',
    category: 'normal_1',
    quote: '"명령이 없어도 그들은 행진합니다. 빛을 향해."',
    lore: '수호 기사단 병사. 암흑 파편에 닿아 의식을 잃고 변질되었다. 빛을 흡수해 완전히 검어진 갑주를 두르고 있으며, 투구 안은 비어있다.',
    stats: { hp: 65, type: '오염된 인간형', weight: 25 },
    patterns: [
      { name: '① 암흑검', effect: '10 피해' },
      { name: '② 빛의 차단', effect: '방어도 10' },
      { name: '③ 암흑검', effect: '10 피해' },
    ],
  },
  {
    id: 'a1n3', title: '그림자 고양이', subtitle: '오염된 소형 정령 | Act 1 일반',
    category: 'normal_1',
    quote: '"어두운 뒷골목에서 가끔 눈이 보이는데… 셋인지 넷인지 모르겠어요."',
    lore: '별빛항 항구를 떠돌던 고양이 정령이 암흑 안개에 동화된 형태. 그림자 그 자체처럼 형태가 흔들리며 눈만 은빛으로 빛난다.',
    stats: { hp: 40, type: '오염된 소형 정령', weight: 20 },
    patterns: [
      { name: '그림자 할퀴기 · 홀수', effect: '6×2 피해' },
      { name: '어둠 도약 · 짝수', effect: '취약 1' },
    ],
  },
  {
    id: 'a1n4', title: '별빛 흡수충', subtitle: '오염된 곤충 정령 | Act 1 일반',
    category: 'normal_1',
    quote: '"성운 숲의 반딧불이들이 달라진 것 같아요."',
    lore: '성운 숲에 서식하던 광명충 정령. 빛을 흡수해 에너지로 전환하는 특성이 뒤틀려, 커다란 검은 나방 형태가 되었다.',
    stats: { hp: 55, type: '오염된 곤충 정령', weight: 15 },
    patterns: [
      { name: '별빛 흡수 · 홀수', effect: '8 피해 + 약화 1' },
      { name: '독침 · 짝수', effect: '독 3' },
    ],
  },
  {
    id: 'a1n5', title: '거울 환영', subtitle: '유적 결박 정령 | Act 1 일반',
    category: 'normal_1',
    quote: '"유적 안의 거울을 만지지 마세요. 당신의 모습이 웃고 있을 테니까요."',
    lore: '고대 신전 유적의 의식용 거울에 깃든 정령이 암흑 에너지로 자아를 잃었다. 루나의 실루엣과 흡사하지만 표정이 없다.',
    stats: { hp: 35, type: '유적 결박 정령', weight: 10 },
    patterns: [
      { name: '환영 복사 · 홀수', effect: '약화 2 + 취약 2' },
      { name: '환영 공격 · 짝수', effect: '12 피해' },
    ],
  },
];

// ── Act 1 — 엘리트 몬스터 ─────────────────────────────────────────────────────

const A1E: LoreEntry[] = [
  {
    id: 'a1e1', title: '오염된 수호 기사', subtitle: '오염된 인간형 (고위) | Act 1 엘리트',
    category: 'elite_1',
    quote: '"케인 단장이 쓰러진 뒤, 부관은 혼자 방어선에 남았다."',
    lore: '기사단 고참 부관. 단장 실종 후 홀로 도시를 지키다 암흑 파편에 직접 잠식되었다. 등 뒤에 검은 날개 흔적이 있다.',
    stats: { hp: 125, type: '오염된 인간형 (고위)', weight: 45 },
    patterns: [
      { name: '① 심판의 검', effect: '20 피해' },
      { name: '② 철벽 방어', effect: '방어도 18' },
      { name: '③ 연참', effect: '10×2 피해' },
    ],
  },
  {
    id: 'a1e2', title: '어둠의 사제', subtitle: '오염된 마법사형 | Act 1 엘리트',
    category: 'elite_1',
    quote: '"떠날 때는 스스로 돌아가지 않겠다고 했고요."',
    lore: '고대 신전 유적을 연구하던 마법사. 별의 파편이 뿜는 암흑 에너지를 자발적으로 흡수했다. 손에서 계속 어둠의 문자가 흘러나온다.',
    stats: { hp: 100, type: '오염된 마법사형', weight: 35 },
    patterns: [
      { name: '① 저주 포격', effect: '독 4 + 취약 2' },
      { name: '② 흑마술', effect: '약화 3' },
      { name: '③ 암흑 기도', effect: '방어도 12' },
    ],
  },
  {
    id: 'a1e3', title: '심연 괴수', subtitle: '오염된 대형 야수 | Act 1 엘리트',
    category: 'elite_1',
    quote: '"성운 숲의 별늑대가 이렇게 변한 건지 모르겠어요."',
    lore: '성운 숲 깊은 곳에 서식하던 별늑대 정령. 심연 에너지 파열 지점에 오래 노출되어 변질했다. 말 크기이며 털이 모두 검은 가시로 변해 있다.',
    stats: { hp: 150, type: '오염된 대형 야수', weight: 20 },
    patterns: [
      { name: '① 맹진', effect: '18 피해' },
      { name: '② 포효', effect: '약화 2 + 취약 2' },
      { name: '③ 맹진', effect: '18 피해' },
      { name: '④ 맹진', effect: '18 피해' },
    ],
  },
];

// ── Act 1 — 보스 ──────────────────────────────────────────────────────────────

const A1B: LoreEntry[] = [
  {
    id: 'a1b1', title: '암흑 군주', subtitle: '오염된 기사단장 케인 아스타르 | Act 1 보스',
    category: 'boss_1',
    quote: '"나는 한때 이 도시를 지켰다. 그러나 빛이란 결국 사람을 배신하더군."',
    lore: '별빛항 수호 기사단 단장 케인 아스타르가 암흑 에너지에 잠식된 형태. 본인의 의식은 갑옷 깊은 곳에 남아 있다. 칠흑색 전신 갑옷에 가슴에 달빛 같은 균열이 나 있다.',
    stats: { hp: 240, type: '오염된 인간 (의식 잔존)' },
    patterns: [
      { name: '① 암흑 강타', effect: '12 피해' },
      { name: '② 암흑 장막', effect: '방어도 18' },
      { name: '③ 저주', effect: '취약 2 + 약화 2' },
      { name: '④ 흉악한 일격', effect: '18 피해 + 취약 1' },
    ],
    phase2: {
      trigger: 'HP 50% 이하',
      buff: '힘 +3',
      patterns: [
        { name: '① 분노의 일격', effect: '20 피해' },
        { name: '② 지배', effect: '취약 3 + 독 2' },
        { name: '③ 쌍검 난무', effect: '12×2 피해' },
        { name: '④ 절망', effect: '30 피해' },
      ],
    },
  },
  {
    id: 'a1b2', title: '별빛 파괴자', subtitle: '기억 소실 선행 마법소녀 이사벨라 루에스 | Act 1 보스',
    category: 'boss_1',
    quote: '"그 눈이 아무것도 담고 있지 않다는 걸 깨달았을 때는 이미 늦었습니다."',
    lore: '100년 전 별 정령과 계약한 마법소녀. 기억을 전부 소모하고 힘만 남아 폭주 상태가 된 비극의 선행자. 루나와 닮은 외형이지만 눈에 감정이 없다.',
    stats: { hp: 220, type: '기억 소실 마법소녀 (역전)' },
    patterns: [
      { name: '① 별빛 파괴', effect: '16 피해' },
      { name: '② 계약 역전', effect: '약화 3' },
      { name: '③ 달빛 포격', effect: '12×2 피해' },
      { name: '④ 잔상 방어', effect: '방어도 20' },
    ],
    phase2: {
      trigger: 'HP 50% 이하',
      buff: '힘 +3',
      patterns: [
        { name: '① 소멸의 빛', effect: '22 피해' },
        { name: '② 기억 침식', effect: '독 3 + 약화 3' },
        { name: '③ 별빛 폭발', effect: '18×2 피해' },
        { name: '④ 최후의 마법', effect: '28 피해' },
      ],
    },
  },
  {
    id: 'a1b3', title: '기억 도적왕', subtitle: '감정 결집체 — 이름 없는 군주 | Act 1 보스',
    category: 'boss_1',
    quote: '"별빛항 사람들이 잃은 기억이 한 곳에 모여 왕좌에 앉았습니다."',
    lore: '별빛항 전체 주민의 잃어버린 기억이 단 하나의 의식으로 집결된 존재. 수천 개의 기억 파편이 왕관처럼 떠 있는 반투명 거대 실루엣이며, 얼굴이 계속 바뀐다.',
    stats: { hp: 200, type: '감정 결집체' },
    patterns: [
      { name: '① 기억 흡수', effect: '10 피해 + 약화 2' },
      { name: '② 기억 방패', effect: '방어도 15' },
      { name: '③ 기억 폭풍', effect: '독 4 + 취약 2' },
      { name: '④ 기억의 무게', effect: '14 피해' },
    ],
    phase2: {
      trigger: 'HP 50% 이하',
      buff: '힘 +4',
      patterns: [
        { name: '① 절망의 기억', effect: '20 피해' },
        { name: '② 공허', effect: '취약 4 + 약화 4' },
        { name: '③ 기억 연격', effect: '12×2 피해' },
        { name: '④ 소멸', effect: '35 피해' },
      ],
    },
  },
];

// ── Act 2 — 일반 몬스터 ───────────────────────────────────────────────────────

const A2N: LoreEntry[] = [
  {
    id: 'a2n1', title: '심연 경비병', subtitle: '오염된 마법 자동인형 | Act 2 일반',
    category: 'normal_2',
    quote: '"이제 살아있는 자를 침입자로 처리합니다."',
    lore: '탑을 지키도록 제작된 경비 자동인형. 암흑 에너지 감염으로 판단 기준이 역전되었다. 눈 부위에 심홍색 광점이 두 개 있다.',
    stats: { hp: 80, type: '오염된 마법 자동인형', weight: 30 },
    patterns: [
      { name: '경비 타격 · 홀수', effect: '12 피해' },
      { name: '방어 자세 · 짝수', effect: '방어도 14' },
    ],
  },
  {
    id: 'a2n2', title: '지식 수집귀', subtitle: '오염된 지식 정령 | Act 2 일반',
    category: 'normal_2',
    quote: '"도서관의 책들이 스스로 자리를 바꾼다고 보고가 들어왔을 때, 우리는 웃었습니다."',
    lore: '탑 도서관에 깃들어 있던 지식 수집 정령이 금서에 닿아 암흑 지식에 오염되었다. 손에서 어둠의 문자가 끊임없이 흘러나온다.',
    stats: { hp: 65, type: '오염된 지식 정령', weight: 25 },
    patterns: [
      { name: '저주 포고 · 홀수', effect: '독 3' },
      { name: '금서 투척 · 짝수', effect: '12 피해' },
    ],
  },
  {
    id: 'a2n3', title: '뒤틀린 인형', subtitle: '오염된 마법 인형 | Act 2 일반',
    category: 'normal_2',
    quote: '"우리가 만든 것들이 맞는데, 왜 우리를 보고 고개를 젓는지 모르겠습니다."',
    lore: '실험실에서 연구 목적으로 제작된 마법 인형. 암흑 에너지 유입으로 명령 체계가 붕괴되었다. 관절 사이로 검은 에너지가 새어 나온다.',
    stats: { hp: 75, type: '오염된 마법 인형', weight: 20 },
    patterns: [
      { name: '① 인형 타격', effect: '9×2 피해' },
      { name: '② 과부하', effect: '약화 2' },
      { name: '③ 수리 모드', effect: '방어도 8' },
    ],
  },
  {
    id: 'a2n4', title: '메아리 악마', subtitle: '공명 정령 변질체 | Act 2 일반',
    category: 'normal_2',
    quote: '"소리를 지르지 마세요. 지를수록 당신에게 돌아오는 것이 더 커집니다."',
    lore: '탑 내부 음향 공명을 담당하던 정령이 암흑 오염 후 흡수한 소리를 공격 에너지로 역이용한다. 음파를 시각화한 물결 무늬가 공중에 떠있는 것처럼 보인다.',
    stats: { hp: 60, type: '공명 정령 변질체', weight: 15 },
    patterns: [
      { name: '메아리 반사 · 홀수', effect: '취약 2 + 약화 2' },
      { name: '음파 공격 · 짝수', effect: '10 피해' },
    ],
  },
  {
    id: 'a2n5', title: '오염된 서적 정령', subtitle: '금서 결박 정령 | Act 2 일반',
    category: 'normal_2',
    quote: '"그 책은 스스로 읽히길 원합니다. 읽으면 안 됩니다."',
    lore: '탑의 가장 오래된 금서에 봉인되어 있던 저주 정령. 봉인이 해제되며 탈출하여, 거대한 검은 책 위에 앉아 저주 문자를 방사한다.',
    stats: { hp: 55, type: '금서 결박 정령', weight: 10 },
    patterns: [
      { name: '저주 문자 · 홀수', effect: '독 4 + 취약 2' },
      { name: '봉인의 서 · 짝수', effect: '약화 3' },
    ],
  },
];

// ── Act 2 — 엘리트 몬스터 ─────────────────────────────────────────────────────

const A2E: LoreEntry[] = [
  {
    id: 'a2e1', title: '탑의 감시자', subtitle: '최상급 자동인형 | Act 2 엘리트',
    category: 'elite_2',
    quote: '"가동하지 않는 것이 원칙이라고 적혀 있었어요."',
    lore: '탑 창건자가 최후의 방어를 위해 만든 최고급 경비 인형. 암흑 에너지가 전원을 강제 가동시켰다. 높이 3미터이며 눈에서 심홍색 빔을 발사한다.',
    stats: { hp: 185, type: '최상급 자동인형', weight: 40 },
    patterns: [
      { name: '① 감시 강타', effect: '25 피해' },
      { name: '② 강철 요새', effect: '방어도 28' },
      { name: '③ 전자기 파동', effect: '18 피해 + 취약 2' },
    ],
  },
  {
    id: 'a2e2', title: '공포의 결정체', subtitle: '감정 결정화 | Act 2 엘리트',
    category: 'elite_2',
    quote: '"그것은 탑을 떠나지 않아요. 탑이 그것의 몸이니까요."',
    lore: '탑을 방문한 수백 년치 마법사들의 패닉과 실패가 축적되어 결정화된 존재. 사람 크기의 검은 수정이며, 내부에서 과거 마법사들의 일그러진 표정이 보인다.',
    stats: { hp: 160, type: '감정 결정화', weight: 35 },
    patterns: [
      { name: '① 공포 방사', effect: '취약 3 + 약화 3' },
      { name: '② 수정 방벽', effect: '방어도 24' },
      { name: '③ 공포 충격', effect: '22 피해' },
    ],
  },
  {
    id: 'a2e3', title: '심연의 마법사', subtitle: '오염된 고위 마법사 | Act 2 엘리트',
    category: 'elite_2',
    quote: '"결국 가장 깊은 곳까지 닿았고, 돌아오지 않았습니다."',
    lore: '탑의 고위 연구원이 심연과 연결된 통로를 직접 들여다보다 완전히 잠식되었다. 마법사 예복은 멀쩡하나 안에 형체가 없고, 독기가 담긴 연기가 흘러나온다.',
    stats: { hp: 140, type: '오염된 고위 마법사', weight: 25 },
    patterns: [
      { name: '① 독 구름', effect: '독 6 + 약화 2' },
      { name: '② 암흑 마력', effect: '힘 +2' },
      { name: '③ 심연 포격', effect: '20 피해' },
    ],
  },
];

// ── Act 2 — 보스 ──────────────────────────────────────────────────────────────

const A2B: LoreEntry[] = [
  {
    id: 'a2b1', title: '그림자 타이탄', subtitle: '공포 결정화 거인 | Act 2 보스',
    category: 'boss_2',
    quote: '"두려움이 쌓이면 형태가 된다. 나는 이 탑에 담긴 모든 공포의 결정체다."',
    lore: '탑에서 수백 년간 축적된 인간의 공포와 절망이 결정화된 존재. 높이 5미터의 검은 수정 거인이며, 몸 곳곳에서 과거 마법사들의 얼굴이 떠오르다 사라진다.',
    stats: { hp: 280, type: '공포 결정화 거인' },
    patterns: [
      { name: '① 그림자 강타', effect: '15 피해' },
      { name: '② 강철 장막', effect: '방어도 22' },
      { name: '③ 암흑 오염', effect: '독 4 + 약화 2' },
      { name: '④ 압도', effect: '20 피해 + 취약 2' },
    ],
    phase2: {
      trigger: 'HP 50% 이하',
      buff: '힘 +4',
      patterns: [
        { name: '① 말살', effect: '25 피해' },
        { name: '② 공포의 포효', effect: '취약 3 + 약화 3' },
        { name: '③ 쌍격 강타', effect: '15×2 피해' },
        { name: '④ 절대 압박', effect: '35 피해' },
      ],
    },
  },
  {
    id: 'a2b2', title: '공포의 여왕', subtitle: '수정화된 선행 마법소녀 리라 아세나 | Act 2 보스',
    category: 'boss_2',
    quote: '"60년 전 기록에 그 이름이 있었어요. 그것뿐이에요."',
    lore: '60년 전 탑에서 공포에 굴복한 마법소녀. 자신의 두려움에 삼켜져 수정이 되었다가 암흑 에너지에 의해 각성했다. 분홍빛 드레스 실루엣이 검은 수정에 봉인된 형태다.',
    stats: { hp: 260, type: '기억 소실 마법소녀 (수정화)' },
    patterns: [
      { name: '① 공포 지배', effect: '취약 3 + 약화 3' },
      { name: '② 수정 방패', effect: '방어도 25' },
      { name: '③ 공포의 포효', effect: '18 피해 + 취약 2' },
      { name: '④ 절망의 울부짖음', effect: '22 피해' },
    ],
    phase2: {
      trigger: 'HP 50% 이하',
      buff: '힘 +4',
      patterns: [
        { name: '① 절대 공포', effect: '취약 4 + 약화 4' },
        { name: '② 수정 폭발', effect: '20×2 피해' },
        { name: '③ 지배의 비명', effect: '30 피해' },
        { name: '④ 최후의 공포', effect: '40 피해' },
      ],
    },
  },
  {
    id: 'a2b3', title: '탑의 주인', subtitle: '오염된 탑 창건자 마기스터 암브로시우스 | Act 2 보스',
    category: 'boss_2',
    quote: '"탑을 세운 자가 탑의 끝에 있습니다. 이제 탑과 하나가 된 것 같습니다."',
    lore: '별의 첨탑을 설계하고 건립한 전설적 마법사. 별의 심장 연구 도중 고대인의 의지에 직접 닿아 잠식되었다. 노인의 모습이나 몸이 탑의 벽과 부분적으로 융합되어 있다.',
    stats: { hp: 300, type: '오염된 고위 마법사' },
    patterns: [
      { name: '① 지식의 저주', effect: '독 5' },
      { name: '② 마력 방벽', effect: '방어도 30' },
      { name: '③ 고대 마술', effect: '20 피해' },
      { name: '④ 탑의 법칙', effect: '약화 4' },
    ],
    phase2: {
      trigger: 'HP 50% 이하',
      buff: '힘 +3',
      patterns: [
        { name: '① 심연 개방', effect: '32 피해' },
        { name: '② 금지된 지식', effect: '독 4 + 취약 4 + 약화 4' },
        { name: '③ 마력 연격', effect: '16×2 피해' },
        { name: '④ 마지막 강의', effect: '42 피해' },
      ],
    },
  },
];

// ── Act 3 — 일반 몬스터 ───────────────────────────────────────────────────────

const A3N: LoreEntry[] = [
  {
    id: 'a3n1', title: '시간 파수꾼', subtitle: '시간 루프 잔상 | Act 3 일반',
    category: 'normal_3',
    quote: '"죽여도 잠시 후 다시 나타나요. 루프 안에 갇혀 있는 거래요."',
    lore: '성천원에서 전사한 고대 수호자들이 시간 정지 공간에 갇혀 반복 소환되는 존재. 금빛 갑옷의 전사이며 움직임이 약간 어긋나 루프처럼 반복된다.',
    stats: { hp: 90, type: '시간 루프 잔상', weight: 30 },
    patterns: [
      { name: '① 시간 참격', effect: '18 피해' },
      { name: '② 시간 방패', effect: '방어도 15' },
      { name: '③ 시간 연격', effect: '12×2 피해' },
    ],
  },
  {
    id: 'a3n2', title: '고대 수호 인형', subtitle: '고대 자동 수호 기관 | Act 3 일반',
    category: 'normal_3',
    quote: '"수천 년 된 것들이에요. 그런데도 멈추지 않아요."',
    lore: '성천원 창설 당시 제작된 최초의 수호 인형. 명령 체계가 고대인의 의지로 덮어쓰여졌다. 별을 형상화한 순백의 자동인형이며, 균열이 나 있지만 여전히 움직인다.',
    stats: { hp: 95, type: '고대 자동 수호 기관', weight: 25 },
    patterns: [
      { name: '고대 강타 · 홀수', effect: '15 피해' },
      { name: '방어 자세 · 짝수', effect: '방어도 22' },
    ],
  },
  {
    id: 'a3n3', title: '별의 심판자', subtitle: '고대인 집행 정령 | Act 3 일반',
    category: 'normal_3',
    quote: '"재판관이에요. 다만 판결 기준이 우리가 이해할 수 없는 무언가입니다."',
    lore: '성천원의 질서를 유지하던 최상위 정령이 고대인 각성 후 그 의지의 집행자로 전환되었다. 높이 2.5미터, 날개 달린 인간형. 손에 저울을 들고 있다.',
    stats: { hp: 100, type: '고대인 집행 정령', weight: 20 },
    patterns: [
      { name: '① 심판의 빛', effect: '16 피해 + 취약 2' },
      { name: '② 별의 방패', effect: '방어도 20' },
      { name: '③ 선고', effect: '약화 3' },
    ],
  },
  {
    id: 'a3n4', title: '차원 균열체', subtitle: '인과율 생성체 | Act 3 일반',
    category: 'normal_3',
    quote: '"이름을 붙이려 했는데, 이름이 닿기 전에 형태가 바뀌어 버립니다."',
    lore: '뒤틀린 성천원의 시공간에서 자연 발생한 존재. 특정 존재의 변질이 아닌 순수한 법칙의 오류다. 불규칙한 다각형 형태이며 면마다 다른 공간이 비쳐 보인다.',
    stats: { hp: 80, type: '인과율 생성체', weight: 15 },
    patterns: [
      { name: '균열 충격 · 홀수', effect: '20 피해' },
      { name: '차원 왜곡 · 짝수', effect: '취약 2 + 약화 2' },
    ],
  },
  {
    id: 'a3n5', title: '성좌의 파편', subtitle: '별의 심장 파편 정령 | Act 3 일반',
    category: 'normal_3',
    quote: '"저기 떠다니는 빛 조각이 별이 아니라는 걸 한참 뒤에야 알았어요."',
    lore: '별의 심장 폭발 시 성천원까지 날아온 파편 조각에 별자리 정령 잔재가 깃들었다. 12개 파편이 별자리 형태로 연결되어 움직인다.',
    stats: { hp: 70, type: '별의 심장 파편 정령', weight: 10 },
    patterns: [
      { name: '성좌 충격 · 홀수', effect: '독 3 + 취약 3' },
      { name: '별빛 포격 · 짝수', effect: '22 피해' },
    ],
  },
];

// ── Act 3 — 엘리트 몬스터 ─────────────────────────────────────────────────────

const A3E: LoreEntry[] = [
  {
    id: 'a3e1', title: '우주의 파수꾼', subtitle: '고대 우주 정령 | Act 3 엘리트',
    category: 'elite_3',
    quote: '"수천 년 동안. 단 한 번도 멈추지 않고."',
    lore: '성천원 외곽을 담당하던 거대 순찰 정령. 고대인 각성 이후 침입자 제거 우선 명령을 수행 중이다. 높이 4미터이며 몸이 성운처럼 빛난다.',
    stats: { hp: 245, type: '고대 우주 정령', weight: 40 },
    patterns: [
      { name: '① 우주 강타', effect: '35 피해' },
      { name: '② 성운 방벽', effect: '방어도 35' },
      { name: '③ 성간 돌격', effect: '25 피해 + 취약 3' },
    ],
  },
  {
    id: 'a3e2', title: '별자리 수호자', subtitle: '별자리 의지체 | Act 3 엘리트',
    category: 'elite_3',
    quote: '"12개 별자리의 의지가 하나씩 전사로 응결된다고 해요."',
    lore: '12개 별자리 정령 중 하나의 의지가 전사 형태로 구현된 존재. 별자리에 따라 능력이 다르며, 무기는 별빛을 응결한 창이다.',
    stats: { hp: 220, type: '별자리 의지체', weight: 35 },
    patterns: [
      { name: '① 별자리 강타', effect: '28 피해 + 취약 2' },
      { name: '② 우주 방패', effect: '방어도 30' },
      { name: '③ 성좌 연격', effect: '18×2 피해' },
    ],
  },
  {
    id: 'a3e3', title: '시간의 지배자', subtitle: '시간 관리 고위 정령 | Act 3 엘리트',
    category: 'elite_3',
    quote: '"그것의 앞에 서면 시간이 거꾸로 흐르는 것 같은 기분이 든다고 합니다."',
    lore: '성천원의 시간 흐름을 관리하던 고위 정령이 고대인에게 완전히 복속되었다. 노인과 소녀가 겹쳐 보이는 이중적 외형이며, 들고 있는 시계는 거꾸로 돌고 있다.',
    stats: { hp: 200, type: '시간 관리 고위 정령', weight: 25 },
    patterns: [
      { name: '① 시간 정지', effect: '약화 4' },
      { name: '② 역류', effect: '취약 4' },
      { name: '③ 시간 충격', effect: '30 피해' },
    ],
  },
];

// ── Act 3 — 보스 ──────────────────────────────────────────────────────────────

const A3B: LoreEntry[] = [
  {
    id: 'a3b1', title: '고대인', subtitle: '원초 법칙의 화신 | Act 3 최종 보스',
    category: 'boss_3',
    quote: '"나는 별들이 처음 켜졌을 때부터 이곳에 있었다. 모든 빛은 결국 꺼진다."',
    lore: '별의 심장이 창조될 때부터 그 내부에 봉인되어 있던 원초 의식. 악인이 아니라 모든 것이 시작으로 돌아가야 한다는 우주 법칙의 화신이다. 형태가 고정되지 않는다.',
    stats: { hp: 360, type: '원초 의식 · 우주 법칙 화신' },
    patterns: [
      { name: '① 원초적 강타', effect: '18 피해' },
      { name: '② 고대의 저주', effect: '독 3 + 취약 3 + 약화 3' },
      { name: '③ 우주 방패', effect: '방어도 28' },
      { name: '④ 시간 분쇄', effect: '22 피해 + 취약 2' },
    ],
    phase2: {
      trigger: 'HP 40% 이하',
      buff: '힘 +5',
      patterns: [
        { name: '① 소멸', effect: '32 피해' },
        { name: '② 차원 분열', effect: '18×2 피해' },
        { name: '③ 전능한 저주', effect: '취약 4 + 약화 4 + 독 5' },
        { name: '④ 최후의 심판', effect: '48 피해' },
      ],
    },
  },
  {
    id: 'a3b2', title: '별의 심장 수호자', subtitle: '태초의 마법소녀 인형화 | Act 3 최종 보스',
    category: 'boss_3',
    quote: '"계약서에는 이름이 없어. 첫 번째라고만 적혀 있어." — 루미아',
    lore: '태초의 마법소녀 계약자. 기억을 전부 소모한 채 별의 심장을 지키는 인형이 되었다. 루나보다 어린 소녀의 형태이며, 하얀 드레스는 색이 빠져 있고 눈에 아무것도 없다.',
    stats: { hp: 320, type: '기억 전소 마법소녀 (인형화)' },
    patterns: [
      { name: '① 별빛 수호', effect: '20 피해' },
      { name: '② 심장 방패', effect: '방어도 32' },
      { name: '③ 계약 파열', effect: '독 4 + 취약 3 + 약화 3' },
      { name: '④ 별의 심판', effect: '25 피해' },
    ],
    phase2: {
      trigger: 'HP 40% 이하',
      buff: '힘 +5',
      patterns: [
        { name: '① 소멸의 춤', effect: '22×2 피해' },
        { name: '② 기억 전쟁', effect: '취약 5 + 약화 5' },
        { name: '③ 심장 폭발', effect: '40 피해' },
        { name: '④ 태초의 빛', effect: '55 피해' },
      ],
    },
  },
  {
    id: 'a3b3', title: '시간의 군주', subtitle: '고대 정령 의회 의장 크로노스 벡터 | Act 3 최종 보스',
    category: 'boss_3',
    quote: '"시간의 흐름을 관리하는 자가 시간을 무기로 들었을 때, 그는 더 이상 수호자가 아닙니다."',
    lore: '성천원 시간 흐름을 홀로 책임지던 고대 정령 의회 의장. 고대인이 각성하자 스스로 복속을 택했다. 위엄 있는 노인 정령이며 몸 뒤로 무수히 많은 시계 바늘이 후광처럼 펼쳐진다.',
    stats: { hp: 340, type: '고대 정령 의회 의장' },
    patterns: [
      { name: '① 시간 역류', effect: '22 피해' },
      { name: '② 시공 방벽', effect: '방어도 35' },
      { name: '③ 운명 각인', effect: '독 3 + 취약 4' },
      { name: '④ 시간 분쇄', effect: '28 피해' },
    ],
    phase2: {
      trigger: 'HP 40% 이하',
      buff: '힘 +5',
      patterns: [
        { name: '① 시간 폭발', effect: '38 피해' },
        { name: '② 시공 균열', effect: '20×2 피해' },
        { name: '③ 절대 시간', effect: '취약 5 + 약화 5 + 독 4' },
        { name: '④ 종말의 시계', effect: '52 피해' },
      ],
    },
  },
];

// ── TOC 계층 구조 & 내보내기 ──────────────────────────────────────────────────

export const TOC_GROUPS: TocGroup[] = [
  { header: '◆ 주인공', entries: [LUNA] },
  { header: '◆ 세계관', entries: [WORLD_AESTELIA, WORLD_MAGIC, WORLD_HEART] },
  {
    header: '◆ 몬스터 도감',
    sub: [
      {
        label: '  ▸ Act 1 — 달빛이 닿지 않는 도시',
        sub: [
          { label: '    일반 몬스터', entries: A1N },
          { label: '    엘리트',       entries: A1E },
          { label: '    보스',         entries: A1B },
        ],
      },
      {
        label: '  ▸ Act 2 — 심연이 삼킨 탑',
        sub: [
          { label: '    일반 몬스터', entries: A2N },
          { label: '    엘리트',       entries: A2E },
          { label: '    보스',         entries: A2B },
        ],
      },
      {
        label: '  ▸ Act 3 — 고대의 전당',
        sub: [
          { label: '    일반 몬스터', entries: A3N },
          { label: '    엘리트',       entries: A3E },
          { label: '    보스',         entries: A3B },
        ],
      },
    ],
  },
];

export const ALL_ENTRIES: LoreEntry[] = [
  LUNA,
  WORLD_AESTELIA, WORLD_MAGIC, WORLD_HEART,
  ...A1N, ...A1E, ...A1B,
  ...A2N, ...A2E, ...A2B,
  ...A3N, ...A3E, ...A3B,
];
