import { BALANCE } from '../config/balance';
import { SeededRandom } from './SeededRandom';
export interface Candle {
    t: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}
/** Separate seeded pre-market stream: useful history immediately, no future-day lookahead. */
export function premarket(price: number, seed: number): Candle[] { const r = new SeededRandom(seed), points = [price]; for (let i = 0; i < 70; i++)
    points.push(points.at(-1)! * Math.exp(r.normal() * .002 + Math.sin(i / 9) * .0005)); points.reverse(); return points.slice(0, -1).map((open, i) => { const close = points[i + 1], wick = r.next() * .001; return { t: (i - 70) * 2, open, close, high: Math.max(open, close) * (1 + wick), low: Math.min(open, close) * (1 - wick), volume: 30 + r.next() * 60 + Math.abs(close / open - 1) * 100000 }; }).concat([{ t: 0, open: price, close: price, high: price, low: price, volume: 0 }]); }
export function aggregate(candles: Candle[], time: number, price: number, volume: number) { const bucket = Math.floor((time + 1e-8) / BALANCE.candle) * BALANCE.candle, last = candles.at(-1); if (!last || last.t !== bucket) {
    candles.push({ t: bucket, open: last?.close ?? price, high: Math.max(last?.close ?? price, price), low: Math.min(last?.close ?? price, price), close: price, volume });
    if (candles.length > 240)
        candles.shift();
}
else {
    last.high = Math.max(last.high, price);
    last.low = Math.min(last.low, price);
    last.close = price;
    last.volume += volume;
} }
