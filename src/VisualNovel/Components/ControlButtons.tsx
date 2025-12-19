import React from 'react';

export interface ControlButtonsProps {
  isAutoMode: boolean;
  onToggleAuto: () => void;
  onSkip: () => void;
  onShowLog: () => void;
  onToggleUI: () => void;
  isUIHidden: boolean;
  isChoiceActive?: boolean;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({
  isAutoMode,
  onToggleAuto,
  onSkip,
  onShowLog,
  onToggleUI,
  isUIHidden,
  isChoiceActive = false
}) => {
  if (isUIHidden) return null;

  return (
    <div className="flex gap-2 animate-fadeIn">
      {/* Auto 버튼 */}
      <button
        onClick={onToggleAuto}
        disabled={isChoiceActive}
        className={`group relative w-12 h-12 rounded-full backdrop-blur-md border-2 
          shadow-lg transition-all duration-300 hover:scale-110 active:scale-95
          ${isChoiceActive ? 'opacity-40 cursor-not-allowed' : ''}
          ${isAutoMode 
            ? 'bg-pink-500 border-pink-400 shadow-pink-500/50' 
            : 'bg-pink-100/80 border-pink-300 hover:bg-pink-200/90'
          }`}
        title="자동 모드"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
            strokeWidth={2.5} style={{ color: isAutoMode ? 'white' : '#ec4899' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        {/* 글로우 효과 */}
        {isAutoMode && (
          <div className="absolute inset-0 rounded-full bg-pink-400 blur-xl opacity-60 -z-10 animate-pulse" />
        )}
        {/* 툴팁 */}
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 
          bg-gray-800/90 text-white text-xs rounded-lg whitespace-nowrap
          opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Auto
        </span>
      </button>

      {/* Skip 버튼 */}
      <button
        onClick={onSkip}
        disabled={isChoiceActive}
        className={`group relative w-12 h-12 rounded-full bg-pink-100/80 backdrop-blur-md 
          border-2 border-pink-300 shadow-lg transition-all duration-300 
          hover:bg-pink-200/90 hover:border-pink-400 hover:scale-110 active:scale-95
          ${isChoiceActive ? 'opacity-40 cursor-not-allowed' : ''}`}
        title="스킵"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 
          bg-gray-800/90 text-white text-xs rounded-lg whitespace-nowrap
          opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Skip
        </span>
      </button>

      {/* Log 버튼 */}
      <button
        onClick={onShowLog}
        disabled={isChoiceActive}
        className={`group relative w-12 h-12 rounded-full bg-pink-100/80 backdrop-blur-md 
          border-2 border-pink-300 shadow-lg transition-all duration-300 
          hover:bg-pink-200/90 hover:border-pink-400 hover:scale-110 active:scale-95
          ${isChoiceActive ? 'opacity-40 cursor-not-allowed' : ''}`}
        title="대화 로그"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 
          bg-gray-800/90 text-white text-xs rounded-lg whitespace-nowrap
          opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Log
        </span>
      </button>

      {/* Hide UI 버튼 */}
      <button
        onClick={onToggleUI}
        disabled={isChoiceActive}
        className={`group relative w-12 h-12 rounded-full bg-pink-100/80 backdrop-blur-md 
          border-2 border-pink-300 shadow-lg transition-all duration-300 
          hover:bg-pink-200/90 hover:border-pink-400 hover:scale-110 active:scale-95
          ${isChoiceActive ? 'opacity-40 cursor-not-allowed' : ''}`}
        title="UI 숨기기"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
          </svg>
        </div>
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 
          bg-gray-800/90 text-white text-xs rounded-lg whitespace-nowrap
          opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Hide
        </span>
      </button>
    </div>
  );
};

export default ControlButtons;
