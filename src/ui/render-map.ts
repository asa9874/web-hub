import { LOCATIONS, type LocationInfo, type Room, type RoomType, type LocationLayout } from '../data/map-data.ts';

// ── Global map node positions ────────────────────────────────────────────────
const NODE_POS: Record<string, { cx: number; cy: number }> = {
  D1: { cx: 50, cy:  6 }, C2: { cx: 50, cy: 16 }, C1: { cx: 50, cy: 28 },
  B6: { cx: 25, cy: 41 }, B5: { cx: 55, cy: 41 }, B4: { cx: 78, cy: 41 },
  B1: { cx: 44, cy: 55 }, A1: { cx: 20, cy: 67 }, B2: { cx: 62, cy: 67 },
  B3: { cx: 62, cy: 79 }, A2: { cx: 62, cy: 91 },
};
const EDGES: readonly [string, string][] = [
  ['D1','C2'],['C2','C1'],['C1','B6'],['C1','B5'],['B6','B5'],
  ['B5','B4'],['B5','B1'],['B1','A1'],['B1','B2'],['B2','B3'],['B3','A2'],
];
const ZONE_CLS: Record<LocationInfo['zone'], string> = {
  '생존 구역':'z-safe','회색 구역':'z-grey','경계 구역':'z-border','심층 구역':'z-deep',
};

// ── World map geographic layout ──────────────────────────────────────────────
//   D1(cy=6) 심층 │ C2(cy=16) 경계 │ C1(cy=28) 한강 │ B-zones(cy=41-55) 회색
//   A1(cx=20,cy=67) 생존 ← 수직분리(x=38) → B2(cx=62,cy=67) 회색 │ A2(cy=91) 지하
const WORLD_LAYOUT: LocationLayout = {
  regions: [
    { style:'zone-deep',   label:'심층 구역', x:0,  y:0,  w:100, h:12 },
    { style:'zone-border', label:'경계 구역', x:0,  y:12, w:100, h:10 },
    { style:'water',       label:'한  강',    x:0,  y:22, w:100, h:14 },
    { style:'zone-grey',   label:'회색 구역', x:0,  y:36, w:100, h:26 },
    { style:'zone-safe',   label:'생존 구역', x:0,  y:62, w:38,  h:38 },
    { style:'zone-grey',   label:'',          x:38, y:62, w:62,  h:22 },
    { style:'basement',    label:'지하 구역', x:44, y:84, w:26,  h:16 },
  ],
  seps: [
    { x1:0,  y1:12, x2:100, y2:12, style:'bold'                         },
    { x1:0,  y1:22, x2:100, y2:22, style:'bold'                         },
    { x1:0,  y1:36, x2:100, y2:36, style:'bold'                         },
    { x1:0,  y1:62, x2:38,  y2:62, style:'bold'                         },
    { x1:38, y1:62, x2:100, y2:62                                        },
    { x1:38, y1:62, x2:38,  y2:100, style:'dashed'                      },
    { x1:44, y1:84, x2:70,  y2:84,  style:'dashed', label:'지하 진입'   },
  ],
};
const ROOM_TYPE_LABEL: Record<RoomType, string> = {
  normal:'구역', npc:'NPC 조우', item:'아이템', danger:'위험 구역', locked:'접근 불가', exit:'출구',
};

// ── State ────────────────────────────────────────────────────────────────────
let activeLocId: string | null = null;
let activeRoomId: string | null = null;
let curInteriorLoc: LocationInfo | null = null;
let roomResizeObs: ResizeObserver | null = null;

// ── Public API ───────────────────────────────────────────────────────────────
export function initMap(): void {
  const app = document.getElementById('app');
  if (!app) return;
  app.appendChild(buildOverlay());
  document.getElementById('map-close-btn')!.addEventListener('click', closeMap);
  document.getElementById('map-back-btn')!.addEventListener('click', showGlobal);
  buildNodes();
  new ResizeObserver(() => drawEdges()).observe(document.getElementById('map-graph-section')!);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && isOpen()) closeMap(); });
}

