import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import styles from "./StatusScreen.module.scss";

type StatusScreenProps = {
  /** Small label above the title, e.g. "404". */
  eyebrow: string;
  /** Wrap the accent word in <em>. */
  title: ReactNode;
  description: string;
  /** Extra fine print, e.g. an error reference. */
  details?: string;
  action: ReactNode;
};

/** Full-screen message in the site's style: used by the 404 and the error pages. */
export function StatusScreen({ eyebrow, title, description, details, action }: StatusScreenProps) {
  return (
    <main className={styles.screen}>
      <Container className={styles.container}>
        <Logo />
        <div className={styles.body}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          {details ? <p className={styles.details}>{details}</p> : null}
          <div className={styles.action}>{action}</div>
        </div>
      </Container>
    </main>
  );
}
