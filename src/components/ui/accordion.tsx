import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  value: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function SimpleAccordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<string | null>(items[0]?.value ?? null);

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = open === item.value;
        return (
          <div
            key={item.value}
            className="rounded-3xl border border-slate-200 bg-white px-6"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : item.value)}
              className="flex w-full items-center justify-between py-6 text-left"
            >
              <span className="text-lg font-semibold text-slate-900">
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-slate-500 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            {isOpen && (
              <div className="pb-6 text-base leading-8 text-slate-600">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
