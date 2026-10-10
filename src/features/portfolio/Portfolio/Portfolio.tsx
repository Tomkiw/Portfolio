import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectGallery } from "@/features/portfolio/ProjectGallery";
import { SECTION_ID } from "@/lib/content/navigation";
import { getSectionHeader } from "@/lib/content/sections";

export function Portfolio() {
  return (
    <Section id={SECTION_ID.work}>
      <Container>
        <SectionHeader {...getSectionHeader("work")} />
        <ProjectGallery />
      </Container>
    </Section>
  );
}
