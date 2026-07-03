// 포토 후기 + 별점 — 한국 러닝 커머스 신뢰 요소.
// 데모 시드 데이터(고정). 실 운영 시 리뷰 위젯/DB로 교체.

export type Review = {
  name: string;
  date: string;
  rating: number; // 1–5
  size?: string;
  body: string;
  photo?: string; // 포토 후기 이미지 경로
};

export type ProductReviews = {
  avg: number;
  count: number;
  items: Review[];
};

// slug → 사진 폴더
const PHOTO: Record<string, string> = {
  "fyf-performance-cap": "/products/cap/wearing.jpg",
  "pulse-sleeveless": "/products/pulse/f-run.jpg",
  "race-vest": "/products/vest/hero.jpg",
  "race-singlet": "/products/singlet/hero.jpg",
  "flow-shorts": "/products/shorts/hero.jpg",
  "flow-singlet": "/products/flowsinglet/hero.jpg",
  "flow-tee": "/products/tee/hero.jpg",
  "flow-half-tights": "/products/halftights/hero.jpg",
  "noise-spark-windbreaker": "/products/windbreaker/hero.jpg",
  "crew-socks": "/products/socks/hero.jpg",
};

const DATA: Record<
  string,
  { avg: number; count: number; items: Omit<Review, "photo">[]; photoOn: number }
