import { BALANCE, COINS, SYMBOLS } from '../config/balance';
import type { SymbolId } from '../config/balance';
import { SeededRandom } from './SeededRandom';
import { RegimeEngine } from './RegimeEngine';
import { NewsEngine } from './NewsEngine';
import { aggregate, premarket } from './CandleAggregator';
import type { Candle } from './CandleAggregator';
export interface Quote {
    price: number;
    start: number;
    anchor: number;
    vol: number;
    pressure: number;
    lastReturn: number;
    liquidity: number;
    candles: Candle[];
}
export class MarketEngine {
    time = 0;
    ticks = 0;
    common: SeededRandom;
    regime = new RegimeEngine();
    news: NewsEngine;
    rng: Record<SymbolId, SeededRandom>;
    quotes: Record<SymbolId, Quote>;
    constructor(seed: number, duration = 240) { this.common = new SeededRandom(seed); this.news = new NewsEngine(seed ^ 0x491ecd, duration); this.rng = Object.fromEntries(SYMBOLS.map((s, i) => [s, new SeededRandom(seed ^ Math.imul(i + 1, 2654435761))])) as typeof this.rng; this.quotes = Object.fromEntries(SYMBOLS.map(s => [s, { price: COINS[s].initial, start: COINS[s].initial, anchor: COINS[s].initial, vol: 1, pressure: 0, lastReturn: 0, liquidity: 1, candles: premarket(COINS[s].initial, seed ^ Math.imul(SYMBOLS.indexOf(s) + 5, 16777619)) }])) as typeof this.quotes; }
    step() {
        const dt = BALANCE.step;
        this.ticks++;
        this.time = this.ticks * dt;
        this.regime.update(dt, this.common);
        const events = this.news.update(this.time), factor = this.common.normal();
        for (const symbol of SYMBOLS) {
            const q = this.quotes[symbol], c = COINS[symbol], rng = this.rng[symbol], noise = rng.normal();
            q.pressure = q.pressure * .97 + noise * .00004;
            q.anchor += (q.price - q.anchor) * dt * .04;
            const mean = this.regime.kind === 'RANGE' ? Math.log(q.anchor / q.price) * .12 : 0, shock = this.news.pressure(symbol, this.time), volatility = this.regime.kind === 'VOLATILE' ? 2.7 : 1;
            const ret = Math.max(-.018, Math.min(.018, (this.regime.drift() * c.beta + mean + q.pressure + shock) * dt + c.noise * volatility * Math.sqrt(q.vol * dt) * (factor * (symbol === 'NYAN' ? .25 : .88) + noise * .48)));
            q.price = Math.max(c.initial * .03, Math.min(c.initial * 40, q.price * Math.exp(ret)));
            q.lastReturn = ret;
            q.vol = Math.min(4, Math.max(.4, q.vol * .985 + Math.abs(ret) / (.001 * Math.sqrt(dt)) * .015));
            const volume = (30 + Math.abs(ret) * 100000 + Math.abs(shock) * 60000) * dt * (.5 + rng.next());
            q.liquidity = Math.max(.35, Math.min(2, volume / (dt * 100) / (1 + Math.abs(shock) * 200)));
            aggregate(q.candles, this.time, q.price, volume);
        }
        return events;
    }
}
