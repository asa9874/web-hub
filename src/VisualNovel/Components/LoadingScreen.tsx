import React, { useEffect, useState } from 'react';
import '.././styles/LoadingScreen.css';

interface LoadingScreenProps {
  loadingText?: string;
  progress?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  loadingText = '게임 로딩 중...',
  progress = 0 
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  // 진행률 애니메이션
  useEffect(() => {
    if (progress > displayProgress) {
      const interval = setInterval(() => {
        setDisplayProgress(prev => {
          const newProgress = prev + Math.random() * 15;
          return Math.min(newProgress, progress);
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [progress, displayProgress]);

  return (
    <div className="loading-screen">
      <div className="loading-container">
        {/* 장식 요소 */}
        <div className="loading-decoration">
          <div className="floating-particle particle-1" />
          <div className="floating-particle particle-2" />
          <div className="floating-particle particle-3" />
        </div>

        {/* 로딩 스피너 */}
        <div className="loading-spinner">
          <div className="spinner-ring" />
          <div className="spinner-icon">✨</div>
        </div>

        {/* 로딩 텍스트 */}
        <h2 className="loading-main-text">로딩 중...</h2>
        <p className="loading-sub-text">{loadingText}</p>

        {/* 프로그레스 바 */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${Math.min(displayProgress, 95)}%` }}
            />
          </div>
          <span className="progress-percentage">
            {Math.floor(Math.min(displayProgress, 95))}%
          </span>
        </div>

        {/* 로딩 팁 */}
        <div className="loading-tips">
          <p className="tip-text">💡 Tip: 스토리는 당신의 선택으로 이루어집니다</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
