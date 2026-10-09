import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialScroller } from "@/features/testimonials/TestimonialScroller";
import { TESTIMONIALS } from "@/lib/content/testimonials";
import styles from "./Testimonials.module.scss";

export function Testimonials() {
  return (
    <Section className={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="/ 04 · Words"
          title={
            <>
              Trusted by
              <br />
              great <em>teams.</em>
            </>
          }
          description="Drag, scroll, or use the arrows to browse what folks I've worked with had to say."
        />
        <TestimonialScroller items={TESTIMONIALS} />
      </Container>
    </Section>
  );
}
