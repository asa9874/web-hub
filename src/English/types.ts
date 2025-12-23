export interface VocabularyItem {
  word: string;
  meaning: string;
}

export interface Day {
  id: string;
  name: string;
  path: string;
}

export interface VocabularyState {
  hiddenMeanings: Set<number>;
}
