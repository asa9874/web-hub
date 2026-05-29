export type SceneId = string;
export type ItemId  = string;

export interface ItemEffect {
  hpDelta?:         number;
  corruptionDelta?: number;
}

export interface Item {
  readonly id:          ItemId;
  readonly name:        string;
  readonly description: string;
  readonly effect?:     ItemEffect;
}

export interface Outcome {
  readonly nextSceneId:      SceneId;
  readonly narrativeText:    string;
  readonly hpDelta?:         number;
  readonly corruptionDelta?: number;
  readonly itemsGained?:     ItemId[];
  readonly itemsLost?:       ItemId[];
}

export interface DeterministicChoice {
  readonly id:       string;
  readonly label:    string;
  readonly type:     'deterministic';
  readonly outcomes: { readonly success: Outcome };
}

export interface RngChoice {
  readonly id:                 string;
  readonly label:              string;
  readonly type:               'rng';
  readonly successProbability: number;
  readonly outcomes: {
    readonly success: Outcome;
    readonly failure: Outcome;
  };
}

export type Choice = DeterministicChoice | RngChoice;

export interface Scene {
  readonly id:                 SceneId;
  readonly title:              string;
  readonly description:        string;
  readonly choices:            readonly Choice[];
  readonly asciiArt?:          string;
  readonly backgroundContext?: string;
}

export interface PlayerState {
  readonly hp:             number;
  readonly maxHp:          number;
  readonly corruption:     number;
  readonly maxCorruption:  number;
  readonly inventory:      readonly ItemId[];
  readonly currentSceneId: SceneId;
  readonly isAlive:        boolean;
}

export type GameAction =
  | { readonly type: 'CHOOSE';       readonly choiceId: string }
  | { readonly type: 'RESET' }
  | { readonly type: 'DEBUG_PATCH';  readonly patch: Partial<PlayerState> };

export type Subscriber = (state: PlayerState, narrativeText?: string) => void;
