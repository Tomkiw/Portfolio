import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialScroller } from "@/features/testimonials/TestimonialScroller";
import { getSectionHeader } from "@/lib/content/sections";
import { TESTIMONIALS } from "@/lib/content/testimonials";
import styles from "./Testimonials.module.scss";

export function Testimonials() {
  return (
    <Section className={styles.section}>
      <Container>
        <SectionHeader {...getSectionHeader("testimonials")} />
        <TestimonialScroller items={TESTIMONIALS} />
      </Container>
    </Section>
  );
}
