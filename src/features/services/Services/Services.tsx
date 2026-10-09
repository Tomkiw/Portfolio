import { Container } from "@/components/Container";
import { ArrowIcon } from "@/components/icons";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { SECTION_ID } from "@/lib/content/navigation";
import { SERVICES } from "@/lib/content/services";
import { padNumber } from "@/lib/utils/format";
import styles from "./Services.module.scss";

const SERVICE_ARROW_SIZE = 12;

export function Services() {
  return (
    <Section id={SECTION_ID.services}>
      <Container>
        <SectionHeader
          eyebrow="/ 02 · What I Do"
          title={
            <>
              What I can
              <br />
              help <em>with.</em>
            </>
          }
          description="What I bring to a team today — each skill backed by code you can open on my GitHub."
        />

        <ul className={styles.grid}>
          {SERVICES.map((service, index) => (
            <li key={service.id} className={styles.service} data-tick="">
              <div className={styles.header}>
                <span className={styles.number}>/ {padNumber(index + 1)}</span>
                <span className={styles.arrow} aria-hidden="true">
                  <ArrowIcon size={SERVICE_ARROW_SIZE} />
                </span>
              </div>
              <div>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <ul className={styles.tags}>
                  {service.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
