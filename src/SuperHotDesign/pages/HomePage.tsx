import { Link } from 'react-router-dom';
import { buildAssetUrl, operationsKpis } from '../data/mgaData';

const quickLinks = [
  { to: '/mga/chronicle', label: '대변동 연대기', description: '2000~2025 핵심 사건을 시간축으로 확인' },
  { to: '/mga/impurity', label: '부정 도감', description: '등급별 위험도와 대응 프로토콜 열람' },
  { to: '/mga/alerts', label: '경보센터', description: '현재 교전/대피 상태를 실시간으로 모니터링' },
  { to: '/mga/goods', label: '팬클럽 굿즈', description: '협회 인증 상품과 시즌 캠페인 확인' },
];

const worldPillars = [
  '부정 감지 레이더 운영',
  '대피 사이렌 발령 및 시민 이동 유도',
  '마법소녀 랭킹/보상 관리',
  '라이브 중계를 통한 희망 네트워크 유지',
];

const heroBackground = buildAssetUrl('VisualNovel', 'Background', 'bg_mga_hallway.png');

const HomePage = () => {
  return (
    <div className="mga-page-stack">
      <section
        className="mga-glass mga-hero-banner"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(21, 5, 23, 0.88), rgba(58, 14, 46, 0.58)), url(${heroBackground})`,
        }}
      >
        <p className="mga-overline">MGA OFFICIAL PORTAL</p>
        <h1 className="mga-hero-title">마법소녀협회 통합 작전 허브</h1>
        <p className="mga-hero-copy">
          대변동 이후 25년, 협회는 도시 전역의 부정 신호를 감지하고 시민 대피를 조율하며,
          마법소녀들의 희망 에너지를 작전에 연결합니다.
        </p>

        <div className="mga-chip-row">
          {worldPillars.map((pillar) => (
            <span key={pillar} className="mga-chip">
              {pillar}
            </span>
          ))}
        </div>

        <div className="mga-hero-actions">
          <Link className="mga-primary-btn" to="/mga/alerts">
            실시간 경보 보드 열기
          </Link>
          <Link className="mga-ghost-btn" to="/mga/magical-girls">
            S급 마법소녀 랭킹 보기
          </Link>
        </div>
      </section>

      <section className="mga-kpi-grid">
        {operationsKpis.map((kpi) => (
          <article key={kpi.label} className="mga-glass mga-kpi-card">
            <p className="mga-kpi-label">{kpi.label}</p>
            <p className="mga-kpi-value">
              {kpi.value}
              <span>{kpi.unit}</span>
            </p>
            <p className="mga-kpi-sub">{kpi.note}</p>
          </article>
        ))}
      </section>

      <section className="mga-home-panels">
        <article className="mga-glass">
          <h2 className="mga-mini-title">협회 공지 브리핑</h2>
          <p className="mga-section-desc">
            2026년 2분기부터 모든 대피소는 라이브 중계 표준 V5를 적용합니다. 시민 응원 데이터는
            마법소녀의 희망 증폭 피드백으로 환산되어 즉시 작전 보조에 반영됩니다.
          </p>
          <ul className="mga-bullet-list">
            <li>정체 보호 위반 신고는 24시간 자동 심사</li>
            <li>부정 코어 회수율 목표: 93%</li>
            <li>지망생 교육 프로그램: 주 5회 실습</li>
          </ul>
        </article>

        <article className="mga-glass">
          <h2 className="mga-mini-title">빠른 진입 링크</h2>
          <div className="mga-quick-links">
            {quickLinks.map((link) => (
              <Link key={link.to} className="mga-quick-link" to={link.to}>
                <strong>{link.label}</strong>
                <span>{link.description}</span>
              </Link>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default HomePage;
