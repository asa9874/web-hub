import { GameProvider } from './state/GameContext.tsx';
import LeftPanel   from './components/layout/LeftPanel.tsx';
import CenterPanel from './components/layout/CenterPanel.tsx';
import RightPanel  from './components/layout/RightPanel.tsx';
import MapOverlay  from './components/map/MapOverlay.tsx';

export default function App() {
  return (
    <GameProvider>
      <div id="game-container">
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </div>
      <MapOverlay />
    </GameProvider>
  );
}
