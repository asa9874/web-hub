import PlayerAvatar    from '../left/PlayerAvatar.tsx';
import StatsSection    from '../left/StatsSection.tsx';
import InventorySection from '../left/InventorySection.tsx';

export default function LeftPanel() {
  return (
    <aside id="left-panel">
      <PlayerAvatar />
      <StatsSection />
      <InventorySection />
    </aside>
  );
}
