import type { DialogueScript } from '../types';

/**
 * 대화 스크립트 라이브러리.
 * 새 스크립트 추가 시 이 객체에 키-값 쌍만 추가하면 됨.
 */
export const DIALOGUE_SCRIPTS: Record<string, DialogueScript> = {
  // ── 테스트 시나리오 ──────────────────────────────────────────────────────

  // 전투 시작 전 독백 (주인공만 등장)
  battle_intro: {
    id: 'battle_intro',
    showOtherCharacter: false,
    lines: [
      {
        speaker: 'narrator',
        text: '고요한 던전의 깊은 곳. 짙은 점액질의 냄새와 함께 낮은 울음소리가 메아리쳐 온다.',
      },
      {
        speaker: 'protagonist',
        characterName: '영웅',
        text: '드디어 이 층의 지킴이와 만나는군. 오는 길에 들은 소문... 쓰러뜨린 자가 아직 없다고 했지.',
      },
      {
        speaker: 'protagonist',
        characterName: '영웅',
        text: '상관없어. 나는 반드시 이 던전을 통과한다. 물러설 이유 따위는 없어.',
      },
      {
        speaker: 'narrator',
        text: '영웅은 카드 덱을 손에 쥐며 결의를 다졌다. 전투가 시작된다.',
      },
    ],
  },

  // 적 HP 절반 도달 시 트리거 (전투 재개)
  battle_mid: {
    id: 'battle_mid',
    showOtherCharacter: true,
    lines: [
      {
        speaker: 'narrator',
        text: '슬라임은 크게 흔들리며 흐물거리기 시작했다. 하지만 그 눈빛은 아직 꺼지지 않았다.',
      },
      {
        speaker: 'other',
        characterName: '슬라임',
        text: '...끈적...끈적... (아직이다... 아직 쓰러지지 않아!)',
      },
      {
        speaker: 'protagonist',
        characterName: '영웅',
        text: '반이나 버텼군. 예상보다 훨씬 강한데.',
      },
      {
        speaker: 'protagonist',
        characterName: '영웅',
        text: '하지만 이제부터가 진짜야. 끝을 내자.',
      },
    ],
  },

  // 적 처치 후 승리 대화
  battle_victory: {
    id: 'battle_victory',
    showOtherCharacter: true,
    lines: [
      {
        speaker: 'narrator',
        text: '마지막 일격에 슬라임이 크게 흔들리더니, 천천히 형태를 잃기 시작했다.',
      },
      {
        speaker: 'other',
        characterName: '슬라임',
        text: '...끈적... (내가... 이 층의 수호자가... 패배하다니...)',
      },
      {
        speaker: 'protagonist',
        characterName: '영웅',
        text: '잘 싸웠어. 하지만 내가 나아가야 할 길은 아직 멀다.',
      },
      {
        speaker: 'narrator',
        text: '슬라임이 완전히 녹아 사라졌다. 던전 깊은 곳에서 새로운 소리가 들려오기 시작한다.',
      },
      {
        speaker: 'protagonist',
        characterName: '영웅',
        text: '아직 끝이 아니야. 더 깊이, 더 멀리.',
      },
    ],
  },

  // ── 기존 테스트 스크립트 ──────────────────────────────────────────────────

  test_intro: {
    id: 'test_intro',
    showOtherCharacter: true,
    lines: [
      {
        speaker: 'narrator',
        text: '어둠이 짙게 깔린 던전의 입구. 수많은 모험가들이 들어갔지만, 돌아온 이는 없었다.',
      },
      {
        speaker: 'protagonist',
        characterName: '영웅',
        text: '드디어 여기까지 왔군. 이 안에 무엇이 숨겨져 있는지... 직접 확인해야겠어.',
      },
      {
        speaker: 'other',
        characterName: '슬라임',
        text: '...끈적끈적... (으르렁)',
      },
      {
        speaker: 'protagonist',
        characterName: '영웅',
        text: '너가 이 층의 수호자구나. 비켜라. 아니라면 싸워야 할 것이다.',
      },
      {
        speaker: 'narrator',
        text: '슬라임이 공격 태세를 취했다. 전투가 시작된다.',
      },
    ],
  },

  solo_monologue: {
    id: 'solo_monologue',
    showOtherCharacter: false,
    lines: [
      {
        speaker: 'narrator',
        text: '홀로 걷는 복도. 발소리만이 메아리친다.',
      },
      {
        speaker: 'protagonist',
        characterName: '영웅',
        text: '여기까지 오는 데 얼마나 걸렸지... 이제 되돌아갈 수도 없어.',
      },
      {
        speaker: 'protagonist',
        characterName: '영웅',
        text: '앞으로 나아가는 것만이 내가 할 수 있는 일이다.',
      },
    ],
  },
};
