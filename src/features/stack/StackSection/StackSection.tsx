import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { GitHubGraph } from "@/features/stack/GitHubGraph";
import { Terminal } from "@/features/stack/Terminal";
import { SECTION_ID } from "@/lib/content/navigation";
import { getSectionHeader } from "@/lib/content/sections";

export function StackSection() {
  return (
    <Section id={SECTION_ID.stack}>
      <Container>
        <SectionHeader {...getSectionHeader("stack")} />
        <Terminal />
        <GitHubGraph />
      </Container>
    </Section>
  );
}
