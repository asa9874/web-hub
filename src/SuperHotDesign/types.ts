export type ImpurityLevel = 'S' | 'A' | 'B' | 'C' | 'D' | 'E';

export interface ChronicleEvent {
  year: number;
  title: string;
  subtitle: string;
  summary: string;
  consequence: string;
  atmosphere: 'crisis' | 'hope' | 'balance';
}

export interface OperationsKpi {
  label: string;
  value: string;
  unit: string;
  note: string;
}

export interface ImpurityTier {
  level: ImpurityLevel;
  dangerLabel: string;
  spawnRate: string;
  destructivePower: string;
  corruption: string;
  requiredResponse: string;
  recommendedUnits: string[];
}

export interface MagicalGirlProfile {
  id: string;
  ranking: number;
  codename: string;
  publicImage: string;
  privateImage: string;
  fanClub: string;
  activeRegion: string;
  specialMove: string;
  quote: string;
  privateIdentity: string;
  age: number;
  retirementForecast: string;
  hopeSignature: string;
  secretRisk: string;
}

export interface AlertItem {
  id: string;
  city: string;
  district: string;
  level: ImpurityLevel;
  status: '교전 중' | '대피 진행' | '정리 단계' | '감시';
  magicalGirl: string;
  evacRate: number;
  updatedAt: string;
}

export interface ShelterStep {
  id: number;
  title: string;
  action: string;
  duration: string;
}

export interface GoodsItem {
  id: string;
  name: string;
  series: string;
  rarity: 'Standard' | 'Rare' | 'Legend';
  price: string;
  slogan: string;
  previewImage: string;
  requiredImageId: string;
}

export interface CampaignItem {
  title: string;
  window: string;
  reward: string;
  note: string;
}
