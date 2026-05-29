import type { Item } from '../../types/index.ts';

export const items: Record<string, Item> = {
  'lighter':    { id: 'lighter',    name: '라이터',       description: '금이 간 라이터. 불꽃이 서너 번쯤 남았다.' },
  'painkiller': { id: 'painkiller', name: '진통제',       description: '반쯤 비어 있는 진통제 한 병.', effect: { hpDelta: 20 } },
  'photo':      { id: 'photo',      name: '사진',         description: '다시는 바로 쳐다보지 않는 사진 한 장.' },
  'master_key': { id: 'master_key', name: '마스터키',     description: '관리실에서 찾은 마스터키.' },
  'bandage':    { id: 'bandage',    name: '붕대',         description: '응급처치용 붕대.', effect: { hpDelta: 10 } },
  'herb':       { id: 'herb',       name: '정화 약초',    description: '오염을 조금 씻어내는 약초.', effect: { corruptionDelta: -15 } },
  'test_item':      { id: 'test_item',      name: '테스트 아이템', description: 'DEV 전용 테스트 아이템.' },
  'survival_memo':  { id: 'survival_memo',  name: '생존 기록',    description: '203호 벽의 생존 일지 조각. "지하에 사람들이 있다."' },
  'ryumin_note':    { id: 'ryumin_note',    name: '류민의 메모',  description: 'B1 뒷골목 생존자가 손으로 그린 B3 경로 지도.' },
  'a2_pass':        { id: 'a2_pass',        name: 'A2 입장 허가', description: '오기범이 발급한 A2 지하 3구역 입장 허가증.' },
  'signal_device':  { id: 'signal_device',  name: '신호장비',     description: 'A2 봉인 사무실의 무선 신호장비. 외부 통신 가능.' },
  'food_can':       { id: 'food_can',       name: '통조림',       description: '유통기한이 지났지만 먹을 수 있다.', effect: { hpDelta: 15 } },
  'memo_iwon':      { id: 'memo_iwon',      name: '이주원 메모',  description: '수술실 303의 마지막 연구 기록. "오염은 공명 주파수다."' },
  'stethoscope':    { id: 'stethoscope',    name: '청진기',       description: '이주원이 남긴 청진기. 오염 주파수를 감지할 수 있을지도.' },
  'sphinx_doc':     { id: 'sphinx_doc',     name: '스핑크스 문서',description: '정도석이 복사한 마법소녀 군단 기밀. 탑 정화 조건 기록.' },
  'a2_key':         { id: 'a2_key',         name: 'A2 봉인 열쇠', description: '발전기실 철판 뒤에서 찾은 열쇠. A2 봉인 사무실 전용.' },
  'iseah_pact':     { id: 'iseah_pact',     name: '이세아와의 약속', description: '이세아가 내밀었다. D1까지 함께 간다는 증표.' },
};
