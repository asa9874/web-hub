import React from 'react';

interface CoverPageProps {
  onStartGame: () => void;
}

const CoverPage: React.FC<CoverPageProps> = ({ onStartGame }) => {
  const [imageReady, setImageReady] = React.useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 flex">
      {/* 좌측 UI 영역 (35%) - 검정색 기반 */}
      <div className="w-[35%] h-full bg-gradient-to-b from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center px-8 py-12 z-20">
        {/* 상단 공간 */}
        <div className="flex-1 flex items-center justify-center">
          {/* 제목 */}
          <div className="text-center">
            <h1 className="text-5xl font-black text-white mb-2">
              Visual Novel
            </h1>
            <p className="text-gray-400 text-sm mt-4">
              스토리가 담긴 특별한 경험
            </p>
          </div>
        </div>

        {/* 중앙 버튼 영역 */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6 w-full">
          {/* 게임 시작 버튼 */}
          <button
            onClick={onStartGame}
            className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            게임 시작
          </button>

          {/* 설정 버튼 */}
          <button className="w-full px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-300 border border-gray-600 hover:border-gray-500">
            설정
          </button>

          {/* 정보 버튼 */}
          <button className="w-full px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-300 border border-gray-600 hover:border-gray-500">
            정보
          </button>

          {/* 종료 버튼 */}
          <button className="w-full px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-300 border border-gray-600 hover:border-gray-500">
            종료
          </button>
        </div>

        {/* 하단 공간 */}
        <div className="flex-1 flex items-end justify-center pb-8">
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
      </div>
    </div>
  );
};

export default CoverPage;
