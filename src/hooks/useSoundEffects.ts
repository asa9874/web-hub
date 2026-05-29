import { useEffect, useRef } from 'react';
import { useGameStore }      from '../state/useGameStore.ts';
import { sound }             from '../utils/sound.ts';

/**
 * 게임 상태 변화를 감지해 자동으로 효과음을 재생한다.
 * GameUI 최상단에 한 번만 마운트한다.
 */
export function useSoundEffects() {
  const { state } = useGameStore();

  const prevRef = useRef({
    hp:         state.hp,
    corruption: state.corruption,
    isAlive:    state.isAlive,
    invLen:     state.inventory.length,
    sceneId:    state.currentSceneId,
    mounted:    false,
  });

  useEffect(() => {
    const p = prevRef.current;

    // 첫 마운트는 무시 (초기 상태로 소리 재생 방지)
    if (!p.mounted) {
      prevRef.current.mounted = true;
      return;
    }

    const { hp, corruption, isAlive, inventory, currentSceneId } = state;
    const invLen = inventory.length;

    if (!isAlive && p.isAlive) {
      // 사망 (HP or 오염도)
      sound.death();
    } else {
      if (hp < p.hp)                   sound.damage();
      if (corruption > p.corruption)   sound.corruption();
    }

    if (invLen > p.invLen)             sound.pickup();
    if (currentSceneId !== p.sceneId)  sound.scene();

    prevRef.current = { hp, corruption, isAlive, invLen, sceneId: currentSceneId, mounted: true };
  });
}
