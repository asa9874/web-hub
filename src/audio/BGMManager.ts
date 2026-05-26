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

// ── BGM 파일 경로 테이블 ──────────────────────────────────────────────────────

export const BGM_PATHS: Record<string, string> = {
  bgm01: 'sounds/bgm/BGM-01_타이틀 테마_별이 부서진 밤.mp3',
  bgm02: 'sounds/bgm/BGM-02_허브 테마_루나의 방.mp3',
  bgm03: 'sounds/bgm/BGM-03_맵 탐험 테마_별자리를 따라서.mp3',
  bgm04: 'sounds/bgm/BGM-04_일반 전투 테마_달빛 공세.mp3',
  bgm05: 'sounds/bgm/BGM-05_엘리트 전투 테마_성운의 검.mp3',
  bgm06: 'sounds/bgm/BGM-06_보스 전투 테마_기억의 심연.mp3',
  bgm07: 'sounds/bgm/BGM-07_승리 팡파르_별빛 귀환.mp3',
  bgm08: 'sounds/bgm/BGM-08_게임 오버 테마_흩어진 별.mp3',
  bgm09: 'sounds/bgm/BGM-09_상점 테마_별빛 상단.mp3',
  bgm10: 'sounds/bgm/BGM-10_휴식 처 테마_달이 기다리는 곳.mp3',
  bgm11: 'sounds/bgm/BGM-11_이벤트 테마_기억 속 갈림길.mp3',
  bgm12: 'sounds/bgm/BGM-12_로어북 테마_아이스텔리아의 역사.mp3',
  bgm13: 'sounds/bgm/BGM-13_다이얼로그 컷씬 테마_루나의 기억.mp3',
  bgm14: 'sounds/bgm/BGM-14_Act 2 필드 테마_첨탑의 공명.mp3',
  bgm15: 'sounds/bgm/BGM-15_Act 3 필드 테마_성천원의 침묵.mp3',
  bgm16: 'sounds/bgm/BGM-16_보스 전투_암흑 군주_케인의 타락.mp3',
  bgm17: 'sounds/bgm/BGM-17_보스 전투_별빛 파괴자_이사벨라의 공백.mp3',
  bgm18: 'sounds/bgm/BGM-18_보스 전투_기억 도적왕_천 개의 얼굴.mp3',
  bgm19: 'sounds/bgm/BGM-19_보스 전투_공포의 여왕_리라의 결정.mp3',
  bgm20: 'sounds/bgm/BGM-20_보스 전투_그림자 타이탄_공포의 결정체.mp3',
  bgm21: 'sounds/bgm/BGM-21_보스 전투_탑의 주인_암브로시우스의 묘비.mp3',
  bgm22: 'sounds/bgm/BGM-22_보스 전투_고대인_만물귀원.mp3',
  bgm23: 'sounds/bgm/BGM-23_보스 전투_시간의 군주_크로노스의 영역.mp3',
  bgm24: 'sounds/bgm/BGM-24_보스 전투_별의 심장 수호자_최초의 계약.mp3',
};

// Act 1 전체 + 공용 트랙 — PreloadScene에서 로드
export const BGM_PRELOAD_KEYS = [
  'bgm01', 'bgm02', 'bgm03', 'bgm04', 'bgm05', 'bgm06',
  'bgm07', 'bgm08', 'bgm09', 'bgm10', 'bgm11',
  'bgm16', 'bgm17', 'bgm18',
];

// Act 2 관련 — 게임 시작 후 백그라운드 1차 로드
const BG_GROUP_1 = ['bgm12', 'bgm13', 'bgm14', 'bgm19', 'bgm20', 'bgm21'];

// Act 3 관련 — 백그라운드 2차 로드 (1차 완료 후)
const BG_GROUP_2 = ['bgm15', 'bgm22', 'bgm23', 'bgm24'];

// ── BGMManager ────────────────────────────────────────────────────────────────

export class BGMManager {
  private static _instance: BGMManager;
  private _game: Phaser.Game | null = null;
  private _current: Phaser.Sound.BaseSound | null = null;
  private _currentKey = '';
  private _bgmVol = 0.7;
  private _sfxVol = 0.7;

  /** play()가 호출됐지만 아직 로드되지 않은 트랙 — 로드 완료 시 자동 재생 */
  private _pendingPlay: { key: string; loop: boolean } | null = null;
  /** 백그라운드 로드가 이미 시작됐는지 여부 */
  private _bgLoadStarted = false;

  static get instance(): BGMManager {
    if (!BGMManager._instance) BGMManager._instance = new BGMManager();
    return BGMManager._instance;
  }

  init(game: Phaser.Game): void {
    this._game = game;
    this._loadVolumes();
  }

