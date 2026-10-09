import { Container } from "@/components/Container";
import { ArrowIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import {
  anchorHref,
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
              Navigate
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
            <h2 className={styles.heading}>Connect</h2>
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
            <h2 className={styles.heading}>Reach</h2>
            <ul className={styles.list}>
              <li>
                <a href={`mailto:${PROFILE.email}`} className={styles.link}>
                  {PROFILE.email}
                </a>
              </li>
              <li>
                <a href={SCHEDULE_CALL_HREF} className={styles.link}>
                  Schedule a call
                </a>
              </li>
              <li>
                <a href={PROFILE.cvUrl} className={styles.link} download>
                  Download CV (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {CURRENT_YEAR} · {FULL_NAME}
          </span>
          <span>Tap the logo 5× for vim mode ✦</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </Container>
    </footer>
  );
}
