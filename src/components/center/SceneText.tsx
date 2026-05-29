import { useEffect, useRef } from 'react';
import { useGameStore }  from '../../state/useGameStore.ts';
import { resolveScene }  from '../../engine/scene-resolver.ts';
import { scenes }        from '../../data/scenes/index.ts';
import { typewrite }     from '../../utils/typewriter.ts';

export default function SceneText() {
  const { state, narrativeText } = useGameStore();
  const scene = resolveScene(state.currentSceneId, scenes);

  const descRef  = useRef<HTMLDivElement>(null);
  const narrRef  = useRef<HTMLDivElement>(null);
  // holds the "complete immediately" handle for the running desc animation
  const cancelDescRef = useRef<(() => void) | null>(null);

  // Scene description — animate only when description text changes (= scene change)
  useEffect(() => {
    const el = descRef.current;
    if (!el) return;
    const cancel = typewrite(el, scene.description, 18);
    cancelDescRef.current = cancel;
    return cancel; // cleanup: show full text instantly before next scene starts
  }, [scene.description]);

  // Narrative result — animate whenever narrativeText changes
  useEffect(() => {
    const el = narrRef.current;
    if (!el) return;

    if (!narrativeText) {
      el.textContent = '';
      return;
    }

    // Complete description immediately so narration can begin
    cancelDescRef.current?.();
    cancelDescRef.current = null;

    const cancel = typewrite(el, narrativeText, 28);
    return cancel;
  }, [narrativeText]);

  return (
    <div id="scene-text-section">
      <div id="scene-description" ref={descRef} />
      <div id="narrative-result" aria-live="polite" ref={narrRef} />
    </div>
  );
}
