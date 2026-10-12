(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(n){if(n.ep)return;n.ep=!0;const c=s(n);fetch(n.href,c)}})();const q=`
  .======================================================.
  |                                                      |
  |  .-----------,      .-----------,    .---------.    |
  |  | ######### |      | ######### |    |         |    |
  |  | ######### | *~~* | ######### |    |  ,---,  |    |
  |  | ######### | *~~* | ######### |    |  |   |  |    |
  |  | ######### | *~~* | ######### |    |  |   |  |    |
  |  | ######### |      | ######### |    |  '---'  |    |
  |  '-----------'      '-----------'    '---------'    |
  |                                                      |
  |  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~      |
  |                                                      |
  |  .--..--..--..--,   .---------------------------.   |
  |  |  ||  ||  ||  |   | ~    ~    ~   ~     ~     |   |
  |  |  ||  ||  ||  |   |    ~    ~   ~   ~  ~   ~  |   |
  |  '--''--''--''--'   '---------------------------'   |
  '======================================================'
`.trimStart(),S={id:"apartment_start",title:"폐허가 된 아파트",asciiArt:q,description:`벽은 곰팡이로 숨을 쉰다. 모든 서랍장은 뒤져졌다 — 당신이 아니라 누군가가.
전에 여기 살던 사람은 서둘러 도망쳤거나, 아니면 끝내 떠나지 못했거나.

수도는 며칠 전에 끊겼다. 마지막 정어리 통조림은 어제 아침에 사라졌다.

판자로 막힌 창문 너머, 무언가가 콘크리트 위를 긁는 소리가 들린다.
있어서는 안 될 리듬으로.`,backgroundContext:"이 구역은 마법소녀 군단이 부패에 쓸려 내려간 뒤 3주 만에 침묵했다. 소녀들이 정화하지 못한 것들은 결국 그 자신이 되었다.",choices:[{id:"check_inventory",label:"소지품을 확인한다",type:"deterministic",outcomes:{success:{nextSceneId:"apartment_start",narrativeText:`바닥에 소지품을 펼쳤다.

불꽃이 서너 번쯤 남은 금이 간 라이터.
반쯤 비어 있는 진통제 한 병.
다시는 바로 쳐다보지 않는 사진 한 장.

먹을 것은 없다. 밖에 있는 것을 막아 줄 것도 없다.`}}},{id:"hide_from_noise",label:"숨을 죽이고 그림자 속으로 몸을 숨긴다",type:"rng",successProbability:.6,outcomes:{success:{nextSceneId:"corridor_peek",narrativeText:`뒤집어진 냉장고 뒤에 몸을 구겨 넣고 숨을 멈췄다.

긁는 소리가 느려진다. 멈춘다. 복도 아래로 멀어진다.

폐가 타들어 가고 손이 멈추질 않는다 — 그래도 살아있다.
공포는 거의 맛이 느껴질 것 같은 잔재를 남긴다.`,hpDelta:0,corruptionDelta:5},failure:{nextSceneId:"apartment_discovered",narrativeText:`마룻바닥이 총성처럼 날카로운 소리를 낸다.

긁는 소리가 멈춘다.

그리고 문이 안으로 꺾이며 한때 인간이었을 무언가가
연기처럼 어둠을 끌고 틈 사이로 들어온다.

비명을 지르기도 전에 그것이 당신을 찾아낸다.`,hpDelta:-20,corruptionDelta:15}}}]},D={[S.id]:S},H={};function P(e){return e.type==="deterministic"||Math.random()<e.successProbability?e.outcomes.success:e.outcomes.failure}function I(e,t,s){return Math.min(Math.max(e,t),s)}function F(e,t){const s=I(e.hp+(t.hpDelta??0),0,e.maxHp),i=I(e.corruption+(t.corruptionDelta??0),0,e.maxCorruption),n=t.itemsGained??[],c=new Set(t.itemsLost??[]),a=[...e.inventory.filter(d=>!c.has(d)),...n.filter(d=>!e.inventory.includes(d))];return{...e,hp:s,corruption:i,inventory:a,currentSceneId:t.nextSceneId,isAlive:s>0}}function R(e,t){const s=t[e];if(!s)throw new Error(`[SceneResolver] Scene not found: "${e}"`);return s}class G{state;initialState;scenes;subscribers=new Set;constructor(t,s){this.state=t,this.initialState=t,this.scenes=s,queueMicrotask(()=>this.emit())}getState(){return this.state}subscribe(t){return this.subscribers.add(t),()=>{this.subscribers.delete(t)}}dispatch(t){switch(t.type){case"CHOOSE":{const i=R(this.state.currentSceneId,this.scenes).choices.find(c=>c.id===t.choiceId);if(!i)return;const n=P(i);this.state=F(this.state,n),this.emit(n.narrativeText);break}case"RESET":this.state=this.initialState,this.emit();break}}emit(t){const s=Object.freeze({...this.state});this.subscribers.forEach(i=>i(s,t))}}function j(e,t){return new G(e,t)}const Y=`
   _________
  |  .   .  |
  |  |___|  |
  |   ___   |
  |  /   \\  |
  |_________|`.trimStart();function K(){const e=document.querySelector("#app");if(!e)throw new Error("[GameShell] #app element not found");e.innerHTML=`
    <div id="game-container">

      <!-- 좌측: 프로필 / 상태 / 소지품 -->
      <aside id="left-panel">
        <pre id="player-avatar">${Y}</pre>
        <div id="player-name">[ 생 존 자 ]</div>

        <div id="stats-section">
          <div class="panel-title">[ 생존 상태 ]</div>
          <div id="stats-inner">
            <div class="stat-row">
              <div class="stat-label-text">생 명 력</div>
              <span id="hp-bar-ascii"  class="stat-bar-ascii hp-ok">██████████████</span>
              <div  id="hp-numeric"    class="stat-numeric">100 / 100</div>
            </div>
            <div class="stat-row">
              <div class="stat-label-text">오 염 도</div>
              <span id="cor-bar-ascii" class="stat-bar-ascii cor-ok">░░░░░░░░░░░░░░</span>
              <div  id="cor-numeric"   class="stat-numeric">0 / 100</div>
            </div>
          </div>
        </div>

        <div id="inventory-section">
          <div class="panel-title">[ 소 지 품 ]</div>
          <div id="inventory-list"></div>
        </div>
      </aside>

      <!-- 중앙: 위치명 / 아스키아트 / 텍스트 / 선택지 -->
      <main id="center-panel">

        <!-- ① 최상단: 위치 이름 -->
        <div id="scene-header">
          <div id="scene-title"></div>
        </div>

        <!-- ② 상단: 아스키 아트 -->
        <div id="scene-ascii-section">
          <pre id="scene-ascii"></pre>
        </div>

        <!-- ③ 중단: 씬 텍스트 + 나레이션 결과 -->
        <div id="scene-text-section">
          <div id="scene-description"></div>
          <div id="narrative-result" aria-live="polite"></div>
        </div>

        <!-- ④ 하단: 행동 선택지 -->
        <div id="choices-section">
          <div class="panel-title">[ 행 동 선 택 ]</div>
          <section id="choices-panel" aria-label="행동 선택"></section>
        </div>

      </main>

      <!-- 우측: 메뉴 사이드바 -->
      <aside id="right-panel">
        <div class="panel-title">[ 메 뉴 ]</div>
        <nav id="nav-panel">
          <button class="nav-btn" id="btn-map">지  도</button>
          <button class="nav-btn" id="btn-log">기 록 지</button>
          <button class="nav-btn" id="btn-save">저  장</button>
          <button class="nav-btn" id="btn-load">불러오기</button>
          <button class="nav-btn" id="btn-settings">설  정</button>
          <button class="nav-btn nav-btn--danger" id="btn-new-game">처음으로</button>
        </nav>
      </aside>

    </div>
  `}function _(e,t,s){e.textContent="";const i=document.createTextNode("");e.appendChild(i);let n=0,c=!1,a;function d(){if(c)return;if(n>=t.length){c=!0;return}i.data+=t[n],n++;const o=e.closest("#scene-text-section");o&&(o.scrollTop=o.scrollHeight),a=setTimeout(d,s)}return d(),()=>{c=!0,clearTimeout(a),i.data=t}}let y=null,h=null,w=null;function W(e,t){const s=document.getElementById("scene-title"),i=document.getElementById("scene-ascii"),n=document.getElementById("scene-description"),c=document.getElementById("narrative-result");s&&(s.textContent=e.title),i&&(i.textContent=e.asciiArt??"");const a=e.id!==w;w=e.id,n&&(y?.(),y=null,a&&(y=_(n,e.description,18))),c&&(h?.(),h=null,t?(y?.(),y=null,h=_(c,t,28)):c.textContent="")}function L(e,t){const s=document.getElementById("choices-panel");if(s){s.innerHTML="";for(const i of e){const n=document.createElement("button");n.className="choice-btn",n.dataset.type=i.type;const c=document.createElement("span");if(c.className="choice-label",c.textContent=i.label,n.appendChild(c),i.type==="rng"){const a=Math.round(i.successProbability*100),d=document.createElement("span");d.className="choice-chance",d.textContent=`[성공 확률: ${a}%]`,n.setAttribute("aria-description",`성공 확률 ${a}퍼센트`),n.appendChild(d)}n.addEventListener("click",()=>t(i)),s.appendChild(n)}}}const $=14;function k(e,t){const s=Math.round(e/t*$);return"█".repeat(s)+"░".repeat($-s)}function V(e){const t=document.getElementById("hp-bar-ascii"),s=document.getElementById("hp-numeric"),i=document.getElementById("cor-bar-ascii"),n=document.getElementById("cor-numeric"),c=e.hp/e.maxHp*100,a=e.corruption/e.maxCorruption*100;t&&(t.textContent=k(e.hp,e.maxHp),t.className=`stat-bar-ascii ${c<25?"hp-critical":c<50?"hp-low":"hp-ok"}`),s&&(s.textContent=`${e.hp} / ${e.maxHp}`),i&&(i.textContent=k(e.corruption,e.maxCorruption),i.className=`stat-bar-ascii ${a>75?"cor-critical":a>50?"cor-high":"cor-ok"}`),n&&(n.textContent=`${e.corruption} / ${e.maxCorruption}`)}function Z(e,t){const s=document.getElementById("inventory-list");if(s){if(s.innerHTML="",e.inventory.length===0){const i=document.createElement("div");i.className="inventory-empty",i.textContent="(없음)",s.appendChild(i);return}for(const i of e.inventory){const n=t[i],c=document.createElement("div");c.className="inventory-item",c.textContent=n?.name??i,s.appendChild(c)}}}const J=[{id:"a1-roof",name:"옥상",desc:"탁 트인 전망 · 이세아 조우 가능 (잠김)",cx:50,cy:4,type:"npc"},{id:"a1-4f",name:"4층 복도",desc:"일부 붕괴 — 우회 경로 필요",cx:50,cy:15,type:"danger"},{id:"a1-401",name:"401호",desc:"접근 가능 · 내부 빈 공간",cx:22,cy:15,type:"normal"},{id:"a1-406",name:"406호",desc:"접근 가능 · 내부 빈 공간",cx:78,cy:15,type:"normal"},{id:"a1-3f",name:"3층 복도",desc:"창문 빛 유일 · 302호·304호 연결",cx:50,cy:28,type:"normal"},{id:"a1-302",name:"302호 ★",desc:"주인공 방 · 진통제·라이터·노트 보관",cx:20,cy:28,type:"item"},{id:"a1-301",name:"301호",desc:"이웃 주민 흔적 · 내부 접근 가능",cx:65,cy:28,type:"normal"},{id:"a1-304",name:"304호",desc:"닫힌 문 너머에서 소리가 남",cx:84,cy:28,type:"danger"},{id:"a1-2f",name:"2층 복도",desc:"대부분 잠김 · 203호만 열려 있음",cx:50,cy:42,type:"normal"},{id:"a1-203",name:"203호 ※",desc:"열린 문 · 벽에 생존 기록 메모",cx:20,cy:42,type:"item"},{id:"a1-1f",name:"1층 로비",desc:"우편함·엘리베이터(고장)·계단실",cx:50,cy:56,type:"normal"},{id:"a1-mgmt",name:"관리실",desc:"마스터키 · 건물 도면 보관",cx:20,cy:56,type:"item"},{id:"a1-exit",name:"출입구",desc:"→ B1 망가진 골목",cx:80,cy:56,type:"exit"},{id:"a1-b1f",name:"지하 주차장",desc:"전기실·창고 · 깊은 쪽에서 이상한 소리",cx:50,cy:72,type:"danger"},{id:"a1-elec",name:"전기실",desc:"배전반 · 건물 전원 제어 가능",cx:25,cy:72,type:"item"},{id:"a1-stor",name:"창고",desc:"물자 보관 · 일부 잔류",cx:75,cy:72,type:"item"}],Q=[["a1-roof","a1-4f"],["a1-4f","a1-401"],["a1-4f","a1-406"],["a1-4f","a1-3f"],["a1-3f","a1-302"],["a1-3f","a1-301"],["a1-3f","a1-304"],["a1-3f","a1-2f"],["a1-2f","a1-203"],["a1-2f","a1-1f"],["a1-1f","a1-mgmt"],["a1-1f","a1-exit"],["a1-1f","a1-b1f"],["a1-b1f","a1-elec"],["a1-b1f","a1-stor"]],U=[{id:"a2-tun",name:"B3 터널",desc:"→ B3 지하철역 (허가 필요)",cx:5,cy:18,type:"exit"},{id:"a2-gate",name:"검문소 A2-01",desc:"철문·창구 · 오기범 허가 필요",cx:22,cy:18,type:"locked"},{id:"a2-hall",name:"입구 복도",desc:"벽에 생존자 이름·그림 빼곡히",cx:42,cy:18,type:"normal"},{id:"a2-main",name:"메인 홀",desc:"배급카운터·공지게시판 · 오후 비공식 시장",cx:62,cy:18,type:"npc"},{id:"a2-resA",name:"거주구역 A",desc:"가족 세대 ~30세대 · 서하 거주",cx:50,cy:38,type:"npc"},{id:"a2-resB",name:"거주구역 B",desc:"단독 침대 ~70개 · 정보 거래",cx:72,cy:38,type:"normal"},{id:"a2-med",name:"의료실",desc:"진료대 3개·약품장 · 한재이 역할",cx:85,cy:28,type:"npc"},{id:"a2-sup",name:"배급 창고",desc:"자물쇠 3중 잠금 · 오기범 관리",cx:85,cy:45,type:"locked"},{id:"a2-off",name:"오기범 집무실",desc:"지도·무전기·서랍 · 신호장비 문서(숨김)",cx:85,cy:62,type:"npc"},{id:"a2-gen",name:"발전기실",desc:"대형 발전기 2기 · 철판 뒤 숨겨진 통로",cx:85,cy:78,type:"item"},{id:"a2-seal",name:"봉인 사무실",desc:"자물쇠 2중 봉인 · 신호장비 보관 (핵심)",cx:85,cy:93,type:"locked"}],X=[["a2-tun","a2-gate"],["a2-gate","a2-hall"],["a2-hall","a2-main"],["a2-main","a2-resA"],["a2-main","a2-resB"],["a2-main","a2-med"],["a2-med","a2-sup"],["a2-sup","a2-off"],["a2-off","a2-gen"],["a2-gen","a2-seal"]],ee=[{id:"b1-nb5",name:"→ B5 회색거리",desc:"북쪽 — B5 회색 거리 방향",cx:50,cy:5,type:"exit"},{id:"b1-n",name:"북쪽 도로",desc:"B1-03 · 개방 구역 · 은신처 없음",cx:50,cy:20,type:"normal"},{id:"b1-rub",name:"잔해 더미",desc:"B1-05 · 숨겨진 지하통로 입구",cx:22,cy:38,type:"item"},{id:"b1-crs",name:"중앙 교차점",desc:"B1-02 · 경고판 뒷면 메모 — 지하통로 위치",cx:52,cy:38,type:"item"},{id:"b1-e",name:"동쪽 골목",desc:"B1-04 · 야간 타락자 2인조 출몰",cx:80,cy:38,type:"danger"},{id:"b1-alley",name:"뒷골목",desc:"B1-06 · 류민 조우 · 폭 1m · 탈출 불가",cx:22,cy:60,type:"npc"},{id:"b1-na1",name:"→ A1 아파트",desc:"서쪽 — A1 폐허 아파트 방향",cx:5,cy:52,type:"exit"},{id:"b1-nb3",name:"→ B3 지하철",desc:"지하 — B3 지하철역 (숨겨진 경로)",cx:22,cy:80,type:"exit"},{id:"b1-nb2",name:"→ B2 편의점",desc:"동쪽 — B2 폐편의점 방향",cx:80,cy:60,type:"exit"}],te=[["b1-nb5","b1-n"],["b1-n","b1-rub"],["b1-n","b1-crs"],["b1-n","b1-e"],["b1-rub","b1-alley"],["b1-crs","b1-na1"],["b1-alley","b1-nb3"],["b1-e","b1-nb2"]],ne=[{id:"b2-nb1",name:"→ B1 골목",desc:"북쪽 — B1 망가진 골목 방향",cx:50,cy:5,type:"exit"},{id:"b2-ent",name:"입구",desc:"자동문 반파 · 야간 타락자 출몰 가능",cx:50,cy:22,type:"normal"},{id:"b2-shf",name:"진열대",desc:"대부분 비어있음 · 일부 물자 잔류",cx:28,cy:42,type:"item"},{id:"b2-ctr",name:"계산대",desc:"빈 카운터 · 정보 단서 가능",cx:65,cy:42,type:"normal"},{id:"b2-stf",name:"직원 공간",desc:"뒷문으로 연결",cx:65,cy:60,type:"normal"},{id:"b2-stor",name:"창고",desc:"추가 물자 · 잠긴 캐비닛",cx:28,cy:60,type:"item"},{id:"b2-back",name:"뒷문",desc:"골목 방향 탈출로",cx:50,cy:78,type:"exit"},{id:"b2-nb3",name:"→ B3 지하철",desc:"남쪽 — B3 지하철역 방향",cx:50,cy:93,type:"exit"}],ce=[["b2-nb1","b2-ent"],["b2-ent","b2-shf"],["b2-ent","b2-ctr"],["b2-ctr","b2-stf"],["b2-shf","b2-stor"],["b2-stf","b2-back"],["b2-stor","b2-back"],["b2-back","b2-nb3"]],ie=[{id:"b3-gin",name:"지상 남쪽 입구",desc:"지상 접근 가능 유일 입구",cx:38,cy:5,type:"exit"},{id:"b3-hall",name:"대합실 B3-02",desc:'바닥 "3구역 →" 메모 · 자판기 1대 열려있음',cx:50,cy:22,type:"item"},{id:"b3-esc",name:"에스컬레이터",desc:"B3-03 · 정지 · 도보 가능 · 메모 끼워짐",cx:50,cy:40,type:"normal"},{id:"b3-plA",name:"플랫폼 A",desc:"B3-04 · A2 터널 램프 신호 · 측면 유지보수문",cx:28,cy:58,type:"normal"},{id:"b3-stg",name:"자재 창고",desc:"B3-07 · 철근·공구·안전모",cx:8,cy:58,type:"item"},{id:"b3-tun",name:"유지보수 터널",desc:"B3-06 · 벽면 좌표 메모 · 비상 외부출구(잠김)",cx:8,cy:78,type:"item"},{id:"b3-plB",name:"플랫폼 B ⚠",desc:"B3-05 · 조명 전무 · 부정 농도 ★★★★ · 봉인 너머 소리",cx:72,cy:58,type:"danger"},{id:"b3-a2t",name:"→ A2 지하 3구역",desc:"지하 터널 · 허가 필요",cx:28,cy:88,type:"exit"}],se=[["b3-gin","b3-hall"],["b3-hall","b3-esc"],["b3-esc","b3-plA"],["b3-esc","b3-plB"],["b3-plA","b3-stg"],["b3-plA","b3-tun"],["b3-plA","b3-a2t"]],ae=[{id:"b4-roof",name:"옥상 헬리패드",desc:"헬기 없음 · 심층 구역 경계 원거리 조망",cx:50,cy:4,type:"normal"},{id:"b4-4f",name:"4층 소아과 ⚠",desc:"진입 강력 비권장 · 어린아이 소리처럼 들림",cx:50,cy:15,type:"danger"},{id:"b4-3f",name:"3층 수술실 복도",desc:"타락자 배회 드묾 (이유 불명)",cx:50,cy:28,type:"normal"},{id:"b4-303",name:"수술실 303 ★",desc:"이주원 청진기·메모 · 핵심 스토리 아이템",cx:80,cy:28,type:"item"},{id:"b4-2f",name:"2층 내과",desc:"타락자 다수 배회 · 진입 비권장",cx:50,cy:42,type:"danger"},{id:"b4-er",name:"1층 응급실",desc:"마지막 업무 일지 (5시47분) · 자동문 반열림",cx:50,cy:57,type:"item"},{id:"b4-tr",name:"처치실",desc:"B4-02 · 생리식염수·붕대 잔류 · 커튼 뒤 ?",cx:22,cy:57,type:"item"},{id:"b4-cor",name:"복도 ⚠",desc:"B4-03 · 타락자 2개체 · 손톱 자국",cx:50,cy:71,type:"danger"},{id:"b4-med",name:"약품보관실",desc:"B4-04 · 잠금 해제 필요 · 항생제·소독약",cx:80,cy:71,type:"locked"},{id:"b4-fac",name:"지하 시설실",desc:"배전반 · 1층 전자잠금 해제 가능",cx:28,cy:85,type:"item"},{id:"b4-mor",name:"지하 영안실 ☠",desc:"부정 농도 극도 · 진입 절대 금지",cx:72,cy:85,type:"danger"}],de=[["b4-roof","b4-4f"],["b4-4f","b4-3f"],["b4-3f","b4-303"],["b4-3f","b4-2f"],["b4-2f","b4-er"],["b4-er","b4-tr"],["b4-er","b4-cor"],["b4-er","b4-fac"],["b4-cor","b4-med"],["b4-fac","b4-mor"]],oe=[{id:"b5-nc1",name:"→ C1 한강변",desc:"북쪽 — C1 한강변 방향",cx:50,cy:5,type:"exit"},{id:"b5-crs",name:"교차로",desc:"완전 노출 구역 · 야간 타락자 다수",cx:50,cy:25,type:"danger"},{id:"b5-nb6",name:"→ B6 연세대",desc:"서쪽 — B6 연세대 폐허 방향",cx:10,cy:25,type:"exit"},{id:"b5-nb4",name:"→ B4 병원",desc:"동쪽 — B4 붕괴된 병원 방향",cx:90,cy:25,type:"exit"},{id:"b5-shpA",name:"상가 잔해 A",desc:"서쪽 상가 · 은신 가능",cx:22,cy:48,type:"normal"},{id:"b5-shpB",name:"상가 잔해 B",desc:"중앙 상가 · 폐건물 통로",cx:50,cy:48,type:"normal"},{id:"b5-shpC",name:"상가 잔해 C",desc:"동쪽 상가 · 붕괴 심함",cx:78,cy:48,type:"normal"},{id:"b5-bld",name:"폐건물",desc:"내부 은신 가능 · 2층 원거리 조망",cx:50,cy:68,type:"normal"},{id:"b5-nb1",name:"→ B1 골목",desc:"남쪽 — B1 망가진 골목 방향",cx:50,cy:88,type:"exit"}],re=[["b5-nc1","b5-crs"],["b5-crs","b5-nb6"],["b5-crs","b5-nb4"],["b5-crs","b5-shpA"],["b5-crs","b5-shpB"],["b5-crs","b5-shpC"],["b5-shpB","b5-bld"],["b5-bld","b5-nb1"]],le=[{id:"b6-ng",name:"북문",desc:"→ C1 한강변",cx:50,cy:5,type:"exit"},{id:"b6-eng",name:"공학관 B6-05",desc:"이공계 건물 · 지하 계단 진입점",cx:25,cy:22,type:"item"},{id:"b6-med",name:"의과대학관",desc:"잠김 · 접근 불가",cx:75,cy:22,type:"locked"},{id:"b6-lab",name:"지하 연구실 ★",desc:"B6-06 · 정도석 거주 · 차폐 구조 · 스핑크스 문서",cx:25,cy:42,type:"npc"},{id:"b6-soc",name:"사회과학관",desc:"비어있음",cx:18,cy:60,type:"normal"},{id:"b6-lib",name:"도서관 B6-04",desc:"지하 서고 보존 良 · 의학교재·논문 사본",cx:50,cy:60,type:"item"},{id:"b6-sq",name:"중앙 광장",desc:"B6-02 · 조각상·게시판",cx:80,cy:60,type:"normal"},{id:"b6-main",name:"본관 B6-03",desc:"1F행정실 2F강의실 3F연구실",cx:50,cy:78,type:"normal"},{id:"b6-gate",name:"정문 B6-01",desc:"→ B5 회색 거리",cx:50,cy:93,type:"exit"}],me=[["b6-ng","b6-eng"],["b6-ng","b6-med"],["b6-ng","b6-sq"],["b6-eng","b6-lab"],["b6-eng","b6-soc"],["b6-soc","b6-lib"],["b6-lib","b6-sq"],["b6-lib","b6-main"],["b6-sq","b6-main"],["b6-main","b6-gate"]],pe=[{id:"c1-nc2",name:"→ C2 심층 경계",desc:"북쪽 — C2 심층 구역 경계 방향",cx:50,cy:4,type:"exit"},{id:"c1-obs",name:"관측 지점 C1-06",desc:"이세아 조우 가능 · 고가도로 위 8m · 은별 방향 조망",cx:50,cy:16,type:"npc"},{id:"c1-rd",name:"강변북로 C1-01",desc:"4차선 도로 · 방호벽 따라 부분 은신",cx:50,cy:30,type:"normal"},{id:"c1-walk",name:"강변산책로 C1-02",desc:"검게 변한 강물 바로 인접 · 접촉 절대 금지",cx:22,cy:47,type:"danger"},{id:"c1-dep",name:"강변 창고 C1-05",desc:"구명조끼·방수장비·조명탄·밧줄 · 이세아 흔적",cx:78,cy:47,type:"item"},{id:"c1-riv",name:"한강 (검은 강)",desc:"수면 접촉 즉시 오염 · 강 건너편에 무언가 보임",cx:50,cy:63,type:"danger"},{id:"c1-br1",name:"한강대교 C1-03",desc:"30% 구간 통과 가능 · 접근할수록 부정 농도 상승",cx:22,cy:80,type:"normal"},{id:"c1-br2",name:"잠수교 C1-04",desc:"수면 근접형 · 50% 이후 생존 불가 · 진입 금지",cx:78,cy:80,type:"locked"},{id:"c1-nb5",name:"→ B5 회색거리",desc:"남쪽 — B5 회색 거리 방향",cx:28,cy:93,type:"exit"},{id:"c1-nb6",name:"→ B6 연세대",desc:"남서쪽 — B6 연세대 폐허 방향",cx:72,cy:93,type:"exit"}],be=[["c1-nc2","c1-obs"],["c1-obs","c1-rd"],["c1-rd","c1-walk"],["c1-rd","c1-dep"],["c1-walk","c1-riv"],["c1-riv","c1-br1"],["c1-riv","c1-br2"],["c1-walk","c1-nb5"],["c1-dep","c1-nb6"]],ye=[{id:"c2-nd1",name:"→ D1 부정의 탑",desc:"북쪽 심층 — 마법소녀 동반 필수",cx:50,cy:5,type:"exit"},{id:"c2-line",name:"경계선 ☠",desc:"붉은 천 표식 · 이 선 넘으면 타락 가속 즉시",cx:50,cy:22,type:"danger"},{id:"c2-vent",name:"분출구 C2-03 ☠",desc:"절대 접근 금지 · 반경 10m 즉각 타락 · 주기 짧아짐",cx:80,cy:38,type:"danger"},{id:"c2-obs",name:"경계선 관측 C2-01",desc:"어제보다 5m 더 남쪽에 있음 (경계가 밀리는 중)",cx:50,cy:38,type:"item"},{id:"c2-base",name:"은별 거점 C2-02",desc:"폐건물 1층 · 침구·성냥·식량 · 날짜별 후퇴 기록",cx:25,cy:58,type:"npc"},{id:"c2-nc1",name:"→ C1 한강변",desc:"남쪽 — C1 한강변 방향",cx:50,cy:88,type:"exit"}],ue=[["c2-nd1","c2-line"],["c2-line","c2-vent"],["c2-line","c2-obs"],["c2-obs","c2-base"],["c2-base","c2-nc1"]],ve=[{id:"d1-deep",name:"심층 구역",desc:"사방이 심층 구역 · 타락자 밀집",cx:50,cy:4,type:"danger"},{id:"d1-sq",name:"탑 광장 D1-01",desc:"바닥 패턴 변형 · 하나의 흔적 (닳은 자국)",cx:50,cy:18,type:"normal"},{id:"d1-hana",name:"하나의 흔적",desc:"검게 탄 바닥 (원형 3m) · 가끔 따뜻해짐",cx:22,cy:30,type:"npc"},{id:"d1-1f",name:"탑 1층 상업구역",desc:"멈춘 시계들 · 오래 있으면 생각이 느려짐",cx:50,cy:40,type:"danger"},{id:"d1-2f",name:"탑 2층 전망대",desc:"심연 목소리 가장 또렷 · 부정적 감정 증폭",cx:50,cy:56,type:"danger"},{id:"d1-3f",name:"탑 3층 특수구역",desc:"스핑크스 마지막 기록 · 특수 열쇠 필요",cx:50,cy:70,type:"locked"},{id:"d1-sub",name:"지하 심연의 핵",desc:"D1-03 · 최종 스토리 분기점 · 특수 조건 필수",cx:50,cy:86,type:"danger"},{id:"d1-nc2",name:"→ C2 심층 경계",desc:"남쪽 — C2 심층 구역 경계 방향",cx:50,cy:96,type:"exit"}],ge=[["d1-deep","d1-sq"],["d1-sq","d1-hana"],["d1-sq","d1-1f"],["d1-sq","d1-nc2"],["d1-1f","d1-2f"],["d1-2f","d1-3f"],["d1-3f","d1-sub"]],E=[{id:"A1",name:"폐허 아파트",zone:"생존 구역",dangerDisplay:"★★☆☆☆",npc:"이세아 (드물게)",rooms:J,roomEdges:Q},{id:"A2",name:"지하 3구역",zone:"생존 구역",dangerDisplay:"★☆☆☆☆",npc:"오기범, 서하",rooms:U,roomEdges:X},{id:"B1",name:"망가진 골목",zone:"회색 구역",dangerDisplay:"★★★☆☆",npc:"류민 (드물게)",rooms:ee,roomEdges:te},{id:"B2",name:"폐편의점",zone:"회색 구역",dangerDisplay:"★★★☆☆",npc:"—",rooms:ne,roomEdges:ce},{id:"B3",name:"지하철역 (폐역)",zone:"회색 구역",dangerDisplay:"★★★☆☆",npc:"이세아 (드물게)",rooms:ie,roomEdges:se},{id:"B4",name:"붕괴된 병원",zone:"회색 구역",dangerDisplay:"★★★★☆",npc:"이주원 (흔적)",rooms:ae,roomEdges:de},{id:"B5",name:"회색 거리",zone:"회색 구역",dangerDisplay:"★★★★☆",npc:"이세아 (드물게)",rooms:oe,roomEdges:re},{id:"B6",name:"연세대 폐허",zone:"회색 구역",dangerDisplay:"★★★☆☆",npc:"정도석",rooms:le,roomEdges:me},{id:"C1",name:"한강변",zone:"경계 구역",dangerDisplay:"★★★★☆",npc:"이세아",rooms:pe,roomEdges:be},{id:"C2",name:"심층 구역 경계",zone:"경계 구역",dangerDisplay:"★★★★★",npc:"은별",rooms:ye,roomEdges:ue},{id:"D1",name:"부정의 탑 인근",zone:"심층 구역",dangerDisplay:"★★★★★+",npc:"하나, 심연",rooms:ve,roomEdges:ge}],C={D1:{cx:50,cy:6},C2:{cx:50,cy:16},C1:{cx:50,cy:28},B6:{cx:25,cy:41},B5:{cx:55,cy:41},B4:{cx:78,cy:41},B1:{cx:44,cy:55},A1:{cx:20,cy:67},B2:{cx:62,cy:67},B3:{cx:62,cy:79},A2:{cx:62,cy:91}},A=[["D1","C2"],["C2","C1"],["C1","B6"],["C1","B5"],["B6","B5"],["B5","B4"],["B5","B1"],["B1","A1"],["B1","B2"],["B2","B3"],["B3","A2"]],g={"생존 구역":"z-safe","회색 구역":"z-grey","경계 구역":"z-border","심층 구역":"z-deep"},fe={normal:"구역",npc:"NPC 조우",item:"아이템",danger:"위험 구역",locked:"접근 불가",exit:"출구"};let u=null,l=null,b=null,v=null;function xe(){const e=document.getElementById("app");e&&(e.appendChild(we()),document.getElementById("map-close-btn").addEventListener("click",z),document.getElementById("map-back-btn").addEventListener("click",M),Ce(),new ResizeObserver(()=>x()).observe(document.getElementById("map-graph-section")),document.addEventListener("keydown",t=>{t.key==="Escape"&&_e()&&z()}))}function he(){document.getElementById("map-overlay").classList.remove("map-hidden"),M(),requestAnimationFrame(()=>requestAnimationFrame(x))}function z(){document.getElementById("map-overlay").classList.add("map-hidden")}function M(){document.getElementById("map-global-view").classList.remove("map-hidden"),document.getElementById("map-interior-view").classList.add("map-hidden"),requestAnimationFrame(()=>requestAnimationFrame(x))}function N(e){u=e.id,document.querySelectorAll(".map-node").forEach(t=>t.classList.toggle("active",t.dataset.id===e.id)),x(),Be(e)}function Be(e){document.getElementById("map-info-default").classList.add("map-hidden");const t=document.getElementById("map-info-content");t.classList.remove("map-hidden");const s=g[e.zone],i=E.filter(n=>A.some(([c,a])=>c===e.id&&a===n.id||a===e.id&&c===n.id));t.innerHTML=`
    <div class="ip-head">
      <div class="ip-name">${e.name}</div>
      <div class="ip-code ${s}">[${e.id}]</div>
    </div>
    <span class="ip-badge ${s}">${e.zone}</span>
    <div class="ip-sep"></div>
    <div class="ip-field">
      <div class="ip-lbl">위험도</div>
      <div class="ip-danger">${Ee(e.dangerDisplay)}</div>
    </div>
    <div class="ip-field">
      <div class="ip-lbl">주요 NPC</div>
      <div class="ip-val">${e.npc}</div>
    </div>
    ${i.length?`
    <div class="ip-field">
      <div class="ip-lbl">연결 구역</div>
      <div class="ip-conns">
        ${i.map(n=>`
          <button class="ip-conn ${g[n.zone]}" data-cid="${n.id}">
            <span class="ipc-id">${n.id}</span>
            <span class="ipc-name">${n.name}</span>
          </button>`).join("")}
      </div>
    </div>`:""}
    <div class="ip-actions">
      <button class="ip-enter" id="map-enter-int">
        <span>내부 지도 보기</span><span class="ip-arrow">→</span>
      </button>
    </div>`,t.querySelectorAll(".ip-conn").forEach(n=>{n.addEventListener("click",()=>{const c=E.find(a=>a.id===n.dataset.cid);c&&N(c)})}),document.getElementById("map-enter-int").addEventListener("click",()=>Ae(e))}function Ee(e){return[...e].map(t=>t==="★"?'<span class="sf">★</span>':t==="☆"?'<span class="se">☆</span>':t==="✦"?'<span class="sd">✦</span>':`<span class="se">${t}</span>`).join("")}function Ce(){const e=document.getElementById("map-graph-container");for(const t of E){const s=C[t.id];if(!s)continue;const i=document.createElement("button");i.className=`map-node ${g[t.zone]}`,i.dataset.id=t.id,i.style.left=`${s.cx}%`,i.style.top=`${s.cy}%`,i.innerHTML=`<div class="nc">${t.id}</div><div class="nn">${t.name}</div><div class="nd">${t.dangerDisplay}</div>`,i.addEventListener("click",()=>N(t)),e.appendChild(i)}}function x(){const e=document.getElementById("map-graph-container"),t=document.getElementById("map-svg");if(!e||!t)return;const{width:s,height:i}=e.getBoundingClientRect();if(!s||!i)return;t.setAttribute("viewBox",`0 0 ${s} ${i}`),t.innerHTML=`<defs><filter id="eglow" x="-80%" y="-80%" width="260%" height="260%">
    <feGaussianBlur stdDeviation="3" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter></defs>`;const n=u?new Set(A.flatMap(([c,a])=>c===u||a===u?[c,a]:[])):new Set;for(const[c,a]of A){const d=C[c],o=C[a];if(!d||!o)continue;const m=u!==null&&n.has(c)&&n.has(a),r=document.createElementNS("http://www.w3.org/2000/svg","line");r.setAttribute("x1",String(d.cx/100*s)),r.setAttribute("y1",String(d.cy/100*i)),r.setAttribute("x2",String(o.cx/100*s)),r.setAttribute("y2",String(o.cy/100*i)),r.setAttribute("class",`me${m?" me-hot":""}`),m&&r.setAttribute("filter","url(#eglow)"),t.appendChild(r)}}function Ae(e){b=e,l=null,document.getElementById("map-global-view").classList.add("map-hidden"),document.getElementById("map-interior-view").classList.remove("map-hidden"),document.getElementById("map-int-title").textContent=`${e.name}  ·  [${e.id}]`;const t=document.getElementById("map-int-zone");t.className=`mit-zone ${g[e.zone]}`,t.textContent=e.zone;const s=document.getElementById("map-int-graph-container");s.querySelectorAll(".room-node").forEach(n=>n.remove());const i=document.getElementById("map-int-svg");i.innerHTML="";for(const n of e.rooms){const c=document.createElement("button");c.className=`room-node rt-${n.type}`,c.dataset.rid=n.id,c.style.left=`${n.cx}%`,c.style.top=`${n.cy}%`,c.innerHTML=`<div class="rn-name">${n.name}</div>`,c.addEventListener("click",()=>Se(n)),s.appendChild(c)}v&&v.disconnect(),v=new ResizeObserver(()=>f(e)),v.observe(document.getElementById("map-int-graph-section")),requestAnimationFrame(()=>requestAnimationFrame(()=>f(e))),O(e)}function Se(e){l=e.id,document.querySelectorAll(".room-node").forEach(t=>t.classList.toggle("active",t.dataset.rid===e.id)),b&&f(b),Ie(e)}function f(e){const t=document.getElementById("map-int-graph-container"),s=document.getElementById("map-int-svg");if(!t||!s)return;const{width:i,height:n}=t.getBoundingClientRect();if(!i||!n)return;s.setAttribute("viewBox",`0 0 ${i} ${n}`),s.innerHTML="";const c=new Map(e.rooms.map(d=>[d.id,d])),a=l?new Set(e.roomEdges.flatMap(([d,o])=>d===l||o===l?[d,o]:[])):new Set;for(const[d,o]of e.roomEdges){const m=c.get(d),r=c.get(o);if(!m||!r)continue;const T=l!==null&&a.has(d)&&a.has(o),p=document.createElementNS("http://www.w3.org/2000/svg","line");p.setAttribute("x1",String(m.cx/100*i)),p.setAttribute("y1",String(m.cy/100*n)),p.setAttribute("x2",String(r.cx/100*i)),p.setAttribute("y2",String(r.cy/100*n)),p.setAttribute("class",`re${T?" re-hot":""}`),s.appendChild(p)}}function O(e){const t=e.rooms.filter(c=>c.type==="npc"),s=e.rooms.filter(c=>c.type==="item"),i=e.rooms.filter(c=>c.type==="danger"||c.type==="locked"),n=(c,a,d)=>a.length?`<div class="ints-sec">
      <div class="ints-title">${c}</div>
      <ul class="ints-list">
        ${a.map(o=>`<li class="ints-item ${d}">
          <strong>${o.name}</strong><br><span class="ints-desc">${o.desc}</span>
        </li>`).join("")}
      </ul>
    </div>`:"";document.getElementById("map-int-sidebar").innerHTML=[n("NPC 조우",t,"ints-npc"),n("주요 아이템",s,"ints-item-item"),n("위험 구역",i,"ints-item-danger")].join("")||'<div class="ints-empty">구역을 클릭하면<br>상세 정보가 표시됩니다</div>'}function Ie(e){document.getElementById("map-int-sidebar").innerHTML=`
    <div class="rds-back">
      <button class="rds-back-btn" id="rds-back">← 목록으로</button>
    </div>
    <div class="rds-name">${e.name}</div>
    <span class="rds-type rdt-${e.type}">${fe[e.type]}</span>
    <div class="rds-sep"></div>
    <div class="rds-desc">${e.desc}</div>`,document.getElementById("rds-back").addEventListener("click",()=>{l=null,document.querySelectorAll(".room-node").forEach(t=>t.classList.remove("active")),b&&(f(b),O(b))})}function _e(){return!document.getElementById("map-overlay")?.classList.contains("map-hidden")}function we(){const e=document.createElement("div");return e.id="map-overlay",e.className="map-hidden",e.innerHTML=`
    <!-- ══ GLOBAL MAP ══ -->
    <div id="map-global-view">
      <div id="map-gh">
        <div class="mgh-l">
          <span class="mgh-title">세 계 지 도</span>
          <span class="mgh-sub">POST-APOCALYPSE · BLACK OCTOBER +2Y</span>
        </div>
        <div class="mgh-legend">
          <span class="mleg z-safe">◆ 생존</span>
          <span class="mleg z-grey">◆ 회색</span>
          <span class="mleg z-border">◆ 경계</span>
          <span class="mleg z-deep">◆ 심층</span>
        </div>
        <button id="map-close-btn" class="map-x">✕</button>
      </div>
      <div id="map-gb">
        <div id="map-graph-section">
          <div id="map-graph-container">
            <svg id="map-svg" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:visible;"></svg>
          </div>
        </div>
        <div id="map-info-section">
          <div id="map-info-default">
            <div class="mid-kicker">// WORLD SCAN</div>
            <div class="mid-hint">지도에서 노드를 클릭하면<br>상세 정보가 표시됩니다</div>
            <div class="mid-grid">
              <div class="mg-cell"><div class="mg-n z-safe">2</div><div class="mg-l">생존 구역</div></div>
              <div class="mg-cell"><div class="mg-n z-grey">6</div><div class="mg-l">회색 구역</div></div>
              <div class="mg-cell"><div class="mg-n z-border">2</div><div class="mg-l">경계 구역</div></div>
              <div class="mg-cell"><div class="mg-n z-deep">1</div><div class="mg-l">심층 구역</div></div>
            </div>
          </div>
          <div id="map-info-content" class="map-hidden"></div>
        </div>
      </div>
    </div>

    <!-- ══ INTERIOR MAP ══ -->
    <div id="map-interior-view" class="map-hidden">
      <div id="map-int-hdr">
        <button id="map-back-btn" class="map-back">← 돌아가기</button>
        <div class="mit-wrap">
          <span class="mit-label">내 부 지 도</span>
          <span id="map-int-title"></span>
        </div>
        <span id="map-int-zone" class="mit-zone"></span>
      </div>
      <div id="map-int-body">
        <div id="map-int-graph-section">
          <div id="map-int-graph-container">
            <svg id="map-int-svg" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:visible;"></svg>
          </div>
        </div>
        <div id="map-int-sidebar"></div>
      </div>
    </div>`,e}K();xe();document.getElementById("btn-map")?.addEventListener("click",he);const Le={hp:100,maxHp:100,corruption:0,maxCorruption:100,inventory:[],currentSceneId:"apartment_start",isAlive:!0},B=j(Le,D);B.subscribe((e,t)=>{const s=R(e.currentSceneId,D);if(W(s,t),V(e),Z(e,H),!e.isAlive){L([],()=>{});const i=document.getElementById("choices-panel");if(i){const n=document.createElement("button");n.className="choice-btn choice-btn--restart";const c=document.createElement("span");c.className="choice-label",c.textContent="어둠이 당신을 삼켰다. 다시 시작하겠는가.",n.appendChild(c),n.addEventListener("click",()=>B.dispatch({type:"RESET"})),i.appendChild(n)}return}L(s.choices,i=>{B.dispatch({type:"CHOOSE",choiceId:i.id})})});
