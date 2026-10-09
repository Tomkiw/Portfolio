import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { ArrowIcon, DownloadIcon } from "@/components/icons";
import { SplitText } from "@/components/SplitText";
import { LiveClock } from "@/features/hero/LiveClock";
import { PortraitFrame } from "@/features/hero/PortraitFrame";
import { RoleRotator } from "@/features/hero/RoleRotator";
import { HERO_NAME } from "@/lib/constants";
import { anchorHref, SECTION_ID } from "@/lib/content/navigation";
import { PROFILE } from "@/lib/content/profile";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section id={SECTION_ID.home} className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />

      <Container>
        <div className={styles.inner}>
          <div className={styles.intro}>
            <p className={styles.status}>
              <span className={styles.statusDot} aria-hidden="true" />
              <LiveClock />
              <span className={styles.separator} aria-hidden="true">
                ·
              </span>
              <span>{PROFILE.availability}</span>
            </p>

            <h1 className={styles.name}>
              <SplitText
                className={styles.line}
                text={PROFILE.firstName}
                delayMs={HERO_NAME.firstLineDelayMs}
                staggerMs={HERO_NAME.staggerMs}
              />
              <span className={styles.line}>
                <em className={styles.accent}>
                  <SplitText
                    text={`${PROFILE.lastName}.`}
                    delayMs={HERO_NAME.secondLineDelayMs}
                    staggerMs={HERO_NAME.staggerMs}
                  />
                </em>
              </span>
            </h1>

            <p className={styles.tagline}>
              <RoleRotator roles={PROFILE.roles} /> — {PROFILE.tagline}
            </p>

            <div className={styles.actions}>
              <ButtonLink href={anchorHref(SECTION_ID.contact)}>
                Hire Me
                <ArrowIcon />
              </ButtonLink>
              <ButtonLink href={PROFILE.cvUrl} variant="ghost" download>
                Download CV
                <DownloadIcon />
              </ButtonLink>
            </div>

            <dl className={styles.meta}>
              <div>
                <dt className={styles.metaLabel}>Based In</dt>
                <dd className={styles.metaValue}>{PROFILE.location}</dd>
              </div>
              <div>
                <dt className={styles.metaLabel}>Experience</dt>
                <dd className={styles.metaValue}>
                  {PROFILE.experienceYears}+<em>years</em>
                </dd>
              </div>
              <div>
                <dt className={styles.metaLabel}>Stack</dt>
                <dd className={styles.metaValue}>{PROFILE.stackSummary}</dd>
              </div>
            </dl>
          </div>

          <PortraitFrame />
        </div>
      </Container>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>Scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
