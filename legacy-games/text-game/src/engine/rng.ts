import type { Choice, Outcome } from '../types/index.ts';

export function calculateOutcome(choice: Choice): Outcome {
  if (choice.type === 'deterministic') return choice.outcomes.success;
  const roll = Math.random();
  return roll < choice.successProbability
    ? choice.outcomes.success
    : choice.outcomes.failure;
}
