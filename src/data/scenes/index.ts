import type { Scene } from '../../types/index.ts';
import { apartmentStart } from './apartment-start.ts';

export const scenes: Record<string, Scene> = {
  [apartmentStart.id]: apartmentStart,
};
