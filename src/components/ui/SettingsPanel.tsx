import { useSettingsStore, type TypingSpeed, type TextScale } from '../../state/settingsStore.ts';
import { sound } from '../../utils/sound.ts';

const SPEED_OPTS: { value: TypingSpeed; label: string }[] = [
  { value: 'slow',   label: '느리게' },
  { value: 'normal', label: '보  통' },
  { value: 'fast',   label: '빠르게' },
];

const SCALE_OPTS: { value: TextScale; label: string; desc: string }[] = [
  { value: 'small',  label: '작게',  desc: '13px' },
  { value: 'medium', label: '보통',  desc: '15px' },
  { value: 'large',  label: '크게',  desc: '17px' },
];

export default function SettingsPanel() {
  const { typingSpeed, textScale, soundEnabled,
          isPanelOpen, closePanel,
          setTypingSpeed, setTextScale, setSoundEnabled } = useSettingsStore();

  if (!isPanelOpen) return null;

  return (
    <>
      {/* 배경 딤 처리 */}
      <div
        onClick={closePanel}
        style={{
          position: 'fixed', inset: 0, zIndex: 130,
          background: 'rgba(0,0,0,0.55)',
        }}
      />
      {/* 패널 */}
      <div id="settings-panel">
        <div id="settings-header">
          <span id="settings-title">[ 설 정 ]</span>
          <button className="map-x" onClick={closePanel}>✕</button>
        </div>

        <div id="settings-body">

          {/* 타이핑 속도 */}
          <div className="set-section">
            <div className="set-label">타이핑 속도</div>
            <div className="set-options">
              {SPEED_OPTS.map(o => (
                <button
                  key={o.value}
                  className={`set-btn${typingSpeed === o.value ? ' set-btn--active' : ''}`}
                  onClick={() => setTypingSpeed(o.value)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          {/* 텍스트 크기 */}
          <div className="set-section">
            <div className="set-label">텍스트 크기</div>
            <div className="set-options">
              {SCALE_OPTS.map(o => (
                <button
                  key={o.value}
                  className={`set-btn${textScale === o.value ? ' set-btn--active' : ''}`}
                  onClick={() => setTextScale(o.value)}
                >
                  {o.label}
                  <span className="set-btn-sub">{o.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 사운드 */}
          <div className="set-section">
            <div className="set-label">사운드</div>
            <div className="set-options">
              <button
                className={`set-btn${soundEnabled ? ' set-btn--active' : ''}`}
                onClick={() => { setSoundEnabled(true);  sound.click(); }}
              >
                켜기
              </button>
              <button
                className={`set-btn${!soundEnabled ? ' set-btn--active' : ''}`}
                onClick={() => setSoundEnabled(false)}
              >
                끄기
              </button>
            </div>
          </div>

          <div className="set-note">설정은 자동으로 저장됩니다.</div>
        </div>
      </div>
    </>
  );
}
