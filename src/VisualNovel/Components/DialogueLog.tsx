import React from 'react';

export interface DialogueLogEntry {
  speaker?: string;
  dialogue: string;
  timestamp: number;
}

interface DialogueLogProps {
  isOpen: boolean;
  onClose: () => void;
  logs: DialogueLogEntry[];
}

const DialogueLog: React.FC<DialogueLogProps> = ({ isOpen, onClose, logs }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* 오버레이 배경 */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fadeIn"
        onClick={onClose}
      />
      
      {/* 로그 창 */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-8 pointer-events-none">
        <div className="relative w-full max-w-3xl max-h-[80vh] pointer-events-auto animate-slideUp">
          {/* Glassmorphism 헤더 */}
          <div className="bg-gradient-to-r from-pink-400/90 via-pink-500/90 to-rose-400/90 
            backdrop-blur-md border-4 border-pink-300 rounded-t-3xl p-6 shadow-2xl
            relative overflow-hidden">
            {/* 빛나는 효과 */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-300/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-300/30 rounded-full blur-3xl" />
            
            <div className="relative flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white drop-shadow-lg flex items-center gap-3">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                대화 기록
              </h2>
              
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40
                  hover:bg-white/30 transition-all duration-200 flex items-center justify-center
                  hover:rotate-90 hover:scale-110 active:scale-95"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* 로그 컨텐츠 */}
          <div className="bg-pink-50/95 backdrop-blur-md border-4 border-t-0 border-pink-300 
            rounded-b-3xl shadow-2xl overflow-hidden">
            <div className="max-h-[60vh] overflow-y-auto p-6 space-y-4 custom-scrollbar">
              {logs.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-pink-300 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <p className="text-pink-400 text-lg font-medium">아직 대화 기록이 없습니다</p>
                </div>
              ) : (
                logs.map((log, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border-2 border-pink-200
                      hover:border-pink-300 hover:bg-white/80 transition-all duration-200
                      hover:shadow-lg hover:shadow-pink-200/50">
                      {log.speaker && (
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-pink-400" />
                          <p className="font-bold text-pink-600 text-sm">
                            {log.speaker}
                          </p>
                        </div>
                      )}
                      <p className="text-gray-700 leading-relaxed pl-4">
                        {log.dialogue}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 커스텀 스크롤바 스타일 */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(251, 207, 232, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f472b6, #ec4899);
          border-radius: 10px;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ec4899, #db2777);
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default DialogueLog;
