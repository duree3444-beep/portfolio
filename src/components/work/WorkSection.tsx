import { useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCheck,
  ChevronDown,
  CircleAlert,
  Layers3,
  Lightbulb,
  Network,
  RefreshCw,
  Sparkles,
  Target,
} from "lucide-react";
import PageContainer from "@/components/ui/PageContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";
import { projects } from "@/data/project";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import type { ProjectDecisionItem } from "@/types/portfolio";
import { cn } from "@/lib/utils";

type DecisionStageKey = "before" | "issue" | "after" | "takeaway";

const decisionStages: {
  key: DecisionStageKey;
  label: string;
  icon: LucideIcon;
  panelClassName: string;
  iconWrapClassName: string;
  labelClassName: string;
}[] = [
  {
    key: "before",
    label: "초기 방식",
    icon: Lightbulb,
    panelClassName: "border-slate-200 bg-slate-50/90",
    iconWrapClassName: "bg-white text-slate-700",
    labelClassName: "text-slate-500",
  },
  {
    key: "issue",
    label: "문제",
    icon: CircleAlert,
    panelClassName: "border-amber-200 bg-amber-50/90",
    iconWrapClassName: "bg-amber-100 text-amber-700",
    labelClassName: "text-amber-700",
  },
  {
    key: "after",
    label: "바꾼 방식",
    icon: RefreshCw,
    panelClassName: "border-blue-200 bg-blue-50/90",
    iconWrapClassName: "bg-blue-100 text-blue-700",
    labelClassName: "text-blue-700",
  },
  {
    key: "takeaway",
    label: "배운 점",
    icon: Sparkles,
    panelClassName: "border-emerald-200 bg-emerald-50/90",
    iconWrapClassName: "bg-emerald-100 text-emerald-700",
    labelClassName: "text-emerald-700",
  },
];

