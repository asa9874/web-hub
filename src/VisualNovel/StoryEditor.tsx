import React, { useState, useEffect } from 'react';
import type { ScriptScene } from './types';

interface SceneNode {
  id: string;
  sceneFile: string;
  title: string;
  chapter: number;
  x: number;
  y: number;
  connections: string[];
}

interface ValidationIssue {
  sceneFile: string;
  sceneTitle: string;
  lineId: string;
  text: string;
  issueType: 'no_next' | 'orphan_choice';
}

// 챕터별 색상 팔레트
const chapterColors = {
  1: { bg: 'bg-blue-100', border: 'border-blue-400', text: 'text-blue-800', gradient: 'from-blue-400 to-blue-500' },
  2: { bg: 'bg-green-100', border: 'border-green-400', text: 'text-green-800', gradient: 'from-green-400 to-green-500' },
  3: { bg: 'bg-orange-100', border: 'border-orange-400', text: 'text-orange-800', gradient: 'from-orange-400 to-orange-500' },
  4: { bg: 'bg-purple-100', border: 'border-purple-400', text: 'text-purple-800', gradient: 'from-purple-400 to-purple-500' },
  5: { bg: 'bg-pink-100', border: 'border-pink-400', text: 'text-pink-800', gradient: 'from-pink-400 to-pink-500' }
};

