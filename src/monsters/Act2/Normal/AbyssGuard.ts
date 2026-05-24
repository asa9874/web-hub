import type { AttackPattern, Entity } from '../../../types';
import { applyDamage } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 심연 경비병 — 오염된 마법 자동인형 | Act 2 일반 | 가중치 30 */
export class AbyssGuard extends SeqMonster {
  readonly name = '심연 경비병';
  readonly subtitle = '오염된 마법 자동인형 | Act 2 일반';
  readonly lore = '이것이 한때 경비 자동인형이었다는 사실은, 무릎과 팔꿈치의 제조 각인이 아직 남아있어서야 알 수 있었다. 전신은 암회색 철제 외장으로 덮여 있으며, 표면 곳곳에 산화와 부식의 흔적이 있다. 관절부는 검은 에너지 막이 덮여 있어 금속 소리 대신 낮게 웅웅거리는 공명음이 난다. 눈 부위에 광학 렌즈가 있어야 할 자리에—두 개의 심홍색 광점이 자리잡고 있다. 이 광점들은 크기가 바뀌며, 침입자를 포착하면 확대된다. 가슴 중앙부에는 제어 유닛의 금속 외장이 심하게 뒤틀려 있고, 그 틈에서 짙은 청자색 에너지가 맥동한다. 어깨에는 원래 기사단 문장이 있었겠지만, 지금은 심연의 표식으로 덮어쓰여져 있다.';
  readonly quote = '"이제 살아있는 자를 침입자로 처리합니다."';
  readonly statType = '오염된 마법 자동인형';
  readonly weight = 30;

  readonly patterns: AttackPattern[] = [
    {
      id: 'guard_strike',
      name: '경비 타격',
      description: '12의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 12, s),
    },
    {
      id: 'defense_stance',
      name: '방어 자세',
      description: '방어도 14 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 14; },
    },
  ];

  constructor() { super(80); }
}
