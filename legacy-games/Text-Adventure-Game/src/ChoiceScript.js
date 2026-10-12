//선택지
//text: 선택지 글씨, 
//successRate:성공확률
//shop : true 돈없으면 실패하는 이벤트
export const ChoiceList = {
//#region 좋은거 (체력)
    'hospital': {
        1: { "text": "상자를 연다", "successRate": 0.7 },           
        2: { "text": "무시하고 지나가기", "successRate": 1 },       
        3: { "text": "상자를 분석한다.", "successRate": 0.5 }       
    },
    "shelter_found": {
        1: { "text": "쉼터에서 휴식한다", "successRate": 1 },
        2: { "text": "쉼터 주변을 탐색한다", "successRate": 0.6 },
        3: { "text": "쉼터를 무시하고 계속 이동한다", "successRate": 1 }
    },
    "clean_water": {
        1: { "text": "물 마시기", "successRate": 0.6 },
        2: { "text": "물 지나치기", "successRate": 1 },
        3: { "text": "물 분석하기", "successRate": 0.4 }
    },
    "food_discovery": {
        1: { "text": "식량을 먹는다", "successRate": 0.6 }, 
        2: { "text": "무시한다.", "successRate": 1 }, 
        3: { "text": "식량을 판매한다.", "successRate": 0.5 } 
    },
    
//#endregion 



//#region 좋은거 (돈)
    "artifact_found": {
        1: { "text": "유물 판매", "successRate": 0.65 },
        2: { "text": "유물로 체력 회복", "successRate": 0.5 },
        3: { "text": "유물 분석", "successRate": 0.4 }
    },
    "safe_found": {
        1: { "text": "금고를 연다", "successRate": 0.6 },
        2: { "text": "금고 주변을 탐색한다", "successRate": 0.4 },
        3: { "text": "그냥 무시한다.", "successRate": 1 }
    },
    "rescue_straggler": {
        1: { "text": "구출하기", "successRate": 0.6 }, 
        2: { "text": "구출하지 않기", "successRate": 1.0 },
        3: { "text": "경계를 하며 구출하기", "successRate": 0.7 }  
    },
//#endregion




//#region 나쁜거 (체력)
    "wildlife_attack": {
        1: { "text": "동물의 공격을 피한다.", "successRate": 0.6 }, 
        2: { "text": "동물과 싸운다.", "successRate": 0.4 },        
        3: { "text": "도망친다.", "successRate": 0.5 }              
    },
    "bandit_attack": {
        1: { "text": "저항한다", "successRate": 0.35 }, 
        2: { "text": "도망친다", "successRate": 0.6 }, 
        3: { "text": "협상한다", "successRate": 0.35 } 
    },
    "machine_fight": {
        1: { "text": "기계의 공격을 피한다", "successRate": 0.5 },
        2: { "text": "기계와 싸운다", "successRate": 0.3 },
        3: { "text": "기계를 제어하려 한다", "successRate": 0.4 }
    },
    "fanatic_encounter": {
        1: { "text": "저항하기", "successRate": 0.5 }, 
        2: { "text": "도망가기", "successRate": 0.6 }, 
        3: { "text": "설득하기", "successRate": 0.4 }  
    },
    "hide_from_monster": {
        1: { "text": "건물 안에 숨기", "successRate": 0.7 }, 
        2: { "text": "쓰레기 더미 속에 숨기", "successRate": 0.6 }, 
        3: { "text": "도망가기", "successRate": 0.4 }  
    },
    "structure_collapse": {
        1: { "text": "구조물 밑으로 피하기", "successRate": 0.7 }, 
        2: { "text": "도망가기", "successRate": 0.5 }, 
        3: { "text": "가만히있기", "successRate": 0.2 } 
    },
//#endregion



//#region 나쁜거 (돈)
    "bandit_loot": {
        1: { "text": "저항하기", "successRate": 0.3 },
        2: { "text": "도망가기", "successRate": 0.7 },
        3: { "text": "협상하기", "successRate": 0.5 }
    },
    "soldier_extortion": {
        1: { "text": "돈을 준다", "successRate": 1,'shop': true}, 
        2: { "text": "도망가기", "successRate": 0.5 }, 
        3: { "text": "설득하기", "successRate": 0.4 }  
    },
//#endregion




//#region 상점
    "merchant_purchase": {
        1: { "text": "응급처치 키트를 구매한다", "successRate": 1, 'shop': true },
        2: { "text": "식량을 구매한다", "successRate": 1, 'shop': true },
        3: { "text": "아무것도 사지 않는다", "successRate": 1 }
    },
    
    "medical_expense": {
        1: { "text": "치료 받기", "successRate": 1, 'shop': true },
        2: { "text": "치료 포기", "successRate": 1 },
        3: { "text": "대안 찾기", "successRate": 0.5 }
    },
//#endregion 

    


//#region 기타 이벤트
    "girl_encounter": {
        1: { "text": "돈을 기부한다", "successRate": 1},
        2: { "text": "돈을 뺏는다", "successRate": 0.5 },
        3: { "text": "무시하고 지나친다", "successRate": 1 }
    },
    




//#endregion



}
