import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Upload, Volume2, VolumeX, Shuffle, Image as ImageIcon, Music } from 'lucide-react';

// --- Types ---
type SortAlgorithm = 'bubble' | 'selection' | 'insertion' | 'quick' | 'merge' | 'heap' | 'radix';

interface AudioController {
  loadAudio: (file: File) => Promise<void>;
  playSlice: (value: number, max: number) => void;
  playFull: () => void;
  stop: () => void;
  hasAudio: () => boolean;
}

// --- Constants ---
const SAMPLE_RATE = 20; // Throttling audio updates to prevent performance issues
const SLICE_DURATION = 0.08; // Duration of each audio slice in seconds (e.g., 80ms)
const DEFAULT_IMAGE_URL = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80";

// --- Audio Logic (Modified for Sample Playback) ---
const createAudioController = (enabled: boolean): AudioController => {
  let audioCtx: AudioContext | null = null;
  let masterGain: GainNode | null = null;
  let audioBuffer: AudioBuffer | null = null;
  let currentSource: AudioBufferSourceNode | null = null;

  const init = () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      masterGain = audioCtx.createGain();
      masterGain.connect(audioCtx.destination);
      masterGain.gain.value = 0.8; // Master volume
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
  };

  const loadAudio = async (file: File) => {
    init();
    if (!audioCtx) return;
    try {
      const arrayBuffer = await file.arrayBuffer();
      const decodedBuffer = await audioCtx.decodeAudioData(arrayBuffer);
      audioBuffer = decodedBuffer;
      console.log("Audio loaded successfully");
    } catch (e) {
      console.error("Error decoding audio data:", e);
      alert("오디오 파일을 디코딩하는 데 실패했습니다. 다른 파일을 시도해주세요.");
    }
  };

  const playSlice = (value: number, max: number) => {
    if (!enabled || !audioCtx || !masterGain || !audioBuffer) return;
    init();

    // Calculate start time based on the value's position relative to the max
    const positionRatio = value / max;
    let startTime = positionRatio * audioBuffer.duration;
    // Ensure we don't try to play past the end
    if (startTime + SLICE_DURATION > audioBuffer.duration) {
        startTime = audioBuffer.duration - SLICE_DURATION;
    }
    if (startTime < 0) startTime = 0;

    // Create source for this slice
    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffer;
    
    // Create a temporary gain node for smooth envelope (prevents clicking)
    const sliceGain = audioCtx.createGain();
    source.connect(sliceGain);
    sliceGain.connect(masterGain);

    const now = audioCtx.currentTime;
    // Quick fade in/out envelope
    sliceGain.gain.setValueAtTime(0, now);
    sliceGain.gain.linearRampToValueAtTime(1, now + 0.01);
    sliceGain.gain.linearRampToValueAtTime(0, now + SLICE_DURATION);

    // Start playing the slice
    source.start(now, startTime, SLICE_DURATION + 0.02); // Add buffer for ramp down
  };

  const playFull = () => {
    if (!enabled || !audioCtx || !masterGain || !audioBuffer) return;
    init();
    stop(); // Stop any currently playing slices

    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(masterGain);
    source.start(0); // Play from beginning
    currentSource = source;
    
    source.onended = () => {
        currentSource = null;
    };
  };

  const stop = () => {
    if (currentSource) {
      try {
        currentSource.stop();
      } catch(e) { /* ignore if already stopped */ }
      currentSource = null;
    }
  };

  const hasAudio = () => !!audioBuffer;

  return { loadAudio, playSlice, playFull, stop, hasAudio };
};

