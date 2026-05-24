import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 별빛 파괴자 — 기억 소실 선행 마법소녀 이사벨라 루에스 | Act 1 보스 | HP 220 | 페이즈 2: 힘+3 */
export class StarDestroyer extends Boss {
  readonly name = '별빛 파괴자';
  readonly subtitle = '기억 소실 선행 마법소녀 이사벨라 루에스 | Act 1 보스';
  readonly lore = '처음에는 루나인 줄 알았다. 실루엣이 너무 닮아 있었다—키, 체형, 마법소녀 복장의 실루엣까지. 그러나 가까이서 보면 볼수록 공포가 덮친다. 이 존재의 피부는 순수한 백색이며 혈색이 전혀 없다. 머리카락은 흰색에서 연은색으로 그라디언트 되며, 공중에 가볍게 부유하듯 흔들린다. 눈이 가장 이상하다—눈의 형태는 완벽하게 아름다운 눈꺼풀과 속눈썹을 가지고 있지만, 그 안이 비어있다. 홍채도 동공도 없고, 완전히 텅 빈 은백색의 공허한 표면만 있다. 마법소녀 복장의 장식들—별 모양 브로치, 레이스 커프스—전부 검게 타 버린 것처럼 탄화되어 있다. 손 주변에는 별빛 에너지가 날카로운 파편 형태로 부유하며, 충격을 받으면 적을 향해 포격된다. 감정이 없어서 더 무섭다.';
  readonly quote = '"그 눈이 아무것도 담고 있지 않다는 걸 깨달았을 때는 이미 늦었습니다."';
  readonly imagePath = 'images/monster/book/star_destroyer.png';
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
