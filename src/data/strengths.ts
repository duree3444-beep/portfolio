import { Boxes, Database, ServerCog, ShieldCheck, Workflow } from "lucide-react";
import type { StrengthItem } from "@/types/portfolio";

export const strengths: StrengthItem[] = [
  {
    title: "Service Design",
    desc: "기능이 아니라 도메인과 책임을 기준으로 서비스를 정의합니다.",
    icon: Boxes,
  },
  {
    title: "Backend Architecture",
    desc: "Spring Boot와 FastAPI를 조합해 확장 가능한 구조를 설계합니다.",
    icon: ServerCog,
  },
  {
    title: "API 설계",
    desc: "자원 중심 URL, 상태 코드, 일관된 응답 구조를 우선합니다.",
    icon: Workflow,
  },
  {
    title: "인증 구조",
    desc: "JWT 기반 인증 흐름과 서비스 간 검증 책임을 분리합니다.",
    icon: ShieldCheck,
  },
  {
    title: "데이터 흐름 설계",
    desc: "요청부터 처리, 저장, 응답까지 흐름을 명확하게 설계합니다.",
    icon: Database,
  },
];
