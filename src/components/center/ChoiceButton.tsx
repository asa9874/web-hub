import type { Choice } from '../../types/index.ts';
import { sound } from '../../utils/sound.ts';

interface Props {
  choice:      Choice;
  onChoose:    () => void;
  isLocked?:   boolean;
  lockReason?: string;
}

export default function ChoiceButton({ choice, onChoose, isLocked, lockReason }: Props) {
  const pct = choice.type === 'rng'
    ? Math.round(choice.successProbability * 100)
    : null;

  return (
    <button
      className={`choice-btn${isLocked ? ' choice-btn--locked' : ''}`}
      data-type={choice.type}
      onClick={isLocked ? undefined : () => { sound.click(); onChoose(); }}
      onMouseEnter={isLocked ? undefined : () => sound.hover()}
      disabled={isLocked}
      aria-description={pct !== null ? `성공 확률 ${pct}퍼센트` : undefined}
    >
      <span className="choice-label">{choice.label}</span>
      {pct !== null && (
        <span className="choice-chance">[성공 확률: {pct}%]</span>
      )}
      {isLocked && lockReason && (
        <span className="choice-lock-reason">⊘ {lockReason}</span>
      )}
    </button>
  );
}
