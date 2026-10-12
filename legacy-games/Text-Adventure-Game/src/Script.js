//대화
//"name":"이름"                  
//"voice":"파일이름" (확장자 생략)                  
//"choice":"선택지이름"           
//"success":{내용}              
//"failure":{내용}              
//"effect":{"데이터":숫자}      
//"bgm" :"bgm 이름" (확장자 생략)        
//"soundeffect": "효과음이름" (확장자 생략)
//"background" :"배경이름"    (확장자 생략)  
//"character1",2,3, object :{img:케릭터 이미지,position:위치} postion:'hidden' -> 숨기기
//"typingSpeed" : defalt 60
//"animation" : [애니메이션이름,길이]
//"goscript": 숫자 스크립트 번호로  event=> 랜덤이벤트로
//"event":"hospital" 이벤트 시작부분을 나타냄

export const SCRIPT = [
// #region 프롤로그
    {   //프롤로그 시작 
        "Scripttext": "2050년, 인류는 역사상 가장 참혹한 비극을 맞이했다.",
        "typingSpeed": 100,
        'background': "opening1",
        'animation': ['fadeinbackground', 10000],
        'soundeffect': "choice"
    },
    {
        "Scripttext": "인공지능의 반란, 다른 세계의 습격, 제3차 세계 대전...",
        "typingSpeed": 100,
    },
    {
        "Scripttext": "도시들은 잿더미로 변했고, 로봇과 괴물들은 인간들을 학살하였다.",
        "typingSpeed": 100,
    },
    {
        "Scripttext": "전쟁의 여파로 대부분의 정부와 사회 구조는 붕괴했고, 생존자들은 혼란과 공포 속에서 새로운 삶을 이어가야 했다.",
        "typingSpeed": 100,
    },
    {
        "Scripttext": "그러나 희망을 잃지 않은 사람들은 잿더미 속에서도 새로운 시작을 꿈꾸며, 잃어버린 인류의 가치를 되찾기 위해 발버둥치고 있었다.",
        "typingSpeed": 100,
    },
    {
        "Scripttext": "이 혼란과 절망 속에서 다시 일어설 수 있을 것인가? 그 답은 당신의 손에 달려 있다. ",
        "typingSpeed": 100,
    },
    {
        "Scripttext": "이곳에서 새로운 이야기가 시작된다.",
        "typingSpeed": 100,
        "goscript": "event",
        "bgm":'Destroyed World'
    },
// #endregion 프롤로그

// #region 죽음
    {
        "Scripttext": "나는 뒤. 졌따. ㅠㅠㅠ",
        "typingSpeed": 100,
        "goscript": "death"
    },
// #endregion


//좋은거 (체력)
    // #region 병원이벤트
    //event
    {   //병원이벤트
        "name": "주인공",
        "Scripttext": "폐허가 된 도시를 탐험하던 중, 나는 버려진 병원을 발견했다.",
        'background': "hospital",
        "event": "hospital"
    },
    {
        "Scripttext": "병원 내부는 어두컴컴하고 음침했지만, 나는 혹시 모를 의약품을 찾아 들어갔다."
    },
    {
        "name": "주인공",
        "Scripttext": "여기서 응급처치 키트를 찾을 수 있으면 좋을 텐데..."
    },
    {
        "Scripttext": "나는 조심스럽게 병원의 각 방을 뒤지기 시작했다."
    },
    {
        "Scripttext": "몇 분 후, 오래된 진료실에서 희미한 빛을 발하는 상자를 발견했다.",
        "choice": 'hospital'
    },
    {   // hospital 선택지
        1: {//상자 열기
            "success": {
                "Scripttext": "상자를 열어보니, 다행히도 응급처치 키트가 들어 있었다! 체력이 증가합니다.", //2
                "effect": { "health": 20 }
            },
            "failure": {
                "Scripttext": "상자를 열었지만, 안에는 쓸모 없는 오래된 약들 뿐이었다. 실망스럽게도 체력에는 변화가 없다." //5
            }
        },
        2: {//상자 지나가기
            "success": {
                "Scripttext": "나는 상자를 그냥 두고 더 안전한 물품을 찾아 나섰다. 하지만 뒤돌아보니 후회가 밀려온다." //2
            }
        },
        3: {//상자를 분석하기
            "success": {
                "Scripttext": "상자를 분석해본 결과, 상자에 숨겨진 비밀이 있었다. 상자 밑에서 추가적인 의약품과 유용한 장비를 발견했다! 체력이 증가합니다.", //2
                "effect": { "health": 20 }
            },
            "failure": {
                "Scripttext": "상자를 분석하는 동안 시간이 지체되었고, 결국 상자에 있는 장비들이 손상되었다. 체력이 감소합니다.", //5
                "effect": { "health": -10 }
            }
        }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
    // #endregion 병원이벤트

    // #region 기계의 도움이벤트
    //event
    {   //기계의 도움이벤트
        "name": "주인공",
        "Scripttext": "폐허가 된 도시에서 탐험을 마치고, 나는 인공지능 의료 기계를 발견했다. 이 기계는 전쟁 이후에도 여전히 작동하고 있었다.",
        'background': "robot_help",
        "event": "robot_help"
    },
    {
        "Scripttext": "기계는 나를 인식하고 자동으로 진단을 시작했다. 무언가 유용한 치료를 받을 수 있을 것 같은 느낌이 들었다."
    },
    {
        "Scripttext": "기계가 진단을 끝낸 후, 나에게 필요한 치료를 제공하기 시작했다."
    },
    {
        "Scripttext": "몇 분 후, 치료가 완료되었고, 기계의 도움 덕분에 체력이 회복되었다."
    },
    {
        "Scripttext": "이 기계 덕분에 회복된 체력으로, 나는 다시 모험을 계속할 준비가 되었다.",
        "effect": { "health": 20 }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
    // #endregion 기계의 도움이벤트

    // #region 쉼터 발견
    //event
    {
        "name": "주인공",
        "Scripttext": "여행을 하던 중, 안전하고 편안한 쉼터를 발견했다. 쉼터는 매우 평화롭고 휴식하기에 적합한 곳이었다.",
        "event": "shelter_found",
        'background': "shelter_found"
    },
    {
        "Scripttext": "쉼터에서 충분히 휴식하며 체력을 회복할 수 있었다."
    },
    {
        "Scripttext": "나는 어떻게 시간을 보낼지 결정해야 했다."
    },
    {
        "Scripttext": "어떤 선택을 하겠는가?",
        "choice": "shelter_found"
    },
    {
        //shelter_found 선택지
        1: {//휴식하기
            "success": {
                "Scripttext": "쉼터에서 충분히 휴식하며 체력을 회복했다. 체력이 증가한다.",
                "effect": { "health": 20 }
            }
        },
        2: {// 주변 탐색하기
            "success": {
                "Scripttext": "쉼터 주변을 탐색하며 유용한 자원들을 발견했다. 체력이 대폭 증가한다.",
                "effect": { "health": 30 }
            },
            "failure": {
                "Scripttext": "아무것도 찾지못하고 쉼터에서 휴식만을취했다.",
                "effect": { "health": 15 }
            }
        },
        3: {//쉼터 무시하고 계속 이동하기
            "success": {
                "Scripttext": "쉼터를 무시하고 계속 이동했다. 체력 회복 기회를 놓쳤다.",
                "effect": { "health": 0 }
            }
        }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
    //#endregion 쉼터 발견

    // #region 맑은 물
    {
        "name": "주인공",
        "Scripttext": "걷던 중 맑은 물이 흐르는 샘을 발견했다. 깨끗한 물을 마시면 체력을 회복할 수 있을 것이다.",
        "event": "clean_water",
        'background': "clean_water",
    },
    {
        "Scripttext": "샘물을 마시고 체력을 회복하기로 했다."
    },
    {
        "Scripttext": "어떤 선택을 하겠는가?",
        "choice": "clean_water"
    },
    {
        //clean_water 선택지
        1: {//물 마시기
            "success": {
                "Scripttext": "깨끗한 샘물을 마시고 체력을 회복했다.",
                "effect": { "health": 20 }
            },
            "failure": {
                "Scripttext": "샘물이 오염되어 있어 체력이 오히려 감소했다.",
                "effect": { "health": -10 }
            }
        },
        2: {//물 지나치기
            "success": {
                "Scripttext": "샘물을 마시지 않고 지나쳤다. 체력에 변화는 없지만 위험을 피했다."
            },
        },
        3: {//물 분석하기
            "success": {
                "Scripttext": "물을 분석해본 결과, 물이 깨끗하다는 것을 확인하고 안심하고 마셨다. 체력이 증가합니다.",
                "effect": { "health": 20 }
            },
            "failure": {
                "Scripttext": "물을 분석하는 동안 시간이 지체되었고, 결국 체력이 조금 감소했다.",
                "effect": { "health": -5 }
            }
        }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
    // #endregion 맑은 물

    // #region 식량 발견
    //event
    {
        "name": "주인공",
        "Scripttext": "숲속을 탐험하던 중, 나는 풍부한 식량을 발견했다. 이 식량이 내 체력에 도움이 될 것이다.",
        "event": "food_discovery",
        'background': "food_discovery",
    },
    {
        "Scripttext": "식량을 발견한 것은 큰 행운이다. 이제 이 식량을 어떻게 활용할지 결정해야 한다."
    },
    {
        "Scripttext": "어떤 선택을 하겠는가?",
        "choice": "food_discovery"
    },
    {
        //food_discovery 선택지
        1: {//식량을 먹는다
            "success": {
                "Scripttext": "식량을 먹어서 체력이 크게 회복되었다. 체력이 증가합니다.",
                "effect": { "health": 30 }
            },
            "failure": {
                "Scripttext": "식량을 먹었지만, 상한 식량이어서 몸이 아프다.",
                "effect": { "health": -10 }
            }
        },
        2: {//무시한다.
            "success": {
                "Scripttext": "식량을 잘 보관하여 나중에 사용할 수 있게 되었다. 체력에는 즉각적인 변화가 없지만, 나중에 도움이 될 것이다."
            }
        },
        3: {//식량을 교환한다
            "success": {
                "Scripttext": "식량을 다른 생존자와 판매하여 돈을 얻었다.",
                "effect": { "money": 10 }
            },
            "failure": {
                "Scripttext": "식량을 교환하려 했지만 갑자기 상대방이 식량을 가지고 도망갔다!"
            }
        }
    },
    {
        "Scripttext": "나는 다음 목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
    //#endregion 식량 발견



//좋은거 (돈)
    // #region 유물 발견
    {
        "name": "주인공",
        "Scripttext": "탐험 도중 희귀한 유물을 발견했다. 이 유물을 팔면 돈을 벌 수 있을 것이다.",
        "event": "artifact_found",
        "background":"artifact_found"
    },
    {
        "Scripttext": "유물을 어떻게 할 것인가?"
    },
    {
        "Scripttext": "어떤 선택을 하겠는가?",
        "choice": "artifact_found"
    },
    {
        //artifact_found 선택지
        1: {//유물 판매
            "success": {
                "Scripttext": "유물을 성공적으로 팔아 돈을 벌었다.",
                "effect": { "money": 50 }
            },
            "failure": {
                "Scripttext": "유물을 팔려고 했지만, 가치가 없는 것으로 판명되었다. 돈을 벌지 못했다."
            }
        },
        2: {//유물로 체력 회복
            "success": {
                "Scripttext": "유물을 활용하여 체력을 회복할 수 있는 방법을 찾았다. 체력이 증가한다.",
                "effect": { "health": 20 }
            },
            "failure": {
                "Scripttext": "유물이 나에게 이상한 빛을 발사하였다.",
                "effect": { "health": -20 }
            }
        },
        3: {//유물 분석
            "success": {
                "Scripttext": "유물을 분석해본 결과, 매우 귀한 유물로 판명되어 높은 가격에 팔 수 있었다.",
                "effect": { "money": 100 }
            },
            "failure": {
                "Scripttext": "유물을 분석하는 도중 유물이 부셔졌다.",
            }
        }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
    // #endregion 유물 발견

    // #region 숨겨진 금고 발견
    {
        "name": "주인공",
        "Scripttext": "폐허 속에서 숨겨진 금고를 발견했다. 금고 안에는 예상보다 많은 돈이 들어 있을지도 모른다.",
        "event": "safe_found",
        "background":"safe_found"
    },
    {
        "Scripttext": "금고를 어떻게 다룰 것인가?"
    },
    {
        "Scripttext": "어떤 선택을 하겠는가?",
        "choice": "safe_found"
    },
    {
        //safe_found 선택지
        1: {//금고 열기
            "success": {
                "Scripttext": "금고를 성공적으로 열어 많은 돈을 발견했다. 돈이 증가합니다.",
                "effect": { "money": 100 }
            },
            "failure": {
                "Scripttext": "금고를 여는 데 실패했다. 돈을 얻지 못했다."
            }
        },
        2: {//금고 주변 탐색
            "success": {
                "Scripttext": "금고 주변을 탐색하여 추가적인 보물과 자원을 발견했다. 체력이 소폭 증가합니다.",
                "effect": { "money": 120 }
            },
            "failure": {
                "Scripttext": "금고 주변 탐색 도중 위험에 처해 체력이 소폭 감소했다.",
                "effect": { "health": -5 }
            }
        },
        3: {//그냥 지나가기
            "success": {
                "Scripttext": "무시하고 갈길을 가기시작했다."
            }
        }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
    // #endregion 숨겨진 금고 발견

    // #region 낙오자 구출
    //event
    {
        "name": "주인공",
        "Scripttext": "여정을 계속하던 중, 나는 위험에 처한 낙오자를 발견했다. 그는 절박한 표정으로 나에게 도움을 요청했다.",
        "event": "rescue_straggler",
        "background":"Distroyed_city (1)",
    },
    {
        "Scripttext": "나는 그를 구출할지 아니면 위험을 무릅쓰지 말아야 할지 고민했다."
    },
    {
        "Scripttext": "나는 어떻게 대처할지 결정해야 했다."
    },
    {
        "Scripttext": "어떤 선택을 하겠는가?",
        "choice": "rescue_straggler"
    },
    {
        //rescue_straggler 선택지
        1: {//구출하기
            "success": {
                "Scripttext": "낙오자를 무사히 구출하여 그의 감사와 함께 돈을 받았다.",
                "effect": { "money": 30 }
            },
            "failure": {
                "Scripttext": "낙오자를 구출하려 했으나, 배신당해 돈을 빼앗겼다.",
                "effect": { "money": -20 }
            }
        },
        2: {//구출하지 않기
            "success": {
                "Scripttext": "낙오자를 구출하지 않고 지나쳤다. 체력에는 변화가 없다."
            },
            "failure": {
                "Scripttext": "낙오자를 구출하지 않았지만, 양심의 가책을 느껴 체력이 감소했다.",
                "effect": { "health": -5 }
            }
        },
        3: {//경계를 하며 구출하기
            "success": {
                "Scripttext": "경계를 늦추지 않으며 낙오자를 구출해 돈을 얻었다.",
                "effect": { "money": 20 }
            },
            "failure": {
                "Scripttext": "경계를 늦추지 않았지만, 결국 배신당해 돈을 잃었다.",
                "effect": { "money": -10 }
            }
        }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
    //#endregion 낙오자 구출


//나쁜거 (체력)
    // #region 야생 동물의 공격이벤트 
    //event
    {   //야생 동물의 공격 
        "name": "주인공",
        "Scripttext": "정글을 탐험하던 중, 갑자기 야생 동물의 공격을 받았다! 포악한 동물이 눈앞에 나타났고, 나는 즉각적으로 반응해야 했다.",
        "event": 'wildlife_attack',
        'background': "wildlife_attack",
    },
    {
        "Scripttext": "야생 동물은 매우 공격적이며, 빠르게 움직이며 나를 위협하고 있다. 상황이 매우 위험하다."
    },
    {
        "Scripttext": "나는 어떻게 대처할지 결정해야 했다."
    },
    {
        "Scripttext": "어떤 선택을 하겠는가?",
        "choice": 'wildlife_attack'
    },
    {   //wildlife_attack 선택지
        1: {//동물 공격 피하기
            "success": {
                "Scripttext": "재빠르게 몸을 움츠려 동물의 공격을 피했다. 동물은 공격에 실패하며 자리를 떠났다. 체력이 증가합니다.",
                "effect": { "health": 10 }
            },
            "failure": {
                "Scripttext": "동물의 공격을 피하지 못하고 부상을 입었다. 체력이 감소합니다.",
                "effect": { "health": -15 }
            }
        },
        2: {//동물과 싸우기
            "success": {
                "Scripttext": "동물과의 싸움에서 승리했다! 체력이 증가합니다.",
                "effect": { "health": 15 }
            },
            "failure": {
                "Scripttext": "동물과의 싸움에서 패배했다. 심각한 부상을 입어 체력이 감소한다.",
                "effect": { "health": -25 }
            }
        },
        3: {//도망가기
            "success": {
                "Scripttext": "동물의 공격을 피해 가까운 안전한 장소로 도망쳤다. 큰 부상을 피할 수 있었다. 체력이 소폭 증가합니다.",
                "effect": { "health": 5 }
            },
            "failure": {
                "Scripttext": "도망치는 도중 동물에게 몇 번 물려 체력을 다소 잃었다.",
                "effect": { "health": -10 }
            }
        }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
    // #endregion 야생 동물의 공격 이벤트

    // #region 적의 습격
    //event
    {
        "name": "주인공",
        "Scripttext": "어두운 골목길을 걷던 중, 무법자들의 갑작스러운 습격을 받았다! 주변이 혼란스러워지고, 나는 즉시 대응해야 했다.",
        "event": 'bandit_attack',
        'background': "bandit_attack",

    },
    {
        "Scripttext": "무법자들은 무자비하게 공격해왔고, 상황은 매우 긴박했다."
    },
    {
        "Scripttext": "나는 어떻게 대처할지 결정해야 했다."
    },
    {
        "Scripttext": "어떤 선택을 하겠는가?",
        "choice": 'bandit_attack'
    },
    {
        //bandit_attack 선택지
        1: {//저항하기
            "success": {
                "Scripttext": "반격에 성공하여 무법자들을 물리쳤다. 그러나 약간의 부상을 입어 체력이 감소한다.",
                "effect": { "health": -10 }
            },
            "failure": {
                "Scripttext": "저항하는 도중 무법자들에게 심각한 부상을 입었다. 체력이 크게 감소한다.",
                "effect": { "health": -25 }
            }
        },
        2: {//도망가기
            "success": {
                "Scripttext": "무법자들의 습격을 피해 가까운 안전한 장소로 도망쳤다. 큰 부상을 피할 수 있었다. 체력이 소폭 증가한다.",
                "effect": { "health": 5 }
            },
            "failure": {
                "Scripttext": "도망치는 도중 무법자들에게 몇 번 물려 체력을 다소 잃었다.",
                "effect": { "health": -15 }
            }
        },
        3: {//협상하기
            "success": {
                "Scripttext": "협상에 성공하여 무법자들을 달래었다. 체력이 소폭 증가한다.",
            },
            "failure": {
                "Scripttext": "협상 도중 무법자들이 더욱 공격적으로 나왔다. 체력이 감소한다.",
                "effect": { "health": -10 }
            }
        }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
    //#endregion 적의 습격

    // #region 기계와의 싸움
    //event
    {
        "name": "주인공",
        "Scripttext": "고장난 인공지능 기계가 갑자기 작동하며 공격을 시작했다! 기계의 공격에 맞서 싸워야 했다.",
        "event": "machine_fight",
        'background': "machine_fight",
    },
    {
        "Scripttext": "기계는 매우 강력하고, 공격은 거칠며 예측할 수 없다. 상황이 위험하다."
    },
    {
        "Scripttext": "나는 어떻게 대응할지 결정해야 했다."
    },
    {
        "Scripttext": "어떤 선택을 하겠는가?",
        "choice": "machine_fight"
    },
    {
        //machine_fight 선택지
        1: {//기계 공격 피하기
            "success": {
                "Scripttext": "재빠르게 기계의 공격을 피했다. 기계는 실패하고 자리를 떠났다. 체력이 소폭 증가한다.",
                "effect": { "health": 5 }
            },
            "failure": {
                "Scripttext": "기계의 공격을 피하지 못하고 부상을 입었다. 체력이 감소한다.",
                "effect": { "health": -15 }
            }
        },
        2: {//기계와 싸우기
            "success": {
                "Scripttext": "기계와의 싸움에서 승리했다! 기계부품들을 팔았다!",
                "effect": { "money": 10 }
            },
            "failure": {
                "Scripttext": "기계와의 싸움에서 패배했다. 심각한 부상을 입어 체력이 감소한다.",
                "effect": { "health": -20 }
            }
        },
        3: {//기계 제어 시도
            "success": {
                "Scripttext": "기계를 제어해 공격을 중단시켰다. ",
            },
            "failure": {
                "Scripttext": "기계를 제어하려다가 기계의 반격을 받았다. 체력이 감소한다.",
                "effect": { "health": -10 }
            }
        }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
    //#endregion 기계와의 싸움

    // #region 광신도와의 만남
    //event
    {
        "name": "주인공",
        "Scripttext": "도시를 탐색하던 중, 나는 한 무리의 광신도를 만났다.",
        "event": "fanatic_encounter",
        "background":"Distroyed_city (17)",
        "character2":{"img":"fanatic_encounter","position":30}
        
    },
    {
        "Scripttext": "광신도들은 나를 적대적으로 바라보며 위협을 가해왔다."
    },
    {
        "Scripttext": "나는 어떻게 대처할지 결정해야 했다."
    },
    {
        "Scripttext": "어떤 선택을 하겠는가?",
        "choice": "fanatic_encounter"
    },
    {
        //fanatic_encounter 선택지
        1: {//저항하기
            "success": {
                "Scripttext": "광신도들과의 싸움에서 승리했다. 체력이 감소했지만, 그들을 물리쳤다.",
                "effect": { "health": -10 }
            },
            "failure": {
                "Scripttext": "저항했지만 광신도들에게 심한 부상을 당했다. 체력이 크게 감소합니다.",
                "effect": { "health": -20 }
            }
        },
        2: {//도망가기
            "success": {
                "Scripttext": "광신도들의 추격을 따돌리고 무사히 도망쳤다. 체력이 소폭 감소합니다.",
                "effect": { "health": -5 }
            },
            "failure": {
                "Scripttext": "도망치려 했으나 실패하고 광신도들에게 붙잡혀 체력이 크게 감소합니다.",
                "effect": { "health": -20 }
            }
        },
        3: {//설득하기
            "success": {
                "Scripttext": "광신도들을 설득하여 나의 편으로 만들었다. ",
            },
            "failure": {
                "Scripttext": "설득하려 했으나 실패하고 분노한 광신도들에게 심한 부상을 당했다. 체력이 크게 감소합니다.",
                "effect": { "health": -25 }
            }
        }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
//#endregion 광신도와의 만남

    // #region 도시에서 몬스터에게서 숨기
    //event
    {
        "name": "주인공",
        "Scripttext": "도시를 탐험하던 중, 나는 거대한 몬스터의 포효를 들었다. 몬스터가 나를 발견하기 전에 숨을 곳을 찾아야 했다.",
        "event": "hide_from_monster",
        "background":"Distroyed_city (13)",
        "character1":{"img":"monster","position":30}
    },
    {
        "Scripttext": "몬스터는 날카로운 이빨과 발톱을 가진 무시무시한 생명체였다. 나는 최대한 조용히 움직이며 숨을 곳을 찾아야 했다."
    },
    {
        "Scripttext": "나는 어떻게 대처할지 결정해야 했다."
    },
    {
        "Scripttext": "어떤 선택을 하겠는가?",
        "choice": "hide_from_monster"
    },
    {
        //hide_from_monster 선택지
        1: {//건물 안에 숨기
            "success": {
                "Scripttext": "근처 건물 안에 성공적으로 숨어 몬스터의 눈을 피했다."
            },
            "failure": {
                "Scripttext": "건물 안에 숨으려 했지만 몬스터에게 들켜 도망쳐야 했다. 체력이 감소합니다.",
                "effect": { "health": -10 }
            }
        },
        2: {//쓰레기 더미 속에 숨기
            "success": {
                "Scripttext": "쓰레기 더미 속에 숨어 몬스터의 눈을 피했다. 하지만 약간의 체력을 소모했다.",
                "effect": { "health": -5 }
            },
            "failure": {
                "Scripttext": "쓰레기 더미 속에 숨으려 했지만 몬스터에게 들켜 도망쳐야 했다. 체력이 크게 감소합니다.",
                "effect": { "health": -20 }
            }
        },
        3: {//도망가기
            "success": {
                "Scripttext": "몬스터의 추격을 따돌리고 안전한 장소로 도망쳤다."
            },
            "failure": {
                "Scripttext": "도망치려 했으나 몬스터에게 공격받아 체력이 크게 감소합니다.",
                "effect": { "health": -30 }
            }
        }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
//#endregion 도시에서 몬스터에게서 숨기

    // #region 구조물 붕괴
//event
{
    "name": "주인공",
    "Scripttext": "오래된 건물을 탐험하던 중, 갑자기 구조물이 붕괴되기 시작했다. 나는 급히 대처해야 했다.",
    "event": "structure_collapse",
    "background":"Distroyed_city (2)",
},
{
    "Scripttext": "붕괴하는 구조물의 파편이 사방으로 흩어졌고, 나는 어떻게든 피해를 최소화하려고 했다."
},
{
    "Scripttext": "나는 어떻게 대처할지 결정해야 했다."
},
{
    "Scripttext": "어떤 선택을 하겠는가?",
    "choice": "structure_collapse"
},
{
    //structure_collapse 선택지
    1: {//구조물 밑으로 피하기
        "success": {
            "Scripttext": "구조물 밑으로 피하는 데 성공하여 큰 피해를 입지 않았다.",
            "effect": { "health": -5 }
        },
        "failure": {
            "Scripttext": "구조물 밑으로 피하려 했지만, 파편에 맞아 체력이 크게 감소합니다.",
            "effect": { "health": -30 }
        }
    },
    2: {//도망가기
        "success": {
            "Scripttext": "붕괴하는 구조물에서 멀리 도망치는 데 성공했다. ",
        },
        "failure": {
            "Scripttext": "도망치려 했으나, 파편에 맞아 체력이 감소하고 돈도 잃었다.",
            "effect": { "health": -20, "money": -20 }
        }
    },
    3: {//가만히
        "success": {
            "Scripttext": "가만히있었는데 기적적으로 아무런 피해가 없었다!",
        },
        "failure": {
            "Scripttext": "붕괴하는 구조물에 맞아 체력이 크게 감소했다.",
            "effect": { "health": -50 }
        }
    }
},
{
    "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
    "goscript": "event"
},
//#endregion 구조물 붕괴


//나쁜거 (돈)
    // #region 약탈당함
    //event
    {
        "name": "주인공",
        "Scripttext": "어두운 골목길을 걷던 중, 무법자들의 습격을 받았다. 그들은 무자비하게 나의 소지품을 약탈하기 시작했다.",
        "event": "bandit_loot",
        "background":"bandit_loot"
    },
    {
        "Scripttext": "무법자들은 나의 돈을 빼앗아 갔고, 나는 무력하게 그들을 바라볼 수밖에 없었다."
    },
    {
        "Scripttext": "나는 어떻게 대처할지 결정해야 했다."
    },
    {
        "Scripttext": "어떤 선택을 하겠는가?",
        "choice": "bandit_loot"
    },
    {
        //bandit_loot 선택지
        1: {//저항하기
            "success": {
                "Scripttext": "반격에 성공하여 무법자들을 물리쳤다.",
            },
            "failure": {
                "Scripttext": "저항하는 도중 무법자들에게 돈을 빼앗겼다.",
                "effect": { "money": -50 }
            }
        },
        2: {//도망가기
            "success": {
                "Scripttext": "무법자들의 습격을 피해 가까운 안전한 장소로 도망쳤다. 하지만 일부 돈을 잃었다.",
                "effect": { "money": -20 }
            },
            "failure": {
                "Scripttext": "도망치는 도중 무법자들에게 돈을 빼앗겼다.",
                "effect": { "money": -50 }
            }
        },
        3: {//협상하기
            "success": {
                "Scripttext": "협상에 성공하여 무법자들을 달래고 일부 돈만 빼앗겼다.",
                "effect": { "money": -10 }
            },
            "failure": {
                "Scripttext": "협상 도중 무법자들이 더욱 공격적으로 나와 모든 돈을 빼앗겼다.",
                "effect": { "money": -50 }
            }
        }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
    //#endregion 약탈당함

    // #region 군인들에게 협박받음
    //event
    {
        "name": "주인공",
        "Scripttext": "황폐해진 도시를 탐험하던 중, 나는 무장한 군인들에게 포위되었다. 그들은 돈을 요구하며 나를 협박했다.",
        "event": "soldier_extortion",
        "background":"Distroyed_city (11)",
        "character1":{"img":"soilder (1)","position":40},
        "character2":{"img":"soilder (2)","position":60},
        "character3":{"img":"soilder (3)","position":10},
    },
    {
        "Scripttext": "군인들은 무기를 휘두르며 나에게 돈을 내놓으라고 위협했다."
    },
    {
        "Scripttext": "나는 어떻게 대처할지 결정해야 했다."
    },
    {
        "Scripttext": "어떤 선택을 하겠는가?",
        "choice": "soldier_extortion"
    },
    {
        //soldier_extortion 선택지
        1: {//돈을 준다
            "success": {
                "Scripttext": "군인들에게 돈을 주고 무사히 상황을 모면했다.",
                "effect": { "money": -30 }
            },
            "failure": {
                "Scripttext": "돈이없자 분노한 군인들에게 구타당했다.",
                "effect": { "health": -20 }
            }
        },
        2: {//도망가기
            "success": {
                "Scripttext": "군인들의 추격을 따돌리고 무사히 도망쳤다.",
            },
            "failure": {
                "Scripttext": "도망치려 했으나 실패하고 군인들에게 붙잡혀 돈을 모두 빼앗겼다.",
                "effect": { "money": -100, "health": -20}
            }
        },
        3: {//설득하기
            "success": {
                "Scripttext": "군인들을 설득하여 상황을 무사히 넘겼다. 돈을 잃지 않았다."
            },
            "failure": {
                "Scripttext": "설득하려 했으나 실패하고 군인들에게 돈을 빼앗겼다.",
                "effect": { "money": -50 }
            }
        }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
//#endregion 군인들에게 협박받음


//상점
    // #region 상인에게 물건 구매
    //event
    {
        "name": "주인공",
        "Scripttext": "여정을 계속하던 중, 나는 한 상인을 만났다. 상인은 다양한 물품을 판매하고 있었다.",
        "event": "merchant_purchase",
        "background":"merchant_purchase"
    },
    {
        "Scripttext": "상인은 친절하게 물건을 보여주며, 나에게 무엇을 살지 물었다."
    },
    {
        "Scripttext": "나는 어떤 물건을 살지 결정해야 했다."
    },
    {
        "Scripttext": "어떤 선택을 하겠는가?",
        "choice": "merchant_purchase"
    },
    {
        //merchant_purchase 선택지
        1: {//응급처치 키트 구매
            "success": {
                "Scripttext": "응급처치 키트를 구매하여 체력을 회복했다. 체력이 증가합니다.",
                "effect": { "health": 20, "money": -20 }
            },
            "failure": {
                "Scripttext": "돈이 부족해서 응급처치 키트를 구매하지 못했다. 체력에는 변화가 없다."
            }
        },
        2: {//식량 구매
            "success": {
                "Scripttext": "식량을 구매하여 기운을 차렸다. 체력이 소폭 증가합니다.",
                "effect": { "health": 10, "money": -10 }
            },
            "failure": {
                "Scripttext": "돈이 부족해서 식량을 구매하지 못했다. 체력에는 변화가 없다."
            }
        },
        3: {//아무것도 사지 않기
            "success": {
                "Scripttext": "아무것도 사지 않고 상인을 지나쳤다. 체력에는 변화가 없습니다."
            }
        }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
    //#endregion 상인에게 물건 구매

    // #region 의료비 지출
    //event
    {
        "name": "주인공",
        "Scripttext": "질병이나 부상을 치료하기 위해 병원을 방문했다. 치료를 위해 돈이 필요하다.",
        "event": "medical_expense",
        "background":"medical_expense"
    },
    {
        "Scripttext": "병원에서 필요한 치료를 받기 위해 비용을 지불해야 한다."
    },
    {
        "Scripttext": "나는 어떻게 대처할지 결정해야 했다."
    },
    {
        "Scripttext": "어떤 선택을 하겠는가?",
        "choice": "medical_expense"
    },
    {
        //medical_expense 선택지
        1: {//치료 받기
            "success": {
                "Scripttext": "치료를 받고 건강을 회복했다. 그러나 비용이 발생했다.",
                "effect": { "money": -30, "health": 20 }
            },
            "failure": {
                "Scripttext": "치료를 받으려 했지만, 돈이 부족해 치료를 받을 수 없었다.",
            }
        },
        2: {//치료 포기
            "success": {
                "Scripttext": "치료를 포기하고 돈을 절약했다. 그러나 건강 상태는 악화되었다.",
                "effect": { "health": -5 }
            }
        },
        3: {//대안 찾기
            "success": {
                "Scripttext": "대안을 찾아 치료를 받았다. 건강을 회복하고 비용을 절약했다.",
                "effect": { "health": 10 }
            },
            "failure": {
                "Scripttext": "대안을 찾으려 했지만 실패했다.",
            }
        }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
    //#endregion 의료비 지출


//기타 이벤트
    // #region 불쌍한 어린 소녀를 만나다
{
        "name": "주인공",
        "Scripttext": "파괴된 잔해위에서 불쌍한 어린 소녀를 만났다. 그녀는 도움이 필요해 보인다.",
        "event": "girl_encounter",
        "background":"girl_encounter"
    },
    {
        "Scripttext": "소녀에게 어떻게 대응할 것인가?"
    },
    {
        "Scripttext": "어떤 선택을 하겠는가?",
        "choice": "girl_encounter"
    },
    {
        //girl_encounter 선택지
        1: {//돈 기부하기
            "success": {
                "Scripttext": "돈을 기부하여 소녀에게 도움을 주었다. 소녀는 감사하였고 당신은 마음이 따뜻해졌다.",
                "effect": {"money": -10 }
            }
        },
        2: {//돈을 뺏기
            "success": {
                "Scripttext": "소녀에게서 돈을 뺏었다. 소녀는 무기력해 보인다.",
                "effect": {"money": 20 }
            },
            "failure": {
                "Scripttext": "돈을 뺏으려다 소녀의 저항에 부딪혔다. 체력이 감소한다.",
                "effect": { "health": -5 }
            }
        },
        3: {//무시하고 지나가기
            "success": {
                "Scripttext": "소녀를 무시하고 지나쳤다.",
            }
        }
    },
    {
        "Scripttext": "나는 다음목적지를 향해 걷기 시작했다.",
        "goscript": "event"
    },
    // #endregion 불쌍한 어린 소녀를 만나다









]