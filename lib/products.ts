export type Feature = {
  num: string;
  heading: string;
  body: string;
};

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
  // ── 상세페이지(롱폼) 콘텐츠 ──
  storyTitle: string;
  storyBody: string;
  features: Feature[];
  detailImage?: string; // 상세 인포그래픽/추가 컷
  lifestyleImage?: string;
  specs: [string, string][];
  sizeChart: { cols: string[]; rows: string[][] };
  crewPick: string; // CREW의 en 키
  crewComment: string;
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
    storyTitle: "왜 모자부터인가",
    storyBody:
      "러닝화는 비싸고, 기록은 부담스럽다. 하지만 모자는 쓰는 순간 러너가 된다. FYF의 첫 제품이 캡인 이유 — 시작의 문턱을 ₩39,000까지 내리기 위해서다. 데카트론보다 진심이고, 수입 브랜드의 절반 가격이다.",
    features: [
      {
        num: "01",
        heading: "심박 그래프 로고",
        body: "전면의 ECG 라인은 장식이 아니라 선언이다. 평균 페이스가 아니라 내 심박으로 달린다는 것. 자수가 아닌 고밀도 전사 프린트로 세탁 후에도 갈라지지 않는다.",
      },
      {
        num: "02",
        heading: "레이저 컷 통기홀",
        body: "새벽 5km에서 머리가 끓는 건 통기 때문이다. 바늘 봉제 대신 레이저 컷팅으로 구멍 가장자리가 말끔하고, 땀이 차는 정수리 라인을 따라 배치했다.",
      },
      {
        num: "03",
        heading: "후면 드로스트링 루프",
        body: "사이즈 조절 스트랩이 아니라 루프형 드로스트링. 야간 러닝 시 클립 라이트를 걸 수 있고, 흔들림 없이 머리에 붙는다. 56–60cm 무단 조절.",
      },
    ],
    detailImage: "/products/fyf-performance-cap-detail.png",
    lifestyleImage: "/hero/cap-worn.png",
    specs: [
      ["소재", "폴리에스터 100% (속건 립스탑)"],
      ["무게", "약 62g"],
      ["자외선 차단", "UPF 50+"],
      ["조절 범위", "56–60cm 드로스트링"],
      ["세탁", "중성세제 손세탁, 그늘 건조"],
      ["제조", "기가글로벌스튜디오 / 한국"],
    ],
    sizeChart: {
      cols: ["사이즈", "머리둘레", "챙 길이", "높이"],
      rows: [["FREE", "56–60cm", "7cm", "10cm"]],
    },
    crewPick: "CATTIVO",
    crewComment: "야, 그냥 뛰어. 모자 하나면 돼.",
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
    storyTitle: "98g의 자유",
    storyBody:
      "레이스 막판 3km, 몸에 닿는 모든 것이 무게가 된다. Flow Singlet은 M 사이즈 기준 98g — 입었다는 감각 자체를 지웠다. 남는 건 호흡과 심박, 두 가지뿐이다.",
    features: [
      {
        num: "01",
        heading: "투존 메시 구조",
        body: "등판과 옆구리는 오픈 메시, 가슴판은 미들 메시. 바람이 통과하는 곳과 형태를 잡아야 하는 곳을 나눴다. 10km 이후에도 천이 몸에 감기지 않는다.",
      },
      {
        num: "02",
        heading: "플랫락 봉제",
        body: "겨드랑이 쓸림은 봉제선이 만든다. 전 구간 플랫락 스티치로 솔기 단차를 없앴고, 하프 풀코스에서도 바셀린 없이 달릴 수 있다.",
      },
      {
        num: "03",
        heading: "쿨링 드라이 원단",
        body: "땀을 0.8초 만에 흡수해 바깥면으로 밀어내는 모세관 구조. 젖어도 무거워지지 않고, 한여름 새벽 러닝에서 체온을 1–2도 낮게 유지한다.",
      },
    ],
    specs: [
      ["소재", "폴리에스터 92% / 스판덱스 8%"],
      ["무게", "98g (M)"],
      ["봉제", "플랫락 무마찰 스티치"],
      ["신축", "4-way 스트레치"],
      ["세탁", "세탁망 사용, 건조기 금지"],
      ["제조", "기가글로벌스튜디오 / 한국"],
    ],
    sizeChart: {
      cols: ["사이즈", "가슴단면", "총장", "추천 체중"],
      rows: [
        ["S", "47cm", "66cm", "55–65kg"],
        ["M", "50cm", "69cm", "65–75kg"],
        ["L", "53cm", "72cm", "75–85kg"],
        ["XL", "56cm", "75cm", "85kg+"],
      ],
    },
    crewPick: "LEN",
    crewComment: "가벼울수록 빨라. 데이터가 그래.",
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
    storyTitle: "100번 입는 티셔츠",
    storyBody:
      "특별한 날의 장비보다 매일의 장비가 어렵다. Flow Tee는 주 5회 세탁을 견디는 내구 원단과, 러닝이 끝나고 카페에 앉아도 어색하지 않은 세미 루즈핏으로 만들었다. 러닝과 일상의 경계를 지운 한 장.",
    features: [
      {
        num: "01",
        heading: "퀵드라이 평직 원단",
        body: "기능성 티 특유의 번들거림을 죽인 매트 표면. 땀은 면보다 4배 빨리 마르는데, 겉보기엔 그냥 잘 만든 검은 티다.",
      },
      {
        num: "02",
        heading: "변형 방지 넥 바인딩",
        body: "기능성 티의 수명은 목이 정한다. 2중 바인딩 테이프로 50회 세탁 후에도 넥 라인이 늘어지지 않는다.",
      },
      {
        num: "03",
        heading: "세미 루즈 실루엣",
        body: "컴프레션도, 박시도 아닌 중간. 달릴 때 펄럭이지 않고, 걸을 때 몸에 붙지 않는 5cm의 여유.",
      },
    ],
    specs: [
      ["소재", "폴리에스터 88% / 스판덱스 12%"],
      ["무게", "142g (M)"],
      ["핏", "세미 루즈"],
      ["기능", "흡습속건 / 항균 방취"],
      ["세탁", "찬물 단독, 건조기 금지"],
      ["제조", "기가글로벌스튜디오 / 한국"],
    ],
    sizeChart: {
      cols: ["사이즈", "가슴단면", "총장", "어깨"],
      rows: [
        ["S", "50cm", "68cm", "44cm"],
        ["M", "53cm", "71cm", "46cm"],
        ["L", "56cm", "74cm", "48cm"],
        ["XL", "59cm", "77cm", "50cm"],
      ],
    },
    crewPick: "BLOCK",
    crewComment: "유행 안 타는 게 제일 단단한 거야.",
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
    storyTitle: "주머니가 페이스를 만든다",
    storyBody:
      "30km 이후의 러닝은 보급의 싸움이다. 젤을 손에 쥐고 달리는 순간 폼이 무너진다. Flow Half Tights는 양 허벅지 메시 포켓에 젤 2개, 후면 지퍼 포켓에 폰과 카드 — 손이 자유로운 러너가 끝까지 간다.",
    features: [
      {
        num: "01",
        heading: "3포켓 시스템",
        body: "양측 사이드 메시 포켓은 달리는 중에도 한 손으로 젤을 꺼낼 수 있는 각도로 비스듬히 재단했다. 후면 지퍼 포켓은 6.7인치 폰까지 흔들림 없이 고정.",
      },
      {
        num: "02",
        heading: "단계 압박 설계",
        body: "허벅지 중앙부는 강하게, 무릎 위와 허리는 부드럽게. 근육 진동을 잡아 후반 피로를 늦추되 혈류는 막지 않는 압박 맵핑.",
      },
      {
        num: "03",
        heading: "무봉제 웨이스트 밴드",
        body: "위장을 누르는 고무 밴드 대신 9cm 광폭 무봉제 밴드 + 내장 드로코드. 장거리에서 복부 압박감 없이 흘러내리지도 않는다.",
      },
    ],
    specs: [
      ["소재", "나일론 76% / 스판덱스 24%"],
      ["인심", "23cm (M)"],
      ["포켓", "사이드 메시 ×2 / 후면 지퍼 ×1"],
      ["압박", "단계 압박 (그라데이션)"],
      ["세탁", "찬물 단독, 건조기 금지"],
      ["제조", "기가글로벌스튜디오 / 한국"],
    ],
    sizeChart: {
      cols: ["사이즈", "허리둘레", "힙둘레", "인심"],
      rows: [
        ["S", "68–74cm", "88cm", "22cm"],
        ["M", "74–80cm", "93cm", "23cm"],
        ["L", "80–86cm", "98cm", "24cm"],
        ["XL", "86–92cm", "103cm", "25cm"],
      ],
    },
    crewPick: "ROCO",
    crewComment: "안 멈추면 돼. 다리는 이게 잡아줘.",
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
    storyTitle: "카티보가 도시를 흔드는 법",
    storyBody:
      "시즌 1, 카티보가 달리면 도시의 센서가 오작동한다 — Noise Spark. 이 재킷의 리플렉티브 ECG 로고는 밤의 헤드라이트를 받으면 심박 그래프처럼 번쩍인다. 도시의 감시는 피하고, 시야에는 잡히는 모순. 그게 FYF다.",
    features: [
      {
        num: "01",
        heading: "리플렉티브 노이즈 로고",
        body: "낮에는 무광 블랙에 묻혀 보이지 않다가, 야간 차량 헤드라이트에 ECG 라인이 발광한다. 새벽 러너의 안전이 디자인이 되는 방식.",
      },
      {
        num: "02",
        heading: "115g 포켓터블 셸",
        body: "자체 체스트 포켓에 말아 넣으면 주먹 크기. 출발할 때 쌀쌀하고 5km 뒤 더운 한국의 봄가을 새벽에 답이 되는 무게다.",
      },
      {
        num: "03",
        heading: "백 벤틸레이션",
        body: "등판 상단의 히든 벤트가 달릴 때마다 열기를 배출한다. 윈드브레이커의 고질병인 '비닐하우스 등판'을 구조로 해결했다.",
      },
      {
        num: "04",
        heading: "DWR 발수 코팅",
        body: "가랑비와 새벽 안개까지는 이 한 장으로 충분하다. 물방울이 스미지 않고 구른다. (폭우용 방수 재킷은 아니다 — 정직하게.)",
      },
    ],
    specs: [
      ["소재", "나일론 립스탑 100% (DWR 코팅)"],
      ["무게", "115g (M)"],
      ["수납", "자체 포켓 패커블"],
      ["시인성", "리플렉티브 ECG 프린트"],
      ["세탁", "중성세제 단독 세탁, 다림질 금지"],
      ["제조", "기가글로벌스튜디오 / 한국"],
    ],
    sizeChart: {
      cols: ["사이즈", "가슴단면", "총장", "소매길이"],
      rows: [
        ["S", "55cm", "68cm", "60cm"],
        ["M", "58cm", "71cm", "62cm"],
        ["L", "61cm", "74cm", "64cm"],
        ["XL", "64cm", "77cm", "66cm"],
      ],
    },
    crewPick: "CATTIVO",
    crewComment: "조용히 살 거면 여기 왜 왔냐?",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function formatKRW(n: number): string {
  return `₩${n.toLocaleString("ko-KR")}`;
}

