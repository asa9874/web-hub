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
      // image가 빈 문자열이면 배경을 비운 상태로 유지
      if (image === '' && currentImage === '') {
        return; // 이미 비어있으므로 아무것도 하지 않음
      }
      
      // 즉시 배경 전환 (효과 없음)
      setCurrentImage(image);
      setNextImage(null);
      setIsTransitioning(false);
    }
  }, [image, currentImage]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* 현재 배경 */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: currentImage ? `url('/web-hub/VisualNovel/Background/${currentImage}')` : 'none',
          backgroundColor: '#ffc0cb'
        }}
      />
    </div>
  );
};

export default BackgroundImage;
