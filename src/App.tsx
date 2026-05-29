import { useEffect, useRef }    from 'react';
import { GameProvider }         from './state/GameContext.tsx';
import { useGameStore }         from './state/useGameStore.ts';
import { useLogStore }          from './state/logStore.ts';
import { useGamePhaseStore }    from './state/gamePhaseStore.ts';
import { useRoomSceneSync }     from './hooks/useRoomSceneSync.ts';
import { useSceneNavSync }      from './hooks/useSceneNavSync.ts';
import { useSoundEffects }      from './hooks/useSoundEffects.ts';
import LeftPanel                from './components/layout/LeftPanel.tsx';
import CenterPanel              from './components/layout/CenterPanel.tsx';
import RightPanel               from './components/layout/RightPanel.tsx';
import MapOverlay               from './components/map/MapOverlay.tsx';
import LogPanel                 from './components/log/LogPanel.tsx';
import SettingsPanel            from './components/ui/SettingsPanel.tsx';
import { ErrorBoundary }        from './components/ErrorBoundary.tsx';
import MainMenu                 from './components/menu/MainMenu.tsx';
import Prologue                 from './components/menu/Prologue.tsx';

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

// ── 게임 플레이 UI ─────────────────────────────────────────────────
function GameUI() {
  useRoomSceneSync();
  useSceneNavSync();
  useSoundEffects();
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
      <SettingsPanel />
    </>
  );
}

// ── AppInner: GameProvider 내부에서 훅 사용 ────────────────────────
function AppInner() {
  const phase = useGamePhaseStore(s => s.phase);

  if (phase === 'menu')     return <MainMenu />;
  if (phase === 'prologue') return <Prologue />;
  return <GameUI />;
}

export default function App() {
  return (
    <ErrorBoundary>
      <GameProvider>
        <AppInner />
      </GameProvider>
    </ErrorBoundary>
  );
}
