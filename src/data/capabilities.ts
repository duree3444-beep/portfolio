import { Database, Layers3, ServerCog, ShieldCheck } from "lucide-react";
import type { CapabilityItem } from "@/types/portfolio";

export const capabilities: CapabilityItem[] = [
  {
    title: "Architecture",
    items: ["서비스 분리 설계", "시스템 구조 설계", "도메인 경계 정의"],
    icon: Layers3,
  },
  {
    title: "Backend",
    items: ["Spring Boot API 설계", "FastAPI 서비스 분리", "JWT 인증 구현"],
    icon: ServerCog,
  },
  {
    title: "Data",
    items: ["DB 설계", "데이터 흐름 정리", "서비스별 데이터 책임 구분"],
    icon: Database,
  },
  {
    title: "Infra",
    items: ["Docker 기반 실행", "배포 구조 이해", "서비스 운영 관점 학습"],
    icon: ShieldCheck,
  },
];
