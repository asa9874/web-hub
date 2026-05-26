import Phaser from 'phaser';
import type { Monster } from '../monsters/Monster';

const STORAGE_KEY = 'aestelia_volumes';
const FADE_MS = 800;

const BOSS_BGM_MAP: Record<string, string> = {
  DarkLord:          'bgm16',
  StarDestroyer:     'bgm17',
  MemoryKing:        'bgm18',
  FearQueen:         'bgm19',
  ShadowTitan:       'bgm20',
  TowerMaster:       'bgm21',
  AncientOne:        'bgm22',
  LordOfTime:        'bgm23',
  StarHeartGuardian: 'bgm24',
};

export class BGMManager {
  private static _instance: BGMManager;
  private _game: Phaser.Game | null = null;
  private _current: Phaser.Sound.BaseSound | null = null;
  private _currentKey = '';
  private _bgmVol = 0.7;
  private _sfxVol = 0.7;

  static get instance(): BGMManager {
    if (!BGMManager._instance) BGMManager._instance = new BGMManager();
    return BGMManager._instance;
  }

  init(game: Phaser.Game): void {
    this._game = game;
    this._load();
  }

  private _load(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { bgm?: number; sfx?: number };
      if (typeof parsed.bgm === 'number') this._bgmVol = Math.max(0, Math.min(1, parsed.bgm));
      if (typeof parsed.sfx === 'number') this._sfxVol = Math.max(0, Math.min(1, parsed.sfx));
    } catch { /* ignore */ }
  }

  private _save(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ bgm: this._bgmVol, sfx: this._sfxVol }));
    } catch { /* ignore */ }
  }

  get bgmVolume(): number { return this._bgmVol; }
  get sfxVolume(): number { return this._sfxVol; }
  get currentKey(): string { return this._currentKey; }

  setBgmVolume(v: number): void {
    this._bgmVol = Math.max(0, Math.min(1, v));
    if (this._current) this._setVol(this._current, this._bgmVol);
    this._save();
  }

  setSfxVolume(v: number): void {
    this._sfxVol = Math.max(0, Math.min(1, v));
    this._save();
  }

  play(key: string, loop = true): void {
    if (!this._game) return;
    if (this._currentKey === key) return;

    const sm = this._game.sound;
    const prev = this._current;
    this._currentKey = key;
    this._current = null;

    if (prev) this._fadeAndRemove(prev, sm);

    const next = sm.add(key, { volume: 0, loop });
    next.play();
    this._current = next;
    this._ramp(next, 0, this._bgmVol, FADE_MS);
  }

  stop(): void {
    const prev = this._current;
    if (!prev || !this._game) return;
    this._current = null;
    this._currentKey = '';
    this._fadeAndRemove(prev, this._game.sound);
  }

  private _fadeAndRemove(sound: Phaser.Sound.BaseSound, sm: Phaser.Sound.BaseSoundManager): void {
    const startVol = this._getVol(sound);
    this._ramp(sound, startVol, 0, FADE_MS, () => {
      try { sm.remove(sound); } catch { /* ignore */ }
    });
  }

  private _ramp(
    sound: Phaser.Sound.BaseSound,
    from: number,
    to: number,
    duration: number,
    onDone?: () => void,
  ): void {
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      try { this._setVol(sound, from + (to - from) * t); } catch { return; }
      if (t < 1) requestAnimationFrame(tick);
      else onDone?.();
    };
    requestAnimationFrame(tick);
  }

  private _getVol(sound: Phaser.Sound.BaseSound): number {
    return (sound as unknown as { volume: number }).volume ?? this._bgmVol;
  }

  private _setVol(sound: Phaser.Sound.BaseSound, v: number): void {
    (sound as unknown as { volume: number }).volume = v;
  }

  getBossBgmKey(boss: Monster): string {
    return BOSS_BGM_MAP[boss.constructor.name] ?? 'bgm06';
  }
}

export const bgm = BGMManager.instance;