// --- Main Component ---
export default function PixelSortVisualizer() {
  // State
  const [imageSrc, setImageSrc] = useState<string>(DEFAULT_IMAGE_URL);
  const [audioFileName, setAudioFileName] = useState<string | null>(null);
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(true);
  const [algorithm, setAlgorithm] = useState<SortAlgorithm>('quick');
  const [speed, setSpeed] = useState<number>(50);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [arraySize, setArraySize] = useState(0);
  const [pixelSize, setPixelSize] = useState<number>(1);

  // Refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sourceImageRef = useRef<HTMLImageElement | null>(null);
  const indicesRef = useRef<number[]>([]);
  const abortControllerRef = useRef<boolean>(false);
  const audioRef = useRef<AudioController | null>(null);

  // Initialize Audio Controller
  useEffect(() => {
    audioRef.current = createAudioController(soundEnabled);
    // If sound is disabled while playing, stop.
    if (!soundEnabled) {
        audioRef.current?.stop();
    }
  }, [soundEnabled]);

  // Load Image
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;
    img.onload = () => {
      sourceImageRef.current = img;
      resetCanvas(img);
    };
  }, [imageSrc, pixelSize]);

  // --- Canvas Helpers ---
  const resetCanvas = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const maxWidth = 600;
    const baseWidth = Math.floor(img.width / pixelSize);
    const scale = Math.min(1, maxWidth / baseWidth);
    const width = Math.floor(baseWidth * scale);
    const height = Math.floor(img.height * scale);

    canvas.width = width;
    canvas.height = height;
    
    indicesRef.current = Array.from({ length: width }, (_, k) => k);
    setArraySize(width);
    setIsSorted(true);

    draw(indicesRef.current);
  };

  const draw = (currentIndices: number[]) => {
    const canvas = canvasRef.current;
    const img = sourceImageRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scaleX = img.width / canvas.width * pixelSize;

    for (let i = 0; i < currentIndices.length; i++) {
        const sourceX = currentIndices[i] * scaleX;
        ctx.drawImage(
            img, 
            sourceX, 0, scaleX, img.height, // Source slice
            i, 0, 1, canvas.height // Dest location
        );
    }
  };

  // --- Async Control ---
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  
  const checkAbort = () => {
    if (abortControllerRef.current) {
        throw new Error("Aborted");
    }
  };

  // --- Handlers ---
  const handleShuffle = async () => {
    if (isSorting) return;
    
    const arr = [...indicesRef.current];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    indicesRef.current = arr;
    draw(arr);
    setIsSorted(false);
    // Stop any full playback if shuffling
    audioRef.current?.stop();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) setImageSrc(ev.target.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAudioUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && audioRef.current) {
          setAudioFileName("Loading audio...");
          await audioRef.current.loadAudio(file);
          setAudioFileName(file.name);
      }
  };

  // --- Sorting Logic ---
  const runSort = async () => {
    if (isSorting || isSorted) return;
    setIsSorting(true);
    abortControllerRef.current = false;
    audioRef.current?.stop(); // Stop previous sounds
    
    const delay = Math.max(0, (100 - speed) / 2); 

    try {
        const arr = [...indicesRef.current];
        const n = arr.length;

        const update = async (idx: number) => {
            indicesRef.current = arr;
            draw(arr);
            
            // Play audio slice based on the value at the current index
            if (idx % SAMPLE_RATE === 0 && soundEnabled) {
                 // arr[idx] is the original position value. 
                 // Map this value to a timestamp in the audio file.
                 audioRef.current?.playSlice(arr[idx], n);
            }
            if (delay > 0) await sleep(delay);
            checkAbort();
        };

        // --- Algorithm Implementations (Compact for brevity) ---
        if (algorithm === 'bubble') {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                        await update(j);
                    }
                }
            }
        } else if (algorithm === 'selection') {
             for (let i = 0; i < n; i++) {
                 let minIdx = i;
                 for (let j = i + 1; j < n; j++) {
                     if (arr[j] < arr[minIdx]) minIdx = j;
                 }
                 if (minIdx !== i) {
                     [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
                     await update(i);
                 }
             }
        } else if (algorithm === 'insertion') {
            for (let i = 1; i < n; i++) {
                let key = arr[i];
                let j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                    if(j % 5 === 0) await update(j);
                }
                arr[j + 1] = key;
                await update(i);
            }
        } else if (algorithm === 'quick') {
            const partition = async (low: number, high: number) => {
                const pivot = arr[high];
                let i = low - 1;
                for (let j = low; j < high; j++) {
                    checkAbort();
                    if (arr[j] < pivot) {
                        i++;
                        [arr[i], arr[j]] = [arr[j], arr[i]];
                        if (j % 3 === 0) await update(j);
                    }
                }
                [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
                await update(high);
                return i + 1;
            };
            const quickSort = async (low: number, high: number) => {
                if (low < high) {
                    const pi = await partition(low, high);
                    await quickSort(low, pi - 1);
                    await quickSort(pi + 1, high);
                }
            };
            await quickSort(0, n - 1);
        } else if (algorithm === 'heap') {
             const heapify = async (n: number, i: number) => {
                let largest = i; const l = 2 * i + 1; const r = 2 * i + 2;
                if (l < n && arr[l] > arr[largest]) largest = l;
                if (r < n && arr[r] > arr[largest]) largest = r;
                if (largest !== i) {
                    [arr[i], arr[largest]] = [arr[largest], arr[i]];
                    await update(i); await heapify(n, largest);
                }
            };
            for (let i = Math.floor(n / 2) - 1; i >= 0; i--) await heapify(n, i);
            for (let i = n - 1; i > 0; i--) {
                [arr[0], arr[i]] = [arr[i], arr[0]]; await update(i); await heapify(i, 0);
            }
        } else if (algorithm === 'radix') {
            const getMax = (arr: number[]) => Math.max(...arr); const m = getMax(arr);
            for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
                const output = new Array(n).fill(0); const count = new Array(10).fill(0);
                for (let i = 0; i < n; i++) count[Math.floor(arr[i] / exp) % 10]++;
                for (let i = 1; i < 10; i++) count[i] += count[i - 1];
                for (let i = n - 1; i >= 0; i--) {
                    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
                    count[Math.floor(arr[i] / exp) % 10]--;
                }
                for (let i = 0; i < n; i++) {
                    arr[i] = output[i]; if (i % 3 === 0) await update(i);
                }
            }
        } else if (algorithm === 'merge') {
            const merge = async (l: number, m: number, r: number) => {
                const L = arr.slice(l, m + 1); const R = arr.slice(m + 1, r + 1);
                let i = 0, j = 0, k = l;
                while (i < L.length && j < R.length) {
                    checkAbort();
                    if (L[i] <= R[j]) { arr[k] = L[i]; i++; } else { arr[k] = R[j]; j++; }
                    if (k % 2 === 0) await update(k); k++;
                }
                while (i < L.length) { arr[k] = L[i]; i++; k++; if (k % 2 === 0) await update(k); }
                while (j < R.length) { arr[k] = R[j]; j++; k++; if (k % 2 === 0) await update(k); }
            };
            const mergeSort = async (l: number, r: number) => {
                if(l >= r) return; const m = l + Math.floor((r - l) / 2);
                await mergeSort(l, m); await mergeSort(m + 1, r); await merge(l, m, r);
            };
            await mergeSort(0, n - 1);
        }

        // --- Finish ---
        setIsSorted(true);
        draw(indicesRef.current);
        
        // Play full audio on success
        if (soundEnabled && audioRef.current?.hasAudio()) {
             audioRef.current.playFull();
        }
        
    } catch (e) {
        console.log("Sorting aborted or error:", e);
    } finally {
        setIsSorting(false);
        // Do not stop audio here so the full song can play
    }
  };

  const handleStop = () => {
    abortControllerRef.current = true;
    setIsSorting(false);
    audioRef.current?.stop();
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans selection:bg-purple-500 selection:text-white flex flex-col items-center p-4">
      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center mb-8 border-b border-neutral-800 pb-4">
        <div className="flex items-center gap-2">
            <ImageIcon className="text-purple-400" size={24} />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Pixel Sort Audio Visualizer
            </h1>
        </div>
        <div className="flex gap-4 text-sm text-neutral-400">
            <span>{arraySize > 0 ? `${arraySize} Columns` : 'Loading...'}</span>
            <span>{isSorting ? 'Sorting...' : isSorted ? 'Sorted' : 'Ready'}</span>
        </div>
      </header>

      {/* Main Display Area */}
      <main className="w-full max-w-4xl flex flex-col items-center gap-6">
        
        {/* Canvas Container */}
        <div className="relative group w-full flex justify-center bg-black/40 rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20 border border-neutral-800 backdrop-blur-sm min-h-[300px]">
          <canvas 
            ref={canvasRef} 
            className="max-w-full h-auto object-contain cursor-pointer transition-opacity"
            onClick={isSorting ? undefined : handleShuffle}
            title="Click to Shuffle"
          />
          
          {/* Overlay Guide */}
          {isSorted && !isSorting && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="flex items-center gap-2 text-white font-medium">
                <Shuffle size={16} /> 클릭해서 섞기
              </span>
            </div>
          )}
        </div>

        {/* Controls Panel */}
        <div className="w-full bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700 backdrop-blur-md">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            
            {/* Algorithm & Speed */}
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <div className="flex items-center gap-3">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Algorithm</label>
                <select 
                  value={algorithm} 
                  onChange={(e) => setAlgorithm(e.target.value as SortAlgorithm)}
                  disabled={isSorting}
                  className="bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                >
                  <option value="bubble">Bubble Sort (Slow)</option>
                  <option value="selection">Selection Sort</option>
                  <option value="insertion">Insertion Sort</option>
                  <option value="quick">Quick Sort (Fast)</option>
                  <option value="merge">Merge Sort</option>
                  <option value="heap">Heap Sort</option>
                  <option value="radix">Radix Sort (Very Fast)</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider w-16">Speed</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={speed} 
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="flex items-center gap-3">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider w-16">Pixel Size</label>
                <div className="flex items-center gap-2 w-full">
                  <input 
                    type="range" 
                    min="1" 
                    max="20" 
                    value={pixelSize} 
                    onChange={(e) => setPixelSize(Number(e.target.value))}
                    disabled={isSorting}
                    className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-purple-500 disabled:opacity-50"
                  />
                  <span className="text-sm text-neutral-400 min-w-[2rem]">{pixelSize}x</span>
                </div>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-3">
               <button 
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`p-3 rounded-full transition-all ${soundEnabled ? 'bg-neutral-700 text-purple-300 hover:bg-neutral-600' : 'bg-neutral-800 text-neutral-500'}`}
                title={soundEnabled ? "Mute" : "Unmute"}
              >
                {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
              </button>

              {!isSorting ? (
                <>
                    <button 
                        onClick={handleShuffle}
                        className="flex items-center gap-2 px-6 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg font-medium transition-all"
                    >
                        <Shuffle size={18} /> 섞기
                    </button>
                    <button 
                        onClick={runSort}
                        disabled={isSorted}
                        className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-white shadow-lg shadow-purple-900/50 transition-all transform hover:scale-105
                            ${isSorted ? 'bg-neutral-700 opacity-50 cursor-not-allowed' : (!audioFileName && soundEnabled) ? 'bg-yellow-600 hover:bg-yellow-500' : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500'}`}
                        title={(!audioFileName && soundEnabled) ? "오디오 파일이 없으면 소리가 나지 않습니다" : "정렬 시작"}
                    >
                        <Play size={18} fill="currentColor" /> 정렬 시작
                    </button>
                </>
              ) : (
                <button 
                    onClick={handleStop}
                    className="flex items-center gap-2 px-8 py-3 bg-red-500/10 text-red-400 border border-red-500/50 hover:bg-red-500/20 rounded-lg font-bold transition-all"
                >
                   <RotateCcw size={18} /> 중지
                </button>
              )}
            </div>
          </div>

          {/* Upload Controls */}
          <div className="mt-6 pt-4 border-t border-neutral-700 flex flex-wrap gap-4 justify-between items-center">
             <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-400 hover:text-white transition-colors bg-neutral-800 px-3 py-2 rounded-lg hover:bg-neutral-700">
                    <Upload size={16} />
                    <span>이미지 업로드</span>
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </label>
                <label className={`flex items-center gap-2 cursor-pointer text-sm px-3 py-2 rounded-lg transition-colors ${audioFileName ? 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30' : 'text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700'}`}>
                    <Music size={16} />
                    <span className="truncate max-w-[150px]">{audioFileName || "오디오 파일(.mp3) 업로드"}</span>
                    <input type="file" accept="audio/*" onChange={handleAudioUpload} className="hidden" />
                </label>
             </div>

             <button 
                onClick={() => { setImageSrc(DEFAULT_IMAGE_URL); setAudioFileName(null); audioRef.current?.stop(); }}
                className="text-xs text-neutral-500 hover:text-neutral-300 underline"
             >
                초기화
             </button>
          </div>
        </div>
      </main>

       {/* Explanation */}
       <footer className="mt-8 text-center text-neutral-500 text-xs max-w-lg leading-relaxed">
        <p>이미지를 섞은 후 정렬되는 과정을 시각화합니다.</p>
        <p>
            {audioFileName 
                ? "업로드된 오디오 파일이 정렬 위치에 맞춰 조각나서 재생되며, 정렬이 완료되면 전체 곡이 재생됩니다." 
                : "오디오 파일을 업로드하면 정렬 과정에 맞춰 사운드가 재생됩니다."}
        </p>
      </footer>
    </div>
  );
}