import type { Choice } from '../types/index.ts';

export function renderChoiceButtons(
  choices: readonly Choice[],
  onChoose: (choice: Choice) => void,
): void {
  const panel = document.getElementById('choices-panel');
  if (!panel) return;
  panel.innerHTML = '';

  for (const choice of choices) {
    const btn = document.createElement('button');
    btn.className    = 'choice-btn';
    btn.dataset.type = choice.type;

    const label = document.createElement('span');
    label.className   = 'choice-label';
    label.textContent = choice.label;
    btn.appendChild(label);

    if (choice.type === 'rng') {
      const pct    = Math.round(choice.successProbability * 100);
      const chance = document.createElement('span');
      chance.className   = 'choice-chance';
      chance.textContent = `[성공 확률: ${pct}%]`;
      btn.setAttribute('aria-description', `성공 확률 ${pct}퍼센트`);
      btn.appendChild(chance);
    }

    btn.addEventListener('click', () => onChoose(choice));
    panel.appendChild(btn);
  }
}
