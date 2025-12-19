import React from 'react';
import type { Choice } from '../types';

interface ChoiceButtonsProps {
  choices: Choice[];
  onChoice: (choice: Choice) => void;
  lockedChoices?: boolean[]; // 각 선택지의 잠금 상태
}

const ChoiceButtons: React.FC<ChoiceButtonsProps> = ({ choices, onChoice, lockedChoices = [] }) => {
  return (
    <>
      {/* 풀스크린 오버레이 */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-20 animate-fadeIn" />
      
      {/* 중앙 선택지 컨테이너 */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="w-full max-w-3xl px-8">
          {/* 선택지 버튼들 */}
          <div className="space-y-5 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            {choices.map((choice, index) => {
              const isLocked = lockedChoices[index] || false;
              return (
              <button
                key={index}
                onClick={() => !isLocked && onChoice(choice)}
                disabled={isLocked}
                className={`w-full backdrop-blur-xl border-[5px] rounded-2xl p-6 shadow-2xl
                  transition-all duration-300 ease-out group relative overflow-hidden
                  ${isLocked 
                    ? 'bg-gradient-to-br from-gray-300/95 via-gray-200/90 to-gray-300/95 border-gray-400/80 cursor-not-allowed opacity-60' 
                    : 'bg-gradient-to-br from-pink-50/95 via-white/90 to-rose-50/95 border-pink-300/80 hover:bg-gradient-to-br hover:from-pink-100/95 hover:via-pink-50/90 hover:to-rose-100/95 hover:border-pink-400 hover:scale-[1.03] active:scale-95'}
                `}
                style={{ animationDelay: `${0.15 + index * 0.1}s` }}
              >
                {/* 내부 빛나는 효과 */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/40 pointer-events-none" />
                
                {/* 호버 효과 배경 */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300/0 via-pink-300/40 to-pink-300/0 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* 선택지 번호 또는 잠금 아이콘 */}
                <div className={`absolute left-5 top-1/2 -translate-y-1/2 
                  w-12 h-12 rounded-full border-3 flex items-center justify-center shadow-lg
                  transition-all duration-200
                  ${isLocked 
                    ? 'bg-gradient-to-br from-gray-400 to-gray-500 border-gray-300' 
                    : 'bg-gradient-to-br from-pink-400 to-pink-500 border-pink-300 group-hover:from-pink-500 group-hover:to-pink-600 group-hover:scale-110'}
                  `}>
                  {isLocked ? (
                    <svg className="w-6 h-6 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span className="text-white font-bold text-xl drop-shadow-md">
                      {index + 1}
                    </span>
                  )}
                </div>
                
                {/* 선택지 텍스트 */}
                <p className={`relative font-bold text-xl pl-20 pr-16 text-left transition-colors duration-200
                  ${isLocked ? 'text-gray-500' : 'text-gray-800 group-hover:text-gray-900'}`}
                  style={{ fontFamily: "'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif" }}>
                  {choice.text}
                  {isLocked && <span className="text-sm text-gray-400 ml-2">(스크립트 미작성)</span>}
                </p>
                
                {/* 화살표 아이콘 */}
                {!isLocked && (
                  <div className="absolute right-7 top-1/2 -translate-y-1/2 
                    opacity-0 group-hover:opacity-100 group-hover:translate-x-2
                    transition-all duration-300">
                    <span className="text-pink-500 text-3xl font-bold drop-shadow-md">→</span>
                  </div>
                )}
                
                {/* 움직이는 빛 효과 */}
                {!isLocked && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-pink-200/20 via-transparent to-transparent 
                      group-hover:animate-shimmer" />
                  </div>
                )}
              </button>
            );
            })}
          </div>
        </div>
      </div>
      
      {/* 애니메이션 스타일 */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default ChoiceButtons;
