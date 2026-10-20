import type { Settings } from '../config/balance';
import type { Mood } from '../engine/EmotionDirector';
import type { Feedback } from '../engine/CampaignEngine';
type Layer = 'base' | 'hat' | 'arp' | 'lead' | 'tension';
/** Original 132 BPM, eight-bar composition. Every stem shares this one audio clock. */
export class ChiptuneEngine {
    readonly ctx: AudioContext;
    private master: GainNode;
    private bgm: GainNode;
    private sfx: GainNode;
    private layers: Record<Layer, GainNode>;
    private compressor: DynamicsCompressorNode;
    private noise: AudioBuffer;
    private sources = new Set<AudioScheduledSourceNode>();
    private timer: number;
    private next = 0;
    private step = 0;
    private silence = 0;
    private dead = false;
    private pending: Mood = 'IDLE';
    mood: Mood = 'IDLE';
    scheduled = 0;
    targets: Record<Layer, number> = { base: 1, hat: 0, arp: 0, lead: 0, tension: 0 };
    private settings: Settings;
    constructor(settings: Settings) { this.settings = settings; this.ctx = new AudioContext(); this.master = this.ctx.createGain(); this.bgm = this.ctx.createGain(); this.sfx = this.ctx.createGain(); this.compressor = this.ctx.createDynamicsCompressor(); this.compressor.threshold.value = -12; this.compressor.ratio.value = 8; this.compressor.attack.value = .003; this.compressor.release.value = .1; this.bgm.connect(this.master); this.sfx.connect(this.master); this.master.connect(this.compressor); this.compressor.connect(this.ctx.destination); this.layers = Object.fromEntries(['base', 'hat', 'arp', 'lead', 'tension'].map(key => { const g = this.ctx.createGain(); g.gain.value = key === 'base' ? 1 : 0; g.connect(this.bgm); return [key, g]; })) as typeof this.layers; this.noise = this.ctx.createBuffer(1, this.ctx.sampleRate * .15, this.ctx.sampleRate); const samples = this.noise.getChannelData(0); let n = 0x729abcdef; for (let i = 0; i < samples.length; i++) {
        n ^= n << 13;
        n ^= n >>> 17;
        n ^= n << 5;
        samples[i] = (n >>> 0) / 4294967296 * 2 - 1;
    } this.next = this.ctx.currentTime + .05; this.volume(settings); this.timer = window.setInterval(() => this.schedule(), 25); void this.ctx.resume(); }
    private track(source: AudioScheduledSourceNode, nodes: AudioNode[]) { this.sources.add(source); source.onended = () => { source.disconnect(); nodes.forEach(n => n.disconnect()); this.sources.delete(source); }; }
    private tone(hz: number, time: number, duration: number, volume: number, type: OscillatorType, bus: AudioNode) { if (this.dead)
        return; const o = this.ctx.createOscillator(), g = this.ctx.createGain(); o.type = type; o.frequency.setValueAtTime(hz, time); g.gain.setValueAtTime(0, time); g.gain.linearRampToValueAtTime(volume, time + .004); g.gain.exponentialRampToValueAtTime(.0001, time + duration); o.connect(g); g.connect(bus); o.start(time); o.stop(time + duration + .01); this.track(o, [g]); }
    private percussion(time: number, volume: number, hat = false) { const source = this.ctx.createBufferSource(), gain = this.ctx.createGain(), filter = this.ctx.createBiquadFilter(); source.buffer = this.noise; filter.type = hat ? 'highpass' : 'bandpass'; filter.frequency.value = hat ? 6500 : 1800; gain.gain.setValueAtTime(volume, time); gain.gain.exponentialRampToValueAtTime(.0001, time + (hat ? .025 : .09)); source.connect(filter); filter.connect(gain); gain.connect(hat ? this.layers.hat : this.layers.base); source.start(time); source.stop(time + .12); this.track(source, [filter, gain]); }
    setMood(mood: Mood) { this.pending = mood; }
    private mix(time: number) { this.mood = this.pending; const m = this.mood, position = m !== 'IDLE' && m !== 'LIQUIDATED', profit = m === 'PROFIT_BIG' || m === 'PROFIT_SMALL' || m === 'REALIZED_PROFIT'; this.targets = { base: 1, hat: position ? .65 : 0, arp: position ? .55 : 0, lead: profit ? (m === 'PROFIT_BIG' ? 1 : .6) : 0, tension: m === 'LOSS_SMALL' ? .3 : m === 'LOSS_BIG' ? .8 : m === 'LIQUIDATION_DANGER' ? 1 : 0 }; for (const k of Object.keys(this.layers) as Layer[])
        this.layers[k].gain.setTargetAtTime(this.targets[k], time, .075); if (time >= this.silence)
        this.bgm.gain.setTargetAtTime(this.settings.bgm * (m === 'LIQUIDATION_DANGER' ? .35 : 1), time, .08); }
    private schedule() { if (this.dead || this.ctx.state !== 'running')
        return; const now = this.ctx.currentTime, unit = 60 / 132 / 4; if (this.next < now - .1)
        this.next = now + .03; while (this.next < now + .2) {
        const t = this.next, s = this.step % 128, beat = s % 16, chord = Math.floor(s / 32), bass = [110, 130.81, 146.83, 98][chord], notes = [1, 1.5, 2, 2.4, 2, 1.5, 1.2, 1.5];
        if (s % 4 === 0)
            this.mix(t);
        if (t >= this.silence) {
            if (beat % 4 === 0)
                this.tone(bass, t, .18, .1, 'triangle', this.layers.base);
            if (beat === 0 || beat === 8) {
                this.tone(60, t, .08, .14, 'sine', this.layers.base);
            }
            if (beat === 4 || beat === 12)
                this.percussion(t, .055);
            this.percussion(t, .025, true);
            this.tone(bass * notes[s % 8] * 4, t, .07, .025, 'square', this.layers.arp);
            if (s % 2 === 0)
                this.tone(bass * [4, 4.8, 6, 8, 6, 4.8, 4, 3.6][Math.floor(s / 2) % 8], t, .14, .028, 'square', this.layers.lead);
            if (beat % 2 === 0)
                this.tone(bass * (s % 4 === 0 ? 1 : 1.06), t, .12, .035, 'sawtooth', this.layers.tension);
            if (this.mood === 'LIQUIDATION_DANGER' && beat % 4 === 0)
                this.tone(880, t, .055, .035, 'square', this.sfx);
        }
        this.step++;
        this.scheduled++;
        this.next += unit;
    } }
    effect(kind: Feedback['kind'], combo = 0) { if (this.dead || this.sources.size > 100)
        return; const t = this.ctx.currentTime + .015; if (kind === 'liquidation') {
        this.silence = t + .3;
        for (const source of this.sources) {
            try {
                source.stop(t);
            }
            catch { /* already ended */ }
        }
        this.bgm.gain.cancelScheduledValues(t);
        this.bgm.gain.setValueAtTime(0, t);
        this.bgm.gain.setValueAtTime(this.settings.bgm * .6, t + .3);
        [440, 330, 220, 110].forEach((hz, i) => this.tone(hz, t + .3 + i * .1, .17, .08, 'square', this.sfx));
    }
    else if (kind === 'profit' || kind === 'repayment') {
        [523.25, 659.25, 783.99, 1046.5].slice(0, combo >= 3 ? 4 : 3).forEach((hz, i) => this.tone(hz * (combo >= 5 ? 1.5 : 1), t + i * .075, .16, .05, 'square', this.sfx));
    }
    else if (kind === 'knock') {
        for (let i = 0; i < 3; i++)
            this.tone(95, t + i * .28, .07, .08, 'triangle', this.sfx);
    }
    else if (kind === 'loss') {
        this.tone(220, t, .2, .045, 'triangle', this.sfx);
        this.tone(164.81, t + .1, .22, .045, 'triangle', this.sfx);
    }
    else if (kind === 'news' || kind === 'warning') {
        this.tone(784, t, .08, .035, 'square', this.sfx);
        this.tone(1046, t + .09, .08, .035, 'square', this.sfx);
    }
    else if (kind === 'entry') {
        this.tone(330, t, .07, .04, 'square', this.sfx);
        this.tone(660, t + .06, .1, .04, 'square', this.sfx);
    }
    else
        this.tone(110, t, .08, .035, 'triangle', this.sfx); }
    volume(s: Settings) { this.settings = s; const now = this.ctx.currentTime; this.master.gain.setTargetAtTime(s.muted ? 0 : s.master, now, .035); this.bgm.gain.setTargetAtTime(s.bgm, now, .05); this.sfx.gain.setTargetAtTime(s.sfx, now, .05); }
    pause() { if (!this.dead)
        void this.ctx.suspend(); }
    resume() { if (!this.dead)
        void this.ctx.resume(); }
    snapshot() { return { state: this.ctx.state, mood: this.mood, pending: this.pending, targets: this.targets, bpm: 132, step: this.step, scheduled: this.scheduled, voices: this.sources.size, beat: this.ctx.currentTime / (60 / 132) }; }
    destroy() { if (this.dead)
        return; this.dead = true; clearInterval(this.timer); for (const s of this.sources) {
        try {
            s.stop();
        }
        catch { /* already ended */ }
    } this.sources.clear(); this.master.disconnect(); this.compressor.disconnect(); void this.ctx.close(); }
}
