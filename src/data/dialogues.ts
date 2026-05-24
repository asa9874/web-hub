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

};