export function openMap(): void {
  document.getElementById('map-overlay')!.classList.remove('map-hidden');
  showGlobal();
  requestAnimationFrame(() => requestAnimationFrame(drawEdges));
}

export function closeMap(): void {
  document.getElementById('map-overlay')!.classList.add('map-hidden');
}

// ── Global map view ──────────────────────────────────────────────────────────
function showGlobal(): void {
  document.getElementById('map-global-view')!.classList.remove('map-hidden');
  document.getElementById('map-interior-view')!.classList.add('map-hidden');
  requestAnimationFrame(() => requestAnimationFrame(drawEdges));
}

function selectLoc(loc: LocationInfo): void {
  activeLocId = loc.id;
  document.querySelectorAll<HTMLElement>('.map-node').forEach(n =>
    n.classList.toggle('active', n.dataset.id === loc.id));
  drawEdges();
  renderLocInfo(loc);
}

function renderLocInfo(loc: LocationInfo): void {
  document.getElementById('map-info-default')!.classList.add('map-hidden');
  const panel = document.getElementById('map-info-content')!;
  panel.classList.remove('map-hidden');
  const zc = ZONE_CLS[loc.zone];
  const connLocs = LOCATIONS.filter(l => EDGES.some(([a,b]) =>
    (a===loc.id && b===l.id) || (b===loc.id && a===l.id)));

  panel.innerHTML = `
    <div class="ip-head">
      <div class="ip-name">${loc.name}</div>
      <div class="ip-code ${zc}">[${loc.id}]</div>
    </div>
    <span class="ip-badge ${zc}">${loc.zone}</span>
    <div class="ip-sep"></div>
    <div class="ip-field">
      <div class="ip-lbl">위험도</div>
      <div class="ip-danger">${dangerHTML(loc.dangerDisplay)}</div>
    </div>
    <div class="ip-field">
      <div class="ip-lbl">주요 NPC</div>
      <div class="ip-val">${loc.npc}</div>
    </div>
    ${connLocs.length ? `
    <div class="ip-field">
      <div class="ip-lbl">연결 구역</div>
      <div class="ip-conns">
        ${connLocs.map(c => `
          <button class="ip-conn ${ZONE_CLS[c.zone]}" data-cid="${c.id}">
            <span class="ipc-id">${c.id}</span>
            <span class="ipc-name">${c.name}</span>
          </button>`).join('')}
      </div>
    </div>` : ''}
    <div class="ip-actions">
      <button class="ip-enter" id="map-enter-int">
        <span>내부 지도 보기</span><span class="ip-arrow">→</span>
      </button>
    </div>`;

  panel.querySelectorAll<HTMLElement>('.ip-conn').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = LOCATIONS.find(l => l.id === btn.dataset.cid);
      if (t) selectLoc(t);
    });
  });
  document.getElementById('map-enter-int')!.addEventListener('click', () => showInterior(loc));
}

function dangerHTML(d: string): string {
  return [...d].map(c =>
    c==='★'?'<span class="sf">★</span>':c==='☆'?'<span class="se">☆</span>':
    c==='✦'?'<span class="sd">✦</span>':`<span class="se">${c}</span>`).join('');
}

function buildNodes(): void {
  const container = document.getElementById('map-graph-container')!;
  for (const loc of LOCATIONS) {
    const pos = NODE_POS[loc.id];
    if (!pos) continue;
    const btn = document.createElement('button');
    btn.className = `map-node ${ZONE_CLS[loc.zone]}`;
    btn.dataset.id = loc.id;
    btn.style.left = `${pos.cx}%`;
    btn.style.top  = `${pos.cy}%`;
    btn.innerHTML = `<div class="nc">${loc.id}</div><div class="nn">${loc.name}</div><div class="nd">${loc.dangerDisplay}</div>`;
    btn.addEventListener('click', () => selectLoc(loc));
    container.appendChild(btn);
  }
}

