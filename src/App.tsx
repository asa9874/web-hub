import { GameProvider }      from './state/GameContext.tsx';
import { useRoomSceneSync } from './hooks/useRoomSceneSync.ts';
import LeftPanel            from './components/layout/LeftPanel.tsx';
import CenterPanel          from './components/layout/CenterPanel.tsx';
import RightPanel           from './components/layout/RightPanel.tsx';
import MapOverlay           from './components/map/MapOverlay.tsx';

// useRoomSceneSync는 GameContext(dispatch) + navigationStore 양쪽에 접근해야 하므로
// GameProvider 내부에서 호출해야 한다.
function AppInner() {
  useRoomSceneSync();
  return (
    <>
      <div id="game-container">
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </div>
      <MapOverlay />
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
