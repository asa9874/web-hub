/**
 * 터미널 사운드 엔진 — Web Audio API 기반 절차적 효과음
 * 외부 파일 없이 오실레이터/노이즈로 모든 소리를 합성한다.
 */

import { useSettingsStore } from '../state/settingsStore.ts';

let _ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (!_ctx) {
    try { _ctx = new AudioContext(); } catch { return null; }
  }
  if (_ctx.state === 'suspended') void _ctx.resume();
  return _ctx;
}

function on(): boolean {
  return useSettingsStore.getState().soundEnabled;
}

/** 기본 오실레이터 비프음 */
function beep(
  freq:     number,
  duration: number,
  gain      = 0.1,
  type: OscillatorType = 'square',
  when      = 0,
): void {
  const c = getCtx();
  if (!c) return;
  const t   = c.currentTime + when;
  const osc = c.createOscillator();
  const g   = c.createGain();
  osc.connect(g);
  g.connect(c.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(gain, t + 0.002);
  g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  osc.start(t);
  osc.stop(t + duration + 0.01);
}

// ── 타이핑 소리 (30ms 이하 간격은 묵음) ────────────────────────────────────
let _lastTypeAt = 0;

export const sound = {

  /** 텍스트 한 글자 출력 틱 — throttle 40ms */
  typeChar(): void {
    if (!on()) return;
    const now = Date.now();
    if (now - _lastTypeAt < 40) return;
    _lastTypeAt = now;
    beep(520 + Math.random() * 180, 0.016, 0.038, 'square');
  },

  /** 선택지·버튼 클릭 */
  click(): void {
    if (!on()) return;
    beep(820, 0.032, 0.14, 'square');
    beep(580, 0.028, 0.08, 'square', 0.038);
  },

  /** 마우스 호버 */
  hover(): void {
    if (!on()) return;
    beep(900, 0.014, 0.028, 'square');
  },

  /** HP 감소 */
  damage(): void {
    if (!on()) return;
    beep(260, 0.10, 0.13, 'sawtooth');
    beep(190, 0.09, 0.09, 'sawtooth', 0.07);
  },

  /** 오염도 증가 */
  corruption(): void {
    if (!on()) return;
    beep(170, 0.13, 0.10, 'sawtooth');
    beep(240, 0.08, 0.05, 'square',   0.06);
  },

  /** 아이템 획득 */
  pickup(): void {
    if (!on()) return;
    beep(560, 0.050, 0.10, 'square');
    beep(700, 0.050, 0.10, 'square', 0.060);
    beep(880, 0.090, 0.10, 'square', 0.120);
  },

  /** 사망 */
  death(): void {
    if (!on()) return;
    const c = getCtx();
    if (!c) return;
    const t   = c.currentTime;
    const osc = c.createOscillator();
    const g   = c.createGain();
    osc.connect(g);
    g.connect(c.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(360, t);
    osc.frequency.exponentialRampToValueAtTime(55, t + 1.1);
    g.gain.setValueAtTime(0.14, t);
    g.gain.linearRampToValueAtTime(0.0001, t + 1.1);
    osc.start(t);
    osc.stop(t + 1.2);
  },

  /** 씬 전환 */
  scene(): void {
    if (!on()) return;
    beep(360, 0.075, 0.065, 'sine');
  },

  /** 메뉴 진입 / 게임 시작 */
  menuStart(): void {
    if (!on()) return;
    beep(440, 0.06, 0.07, 'sine');
    beep(550, 0.06, 0.07, 'sine', 0.08);
    beep(660, 0.12, 0.09, 'sine', 0.16);
  },

  /** 프롤로그 패널 전환 */
  prologueNext(): void {
    if (!on()) return;
    beep(480, 0.06, 0.07, 'sine');
    beep(640, 0.09, 0.07, 'sine', 0.07);
  },
};
