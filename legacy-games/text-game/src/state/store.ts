import type { PlayerState, GameAction, Subscriber, Scene } from '../types/index.ts';
import { calculateOutcome } from '../engine/rng.ts';
import { applyOutcome }     from '../engine/state-mutations.ts';
import { resolveScene }     from '../engine/scene-resolver.ts';

export class GameStore {
  private state: PlayerState;
  private readonly initialState: PlayerState;
  private readonly scenes: Readonly<Record<string, Scene>>;
  private readonly subscribers = new Set<Subscriber>();

  constructor(initial: PlayerState, scenes: Record<string, Scene>) {
    this.state        = initial;
    this.initialState = initial;
    this.scenes       = scenes;
    queueMicrotask(() => this.emit());
  }

  getState(): PlayerState {
    return this.state;
  }

  subscribe(fn: Subscriber): () => void {
    this.subscribers.add(fn);
    return () => { this.subscribers.delete(fn); };
  }

  dispatch(action: GameAction): void {
    switch (action.type) {
      case 'CHOOSE': {
        const scene  = resolveScene(this.state.currentSceneId, this.scenes);
        const choice = scene.choices.find(c => c.id === action.choiceId);
        if (!choice) return;
        const outcome  = calculateOutcome(choice);
        this.state     = applyOutcome(this.state, outcome);
        this.emit(outcome.narrativeText);
        break;
      }
      case 'RESET':
        this.state = this.initialState;
        this.emit();
        break;
    }
  }

  private emit(narrativeText?: string): void {
    const snapshot = Object.freeze({ ...this.state });
    this.subscribers.forEach(fn => fn(snapshot, narrativeText));
  }
}

export function createStore(initial: PlayerState, scenes: Record<string, Scene>): GameStore {
  return new GameStore(initial, scenes);
}
