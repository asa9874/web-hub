import React, { useState } from 'react';
import MenuPage from './components/MenuPage';
import CoverPage from './components/CoverPage';
import VocabularyPage from './components/VocabularyPage';
import QuizPage from './components/QuizPage';
import type { QuizResult } from './components/QuizPage';
import QuizResultPage from './components/QuizResultPage';
import type { VocabularyItem } from './types';

type Page = 'menu' | 'coverVocabulary' | 'coverQuiz' | 'vocabulary' | 'quiz' | 'quizResult' | 'quizRetry';

const English: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('menu');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [loadedWords, setLoadedWords] = useState<VocabularyItem[]>([]);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [retryWords, setRetryWords] = useState<VocabularyItem[]>([]);

  // 단어 데이터 로드
  const loadWords = async (days: string[]) => {
    const allWords: VocabularyItem[] = [];
    try {
      for (const day of days) {
        const response = await import(`./EnglishVoca/${day}.json`);
        allWords.push(...response.default);
      }
      setLoadedWords(allWords);
    } catch (error) {
      console.error('단어 로드 실패:', error);
    }
  };

  const handleSelectMode = (mode: 'vocabulary' | 'quiz') => {
    if (mode === 'vocabulary') {
      setCurrentPage('coverVocabulary');
    } else {
      setCurrentPage('coverQuiz');
    }
  };

  const handleSelectDaysVocabulary = (days: string[]) => {
    setSelectedDays(days);
    loadWords(days);
    setCurrentPage('vocabulary');
  };

  const handleSelectDaysQuiz = (days: string[]) => {
    setSelectedDays(days);
    loadWords(days);
    setCurrentPage('quiz');
  };

  const handleShowResults = (results: QuizResult[]) => {
    setQuizResults(results);
    const wrongAnswers = results
      .filter((r) => !r.isCorrect)
      .map((r) => ({
        word: r.word,
        meaning: r.meaning,
      }));
    setRetryWords(wrongAnswers);
    setCurrentPage('quizResult');
  };

  const handleRetryWrong = () => {
    if (retryWords.length > 0) {
      setLoadedWords(retryWords);
      setCurrentPage('quizRetry');
    }
  };

  const handleBackToMenu = () => {
    setCurrentPage('menu');
    setSelectedDays([]);
    setLoadedWords([]);
  };

  const handleBackToCover = (type: 'vocabulary' | 'quiz') => {
    setCurrentPage(type === 'vocabulary' ? 'coverVocabulary' : 'coverQuiz');
  };

  return (
    <>
      {currentPage === 'menu' && <MenuPage onSelectMode={handleSelectMode} />}

      {currentPage === 'coverVocabulary' && (
        <CoverPage mode="vocabulary" onSelectDays={handleSelectDaysVocabulary} onBack={handleBackToMenu} />
      )}

      {currentPage === 'coverQuiz' && (
        <CoverPage mode="quiz" onSelectDays={handleSelectDaysQuiz} onBack={handleBackToMenu} />
      )}

      {currentPage === 'vocabulary' && loadedWords.length > 0 && (
        <VocabularyPage selectedDays={selectedDays} words={loadedWords} onBack={() => handleBackToCover('vocabulary')} />
      )}

      {(currentPage === 'quiz' || currentPage === 'quizRetry') && loadedWords.length > 0 && (
        <QuizPage
          words={loadedWords}
          selectedDays={selectedDays}
          onBack={() => handleBackToCover('quiz')}
          onShowResults={handleShowResults}
        />
      )}

      {currentPage === 'quizResult' && (
        <QuizResultPage
          results={quizResults}
          selectedDays={selectedDays}
          onBack={handleBackToMenu}
          onRetryWrong={handleRetryWrong}
        />
      )}
    </>
  );
};

export default English;
