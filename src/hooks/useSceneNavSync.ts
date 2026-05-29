import { useEffect, useRef } from 'react';
import { useGameStore }       from '../state/useGameStore.ts';
import { useNavigationStore } from '../state/navigationStore.ts';
import { LOCATIONS }          from '../data/map-data.ts';
import { SCENE_ROOMS }        from '../data/room-scenes.ts';
import { suppressRoomSceneSync } from './useRoomSceneSync.ts';

// 씬 변경(CHOOSE 등)을 감지해 해당 씬의 방으로 위치바를 자동 이동한다.
// SCENE_ROOMS에 없는 씬이면 현재 위치 유지.
export function useSceneNavSync() {
  const { state: { currentSceneId } } = useGameStore();
  const playerLocId  = useNavigationStore(s => s.playerLocId);
  const playerRoomId = useNavigationStore(s => s.playerRoomId);
  const prevScene    = useRef<string>('');

  useEffect(() => {
    if (currentSceneId === prevScene.current) return;
    prevScene.current = currentSceneId;

    const targetRoomId = SCENE_ROOMS[currentSceneId];
    if (!targetRoomId || targetRoomId === playerRoomId) return;

    const loc = LOCATIONS.find(l => l.rooms.some(r => r.id === targetRoomId));
    if (!loc) return;

    // useRoomSceneSync가 이 이동을 감지해 씬을 덮어쓰지 않도록 억제
    suppressRoomSceneSync();

    const store = useNavigationStore.getState();
    if (loc.id !== playerLocId) store.travelToLoc(loc.id);
    store.moveToRoom(targetRoomId);
  }, [currentSceneId, playerRoomId, playerLocId]);
}
