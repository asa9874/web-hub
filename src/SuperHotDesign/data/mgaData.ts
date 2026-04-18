import type {
  AlertItem,
  CampaignItem,
  ChronicleEvent,
  GoodsItem,
  ImpurityTier,
  MagicalGirlProfile,
  OperationsKpi,
  ShelterStep,
} from '../types';

const baseUrl = import.meta.env.BASE_URL;

export const buildAssetUrl = (...segments: string[]): string =>
  `${baseUrl}${segments.map((segment) => encodeURIComponent(segment)).join('/')}`;

export const operationsKpis: OperationsKpi[] = [
  {
    label: '전 지구 감지 레이더',
    value: '24',
    unit: 'Nodes',
    note: '도시 상공 균열 감시 동기화율 99.8%',
  },
  {
    label: '활동 마법소녀',
    value: '173',
    unit: 'Active',
    note: '평균 작전 응답 시간 3분 18초',
  },
  {
    label: '오늘 대피소 가동',
    value: '61',
    unit: 'Shelters',
    note: '시민 라이브 시청 연결률 92%',
  },
  {
    label: '희망 지수',
    value: '87.4',
    unit: 'HPI',
    note: '전일 대비 +1.9, 시민 신뢰도 상승',
  },
];

export const chronicleEvents: ChronicleEvent[] = [
  {
    year: 2000,
    title: '부정의 강림',
    subtitle: 'The Great Shift Begins',
    summary:
      '전 세계 대도시 상공에서 균열이 동시에 열리며 부정(Impurity)이 지상으로 낙하했다. 기존 군사 무기는 부정의 코어를 파괴하지 못했다.',
    consequence:
      '국가 단위 비상령 선포, 인구 밀집지의 1차 대피 체계가 72시간 내 급조되었다.',
    atmosphere: 'crisis',
  },
  {
    year: 2000,
    title: '계약의 시작',
    subtitle: 'Mascot Protocol',
    summary:
      '정체불명의 생명체 마스코트가 감수성이 높은 소녀들에게 계약을 제안했다. 최초 마법소녀 부대가 도쿄-서울-상파울루에서 동시 출현했다.',
    consequence:
      '희망 기반 마력 이론 확립, 도시별 마법소녀 임시 조직이 등장했다.',
    atmosphere: 'hope',
  },
  {
    year: 2007,
    title: '협회 통합 선언',
    subtitle: 'MGA Foundation Charter',
    summary:
      '분산되어 있던 지역 조직을 단일 표준으로 묶는 마법소녀협회(MGA) 헌장이 제정되었다. 부정 등급 체계와 보상 시스템이 공식화되었다.',
    consequence:
      '작전 중계 표준과 정체 보호 법률이 시행되어 사회 질서가 안정권에 진입했다.',
    atmosphere: 'balance',
  },
  {
    year: 2015,
    title: '대피소 문화 정착',
    subtitle: 'Shelter Broadcast Era',
    summary:
      '스마트폰 경보 앱과 지하 대피소 대형 스크린이 보편화되며 시민들은 경보를 일상 프로토콜로 받아들이기 시작했다.',
    consequence:
      '공포 관리에서 참여형 응원 문화로 전환, 팬클럽 경제가 급성장했다.',
    atmosphere: 'hope',
  },
  {
    year: 2025,
    title: '공존의 시대',
    subtitle: 'Hope Under Tension',
    summary:
      '부정의 출현은 여전히 지속되지만, MGA의 레이더-대피-교전-복구 루프가 사회 시스템의 일부가 되었다.',
    consequence:
      '인류는 두려움 속에서도 마법소녀를 희망의 상징이자 공공 인프라로 신뢰한다.',
    atmosphere: 'balance',
  },
];

