import PanelTitle              from '../ui/PanelTitle.tsx';
import ChoiceButton            from './ChoiceButton.tsx';
import { useGameStore }        from '../../state/useGameStore.ts';
import { useGamePhaseStore }   from '../../state/gamePhaseStore.ts';
import { resolveScene }        from '../../engine/scene-resolver.ts';
import { meetsRequirement, getLockReason } from '../../engine/requirements.ts';
import { scenes }              from '../../data/scenes/index.ts';
import { items }               from '../../data/items/index.ts';
import type { Choice }         from '../../types/index.ts';
import { useTimeStore, formatGameTime, formatGameDate } from '../../state/timeStore.ts';
import { useLogStore }         from '../../state/logStore.ts';

const MINUTES_PER_CHOICE = 5;

/** 모든 결과가 현재 씬에 머무는 선택지 (탐색·정보·아이템) → 사용 후 숨김 */
function isSameSceneChoice(choice: Choice, sceneId: string): boolean {
  if (choice.type === 'deterministic') {
    return choice.outcomes.success.nextSceneId === sceneId;
  }
  return (
    choice.outcomes.success.nextSceneId === sceneId &&
    choice.outcomes.failure.nextSceneId === sceneId
  );
}

/** 순수 이동 선택지: back() 헬퍼처럼 성공 내러티브가 빈 문자열 → 항상 자유롭게 사용 가능 */
function isPureNav(choice: Choice): boolean {
  return (choice.outcomes.success.narrativeText ?? '') === '';
}

export default function ChoicesSection() {
  const { state, dispatch }   = useGameStore();
  const toMenu                = useGamePhaseStore(s => s.toMenu);
  const advanceTime           = useTimeStore(s => s.advanceTime);
  const { year, month, day, minuteOfDay } = useTimeStore();
  const addEntry              = useLogStore(s => s.addEntry);

  const resetToMenu = () => { dispatch({ type: 'RESET' }); toMenu(); };

  if (state.currentSceneId.startsWith('ending_')) {
    return (
      <div id="choices-section">
        <PanelTitle>[ 엔 딩 ]</PanelTitle>
        <section id="choices-panel" aria-label="행동 선택">
          <button className="choice-btn choice-btn--restart" onClick={resetToMenu}>
            <span className="choice-label">처음부터 시작하겠는가.</span>
          </button>
        </section>
      </div>
    );
  }

  if (!state.isAlive) {
    const isCorruptionDeath = state.hp > 0 && state.corruption >= state.maxCorruption;
    const deathMsg = isCorruptionDeath
      ? '오염이 당신을 집어삼켰다. 당신은 더 이상 당신이 아니다.'
      : '어둠이 당신을 삼켰다. 다시 시작하겠는가.';
    return (
      <div id="choices-section">
        <PanelTitle>[ 행 동 선 택 ]</PanelTitle>
        <section id="choices-panel" aria-label="행동 선택">
          <button className="choice-btn choice-btn--restart" onClick={resetToMenu}>
            <span className="choice-label">{deathMsg}</span>
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
      narrative:  '',
    });
  };

  return (
    <div id="choices-section">
      <PanelTitle>[ 행 동 선 택 ]</PanelTitle>
      <section id="choices-panel" aria-label="행동 선택">
        {scene.choices.map(choice => {
          const isUsed    = state.usedChoices.includes(choice.id);
          const sameScene = isSameSceneChoice(choice, state.currentSceneId);
          const pureNav   = isPureNav(choice);

          // 같은 씬 선택지: 사용 후 버튼 완전 숨김 (아이템·탐색·정보)
          if (isUsed && sameScene) return null;

          // 스토리/행동 선택지: 사용 후 비활성화 (씬을 이동시키는 의미있는 선택)
          const usedLock  = isUsed && !sameScene && !pureNav;
          const reqLocked = !meetsRequirement(state, choice.required);
          const locked    = reqLocked || usedLock;
          const reason    = reqLocked && choice.required
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
