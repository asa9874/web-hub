import Phaser from 'phaser';

/**
 * 적 오브젝트를 좌우로 흔드는 피격 애니메이션.
 * intensity: 최대 이동 픽셀, duration: 전체 흔들림 시간(ms)
 */
export function shakeObject(
  scene: Phaser.Scene,
  target: Phaser.GameObjects.Rectangle,
  intensity = 7,
  duration = 220,
): void {
  const origX = target.x;
  scene.tweens.add({
    targets: target,
    x: origX + intensity,
    duration: duration / 4,
    yoyo: true,
    repeat: 1,
    ease: 'Sine.InOut',
    onComplete: () => { target.x = origX; },
  });
}

/**
 * 오브젝트를 순간적으로 흰색으로 플래시한 뒤 원래 색으로 복원.
 */
export function flashHit(
  scene: Phaser.Scene,
  target: Phaser.GameObjects.Rectangle,
  restoreColor: number,
  duration = 110,
): void {
  target.setFillStyle(0xffffff);
  scene.time.delayedCall(duration, () => {
    if (target.active) target.setFillStyle(restoreColor);
  });
}

/**
 * 피해량 팝업 텍스트 — 위로 떠오르며 사라짐.
 */
export function spawnDamageNumber(
  scene: Phaser.Scene,
  x: number,
  y: number,
  amount: number,
  color = '#ff7675',
): void {
  const txt = scene.add.text(x, y, `-${amount}`, {
    fontSize: '22px', color, fontStyle: 'bold',
    stroke: '#000000', strokeThickness: 3,
  }).setOrigin(0.5).setDepth(30);

  scene.tweens.add({
    targets: txt,
    y: y - 56,
    alpha: 0,
    duration: 750,
    ease: 'Power2',
    onComplete: () => txt.destroy(),
  });
}

/**
 * 회복량 팝업 텍스트.
 */
export function spawnHealNumber(
  scene: Phaser.Scene,
  x: number,
  y: number,
  amount: number,
): void {
  const txt = scene.add.text(x, y, `+${amount}`, {
    fontSize: '20px', color: '#00b894', fontStyle: 'bold',
    stroke: '#004a35', strokeThickness: 3,
  }).setOrigin(0.5).setDepth(30);

  scene.tweens.add({
    targets: txt,
    y: y - 48,
    alpha: 0,
    duration: 750,
    ease: 'Power2',
    onComplete: () => txt.destroy(),
  });
}

/**
 * 적 사망 시 축소 + 페이드 아웃 트위닝.
 * 완료 후 회색 반투명 상태로 복원 (기존 updateUI 시각과 일치).
 */
export function playDeathTween(
  scene: Phaser.Scene,
  target: Phaser.GameObjects.Rectangle,
  onComplete?: () => void,
): void {
  scene.tweens.add({
    targets: target,
    scaleX: 0.1,
    scaleY: 0.1,
    alpha: 0,
    duration: 320,
    ease: 'Back.In',
    onComplete: () => {
      if (target.active) {
        target.setFillStyle(0x3a3a3a);
        target.setAlpha(0.35);
        target.setScale(1);
      }
      onComplete?.();
    },
  });
}
