import { useGamePhaseStore } from '../../state/gamePhaseStore.ts';
import { useSaveLoad }        from '../../hooks/useSaveLoad.ts';

const LOGO = `
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │         //  부  정  의  탑  //                       │
  │                                                      │
  │     POST-APOCALYPSE  ·  TEXT RPG  ·  서울            │
  │                                                      │
  └──────────────────────────────────────────────────────┘
`.trimStart();

export default function MainMenu() {
  const toPrologue = useGamePhaseStore(s => s.toPrologue);
  const toPlaying  = useGamePhaseStore(s => s.toPlaying);
  const { load, hasSave } = useSaveLoad();

  const handleContinue = () => {
    load();
    toPlaying();
  };

  return (
    <div id="main-menu">
      <pre id="mm-logo">{LOGO}</pre>

      <div id="mm-tagline">오염이 퍼지고 있다. 당신은 아직 살아있다.</div>

      <div id="mm-buttons">
        <button className="mm-btn" onClick={toPrologue}>
          [ 게  임  시  작 ]
        </button>
        {hasSave() && (
          <button className="mm-btn mm-btn--continue" onClick={handleContinue}>
            [ 이  어  하  기 ]
          </button>
        )}
      </div>

      <div id="mm-footer">
        Space · Click to advance  //  ESC to open map
      </div>
    </div>
  );
}
