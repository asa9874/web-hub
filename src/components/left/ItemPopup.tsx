import { useEffect } from 'react';
import type { Item } from '../../types/index.ts';
import { useGameStore } from '../../state/useGameStore.ts';

interface Props {
  item: Item;
  onClose: () => void;
}

export default function ItemPopup({ item, onClose }: Props) {
  const { dispatch } = useGameStore();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  function handleUse() {
    dispatch({ type: 'USE_ITEM', itemId: item.id });
    onClose();
  }

  return (
    <div className="item-popup-backdrop" onClick={onClose}>
      <div className="item-popup" onClick={e => e.stopPropagation()}>
        <div className="item-popup-header">
          <span className="item-popup-name">{item.name}</span>
          <button className="item-popup-close" onClick={onClose}>✕</button>
        </div>
        <div className="item-popup-desc">{item.description}</div>
        {item.lore && (
          <div className="item-popup-lore-wrap">
            <div className="item-popup-lore-divider">─────────────────</div>
            <p className="item-popup-lore">{item.lore}</p>
            {item.loreAuthor && (
              <span className="item-popup-author">— {item.loreAuthor}</span>
            )}
          </div>
        )}
        {item.effect && (
          <div className="item-popup-actions">
            <button className="item-popup-use-btn" onClick={handleUse}>
              &gt; 사용하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
