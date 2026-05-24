import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 별빛 파괴자 — 기억 소실 선행 마법소녀 이사벨라 루에스 | Act 1 보스 | HP 220 | 페이즈 2: 힘+3 */
export class StarDestroyer extends Boss {
  readonly name = '별빛 파괴자';
  readonly subtitle = '기억 소실 선행 마법소녀 이사벨라 루에스 | Act 1 보스';
  readonly lore = '100년 전 별 정령과 계약한 마법소녀. 기억을 전부 소모하고 힘만 남아 폭주 상태가 된 비극의 선행자. 루나와 닮은 외형이지만 눈에 감정이 없다.';
  readonly quote = '"그 눈이 아무것도 담고 있지 않다는 걸 깨달았을 때는 이미 늦었습니다."';
  readonly statType = '기억 소실 마법소녀 (역전)';
  readonly phaseChangeMessage = '별빛 파괴자가 금지된 마법을 해방했다!';
  readonly phase2BuffDescription = '힘 +3';

  readonly phasePatterns = [
    [
      {
        id: 'starlight_destroy',
        name: '별빛 파괴',
        description: '16의 피해',
        weight: 1,
        execute: (t: Entity, s: Entity) => applyDamage(t, 16, s),
      },
      {
        id: 'contract_reverse',
        name: '계약 역전',
        description: '약화 3 부여',
        weight: 1,
        execute: (t: Entity) => addStatus(t, 'weak', 3),
      },
      {
        id: 'moonlight_barrage',
        name: '달빛 포격',
        description: '12의 피해 2회',
        weight: 1,
        execute: (t: Entity, s: Entity) => { applyDamage(t, 12, s); applyDamage(t, 12, s); },
      },
      {
        id: 'afterimage_guard',
        name: '잔상 방어',
        description: '방어도 20 획득',
        weight: 1,
        execute: (_t: Entity, s: Entity) => { s.block += 20; },
      },
    ],
    [
      {
        id: 'light_of_annihilation',
        name: '소멸의 빛',
        description: '22의 피해',
        weight: 1,
        execute: (t: Entity, s: Entity) => applyDamage(t, 22, s),
      },
      {
        id: 'memory_erosion',
        name: '기억 침식',
        description: '독 3 + 약화 3 부여',
        weight: 1,
        execute: (t: Entity) => { addStatus(t, 'poison', 3); addStatus(t, 'weak', 3); },
      },
      {
        id: 'starlight_explosion',
        name: '별빛 폭발',
        description: '18의 피해 2회',
        weight: 1,
        execute: (t: Entity, s: Entity) => { applyDamage(t, 18, s); applyDamage(t, 18, s); },
      },
      {
        id: 'last_spell',
        name: '최후의 마법',
        description: '28의 피해',
        weight: 1,
        execute: (t: Entity, s: Entity) => applyDamage(t, 28, s),
      },
    ],
  ];

  constructor() { super(220); }

  protected override onPhaseChange(): void {
    this.statuses.strength += 3;
  }
}
