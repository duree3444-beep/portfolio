import PageContainer from "@/components/ui/PageContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import { thinkingItems } from "@/data/thinking";
import { SimpleAccordion } from "@/components/ui/accordion";
import FadeIn from "@/components/motion/FadeIn";

export default function ThinkingSection() {
  return (
    <section
      id="thinking"
      className="bg-slate-50/70 border-y border-slate-100"
    >
      <PageContainer>
        <SectionHeader
          eyebrow="Thinking"
          title="구조를 해석하는 사고 방식"
        />
        <FadeIn>
          <SimpleAccordion items={thinkingItems} />
        </FadeIn>
      </PageContainer>
    </section>
  );
}
