import React, { useState, useMemo } from 'react';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import type { QuizResult } from './QuizPage';

interface QuizResultPageProps {
  results: QuizResult[];
  selectedDays: string[];
  onBack: () => void;
  onRetryWrong: () => void;
}

const QuizResultPage: React.FC<QuizResultPageProps> = ({
  results,
  selectedDays,
  onBack,
  onRetryWrong,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const stats = useMemo(() => {
    const correct = results.filter((r) => r.isCorrect).length;
    const wrong = results.length - correct;
    const percentage = Math.round((correct / results.length) * 100);

    return { correct, wrong, percentage, total: results.length };
  }, [results]);

  const wrongAnswers = results.filter((r) => !r.isCorrect);

  const getGrade = (percentage: number) => {
    if (percentage >= 90) return 'S';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    return 'F';
  };

  const grade = getGrade(stats.percentage);

  const getGradeColor = (g: string) => {
    const colors: { [key: string]: string } = {
      S: 'from-yellow-400 to-yellow-600',
      A: 'from-green-400 to-green-600',
      B: 'from-blue-400 to-blue-600',
      C: 'from-purple-400 to-purple-600',
      F: 'from-red-400 to-red-600',
    };
    return colors[g] || 'from-gray-400 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium mb-6"
          >
            <ArrowLeft size={20} />
            메뉴로 돌아가기
          </button>

          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tracking-tight">
              퀴즈 결과
            </h1>
            <p className="text-gray-600">
              Day: <span className="font-semibold text-gray-900">{selectedDays.join(', ')}</span>
            </p>
          </div>
        </div>

        {/* Results Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Grade Card */}
          <div className={`bg-linear-to-br ${getGradeColor(grade)} rounded-2xl shadow-lg p-8 text-white`}>
            <p className="text-sm font-semibold opacity-90 mb-2">최종 등급</p>
            <p className="text-7xl font-black mb-2">{grade}</p>
            <p className="text-sm opacity-90">{stats.percentage}점</p>
          </div>

          {/* Correct Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <p className="text-sm font-semibold text-gray-600 mb-2">정답</p>
            <p className="text-5xl font-black text-green-600 mb-2">{stats.correct}</p>
            <p className="text-sm text-gray-600">/ {stats.total}</p>
          </div>

          {/* Wrong Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <p className="text-sm font-semibold text-gray-600 mb-2">오답</p>
            <p className="text-5xl font-black text-red-600 mb-2">{stats.wrong}</p>
            <p className="text-sm text-gray-600">/ {stats.total}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4 mb-8">
          {wrongAnswers.length > 0 && (
            <button
              onClick={onRetryWrong}
              className="w-full py-4 px-6 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              <RotateCcw size={20} />
              <span>오답만 다시 풀기 ({wrongAnswers.length}개)</span>
            </button>
          )}

          <button
            onClick={() => setShowDetails(!showDetails)}
            className={`w-full py-4 px-6 rounded-xl font-semibold transition-colors ${
              showDetails
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
            }`}
          >
            {showDetails ? '상세 결과 숨기기' : '상세 결과 보기'}
          </button>
        </div>

        {/* Detailed Results */}
        {showDetails && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="divide-y">
              {results.map((result, index) => (
                <div key={index} className={`p-6 ${result.isCorrect ? 'bg-white' : 'bg-red-50'}`}>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{index + 1}. {result.word}</h3>
                      {result.isCorrect ? (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          ✓ 정답
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                          ✗ 오답
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-xs font-semibold text-gray-600 mb-1">정답</p>
                      <p className="text-lg font-semibold text-gray-900">{result.correct}</p>
                    </div>

                    {!result.isCorrect && (
                      <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                        <p className="text-xs font-semibold text-red-600 mb-1">선택 답</p>
                        <p className="text-lg font-semibold text-red-900">{result.selected}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Summary Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            {stats.percentage >= 80
              ? '🎉 훌륭한 성과입니다! 계속 학습하세요.'
              : stats.percentage >= 60
                ? '👍 좋은 성과입니다. 더 복습하세요.'
                : '💪 더 열심히 공부해봅시다!'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizResultPage;
