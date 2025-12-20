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
  nextScriptId?: string;    // 씬 파일 내 다음 라인
  nextSceneFile?: string;   // 다음 씬 파일 경로 (예: "Chapter2/01_Scene.json")
}

export interface ScriptLine {
  id: string;
  type: 'dialogue' | 'choice';
  background?: string; // Background 디렉토리의 이미지 경로
  character?: string; // 대화하는 캐릭터 이름
  characterImage?: string; // 캐릭터 이미지
  characterPosition?: CharacterPosition; // 캐릭터 위치
  characterExit?: string; // 퇴장할 캐릭터 이름 (쉼표로 구분: "연소희,강리나" 또는 단일: "연소희")
  text: string; // 대사 또는 선택지 질문
  music?: string; // 배경음악 파일명 ("none"이면 음악 정지)
  effectSound?: string; // 효과음 파일명
  choices?: Choice[]; // 선택지 배열 (type이 'choice'일 때)
  nextScriptId?: string; // 씬 파일 내 다음 라인
  nextSceneFile?: string; // 다음 씬 파일 경로
  isEnding?: boolean; // 엔딩 여부
}

export interface ScriptScene {
  sceneId: string;
  title: string;
  chapter: number;
  startId: string;
  lines: ScriptLine[];
}

// 하위 호환성을 위한 타입 (구 형식)
export interface ScriptBlock {
  blockId: string;
  title: string;
  startId: string;
  lines: Record<string, ScriptLine>;
}
