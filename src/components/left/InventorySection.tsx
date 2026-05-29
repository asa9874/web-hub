import { useState } from 'react';
import PanelTitle from '../ui/PanelTitle.tsx';
import { useGameStore } from '../../state/useGameStore.ts';
import { items }        from '../../data/items/index.ts';
import type { Item }    from '../../types/index.ts';
import ItemPopup        from './ItemPopup.tsx';

export default function InventorySection() {
  const { state, dispatch } = useGameStore();
  const [selected, setSelected] = useState<Item | null>(null);

  return (
    <div id="inventory-section">
      <PanelTitle>[ 소 지 품 ]</PanelTitle>
      <div id="inventory-list">
        {state.inventory.length === 0 ? (
          <div className="inventory-empty">(없음)</div>
        ) : (
          state.inventory.map(id => {
            const item      = items[id];
            const hasEffect = !!item?.effect;
            return (
              <div key={id} className="inventory-item">
                <button
                  className="inv-item-name inv-item-btn"
                  onClick={() => item && setSelected(item)}
                  title="클릭하여 상세 확인"
                >
                  {item?.name ?? id}
                </button>
                {hasEffect && (
                  <button
                    className="inv-use-btn"
                    onClick={() => dispatch({ type: 'USE_ITEM', itemId: id })}
                  >
                    사용
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>

      {selected && (
        <ItemPopup item={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
