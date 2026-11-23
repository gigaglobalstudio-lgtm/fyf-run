export type Feature = {
  num: string;
  heading: string;
  body: string;
};

// ── 에디토리얼 룩북형 상세 (Pulse 등) ──
export type EditorialBlock =
  | { kind: "full"; image: string; label?: string; sub?: string }
  | { kind: "pair"; images: [string, string]; label?: string; sub?: string }
  | { kind: "statement"; title: string; body: string };

export type ModelInfoRow = {
  who: string; // "여성 모델" / "남성 모델"
  fitting: string; // 착용 사이즈
  height: string;
  bust: string;
  waist: string;
  hip: string;
  weight: string;
};

export type Editorial = {
  hero: string; // 풀블리드 인트로 컷
  heroLabel: string;
  blocks: EditorialBlock[];
  flatFront: string;
  flatBack?: string; // 없으면 단일 플랫
  modelInfo: ModelInfoRow[];
  care: string[];
};

export type Product = {
  slug: string;
  name: string;
  nameKo: string;
  price: number;
  listPrice: number;
  category: "cap" | "top" | "bottom" | "outer" | "gear";
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
  detailImages?: string[]; // 기성 상세페이지 섹션 이미지 스택
  lifestyleImage?: string;
  specs: [string, string][];
  sizeChart: { cols: string[]; rows: string[][] };
  crewPick: string; // CREW의 en 키
  crewComment: string;
  editorial?: Editorial; // 있으면 디서지형 룩북 상세로 렌더
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
      "약 40g 초경량 — 쓴 듯 안 쓴 듯",
      "전면 화이트 FYF 하트비트 로고",
      "측면 에어홀 통기",
      "속건 땀밴드 — 내부 흡습 속건 처리",
      "후면 조절형 스트링 (56–60cm)",
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
        heading: "약 40g 초경량",
        body: "긴 거리를 가도 압박감이 없는 무게. 쓰고 있다는 사실을 잊게 만드는 게 좋은 러닝캡의 첫 번째 조건이다.",
      },
      {
        num: "02",
        heading: "측면 에어홀 통기",
        body: "새벽 5km에서 머리가 끓는 건 통기 때문이다. 측면 에어홀이 열기를 빼내고, 땀이 차는 정수리 라인을 식힌다.",
      },
      {
        num: "03",
        heading: "속건 땀밴드 + 조절형 스트링",
        body: "내부 밴드는 땀을 빠르게 말리고, 후면 스트링은 56–60cm 무단 조절. 야간 러닝 시 클립 라이트를 걸 수 있는 루프형이다.",
      },
    ],
    detailImages: [
      "/detail/cap/board.jpg",
      "/products/fyf-performance-cap-detail.png",
    ],
    lifestyleImage: "/detail/cap/wearing.jpg",
    specs: [
      ["소재", "폴리에스터 100% (속건 립스탑)"],
      ["무게", "약 40g"],
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
    editorial: {
      hero: "/products/cap/hero.jpg",
      heroLabel: "PERFORMANCE CAP — FIRST CREW, FIRST CAP",
      blocks: [
        {
          kind: "pair",
          images: ["/products/cap/f-front.jpg", "/products/cap/f-back.jpg"],
          label: "WOMAN",
          sub: "정면 · 후면 드로스트링 루프",
        },
        {
          kind: "statement",
          title: "시작의 문턱을 낮춘다",
          body: "러닝화는 비싸고 기록은 부담스럽다. 하지만 모자는 쓰는 순간 러너가 된다. 약 40g, 매트 블랙, 심박 라인 하나.",
        },
        {
          kind: "pair",
          images: ["/products/cap/m-front.jpg", "/products/cap/m-back.jpg"],
          label: "MAN",
          sub: "정면 · 후면 드로스트링 루프",
        },
        {
          kind: "full",
          image: "/products/cap/hero.jpg",
          label: "ON THE RUN",
          sub: "새벽 한강, 가장 가벼운 장비",
        },
      ],
      flatFront: "/products/fyf-performance-cap.png",
      modelInfo: [
        { who: "여성 모델", fitting: "FREE 착용", height: "168cm", bust: "82cm", waist: "62cm", hip: "89cm", weight: "52kg" },
        { who: "남성 모델", fitting: "FREE 착용", height: "181cm", bust: "96cm", waist: "78cm", hip: "95cm", weight: "73kg" },
      ],
      care: [
        "중성세제로 미온수 손세탁, 챙 형태 유지하며 그늘 건조",
        "세탁기·건조기 사용 금지 (챙 변형 위험)",
        "땀밴드는 사용 후 가볍게 헹궈 말리면 오래 깨끗하게 유지",
        "촬영 환경과 모니터에 따라 실제 색상과 차이가 있을 수 있습니다",
      ],
    },
  },
  {
    slug: "race-vest",
    name: "FYF Race Vest",
    nameKo: "레이스 베스트",
    price: 69000,
    listPrice: 89900,
    category: "gear",
    categoryKo: "기어",
    tagline: "필요한 것만, 몸에 가볍게.",
    description:
      "물통, 젤, 휴대폰, 키까지 — 몸 가까이 수납하는 러닝 베스트. 답답한 배낭 대신, 달리는 장비만 빠르게 꺼낼 수 있는 구조.",
    details: [
      "250ml 플라스크 포켓 ×2 (전면)",
      "통풍 메쉬 등판 — 땀 배출 구조",
      "2-WAY 체스트 스트랩 — 흔들림 제로",
      "지퍼 포켓 — 소지품 안전 수납",
      "BLACK / LIGHT GRAY 2색",
    ],
    sizes: ["FREE"],
    color: "Black / Light Gray",
    image: "/products/race-vest.jpg",
    badge: "NEW",
    storyTitle: "배낭은 러닝을 모른다",
    storyBody:
      "10km를 넘기는 순간 주머니로는 부족해진다. 그렇다고 배낭을 메면 어깨가 먼저 지친다. Race Vest는 몸에 밀착되는 250ml 플라스크 2개와 지퍼 포켓으로, 보급을 멈추지 않는 러닝으로 바꾼다. 마라톤·트레일 입문자의 첫 베스트.",
    features: [
      {
        num: "01",
        heading: "전면 플라스크 포켓 ×2",
        body: "달리면서 한 손으로 꺼내고 꽂는 각도. 출렁임을 잡는 탄성 밴드로 물이 반쯤 남아도 흔들리지 않는다.",
      },
      {
        num: "02",
        heading: "통풍 메쉬 등판",
        body: "등 전체가 오픈 메쉬 — 베스트의 고질병인 등판 찜통을 구조로 해결했다. 한여름 LSD에서도 등이 마른다.",
      },
      {
        num: "03",
        heading: "2-WAY 체스트 스트랩",
        body: "가슴 폭에 맞춰 위아래로 이동하는 스트랩 2개. 바운싱을 잡아 체감 무게를 절반으로 줄인다.",
      },
    ],
    detailImages: [
      "/detail/vest/02.jpg",
      "/detail/vest/03.jpg",
      "/detail/vest/04.jpg",
      "/detail/vest/06.jpg",
    ],
    specs: [
      ["소재", "나일론 / 통풍 메쉬"],
      ["수납", "250ml 플라스크 ×2 + 지퍼 포켓 + 등판 포켓"],
      ["스트랩", "2-WAY 조절 체스트 스트랩"],
      ["컬러", "BLACK / LIGHT GRAY"],
      ["세탁", "손세탁, 그늘 건조"],
      ["제조", "기가글로벌스튜디오 / 한국"],
    ],
    sizeChart: {
      cols: ["사이즈", "가슴둘레", "무게"],
      rows: [["FREE", "80–110cm (스트랩 조절)", "약 180g"]],
    },
    crewPick: "LEN",
    crewComment: "빠른 길 말고, 안 들키는 길. 보급은 계획이야.",
    editorial: {
      hero: "/products/vest/hero.jpg",
      heroLabel: "RACE VEST — CARRY YOUR PACE",
      blocks: [
        {
          kind: "pair",
          images: ["/products/vest/f-front.jpg", "/products/vest/f-back.jpg"],
          label: "WOMAN FITTING",
          sub: "전면 플라스크 포켓 · 통풍 메쉬 등판",
        },
        {
          kind: "statement",
          title: "배낭은 러닝을 모른다",
          body: "10km를 넘기면 주머니로는 부족하다. 몸에 밀착되는 250ml 플라스크 두 개와 지퍼 포켓. 손이 자유로운 러너가 끝까지 간다.",
        },
        {
          kind: "pair",
          images: ["/products/vest/m-front.jpg", "/products/vest/m-back.jpg"],
          label: "MAN FITTING",
          sub: "2-WAY 체스트 스트랩 · 등판 포켓",
        },
        {
          kind: "full",
          image: "/products/vest/hero.jpg",
          label: "LONG RUN",
          sub: "흔들림 없이, 보급을 멈추지 않고",
        },
      ],
      flatFront: "/products/race-vest.jpg",
      modelInfo: [
        { who: "여성 모델", fitting: "FREE 착용", height: "168cm", bust: "82cm", waist: "62cm", hip: "89cm", weight: "52kg" },
        { who: "남성 모델", fitting: "FREE 착용", height: "181cm", bust: "96cm", waist: "78cm", hip: "95cm", weight: "73kg" },
      ],
      care: [
        "사용 후 플라스크를 분리하고 단독 손세탁, 그늘에서 건조",
        "표백제·섬유유연제 사용 금지",
        "버클·스트랩은 채운 상태로 세탁하면 손상을 줄일 수 있습니다",
        "물통 포함 여부 및 상세 실측은 판매 옵션을 확인하세요",
      ],
    },
  },
  {
    slug: "race-singlet",
    name: "FYF Race Singlet",
    nameKo: "레이스 싱글렛",
    price: 49000,
    listPrice: 59000,
    category: "top",
    categoryKo: "탑",
    tagline: "여름 러닝, 한 장으로 선명하게.",
    description:
      "톡톡 메쉬 조직과 넓은 레이서백 라인. 핫핑크에 네온 옐로 포인트 — 트랙에서 가장 멀리서도 보이는 한 장.",
    details: [
      "톡톡 메쉬 조직 — 최대 통기",
      "레이서백 — 어깨 가동범위 확보",
      "넓은 암홀 — 마찰 최소화",
      "네온 그래픽 — 야간·새벽 시인성",
    ],
    sizes: ["S", "M", "L", "XL"],
    color: "Hot Pink / Neon",
    image: "/detail/fyf-goods/graphic-racer-singlet/cover.jpg",
    badge: "NEW",
    storyTitle: "눈에 띄는 게 전략이다",
    storyBody:
      "레이스 사진 속에서 너를 못 찾는 이유 — 다 같은 검정을 입어서다. Race Singlet은 반대로 간다. 핫핑크 바탕에 네온 옐로 사선, 민트 도트. 5,000명 속에서도 네 리듬이 보인다.",
    features: [
      {
        num: "01",
        heading: "톡톡 메쉬 조직",
        body: "구멍이 보일 만큼 성긴 메쉬가 바람을 통과시킨다. 한여름 대회에서 체온이 페이스를 깎는 걸 막는 첫 번째 장치.",
      },
      {
        num: "02",
        heading: "레이서백 + 넓은 암홀",
        body: "어깨뼈가 자유로운 레이서백 재단. 팔 스윙이 커지는 스퍼트 구간에서도 겨드랑이가 쓸리지 않는다.",
      },
      {
        num: "03",
        heading: "네온 그래픽",
        body: "핑크×옐로×민트 — 새벽과 야간 도로에서 차가 먼저 본다. 안전이 곧 디자인이다.",
      },
    ],
    detailImages: [
      "/detail/singlet/03.jpg",
      "/detail/singlet/04.jpg",
      "/detail/singlet/05.jpg",
      "/detail/singlet/06.jpg",
    ],
    specs: [
      ["소재", "폴리에스터 메쉬 100%"],
      ["핏", "레이스 핏 (몸에 가깝게)"],
      ["기능", "최대 통기 / 속건 / 네온 시인성"],
      ["컬러", "핫핑크 / 네온 옐로 / 민트 도트"],
      ["세탁", "찬물 단독, 건조기 금지"],
      ["제조", "기가글로벌스튜디오 / 한국"],
    ],
    sizeChart: {
      cols: ["사이즈", "가슴단면", "총장"],
      rows: [
        ["S", "46cm", "65cm"],
        ["M", "49cm", "68cm"],
        ["L", "52cm", "71cm"],
        ["XL", "55cm", "74cm"],
      ],
    },
    crewPick: "CATTIVO",
    crewComment: "가보자고. 어차피 다 쳐다봐.",
    editorial: {
      hero: "/products/singlet/hero.jpg",
      heroLabel: "RACE SINGLET — BE SEEN, BE FAST",
      blocks: [
        {
          kind: "pair",
          images: ["/products/singlet/f-front.jpg", "/products/singlet/f-back.jpg"],
          label: "WOMAN FITTING",
          sub: "톡톡 메쉬 · 레이서백",
        },
        {
          kind: "statement",
          title: "눈에 띄는 게 전략이다",
          body: "레이스 사진 속에서 너를 못 찾는 이유 — 다 같은 검정을 입어서다. 핫핑크 바탕에 네온 사선. 5,000명 속에서도 네 리듬이 보인다.",
        },
        {
          kind: "pair",
          images: ["/products/singlet/m-front.jpg", "/products/singlet/m-back.jpg"],
          label: "MAN FITTING",
          sub: "넓은 암홀 · 네온 그래픽",
        },
        {
          kind: "full",
          image: "/products/singlet/hero.jpg",
          label: "RACE DAY",
          sub: "여름 레이스, 한 장으로 선명하게",
        },
      ],
      flatFront: "/products/race-singlet.jpg",
      modelInfo: [
        { who: "여성 모델", fitting: "S 착용", height: "168cm", bust: "82cm", waist: "62cm", hip: "89cm", weight: "52kg" },
        { who: "남성 모델", fitting: "M 착용", height: "181cm", bust: "96cm", waist: "78cm", hip: "95cm", weight: "73kg" },
      ],
      care: [
        "30℃ 이하 찬물 단독 손세탁, 네온 컬러 이염 주의",
        "표백제·섬유유연제 금지, 건조기 사용 금지",
        "프린트·네온 패널 부위는 뒤집어 세탁",
        "촬영 환경과 모니터에 따라 실제 색상과 차이가 있을 수 있습니다",
      ],
    },
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
  modelSheet: string;
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
    modelSheet: "/crew/sheets/cattivo-model.jpg",
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
    modelSheet: "/crew/sheets/len-model.jpg",
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
    modelSheet: "/crew/sheets/roco-model.jpg",
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
    modelSheet: "/crew/sheets/block-model.jpg",
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

// ── FYF CAFE 실제 메뉴 (공식 메뉴판 기준) ──
export const CAFE_MENU = [
  {
    category: "COFFEE",
    items: [
      ["HOT 아메리카노", "2,000"],
      ["ICE 아메리카노", "2,300"],
      ["HOT 아메리카노 (산미)", "2,500"],
      ["ICE 아메리카노 (산미)", "2,800"],
    ],
  },
  {
    category: "LATTE",
    items: [
      ["HOT 카페라떼", "3,500"],
      ["ICE 카페라떼", "3,800"],
      ["ICE 바닐라라떼", "4,300"],
      ["ICE 카라멜마끼아또", "4,200"],
      ["ICE 초코라떼", "4,200"],
      ["ICE 말차라떼", "4,500"],
    ],
  },
  {
    category: "ADE & TEA",
    items: [
      ["레몬에이드", "4,300"],
      ["복숭아 아이스티", "3,500"],
      ["러너스 자몽 블랙티", "4,800"],
    ],
  },
  {
    category: "SIGNATURE ★",
    items: [["FYF 플로우 레몬 아메리카노", "4,800"]],
  },
];

// ── FYF RUN MAP — 러닝 코스 ──
export type Course = {
  no: string;
  title: string;
  sub: string;
  image: string;
};

export const COURSES_JEONNAM: Course[] = [
  { no: "01", title: "순천 오천그린광장", sub: "그린아일랜드 · 동천 — 왕복 약 4.0K · EASY", image: "/course/jeonnam/01.jpg" },
  { no: "02", title: "순천만국가정원", sub: "국가정원 일원 — 정원런", image: "/course/jeonnam/02.jpg" },
  { no: "03", title: "순천만습지", sub: "갈대밭 · 용산전망대 방면", image: "/course/jeonnam/03.jpg" },
  { no: "04", title: "봉화산 둘레길", sub: "순천 도심 숲길런", image: "/course/jeonnam/04.jpg" },
  { no: "05", title: "광양 서천변공원", sub: "서천 수변런", image: "/course/jeonnam/05.jpg" },
  { no: "06", title: "배알도 · 망덕포구", sub: "광양 바다 보며 달리기", image: "/course/jeonnam/06.jpg" },
  { no: "07", title: "마동저수지", sub: "잔잔한 수변 루프", image: "/course/jeonnam/07.jpg" },
  { no: "08", title: "여수 오동도", sub: "방파제 · 동백숲런", image: "/course/jeonnam/08.jpg" },
  { no: "09", title: "여수해양공원", sub: "바다 야경런", image: "/course/jeonnam/09.jpg" },
  { no: "10", title: "소호동동다리", sub: "여수 소호 수변데크런", image: "/course/jeonnam/10.jpg" },
];

export const COURSES_KOREA: Course[] = [
  { no: "01", title: "여의도 한강공원", sub: "서울 — 루프 약 4.6K · EASY · 전국 대표 한강런", image: "/course/korea/01.jpg" },
  { no: "02", title: "남산북측순환로", sub: "서울 — 왕복 약 5.0K · MEDIUM · 도심 숲길런", image: "/course/korea/02.jpg" },
  { no: "03", title: "광안리 · 민락수변", sub: "부산 — 왕복 약 5.3K · EASY · 바다 야경런", image: "/course/korea/03.jpg" },
  { no: "04", title: "송도센트럴파크", sub: "인천 — 순환 약 3.6K · EASY · 도시공원 루프런", image: "/course/korea/04.jpg" },
  { no: "05", title: "의암호 공지천", sub: "춘천 — 왕복 약 7.4K · EASY+ · 호수 바람런", image: "/course/korea/05.jpg" },
  { no: "06", title: "경포호", sub: "강릉 — 순환 약 4.3K · EASY · 호수 벚꽃런", image: "/course/korea/06.jpg" },
  { no: "07", title: "보문호반길", sub: "경주 — 순환 약 8.0K · MEDIUM · 호반 장거리런", image: "/course/korea/07.jpg" },
  { no: "08", title: "수성못", sub: "대구 — 순환 약 2.0K · EASY · 도심 짧은 루프런", image: "/course/korea/08.jpg" },
  { no: "09", title: "갑천 · 엑스포다리", sub: "대전 — 순환 약 4.3K · EASY · 도심 강변런", image: "/course/korea/09.jpg" },
  { no: "10", title: "사려니숲길", sub: "제주 — 편도 약 6.2K · MEDIUM · 숲길 힐링런", image: "/course/korea/10.jpg" },
];

// ── 시즌 2 신규 크루 (티저) ──
export const NEXT_CREW = [
  { en: "MIA", desc: "Cute Sprinter" },
  { en: "BOA", desc: "Mechanic" },
  { en: "LUMI", desc: "Raincoat" },
  { en: "VIVI", desc: "Retro Arcade" },
];
