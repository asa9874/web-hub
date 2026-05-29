import { useState } from 'react';
import { useGameStore }      from '../../state/useGameStore.ts';
import { useNavigationStore } from '../../state/navigationStore.ts';
import { useDevStore }        from '../../state/devStore.ts';
import { LOCATIONS }          from '../../data/map-data.ts';
import { scenes }             from '../../data/scenes/index.ts';

// ── 스타일 상수 ────────────────────────────────────────────────
const S = {
  panel: {
    position: 'fixed' as const,
    left: '230px',
    top: '0',
    width: '290px',
    height: '100vh',
    background: '#080f09',
    borderLeft:  '1px solid rgba(255,176,0,0.35)',
    borderRight: '1px solid rgba(255,176,0,0.15)',
    zIndex: 150,
    display: 'flex',
    flexDirection: 'column' as const,
    overflow: 'hidden',
    fontFamily: 'inherit',
    fontSize: '12px',
  },
  header: {
    padding: '10px 14px',
    borderBottom: '1px solid rgba(255,176,0,0.25)',
    background: 'rgba(255,176,0,0.06)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
  },
  body: {
    flex: 1,
    overflowY: 'auto' as const,
    padding: '0 0 20px',
  },
  section: {
    padding: '10px 14px 12px',
    borderBottom: '1px solid rgba(0,255,65,0.07)',
  },
  sectionTitle: {
    fontSize: '9px',
    letterSpacing: '0.2em',
    color: 'rgba(255,176,0,0.5)',
    textTransform: 'uppercase' as const,
    marginBottom: '10px',
  },
  row: {
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    marginBottom: '6px',
    flexWrap: 'wrap' as const,
  },
  label: { color: 'rgba(184,239,196,0.5)', minWidth: '52px', fontSize: '11px' },
  val:   { color: '#00ff41', fontWeight: 'bold' as const, minWidth: '56px' },
  btn: (color = 'green') => ({
    fontFamily: 'inherit',
    fontSize: '10px',
    padding: '3px 7px',
    background: 'transparent',
    color: color === 'red'   ? 'rgba(255,80,80,0.9)'  :
           color === 'amber' ? 'rgba(255,176,0,0.9)'  :
           color === 'blue'  ? 'rgba(100,170,255,0.9)' :
                               'rgba(0,255,65,0.8)',
    border: `1px solid ${
           color === 'red'   ? 'rgba(255,80,80,0.3)'  :
           color === 'amber' ? 'rgba(255,176,0,0.3)'  :
           color === 'blue'  ? 'rgba(100,170,255,0.3)' :
                               'rgba(0,255,65,0.25)'}`,
    cursor: 'pointer',
    letterSpacing: '0.04em',
    flexShrink: 0,
  }),
  input: {
    fontFamily: 'inherit',
    fontSize: '11px',
    padding: '3px 7px',
    background: 'rgba(0,255,65,0.04)',
    color: '#b8efc4',
    border: '1px solid rgba(0,255,65,0.18)',
    flex: 1,
    minWidth: 0,
  },
  select: {
    fontFamily: 'inherit',
    fontSize: '11px',
    padding: '3px 6px',
    background: '#08120a',
    color: '#b8efc4',
    border: '1px solid rgba(0,255,65,0.18)',
    cursor: 'pointer',
    flex: 1,
    minWidth: 0,
  },
  tag: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '2px 6px',
    background: 'rgba(0,255,65,0.05)',
    border: '1px solid rgba(0,255,65,0.12)',
    fontSize: '10px',
    color: '#b8efc4',
    marginBottom: '3px',
  },
} as const;

// ── 유틸 ───────────────────────────────────────────────────────
function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

