import type { AchievementId, BattleMode } from '../types';
import { ACHIEVEMENT_LIBRARY } from './achievementLibrary';
import { GameState } from '../GameState';

type UnlockListener = (id: AchievementId) => void;

/**
 * 도전 과제 관리 싱글톤 (정적 클래스).
 * - 잠금 해제 시 보상을 즉시 GameState에 적용
 * - 리스너를 통해 ToastScene에 알림 전달
 * - hardReset() 시 unlockedIds 초기화
 */
export class AchievementManager {
  private static unlockedIds = new Set<AchievementId>();
  private static listeners: UnlockListener[] = [];

  static reset(): void {
    this.unlockedIds.clear();
  }

  static isUnlocked(id: AchievementId): boolean {
    return this.unlockedIds.has(id);
  }

  static unlock(id: AchievementId): void {
    if (this.unlockedIds.has(id)) return;
    this.unlockedIds.add(id);

    const ach = ACHIEVEMENT_LIBRARY.find(a => a.id === id);
    if (!ach) return;

    switch (ach.reward.type) {
      case 'gold':
        GameState.gold += ach.reward.amount;
        break;
      case 'heal':
        GameState.playerHp = Math.min(
          GameState.playerMaxHp,
          GameState.playerHp + ach.reward.amount,
        );
        break;
      case 'max_hp':
        GameState.playerMaxHp += ach.reward.amount;
        GameState.playerHp = Math.min(
          GameState.playerMaxHp,
          GameState.playerHp + ach.reward.amount,
        );
        break;
    }

    this.listeners.forEach(fn => fn(id));
  }

  /** 리스너 등록. 반환값(unsubscribe 함수)을 호출하면 등록 해제. */
  static subscribe(fn: UnlockListener): () => void {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  // ── 트리거 포인트별 확인 메서드 ────────────────────────────────────────────

  /**
   * 전투 승리 후 호출.
   * finalHp: 승리 시 플레이어 HP, mode: 전투 모드
   */
  static checkAfterVictory(finalHp: number, mode: BattleMode): void {
    GameState.totalBattlesWon++;

    if (GameState.totalBattlesWon === 1) this.unlock('first_victory');
    if (finalHp >= GameState.battleStartHp) this.unlock('untouchable');
    if (finalHp <= 10) this.unlock('survivor');
    if (mode === 'boss') this.unlock('boss_slayer');
    if (mode === 'elite_giant' || mode === 'elite_spider') this.unlock('elite_slayer');
  }

  /** VictoryScene에서 골드가 추가된 후 호출. */
  static checkAfterGoldAdded(): void {
    if (GameState.gold >= 200) this.unlock('big_earner');
  }

  /** 유물 추가 후 호출. */
  static checkAfterRelicAdded(): void {
    if (GameState.equippedRelics.length >= 3) this.unlock('relic_collector');
  }

  /** 보너스 카드 추가 후 호출. */
  static checkAfterCardAdded(): void {
    const base = 13; // CARD_LIBRARY의 기본 카드 수 (removedCardIds 미적용 근사값)
    const total = base + GameState.bonusCards.length;
    if (total >= 15) this.unlock('card_master');
  }
}
