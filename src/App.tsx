import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, X, Sparkles, BookOpen } from 'lucide-react';

// --- Types ---
interface NodeData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  x: number; // Pixels relative to center
  y: number; // Pixels relative to center
  size: 'sm' | 'md' | 'lg';
  link: string;
  image: string; // Background Image URL
}

// --- Data Generation ---
const generateNodes = (): NodeData[] => {
  const baseNodes: NodeData[] = [
    {
      id: 'networkquiz',
      title: 'NETWORK QUIZ',
      subtitle: 'Learning Game',
      description: '109개의 필수 네트워크 약어를 게임 형식으로 학습할 수 있습니다. 퀴즈 모드와 무한 단어장 모드로 효과적으로 암기하세요.',
      icon: BookOpen,
      x: 300,
      y: 100,
      size: 'md',
      link: '/network-quiz',
      image: 'https://images.unsplash.com/photo-1562883676-8c6fbf064050?auto=format&fit=crop&q=80&w=800', // Education/Learning
    },
    {
      id: 'neonspace',
      title: 'NEON SPACE',
      subtitle: 'Interactive Art',
      description: '네온 글로우 효과와 상호작용 애니메이션을 통한 시각적 예술 공간입니다. 창의적인 UI/UX 표현의 경계를 탐험합니다.',
      icon: Sparkles,
      x: -200,
      y: 200,
      size: 'md',
      link: '/neonspace',
      image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=800', // Neon/Tech
    },
  ];

  return baseNodes;
};

const NODES = generateNodes();

// --- Components ---

/**
 * StarField: Optimized background using refs to avoid re-renders on drag
 */
interface StarFieldProps {
  panX: number;
  panY: number;
  scale: number;
}

