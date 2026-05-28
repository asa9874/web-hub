import type { PlayerState, Item } from '../types/index.ts';

export function renderInventory(state: PlayerState, itemCatalog: Record<string, Item>): void {
  const list = document.getElementById('inventory-list');
  if (!list) return;
  list.innerHTML = '';

  if (state.inventory.length === 0) {
    const empty = document.createElement('div');
    empty.className   = 'inventory-empty';
    empty.textContent = '(없음)';
    list.appendChild(empty);
    return;
  }

  for (const id of state.inventory) {
    const item = itemCatalog[id];
    const div  = document.createElement('div');
    div.className   = 'inventory-item';
    div.textContent = item?.name ?? id;
    list.appendChild(div);
  }
}
