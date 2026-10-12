export interface PatternBase {
  readonly durationMs: number;
  start(): void;
  update(time: number, delta: number): void;
  stop(): void;
}
