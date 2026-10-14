import type Phaser from 'phaser3';
import type {StageRig} from './rig';
import type {Actor} from './model';
import type {LivingState} from './livingModel';
export class LivingStage {
  private props:{image:Phaser.GameObjects.Image;base:number;push:number;phase:number;hits:number}[]=[];
  private magic:Phaser.GameObjects.Image[]=[];
  private rotor:Phaser.GameObjects.Image;
  private platforms:Phaser.GameObjects.Image[]=[];
  private teeth:Phaser.GameObjects.Image;
  private moon:Phaser.GameObjects.Image;
  private curtain:Phaser.GameObjects.Image;
  private notes:Phaser.GameObjects.Text;
  private lampGlow:Phaser.GameObjects.Image;
  private marks:Phaser.GameObjects.Graphics;
  private labels:Phaser.GameObjects.Text[]=[];
  constructor(scene:Phaser.Scene,rig:StageRig){
    const prop=(x:number,y:number,key:string,w:number,h:number,edge:'top'|'bottom'='bottom')=>{const image=scene.add.image(x,y,key).setOrigin(.5,1).setDisplaySize(w,h).setDepth(8);rig.attach(image,`living-${key}-${x}`,edge,.5,.85,7);return image;};
    for(const [x,key] of [[350,'paper-grass'],[2240,'paper-sign'],[6640,'paper-grass'],[6810,'paper-crate'],[6970,'paper-sign']] as const)this.props.push({image:prop(x,570,key,key==='paper-grass'?110:90,key==='paper-sign'?130:75),base:x,push:0,phase:0,hits:0});
    this.magic=[prop(7190,530,'paper-bell',78,90,'top'),prop(7370,570,'paper-mill',100,125),prop(7550,570,'paper-lamp',85,120)];
    this.rotor=prop(7370,490,'paper-rotor',95,95).setOrigin(.5).setData('rodJoint',{u:.5,v:.5});
    for(let i=0;i<2;i++)this.platforms.push(prop(i?8740:8495,i?455:500,'bridge',i?160:150,32).setOrigin(.5,0).setDepth(6));
    prop(8960,570,'paper-bench',175,115);prop(2180,570,'paper-bench',130,86);
    this.teeth=prop(9360,570,'paper-teeth',130,45);
    this.moon=prop(9630,470,'moon',105,105,'top');
    this.curtain=prop(10170,570,'curtain',190,350).setDepth(12);
    prop(10410,570,'paper-bench',160,105);prop(10480,290,'star',55,55,'top');
    this.notes=scene.add.text(10410,355,'접힌 대본 한 장',{fontFamily:'WT Readable',fontSize:'26px',color:'#f3e5ce',backgroundColor:'#403348',padding:{x:22,y:20},align:'center'}).setOrigin(.5).setDepth(7).setVisible(false);
    this.notes.setText('접힌 대본 한 장\n“누군가는 마지막 인사를 기다린다.”');
    this.lampGlow=scene.add.image(7550,480,'wt-soft-light').setDisplaySize(250,240).setDepth(7.7).setTint(0xffdfaf).setAlpha(0);
    this.marks=scene.add.graphics().setDepth(7.8);
    for(const [x,text] of [[6700,'소품을 건드려 보세요'],[7370,'F / J · 종 → 풍차 → 등불'],[7990,'종이 바람 · E 방향 전환'],[8560,'무게를 느끼는 판넬'],[8960,'E · 분장대에서 쉬기'],[9520,'점프 / 구르기로 함정 회피'],[10020,'커튼 틈의 작은 무대']] as const)this.labels.push(scene.add.text(x,340,text,{fontFamily:'WT Readable',fontSize:'21px',color:'#f3e5ce',backgroundColor:'#594453',padding:{x:12,y:8}}).setOrigin(.5).setDepth(7));
    for(let i=0;i<12;i++){const tree=prop(6400+i*380,570,'tree-plum',220,350);tree.setDepth(2).setTint(0x74677e).setAlpha(.45);}
  }
  update(state:LivingState,actor:Actor,dt:number,active:boolean){
    for(const p of this.props){
      if(active){if(Math.abs(actor.x-p.image.x)<48&&actor.grounded&&Math.abs(actor.vx)>20){p.phase=1;p.hits++;if(p.image.texture.key==='paper-crate')p.push=Math.max(-60,Math.min(85,p.push+actor.vx*dt*.28));}p.phase=Math.max(0,p.phase-dt*1.8);}
      p.image.setPosition(p.base+p.push,570).setRotation(Math.sin(state.clock*15)*p.phase*.14);
    }
    this.magic[0].setRotation(Math.sin(state.clock*22)*state.bell*.11);
    if(active&&state.mill>0)this.rotor.rotation+=dt*3;
    this.magic[2].setTint(state.lamp?0xffdb96:0xc2b4bf);
    state.platforms.forEach((p,i)=>this.platforms[i].setPosition(p.x+p.width/2,p.y).setRotation(p.tilt));
    this.teeth.setScale(130/240,state.teeth==='active'?45/90:12/90).setTint(state.teeth==='warning'?0xe7aeb6:0xffffff);
    this.moon.setPosition(9630+Math.sin(state.clock*1.3)*110,430+Math.cos(state.clock*1.3)*45).setRotation(Math.sin(state.clock*1.3)*.23);
    if(active)this.curtain.x+=((state.secretOpen?10020:10170)-this.curtain.x)*(1-Math.exp(-8*dt));this.curtain.setAlpha(1);this.notes.setVisible(state.discovered);
    this.marks.clear();
    this.lampGlow.setAlpha(state.lamp?.22:0);
    if(state.teeth==='warning')this.marks.lineStyle(3,0xe7aeb6,.85).strokeEllipse(9360,564,160,12);
    if(state.windOn)for(let i=0;i<9;i++){const x=7780+((state.clock*state.windDirection*80+i*53)%460+460)%460;this.marks.lineStyle(1.5,0xf3e5ce,.3).lineBetween(x,440+i%3*27,x+22*state.windDirection,435+i%3*27);}
    if(state.checkpoint)this.marks.fillStyle(0xf3dfae,.75).fillCircle(state.checkpoint,420,6);
  }
  snapshot(){return {props:this.props.map(p=>({x:p.image.x,hits:p.hits,angle:p.image.rotation})),platforms:this.platforms.map(p=>({x:p.x,y:p.y})),rotor:this.rotor.rotation,secretVisible:this.notes.visible};}
}
