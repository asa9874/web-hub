import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft } from 'lucide-react';
import type { VocabularyItem } from '../types';

interface QuizPageProps {
  words: VocabularyItem[];
  selectedDays: string[];
  onBack: () => void;
  onShowResults: (results: QuizResult[]) => void;
}

interface QuizQuestion {
  word: VocabularyItem;
  options: string[];
  correctIndex: number;
}

export interface QuizResult {
  word: string;
  meaning: string;
  selected: string;
  correct: string;
  isCorrect: boolean;
}

const QuizPage: React.FC<QuizPageProps> = ({ words, selectedDays, onBack, onShowResults }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [answered, setAnswered] = useState(false);
  const [loading, setLoading] = useState(true);

  // 퀴즈 문제 생성
  useEffect(() => {
    if (words.length < 4) {
      alert('최소 4개 이상의 단어가 필요합니다.');
      onBack();
      return;
    }

    const generatedQuestions = words.map((word) => {
      const correctIndex = Math.floor(Math.random() * 4);
      const options: string[] = ['', '', '', ''];
      options[correctIndex] = word.meaning;

      // 다른 선택지 추가
      const otherMeanings = words
        .filter((w) => w.word !== word.word)
        .map((w) => w.meaning)
        .sort(() => Math.random() - 0.5);

      let meaningIndex = 0;
      for (let i = 0; i < 4; i++) {
        if (options[i] === '') {
          options[i] = otherMeanings[meaningIndex++];
        }
      }

      return {
        word,
        options,
        correctIndex,
      };
    });

    setQuestions(generatedQuestions);
    setAnswers(new Array(generatedQuestions.length).fill(null));
    setLoading(false);
  }, [words, onBack]);

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = answers[currentIndex];

  const handleSelectAnswer = useCallback(
    (index: number) => {
      if (answered) return;

      const newAnswers = [...answers];
      newAnswers[currentIndex] = index;
      setAnswers(newAnswers);
      setAnswered(true);
    },
    [answers, answered, currentIndex]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (answered) {
        if (e.code === 'Space') {
          e.preventDefault();
          handleNext();
        }
      } else {
        const keyToIndex: { [key: string]: number } = {
          '1': 0,
          '2': 1,
          '3': 2,
          '4': 3,
        };

        if (keyToIndex[e.key] !== undefined) {
          e.preventDefault();
          handleSelectAnswer(keyToIndex[e.key]);
        }
      }
    },
    [answered]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnswered(false);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const results: QuizResult[] = questions.map((q, idx) => ({
      word: q.word.word,
      meaning: q.word.meaning,
      selected: answers[idx] !== null ? q.options[answers[idx]!] : '미답변',
      correct: q.options[q.correctIndex],
      isCorrect: answers[idx] === q.correctIndex,
    }));

    onShowResults(results);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-gray-900 animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">퀴즈를 준비 중입니다...</p>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
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
              4지선다 퀴즈
            </h1>
            <p className="text-gray-600">
              Day: <span className="font-semibold text-gray-900">{selectedDays.join(', ')}</span>
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-700">
              {currentIndex + 1} / {questions.length}
            </span>
            <span className="text-sm font-semibold text-gray-700">
              {Math.round(progressPercent)}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Quiz Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {/* Question */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 font-semibold mb-2">다음 영단어의 뜻으로 올바른 것을 선택하세요</p>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-4xl font-black text-blue-900 text-center tracking-wide">
                {currentQuestion.word.word}
              </p>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctIndex;
              const showResult = answered;

              let bgColor = 'bg-gray-50 border-gray-200 hover:border-gray-300';
              if (showResult) {
                if (isCorrect) {
                  bgColor = 'bg-green-50 border-green-300';
                } else if (isSelected && !isCorrect) {
                  bgColor = 'bg-red-50 border-red-300';
                }
              } else if (isSelected) {
                bgColor = 'bg-blue-50 border-blue-300';
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  disabled={answered}
                  className={`w-full p-4 rounded-xl border-2 text-left font-medium transition-all duration-200 ${bgColor} ${
                    answered ? 'cursor-default' : 'cursor-pointer'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`shrink-0 w-10 h-10 rounded-full font-bold flex items-center justify-center text-white ${
                        showResult
                          ? isCorrect
                            ? 'bg-green-500'
                            : isSelected
                              ? 'bg-red-500'
                              : 'bg-gray-400'
                          : isSelected
                            ? 'bg-blue-600'
                            : 'bg-gray-300'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className="flex-1">{option}</span>
                    {showResult && isCorrect && <span className="text-green-600 font-bold">✓</span>}
                    {showResult && isSelected && !isCorrect && <span className="text-red-600 font-bold">✗</span>}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Keyboard Hint */}
          {!answered && (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-8">
              <p className="text-sm text-yellow-800">
                <span className="font-semibold">💡 팁:</span> 키보드 <kbd className="px-2 py-1 bg-white border border-gray-300 rounded">1</kbd>
                <kbd className="px-2 py-1 bg-white border border-gray-300 rounded mx-1">2</kbd>
                <kbd className="px-2 py-1 bg-white border border-gray-300 rounded">3</kbd>
                <kbd className="px-2 py-1 bg-white border border-gray-300 rounded mx-1">4</kbd> 를 눌러서 선택할 수 있습니다.
              </p>
            </div>
          )}

          {/* Action Button */}
          <div className="flex gap-4">
            {answered ? (
              <button
                onClick={handleNext}
                className="flex-1 py-3 px-6 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>{currentIndex === questions.length - 1 ? '결과 보기' : '다음 문제'}</span>
                <span className="text-lg">→</span>
              </button>
            ) : (
              <div className="flex-1 py-3 px-6 rounded-xl bg-gray-100 text-gray-600 font-semibold text-center">
                답을 선택하세요
              </div>
            )}
          </div>

          {answered && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800 text-center">
                또는 <kbd className="px-2 py-1 bg-white border border-blue-300 rounded">SPACE</kbd>를 눌러 다음으로 이동할 수 있습니다.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
