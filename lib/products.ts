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
    image: "/products/race-singlet.jpg",
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
  },
  {
    slug: "flow-shorts",
    name: "FYF Flow Shorts",
    nameKo: "플로우 쇼츠",
    price: 42000,
    listPrice: 52900,
    category: "bottom",
    categoryKo: "바텀",
    tagline: "뛰는 순간, 바지는 잊혀져야 합니다.",
    description:
      "가볍게 뛰고, 빠르게 마르는 러닝 쇼츠. 경량 그리드 원단에 휴대폰 수납 포켓, 메쉬 허리밴드까지 — 러닝 중 거슬리는 요소를 전부 뺐다.",
    details: [
      "경량 그리드 원단 — 얇고 산뜻한 조직감",
      "휴대폰 수납 포켓 — 뒷밸런스 안정 수납",
      "레이저 컷 마감 — 봉제선 최소화",
      "메쉬 허리밴드 — 편안한 압박과 통기",
      "블랙·화이트·민트·핑크·네이비 5컬러 (대표: 블랙)",
    ],
    sizes: ["S", "M", "L", "XL"],
    color: "5 Colors",
    image: "/products/flow-shorts.jpg",
    badge: "NEW",
    storyTitle: "거슬림 제로 설계",
    storyBody:
      "러닝 중 바지를 의식하는 순간 페이스는 깨진다. Flow Shorts는 원단, 통기, 수납, 허리밴드 — 거슬리는 요소를 줄이기 위해서만 설계됐다. 가볍고 통기감 있는 원단, 짧고 깔끔한 기장, 필요한 수납, 편안한 허리 밴드. 그게 전부고, 그게 핵심이다.",
    features: [
      {
        num: "01",
        heading: "경량 그리드 원단",
        body: "얇고 산뜻한 조직감으로 움직임이 가볍다. 젖어도 피부에 붙지 않는 그리드 표면 구조.",
      },
      {
        num: "02",
        heading: "휴대폰 수납 포켓",
        body: "러닝 중 흔들리지 않는 뒷포켓 — 폰을 넣고 달려도 출렁임이 허리를 끌어내리지 않는 위치에 달았다.",
      },
      {
        num: "03",
        heading: "레이저 컷 마감 + 메쉬 허리밴드",
        body: "불필요한 봉제선을 줄여 마찰을 없애고, 허리는 면압을 분산하는 메쉬 밴드로 편안하게 잡아준다.",
      },
    ],
    detailImages: ["/detail/shorts/01.jpg", "/detail/shorts/02.jpg"],
    specs: [
      ["소재", "폴리에스터 경량 그리드"],
      ["기장", "3인치 (짧고 깔끔한 기장)"],
      ["수납", "후면 휴대폰 포켓 + 사이드 포켓"],
      ["컬러", "블랙 / 화이트 / 민트 / 핑크 / 네이비"],
      ["세탁", "찬물 단독, 건조기 금지"],
      ["제조", "기가글로벌스튜디오 / 한국"],
    ],
    sizeChart: {
      cols: ["사이즈", "허리둘레", "힙둘레", "총장"],
      rows: [
        ["S", "66–72cm", "96cm", "34cm"],
        ["M", "72–78cm", "101cm", "35cm"],
        ["L", "78–84cm", "106cm", "36cm"],
        ["XL", "84–90cm", "111cm", "37cm"],
      ],
    },
    crewPick: "ROCO",
    crewComment: "천천히 가도 돼. 가벼우면 멀리 가.",
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
      "데일리 트레이닝을 위한 초경량 메시 싱글렛. 몸이 사라지고 리듬만 남는 순간을 위해 만들었다.",
    details: [
      "초경량 테크니컬 메시 (98g, M 기준)",
      "좌측 가슴 FYF 로고",
      "플랫락 봉제 — 마찰 제로 설계",
      "속건 4-way 스트레치",
    ],
    sizes: ["S", "M", "L", "XL"],
    color: "Matte Black",
    image: "/products/flow-singlet.png",
    storyTitle: "98g의 자유",
    storyBody:
      "레이스 막판 3km, 몸에 닿는 모든 것이 무게가 된다. Flow Singlet은 M 사이즈 기준 98g — 입었다는 감각 자체를 지웠다. 남는 건 호흡과 심박, 두 가지뿐이다.",
    features: [
      {
        num: "01",
        heading: "투존 메시 구조",
        body: "등판과 옆구리는 오픈 메시, 가슴판은 미들 메시. 바람이 통과하는 곳과 형태를 잡아야 하는 곳을 나눴다.",
      },
      {
        num: "02",
        heading: "플랫락 봉제",
        body: "겨드랑이 쓸림은 봉제선이 만든다. 전 구간 플랫락 스티치로 솔기 단차를 없앴다.",
      },
      {
        num: "03",
        heading: "쿨링 드라이 원단",
        body: "땀을 빠르게 흡수해 바깥면으로 밀어내는 모세관 구조. 젖어도 무거워지지 않는다.",
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
      "좌측 가슴 FYF 로고",
      "세미 루즈핏 — 데일리 착장 호환",
      "넥 라인 변형 방지 바인딩",
    ],
    sizes: ["S", "M", "L", "XL"],
    color: "Matte Black",
    image: "/products/flow-tee.png",
    storyTitle: "100번 입는 티셔츠",
    storyBody:
      "특별한 날의 장비보다 매일의 장비가 어렵다. Flow Tee는 주 5회 세탁을 견디는 내구 원단과, 러닝이 끝나고 카페에 앉아도 어색하지 않은 세미 루즈핏으로 만들었다.",
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
      "좌측 허벅지 FYF 로고",
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
        body: "양측 사이드 메시 포켓은 달리는 중에도 한 손으로 젤을 꺼낼 수 있는 각도로 비스듬히 재단했다.",
      },
      {
        num: "02",
        heading: "단계 압박 설계",
        body: "허벅지 중앙부는 강하게, 무릎 위와 허리는 부드럽게. 근육 진동을 잡아 후반 피로를 늦춘다.",
      },
      {
        num: "03",
        heading: "무봉제 웨이스트 밴드",
        body: "위장을 누르는 고무 밴드 대신 9cm 광폭 무봉제 밴드 + 내장 드로코드.",
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
      "리플렉티브 FYF 로고 — 야간 시인성",
      "발수 코팅 (DWR)",
      "백 벤틸레이션 — 열 배출 구조",
      "Bunker-Verse 시즌 1 시그니처",
    ],
    sizes: ["S", "M", "L", "XL"],
    color: "Matte Black",
    image: "/products/noise-spark-windbreaker.png",
    storyTitle: "카티보가 도시를 흔드는 법",
    storyBody:
      "시즌 1, 카티보가 달리면 도시의 센서가 오작동한다 — Noise Spark. 이 재킷의 리플렉티브 FYF 로고는 밤의 헤드라이트를 받으면 심박 그래프처럼 번쩍인다. 도시의 감시는 피하고, 시야에는 잡히는 모순. 그게 FYF다.",
    features: [
      {
        num: "01",
        heading: "리플렉티브 노이즈 로고",
        body: "낮에는 무광 블랙에 묻혀 보이지 않다가, 야간 차량 헤드라이트에 FYF 로고가 심박처럼 발광한다.",
      },
      {
        num: "02",
        heading: "115g 포켓터블 셸",
        body: "자체 체스트 포켓에 말아 넣으면 주먹 크기. 한국의 봄가을 새벽에 답이 되는 무게다.",
      },
      {
        num: "03",
        heading: "백 벤틸레이션",
        body: "등판 상단의 히든 벤트가 달릴 때마다 열기를 배출한다. '비닐하우스 등판'을 구조로 해결했다.",
      },
      {
        num: "04",
        heading: "DWR 발수 코팅",
        body: "가랑비와 새벽 안개까지는 이 한 장으로 충분하다. (폭우용 방수 재킷은 아니다 — 정직하게.)",
      },
    ],
    specs: [
      ["소재", "나일론 립스탑 100% (DWR 코팅)"],
      ["무게", "115g (M)"],
      ["수납", "자체 포켓 패커블"],
      ["시인성", "리플렉티브 FYF 프린트"],
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
  {
    slug: "crew-socks",
    name: "FYF Crew Socks",
    nameKo: "크루 삭스",
    price: 12900,
    listPrice: 16900,
    category: "gear",
    categoryKo: "기어",
    tagline: "발이 편해야 끝까지 간다.",
    description:
      "쿠션 존과 아치 서포트를 갖춘 미들컷 러닝 양말. 블랙·레드·화이트·네이비·그레이 5색.",
    details: [
      "발볼 아치 서포트 밴드",
      "뒤꿈치·앞꿈치 쿠션 존",
      "통기 메쉬 발등",
      "미끄럼 방지 힐 탭",
      "5컬러 (블랙/레드/화이트/네이비/그레이)",
    ],
    sizes: ["M (240–260)", "L (260–280)"],
    color: "5 Colors",
    image: "/products/crew-socks.jpg",
    storyTitle: "물집은 장비 탓이다",
    storyBody:
      "러닝을 멈추게 하는 건 심폐가 아니라 발바닥일 때가 많다. 물집, 쓸림, 눌림 — 전부 양말에서 시작된다. Crew Socks는 마찰 구간에 쿠션을, 흔들리는 아치에 서포트 밴드를 박았다. ₩12,900로 끝나는 가장 싼 부상 방지책.",
    features: [
      {
        num: "01",
        heading: "쿠션 존 설계",
        body: "뒤꿈치와 앞꿈치 착지 구간에만 파일 쿠션을 넣어, 두껍지 않으면서 충격을 줄인다.",
      },
      {
        num: "02",
        heading: "아치 서포트 밴드",
        body: "발 중앙을 감싸는 탄성 밴드가 양말의 뒤틀림을 잡는다. 젖어도 헛돌지 않는다.",
      },
      {
        num: "03",
        heading: "통기 메쉬 발등",
        body: "땀이 가장 많이 차는 발등에 메쉬 조직 — 장거리에서 발이 익는 걸 막는다.",
      },
    ],
    specs: [
      ["소재", "면 70% / 폴리 25% / 스판 5%"],
      ["길이", "미들컷 (복사뼈 위 10cm)"],
      ["기능", "쿠션 존 / 아치 서포트 / 힐 탭"],
      ["컬러", "블랙 / 레드 / 화이트 / 네이비 / 그레이"],
      ["세탁", "세탁기 사용 가능"],
      ["제조", "기가글로벌스튜디오 / 한국"],
    ],
    sizeChart: {
      cols: ["사이즈", "발 길이"],
      rows: [
        ["M", "240–260mm"],
        ["L", "260–280mm"],
      ],
    },
    crewPick: "BLOCK",
    crewComment: "막을 거면 제대로 막아. 물집부터.",
  },
];
// NOTE: crew-socks의 기존 상세 이미지 2장은 중국어 사입처 원본이라 제외했다.
// 자체 촬영/생성 컷 확보 전까지 양말 상세는 타이포 피처로만 구성.

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
