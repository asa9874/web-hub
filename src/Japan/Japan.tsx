import React from 'react';
import { Plane, Calendar, UtensilsCrossed, Hotel, MapPin, Clock } from 'lucide-react';
import './Japan.css';

interface Section {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
}

interface Food {
  name: string;
  emoji: string;
  image: string;
}

const Japan: React.FC = () => {
  const sections: Section[] = [
    { id: 'flight', title: '항공', icon: Plane, color: 'from-blue-500 to-blue-600' },
    { id: 'lodging', title: '숙소', icon: Hotel, color: 'from-amber-500 to-amber-600' },
  ];

  const foods = [
    { name: '스시 (초밥)', emoji: '🍣', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800' },
    { name: '텐동', emoji: '🍤', image: 'https://images.unsplash.com/photo-1626202150113-189f36b6be8b?q=80&w=800' },
    { name: '라멘', emoji: '🍜', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800' },
    { name: '규카츠', emoji: '🥩', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800' },
    { name: '야키토리', emoji: '🍢', image: 'https://images.unsplash.com/photo-1519676064460-7ea13437972b?q=80&w=800' },
    { name: '샤브샤브', emoji: '🍲', image: 'https://images.unsplash.com/photo-1547928576-a4a33237ce35?q=80&w=800' },
    { name: '규동', emoji: '🍚', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800' },
    { name: '오코노미야키', emoji: '🥞', image: 'https://images.unsplash.com/photo-1541830130224-e39ba6f1b091?q=80&w=800' },
    { name: '가쓰돈', emoji: '🍱', image: 'https://images.unsplash.com/photo-1591814468924-cafb1d141b18?q=80&w=800' },
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
                    {section.id === 'schedule' && (
                      <ScheduleSection />
                    )}
                    {section.id === 'food' && (
                      <FoodSection foods={foods} />
                    )}
                    {section.id === 'lodging' && (
                      <LodgingSection />
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

const ScheduleSection: React.FC = () => (
  <div className={`transition-all duration-500`}>
    <div className="space-y-3">
      {[
        { day: '1일차', activity: '도쿄 도착 & 호텔 체크인' },
        { day: '2일차', activity: '도쿄 주요 관광지 투어' },
        { day: '3일차', activity: '교토 이동 & 전통사찰 방문' },
        { day: '4일차', activity: '오사카 음식 투어' },
        { day: '5일차', activity: '여유로운 쇼핑 & 귀국' },
      ].map((item) => (
        <ScheduleItem key={item.day} day={item.day} activity={item.activity} />
      ))}
    </div>
  </div>
);

const FoodSection: React.FC<{ foods: Food[] }> = ({ foods }) => (
  <div className={`transition-all duration-500`}>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {foods.map((food) => (
        <FoodCard key={food.name} food={food} />
      ))}
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

const InfoCard: React.FC<{
  label: string;
  value: string;
  icon: React.ReactNode;
}> = ({ label, value, icon }) => (
  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
    <div className="text-gray-400">{icon}</div>
    <div>
      <p className="text-xs text-gray-500 font-mono">{label}</p>
      <p className="text-sm font-semibold text-white">{value}</p>
    </div>
  </div>
);

const ScheduleItem: React.FC<{ day: string; activity: string }> = ({ day, activity }) => (
  <div className="flex gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
    <div className="font-bold text-purple-400 min-w-fit text-sm">{day}</div>
    <div className="text-sm text-gray-300">{activity}</div>
  </div>
);

const FoodCard: React.FC<{ food: Food }> = ({ food }) => (
  <div className="rounded-lg overflow-hidden bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-400/20 hover:border-red-400/50 hover:from-red-500/20 hover:to-orange-500/20 transition-all cursor-pointer group h-full">
    {/* Image */}
    <div className="relative w-full h-24 overflow-hidden bg-black/30">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    
    {/* Content */}
    <div className="p-2">
      <div className="text-2xl mb-1 group-hover:scale-125 transition-transform inline-block">{food.emoji}</div>
      <p className="text-xs font-mono text-gray-300 group-hover:text-white transition-colors line-clamp-2">{food.name}</p>
    </div>
  </div>
);

export default Japan;
