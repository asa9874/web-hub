import Phaser from 'phaser';
import type { AchievementId } from '../types';
import { ACHIEVEMENT_LIBRARY } from '../achievements/achievementLibrary';
import { AchievementManager } from '../achievements/AchievementManager';
import { sfx } from '../audio/SoundManager';
import { FONT, GOLD, BG_DEEP, TEXT_PRIMARY, TEXT_DIM } from '../theme';

const PANEL_W = 310;
const PANEL_H = 96;
const FINAL_X = 1280 - PANEL_W / 2 - 14; // 우측 여백 14px
const START_X = 1280 + PANEL_W;           // 화면 우측 밖에서 시작
const BASE_Y = 64;                         // 첫 번째 토스트 Y 중심
const HOLD_MS = 2800;                      // 표시 유지 시간 (ms)
const STACK_OFFSET = PANEL_H + 10;        // 동시 토스트 Y 간격

/**
 * 항상 실행되는 오버레이 씬 — 도전 과제 달성 시 우측 상단에 토스트 팝업을 표시.
 * HubScene.create()에서 scene.launch()로 한 번 실행되며 런 내내 유지됨.
 */
export class ToastScene extends Phaser.Scene {
  private queue: AchievementId[] = [];
  private activeCount = 0;
  private unsubscribe: (() => void) | null = null;

  constructor() {
    super({ key: 'ToastScene' });
  }

  create(): void {
    // 다른 씬 위에 렌더링되도록 투명 배경 없이 순수 오버레이로 동작
    this.unsubscribe = AchievementManager.subscribe((id) => {
      this.queue.push(id);
      this.processQueue();
    });
  }

  shutdown(): void {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }

  private processQueue(): void {
    if (this.queue.length === 0) return;
    const id = this.queue.shift()!;
    this.displayToast(id, this.activeCount);
  }

  private displayToast(id: AchievementId, slot: number): void {
    const ach = ACHIEVEMENT_LIBRARY.find(a => a.id === id);
    if (!ach) return;

    sfx.playAchievement();

    const y = BASE_Y + slot * STACK_OFFSET;
    this.activeCount++;

    // ── 컨테이너 (화면 오른쪽 밖에서 시작) ─────────────────────────────────
    const container = this.add.container(START_X, y);
    container.setDepth(200);

    // 배경 패널
    const panel = this.add.rectangle(0, 0, PANEL_W, PANEL_H, BG_DEEP, 0.96);
    panel.setStrokeStyle(2, GOLD);

    // 좌측 금색 강조 바
    const accent = this.add.rectangle(-PANEL_W / 2 + 4, 0, 6, PANEL_H - 4, GOLD, 0.9);

    // ★ 아이콘
    const star = this.add.text(-PANEL_W / 2 + 22, -26, '★', {
      fontSize: '18px', color: '#FFD700', fontFamily: FONT,
    }).setOrigin(0.5);

    // "도전 과제 달성!" 헤더
    const header = this.add.text(-PANEL_W / 2 + 36, -28, '도전 과제 달성!', {
      fontSize: '11px', color: '#FFD700', fontFamily: FONT, fontStyle: 'bold',
    }).setOrigin(0, 0.5);

    // 구분선
    const divider = this.add.rectangle(PANEL_W / 2 - (PANEL_W - 28) / 2 - 2, -12, PANEL_W - 28, 1, GOLD, 0.3);

    // 달성 이름
    const nameText = this.add.text(-PANEL_W / 2 + 16, 4, ach.name, {
      fontSize: '17px', color: TEXT_PRIMARY, fontFamily: FONT, fontStyle: 'bold',
    }).setOrigin(0, 0.5);

    // 보상 텍스트
    const rewardText = this.add.text(-PANEL_W / 2 + 16, 26, `보상: ${ach.reward.description}`, {
      fontSize: '12px', color: '#FFD700', fontFamily: FONT,
    }).setOrigin(0, 0.5);

    // 설명 텍스트
    const descText = this.add.text(-PANEL_W / 2 + 16, 44, ach.description, {
      fontSize: '10px', color: TEXT_DIM, fontFamily: FONT,
      wordWrap: { width: PANEL_W - 32 },
    }).setOrigin(0, 0.5);

    container.add([panel, accent, star, header, divider, nameText, rewardText, descText]);

    // ── 슬라이드 인 ─────────────────────────────────────────────────────────
    this.tweens.add({
      targets: container,
      x: FINAL_X,
      duration: 360,
      ease: 'Back.Out',
      onComplete: () => {
        // 유지 후 슬라이드 아웃
        this.time.delayedCall(HOLD_MS, () => {
          this.tweens.add({
            targets: container,
            x: START_X,
            duration: 300,
            ease: 'Back.In',
            onComplete: () => {
              container.destroy();
              this.activeCount = Math.max(0, this.activeCount - 1);
              // 큐에 남은 항목 처리
              this.processQueue();
            },
          });
        });
      },
    });
  }
}
