import { Container } from "@/components/Container";
import { ArrowIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { FOOTER_COPY } from "@/lib/content/footer";
import {
  anchorHref,
  CTA_LABEL,
  FOOTER_LINKS,
  SCHEDULE_CALL_HREF,
  SOCIAL_LINKS,
} from "@/lib/content/navigation";
import { FULL_NAME, PROFILE } from "@/lib/content/profile";
import styles from "./Footer.module.scss";

const SOCIAL_ARROW_SIZE = 11;
// Evaluated when the page is built, so the year moves forward with each deploy.
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div>
            <Logo size="small" />
            <p className={styles.intro}>{PROFILE.summary}</p>
          </div>

          <nav aria-labelledby="footer-navigate">
            <h2 id="footer-navigate" className={styles.heading}>
              {FOOTER_COPY.headings.navigate}
            </h2>
            <ul className={styles.list}>
              {FOOTER_LINKS.map((link) => (
                <li key={link.sectionId}>
                  <a href={anchorHref(link.sectionId)} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={styles.heading}>{FOOTER_COPY.headings.connect}</h2>
            <ul className={styles.list}>
              {SOCIAL_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                    <ArrowIcon size={SOCIAL_ARROW_SIZE} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={styles.heading}>{FOOTER_COPY.headings.reach}</h2>
            <ul className={styles.list}>
              <li>
                <a href={`mailto:${PROFILE.email}`} className={styles.link}>
                  {PROFILE.email}
                </a>
              </li>
              <li>
                <a href={SCHEDULE_CALL_HREF} className={styles.link}>
                  {CTA_LABEL.scheduleCall}
                </a>
              </li>
              {PROFILE.cvUrl ? (
                <li>
                  <a href={PROFILE.cvUrl} className={styles.link} download>
                    {CTA_LABEL.downloadCvFile}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {CURRENT_YEAR} · {FULL_NAME}
          </span>
          <span>{FOOTER_COPY.easterEggHint}</span>
          <span>{FOOTER_COPY.credits}</span>
        </div>
      </Container>
    </footer>
  );
}
