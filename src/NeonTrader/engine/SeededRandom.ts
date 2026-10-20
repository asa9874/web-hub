export class SeededRandom {
    state: number;
    constructor(seed: number) { this.state = seed >>> 0; }
    next() { let t = this.state += 0x6D2B79F5; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); this.state >>>= 0; return ((t ^ t >>> 14) >>> 0) / 4294967296; }
    normal() { return Math.sqrt(-2 * Math.log(Math.max(1e-10, this.next()))) * Math.cos(2 * Math.PI * this.next()); }
}
export const hashSeed = (text: string) => [...text].reduce((s, c) => Math.imul(s ^ c.charCodeAt(0), 16777619) >>> 0, 2166136261);
