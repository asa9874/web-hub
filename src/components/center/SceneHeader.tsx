import GameDateBar   from './GameDateBar.tsx';
import LocationBar   from './LocationBar.tsx';
import { useGameStore }  from '../../state/useGameStore.ts';
import { resolveScene }  from '../../engine/scene-resolver.ts';
import { scenes }        from '../../data/scenes/index.ts';

export default function SceneHeader() {
  const { state } = useGameStore();
  const scene = resolveScene(state.currentSceneId, scenes);

  return (
    <div id="scene-header">
      <GameDateBar />
      <LocationBar />
      <div id="scene-title">{scene.title}</div>
      {scene.backgroundContext && (
        <div id="scene-bg-context">{scene.backgroundContext}</div>
      )}
    </div>
  );
}
