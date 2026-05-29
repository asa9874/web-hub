import PanelTitle from '../ui/PanelTitle.tsx';
import { useGameStore } from '../../state/useGameStore.ts';
import { items }        from '../../data/items/index.ts';

export default function InventorySection() {
  const { state } = useGameStore();

  return (
    <div id="inventory-section">
      <PanelTitle>[ 소 지 품 ]</PanelTitle>
      <div id="inventory-list">
        {state.inventory.length === 0 ? (
          <div className="inventory-empty">(없음)</div>
        ) : (
          state.inventory.map(id => (
            <div key={id} className="inventory-item">
              {items[id]?.name ?? id}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