function drawEdges(): void {
  const container = document.getElementById('map-graph-container');
  const svg = document.getElementById('map-svg') as SVGSVGElement | null;
  if (!container || !svg) return;
  const { width, height } = container.getBoundingClientRect();
  if (!width || !height) return;
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.innerHTML = `<defs><filter id="eglow" x="-80%" y="-80%" width="260%" height="260%">
    <feGaussianBlur stdDeviation="3" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter></defs>`;
  drawLayoutBg(WORLD_LAYOUT, svg, width, height);
  const hotSet = activeLocId
    ? new Set(EDGES.flatMap(([a,b])=>(a===activeLocId||b===activeLocId)?[a,b]:[]))
    : new Set<string>();
  for (const [a,b] of EDGES) {
    const pa = NODE_POS[a], pb = NODE_POS[b];
    if (!pa||!pb) continue;
    const hot = activeLocId!==null && hotSet.has(a) && hotSet.has(b);
    const line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',String((pa.cx/100)*width));
    line.setAttribute('y1',String((pa.cy/100)*height));
    line.setAttribute('x2',String((pb.cx/100)*width));
    line.setAttribute('y2',String((pb.cy/100)*height));
    line.setAttribute('class',`me${hot?' me-hot':''}`);
    if (hot) line.setAttribute('filter','url(#eglow)');
    svg.appendChild(line);
  }
}

// ── Interior map view ─────────────────────────────────────────────────────────
function showInterior(loc: LocationInfo): void {
  curInteriorLoc = loc;
  activeRoomId = null;

  document.getElementById('map-global-view')!.classList.add('map-hidden');
  document.getElementById('map-interior-view')!.classList.remove('map-hidden');

  document.getElementById('map-int-title')!.textContent = `${loc.name}  ·  [${loc.id}]`;
  const zoneEl = document.getElementById('map-int-zone')!;
  zoneEl.className = `mit-zone ${ZONE_CLS[loc.zone]}`;
  zoneEl.textContent = loc.zone;

  // Clear old room nodes
  const gc = document.getElementById('map-int-graph-container')!;
  gc.querySelectorAll('.room-node').forEach(n => n.remove());
  const rsvg = document.getElementById('map-int-svg') as unknown as SVGSVGElement;
  rsvg.innerHTML = '';

  // Build room nodes
  for (const room of loc.rooms) {
    const btn = document.createElement('button');
    btn.className = `room-node rt-${room.type}`;
    btn.dataset.rid = room.id;
    btn.style.left = `${room.cx}%`;
    btn.style.top  = `${room.cy}%`;
    btn.innerHTML = `<div class="rn-name">${room.name}</div>`;
    btn.addEventListener('click', () => selectRoom(room));
    gc.appendChild(btn);
  }

  // ResizeObserver for room edges
  if (roomResizeObs) roomResizeObs.disconnect();
  roomResizeObs = new ResizeObserver(() => drawRoomEdges(loc));
  roomResizeObs.observe(document.getElementById('map-int-graph-section')!);

  requestAnimationFrame(() => requestAnimationFrame(() => drawRoomEdges(loc)));

  renderDefaultSidebar(loc);
}

function selectRoom(room: Room): void {
  activeRoomId = room.id;
  document.querySelectorAll<HTMLElement>('.room-node').forEach(n =>
    n.classList.toggle('active', n.dataset.rid === room.id));
  if (curInteriorLoc) drawRoomEdges(curInteriorLoc);
  renderRoomDetail(room);
}

