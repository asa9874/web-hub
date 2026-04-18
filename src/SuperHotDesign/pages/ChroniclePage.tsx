import { useEffect, useMemo, useState } from 'react';
import { chronicleEvents } from '../data/mgaData';

const ChroniclePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const orderedEvents = useMemo(
    () => [...chronicleEvents].sort((left, right) => left.year - right.year),
    [],
  );

  return (
    <div className="mga-page-stack">
      <section className="mga-glass">
        <p className="mga-overline">THE GREAT SHIFT CHRONICLE</p>
        <h1 className="mga-section-title">연대기: 대변동의 기록</h1>
        <p className="mga-section-desc">
          2000년의 균열 발생부터 2025년 공존의 시대까지, 인류는 공포와 희망을 동시에 학습했습니다.
          아래 타임라인은 협회 아카이브의 핵심 로그를 추린 공식 기록입니다.
        </p>
      </section>

      <section className="mga-timeline">
        {orderedEvents.map((event, index) => {
          const drift = Math.max(-42, Math.min(42, (scrollY - index * 180) * 0.035));
          const direction = index % 2 === 0 ? 1 : -1;

          return (
            <article
              key={`${event.year}-${event.title}`}
              className={`mga-glass mga-timeline-item is-${event.atmosphere}`}
              style={{ transform: `translateY(${drift * direction}px)` }}
            >
              <div className="mga-year-pill">{event.year}</div>
              <h2 className="mga-timeline-title">{event.title}</h2>
              <p className="mga-timeline-subtitle">{event.subtitle}</p>
              <p className="mga-timeline-summary">{event.summary}</p>
              <p className="mga-timeline-consequence">
                <strong>결과:</strong> {event.consequence}
              </p>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default ChroniclePage;
