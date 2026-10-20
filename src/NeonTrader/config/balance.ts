export const BALANCE = { step: .05, candle: 2, cash: 1000000, debt: 100000000, days: 30, daySeconds: 240, minimum: 10000, fee: .0004, maintenance: .005, spread: .00015, comboMinimum: 2000 } as const;
export const SYMBOLS = ['BTC', 'ETH', 'NYAN'] as const;
export type SymbolId = typeof SYMBOLS[number];
export const COINS = { BTC: { name: '비트코인', initial: 90000000, beta: 1, noise: .0018 }, ETH: { name: '이더리움', initial: 4000000, beta: 1.15, noise: .0026 }, NYAN: { name: '냥코인', initial: 1000, beta: .6, noise: .005 } };
export const TITLE = 'NEON TRADER — 오늘도 청산당했습니다!';
export const SAVE_KEY = 'neon-trader-campaign-v1', SETTINGS_KEY = 'neon-trader-settings-v1', RECORD_KEY = 'neon-trader-records-v1';
export interface Settings {
    master: number;
    bgm: number;
    sfx: number;
    muted: boolean;
    motion: boolean;
    flash: boolean;
    crt: boolean;
    text: number;
    speed: number;
    minutes: number;
}
export const DEFAULT_SETTINGS: Settings = { master: .55, bgm: .55, sfx: .65, muted: false, motion: true, flash: false, crt: false, text: 1, speed: 1, minutes: 4 };
