import { memo } from 'react';

const AVATAR = `   _________
  |  .   .  |
  |  |___|  |
  |   ___   |
  |  /   \\  |
  |_________|`;

const PlayerAvatar = memo(function PlayerAvatar() {
  return (
    <>
      <pre id="player-avatar">{AVATAR}</pre>
      <div id="player-name">[ 생 존 자 ]</div>
    </>
  );
});

export default PlayerAvatar;
