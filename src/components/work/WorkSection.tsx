import PageContainer from "@/components/ui/PageContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";
import { project } from "@/data/project";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function WorkSection() {
  return (
    <PageContainer id="work">
      <SectionHeader
        eyebrow="Work"
        title="프로젝트"
      />

      <FadeIn>
        <Card className="rounded-3xl border border-slate-200 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
          <CardHeader>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle className="text-2xl">{project.name}</CardTitle>
                <CardDescription className="mt-2 text-base leading-7">
                  {project.summary}
                </CardDescription>
              </div>
              <Badge className="w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-blue-700">
                Structure First Project
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold">무엇을 해결하려 했는가</h3>
                <p className="mt-3 text-slate-600 leading-8">
                  {project.problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">설계 접근</h3>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {project.design.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">무엇을 얻었는가</h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {project.outcomes.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl bg-slate-50 p-4 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="text-sm font-semibold text-blue-700 mb-4">
                  서비스 구조
                </div>
                <div className="space-y-3">
                  {project.services.map((service) => (
                    <div
                      key={service}
                      className="rounded-2xl bg-white p-4 font-medium text-slate-800 shadow-sm text-sm"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-500 mb-3">
                  구조 관점 해석
                </div>
                <p className="text-slate-600 leading-8 text-sm">
                  이 프로젝트의 핵심은 기능을 잘게 쪼갠 것이 아니라, 사진
                  업로드·다이어리 관리·비전 AI·텍스트 AI의 변경 이유가 서로
                  다르다는 점을 구조로 반영한 데 있습니다. 그 결과, 이후 기능
                  확장 시에도 어느 계층과 서비스가 책임지는지 명확하게 설명할 수
                  있습니다.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </PageContainer>
  );
}
