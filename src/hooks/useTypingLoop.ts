import { useEffect, useReducer } from "react";

type Phase = "typing" | "holding" | "deleting";

type TypingState = {
  wordIndex: number;
  length: number;
  phase: Phase;
};

type TickPayload = {
  wordLength: number;
  wordCount: number;
};

type TypingTiming = {
  typeMs: number;
  holdMs: number;
  deleteMs: number;
};

const INITIAL_STATE: TypingState = { wordIndex: 0, length: 0, phase: "typing" };

function advance(state: TypingState, { wordLength, wordCount }: TickPayload): TypingState {
  switch (state.phase) {
    case "typing": {
      const length = state.length + 1;
      return length >= wordLength
        ? { ...state, length: wordLength, phase: "holding" }
        : { ...state, length };
    }
    case "holding":
      return { ...state, phase: "deleting" };
    case "deleting": {
      const length = state.length - 1;
      return length <= 0
        ? { wordIndex: (state.wordIndex + 1) % wordCount, length: 0, phase: "typing" }
        : { ...state, length };
    }
  }
}

/**
 * Types a word letter by letter, holds it, erases it and moves on to the next one, forever.
 * Returns the currently visible part of the word.
 */
export function useTypingLoop(
  words: readonly string[],
  { typeMs, holdMs, deleteMs }: TypingTiming,
  isPaused = false,
): string {
  const [state, dispatch] = useReducer(advance, INITIAL_STATE);
  const currentWord = words[state.wordIndex] ?? "";

  useEffect(() => {
    if (isPaused || words.length === 0) return;

    const delayByPhase: Record<Phase, number> = {
      typing: typeMs,
      holding: holdMs,
      deleting: deleteMs,
    };
    const timeoutId = window.setTimeout(
      () => dispatch({ wordLength: currentWord.length, wordCount: words.length }),
      delayByPhase[state.phase],
    );

    return () => window.clearTimeout(timeoutId);
  }, [state, isPaused, currentWord.length, words.length, typeMs, holdMs, deleteMs]);

  return currentWord.slice(0, state.length);
}
