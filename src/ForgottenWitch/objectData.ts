// Every standalone prop/background bitmap authored by paper.ts, plus imported scenery/UI.
export const OBJECTS=[
  ['paper-rotor','풍차 날개','회전 소품 · 사용 중'],['paper-grass','접히는 종이 풀','소품 반응 · 사용 중'],['paper-crate','골판지 상자','밀리는 소품 · 사용 중'],['paper-sign','종이 간판','소품 반응 · 사용 중'],['paper-bell','작은 종','마법 반응 · 사용 중'],['paper-mill','종이 풍차','바람 전환 · 사용 중'],['paper-lamp','종이 등불','점등 소품 · 사용 중'],['paper-bench','대기 의자','체크포인트 · 사용 중'],['paper-teeth','접힌 종이 이빨','함정 · 사용 중'],
  ['paper','크림 종이','배경 바탕 · 사용 중'],['floor','골판지 바닥','지형 · 사용 중'],['bridge','다리 판넬','다리와 발판 · 사용 중'],
  ['tree-sage','세이지 나무','절차적 나무 · 후보'],['tree-plum','플럼 나무','후경과 전경 · 사용 중'],['tree-pink','분홍 나무','절차적 나무 · 후보'],
  ['moon','종이 달','천장 장식 · 사용 중'],['star','종이 별','천장 장식과 미사일 · 사용 중'],['flower','시계꽃','정원 소품 · 사용 중'],
  ['device','무대 제어 장치','다리와 조명 조작 · 사용 중'],['curtain','종이 커튼','입구와 마지막 문 · 사용 중'],['cloud','접힌 구름','천장 후경 · 사용 중'],
  ['door-flat','무대 문틀','마지막 문 · 사용 중'],['stage-frame','상단 무대 프레임','무대 테두리 · 사용 중'],
] as const;
export const EXTRA_OBJECTS=[
  {id:'paper-tree',name:'수작업 종이 나무',file:'paper-tree.png',source:'image_gen · 중경/화면 가장자리'},
  {id:'title-arch',name:'극장 입구 프레임',file:'title-arch.png',source:'image_gen · 메인 화면'},
  {id:'ui-paper',name:'UI 종이 재질',file:'../hub/pastel-paper.webp',source:'허브 공용 종이 · UI'},
  {id:'rod',name:'나무 조종 막대',file:'objects/rod.png',source:'rig.ts · 동적 화면 끝 연결'},
];