// ── Bunker-Verse 크루 (공식 바이블 v2.1 기준) ──
export type CrewMember = {
  name: string;
  en: string;
  label: string;
  role: string;
  appearance: string;
  personality: string;
  flaw: string;
  ability: string;
  abilityDesc: string;
  quote: string;
  quotes: string[];
  menu: string;
  color: string;
  image: string;
};

export const CREW: CrewMember[] = [
  {
    name: "카티보",
    en: "CATTIVO",
    label: "CATTIVO",
    role: "FYF의 스파크",
    appearance: "보라색 피부, 파란 FYF 캡, 하늘색 머리, 큰 입, 과장된 표정",
    personality:
      "즉흥적이다. 계획보다 감각을 믿고, 정해진 길보다 이상한 골목을 좋아한다. 리더가 되려고 하지 않지만, 이상하게 모두가 그를 따라 움직인다.",
    flaw: "어릴 때부터 “너무 시끄럽다” “너무 튄다”는 말을 들었다. 메트로놈은 그를 불규칙한 존재로 분류했다.",
    ability: "Noise Spark",
    abilityDesc:
      "카티보가 소리치며 달리면 주변의 리듬이 흔들린다. 그의 불규칙한 심박은 메트로놈의 감시 장치를 교란시킨다.",
    quote: "야, 그냥 뛰어.",
    quotes: ["야, 그냥 뛰어.", "길? 만들면 되잖아.", "조용히 살 거면 여기 왜 왔냐?", "가보자고."],
    menu: "카티보 스파크 에이드",
    color: "#8b5cf6",
    image: "/crew/cattivo-sheet.png",
  },
  {
    name: "렌",
    en: "LEN",
    label: "LEN",
    role: "길을 보는 전략가",
    appearance: "초록색 피부, 노란 헬멧, 고글, 작은 체구. 표정은 늘 시니컬",
    personality:
      "말이 짧다. 감정보다 루트, 분위기보다 데이터를 믿는다. 카티보가 사고를 치면 한숨을 쉬면서도 길을 찾아낸다.",
    flaw: "항상 “가장 빠른 길”만 찾도록 훈련받았다. FYF를 만나고 나서, 가장 빠른 길이 항상 가장 좋은 길은 아니라는 걸 깨닫는다.",
    ability: "Route Vision",
    abilityDesc:
      "도시의 골목, 강변, 계단, 옥상, 지하 통로를 머릿속에서 지도로 그린다. 손을 뻗으면 파란 루트 라인이 바닥에 나타난다.",
    quote: "왼쪽. 3초 뒤.",
    quotes: ["그 길은 막혔어.", "왼쪽. 3초 뒤.", "빠른 길 말고, 안 들키는 길.", "카티보, 또 틀렸어."],
    menu: "렌 블루라임 소다",
    color: "#22c55e",
    image: "/crew/len-sheet.png",
  },
  {
    name: "로코",
    en: "ROCO",
    label: "ROCO",
    role: "끝까지 버티는 탱커",
    appearance: "큰 키, 긴 팔다리, 파란 민소매, 낡은 반바지, 상처 난 피부, 무표정",
    personality:
      "말이 거의 없다. 반응도 느리고 표정도 없다. 하지만 위기 상황에서는 가장 먼저 앞으로 나온다.",
    flaw: "메트로놈 시스템에서 “비효율적 신체”로 분류됐다. 느리고, 자세가 이상하고, 기록이 좋지 않다는 이유였다.",
    ability: "Heavy Beat",
    abilityDesc:
      "로코가 달리면 바닥에 묵직한 리듬이 생긴다. 그 리듬은 불안한 크루를 안정시키고, 팀 전체의 페이스를 붙잡아준다.",
    quote: "안 멈추면 돼.",
    quotes: ["가.", "뒤는 내가.", "천천히 가도 돼.", "안 멈추면 돼."],
    menu: "로코 딥 콜드브루",
    color: "#2f6bff",
    image: "/crew/roco-sheet.png",
  },
  {
    name: "블록",
    en: "BLOCK",
    label: "Dr.BLock",
    role: "시스템을 막는 방패",
    appearance: "회색빛 피부, 빨간 캡, 흰 민소매, 파란 반바지, 손목시계. 늘 화가 난 듯한 표정",
    personality:
      "까칠하다. 쉽게 믿지 않고, 쉽게 웃지 않는다. 하지만 한 번 자기 편이라고 생각하면 끝까지 지킨다.",
    flaw: "메트로놈 시스템에 가장 오래 노출된 인물. 정해진 시간, 정해진 코스, 정해진 페이스 안에서 살아왔다.",
    ability: "System Block",
    abilityDesc:
      "손목시계로 메트로놈의 신호를 일시적으로 끊는다. 주변 감시 카메라, 속도 측정기, 심박 센서가 멈춘다.",
    quote: "내 속도는 내가 정해.",
    quotes: ["누가 정했는데.", "꺼.", "내 속도는 내가 정해.", "막을 거면 제대로 막아."],
    menu: "블록 아메리카노",
    color: "#ef4444",
    image: "/crew/block-sheet.png",
  },
];

