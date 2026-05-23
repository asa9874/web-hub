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

// 씬 배열의 첫 번째(HubScene)가 자동으로 시작됨
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: '#0d1117',
  scene: [HubScene, BattleScene, DialogueScene, VictoryScene, CardRewardScene, PileViewerScene, RestScene, RelicRewardScene, ShopScene, EventScene, MapScene],
  parent: 'app',
};

new Phaser.Game(config);
