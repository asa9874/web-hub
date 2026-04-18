import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { goodsCatalog, promotionalCampaigns } from '../data/mgaData';

const GoodsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % goodsCatalog.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const activeItem = useMemo(() => goodsCatalog[activeIndex], [activeIndex]);

  const rarityClass = {
    Standard: 'is-standard',
    Rare: 'is-rare',
    Legend: 'is-legend',
  } as const;

  const movePrev = () => {
    setActiveIndex((previous) => {
      if (previous === 0) {
        return goodsCatalog.length - 1;
      }
      return previous - 1;
    });
  };

  const moveNext = () => {
    setActiveIndex((previous) => (previous + 1) % goodsCatalog.length);
  };

  return (
    <div className="mga-page-stack">
      <section className="mga-glass">
        <p className="mga-overline">FAN CLUB GOODS EXHIBITION</p>
        <h1 className="mga-section-title">팬클럽 굿즈 쇼케이스</h1>
        <p className="mga-section-desc">
          대피소 문화가 일상이 된 시대, 굿즈는 단순한 상품이 아니라 응원과 연대의 신호입니다.
          시즌별 캠페인과 함께 협회 인증 상품을 확인하세요.
        </p>

        <div className="mga-hero-actions">
          <Link className="mga-primary-btn" to="/mga/shop">
            실전 쇼핑몰 입장
          </Link>
        </div>
      </section>

      <section className="mga-carousel">
        <div className="mga-carousel-shell">
          <button className="mga-carousel-arrow" type="button" onClick={movePrev} aria-label="이전 굿즈">
            ◀
          </button>

          <article className="mga-glass mga-carousel-feature">
            <div
              className="mga-feature-visual"
              style={{
                backgroundImage: `linear-gradient(120deg, rgba(22, 4, 24, 0.78), rgba(255, 93, 173, 0.3)), url(${activeItem.previewImage})`,
              }}
            />
            <div className="mga-feature-body">
              <span className={`mga-rarity-tag ${rarityClass[activeItem.rarity]}`}>{activeItem.rarity}</span>
              <h2 className="mga-feature-name">{activeItem.name}</h2>
              <p className="mga-feature-series">{activeItem.series}</p>
              <p className="mga-feature-slogan">{activeItem.slogan}</p>
              <p className="mga-price">{activeItem.price}</p>
              <p className="mga-feature-asset">이미지 키: {activeItem.requiredImageId}</p>
            </div>
          </article>

          <button className="mga-carousel-arrow" type="button" onClick={moveNext} aria-label="다음 굿즈">
            ▶
          </button>
        </div>

        <div className="mga-thumb-row">
          {goodsCatalog.map((item, index) => (
            <button
              key={item.id}
              className={`mga-thumb-item ${index === activeIndex ? 'active' : ''}`}
              type="button"
              onClick={() => setActiveIndex(index)}
            >
              <span>{item.name}</span>
              <small>{item.price}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="mga-campaign-grid">
        {promotionalCampaigns.map((campaign) => (
          <article key={campaign.title} className="mga-glass mga-campaign-card">
            <h2>{campaign.title}</h2>
            <p className="mga-campaign-window">기간: {campaign.window}</p>
            <p>{campaign.reward}</p>
            <p className="mga-section-desc">{campaign.note}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default GoodsPage;
