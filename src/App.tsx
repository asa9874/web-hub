import { useEffect, useRef } from 'react';
import type { PlayerState } from './types/index.ts';
import { GameProvider } from './state/GameContext.tsx';
import { scenes }              from './data/scenes/index.ts';
import { items }               from './data/items/index.ts';
import { createStore }         from './state/store.ts';
import { resolveScene }        from './engine/scene-resolver.ts';
import { renderScene }         from './ui/render-scene.ts';
import { renderChoiceButtons } from './ui/render-choices.ts';
import { renderStats }         from './ui/render-stats.ts';
import { renderInventory }     from './ui/render-inventory.ts';
import { initMap, openMap }    from './ui/render-map.ts';

// ── 정적 상수 ────────────────────────────────────────────────────────────────
const AVATAR = `   _________
  |  .   .  |
  |  |___|  |
  |   ___   |
  |  /   \\  |
  |_________|`;

const INITIAL_STATE: PlayerState = {
  hp: 100, maxHp: 100,
  corruption: 0, maxCorruption: 100,
  inventory: [],
  currentSceneId: 'apartment_start',
  isAlive: true,
};

// ── 앱 루트 컴포넌트 ─────────────────────────────────────────────────────────
// Phase 2: 셸 DOM 구조를 JSX로 선언 + 레거시 게임 엔진을 useEffect로 초기화.
// 각 패널은 Phase 6–8에서 독립 컴포넌트로 분리된다.
export default function App() {
  const initialized = useRef(false);

  useEffect(() => {
    // useRef 가드: React StrictMode의 이중 실행 및 HMR 재실행 방지
    if (initialized.current) return;
    initialized.current = true;

    // ── 레거시 게임 초기화 (main.ts 로직 이전) ────────────────────────────
    initMap();
    document.getElementById('btn-map')?.addEventListener('click', openMap);

    const store = createStore(INITIAL_STATE, scenes);

    store.subscribe((state, narrativeText) => {
      const scene = resolveScene(state.currentSceneId, scenes);
      renderScene(scene, narrativeText);
      renderStats(state);
      renderInventory(state, items);

      if (!state.isAlive) {
        renderChoiceButtons([], () => undefined);
        const panel = document.getElementById('choices-panel');
        if (panel) {
          const btn = document.createElement('button');
          btn.className = 'choice-btn choice-btn--restart';
          const label = document.createElement('span');
          label.className   = 'choice-label';
          label.textContent = '어둠이 당신을 삼켰다. 다시 시작하겠는가.';
          btn.appendChild(label);
          btn.addEventListener('click', () => store.dispatch({ type: 'RESET' }));
          panel.appendChild(btn);
        }
        return;
      }

      renderChoiceButtons(scene.choices, (choice) => {
        store.dispatch({ type: 'CHOOSE', choiceId: choice.id });
      });
    });
  }, []);

  // ── JSX 셸 구조 (game-shell.ts buildShell() 대체) ────────────────────────
  return (
    <GameProvider>
    <div id="game-container">

      {/* ── 좌측 패널 — 프로필 / 상태 / 소지품 ── */}
      <aside id="left-panel">
        <pre id="player-avatar">{AVATAR}</pre>
        <div id="player-name">[ 생 존 자 ]</div>

        <div id="stats-section">
          <div className="panel-title">[ 생존 상태 ]</div>
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
          <div className="panel-title">[ 소 지 품 ]</div>
          <div id="inventory-list"></div>
        </div>
      </aside>

      {/* ── 중앙 패널 — 위치명 / 아스키아트 / 텍스트 / 선택지 ── */}
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
          <div className="panel-title">[ 행 동 선 택 ]</div>
          <section id="choices-panel" aria-label="행동 선택"></section>
        </div>

      </main>

      {/* ── 우측 패널 — 메뉴 사이드바 ── */}
      <aside id="right-panel">
        <div className="panel-title">[ 메 뉴 ]</div>
        <nav id="nav-panel">
          <button className="nav-btn" id="btn-map">지  도</button>
          <button className="nav-btn" id="btn-log">기 록 지</button>
          <button className="nav-btn" id="btn-save">저  장</button>
          <button className="nav-btn" id="btn-load">불러오기</button>
          <button className="nav-btn" id="btn-settings">설  정</button>
          <button className="nav-btn nav-btn--danger" id="btn-new-game">처음으로</button>
        </nav>
      </aside>

    </div>
    </GameProvider>
  );
}
