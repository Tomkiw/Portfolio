import { useEffect, useState } from "react";

type TypewriterOptions = {
  charMs: number;
  /** Typing starts (or resumes) only while this is true. */
  isActive: boolean;
};

/** Types `text` once, one character every `charMs`. Returns the part typed so far. */
export function useTypewriter(text: string, { charMs, isActive }: TypewriterOptions): string {
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (!isActive || length >= text.length) return;

    const timeoutId = window.setTimeout(() => setLength((current) => current + 1), charMs);
    return () => window.clearTimeout(timeoutId);
  }, [isActive, length, text.length, charMs]);

  return text.slice(0, length);
}
