import React from 'react';
import { BookOpen, Zap } from 'lucide-react';

interface MenuPageProps {
  onSelectMode: (mode: 'vocabulary' | 'quiz') => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ onSelectMode }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-2 tracking-tight">
            English Vocabulary
          </h1>
          <p className="text-lg text-gray-600 font-light">
            학습 방식을 선택하세요
          </p>
        </div>

        {/* Mode Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vocabulary Mode */}
          <button
            onClick={() => onSelectMode('vocabulary')}
            className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300 text-left"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                <BookOpen size={32} className="text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">단어 학습</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Day별로 영단어를 표 형식으로 학습하세요. 한글 뜻을 숨기고 보이는 방식으로 효과적으로 학습할 수 있습니다.
            </p>
            <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
              <span>학습 시작</span>
              <span>→</span>
            </div>
          </button>

          {/* Quiz Mode */}
          <button
            onClick={() => onSelectMode('quiz')}
            className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300 text-left"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-amber-50 rounded-xl group-hover:bg-amber-100 transition-colors">
                <Zap size={32} className="text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">퀴즈 풀이</h2>
            </div>
            <p className="text-gray-600 mb-4">
              4지선다형 퀴즈로 영단어를 테스트하세요. 키보드(1234)나 마우스로 조작할 수 있으며, 마지막에 오답을 다시 풀 수 있습니다.
            </p>
            <div className="flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all">
              <span>퀴즈 시작</span>
              <span>→</span>
            </div>
          </button>
        </div>

        {/* Info Text */}
        <div className="mt-12 text-center text-sm text-gray-600">
          <p>학습과 퀴즈를 병행하여 더욱 효과적으로 영어 단어를 습득할 수 있습니다</p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
