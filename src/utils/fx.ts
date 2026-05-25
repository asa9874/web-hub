import Phaser from 'phaser';

// ── 타입 별칭 ──────────────────────────────────────────────────────────────────

type RectOrImage =
  | Phaser.GameObjects.Rectangle
  | Phaser.GameObjects.Image
  | Phaser.GameObjects.Sprite;

// ── Hit Stop ──────────────────────────────────────────────────────────────────

/**
 * 트윈 엔진을 `ms` 밀리초 동안 timescale=0으로 동결.
 * real setTimeout을 사용하므로 Phaser Clock에 영향받지 않는다.
 * onResume: 동결 해제 직후 실행 (squash·파티클 트리거 타이밍에 사용).
 */
export function hitStop(
  scene: Phaser.Scene,
  ms = 60,
  onResume?: () => void,
): void {
  scene.tweens.timeScale = 0;
  setTimeout(() => {
    if (scene.tweens) scene.tweens.timeScale = 1;
    onResume?.();
  }, ms);
}

// ── 데미지·회복 팝업 ────────────────────────────────────────────────────────────

/**
 * 피해량 팝업.
 * scale 0 → 1.35 (Back.Out 바운시 팝인) → 1 → 위로 떠오르며 페이드.
 */
export function spawnDamageNumber(
  scene: Phaser.Scene,
  x: number,
  y: number,
  amount: number,
  color = '#ff7675',
): void {
  const txt = scene.add.text(x, y, `-${amount}`, {
    fontSize: '24px', color, fontStyle: 'bold',
    stroke: '#000000', strokeThickness: 4,
  }).setOrigin(0.5).setDepth(30).setScale(0);

  // Phase 1 — pop-in (Back.Out: overshoot then settle)
  scene.tweens.add({
    targets: txt,
    scaleX: 1.35, scaleY: 1.35,
    duration: 110,
    ease: 'Back.Out',
    onComplete: () => {
      // Phase 2 — normalize scale
      scene.tweens.add({
        targets: txt,
        scaleX: 1, scaleY: 1,
        duration: 80,
        ease: 'Power1.Out',
        onComplete: () => {
          // Phase 3 — float & fade
          scene.tweens.add({
            targets: txt,
            y: y - 65,
            alpha: 0,
            duration: 700,
            ease: 'Power2.Out',
            onComplete: () => txt.destroy(),
          });
        },
      });
    },
  });
}

/**
 * 회복량 팝업 (녹색, 동일한 바운시 팝인).
 */
export function spawnHealNumber(
  scene: Phaser.Scene,
  x: number,
  y: number,
  amount: number,
): void {
  const txt = scene.add.text(x, y, `+${amount}`, {
    fontSize: '22px', color: '#00d2a0', fontStyle: 'bold',
    stroke: '#003d2a', strokeThickness: 4,
  }).setOrigin(0.5).setDepth(30).setScale(0);

  scene.tweens.add({
    targets: txt,
    scaleX: 1.25, scaleY: 1.25,
    duration: 110,
    ease: 'Back.Out',
    onComplete: () => {
      scene.tweens.add({
        targets: txt,
        scaleX: 1, scaleY: 1,
        duration: 80,
        ease: 'Power1.Out',
        onComplete: () => {
          scene.tweens.add({
            targets: txt,
            y: y - 55,
            alpha: 0,
            duration: 700,
            ease: 'Power2.Out',
            onComplete: () => txt.destroy(),
          });
        },
      });
    },
  });
}

// ── 색상 플래시 ────────────────────────────────────────────────────────────────

/**
 * Rectangle을 순간적으로 흰색으로 플래시한 뒤 원래 색으로 복원.
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
 * Image/Sprite를 순간적으로 흰색 tintFill로 플래시 후 원래 상태 복원.
 */
export function flashHitImage(
  scene: Phaser.Scene,
  target: Phaser.GameObjects.Image | Phaser.GameObjects.Sprite,
  duration = 110,
): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (target as any).setTintFill(0xffffff);
  scene.time.delayedCall(duration, () => {
    if (target.active) target.clearTint();
  });
}

// ── Squash & Stretch ──────────────────────────────────────────────────────────

/**
 * 피격 Squash & Stretch.
 * 1) 수평 squash (가로 납작) → 2) Elastic.Out으로 원래 크기 복원.
 * 기존 scale 트윈을 killTweensOf로 중단 후 시작하여 중복 충돌 방지.
 */
export function squashOnHit(
  scene: Phaser.Scene,
  target: RectOrImage,
  intensity = 1,              // 1 = normal, 0.5 = gentler (for large sprites)
): void {
  const sqX = 1 + 0.35 * intensity;
  const sqY = 1 - 0.32 * intensity;

  scene.tweens.killTweensOf(target);
  scene.tweens.add({
    targets: target,
    scaleX: sqX,
    scaleY: sqY,
    duration: 55,
    ease: 'Power3.Out',
    onComplete: () => {
      scene.tweens.add({
        targets: target,
        scaleX: 1,
        scaleY: 1,
        duration: 380,
        ease: 'Elastic.Out',
      });
    },
  });
}

