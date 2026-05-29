import PanelTitle              from '../ui/PanelTitle.tsx';
import ChoiceButton            from './ChoiceButton.tsx';
import { useGameStore }        from '../../state/useGameStore.ts';
import { resolveScene }        from '../../engine/scene-resolver.ts';
import { meetsRequirement, getLockReason } from '../../engine/requirements.ts';
import { scenes }              from '../../data/scenes/index.ts';
import { items }               from '../../data/items/index.ts';
import { useTimeStore, formatGameTime, formatGameDate } from '../../state/timeStore.ts';
import { useLogStore }         from '../../state/logStore.ts';

const MINUTES_PER_CHOICE = 5;

export default function ChoicesSection() {
  const { state, dispatch }   = useGameStore();
  const advanceTime           = useTimeStore(s => s.advanceTime);
  const { year, month, day, minuteOfDay } = useTimeStore();
  const addEntry              = useLogStore(s => s.addEntry);

  if (!state.isAlive) {
    return (
      <div id="choices-section">
        <PanelTitle>[ 행 동 선 택 ]</PanelTitle>
        <section id="choices-panel" aria-label="행동 선택">
          <button
            className="choice-btn choice-btn--restart"
            onClick={() => dispatch({ type: 'RESET' })}
          >
            <span className="choice-label">어둠이 당신을 삼켰다. 다시 시작하겠는가.</span>
          </button>
        </section>
      </div>
    );
  }

  const scene = resolveScene(state.currentSceneId, scenes);

  const handleChoose = (choiceLabel: string, choiceId: string) => {
    const timeStr = formatGameTime(minuteOfDay);
    const dateStr = formatGameDate(year, month, day);

    dispatch({ type: 'CHOOSE', choiceId });
    advanceTime(MINUTES_PER_CHOICE);
    addEntry({
      timeStr,
      dateStr,
      sceneTitle: scene.title,
      choice:     choiceLabel,
      narrative:  '',  // 내러티브는 App에서 watch 후 업데이트
    });
  };

  return (
    <div id="choices-section">
      <PanelTitle>[ 행 동 선 택 ]</PanelTitle>
      <section id="choices-panel" aria-label="행동 선택">
        {scene.choices.map(choice => {
          const locked = !meetsRequirement(state, choice.required);
          const reason = locked && choice.required
            ? getLockReason(state, choice.required, items)
            : undefined;
          return (
            <ChoiceButton
              key={choice.id}
              choice={choice}
              onChoose={() => handleChoose(choice.label, choice.id)}
              isLocked={locked}
              lockReason={reason}
            />
          );
        })}
      </section>
    </div>
  );
}
