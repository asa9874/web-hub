import React from 'react';
import { ArrowLeft } from 'lucide-react';
import VocabularyTable from './VocabularyTable';
import type { VocabularyItem } from '../types';

interface VocabularyPageProps {
  selectedDays: string[];
  words: VocabularyItem[];
  onBack: () => void;
}

const VocabularyPage: React.FC<VocabularyPageProps> = ({ selectedDays, words, onBack }) => {
  if (!words || words.length === 0) {
    return (
      <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-red-600 font-medium mb-4">단어를 불러올 수 없습니다.</p>
          <button
            onClick={onBack}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium mb-6"
          >
            <ArrowLeft size={20} />
            돌아가기
          </button>

          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tracking-tight">
              단어 학습
            </h1>
            <p className="text-gray-600">
              선택한 Day: <span className="font-semibold text-gray-900">{selectedDays.join(', ')}</span>
            </p>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <VocabularyTable words={words} />
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>각 단어를 클릭하여 한글 뜻을 토글할 수 있습니다</p>
        </div>
      </div>
    </div>
  );
};

export default VocabularyPage;
