import React, { useState, useCallback } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import type { VocabularyItem } from '../types';

interface VocabularyTableProps {
  words: VocabularyItem[];
}

const VocabularyTable: React.FC<VocabularyTableProps> = ({ words }) => {
  const [hiddenMeanings, setHiddenMeanings] = useState<Set<number>>(new Set());
  const [allHidden, setAllHidden] = useState(false);

  const toggleAllMeanings = useCallback(() => {
    if (allHidden) {
      setHiddenMeanings(new Set());
      setAllHidden(false);
    } else {
      setHiddenMeanings(new Set(words.map((_, idx) => idx)));
      setAllHidden(true);
    }
  }, [allHidden, words.length]);

  const toggleMeaning = useCallback((index: number) => {
    setHiddenMeanings((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  }, []);

  return (
    <div className="space-y-4">
      {/* Control Button */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">
          단어 ({words.length}개)
        </h3>
        <button
          onClick={toggleAllMeanings}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors font-medium text-sm"
        >
          {allHidden ? (
            <>
              <Eye size={18} />
              전체 보기
            </>
          ) : (
            <>
              <EyeOff size={18} />
              전체 숨기기
            </>
          )}
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 w-1/3">
                영어
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 w-2/3">
                한글 뜻
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {words.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-base font-medium text-gray-900">
                  {item.word}
                </td>
                <td
                  onClick={() => toggleMeaning(index)}
                  className={`px-6 py-4 text-base transition-all duration-200 cursor-pointer ${
                    hiddenMeanings.has(index)
                      ? 'text-gray-400 bg-gray-50'
                      : 'text-gray-700'
                  }`}
                >
                  {hiddenMeanings.has(index) ? (
                    <span className="inline-flex items-center gap-2">
                      <EyeOff size={16} className="text-gray-300" />
                      <span className="text-sm">숨김</span>
                    </span>
                  ) : (
                    item.meaning
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VocabularyTable;
