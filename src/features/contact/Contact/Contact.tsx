import { Container } from "@/components/Container";
import { MagneticLink } from "@/components/MagneticLink";
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
              Got an idea?
              <br />
              <em>Let&apos;s build it.</em>
            </h2>
            <div className={styles.side}>
              <span className={styles.meta}>Drop a line</span>
              <MagneticLink href={`mailto:${PROFILE.email}`} className={styles.email}>
                <span aria-hidden="true">✦</span>
                {PROFILE.email}
              </MagneticLink>
              <span className={styles.meta}>Typically replies within 24 hours</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
