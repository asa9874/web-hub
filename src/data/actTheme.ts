/** Per-Act visual theme — colors for map nodes, paths, backgrounds, and battle UI. */
export interface ActTheme {
  // Scene backgrounds
  bg: number;
  // Top accent stripe
  topAccent: number;
  // Bottom border
  bottomBorder: number;
  // Map path colors
  pathInactive: number;
  pathVisited: number;
  pathGlow: number;
  pathNavigable: number;
  // Map node state colors
  nodeVisitedFill: number;
  nodeVisitedStroke: number;
  nodeInactiveFill: number;
  nodeInactiveStroke: number;
  // Map node type overrides
  nodeColors: Record<string, { fill: number; stroke: number }>;
  // Battle scene
  battleDivider: number;
  targetGlow: number;
  endTurnActive: number;
  // Header title text color
  titleColor: string;
}

// ── Act 1 — 별빛항 · 성운 숲 ─────────────────────────────────────────────────
// Deep navy × purple × silver moonlight. The original Magical Girl palette.
const ACT1_THEME: ActTheme = {
  bg: 0x1A0A2E,
  topAccent: 0xFF69B4,
  bottomBorder: 0x3D1F5A,
  pathInactive: 0x2A1A3A,
  pathVisited: 0x8A4A8A,
  pathGlow: 0xFF69B4,
  pathNavigable: 0xFF69B4,
  nodeVisitedFill: 0x120820,
  nodeVisitedStroke: 0x3A2A3A,
  nodeInactiveFill: 0x0E060E,
  nodeInactiveStroke: 0x2A1A2A,
  nodeColors: {
    battle:   { fill: 0x2D1550, stroke: 0xC8A0FF },
    elite:    { fill: 0x3D0D50, stroke: 0xC050C0 },
    boss:     { fill: 0x3D0020, stroke: 0xFF1493 },
    event:    { fill: 0x2D1550, stroke: 0xFF69B4 },
    shop:     { fill: 0x2D1A00, stroke: 0xFFD700 },
    rest:     { fill: 0x001A0D, stroke: 0x4CAF70 },
    treasure: { fill: 0x2A2000, stroke: 0xFFD700 },
  },
  battleDivider: 0x3D1F5A,
  targetGlow: 0xFF69B4,
  endTurnActive: 0x66CF90,
  titleColor: '#FFB6C1',
};

// ── Act 2 — 별의 첨탑 ────────────────────────────────────────────────────────
// Crimson × near-black × tarnished gold. The abyss-corrupted tower.
const ACT2_THEME: ActTheme = {
  bg: 0x0E0208,
  topAccent: 0xDC143C,
  bottomBorder: 0x4A0A18,
  pathInactive: 0x2A0A14,
  pathVisited: 0x7A2030,
  pathGlow: 0xDC143C,
  pathNavigable: 0xFF4444,
  nodeVisitedFill: 0x180008,
  nodeVisitedStroke: 0x3A1018,
  nodeInactiveFill: 0x0C0004,
  nodeInactiveStroke: 0x2A0A14,
  nodeColors: {
    battle:   { fill: 0x280810, stroke: 0xFF4444 },
    elite:    { fill: 0x380008, stroke: 0xFF8000 },
    boss:     { fill: 0x380000, stroke: 0xFF0050 },
    event:    { fill: 0x280810, stroke: 0xDC143C },
    shop:     { fill: 0x2A1400, stroke: 0xFFD700 },
    rest:     { fill: 0x001A0A, stroke: 0x00C884 },
    treasure: { fill: 0x2A1400, stroke: 0xFFD700 },
  },
  battleDivider: 0x4A0A18,
  targetGlow: 0xDC143C,
  endTurnActive: 0xFF4500,
  titleColor: '#FF8080',
};

// ── Act 3 — 성천원 ───────────────────────────────────────────────────────────
// Space black × royal blue × celestial gold. The timeless divine hall.
const ACT3_THEME: ActTheme = {
  bg: 0x000C1C,
  topAccent: 0x4169E1,
  bottomBorder: 0x1A2A5A,
  pathInactive: 0x1A2030,
  pathVisited: 0x3A5080,
  pathGlow: 0x4169E1,
  pathNavigable: 0x00CFFF,
  nodeVisitedFill: 0x030810,
  nodeVisitedStroke: 0x2A3A5A,
  nodeInactiveFill: 0x020608,
  nodeInactiveStroke: 0x1A2030,
  nodeColors: {
    battle:   { fill: 0x071030, stroke: 0x7B68EE },
    elite:    { fill: 0x0E0830, stroke: 0x9B59B6 },
    boss:     { fill: 0x141000, stroke: 0xFFD700 },
    event:    { fill: 0x071030, stroke: 0x00CFFF },
    shop:     { fill: 0x141000, stroke: 0xFFD700 },
    rest:     { fill: 0x003040, stroke: 0x4FC3F7 },
    treasure: { fill: 0x141000, stroke: 0xFFD700 },
  },
  battleDivider: 0x1A2A5A,
  targetGlow: 0x00CFFF,
  endTurnActive: 0x4169E1,
  titleColor: '#9BB8FF',
};

export const ACT_THEMES: readonly ActTheme[] = [ACT1_THEME, ACT2_THEME, ACT3_THEME];

/** Returns the theme for the given act number (1-based). Falls back to Act 1. */
export function getActTheme(act: number): ActTheme {
  return ACT_THEMES[(act - 1) % ACT_THEMES.length] ?? ACT1_THEME;
}
