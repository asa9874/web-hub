import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 성좌의 수호자 — 별자리 수호 정령 | Act 3 엘리트 | 가중치 35 */
export class ConstellationGuardian extends SeqMonster {
  readonly name = '성좌의 수호자';
  readonly subtitle = '별자리 수호 정령 | Act 3 엘리트';
  readonly lore = '별의 심장을 구성하는 성좌에 깃든 수호 정령. 키 2미터의 이 존재는 투명한 수정 갑옷과 그 내부에서 방사되는 성좌 빛으로 온몸이 구성되어 있다. 갑주의 소재는 완전히 투명하며, 내부를 통해 성좌 에너지가 직접 보인다. 그 색조는 별자리별로 다르다—청백색, 금빛, 붉은빛이 영역마다 달라진다. 가장 압도적인 것은 어깨 위다—12개의 성좌 문양이 광원체 형태로 어깨 주변을 공전하고 있으며, 각 문양의 크기는 주먹만 하다. 공격할 때 이 공전체 중 하나가 지정 방향으로 발사된다. 눈은 두 개이며 완벽하게 황금색이고, 동공은 별 형태다. 이 존재를 쓰러뜨리면 공전하던 성좌 광원들이 하나씩 꺼지며 사라진다.';
  readonly quote = '"당신이 보는 별자리는 모두 나의 방패입니다."';
  readonly statType = '별자리 수호 정령';
  readonly weight = 35;
  readonly isElite = true;

  readonly patterns: AttackPattern[] = [
    {
      id: 'constellation_strike',
      name: '별자리 강타',
      description: '28의 피해 + 취약 2 부여',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 28, s); addStatus(t, 'vulnerable', 2); },
    },
    {
      id: 'cosmic_shield',
      name: '우주 방패',
      description: '방어도 30 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 30; },
    },
    {
      id: 'constellation_combo',
      name: '성좌 연격',
      description: '18의 피해 2회',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 18, s); applyDamage(t, 18, s); },
    },
  ];

  constructor() { super(220); }
}
