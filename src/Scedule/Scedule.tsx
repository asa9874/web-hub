import  { useState, useEffect, useMemo } from 'react';
import { CheckCircle, Coffee, BookOpen, Gamepad2, Moon, Sun, Briefcase, MoreHorizontal } from 'lucide-react';

// --- Types ---
type ScheduleItem = {
  title: string;
  type: 'sleep' | 'study' | 'food' | 'class' | 'rest' | 'game' | 'free';
  description: string;
};

type DaySchedule = {
  [hour: number]: ScheduleItem;
};

type ScheduleBlock = {
  start: number;
  duration: number;
  item: ScheduleItem;
};

// --- Data & Config ---
const HOURS = Array.from({ length: 24 }, (_, i) => i);
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Modern Color Palette (Softer, Glassy look)
const TYPE_STYLES = {
  sleep: {
    bg: 'bg-indigo-900/20 hover:bg-indigo-900/40',
    border: 'border-indigo-500',
    text: 'text-indigo-200',
    glow: 'shadow-[0_0_15px_rgba(99,102,241,0.3)]',
    gradient: 'from-indigo-500 to-blue-600'
  },
  study: {
    bg: 'bg-blue-900/20 hover:bg-blue-900/40',
    border: 'border-blue-400',
    text: 'text-blue-200',
    glow: 'shadow-[0_0_15px_rgba(96,165,250,0.3)]',
    gradient: 'from-blue-400 to-cyan-400'
  },
  food: {
    bg: 'bg-orange-900/20 hover:bg-orange-900/40',
    border: 'border-orange-400',
    text: 'text-orange-200',
    glow: 'shadow-[0_0_15px_rgba(251,146,60,0.3)]',
    gradient: 'from-orange-400 to-amber-400'
  },
  class: {
    bg: 'bg-emerald-900/20 hover:bg-emerald-900/40',
    border: 'border-emerald-400',
    text: 'text-emerald-200',
    glow: 'shadow-[0_0_15px_rgba(52,211,153,0.3)]',
    gradient: 'from-emerald-400 to-teal-400'
  },
  rest: {
    bg: 'bg-slate-800/30 hover:bg-slate-800/50',
    border: 'border-slate-400',
    text: 'text-slate-300',
    glow: 'shadow-[0_0_15px_rgba(148,163,184,0.3)]',
    gradient: 'from-slate-400 to-gray-400'
  },
  game: {
    bg: 'bg-purple-900/20 hover:bg-purple-900/40',
    border: 'border-purple-400',
    text: 'text-purple-200',
    glow: 'shadow-[0_0_15px_rgba(192,132,252,0.3)]',
    gradient: 'from-purple-400 to-fuchsia-400'
  },
  free: {
    bg: 'bg-pink-900/20 hover:bg-pink-900/40',
    border: 'border-pink-400',
    text: 'text-pink-200',
    glow: 'shadow-[0_0_15px_rgba(244,114,182,0.3)]',
    gradient: 'from-pink-400 to-rose-400'
  },
};

const TYPE_ICONS = {
  sleep: <Moon size={16} />,
  study: <BookOpen size={16} />,
  food: <Coffee size={16} />,
  class: <Briefcase size={16} />,
  rest: <Sun size={16} />,
  game: <Gamepad2 size={16} />,
  free: <CheckCircle size={16} />,
};

// --- Helper Functions ---
const getSchedule = (dayIndex: number): DaySchedule => {
  const isSunday = dayIndex === 6;
  const schedule: DaySchedule = {};

  for (let h = 0; h < 24; h++) {
    if (isSunday) {
      schedule[h] = { title: 'Free', type: 'free', description: '자유 시간 (Recharge)' };
    } else {
      if (h === 0) schedule[h] = { title: 'Rest', type: 'rest', description: '하루 마무리 및 휴식' };
      else if (h >= 1 && h < 9) schedule[h] = { title: 'Sleep', type: 'sleep', description: '수면 (Recharge)' };
      else if (h >= 9 && h < 12) schedule[h] = { title: 'Voca', type: 'study', description: '영단어 암기' };
      else if (h >= 12 && h < 13) schedule[h] = { title: 'Lunch', type: 'food', description: '점심 식사' };
      else if (h >= 13 && h < 16) schedule[h] = { title: 'LC/RC', type: 'study', description: '리스닝 & 리딩' };
      else if (h >= 16 && h < 18) schedule[h] = { title: 'Class', type: 'class', description: '토익 강의 수강' };
      else if (h >= 18 && h < 19) schedule[h] = { title: 'Dinner', type: 'food', description: '저녁 식사' };
      else if (h >= 19 && h < 22) schedule[h] = { title: 'Study', type: 'rest', description: '자율 공부 및 휴식' };
      else if (h >= 22 && h < 24) schedule[h] = { title: 'Game', type: 'game', description: '게임 및 여가' };
      else schedule[h] = { title: '-', type: 'rest', description: '' };
    }
  }
  return schedule;
};

