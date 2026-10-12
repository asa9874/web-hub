// main.js
import './assets/style.css';
import { Engine, Render, Runner, World, Bodies } from 'matter-js';
import { addCharactor, handleKeyEvents } from './character.js';

const engine = Engine.create();
engine.world.gravity.y = 0; // 중력 제거

const render = Render.create({
    engine,
    element: document.body,
    options: {
        wireframes: false,
        background: '#042d75',
        width: 1000,
        height: 900,
    }
});

const world = engine.world;
const walloption = {
    isStatic: true,
    render: { fillStyle: '#0a0a0a' }
};

// 벽 설정
const leftWall = Bodies.rectangle(7.5, 450, 15, 900, walloption);  // 왼쪽 벽: 두께 15, 높이 900
const rightWall = Bodies.rectangle(992.5, 450, 15, 900, walloption); // 오른쪽 벽: 두께 15, 높이 900
const groundWall = Bodies.rectangle(500, 892.5, 1000, 15, walloption); // 바닥 벽: 두께 15
const topWall = Bodies.rectangle(500, 7.5, 1000, 15, walloption); // 상단 벽: 두께 15

// 벽을 월드에 추가
World.add(world, [leftWall, rightWall, groundWall, topWall]);

Render.run(render);

// Runner 객체 생성 및 실행
const runner = Runner.create();
Runner.run(runner, engine);

// 캐릭터를 추가
addCharactor(world);

// 키보드 이벤트 처리
handleKeyEvents();
