import React, { useState, useEffect, useRef, useCallback } from 'react';
import BackgroundImage from './Components/BackgroundImage';
import CharacterSprite from './Components/CharacterSprite';
import DialogueBox from './Components/DialogueBox';
import ChoiceButtons from './Components/ChoiceButtons';
import DialogueLog, { type DialogueLogEntry } from './Components/DialogueLog';
import CoverPage from './Components/CoverPage';
import LoadingScreen from './Components/LoadingScreen';
import StoryEditor from './StoryEditor';
import type { CharacterPosition, ScriptLine, ScriptScene } from './types';
import config from './Script/config.json';

const VisualNovel: React.FC = () => {
  const [currentSceneFile, setCurrentSceneFile] = useState<string>(config.startSceneFile);
  const [currentScene, setCurrentScene] = useState<ScriptScene | null>(null);
  const [currentLineId, setCurrentLineId] = useState<string>('');
  const [currentLine, setCurrentLine] = useState<ScriptLine | null>(null);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [loadingText, setLoadingText] = useState('게임 로딩 중...');
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // 로딩 화면 타이머 (2초 이상 로딩시에만 표시)
  const loadingTimerRef = useRef<number | null>(null);
  
  // 표지 페이지 상태
  const [showCoverPage, setShowCoverPage] = useState(true);
  
  // 편집 모드
  const [isEditorMode, setIsEditorMode] = useState(false);
  
  // UI 상태
  const [isAutoMode, setIsAutoMode] = useState(false);
  const [isSkipMode, setIsSkipMode] = useState(false);
  const [isUIHidden, setIsUIHidden] = useState(false);
  const [isLogOpen, setIsLogOpen] = useState(false);
  
  // 대화 로그
  const [dialogueLog, setDialogueLog] = useState<DialogueLogEntry[]>([]);
  
  // 선택지 잠금 상태
  const [choiceLocks, setChoiceLocks] = useState<boolean[]>([]);
  
  // 화면에 표시할 캐릭터들 (ID -> Character 매핑)
  const [displayedCharacters, setDisplayedCharacters] = useState<Map<string, { name: string; image: string; position: CharacterPosition }>>(new Map());
  
  // 현재 배경 상태 (이전 배경을 유지하도록)
  const [currentBackground, setCurrentBackground] = useState<string>('');
  
  // Auto 모드 타이머
  const autoTimerRef = useRef<number | null>(null);
  
  // Skip 모드 타이머
  const skipTimerRef = useRef<number | null>(null);
  
  // 오디오 관리
  const bgmRef = useRef<HTMLAudioElement | null>(null);
  const currentMusicRef = useRef<string | null>(null);

  // 씬 파일 로드
  useEffect(() => {
    const loadScene = async () => {
      setLoadingProgress(0);
      setLoadingText('씬 파일 로드 중...');
      
      // 2초 후 로딩 화면 표시
      if (loadingTimerRef.current) {
        clearTimeout(loadingTimerRef.current);
      }
      loadingTimerRef.current = window.setTimeout(() => {
        setShowLoadingScreen(true);
      }, 2000);
      
      try {
        // 진행률 애니메이션
        const progressInterval = setInterval(() => {
          setLoadingProgress(prev => Math.min(prev + Math.random() * 20, 85));
        }, 200);

        const response = await fetch(`/web-hub/VisualNovel/Script/${currentSceneFile}`);
        setLoadingProgress(70);
        setLoadingText('데이터 파싱 중...');

        const scene = await response.json() as ScriptScene;
        setLoadingProgress(85);
        setLoadingText('UI 준비 중...');

        setCurrentScene(scene);
        setCurrentLineId(scene.startId);
        setLoadingProgress(95);
        
        // 새로운 씬으로 전환될 때 화면의 캐릭터 초기화
        setDisplayedCharacters(new Map());
        console.log(`[씬 전환] ${currentSceneFile}`);

        clearInterval(progressInterval);
        setLoadingProgress(100);
        setLoadingText('완료!');

        // 로딩 타이머 취소
        if (loadingTimerRef.current) {
          clearTimeout(loadingTimerRef.current);
          loadingTimerRef.current = null;
        }

        // 로딩 화면이 표시되었다면, 짧은 시간 후 닫기
        setShowLoadingScreen(false);
      } catch (error) {
        console.error('씬 로드 실패:', error);
        setLoadingText('로드 실패...');
        setLoadingProgress(0);
        
        // 로딩 타이머 취소
        if (loadingTimerRef.current) {
          clearTimeout(loadingTimerRef.current);
          loadingTimerRef.current = null;
        }
        
        setTimeout(() => {
          setShowLoadingScreen(false);
        }, 1000);
      }
    };
    
    loadScene();
  }, [currentSceneFile]);

  // 컴포넌트 언마운트시 타이머 정리
  useEffect(() => {
    return () => {
      if (autoTimerRef.current) {
        clearInterval(autoTimerRef.current);
      }
      if (skipTimerRef.current) {
        clearInterval(skipTimerRef.current);
      }
      if (loadingTimerRef.current) {
        clearTimeout(loadingTimerRef.current);
      }
    };
  }, []);

  // 현재 라인 로드
  useEffect(() => {
    if (currentScene && currentLineId) {
      const line = currentScene.lines.find(l => l.id === currentLineId);
      if (line) {
        setCurrentLine(line);
      
        // 배경 처리 (background 필드가 있을 때만 변경)
        if (line.background) {
          if (line.background === 'none') {
            // 명시적으로 "none"이 지정되면 배경 제거
            setCurrentBackground('');
            console.log(`[배경] 제거`);
          } else {
            // 새로운 배경으로 변경
            setCurrentBackground(line.background);
            console.log(`[배경] ${line.background}`);
          }
        } else {
          // background 필드가 없으면 기존 배경 유지 (아무것도 하지 않음)
          console.log(`[배경] 유지 (이미지 지정 안함)`);
        }
      
        // 캐릭터 퇴장 처리
        if (line.characterExit && line.characterExit.trim().length > 0) {
          setDisplayedCharacters(prev => {
            const newMap = new Map(prev);
            const characterNames = line.characterExit!.split(',').map(name => name.trim());
            characterNames.forEach(characterName => {
              newMap.delete(characterName);
              console.log(`[퇴장] ${characterName}`);
            });
            return newMap;
          });
        }
      
        // 캐릭터 상태 업데이트 (추가 또는 표정 변경)
        if (line.characterImage && line.characterPosition) {
          const characterId = line.character || 'main';
          setDisplayedCharacters(prev => {
            const newMap = new Map(prev);
            newMap.set(characterId, {
              name: line.character || '',
              image: line.characterImage!,
              position: line.characterPosition!
            });
            console.log(`[캐릭터] ${characterId}: ${line.characterImage} at ${line.characterPosition}`);
            return newMap;
          });
        } else if (line.type === 'dialogue' && !line.characterImage) {
          // characterImage가 없는 대화 라인: 기존 캐릭터 유지 (표정 변경 없음)
          console.log(`[캐릭터] 유지됨 (이미지 지정 안함)`);
        }
      
        // 대화 로그에 추가 (dialogue 타입인 경우)
        if (line.type === 'dialogue' && line.text) {
          setDialogueLog(prev => [...prev, {
            speaker: line.character || '내레이터',
            dialogue: line.text,
            timestamp: Date.now()
          }]);
        }

        // 선택지 잠금 상태 확인 (choice 타입인 경우)
        if (line.type === 'choice' && line.choices) {
          console.log('🎯 선택지 라인 감지, 유효성 검사 시작');
          const checkAllChoices = async () => {
            const locks = await Promise.all(
              line.choices!.map(async (choice, index) => {
                console.log(`\n--- 선택지 ${index + 1}: "${choice.text}" ---`);
                const isValid = await checkChoiceValidity(choice);
                const locked = !isValid;
                console.log(`결과: ${locked ? '🔒 잠금' : '🔓 해제'}\n`);
                return locked;
              })
            );
            console.log('🎯 최종 잠금 상태:', locks);
            setChoiceLocks(locks);
          };
          checkAllChoices();
        }

        // 배경음악 처리
        if (line.music !== undefined) {
          if (line.music === 'none') {
            if (bgmRef.current) {
              bgmRef.current.pause();
              bgmRef.current.currentTime = 0;
              bgmRef.current = null;
              currentMusicRef.current = null;
            }
          } else if (line.music !== currentMusicRef.current) {
            if (bgmRef.current) {
              bgmRef.current.pause();
              bgmRef.current = null;
            }
            
            const audio = new Audio(`/web-hub/VisualNovel/Sound/music/${line.music}`);
            audio.loop = true;
            audio.volume = 0.5;
            audio.play().catch(err => console.error('BGM 재생 실패:', err));
            bgmRef.current = audio;
            currentMusicRef.current = line.music;
          }
        }

        // 효과음 처리
        if (line.effectSound) {
          const sfx = new Audio(`/web-hub/VisualNovel/Sound/effect/${line.effectSound}`);
          sfx.volume = 0.5;
          sfx.play().catch(err => console.error('효과음 재생 실패:', err));
        }

        // 엔딩 처리
        if (line.isEnding) {
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

  // 컴포넌트 언마운트 시 BGM 정리
  useEffect(() => {
    return () => {
      if (bgmRef.current) {
        bgmRef.current.pause();
        bgmRef.current = null;
      }
    };
  }, []);

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

  // 선택지 유효성 검사 (재귀적으로 최종 도달 지점까지 확인)
  const checkChoiceValidity = useCallback(async (choice: { nextScriptId?: string; nextSceneFile?: string }): Promise<boolean> => {
    console.log('🔍 선택지 검사:', choice);
    
    if (choice.nextSceneFile) {
      // 씬 파일 존재 여부 확인 - 실제 JSON 파싱으로 검증
      try {
        const response = await fetch(`/web-hub/VisualNovel/Script/${choice.nextSceneFile}`);
        if (!response.ok) {
          console.log(`📄 파일 확인 [${choice.nextSceneFile}]: ❌ HTTP ${response.status}`);
          return false;
        }
        
        // 실제로 JSON을 파싱해서 유효한 씬 파일인지 확인
        const data = await response.json();
        const isValid = data && typeof data === 'object' && 'sceneId' in data && 'lines' in data;
        console.log(`📄 파일 확인 [${choice.nextSceneFile}]:`, isValid ? '✅ 유효한 씬 파일' : '❌ 유효하지 않은 JSON');
        return isValid;
      } catch (error) {
        console.log(`📄 파일 확인 [${choice.nextSceneFile}]: ❌ 파싱 오류`, error);
        return false;
      }
    } else if (choice.nextScriptId && currentScene) {
      // 씬 내 라인 ID 존재 여부 확인
      const targetLine = currentScene.lines.find(line => line.id === choice.nextScriptId);
      if (!targetLine) {
        console.log(`🔗 라인 확인 [${choice.nextScriptId}]: ❌ 라인 없음`);
        return false; // 라인이 존재하지 않음
      }
      
      console.log(`🔗 라인 확인 [${choice.nextScriptId}]: ✅ 라인 존재`);
      
      // 해당 라인이 nextSceneFile을 가지고 있으면 그 파일도 확인
      if (targetLine.nextSceneFile) {
        console.log(`  ↳ 다음 파일 확인 필요: ${targetLine.nextSceneFile}`);
        try {
          const response = await fetch(`/web-hub/VisualNovel/Script/${targetLine.nextSceneFile}`);
          if (!response.ok) {
            console.log(`  📄 파일 확인 [${targetLine.nextSceneFile}]: ❌ HTTP ${response.status}`);
            return false;
          }
          
          // 실제로 JSON을 파싱해서 유효한 씬 파일인지 확인
          const data = await response.json();
          const isValid = data && typeof data === 'object' && 'sceneId' in data && 'lines' in data;
          console.log(`  📄 파일 확인 [${targetLine.nextSceneFile}]:`, isValid ? '✅ 유효한 씬 파일' : '❌ 유효하지 않은 JSON');
          return isValid;
        } catch (error) {
          console.log(`  📄 파일 확인 [${targetLine.nextSceneFile}]: ❌ 파싱 오류`, error);
          return false;
        }
      }
      
      // nextSceneFile이 없으면 라인만 있으면 OK
      console.log(`  ✅ 더 이상 확인할 파일 없음 - 유효`);
      return true;
    }
    console.log('⚠️ nextScriptId와 nextSceneFile 둘 다 없음');
    return false;
  }, [currentScene]);

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

  // Skip 기능 - 토글 방식으로 변경
  const handleSkip = useCallback(() => {
    setIsSkipMode(prev => {
      const newSkipMode = !prev;
      console.log(`[스킵 모드] ${newSkipMode ? '활성화' : '비활성화'}`);
      
      if (newSkipMode) {
        // 스킵 모드 시작
        skipTimerRef.current = window.setInterval(() => {
          console.log('[스킵 진행 중...]');
          setCurrentLineId(prevLineId => {
            const scene = currentScene;
            if (!scene) return prevLineId;

            const line = scene.lines.find(l => l.id === prevLineId);
            if (!line) return prevLineId;

            // 선택지 라인에 도달하면 스킵 모드 해제
            if (line.type === 'choice') {
              console.log('[스킵 모드] 선택지 도달 - 스킵 해제');
              if (skipTimerRef.current) {
                clearInterval(skipTimerRef.current);
                skipTimerRef.current = null;
              }
              setIsSkipMode(false);
              return prevLineId;
            }

            // 다음 라인으로 이동
            if (line.nextScriptId) {
              return line.nextScriptId;
            }
            
            return prevLineId;
          });
        }, 300); // 300ms마다 다음 대화로 진행
      } else {
        // 스킵 모드 중지
        if (skipTimerRef.current) {
          clearInterval(skipTimerRef.current);
          skipTimerRef.current = null;
        }
      }
      
      return newSkipMode;
    });
  }, [currentScene]);

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

  if (showLoadingScreen || !currentScene || !currentLine) {
    return (
      <LoadingScreen 
        loadingText={loadingText}
        progress={loadingProgress}
      />
    );
  }

  // 표지 페이지 표시
  if (showCoverPage) {
    return <CoverPage onStartGame={() => setShowCoverPage(false)} />;
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
        <BackgroundImage image={currentBackground} />
        
        {/* 캐릭터 스프라이트 (지속적 캐릭터 시스템) */}
        {!isUIHidden && displayedCharacters.size > 0 && !currentBackground.startsWith('컷씬') && (
          Array.from(displayedCharacters.values()).map((character) => (
            <CharacterSprite 
              key={character.name}
              character={{
                id: character.name,
                name: character.name,
                image: character.image,
                position: character.position
              }}
            />
          ))
        )}
        
        {/* 대화창 또는 선택지 */}
        {!isUIHidden && (
          <>
            {currentLine.type === 'choice' && currentLine.choices && currentLine.choices.length > 0 ? (
              <ChoiceButtons 
                choices={currentLine.choices} 
                onChoice={handleChoice}
                lockedChoices={choiceLocks}
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
      
        {/* Skip 모드 표시 */}
        {isSkipMode && (
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-40 animate-fadeIn">
            <div className="bg-pink-600/90 backdrop-blur-sm text-white px-6 py-3 rounded-full border-2 border-pink-300/50 shadow-lg flex items-center gap-2">
              <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
              </svg>
              <span className="font-bold">스킵 모드</span>
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