// Process schedule into merged blocks for visualization
const getDailyBlocks = (dayIndex: number): ScheduleBlock[] => {
  const schedule = getSchedule(dayIndex);
  const blocks: ScheduleBlock[] = [];
  
  let currentStart = 0;
  let currentItem = schedule[0];
  let duration = 1;

  for (let h = 1; h < 24; h++) {
    const nextItem = schedule[h];
    // Merge if type and title are identical
    if (nextItem.type === currentItem.type && nextItem.title === currentItem.title) {
      duration++;
    } else {
      blocks.push({ start: currentStart, duration, item: currentItem });
      currentStart = h;
      currentItem = nextItem;
      duration = 1;
    }
  }
  // Push the last block
  blocks.push({ start: currentStart, duration, item: currentItem });
  
  return blocks;
};

// --- Components ---

export default function Scedule() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const currentDayIndex = useMemo(() => {
    const jsDay = now.getDay();
    return jsDay === 0 ? 6 : jsDay - 1;
  }, [now]);

  const currentHour = now.getHours();

  const activeSchedule = useMemo(() => {
    const todaySchedule = getSchedule(currentDayIndex);
    return todaySchedule[currentHour];
  }, [currentDayIndex, currentHour]);

  const activeStyle = TYPE_STYLES[activeSchedule.type];

  // Calculate current blocks for rendering
  const scheduleBlocks = useMemo(() => {
    return DAYS.map((_, idx) => getDailyBlocks(idx));
  }, []);

  return (
    <div className="flex w-full h-screen bg-[#0f111a] text-slate-300 overflow-hidden font-sans selection:bg-indigo-500/30">
      
      {/* --- Left Split: Schedule Grid (60%) --- */}
      <div className="w-3/5 h-full flex flex-col bg-[#0f111a] relative z-10">
        
        {/* Decorative background gradients for left panel */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[10%] w-[40%] h-[40%] bg-blue-900/5 rounded-full blur-[100px]"></div>
        </div>

        {/* Header: Days */}
        <div className="relative z-10 flex w-full border-b border-white/5 bg-[#0f111a]/95 backdrop-blur-sm">
          <div className="w-16 shrink-0 p-4 flex items-center justify-center text-[10px] text-slate-500 font-bold tracking-widest uppercase">
            Time
          </div>
          <div className="flex-1 grid grid-cols-7">
            {DAYS.map((day, idx) => (
              <div 
                key={day} 
                className={`flex flex-col items-center justify-center py-4 transition-colors duration-300 ${
                  idx === currentDayIndex ? 'bg-white/5' : ''
                }`}
              >
                <span className={`text-xs font-bold tracking-widest uppercase ${
                  idx === currentDayIndex ? 'text-white' : 'text-slate-500'
                }`}>
                  {day}
                </span>
                {idx === currentDayIndex && (
                  <span className="mt-1 w-1 h-1 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]"></span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Body: Scrollable Grid */}
        <div className="relative z-10 flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
          <div className="flex relative min-h-[1440px]"> {/* Fixed min-height to accommodate 24h * 60px */}
            
            {/* Time Column */}
            <div className="w-16 shrink-0 flex flex-col bg-[#0f111a]/50 border-r border-white/5 z-10 sticky left-0">
              {HOURS.map((h) => (
                <div key={h} className="h-[60px] flex items-start justify-center pt-2 text-[10px] font-medium text-slate-600 font-mono">
                  {h.toString().padStart(2, '0')}
                </div>
              ))}
            </div>

            {/* Schedule Grid */}
            <div className="flex-1 grid grid-cols-7">
              {scheduleBlocks.map((blocks, dayIdx) => {
                const isToday = dayIdx === currentDayIndex;

                return (
                  <div key={dayIdx} className={`flex flex-col border-r border-white/5 last:border-r-0 ${isToday ? 'bg-white/2' : ''}`}>
                    {blocks.map((block, idx) => {
                      const item = block.item;
                      const style = TYPE_STYLES[item.type];
                      
                      // Check if the current time falls within this block
                      const isCurrentBlock = isToday && currentHour >= block.start && currentHour < (block.start + block.duration);
                      
                      return (
                        <div 
                          key={`${dayIdx}-${idx}`}
                          className="p-1 flex relative group transition-all duration-300"
                          style={{ height: `${block.duration * 60}px` }} // Dynamic height based on duration
                        >
                          <div className={`w-full h-full rounded-md flex flex-col justify-center items-center px-2 text-center transition-all duration-300 
                            ${isCurrentBlock 
                              ? `bg-slate-800 shadow-lg ring-1 ring-inset ${style.border} z-10 scale-[1.02]` 
                              : `${style.bg} border-l-2 ${style.border} opacity-80 hover:opacity-100 hover:scale-[1.02] hover:z-10`
                            }`}
                          >
                            <div className="flex flex-col items-center gap-2 overflow-hidden">
                              <span className={`${isCurrentBlock ? 'text-white' : style.text} opacity-70`}>
                                {TYPE_ICONS[item.type]}
                              </span>
                              <span className={`text-[11px] font-medium leading-tight ${isCurrentBlock ? 'text-white' : style.text}`}>
                                {item.title}
                              </span>
                              {block.duration > 2 && (
                                <span className="text-[9px] opacity-50 hidden xl:block">
                                  {block.start.toString().padStart(2, '0')}:00 - {(block.start + block.duration).toString().padStart(2, '0')}:00
                                </span>
                              )}
                            </div>
                            
                            {/* Glowing orb for current time block */}
                            {isCurrentBlock && (
                                <div className={`absolute -right-1 -top-1 w-2 h-2 rounded-full bg-white animate-ping ${style.glow}`}></div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            
            {/* Current Time Line Indicator (Horizontal) */}
            <div 
              className="absolute left-16 right-0 h-0.5 bg-red-500/60 z-20 pointer-events-none shadow-[0_0_10px_rgba(239,68,68,0.4)]"
              style={{ 
                top: `${(currentHour * 60) + (now.getMinutes() / 60 * 60)}px` 
              }}
            >
                <div className="absolute -left-1 -top-[3px] w-2 h-2 rounded-full bg-red-500 shadow-md"></div>
                <div className="absolute right-0 -top-2 px-1 text-[9px] font-bold text-red-500 bg-[#0f111a] border border-red-500/30 rounded">
                    NOW
                </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- Right Split: Current Info (40%) --- */}
      <div className="w-2/5 h-full relative flex flex-col items-center justify-center p-12 overflow-hidden bg-[#0a0c10]">
        
        {/* Dynamic Abstract Background */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-30 transition-all duration-1000 bg-linear-to-tr ${activeStyle.gradient}`}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

        {/* Content Container */}
        <div className="z-10 w-full max-w-sm flex flex-col gap-8">
            
            {/* Clock */}
            <div className="flex flex-col items-center">
                <div className="text-8xl font-thin tracking-tighter text-white/90 drop-shadow-lg tabular-nums">
                    {now.toLocaleTimeString('ko-KR', { hour12: false, hour: '2-digit', minute: '2-digit' })}
                    <span className="text-4xl text-white/40 ml-2 font-light">
                        {now.getSeconds().toString().padStart(2, '0')}
                    </span>
                </div>
                <div className="text-white/40 font-light tracking-widest text-sm mt-2 uppercase flex items-center gap-2">
                    {now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </div>
            </div>

            {/* Active Task Card */}
            <div className="relative group perspective-1000">
                <div className={`absolute -inset-1 bg-linear-to-r ${activeStyle.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200`}></div>
                
                <div className="relative p-8 bg-[#13151f]/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl flex flex-col gap-6">
                    
                    {/* Card Header */}
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1">Current Task</span>
                            <h1 className="text-4xl font-bold text-white tracking-tight">{activeSchedule.title}</h1>
                        </div>
                        <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${activeStyle.text} shadow-inner`}>
                            {TYPE_ICONS[activeSchedule.type]}
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-xs font-medium text-white/30">
                            <span>Progress</span>
                            <span>{Math.floor((now.getMinutes() / 60) * 100)}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div 
                                className={`h-full bg-linear-to-r ${activeStyle.gradient} shadow-[0_0_10px_currentColor] transition-all duration-1000`}
                                style={{ width: `${(now.getMinutes() / 60) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="p-4 rounded-lg bg-white/3 border border-white/5">
                         <p className="text-sm text-slate-300 font-light leading-relaxed">
                            {activeSchedule.description}
                        </p>
                    </div>

                    {/* Footer / Next Task */}
                    <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/30">
                            <MoreHorizontal size={14} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-white/30 uppercase tracking-wider">Up Next</span>
                            <span className="text-sm text-white/60 font-medium">
                                {getSchedule(currentDayIndex)[(currentHour + 1) % 24].title}
                            </span>
                        </div>
                        <div className="ml-auto text-xs text-white/30 font-mono">
                            {(currentHour + 1) % 24}:00
                        </div>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </div>
  );
}