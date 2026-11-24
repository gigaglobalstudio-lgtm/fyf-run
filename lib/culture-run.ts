const media = "/culture-run";

export const sketch = {
  src: `${media}/oct31-sketch.mp4`,
  poster: `${media}/oct31-sketch-cover.jpg`,
  title: "1회차 현장 스케치",
  sub: "2026년 10월 31일 · 순천 · 1분 41초",
};

export const film = {
  src: `${media}/culture-run-film.mp4`,
  poster: `${media}/culture-run-film-cover.jpg`,
  title: "순천을 달리는 크루",
  sub: "FYF × 문화런 홍보영상 · 42초",
};

export const shorts = [
  {
    src: `${media}/nov28-short-01.mp4`,
    poster: `${media}/nov28-short-01-cover.jpg`,
    title: "일단 나와",
    sub: "2회차 예고 숏츠 · 20초",
  },
  {
    src: `${media}/nov28-short-02.mp4`,
    poster: `${media}/nov28-short-02-cover.jpg`,
    title: "너의 속도로",
    sub: "2회차 예고 숏츠 · 21초",
  },
];

export const editions = [
  { code: "nov28", name: "2회차", date: "2026년 11월 28일 (토)", iso: "2026-11-28" },
  { code: "oct31", name: "1회차", date: "2026년 10월 31일 (토)", iso: "2026-10-31" },
].map((edition) => ({
  ...edition,
  poster: `${media}/${edition.code}-poster.png`,
  course: `${media}/${edition.code}-course.png`,
  motion: `${media}/${edition.code}-motion.mp4`,
  cover: `${media}/${edition.code}-cover.webp`,
}));
