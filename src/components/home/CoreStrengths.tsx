import { strengths } from "@/data/strengths";
import FadeIn from "@/components/motion/FadeIn";
import { Card, CardContent } from "@/components/ui/card";

export default function CoreStrengths() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {strengths.map((item, index) => {
        const Icon = item.icon;
        return (
          <FadeIn key={item.title} delay={index * 0.07}>
            <Card className="h-full rounded-3xl border border-slate-200 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
              <CardContent className="p-5">
                <Icon className="h-5 w-5 text-blue-600" />
                <div className="mt-4 font-semibold text-slate-900">
                  {item.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        );
      })}
    </div>
  );
}
