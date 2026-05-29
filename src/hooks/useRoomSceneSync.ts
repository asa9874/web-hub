import { useEffect, useRef } from 'react';
import { useNavigationStore } from '../state/navigationStore.ts';
import { useGameStore }       from '../state/useGameStore.ts';
import { ROOM_SCENES }        from '../data/room-scenes.ts';
import { LOCATIONS }          from '../data/map-data.ts';

// 불러오기 직후 한 번 sync를 건너뛰기 위한 플래그
let _suppressNext = false;
export function suppressRoomSceneSync() { _suppressNext = true; }

const DANGER_PENALTIES: Record<string, { hp: number; corruption: number; msg: string }> = {
  danger: { hp: -10, corruption: 15, msg: '위험 구역에 진입했다. 오염이 몸을 잠식해온다.' },
};

export function useRoomSceneSync() {
  const playerRoomId = useNavigationStore(s => s.playerRoomId);
  const { dispatch } = useGameStore();
  const prevRoomRef  = useRef<string>('');

  useEffect(() => {
    if (playerRoomId === prevRoomRef.current) return;
    prevRoomRef.current = playerRoomId;

    if (_suppressNext) { _suppressNext = false; return; }

    const room    = LOCATIONS.flatMap(l => l.rooms).find(r => r.id === playerRoomId);
    const penalty = room ? DANGER_PENALTIES[room.type] : undefined;
    const sceneId = ROOM_SCENES[playerRoomId];

    if (penalty) {
      dispatch({ type: 'ROOM_ENTER', hpDelta: penalty.hp, corruptionDelta: penalty.corruption,
                 message: penalty.msg, sceneId });
    } else if (sceneId) {
      dispatch({ type: 'ENTER_ROOM', sceneId });
    }
  }, [playerRoomId, dispatch]);
}
