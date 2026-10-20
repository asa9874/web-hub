import { BALANCE } from '../config/balance';
import type { SymbolId } from '../config/balance';
export interface Position {
    symbol: SymbolId;
    side: 1 | -1;
    margin: number;
    leverage: number;
    entry: number;
    quantity: number;
    fee: number;
    opened: number;
}
export interface Trade {
    symbol: SymbolId;
    side: 1 | -1;
    entry: number;
    exit: number;
    net: number;
    fees: number;
    margin: number;
    roe: number;
    duration: number;
    reason: 'manual' | 'liquidation' | 'close';
}
export const pnl = (p: Position, price: number) => (price - p.entry) * p.quantity * p.side;
export const liquidationPrice = (p: Position) => (p.side === 1 ? p.entry - p.margin / p.quantity : p.entry + p.margin / p.quantity) / (1 - p.side * BALANCE.maintenance);
export const equity = (cash: number, p: Position | null, price: number) => cash + (p ? p.margin + pnl(p, price) : 0);
export function quoteOrder(cash: number, ratio: number, leverage: number, price: number) { const margin = Math.min(cash / (1 + leverage * BALANCE.fee), cash * ratio), notional = margin * leverage; return { margin, notional, fee: notional * BALANCE.fee, price }; }
export const executionSlip = (notional: number, liquidity = 1) => BALANCE.spread * (1 + Math.min(2, notional / 1e9)) / Math.max(.35, Math.min(2, liquidity));
export class TradingEngine {
    cash: number;
    position: Position | null = null;
    history: Trade[] = [];
    constructor(cash: number = BALANCE.cash) { this.cash = cash; }
    enter(symbol: SymbolId, side: 1 | -1, margin: number, leverage: number, price: number, time: number, liquidity = 1) { if (this.position)
        return '기존 포지션을 먼저 청산하세요.'; if (![1, 5, 10, 20].includes(leverage) || !Number.isFinite(margin) || margin < BALANCE.minimum || !Number.isFinite(price) || price <= 0)
        return '최소 증거금은 10,000원입니다.'; const fee = margin * leverage * BALANCE.fee; if (margin + fee > this.cash + 1e-6)
        return '수수료를 포함한 가용 현금이 부족합니다.'; this.cash = Math.max(0, this.cash - margin - fee); const entry = price * (1 + side * executionSlip(margin * leverage, liquidity)); this.position = { symbol, side, margin, leverage, entry, quantity: margin * leverage / entry, fee, opened: time }; return null; }
    close(price: number, time: number, reason: Trade['reason'] = 'manual', liquidity = 1) { const p = this.position; if (!p)
        return null; const exit = price * (1 - p.side * executionSlip(p.quantity * price, liquidity)), raw = pnl(p, exit), exitFee = exit * p.quantity * BALANCE.fee, returned = Math.max(0, p.margin + raw - exitFee); this.cash += returned; const trade: Trade = { symbol: p.symbol, side: p.side, entry: p.entry, exit, net: returned - p.margin - p.fee, fees: p.fee + exitFee, margin: p.margin, roe: (returned - p.margin - p.fee) / p.margin, duration: time - p.opened, reason }; this.history.unshift(trade); this.history = this.history.slice(0, 500); this.position = null; return trade; }
    mark(price: number, time: number, liquidity = 1) { const p = this.position; if (p && p.margin + pnl(p, price) <= price * p.quantity * BALANCE.maintenance)
        return this.close(price, time, 'liquidation', liquidity); return null; }
}
