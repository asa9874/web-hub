import PanelTitle       from '../ui/PanelTitle.tsx';
import { useGameStore } from '../../state/useGameStore.ts';
import { getObjective } from '../../engine/objectives.ts';

export default function ObjectiveSection() {
  const { state } = useGameStore();
  const obj       = getObjective(state);

  return (
    <div id="objective-section">
      <PanelTitle>[ 현 재 목 표 ]</PanelTitle>
      <div id="objective-body">
        <div id="objective-title">{obj.title}</div>
        <div id="objective-detail">{obj.detail}</div>
      </div>
    </div>
  );
}
