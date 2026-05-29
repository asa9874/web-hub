import type { Item } from '../../types/index.ts';

export const items: Record<string, Item> = {
  'lighter': {
    id: 'lighter', name: '라이터', description: '금이 간 라이터. 불꽃이 서너 번쯤 남았다.',
    lore: '어머니 것이었다.\n"이게 있으면 어두운 데도 괜찮아" 라고 하셨는데.\n불꽃이 몇 번 남지 않았다. 아껴 써야 한다.',
    loreAuthor: '(물건 주인의 기억)',
  },
  'painkiller': {
    id: 'painkiller', name: '진통제', description: '반쯤 비어 있는 진통제 한 병.', effect: { hpDelta: 20 },
    lore: '아세트아미노펜 500mg. 성인 1회 2정, 4시간 간격.\n용법대로 쓰세요. 남은 걸 한꺼번에 먹으면 안 됩니다.\n그쪽에선 약이 귀하니까 조금씩 나눠 쓰고요.',
    loreAuthor: '약사 메모 — B2 의약품 창고',
  },
  'photo': {
    id: 'photo', name: '사진', description: '다시는 바로 쳐다보지 않는 사진 한 장.',
    lore: '뒷면에 날짜가 적혀 있다. D-0 전날.\n꺼내봐도 잊히지 않는 것들이 있다.\n그냥 넣어두는 게 낫겠다.',
    loreAuthor: '(개인 소지품)',
  },
  'master_key': {
    id: 'master_key', name: '마스터키', description: '관리실에서 찾은 마스터키.',
    lore: '이 열쇠로 각 층 관리구역 진입 가능.\n분실 시 즉시 신고 요망. 무단 복제 엄금.\n현재 관리사무소는 비어 있음. 열쇠 돌려줄 사람도 없겠지.',
    loreAuthor: '관리사무소 공고문 (추기: 익명)',
  },
  'bandage': {
    id: 'bandage', name: '붕대', description: '응급처치용 붕대.', effect: { hpDelta: 10 },
    lore: '멸균 처리됨. 사용 전 상처 세척 권장.\n이런 것도 이제 구하기 힘들어졌네.\n아껴 두세요.',
    loreAuthor: '이주원 — 303호 수술실',
  },
  'herb': {
    id: 'herb', name: '정화 약초', description: '오염을 조금 씻어내는 약초.', effect: { corruptionDelta: -15 },
    lore: '오염 수치 -15 확인됨. 공명 억제 효과는 일시적.\n과복용 시 부작용 불명.\n기도하는 마음으로 드세요.',
    loreAuthor: '이주원 — 2차 정화 실험 메모',
  },
  'test_item': {
    id: 'test_item', name: '테스트 아이템', description: 'DEV 전용 테스트 아이템.',
    lore: '[개발자 노트]\n이 아이템은 실제로 존재하지 않습니다.\n게임 세계 내 캐릭터는 이 물건을 볼 수 없습니다.',
    loreAuthor: 'DEV',
  },
  'survival_memo': {
    id: 'survival_memo', name: '생존 기록', description: '203호 벽의 생존 일지 조각. "지하에 사람들이 있다."',
    lore: '지하에 사람들이 있다. B3까지 가라.\n거기 있는 사람들은 아직 사람이다.\n살아서 가면 알게 될 거야.',
    loreAuthor: '203호 익명 생존자 — 벽에 긁어 적음',
  },
  'ryumin_note': {
    id: 'ryumin_note', name: '류민의 메모', description: 'B1 뒷골목 생존자가 손으로 그린 B3 경로 지도.',
    lore: '2번 통로는 절대 안 됨. 내가 직접 확인했어.\n3번으로 가면 B3 창고 앞까지 직진이야.\n조심해서 가. 이 지도가 맞는 건 내가 보증한다.',
    loreAuthor: '류민 — B1 뒷골목',
  },
  'a2_pass': {
    id: 'a2_pass', name: 'A2 입장 허가', description: '오기범이 발급한 A2 지하 3구역 입장 허가증.',
    lore: '지하 3구역 A2 접근 권한 부여. 유효 기간: 불명.\n소지자 신원 확인 필요.\n본 허가증 분실 또는 위조 시 책임을 묻겠음.',
    loreAuthor: '오기범 — 지하 관리위원회',
  },
  'signal_device': {
    id: 'signal_device', name: '신호장비', description: 'A2 봉인 사무실의 무선 신호장비. 외부 통신 가능.',
    lore: '주파수 설정: 135.4MHz.\n응답 없음. 응답 없음. 응답...\n누군가 여기서 계속 기다렸던 모양이다.',
    loreAuthor: '봉인 사무실 포스트잇 (필체: 불명)',
  },
  'food_can': {
    id: 'food_can', name: '통조림', description: '유통기한이 지났지만 먹을 수 있다.', effect: { hpDelta: 15 },
    lore: '먹어도 됨. 맛은 보장 못 함.\n배가 고프면 다른 선택지가 없잖아.',
    loreAuthor: '창고 벽 낙서 (매직펜)',
  },
  'memo_iwon': {
    id: 'memo_iwon', name: '이주원 메모', description: '수술실 303의 마지막 연구 기록. "오염은 공명 주파수다."',
    lore: '오염은 바이러스가 아니다. 공명 주파수다.\n몸이 특정 진동에 동조되어 변성된다.\n정화는 반대 주파수로 교란 가능. 이론상.',
    loreAuthor: '이주원 — 마지막 연구 메모 (303호 수술실)',
  },
  'stethoscope': {
    id: 'stethoscope', name: '청진기', description: '이주원이 남긴 청진기. 오염 주파수를 감지할 수 있을지도.',
    lore: '이걸로 오염된 구역의 주파수를 들을 수 있어요.\n심장 소리 듣는 것처럼요.\n단, 오래 쓰면 당신도 동조됩니다. 주의하세요.',
    loreAuthor: '이주원 — 청진기에 묶인 쪽지',
  },
  'sphinx_doc': {
    id: 'sphinx_doc', name: '스핑크스 문서', description: '정도석이 복사한 마법소녀 군단 기밀. 탑 정화 조건 기록.',
    lore: '탑 정화 조건: 각 층 오염 핵심이 제거되면 다음 층이 열린다.\n이 문서를 갖고 있으면 당신도 타깃이 될 수 있음.\n그래도 알아야 할 것 같아서 복사했다.',
    loreAuthor: '정도석 — 복사본 (원본: 마법소녀 군단 기밀)',
  },
  'a2_key': {
    id: 'a2_key', name: 'A2 봉인 열쇠', description: '발전기실 철판 뒤에서 찾은 열쇠. A2 봉인 사무실 전용.',
    lore: '발전기실 철판 뒤. 누가 숨겨뒀는지 모른다.\n가져갈 사람이 필요할 거라고 생각했던 걸까.\n아니면 자기가 돌아오려고 숨겼거나.',
    loreAuthor: '(발견 당시 상황 메모)',
  },
  'iseah_pact': {
    id: 'iseah_pact', name: '이세아와의 약속', description: '이세아가 내밀었다. D1까지 함께 간다는 증표.',
    lore: 'D1까지 같이 간다.\n혼자는 무섭고, 넌 혼자 가면 죽어.\n그게 이유야.',
    loreAuthor: '이세아 — 직접 쓴 약속 쪽지',
  },
  'special_key': {
    id: 'special_key', name: '특수 열쇠', description: '하나가 남긴 열쇠. 탑 3층 특수구역 문을 열 수 있다.',
    lore: '3층. 특수 구역.\n내가 거기서 뭘 봤는지는 말 안 할게.\n직접 봐. 살아있으면 알게 될 거야.',
    loreAuthor: '하나 — 열쇠에 묶인 쪽지',
  },
};
