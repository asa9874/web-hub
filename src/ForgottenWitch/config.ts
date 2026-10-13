export const TUNING = {
  width: 1280, height: 720, worldWidth: 6400, floor: 570,
  speed: 335, acceleration: 2200, friction: 2600,
  gravity: 1700, jumpSpeed: 620, coyoteMs: 100, bufferMs: 100,
  bodyWidth: 44, bodyHeight: 100, cameraFollow: 5,
  rollSpeed:690,rollDuration:.36,rollCooldown:.85,
} as const;
export const STAGE = {
  gap: { left: 1420, right: 1900 },
  bridge: { startX: 1190, startY: 370, targetX: 1660, targetY: 570, width: 480, snap: 62 },
  consoleX: 1220, floraX: 2580, lightX: 3580, doorX: 4320,
  platforms: [
    { x: 440, y: 515, width: 140 }, { x: 680, y: 462, width: 170 },
    { x: 950, y: 535, width: 130 }, { x: 2160, y: 520, width: 160 },
    { x: 3000, y: 532, width: 160 },
  ],
} as const;
export type SymbolId = 'moon' | 'star' | 'flower';
export const LIGHT_ORDER: readonly SymbolId[] = ['moon', 'star', 'flower'];
export const SYMBOLS: Record<SymbolId, { label: string; glyph: string }> = {
  moon: { label: '달', glyph: '☾' }, star: { label: '별', glyph: '✦' }, flower: { label: '꽃', glyph: '✿' },
};
export const assetUrl = (name: string) => `${import.meta.env.BASE_URL}witch-theater/${name}`;
export const TEST_AREAS=[{id:'entrance',label:'이동 · 점프',x:200},{id:'bridge',label:'종이 다리',x:1220},{id:'dialogue',label:'플로라 대화',x:2580},{id:'lights',label:'조명 퍼즐',x:3580},{id:'combat',label:'전투 · 라이프',x:5200}] as const;
export type TestArea=(typeof TEST_AREAS)[number]['id'];
