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
  readonly lore?:       string;
  readonly loreAuthor?: string;
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

export interface ChoiceRequirement {
  readonly items?:         readonly string[];  // 인벤토리에 모두 있어야 함
  readonly minHp?:         number;             // HP >= minHp
  readonly maxCorruption?: number;             // corruption <= maxCorruption
  readonly minCorruption?: number;             // corruption >= minCorruption
}

export interface DeterministicChoice {
  readonly id:        string;
  readonly label:     string;
  readonly type:      'deterministic';
  readonly required?: ChoiceRequirement;
  readonly outcomes:  { readonly success: Outcome };
}

export interface RngChoice {
  readonly id:                 string;
  readonly label:              string;
  readonly type:               'rng';
  readonly successProbability: number;
  readonly required?:          ChoiceRequirement;
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
  readonly chosenScenes:   readonly SceneId[];
}

export type GameAction =
  | { readonly type: 'CHOOSE';        readonly choiceId:         string }
  | { readonly type: 'RESET' }
  | { readonly type: 'ENTER_ROOM';    readonly sceneId:          string }
  | { readonly type: 'USE_ITEM';      readonly itemId:           string }
  | { readonly type: 'ROOM_ENTER';    readonly hpDelta:          number;
                                      readonly corruptionDelta:  number;
                                      readonly message:          string;
                                      readonly sceneId?:         string }
  | { readonly type: 'LOAD_SAVE';     readonly data:             PlayerState }
  | { readonly type: 'SET_NARRATIVE'; readonly text:             string }
  | { readonly type: 'DEBUG_PATCH';   readonly patch:            Partial<PlayerState> };

export type Subscriber = (state: PlayerState, narrativeText?: string) => void;
