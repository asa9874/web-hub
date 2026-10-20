import { SeededRandom } from './SeededRandom';
export type Regime = 'BULL' | 'BEAR' | 'RANGE' | 'VOLATILE' | 'REVERSAL';
export const REGIME_LABEL: Record<Regime, string> = { BULL: '매수 우세', BEAR: '매도 우세', RANGE: '박스권', VOLATILE: '변동성 확대', REVERSAL: '추세 전환' };
export class RegimeEngine {
    kind: Regime = 'RANGE';
    trend = 0;
    remaining = 8;
    previous = 1;
    changes = 0;
    update(dt: number, rng: SeededRandom) { this.remaining -= dt; if (this.remaining <= 0) {
        const choices: Regime[] = this.kind === 'BULL' ? ['BULL', 'RANGE', 'REVERSAL', 'VOLATILE'] : this.kind === 'BEAR' ? ['BEAR', 'RANGE', 'REVERSAL', 'VOLATILE'] : ['BULL', 'BEAR', 'RANGE', 'VOLATILE', 'REVERSAL'];
        if (this.kind === 'BULL')
            this.previous = 1;
        if (this.kind === 'BEAR')
            this.previous = -1;
        this.kind = choices[Math.floor(rng.next() * choices.length)];
        this.remaining = 22 + rng.next() * 26;
        this.changes++;
    } const target = this.kind === 'BULL' ? .0018 : this.kind === 'BEAR' ? -.0018 : this.kind === 'REVERSAL' ? -.0014 * this.previous : 0; this.trend += (target - this.trend) * (1 - Math.exp(-dt * .4)); }
    drift() { return this.trend; }
}