> = {
  "fyf-performance-cap": {
    avg: 4.9,
    count: 213,
    photoOn: 0,
    items: [
      { name: "런천리마", date: "2026.05.28", rating: 5, size: "FREE", body: "가볍고 통기 잘 돼서 새벽런에 계속 씁니다. 심박 로고 진짜 예뻐요. 첫 러닝 장비로 강추." },
      { name: "동천크루", date: "2026.05.20", rating: 5, size: "FREE", body: "3.9만원 가성비 미쳤어요. 땀밴드 속건 좋고 세탁해도 형태 안 변합니다." },
      { name: "yuna_run", date: "2026.05.11", rating: 4, size: "FREE", body: "여자 머리엔 살짝 큰 느낌이라 스트링 조여서 씁니다. 그래도 만족." },
    ],
  },
  "pulse-sleeveless": {
    avg: 4.8,
    count: 96,
    photoOn: 0,
    items: [
      { name: "레이스데이", date: "2026.06.10", rating: 5, size: "M", body: "진짜 안 입은 것처럼 가벼움. 10km 레이스에서 몸에 감기지 않아서 좋았어요." },
      { name: "mint_runner", date: "2026.06.03", rating: 5, size: "S", body: "여자 S 딱 맞고 살짝 크롭돼서 예뻐요. 등판 통기 최고." },
      { name: "묵묵히", date: "2026.05.30", rating: 4, size: "L", body: "핏 좋은데 화이트 안감이 살짝 비쳐요. 블랙만 있으면 5점." },
    ],
  },
  "race-vest": {
    avg: 4.7,
    count: 74,
    photoOn: 0,
    items: [
      { name: "마라톤입문", date: "2026.06.08", rating: 5, body: "플라스크 2개 꽂으니 손이 자유로워서 하프가 편해졌어요. 등판 안 답답." },
      { name: "trail_kim", date: "2026.05.31", rating: 4, body: "가볍고 좋은데 무게 늘면 어깨 스트랩 조절 자주 해야 함. 그래도 이 가격에 만족." },
      { name: "새벽6시", date: "2026.05.22", rating: 5, body: "폰이랑 젤 넣고 뛰어도 흔들림 거의 없음. 라이트그레이 색 예뻐요." },
    ],
  },
  "race-singlet": {
    avg: 4.8,
    count: 61,
    photoOn: 0,
    items: [
      { name: "형광러너", date: "2026.06.09", rating: 5, size: "M", body: "레이스 사진에서 진짜 눈에 띄어요. 통기 좋고 가볍고 색 미쳤음." },
      { name: "sprint_ah", date: "2026.06.01", rating: 5, size: "S", body: "핫핑크 실물이 더 예뻐요. 레이서백이라 어깨 편함." },
      { name: "여름러닝", date: "2026.05.25", rating: 4, size: "L", body: "메쉬라 시원한데 살짝 비침. 이너 입으면 완벽." },
    ],
  },
  "flow-shorts": {
    avg: 4.7,
    count: 88,
    photoOn: 0,
    items: [
      { name: "데일리런", date: "2026.06.07", rating: 5, size: "M", body: "폰 넣는 뒷포켓 흔들림 없어서 매일 이것만 입어요. 원단 가볍고 빨리 마름." },
      { name: "black_only", date: "2026.05.29", rating: 5, size: "L", body: "레이저컷 마감이라 쓸림 없음. 5컬러 다 사고 싶네요." },
      { name: "짧은다리", date: "2026.05.18", rating: 4, size: "S", body: "기장 짧아서 시원한데 처음엔 어색. 익숙해지니 편해요." },
    ],
  },
  "flow-singlet": {
    avg: 4.8,
    count: 52,
    photoOn: 0,
    items: [
      { name: "98그램", date: "2026.06.05", rating: 5, size: "M", body: "진짜 깃털임. 여름 인터벌에 딱. 플랫락이라 겨드랑이 안 쓸려요." },
      { name: "mesh_lover", date: "2026.05.27", rating: 5, size: "S", body: "메쉬 통기 최고. 땀 금방 마름." },
      { name: "정직리뷰", date: "2026.05.19", rating: 4, size: "L", body: "가볍고 좋은데 얇아서 조심히 세탁해야 해요." },
    ],
  },
  "flow-tee": {
    avg: 4.9,
    count: 134,
    photoOn: 0,
    items: [
      { name: "매일입음", date: "2026.06.06", rating: 5, size: "M", body: "러닝하고 카페 가도 어색하지 않은 핏. 목 안 늘어나서 좋아요." },
      { name: "gym_and_run", date: "2026.05.28", rating: 5, size: "L", body: "속건 진짜 빨라요. 짐에서도 러닝에서도 만능." },
      { name: "무난템", date: "2026.05.14", rating: 5, size: "M", body: "매트한 블랙이라 광 안 나고 고급스러움. 재구매 의사 100%." },
    ],
  },
  "flow-half-tights": {
    avg: 4.7,
    count: 69,
    photoOn: 0,
    items: [
      { name: "장거리왕", date: "2026.06.04", rating: 5, size: "M", body: "젤 2개 폰까지 넣고 30km 뛰었는데 흘러내림 없음. 압박 딱 좋아요." },
      { name: "compression", date: "2026.05.26", rating: 4, size: "L", body: "허벅지 압박 좋은데 처음엔 타이트. 러닝엔 이 정도가 맞더라고요." },
      { name: "무봉제good", date: "2026.05.17", rating: 5, size: "S", body: "허리밴드 안 배겨서 좋아요. 포켓 위치 완벽." },
    ],
  },
  "noise-spark-windbreaker": {
    avg: 4.8,
    count: 47,
    photoOn: 0,
    items: [
      { name: "새벽바람", date: "2026.06.02", rating: 5, size: "M", body: "포켓터블이라 주먹만해져요. 봄가을 새벽런 답. 리플렉티브 로고 밤에 진짜 빛나요." },
      { name: "cattivo_fan", date: "2026.05.24", rating: 5, size: "L", body: "노이즈 스파크 세계관 알고 사니 더 애정. 발수도 잘 됨." },
      { name: "가랑비", date: "2026.05.15", rating: 4, size: "M", body: "가랑비까진 완벽. 폭우엔 방수 아니니 참고. 정직해서 좋아요." },
    ],
  },
  "crew-socks": {
    avg: 4.9,
    count: 156,
    photoOn: 0,
    items: [
      { name: "물집졸업", date: "2026.06.03", rating: 5, size: "M", body: "쿠션존 덕에 장거리에도 물집 안 생겨요. 이 가격에 이 퀄 실화?" },
      { name: "5color", date: "2026.05.25", rating: 5, size: "L", body: "색깔별로 다 샀어요. 아치 밴드 잡아줘서 헛돌지 않음." },
      { name: "발편함", date: "2026.05.16", rating: 5, size: "M", body: "메쉬 발등 통기 좋고 미끄럼 방지 확실. 재구매 각." },
    ],
  },
};

export function getReviews(slug: string): ProductReviews | null {
  const d = DATA[slug];
  if (!d) return null;
  const items: Review[] = d.items.map((it, i) => ({
    ...it,
    photo: i === d.photoOn ? PHOTO[slug] : undefined,
  }));
  return { avg: d.avg, count: d.count, items };
}
