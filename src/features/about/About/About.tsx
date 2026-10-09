import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { Donut } from "@/components/Donut";
import { ArrowIcon } from "@/components/icons";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { anchorHref, SECTION_ID } from "@/lib/content/navigation";
import { PROFILE } from "@/lib/content/profile";
import { SKILLS } from "@/lib/content/skills";
import styles from "./About.module.scss";

export function About() {
  return (
    <Section id={SECTION_ID.about}>
      <Container>
        <SectionHeader
          eyebrow="/ 01 · About"
          title={
            <>
              Engineering
              <br />
              with <em>intent.</em>
            </>
          }
          description="My first GitHub repository dates back to August 2025. Since then I've led team sprints, built full-stack apps and shipped most of my projects to live URLs."
        />

        <div className={styles.grid}>
          <div className={styles.media}>
            {/* Placeholder until a workspace photo is provided. */}
            <div className={styles.card} aria-hidden="true">
              <div className={styles.cardInner}>
                <p className={styles.cardMeta}>workspace.jpg · drop here</p>
              </div>
            </div>
            <p className={styles.stamp}>
              <strong>{PROFILE.experienceYears}+</strong>
              Years of
              <br />
              Experience
            </p>
          </div>

          <div className={styles.content}>
            <h3 className={styles.heading}>
              I write code I&apos;d be proud to maintain a year from now.
            </h3>
            <p className={styles.text}>
              I like the whole path from a Figma mockup to a deployed app: semantic, mobile-first
              markup, React and Next.js on the front, Node.js, Express and MongoDB behind it.
            </p>
            <p className={styles.text}>
              In team projects I&apos;ve been Team Lead and Scrum Master — planning sprints,
              splitting tasks and reviewing pull requests. Right now I&apos;m going deeper into
              TypeScript, Next.js and state management.
            </p>

            <div className={styles.skills}>
              {SKILLS.map((skill) => (
                <Donut key={skill.id} label={skill.name} percent={skill.percent} />
              ))}
            </div>

            <div className={styles.actions}>
              <ButtonLink href={anchorHref(SECTION_ID.contact)}>
                Hire Me
                <ArrowIcon />
              </ButtonLink>
              <ButtonLink href={anchorHref(SECTION_ID.work)} variant="ghost">
                View Work
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
