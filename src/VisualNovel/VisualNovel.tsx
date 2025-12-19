import React, { useState, useEffect, useRef, useCallback } from 'react';
import BackgroundImage from './Components/BackgroundImage';
import CharacterSprite from './Components/CharacterSprite';
import DialogueBox from './Components/DialogueBox';
import ChoiceButtons from './Components/ChoiceButtons';
import DialogueLog, { type DialogueLogEntry } from './Components/DialogueLog';
import StoryEditor from './StoryEditor';
import type { ScriptLine, ScriptScene, Character } from './types';
import config from './Script/config.json';

const VisualNovel: React.FC = () => {
  const [currentSceneFile, setCurrentSceneFile] = useState<string>(config.startSceneFile);
  const [currentScene, setCurrentScene] = useState<ScriptScene | null>(null);
  const [currentLineId, setCurrentLineId] = useState<string>('');
  const [currentLine, setCurrentLine] = useState<ScriptLine | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // 편집 모드
  const [isEditorMode, setIsEditorMode] = useState(false);
  
  // UI 상태
  const [isAutoMode, setIsAutoMode] = useState(false);
  const [isUIHidden, setIsUIHidden] = useState(false);
  const [isLogOpen, setIsLogOpen] = useState(false);
  
  // 대화 로그
  const [dialogueLog, setDialogueLog] = useState<DialogueLogEntry[]>([]);
  
  // Auto 모드 타이머
  const autoTimerRef = useRef<number | null>(null);

  // 씬 파일 로드
  useEffect(() => {
    const loadScene = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/web-hub/VisualNovel/Script/${currentSceneFile}`);
        const scene = await response.json() as ScriptScene;
        setCurrentScene(scene);
        setCurrentLineId(scene.startId);
      } catch (error) {
        console.error('씬 로드 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadScene();
  }, [currentSceneFile]);

  // 현재 라인 로드
  useEffect(() => {
    if (currentScene && currentLineId) {
      const line = currentScene.lines.find(l => l.id === currentLineId);
      if (line) {
        setCurrentLine(line);
      
        // 대화 로그에 추가 (dialogue 타입인 경우)
        if (line.type === 'dialogue' && line.text) {
          setDialogueLog(prev => [...prev, {
            speaker: line.character || '내레이터',
            dialogue: line.text,
            timestamp: Date.now()
          }]);
        }

        // 엔딩 처리
        if (line.isEnding) {
          // 엔딩 화면 표시 후 타이틀로 돌아가기 등의 처리 가능
          console.log('엔딩 도달');
        }
      }
    }
  }, [currentScene, currentLineId]);

  // Auto 모드 처리
  useEffect(() => {
    if (isAutoMode && currentLine && currentLine.type === 'dialogue') {
      // dialogue 타입일 때만 Auto 모드 작동
      autoTimerRef.current = setTimeout(() => {
        handleNext();
      }, 3000); // 3초 후 자동 진행
      
      return () => {
        if (autoTimerRef.current) {
          clearTimeout(autoTimerRef.current);
        }
      };
    }
  }, [isAutoMode, currentLine, currentLineId]);

  // 다음 대화로 진행
  const handleNext = useCallback(() => {
    if (currentLine?.nextSceneFile) {
      // 다음 씬 파일로 이동
      setCurrentSceneFile(currentLine.nextSceneFile);
    } else if (currentLine?.nextScriptId) {
      // 씬 파일 내 다음 라인으로 이동
      setCurrentLineId(currentLine.nextScriptId);
    }
  }, [currentLine]);

  // 선택지 선택 처리
  const handleChoice = useCallback((choice: { nextScriptId?: string; nextSceneFile?: string }) => {
    if (choice.nextSceneFile) {
      // 다음 씬 파일로 이동
      setCurrentSceneFile(choice.nextSceneFile);
    } else if (choice.nextScriptId) {
      // 씬 파일 내 라인으로 이동
      setCurrentLineId(choice.nextScriptId);
    }
    // 선택지 선택 시 Auto 모드 해제
    setIsAutoMode(false);
  }, []);

  // Auto 모드 토글
  const handleToggleAuto = useCallback(() => {
    setIsAutoMode(prev => !prev);
  }, []);

  // Skip 기능
  const handleSkip = useCallback(() => {
    if (currentLine?.nextSceneFile) {
      setCurrentSceneFile(currentLine.nextSceneFile);
    } else if (currentLine?.nextScriptId) {
      setCurrentLineId(currentLine.nextScriptId);
    }
  }, [currentLine]);

  // 로그 열기/닫기
  const handleToggleLog = useCallback(() => {
    setIsLogOpen(prev => !prev);
  }, []);

  // UI 숨기기/보이기
  const handleToggleUI = useCallback(() => {
    setIsUIHidden(prev => !prev);
  }, []);

  // 스페이스바로 UI 토글
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !isLogOpen) {
        e.preventDefault();
        handleToggleUI();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isLogOpen, handleToggleUI]);

  if (isLoading || !currentScene || !currentLine) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#2D1115]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-pink-300 border-t-pink-600 mb-4" />
          <p className="text-2xl text-pink-600 font-bold">로딩 중...</p>
        </div>
      </div>
    );
  }

  // 편집 모드
  if (isEditorMode) {
    return <StoryEditor onClose={() => setIsEditorMode(false)} />;
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#2D1115] overflow-hidden">
      {/* 스토리 편집 버튼 */}
      <button
        onClick={() => setIsEditorMode(true)}
        className="fixed top-4 right-4 z-50 bg-gradient-to-br from-pink-400 to-pink-500 
          hover:from-pink-500 hover:to-pink-600 text-white rounded-full w-12 h-12 
          flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200
          border-2 border-white/30"
        title="스토리 그래프 보기"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      </button>

      {/* 레터박스 메인 컨테이너 (16:9 비율) */}
      <div className="relative w-full max-w-[177.78vh] h-full max-h-[56.25vw] bg-pink-50 shadow-2xl">
        {/* 배경 이미지 */}
        <BackgroundImage image={currentLine.background || ''} />
        
        {/* 캐릭터 스프라이트 (단일 캐릭터) */}
        {!isUIHidden && currentLine.characterImage && currentLine.characterPosition && (
          <CharacterSprite 
            character={{
              id: 'current',
              name: currentLine.character || '',
              image: currentLine.characterImage,
              position: currentLine.characterPosition
            }} 
          />
        )}
        
        {/* 대화창 또는 선택지 */}
        {!isUIHidden && (
          <>
            {currentLine.type === 'choice' && currentLine.choices && currentLine.choices.length > 0 ? (
              <ChoiceButtons 
                choices={currentLine.choices} 
                onChoice={handleChoice}
              />
            ) : (
              <DialogueBox 
                speaker={currentLine.character}
                speakerImage={currentLine.characterImage}
                dialogue={currentLine.text}
                onNext={handleNext}
                isAutoMode={isAutoMode}
                onToggleAuto={handleToggleAuto}
                onSkip={handleSkip}
                onShowLog={handleToggleLog}
                onToggleUI={handleToggleUI}
              />
            )}
          </>
        )}
        
        {/* 대화 로그 */}
        <DialogueLog
          isOpen={isLogOpen}
          onClose={handleToggleLog}
          logs={dialogueLog}
        />
        
        {/* UI 숨김 안내 */}
        {isUIHidden && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 animate-fadeIn">
            <div className="bg-black/60 backdrop-blur-sm text-white px-8 py-4 rounded-2xl border-2 border-white/20">
              <p className="text-center text-lg">
              스페이스바를 눌러 UI 표시
            </p>
          </div>
        </div>
      )}
      
        {/* UI 데코레이션 - 상단 핑크 그라데이션 */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-pink-900/10 to-transparent pointer-events-none z-5" />
      </div>
      
      {/* CSS 애니메이션 정의 */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        /* 웹폰트 import */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
      `}</style>
    </div>
  );
};

export default VisualNovel;
