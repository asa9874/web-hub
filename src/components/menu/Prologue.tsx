import { useState, useEffect, useRef, useCallback } from 'react';
import { useGamePhaseStore } from '../../state/gamePhaseStore.ts';
import { typewrite }         from '../../utils/typewriter.ts';
import { sound }             from '../../utils/sound.ts';

const PANELS: readonly string[] = [
  `2024년 6월.\n\n한강 북쪽, 마포대교와 양화대교 사이.\n도로가 갈라졌다.\n\n그 틈에서 탑이 솟아올랐다.`,
  `정부는 설명하지 않았다.\n군은 3일 만에 철수했다.\n마법소녀 군단이 나타났다.\n\n"우리가 처리하겠습니다."`,
  `그들은 싸웠다.\n22일 동안.\n\n그리고 침묵했다.\n\n탑은 여전히 서 있다.`,
  `오염이 퍼지고 있다.\n서울이 비어가고 있다.\n\n당신은 아직 여기 있다.\n아파트 302호에서.`,
  `붕괴 후 22일째.\n\n마지막 통조림은 어제 아침에 사라졌다.\n수도는 며칠 전에 끊겼다.\n\n그리고 창문 밖에서 소리가 들린다.\n있어서는 안 될 리듬으로.`,
];

export default function Prologue() {
  const toPlaying   = useGamePhaseStore(s => s.toPlaying);
  const [panelIdx, setPanelIdx]     = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const textRef  = useRef<HTMLDivElement>(null);
  const cancelRef = useRef<(() => void) | null>(null);

  const isLast = panelIdx === PANELS.length - 1;

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    setTypingDone(false);
    cancelRef.current?.();
    const text = PANELS[panelIdx] ?? '';
    const cancel = typewrite(el, text, 28, () => setTypingDone(true));
    cancelRef.current = cancel;
    return cancel;
  }, [panelIdx]);

  const advance = useCallback(() => {
    if (!typingDone) {
      cancelRef.current?.();
      const el = textRef.current;
      if (el) el.textContent = PANELS[panelIdx] ?? '';
      setTypingDone(true);
      return;
    }
    if (isLast) {
      sound.click();
      toPlaying();
    } else {
      sound.prologueNext();
      setPanelIdx(i => i + 1);
    }
  }, [typingDone, isLast, panelIdx, toPlaying]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        advance();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [advance]);

  return (
    <div id="prologue" onClick={advance} role="button" aria-label="다음으로">
      <div id="prologue-panel">
        <div id="prologue-counter">{panelIdx + 1} / {PANELS.length}</div>
        <div id="prologue-text" ref={textRef} />
        {typingDone && (
          <div id="prologue-prompt" className="blink">
            {isLast ? '[ 게  임  시  작 ]' : '[ 계  속 ]'}
          </div>
        )}
      </div>
    </div>
  );
}
