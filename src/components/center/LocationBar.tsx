import { useNavigationStore } from '../../state/navigationStore.ts';

export default function LocationBar() {
  const { playerLocId, currentLoc, currentRoom } = useNavigationStore();
  const loc  = currentLoc();
  const room = currentRoom();

  return (
    <div id="location-bar">
      <span className="loc-icon">◈</span>
      <span id="loc-main">{playerLocId}{'  '}{loc?.name ?? '—'}</span>
      <span className="loc-sep">─</span>
      <span id="loc-room">{room?.name ?? '—'}</span>
    </div>
  );
}
