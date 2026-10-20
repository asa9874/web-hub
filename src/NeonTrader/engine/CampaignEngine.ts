import { BALANCE, SAVE_KEY } from '../config/balance';
import type { SymbolId } from '../config/balance';
import { MarketEngine } from './MarketEngine';
import { TradingEngine, equity } from './TradingEngine';
import type { Trade } from './TradingEngine';
import { ScoreEngine } from './ScoreEngine';
import { EmotionDirector } from './EmotionDirector';
export type Phase = 'briefing' | 'trading' | 'results' | 'ending';
export interface Feedback {
    id: number;
    kind: 'entry' | 'profit' | 'loss' | 'liquidation' | 'news' | 'warning' | 'error' | 'repayment' | 'knock';
    text: string;
    at: number;
    value?: number;
}
export class CampaignEngine {
    version = 1;
    practice = false;
    seed: number;
    day = 1;
    debt: number = BALANCE.debt;
    paid = 0;
    duration: number;
    phase: Phase = 'briefing';
    ending: 'GOOD' | 'BAD' | 'BANKRUPT' | null = null;
    market: MarketEngine;
    trading = new TradingEngine();
    score = new ScoreEngine();
    emotion = new EmotionDirector();
    selected: SymbolId = 'BTC';
    ratio = .25;
    leverage = 5;
    paused = false;
    events: Feedback[] = [];
    serial = 0;
    startCash: number = BALANCE.cash;
    warned = false;
    tutorialStep = 0;
    tutorial = false;
    constructor(seed: number, duration: number = BALANCE.daySeconds) { this.seed = seed >>> 0; this.duration = duration; this.market = new MarketEngine(this.seed, duration); this.score.peak = BALANCE.cash; this.score.peakAssets = BALANCE.cash; }
    pause(value: boolean) { this.paused = value; }
    select(symbol: SymbolId) { this.selected = symbol; }
    chooseRatio(value: number) { this.ratio = value; }
    chooseLeverage(value: number) { this.leverage = value; }
    guide(enabled: boolean, reset = true) { this.tutorial = enabled; if (reset)
        this.tutorialStep = 0; }
    emit(kind: Feedback['kind'], text: string, value?: number) { this.events.push({ id: ++this.serial, kind, text, at: this.market.time, value }); this.events = this.events.slice(-12); }
    value() { const p = this.trading.position; return equity(this.trading.cash, p, p ? this.market.quotes[p.symbol].price : 0); }
    start() { if (this.phase !== 'briefing')
        return; this.phase = 'trading'; this.paused = false; }
    order(side: 1 | -1, margin: number) { if (this.phase !== 'trading' || this.paused)
        return; const error = this.trading.enter(this.selected, side, margin, this.leverage, this.market.quotes[this.selected].price, this.market.time, this.market.quotes[this.selected].liquidity); if (error) {
        this.emit('error', error);
        return;
    } this.emit('entry', `${this.selected} ${side === 1 ? '롱' : '숏'} 체결`); this.emotion.event('POSITION', this.market.time); if (this.tutorial && this.tutorialStep === 0 && side === 1)
        this.tutorialStep = 1;
    else if (this.tutorial && this.tutorialStep === 2 && side === -1)
        this.tutorialStep = 3; }
    close() { if (this.phase !== 'trading' || this.paused)
        return; const p = this.trading.position; if (p)
        this.onTrade(this.trading.close(this.market.quotes[p.symbol].price, this.market.time, 'manual', this.market.quotes[p.symbol].liquidity)); if (this.tutorial && this.tutorialStep === 1)
        this.tutorialStep = 2;
    else if (this.tutorial && this.tutorialStep === 3)
        this.tutorialStep = 4; }
    onTrade(t: Trade | null) { if (!t)
        return; this.score.trade(t); this.emit(t.reason === 'liquidation' ? 'liquidation' : t.net >= 0 ? 'profit' : 'loss', t.reason === 'liquidation' ? '강제청산!' : t.net >= 0 ? '수익 실현' : '손실 정리', t.net); if (t.reason === 'liquidation')
        this.emotion.event('LIQUIDATED', this.market.time);
    else
        this.emotion.event(t.net > 0 ? 'REALIZED_PROFIT' : 'LOSS_SMALL', this.market.time, t.net < 0 ? '살아남는 것도 실력이지…' : undefined); }
    step() {
        if (this.phase !== 'trading' || this.paused)
            return;
        const { released, warnings } = this.market.step();
        for (const n of warnings)
            this.emit('warning', `${n.symbol} 발표 예고 · ${Math.ceil(n.preview)}초 후`);
        for (const n of released) {
            this.emit('news', `${n.symbol} · ${n.title}`);
            if (this.market.time > this.emotion.lockedUntil) {
                this.emotion.line = n.kind === '루머' ? '출처부터 확인해. 나 말고 기사!' : `속보야! ${n.symbol} 거래량도 봐.`;
                this.emotion.lockedUntil = this.market.time + 3;
            }
        }
        const p = this.trading.position;
        if (p)
            this.onTrade(this.trading.mark(this.market.quotes[p.symbol].price, this.market.time, this.market.quotes[p.symbol].liquidity));
        this.score.observe(this.value(), this.paid);
        const active = this.trading.position;
        this.emotion.update(active, active ? this.market.quotes[active.symbol].price : 0, this.market.time);
        if (!this.warned && this.market.time >= this.duration - 10) {
            this.warned = true;
            this.emit('warning', '10초 뒤 마감 · 보유 포지션은 시장가로 정산됩니다.');
        }
        if (this.market.time >= this.duration) {
            const p = this.trading.position;
            if (p)
                this.onTrade(this.trading.close(this.market.quotes[p.symbol].price, this.market.time, 'close', this.market.quotes[p.symbol].liquidity));
            this.phase = 'results';
            if (this.trading.cash < BALANCE.minimum * (1 + BALANCE.fee))
                this.finish('BANKRUPT');
        }
        if (!this.trading.position && this.trading.cash < BALANCE.minimum * (1 + BALANCE.fee))
            this.finish('BANKRUPT');
    }
    repay(amount: number) { if (this.phase !== 'results' || !Number.isFinite(amount) || amount <= 0 || amount > Math.min(this.debt, this.trading.cash))
        return false; this.debt -= amount; this.trading.cash -= amount; this.paid += amount; this.emit('repayment', '빚 상환 완료!', amount); this.emotion.event('REALIZED_PROFIT', this.market.time, this.debt === 0 ? '우리, 진짜로 해냈네. 고마워.' : this.paid > BALANCE.debt * .5 ? '반 넘게 갚았어. 네가 있어서 다행이야.' : '고지서가 조금 가벼워졌어. 진짜야.'); if (this.debt <= .01)
        this.finish('GOOD'); return true; }
    nextDay() { if (this.phase !== 'results')
        return; if (this.day >= BALANCE.days) {
        this.finish('BAD');
        return;
    } if (this.trading.cash < BALANCE.minimum * (1 + BALANCE.fee)) {
        this.finish('BANKRUPT');
        return;
    } this.day++; this.market = new MarketEngine((this.seed + Math.imul(this.day, 7297)) >>> 0, this.duration); this.phase = 'briefing'; this.startCash = this.trading.cash; this.warned = false; this.emotion = new EmotionDirector(); this.events = []; }
    finish(ending: NonNullable<CampaignEngine['ending']>) { this.ending = ending; this.phase = 'ending'; this.paused = false; if (ending === 'BAD') {
        this.emotion.event('LOSS_BIG', this.market.time, '누구세요? …문 안 열었는데요?');
        this.emit('knock', '똑똑. 고지서 왔습니다.');
    } if (ending === 'BANKRUPT') {
        this.emotion.event('LIQUIDATED', this.market.time);
        if (this.events.at(-1)?.kind !== 'liquidation')
            this.emit('liquidation', '컵라면도 외상은 안 된대…');
    } }
    serialize() { return JSON.stringify(this); }
    save() { if (this.practice)
        return; try {
        localStorage.setItem(SAVE_KEY, this.serialize());
    }
    catch { /* Storage is optional; play continues. */ } }
    static restore(raw: string | null): CampaignEngine | null { try {
        if (!raw || raw.length > 3000000)
            return null;
        const d = JSON.parse(raw);
        if (!Number.isInteger(d.market?.ticks) || d.market.ticks < 0 || d.market.ticks > 6001 || !Number.isFinite(d.market.time) || Math.abs(d.market.time - d.market.ticks * BALANCE.step) > 1e-6 || !['BTC', 'ETH', 'NYAN'].includes(d.selected) || ![1, 5, 10, 20].includes(d.leverage) || ![.1, .25, .5, 1].includes(d.ratio) || !['score', 'combo', 'bestCombo', 'trades', 'wins', 'profit', 'peak', 'peakAssets', 'drawdown'].every(k => Number.isFinite(d.score?.[k])) || d.version !== 1 || !Number.isInteger(d.seed) || !Number.isInteger(d.day) || d.day < 1 || d.day > 30 || ![180, 240, 300].includes(d.duration) || !['briefing', 'trading', 'results', 'ending'].includes(d.phase) || !Number.isFinite(d.debt) || d.debt < 0 || d.debt > BALANCE.debt || !Number.isFinite(d.trading.cash) || d.trading.cash < 0 || d.trading.cash > 1e16 || d.market.time < 0 || d.market.time > d.duration + .1)
            return null;
        if (d.phase === 'ending' && (!['GOOD', 'BAD', 'BANKRUPT'].includes(d.ending) || (d.ending === 'GOOD' && d.debt > .01) || (d.ending === 'BAD' && d.day !== 30)))
            return null;
        const e = new CampaignEngine(d.seed, d.duration);
        if (!Number.isFinite(d.paid) || d.paid < 0 || Math.abs(d.paid + d.debt - BALANCE.debt) > 1 || !Number.isFinite(d.startCash) || !Array.isArray(d.events) || d.events.length > 12 || d.events.some((event:{id:number;text:string;at:number})=>!Number.isInteger(event.id)||typeof event.text!=='string'||!Number.isFinite(event.at))) return null;
        // Whitelist instance fields, never restore prototype methods from storage.
        const copy = <T extends object>(target:T,data:Record<string,unknown>) => {for(const key of Object.keys(target))if(Object.hasOwn(data,key))(target as Record<string,unknown>)[key]=data[key];return target;};
        copy(e,d);
        // Markets do not observe orders, so replaying the bounded day is an exact,
        // safe recovery of every RNG, candle and news flag, even if those caches broke.
        e.market = new MarketEngine(d.day===1?d.seed:(d.seed+Math.imul(d.day,7297))>>>0,d.duration);
        for(let i=0;i<d.market.ticks;i++)e.market.step();
        for (const s of ['BTC', 'ETH', 'NYAN'] as const) {
            const q = d.market.quotes[s];
            if (!Number.isFinite(q.price) || q.price <= 0 || !Array.isArray(q.candles) || q.candles.length > 240 || q.candles.some((c: {
                open: number;
                close: number;
                high: number;
                low: number;
                volume: number;
            }) => ![c.open, c.close, c.high, c.low, c.volume].every(Number.isFinite) || c.low <= 0 || c.high < Math.max(c.open, c.close) || c.low > Math.min(c.open, c.close) || c.volume < 0))
                return null;
        }
        e.trading = new TradingEngine(d.trading.cash);
        e.trading.position = d.trading.position;
        e.trading.history = Array.isArray(d.trading.history)?d.trading.history.filter((t:Trade)=>t&&['BTC','ETH','NYAN'].includes(t.symbol)&&[t.net,t.roe,t.fees,t.entry,t.exit,t.margin,t.duration].every(Number.isFinite)).slice(0,500):[];
        const p = e.trading.position;
        if (p && (!['BTC', 'ETH', 'NYAN'].includes(p.symbol) || ![1, -1].includes(p.side) || ![1, 5, 10, 20].includes(p.leverage) || ![p.margin, p.entry, p.quantity].every(v => Number.isFinite(v) && v > 0) || Math.abs(p.quantity * p.entry - p.margin * p.leverage) > .1))
            return null;
        if(p&&![p.fee,p.opened].every(Number.isFinite))return null;
        if(!['IDLE','POSITION','PROFIT_SMALL','PROFIT_BIG','LOSS_SMALL','LOSS_BIG','LIQUIDATION_DANGER','LIQUIDATED','REALIZED_PROFIT'].includes(d.emotion?.mood)||typeof d.emotion.line!=='string'||!['since','lockedUntil','spokenAt','lastRoe'].every(k=>Number.isFinite(d.emotion[k])))return null;
        e.score = copy(new ScoreEngine(), d.score);
        e.emotion = copy(new EmotionDirector(), d.emotion);
        e.paused = e.phase === 'trading';
        return e;
    }
    catch {
        return null;
    } }
}
