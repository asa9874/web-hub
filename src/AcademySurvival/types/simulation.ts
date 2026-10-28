import type {Character} from './character';
export type SimulationTier = 0 | 1 | 2 | 3;
export type NpcImportance = 'background' | 'persistent' | 'significant' | 'critical';
export interface SimulationPolicy {
 getTier(id: string): SimulationTier;
}
export interface SimulationActor {
 characterId: string;
 tier: SimulationTier;
 importance: NpcImportance;
 persistent: boolean;
 regionId: string;
 activatedAt: number;
 lastDetailedAt?: number;
 lastCoarseAt?: number;
 reason: string;
 forcedTier?: SimulationTier;
}
export interface SimulationRegion {
 id: string;
 rootLocationId: string;
 name: string;
 parentRegionId?: string;
 totalPopulation?: number;
 residents: Record<string, string>;
 forcedActive?: boolean;
}
export interface SimulationTransition { at: number; characterId: string; from: SimulationTier; to: SimulationTier; reason: string }
export interface SimulationCommand { at: number; subjectId: string; message: string }
export interface SimulationSave {
 version: 'simulation-lod-v1';
 absoluteMinute: number;
 seed: string;
 playerId?: string;
 enabled: boolean;
 actors: SimulationActor[];
 regions: SimulationRegion[];
 transitions: SimulationTransition[];
 commands?: SimulationCommand[];
 pins: {characterId: string; until: number; reason: string}[];
 policy: { enterMinutes: number; leaveMinutes: number; holdMinutes: number };
}
export interface SimulationController extends SimulationPolicy {
 save(): SimulationSave;
 load(input: SimulationSave): void;
 connect(): () => void;
 requestDetailed(id: string, reason: string, minutes?: number): void;
 subscribe(fn: () => void): () => void;
 getSnapshot(): number;
 getActor(id: string): SimulationActor;
 getRegions(): (SimulationRegion & {active: boolean; individualPopulation: number})[];
 getTransitions(): SimulationTransition[];
 getCommands(): SimulationCommand[];
 getStatistics(): {counts: number[]; persistent: number; population: number; playerId?: string};
 setEnabled(value: boolean): void;
 setPlayer(id: string): void;
 forceTier(id: string, tier?: SimulationTier): void;
 promote(id: string, importance: NpcImportance): void;
 setRegionActive(id: string, value?: boolean): void;
 definePopulation(locationId: string, total: number): void;
 materializeResident(regionId: string, slot: string, factory: (seed: string, id: string) => Character): Character;
}
