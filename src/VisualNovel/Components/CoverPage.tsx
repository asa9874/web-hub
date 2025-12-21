import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CoverPage.css';

interface CoverPageProps {
  onStartGame: () => void;
}

const CoverPage: React.FC<CoverPageProps> = ({ onStartGame }) => {
  const navigate = useNavigate();
  const [imageReady, setImageReady] = React.useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 flex">
      {/* 좌측 UI 영역 (35%) - 검정색 기반 */}
      <div className="w-[35%] h-full bg-black flex flex-col items-center justify-center px-8 py-12 z-20 relative">
        {/* 우측 투명 그라데이션 오버레이 - 더 강렬한 효과 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-100 pointer-events-none" />
        {/* 상단 공간 */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          {/* 제목 */}
          <div className="text-center mb-10">
            <img
              src="/web-hub/VisualNovel/Background/title.png"
              alt="Visual Novel Title"
              className="h-56 object-contain mx-auto"
            />
          </div>
        </div>

        {/* 중앙 버튼 영역 */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6 w-full relative z-10">
          {/* 게임 시작 버튼 */}
          <button
            onClick={onStartGame}
            className="glow-button w-full px-8 py-4 text-5xl text-left"
          >
            게임 시작
          </button>

          {/* 히로인 정보 버튼 */}
          <button 
            onClick={() => navigate('/heroin-info')}
            className="glow-button w-full px-8 py-3 text-4xl text-left"
          >
            등장인물
          </button>

          {/* 설정 버튼 */}
          <button className="glow-button w-full px-8 py-3 text-3xl text-left">
            설정
          </button>

          {/* 정보 버튼 */}
          <button className="glow-button w-full px-8 py-3 text-3xl text-left">
            정보
          </button>

          {/* 종료 버튼 */}
          <button className="glow-button w-full px-8 py-3 text-3xl text-left">
            종료
          </button>
        </div>

        {/* 하단 공간 */}
        <div className="flex-1 flex items-end justify-center pb-8 relative z-10">
          <p className="text-gray-500 text-xs text-center">
            © 2025 Visual Novel<br />
            All Rights Reserved
          </p>
        </div>
      </div>

      {/* 우측 일러스트 영역 (65%) */}
      <div className="w-[65%] h-full overflow-hidden relative bg-gray-900">
        <img
          src="/web-hub/VisualNovel/Background/cover_illustration.png"
          alt="Cover Illustration"
          className="w-full h-full object-cover"
          onLoad={() => setImageReady(true)}
          onError={() => setImageReady(true)}
          style={{
            opacity: imageReady ? 1 : 0.5,
            transition: 'opacity 0.3s ease-in',
          }}
        />
        {/* 일러스트 위 그라데이션 오버레이 (좌측 가장자리) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-30" />
        
        {/* 눈이 내리는 효과 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="falling-snowflake"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.6 + Math.random() * 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
