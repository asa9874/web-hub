import PanelTitle      from '../ui/PanelTitle.tsx';
import { useMapUiStore } from '../../state/mapUiStore.ts';

export default function NavPanel() {
  const openMap = useMapUiStore(s => s.openMap);

  return (
    <aside id="right-panel">
      <PanelTitle>[ 메 뉴 ]</PanelTitle>
      <nav id="nav-panel">
        <button className="nav-btn" id="btn-map" onClick={openMap}>지  도</button>
        <button className="nav-btn" id="btn-log">기 록 지</button>
        <button className="nav-btn" id="btn-save">저  장</button>
        <button className="nav-btn" id="btn-load">불러오기</button>
        <button className="nav-btn" id="btn-settings">설  정</button>
        <button className="nav-btn nav-btn--danger" id="btn-new-game">처음으로</button>
      </nav>
    </aside>
  );
}
