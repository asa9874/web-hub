import PanelTitle             from '../ui/PanelTitle.tsx';
import { useMapUiStore }       from '../../state/mapUiStore.ts';
import { useGameStore }        from '../../state/useGameStore.ts';
import { useLogStore }         from '../../state/logStore.ts';
import { useTimeStore }        from '../../state/timeStore.ts';
import { useSettingsStore }    from '../../state/settingsStore.ts';
import { useSaveLoad }         from '../../hooks/useSaveLoad.ts';

export default function NavPanel() {
  const openMap        = useMapUiStore(s => s.openMap);
  const { dispatch }   = useGameStore();
  const toggleLog      = useLogStore(s => s.toggleLog);
  const toggleSettings = useSettingsStore(s => s.togglePanel);
  const { save, load } = useSaveLoad();

  const handleReset = () => {
    dispatch({ type: 'RESET' });
    useTimeStore.getState().reset();
    useLogStore.getState().clear();
  };

  return (
    <aside id="right-panel">
      <PanelTitle>[ 메 뉴 ]</PanelTitle>
      <nav id="nav-panel">
        <button className="nav-btn" id="btn-map"      onClick={openMap}>지  도</button>
        <button className="nav-btn" id="btn-log"      onClick={toggleLog}>기 록 지</button>
        <button className="nav-btn" id="btn-save"     onClick={save}>저  장</button>
        <button className="nav-btn" id="btn-load"     onClick={load}>불러오기</button>
        <button className="nav-btn" id="btn-settings" onClick={toggleSettings}>설  정</button>
        <button className="nav-btn nav-btn--danger" id="btn-new-game"
                onClick={handleReset}>처음으로</button>
      </nav>
    </aside>
  );
}
