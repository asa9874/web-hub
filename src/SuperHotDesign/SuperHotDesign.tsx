import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  Bell,
  BookOpen,
  Building2,
  Home,
  Shield,
  ShoppingBag,
  Store,
  Sparkles,
  Users,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { buildAssetUrl, operationsKpis } from './data/mgaData';
import AlertCenterPage from './pages/AlertCenterPage';
import ChroniclePage from './pages/ChroniclePage';
import GoodsPage from './pages/GoodsPage';
import HomePage from './pages/HomePage';
import ImpurityDexPage from './pages/ImpurityDexPage';
import MagicalGirlsPage from './pages/MagicalGirlsPage';
import ShopPage from './pages/ShopPage';
import ShelterGuidePage from './pages/ShelterGuidePage';
import './SuperHotDesign.css';

interface NavItem {
  to: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
}

const navItems: NavItem[] = [
  {
    to: '/mga',
    label: '협회 메인',
    description: '허브 브리핑 / 핵심 지표',
    icon: Home,
  },
  {
    to: '/mga/chronicle',
    label: '대변동 연대기',
    description: '2000~2025 공식 기록',
    icon: BookOpen,
  },
  {
    to: '/mga/impurity',
    label: '부정 도감',
    description: '등급별 위협/대응',
    icon: Shield,
  },
  {
    to: '/mga/magical-girls',
    label: '마법소녀 랭킹',
    description: 'Public/Private 이중 프로필',
    icon: Users,
  },
  {
    to: '/mga/alerts',
    label: '경보센터',
    description: '실시간 교전/대피 현황',
    icon: Bell,
  },
  {
    to: '/mga/shelter',
    label: '시민 대피 가이드',
    description: '경보 수신부터 복귀까지',
    icon: Building2,
  },
  {
    to: '/mga/shop',
    label: '시그니처 스토어',
    description: '초모던 스큐어모피즘 쇼핑몰',
    icon: Store,
  },
  {
    to: '/mga/goods',
    label: '팬클럽 굿즈',
    description: '쇼케이스 + 시즌 캠페인',
    icon: ShoppingBag,
  },
];

const bgmTrackUrl = buildAssetUrl('VisualNovel', 'Sound', 'music', '잔잔한음악.mp3');

type BgmState = 'idle' | 'playing' | 'paused';

const SuperHotDesign = () => {
  const location = useLocation();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [bgmState, setBgmState] = useState<BgmState>('idle');

  const currentNav = useMemo(() => {
    return (
      navItems.find((item) => item.to === location.pathname) ??
      navItems.find((item) => location.pathname.startsWith(`${item.to}/`)) ??
      navItems[0]
    );
  }, [location.pathname]);

  const toggleBgm = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(bgmTrackUrl);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }

    const audio = audioRef.current;

    if (bgmState !== 'playing') {
      try {
        await audio.play();
        setBgmState('playing');
      } catch (error) {
        console.error('BGM playback blocked:', error);
        setBgmState('paused');
      }
      return;
    }

    audio.pause();
    setBgmState('paused');
  };

  useEffect(() => {
    return () => {
      if (!audioRef.current) {
        return;
      }
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    };
  }, []);

  return (
    <div className="mga-shell">
      <div className="mga-backdrop" aria-hidden="true" />
      <div className="mga-orb mga-orb-a" aria-hidden="true" />
      <div className="mga-orb mga-orb-b" aria-hidden="true" />
      <div className="mga-orb mga-orb-c" aria-hidden="true" />

      <header className="mga-topbar mga-glass">
        <div className="mga-topbar-left">
          <span className="mga-overline">MAGICAL GIRLS ASSOCIATION</span>
          <h1 className="mga-display">Official Hyperglass Portal</h1>
        </div>

        <div className="mga-topbar-actions">
          <button className="mga-small-btn" type="button" onClick={toggleBgm}>
            {bgmState === 'playing' ? <VolumeX size={16} /> : <Volume2 size={16} />}
            BGM {bgmState === 'playing' ? '정지' : '재생'}
          </button>
          <Link className="mga-ghost-btn" to="/">
            <ArrowLeft size={16} /> 허브로 복귀
          </Link>
        </div>
      </header>

      <div className="mga-layout">
        <aside className="mga-sidebar mga-glass">
          <div className="mga-sidebar-heading">
            <Sparkles size={16} />
            <span>현재 섹션</span>
          </div>
          <h2 className="mga-nav-title">{currentNav.label}</h2>
          <p className="mga-sidebar-copy">{currentNav.description}</p>

          <nav className="mga-nav-list" aria-label="MGA 페이지 탐색">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/mga'}
                  className={({ isActive }) => `mga-nav-link ${isActive ? 'active' : ''}`}
                >
                  <Icon size={16} />
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.description}</span>
                  </div>
                </NavLink>
              );
            })}
          </nav>

          <div className="mga-side-stats">
            {operationsKpis.slice(0, 3).map((kpi) => (
              <div key={kpi.label} className="mga-side-stat">
                <p>{kpi.label}</p>
                <strong>
                  {kpi.value}
                  <span>{kpi.unit}</span>
                </strong>
              </div>
            ))}
          </div>
        </aside>

        <main className="mga-main-content">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="chronicle" element={<ChroniclePage />} />
            <Route path="impurity" element={<ImpurityDexPage />} />
            <Route path="magical-girls" element={<MagicalGirlsPage />} />
            <Route path="alerts" element={<AlertCenterPage />} />
            <Route path="shelter" element={<ShelterGuidePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="goods" element={<GoodsPage />} />
            <Route path="*" element={<Navigate replace to="/mga" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default SuperHotDesign;
