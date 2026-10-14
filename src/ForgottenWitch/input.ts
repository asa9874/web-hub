import Phaser from 'phaser3';
export class TheaterInput {
  private keys: Record<string,Phaser.Input.Keyboard.Key>;
  private edges=new Set<string>();
  constructor(scene:Phaser.Scene) {
    this.keys=scene.input.keyboard!.addKeys('A,D,LEFT,RIGHT,SPACE,E,ENTER,ESC,F,J,SHIFT,K') as Record<string,Phaser.Input.Keyboard.Key>;
    scene.input.keyboard!.addCapture(['SPACE','LEFT','RIGHT','UP','DOWN']);
    // Preserve short taps even if keyup arrives before the next render frame.
    for(const name of ['SPACE','E','ENTER','ESC','F','J','SHIFT','K'])this.keys[name].on('down',(_key:Phaser.Input.Keyboard.Key,event:KeyboardEvent)=>{
      if(!event.repeat)this.edges.add(name);
    });
  }
  read() {
    const frame={
      direction:Number(this.keys.D.isDown||this.keys.RIGHT.isDown)-Number(this.keys.A.isDown||this.keys.LEFT.isDown),
      jump:this.edges.has('SPACE'), interact:this.edges.has('E'),
      jumpHeld:this.keys.SPACE.isDown,
      next:this.edges.has('ENTER'), escape:this.edges.has('ESC'),
      attack:this.edges.has('F')||this.edges.has('J'),
      roll:this.edges.has('SHIFT')||this.edges.has('K'),
    };
    this.edges.clear();return frame;
  }
  // Clear queued actions, but retain physical held keys so movement resumes naturally.
  clear() { this.edges.clear(); }
}
