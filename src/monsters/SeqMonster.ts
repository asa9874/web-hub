import type { AttackPattern } from '../types';
import { Monster } from './Monster';

/**
 * 패턴을 가중치 랜덤이 아닌 순차적으로 반복 실행하는 몬스터 기반 클래스.
 * ①②③… 순서가 명확한 Act 1 몬스터에 사용.
 */
export abstract class SeqMonster extends Monster {
  private _seqIdx = 0;

  override selectPattern(): AttackPattern {
    return this.patterns[this._seqIdx++ % this.patterns.length];
  }
}
