// character.js
import { Bodies, Body, World } from 'matter-js';

// 현재 캐릭터의 물리적 본체를 저장할 변수
let currentBody = null;
// 이동 상태를 처리할 인터벌 ID
let moveInterval = null;
// 현재 눌린 키 상태를 추적하기 위한 객체
let keysPressed = { w: false, a: false, s: false, d: false };

// 캐릭터의 이동 속도
let characterSpeed=10



//게임 월드에 캐릭터를 추가하는 함수
export function addCharactor(world) {
    // 캐릭터를 생성: 빨간색 원, 반지름 10
    const body = Bodies.circle(300, 50, 20, { 
        render: {
            sprite: {
                texture: './img/1.png',  // 캐릭터 이미지 경로
                xScale: 0.3,  // 이미지의 X 방향 스케일
                yScale: 0.3   // 이미지의 Y 방향 스케일
            },
            fillStyle: 'red',           // 원의 채우기 색상
            strokeStyle: '#000000',     // 원의 테두리 색상
            lineWidth: 3,               // 테두리 두께
        },
        inertia: Infinity  // 회전을 막기 위해 무한 관성을 설정d
    });

    currentBody = body;               // 현재 캐릭터 본체를 업데이트
    World.add(world, body);          // 캐릭터를 월드에 추가
}






//캐릭터의 이동을 처리하는 함수
function moveCharacter() {
    if (!currentBody) return;          // 캐릭터가 없으면 함수 종료
  
    let velocity = { x: 0, y: 0 };    // 초기 속도 설정

    // 눌린 키에 따라 속도 변경
    if (keysPressed.w) velocity.y -= characterSpeed;  // 'w' 키가 눌리면 위로 이동
    if (keysPressed.s) velocity.y += characterSpeed;  // 's' 키가 눌리면 아래로 이동
    if (keysPressed.a) velocity.x -= characterSpeed;  // 'a' 키가 눌리면 왼쪽으로 이동
    if (keysPressed.d) velocity.x += characterSpeed;  // 'd' 키가 눌리면 오른쪽으로 이동

    // 캐릭터의 속도를 설정
    Body.setVelocity(currentBody, velocity);
}



//키보드 이벤트를 처리하고 캐릭터의 이동을 제어하는 함수
export function handleKeyEvents() {
    // 키를 눌렀을 때 상태 업데이트 및 움직임 시작
    document.addEventListener('keydown', (event) => {
        if (event.key in keysPressed) {
            keysPressed[event.key] = true;    // 눌린 키 상태 업데이트
            // 이동 인터벌이 설정되지 않은 경우 새로 설정
            if (!moveInterval) {
                moveInterval = setInterval(moveCharacter, 10);
            }
        }
    });
    // 키를 뗐을 때 상태 업데이트 및 멈춤 처리
    document.addEventListener('keyup', (event) => {
        if (event.key in keysPressed) {
            keysPressed[event.key] = false;   // 키 상태 업데이트

            // 모든 이동 키가 떼어졌으면 인터벌 정지
            if (!keysPressed.w && !keysPressed.a && !keysPressed.s && !keysPressed.d) {
                clearInterval(moveInterval);
                moveInterval = null;
                // 이동이 멈추면 속도도 0으로 설정하여 즉시 멈춤
                Body.setVelocity(currentBody, { x: 0, y: 0 });
            }
        }
    });
}
