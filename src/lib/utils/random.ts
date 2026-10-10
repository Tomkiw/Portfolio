// Linear congruential generator with the design's constants. Deterministic: the same seed
// gives the same sequence on the server and in the browser, so "random" art never changes.
const MULTIPLIER = 9301;
const INCREMENT = 49297;
const MODULUS = 233280;

/** Returns a function that yields pseudo-random numbers in [0, 1). */
export function createSeededRandom(seed: number): () => number {
  let state = seed;

  return () => {
    state = (state * MULTIPLIER + INCREMENT) % MODULUS;
    return state / MODULUS;
  };
}

/** Truly random whole number from 0 to length - 1 (not seeded). */
export function pickRandomIndex(length: number): number {
  return Math.floor(Math.random() * length);
}
