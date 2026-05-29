import { useEffect, useRef } from 'react';
import { useGameStore }   from '../../state/useGameStore.ts';
import { resolveScene }   from '../../engine/scene-resolver.ts';
import { scenes }         from '../../data/scenes/index.ts';
import { typewrite }      from '../../utils/typewriter.ts';
import { useSettingsStore, DESC_SPEED, NARR_SPEED } from '../../state/settingsStore.ts';

export default function SceneText() {
  const { state, narrativeText } = useGameStore();
  const scene        = resolveScene(state.currentSceneId, scenes);
  const typingSpeed  = useSettingsStore(s => s.typingSpeed);
  const textScale    = useSettingsStore(s => s.textScale);

  const descRef       = useRef<HTMLDivElement>(null);
  const narrRef       = useRef<HTMLDivElement>(null);
  const cancelDescRef = useRef<(() => void) | null>(null);

  // 씬 설명 타이핑 (씬 변경 또는 속도 변경 시)
  useEffect(() => {
    const el = descRef.current;
    if (!el) return;
    const cancel = typewrite(el, scene.description, DESC_SPEED[typingSpeed]);
    cancelDescRef.current = cancel;
    return cancel;
  }, [scene.description, typingSpeed]);

  // 내러티브 타이핑
  useEffect(() => {
    const el = narrRef.current;
    if (!el) return;
    if (!narrativeText) { el.textContent = ''; return; }
    cancelDescRef.current?.();
    cancelDescRef.current = null;
    const cancel = typewrite(el, narrativeText, NARR_SPEED[typingSpeed]);
    return cancel;
  }, [narrativeText, typingSpeed]);

  return (
    <div id="scene-text-section" className={`text-scale-${textScale}`}>
      <div id="scene-description" ref={descRef} />
      <div id="narrative-result" aria-live="polite" ref={narrRef} />
    </div>
  );
}
