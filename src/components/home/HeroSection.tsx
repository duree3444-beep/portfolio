import FadeIn from "@/components/motion/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageContainer from "@/components/ui/PageContainer";
import CoreStrengths from "@/components/home/CoreStrengths";
import ArchitectureDiagram from "@/components/architecture/ArchitectureDiagram";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-blue-50/60 via-white to-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.12),_transparent_30%)]" />

      <PageContainer className="relative">
        {/* Hero top grid */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn>
            <Badge className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-blue-700">
              MSA · API Design · Domain Separation · JWT Auth · Data Flow
            </Badge>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-slate-950 leading-[1.15]">
              아키텍처 지향 개발자를 목표로 하는 <br />
              <span className="text-blue-600">이규찬</span>입니다.
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl leading-9 text-slate-600">
              서비스를 기능이 아닌 도메인 단위로 분리하고, API와 데이터 흐름을
              기반으로 확장 가능한 시스템을 설계합니다. Spring Boot와 FastAPI를
              활용하여 서비스 간 책임을 명확히 나누고 유지보수성을 높입니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#architecture">
                <Button size="lg">설계 방식 보기</Button>
              </a>
              <a href="#work">
                <Button size="lg" variant="outline">
                  프로젝트 보기
                </Button>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ArchitectureDiagram />
          </FadeIn>
        </div>

        {/* Core Strengths */}
        <CoreStrengths />
      </PageContainer>
    </section>
  );
}
