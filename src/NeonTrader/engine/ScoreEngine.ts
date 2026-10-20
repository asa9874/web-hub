import { BALANCE } from '../config/balance';
import type { Trade } from './TradingEngine';
export class ScoreEngine {
    score = 0;
    combo = 0;
    bestCombo = 0;
    trades = 0;
    wins = 0;
    profit = 0;
    peak = 0;
    peakAssets = 0;
    drawdown = 0;
    trade(t: Trade) { this.trades++; this.profit += t.net; if (t.net > 0)
        this.wins++; if (t.net >= BALANCE.comboMinimum && t.roe >= .005 && t.duration >= 2) {
        this.combo++;
        this.bestCombo = Math.max(this.bestCombo, this.combo);
        this.score += Math.round((t.roe * 1000 + Math.min(100, 300 / Math.max(2, t.duration))) * Math.min(5, 1 + this.combo * .25));
    }
    else if (t.net < 0) {
        this.combo = 0;
        if (t.reason === 'manual' && t.roe > -.1 && t.roe <= -.02 && t.duration >= 4 && t.net <= -1000)
            this.score += 10;
    } }
    observe(assets: number, paid = 0) { this.peakAssets = Math.max(this.peakAssets, assets); const value = assets + paid; this.peak = Math.max(this.peak, value); this.drawdown = Math.max(this.drawdown, this.peak ? 1 - value / this.peak : 0); }
}
