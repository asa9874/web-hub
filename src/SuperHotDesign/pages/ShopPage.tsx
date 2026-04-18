import { useEffect, useMemo, useRef, useState } from 'react';
import {
  CreditCard,
  Filter,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildAssetUrl, goodsCatalog } from '../data/mgaData';

type ShopCategory = 'ALL' | 'LIMITED' | 'LIFESTYLE' | 'TACTICAL' | 'DIGITAL';

interface ShopProduct {
  id: string;
  name: string;
  series: string;
  category: ShopCategory;
  price: number;
  discountPrice: number;
  badge: string;
  stock: number;
  image: string;
  description: string;
}

const categoryOrder: ShopCategory[] = ['ALL', 'LIMITED', 'LIFESTYLE', 'TACTICAL', 'DIGITAL'];

const categoryLabel: Record<ShopCategory, string> = {
  ALL: '전체',
  LIMITED: '리미티드',
  LIFESTYLE: '라이프스타일',
  TACTICAL: '전술장비',
  DIGITAL: '디지털',
};

const toWon = (value: number) => `₩${new Intl.NumberFormat('ko-KR').format(value)}`;

const baseGoodsProducts: ShopProduct[] = goodsCatalog.map((item, index) => {
  const categories: ShopCategory[] = ['LIMITED', 'LIFESTYLE', 'TACTICAL', 'DIGITAL', 'LIFESTYLE', 'LIMITED'];
  const basePrice = Number(item.price.replace(/[^0-9]/g, ''));

  return {
    id: item.id,
    name: item.name,
    series: item.series,
    category: categories[index] ?? 'LIFESTYLE',
    price: basePrice,
    discountPrice: Math.max(basePrice - 1200, Math.floor(basePrice * 0.82)),
    badge: item.rarity,
    stock: 30 + (index + 1) * 7,
    image: item.previewImage,
    description: item.slogan,
  };
});

const extendedProducts: ShopProduct[] = [
  {
    id: 'shop-chronicle-jacket',
    name: 'Great Shift 아카이브 재킷',
    series: 'Chronicle Studio',
    category: 'LIFESTYLE',
    price: 128000,
    discountPrice: 109000,
    badge: 'Editor Pick',
    stock: 58,
    image: buildAssetUrl('VisualNovel', 'Background', 'bg_hallway_shadow.png'),
    description: '내외피 이중 레이어와 자수 패치로 완성한 협회 공식 시그니처 아우터',
  },
  {
    id: 'shop-prism-case',
    name: '프리즘 코어 하드케이스',
    series: 'MGA Device Guard',
    category: 'TACTICAL',
    price: 62000,
    discountPrice: 51000,
    badge: 'Mission Ready',
    stock: 96,
    image: buildAssetUrl('VisualNovel', 'Background', 'bg_mga_server_room.png'),
    description: '충격 분산 구조와 자성 잠금으로 전술 단말을 보호하는 모듈형 케이스',
  },
  {
    id: 'shop-shelter-beam',
    name: 'Shelter Beam 라이트 패널',
    series: 'Safehouse Interior',
    category: 'DIGITAL',
    price: 74000,
    discountPrice: 64000,
    badge: 'New',
    stock: 120,
    image: buildAssetUrl('VisualNovel', 'Background', 'bg_digital_space.png'),
    description: '앱 연동 컬러 씬과 실시간 경보 싱크를 지원하는 스마트 패널',
  },
  {
    id: 'shop-id-brooch',
    name: '비공개 신원 보호 브로치',
    series: 'Identity Protocol',
    category: 'LIMITED',
    price: 93000,
    discountPrice: 78000,
    badge: 'Limited',
    stock: 21,
    image: buildAssetUrl('VisualNovel', 'Background', 'bg_ruins_thorns.png'),
    description: 'NFC 서명과 홀로그램 실드를 담은 정체 보호 상징 액세서리',
  },
  {
    id: 'shop-fan-loop',
    name: 'Hope Loop 팬키트 박스',
    series: 'Fan Sync Pack',
    category: 'LIFESTYLE',
    price: 47000,
    discountPrice: 39000,
    badge: 'Fan Favorite',
    stock: 145,
    image: buildAssetUrl('VisualNovel', 'Background', 'bg_park_fountain_night.png'),
    description: '응원봉 스킨, 포토카드, 시그니처 스티커를 묶은 시즌 패키지',
  },
  {
    id: 'shop-command-skin',
    name: 'Command HUD 인터페이스 스킨',
    series: 'Dashboard Premium',
    category: 'DIGITAL',
    price: 32000,
    discountPrice: 25000,
    badge: 'UI Kit',
    stock: 200,
    image: buildAssetUrl('VisualNovel', 'Background', 'bg_mga_hallway.png'),
    description: '협회 관제실 디자인을 재해석한 데스크톱/모바일 통합 UI 테마',
  },
];

