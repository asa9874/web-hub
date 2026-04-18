import { useCallback, useEffect, useMemo, useState } from 'react';
import { initialAlerts } from '../data/mgaData';
import type { AlertItem, ImpurityLevel } from '../types';

const levelPriority: ImpurityLevel[] = ['S', 'A', 'B', 'C', 'D', 'E'];
const statusPool: AlertItem['status'][] = ['교전 중', '대피 진행', '정리 단계', '감시'];

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

const nowClock = () =>
  new Date().toLocaleTimeString('ko-KR', {
    hour12: false,
  });

const mutateAlert = (alert: AlertItem): AlertItem => {
  const currentIndex = levelPriority.indexOf(alert.level);

  let nextIndex = currentIndex;
  if (Math.random() < 0.2 && currentIndex > 0) {
    nextIndex = currentIndex - 1;
  }
  if (Math.random() < 0.15 && currentIndex < levelPriority.length - 1) {
    nextIndex = currentIndex + 1;
  }

  const evacRateDelta = Math.floor(Math.random() * 19) - 6;
  const randomStatus = statusPool[Math.floor(Math.random() * statusPool.length)];

  return {
    ...alert,
    level: levelPriority[nextIndex],
    status: randomStatus,
    evacRate: clamp(alert.evacRate + evacRateDelta, 8, 100),
    updatedAt: nowClock(),
  };
};

const AlertCenterPage = () => {
  const [alerts, setAlerts] = useState<AlertItem[]>(initialAlerts);
  const [lastSync, setLastSync] = useState<string>(nowClock());
  const [autoSync, setAutoSync] = useState(true);
  const [sirenArmed, setSirenArmed] = useState(true);

  const refreshBoard = useCallback(() => {
    setAlerts((previous) => previous.map((alert) => mutateAlert(alert)));
    setLastSync(nowClock());
  }, []);

  useEffect(() => {
    if (!autoSync) {
      return;
    }

    const timer = window.setInterval(() => {
      refreshBoard();
    }, 9000);

    return () => window.clearInterval(timer);
  }, [autoSync, refreshBoard]);

  const combatCount = useMemo(
    () => alerts.filter((alert) => alert.status === '교전 중').length,
    [alerts],
  );

  const highRiskCount = useMemo(
    () => alerts.filter((alert) => alert.level === 'S' || alert.level === 'A').length,
    [alerts],
  );

  return (
    <div className="mga-page-stack">
      <section className="mga-glass">
        <p className="mga-overline">MGA COMMAND & ALERT CENTER</p>
        <h1 className="mga-section-title">실시간 부정 경보 보드</h1>
        <p className="mga-section-desc">
          각 도시의 경보 상태, 대피율, 교전 현황을 실시간으로 반영합니다. 시민 대피 방송은 지연 없이 동기화됩니다.
        </p>

        <div className="mga-alert-toolbar">
          <div className="mga-status-row">
            <span className="mga-status-pill">교전 중 {combatCount}건</span>
            <span className="mga-status-pill">고위험 {highRiskCount}건</span>
            <span className="mga-status-pill">최근 동기화 {lastSync}</span>
          </div>
          <div className="mga-toolbar-actions">
            <button className="mga-small-btn" type="button" onClick={refreshBoard}>
              즉시 새로고침
            </button>
            <button
              className={`mga-toggle-chip ${autoSync ? 'is-on' : ''}`}
              type="button"
              onClick={() => setAutoSync((previous) => !previous)}
            >
              자동 동기화 {autoSync ? 'ON' : 'OFF'}
            </button>
            <button
              className={`mga-toggle-chip ${sirenArmed ? 'is-on' : ''}`}
              type="button"
              onClick={() => setSirenArmed((previous) => !previous)}
            >
              사이렌 방송 {sirenArmed ? '가동' : '중지'}
            </button>
          </div>
        </div>
      </section>

      <section className="mga-alert-grid">
        {alerts.map((alert) => (
          <article key={alert.id} className="mga-glass mga-alert-card">
            <div className="mga-alert-head">
              <h2 className="mga-alert-location">
                {alert.city} · {alert.district}
              </h2>
              <span className={`mga-level-badge level-${alert.level}`}>{alert.level}급</span>
            </div>

            <p className="mga-alert-meta">담당 마법소녀: {alert.magicalGirl}</p>
            <p className="mga-alert-meta">현재 상태: {alert.status}</p>

            <div className="mga-progress-wrap">
              <div className="mga-progress-head">
                <span>대피율</span>
                <strong>{alert.evacRate}%</strong>
              </div>
              <div className="mga-progress-bar" role="progressbar" aria-valuenow={alert.evacRate} aria-valuemin={0} aria-valuemax={100}>
                <div className="mga-progress-fill" style={{ width: `${alert.evacRate}%` }} />
              </div>
            </div>

            <p className="mga-alert-updated">업데이트: {alert.updatedAt}</p>
          </article>
        ))}
      </section>

      <section className="mga-glass mga-siren-box">
        <h2 className="mga-mini-title">관제 노트</h2>
        <p className="mga-section-desc">
          {sirenArmed
            ? '사이렌 채널이 활성화되어 경보 발생 시 3초 내 대피소 송출을 시작합니다.'
            : '사이렌 채널이 수동 모드입니다. 필요 시 즉시 ON으로 전환하세요.'}
        </p>
      </section>
    </div>
  );
};

export default AlertCenterPage;
