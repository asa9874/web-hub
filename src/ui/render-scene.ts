import type { Scene } from '../types/index.ts';
import { typewrite } from '../utils/typewriter.ts';

// 진행 중인 타이핑 애니메이션 취소 핸들
let cancelDesc: (() => void) | null = null;
let cancelNarr: (() => void) | null = null;

// 이전에 렌더링된 씬 ID — 같은 씬 재진입 시 설명 재타이핑 방지
let activeSceneId: string | null = null;

export function renderScene(scene: Scene, narrativeText?: string): void {
  const title       = document.getElementById('scene-title');
  const ascii       = document.getElementById('scene-ascii');
  const description = document.getElementById('scene-description');
  const narrative   = document.getElementById('narrative-result');

  // 제목·아스키아트는 즉시 표시 (그림이므로 타이핑 불필요)
  if (title) title.textContent = scene.title;
  if (ascii) ascii.textContent = scene.asciiArt ?? '';

  const sceneChanged = scene.id !== activeSceneId;
  activeSceneId = scene.id;

  // ── 씬 설명 ─────────────────────────────────────────────────
  // 씬이 바뀐 경우에만 타이핑 (같은 씬에서 선택 시 설명 재타이핑 X)
  if (description) {
    cancelDesc?.();
    cancelDesc = null;
    if (sceneChanged) {
      cancelDesc = typewrite(description, scene.description, 18);
    }
  }

  // ── 나레이션 결과 ───────────────────────────────────────────
  // 매번 새 텍스트로 타이핑 (선택 결과는 항상 갱신)
  if (narrative) {
    cancelNarr?.();
    cancelNarr = null;
    if (narrativeText) {
      // 설명 타이핑이 끝나기 전에 나레이션이 와도 즉시 완료 후 나레이션 시작
      cancelDesc?.();
      cancelDesc = null;
      cancelNarr = typewrite(narrative, narrativeText, 28);
    } else {
      narrative.textContent = '';
    }
  }
}
