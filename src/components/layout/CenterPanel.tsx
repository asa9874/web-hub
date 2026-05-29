import PanelTitle from '../ui/PanelTitle.tsx';

export default function CenterPanel() {
  return (
    <main id="center-panel">

      <div id="scene-header">
        <div id="location-bar">
          <span className="loc-icon">◈</span>
          <span id="loc-main">—</span>
          <span className="loc-sep">─</span>
          <span id="loc-room">—</span>
        </div>
        <div id="scene-title"></div>
      </div>

      <div id="scene-ascii-section">
        <pre id="scene-ascii"></pre>
      </div>

      <div id="scene-text-section">
        <div id="scene-description"></div>
        <div id="narrative-result" aria-live="polite"></div>
      </div>

      <div id="choices-section">
        <PanelTitle>[ 행 동 선 택 ]</PanelTitle>
        <section id="choices-panel" aria-label="행동 선택"></section>
      </div>

    </main>
  );
}
