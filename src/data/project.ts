import type { ProjectItem } from "@/types/portfolio";

export const project: ProjectItem = {
  name: "하루 시그널",
  summary:
    "AI 기반 서비스로 확장 가능한 업로드 및 데이터 처리 구조를 설계하는 프로젝트",
  problem:
    "사용자가 사진과 기록을 남기는 서비스를 만들 때, 초기에 단순 업로드 기능만 구현하면 이후 AI 분석, 다이어리 생성, 비전 모델 연동이 붙을수록 구조가 빠르게 무너질 수 있습니다. 이 프로젝트는 처음부터 책임을 분리한 구조를 설계하는 데 초점을 두었습니다.",
  design: [
    "책임 분리 중심 설계",
    "정책 중심 업로드 구조 설계",
    "MSA 전환 가능성을 고려한 서비스 경계 정의",
  ],
  services: [
    "photo_service",
    "diary_service",
    "vision_ai_service",
    "diary_ai_service",
  ],
  outcomes: [
    "기능보다 구조가 먼저라는 관점을 체득",
    "책임 분리의 필요성을 실제 프로젝트에 반영",
    "MSA를 위한 사고방식을 구체적인 설계 흐름으로 정리",
  ],
};