export function getCrew(en: string): CrewMember {
  return CREW.find((c) => c.en === en) ?? CREW[0];
}

// ── 시즌 1 스토리 (12화) ──
export const SEASON1 = [
  ["이상한 카페", "순천 골목의 FYF 카페가 소개된다. 카티보가 달리자 도시의 센서가 이상 반응을 일으킨다."],
  ["빨간 모자", "블록이 카티보를 추적한다. 감시망이 흔들리는 것을 보고 생각이 바뀐다."],
  ["길을 보는 아이", "렌이 등장한다. 그는 결국 크루에게 가장 안전한 탈출 루트를 알려준다."],
  ["느린 러너", "로코가 등장한다. 느리고 어설퍼 보이지만 위기 상황에서 끝까지 버틴다."],
  ["벙커가 열린 밤", "네 명이 처음으로 FYF 카페 지하에 모인다. 벽의 심박선 로고가 켜지고 Bunker가 열린다."],
  ["정해진 코스", "메트로놈은 공식 러닝 코스를 강제한다. FYF는 아무도 가지 않는 골목길을 선택한다."],
  ["각자의 페이스", "네 명은 처음으로 서로의 리듬을 맞추는 법을 배운다."],
  ["Bunker Run", "FYF는 첫 번째 비밀 러닝 이벤트를 연다. 빠른 사람, 느린 사람, 이상한 사람이 각자의 속도로 달린다."],
  ["시스템 블록", "메트로놈이 FYF 카페를 폐쇄하려 한다. 블록은 감시 시스템을 끊고 크루를 지킨다."],
  ["순천의 밤", "렌이 순천의 골목, 강변, 오래된 길을 연결해 새로운 루트를 만든다."],
  ["도시가 흔들린다", "FYF의 움직임이 시민들에게 퍼진다. 사람들이 자기만의 길로 달리기 시작한다."],
  ["Find Your Flow", "도시 전체의 리듬이 불규칙해진다. 메트로놈은 오류라고 부르고, FYF는 자유라고 부른다."],
] as const;

// ── 벙커 카페 메뉴 ──
export const CAFE_MENU = [
  { menu: "블록 아메리카노", desc: "가장 기본, 가장 단단한 메뉴.", note: "HOT 2,000 / ICE 2,300", color: "#ef4444" },
  { menu: "카티보 스파크 에이드", desc: "톡 쏘고 강렬한 탄산. 색감이 가장 튀어야 한다.", note: "시그니처", color: "#8b5cf6" },
  { menu: "렌 블루라임 소다", desc: "파란 루트 라인을 떠올리게 하는 시원한 메뉴.", note: "비주얼 컵", color: "#22c55e" },
  { menu: "로코 딥 콜드브루", desc: "묵직하고 진한 맛. 천천히 오래 가는 메뉴.", note: "러너 타깃", color: "#2f6bff" },
  { menu: "벙커 라떼", desc: "낮에는 부드럽고, 밤에는 진한 FYF 대표 시그니처.", note: "카페 대표", color: "#b7ff2e" },
  { menu: "메트로놈 디카페인", desc: "빌런 이름을 위트 있게 활용한 메뉴.", note: "“잠은 자야지”", color: "#9ca3af" },
];
