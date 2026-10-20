import { useEffect, useRef } from 'react';
import type { CampaignEngine } from '../engine/CampaignEngine';
import { COLORS } from '../config/palette';
import { liquidationPrice } from '../engine/TradingEngine';
export default function TradingChart({ engine }: {
    engine: CampaignEngine;
}) {
    const ref = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const c = ref.current!, ctx = c.getContext('2d')!;
        let frame = 0, shown = 0;
        const draw = () => {
            const box = c.getBoundingClientRect(), ratio = Math.min(2, devicePixelRatio || 1), w = Math.round(box.width * ratio), h = Math.round(box.height * ratio);
            if (c.width !== w || c.height !== h) {
                c.width = w;
                c.height = h;
            }
            ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
            const width = box.width, height = box.height;
            ctx.fillStyle = COLORS.bg;
            ctx.fillRect(0, 0, width, height);
            const q = engine.market.quotes[engine.selected], bars = q.candles.slice(-70), pos = engine.trading.position, related = pos?.symbol === engine.selected ? pos : null, levels = bars.flatMap(b => [b.high, b.low]);
            if (related)
                levels.push(related.entry, liquidationPrice(related));
            let min = Math.min(...levels), max = Math.max(...levels), span = max - min || q.price * .02;
            min -= span * .1;
            max += span * .1;
            span = max - min;
            const right = 96, top = 24, bottom = height - 62, plot = width - right - 24, bar = plot / 70, y = (price: number) => top + (max - price) / span * (bottom - top), x = (i: number) => 24 + (70 - bars.length + i) * bar;
            ctx.font = '12px monospace';
            ctx.textAlign = 'left';
            for (let i = 0; i < 6; i++) {
                const yy = top + (bottom - top) * i / 5;
                ctx.strokeStyle = COLORS.grid;
                ctx.globalAlpha = .4;
                ctx.beginPath();
                ctx.moveTo(16, yy);
                ctx.lineTo(width - right, yy);
                ctx.stroke();
                ctx.globalAlpha = 1;
                ctx.fillStyle = COLORS.muted;
                ctx.fillText((max - span * i / 5).toLocaleString('ko-KR', { maximumFractionDigits: 0 }), width - right + 8, yy + 4);
            }
            const vol = Math.max(1, ...bars.map(b => b.volume));
            for (const [i, b] of bars.entries()) {
                const xx = x(i), up = b.close >= b.open;
                ctx.fillStyle = up ? COLORS.up : COLORS.down;
                ctx.fillRect(Math.round(xx + bar * .4), y(b.high), 1, Math.max(1, y(b.low) - y(b.high)));
                ctx.fillRect(Math.round(xx + 1), Math.min(y(b.open), y(b.close)), Math.max(2, bar - 3), Math.max(2, Math.abs(y(b.open) - y(b.close))));
                ctx.globalAlpha = .3;
                ctx.fillRect(xx, bottom + 45 - b.volume / vol * 33, Math.max(2, bar - 2), b.volume / vol * 33);
                ctx.globalAlpha = 1;
                if (i % 14 === 0) {
                    ctx.fillStyle = COLORS.muted;
                    const minute = 540 + Math.floor(b.t / 2);
                    ctx.fillText(`${Math.floor(minute / 60)}:${String(minute % 60).padStart(2, '0')}`, xx, height - 5);
                }
            }
            const line = (price: number, color: string, label: string, dashed = true) => { ctx.strokeStyle = color; ctx.setLineDash(dashed ? [4, 4] : []); ctx.beginPath(); ctx.moveTo(16, y(price)); ctx.lineTo(width - right, y(price)); ctx.stroke(); ctx.setLineDash([]); ctx.fillStyle = color; ctx.fillText(label, width - right + 4, y(price) - 5); };
            if (related) {
                line(related.entry, COLORS.cyan, '진입');
                line(liquidationPrice(related), COLORS.warning, '청산가');
            }
            if (!shown || Math.abs(shown / q.price - 1) > .1)
                shown = q.price;
            shown += (q.price - shown) * .22;
            line(shown, COLORS.pink, '현재가', false);
            const first = bars[0]?.t ?? 0;
            for (const n of engine.market.news.events.filter(n => n.released && n.at >= first)) {
                const index = bars.findIndex(b => b.t >= n.at);
                if (index >= 0) {
                    ctx.fillStyle = COLORS.warning;
                    ctx.fillRect(x(index), top, 5, 5);
                }
            }
            ctx.fillStyle = COLORS.muted;
            ctx.font = '11px monospace';
            ctx.fillText('VOLUME', 18, bottom + 17);
            if (bars.length < 4) {
                ctx.fillStyle = COLORS.text;
                ctx.fillText('첫 캔들을 기록하고 있습니다. 2초 = 시장 1분', 30, height * .45);
            }
            frame = requestAnimationFrame(draw);
        };
        frame = requestAnimationFrame(draw);
        return () => cancelAnimationFrame(frame);
    }, [engine]);
    return <canvas ref={ref} className="nt-chart-canvas" role="img" aria-label="시장 캔들 차트. 가격, 진입가, 청산가와 뉴스 발생 지점을 표시합니다."/>;
}
