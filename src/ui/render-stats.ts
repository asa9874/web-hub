import type { PlayerState } from '../types/index.ts';

const BAR_WIDTH = 14;

function asciiBar(value: number, max: number): string {
  const filled = Math.round((value / max) * BAR_WIDTH);
  return '█'.repeat(filled) + '░'.repeat(BAR_WIDTH - filled);
}

export function renderStats(state: PlayerState): void {
  const hpBar     = document.getElementById('hp-bar-ascii');
  const hpNum     = document.getElementById('hp-numeric');
  const corBar    = document.getElementById('cor-bar-ascii');
  const corNum    = document.getElementById('cor-numeric');

  const hpPct  = (state.hp / state.maxHp) * 100;
  const corPct = (state.corruption / state.maxCorruption) * 100;

  if (hpBar) {
    hpBar.textContent = asciiBar(state.hp, state.maxHp);
    hpBar.className   = `stat-bar-ascii ${
      hpPct < 25 ? 'hp-critical' : hpPct < 50 ? 'hp-low' : 'hp-ok'
    }`;
  }
  if (hpNum) hpNum.textContent = `${state.hp} / ${state.maxHp}`;

  if (corBar) {
    corBar.textContent = asciiBar(state.corruption, state.maxCorruption);
    corBar.className   = `stat-bar-ascii ${
      corPct > 75 ? 'cor-critical' : corPct > 50 ? 'cor-high' : 'cor-ok'
    }`;
  }
  if (corNum) corNum.textContent = `${state.corruption} / ${state.maxCorruption}`;
}
