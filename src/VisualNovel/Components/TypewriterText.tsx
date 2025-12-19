import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number; // 글자 당 ms
  onComplete?: () => void;
  isSkipped?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 50, 
  onComplete,
  isSkipped = false 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // 스킵되거나 텍스트가 변경되면 초기화
  useEffect(() => {
    if (isSkipped) {
      setDisplayedText(text);
      setCurrentIndex(text.length);
      setIsComplete(true);
      onComplete?.();
    } else {
      setDisplayedText('');
      setCurrentIndex(0);
      setIsComplete(false);
    }
  }, [text, isSkipped]);

  // 타이프라이터 효과
  useEffect(() => {
    if (isSkipped || isComplete) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, isComplete, isSkipped, onComplete]);

  return (
    <span className="inline">
      {displayedText}
      {!isComplete && (
        <span className="inline-block w-[2px] h-5 bg-pink-500 ml-1 animate-pulse" />
      )}
    </span>
  );
};

export default TypewriterText;
