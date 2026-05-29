import PanelTitle from '../ui/PanelTitle.tsx';
import StatRow    from './StatRow.tsx';
import { useGameStore } from '../../state/useGameStore.ts';

const BAR_WIDTH = 14;

function asciiBar(value: number, max: number): string {
  const filled = Math.round((value / max) * BAR_WIDTH);
  return '█'.repeat(filled) + '░'.repeat(BAR_WIDTH - filled);
}

function hpClass(pct: number): string {
  return pct < 25 ? 'hp-critical' : pct < 50 ? 'hp-low' : 'hp-ok';
}

function corClass(pct: number): string {
  return pct > 75 ? 'cor-critical' : pct > 50 ? 'cor-high' : 'cor-ok';
}

export default function StatsSection() {
  const { state } = useGameStore();
  const hpPct  = (state.hp  / state.maxHp)          * 100;
  const corPct = (state.corruption / state.maxCorruption) * 100;

  return (
    <div id="stats-section">
      <PanelTitle>[ 생존 상태 ]</PanelTitle>
      <div id="stats-inner">
        <StatRow
          label="생 명 력"
          barText={asciiBar(state.hp, state.maxHp)}
          barClass={hpClass(hpPct)}
          numeric={`${state.hp} / ${state.maxHp}`}
        />
        <StatRow
          label="오 염 도"
          barText={asciiBar(state.corruption, state.maxCorruption)}
          barClass={corClass(corPct)}
          numeric={`${state.corruption} / ${state.maxCorruption}`}
        />
      </div>
    </div>
  );
}
