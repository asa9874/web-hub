/* eslint-disable @typescript-eslint/triple-slash-reference -- Phaser's published alias uses a global namespace plus a module named 'phaser'. */
// npm alias keeps the legacy Phaser 4 projects and Phaser 3 runtime separate.
/// <reference path="../../node_modules/phaser3/types/phaser.d.ts" />
declare module 'phaser3' {
  import Phaser from 'phaser';
  export default Phaser;
}
