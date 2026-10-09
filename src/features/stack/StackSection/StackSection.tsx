import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { GitHubGraph } from "@/features/stack/GitHubGraph";
import { Terminal } from "@/features/stack/Terminal";
import { SECTION_ID } from "@/lib/content/navigation";

export function StackSection() {
  return (
    <Section id={SECTION_ID.stack}>
      <Container>
        <SectionHeader
          eyebrow="/ 05 · Stack & Tools"
          title={
            <>
              Tools of the <em>trade.</em>
            </>
          }
          description="What I build with today, with versions from my latest projects — and what I'm learning next."
        />
        <Terminal />
        <GitHubGraph />
      </Container>
    </Section>
  );
}