function drawRoomEdges(loc: LocationInfo): void {
  const gc = document.getElementById('map-int-graph-container');
  const svg = document.getElementById('map-int-svg') as SVGSVGElement | null;
  if (!gc || !svg) return;
  const { width, height } = gc.getBoundingClientRect();
  if (!width || !height) return;
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.innerHTML = '';

  if (loc.layout) drawLayoutBg(loc.layout, svg, width, height);

  const rmap = new Map(loc.rooms.map(r => [r.id, r]));
  const hotSet = activeRoomId
    ? new Set(loc.roomEdges.flatMap(([a,b])=>(a===activeRoomId||b===activeRoomId)?[a,b]:[]))
    : new Set<string>();
  for (const [aid, bid] of loc.roomEdges) {
    const ra = rmap.get(aid), rb = rmap.get(bid);
    if (!ra||!rb) continue;
    const hot = activeRoomId!==null && hotSet.has(aid) && hotSet.has(bid);
    const line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',String((ra.cx/100)*width));
    line.setAttribute('y1',String((ra.cy/100)*height));
    line.setAttribute('x2',String((rb.cx/100)*width));
    line.setAttribute('y2',String((rb.cy/100)*height));
    line.setAttribute('class',`re${hot?' re-hot':''}`);
    svg.appendChild(line);
  }
}

function drawLayoutBg(layout: LocationLayout, svg: SVGSVGElement, w: number, h: number): void {
  const NS = 'http://www.w3.org/2000/svg';
  const g = document.createElementNS(NS, 'g');

  for (const r of layout.regions ?? []) {
    const rect = document.createElementNS(NS, 'rect');
    rect.setAttribute('x',      String(r.x / 100 * w));
    rect.setAttribute('y',      String(r.y / 100 * h));
    rect.setAttribute('width',  String(r.w / 100 * w));
    rect.setAttribute('height', String(r.h / 100 * h));
    rect.setAttribute('class',  `lr lr-${r.style}`);
    g.appendChild(rect);
    if (r.label) {
      const tx = document.createElementNS(NS, 'text');
      tx.setAttribute('x', String(r.x / 100 * w + 4));
      tx.setAttribute('y', String(r.y / 100 * h + 11));
      tx.setAttribute('class', 'lr-label');
      tx.textContent = r.label;
      g.appendChild(tx);
    }
  }

  if (layout.outline) {
    const o = layout.outline;
    const rect = document.createElementNS(NS, 'rect');
    rect.setAttribute('x',      String(o.x / 100 * w));
    rect.setAttribute('y',      String(o.y / 100 * h));
    rect.setAttribute('width',  String(o.w / 100 * w));
    rect.setAttribute('height', String(o.h / 100 * h));
    rect.setAttribute('class',  'layout-outline');
    g.appendChild(rect);
  }

  for (const s of layout.seps ?? []) {
    const line = document.createElementNS(NS, 'line');
    line.setAttribute('x1', String(s.x1 / 100 * w));
    line.setAttribute('y1', String(s.y1 / 100 * h));
    line.setAttribute('x2', String(s.x2 / 100 * w));
    line.setAttribute('y2', String(s.y2 / 100 * h));
    const cls = s.style === 'bold' ? 'layout-sep ls-bold'
              : s.style === 'dashed' ? 'layout-sep ls-dashed'
              : 'layout-sep';
    line.setAttribute('class', cls);
    g.appendChild(line);
    if (s.label) {
      const tx = document.createElementNS(NS, 'text');
      tx.setAttribute('x', String(s.x1 / 100 * w + 3));
      tx.setAttribute('y', String(s.y1 / 100 * h - 3));
      tx.setAttribute('class', 'ls-label');
      tx.textContent = s.label;
      g.appendChild(tx);
    }
  }

  svg.appendChild(g);
}

function renderDefaultSidebar(loc: LocationInfo): void {
  const npcRooms    = loc.rooms.filter(r => r.type==='npc');
  const itemRooms   = loc.rooms.filter(r => r.type==='item');
  const dangerRooms = loc.rooms.filter(r => r.type==='danger'||r.type==='locked');

  const sec = (title: string, rooms: Room[], cls: string) => {
    if (!rooms.length) return '';
    return `<div class="ints-sec">
      <div class="ints-title">${title}</div>
      <ul class="ints-list">
        ${rooms.map(r => `<li class="ints-item ${cls}">
          <strong>${r.name}</strong><br><span class="ints-desc">${r.desc}</span>
        </li>`).join('')}
      </ul>
    </div>`;
  };

  document.getElementById('map-int-sidebar')!.innerHTML = [
    sec('NPC 조우', npcRooms, 'ints-npc'),
    sec('주요 아이템', itemRooms, 'ints-item-item'),
    sec('위험 구역', dangerRooms, 'ints-item-danger'),
  ].join('') || '<div class="ints-empty">구역을 클릭하면<br>상세 정보가 표시됩니다</div>';
}

