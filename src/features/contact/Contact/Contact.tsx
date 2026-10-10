import { Container } from "@/components/Container";
import { MagneticLink } from "@/components/MagneticLink";
import { CONTACT_COPY } from "@/lib/content/contact";
import { SECTION_ID } from "@/lib/content/navigation";
import { PROFILE } from "@/lib/content/profile";
import styles from "./Contact.module.scss";

export function Contact() {
  return (
    <section id={SECTION_ID.contact} className={styles.contact}>
      <Container>
        <div className={styles.panel}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              {CONTACT_COPY.title}
              <br />
              <em>{CONTACT_COPY.accent}</em>
            </h2>
            <div className={styles.side}>
              <span className={styles.meta}>{CONTACT_COPY.emailLabel}</span>
              <MagneticLink href={`mailto:${PROFILE.email}`} className={styles.email}>
                <span aria-hidden="true">✦</span>
                {PROFILE.email}
              </MagneticLink>
              <span className={styles.meta}>{CONTACT_COPY.responseNote}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
