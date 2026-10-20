import type { SymbolId } from '../config/balance';
import { SYMBOLS } from '../config/balance';
import { SeededRandom } from './SeededRandom';
export interface News {
    id: number;
    at: number;
    preview: number;
    peak: number;
    end: number;
    title: string;
    symbol: SymbolId;
    strength: number;
    credibility: number;
    reaction: number;
    kind: string;
    released: boolean;
    warned: boolean;
}
const STORIES = [['기관 매집 보고서 공개', 1, '호재'], ['규제 당국, 거래 규칙 재검토', -1, '속보'], ['대형 지갑 이동 포착', -.7, '루머'], ['개발팀 업그레이드 성공', 1, '호재'], ['거래소 일시 장애', -1, '악재'], ['유명인 고양이 사진 업로드', 1, '루머'], ['차익 실현 물량 증가', -1, '이슈'], ['현물 수요 회복 신호', 1, '분석']] as const;
export class NewsEngine {
    events: News[] = [];
    constructor(seed: number, duration: number) { const rng = new SeededRandom(seed); let at = 12; for (let id = 0; at < duration - 6; id++) {
        const [title, sign, kind] = STORIES[Math.floor(rng.next() * STORIES.length)], credibility = .45 + rng.next() * .5;
        this.events.push({ id, at, preview: rng.next() < .55 ? 2 + rng.next() * 2 : 0, peak: at + 3, end: at + 19, title, symbol: SYMBOLS[Math.floor(rng.next() * 3)], strength: sign * (.0015 + rng.next() * .0025), credibility, reaction: rng.next() < credibility ? (rng.next() < .2 ? -.45 : 1) : 0, kind, released: false, warned: false });
        at += 17 + rng.next() * 16;
    } }
    update(time: number) { const released: News[] = [], warnings: News[] = []; for (const n of this.events) {
        if (n.preview && time >= n.at - n.preview && !n.warned && !n.released) {
            n.warned = true;
            warnings.push(n);
        }
        if (time >= n.at && !n.released) {
            n.released = true;
            released.push(n);
        }
    } return { released, warnings }; }
    pressure(symbol: SymbolId, time: number) { let value = 0; for (const n of this.events) {
        if (time < n.at || time > n.end)
            continue;
        const age = time - n.at, shape = age < 3 ? age / 3 : Math.exp(-(age - 3) / 5);
        const rebound = age > 10 ? -.15 * Math.exp(-(age - 10) / 5) : 0;
        value += n.strength * n.credibility * n.reaction * (shape + rebound) * (n.symbol === symbol ? (symbol === 'NYAN' ? 2 : 1) : .18);
    } return value; }
}
