import { ArrowDown, BrainCircuit, Camera, ShieldCheck } from "lucide-react";

const services = [
  { name: "Auth Service", icon: ShieldCheck, desc: "로그인 · JWT 발급" },
  { name: "Photo Service", icon: Camera, desc: "업로드 · 파일 처리" },
  { name: "AI Service", icon: BrainCircuit, desc: "이미지 분석 · 추론" },
];

export default function ArchitectureDiagram() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 md:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
      <div className="text-sm font-semibold text-slate-500 mb-6">
        Architecture Preview
      </div>
      <div className="flex flex-col items-center gap-4">
        {/* Client */}
        <div className="w-full max-w-xs rounded-2xl border border-blue-200 bg-blue-50 px-6 py-4 text-center">
          <div className="text-xs text-slate-500 mb-1">Client</div>
          <div className="text-base font-semibold text-slate-900">
            Web / App / User
          </div>
        </div>

        <ArrowDown className="text-blue-500 h-5 w-5" />

        {/* Gateway */}
        <div className="w-full max-w-xs rounded-2xl border border-blue-300 bg-white px-6 py-4 text-center shadow-sm">
          <div className="text-xs text-slate-500 mb-1">Gateway</div>
          <div className="text-base font-semibold text-slate-900">
            API Gateway
          </div>
        </div>

        <ArrowDown className="text-blue-500 h-5 w-5" />

        {/* Services */}
        <div className="grid w-full gap-3 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-center"
              >
                <Icon className="mx-auto h-5 w-5 text-blue-600" />
                <div className="mt-2 text-xs text-slate-500">Service</div>
                <div className="mt-1 font-semibold text-slate-900 text-sm">
                  {service.name}
                </div>
                <div className="mt-1 text-xs text-slate-500">{service.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