// ── 컴포넌트 ───────────────────────────────────────────────────
export default function TestPanel() {
  const { state, dispatch }                  = useGameStore();
  const { playerLocId, playerRoomId,
          travelToLoc, moveToRoom }           = useNavigationStore();
  const close                                = useDevStore(s => s.close);

  // 아이템
  const [itemInput, setItemInput]   = useState('');
  // 씬
  const [sceneInput, setSceneInput] = useState(state.currentSceneId);
  // 위치/방
  const [selLocId,  setSelLocId]    = useState(playerLocId);
  const selLoc = LOCATIONS.find(l => l.id === selLocId) ?? LOCATIONS[0];
  const [selRoomId, setSelRoomId]   = useState(playerRoomId);

  // ── 스탯 핸들러 ──────────────────────────────────────────────
  const patchHp  = (delta: number) =>
    dispatch({ type: 'DEBUG_PATCH', patch: { hp: clamp(state.hp + delta, 0, state.maxHp) } });
  const patchCor = (delta: number) =>
    dispatch({ type: 'DEBUG_PATCH', patch: { corruption: clamp(state.corruption + delta, 0, state.maxCorruption) } });

  // ── 아이템 핸들러 ─────────────────────────────────────────────
  const addItem = () => {
    const id = itemInput.trim();
    if (!id || state.inventory.includes(id)) return;
    dispatch({ type: 'DEBUG_PATCH', patch: { inventory: [...state.inventory, id] } });
    setItemInput('');
  };
  const removeItem = (id: string) =>
    dispatch({ type: 'DEBUG_PATCH', patch: { inventory: state.inventory.filter(i => i !== id) } });

  // ── 씬 핸들러 ─────────────────────────────────────────────────
  const jumpScene = () => {
    const id = sceneInput.trim();
    if (!id) return;
    dispatch({ type: 'DEBUG_PATCH', patch: { currentSceneId: id } });
  };

  // ── 위치/방 핸들러 ────────────────────────────────────────────
  const teleport = () => {
    if (selLocId !== playerLocId) travelToLoc(selLocId);
    if (selRoomId) moveToRoom(selRoomId);
  };

  return (
    <div style={S.panel}>

      {/* 헤더 */}
      <div style={S.header}>
        <span style={{ color: 'rgba(255,176,0,0.9)', fontWeight: 'bold', letterSpacing: '0.12em', fontSize: '11px' }}>
          ⚙ DEV CONSOLE
        </span>
        <button style={S.btn('amber')} onClick={close}>✕ 닫기</button>
      </div>

      <div style={S.body}>

        {/* ── 현재 상태 요약 ── */}
        <div style={S.section}>
          <div style={S.sectionTitle}>현재 상태</div>
          <div style={{ ...S.row, marginBottom: 3 }}>
            <span style={S.label}>HP</span>
            <span style={S.val}>{state.hp} / {state.maxHp}</span>
            <span style={{ fontSize: '10px', color: state.isAlive ? 'rgba(0,255,65,0.6)' : 'rgba(255,80,80,0.8)' }}>
              {state.isAlive ? '● 생존' : '● 사망'}
            </span>
          </div>
          <div style={{ ...S.row, marginBottom: 3 }}>
            <span style={S.label}>오염도</span>
            <span style={S.val}>{state.corruption} / {state.maxCorruption}</span>
          </div>
          <div style={{ ...S.row, marginBottom: 0 }}>
            <span style={S.label}>씬</span>
            <span style={{ color: 'rgba(184,239,196,0.7)', fontSize: '10px', wordBreak: 'break-all' as const }}>
              {state.currentSceneId}
            </span>
          </div>
          <div style={{ ...S.row, marginBottom: 0 }}>
            <span style={S.label}>위치</span>
            <span style={{ color: 'rgba(255,176,0,0.7)', fontSize: '10px' }}>
              {playerLocId} / {playerRoomId}
            </span>
          </div>
        </div>

        {/* ── HP 조작 ── */}
        <div style={S.section}>
          <div style={S.sectionTitle}>HP 조작</div>
          <div style={S.row}>
            {([-50, -25, -10, +10, +25, +50] as const).map(d => (
              <button key={d} style={S.btn(d < 0 ? 'red' : 'green')} onClick={() => patchHp(d)}>
                {d > 0 ? '+' : ''}{d}
              </button>
            ))}
          </div>
          <div style={S.row}>
            <button style={S.btn('red')}   onClick={() => dispatch({ type: 'DEBUG_PATCH', patch: { hp: 0 } })}>
              KILL (HP=0)
            </button>
            <button style={S.btn('green')} onClick={() => dispatch({ type: 'DEBUG_PATCH', patch: { hp: state.maxHp } })}>
              풀회복
            </button>
          </div>
        </div>

        {/* ── 오염도 조작 ── */}
        <div style={S.section}>
          <div style={S.sectionTitle}>오염도 조작</div>
          <div style={S.row}>
            {([+10, +25, +50] as const).map(d => (
              <button key={d} style={S.btn('amber')} onClick={() => patchCor(d)}>+{d}</button>
            ))}
            {([-10, -25] as const).map(d => (
              <button key={d} style={S.btn('green')} onClick={() => patchCor(d)}>{d}</button>
            ))}
          </div>
          <div style={S.row}>
            <button style={S.btn('red')}   onClick={() => dispatch({ type: 'DEBUG_PATCH', patch: { corruption: state.maxCorruption } })}>
              MAX (100)
            </button>
            <button style={S.btn('green')} onClick={() => dispatch({ type: 'DEBUG_PATCH', patch: { corruption: 0 } })}>
              CLR (0)
            </button>
          </div>
        </div>

        {/* ── 아이템 조작 ── */}
        <div style={S.section}>
          <div style={S.sectionTitle}>아이템 조작</div>
          <div style={S.row}>
            <input
              style={S.input}
              placeholder="아이템 ID 입력"
              value={itemInput}
              onChange={e => setItemInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addItem()}
            />
            <button style={S.btn('blue')} onClick={addItem}>추가</button>
          </div>
          {/* 빠른 테스트 아이템 */}
          <div style={{ ...S.row, marginBottom: '8px' }}>
            {['lighter', 'painkiller', 'photo', 'master_key'].map(id => (
              <button key={id} style={{ ...S.btn('amber'), fontSize: '9px' }} onClick={() => {
                if (!state.inventory.includes(id))
                  dispatch({ type: 'DEBUG_PATCH', patch: { inventory: [...state.inventory, id] } });
              }}>+{id}</button>
            ))}
          </div>
          {/* 현재 인벤토리 */}
          {state.inventory.length === 0
            ? <div style={{ color: 'rgba(184,239,196,0.3)', fontSize: '10px' }}>(소지품 없음)</div>
            : state.inventory.map(id => (
              <div key={id} style={S.tag}>
                <span style={{ flex: 1 }}>{id}</span>
                <button style={{ ...S.btn('red'), padding: '1px 5px', border: 'none' }} onClick={() => removeItem(id)}>×</button>
              </div>
            ))
          }
          {state.inventory.length > 0 && (
            <button style={{ ...S.btn('red'), marginTop: '6px' }}
                    onClick={() => dispatch({ type: 'DEBUG_PATCH', patch: { inventory: [] } })}>
              전체 삭제
            </button>
          )}
        </div>

        {/* ── 씬 강제 이동 ── */}
        <div style={S.section}>
          <div style={S.sectionTitle}>씬 강제 이동</div>
          <div style={S.row}>
            <select style={S.select} value={sceneInput} onChange={e => setSceneInput(e.target.value)}>
              {Object.keys(scenes).map(id => (
                <option key={id} value={id}>{id}</option>
              ))}
            </select>
          </div>
          <div style={S.row}>
            <input
              style={S.input}
              placeholder="또는 직접 씬 ID 입력"
              value={sceneInput}
              onChange={e => setSceneInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && jumpScene()}
            />
            <button style={S.btn('blue')} onClick={jumpScene}>이동</button>
          </div>
          <div style={{ color: 'rgba(184,239,196,0.3)', fontSize: '9px', marginTop: '4px' }}>
            ※ 존재하지 않는 씬 ID는 렌더링 오류 발생
          </div>
        </div>

        {/* ── 위치/방 순간이동 ── */}
        <div style={S.section}>
          <div style={S.sectionTitle}>위치 / 방 순간이동</div>
          <div style={S.row}>
            <select style={S.select} value={selLocId} onChange={e => {
              setSelLocId(e.target.value);
              const loc = LOCATIONS.find(l => l.id === e.target.value);
              if (loc?.rooms[0]) setSelRoomId(loc.rooms[0].id);
            }}>
              {LOCATIONS.map(l => (
                <option key={l.id} value={l.id}>{l.id} {l.name}</option>
              ))}
            </select>
          </div>
          <div style={S.row}>
            <select style={S.select} value={selRoomId} onChange={e => setSelRoomId(e.target.value)}>
              {(selLoc?.rooms ?? []).map(r => (
                <option key={r.id} value={r.id}>{r.name}</option>
              ))}
            </select>
          </div>
          <button style={{ ...S.btn('blue'), marginTop: '4px' }} onClick={teleport}>
            순간이동
          </button>
          <div style={{ color: 'rgba(184,239,196,0.3)', fontSize: '9px', marginTop: '6px' }}>
            ※ 맵↔씬 연결 미구현 — LocationBar만 업데이트됨
          </div>
        </div>

        {/* ── 시스템 ── */}
        <div style={S.section}>
          <div style={S.sectionTitle}>시스템</div>
          <div style={S.row}>
            <button style={S.btn('red')} onClick={() => dispatch({ type: 'RESET' })}>
              전체 리셋 (RESET)
            </button>
          </div>
          <div style={{ color: 'rgba(184,239,196,0.3)', fontSize: '9px', marginTop: '4px' }}>
            HP·오염도·인벤토리·씬 모두 초기화
          </div>
        </div>

      </div>
    </div>
  );
}
