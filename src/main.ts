import Phaser from 'phaser';
import { HubScene } from './scenes/HubScene';
import { BattleScene } from './scenes/BattleScene';
import { DialogueScene } from './scenes/DialogueScene';

// 씬 배열의 첫 번째(HubScene)가 자동으로 시작됨
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#0d1117',
  scene: [HubScene, BattleScene, DialogueScene],
  parent: 'app',
};

new Phaser.Game(config);
