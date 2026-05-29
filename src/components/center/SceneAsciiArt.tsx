import { useGameStore } from '../../state/useGameStore.ts';
import { resolveScene } from '../../engine/scene-resolver.ts';
import { scenes }       from '../../data/scenes/index.ts';

export default function SceneAsciiArt() {
  const { state } = useGameStore();
  const scene = resolveScene(state.currentSceneId, scenes);

  return (
    <div id="scene-ascii-section">
      <pre id="scene-ascii">{scene.asciiArt ?? ''}</pre>
    </div>
  );
}
