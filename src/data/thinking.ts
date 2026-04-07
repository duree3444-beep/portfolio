import type { ThinkingItem } from "@/types/portfolio";

export const thinkingItems: ThinkingItem[] = [
  {
    value: "feature-vs-structure",
    title: "기능 vs 구조",
    content:
      "기능 중심 개발은 지금 당장 돌아가게 만드는 데에는 강하지만, 기능이 늘어날수록 변경 비용이 폭증합니다. 구조 중심 설계는 기능 수가 많아질수록 오히려 속도를 유지하게 만드는 기반이며, 책임을 분리하고 변경 이유를 예측 가능하게 만드는 데 목적이 있습니다.",
  },
  {
    value: "monolith-vs-msa",
    title: "모놀리식 vs MSA",
    content:
      "모놀리식은 빠르게 학습하고 검증하기에 적합한 구조입니다. 반면 MSA는 조직 구조, 배포 독립성, 장애 격리, 서비스별 확장 요구가 생겼을 때 유효합니다. 저는 MSA를 기본값으로 보지 않고, 복잡도를 감당할 준비가 되었을 때 선택해야 한다고 봅니다.",
  },
  {
    value: "service-boundary",
    title: "서비스 분리 기준",
    content:
      "서비스는 기능 이름이 아니라 도메인, 책임, 데이터 소유권을 기준으로 나누어야 합니다. 무엇에 대한 서비스인지, 왜 변경되는지, 어떤 데이터를 스스로 책임지는지 세 기준이 동시에 맞아야 독립적인 서비스가 됩니다.",
  },
  {
    value: "api-principles",
    title: "API 설계 기준",
    content:
      "API는 내부 구현이 아니라 외부와의 계약입니다. 자원 중심 설계, HTTP Method의 의도 표현, 상태 코드의 명확성, 일관된 응답 형식, 공통 예외 처리, 로그와 사용자 메시지의 분리가 핵심입니다.",
  },
  {
    value: "data-flow",
    title: "데이터 흐름 사고",
    content:
      "저는 시스템을 요청 → 처리 → 저장 → 응답의 흐름으로 해석합니다. 각 단계에서 누가 책임지고 어디에서 검증하며 어떤 데이터가 이동하는지를 기준으로 설계를 정리합니다.",
  },
];
