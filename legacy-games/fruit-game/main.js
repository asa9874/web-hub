import { Bodies,Body, Collision, Engine, Events,Render,Runner, World} from "matter-js";
import { FRUITS } from "./fruits";


const engine = Engine.create();
const render = Render.create({
    engine,
    element: document.body,
    options: {
        wireframes:false,
        background:"#042d75",
        width:620,
        height:850,
    }
});

const world = engine.world;


//벽
const walloption={
    isStatic: true,
    render:{fillStyle: "#0a0a0a"}
}
const leftWall= Bodies.rectangle(15,395,30,790, walloption);
const rightWall= Bodies.rectangle(605,395,30,790, walloption);
const groundWall= Bodies.rectangle(310,820,620,60, walloption);
const topLine=Bodies.rectangle(310,150,620,2,{
    isSensor:true,
    isStatic: true, 
    render:{fillStyle: "#0a0a0a"}, 
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
function addFruit(){
    const index=Math.floor(Math.random()*5);
    const fruit = FRUITS[index];
    const body = Bodies.circle(300, 50, fruit.radius, {
        index:index,
        render: {
            fillStyle: '#ff6347',  // 채우기 색상 설정
            strokeStyle: '#000000',  // 테두리 색상 설정
            lineWidth: 5,  // 테두리 두께 설정
        },
        restitution:0.3,  //탄성
        isSleeping:true //멈춰있게
    });

    currentBody=body;
    currentFruit=fruit;

    World.add(world, body);  // 원을 월드에 추가
}


//움직임
window.onkeydown = (event) =>{
    if(disableAction){return;}
    switch (event.code){
        case "KeyA":
            if(currentBody.position.x - currentFruit.radius>30)
                Body.setPosition(currentBody,{x:currentBody.position.x-10, y:currentBody.position.y})
            break;
        case "KeyD":
            if(currentBody.position.x - currentFruit.radius<500)
                Body.setPosition(currentBody,{x:currentBody.position.x+10, y:currentBody.position.y})
            break;
        
        //떨어트리기
        case "KeyS":
        currentBody.isSleeping=false;
        disableAction=true;
        setTimeout(()=>{
            addFruit(); 
            disableAction=false;  
        },1000);
        break;
    }
}

Events.on(engine,"collisionStart",(event) =>{
    event.pairs.forEach((collision)=> {
        if(collision.bodyA.index === collision.bodyB.index){
            const index=collision.bodyA.index;
            if(index=== FRUITS.length-1){return;}

            World.remove(world, [collision.bodyA,collision.bodyB]);
            const newFruit= FRUITS[index+1];
            const newBody = Bodies.circle(
                collision.collision.supports[0].x,
                collision.collision.supports[0].y,
                newFruit.radius,
                {
                    render: {
                        fillStyle: '#ff6347',  // 채우기 색상 설정
                        strokeStyle: '#000000',  // 테두리 색상 설정
                        lineWidth: 5,  // 테두리 두께 설정
                    },
                    index:index+1,
                }
            );
            World.add(world, newBody);
        }

        if(!disableAction && (collision.bodyA.name=== "topline"||collision.bodyB.name=== "topline")){
            alert("게임오버");
        }
    });
});




addFruit();

