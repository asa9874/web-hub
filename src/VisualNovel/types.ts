// TypeScript 타입 정의

export type CharacterPosition = 'left' | 'center-left' | 'center' | 'center-right' | 'right';

export interface Character {
  id: string;
  name: string;
  image: string; // Character 디렉토리의 이미지 경로
  position: CharacterPosition;
}

export interface Choice {
  text: string;
  nextScriptId?: string;  // 블록 내 다음 씬
  nextBlockId?: string;   // 다음 블록으로 이동
}

export interface ScriptLine {
  id: string;
  background: string; // Background 디렉토리의 이미지 경로
  characters: Character[]; // 0~4개의 캐릭터
  speaker?: string; // 대화하는 캐릭터 이름
  speakerImage?: string; // 대화창 우측에 표시될 캐릭터 이미지
  dialogue: string;
  choices?: Choice[]; // 2~4개의 선택지 (선택지가 있는 경우)
  nextScriptId?: string; // 블록 내 다음 씬
  nextBlockId?: string;  // 다음 블록으로 이동
}

export interface ScriptBlock {
  blockId: string;
  title: string;
  startId: string;
  lines: Record<string, ScriptLine>;
}
