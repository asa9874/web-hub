import React, { useState } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

interface CoverPageProps {
  mode: 'vocabulary' | 'quiz';
  onSelectDays: (days: string[]) => void;
  onBack: () => void;
}

const DAYS = [
  { id: 'day1', name: 'Day 1', path: 'day1.json' },
  { id: 'day2', name: 'Day 2', path: 'day2.json' },
];

const CoverPage: React.FC<CoverPageProps> = ({ mode, onSelectDays, onBack }) => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (dayId: string) => {
    setSelectedDays((prev) =>
      prev.includes(dayId) ? prev.filter((d) => d !== dayId) : [...prev, dayId]
    );
  };

  const handleStart = () => {
    if (selectedDays.length > 0) {
      onSelectDays(selectedDays);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium mb-8"
        >
          <ArrowLeft size={20} />
          돌아가기
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-2 tracking-tight">
            {mode === 'vocabulary' ? '단어 학습' : '퀴즈 풀이'}
          </h1>
          <p className="text-lg text-gray-600 font-light">
            학습할 Day를 선택하세요
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          {/* Days Selection */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">학습할 Day 선택</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {DAYS.map((day) => (
                <button
                  key={day.id}
                  onClick={() => toggleDay(day.id)}
                  className={`p-4 rounded-xl font-medium transition-all duration-200 border-2 ${
                    selectedDays.includes(day.id)
                      ? 'bg-blue-50 border-blue-300 text-blue-900 shadow-md'
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  {day.name}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Count */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700">
              선택된 Day: <span className="font-semibold text-gray-900">{selectedDays.length}개</span>
            </p>
          </div>

          {/* Start Button */}
          <button
            onClick={handleStart}
            disabled={selectedDays.length === 0}
            className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
              selectedDays.length > 0
                ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span>시작하기</span>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Info Text */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>여러 Day를 선택하여 한꺼번에 {mode === 'vocabulary' ? '학습' : '퀴즈'}할 수 있습니다</p>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