export const impurityTiers: ImpurityTier[] = [
  {
    level: 'S',
    dangerLabel: '국가 소멸급',
    spawnRate: '극저빈도 / 월 0~1회',
    destructivePower: '단일 도시 소거 가능',
    corruption: '반경 12km 정신 오염',
    requiredResponse: '국가 비상 선포 + S급 마법소녀 연합 투입',
    recommendedUnits: ['S급 전략 소대', 'MGA 항공관제', '전역 대피소 동시 개방'],
  },
  {
    level: 'A',
    dangerLabel: '광역 재난급',
    spawnRate: '저빈도 / 주 1회 내외',
    destructivePower: '도시 인프라 대규모 파괴',
    corruption: '반경 6km 인지 교란',
    requiredResponse: 'A급 이상 마법소녀 지휘 + 군-협회 합동',
    recommendedUnits: ['A급 기동대', '의료 대피 코어', '방송 통합 사령'],
  },
  {
    level: 'B',
    dangerLabel: '특수 작전급',
    spawnRate: '중빈도 / 일 2~4회',
    destructivePower: '구 단위 구조물 붕괴',
    corruption: '반경 3km 불안 증폭',
    requiredResponse: '마법소녀 필수 투입, 민간인 즉시 대피',
    recommendedUnits: ['B급 전술팀', '도심 방벽 드론', '모바일 지휘차'],
  },
  {
    level: 'C',
    dangerLabel: '도시 경보급',
    spawnRate: '고빈도 / 일 6~10회',
    destructivePower: '블록 단위 피해',
    corruption: '반경 1.5km 공황 유도',
    requiredResponse: '특수 기동대 또는 숙련 마법소녀 필요',
    recommendedUnits: ['C급 대응반', '대피 유도 AI', '현장 드론캠'],
  },
  {
    level: 'D',
    dangerLabel: '훈련 실전급',
    spawnRate: '상시 / 시간당 다수',
    destructivePower: '단일 시설 파손',
    corruption: '근거리 스트레스 반응',
    requiredResponse: '지망생/초급 마법소녀 실전 배치 가능',
    recommendedUnits: ['교육대 실습반', '보조 힐러', '감독관 1명'],
  },
  {
    level: 'E',
    dangerLabel: '하급 개체',
    spawnRate: '상시 / 군집 출현',
    destructivePower: '경미한 물리 피해',
    corruption: '심리적 불쾌감 유발',
    requiredResponse: '신속 제압 및 코어 회수',
    recommendedUnits: ['신입 연습조', '민간 통제 요원', '회수 드론'],
  },
];

