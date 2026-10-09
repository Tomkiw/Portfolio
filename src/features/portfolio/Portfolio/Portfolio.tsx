import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectGallery } from "@/features/portfolio/ProjectGallery";
import { SECTION_ID } from "@/lib/content/navigation";

export function Portfolio() {
  return (
    <Section id={SECTION_ID.work}>
      <Container>
        <SectionHeader
          eyebrow="/ 03 · Selected Work"
          title={
            <>
              Recent <em>projects.</em>
            </>
          }
          description="A small slice of shipped work — full case studies and code samples on request."
        />
        <ProjectGallery />
      </Container>
    </Section>
  );
}
