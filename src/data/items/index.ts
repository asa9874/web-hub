import type { Item } from '../../types/index.ts';

export const items: Record<string, Item> = {
  'lighter':    { id: 'lighter',    name: '라이터',       description: '금이 간 라이터. 불꽃이 서너 번쯤 남았다.' },
  'painkiller': { id: 'painkiller', name: '진통제',       description: '반쯤 비어 있는 진통제 한 병.', effect: { hpDelta: 20 } },
  'photo':      { id: 'photo',      name: '사진',         description: '다시는 바로 쳐다보지 않는 사진 한 장.' },
  'master_key': { id: 'master_key', name: '마스터키',     description: '관리실에서 찾은 마스터키.' },
  'bandage':    { id: 'bandage',    name: '붕대',         description: '응급처치용 붕대.', effect: { hpDelta: 10 } },
  'herb':       { id: 'herb',       name: '정화 약초',    description: '오염을 조금 씻어내는 약초.', effect: { corruptionDelta: -15 } },
  'test_item':  { id: 'test_item',  name: '테스트 아이템', description: 'DEV 전용 테스트 아이템.' },
};
