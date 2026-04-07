import PageContainer from "@/components/ui/PageContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";

const steps = [
  "요구사항 분석",
  "도메인 분리",
  "서비스 정의",
  "API 설계",
  "DB 설계",
  "인증 설계",
];

const services = [
  { title: "Auth Service", desc: "로그인, 토큰 발급, 인증 책임" },
  { title: "Photo Service", desc: "업로드 정책, 파일 처리, 메타데이터 저장" },
  { title: "AI Service", desc: "이미지 분석, 추론, 후속 비즈니스 연계" },
];

const authFlow = ["로그인 요청", "JWT 발급", "각 서비스에서 검증"];
const dataStrategy = ["서비스별 DB 분리", "책임 기반 데이터 관리", "직접 DB 공유 금지"];
const pros = ["확장성", "독립성", "장애 격리"];
const cons = ["복잡도 증가", "서비스 간 통신 비용", "운영 부담"];

export default function ArchitectureSection() {
  return (
    <PageContainer id="architecture">
      <SectionHeader
        eyebrow="Architecture"
        title="요구사항에서 서비스 구조까지 가는 설계 흐름"
      />

      <div className="space-y-6">
        {/* 1. 설계 프로세스 — 가로 스텝 */}
        <FadeIn>
          <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <div className="text-sm font-semibold text-slate-500 mb-5">설계 프로세스</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {steps.map((step, idx) => (
                <div
                  key={step}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-4 text-center"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">
                    {idx + 1}
                  </div>
                  <div className="text-sm font-medium text-slate-800">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* 2. 서비스 구조 */}
        <FadeIn delay={0.06}>
          <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <div className="text-sm font-semibold text-slate-500 mb-5">서비스 구조 예시</div>
            <div className="grid gap-4 sm:grid-cols-3">
              {services.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-blue-50 p-5"
                >
                  <div className="font-semibold text-slate-900">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* 3. 인증 흐름 / 데이터 전략 / 트레이드오프 */}
        <FadeIn delay={0.12}>
          <div className="grid gap-6 sm:grid-cols-3">
            {/* 인증 흐름 */}
            <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
              <div className="text-sm font-semibold text-slate-500 mb-4">인증 흐름</div>
              <div className="space-y-2">
                {authFlow.map((t, i) => (
                  <div key={t} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                    <span className="text-xs font-bold text-blue-600">{i + 1}</span>
                    <span className="text-sm text-slate-700">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 데이터 분리 전략 */}
            <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
              <div className="text-sm font-semibold text-slate-500 mb-4">데이터 분리 전략</div>
              <div className="space-y-2">
                {dataStrategy.map((t) => (
                  <div key={t} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* 트레이드오프 */}
            <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
              <div className="text-sm font-semibold text-slate-500 mb-4">트레이드오프</div>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold text-blue-600 mb-2">장점</div>
                  <div className="space-y-2">
                    {pros.map((t) => (
                      <div key={t} className="rounded-2xl bg-blue-50 px-4 py-2 text-sm text-slate-700">
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-2">단점</div>
                  <div className="space-y-2">
                    {cons.map((t) => (
                      <div key={t} className="rounded-2xl bg-slate-50 px-4 py-2 text-sm text-slate-700">
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </PageContainer>
  );
}
