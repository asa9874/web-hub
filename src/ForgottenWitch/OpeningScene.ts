import Phaser from 'phaser3';
import {OpeningAudio} from './OpeningAudio';
import {createOpening,enterOpening,tickOpening,skipOpening,fallDepth} from './openingModel';
import {LIBRARY_NOTES,OPENING_CREDITS} from './openingData';
import type {OpeningStage} from './openingData';
import {StageRig} from './rig';
import {createOpeningProps} from './OpeningProps';

export interface OpeningView {stage:OpeningStage;paused:boolean;elapsed:number}
type Image=Phaser.GameObjects.Image;
const ease=(v:number)=>Phaser.Math.SmoothStep(v,0,1);
const clamp=(v:number)=>Phaser.Math.Clamp(v,0,1);
/** One continuous scene: world props, cutaway illustrations and tutorial share the renderer. */
export class OpeningScene extends Phaser.Scene {
 readonly state=createOpening();
 private audio:OpeningAudio;
 private report:(v:OpeningView|null)=>void;
 private finish:()=>void;
 private rig!:StageRig;
 private groups:Record<string,Phaser.GameObjects.GameObject[]>={library:[],dark:[],cinema:[],forest:[]};
 private witch!:Image;private reading!:Image;private book!:Image;private candle!:Phaser.GameObjects.Arc;
 private clock!:Phaser.GameObjects.Text;private floor:Image[]=[];private step!:Image;private floorBacking!:Phaser.GameObjects.Rectangle;
 private door:Image[]=[];private beam!:Image;
 private forest:Image[]=[];private falling!:Image;private fallMesh?:Phaser.GameObjects.Mesh;private vertices:{x:number;y:number}[]=[];
 private light!:Phaser.GameObjects.Graphics;private pages!:Phaser.GameObjects.Graphics;
 private shade!:Phaser.GameObjects.Rectangle;private note!:Phaser.GameObjects.Text;
 private bookGuide!:Phaser.GameObjects.Text;
 private guides!:Phaser.GameObjects.Text[];private title!:Phaser.GameObjects.Text;
 private credits:Phaser.GameObjects.Text[]=[];
 private keys!:Record<string,Phaser.Input.Keyboard.Key>;
 private edges=new Set<string>();
 private lastStage='';private lastReport='';private ended=false;private focusFrom=0;
 constructor(stage:OpeningStage,muted:boolean,report:(v:OpeningView|null)=>void,finish:()=>void){super('opening');enterOpening(this.state,stage);this.audio=new OpeningAudio();this.audio.muted=muted;this.report=report;this.finish=finish;}
 create(){
  const cam=this.cameras.main;cam.setBackgroundColor('#16131e');this.rig=new StageRig(this);createOpeningProps(this);
  const add=(group:string,img:Image)=>{this.groups[group].push(img);return img;};
  add('library',this.add.image(1280,360,'opening-library-back').setDisplaySize(2560,720).setDepth(0));
  for(const x of [260,1360,2010]){const shelf=add('library',this.add.image(x,570,'opening-library-shelf').setOrigin(.5,1).setDisplaySize(310,480).setDepth(3));this.rig.attach(shelf,'library-shelf-'+x,'bottom',.5,.85,8);}
  this.groups.library.push(this.add.tileSprite(1700,660,3400,180,'paper').setTint(0xe9c79b).setDepth(6));
  const desk=add('library',this.add.image(580,590,'opening-library-desk').setOrigin(.5,1).setDisplaySize(420,290).setDepth(9));this.rig.attach(desk,'reading-desk','bottom',.5,.85,9);
  this.reading=add('library',this.add.image(570,510,'opening-witch-reading').setOrigin(.5,1).setDisplaySize(195,230).setDepth(10));this.rig.attach(this.reading,'seated-witch','bottom',.5,.85,8);
  this.book=add('library',this.add.image(1600,470,'opening-book-prop').setDisplaySize(85,105).setDepth(9));this.rig.attach(this.book,'special-book','bottom',.5,.8,6);
  const pedestal=add('library',this.add.image(1600,570,'bridge').setOrigin(.5,1).setDisplaySize(150,65).setDepth(6));this.rig.attach(pedestal,'book-plinth','bottom');
  this.clock=this.add.text(1020,280,'◷',{fontFamily:'serif',fontSize:'100px',color:'#e6c79c'}).setOrigin(.5).setDepth(4);this.groups.library.push(this.clock);
  const pendulum=add('library',this.add.image(1020,365,'star').setDisplaySize(30,45).setDepth(4));this.rig.attach(pendulum,'clock-pendulum','top',.5,.1,3);this.tweens.add({targets:pendulum,angle:{from:-9,to:9},duration:1400,yoyo:true,repeat:-1});
  this.candle=this.add.circle(710,342,9,0xffdf9c,.6).setDepth(12);this.groups.library.push(this.candle);
  this.groups.dark.push(this.add.rectangle(1700,360,3400,720,0x17151e).setDepth(-1));
  for(let x=80;x<3400;x+=160){const f=add('dark',this.add.image(x,570,'bridge').setOrigin(.5,0).setDisplaySize(163,46).setTint(0x978999).setDepth(6));this.floor.push(f);this.rig.attach(f,'tutorial-floor-'+x,'bottom',.5,.5,8);}
  this.floorBacking=this.add.rectangle(1700,800,3400,380,0x24202b).setDepth(6);this.groups.dark.push(this.floorBacking);
  const step=add('dark',this.add.image(990,520,'bridge').setOrigin(.5,0).setDisplaySize(180,76).setDepth(6));this.step=step;this.rig.attach(step,'tutorial-step','bottom');
  const tex=this.textures.get('opening-great-door'),src=tex.getSourceImage() as HTMLCanvasElement;const half=Math.floor(src.width/2);if(!tex.has('left')){tex.add('left',0,0,0,half,src.height);tex.add('right',0,half,0,src.width-half,src.height);}
  for(const [i,x] of [2300,2540].entries()){const d=add('dark',this.add.image(x,575,'opening-great-door',i===0?'left':'right').setOrigin(.5,1).setDisplaySize(245,950).setDepth(8));this.door.push(d);this.rig.attach(d,'great-door-'+x,'top',.5,.2,14);}
  this.beam=add('dark',this.add.image(2420,260,'opening-door-glow').setDisplaySize(120,900).setAlpha(.45).setDepth(7));
  this.guides=[this.add.text(640,315,'A  ←     →  D',{fontFamily:'WT Readable',fontSize:'32px',color:'#f3e5ce',stroke:'#332c3f',strokeThickness:4}).setOrigin(.5).setDepth(12),this.add.text(850,395,'SPACE  ↥',{fontFamily:'WT Readable',fontSize:'30px',color:'#f3e5ce',stroke:'#332c3f',strokeThickness:4}).setOrigin(.5).setDepth(12)];this.groups.dark.push(...this.guides);
  this.witch=this.add.image(580,570,'witch-puppet').setOrigin(.5,1).setDepth(10);this.witch.setDisplaySize(170,198);this.rig.attach(this.witch,'opening-player','bottom',.5,.79,9);
  this.falling=add('cinema',this.add.image(640,330,'opening-witch-falling').setScrollFactor(0).setDepth(24));
  if(this.game.renderer.type===Phaser.WEBGL){
    this.fallMesh=this.add.mesh(640,330,'opening-witch-falling').setScrollFactor(0).setDepth(24);this.fallMesh.setOrtho();this.fallMesh.hideCCW=false;this.fallMesh.ignoreDirtyCache=true;
    Phaser.Geom.Mesh.GenerateGridVerts({mesh:this.fallMesh,texture:this.fallMesh.texture,width:300/720,height:450/720,widthSegments:12,heightSegments:16});
    this.vertices=this.fallMesh.vertices.map(v=>({x:v.x,y:v.y}));this.groups.cinema.push(this.fallMesh);
  }
  for(const credit of OPENING_CREDITS){const c=this.add.text(credit.side==='left'?125:850,480,credit.role+'\n\n'+credit.name,{fontFamily:'WT Readable',fontSize:'22px',color:'#e9ddcc',lineSpacing:6}).setScrollFactor(0).setDepth(27);this.groups.cinema.push(c);this.credits.push(c);}
  ['forest-back','forest-middle','forest-front'].forEach((id,i)=>{const f=add('forest',this.add.image(640,360,'opening-'+id).setDisplaySize(1360,765).setScrollFactor(0).setDepth(i===2?32:21+i));this.forest.push(f);});
  this.title=this.add.text(640,310,'CHAPTER 01\n\n막이 오르지 않는 숲\n\nThe Forest Where the Curtain Never Rises',{fontFamily:'WT Readable',fontSize:'36px',align:'center',color:'#fff4dd',stroke:'#564453',strokeThickness:5,lineSpacing:12}).setOrigin(.5).setScrollFactor(0).setDepth(40);this.groups.forest.push(this.title);
  this.light=this.add.graphics().setDepth(18).setScrollFactor(0);this.pages=this.add.graphics().setDepth(35).setScrollFactor(0);
  this.shade=this.add.rectangle(640,360,1280,720,0xffffff,0).setScrollFactor(0).setDepth(50);
  this.note=this.add.text(640,635,'',{fontFamily:'WT Readable',fontSize:'26px',color:'#fff0d7',stroke:'#221d2a',strokeThickness:5}).setOrigin(.5).setScrollFactor(0).setDepth(45);
  this.bookGuide=this.add.text(0,0,'',{fontFamily:'WT Readable',fontSize:'28px',align:'center',color:'#fff2c9',stroke:'#342736',strokeThickness:5,lineSpacing:6}).setOrigin(.5).setScrollFactor(0).setDepth(45);
  this.keys=this.input.keyboard!.addKeys('A,D,LEFT,RIGHT,SPACE,E,ESC') as Record<string,Phaser.Input.Keyboard.Key>;this.input.keyboard!.addCapture(['SPACE','LEFT','RIGHT','A','D','E']);
  for(const name of ['SPACE','E','ESC'])this.keys[name].on('down',(_key:Phaser.Input.Keyboard.Key,event:KeyboardEvent)=>{if(!event.repeat)this.edges.add(name);});
  const blur=()=>this.setPaused(true);this.game.events.on(Phaser.Core.Events.BLUR,blur);
  let cleaned=false;const cleanup=()=>{if(cleaned)return;cleaned=true;this.game.events.off(Phaser.Core.Events.BLUR,blur);this.audio.destroy();delete this.game.canvas.dataset.opening;delete this.game.canvas.dataset.openingRig;};this.events.once('shutdown',cleanup);this.events.once('destroy',cleanup);
 }
 setMuted(muted:boolean){this.audio.muted=muted;}
 setPaused(value:boolean){this.state.paused=value;if(value)this.audio.suspend();else this.audio.resume();this.publish();}
 skip(){skipOpening(this.state);if(this.state.complete)this.done();}
 jumpTo(stage:OpeningStage){enterOpening(this.state,stage);this.state.paused=false;this.audio.resume();this.lastStage='';this.publish();}
 private done(){if(this.ended)return;this.ended=true;this.report(null);this.finish();this.scene.stop();}
 private publish(){const v={stage:this.state.stage,paused:this.state.paused,elapsed:Math.floor(this.state.elapsed)};const key=JSON.stringify(v);if(key!==this.lastReport){this.lastReport=key;this.report(v);}}
 update(_time:number,delta:number){
  if(!this.keys||this.ended)return;const s=this.state,dt=Math.min(.05,delta/1000),k=this.keys;
  if(this.edges.has('ESC'))this.setPaused(!s.paused);
  const dir=Number(k.D.isDown||k.RIGHT.isDown)-Number(k.A.isDown||k.LEFT.isDown),jump=this.edges.has('SPACE'),interact=this.edges.has('E');this.edges.clear();
  if(s.stage==='library-intro'&&dir&&!s.paused&&s.elapsed>3)enterOpening(s,'library');
  if(s.stage==='library'&&interact){const prop=LIBRARY_NOTES.find(p=>Math.abs(p.x-s.x)<115);if(prop){s.note=prop.text;s.noteTime=4;this.audio.cue('page');}}
  if(!s.paused){let remaining=dt,first=true;while(remaining>0){const step=Math.min(1/120,remaining);tickOpening(s,step,dir,first&&jump,k.SPACE.isDown,first&&interact);remaining-=step;first=false;}this.audio.update(s.stage,s.elapsed,dt);this.renderStage(dt);}
  this.publish();this.game.canvas.dataset.opening=JSON.stringify({...s,visual:{fallFaces:this.fallMesh?.totalRendered??null,credits:this.credits.filter(c=>c.visible).length,zoom:this.cameras.main.zoom,cameraX:this.cameras.main.scrollX,cameraY:this.cameras.main.scrollY,bookVisible:this.book.visible,rays:s.stage==='book-burst'?16:0,whiteAlpha:this.shade.alpha,whiteWidth:this.shade.displayWidth*this.cameras.main.zoom,whiteHeight:this.shade.displayHeight*this.cameras.main.zoom,bookGuide:this.bookGuide.visible,paperSpeed:s.stage==='fall'?260+fallDepth(s.elapsed)*1250:0}});this.game.canvas.dataset.openingRig=JSON.stringify(this.rig.snapshot());if(s.complete)this.done();
 }
 private renderStage(dt:number){
  const s=this.state,t=s.elapsed,cam=this.cameras.main;
  const lib=s.stage.startsWith('library')||s.stage==='book-focus'||s.stage==='book-burst',dark=['fall','landing','tutorial','door'].includes(s.stage),forest=s.stage==='chapter';
  for(const [key,list] of Object.entries(this.groups)){const visible=key==='library'?lib:key==='dark'?dark:key==='cinema'?s.stage==='fall':forest;for(const obj of list)(obj as Image).setVisible(visible);}
  if(this.lastStage!==s.stage){this.lastStage=s.stage;this.focusFrom=cam.scrollX;cam.setZoom(1);cam.scrollY=0;if(!lib&&s.stage!=='tutorial'&&s.stage!=='door')cam.scrollX=0;if(s.stage==='landing')cam.shake(280,.004);}
  this.shade.setAlpha(0).setFillStyle(0xffffff);this.light.clear();this.pages.clear();this.note.setText(s.noteTime>0?s.note:'');
  this.bookGuide.setVisible(s.stage==='library');
  this.credits.forEach(c=>c.setVisible(false));this.fallMesh?.setVisible(s.stage==='fall');this.falling.setVisible(s.stage==='fall');this.step.setVisible(s.stage==='tutorial');this.floorBacking.setVisible(['landing','tutorial','door'].includes(s.stage));
  this.witch.setVisible(lib||['landing','tutorial','door','chapter'].includes(s.stage)).setAlpha(1).setFlipX(s.facing<0).setRotation(0).setTexture('witch-puppet').setDisplaySize(170,198).setPosition(s.x,s.y);
  this.reading.setVisible(s.stage==='library-intro');
  if(lib){
   this.candle.setAlpha(.45+Math.sin(s.total*7)*.08);this.clock.setRotation(Math.sin(s.total*.5)*.004);
   if(s.stage==='library-intro'){this.witch.setVisible(false);cam.scrollX=0;this.reading.setRotation(Math.sin(t)*.01);}
   else if(s.stage==='book-focus'){const q=ease(clamp(t/.8));cam.scrollX=Phaser.Math.Linear(this.focusFrom,960,q);this.witch.x=Phaser.Math.Linear(s.x,1535,ease(clamp(t/1.2)));this.witch.setTexture('opening-witch-push').setDisplaySize(170,198).setRotation(-.08);this.book.setPosition(1600,470-Math.sin(clamp((t-.8)/2)*Math.PI)*58).setRotation(-clamp((t-1.5)/1.3)*.2);}
   else if(s.stage==='book-burst'){
    const power=ease(clamp(t/5)),reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches,shake=reduced?0:power*5;
    cam.scrollX=960+Math.sin(t*39)*shake;cam.scrollY=Math.sin(t*31)*shake*.55;
    this.witch.setPosition(1535,570).setRotation(-.06-Math.sin(t*3)*.012);
    this.book.setPosition(1600,470).setRotation(-.2);
    const x=this.book.x-cam.scrollX,y=this.book.y-cam.scrollY-24;
    for(let i=0;i<16;i++){
     const angle=i*Math.PI/8+t*.035,spread=.025+(i%3)*.018,length=1450;
     this.light.fillStyle(i%3?0xfff5d8:0xffffff,(.025+power*.085)*(i%2?.7:1));
     this.light.fillTriangle(x,y,x+Math.cos(angle-spread)*length,y+Math.sin(angle-spread)*length,x+Math.cos(angle+spread)*length,y+Math.sin(angle+spread)*length);
    }
    for(let i=10;i>0;i--)this.light.fillStyle(0xfff7df,.018+power*.018).fillEllipse(x,y,25+i*(8+power*9),20+i*(6+power*7));
    this.shade.setAlpha(ease(clamp((t-5.5)/2.5)));this.note.setText('');
   }
   else {this.book.setPosition(1600,470).setRotation(Math.sin(s.total)*.02);const screen=s.x-cam.scrollX;if(screen>850)cam.scrollX+=Math.min(s.x-850-cam.scrollX,400*dt);if(screen<360)cam.scrollX-=Math.min(cam.scrollX,400*dt);if(Math.abs(s.vx)>12)this.witch.setTexture('witch-walk').setDisplaySize(178,198).setRotation(Math.sin(s.total*13)*.018).setY(s.y-Math.abs(Math.sin(s.total*13))*2);const near=Math.abs(s.x-1600)<125;this.note.setText(s.noteTime>0?s.note:near?'E · 낡은 책 펼치기':LIBRARY_NOTES.some(p=>Math.abs(p.x-s.x)<115)?'E · 살펴보기':'별 표지의 책을 찾아 읽어 보자.');const target=this.book.x-cam.scrollX;this.bookGuide.setPosition(Phaser.Math.Clamp(target,130,1140),near?335:365).setText(near?'스승님의 책\n↓  E':target>1140?'스승님의 책\n→':'스승님의 책\n↓').setY((near?335:365)+Math.sin(s.total*2.4)*5);}
   for(let i=0;i<28;i++){this.pages.fillStyle(0xffebc8,.15).fillCircle((i*137+s.total*7)%1280,90+(i*37+s.total*3)%450,1.2);}
  }
  if(s.stage==='whiteout'){this.shade.setFillStyle(0xffffff).setAlpha(1);this.shade.setFillStyle(Phaser.Display.Color.GetColor(...([255,255,255].map(c=>Math.round(c*(1-ease(clamp((t-.5)/3.5))))) as [number,number,number])));this.witch.setVisible(false);}
  if(s.stage==='fall'){
   const depth=fallDepth(t),final=ease(clamp((t-27)/3)),angle=Math.sin(t*.65)*.045+(t>12?Math.sin((t-12)*.3)*.09:0);this.falling.setVisible(!this.fallMesh).setDisplaySize(300*(1-final*.88),450*(1-final*.88)).setPosition(640,325+final*200).setRotation(angle);
   if(this.fallMesh){this.fallMesh.setVisible(true).setPosition(640,325+final*200).setScale(1-final*.88).setRotation(angle);this.fallMesh.vertices.forEach((v,i)=>{const p=this.vertices[i],edge=clamp((Math.abs(p.x)-.11)*5);v.x=p.x+Math.sin(t*2.8+p.y*10)*.014*edge;v.y=p.y+Math.sin(t*2+p.x*11)*.009*edge;});}
   this.floor.forEach(f=>f.setAlpha(clamp((t-26)/3)));this.door.forEach(d=>d.setVisible(false));this.beam.setVisible(false);this.guides.forEach(g=>g.setVisible(false));
   OPENING_CREDITS.forEach((credit,i)=>{const y=430+(fallDepth(credit.at)-depth)*2300;this.credits[i].setVisible(t>=credit.at-2&&t<25).setY(y).setAlpha(clamp((t-credit.at+2)/2)*clamp((25-t)/2));});
   for(let i=0;i<90;i++){const layer=.65+(i%5)*.24,speed=260+depth*1250,travel=(260*t+1250*t*depth/2.8)*layer,y=((i*89-travel)%1000+1000)%1000-140,x=(i*173)%1280+Math.sin(t*.7+i)*28;this.pages.fillStyle(i%2?0xc6b3ba:0xf3e5ce,.12+i%4*.065).fillRect(x,y,5+i%5*4,4+i%3*3);this.pages.fillStyle(0xf3e5ce,.025+i%3*.008).fillRect(x,y+5,3+i%4,Math.min(50,speed*layer*.025));}
  }
  if(['landing','tutorial','door'].includes(s.stage)){
   this.door.forEach(d=>d.setVisible(s.stage!=='landing'));this.beam.setVisible(s.stage!=='landing');this.guides.forEach(g=>g.setVisible(s.stage==='tutorial'));this.floor.forEach(f=>{f.setAlpha(1);f.y=570+(s.stage==='landing'?Math.sin(t*10)*Math.exp(-t*3)*12*Math.exp(-(((f.x-640)/250)**2)):0);});
   if(s.stage==='landing'){this.witch.x=640;this.witch.y=570;const stand=ease(clamp((t-3)/4));if(t<5)this.witch.setTexture('opening-witch-prone').setDisplaySize(235,120).setAlpha(1-stand*.45);else this.witch.setTexture(t<9?'witch-idle-hat':'witch-puppet').setDisplaySize(170,198).setScale(this.witch.scaleX,this.witch.scaleY*(.5+stand*.5));this.witch.setFlipX(t>9&&t<10.5);if(t>10&&t<14.8)this.note.setText('……여긴 어디지?');for(let i=0;i<25;i++){const age=t, y=570-Math.max(0,Math.sin(Math.min(Math.PI,age/(1+i%4*.4)*Math.PI))*90/(1+age*.2));this.pages.fillStyle(0xd6b38c,clamp(1-t/4)).fillRect(420+i*19+Math.sin(i)*t*7,y,9,5);}}
   else if(s.stage==='tutorial'){const target=Math.max(0,Math.min(1600,s.x-640));cam.scrollX+= (target-cam.scrollX)*(1-Math.exp(-3*dt));cam.setZoom(1-ease(clamp((s.x-1850)/420))*.18);this.witch.setTexture(!s.grounded?s.vy<0?'witch-jump':'witch-fall':Math.abs(s.vx)>12?'witch-walk':'witch-puppet').setDisplaySize(170,198).setRotation(s.grounded?Math.sin(s.total*13)*Math.min(.02,Math.abs(s.vx)*.00007):s.vy*.00006);this.guides[0].setText(`${s.left?'✓':'A ←'}     ${s.right?'✓':'→ D'}`).setAlpha(Math.max(0,this.guides[0].alpha+(s.left&&s.right?-dt*2:dt)));this.guides[1].setScale(Phaser.Math.Clamp(this.guides[1].scaleX+(s.crossed?-dt*3:dt),.001,1)).setAlpha(s.crossed?Math.max(0,this.guides[1].alpha-dt*2):1).setColor(s.jumped?'#e7cb98':'#f3e5ce');this.beam.setDisplaySize(120,900).setAlpha(.15+clamp((s.x-1200)/1100)*.65);this.door[0].x=2300;this.door[1].x=2540;if(s.x>2210)this.note.setText('E · 문을 밀기');}
   else {cam.scrollX=1600;cam.setZoom(.82);this.witch.setTexture('opening-witch-push').setDisplaySize(175,198).setPosition(2290+Math.sin(t*7)*2,570).setRotation(-.09);const open=ease(clamp((t-5)/4));this.door[0].x=2300-open*250;this.door[1].x=2540+open*250;this.door.forEach(d=>d.setAlpha(1-open*.35));this.beam.setDisplaySize(18+open*450,950).setAlpha(.35+open*.6);this.shade.setFillStyle(0xfff1d3).setAlpha(ease(clamp((t-7.7)/1.3)));}
  }
  if(forest){const arrive=ease(clamp((t-7)/4));this.forest.forEach((f,i)=>{f.x=640+Math.sin(t*.12+i)*(i+1)*12;f.y=350-(1-arrive)*40+(i===2?Math.sin(t*.6)*3:0);f.setDisplaySize(1360-arrive*80,765-arrive*45);});this.title.setAlpha(clamp(t/1.2)*clamp((7-t)/1.2));this.witch.setScrollFactor(0).setDepth(30).setPosition(200,820-arrive*250).setAlpha(arrive);this.shade.setFillStyle(0xfff1d3).setAlpha(1-clamp(t/1));for(let i=0;i<40;i++)this.pages.fillStyle(0xfff8d2,.25).fillCircle((i*97+t*9)%1280,100+(i*41+t*3)%560,1+i%2);}
  else this.witch.setScrollFactor(1).setDepth(10);
  if(['tutorial','landing'].includes(s.stage)){const x=this.witch.x-cam.scrollX;for(let i=9;i>0;i--)this.light.fillStyle(0xf3e5ce,.009).fillEllipse(x,450,160+i*35,180+i*28);}
  this.shade.setDisplaySize(1280/cam.zoom+4,720/cam.zoom+4);
  this.rig.update();
 }
}
