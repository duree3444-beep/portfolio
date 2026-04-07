import FadeIn from "@/components/motion/FadeIn";
import SectionHeader from "@/components/layout/SectionHeader";
import PageContainer from "@/components/ui/PageContainer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProcessMiniDiagram from "@/components/home/ProcessMiniDiagram";

const principles = [
  "기능보다 구조를 우선시합니다.",
  "빠른 구현보다 유지보수를 고려합니다.",
  "서비스 간 책임을 명확히 나눕니다.",
  "데이터 흐름을 기준으로 설계합니다.",
];

export default function IdentitySection() {
  return (
    <PageContainer id="identity">
      <SectionHeader
        eyebrow="Identity"
        title="왜 구조 중심 개발자를 지향하는가"
      />

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn>
          <Card className="rounded-3xl border border-slate-200 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <CardHeader>
              <CardTitle className="text-2xl">이규찬</CardTitle>
              <CardDescription className="text-base leading-7">
                MSA 기반 아키텍처 지향 개발자를 목표로 하는 대학생입니다.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">Email</div>
                  <a
                    className="mt-1 inline-block font-medium text-slate-900 hover:text-blue-600"
                    href="mailto:hanee0201@gmail.com"
                  >
                    hanee0201@gmail.com
                  </a>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">GitHub</div>
                  <a
                    className="mt-1 inline-block font-medium text-slate-900 hover:text-blue-600"
                    href="https://github.com/duree3444-beep"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/duree3444-beep
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">나의 방향</h3>
                <p className="mt-3 text-slate-600 leading-8">
                  저는 기능 구현이 아니라 서비스 구조를 설계하는 개발자를
                  지향합니다. 기능이 늘어날수록 복잡해지는 문제를 서비스 분리와
                  책임 구조를 통해 해결하고자 합니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">개발 기준</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {principles.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.08}>
          <ProcessMiniDiagram />
        </FadeIn>
      </div>
    </PageContainer>
  );
}
