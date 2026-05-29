import PanelTitle from '../ui/PanelTitle.tsx';

const AVATAR = `   _________
  |  .   .  |
  |  |___|  |
  |   ___   |
  |  /   \\  |
  |_________|`;

export default function LeftPanel() {
  return (
    <aside id="left-panel">
      <pre id="player-avatar">{AVATAR}</pre>
      <div id="player-name">[ 생 존 자 ]</div>

      <div id="stats-section">
        <PanelTitle>[ 생존 상태 ]</PanelTitle>
        <div id="stats-inner">
          <div className="stat-row">
            <div className="stat-label-text">생 명 력</div>
            <span id="hp-bar-ascii" className="stat-bar-ascii hp-ok">██████████████</span>
            <div id="hp-numeric" className="stat-numeric">100 / 100</div>
          </div>
          <div className="stat-row">
            <div className="stat-label-text">오 염 도</div>
            <span id="cor-bar-ascii" className="stat-bar-ascii cor-ok">░░░░░░░░░░░░░░</span>
            <div id="cor-numeric" className="stat-numeric">0 / 100</div>
          </div>
        </div>
      </div>

      <div id="inventory-section">
        <PanelTitle>[ 소 지 품 ]</PanelTitle>
        <div id="inventory-list"></div>
      </div>
    </aside>
  );
}
