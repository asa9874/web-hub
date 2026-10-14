import type Phaser from 'phaser3';
// Bitmap props, rendered once. Seeded fibres and crayon strokes stay stable between frames.
function random(seed:number) { let n=seed; return () => { n=(n*1664525+1013904223)>>>0; return n/4294967296; }; }
function grain(c:CanvasRenderingContext2D,w:number,h:number,seed:number) {
  const rand=random(seed);
  c.save(); c.globalCompositeOperation='source-atop';
  // Broad broken crayon rubs plus fine fibres, masked to the actual cutout.
  for(let i=0;i<w*h/900;i++){const x=rand()*w,y=rand()*h;c.strokeStyle=i%2?'rgba(91,64,66,.09)':'rgba(255,248,222,.20)';c.lineWidth=2+rand()*3;c.beginPath();c.moveTo(x,y);c.lineTo(x+12+rand()*22,y-5-rand()*9);c.stroke();}
  for(let i=0;i<w*h/55;i++) {
    const x=rand()*w,y=rand()*h;
    c.strokeStyle=i%3 ? 'rgba(91,64,66,.12)' : 'rgba(255,248,222,.30)';
    c.lineWidth=rand()*1.4+.4; c.beginPath();c.moveTo(x,y);c.lineTo(x+rand()*12+2,y+rand()*3);c.stroke();
  }
  c.restore();
}
function cutout(c:CanvasRenderingContext2D,points:number[][],color:string) {
  c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();
  c.lineJoin='round'; c.strokeStyle='#977254';c.lineWidth=13;c.stroke();c.strokeStyle='#c6a079';c.lineWidth=10;c.stroke();
  c.fillStyle=color;c.fill();c.strokeStyle='#e8cda7';c.lineWidth=3;c.stroke();
  c.strokeStyle='rgba(74,50,64,.22)';c.lineWidth=1;c.stroke();
}
export function createPaperTextures(scene:Phaser.Scene) {
  function texture(name:string,w:number,h:number,draw:(c:CanvasRenderingContext2D)=>void,seed:number) {
    if(scene.textures.exists(name)) return;
    const t=scene.textures.createCanvas(name,w,h)!;const c=t.context;
    draw(c);grain(c,w,h,seed);t.refresh();
  }
  texture('paper',512,512,c=>{c.fillStyle='#F3E5CE';c.fillRect(0,0,512,512);},1);
  texture('door-flat',311,396,c=>{c.fillStyle='#4a3c53';c.fillRect(8,8,295,380);c.strokeStyle='#ceab88';c.lineWidth=16;c.strokeRect(8,8,295,380);},10);
  texture('stage-frame',1280,44,c=>{c.fillStyle='#634d64';c.fillRect(0,0,1280,35);c.fillStyle='#d6b38c';c.fillRect(0,35,1280,9);c.strokeStyle='rgba(243,229,206,.55)';c.lineWidth=2;c.beginPath();c.moveTo(0,24);c.lineTo(1280,24);c.stroke();},11);
  texture('cloud',320,160,c=>{cutout(c,[[12,102],[20,75],[52,66],[68,33],[107,24],[138,45],[158,22],[197,18],[220,52],[256,49],[279,74],[301,86],[308,117],[282,139],[228,132],[178,143],[129,132],[75,140],[35,129]],'#eee3d2');c.strokeStyle='#cab8cc';c.lineWidth=3;c.beginPath();c.moveTo(55,104);c.quadraticCurveTo(145,120,262,102);c.stroke();},9);
  texture('floor',512,155,c=>{
    cutout(c,[[4,13],[55,8],[103,15],[163,6],[245,10],[306,5],[380,15],[435,8],[508,12],[511,154],[1,154]],'#D6B38C');
    c.strokeStyle='#b38d6d';c.lineWidth=3;
    for(let y=23;y<151;y+=9){c.beginPath();c.moveTo(5,y);c.lineTo(508,y+3);c.stroke();}
  },2);
  texture('bridge',512,70,c=>{
    cutout(c,[[6,9],[87,3],[170,8],[250,2],[342,9],[430,5],[506,10],[503,59],[413,63],[328,57],[234,64],[146,58],[60,62],[5,55]],'#edcca3');
    c.strokeStyle='#aa8064';c.lineWidth=3;for(let x=65;x<510;x+=65){c.beginPath();c.moveTo(x,10);c.lineTo(x-2,58);c.stroke();}
    c.strokeStyle='#fff0d3';c.lineWidth=5;c.beginPath();c.moveTo(15,14);c.lineTo(496,14);c.stroke();
  },3);
  for(const [name,color] of [['tree-sage','#A9C9B4'],['tree-plum','#9184A8'],['tree-pink','#E7AEB6']]) {
    texture(name,330,520,c=>{
      cutout(c,[[141,501],[155,210],[174,170],[197,500]],'#D6B38C');
      cutout(c,[[156,270],[89,213],[86,196],[163,243],[214,197],[229,195],[175,281]],'#cba883');
      cutout(c,[[22,211],[13,159],[47,105],[62,86],[60,57],[106,37],[139,15],[184,26],[218,15],[260,66],[295,78],[311,137],[302,181],[319,221],[274,252],[235,247],[195,265],[141,246],[90,263],[44,239]],color);
      c.strokeStyle='rgba(255,249,221,.40)';c.lineWidth=6;
      for(let i=0;i<10;i++){c.beginPath();c.moveTo(55+i*19,102+i%3*27);c.lineTo(60+i*19,185+i%3*17);c.stroke();}
    },name.length*41);
  }
  texture('moon',150,150,c=>{
    c.save();c.translate(75,75);const pts:number[][]=[];
    for(let i=0;i<=32;i++){const a=1.05+i*4.18/32;pts.push([Math.cos(a)*62,Math.sin(a)*62]);}
    for(let i=0;i<=24;i++){const a=4.57-i*2.86/24;pts.push([26+Math.cos(a)*50,Math.sin(a)*50]);}
    cutout(c,pts,'#f1d7a1');c.restore();
  },4);
  texture('star',90,90,c=>{
    const pts:number[][]=[];for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5;const r=i%2?18:37;pts.push([45+Math.cos(a)*r,45+Math.sin(a)*r]);}cutout(c,pts,'#eed3a0');
  },5);
  texture('flower',150,220,c=>{
    cutout(c,[[70,215],[74,82],[83,83],[88,214]],'#A9C9B4');
    c.fillStyle='#a7bd9d';c.beginPath();c.ellipse(54,153,28,12,.5,0,Math.PI*2);c.ellipse(101,175,26,12,-.5,0,Math.PI*2);c.fill();
    for(let i=0;i<8;i++){const a=i*Math.PI/4;c.fillStyle=i%2?'#e7aeb6':'#ecccbe';c.strokeStyle='#b99882';c.lineWidth=5;c.beginPath();c.ellipse(77+Math.cos(a)*30,65+Math.sin(a)*30,20,27,a,0,Math.PI*2);c.stroke();c.fill();}
    c.fillStyle='#f2dfb4';c.beginPath();c.arc(77,65,24,0,Math.PI*2);c.fill();c.strokeStyle='#736477';c.lineWidth=2;
    // Hands are independent moving overlays, drawn by StageLife after lighting is restored.
    for(let i=0;i<4;i++){const a=i*Math.PI/2;c.beginPath();c.moveTo(77+Math.cos(a)*18,65+Math.sin(a)*18);c.lineTo(77+Math.cos(a)*21,65+Math.sin(a)*21);c.stroke();}
  },6);
  texture('device',170,160,c=>{
    cutout(c,[[12,54],[38,22],[147,30],[156,148],[13,148]],'#b9a3d4');
    cutout(c,[[30,50],[135,45],[140,111],[28,116]],'#f3e5ce');
    c.strokeStyle='#736477';c.lineWidth=8;c.beginPath();c.moveTo(77,101);c.lineTo(107,65);c.stroke();
    c.fillStyle='#e7aeb6';c.beginPath();c.arc(110,61,14,0,Math.PI*2);c.fill();
    c.fillStyle='#736477';for(let x=42;x<136;x+=30)c.fillRect(x,130,14,6);
  },7);
  texture('curtain',310,570,c=>{
    cutout(c,[[9,3],[304,3],[297,560],[254,551],[212,563],[160,555],[106,564],[54,552],[7,562]],'#a97489');
    for(let x=20;x<300;x+=38){const gradient=c.createLinearGradient(x,0,x+34,0);gradient.addColorStop(0,'rgba(67,40,57,.35)');gradient.addColorStop(.65,'rgba(245,195,193,.18)');gradient.addColorStop(1,'rgba(67,40,57,.22)');c.fillStyle=gradient;c.fillRect(x,8,34,544);}
    c.strokeStyle='#e5c29e';c.lineWidth=7;c.beginPath();c.moveTo(10,538);c.lineTo(300,539);c.stroke();
  },8);

  texture('paper-grass',140,100,c=>{cutout(c,[[10,90],[20,45],[42,77],[48,12],[70,69],[90,24],[96,72],[125,48],[132,94]],'#A9C9B4');},21);
  texture('paper-crate',140,110,c=>{cutout(c,[[8,10],[130,7],[132,102],[12,100]],'#D6B38C');c.strokeStyle='#917056';c.lineWidth=7;c.strokeRect(20,20,98,69);c.beginPath();c.moveTo(23,23);c.lineTo(115,87);c.moveTo(115,23);c.lineTo(23,87);c.stroke();},22);
  texture('paper-sign',140,150,c=>{cutout(c,[[63,63],[77,63],[81,143],[60,143]],'#D6B38C');cutout(c,[[8,10],[122,8],[132,45],[118,83],[8,82]],'#E7AEB6');c.fillStyle='#736477';c.font='40px serif';c.fillText('↗',48,60);},23);
  texture('paper-bell',130,140,c=>{cutout(c,[[55,10],[75,10],[78,35],[97,46],[107,108],[119,118],[12,118],[24,107],[33,46],[53,35]],'#edcca3');c.fillStyle='#736477';c.beginPath();c.arc(65,121,10,0,Math.PI*2);c.fill();},24);
  texture('paper-mill',160,200,c=>{cutout(c,[[70,66],[90,66],[106,190],[54,190]],'#D6B38C');},25);
  texture('paper-rotor',160,160,c=>{c.save();c.translate(80,80);for(let i=0;i<4;i++){c.rotate(Math.PI/2);cutout(c,[[0,0],[10,-60],[40,-66],[37,-31]],i%2?'#B9A3D4':'#A9C9B4');}c.restore();},29);
  texture('paper-lamp',130,180,c=>{cutout(c,[[60,85],[72,85],[80,173],[54,173]],'#736477');cutout(c,[[27,32],[43,12],[85,12],[105,34],[97,100],[34,100]],'#F3E5CE');c.strokeStyle='#b99170';c.lineWidth=6;c.strokeRect(42,38,45,48);},26);
  texture('paper-bench',220,150,c=>{cutout(c,[[14,13],[204,13],[204,85],[14,85]],'#A9C9B4');cutout(c,[[8,81],[211,81],[211,106],[8,106]],'#D6B38C');cutout(c,[[27,103],[48,103],[42,142],[23,142]],'#D6B38C');cutout(c,[[172,103],[191,103],[198,142],[175,142]],'#D6B38C');},27);
  texture('paper-teeth',240,90,c=>{const p:number[][]=[[5,81],[5,61]];for(let i=0;i<5;i++)p.push([12+i*45,62],[30+i*45,8],[48+i*45,62]);p.push([235,81]);cutout(c,p,'#ecd2c9');},28);
}
