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
  speakerImage, 
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
    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 animate-slideUpFade">
      <div className="max-w-6xl mx-auto">
        {/* 컨트롤 버튼 - 대화창 상단 우측 */}
        <div className="absolute -top-5 right-4 z-30">
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

        {/* 메인 대화창 - 좌측 배치 레이아웃 */}
        <div className="relative group">
          {/* 외부 글로우 효과 */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-pink-400 to-rose-300 
            rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
          
          <div className="relative bg-gradient-to-br from-pink-50/85 via-white/80 to-rose-50/85 
            backdrop-blur-xl border-[6px] border-pink-300/80 rounded-3xl shadow-2xl overflow-hidden">
            
            {/* 빛나는 테두리 효과 */}
            <div className="absolute inset-0 rounded-3xl border-2 border-white/40 pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_2px_20px_rgba(255,255,255,0.5)] pointer-events-none" />
            
            <div className="relative flex items-start p-6 gap-5">
              {/* 좌측: 캐릭터 초상화 */}
              {speakerImage && (
                <div className="flex-shrink-0 relative">
                  <div className="relative w-28 h-28 rounded-2xl border-4 border-pink-300/80 
                    overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 
                    shadow-2xl shadow-pink-400/40 ring-4 ring-white/40">
                    {/* 내부 하이라이트 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />
                    
                    <img 
                      src={`/web-hub/VisualNovel/Character/${speakerImage}`}
                      alt={speaker || 'Character'}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23fbb6ce" width="100" height="100"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" fill="white" font-size="40"%3E?%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                </div>
              )}
              
              {/* 우측: 이름 + 대사 영역 */}
              <div className="flex-1 min-h-[120px] flex flex-col justify-center">
                {/* 캐릭터 이름 (나레이션/내레이터 제외) */}
                {speaker && speaker !== '나레이션' && speaker !== '내레이터' && (
                  <div className="mb-3 -mt-1">
                    <div className="inline-block relative group/name">
                      {/* 이름 글로우 */}
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 
                        rounded-xl blur-md opacity-50 group-hover/name:opacity-70 transition-opacity duration-300" />
                      
                      <div className="relative bg-gradient-to-r from-pink-400/95 via-pink-500/95 to-rose-400/95 
                        backdrop-blur-sm border-3 border-pink-300/60 rounded-xl px-5 py-2 
                        shadow-lg shadow-pink-500/30 overflow-hidden">
                        {/* 빛나는 오버레이 */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                        
                        <p className="relative text-white font-bold text-lg tracking-wide drop-shadow-lg">
                          {speaker}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* 대화 텍스트 */}
                <div className="flex-1 flex items-center">
                  <p className="text-gray-800 text-lg leading-relaxed font-medium" 
                    style={{ fontFamily: "'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif" }}>
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
          </div>
        </div>
      </div>
      
      {/* 전체 영역 클릭 감지 */}
      <div 
        className="absolute inset-0 cursor-pointer"
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
        
        @keyframes shimmer {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        .animate-slideUpFade {
          animation: slideUpFade 0.5s ease-out;
        }
        
        .animate-shimmer {
          animation: shimmer 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default DialogueBox;
