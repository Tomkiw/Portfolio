import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { SECTION_ID } from "@/lib/content/navigation";
import { PROCESS_STEPS } from "@/lib/content/process";
import styles from "./Process.module.scss";

export function Process() {
  return (
    <Section id={SECTION_ID.process}>
      <Container>
        <SectionHeader
          eyebrow="/ 04 · How I Work"
          title={
            <>
              Process
              <br />
              over <em>chaos.</em>
            </>
          }
          description="The Scrum rhythm I practiced as Team Lead and Scrum Master: four steps, repeated every sprint, so the team always knows what's next."
        />

        <ol className={styles.grid}>
          {PROCESS_STEPS.map((step) => (
            <li key={step.id} className={styles.step}>
              <span className={styles.number}>/ {step.number}</span>
              <span className={styles.icon} aria-hidden="true">
                {step.icon}
              </span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
