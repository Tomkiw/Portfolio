import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { ArrowIcon, DownloadIcon } from "@/components/icons";
import { SplitText } from "@/components/SplitText";
import { LiveClock } from "@/features/hero/LiveClock";
import { PortraitFrame } from "@/features/hero/PortraitFrame";
import { RoleRotator } from "@/features/hero/RoleRotator";
import { HERO_NAME } from "@/lib/constants";
import { HERO_COPY } from "@/lib/content/hero";
import { anchorHref, CTA_LABEL, SECTION_ID } from "@/lib/content/navigation";
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
                {CTA_LABEL.hire}
                <ArrowIcon />
              </ButtonLink>
              {PROFILE.cvUrl ? (
                <ButtonLink href={PROFILE.cvUrl} variant="ghost" download>
                  {CTA_LABEL.downloadCv}
                  <DownloadIcon />
                </ButtonLink>
              ) : null}
            </div>

            <dl className={styles.meta}>
              <div>
                <dt className={styles.metaLabel}>{HERO_COPY.metaLabels.location}</dt>
                <dd className={styles.metaValue}>{PROFILE.location}</dd>
              </div>
              <div>
                <dt className={styles.metaLabel}>{HERO_COPY.metaLabels.experience}</dt>
                <dd className={styles.metaValue}>
                  {PROFILE.experienceYears}
                  <em>{HERO_COPY.experienceUnit}</em>
                </dd>
              </div>
              <div>
                <dt className={styles.metaLabel}>{HERO_COPY.metaLabels.stack}</dt>
                <dd className={styles.metaValue}>{PROFILE.stackSummary}</dd>
              </div>
            </dl>
          </div>

          <PortraitFrame />
        </div>
      </Container>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>{HERO_COPY.scrollHint}</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
