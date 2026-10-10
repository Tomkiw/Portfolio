"use client";

import { Fragment } from "react";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { TERMINAL_TYPING } from "@/lib/constants";
import { CURRENTLY_LEARNING, STACK_GROUPS, TERMINAL } from "@/lib/content/stack";
import { cn } from "@/lib/utils/cn";
import styles from "./Terminal.module.scss";

const COMMAND_LINE = `${TERMINAL.prompt} ${TERMINAL.command}`;

function StackListing() {
  return (
    <>
      {STACK_GROUPS.map((group) => (
        <div key={group.id} className={styles.group}>
          <p className={styles.line}>
            <span className={styles.comment}># {group.title}</span>
          </p>
          <ul className={styles.tools}>
            {group.tools.map((tool) => (
              <li key={tool.name} className={cn(styles.line, styles.bullet)}>
                <span className={styles.key}>{tool.name}</span>{" "}
                <span className={styles.value}>{tool.version}</span>{" "}
                <span className={styles.comment}>— {tool.note}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <p className={styles.line}>
        <span className={styles.comment}># {TERMINAL.learningTitle}</span>
      </p>
      <p className={styles.line}>
        →{" "}
        {CURRENTLY_LEARNING.map((item, index) => (
          <Fragment key={item}>
            {index > 0 ? " · " : null}
            <span className={styles.key}>{item}</span>
          </Fragment>
        ))}
      </p>
      <p className={styles.line} aria-hidden="true">
        <span className={styles.prompt}>{TERMINAL.prompt}</span>
        <span className={styles.cursor} />
      </p>
    </>
  );
}

/** Fake shell: types the command once the terminal scrolls into view, then lists the stack. */
export function Terminal() {
  const { ref, isInView } = useInView<HTMLDivElement>(TERMINAL_TYPING.viewThreshold);
  const prefersReducedMotion = usePrefersReducedMotion();
  const typedLine = useTypewriter(COMMAND_LINE, {
    charMs: TERMINAL_TYPING.charMs,
    isActive: isInView && !prefersReducedMotion,
  });

  const visibleLine = prefersReducedMotion ? COMMAND_LINE : typedLine;
  const isTyped = visibleLine.length === COMMAND_LINE.length;
  // The design always printed "$" after the half-typed prompt; here it appears when typed.
  const promptPart = visibleLine.slice(0, TERMINAL.prompt.length);
  const commandPart = visibleLine.slice(TERMINAL.prompt.length);

  return (
    <div ref={ref} className={styles.terminal}>
      <div className={styles.head} aria-hidden="true">
        <span className={styles.dots}>
          <span />
          <span />
          <span />
        </span>
        <span className={styles.title}>{TERMINAL.title}</span>
      </div>

      <div className={styles.body}>
        <p className={cn(styles.line, styles.screenOnly)} aria-hidden="true">
          <span className={styles.prompt}>{promptPart}</span>
          <span className={styles.command}>{commandPart}</span>
          {isTyped ? null : <span className={styles.cursor} />}
        </p>
        <p className={cn(styles.line, styles.printOnly)} aria-hidden="true">
          <span className={styles.prompt}>{TERMINAL.prompt}</span>
          <span className={styles.command}> {TERMINAL.command}</span>
        </p>
        {/* Always in the markup (print shows it right away); revealed once the command is typed.
            A class rather than the `hidden` attribute: the browser's rule for `hidden` beats print CSS. */}
        <div className={isTyped ? undefined : styles.pending}>
          <StackListing />
        </div>
      </div>
    </div>
  );
}
