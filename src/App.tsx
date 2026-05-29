import { useEffect, useRef } from 'react';
import { GameProvider } from './state/GameContext.tsx';
import { initMap }      from './ui/render-map.ts';
import LeftPanel   from './components/layout/LeftPanel.tsx';
import CenterPanel from './components/layout/CenterPanel.tsx';
import RightPanel  from './components/layout/RightPanel.tsx';

export default function App() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    initMap();
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
