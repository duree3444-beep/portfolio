import { Cloud, Database, Monitor, ServerCog } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import PageContainer from "@/components/ui/PageContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import { techStack } from "@/data/techstack";

const categoryConfig: Record<
  string,
  {
    icon: React.ElementType;
    iconBg: string;
    iconColor: string;
    accent: string;
  }
> = {
  Frontend: {
    icon: Monitor,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    accent: "from-cyan-500/10 to-transparent",
  },
  Backend: {
    icon: ServerCog,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    accent: "from-blue-500/10 to-transparent",
  },
  Database: {
    icon: Database,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accent: "from-emerald-500/10 to-transparent",
  },
  Infra: {
    icon: Cloud,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    accent: "from-violet-500/10 to-transparent",
  },
};

const techColors: Record<string, string> = {
  React: "border-cyan-200 bg-cyan-50 text-cyan-800",
  "Spring Boot": "border-green-200 bg-green-50 text-green-800",
  Python: "border-yellow-200 bg-yellow-50 text-yellow-800",
  "Node.js": "border-lime-200 bg-lime-50 text-lime-800",
  MariaDB: "border-orange-200 bg-orange-50 text-orange-800",
  PostgreSQL: "border-blue-200 bg-blue-50 text-blue-800",
  Docker: "border-sky-200 bg-sky-50 text-sky-800",
};

import type React from "react";

export default function TechStackSection() {
  return (
    <section id="techstack" className="border-y border-slate-100 bg-slate-50/70">
      <PageContainer>
        <SectionHeader eyebrow="Tech Stack" title="사용 가능한 기술" />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {techStack.map((group, idx) => {
            const config = categoryConfig[group.category];
            const Icon = config?.icon ?? ServerCog;

            return (
              <FadeIn key={group.category} delay={idx * 0.07}>
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] h-full">
                  {/* gradient accent */}
                  <div
                    className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${config?.accent ?? ""} opacity-60`}
                  />

                  <div className="relative">
                    {/* icon + category */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-2xl ${config?.iconBg ?? "bg-slate-50"}`}
                      >
                        <Icon
                          className={`h-5 w-5 ${config?.iconColor ?? "text-slate-600"}`}
                        />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                        {group.category}
                      </span>
                    </div>

                    {/* tech pills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.techs.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-full border px-3 py-1.5 text-sm font-semibold ${
                            techColors[tech] ??
                            "border-slate-200 bg-slate-50 text-slate-700"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