const StarField: React.FC<StarFieldProps> = ({ panX, panY, scale }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewStateRef = useRef({ panX, panY, scale });

  useEffect(() => {
    viewStateRef.current = { panX, panY, scale };
  }, [panX, panY, scale]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = Array.from({ length: 500 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 2 + 0.5,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
    }));

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#02020a');
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const { panX, panY, scale } = viewStateRef.current;

      stars.forEach((star) => {
        const parallaxX = panX * 0.05 * star.z;
        const parallaxY = panY * 0.05 * star.z;
        
        let x = (star.x + parallaxX) % width;
        let y = (star.y + parallaxY) % height;

        if (x < 0) x += width;
        if (y < 0) y += height;

        ctx.beginPath();
        ctx.arc(x, y, star.radius * (scale * 0.5 + 0.5), 0, Math.PI * 2);
        
        const twinkle = Math.sin(Date.now() * 0.003 * star.z + star.x);
        const alpha = Math.max(0.1, Math.min(1, star.alpha + twinkle * 0.2));
        
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

/**
 * NodeItem
 */
interface NodeItemProps {
  data: NodeData;
  isSelected: boolean;
  onClick: (data: NodeData) => void;
}

const NodeItem: React.FC<NodeItemProps> = React.memo(({ data, isSelected, onClick }) => {
  const sizeClasses = {
    sm: 'w-24 h-24 text-xs',
    md: 'w-32 h-32 text-sm',
    lg: 'w-48 h-48 text-base',
  };

  const iconSizes = { sm: 24, md: 32, lg: 48 };

  return (
    <div
      className={`absolute transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer
        ${isSelected ? 'z-30' : 'z-10 hover:z-20'}
      `}
      style={{
        transform: `translate(${data.x}px, ${data.y}px) translate(-50%, -50%)`, 
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick(data);
      }}
    >
      <div className={`transition-transform duration-500 ${isSelected ? 'scale-150' : 'hover:scale-110 animate-float-slow'}`}>
        {/* Glow */}
        <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-500
          ${isSelected ? 'bg-white/50 scale-125' : 'bg-white/10 opacity-0 group-hover:opacity-40 group-hover:scale-110'}
        `} />

        {/* Node Circle Container */}
        <div className={`
          relative flex flex-col items-center justify-center rounded-full border overflow-hidden
          backdrop-blur-md shadow-2xl transition-all duration-500
          ${sizeClasses[data.size]}
          ${isSelected 
            ? 'bg-black/80 border-white text-white shadow-[0_0_50px_rgba(255,255,255,0.6)]' 
            : 'bg-black/30 border-white/30 text-gray-300 hover:border-white/70 hover:text-white hover:bg-black/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'}
        `}>
          {/* Background Image Layer */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 
              ${isSelected ? 'opacity-40' : 'opacity-30 group-hover:opacity-50'}`}
            style={{ backgroundImage: `url(${data.image})` }}
          />
          
          {/* Dark overlay to ensure text/icon visibility */}
          <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${isSelected ? 'bg-black/70' : ''}`} />

          {/* Content Layer (z-10 to sit above image) */}
          <div className="relative z-10 flex flex-col items-center">
            <data.icon size={iconSizes[data.size]} strokeWidth={1.5} className="mb-2 drop-shadow-lg" />
            <span className="font-mono tracking-wider font-bold text-center px-2 opacity-90 select-none drop-shadow-md">
              {data.title}
            </span>
          </div>
          
          {isSelected && (
            <div className="absolute inset-0 rounded-full border border-dashed border-white/40 animate-spin-slow pointer-events-none z-20" />
          )}
        </div>
      </div>
    </div>
  );
});

/**
 * InfoPanel: Enhanced with Image Background Header
 */
interface InfoPanelProps {
  data: NodeData | null;
  onClose: () => void;
  onNavigate?: (path: string) => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ data, onClose, onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = data?.link || '';
    if (link.startsWith('/')) {
      e.preventDefault();
      onNavigate?.(link);
    }
  };
  return (
    <div className={`
      fixed inset-y-0 left-0 z-40 h-full flex flex-col justify-center
      transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none
      ${data ? 'w-full md:w-[55%] opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-20'}
    `}>
      {data && (
        <div 
          className="pointer-events-auto h-full w-full bg-black/80 backdrop-blur-2xl border-r border-white/20 flex flex-col justify-center relative overflow-hidden"
          style={{ boxShadow: '20px 0 50px rgba(0,0,0,0.5)' }}
        >
          {/* --- Image Background Header Section --- */}
          <div className="absolute top-0 left-0 w-full h-1/2 z-0 overflow-hidden">
            {/* The Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-[20s] ease-linear"
              style={{ 
                backgroundImage: `url(${data.image})`,
                // Subtle zoom effect could be added here if desired
              }} 
            />
            {/* Gradient Mask: Fades image into black at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#050505]" />
          </div>

          {/* Decorative Elements */}
          <button 
            onClick={onClose}
            className="absolute top-8 left-8 z-50 text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
          >
            <div className="p-2 bg-black/40 border border-white/10 rounded-full group-hover:bg-white/20 transition-colors backdrop-blur-sm">
              <X size={24} />
            </div>
            <span className="text-sm font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded">CLOSE</span>
          </button>

          <div className="relative z-10 px-8 md:px-16 animate-slide-in-up mt-20">
            {/* Header Content with Image Backdrop */}
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-white/10 rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-sm">
                <data.icon size={48} className="text-white" />
              </div>
              <div>
                <div className="text-xs font-mono text-white/70 mb-1 border-b border-white/20 inline-block pb-1">
                  ID: {data.id.toUpperCase()}
                </div>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  {data.title}
                </h2>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-white/80 font-mono tracking-widest uppercase mb-8 pl-1 border-l-2 border-white/50 drop-shadow-md">
              {data.subtitle}
            </p>

            {/* Content Body */}
            <div className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-12 max-w-2xl bg-black/20 p-4 rounded-lg border border-white/5 backdrop-blur-sm">
              {data.description}
            </div>

            <a 
              href={data.link}
              onClick={handleLinkClick}
              target={data.link.startsWith('/') ? undefined : "_blank"}
              rel={data.link.startsWith('/') ? undefined : "noopener noreferrer"}
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold tracking-[0.2em] hover:bg-gray-200 transition-all overflow-hidden rounded-sm"
            >
              <span className="relative z-10 mr-4">INITIATE CONNECTION</span>
              <ExternalLink size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/50 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const navigate = useNavigate();
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  
  const dragStartRef = useRef({ x: 0, y: 0 });
  const panStartRef = useRef({ x: 0, y: 0 });

  const handleWheel = useCallback((e: React.WheelEvent) => {
    const zoomSensitivity = 0.001;
    const delta = -e.deltaY * zoomSensitivity;
    setScale((prevScale) => {
      const newScale = prevScale + delta;
      return Math.min(Math.max(newScale, 0.3), 3);
    });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (selectedNode) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    panStartRef.current = { ...pan };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || selectedNode) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPan({
      x: panStartRef.current.x + dx,
      y: panStartRef.current.y + dy,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (selectedNode) {
      const targetScreenX = window.innerWidth * 0.75;
      const targetScreenY = window.innerHeight * 0.5;
      const centerOffsetX = window.innerWidth / 2;
      const centerOffsetY = window.innerHeight / 2;

      const targetPanX = (targetScreenX - centerOffsetX) / scale - selectedNode.x;
      const targetPanY = (targetScreenY - centerOffsetY) / scale - selectedNode.y;

      setPan({ x: targetPanX, y: targetPanY });
    }
  }, [selectedNode, scale]);

  return (
    <div 
      className={`relative w-full h-screen bg-black overflow-hidden font-sans select-none 
        ${isDragging ? 'cursor-grabbing' : selectedNode ? 'cursor-default' : 'cursor-grab'}
      `}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      <style>{`
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite alternate;
        }
        @keyframes slide-in-up {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <StarField panX={pan.x} panY={pan.y} scale={scale} />
      
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-0" />
      <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-[1]" />

      <div 
        className="absolute top-1/2 left-1/2 will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          transform: `translate(-50%, -50%) scale(${scale}) translate(${pan.x}px, ${pan.y}px)`,
        }}
      >
        <div className="absolute -top-[500px] left-0 -translate-x-1/2 w-[1500px] text-center pointer-events-none z-0 opacity-10 select-none">
             <h1 className="text-[200px] font-black text-white tracking-[0.2em] blur-[4px]">UNIVERSE</h1>
        </div>

        {NODES.map((node) => (
          <NodeItem 
            key={node.id} 
            data={node} 
            isSelected={selectedNode?.id === node.id}
            onClick={setSelectedNode} 
          />
        ))}

        <svg className="absolute top-0 left-0 overflow-visible pointer-events-none z-0 opacity-10">
           {NODES.map((node, i) => (
             i < 5 && (
               <line 
                  key={`line-${i}`}
                  x1={0} y1={0} 
                  x2={node.x} y2={node.y} 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeDasharray="10,10" 
                />
             )
           ))}
        </svg>

        <div className="absolute top-0 left-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full" />
        <div className="absolute top-0 left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white/20 rounded-full" />
      </div>

      <header className={`absolute top-8 left-0 w-full text-center pointer-events-none z-30 transition-opacity duration-500 ${selectedNode ? 'opacity-0' : 'opacity-100'}`}>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-[0.2em]" style={{ textShadow: '0 0 30px rgba(255,255,255,0.2)' }}>
          NEXUS
        </h1>
        <div className="mt-4 flex justify-center gap-4">
          <span className="text-xs font-mono text-white/50 border border-white/20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm">SCROLL TO ZOOM</span>
          <span className="text-xs font-mono text-white/50 border border-white/20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm">DRAG TO MOVE</span>
        </div>
      </header>

      <InfoPanel 
        data={selectedNode} 
        onClose={() => setSelectedNode(null)}
        onNavigate={navigate}
      />

      <div className={`absolute bottom-6 right-8 z-30 text-right font-mono text-[10px] text-white/30 transition-opacity ${selectedNode ? 'opacity-0' : 'opacity-100'}`}>
        <div className="mb-1">POS X: {Math.round(-pan.x)}</div>
        <div className="mb-1">POS Y: {Math.round(-pan.y)}</div>
        <div>ZOOM: {Math.round(scale * 100)}%</div>
      </div>
    </div>
  );
};

export default App;