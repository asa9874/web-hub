/**
 * 터미널 타이핑 효과 — 텍스트를 한 글자씩 순서대로 출력한다.
 * 반환값: 호출하면 현재 애니메이션을 즉시 완료(전체 텍스트 표시)하는 cancel 함수.
 */
export function typewrite(
  element: HTMLElement,
  text: string,
  speedMs: number,
): () => void {
  element.textContent = '';

  // textContent를 매 tick 마다 재할당하는 O(n²) 대신 TextNode.data를 직접 수정
  const node = document.createTextNode('');
  element.appendChild(node);

  let index  = 0;
  let done   = false;
  let timer: ReturnType<typeof setTimeout>;

  function tick(): void {
    if (done) return;
    if (index >= text.length) { done = true; return; }

    // 한 tick 에 한 글자 (한국어 글자는 모두 BMP 범위 — 안전)
    node.data += text[index];
    index++;

    // 나레이션 영역이 보이도록 부모 스크롤 컨테이너를 아래로 유지
    const scrollable = element.closest<HTMLElement>('#scene-text-section');
    if (scrollable) scrollable.scrollTop = scrollable.scrollHeight;

    timer = setTimeout(tick, speedMs);
  }

  tick();

  // cancel 호출 → 즉시 완료
  return (): void => {
    done = true;
    clearTimeout(timer);
    node.data = text;
  };
}
