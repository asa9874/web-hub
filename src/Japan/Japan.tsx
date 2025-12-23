import React from 'react';
import { Plane, Hotel, Compass, UtensilsCrossed, Calendar } from 'lucide-react';
import './Japan.css';

interface Section {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
}

interface Place {
  name: string;
  description: string;
  image: string;
  emoji: string;
  link: string;
}

interface ScheduleDay {
  day: number;
  date: string;
  title: string;
  highlights: string[];
}

const Japan: React.FC = () => {
  const sections: Section[] = [
    { id: 'flight', title: '항공', icon: Plane, color: 'from-blue-500 to-blue-600' },
    { id: 'lodging', title: '숙소', icon: Hotel, color: 'from-amber-500 to-amber-600' },
    { id: 'schedule', title: '일정', icon: Calendar, color: 'from-purple-500 to-purple-600' },
    { id: 'places', title: '놀러갈곳', icon: Compass, color: 'from-green-500 to-emerald-600' },
    { id: 'food', title: '먹을곳', icon: UtensilsCrossed, color: 'from-red-500 to-red-600' },
  ];

  const osakaplaces: Place[] = [
    { name: '호젠지나 야사카 신사', emoji: '⛩️', description: '아름다운 분수로 유명한 신사', image: 'https://images.unsplash.com/photo-1549144994-899639602dd7?q=80&w=800', link: 'https://www.google.com/maps/search/hozenji+naka+yasaka+shrine/@34.667,135.503,15z' },
    { name: '난바 파크스', emoji: '🛍️', description: '쇼핑과 엔터테인먼트 복합시설', image: 'https://images.unsplash.com/photo-1467273867159-84d440a117a5?q=80&w=800', link: 'https://www.google.com/maps/place/namba+parks/@34.6627,135.5000,15z' },
    { name: '도톤보리', emoji: '🌃', description: '네온불이 반짝이는 야경거리', image: 'https://images.unsplash.com/photo-1522383507921-86a62d0be906?q=80&w=800', link: 'https://www.google.com/maps/place/dotonbori/@34.6694,135.5003,15z' },
    { name: '덴덴타운 (마도라스 카레)', emoji: '🍛', description: '전자제품과 유명한 카레 맛집', image: 'https://images.unsplash.com/photo-1645521591524-a30fbbea7c46?q=80&w=800', link: 'https://www.google.com/maps/search/madoras+curry+dendentown/@34.6592,135.5053,15z' },
    { name: '덴노지 동물원', emoji: '🐘', description: '다양한 동물을 만날 수 있는 동물원', image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxhPGIj3n4WLnBhm88OHaJz_2eADOA7C2dRf2bV0h1bnItC_qGec3Nle2huAUr_SdQRU9_00Bm-q4ShI7pbZuR_-QtLG9xkkU7qZW4TBB58oETluusnwzQhMubmcNo1-cGjQdow=w408-h307-k-no', link: 'https://www.google.com/maps/place/tennoji+zoo/@34.6510957,135.5084344,15z' },
    { name: '아베노 하루카스', emoji: '🏗️', description: '일본 최고 높이의 건물에서의 전망', image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9cc?q=80&w=800', link: 'https://www.google.com/maps/place/abeno+harukas/@34.6453,135.5144,15z' },
    { name: '오사카성', emoji: '🏯', description: '일본 역사의 상징, 아름다운 성곽', image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxHrmZpUvbJzfabbeR516X0SEaEk9ziUqf4oZAQiXqmdPyFn11dgGd-jZNbmkhuluL1zSpA88MyjQtqLgENv3z1iFkrOYJNV5qMkYAD5TNYTNAv9HKgKPDRDmUad0Ofk_e-P5PKPkrHzGov=w408-h480-k-no', link: 'https://www.google.com/maps/place/osaka+castle/@34.6872962,135.5258605,15z' },
  ];

  const naraplaces: Place[] = [
    { name: '도다이지', emoji: '🏛️', description: '세계 최대 규모의 목조 건축물', image: 'https://images.unsplash.com/photo-1526913260776-1dccd50dd580?q=80&w=800', link: 'https://www.google.com/maps/place/todai+temple/@34.6926,135.8481,15z' },
    { name: '나라공원', emoji: '🦌', description: '사슴과 함께하는 전통 공원', image: 'https://images.unsplash.com/photo-1552280552-7fdf2dd2c5b1?q=80&w=800', link: 'https://www.google.com/maps/place/nara+park/@34.6852,135.8346,15z' },
  ];

  const kyotoplaces: Place[] = [
    { name: '후시미이나리 신사', emoji: '⛩️', description: '붉은 도리이 터널의 신비로운 신사', image: 'https://images.unsplash.com/photo-1549144994-899639602dd7?q=80&w=800', link: 'https://www.google.com/maps/place/fushimi+inari/@34.7692844,135.7306357,15z' },
    { name: '교토역', emoji: '🚄', description: '현대 건축의 걸작이자 교통의 중심지', image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9cc?q=80&w=800', link: 'https://www.google.com/maps/place/kyoto+station/@34.7764,135.7680,15z' },
    { name: '교토타워', emoji: '🗼', description: '교토의 전망을 한눈에 볼 수 있는 타워', image: 'https://images.unsplash.com/photo-1508615039623-a25605d2938d?q=80&w=800', link: 'https://www.google.com/maps/place/kyoto+tower/@34.7762,135.7679,15z' },
  ];

  const kobeplaces: Place[] = [
    { name: '고베 허브가든', emoji: '🌸', description: '계절 꽃들이 아름다운 정원', image: 'https://images.unsplash.com/photo-1488578066568-c89b4c4d9dab?q=80&w=800', link: 'https://www.google.com/maps/place/kobe+herb+garden/@34.7305,135.2895,15z' },
    { name: '고베 아쿠아리움', emoji: '🐠', description: '거대한 수족관에서 해양생물 감상', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800', link: 'https://www.google.com/maps/place/kobe+aquarium/@34.6939,135.2405,15z' },
    { name: '고베 하버랜드', emoji: '⛵', description: '해변의 쇼핑과 엔터테인먼트 지구', image: 'https://images.unsplash.com/photo-1517436849607-eefc3e4e82cc?q=80&w=800', link: 'https://www.google.com/maps/place/kobe+harborland/@34.6909,135.2406,15z' },
  ];

  const schedule: ScheduleDay[] = [
    {
      day: 1,
      date: '1월 19일 (월)',
      title: '일본 도착 및 오사카 관광',
      highlights: ['09:00 간사이 국제공항 도착', '난카이 공항선 이용 오사카난바 역', '짐 보관소 이용', '호젠지나/야사카 신사 방문', '난바 파크스 쇼핑', '도톤보리 야경 관광', '덴덴타운 마도라스 카레', '15:00 숙소 체크인', '덴노지 동물원 또는 아베노 하루카스']
    },
    {
      day: 2,
      date: '1월 20일 (화)',
      title: '나라현 당일 여행',
      highlights: ['오사카에서 나라현으로 이동', '도다이지 사원 방문', '나라공원에서 사슴과 만남', '오사카성 방문', '오사카로 귀환']
    },
    {
      day: 3,
      date: '1월 21일 (수)',
      title: '교토 일일 여행',
      highlights: ['오사카에서 교토로 이동', '후시미이나리 신사 참배', '교토역 근처 관광', '교토타워 전망대']
    },
    {
      day: 4,
      date: '1월 22일 (목)',
      title: '고베 관광',
      highlights: ['오사카에서 고베로 이동', '고베 허브가든 관광', '고베 아쿠아리움 방문', '고베 하버랜드 쇼핑', '돈키호테에서 쇼핑']
    },
    {
      day: 5,
      date: '1월 23일 (금)',
      title: '귀국',
      highlights: ['10:00 오사카(KIX) 출발', '에어서울 0712편', '11:55 서울(ICN) 도착']
    }
  ];

  const osakafood: Place[] = [
    { name: '아부라소바', emoji: '🍝', description: '기름진 국물의 독특한 소바', image: 'https://images.unsplash.com/photo-1612874742237-6526221fcf14?q=80&w=800', link: 'https://www.google.com/maps/search/abura+soba+osaka/@34.6694,135.5000,15z' },
    { name: '회전초밥', emoji: '🍣', description: '회전 초밥으로 즐기는 신선한 초밥', image: 'https://images.unsplash.com/photo-1580959375944-abd7e5b46b0d?q=80&w=800', link: 'https://www.google.com/maps/search/rotating+sushi+osaka/@34.6694,135.5000,15z' },
    { name: '카레', emoji: '🍛', description: '일본식 카레의 진한 맛', image: 'https://images.unsplash.com/photo-1645521591524-a30fbbea7c46?q=80&w=800', link: 'https://www.google.com/maps/search/curry+osaka/@34.6694,135.5000,15z' },
    { name: '라멘', emoji: '🍜', description: '뜨거운 국물의 전통 일본 국수', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800', link: 'https://www.google.com/maps/search/ramen+osaka/@34.6694,135.5000,15z' },
    { name: '돈카츠', emoji: '🍖', description: '바삭한 돼지고기 튀김', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800', link: 'https://www.google.com/maps/search/tonkatsu+osaka/@34.6694,135.5000,15z' },
    { name: '규카츠', emoji: '🥩', description: '담백한 소고기 튀김', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800', link: 'https://www.google.com/maps/search/gyukatsu+osaka/@34.6694,135.5000,15z' },
    { name: '규동', emoji: '🍚', description: '소고기 덮밥의 정통 맛', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800', link: 'https://www.google.com/maps/search/gyudon+osaka/@34.6694,135.5000,15z' },
    { name: '텐동', emoji: '🍤', description: '튀김을 올린 덮밥', image: 'https://images.unsplash.com/photo-1626202150113-189f36b6be8b?q=80&w=800', link: 'https://www.google.com/maps/search/tempura+don+osaka/@34.6694,135.5000,15z' },
    { name: '쿠시카츠', emoji: '🍢', description: '꼬챙이에 끼운 튀김', image: 'https://images.unsplash.com/photo-1519676064460-7ea13437972b?q=80&w=800', link: 'https://www.google.com/maps/search/kushikatsu+osaka/@34.6694,135.5000,15z' },
    { name: '오니기리', emoji: '👺', description: '주먹밥의 다양한 맛', image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?q=80&w=800', link: 'https://www.google.com/maps/search/onigiri+osaka/@34.6694,135.5000,15z' },
    { name: '장어덮밥', emoji: '🐍', description: '부드러운 장어의 맛', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800', link: 'https://www.google.com/maps/search/unagi+don+osaka/@34.6694,135.5000,15z' },
    { name: '오코노미야키', emoji: '🥞', description: '일본식 팬케이크', image: 'https://images.unsplash.com/photo-1541830130224-e39ba6f1b091?q=80&w=800', link: 'https://www.google.com/maps/search/okonomiyaki+osaka/@34.6694,135.5000,15z' },
    { name: '가쓰돈', emoji: '🍱', description: '돼지고기 튀김 덮밥', image: 'https://images.unsplash.com/photo-1591814468924-cafb1d141b18?q=80&w=800', link: 'https://www.google.com/maps/search/katsudon+osaka/@34.6694,135.5000,15z' },
    { name: '타코야끼', emoji: '🐙', description: '문어가 들어간 튀김', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561341?q=80&w=800', link: 'https://www.google.com/maps/search/takoyaki+osaka/@34.6694,135.5000,15z' },
    { name: '교자', emoji: '🥟', description: '철판에서 구운 만두', image: 'https://images.unsplash.com/photo-1585518419759-70fb7dce0071?q=80&w=800', link: 'https://www.google.com/maps/search/gyoza+osaka/@34.6694,135.5000,15z' },
    { name: '낫또', emoji: '🫘', description: '발효된 콩의 독특한 맛', image: 'https://images.unsplash.com/photo-1568558429244-75b504fc158b?q=80&w=800', link: 'https://www.google.com/maps/search/natto+osaka/@34.6694,135.5000,15z' },
    { name: '가라아게', emoji: '🍗', description: '일본식 치킨 튀김', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cfd1ec?q=80&w=800', link: 'https://www.google.com/maps/search/karaage+osaka/@34.6694,135.5000,15z' },
    { name: '이자카야', emoji: '🍺', description: '일본식 선술집의 다양한 안주', image: 'https://images.unsplash.com/photo-1535403318582-ba2150080342?q=80&w=800', link: 'https://www.google.com/maps/search/izakaya+osaka/@34.6694,135.5000,15z' },
    { name: '파르페', emoji: '🍨', description: '층층이 쌓인 아이스크림 디저트 (필수!)', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800', link: 'https://www.google.com/maps/search/parfait+osaka/@34.6694,135.5000,15z' },
    { name: '말차 간식', emoji: '🍵', description: '녹차 향의 달콤한 간식', image: 'https://images.unsplash.com/photo-1582518947349-fa81f96cff02?q=80&w=800', link: 'https://www.google.com/maps/search/matcha+dessert+osaka/@34.6694,135.5000,15z' },
    { name: '당고', emoji: '🍡', description: '떡으로 만든 일본 전통과자', image: 'https://images.unsplash.com/photo-1558636508-e0db3814a4f2?q=80&w=800', link: 'https://www.google.com/maps/search/dango+osaka/@34.6694,135.5000,15z' },
  ];

  const kyotofood: Place[] = [
    { name: '교토 카이세키', emoji: '🍱', description: '전통 일본 정찬 요리', image: 'https://images.unsplash.com/photo-1517999572726-f0f0a8c82aa7?q=80&w=800', link: 'https://www.google.com/maps/search/kyoto+kaiseki/@35.0116,135.7681,13z' },
    { name: '아부라소바', emoji: '🍝', description: '교토식 기름진 국물 소바', image: 'https://images.unsplash.com/photo-1612874742237-6526221fcf14?q=80&w=800', link: 'https://www.google.com/maps/search/abura+soba+kyoto/@35.0116,135.7681,13z' },
    { name: '말차 간식', emoji: '🍵', description: '교토산 녹차의 우아한 맛', image: 'https://images.unsplash.com/photo-1582518947349-fa81f96cff02?q=80&w=800', link: 'https://www.google.com/maps/search/matcha+kyoto/@35.0116,135.7681,13z' },
    { name: '파르페', emoji: '🍨', description: '교토 말차 파르페 (필수!)', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800', link: 'https://www.google.com/maps/search/matcha+parfait+kyoto/@35.0116,135.7681,13z' },
  ];

  return (
    <div className="japan-page min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-r from-red-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative pt-16 pb-12 text-center z-10">
        <h1 className="text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 tracking-wider">
          JAPAN TRAVEL
        </h1>
        <p className="text-xl text-gray-300 font-light tracking-widest">일본 여행의 모든 것을 한눈에</p>
        <div className="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
      </header>

      {/* Main Sections Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        {/* Sections Grid */}
        <div className="space-y-8 mb-16">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.id}
                className={`section-card group relative transition-all duration-500`}
              >
                  {/* Card Background */}
                <div
                  className={`relative min-h-[400px] rounded-2xl border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-500 bg-black/60`}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Content Container */}
                  <div className="relative p-8 h-full flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${section.color}`}>
                          <Icon size={32} className="text-white" />
                        </div>
                        <h2 className="text-3xl font-bold tracking-wider">{section.title}</h2>
                      </div>
                      <div className="w-6 h-6" />
                    </div>

                    {/* Section-Specific Content */}
                    {section.id === 'flight' && (
                      <FlightSection />
                    )}
                    {section.id === 'lodging' && (
                      <LodgingSection />
                    )}
                    {section.id === 'schedule' && (
                      <ScheduleSection schedule={schedule} />
                    )}
                    {section.id === 'places' && (
                      <PlacesSection osaka={osakaplaces} nara={naraplaces} kyoto={kyotoplaces} kobe={kobeplaces} />
                    )}
                    {section.id === 'food' && (
                      <FoodPlacesSection osaka={osakafood} kyoto={kyotofood} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-white/10">
        <p className="text-gray-400 text-sm font-mono tracking-widest">
          日本へようこそ - Welcome to Japan
        </p>
      </footer>
    </div>
  );
};

// =============== Section Components ===============

const FlightSection: React.FC = () => (
  <div className={`transition-all duration-500`}>
    <div className="space-y-6">
      {/* 여정 개요 */}
      <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-3 text-blue-300">📋 여정 개요</h3>
        <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
          <p><span className="text-blue-300 font-mono">노선:</span> 서울(ICN) ↔ 오사카(KIX) 왕복</p>
          <p><span className="text-blue-300 font-mono">일정:</span> 01월 19일(월) ~ 01월 23일(금) / 4박 5일</p>
          <p className="col-span-2"><span className="text-blue-300 font-mono">항공사:</span> 에어서울 (Air Seoul)</p>
        </div>
      </div>

      {/* 가는 편 */}
      <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-4 text-blue-300">✈️ 가는 편 (서울 → 오사카)</h3>
        <div className="space-y-3 text-sm text-gray-300">
          <div className="flex justify-between items-center">
            <span className="text-white font-mono">01월 19일 (월)</span>
            <span className="text-blue-300 font-mono text-xs">에어서울 0711</span>
          </div>
          <div className="bg-black/30 rounded p-3 border border-white/10">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-bold text-white">07:15</div>
                <div className="text-xs text-gray-400">ICN (서울)</div>
              </div>
              <div className="text-center flex-1">
                <div className="text-xs text-gray-400 mb-1">01시간 50분</div>
                <div className="border-t border-gray-500 pt-1">
                  <span className="text-xs text-blue-300">→</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-white">09:05</div>
                <div className="text-xs text-gray-400">KIX (오사카)</div>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400">📦 무료 위탁 수하물: 1인당 15kg</p>
        </div>
      </div>

      {/* 오는 편 */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/20 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-4 text-purple-300">✈️ 오는 편 (오사카 → 서울)</h3>
        <div className="space-y-3 text-sm text-gray-300">
          <div className="flex justify-between items-center">
            <span className="text-white font-mono">01월 23일 (금)</span>
            <span className="text-purple-300 font-mono text-xs">에어서울 0712</span>
          </div>
          <div className="bg-black/30 rounded p-3 border border-white/10">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-bold text-white">10:00</div>
                <div className="text-xs text-gray-400">KIX (오사카)</div>
              </div>
              <div className="text-center flex-1">
                <div className="text-xs text-gray-400 mb-1">01시간 55분</div>
                <div className="border-t border-gray-500 pt-1">
                  <span className="text-xs text-purple-300">→</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-white">11:55</div>
                <div className="text-xs text-gray-400">ICN (서울)</div>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400">📦 무료 위탁 수하물: 1인당 15kg</p>
        </div>
      </div>

      {/* 비용 정보 */}
      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-4 text-green-300">💰 비용 정보 (1인 기준)</h3>
        <div className="space-y-2 text-sm">
          <div className="bg-black/30 rounded p-3 border border-white/10">
            <div className="flex justify-between items-center mb-3 pb-3 border-b border-white/10">
              <span className="text-white font-bold">1인당 총 요금</span>
              <span className="text-green-300 font-bold text-lg">357,800원</span>
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-400">항공요금(기본)</span>
                <span className="font-mono">245,000원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">제세공과금</span>
                <span className="font-mono">102,800원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">발권수수료</span>
                <span className="font-mono">10,000원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">유류할증료</span>
                <span className="font-mono text-gray-500">0원</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">👥 전체 성인 4명의 총 결제 금액: 1,431,200원</p>
        </div>
      </div>
    </div>
  </div>
);

const LodgingSection: React.FC = () => (
  <div className={`transition-all duration-500`}>
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-4 border border-amber-400/20">
        <h3 className="font-bold text-lg mb-3 text-amber-300">STAYAT OSAKA SHINSAIBASHI</h3>
        <div className="space-y-2 text-sm text-gray-300">
          <p>1-14-2 Minamisemba, Chuo Ward</p>
          <p>Osaka City, Osaka Prefecture</p>
          <p>542-0081, Japan</p>
        </div>
        <div className="mt-4 pt-4 border-t border-amber-400/20">
          <div className="space-y-2 text-sm">
            <p className="font-mono text-amber-200">💰 가격: 132,224원/박</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// =============== Utility Components ===============

const ScheduleSection: React.FC<{ schedule: ScheduleDay[] }> = ({ schedule }) => (
  <div className="space-y-4">
    {schedule.map((day) => (
      <div key={day.day} className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl p-4 border border-purple-400/20">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-bold text-lg text-purple-300">Day {day.day}: {day.title}</h3>
            <p className="text-sm text-gray-400">{day.date}</p>
          </div>
        </div>
        <ul className="space-y-1 text-sm text-gray-300">
          {day.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const PlacesSection: React.FC<{ osaka: Place[]; nara: Place[]; kyoto: Place[]; kobe: Place[] }> = ({ osaka, nara, kyoto, kobe }) => (
  <div className="space-y-8">
    {/* 오사카 섹션 */}
    <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl p-6 border border-orange-400/20">
      <h3 className="font-bold text-2xl mb-4 text-orange-300">🏯 오사카</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {osaka.map((place) => (
          <PlaceCard key={place.name} place={place} />
        ))}
      </div>
    </div>

    {/* 나라 섹션 */}
    <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-xl p-6 border border-yellow-400/20">
      <h3 className="font-bold text-2xl mb-4 text-yellow-300">🦌 나라</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {nara.map((place) => (
          <PlaceCard key={place.name} place={place} />
        ))}
      </div>
    </div>

    {/* 교토 섹션 */}
    <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-xl p-6 border border-red-400/20">
      <h3 className="font-bold text-2xl mb-4 text-red-300">⛩️ 교토</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kyoto.map((place) => (
          <PlaceCard key={place.name} place={place} />
        ))}
      </div>
    </div>

    {/* 고베 섹션 */}
    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-400/20">
      <h3 className="font-bold text-2xl mb-4 text-green-300">🌆 고베</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kobe.map((place) => (
          <PlaceCard key={place.name} place={place} />
        ))}
      </div>
    </div>
  </div>
);

const FoodPlacesSection: React.FC<{ osaka: Place[]; kyoto: Place[] }> = ({ osaka, kyoto }) => (
  <div className="space-y-8">
    {/* 오사카 먹을곳 */}
    <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl p-6 border border-orange-400/20">
      <h3 className="font-bold text-2xl mb-4 text-orange-300">🍙 오사카</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {osaka.map((place) => (
          <PlaceCard key={place.name} place={place} />
        ))}
      </div>
    </div>

    {/* 교토 먹을곳 */}
    <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-xl p-6 border border-red-400/20">
      <h3 className="font-bold text-2xl mb-4 text-red-300">🍱 교토</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kyoto.map((place) => (
          <PlaceCard key={place.name} place={place} />
        ))}
      </div>
    </div>
  </div>
);

const PlaceCard: React.FC<{ place: Place }> = ({ place }) => (
  <a href={place.link} target="_blank" rel="noopener noreferrer" className="rounded-lg overflow-hidden bg-black/30 border border-white/10 hover:border-white/30 transition-all cursor-pointer group h-full hover:bg-black/40 block">
    {/* Image */}
    <div className="relative w-full h-32 overflow-hidden bg-black/30">
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    
    {/* Content */}
    <div className="p-3">
      <div className="text-2xl mb-2">{place.emoji}</div>
      <h4 className="font-bold text-sm text-white mb-1">{place.name}</h4>
      <p className="text-xs text-gray-300 line-clamp-2">{place.description}</p>
    </div>
  </a>
);

export default Japan;
