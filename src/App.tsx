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
import LeftPanel   from './components/layout/LeftPanel.tsx';
import CenterPanel from './components/layout/CenterPanel.tsx';
import RightPanel  from './components/layout/RightPanel.tsx';

const INITIAL_STATE: PlayerState = {
  hp: 100, maxHp: 100,
  corruption: 0, maxCorruption: 100,
  inventory: [],
  currentSceneId: 'apartment_start',
  isAlive: true,
};

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

  return (
    <GameProvider>
      <div id="game-container">
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </div>
    </GameProvider>
  );
}
