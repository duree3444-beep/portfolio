const steps = [
  "Input: 요구사항",
  "Process: 설계 기준",
  "Output: 시스템 구조",
];

export default function ProcessMiniDiagram() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
      <div className="mb-4 text-sm font-semibold text-slate-500">
        설계 사고 흐름
      </div>
      <div className="space-y-4">
        {steps.map((step, idx) => (
          <div key={step} className="flex items-center gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">
              {idx + 1}
            </div>
            <div className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
              {step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