export const magicalGirls: MagicalGirlProfile[] = [
  {
    id: 'aurora-rina',
    ranking: 1,
    codename: '세인트 오로라',
    publicImage: buildAssetUrl('VisualNovel', 'Character', '강리나_변신_normal.png'),
    privateImage: buildAssetUrl('VisualNovel', 'Character', '강리나_normal.png'),
    fanClub: 'Polar Bloom',
    activeRegion: '서울 북서권 / 공중 전투 특화',
    specialMove: 'Starlight Aegis',
    quote: '절망은 지워지지 않아도, 희망은 더 크게 번질 수 있어.',
    privateIdentity: '비공개 고등과정 2학년',
    age: 16,
    retirementForecast: '18세까지 1년 7개월',
    hopeSignature: '책임감이 강할수록 장벽 마법 출력 상승',
    secretRisk: '팀원 부상 목격 시 마력 급락 위험',
  },
  {
    id: 'pulse-arin',
    ranking: 2,
    codename: '네온 펄스',
    publicImage: buildAssetUrl('VisualNovel', 'Character', '도아린_변신_normal.png'),
    privateImage: buildAssetUrl('VisualNovel', 'Character', '도아린_normal.png'),
    fanClub: 'Pulse Shift',
    activeRegion: '수도권 남동부 / 고속 제압',
    specialMove: 'Voltage Waltz',
    quote: '내가 먼저 웃으면, 팀 전체의 HP가 오른다니까.',
    privateIdentity: '비공개 중등과정 3학년',
    age: 15,
    retirementForecast: '18세까지 2년 2개월',
    hopeSignature: '낙관 유지 시 이동속도·연계율 상승',
    secretRisk: '장시간 단독 교전 시 과열 누적',
  },
  {
    id: 'snow-hayan',
    ranking: 3,
    codename: '스노우 벨',
    publicImage: buildAssetUrl('VisualNovel', 'Character', '백하얀_변신_normal.png'),
    privateImage: buildAssetUrl('VisualNovel', 'Character', '백하얀_normal.png'),
    fanClub: 'White Resonance',
    activeRegion: '도심 방어선 / 군중 보호',
    specialMove: 'Mirage Blanket',
    quote: '불안한 마음을 잠깐 맡겨. 내가 숨을 고르게 해줄게.',
    privateIdentity: '비공개 고등과정 1학년',
    age: 16,
    retirementForecast: '18세까지 1년 11개월',
    hopeSignature: '타인 안정화 시 회복 마법 효율 증가',
    secretRisk: '절망 감정 과공명 시 혼절 가능성',
  },
  {
    id: 'cipher-seoyoon',
    ranking: 4,
    codename: '코드 세라프',
    publicImage: buildAssetUrl('VisualNovel', 'Character', '신서윤_변신_normal.png'),
    privateImage: buildAssetUrl('VisualNovel', 'Character', '신서윤_normal.png'),
    fanClub: 'Bit Sanctuary',
    activeRegion: 'MGA 서버권역 / 정보전',
    specialMove: 'Hexa Prism Lock',
    quote: '감정이 무너지면 방정식도 깨져. 그래서 더 단단히 버텨.',
    privateIdentity: '비공개 고등과정 2학년',
    age: 17,
    retirementForecast: '18세까지 9개월',
    hopeSignature: '집중 몰입 시 결계 정밀도 극대화',
    secretRisk: '장기 작전 후 심리 피로 누적 심각',
  },
  {
    id: 'ember-sohee',
    ranking: 5,
    codename: '엠버 로즈',
    publicImage: buildAssetUrl('VisualNovel', 'Character', '연소희_변신_normal.png'),
    privateImage: buildAssetUrl('VisualNovel', 'Character', '연소희_normal.png'),
    fanClub: 'Rose Pressure',
    activeRegion: '산업지대 / 중장거리 화력',
    specialMove: 'Burning Crescendo',
    quote: '약해 보여도 괜찮아. 불꽃은 원래 작은 데서 시작해.',
    privateIdentity: '비공개 중등과정 2학년',
    age: 14,
    retirementForecast: '18세까지 3년 4개월',
    hopeSignature: '응원 소리와 동기화 시 화력 증폭',
    secretRisk: '감정 기복 시 출력 변동 폭 큼',
  },
  {
    id: 'mist-seola',
    ranking: 6,
    codename: '미스트 라크',
    publicImage: buildAssetUrl('VisualNovel', 'Character', '한설아_변신_normal.png'),
    privateImage: buildAssetUrl('VisualNovel', 'Character', '한설아_normal.png'),
    fanClub: 'Lark Harbor',
    activeRegion: '하천권역 / 구조 특화',
    specialMove: 'Silent Tide Corridor',
    quote: '빠르게 이기는 것보다 모두를 안전하게 데려오는 게 우선이야.',
    privateIdentity: '비공개 고등과정 1학년',
    age: 15,
    retirementForecast: '18세까지 2년 8개월',
    hopeSignature: '침착함 유지 시 구조 마법 반경 증가',
    secretRisk: '동료 실종 상황에서 판단 지연 발생',
  },
];

export const initialAlerts: AlertItem[] = [
  {
    id: 'AL-250418-01',
    city: '서울',
    district: '마포-홍대권',
    level: 'B',
    status: '교전 중',
    magicalGirl: '세인트 오로라',
    evacRate: 72,
    updatedAt: '21:03:18',
  },
  {
    id: 'AL-250418-02',
    city: '인천',
    district: '송도 워터프론트',
    level: 'C',
    status: '대피 진행',
    magicalGirl: '미스트 라크',
    evacRate: 44,
    updatedAt: '21:01:52',
  },
  {
    id: 'AL-250418-03',
    city: '부산',
    district: '광안리 해안권',
    level: 'A',
    status: '교전 중',
    magicalGirl: '네온 펄스',
    evacRate: 81,
    updatedAt: '21:02:44',
  },
  {
    id: 'AL-250418-04',
    city: '대전',
    district: '중앙 과학지구',
    level: 'D',
    status: '감시',
    magicalGirl: '코드 세라프',
    evacRate: 19,
    updatedAt: '21:00:09',
  },
];

export const shelterProtocol: ShelterStep[] = [
  {
    id: 1,
    title: '부정 주의보 수신',
    action: '스마트폰 경보를 열어 위험 등급과 인근 대피소 위치를 즉시 확인한다.',
    duration: '30초 이내',
  },
  {
    id: 2,
    title: '이동 경로 잠금',
    action: 'MGA 앱의 파란 유도선 경로를 따라 지하 대피소로 이동한다.',
    duration: '2~4분',
  },
  {
    id: 3,
    title: '생체 체크인',
    action: '대피소 입구 단말기에 QR 또는 지문 인증을 진행해 인원 파악을 완료한다.',
    duration: '1분',
  },
  {
    id: 4,
    title: '라이브 브리핑 시청',
    action: '교전 중인 마법소녀 채널을 시청하며 협회 공지에 따라 대기한다.',
    duration: '상황 종료까지',
  },
  {
    id: 5,
    title: '해제 후 복귀',
    action: 'MGA 공식 해제 신호 확인 후 지정 출구로 순차 복귀한다.',
    duration: '5~10분',
  },
];

