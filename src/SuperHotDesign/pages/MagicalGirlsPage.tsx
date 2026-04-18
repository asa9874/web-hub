import { useMemo, useState, type SyntheticEvent } from 'react';
import { buildAssetUrl, identityProtectionRules, magicalGirls } from '../data/mgaData';

const fallbackPortrait = buildAssetUrl('VisualNovel', 'Character', 'female_silhouette.svg');

const MagicalGirlsPage = () => {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  const sortedGirls = useMemo(
    () => [...magicalGirls].sort((left, right) => left.ranking - right.ranking),
    [],
  );

  const toggleCard = (id: string) => {
    setFlipped((previous) => ({
      ...previous,
      [id]: !previous[id],
    }));
  };

  const handlePortraitError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = fallbackPortrait;
  };

  return (
    <div className="mga-page-stack">
      <section className="mga-glass">
        <p className="mga-overline">MAGICAL GIRLS RANKING BOARD</p>
        <h1 className="mga-section-title">구원자: 마법소녀</h1>
        <p className="mga-section-desc">
          마법소녀는 10세~17세의 강한 희망을 가진 소녀가 계약을 통해 각성합니다. Public ID는 방송되는 아이돌이지만,
          Private ID는 법적으로 보호되는 비밀입니다.
        </p>
      </section>

      <section className="mga-girl-grid">
        {sortedGirls.map((girl) => {
          const isFlipped = Boolean(flipped[girl.id]);

          return (
            <article key={girl.id} className={`mga-flip-card ${isFlipped ? 'is-flipped' : ''}`}>
              <div className="mga-flip-inner">
                <section className="mga-flip-face mga-flip-front mga-glass">
                  <img
                    src={girl.publicImage}
                    alt={`${girl.codename} 공개 프로필`}
                    className="mga-girl-image"
                    loading="lazy"
                    onError={handlePortraitError}
                  />
                  <div className="mga-girl-body">
                    <span className="mga-rank-chip">RANK {girl.ranking}</span>
                    <h2 className="mga-girl-name">{girl.codename}</h2>
                    <p className="mga-girl-meta">활동 권역: {girl.activeRegion}</p>
                    <p className="mga-girl-meta">시그니처 기술: {girl.specialMove}</p>
                    <p className="mga-girl-quote">“{girl.quote}”</p>
                    <p className="mga-girl-meta">팬클럽: {girl.fanClub}</p>
                    <button className="mga-flip-toggle" type="button" onClick={() => toggleCard(girl.id)}>
                      Private 정보 보기
                    </button>
                  </div>
                </section>

                <section className="mga-flip-face mga-flip-back mga-glass">
                  <img
                    src={girl.privateImage}
                    alt={`${girl.codename} 비공개 프로필`}
                    className="mga-girl-image"
                    loading="lazy"
                    onError={handlePortraitError}
                  />
                  <div className="mga-girl-body">
                    <span className="mga-rank-chip">Protected Identity</span>
                    <h2 className="mga-girl-name">{girl.privateIdentity}</h2>
                    <p className="mga-girl-meta">나이: {girl.age}세</p>
                    <p className="mga-girl-meta">은퇴 예상: {girl.retirementForecast}</p>
                    <p className="mga-girl-meta">희망 시그니처: {girl.hopeSignature}</p>
                    <ul className="mga-warning-list">
                      <li>위험 요소: {girl.secretRisk}</li>
                      <li>정체 노출 시 협회 긴급 보호 프로토콜 자동 발동</li>
                    </ul>
                    <button className="mga-flip-toggle" type="button" onClick={() => toggleCard(girl.id)}>
                      Public 정보로 돌아가기
                    </button>
                  </div>
                </section>
              </div>
            </article>
          );
        })}
      </section>

      <section className="mga-glass mga-rules-box">
        <h2 className="mga-mini-title">정체 보호 규정</h2>
        <ul className="mga-bullet-list">
          {identityProtectionRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MagicalGirlsPage;