function truncate(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trim()}...`;
}

interface DetailPanelProps {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
  iconWrapClassName?: string;
  iconClassName?: string;
}

function DetailPanel({
  icon: Icon,
  eyebrow,
  title,
  children,
  className,
  iconWrapClassName,
  iconClassName,
}: DetailPanelProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-slate-200 bg-white/95 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100",
            iconWrapClassName
          )}
        >
          <Icon className={cn("h-5 w-5 text-slate-700", iconClassName)} />
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            {eyebrow}
          </div>
          <h3 className="mt-2 text-lg font-semibold text-slate-950 md:text-xl">
            {title}
          </h3>
        </div>
      </div>

      <div className="mt-5">{children}</div>
    </div>
  );
}

function DecisionCard({
  decision,
  index,
}: {
  decision: ProjectDecisionItem;
  index: number;
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.98))] p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
      <div className="flex flex-wrap items-center gap-3">
        <Badge className="border border-blue-200 bg-blue-50 text-blue-700">
          고민 {index + 1}
        </Badge>
        <span className="text-xs font-medium text-slate-500">
          실제 진행 중 수정한 설계 판단
        </span>
      </div>

      <h4 className="mt-4 text-lg font-semibold leading-8 text-slate-950">
        {decision.title}
      </h4>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {decisionStages.map((stage, stageIndex) => {
          const Icon = stage.icon;

          return (
            <div
              key={stage.key}
              className={cn(
                "rounded-2xl border p-4",
                stage.panelClassName
              )}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl",
                    stage.iconWrapClassName
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={cn(
                        "text-xs font-semibold tracking-[0.12em]",
                        stage.labelClassName
                      )}
                    >
                      {stage.label}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-400">
                      0{stageIndex + 1}
                    </div>
                  </div>

                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {decision[stage.key]}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function WorkSection() {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  return (
    <PageContainer id="work">
      <SectionHeader eyebrow="Work" title="프로젝트" />

      <div className="space-y-6">
        {projects.map((project, index) => {
          const isOpen = openProjectId === project.id;

          return (
            <FadeIn key={project.id} delay={index * 0.06}>
              <Card
                className={cn(
                  "overflow-hidden rounded-3xl border border-slate-200 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-shadow duration-300",
                  isOpen && "shadow-[0_18px_60px_rgba(15,23,42,0.1)]"
                )}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setOpenProjectId(isOpen ? null : project.id)
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setOpenProjectId(isOpen ? null : project.id);
                    }
                  }}
                  aria-expanded={isOpen}
                  aria-controls={`project-detail-${project.id}`}
                  className={cn(
                    "w-full cursor-pointer p-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                    isOpen
                      ? "bg-[linear-gradient(180deg,rgba(239,246,255,0.9),rgba(255,255,255,0.96))]"
                      : "hover:bg-slate-50/70"
                  )}
                >
                  <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <CardTitle className="text-2xl">{project.name}</CardTitle>
                        <Badge className="w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-blue-700">
                          Structure First Project
                        </Badge>
                      </div>
                      <CardDescription className="max-w-3xl text-base leading-7">
                        {project.summary}
                      </CardDescription>
                    </div>

                    <div className="flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
                      <span>{isOpen ? "상세 접기" : "상세 보기"}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="text-xs font-semibold text-slate-500">
                        핵심 문제
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {truncate(project.problem, 90)}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-blue-50 p-4">
                      <div className="text-xs font-semibold text-blue-700">
                        서비스 구조
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {project.services.length}개 서비스 경계를 기준으로 책임을
                        분리했습니다.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="text-xs font-semibold text-slate-500">
                        설계 변경 기록
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {project.decisions.length}개의 시행착오와 구조 변경을
                        정리했습니다.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="text-xs font-semibold text-slate-500">
                        핵심 키워드
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.design.slice(0, 2).map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <CardContent
                    id={`project-detail-${project.id}`}
                    className="border-t border-slate-200/80 bg-[linear-gradient(180deg,rgba(248,250,252,0.55),rgba(255,255,255,1))] px-6 pb-6 pt-6"
                  >
                    <div className="space-y-6">
                      <div className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-[linear-gradient(135deg,rgba(219,234,254,0.78),rgba(255,255,255,0.98),rgba(248,250,252,0.98))] p-6">
                        <div className="absolute inset-y-0 right-0 w-40 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.16),_transparent_70%)]" />
                        <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                          <div>
                            <Badge className="border border-white/80 bg-white/90 text-blue-700 shadow-sm">
                              상세 설계 보기
                            </Badge>
                            <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
                              설계 판단과 시행착오를 한 화면에서 읽을 수 있게
                              정리했습니다.
                            </h3>
                            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                              문제 정의부터 서비스 구조, 실제로 바꾼 설계와 그
                              이유까지 이어서 볼 수 있도록 상세 영역을 구성했습니다.
                            </p>
                          </div>

                          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                            <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm">
                              <div className="text-xs font-semibold text-slate-500">
                                서비스
                              </div>
                              <div className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                                {project.services.length}
                              </div>
                              <div className="mt-1 text-sm text-slate-600">
                                분리된 책임 단위
                              </div>
                            </div>

                            <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm">
                              <div className="text-xs font-semibold text-slate-500">
                                설계 포인트
                              </div>
                              <div className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                                {project.design.length}
                              </div>
                              <div className="mt-1 text-sm text-slate-600">
                                핵심 설계 축
                              </div>
                            </div>

                            <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm">
                              <div className="text-xs font-semibold text-slate-500">
                                변경 기록
                              </div>
                              <div className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                                {project.decisions.length}
                              </div>
                              <div className="mt-1 text-sm text-slate-600">
                                시행착오 정리
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
                          <DetailPanel
                            icon={Target}
                            eyebrow="문제 정의"
                            title="무엇을 해결하려 했는가"
                          iconWrapClassName="bg-blue-50"
                          iconClassName="text-blue-700"
                        >
                          <p className="text-base leading-8 text-slate-700">
                            {project.problem}
                          </p>
                        </DetailPanel>

                        <div className="space-y-6 xl:sticky xl:top-24 xl:self-start">
                          <DetailPanel
                            icon={Network}
                            eyebrow="서비스 구조"
                            title="서비스 구조"
                            className="border-blue-100 bg-[linear-gradient(180deg,rgba(239,246,255,0.9),rgba(255,255,255,0.98))]"
                            iconWrapClassName="bg-white"
                            iconClassName="text-blue-700"
                          >
                            <div className="relative space-y-3 before:absolute before:left-5 before:top-4 before:bottom-4 before:w-px before:bg-blue-200">
                              {project.services.map((service, serviceIndex) => (
                                <div
                                  key={service}
                                  className="relative flex items-start gap-4 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm"
                                >
                                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white">
                                    {serviceIndex + 1}
                                  </div>

                                  <div className="min-w-0 flex-1">
                                    <code className="rounded-xl bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white">
                                      {service}
                                    </code>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                                        독립 경계
                                      </span>
                                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                                        책임 분리
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </DetailPanel>

                          <DetailPanel
                            icon={Lightbulb}
                            eyebrow="구조 해석"
                            title="구조 관점 해석"
                            iconWrapClassName="bg-slate-100"
                            iconClassName="text-slate-700"
                          >
                            <div className="rounded-[24px] bg-slate-950 p-5 text-slate-100">
                              <p className="text-sm leading-8 text-slate-200">
                                {project.insight}
                              </p>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.decisions.map((decision) => (
                                <span
                                  key={decision.title}
                                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                                >
                                  {decision.title}
                                </span>
                              ))}
                            </div>
                          </DetailPanel>
                        </div>
                      </div>

                      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                        <DetailPanel
                          icon={Layers3}
                          eyebrow="설계 접근"
                          title="설계 접근"
                          iconWrapClassName="bg-slate-100"
                          iconClassName="text-slate-700"
                        >
                          <div className="grid gap-3 md:grid-cols-3">
                            {project.design.map((item, designIndex) => (
                              <div
                                key={item}
                                className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-sm font-bold text-blue-700 shadow-sm">
                                    {designIndex + 1}
                                  </div>
                                  <ArrowRight className="h-4 w-4 text-slate-300" />
                                </div>
                                <p className="mt-4 text-sm leading-7 text-slate-700">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </DetailPanel>

                        <DetailPanel
                          icon={Sparkles}
                          eyebrow="결과"
                          title="무엇을 얻었는가"
                          iconWrapClassName="bg-emerald-50"
                          iconClassName="text-emerald-700"
                        >
                          <div className="space-y-3">
                            {project.outcomes.map((item) => (
                              <div
                                key={item}
                                className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4"
                              >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                                  <CheckCheck className="h-4 w-4" />
                                </div>
                                <p className="text-sm leading-7 text-slate-700">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </DetailPanel>
                      </div>

                      <DetailPanel
                        icon={Sparkles}
                        eyebrow="설계 변경"
                        title="실패하거나 바꾼 설계"
                        className="bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.98))]"
                        iconWrapClassName="bg-blue-50"
                        iconClassName="text-blue-700"
                      >
                        <div className="grid gap-4 xl:grid-cols-2">
                          {project.decisions.map((decision, decisionIndex) => (
                            <DecisionCard
                              key={decision.title}
                              decision={decision}
                              index={decisionIndex}
                            />
                          ))}
                        </div>
                      </DetailPanel>
                    </div>
                  </CardContent>
                )}
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </PageContainer>
  );
}
