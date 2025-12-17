import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MousePointer2, RefreshCw, Trophy, Target, AlertCircle } from 'lucide-react';

// --- Types ---
type Position = { x: number; y: number };
type GameState = 'menu' | 'playing' | 'ended';
type Difficulty = 'easy' | 'medium' | 'hard' | 'impossible';
type Winner = 'player' | 'ai' | null;

interface GameConfig {
  aiSpeed: number; // Pixels per frame
  targetScore: number;
  label: string;
}

// --- Constants ---
const BOARD_WIDTH = 600;
const BOARD_HEIGHT = 400;
const TARGET_SIZE = 50; // Width/Height of the red square
const AI_CURSOR_SIZE = 24;

const DIFFICULTIES: Record<Difficulty, GameConfig> = {
  easy: { aiSpeed: 2.5, targetScore: 10, label: '쉬움 (Easy)' },
  medium: { aiSpeed: 4.5, targetScore: 15, label: '보통 (Normal)' },
  hard: { aiSpeed: 7.0, targetScore: 20, label: '어려움 (Hard)' },
  impossible: { aiSpeed: 10.0, targetScore: 25, label: '불가능 (Insane)' },
};

export default function SpeedClickerDuel() {
  // --- State ---
  const [gameState, setGameState] = useState<GameState>('menu');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [score, setScore] = useState({ player: 0, ai: 0 });
  const [winner, setWinner] = useState<Winner>(null);
  
  // Game Object Positions
  const [targetPos, setTargetPos] = useState<Position>({ x: 0, y: 0 });
  const [aiPos, setAiPos] = useState<Position>({ x: BOARD_WIDTH / 2, y: BOARD_HEIGHT / 2 });
  
  // Refs for animation loop logic to avoid closure staleness
  const requestRef = useRef<number | undefined>(undefined);
  const scoreRef = useRef({ player: 0, ai: 0 });
  const targetPosRef = useRef<Position>({ x: 0, y: 0 });
  const aiPosRef = useRef<Position>({ x: BOARD_WIDTH / 2, y: BOARD_HEIGHT / 2 });
  const difficultyRef = useRef<GameConfig>(DIFFICULTIES.medium);

  // --- Helpers ---
  const getRandomPosition = useCallback(() => {
    return {
      x: Math.random() * (BOARD_WIDTH - TARGET_SIZE),
      y: Math.random() * (BOARD_HEIGHT - TARGET_SIZE),
    };
  }, []);

  const spawnTarget = useCallback(() => {
    const newPos = getRandomPosition();
    setTargetPos(newPos);
    targetPosRef.current = newPos;
  }, [getRandomPosition]);

  const checkWinCondition = useCallback(() => {
    const config = difficultyRef.current;
    if (scoreRef.current.player >= config.targetScore) {
      setWinner('player');
      setGameState('ended');
      return true;
    }
    if (scoreRef.current.ai >= config.targetScore) {
      setWinner('ai');
      setGameState('ended');
      return true;
    }
    return false;
  }, []);

  // --- Game Loop ---
  const animate = useCallback(() => {
    if (gameState !== 'playing') return;

    // AI Logic: Move towards target
    const currentAi = aiPosRef.current;
    const target = targetPosRef.current;
    const speed = difficultyRef.current.aiSpeed;

    // Target center
    const tx = target.x + TARGET_SIZE / 2;
    const ty = target.y + TARGET_SIZE / 2;

    // Vector to target
    const dx = tx - currentAi.x;
    const dy = ty - currentAi.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 0) {
      // Normalize and move
      const moveX = (dx / distance) * speed;
      const moveY = (dy / distance) * speed;

      const newAiPos = {
        x: currentAi.x + moveX,
        y: currentAi.y + moveY
      };

      aiPosRef.current = newAiPos;
      setAiPos(newAiPos); // Update React state for render
    }

    // AI Collision Check (Simple distance check)
    // If AI is close enough to the center of the target
    if (distance < TARGET_SIZE / 2) {
      scoreRef.current.ai += 1;
      setScore({ ...scoreRef.current });
      if (!checkWinCondition()) {
        spawnTarget();
      } else {
        return; // Stop loop if game ended
      }
    }

    requestRef.current = requestAnimationFrame(animate);
  }, [gameState, spawnTarget, checkWinCondition]);

  useEffect(() => {
    if (gameState === 'playing') {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [gameState, animate]);

  // --- Handlers ---
  const startGame = () => {
    scoreRef.current = { player: 0, ai: 0 };
    setScore({ player: 0, ai: 0 });
    setWinner(null);
    difficultyRef.current = DIFFICULTIES[difficulty];
    
    // Reset positions
    aiPosRef.current = { x: BOARD_WIDTH / 2, y: BOARD_HEIGHT / 2 };
    setAiPos(aiPosRef.current);
    
    spawnTarget();
    setGameState('playing');
  };

  const handlePlayerClick = (e: React.MouseEvent) => {
    if (gameState !== 'playing') return;

    // Get click coordinates relative to the board
    const boardRect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - boardRect.left;
    const clickY = e.clientY - boardRect.top;

    // Check if clicked inside the target square
    const t = targetPosRef.current;
    if (
      clickX >= t.x && 
      clickX <= t.x + TARGET_SIZE &&
      clickY >= t.y &&
      clickY <= t.y + TARGET_SIZE
    ) {
      // Player Hit!
      scoreRef.current.player += 1;
      setScore({ ...scoreRef.current });
      if (!checkWinCondition()) {
        spawnTarget();
      }
    }
  };

  // --- Render Components ---

  // 1. Menu Screen
  if (gameState === 'menu') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans text-slate-800">
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full text-center border border-gray-100">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
              <MousePointer2 className="text-white w-8 h-8" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2 text-slate-900">레드 스퀘어 헌터</h1>
          <p className="text-slate-500 mb-8">AI보다 먼저 빨간 사각형을 클릭하세요!</p>

          <div className="space-y-4 mb-8">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">난이도 선택</p>
            <div className="grid grid-cols-1 gap-3">
              {(Object.keys(DIFFICULTIES) as Difficulty[]).map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`py-3 px-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${
                    difficulty === d
                      ? 'border-red-500 bg-red-50 text-red-600'
                      : 'border-slate-100 hover:border-red-200 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <span className="font-medium">{DIFFICULTIES[d].label}</span>
                  <span className="text-xs opacity-60 bg-white px-2 py-1 rounded-md border border-slate-100 shadow-sm">
                    목표: {DIFFICULTIES[d].targetScore}점
                  </span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl active:scale-95 transform duration-100"
          >
            게임 시작
          </button>
        </div>
      </div>
    );
  }

  // 2. Playing & Ended Screen
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans select-none">
      {/* Header / Scoreboard */}
      <div className="w-full max-w-[600px] mb-6 flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">P</div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase">Player</p>
            <p className="text-2xl font-bold text-slate-800 leading-none">{score.player}</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-1">Target: {DIFFICULTIES[difficulty].targetScore}</div>
          <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-slate-800 transition-all duration-300"
              style={{ width: `${(Math.max(score.player, score.ai) / DIFFICULTIES[difficulty].targetScore) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-3 text-right">
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase">AI Bot</p>
            <p className="text-2xl font-bold text-slate-800 leading-none">{score.ai}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">AI</div>
        </div>
      </div>

      {/* Game Board */}
      <div className="relative bg-white rounded-3xl shadow-xl border-4 border-slate-100 overflow-hidden" 
           style={{ width: BOARD_WIDTH, height: BOARD_HEIGHT }}>
        
        {/* Play Area */}
        {gameState === 'playing' && (
          <div 
            className="absolute inset-0 cursor-crosshair active:cursor-grabbing z-10"
            onClick={handlePlayerClick}
          >
            {/* Target */}
            <div
              className="absolute bg-red-500 rounded-xl shadow-[0_8px_16px_-4px_rgba(239,68,68,0.5)] transform transition-transform duration-75 hover:scale-105 active:scale-95 flex items-center justify-center group"
              style={{
                left: targetPos.x,
                top: targetPos.y,
                width: TARGET_SIZE,
                height: TARGET_SIZE,
              }}
            >
                <Target className="text-white w-6 h-6 opacity-80 group-hover:opacity-100" />
            </div>

            {/* AI Cursor */}
            <div
              className="absolute pointer-events-none transition-transform duration-75 flex flex-col items-center"
              style={{
                left: aiPos.x - AI_CURSOR_SIZE / 2, // Centering logic for rendering
                top: aiPos.y - AI_CURSOR_SIZE / 2,
                transform: `translate(0, 0)`, 
                width: AI_CURSOR_SIZE,
                height: AI_CURSOR_SIZE,
                zIndex: 5
              }}
            >
              <MousePointer2 
                className="text-slate-800 fill-slate-800 w-6 h-6 transform -rotate-12 drop-shadow-md" 
                strokeWidth={1}
              />
              <span className="text-[10px] font-bold text-slate-500 mt-1 bg-white/80 px-1 rounded">AI</span>
            </div>
          </div>
        )}

        {/* Game Over Overlay */}
        {gameState === 'ended' && (
          <div className="absolute inset-0 z-20 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-300">
            {winner === 'player' ? (
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <Trophy className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-2">승리!</h2>
                <p className="text-slate-500 mb-6">AI의 속도를 이겨냈습니다.</p>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-2">패배...</h2>
                <p className="text-slate-500 mb-6">AI가 더 빨랐습니다.</p>
              </div>
            )}
            
            <div className="flex gap-4">
                <button
                onClick={() => setGameState('menu')}
                className="px-6 py-3 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-colors"
                >
                메뉴로
                </button>
                <button
                onClick={startGame}
                className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors flex items-center gap-2"
                >
                <RefreshCw className="w-4 h-4" />
                다시 하기
                </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <p className="text-slate-400 text-sm">
           Board Size: {BOARD_WIDTH}x{BOARD_HEIGHT} | Current Diff: <span className="font-semibold text-slate-600 capitalize">{difficulty}</span>
        </p>
      </div>
    </div>
  );
}