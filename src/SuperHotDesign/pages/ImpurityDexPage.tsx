import { useMemo, useState } from 'react';
import { impurityTiers } from '../data/mgaData';
import type { ImpurityLevel } from '../types';

type FilterLevel = 'ALL' | ImpurityLevel;

const filterLevels: FilterLevel[] = ['ALL', 'S', 'A', 'B', 'C', 'D', 'E'];

const ImpurityDexPage = () => {
  const [selectedLevel, setSelectedLevel] = useState<FilterLevel>('ALL');

  const filteredTiers = useMemo(() => {
    if (selectedLevel === 'ALL') {
      return impurityTiers;
    }
    return impurityTiers.filter((tier) => tier.level === selectedLevel);
  }, [selectedLevel]);

  return (
    <div className="mga-page-stack">
      <section className="mga-glass">
        <p className="mga-overline">IMPURITY CLASSIFICATION</p>
        <h1 className="mga-section-title">적대 존재 도감: 부정(Impurity)</h1>
        <p className="mga-section-desc">
          부정은 인간의 절망과 원한이 물리화된 존재입니다. 등급이 높을수록 파괴력뿐 아니라 정신 오염 범위가 급격히 증가합니다.
        </p>

        <div className="mga-filter-row">
          {filterLevels.map((level) => (
            <button
              key={level}
              type="button"
              className={`mga-filter-btn ${selectedLevel === level ? 'active' : ''}`}
              onClick={() => setSelectedLevel(level)}
            >
              {level === 'ALL' ? '전체 등급' : `${level}급`}
            </button>
          ))}
        </div>
      </section>

      <section className="mga-impurity-grid">
        {filteredTiers.map((tier) => (
          <article key={tier.level} className="mga-glass mga-impurity-card">
            <div className="mga-alert-head">
              <h2>{tier.level}급 부정</h2>
              <span className={`mga-level-badge level-${tier.level}`}>{tier.dangerLabel}</span>
            </div>

            <dl className="mga-stat-grid">
              <div>
                <dt>출현 빈도</dt>
                <dd>{tier.spawnRate}</dd>
              </div>
              <div>
                <dt>물리 파괴력</dt>
                <dd>{tier.destructivePower}</dd>
              </div>
              <div>
                <dt>오염 범위</dt>
                <dd>{tier.corruption}</dd>
              </div>
              <div>
                <dt>필수 대응</dt>
                <dd>{tier.requiredResponse}</dd>
              </div>
            </dl>

            <p className="mga-mini-title">권장 투입 유닛</p>
            <ul className="mga-bullet-list">
              {tier.recommendedUnits.map((unit) => (
                <li key={unit}>{unit}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
};

export default ImpurityDexPage;
