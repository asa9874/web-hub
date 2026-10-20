import type { Position } from './TradingEngine';
import { liquidationPrice, pnl } from './TradingEngine';
export type Mood = 'IDLE' | 'POSITION' | 'PROFIT_SMALL' | 'PROFIT_BIG' | 'LOSS_SMALL' | 'LOSS_BIG' | 'LIQUIDATION_DANGER' | 'LIQUIDATED' | 'REALIZED_PROFIT';
export const LINES: Record<Mood, string> = { IDLE: '후후, 관망도 실력이지.', POSITION: '이 타이밍… 나쁘지 않은데?', PROFIT_SMALL: '봤지? 내 분석대로야!', PROFIT_BIG: '팔지 마! 아니 팔아! 잠깐!!', LOSS_SMALL: '건강한 조정이야. 아마도.', LOSS_BIG: '왜 안 돌아오는데에!!', LIQUIDATION_DANGER: '잠깐! 청산가! 청산가 봐!!', LIQUIDATED: '……오늘 저녁은 물이야.', REALIZED_PROFIT: '내 분석 비용은 라면 한 개면 돼!' };
export class EmotionDirector {
    mood: Mood = 'IDLE';
    since = 0;
    lockedUntil = 0;
    spokenAt = 0;
    line = LINES.IDLE;
    lastRoe = 0;
    event(mood: Mood, time: number, line?: string) { this.mood = mood; this.since = time; this.spokenAt = time; this.lockedUntil = time + (mood === 'POSITION' ? .6 : 3); this.line = line ?? LINES[mood]; }
    update(p: Position | null, price: number, time: number) { if (p && Math.abs(price - liquidationPrice(p)) / price < .012 && this.mood !== 'LIQUIDATION_DANGER') {
        this.event('LIQUIDATION_DANGER', time);
        return;
    } if (time < this.lockedUntil)
        return; let next: Mood = 'IDLE'; if (p) {
        const roe = pnl(p, price) / p.margin, threshold = this.mood === 'PROFIT_BIG' ? .20 : .25, lossThreshold = this.mood === 'LOSS_BIG' ? -.20 : -.25, danger = Math.abs(price - liquidationPrice(p)) / price;
        next = danger < .012 ? 'LIQUIDATION_DANGER' : roe < lossThreshold ? 'LOSS_BIG' : roe < -.05 || (this.mood === 'LOSS_SMALL' && roe < -.02) ? 'LOSS_SMALL' : roe > threshold ? 'PROFIT_BIG' : roe > .05 || (this.mood === 'PROFIT_SMALL' && roe > .02) ? 'PROFIT_SMALL' : 'POSITION';
        this.lastRoe = roe;
    } if (next !== this.mood && time - this.since >= .6) {
        this.mood = next;
        this.since = time;
    } if (time - this.spokenAt >= 3 && this.line !== LINES[this.mood]) {
        this.line = LINES[this.mood];
        this.spokenAt = time;
    } }
}
