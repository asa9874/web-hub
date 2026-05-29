import type { LocationInfo, LocationLayout, RoomType } from '../../data/map-data.ts';

export const NODE_POS: Record<string, { cx: number; cy: number }> = {
  D1: { cx: 50, cy:  6 }, C2: { cx: 50, cy: 16 }, C1: { cx: 50, cy: 28 },
  B6: { cx: 25, cy: 41 }, B5: { cx: 55, cy: 41 }, B4: { cx: 78, cy: 41 },
  B1: { cx: 44, cy: 55 }, A1: { cx: 20, cy: 67 }, B2: { cx: 62, cy: 67 },
  B3: { cx: 62, cy: 79 }, A2: { cx: 62, cy: 91 },
  TX: { cx:  5, cy: 80 },
};

export const EDGES: readonly [string, string][] = [
  ['D1','C2'],['C2','C1'],['C1','B6'],['C1','B5'],['B6','B5'],
  ['B5','B4'],['B5','B1'],['B1','A1'],['B1','B2'],['B2','B3'],['B3','A2'],
  ['A1','TX'],
];

export const ZONE_CLS: Record<LocationInfo['zone'], string> = {
  '생존 구역': 'z-safe', '회색 구역': 'z-grey', '경계 구역': 'z-border', '심층 구역': 'z-deep',
};

export const ROOM_TYPE_LABEL: Record<RoomType, string> = {
  normal: '구역', npc: 'NPC 조우', item: '아이템',
  danger: '위험 구역', locked: '접근 불가', exit: '출구',
};

export const WORLD_LAYOUT: LocationLayout = {
  regions: [
    { style: 'zone-deep',   label: '심층 구역', x: 0,  y: 0,  w: 100, h: 12 },
    { style: 'zone-border', label: '경계 구역', x: 0,  y: 12, w: 100, h: 10 },
    { style: 'water',       label: '한  강',    x: 0,  y: 22, w: 100, h: 14 },
    { style: 'zone-grey',   label: '회색 구역', x: 0,  y: 36, w: 100, h: 26 },
    { style: 'zone-safe',   label: '생존 구역', x: 0,  y: 62, w: 38,  h: 38 },
    { style: 'zone-grey',   label: '',          x: 38, y: 62, w: 62,  h: 22 },
    { style: 'basement',    label: '지하 구역', x: 44, y: 84, w: 26,  h: 16 },
  ],
  seps: [
    { x1: 0,  y1: 12, x2: 100, y2: 12, style: 'bold'                       },
    { x1: 0,  y1: 22, x2: 100, y2: 22, style: 'bold'                       },
    { x1: 0,  y1: 36, x2: 100, y2: 36, style: 'bold'                       },
    { x1: 0,  y1: 62, x2: 38,  y2: 62, style: 'bold'                       },
    { x1: 38, y1: 62, x2: 100, y2: 62                                       },
    { x1: 38, y1: 62, x2: 38,  y2: 100, style: 'dashed'                    },
    { x1: 44, y1: 84, x2: 70,  y2: 84,  style: 'dashed', label: '지하 진입'},
  ],
};
