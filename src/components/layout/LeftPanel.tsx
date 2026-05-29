import PlayerAvatar      from '../left/PlayerAvatar.tsx';
import StatsSection      from '../left/StatsSection.tsx';
import ObjectiveSection  from '../left/ObjectiveSection.tsx';
import InventorySection  from '../left/InventorySection.tsx';
import TestPanel         from '../dev/TestPanel.tsx';
import { useDevStore }   from '../../state/devStore.ts';

export default function LeftPanel() {
  const { isOpen, toggle } = useDevStore();

  return (
    <>
      <aside id="left-panel">
        <PlayerAvatar />
        <StatsSection />
        <ObjectiveSection />
        <InventorySection />

        {/* ── DEV 토글 버튼 (하단 고정) ── */}
        <button
          onClick={toggle}
          style={{
            fontFamily: 'inherit',
            fontSize: '10px',
            letterSpacing: '0.14em',
            padding: '8px 12px',
            marginTop: 'auto',
            background: isOpen ? 'rgba(255,176,0,0.1)' : 'transparent',
            color: isOpen ? 'rgba(255,176,0,0.95)' : 'rgba(255,176,0,0.35)',
            border: 'none',
            borderTop: `1px solid ${isOpen ? 'rgba(255,176,0,0.3)' : 'rgba(255,176,0,0.12)'}`,
            cursor: 'pointer',
            width: '100%',
            textAlign: 'left',
            flexShrink: 0,
            transition: 'color .15s, background .15s',
          }}
        >
          {isOpen ? '▶ DEV CONSOLE [열림]' : '⚙ DEV CONSOLE'}
        </button>
      </aside>

      {isOpen && <TestPanel />}
    </>
  );
}
