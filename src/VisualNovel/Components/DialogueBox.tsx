import React, { useState } from 'react';
import TypewriterText from './TypewriterText';
import ControlButtons from './ControlButtons';

interface DialogueBoxProps {
  speaker?: string;
  speakerImage?: string;
  dialogue: string;
  onNext: () => void;
  isAutoMode: boolean;
  onToggleAuto: () => void;
  onSkip: () => void;
  onShowLog: () => void;
  onToggleUI: () => void;
}

const DialogueBox: React.FC<DialogueBoxProps> = ({ 
  speaker, 
  dialogue, 
  onNext,
  isAutoMode,
  onToggleAuto,
  onSkip,
  onShowLog,
  onToggleUI
}) => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  const handleClick = () => {
    if (!isTypingComplete && !isSkipped) {
      // 타이핑 중이면 스킵
      setIsSkipped(true);
    } else {
      // 타이핑이 끝났으면 다음으로
      onNext();
      // 다음 대화를 위해 리셋
      setIsTypingComplete(false);
      setIsSkipped(false);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 w-full animate-slideUpFade h-60">
      <div className="relative h-full flex flex-col justify-start">
        {/* 느와르 스타일 대화창 - 하단 바 형태 */}
        <div className="absolute inset-0 flex flex-col justify-start px-48 overflow-hidden">
          {/* 메인 대화 컨테이너: 중앙은 진하고 양옆은 투명한 그라데이션 */}
          <div className="relative h-full">
            {/* 핵심 그라데이션: 중앙 검정색 90% → 양옆 20~30% 투명도 */}
            <div className="absolute inset-0 h-full"
              style={{
                background: `linear-gradient(to right, 
                  rgba(0, 0, 0, 0.15) 0%, 
                  rgba(0, 0, 0, 0.35) 10%, 
                  rgba(0, 0, 0, 0.7) 25%, 
                  rgba(0, 0, 0, 0.85) 50%, 
                  rgba(0, 0, 0, 0.7) 75%, 
                  rgba(0, 0, 0, 0.35) 90%, 
                  rgba(0, 0, 0, 0.15) 100%)`,
                maskImage: `linear-gradient(180deg, 
                  transparent 0%,
                  black 8%,
                  black 92%,
                  transparent 100%),
                  linear-gradient(to right, 
                  transparent 0%, 
                  black 5%, 
                  black 95%, 
                  transparent 100%)`,
                WebkitMaskImage: `linear-gradient(180deg, 
                  transparent 0%,
                  black 8%,
                  black 92%,
                  transparent 100%),
                  linear-gradient(to right, 
                  transparent 0%, 
                  black 5%, 
                  black 95%, 
                  transparent 100%)`
              }}
            />
            
            {/* 텍스트 컨테이너 - 상대 위치 */}
            <div className="relative pt-8 px-32 flex flex-col justify-start min-h-48 z-10">
              {/* 캐릭터 이름 - 하늘색, 글자간 간격, 스타일리쉬한 밑줄 */}
              {speaker && speaker !== '나레이션' && speaker !== '내레이터' && (
                <div className="relative mb-4 w-full inline-block">
                  <p className="text-cyan-400 font-black text-3xl tracking-widest pb-2"
                    style={{ 
                      fontFamily: "'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif",
                      textShadow: `-1px -1px 0 #000,
                                   1px -1px 0 #000,
                                   -1px 1px 0 #000,
                                   1px 1px 0 #000,
                                   -1px 0px 0 #000,
                                   1px 0px 0 #000,
                                   0px -1px 0 #000,
                                   0px 1px 0 #000`
                    }}>
                    {speaker}
                  </p>
                  {/* 그라데이션 밑줄 - 인물 이름 텍스트 바로 밑 */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-4/5"
                    style={{
                      background: `linear-gradient(to right, 
                        transparent 0%, 
                        #00d4ff 15%, 
                        #00d4ff 85%, 
                        transparent 100%)`
                    }} />
                </div>
              )}
              
              {/* 대사 텍스트 - 더 큰 크기, 검정색 테두리 효과 */}
              <p className="text-white text-2xl leading-relaxed font-medium max-w-5xl"
                style={{ 
                  fontFamily: "'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif",
                  textShadow: `-1px -1px 0 #000,
                               1px -1px 0 #000,
                               -1px 1px 0 #000,
                               1px 1px 0 #000,
                               -1px 0px 0 #000,
                               1px 0px 0 #000,
                               0px -1px 0 #000,
                               0px 1px 0 #000`
                }}>
                <TypewriterText 
                  text={dialogue}
                  speed={50}
                  onComplete={() => setIsTypingComplete(true)}
                  isSkipped={isSkipped}
                />
              </p>
            </div>
          </div>
        </div>
        
        {/* 컨트롤 버튼 - 우측 상단 */}
        <div className="absolute top-6 right-20 z-30">
          <ControlButtons
            isAutoMode={isAutoMode}
            onToggleAuto={onToggleAuto}
            onSkip={onSkip}
            onShowLog={onShowLog}
            onToggleUI={onToggleUI}
            isUIHidden={false}
            isChoiceActive={false}
          />
        </div>
        
        {/* 다음 표시기 - 우측 하단 */}
        {isTypingComplete && (
          <div className="absolute bottom-6 right-20 z-30 flex items-center gap-2">
            <span className="text-cyan-400 text-2xl">▼</span>
          </div>
        )}
      </div>
      
      {/* 전체 영역 클릭 감지 */}
      <div 
        className="absolute inset-0 cursor-pointer z-50"
        onClick={handleClick}
        aria-label="다음 대화로 진행"
      />
      
      {/* 애니메이션 스타일 */}
      <style>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-arrow {
          0%, 100% {
            opacity: 0.6;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-4px);
          }
        }
        
        .animate-slideUpFade {
          animation: slideUpFade 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DialogueBox;
