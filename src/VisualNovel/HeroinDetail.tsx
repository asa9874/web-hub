import React, { useState, useEffect } from 'react';
import './styles/HeroinDetail.css';

interface HeroinDetailProps {
  heroinId: string;
  onBack: () => void;
}

interface HeroinData {
  id: string;
  name: string;
  codeName: string;
  age: number;
  role: string;
  stats: {
    rank: string;
    height: number;
    weight: number;
    magicAttribute: string;
  };
  appearance: {
    hair: string;
    eyes: string;
    accessory: string;
    signatureColor: string;
  };
  personality: {
    tags: string[];
    motto: string;
  };
  relationships: Array<{
    target: string;
    relation: string;
    description: string;
  }>;
  speechStyle: {
    tone: string;
    habits: string[];
    examples: string[];
  };
  backstory: string;
}

const characterDataMap: Record<string, HeroinData> = {
  char_seolah_001: {
    id: 'char_seolah_001',
    name: '한설아',
    codeName: '루나 실버',
    age: 16,
    role: '메인 히로인',
    stats: {
      rank: 'D+',
      height: 152,
      weight: 41,
      magicAttribute: '별과 빛',
    },
    appearance: {
      hair: '은발, 보브컷 단발',
      eyes: '자수정색(보라색), 별 모양 하이라이트',
      accessory: '은색 별 모양 머리핀',
      signatureColor: '분홍색 & 하늘색',
    },
    personality: {
      tags: ['긍정적', '허당', '노력파', '귀여움'],
      motto: '한 번 더 웃으면서!',
    },
    relationships: [
      {
        target: '주인공',
        relation: '같은 반 친구',
        description:
          '잘 보이고 싶어 하지만, 자꾸만 허당스러운 모습만 보여주게 되어 부끄러워하는 상대.',
      },
      {
        target: '포포',
        relation: '마스코트 파트너',
        description:
          '잔소리 많은 스승님 같지만, 누구보다 서로를 신뢰하는 소중한 파트너.',
      },
    ],
    speechStyle: {
      tone: '활기차고 밝은 느낌',
      habits: ['에헤헤', '우와아!', '그치만...', '아와와!'],
      examples: [
        '안녕! 난 한설아라고 해. 오늘부터 같은 반이네? 잘 부탁해! 에헤헤.',
        '아와와! 아, 방금 그건 혼잣말이야! 마법소녀 같은 건 절대 아니니까!',
      ],
    },
    backstory:
      '담벼락에 갇힌 고양이를 구하려다 추락할 뻔했을 때 마스코트와 계약함. 현재는 평범한 여고생 생활과 밤마다 벌어지는 부정 정화 활동을 아슬아슬하게 병행 중.',
  },
  char_seoyoon_002: {
    id: 'char_seoyoon_002',
    name: '신서윤',
    codeName: '노아 아크',
    age: 17,
    role: '조력자 및 멘토',
    stats: {
      rank: 'A+',
      height: 168,
      weight: 50,
      magicAttribute: '중력 및 공간',
    },
    appearance: {
      hair: '긴 생머리 흑발, 푸른 광택',
      eyes: '청회색, 날카로운 눈매',
      accessory: '지적인 은테 안경',
      signatureColor: '네이비 블루 & 실버',
    },
    personality: {
      tags: ['냉철함', '완벽주의', '츤데레', '책임감'],
      motto: '최선의 결과는 철저한 준비에서 나온다.',
    },
    relationships: [
      {
        target: '주인공',
        relation: '후배 및 이해자',
        description:
          '처음에는 엄격한 선배의 태도를 유지하지만, 자신의 약점을 유일하게 털어놓는 상대가 됨.',
      },
      {
        target: '한설아',
        relation: '교육 담당 후배',
        description:
          '한심해하면서도 끝까지 챙겨주는 사고뭉치 후배. 그녀의 긍정적인 힘을 내심 인정함.',
      },
    ],
    speechStyle: {
      tone: '이성적이고 단호한 어조',
      habits: ['한숨 쉬기', '~하도록 해', '비효율적이야'],
      examples: [
        '마법소녀는 놀이가 아니야. 네 실수가 동료를 죽일 수도 있다는 걸 명심해.',
        '한설아, 또 넘어졌나? ...이리 와. 치료 마법은 이럴 때 쓰라고 있는 게 아닐 텐데.',
      ],
    },
    backstory:
      '13세에 계약하여 4년간 전장을 누빈 베테랑. 18세 은퇴를 앞두고 마법을 잃는 것에 대한 공포와 사회 복귀에 대한 압박감을 동시에 느끼는 중.',
  },
  char_rina_003: {
    id: 'char_rina_003',
    name: '강리나',
    codeName: '샤이니 하트',
    age: 15,
    role: '라이벌 및 인기 스타',
    stats: {
      rank: 'S',
      height: 158,
      weight: 44,
      magicAttribute: '환각 및 소리(음파)',
    },
    appearance: {
      hair: '금발 트윈테일, 핑크 그라데이션',
      eyes: '핫핑크색, 카메라 렌즈 같은 안광',
      accessory: '하트 모양 보석 머리장식',
      signatureColor: '핫핑크 & 골드',
    },
    personality: {
      tags: ['비즈니스', '이중인격', '철저함', '슈퍼스타'],
      motto: '희망은 팔리는 상품이다.',
    },
    relationships: [
      {
        target: '주인공',
        relation: '비밀 공유자',
        description:
          '자신의 본성을 아는 유일한 일반인. 가끔 카메라 밖에서 편하게 투덜거릴 수 있는 상대.',
      },
      {
        target: '한설아',
        relation: '한심한 후배',
        description:
          '효율성 제로의 행동만 골라 하는 설아를 보며 항상 뒷목을 잡음.',
      },
    ],
    speechStyle: {
      tone: '상황에 따라 극명하게 변하는 어조',
      habits: ['하트 날리기(On)', '혀 차기(Off)', '자본주의적 비유'],
      examples: [
        '모두의 희망을 지키는 샤이니 하트! 오늘 전투도 라이브로 지켜봐 줄 거죠? (On)',
        '야, 방금 전투 씬 너무 밋밋했어. 편집으로 폭발 이펙트 좀 더 넣어. (Off)',
      ],
    },
    backstory:
      '아역 배우 시절의 하락세를 딛고 마법소녀로 계약하여 제2의 전성기를 맞이함. 팬들의 지지도가 마력의 근원이기 때문에 평판 관리에 목숨을 거는 중.',
  },
  char_sohee_004: {
    id: 'char_sohee_004',
    name: '연소희',
    codeName: '비련',
    age: 16,
    role: '전통의 수호자',
    stats: {
      rank: 'B+',
      height: 155,
      weight: 42,
      magicAttribute: '물과 풀',
    },
    appearance: {
      hair: '윤기 나는 흑발, 붉은 댕기로 낮게 묶음',
      eyes: '깊고 맑은 검은색 눈동자',
      accessory: '대나무 살로 만든 부채',
      signatureColor: '파란색 & 주황색',
    },
    personality: {
      tags: ['고지식함', '요조숙녀', '따뜻함', '전통'],
      motto: '예법이 곧 마음의 법이다.',
    },
    relationships: [
      {
        target: '주인공',
        relation: '연심의 대상',
        description:
          '현대의 소년임에도 예의 바르고 다정하게 자신을 돕는 주인공에게 선비의 풍모를 느낌.',
      },
      {
        target: '한설아',
        relation: '천방지축인 아이',
        description:
          '설아의 가벼운 행동을 매일 꾸짖지만, 사실 그녀의 활기찬 에너지를 조금은 부러워함.',
      },
    ],
    speechStyle: {
      tone: '사극에서 나올 법한 고풍스럽고 우아한 말투',
      habits: ['~하오', '~이옵니까?', '부채를 펼침'],
      examples: [
        '예의 없으신 분은 안 좋아합니다, 이옵니까?',
        '뭔가 이상한 기운이 감지되오... 무례한 것이 있나요?',
      ],
    },
    backstory:
      '대대로 부정을 봉인해온 퇴마 무녀 가문의 외동딸. 가문의 술법을 이어받아 마법소녀(무녀)가 됨. 현대에 들어서 협회가 주도권을 잡자, 가문의 명예를 지키기 위해 홀로 고군분투 중.',
  },
  char_hayan_005: {
    id: 'char_hayan_005',
    name: '백하얀',
    codeName: '느와르 로즈',
    age: 18,
    role: '타락한 마법소녀',
    stats: {
      rank: '특급(불규칙)',
      height: 165,
      weight: 48,
      magicAttribute: '타락 및 가시',
    },
    appearance: {
      hair: '층이 많이 진 흑발 레이어드 컷',
      eyes: '삼백안, 짙은 다크서클',
      accessory: '목의 가시 장미 문신',
      signatureColor: '검은색 & 빨간색',
    },
    personality: {
      tags: ['냉소적', '고독함', '츤데레', '진실 추구자'],
      motto: '희망이라는 거짓말에 속지 마',
    },
    relationships: [
      {
        target: '주인공',
        relation: '동질감의 대상',
        description:
          '자신의 경고를 무시하지 않고 진실을 대면하려는 주인공에게 기묘한 동질감을 느낌.',
      },
      {
        target: '신서윤',
        relation: '과거의 동료',
        description:
          '과거 같은 팀의 에이스들이었으나, 현재는 협회의 방식에 순응하는 서윤을 증오함.',
      },
    ],
    speechStyle: {
      tone: '낮고 나른하며, 상대의 정곡을 찌르는 비꼬는 말투',
      habits: ['막대사탕 굴리기', '헛웃음', '낮은 어조'],
      examples: [
        '희망이라는 거짓말을 언제까지 믿을 건가?',
        '너도 결국 이 시스템의 일부가 될 거야.',
      ],
    },
    backstory:
      '과거 최연소 S급 후보로 기대를 모았으나, 협회의 인공 부정 실험을 목격함. 이를 공론화하려다 배신당하고 제명됨. 이후 홀로 어둠 속에서 협회의 파멸을 준비 중.',
  },
  char_arin_004: {
    id: 'char_arin_004',
    name: '도아린',
    codeName: '제로 벡터',
    age: 11,
    role: '최종병기 및 분석가',
    stats: {
      rank: 'B (잠재력 S)',
      height: 138,
      weight: 32,
      magicAttribute: '벡터 제어 및 에너지 투사',
    },
    appearance: {
      hair: '연하늘색 단발',
      eyes: '잿빛, 무표정한 안광',
      accessory: '대형 헤드셋, 데이터 단말기',
      signatureColor: '실버 & 시안 블루',
    },
    personality: {
      tags: ['무감정', '천재성', '분석적', '어린아이'],
      motto: '모든 현상은 연산 가능합니다.',
    },
    relationships: [
      {
        target: '주인공',
        relation: '관찰 대상',
        description:
          '데이터로 예측할 수 없는 돌발 변수와 같은 존재. 그의 행동 원리에 깊은 의문을 가짐.',
      },
      {
        target: '한설아',
        relation: '오류 데이터',
        description:
          '낮은 확률을 뚫고 성공하는 설아의 "운"을 논리적으로 분석하려다 매번 실패함.',
      },
      {
        target: '신서윤',
        relation: '이상적인 선배',
        description:
          '가장 효율적이고 강력한 선배로서 존경하며, 그녀의 지시를 최우선으로 함.',
      },
    ],
    speechStyle: {
      tone: '단조롭고 이성적인 말투',
      habits: ['확률 언급', '데이터 분석 결과 보고', '~입니다체'],
      examples: [
        '현재 상황에서 승리할 확률은 12% 미만입니다. 퇴각을 권고합니다.',
        '당신의 심박수가 상승했습니다. 제 말에 당황한 것입니까? 데이터가 필요합니다.',
        '이해할 수 없습니다. 왜 자신을 희생하면서까지 타인을 돕는 거죠? 비효율적입니다.',
      ],
    },
    backstory:
      '협회 연구소에서 전략 병기로 육성된 소녀. 감정보다는 수식을 먼저 배웠으며, 이번에 처음으로 현장 실무(학교 잠입 및 전투)에 투입됨.',
  },
};

