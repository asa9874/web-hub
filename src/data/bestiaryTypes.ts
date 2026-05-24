/** 도감 UI용 패턴 표시 데이터 (execute 함수 없음) */
export interface LorePattern {
  name: string;
  effect: string;
}

export interface LorePhase2 {
  trigger: string;
  buff: string;
  patterns: LorePattern[];
}

/**
 * 도감 항목 하나.
 * - 주인공 / 세계관 항목: sections 사용, stats/patterns/phase2 없음
 * - 몬스터 항목: stats/patterns 사용 (보스는 phase2 추가), sections 없음
 * - 카드 항목: cardStats 사용, lore=기원로어, quote=비화(일지 풍미)
 */
export interface LoreEntry {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  quote?: string;
  lore: string;
  imagePath?: string;
  sections?: Array<{ heading: string; body: string }>;
  stats?: { hp: number; type: string; weight?: number };
  patterns?: LorePattern[];
  phase2?: LorePhase2;
  /** 카드 도감 전용 메타데이터 */
  cardStats?: {
    cost: number;
    cardType: string;   // 'attack' | 'skill' | 'power'
    rarity: string;     // 'common' | 'uncommon' | 'rare'
    description: string;
  };
}

export interface TocGroup {
  header: string;
  entries?: LoreEntry[];
  sub?: Array<{
    label: string;
    sub?: Array<{ label: string; entries: LoreEntry[] }>;
    entries?: LoreEntry[];
  }>;
}
