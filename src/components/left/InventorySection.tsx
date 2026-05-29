import PanelTitle from '../ui/PanelTitle.tsx';
import { useGameStore } from '../../state/useGameStore.ts';
import { items }        from '../../data/items/index.ts';

export default function InventorySection() {
  const { state, dispatch } = useGameStore();

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
                <span className="inv-item-name">{item?.name ?? id}</span>
                {hasEffect && (
                  <button
                    className="inv-use-btn"
                    onClick={() => dispatch({ type: 'USE_ITEM', itemId: id })}
                    title={item?.description}
                  >
                    사용
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
