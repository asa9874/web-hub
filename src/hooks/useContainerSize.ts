import { useEffect, useRef, useState } from 'react';

export function useContainerSize<T extends HTMLElement = HTMLDivElement>() {
  const ref  = useRef<T>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();
    if (width && height) setSize({ w: width, h: height });
    const obs = new ResizeObserver(([entry]) => {
      const { width: w, height: h } = entry.contentRect;
      setSize({ w, h });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, size };
}
