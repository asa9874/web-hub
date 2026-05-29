import { useEffect, useRef } from 'react';
import { initMap, setPlayerPosition } from '../../ui/render-map.ts';
import { useNavigationStore }         from '../../state/navigationStore.ts';

export default function MapOverlay() {
  const initialized = useRef(false);
  const playerLocId  = useNavigationStore(s => s.playerLocId);
  const playerRoomId = useNavigationStore(s => s.playerRoomId);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    initMap();
  }, []);

  useEffect(() => {
    setPlayerPosition(playerLocId, playerRoomId);
  }, [playerLocId, playerRoomId]);

  return null;
}
