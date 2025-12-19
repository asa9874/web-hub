import React from 'react';
import type { Choice } from '../types';

interface ChoiceButtonsProps {
  choices: Choice[];
  onChoice: (choice: Choice) => void;
}

const ChoiceButtons: React.FC<ChoiceButtonsProps> = ({ choices, onChoice }) => {
  return (
    <>
      {/* 풀스크린 오버레이 */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-20 animate-fadeIn" />
      
      {/* 중앙 선택지 컨테이너 */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="w-full max-w-3xl px-8">
          {/* 선택지 버튼들 */}
          <div className="space-y-5 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            {choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => onChoice(choice)}
                className="w-full bg-gradient-to-br from-pink-50/95 via-white/90 to-rose-50/95 
                  backdrop-blur-xl border-[5px] border-pink-300/80 
                  rounded-2xl p-6 shadow-2xl
                  hover:bg-gradient-to-br hover:from-pink-100/95 hover:via-pink-50/90 hover:to-rose-100/95 
                  hover:border-pink-400 hover:scale-[1.03]
                  active:scale-95
                  transition-all duration-300 ease-out
                  group relative overflow-hidden"
                style={{ animationDelay: `${0.15 + index * 0.1}s` }}
              >
                {/* 내부 빛나는 효과 */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/40 pointer-events-none" />
                
                {/* 호버 효과 배경 */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300/0 via-pink-300/40 to-pink-300/0 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* 선택지 번호 */}
                <div className="absolute left-5 top-1/2 -translate-y-1/2 
                  w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 border-3 border-pink-300
                  flex items-center justify-center shadow-lg
                  group-hover:from-pink-500 group-hover:to-pink-600 group-hover:scale-110
                  transition-all duration-200">
                  <span className="text-white font-bold text-xl drop-shadow-md">
                    {index + 1}
                  </span>
                </div>
                
                {/* 선택지 텍스트 */}
                <p className="relative text-gray-800 font-bold text-xl pl-20 pr-16 text-left
                  group-hover:text-gray-900 transition-colors duration-200"
                  style={{ fontFamily: "'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif" }}>
                  {choice.text}
                </p>
                
                {/* 화살표 아이콘 */}
                <div className="absolute right-7 top-1/2 -translate-y-1/2 
                  opacity-0 group-hover:opacity-100 group-hover:translate-x-2
                  transition-all duration-300">
                  <span className="text-pink-500 text-3xl font-bold drop-shadow-md">→</span>
                </div>
                
                {/* 움직이는 빛 효과 */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
                  <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-pink-200/20 via-transparent to-transparent 
                    group-hover:animate-shimmer" />
                </div>
              </button>
            ))}
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
