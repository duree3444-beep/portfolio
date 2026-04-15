import PageContainer from "@/components/ui/PageContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";
import { techStack } from "@/data/techstack";

export default function TechStackSection() {
  return (
    <PageContainer id="techstack">
      <SectionHeader eyebrow="Tech Stack" title="사용 가능한 기술" />

      <FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {group.category}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </PageContainer>
  );
}
