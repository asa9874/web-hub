import { useEffect, useRef }    from 'react';
import { GameProvider }         from './state/GameContext.tsx';
import { useGameStore }         from './state/useGameStore.ts';
import { useLogStore }          from './state/logStore.ts';
import { useRoomSceneSync }     from './hooks/useRoomSceneSync.ts';
import LeftPanel                from './components/layout/LeftPanel.tsx';
import CenterPanel              from './components/layout/CenterPanel.tsx';
import RightPanel               from './components/layout/RightPanel.tsx';
import MapOverlay               from './components/map/MapOverlay.tsx';
import LogPanel                 from './components/log/LogPanel.tsx';

// ── 내러티브 → 마지막 로그 엔트리 동기화 ─────────────────────────
function LogNarrativeSync() {
  const { narrativeText }   = useGameStore();
  const updateLastNarrative = useLogStore(s => s.updateLastNarrative);
  const prevRef             = useRef('');

  useEffect(() => {
    if (!narrativeText || narrativeText === prevRef.current) return;
    prevRef.current = narrativeText;
    updateLastNarrative(narrativeText);
  }, [narrativeText, updateLastNarrative]);

  return null;
}

// ── AppInner: GameProvider 내부에서 훅 사용 ────────────────────────
function AppInner() {
  useRoomSceneSync();
  return (
    <>
      <LogNarrativeSync />
      <div id="game-container">
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </div>
      <MapOverlay />
      <LogPanel />
    </>
  );
}

export default function App() {
  return (
    <GameProvider>
      <AppInner />
    </GameProvider>
  );
}
