import { Fragment } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { Donut } from "@/components/Donut";
import { ArrowIcon } from "@/components/icons";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ABOUT_COPY } from "@/lib/content/about";
import { anchorHref, CTA_LABEL, SECTION_ID } from "@/lib/content/navigation";
import { PROFILE } from "@/lib/content/profile";
import { getSectionHeader } from "@/lib/content/sections";
import { SKILLS } from "@/lib/content/skills";
import styles from "./About.module.scss";

export function About() {
  return (
    <Section id={SECTION_ID.about}>
      <Container>
        <SectionHeader {...getSectionHeader("about")} />

        <div className={styles.grid}>
          <div className={styles.media}>
            {/* Placeholder until a workspace photo is provided. */}
            <div className={styles.card} aria-hidden="true">
              <div className={styles.cardInner}>
                <p className={styles.cardMeta}>{ABOUT_COPY.photoCaption}</p>
              </div>
            </div>
            <p className={styles.stamp}>
              <strong>{PROFILE.experienceYears}</strong>
              {ABOUT_COPY.stampLines.map((line, index) => (
                <Fragment key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </Fragment>
              ))}
            </p>
          </div>

          <div className={styles.content}>
            <h3 className={styles.heading}>{ABOUT_COPY.heading}</h3>
            {ABOUT_COPY.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.text}>
                {paragraph}
              </p>
            ))}

            <div className={styles.skills}>
              {SKILLS.map((skill) => (
                <Donut key={skill.id} label={skill.name} percent={skill.percent} />
              ))}
            </div>

            <div className={styles.actions}>
              <ButtonLink href={anchorHref(SECTION_ID.contact)}>
                {CTA_LABEL.hire}
                <ArrowIcon />
              </ButtonLink>
              <ButtonLink href={anchorHref(SECTION_ID.work)} variant="ghost">
                {CTA_LABEL.viewWork}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
