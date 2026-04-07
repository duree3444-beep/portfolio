import type { ReactNode } from "react";
import { SECTION_CLASS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function PageContainer({ id, className, children }: Props) {
  return (
    <section id={id} className={cn(SECTION_CLASS, className)}>
      {children}
    </section>
  );
}
