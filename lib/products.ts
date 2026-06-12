export type Product = {
  slug: string;
  name: string;
  nameKo: string;
  price: number;
  listPrice: number;
  category: "cap" | "top" | "bottom" | "outer";
  categoryKo: string;
  tagline: string;
  description: string;
  details: string[];
  sizes: string[];
  color: string;
  image: string;
  badge?: "BEST" | "NEW";
};

export const PRODUCTS: Product[] = [
  {
    slug: "fyf-performance-cap",
    name: "FYF Performance Cap",
    nameKo: "퍼포먼스 캡",
    price: 39000,
    listPrice: 49000,
    category: "cap",
    categoryKo: "캡",
    tagline: "첫 크루, 첫 모자.",
    description:
      "처음 러닝을 시작하는 사람의 첫 장비. 매트 블랙 5패널 위에 심박 그래프 하나. 페이스는 시계가 정하지 않는다. 네 심장이 정한다.",
    details: [
      "매트 블랙 5패널 구조",
      "전면 화이트 하트비트 ECG 로고",
      "측면 FYF 워드마크",
      "레이저 컷 통기홀",
      "후면 드로스트링 루프 — 야간 러닝 시 라이트 클립 호환",
      "경량 속건 원단 (UPF 50+)",
    ],
    sizes: ["FREE"],
    color: "Matte Black",
    image: "/products/fyf-performance-cap.png",
    badge: "BEST",
  },
  {
    slug: "flow-singlet",
    name: "Flow Singlet",
    nameKo: "플로우 싱글렛",
    price: 46000,
    listPrice: 56900,
    category: "top",
    categoryKo: "탑",
    tagline: "공기보다 가볍게.",
    description:
      "레이스 데이를 위한 초경량 메시 싱글렛. 몸이 사라지고 리듬만 남는 순간을 위해 만들었다.",
    details: [
      "초경량 테크니컬 메시 (98g, M 기준)",
      "좌측 가슴 ECG 펄스 로고",
      "플랫락 봉제 — 마찰 제로 설계",
      "속건 4-way 스트레치",
    ],
    sizes: ["S", "M", "L", "XL"],
    color: "Matte Black",
    image: "/products/flow-singlet.png",
    badge: "NEW",
  },
  {
    slug: "flow-tee",
    name: "Flow Tee",
    nameKo: "플로우 티",
    price: 38000,
    listPrice: 45000,
    category: "top",
    categoryKo: "탑",
    tagline: "매일의 기본기.",
    description:
      "데일리 러닝부터 짐 세션까지. 과하지 않은 핏과 빠른 건조 속도로 매일 입게 되는 베이스 레이어.",
    details: [
      "퀵드라이 테크니컬 패브릭",
      "좌측 가슴 ECG 펄스 로고",
      "세미 루즈핏 — 데일리 착장 호환",
      "넥 라인 변형 방지 바인딩",
    ],
    sizes: ["S", "M", "L", "XL"],
    color: "Matte Black",
    image: "/products/flow-tee.png",
  },
  {
    slug: "flow-half-tights",
    name: "Flow Half Tights",
    nameKo: "플로우 하프 타이츠",
    price: 52000,
    listPrice: 62900,
    category: "bottom",
    categoryKo: "바텀",
    tagline: "흔들리지 않는 하체.",
    description:
      "장거리에서 진가가 드러나는 컴프레션 하프 타이츠. 양측 포켓에 젤 2개, 후면 포켓에 폰까지.",
    details: [
      "고탄성 컴프레션 패브릭",
      "좌측 허벅지 ECG 펄스 로고",
      "양측 메시 포켓 + 후면 지퍼 포켓",
      "무봉제 웨이스트 밴드 — 드로코드 내장",
    ],
    sizes: ["S", "M", "L", "XL"],
    color: "Matte Black",
    image: "/products/flow-half-tights.png",
  },
  {
    slug: "noise-spark-windbreaker",
    name: "Noise Spark Windbreaker",
    nameKo: "노이즈 스파크 윈드브레이커",
    price: 89000,
    listPrice: 109000,
    category: "outer",
    categoryKo: "아우터",
    tagline: "시스템을 교란하라.",
    description:
      "카티보의 능력 'Noise Spark'에서 이름을 가져온 시그니처 윈드브레이커. 바람과 비, 그리고 평균이라는 시스템으로부터 너를 지킨다.",
    details: [
      "초경량 립스탑 셸 (포켓터블 — 자체 수납 가능)",
      "리플렉티브 ECG 펄스 로고 — 야간 시인성",
      "발수 코팅 (DWR)",
      "백 벤틸레이션 — 열 배출 구조",
      "Bunker-Verse 시즌 1 시그니처",
    ],
    sizes: ["S", "M", "L", "XL"],
    color: "Matte Black",
    image: "/products/noise-spark-windbreaker.png",
    badge: "NEW",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function formatKRW(n: number): string {
  return `₩${n.toLocaleString("ko-KR")}`;
}

export const CREW = [
  {
    name: "카티보",
    en: "CATTIVO",
    role: "FYF의 스파크",
    ability: "Noise Spark",
    abilityDesc: "불규칙 심박으로 메트로놈을 교란한다",
    quote: "야, 그냥 뛰어.",
    color: "#8b5cf6",
  },
  {
    name: "렌",
    en: "LEN",
    role: "길을 보는 전략가",
    ability: "Route Vision",
    abilityDesc: "도시의 골목을 지도로 읽는다",
    quote: "왼쪽. 3초 뒤.",
    color: "#22c55e",
  },
  {
    name: "로코",
    en: "ROCO",
    role: "끝까지 버티는 탱커",
    ability: "Heavy Beat",
    abilityDesc: "무너지는 페이스를 다시 세운다",
    quote: "안 멈추면 돼.",
    color: "#2f6bff",
  },
  {
    name: "블록",
    en: "BLOCK",
    role: "시스템을 막는 방패",
    ability: "System Block",
    abilityDesc: "메트로놈의 신호를 차단한다",
    quote: "내 속도는 내가 정해.",
    color: "#ef4444",
  },
];
