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
import { TitleScene } from './scenes/TitleScene';
import { PreloadScene } from './scenes/PreloadScene';
import { SettingsScene } from './scenes/SettingsScene';

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
  scene: [PreloadScene, TitleScene, HubScene, BattleScene, DialogueScene, VictoryScene, CardRewardScene, PileViewerScene, RestScene, RelicRewardScene, ShopScene, EventScene, MapScene, ToastScene, LoreBookScene, SettingsScene],
  parent: 'app',
};

new Phaser.Game(config);
