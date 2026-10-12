import { SCRIPT } from "./Script";
import $ from 'jquery'
//게임 요소
export let health=100
export let money=30

//이벤트 이동, 
//병원,착한로봇,야생의 습격
export let eventlist=getEventIndices(SCRIPT)

//이벤트 시작리스트 리턴해주기
function getEventIndices(scriptArray) {
  let eventIndices = [];
  for (let i = 0; i < scriptArray.length; i++) {
      if (scriptArray[i].hasOwnProperty('event') &&  scriptArray[i].event!='death'){
          eventIndices.push(i);
      }
  }
  return eventIndices;
}



//event= 랜덤이벤트 || 숫자면 해당번호 스크립트로 이동
export function goEvent(event){
    var script
    if(event==="death"){death()}
    else if(health<=0){return 6} //뒤짐
    else if(event==="event"){
        //스크립트번호의 -1로 이동해야함
        script=eventlist[Math.floor(Math.random()*eventlist.length)]-1;
        $('.character').hide();
    }
    else{
        script=event
    }
    return script
}

//죽으면 되는함수
function death(){
  window.location.href ='https://www.youtube.com/watch?v=caf-CLksQCk'
}


//성공 or 실패 확인

export function SuccessChoice(nowScript,event){
  if(NoMoneyCheck(nowScript,event)){ 
    return "failure"
  }

  var successRate = event.successRate
  const random = Math.random();
  return random < successRate ? "success" : "failure";
}

//돈이 없어요
//다음 스크립트의 선택지 효과를 읽음
export function NoMoneyCheck(nowScript,event){
  if(event.shop){
    if(money+nowScript["success"].effect.money<0){
      return true
    }
  }
}



//게임요소 변화주기
export function ChoiceEffect(effect){
  if(effect.health){
    health=health+effect.health
  }
  if(effect.money){
    money=money+effect.money
  }

  if(money<=0){money=0}
  if(health<=0){health=0}
}



