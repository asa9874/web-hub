import Phaser from 'phaser';
import { HubScene } from './scenes/HubScene';
import { BattleScene } from './scenes/BattleScene';
import { DialogueScene } from './scenes/DialogueScene';
import { VictoryScene } from './scenes/VictoryScene';
import { CardRewardScene } from './scenes/CardRewardScene';
import { PileViewerScene } from './scenes/PileViewerScene';
import { RestScene } from './scenes/RestScene';
import { RelicRewardScene } from './scenes/RelicRewardScene';
import { ShopScene } from './scenes/ShopScene';
import { EventScene } from './scenes/EventScene';
import { MapScene } from './scenes/MapScene';
import { ToastScene } from './scenes/ToastScene';
import { LoreBookScene } from './scenes/LoreBookScene';

// 씬 배열의 첫 번째(HubScene)가 자동으로 시작됨. ToastScene은 HubScene에서 launch됨.
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: '#1A0A2E',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720,
  },
  scene: [HubScene, BattleScene, DialogueScene, VictoryScene, CardRewardScene, PileViewerScene, RestScene, RelicRewardScene, ShopScene, EventScene, MapScene, ToastScene, LoreBookScene],
  parent: 'app',
};

new Phaser.Game(config);