/**
 * 성공적인 착지·배치에 쓰는 Stretch & Settle (세로 늘림 → 정착).
 */
export function stretchOnLand(
  scene: Phaser.Scene,
  target: RectOrImage,
): void {
  scene.tweens.killTweensOf(target);
  scene.tweens.add({
    targets: target,
    scaleX: 0.85,
    scaleY: 1.3,
    duration: 70,
    ease: 'Power2.Out',
    onComplete: () => {
      scene.tweens.add({
        targets: target,
        scaleX: 1,
        scaleY: 1,
        duration: 300,
        ease: 'Elastic.Out',
      });
    },
  });
}

// ── 오브젝트 흔들기 ───────────────────────────────────────────────────────────

/**
 * 적 오브젝트를 좌우로 흔드는 피격 애니메이션.
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

// ── 파티클 버스트 ──────────────────────────────────────────────────────────────

/**
 * 임팩트 지점에서 파티클 버스트를 생성.
 * 'vfx_dot' 텍스처가 미리 생성되어 있어야 한다 (BattleScene.initVFX).
 */
export function spawnParticleBurst(
  scene: Phaser.Scene,
  x: number,
  y: number,
  color: number,
  count = 10,
): void {
  if (!scene.textures.exists('vfx_dot')) return;

  // Phaser 3.60+ 파티클 API
  const em = scene.add.particles(x, y, 'vfx_dot', {
    speed:    { min: 80,  max: 210 },
    angle:    { min: 0,   max: 360 },
    scale:    { start: 1.0, end: 0 },
    alpha:    { start: 1,   end: 0 },
    lifespan: { min: 250, max: 550 },
    gravityY: 90,
    tint: color,
    emitting: false,
  }).setDepth(28);

  em.explode(count);
  scene.time.delayedCall(650, () => { if (em.active) em.destroy(); });
}

/**
 * 마법 스킬용 반짝이는 별가루 파티클 (흰색/금색 혼합).
 */
export function spawnMagicBurst(
  scene: Phaser.Scene,
  x: number,
  y: number,
  count = 14,
): void {
  if (!scene.textures.exists('vfx_dot')) return;

  const em = scene.add.particles(x, y, 'vfx_dot', {
    speed:    { min: 40,  max: 160 },
    angle:    { min: 0,   max: 360 },
    scale:    { start: 1.2, end: 0 },
    alpha:    { start: 1,   end: 0 },
    lifespan: { min: 400, max: 800 },
    gravityY: -30,          // 위로 살짝 떠오름
    tint:     [0xffffff, 0xffd700, 0xe0b8ff, 0x74b9ff],
    emitting: false,
  }).setDepth(28);

  em.explode(count);
  scene.time.delayedCall(900, () => { if (em.active) em.destroy(); });
}

// ── 슬래시 트레일 ─────────────────────────────────────────────────────────────

/**
 * 런지 모션 중 잔상(ghost) 트레일을 생성.
 * Power2.Out 이징의 보간 위치에 반투명 Rectangle 잔상을 심고 빠르게 소멸시킨다.
 *
 * Power2.Out: eased(t) = 1 - (1-t)^2 ≈ 2t - t²
 *  t=0.30 → ~0.51  (delay ≈ 33ms)
 *  t=0.57 → ~0.82  (delay ≈ 63ms)
 *  t=0.82 → ~0.97  (delay ≈ 90ms)
 */
export function spawnSlashTrail(
  scene: Phaser.Scene,
  ox: number,
  oy: number,
  dx: number,
  color: number,
  w: number,
  h: number,
): void {
  const samples: { frac: number; delay: number; alpha: number }[] = [
    { frac: 0.51, delay: 33, alpha: 0.42 },
    { frac: 0.82, delay: 63, alpha: 0.28 },
    { frac: 0.97, delay: 90, alpha: 0.16 },
  ];

  samples.forEach(({ frac, delay, alpha }) => {
    scene.time.delayedCall(delay, () => {
      if (!scene.sys?.isActive?.()) return;
      const ghost = scene.add.rectangle(ox + dx * frac, oy, w, h, color)
        .setAlpha(alpha)
        .setDepth(0);

      scene.tweens.add({
        targets: ghost,
        alpha: 0,
        scaleX: 0.55,
        duration: 190,
        ease: 'Power2.Out',
        onComplete: () => ghost.destroy(),
      });
    });
  });
}

// ── 사망 트윈 ─────────────────────────────────────────────────────────────────

/**
 * 적 사망 시 축소 + 페이드 아웃.
 * 완료 후 회색 반투명 상태로 복원 (updateUI 시각과 일치).
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
