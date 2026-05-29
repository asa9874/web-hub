import PanelTitle   from '../ui/PanelTitle.tsx';
import ChoiceButton from './ChoiceButton.tsx';
import { useGameStore }  from '../../state/useGameStore.ts';
import { resolveScene }  from '../../engine/scene-resolver.ts';
import { scenes }        from '../../data/scenes/index.ts';

export default function ChoicesSection() {
  const { state, dispatch } = useGameStore();

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

  return (
    <div id="choices-section">
      <PanelTitle>[ 행 동 선 택 ]</PanelTitle>
      <section id="choices-panel" aria-label="행동 선택">
        {scene.choices.map(choice => (
          <ChoiceButton
            key={choice.id}
            choice={choice}
            onChoose={() => dispatch({ type: 'CHOOSE', choiceId: choice.id })}
          />
        ))}
      </section>
    </div>
  );
}
