import { useEffect, useRef } from 'react';
import { useNavigationStore } from '../state/navigationStore.ts';
import { useGameStore }       from '../state/useGameStore.ts';
import { ROOM_SCENES }        from '../data/room-scenes.ts';

// 방 이동을 감지해 해당 방의 씬을 자동으로 로드한다.
// 씬이 없는 방으로 이동하면 현재 씬을 유지한다.
export function useRoomSceneSync() {
  const playerRoomId              = useNavigationStore(s => s.playerRoomId);
  const { dispatch }              = useGameStore();
  const prevRoomRef               = useRef<string>('');

  useEffect(() => {
    if (playerRoomId === prevRoomRef.current) return;
    prevRoomRef.current = playerRoomId;

    const sceneId = ROOM_SCENES[playerRoomId];
    if (!sceneId) return;

    dispatch({ type: 'ENTER_ROOM', sceneId });
  }, [playerRoomId, dispatch]);
}
