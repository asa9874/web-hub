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

const CharacterSprite: React.FC<CharacterSpriteProps> = ({ character }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 부드러운 페이드 인
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [character.id]);

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
          src={`/web-hub/VisualNovel/Character/${character.image}`}
          alt={character.name}
          className="h-full w-auto object-contain object-bottom transform 
            hover:scale-[1.02] transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
};

export default CharacterSprite;
