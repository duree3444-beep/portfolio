import PageContainer from "@/components/ui/PageContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <PageContainer id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="함께 이야기 나눠요"
        description="설계에 대한 이야기, 프로젝트 협업, 피드백 모두 환영합니다."
      />

      <FadeIn>
        <div className="grid gap-6 md:grid-cols-3 max-w-3xl">
          <Card className="rounded-3xl border border-slate-200 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Email</div>
                <div className="mt-1 text-sm text-slate-500">
                  hanee0201@gmail.com
                </div>
              </div>
              <a href="mailto:hanee0201@gmail.com">
                <Button className="w-full">메일 보내기</Button>
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border border-slate-200 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Phone</div>
                <div className="mt-1 text-sm text-slate-500">
                  010-4865-4554
                </div>
              </div>
              <a href="tel:01048654554">
                <Button variant="outline" className="w-full">
                  전화하기
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border border-slate-200 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                <Github className="h-6 w-6 text-slate-700" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">GitHub</div>
                <div className="mt-1 text-sm text-slate-500">
                  github.com/Kakeno-k
                </div>
              </div>
              <a
                href="https://github.com/Kakeno-k"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" className="w-full">
                  GitHub 방문하기
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </FadeIn>
    </PageContainer>
  );
}