const allProducts: ShopProduct[] = [...baseGoodsProducts, ...extendedProducts];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<ShopCategory>('ALL');
  const [cart, setCart] = useState<Record<string, number>>({});
  const [scrollY, setScrollY] = useState(0);
  const [runwayProgress, setRunwayProgress] = useState(0);
  const runwayRef = useRef<HTMLElement | null>(null);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'ALL') {
      return allProducts;
    }
    return allProducts.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const cartItems = useMemo(() => {
    return allProducts
      .filter((product) => cart[product.id])
      .map((product) => ({
        ...product,
        quantity: cart[product.id],
      }));
  }, [cart]);

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.discountPrice * item.quantity, 0),
    [cartItems],
  );

  const shippingFee = subtotal === 0 ? 0 : subtotal >= 90000 ? 0 : 3000;
  const vat = Math.floor(subtotal * 0.1);
  const total = subtotal + shippingFee + vat;
  const cartCount = cartItems.reduce((totalCount, item) => totalCount + item.quantity, 0);

  const updateCart = (id: string, delta: number) => {
    setCart((previous) => {
      const current = previous[id] ?? 0;
      const next = Math.max(0, current + delta);

      if (next === 0) {
        const { [id]: removed, ...rest } = previous;
        return rest;
      }

      return {
        ...previous,
        [id]: next,
      };
    });
  };

  const clearCart = () => {
    setCart({});
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (runwayRef.current) {
        const rect = runwayRef.current.getBoundingClientRect();
        const viewport = window.innerHeight;
        const progress = (viewport - rect.top) / (viewport + rect.height);
        const clamped = Math.min(1, Math.max(0, progress));
        setRunwayProgress(clamped);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>('.mga-shop-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -30px 0px' },
    );

    revealTargets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const heroDrift = Math.max(-90, Math.min(90, scrollY * -0.13));
  const glowShift = Math.max(-45, Math.min(45, scrollY * 0.04));

  return (
    <div className="mga-page-stack mga-shop-shell">
      <section className="mga-glass mga-shop-hero mga-shop-reveal">
        <div
          className="mga-shop-hero-layer"
          style={{
            transform: `translateY(${heroDrift}px)`,
            backgroundImage: `linear-gradient(145deg, rgba(16, 3, 18, 0.82), rgba(66, 17, 58, 0.52)), url(${buildAssetUrl('VisualNovel', 'Background', 'bg_council_room_sunset.png')})`,
          }}
        />
        <div className="mga-shop-hero-content">
          <p className="mga-overline">MGA SIGNATURE COMMERCE</p>
          <h1 className="mga-shop-title">Skeuomorph Signature Mall</h1>
          <p className="mga-shop-copy">
            재질감과 실루엣을 강조한 스큐어모피즘 쇼핑 경험. 스크롤할수록 패널이 떠오르고,
            카탈로그가 입체적으로 전개되는 협회 공식 커머스 스테이지입니다.
          </p>
          <div className="mga-shop-hero-actions">
            <button className="mga-primary-btn" type="button" onClick={() => window.scrollTo({ top: 720, behavior: 'smooth' })}>
              컬렉션 바로 보기
            </button>
            <Link className="mga-ghost-btn" to="/mga/goods">
              굿즈 쇼케이스로 이동
            </Link>
          </div>
          <div className="mga-shop-floating-metrics" style={{ transform: `translateX(${glowShift}px)` }}>
            <article>
              <Sparkles size={16} />
              <strong>스크롤 반응 UI</strong>
              <span>Parallax + Reveal + Runway</span>
            </article>
            <article>
              <ShoppingCart size={16} />
              <strong>실전 카트 계산</strong>
              <span>할인/배송/부가세 자동 산출</span>
            </article>
            <article>
              <ShieldCheck size={16} />
              <strong>협회 인증 결제</strong>
              <span>ID Protocol 보안 처리</span>
            </article>
          </div>
        </div>
      </section>

      <section className="mga-glass mga-shop-filter-bar mga-shop-reveal">
        <div className="mga-shop-filter-head">
          <h2>
            <Filter size={16} /> 카테고리 필터
          </h2>
          <p>
            {filteredProducts.length}개 상품 표시 · 장바구니 {cartCount}개
          </p>
        </div>
        <div className="mga-shop-filter-chips">
          {categoryOrder.map((category) => (
            <button
              key={category}
              type="button"
              className={`mga-filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {categoryLabel[category]}
            </button>
          ))}
        </div>
      </section>

      <section className="mga-shop-product-grid">
        {filteredProducts.map((product, index) => (
          <article
            key={product.id}
            className="mga-glass mga-skeuo-product mga-shop-reveal"
            style={{ ['--shop-delay' as string]: `${index * 45}ms` }}
          >
            <div className="mga-skeuo-frame">
              <div className="mga-skeuo-screen" style={{ backgroundImage: `url(${product.image})` }} />
              <span className="mga-skeuo-badge">{product.badge}</span>
              <span className="mga-skeuo-stock">재고 {product.stock}</span>
            </div>
            <div className="mga-skeuo-info">
              <p className="mga-skeuo-series">{product.series}</p>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <div className="mga-skeuo-foot">
              <div>
                <p className="mga-skeuo-original">{toWon(product.price)}</p>
                <strong>{toWon(product.discountPrice)}</strong>
              </div>
              <button className="mga-primary-btn" type="button" onClick={() => updateCart(product.id, 1)}>
                <Plus size={14} /> 담기
              </button>
            </div>
          </article>
        ))}
      </section>

      <section ref={runwayRef} className="mga-glass mga-shop-runway mga-shop-reveal">
        <div className="mga-shop-runway-head">
          <h2>Scroll Runway</h2>
          <p>스크롤 깊이에 따라 컬렉션 라벨이 좌우로 흐르며 입체감을 강화합니다.</p>
        </div>
        <div className="mga-runway-window">
          <div
            className="mga-runway-track"
            style={{ transform: `translateX(${(0.5 - runwayProgress) * 360}px)` }}
          >
            {['LIMITED DROP', 'TACTICAL GRID', 'AURA FABRIC', 'SHELTER EDITION', 'DIGITAL HUD', 'FAN CLUB PICK'].map((label) => (
              <div key={label} className="mga-runway-card">
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="mga-runway-progress">
          <span>SCROLL DEPTH</span>
          <div>
            <div style={{ width: `${Math.round(runwayProgress * 100)}%` }} />
          </div>
        </div>
      </section>

      <section className="mga-shop-summary-grid">
        <article className="mga-glass mga-shop-checkout mga-shop-reveal">
          <h2>
            <CreditCard size={16} /> Checkout Panel
          </h2>

          {cartItems.length === 0 ? (
            <p className="mga-section-desc">상품을 담으면 이곳에서 실시간 합계가 계산됩니다.</p>
          ) : (
            <div className="mga-shop-cart-list">
              {cartItems.map((item) => (
                <div key={item.id} className="mga-shop-cart-row">
                  <div>
                    <strong>{item.name}</strong>
                    <span>{toWon(item.discountPrice)} / 개</span>
                  </div>
                  <div className="mga-shop-qty-controller">
                    <button type="button" onClick={() => updateCart(item.id, -1)} aria-label={`${item.name} 수량 감소`}>
                      <Minus size={12} />
                    </button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => updateCart(item.id, 1)} aria-label={`${item.name} 수량 증가`}>
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mga-shop-totals">
            <p>
              <span>상품 합계</span>
              <strong>{toWon(subtotal)}</strong>
            </p>
            <p>
              <span>배송비</span>
              <strong>{toWon(shippingFee)}</strong>
            </p>
            <p>
              <span>부가세</span>
              <strong>{toWon(vat)}</strong>
            </p>
            <p className="is-grand-total">
              <span>총 결제금액</span>
              <strong>{toWon(total)}</strong>
            </p>
          </div>

          <div className="mga-shop-checkout-actions">
            <button className="mga-primary-btn" type="button" disabled={cartItems.length === 0}>
              결제 진행
            </button>
            <button className="mga-ghost-btn" type="button" onClick={clearCart}>
              카트 비우기
            </button>
          </div>
        </article>

        <article className="mga-glass mga-shop-assurance mga-shop-reveal">
          <h2>
            <Truck size={16} /> Delivery & Trust
          </h2>
          <ul className="mga-bullet-list">
            <li>09:00 이전 결제 시 당일 협회 물류 허브 출고</li>
            <li>90,000원 이상 무료 배송 / 일반 배송 3,000원</li>
            <li>정품 인증 태그 미인식 시 100% 교환 보장</li>
            <li>디지털 상품은 결제 즉시 라이선스 발급</li>
          </ul>

          <div className="mga-shop-note-card">
            <strong>운영 노트</strong>
            <p>
              스큐어모피즘 연출은 실제 재질감을 표현하기 위해 다중 그림자와 베벨 레이어를 사용합니다.
              스크롤에 따라 각 레이어가 다른 속도로 반응해 물리적인 깊이감을 제공합니다.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ShopPage;
