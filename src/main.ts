import './style.css';
import type { PlayerState } from './types/index.ts';
import { scenes }              from './data/scenes/index.ts';
import { items }               from './data/items/index.ts';
import { createStore }         from './state/store.ts';
import { resolveScene }        from './engine/scene-resolver.ts';
import { buildShell }          from './ui/game-shell.ts';
import { renderScene }         from './ui/render-scene.ts';
import { renderChoiceButtons } from './ui/render-choices.ts';
import { renderStats }         from './ui/render-stats.ts';
import { renderInventory }     from './ui/render-inventory.ts';
import { initMap, openMap }    from './ui/render-map.ts';

buildShell();
initMap();

document.getElementById('btn-map')?.addEventListener('click', openMap);

const initialState: PlayerState = {
  hp:             100,
  maxHp:          100,
  corruption:     0,
  maxCorruption:  100,
  inventory:      [],
  currentSceneId: 'apartment_start',
  isAlive:        true,
};

const store = createStore(initialState, scenes);

const unsubscribe = store.subscribe((state, narrativeText) => {
  const scene = resolveScene(state.currentSceneId, scenes);
  renderScene(scene, narrativeText);
  renderStats(state);
  renderInventory(state, items);

  if (!state.isAlive) {
    renderChoiceButtons([], () => undefined);
    const panel = document.getElementById('choices-panel');
    if (panel) {
      const restartBtn = document.createElement('button');
      restartBtn.className = 'choice-btn choice-btn--restart';
      const label = document.createElement('span');
      label.className   = 'choice-label';
      label.textContent = '어둠이 당신을 삼켰다. 다시 시작하겠는가.';
      restartBtn.appendChild(label);
      restartBtn.addEventListener('click', () => store.dispatch({ type: 'RESET' }));
      panel.appendChild(restartBtn);
    }
    return;
  }

  renderChoiceButtons(scene.choices, (choice) => {
    store.dispatch({ type: 'CHOOSE', choiceId: choice.id });
  });
});

void unsubscribe;
