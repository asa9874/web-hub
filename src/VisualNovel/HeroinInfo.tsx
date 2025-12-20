import React, { useState } from 'react';
import HeroinDetail from './HeroinDetail';
import './styles/HeroinInfo.css';

interface Heroin {
  id: string;
  name: string;
  codeName: string;
  age: number;
  role: string;
  photo: string;
}

const HeroinInfo: React.FC = () => {
  const [selectedHeroin, setSelectedHeroin] = useState<string | null>(null);

  const heroins: Heroin[] = [
    {
      id: 'char_seolah_001',
      name: '한설아',
      codeName: '루나 실버',
      age: 16,
      role: '메인 히로인',
      photo: '/web-hub/VisualNovel/Character/한설아_normal.png',
    },
    {
      id: 'char_seoyoon_002',
      name: '신서윤',
      codeName: '노아 아크',
      age: 17,
      role: '조력자 및 멘토',
      photo: '/web-hub/VisualNovel/Character/신서윤_normal.png',
    },
    {
      id: 'char_rina_003',
      name: '강리나',
      codeName: '샤이니 하트',
      age: 15,
      role: '라이벌 및 인기 스타',
      photo: '/web-hub/VisualNovel/Character/강리나_normal.png',
    },
    {
      id: 'char_sohee_004',
      name: '연소희',
      codeName: '비련',
      age: 16,
      role: '전통의 수호자',
      photo: '/web-hub/VisualNovel/Character/연소희_normal.png',
    },
    {
      id: 'char_hayan_005',
      name: '백하얀',
      codeName: '느와르 로즈',
      age: 18,
      role: '타락한 마법소녀',
      photo: '/web-hub/VisualNovel/Character/백하얀_normal.png',
    },
    {
      id: 'char_arin_004',
      name: '도아린',
      codeName: '제로 벡터',
      age: 11,
      role: '최종병기 및 분석가',
      photo: '/web-hub/VisualNovel/Character/도아린_normal.png',
    },
  ];

  if (selectedHeroin) {
    return (
      <HeroinDetail
        heroinId={selectedHeroin}
        onBack={() => setSelectedHeroin(null)}
      />
    );
  }

  return (
    <div className="heroin-info-container">
      <div className="heroin-info-header">
        <h1 className="heroin-info-title">🎀 히로인 정보</h1>
        <p className="heroin-info-subtitle">당신의 선택은?</p>
      </div>

      <div className="heroin-list">
        {heroins.map((heroin) => (
          <div
            key={heroin.id}
            className="heroin-card"
            onClick={() => setSelectedHeroin(heroin.id)}
          >
            <div className="heroin-card-image">
              <img
                src={heroin.photo}
                alt={heroin.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="250"%3E%3Crect fill="%23e0e0e0" width="200" height="250"/%3E%3Ctext x="50%" y="50%" text-anchor="middle" fill="%23666"%3E사진 없음%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            <div className="heroin-card-info">
              <h3 className="heroin-name">{heroin.name}</h3>
              <p className="heroin-codename">{heroin.codeName}</p>
              <p className="heroin-age">나이: {heroin.age}세</p>
              <p className="heroin-role">{heroin.role}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => window.history.back()}>
        ← 돌아가기
      </button>
    </div>
  );
};

export default HeroinInfo;