  // ── 볼륨 저장/복원 ────────────────────────────────────────────────────────

  private _loadVolumes(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { bgm?: number; sfx?: number };
      if (typeof parsed.bgm === 'number') this._bgmVol = Math.max(0, Math.min(1, parsed.bgm));
      if (typeof parsed.sfx === 'number') this._sfxVol = Math.max(0, Math.min(1, parsed.sfx));
    } catch { /* ignore */ }
  }

  private _saveVolumes(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ bgm: this._bgmVol, sfx: this._sfxVol }));
    } catch { /* ignore */ }
  }

  // ── 공개 API ──────────────────────────────────────────────────────────────

  get bgmVolume(): number { return this._bgmVol; }
  get sfxVolume(): number { return this._sfxVol; }
  get currentKey(): string { return this._currentKey; }

  setBgmVolume(v: number): void {
    this._bgmVol = Math.max(0, Math.min(1, v));
    if (this._current) this._setVol(this._current, this._bgmVol);
    this._saveVolumes();
  }

  setSfxVolume(v: number): void {
    this._sfxVol = Math.max(0, Math.min(1, v));
    this._saveVolumes();
  }

  /** BGM 재생. 아직 로드되지 않은 경우 pending에 보관 후 로드 완료 시 자동 재생. */
  play(key: string, loop = true): void {
    if (!this._game) return;
    if (this._currentKey === key) return;

    // 미로드 트랙: pending에 저장하고 즉시 로드 시작
    if (!this._game.cache.audio.has(key)) {
      this._pendingPlay = { key, loop };
      this._loadSingle(key);
      return;
    }

    this._pendingPlay = null;
    this._startPlay(key, loop);
  }

  stop(): void {
    const prev = this._current;
    if (!prev || !this._game) return;
    this._pendingPlay = null;
    this._current = null;
    this._currentKey = '';
    this._fadeAndRemove(prev, this._game.sound);
  }

  getBossBgmKey(boss: Monster): string {
    return BOSS_BGM_MAP[boss.constructor.name] ?? 'bgm06';
  }

  // ── 백그라운드 로드 ───────────────────────────────────────────────────────

  /**
   * 게임 시작 후 한 번만 호출.
   * Act 2 → Act 3 순서로 fetch() 기반 비동기 로드.
   * fetch는 씬 전환과 무관하게 브라우저가 완료까지 유지함.
   */
  startBackgroundLoad(): void {
    if (this._bgLoadStarted) return;
    this._bgLoadStarted = true;
    void this._loadGroupSequential([BG_GROUP_1, BG_GROUP_2]);
  }

  // ── 내부: 그룹 순차 로드 ─────────────────────────────────────────────────

  private async _loadGroupSequential(groups: string[][]): Promise<void> {
    for (const group of groups) {
      await this._loadGroup(group);
    }
  }

  private async _loadGroup(keys: string[]): Promise<void> {
    const tasks = keys
      .filter(k => !this._game?.cache.audio.has(k))
      .map(k => this._loadSingle(k));
    await Promise.allSettled(tasks);
  }

  /** fetch → decodeAudioData → Phaser cache에 저장 */
  private async _loadSingle(key: string): Promise<void> {
    if (!this._game) return;
    if (this._game.cache.audio.has(key)) {
      this._checkPending(key);
      return;
    }

    const path = BGM_PATHS[key];
    if (!path) return;

    try {
      const resp = await fetch(path);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const arrayBuf = await resp.arrayBuffer();

      // Phaser의 WebAudioSoundManager AudioContext 가져오기
      const ctx = (this._game.sound as unknown as { context?: AudioContext }).context;
      if (ctx) {
        const audioBuf = await ctx.decodeAudioData(arrayBuf);
        this._game.cache.audio.add(key, audioBuf);
      } else {
        // HTML5 Audio fallback (WebAudio 미지원 환경)
        this._game.cache.audio.add(key, arrayBuf);
      }
    } catch (err) {
      console.warn(`[BGM] background load failed: ${key}`, err);
      return;
    }

    this._checkPending(key);
  }

  /** pending에 저장된 트랙이 방금 로드된 key와 일치하면 재생 */
  private _checkPending(key: string): void {
    if (this._pendingPlay?.key === key) {
      const { loop } = this._pendingPlay;
      this._pendingPlay = null;
      // 아직 다른 곡이 재생 중이 아닌 경우에만 실행
      if (this._currentKey === key || this._currentKey === '') {
        this._currentKey = '';
        this._startPlay(key, loop);
      }
    }
  }

  // ── 내부: 재생 / 페이드 ───────────────────────────────────────────────────

  private _startPlay(key: string, loop: boolean): void {
    if (!this._game) return;

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
}

export const bgm = BGMManager.instance;