const HeroinDetail: React.FC<HeroinDetailProps> = ({ heroinId, onBack }) => {
  const [showTransformed, setShowTransformed] = useState(false);
  const data = characterDataMap[heroinId];

  if (!data) {
    return (
      <div className="heroin-detail-error">
        <p>데이터를 찾을 수 없습니다.</p>
        <button onClick={onBack}>돌아가기</button>
      </div>
    );
  }

  const getCharacterImage = () => {
    const imageName = data.name.replace(/ /g, '');
    if (showTransformed) {
      return `/web-hub/VisualNovel/Character/${imageName}_변신_normal.png`;
    }
    return `/web-hub/VisualNovel/Character/${imageName}_normal.png`;
  };

  return (
    <div className="heroin-detail-container">
      {/* 헤더 */}
      <div className="heroin-detail-header">
        <button className="back-btn" onClick={onBack}>
          ← 목록으로
        </button>
        <h1 className="heroin-detail-title">{data.name}</h1>
      </div>

      <div className="heroin-detail-content">
        {/* 왼쪽: 이미지 섹션 */}
        <div className="heroin-detail-image-section">
          <div className="heroin-detail-image">
            <img
              src={getCharacterImage()}
              alt={data.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="400"%3E%3Crect fill="%23f5f5f5" width="300" height="400"/%3E%3Ctext x="50%" y="50%" text-anchor="middle" fill="%23999" font-size="16"%3E사진 없음%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
          <div className="image-toggle-buttons">
            <button
              className={`toggle-btn ${!showTransformed ? 'active' : ''}`}
              onClick={() => setShowTransformed(false)}
            >
              ✨ 변신 전
            </button>
            <button
              className={`toggle-btn ${showTransformed ? 'active' : ''}`}
              onClick={() => setShowTransformed(true)}
            >
              🌟 변신 후
            </button>
          </div>
        </div>

        {/* 오른쪽: 정보 섹션 */}
        <div className="heroin-detail-info-section">
          {/* 기본 정보 */}
          <div className="info-card">
            <h2 className="info-card-title">기본 정보</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">마법명</span>
                <span className="info-value">{data.codeName}</span>
              </div>
              <div className="info-item">
                <span className="info-label">역할</span>
                <span className="info-value">{data.role}</span>
              </div>
              <div className="info-item">
                <span className="info-label">나이</span>
                <span className="info-value">{data.age}세</span>
              </div>
              <div className="info-item">
                <span className="info-label">모토</span>
                <span className="info-value">{data.personality.motto}</span>
              </div>
            </div>
          </div>

          {/* 능력 정보 */}
          <div className="info-card">
            <h2 className="info-card-title">능력</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">순위</span>
                <span className="stat-value">{data.stats.rank}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">마력 속성</span>
                <span className="stat-value">{data.stats.magicAttribute}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">신장</span>
                <span className="stat-value">{data.stats.height}cm</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">체중</span>
                <span className="stat-value">{data.stats.weight}kg</span>
              </div>
            </div>
          </div>

          {/* 외형 정보 */}
          <div className="info-card">
            <h2 className="info-card-title">외형</h2>
            <div className="appearance-grid">
              <div className="appearance-item">
                <span className="appearance-label">머리</span>
                <span className="appearance-value">{data.appearance.hair}</span>
              </div>
              <div className="appearance-item">
                <span className="appearance-label">눈</span>
                <span className="appearance-value">{data.appearance.eyes}</span>
              </div>
              <div className="appearance-item">
                <span className="appearance-label">특징</span>
                <span className="appearance-value">
                  {data.appearance.accessory}
                </span>
              </div>
              <div className="appearance-item">
                <span className="appearance-label">색상</span>
                <span className="appearance-value">
                  {data.appearance.signatureColor}
                </span>
              </div>
            </div>
          </div>

          {/* 성격 태그 */}
          <div className="info-card">
            <h2 className="info-card-title">성격</h2>
            <div className="tags-container">
              {data.personality.tags.map((tag, idx) => (
                <span key={idx} className="personality-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 배경 스토리 */}
          <div className="info-card">
            <h2 className="info-card-title">배경 스토리</h2>
            <p className="backstory-text">{data.backstory}</p>
          </div>

          {/* 관계도 */}
          <div className="info-card">
            <h2 className="info-card-title">인간관계</h2>
            <div className="relationships">
              {data.relationships.map((rel, idx) => (
                <div key={idx} className="relationship-item">
                  <h4 className="relationship-target">
                    {rel.target} ({rel.relation})
                  </h4>
                  <p className="relationship-desc">{rel.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 말투 가이드 */}
          <div className="info-card">
            <h2 className="info-card-title">말투</h2>
            <div className="speech-content">
              <p className="speech-tone">
                <strong>톤:</strong> {data.speechStyle.tone}
              </p>
              <div className="speech-habits">
                <strong>특징:</strong>
                <ul>
                  {data.speechStyle.habits.map((habit, idx) => (
                    <li key={idx}>{habit}</li>
                  ))}
                </ul>
              </div>
              <div className="speech-examples">
                <strong>대사 예시:</strong>
                <ul>
                  {data.speechStyle.examples.map((example, idx) => (
                    <li key={idx}>"{example}"</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroinDetail;
