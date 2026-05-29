import type { Choice } from '../../types/index.ts';

interface Props {
  choice:   Choice;
  onChoose: () => void;
}

export default function ChoiceButton({ choice, onChoose }: Props) {
  const pct = choice.type === 'rng'
    ? Math.round(choice.successProbability * 100)
    : null;

  return (
    <button
      className="choice-btn"
      data-type={choice.type}
      onClick={onChoose}
      aria-description={pct !== null ? `성공 확률 ${pct}퍼센트` : undefined}
    >
      <span className="choice-label">{choice.label}</span>
      {pct !== null && (
        <span className="choice-chance">[성공 확률: {pct}%]</span>
      )}
    </button>
  );
}
