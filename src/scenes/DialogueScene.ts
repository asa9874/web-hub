import Phaser from 'phaser';
import { DIALOGUE_SCRIPTS } from '../data/dialogues';
import type { DialogueLine, DialogueScript, DialogueSceneData, SpeakerRole } from '../types';

// 화자별 캐릭터 강조 상태값
type FocusState = { scale: number; alpha: number };
const FOCUS: Record<string, FocusState> = {
  SPEAKING: { scale: 1.06, alpha: 1.00 },
  IDLE:     { scale: 0.90, alpha: 0.48 },
  NEUTRAL:  { scale: 0.96, alpha: 0.76 },
};

/** 비주얼 노벨 형식의 대화 씬 */
export class DialogueScene extends Phaser.Scene {
  private script!: DialogueScript;
  private returnScene!: string;
  private resumeScene?: string; // 설정 시 returnScene 대신 이 씬을 재개 (전투 오버레이용)

  private currentLineIndex = 0;
  private isTyping = false;
  private typewriterTimer?: Phaser.Time.TimerEvent;

  // 캐릭터 컨테이너
  private protagonistContainer!: Phaser.GameObjects.Container;
  private otherContainer!: Phaser.GameObjects.Container;

  // 대화창 UI 요소
  private speakerNameBg!: Phaser.GameObjects.Rectangle;
  private speakerNameText!: Phaser.GameObjects.Text;
  private dialogueText!: Phaser.GameObjects.Text;
  private nextIndicator!: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'DialogueScene' });
  }

  init(data: DialogueSceneData): void {
    this.returnScene = data.returnScene ?? 'HubScene';
    this.resumeScene = data.resumeScene;
    const script = DIALOGUE_SCRIPTS[data.scriptId];
    if (!script) {
      // 스크립트를 찾지 못할 경우 빈 시퀀스로 대체
      console.error(`대화 스크립트 없음: ${data.scriptId}`);
      this.script = { id: 'empty', showOtherCharacter: false, lines: [] };
      return;
    }
    this.script = script;
    this.currentLineIndex = 0;
  }

  create(): void {
    this.cameras.main.fadeIn(400, 0, 0, 0);

    this.renderBackground();
    this.renderCharacters();
    this.renderDialogueBox();
    this.setupInput();

    // 첫 번째 대사 즉시 표시
    if (this.script.lines.length > 0) {
      this.displayLine(this.script.lines[0]);
    } else {
      this.endDialogue();
    }
  }

  // ── 배경 ────────────────────────────────────────────────────────────────

  private renderBackground(): void {
    // 하늘 배경
    this.add.rectangle(400, 215, 800, 430, 0x0d1b2a);
    // 바닥 (캐릭터가 서 있는 면)
    this.add.rectangle(400, 391, 800, 44, 0x0a141e);
    // 바닥 하이라이트 경계선
    this.add.rectangle(400, 370, 800, 2, 0x1c3a5a);

    // 뒤로가기 버튼
    const btn = this.add.rectangle(44, 24, 76, 30, 0x0a141e);
    btn.setStrokeStyle(1, 0x1c3a5a);
    btn.setInteractive({ useHandCursor: true });
    btn.setDepth(10);

    this.add.text(44, 24, '◀ 뒤로', {
      fontSize: '13px', color: '#4a6fa5',
    }).setOrigin(0.5).setDepth(11);

    btn.on('pointerover', () => btn.setFillStyle(0x152232));
    btn.on('pointerout', () => btn.setFillStyle(0x0a141e));
    btn.on('pointerdown', () => {
      this.cameras.main.fadeOut(280, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => {
        this.scene.start(this.returnScene);
      });
    });
  }

  // ── 캐릭터 렌더링 ────────────────────────────────────────────────────────

  private renderCharacters(): void {
    // 주인공 — 왼쪽, 항상 표시
    this.protagonistContainer = this.add.container(188, 368);
    const heroGfx = this.add.graphics();
    this.drawCharacter(heroGfx, 0x1a5276, 0x1a252f); // 남색 의상, 검은 머리
    this.protagonistContainer.add(heroGfx);
    this.protagonistContainer.setScale(FOCUS.NEUTRAL.scale);
    this.protagonistContainer.setAlpha(FOCUS.NEUTRAL.alpha);

    // 다른 캐릭터 — 오른쪽, 스크립트에 따라 표시
    this.otherContainer = this.add.container(612, 368);
    const otherGfx = this.add.graphics();
    this.drawCharacter(otherGfx, 0x145a32, 0x0b2817); // 초록 의상 (슬라임 계열), 어두운 머리
    // 좌우 반전으로 주인공을 바라보는 방향으로 설정
    otherGfx.setScale(-1, 1);
    this.otherContainer.add(otherGfx);
    this.otherContainer.setScale(FOCUS.NEUTRAL.scale);
    this.otherContainer.setAlpha(FOCUS.NEUTRAL.alpha);

    if (!this.script.showOtherCharacter) {
      this.otherContainer.setVisible(false);
    }
  }

  /**
   * 캐릭터 그래픽 드로우.
   * 컨테이너 위치(y=368)가 발 위치. 그래픽은 모두 음수 y(위쪽)로 성장.
   */
  private drawCharacter(g: Phaser.GameObjects.Graphics, bodyColor: number, hairColor: number): void {
    const SKIN = 0xf0d9b5;

    // 발 그림자
    g.fillStyle(0x000000, 0.16);
    g.fillEllipse(0, -4, 94, 18);

    // 몸통
    g.fillStyle(bodyColor);
    g.fillRoundedRect(-44, -134, 88, 134, 14);

    // 팔 (의상과 동일한 색)
    g.fillRoundedRect(-70, -122, 26, 80, 9); // 왼팔
    g.fillRoundedRect(44, -122, 26, 80, 9);  // 오른팔

    // 손 (피부)
    g.fillStyle(SKIN);
    g.fillCircle(-57, -46, 14);
    g.fillCircle(57, -46, 14);

    // 목 (피부)
    g.fillStyle(SKIN);
    g.fillRect(-9, -156, 18, 24);

    // 머리카락 (얼굴 원보다 약간 크게 그려 테두리처럼 보이게)
    g.fillStyle(hairColor);
    g.fillCircle(0, -184, 40);

    // 얼굴 (피부)
    g.fillStyle(SKIN);
    g.fillCircle(0, -180, 33);

    // 눈 (흰자)
    g.fillStyle(0xffffff);
    g.fillEllipse(-12, -182, 13, 16);
    g.fillEllipse(12, -182, 13, 16);

    // 눈동자
    g.fillStyle(0x2c3e50);
    g.fillCircle(-12, -181, 5);
    g.fillCircle(12, -181, 5);

    // 눈 하이라이트
    g.fillStyle(0xffffff);
    g.fillCircle(-10, -183, 2);
    g.fillCircle(14, -183, 2);

    // 입
    g.fillStyle(0xa04040, 0.75);
    g.fillRoundedRect(-7, -166, 14, 4, 2);
  }

  // ── 대화창 UI ───────────────────────────────────────────────────────────

  private renderDialogueBox(): void {
    // 대화창 반투명 배경 (화면 하단)
    this.add.rectangle(400, 512, 762, 162, 0x04090f, 0.93).setDepth(5);

    // 상단 테두리 강조선
    this.add.rectangle(400, 432, 762, 2, 0x1a5276).setDepth(6);

    // 화자 이름 배지 배경
    this.speakerNameBg = this.add.rectangle(90, 450, 140, 28, 0x1a5276)
      .setDepth(6);

    // 화자 이름 텍스트
    this.speakerNameText = this.add.text(90, 450, '', {
      fontSize: '14px', color: '#ffffff', fontStyle: 'bold',
    }).setOrigin(0.5).setDepth(7);

    // 대사 텍스트 영역
    this.dialogueText = this.add.text(52, 472, '', {
      fontSize: '18px', color: '#dce3ea',
      wordWrap: { width: 680 },
      lineSpacing: 6,
    }).setDepth(6);

    // 다음 진행 표시기 (▼)
    this.nextIndicator = this.add.text(738, 576, '▼', {
      fontSize: '15px', color: '#4a8ec2',
    }).setOrigin(0.5).setDepth(6).setVisible(false);
  }

  // ── 입력 처리 ────────────────────────────────────────────────────────────

  private setupInput(): void {
    this.input.on('pointerdown', () => this.advance());
    this.input.keyboard?.on('keydown-SPACE', () => this.advance());
    this.input.keyboard?.on('keydown-ENTER', () => this.advance());
  }

  private advance(): void {
    if (this.isTyping) {
      // 타이핑 중이면 전체 텍스트를 즉시 표시
      this.skipTypewriter();
      return;
    }

    this.currentLineIndex++;

    if (this.currentLineIndex >= this.script.lines.length) {
      this.endDialogue();
      return;
    }

    this.displayLine(this.script.lines[this.currentLineIndex]);
  }

  // ── 대사 표시 로직 ───────────────────────────────────────────────────────

  private displayLine(line: DialogueLine): void {
    // 화자에 따른 캐릭터 강조 처리
    this.setCharacterFocus(line.speaker);

    // 화자 이름 배지 업데이트
    this.updateSpeakerBadge(line);

    // 대화 텍스트 스타일 (내레이터는 이탤릭 + 다른 색)
    if (line.speaker === 'narrator') {
      this.dialogueText.setStyle({ fontStyle: 'italic', color: '#8899aa' });
    } else {
      this.dialogueText.setStyle({ fontStyle: 'normal', color: '#dce3ea' });
    }

    // 진행 표시기 숨기고 타이프라이터 시작
    this.hideNextIndicator();
    this.startTypewriter(line.text);
  }

  private updateSpeakerBadge(line: DialogueLine): void {
    if (line.speaker === 'narrator' || !line.characterName) {
      this.speakerNameBg.setVisible(false);
      this.speakerNameText.setText('');
      return;
    }

    this.speakerNameBg.setVisible(true);
    this.speakerNameText.setText(line.characterName);

    // 화자 역할에 따라 배지 색상 변경
    const badgeColor = line.speaker === 'protagonist' ? 0x1a5276 : 0x145a32;
    this.speakerNameBg.setFillStyle(badgeColor);

    // 이름 길이에 맞게 배지 너비 자동 조정
    this.speakerNameBg.setSize(this.speakerNameText.width + 26, 28);
  }

  /**
   * 화자에 따라 두 캐릭터에 SPEAKING / IDLE / NEUTRAL 상태를 트위닝으로 적용.
   * 내레이터의 경우 아무도 강조하지 않음.
   */
  private setCharacterFocus(speaker: SpeakerRole): void {
    let heroState: FocusState;
    let otherState: FocusState;

    switch (speaker) {
      case 'protagonist':
        heroState  = FOCUS.SPEAKING;
        otherState = FOCUS.IDLE;
        break;
      case 'other':
        heroState  = FOCUS.IDLE;
        otherState = FOCUS.SPEAKING;
        break;
      case 'narrator':
      default:
        heroState  = FOCUS.NEUTRAL;
        otherState = FOCUS.NEUTRAL;
        break;
    }

    this.tweens.add({
      targets: this.protagonistContainer,
      scaleX: heroState.scale,
      scaleY: heroState.scale,
      alpha:  heroState.alpha,
      duration: 220, ease: 'Power2.Out',
    });

    this.tweens.add({
      targets: this.otherContainer,
      scaleX: otherState.scale,
      scaleY: otherState.scale,
      alpha:  otherState.alpha,
      duration: 220, ease: 'Power2.Out',
    });
  }

  // ── 타이프라이터 효과 ────────────────────────────────────────────────────

  private startTypewriter(fullText: string): void {
    this.isTyping = true;
    this.dialogueText.setText('');
    let charIndex = 0;

    this.typewriterTimer = this.time.addEvent({
      delay: 30,
      repeat: fullText.length - 1,
      callback: () => {
        charIndex++;
        this.dialogueText.setText(fullText.slice(0, charIndex));
        if (charIndex >= fullText.length) {
          this.isTyping = false;
          this.showNextIndicator();
        }
      },
    });
  }

  private skipTypewriter(): void {
    this.typewriterTimer?.remove();
    const line = this.script.lines[this.currentLineIndex];
    this.dialogueText.setText(line.text);
    this.isTyping = false;
    this.showNextIndicator();
  }

  private showNextIndicator(): void {
    this.nextIndicator.setVisible(true);
    // 기존 트윈 제거 후 새로 생성
    this.tweens.killTweensOf(this.nextIndicator);
    this.tweens.add({
      targets: this.nextIndicator,
      alpha: { from: 0.25, to: 1.0 },
      duration: 580,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.InOut',
    });
  }

  private hideNextIndicator(): void {
    this.tweens.killTweensOf(this.nextIndicator);
    this.nextIndicator.setVisible(false);
  }

  // ── 씬 종료 ─────────────────────────────────────────────────────────────

  private endDialogue(): void {
    this.cameras.main.fadeOut(400, 0, 0, 0);
    this.cameras.main.once('camerafadeoutcomplete', () => {
      if (this.resumeScene) {
        // 전투 중 오버레이 대화 종료: 대화 씬만 닫고 전투 씬 재개
        this.scene.stop();
        this.scene.resume(this.resumeScene);
      } else {
        // 일반 전환: 일시정지 중인 전투 씬이 있다면 명시적으로 정리 후 이동
        this.scene.stop('BattleScene');
        this.scene.start(this.returnScene);
      }
    });
  }
}