function renderRoomDetail(room: Room): void {
  document.getElementById('map-int-sidebar')!.innerHTML = `
    <div class="rds-back">
      <button class="rds-back-btn" id="rds-back">← 목록으로</button>
    </div>
    <div class="rds-name">${room.name}</div>
    <span class="rds-type rdt-${room.type}">${ROOM_TYPE_LABEL[room.type]}</span>
    <div class="rds-sep"></div>
    <div class="rds-desc">${room.desc}</div>`;
  document.getElementById('rds-back')!.addEventListener('click', () => {
    activeRoomId = null;
    document.querySelectorAll<HTMLElement>('.room-node').forEach(n => n.classList.remove('active'));
    if (curInteriorLoc) { drawRoomEdges(curInteriorLoc); renderDefaultSidebar(curInteriorLoc); }
  });
}

// ── Overlay HTML ──────────────────────────────────────────────────────────────
function isOpen(): boolean {
  return !document.getElementById('map-overlay')?.classList.contains('map-hidden');
}

function buildOverlay(): HTMLElement {
  const el = document.createElement('div');
  el.id = 'map-overlay';
  el.className = 'map-hidden';
  el.innerHTML = `
    <!-- ══ GLOBAL MAP ══ -->
    <div id="map-global-view">
      <div id="map-gh">
        <div class="mgh-l">
          <span class="mgh-title">세 계 지 도</span>
          <span class="mgh-sub">POST-APOCALYPSE · BLACK OCTOBER +2Y</span>
        </div>
        <div class="mgh-legend">
          <span class="mleg z-safe">◆ 생존</span>
          <span class="mleg z-grey">◆ 회색</span>
          <span class="mleg z-border">◆ 경계</span>
          <span class="mleg z-deep">◆ 심층</span>
        </div>
        <button id="map-close-btn" class="map-x">✕</button>
      </div>
      <div id="map-gb">
        <div id="map-graph-section">
          <div id="map-graph-container">
            <svg id="map-svg" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:visible;"></svg>
          </div>
        </div>
        <div id="map-info-section">
          <div id="map-info-default">
            <div class="mid-kicker">// WORLD SCAN</div>
            <div class="mid-hint">지도에서 노드를 클릭하면<br>상세 정보가 표시됩니다</div>
            <div class="mid-grid">
              <div class="mg-cell"><div class="mg-n z-safe">2</div><div class="mg-l">생존 구역</div></div>
              <div class="mg-cell"><div class="mg-n z-grey">6</div><div class="mg-l">회색 구역</div></div>
              <div class="mg-cell"><div class="mg-n z-border">2</div><div class="mg-l">경계 구역</div></div>
              <div class="mg-cell"><div class="mg-n z-deep">1</div><div class="mg-l">심층 구역</div></div>
            </div>
          </div>
          <div id="map-info-content" class="map-hidden"></div>
        </div>
      </div>
    </div>

    <!-- ══ INTERIOR MAP ══ -->
    <div id="map-interior-view" class="map-hidden">
      <div id="map-int-hdr">
        <button id="map-back-btn" class="map-back">← 돌아가기</button>
        <div class="mit-wrap">
          <span class="mit-label">내 부 지 도</span>
          <span id="map-int-title"></span>
        </div>
        <span id="map-int-zone" class="mit-zone"></span>
      </div>
      <div id="map-int-body">
        <div id="map-int-graph-section">
          <div id="map-int-graph-container">
            <svg id="map-int-svg" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:visible;"></svg>
          </div>
        </div>
        <div id="map-int-sidebar"></div>
      </div>
    </div>`;
  return el;
}
