import { BALANCE } from '../config/balance';
/** Fixed simulation steps; rendering and UI reads never consume market randomness. */
export class GameClock {
    accumulator = 0;
    advance(seconds: number, run: (dt: number) => void) { this.accumulator += Math.max(0, seconds); let steps = 0; while (this.accumulator + 1e-9 >= BALANCE.step) {
        this.accumulator -= BALANCE.step;
        run(BALANCE.step);
        steps++;
    } return steps; }
    reset() { this.accumulator = 0; }
}
