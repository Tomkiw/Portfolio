import { SPLIT_TEXT } from "@/lib/constants";
import styles from "./SplitText.module.scss";

type SplitTextProps = {
  text: string;
  /** Delay before the first word starts rising. */
  delayMs?: number;
  /** Extra delay added for every next word. */
  staggerMs?: number;
  className?: string;
};

const NON_BREAKING_SPACE = " ";

/** Words rise from behind a mask one after another. */
export function SplitText({
  text,
  delayMs = 0,
  staggerMs = SPLIT_TEXT.defaultStaggerMs,
  className,
}: SplitTextProps) {
  const words = text.split(" ");
  const lastIndex = words.length - 1;

  return (
    <span className={className}>
      {words.map((word, index) => (
        // A word's position in a fixed string is its identity, so it is part of the key.
        <span key={`${index}-${word}`} className={styles.mask}>
          <span
            className={styles.word}
            style={{ animationDelay: `${delayMs + index * staggerMs}ms` }}
          >
            {word}
            {index < lastIndex ? NON_BREAKING_SPACE : null}
          </span>
        </span>
      ))}
    </span>
  );
}