export const liveChannelLineup = [
  'MGA Live 01 - 수도권 실시간 교전 중계',
  'MGA Live 07 - 시민 질문 응답 브리핑',
  'MGA Live 12 - 의료/교통 복구 상태',
  'MGA Live 21 - 마법소녀 응원 메시지 모음',
];

export const goodsCatalog: GoodsItem[] = [
  {
    id: 'goods-aurora-drink',
    name: '오로라 스파클링 드링크',
    series: 'S-Rank Signature',
    rarity: 'Legend',
    price: '₩5,800',
    slogan: '한 모금에 +5 희망 버프',
    previewImage: buildAssetUrl('VisualNovel', 'Background', 'bg_park_fountain_night.png'),
    requiredImageId: 'mga_goods_aurora_drink',
  },
  {
    id: 'goods-pulse-lightstick',
    name: '네온 펄스 응원봉',
    series: 'Fan Raid Gear',
    rarity: 'Rare',
    price: '₩29,000',
    slogan: '대피소 라이브 싱크 모드 지원',
    previewImage: buildAssetUrl('VisualNovel', 'Background', 'bg_digital_space.png'),
    requiredImageId: 'mga_goods_pulse_lightstick',
  },
  {
    id: 'goods-snow-blanket',
    name: '스노우 벨 안심 담요',
    series: 'Shelter Comfort Kit',
    rarity: 'Standard',
    price: '₩19,500',
    slogan: '재난 대기 시간을 편안하게',
    previewImage: buildAssetUrl('VisualNovel', 'Background', 'bg_school_winter.png'),
    requiredImageId: 'mga_goods_snow_blanket',
  },
  {
    id: 'goods-seraph-badge',
    name: '코드 세라프 보안 뱃지',
    series: 'MGA Official',
    rarity: 'Rare',
    price: '₩14,000',
    slogan: '협회 인증 홀로그램 포함',
    previewImage: buildAssetUrl('VisualNovel', 'Background', 'bg_mga_server_room.png'),
    requiredImageId: 'mga_goods_seraph_badge',
  },
  {
    id: 'goods-ember-cap',
    name: '엠버 로즈 캡슐 캔디',
    series: 'Daily Hope Snack',
    rarity: 'Standard',
    price: '₩4,200',
    slogan: '긴급 대피 가방에 꼭 챙기는 간식',
    previewImage: buildAssetUrl('VisualNovel', 'Background', 'bg_conveni_store_night.png'),
    requiredImageId: 'mga_goods_ember_capsule',
  },
  {
    id: 'goods-mist-pass',
    name: '미스트 라크 우선 입장 패스',
    series: 'Shelter Priority',
    rarity: 'Legend',
    price: '₩48,000',
    slogan: '팬미팅/브리핑 우선 좌석 제공',
    previewImage: buildAssetUrl('VisualNovel', 'Background', 'bg_seolah_cafe.png'),
    requiredImageId: 'mga_goods_mist_pass',
  },
];

export const promotionalCampaigns: CampaignItem[] = [
  {
    title: 'Operation Pink Signal',
    window: '04.18 - 05.02',
    reward: '대피소 응원봉 스킨 +1',
    note: '협회 경보 알림 ON 사용자 대상',
  },
  {
    title: 'Hope Relay Week',
    window: '05.03 - 05.10',
    reward: 'S급 굿즈 추첨권 3장',
    note: '라이브 중계 시청 누적 120분 달성 시 지급',
  },
  {
    title: 'Secret Identity Pledge',
    window: '상시 운영',
    reward: '팬클럽 전용 배지',
    note: '정체 보호 서약 동의 팬클럽 회원에게 자동 지급',
  },
];

export const identityProtectionRules = [
  '변신 전 신상 정보 추적 및 유출 시 협회 제재 및 법적 조치',
  '마법소녀 사적 촬영물의 무단 배포 금지',
  '대피소 내 실시간 위치 공유는 MGA 인증 채널만 허용',
];
