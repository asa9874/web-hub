import Phaser from 'phaser';
import { StartScene } from './scenes/StartScene';
import { GameScene } from './scenes/GameScene';
import { ClearScene } from './scenes/ClearScene';
import { TestScene } from './scenes/TestScene';
import { PatternTestScene } from './scenes/PatternTestScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 480,
  height: 640,
  backgroundColor: '#0a0a0a',
  physics: {
    default: 'arcade',
    arcade: { debug: false, gravity: { x: 0, y: 0 } },
  },
  scene: [StartScene, GameScene, ClearScene, TestScene, PatternTestScene],
};

new Phaser.Game(config);