const StoryEditor: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [scenes, setScenes] = useState<Record<string, ScriptScene>>({});
  const [nodes, setNodes] = useState<SceneNode[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedScene, setSelectedScene] = useState<ScriptScene | null>(null);
  const [validationIssues, setValidationIssues] = useState<ValidationIssue[]>([]);
  const [showValidation, setShowValidation] = useState(false);
  
  // Pan & Zoom 상태
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const loadScenes = async () => {
      setIsLoading(true);
      const loadedScenes: Record<string, ScriptScene> = {};
      const toLoad: string[] = ['Chapter1/chapter1_entrance.json']; // 시작점
      const loaded = new Set<string>();

      console.log('🎬 스토리 그래프 로딩 시작...');

      // BFS 방식으로 연결된 모든 씬 탐색
      while (toLoad.length > 0) {
        const sceneFile = toLoad.shift()!;
        
        // 이미 로드했거나 로드 중이면 스킵
        if (loaded.has(sceneFile)) continue;
        loaded.add(sceneFile);

        try {
          console.log(`📄 로딩 시도: ${sceneFile}`);
          const response = await fetch(`/web-hub/VisualNovel/Script/${sceneFile}`);
          
          if (!response.ok) {
            console.warn(`⚠️ 씬 로드 실패 (${response.status}): ${sceneFile}`);
            continue;
          }
          
          const scene = await response.json() as ScriptScene;
          loadedScenes[sceneFile] = scene;
          console.log(`✅ 로드 완료: ${sceneFile} (${scene.title})`);

          // 이 씬에서 연결된 다른 씬들을 찾아서 큐에 추가
          scene.lines.forEach(line => {
            // 직접 연결된 씬
            if (line.nextSceneFile && !loaded.has(line.nextSceneFile)) {
              console.log(`  → 다음 씬 발견: ${line.nextSceneFile}`);
              toLoad.push(line.nextSceneFile);
            }
            
            // 선택지를 통해 연결된 씬들
            if (line.choices) {
              line.choices.forEach(choice => {
                if (choice.nextSceneFile && !loaded.has(choice.nextSceneFile)) {
                  console.log(`  → 선택지 씬 발견: ${choice.nextSceneFile}`);
                  toLoad.push(choice.nextSceneFile);
                }
              });
            }
          });
        } catch (error) {
          console.error(`❌ 씬 로드 에러: ${sceneFile}`, error);
        }
      }
      
      console.log(`🎉 총 ${Object.keys(loadedScenes).length}개의 씬을 로드했습니다.`);
      console.log('로드된 씬 목록:', Object.keys(loadedScenes));
      
      // 로드되지 않은 씬 찾기
      const referencedScenes = new Set<string>();
      Object.values(loadedScenes).forEach(scene => {
        scene.lines.forEach(line => {
          if (line.nextSceneFile) referencedScenes.add(line.nextSceneFile);
          if (line.choices) {
            line.choices.forEach(choice => {
              if (choice.nextSceneFile) referencedScenes.add(choice.nextSceneFile);
            });
          }
        });
      });
      
      const missingScenes = Array.from(referencedScenes).filter(
        scene => !Object.keys(loadedScenes).includes(scene)
      );
      
      if (missingScenes.length > 0) {
        console.warn(`⚠️ ${missingScenes.length}개의 참조된 씬이 존재하지 않습니다:`);
        missingScenes.forEach(scene => {
          console.warn(`  - ${scene}`);
          // 미구현 씬을 가상 객체로 생성
          loadedScenes[scene] = {
            sceneId: `missing_${scene}`,
            title: '미구현',
            chapter: 0,
            startId: 'missing',
            lines: [{
              id: 'missing',
              type: 'dialogue',
              text: '이 씬은 아직 구현되지 않았습니다.'
            }]
          };
        });
      }
      
      setScenes(loadedScenes);
      validateScripts(loadedScenes);
      generateGraph(loadedScenes);
      setIsLoading(false);
    };

    loadScenes();
  }, []);

  const validateScripts = (loadedScenes: Record<string, ScriptScene>) => {
    const issues: ValidationIssue[] = [];

    Object.entries(loadedScenes).forEach(([sceneFile, scene]) => {
      scene.lines.forEach(line => {
        // 엔딩 라인은 검사하지 않음
        if (line.isEnding) return;

        // 선택지 라인이 아닌 대화 라인 검사
        if (line.type === 'dialogue') {
          // nextScriptId와 nextSceneFile이 모두 없으면 문제
          if (!line.nextScriptId && !line.nextSceneFile) {
            issues.push({
              sceneFile,
              sceneTitle: scene.title,
              lineId: line.id,
              text: line.text,
              issueType: 'no_next'
            });
          }
        }

        // 선택지 라인 검사
        if (line.type === 'choice' && line.choices) {
          line.choices.forEach(choice => {
            if (!choice.nextScriptId && !choice.nextSceneFile) {
              issues.push({
                sceneFile,
                sceneTitle: scene.title,
                lineId: `${line.id} (선택: ${choice.text})`,
                text: choice.text,
                issueType: 'orphan_choice'
              });
            }
          });
        }
      });
    });

    console.log(`\n🔍 검증 완료: ${issues.length}개의 문제 발견`);
    if (issues.length > 0) {
      console.warn('문제 있는 라인들:');
      issues.forEach(issue => {
        console.warn(`  - ${issue.sceneFile} / ${issue.lineId}`);
      });
    }
    
    setValidationIssues(issues);
  };

  const generateGraph = (loadedScenes: Record<string, ScriptScene>) => {
    const graphNodes: SceneNode[] = [];
    const connections: Record<string, Set<string>> = {};
    const parentMap: Record<string, Set<string>> = {}; // child -> parents
    const childrenMap: Record<string, Set<string>> = {}; // parent -> children

    // 각 씬의 연결 관계 파싱
    Object.entries(loadedScenes).forEach(([sceneFile, scene]) => {
      if (!connections[sceneFile]) {
        connections[sceneFile] = new Set();
      }
      if (!childrenMap[sceneFile]) {
        childrenMap[sceneFile] = new Set();
      }

      scene.lines.forEach(line => {
        if (line.nextSceneFile) {
          connections[sceneFile].add(line.nextSceneFile);
          childrenMap[sceneFile].add(line.nextSceneFile);
          if (!parentMap[line.nextSceneFile]) {
            parentMap[line.nextSceneFile] = new Set();
          }
          parentMap[line.nextSceneFile].add(sceneFile);
        }
        if (line.choices) {
          line.choices.forEach(choice => {
            if (choice.nextSceneFile) {
              connections[sceneFile].add(choice.nextSceneFile);
              childrenMap[sceneFile].add(choice.nextSceneFile);
              if (!parentMap[choice.nextSceneFile]) {
                parentMap[choice.nextSceneFile] = new Set();
              }
              parentMap[choice.nextSceneFile].add(sceneFile);
            }
          });
        }
      });
    });

    // BFS로 깊이 계산 (깊이 제한 없음 - 모든 부모 경로 고려)
    const depths: Record<string, number> = {};
    const startNode = 'Chapter1/chapter1_entrance.json';
    const queue: Array<{ sceneFile: string; depth: number }> = [{ sceneFile: startNode, depth: 0 }];
    const visitedPairs = new Set<string>(); // 순환 참조만 방지

    while (queue.length > 0) {
      const { sceneFile, depth } = queue.shift()!;
      
      // 각 노드의 최대 깊이만 저장 (여러 경로 중 가장 깊은 것)
      if (!(sceneFile in depths) || depths[sceneFile] < depth) {
        depths[sceneFile] = depth;
      }

      const children = childrenMap[sceneFile] || new Set();
      children.forEach(child => {
        const pairKey = `${sceneFile}->${child}`;
        // 같은 부모-자식 쌍은 한 번만 처리 (순환 참조 방지)
        if (!visitedPairs.has(pairKey)) {
          visitedPairs.add(pairKey);
          queue.push({ sceneFile: child, depth: depth + 1 });
        }
      });
    }

    // 깊이별로 노드 그룹화
    const nodesByDepth: Record<number, string[]> = {};
    Object.entries(depths).forEach(([sceneFile, depth]) => {
      if (!nodesByDepth[depth]) nodesByDepth[depth] = [];
      nodesByDepth[depth].push(sceneFile);
    });

    // 미구현 씬들의 깊이 계산 (부모의 깊이 + 1)
    Object.entries(loadedScenes).forEach(([sceneFile, scene]) => {
      if (scene.chapter === 0 && !(sceneFile in depths)) {
        // 이 미구현 씬의 부모를 찾기
        let maxParentDepth = 0;
        Object.entries(loadedScenes).forEach(([parentFile, parentScene]) => {
          parentScene.lines.forEach(line => {
            if (line.nextSceneFile === sceneFile || 
                (line.choices && line.choices.some(c => c.nextSceneFile === sceneFile))) {
              maxParentDepth = Math.max(maxParentDepth, depths[parentFile] || 0);
            }
          });
        });
        depths[sceneFile] = maxParentDepth + 1;
        const depth = depths[sceneFile];
        if (!nodesByDepth[depth]) nodesByDepth[depth] = [];
        nodesByDepth[depth].push(sceneFile);
      }
    });

    const nodeWidth = 280;
    const nodeHeight = 250;
    const positions: Record<string, { x: number; y: number }> = {};

    // 깊이별로 노드 배치
    Object.entries(nodesByDepth).forEach(([depthStr, sceneFiles]) => {
      const depth = parseInt(depthStr);
      const y = 100 + depth * nodeHeight;

      if (depth === 0) {
        // 루트 노드는 중앙에 배치
        const rootX = 1000;
        sceneFiles.forEach(sceneFile => {
          positions[sceneFile] = { x: rootX, y };
        });
      } else {
        // 부모별로 자식들을 그룹화
        const parentGroups: Record<string, string[]> = {};
        sceneFiles.forEach(sceneFile => {
          const parents = Array.from(parentMap[sceneFile] || []);
          const parentKey = parents.sort().join(',') || 'orphan';
          if (!parentGroups[parentKey]) {
            parentGroups[parentKey] = [];
          }
          parentGroups[parentKey].push(sceneFile);
        });

        // 각 그룹별로 부모 중심으로 배치
        Object.entries(parentGroups).forEach(([parentKey, children]) => {
          const parents = parentKey === 'orphan' ? [] : parentKey.split(',');
          
          // 부모들의 평균 x 위치 계산
          let centerX = 1000; // 기본값
          if (parents.length > 0) {
            const parentXs = parents.map(p => positions[p]?.x).filter(x => x !== undefined) as number[];
            if (parentXs.length > 0) {
              centerX = parentXs.reduce((a, b) => a + b, 0) / parentXs.length;
            }
          }

          // 자식들을 부모 중심으로 좌우 대칭 배치
          const totalWidth = children.length * nodeWidth;
          const startX = centerX - totalWidth / 2 + nodeWidth / 2;

          children.forEach((sceneFile, index) => {
            positions[sceneFile] = {
              x: startX + index * nodeWidth,
              y: y
            };
          });
        });
      }
    });

    // 그래프 노드 생성
    Object.entries(loadedScenes).forEach(([sceneFile, scene]) => {
      const pos = positions[sceneFile];
      if (pos) {
        graphNodes.push({
          id: scene.sceneId,
          sceneFile: sceneFile,
          title: scene.title,
          chapter: scene.chapter,
          x: pos.x,
          y: pos.y,
          connections: Array.from(connections[sceneFile] || [])
        });
      }
    });

    console.log('📊 그래프 생성 완료:', graphNodes.length, '개의 노드');
    setNodes(graphNodes);
  };

  // 그래프 캔버스 크기 계산
  const getCanvasSize = () => {
    if (nodes.length === 0) return { width: 4000, height: 3000 };
    
    let maxX = 0;
    let maxY = 0;
    
    nodes.forEach(node => {
      maxX = Math.max(maxX, node.x + 150); // 노드 폭 고려
      maxY = Math.max(maxY, node.y + 150); // 노드 높이 고려
    });
    
    // 여유 공간 추가
    return {
      width: Math.max(4000, maxX + 200),
      height: Math.max(3000, maxY + 200)
    };
  };

  // 마우스 드래그 핸들러
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) { // 왼쪽 마우스 버튼
      setIsDragging(true);
      setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 줌 핸들러
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.min(Math.max(0.1, scale * delta), 3);
    setScale(newScale);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#2D1115] z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-pink-300 border-t-pink-600 mb-4" />
          <p className="text-2xl text-pink-600 font-bold">로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#2D1115] z-50 overflow-auto">
      {/* 검증 경고 배너 */}
      {validationIssues.length > 0 && (
        <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white p-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">⚠️ 스크립트 검증 오류 발견!</h3>
                <p className="text-sm text-white/90">{validationIssues.length}개의 문제 있는 라인이 있습니다</p>
              </div>
            </div>
            <button
              onClick={() => setShowValidation(!showValidation)}
              className="bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2 transition-colors"
            >
              {showValidation ? '숨기기' : '상세보기'}
            </button>
          </div>

          {/* 상세 내용 */}
          {showValidation && (
            <div className="mt-4 max-w-7xl mx-auto max-h-96 overflow-y-auto bg-black/20 rounded-lg p-4">
              <div className="space-y-2">
                {validationIssues.map((issue, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-mono text-white/80">{issue.sceneFile}</p>
                        <p className="text-xs text-white/60">라인: {issue.lineId}</p>
                        <p className="text-sm mt-1 text-white/90">"{issue.text.substring(0, 60)}..."</p>
                      </div>
                      <span className={`whitespace-nowrap ml-4 px-3 py-1 rounded-full text-xs font-bold ${
                        issue.issueType === 'no_next' 
                          ? 'bg-red-500/30 text-red-200' 
                          : 'bg-orange-500/30 text-orange-200'
                      }`}>
                        {issue.issueType === 'no_next' ? '다음 라인 없음' : '선택지 오류'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 헤더 */}
      <div className="sticky top-0 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 shadow-lg z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold">스토리 그래프 편집기</h1>
            <p className="text-sm text-pink-100">챕터별 씬 연결 관계를 시각화합니다</p>
          </div>
          <div className="flex items-center gap-4">
            {/* 챕터 범례 */}
            <div className="flex gap-3 text-xs">
              {[1, 2, 3, 4, 5].map(chapter => (
                <div key={chapter} className="flex items-center gap-1">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${chapterColors[chapter as keyof typeof chapterColors].gradient}`} />
                  <span className="text-white/90">Ch{chapter}</span>
                </div>
              ))}
            </div>
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 rounded-lg px-6 py-2 transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      </div>

      {/* 그래프 영역 */}
      <div 
        className="relative w-full h-[calc(100vh-80px)] overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        <div 
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transformOrigin: '0 0',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            width: `${getCanvasSize().width}px`,
            height: `${getCanvasSize().height}px`,
            position: 'relative'
          }}
        >
          <svg className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
          <defs>
            {/* 챕터별 화살표 마커 */}
            {[0, 1, 2, 3, 4, 5].map(chapter => {
              const colors = {
                0: '#8b5cf6',
                1: '#3b82f6', 2: '#22c55e', 3: '#f97316', 4: '#a855f7', 5: '#ec4899'
              };
              return (
                <marker
                  key={`arrow-${chapter}`}
                  id={`arrowhead-${chapter}`}
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill={colors[chapter as keyof typeof colors]} />
                </marker>
              );
            })}
          </defs>
          
          {/* 연결선 그리기 (곡선) */}
          {nodes.map(node => 
            node.connections.map(targetSceneFile => {
              const target = nodes.find(n => n.sceneFile === targetSceneFile);
              if (!target) return null;

              const startX = node.x + 60;
              const startY = node.y + 120;
              const endX = target.x + 60;
              const endY = target.y;
              
              // 베지어 곡선 제어점 계산 (상->하)
              const dx = endX - startX;
              const dy = endY - startY;
              const controlX1 = startX;
              const controlY1 = startY + dy * 0.5;
              const controlX2 = endX;
              const controlY2 = startY + dy * 0.5;
              
              // 챕터 간 이동인 경우 특별 처리
              const isCrossChapter = node.chapter !== target.chapter;
              const path = isCrossChapter
                ? `M ${startX} ${startY} C ${startX + dx * 0.5} ${startY + 50}, ${endX - dx * 0.5} ${endY - 50}, ${endX} ${endY}`
                : `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;

              // 챕터별 색상
              const sourceChapter = node.chapter;
              const strokeColor = {
                0: '#8b5cf6',
                1: '#3b82f6', 2: '#22c55e', 3: '#f97316', 4: '#a855f7', 5: '#ec4899'
              }[sourceChapter as 0 | 1 | 2 | 3 | 4 | 5];

              return (
                <path
                  key={`${node.sceneFile}-${targetSceneFile}`}
                  d={path}
                  stroke={strokeColor}
                  strokeWidth="3"
                  fill="none"
                  markerEnd={`url(#arrowhead-${sourceChapter})`}
                  className="transition-all duration-300 hover:stroke-width-[4] opacity-70 hover:opacity-100"
                  strokeDasharray={isCrossChapter ? "5,5" : "none"}
                />
              );
            })
          )}
        </svg>

        {/* 노드 그리기 */}
        {nodes.map(node => {
          const colors = chapterColors[node.chapter as keyof typeof chapterColors] || 
            { bg: 'bg-gray-100', border: 'border-gray-400', text: 'text-gray-800', gradient: 'from-gray-400 to-gray-500' };
          const isMissing = node.chapter === 0; // 미구현 씬
          
          return (
            <div
              key={node.sceneFile}
              onClick={() => !isMissing && setSelectedScene(scenes[node.sceneFile])}
              className={`absolute group ${isMissing ? 'pointer-events-none opacity-60' : 'cursor-pointer'}`}
              style={{
                left: node.x,
                top: node.y,
                width: '120px',
                height: '120px'
              }}
            >
              {/* 동그라미 노드 */}
              <div className="relative w-full h-full">
                {/* 외곽 글로우 */}
                <div className={`absolute inset-0 ${isMissing ? 'bg-red-600' : `bg-gradient-to-br ${colors.gradient}`}
                  rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300`} />
                
                {/* 메인 원 */}
                <div className={`absolute inset-2 ${isMissing ? 'bg-black border-red-500' : `${colors.bg} ${colors.border}`} 
                  border-4 rounded-full shadow-xl 
                  group-hover:scale-110 
                  transition-all duration-200 flex items-center justify-center p-3`}>
                  
                  {/* 미구현 표시 (빨간색 X) */}
                  {isMissing && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  )}
                  
                  {/* 챕터 뱃지 */}
                  {!isMissing && (
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full 
                      bg-gradient-to-br ${colors.gradient} border-2 border-white 
                      flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-xs">C{node.chapter}</span>
                    </div>
                  )}
                  
                  {/* 제목 텍스트 */}
                  <div className="text-center">
                    <div className={`text-xs font-bold ${isMissing ? 'text-red-500' : colors.text} leading-tight px-1`}>
                      {node.title}
                    </div>
                  </div>
                </div>
                
                {/* 라벨 */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className={`${isMissing ? 'bg-red-900 border-red-500 text-red-300' : `${colors.bg} ${colors.border} ${colors.text}`} backdrop-blur-sm px-2 py-1 rounded-full 
                    border-2 shadow-md`}>
                    <div className={`text-xs font-semibold`}>
                      {node.sceneFile.split('/')[1].replace('.json', '')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>

      {/* 스크립트 상세 모달 */}
      {selectedScene && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 flex items-center justify-center p-8"
          onClick={() => setSelectedScene(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 헤더 */}
            <div className={`bg-gradient-to-r ${chapterColors[selectedScene.chapter as keyof typeof chapterColors].gradient} text-white p-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                      Chapter {selectedScene.chapter}
                    </div>
                    <h2 className="text-2xl font-bold">{selectedScene.title}</h2>
                  </div>
                  <p className="text-sm text-white/80 mt-1">씬 ID: {selectedScene.sceneId}</p>
                </div>
                <button
                  onClick={() => setSelectedScene(null)}
                  className="bg-white/20 hover:bg-white/30 rounded-lg p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* 스크립트 내용 */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-140px)]">
              <div className="space-y-4">
                {selectedScene.lines.map((line, index) => {
                  const colors = chapterColors[selectedScene.chapter as keyof typeof chapterColors];
                  return (
                    <div 
                      key={line.id}
                      className={`bg-gradient-to-br ${colors.bg} to-white border-2 ${colors.border}
                        rounded-xl p-4 hover:border-opacity-100 transition-colors`}
                    >
                      {/* 라인 ID */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-8 h-8 bg-gradient-to-br ${colors.gradient}
                          rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                          {index + 1}
                        </div>
                        <span className={`text-xs ${colors.text} font-mono`}>{line.id}</span>
                        <span className="text-xs text-gray-400">
                          ({line.type === 'dialogue' ? '대화' : '선택'})
                        </span>
                      </div>

                      {/* 캐릭터 */}
                      {line.character && (
                        <div className="mb-2">
                          <span className={`inline-block bg-gradient-to-r ${colors.gradient}
                            text-white px-3 py-1 rounded-full text-sm font-bold`}>
                            {line.character}
                          </span>
                        </div>
                      )}
                      
                      {/* 대사 */}
                      <p className="text-gray-800 leading-relaxed">{line.text}</p>

                      {/* 선택지 */}
                      {line.choices && line.choices.length > 0 && (
                        <div className={`mt-3 pt-3 border-t-2 ${colors.border}`}>
                          <div className={`text-xs ${colors.text} font-bold mb-2`}>선택지:</div>
                          <div className="space-y-1">
                            {line.choices.map((choice, choiceIndex) => (
                              <div key={choiceIndex} className="text-sm text-gray-600 flex items-center gap-2">
                                <span className={colors.text}>→</span>
                                <span>{choice.text}</span>
                                <span className="text-xs text-gray-400">
                                  ({choice.nextSceneFile || choice.nextScriptId})
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                      {/* 다음 연결 */}
                      {(line.nextScriptId || line.nextSceneFile) && (
                        <div className="mt-3 text-xs text-gray-500">
                          다음: {line.nextSceneFile ? `씬 ${line.nextSceneFile}` : `라인 ${line.nextScriptId}`}
                        </div>
                      )}
                      
                      {/* 엔딩 표시 */}
                      {line.isEnding && (
                        <div className="mt-3">
                          <span className="inline-block bg-gradient-to-r from-rose-400 to-pink-500 
                            text-white px-3 py-1 rounded-full text-xs font-bold">
                            🎬 엔딩
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 범례 */}
      <div className="fixed bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl 
        border-4 border-pink-300 p-4 shadow-xl max-w-xs">
        <h3 className="font-bold text-gray-800 mb-3">컨트롤</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">🖱️ 드래그</span>
            <span>화면 이동</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">🔍 휠</span>
            <span>확대/축소</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-pink-600">배율: {(scale * 100).toFixed(0)}%</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t-2 border-pink-200">
          <h4 className="font-bold text-gray-800 mb-2 text-sm">범례</h4>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-pink-50 to-white border-2 border-pink-300 rounded" />
              <span>씬 노드</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-pink-500" />
              <span>→ 씬 연결</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryEditor;
