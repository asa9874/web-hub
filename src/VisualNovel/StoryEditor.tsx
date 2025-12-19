import React, { useState, useEffect } from 'react';
import type { ScriptBlock } from './types';

interface BlockNode {
  id: string;
  title: string;
  x: number;
  y: number;
  connections: string[];
}

const StoryEditor: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [blocks, setBlocks] = useState<Record<string, ScriptBlock>>({});
  const [nodes, setNodes] = useState<BlockNode[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBlock, setSelectedBlock] = useState<ScriptBlock | null>(null);

  const blockNames = [
    'intro', 'library_route', 'cafe_route', 'garden_route',
    'after_tour', 'library_ending', 'cafe_ending', 'park_ending',
    'home_ending', 'ending'
  ];

  useEffect(() => {
    const loadBlocks = async () => {
      setIsLoading(true);
      const loadedBlocks: Record<string, ScriptBlock> = {};
      
      for (const blockName of blockNames) {
        try {
          const response = await fetch(`/web-hub/VisualNovel/Script/blocks/${blockName}.json`);
          const block = await response.json() as ScriptBlock;
          loadedBlocks[blockName] = block;
        } catch (error) {
          console.error(`블록 로드 실패: ${blockName}`, error);
        }
      }
      
      setBlocks(loadedBlocks);
      generateGraph(loadedBlocks);
      setIsLoading(false);
    };

    loadBlocks();
  }, []);

  const generateGraph = (loadedBlocks: Record<string, ScriptBlock>) => {
    const graphNodes: BlockNode[] = [];
    const connections: Record<string, Set<string>> = {};

    // 각 블록의 연결 관계 파싱
    Object.entries(loadedBlocks).forEach(([blockId, block]) => {
      if (!connections[blockId]) {
        connections[blockId] = new Set();
      }

      Object.values(block.lines).forEach(line => {
        if (line.nextBlockId) {
          connections[blockId].add(line.nextBlockId);
        }
        if (line.choices) {
          line.choices.forEach(choice => {
            if (choice.nextBlockId) {
              connections[blockId].add(choice.nextBlockId);
            }
          });
        }
      });
    });

    // 계층적 레이아웃
    const levels: Record<string, number> = {};
    const visited = new Set<string>();
    
    const calculateLevel = (blockId: string, level: number = 0) => {
      if (visited.has(blockId)) return;
      visited.add(blockId);
      levels[blockId] = Math.max(levels[blockId] || 0, level);
      
      connections[blockId]?.forEach(nextId => {
        calculateLevel(nextId, level + 1);
      });
    };

    calculateLevel('intro', 0);

    // 레벨별 노드 그룹화
    const nodesByLevel: Record<number, string[]> = {};
    Object.entries(levels).forEach(([blockId, level]) => {
      if (!nodesByLevel[level]) nodesByLevel[level] = [];
      nodesByLevel[level].push(blockId);
    });

    // 노드 위치 계산 (상->하 방향, 가운데 정렬)
    Object.entries(nodesByLevel).forEach(([level, blockIds]) => {
      const levelWidth = blockIds.length * 250;
      const startX = (2000 - levelWidth) / 2;
      
      blockIds.forEach((blockId, index) => {
        const block = loadedBlocks[blockId];
        if (block) {
          graphNodes.push({
            id: blockId,
            title: block.title,
            x: startX + index * 250,
            y: 100 + parseInt(level) * 200,
            connections: Array.from(connections[blockId] || [])
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
            <p className="text-sm text-pink-100">블록 간 연결 관계를 시각화합니다</p>
          </div>
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 rounded-lg px-6 py-2 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>

      {/* 그래프 영역 */}
      <div className="relative" style={{ width: '2000px', height: '1500px' }}>
        <svg className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#ec4899" />
            </marker>
          </defs>
          
          {/* 연결선 그리기 (곡선) */}
          {nodes.map(node => 
            node.connections.map(targetId => {
              const target = nodes.find(n => n.id === targetId);
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
              
              // ending -> intro처럼 뒤로 가는 경우 특별 처리
              const isBackward = dy < 0;
              const path = isBackward
                ? `M ${startX} ${startY} C ${startX - 100} ${startY + 50}, ${startX - 100} ${endY - 50}, ${endX} ${endY}`
                : `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;

              return (
                <path
                  key={`${node.id}-${targetId}`}
                  d={path}
                  stroke="#ec4899"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  className="transition-all duration-300 hover:stroke-pink-600 hover:stroke-[3]"
                />
              );
            })
          )}
        </svg>

        {/* 노드 그리기 */}
        {nodes.map(node => (
          <div
            key={node.id}
            onClick={() => setSelectedBlock(blocks[node.id])}
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
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-400 
                rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              
              {/* 메인 원 */}
              <div className="absolute inset-2 bg-gradient-to-br from-pink-50 to-white 
                border-4 border-pink-300 rounded-full shadow-xl 
                group-hover:border-pink-400 group-hover:scale-110 
                transition-all duration-200 flex items-center justify-center p-2">
                
                {/* 제목 텍스트 */}
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-800 leading-tight">
                    {node.title}
                  </div>
                </div>
              </div>
              
              {/* 라벨 */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full 
                  border-2 border-pink-200 shadow-md">
                  <div className="text-xs text-pink-600 font-semibold">{node.id}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 스크립트 상세 모달 */}
      {selectedBlock && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 flex items-center justify-center p-8"
          onClick={() => setSelectedBlock(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 헤더 */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{selectedBlock.title}</h2>
                  <p className="text-sm text-pink-100 mt-1">블록 ID: {selectedBlock.blockId}</p>
                </div>
                <button
                  onClick={() => setSelectedBlock(null)}
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
                {Object.values(selectedBlock.lines).map((line, index) => (
                  <div 
                    key={line.id}
                    className="bg-gradient-to-br from-pink-50 to-white border-2 border-pink-200 
                      rounded-xl p-4 hover:border-pink-300 transition-colors"
                  >
                    {/* 씬 ID */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 
                        rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-xs text-pink-600 font-mono">{line.id}</span>
                    </div>

                    {/* 대사 */}
                    {line.speaker && (
                      <div className="mb-2">
                        <span className="inline-block bg-gradient-to-r from-pink-400 to-pink-500 
                          text-white px-3 py-1 rounded-full text-sm font-bold">
                          {line.speaker}
                        </span>
                      </div>
                    )}
                    <p className="text-gray-800 leading-relaxed">{line.dialogue}</p>

                    {/* 선택지 */}
                    {line.choices && line.choices.length > 0 && (
                      <div className="mt-3 pt-3 border-t-2 border-pink-200">
                        <div className="text-xs text-pink-600 font-bold mb-2">선택지:</div>
                        <div className="space-y-1">
                          {line.choices.map((choice, choiceIndex) => (
                            <div key={choiceIndex} className="text-sm text-gray-600 flex items-center gap-2">
                              <span className="text-pink-400">→</span>
                              <span>{choice.text}</span>
                              <span className="text-xs text-gray-400">
                                ({choice.nextBlockId || choice.nextScriptId})
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 다음 연결 */}
                    {(line.nextScriptId || line.nextBlockId) && (
                      <div className="mt-3 text-xs text-gray-500">
                        다음: {line.nextBlockId ? `블록 ${line.nextBlockId}` : `씬 ${line.nextScriptId}`}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 범례 */}
      <div className="fixed bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl 
        border-4 border-pink-300 p-4 shadow-xl">
        <h3 className="font-bold text-gray-800 mb-3">범례</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-br from-pink-50 to-white border-2 border-pink-300 rounded" />
            <span>스토리 블록</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-pink-500" />
            <span>→</span>
            <span>연결 관계</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryEditor;
