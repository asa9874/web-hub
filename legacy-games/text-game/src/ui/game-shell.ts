const AVATAR = `
   _________
  |  .   .  |
  |  |___|  |
  |   ___   |
  |  /   \\  |
  |_________|`.trimStart();

export function buildShell(): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) throw new Error('[GameShell] #app element not found');

  app.innerHTML = `
    <div id="game-container">

      <!-- 좌측: 프로필 / 상태 / 소지품 -->
      <aside id="left-panel">
        <pre id="player-avatar">${AVATAR}</pre>
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
  `;
}
