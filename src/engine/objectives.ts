import type { PlayerState } from '../types/index.ts';

export interface Objective {
  title:  string;
  detail: string;
}

export function getObjective(state: PlayerState): Objective {
  const id      = state.currentSceneId;
  const inv     = state.inventory;
  const chosen  = state.chosenScenes;
  const has     = (...items: string[]) => items.every(i => inv.includes(i));
  const visited = (sceneId: string) => chosen.includes(sceneId);

  // ── 엔딩 ──────────────────────────────────────────────────────────
  if (id.startsWith('ending_')) {
    return { title: '─ END ─', detail: '이야기가 끝났다.' };
  }

  // ── D1 부정의 탑 ──────────────────────────────────────────────────
  if (id.startsWith('d1_')) {
    if (id === 'd1_abyss_core') {
      return {
        title:  '탑의 심연',
        detail: '심연의 핵 앞에 섰다. 선택할 때가 됐다.',
      };
    }
    if (visited('d1_floor3_open') || visited('d1_abyss_core')) {
      return {
        title:  '심연의 핵으로',
        detail: '스핑크스 최종 프로토콜을 확인했다. 탑 지하 심연의 핵으로 내려가라.',
      };
    }
    if (has('special_key')) {
      return {
        title:  '3층 특수구역',
        detail: '하나의 특수 열쇠를 손에 넣었다. 3층 봉인 문을 열고 최종 프로토콜을 확인하라.',
      };
    }
    return {
      title:  '하나의 흔적',
      detail: '탑 광장의 검게 탄 원형 자국을 찾아라. 하나가 무언가를 남겼다.',
    };
  }

  // ── C2 심층 경계 ──────────────────────────────────────────────────
  if (id.startsWith('c2_')) {
    if (has('iseah_pact')) {
      return {
        title:  '경계선 돌파',
        detail: '이세아가 옆에 있다. 경계선 관측소를 지나 D1 부정의 탑으로 진입하라.',
      };
    }
    return {
      title:  '이세아를 찾아라',
      detail: 'C2를 넘으려면 이세아의 정화력이 필요하다. C1 관측소로 돌아가 동행을 약속하라.',
    };
  }

  // ── C1 한강변 ────────────────────────────────────────────────────
  if (id.startsWith('c1_')) {
    if (has('iseah_pact')) {
      return {
        title:  'C2로 향하라',
        detail: '이세아와의 동행을 약속했다. C2 심층 경계를 향해 북쪽으로 이동하라.',
      };
    }
    if (has('sphinx_doc', 'memo_iwon')) {
      return {
        title:  '이세아와 합류',
        detail: '고가도로 위 관측 지점에서 이세아를 찾아라. 스핑크스 문서와 이주원 메모를 보여주면 함께 갈 것이다.',
      };
    }
    if (has('sphinx_doc') && !has('memo_iwon')) {
      return {
        title:  '이주원 메모 필요',
        detail: '이세아는 이주원 메모도 요구한다. B4 병원 수술실 303을 확인하라.',
      };
    }
    if (!has('sphinx_doc') && has('memo_iwon')) {
      return {
        title:  '스핑크스 문서 필요',
        detail: '이세아는 스핑크스 문서도 요구한다. B6 연세대 정도석을 찾아라.',
      };
    }
    return {
      title:  '이세아를 찾아라',
      detail: '한강변 고가도로 위 관측 지점에 이세아가 있다. 스핑크스 문서와 이주원 메모를 가지고 가라.',
    };
  }

  // ── B6 연세대 ────────────────────────────────────────────────────
  if (id.startsWith('b6_')) {
    if (has('sphinx_doc')) {
      return {
        title:  'C1으로 이동',
        detail: '스핑크스 문서를 확보했다. C1 한강변 관측소에서 이세아와 합류하라.',
      };
    }
    return {
      title:  '정도석을 만나라',
      detail: '공학관 지하 연구실에서 정도석을 찾아라. 이주원 메모를 가지고 가면 스핑크스 문서를 얻을 수 있다.',
    };
  }

  // ── B4 붕괴된 병원 ────────────────────────────────────────────────
  if (id.startsWith('b4_')) {
    if (has('memo_iwon')) {
      return {
        title:  'B6으로 이동',
        detail: '이주원의 연구 메모를 확보했다. B6 연세대 공학관으로 이동해 정도석을 만나라.',
      };
    }
    return {
      title:  '수술실 303',
      detail: '이주원 박사의 마지막 연구를 찾아라. 3층 수술실 303호에 흔적이 있다.',
    };
  }

  // ── A2 지하 3구역 ─────────────────────────────────────────────────
  if (id.startsWith('a2_')) {
    if (has('signal_device') || has('memo_iwon')) {
      return {
        title:  'B4 병원으로',
        detail: '오염 연구의 열쇠는 이주원 박사에게 있다. B4 붕괴된 병원으로 이동하라.',
      };
    }
    if (has('a2_key') && !has('signal_device')) {
      return {
        title:  '봉인 사무실',
        detail: 'A2 봉인 열쇠를 찾았다. 발전기실 근처 봉인 사무실을 열고 신호장비를 가져와라.',
      };
    }
    if (has('a2_pass') && !has('a2_key')) {
      return {
        title:  '봉인 열쇠를 찾아라',
        detail: '발전기실에 무언가 숨겨져 있다. 발전기 B 뒤쪽 철판을 확인하라.',
      };
    }
    return {
      title:  'A2 검문소 통과',
      detail: '생존 기록 또는 류민의 메모를 보여줘 A2 검문소를 통과하라.',
    };
  }

  // ── B3 지하철역 ───────────────────────────────────────────────────
  if (id.startsWith('b3_')) {
    if (has('a2_pass')) {
      return {
        title:  'A2 구역 탐색',
        detail: 'A2 입장 허가를 받았다. 오기범 집무실을 찾아 정보를 모아라. 발전기실도 확인하라.',
      };
    }
    return {
      title:  'A2 진입',
      detail: '플랫폼 A에서 터널을 통해 A2 지하 3구역으로 이동하라. 검문소에서 생존 증거를 제시하라.',
    };
  }

  // ── B1 / B2 / B5 ──────────────────────────────────────────────────
  if (id.startsWith('b1_') || id.startsWith('b2_') || id.startsWith('b5_')) {
    if (has('ryumin_note')) {
      return {
        title:  'B3으로 향하라',
        detail: '류민의 지도를 손에 넣었다. 잔해 더미 지하통로를 통해 B3 지하철역으로 이동하라.',
      };
    }
    return {
      title:  '류민을 찾아라',
      detail: 'B1 잔해 더미 뒷골목에 생존자가 있다. 203호 생존 기록을 가지고 가면 B3 경로를 알려줄 것이다.',
    };
  }

  // ── A1 아파트 내부 ────────────────────────────────────────────────
  if (id.startsWith('a1_') || id === 'corridor_peek' || id === 'apartment_discovered') {
    if (has('survival_memo')) {
      return {
        title:  '아파트를 떠나라',
        detail: '필요한 것은 모았다. 1층 로비를 통해 B1 골목으로 나가라.',
      };
    }
    if (visited('a1_roof_open')) {
      return {
        title:  '203호 확인',
        detail: '이세아를 만났다. B1으로 나가기 전 2층 203호 생존 기록을 챙겨라.',
      };
    }
    if (has('master_key')) {
      return {
        title:  '옥상으로 올라가라',
        detail: '마스터키를 얻었다. 4층 계단을 올라가 옥상 철문을 열어라. 누군가 기다리고 있다.',
      };
    }
    return {
      title:  '마스터키를 찾아라',
      detail: '1층 관리실 키박스 마지막 칸에 마스터키가 있다. 옥상 문을 열기 위해 필요하다.',
    };
  }

  // ── 시작 씬 ───────────────────────────────────────────────────────
  if (id === 'apartment_start') {
    if (visited('apartment_start')) {
      return {
        title:  '아파트를 탈출하라',
        detail: '소리가 멈추지 않는다. 지금 이 아파트에서 나가야 한다.',
      };
    }
    return {
      title:  '소지품을 확인하라',
      detail: '주머니에 무엇이 남아있는지 파악하는 것부터 시작해야 한다.',
    };
  }

  // ── TX 개발 씬 ────────────────────────────────────────────────────
  return {
    title:  '─ DEV 씬 ─',
    detail: '개발자 테스트 구역.',
  };
}
