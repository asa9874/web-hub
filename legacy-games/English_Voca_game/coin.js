import { Bodies,Body, Collision, Engine, Events,Render,Runner, World} from "matter-js";
import { BALLS } from "./ball";

const engine = Engine.create();
const render = Render.create({
    engine,
    element: document.getElementById('matter-container'),
    options: {
        wireframes:false,
        background:"#a9f5d1",
        width:620,
        height:910,
    }
});

const world = engine.world;


//벽
const walloption={
    isStatic: true,
    render:{fillStyle: "#030303"}
}
const leftWall= Bodies.rectangle(15,450,30,910, walloption);
const rightWall= Bodies.rectangle(605,450,30,910, walloption);
const groundWall= Bodies.rectangle(310,890,620,40, walloption);
const topLine=Bodies.rectangle(310,150,560,2,{
    isSensor:true,
    isStatic: true, 
    render:{fillStyle: "#ff002b"}, 
    name:"topline",
})


World.add(world, [leftWall,rightWall,groundWall,topLine]);


Render.run(render);
// Runner 객체 생성 및 실행
const runner = Runner.create();
Runner.run(runner, engine);
let currentBody =null;
let currentFruit =null;
let disableAction = false;


//과일추가
export function addFruit(a){
    const index=a;
    const fruit = BALLS[index];
    var color ="#00f200";
    if(index===1){color ="#fc0a3b";}
    const body = Bodies.circle(300, 100, fruit.radius, {
        index:index,
        render: {
            fillStyle: color,  // 채우기 색상 설정
            strokeStyle: '#000000',  // 테두리 색상 설정
            lineWidth: 5,  // 테두리 두께 설정
        },
        restitution:0.5,  //탄성
    });

    currentBody=body;
    currentFruit=fruit;

    World.add(world, body);  // 원을 월드에 추가
    disableAction=true;
    setTimeout(()=>{
        addFruit(); 
        disableAction=false;  
    },1000);
}



Events.on(engine,"collisionStart",(event) =>{
    event.pairs.forEach((collision)=> {
        if(collision.bodyA.index + collision.bodyB.index===1){
            World.remove(world, [collision.bodyA,collision.bodyB]);
            playSound("pop",0.5);
        }

        if(!disableAction && ((collision.bodyA.name=== "topline" && collision.bodyB.index===0)||(collision.bodyB.name=== "topline"&& collision.bodyA.index===0))){
            alert("클리어!!!");
        }
    });
});




export function playSound(name,vol) {
    const audio = new Audio('./'+name+'.mp3');
    audio.volume = vol;
    audio.play();
}