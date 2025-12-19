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

  // 챕터별 씬 파일 경로
  const sceneFiles = {
    1: ['01_Entrance.json', '02_First_Meeting.json', '03_Siren_Alert.json'],
    2: ['01_Sakura_Route.json', '01_Yuki_Route.json', '01_Solo_Route.json'],
    3: ['01_Sakura_Training.json', '01_Yuki_Investigation.json', '01_Solo_Mystery.json'],
    4: ['01_Sakura_Partnership.json', '01_Yuki_Truth.json', '01_Solo_Resolution.json', 
        '01_Team_Up.json', '01_Alternative_Path.json', '01_Hidden_Truth.json'],
    5: ['Ending_Sakura.json', 'Ending_Yuki.json', 'Ending_Solo.json', 
        'Ending_True.json', 'Ending_Peace.json', 'Ending_Normal.json']
  };

  useEffect(() => {
    const loadScenes = async () => {
      setIsLoading(true);
      const loadedScenes: Record<string, ScriptScene> = {};
      
      for (const [chapter, files] of Object.entries(sceneFiles)) {
        for (const file of files) {
          const sceneFile = `Chapter${chapter}/${file}`;
          try {
            const response = await fetch(`/web-hub/VisualNovel/Script/${sceneFile}`);
            const scene = await response.json() as ScriptScene;
            loadedScenes[sceneFile] = scene;
          } catch (error) {
            console.error(`씬 로드 실패: ${sceneFile}`, error);
          }
        }
      }
      
      setScenes(loadedScenes);
      generateGraph(loadedScenes);
      setIsLoading(false);
    };

    loadScenes();
  }, []);

  const generateGraph = (loadedScenes: Record<string, ScriptScene>) => {
    const graphNodes: SceneNode[] = [];
    const connections: Record<string, Set<string>> = {};

    // 각 씬의 연결 관계 파싱
    Object.entries(loadedScenes).forEach(([sceneFile, scene]) => {
      if (!connections[sceneFile]) {
        connections[sceneFile] = new Set();
      }

      scene.lines.forEach(line => {
        if (line.nextSceneFile) {
          connections[sceneFile].add(line.nextSceneFile);
        }
        if (line.choices) {
          line.choices.forEach(choice => {
            if (choice.nextSceneFile) {
              connections[sceneFile].add(choice.nextSceneFile);
            }
          });
        }
      });
    });

    // 챕터별 노드 그룹화 및 위치 계산
    const nodesByChapter: Record<number, string[]> = {};
    Object.entries(loadedScenes).forEach(([sceneFile, scene]) => {
      const chapter = scene.chapter;
      if (!nodesByChapter[chapter]) nodesByChapter[chapter] = [];
      nodesByChapter[chapter].push(sceneFile);
    });

    // 노드 위치 계산 (챕터별 세로 배치, 챕터 내 가로 배치)
    Object.entries(nodesByChapter).forEach(([chapter, sceneFiles]) => {
      const chapterNum = parseInt(chapter);
      const y = 100 + (chapterNum - 1) * 250; // 챕터별 세로 간격
      const chapterWidth = sceneFiles.length * 280;
      const startX = (2000 - chapterWidth) / 2; // 가운데 정렬
      
      sceneFiles.forEach((sceneFile, index) => {
        const scene = loadedScenes[sceneFile];
        if (scene) {
          graphNodes.push({
            id: scene.sceneId,
            sceneFile: sceneFile,
            title: scene.title,
            chapter: scene.chapter,
            x: startX + index * 280,
            y: y,
            connections: Array.from(connections[sceneFile] || [])
          });
        }
      });
    });

    setNodes(graphNodes);
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
      <div className="relative" style={{ width: '2000px', height: '1500px' }}>
        <svg className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
          <defs>
            {/* 챕터별 화살표 마커 */}
            {[1, 2, 3, 4, 5].map(chapter => {
              const colors = {
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
              const strokeColor = {
                1: '#3b82f6', 2: '#22c55e', 3: '#f97316', 4: '#a855f7', 5: '#ec4899'
              }[node.chapter as 1 | 2 | 3 | 4 | 5];

              return (
                <path
                  key={`${node.sceneFile}-${targetSceneFile}`}
                  d={path}
                  stroke={strokeColor}
                  strokeWidth="3"
                  fill="none"
                  markerEnd={`url(#arrowhead-${node.chapter})`}
                  className="transition-all duration-300 hover:stroke-width-[4] opacity-70 hover:opacity-100"
                  strokeDasharray={isCrossChapter ? "5,5" : "none"}
                />
              );
            })
          )}
        </svg>

        {/* 노드 그리기 */}
        {nodes.map(node => {
          const colors = chapterColors[node.chapter as keyof typeof chapterColors];
          return (
            <div
              key={node.sceneFile}
              onClick={() => setSelectedScene(scenes[node.sceneFile])}
              className="absolute cursor-pointer group"
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
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}
                  rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300`} />
                
                {/* 메인 원 */}
                <div className={`absolute inset-2 ${colors.bg} 
                  border-4 ${colors.border} rounded-full shadow-xl 
                  group-hover:scale-110 
                  transition-all duration-200 flex items-center justify-center p-3`}>
                  
                  {/* 챕터 뱃지 */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full 
                    bg-gradient-to-br ${colors.gradient} border-2 border-white 
                    flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-xs">C{node.chapter}</span>
                  </div>
                  
                  {/* 제목 텍스트 */}
                  <div className="text-center">
                    <div className={`text-xs font-bold ${colors.text} leading-tight px-1`}>
                      {node.title}
                    </div>
                  </div>
                </div>
                
                {/* 라벨 */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className={`${colors.bg} backdrop-blur-sm px-2 py-1 rounded-full 
                    border-2 ${colors.border} shadow-md`}>
                    <div className={`text-xs ${colors.text} font-semibold`}>
                      {node.sceneFile.split('/')[1].replace('.json', '')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
        <h3 className="font-bold text-gray-800 mb-3">범례</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-br from-pink-50 to-white border-2 border-pink-300 rounded" />
            <span>씬 노드</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-pink-500" />
            <span>→</span>
            <span>씬 내부 연결</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-pink-500 border-dashed border-2" style={{ borderTop: '2px dashed' }} />
            <span>→</span>
            <span>챕터간 연결</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryEditor;
