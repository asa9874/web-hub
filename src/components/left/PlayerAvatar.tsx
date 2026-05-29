const AVATAR = `   _________
  |  .   .  |
  |  |___|  |
  |   ___   |
  |  /   \\  |
  |_________|`;

export default function PlayerAvatar() {
  return (
    <>
      <pre id="player-avatar">{AVATAR}</pre>
      <div id="player-name">[ 생 존 자 ]</div>
    </>
  );
}
