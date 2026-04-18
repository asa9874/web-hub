import { useMemo, useState } from 'react';
import { liveChannelLineup, shelterProtocol } from '../data/mgaData';

const ShelterGuidePage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const progress = useMemo(
    () => ((currentStep + 1) / shelterProtocol.length) * 100,
    [currentStep],
  );

  const activeStep = shelterProtocol[currentStep];

  const handleNext = () => {
    setCurrentStep((previous) => {
      if (previous >= shelterProtocol.length - 1) {
        return previous;
      }
      return previous + 1;
    });
  };

  return (
    <div className="mga-page-stack">
      <section className="mga-glass">
        <p className="mga-overline">CITIZEN SHELTER PROTOCOL</p>
        <h1 className="mga-section-title">시민 대피 가이드</h1>
        <p className="mga-section-desc">
          부정 주의보가 울리면 시민은 대피소로 이동하고, 대형 스크린의 라이브 중계를 통해 상황을 확인합니다.
          아래 시뮬레이션으로 대피 프로세스를 미리 익혀두세요.
        </p>

        <div className="mga-progress-wrap">
          <div className="mga-progress-head">
            <span>모의 대피 진행도</span>
            <strong>{Math.round(progress)}%</strong>
          </div>
          <div className="mga-progress-bar" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
            <div className="mga-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="mga-step-controls">
          <button className="mga-primary-btn" type="button" onClick={handleNext} disabled={currentStep >= shelterProtocol.length - 1}>
            다음 단계 진행
          </button>
          <button className="mga-ghost-btn" type="button" onClick={() => setCurrentStep(0)}>
            시뮬레이션 리셋
          </button>
        </div>
      </section>

      <section className="mga-stepper">
        {shelterProtocol.map((step, index) => (
          <article
            key={step.id}
            className={`mga-glass mga-step-item ${index === currentStep ? 'is-current' : ''}`}
          >
            <span className="mga-step-index">STEP {step.id}</span>
            <div className="mga-step-content">
              <h2 className="mga-step-title">{step.title}</h2>
              <p>{step.action}</p>
              <p className="mga-step-duration">권장 소요: {step.duration}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mga-shelter-grid">
        <article className="mga-glass mga-live-card">
          <h2 className="mga-mini-title">현재 시뮬레이션 포인트</h2>
          <p className="mga-section-desc">{activeStep.title}</p>
          <p className="mga-section-desc">{activeStep.action}</p>
        </article>

        <article className="mga-glass mga-live-card">
          <h2 className="mga-mini-title">대피소 라이브 채널</h2>
          <ul className="mga-bullet-list">
            {liveChannelLineup.map((channel) => (
              <li key={channel}>{channel}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
};

export default ShelterGuidePage;
