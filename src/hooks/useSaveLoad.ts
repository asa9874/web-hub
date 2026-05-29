import { useGameStore }             from '../state/useGameStore.ts';
import { useNavigationStore }        from '../state/navigationStore.ts';
import { suppressRoomSceneSync }     from './useRoomSceneSync.ts';
import type { PlayerState }          from '../types/index.ts';

const SAVE_KEY = 'text_game_save_v1';

interface SaveData {
  version: 1;
  savedAt: string;
  player:  PlayerState;
  locId:   string;
  roomId:  string;
}

export function useSaveLoad() {
  const { state, dispatch }                         = useGameStore();
  const { playerLocId, playerRoomId,
          travelToLoc, moveToRoom }                 = useNavigationStore();

  const save = () => {
    const data: SaveData = {
      version: 1,
      savedAt: new Date().toISOString(),
      player:  state,
      locId:   playerLocId,
      roomId:  playerRoomId,
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    dispatch({ type: 'SET_NARRATIVE', text: `[저장 완료]  ${new Date().toLocaleString('ko-KR')}` });
  };

  const load = () => {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) {
      dispatch({ type: 'SET_NARRATIVE', text: '[불러오기 실패]  저장된 데이터가 없습니다.' });
      return;
    }
    let data: SaveData;
    try { data = JSON.parse(raw) as SaveData; }
    catch { dispatch({ type: 'SET_NARRATIVE', text: '[불러오기 실패]  저장 파일이 손상됐습니다.' }); return; }

    // useRoomSceneSync가 이동 감지 시 씬을 덮어쓰지 않도록 한 번 억제
    suppressRoomSceneSync();

    if (data.locId !== playerLocId) travelToLoc(data.locId);
    moveToRoom(data.roomId);
    dispatch({ type: 'LOAD_SAVE', data: data.player });
    dispatch({
      type: 'SET_NARRATIVE',
      text: `[불러오기 완료]  저장 시각: ${new Date(data.savedAt).toLocaleString('ko-KR')}`,
    });
  };

  const hasSave = () => !!localStorage.getItem(SAVE_KEY);

  return { save, load, hasSave };
}
