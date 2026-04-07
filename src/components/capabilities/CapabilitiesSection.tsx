import PageContainer from "@/components/ui/PageContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";
import { capabilities } from "@/data/capabilities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="bg-slate-50/70 border-y border-slate-100"
    >
      <PageContainer>
        <SectionHeader
          eyebrow="Capabilities"
          title="아키텍처 설계 및 구현 역량"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <FadeIn key={cap.title} delay={idx * 0.07}>
                <Card className="h-full rounded-3xl border border-slate-200 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="pt-2">{cap.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-700">
                      {cap.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-2xl bg-slate-50 p-3 text-sm"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
