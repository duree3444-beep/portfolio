import { useState } from "react";
import PageContainer from "@/components/ui/PageContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";
import { writings } from "@/data/writings";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function WritingSection() {
  const [activeId, setActiveId] = useState("msa");
  const activePost = writings.find((w) => w.id === activeId) ?? writings[0];

  return (
    <section id="writing" className="bg-slate-50/70 border-y border-slate-100">
      <PageContainer>
        <SectionHeader
          eyebrow="Writing"
          title="아키텍처 지향 개발자로서의 고민"
        />

        <div className="grid gap-8 xl:grid-cols-[0.42fr_0.58fr]">
          <FadeIn>
            <div className="grid gap-4">
              {writings.map((post) => (
                <button
                  key={post.id}
                  type="button"
                  onClick={() => setActiveId(post.id)}
                  className={`text-left rounded-3xl border p-5 transition-colors ${
                    activeId === post.id
                      ? "border-blue-300 bg-blue-50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-blue-200"
                  }`}
                >
                  <div className="text-base font-semibold text-slate-900">
                    {post.title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">
                    {post.preview}
                  </div>
                </button>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Card className="rounded-3xl border border-slate-200 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
              <CardHeader>
                <CardTitle className="text-2xl">{activePost.title}</CardTitle>
                <CardDescription className="text-base leading-7">
                  구조적 판단 기준을 보여주는 아티클 초안
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-8">{activePost.content}</p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </PageContainer>
    </section>
  );
}
