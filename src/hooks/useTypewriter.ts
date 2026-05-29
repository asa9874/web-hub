import { useEffect, useRef } from 'react';
import { typewrite } from '../utils/typewriter.ts';

export function useTypewriter<T extends HTMLElement>(text: string, speedMs: number) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cancel = typewrite(el, text, speedMs);
    return cancel;
  }, [text, speedMs]);

  return ref;
}
