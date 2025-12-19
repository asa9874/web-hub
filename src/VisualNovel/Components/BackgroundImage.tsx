import React, { useState, useEffect } from 'react';

interface BackgroundImageProps {
  image: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ image }) => {
  const [currentImage, setCurrentImage] = useState(image);
  const [nextImage, setNextImage] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (image !== currentImage) {
      // 크로스페이드 시작
      setNextImage(image);
      setIsTransitioning(true);

      // 트랜지션 완료 후 이미지 교체
      const timer = setTimeout(() => {
        setCurrentImage(image);
        setNextImage(null);
        setIsTransitioning(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [image, currentImage]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* 현재 배경 */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat 
          transition-opacity duration-1000 ease-in-out
          ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          backgroundImage: `url('/web-hub/VisualNovel/Background/${currentImage}')`,
          backgroundColor: '#ffc0cb'
        }}
      />
      
      {/* 다음 배경 (크로스페이드용) */}
      {nextImage && (
        <div 
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat 
            transition-opacity duration-1000 ease-in-out
            ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            backgroundImage: `url('/web-hub/VisualNovel/Background/${nextImage}')`,
            backgroundColor: '#ffc0cb'
          }}
        />
      )}
    </div>
  );
};

export default BackgroundImage;
