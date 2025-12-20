import React, { useState, useEffect } from 'react';
import type { Character, CharacterPosition } from '../types';

interface CharacterSpriteProps {
  character: Character;
}

const getPositionClass = (position: CharacterPosition): string => {
  const positions = {
    'left': 'left-[10%]',
    'center-left': 'left-[25%]',
    'center': 'left-1/2 -translate-x-1/2',
    'center-right': 'right-[25%]',
    'right': 'right-[10%]',
  };
  return positions[position];
};

const getCharacterNameFromImage = (imagePath: string): string | null => {
  // 확장자 제거 (예: "강리나_happy.png" -> "강리나_happy")
  const withoutExt = imagePath.replace(/\.\w+$/, '');
  
  // 변신 이미지 여부 확인 (예: "강리나_변신_happy" 또는 "강리나_happy")
  const isTransformed = withoutExt.includes('_변신_');
  
  if (isTransformed) {
    // 변신 이미지: 마지막 언더스코어 기준으로 분리 후 변신 부분 제거
    // "강리나_변신_happy" -> "강리나"
    const parts = withoutExt.split('_변신_');
    return parts[0];
  } else {
    // 일반 이미지: 마지막 언더스코어 기준으로 캐릭터명 추출
    // "강리나_happy" -> "강리나"
    const lastUnderscoreIndex = withoutExt.lastIndexOf('_');
    if (lastUnderscoreIndex === -1) {
      return withoutExt;
    }
    return withoutExt.substring(0, lastUnderscoreIndex);
  }
};

const getExpressionFromImage = (imagePath: string): string | null => {
  // 확장자 제거
  const withoutExt = imagePath.replace(/\.\w+$/, '');
  
  // 변신 이미지 여부 확인
  const isTransformed = withoutExt.includes('_변신_');
  
  if (isTransformed) {
    // 변신 이미지: "_변신_" 이후의 부분이 표정
    // "강리나_변신_happy" -> "happy"
    const parts = withoutExt.split('_변신_');
    return parts[1] || null;
  } else {
    // 일반 이미지: 마지막 언더스코어 이후 표정 추출
    // "강리나_happy" -> "happy"
    const lastUnderscoreIndex = withoutExt.lastIndexOf('_');
    if (lastUnderscoreIndex === -1) {
      return null;
    }
    return withoutExt.substring(lastUnderscoreIndex + 1);
  }
};

const isTransformedImage = (imagePath: string): boolean => {
  // 확장자를 제거한 경로에서 변신 이미지 여부 확인
  const withoutExt = imagePath.replace(/\.\w+$/, '');
  return withoutExt.includes('_변신_');
};

const CharacterSprite: React.FC<CharacterSpriteProps> = ({ character }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayImage, setDisplayImage] = useState(character.image);
  const [attemptedFallback, setAttemptedFallback] = useState(false);

  useEffect(() => {
    // 부드러운 페이드 인
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [character.id]);

  useEffect(() => {
    // 이미지 변경 시 fallback 상태 리셋
    setDisplayImage(character.image);
    setAttemptedFallback(false);
  }, [character.image]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // 이미 fallback을 시도했으면 아무것도 하지 않음
    if (attemptedFallback) {
      e.currentTarget.style.display = 'none';
      return;
    }

    const characterName = getCharacterNameFromImage(displayImage);
    const expression = getExpressionFromImage(displayImage);
    const isTransformed = isTransformedImage(displayImage);

    console.log(`[이미지 로드 실패] 경로: ${displayImage}`);
    console.log(`[파싱 결과] 캐릭터: ${characterName}, 표정: ${expression}, 변신: ${isTransformed}`);

    // 표정이 있고 normal이 아닌 경우에만 fallback 시도
    if (characterName && expression && expression !== 'normal') {
      // 변신 이미지인 경우 변신_normal로 폴백
      // 일반 이미지인 경우 normal로 폴백
      const fallbackImage = isTransformed 
        ? `${characterName}_변신_normal.png`
        : `${characterName}_normal.png`;
      
      console.log(`[Fallback 시도] ${displayImage} -> ${fallbackImage}`);
      setDisplayImage(fallbackImage);
      setAttemptedFallback(true);
    } else {
      console.log(`[최종 실패] 대체 이미지 없음`);
      // 그 외의 경우는 이미지 숨김
      e.currentTarget.style.display = 'none';
    }
  };

  return (
    <div 
      className={`absolute bottom-0 ${getPositionClass(character.position)} 
        transition-all duration-700 ease-out z-10
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{
        height: '100%',
        filter: 'drop-shadow(0 15px 40px rgba(236, 72, 153, 0.4)) drop-shadow(0 0 20px rgba(236, 72, 153, 0.2))'
      }}
    >
      <div className="relative h-full flex items-end">
        <img 
          key={displayImage}
          src={`/web-hub/VisualNovel/Character/${displayImage}`}
          alt={character.name}
          className="h-full w-auto object-contain object-bottom transform 
            hover:scale-[1.02] transition-transform duration-300"
          onError={handleImageError}
        />
      </div>
    </div>
  );
};

export default CharacterSprite;
