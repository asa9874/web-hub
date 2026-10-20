import { useEffect, useRef } from 'react';
import type { CampaignEngine } from '../engine/CampaignEngine';
import { PALETTE } from '../config/palette';
const INDEX = { IDLE: 0, POSITION: 1, PROFIT_SMALL: 2, PROFIT_BIG: 3, LOSS_SMALL: 4, LOSS_BIG: 5, LIQUIDATION_DANGER: 5, LIQUIDATED: 6, REALIZED_PROFIT: 7 };
/** Source originals stay untouched. Final game pixels are constrained to the 16-color palette. */
export default function CharacterCam({ engine, motion }: {
    engine: CampaignEngine;
    motion: boolean;
}) {
    const ref = useRef<HTMLCanvasElement>(null);
    useEffect(() => { const c = ref.current!, ctx = c.getContext('2d')!, image = new Image(), frames: ImageData[] = []; let frame = 0, failed = false; const rgb = PALETTE.map(h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]); image.src = import.meta.env.BASE_URL + 'neon-trader/character-sheet.png'; image.onload = () => { const off = document.createElement('canvas'); off.width = 120; off.height = 90; const out = off.getContext('2d', { willReadFrequently: true })!; out.imageSmoothingEnabled = false; for (let i = 0; i < 8; i++) {
        out.drawImage(image, (i % 4) * image.width / 4, Math.floor(i / 4) * image.height / 2, image.width / 4, image.height / 2, 0, 0, 120, 90);
        const pixels = out.getImageData(0, 0, 120, 90);
        for (let p = 0; p < pixels.data.length; p += 4) {
            let best = 0, dist = Infinity;
            for (let k = 0; k < rgb.length; k++) {
                const d = (pixels.data[p] - rgb[k][0]) ** 2 + (pixels.data[p + 1] - rgb[k][1]) ** 2 + (pixels.data[p + 2] - rgb[k][2]) ** 2;
                if (d < dist) {
                    dist = d;
                    best = k;
                }
            }
            pixels.data[p] = rgb[best][0];
            pixels.data[p + 1] = rgb[best][1];
            pixels.data[p + 2] = rgb[best][2];
            pixels.data[p + 3] = 255;
        }
        frames.push(pixels);
    } }; image.onerror = () => { failed = true; }; const draw = () => { const index = INDEX[engine.emotion.mood], time = performance.now() / 1000; ctx.imageSmoothingEnabled = false; if (frames[index]) {
        ctx.putImageData(frames[index], 0, 0);
        const active = motion && !engine.paused && engine.phase === 'trading';
        if (active && Math.sin(time * 2) > .5) {
            ctx.drawImage(c, 0, 0, 120, 90, 0, 1, 120, 90);
            ctx.fillStyle = PALETTE[0];
            ctx.fillRect(0, 0, 120, 1);
        }
        if (active && engine.emotion.mood === 'IDLE' && time % 5 < .1) {
            ctx.fillStyle = PALETTE[3];
            ctx.fillRect(43, 44, 10, 2);
            ctx.fillRect(65, 44, 10, 2);
        }
        if (active && (index === 2 || index === 3 || index === 7)) {
            ctx.fillStyle = PALETTE[14];
            for (let i = 0; i < 4; i++) {
                const x = 18 + i * 25, y = 16 + Math.floor(Math.sin(time * 3 + i) * 6);
                ctx.fillRect(x, y, 1, 5);
                ctx.fillRect(x - 2, y + 2, 5, 1);
            }
        }
        if (active && (index === 4 || index === 5)) {
            ctx.fillStyle = PALETTE[11];
            ctx.fillRect(87, 26 + Math.floor(time * 8) % 12, 2, 4);
        }
    }
    else {
        ctx.fillStyle = PALETTE[1];
        ctx.fillRect(0, 0, 120, 90);
        ctx.fillStyle = PALETTE[11];
        ctx.font = '8px monospace';
        ctx.fillText(failed ? 'CAM OFFLINE' : 'CONNECTING…', 15, 45);
    } c.dataset.frame = String(index); c.dataset.loaded = String(frames.length === 8); frame = requestAnimationFrame(draw); }; frame = requestAnimationFrame(draw); return () => { cancelAnimationFrame(frame); image.onload = null; image.onerror = null; }; }, [engine, motion]);
    return <canvas className="nt-character-canvas" ref={ref} width="120" height="90" role="img" aria-label="니아의 실시간 픽셀 캐릭터 캠. 거래 상황에 따라 표정과 동작이 바뀝니다."/>;
}
