# FYF.RUN — Don't follow. Find your Flow.

순천발 러닝 컬처 브랜드 **FYF**의 공식 커머스 사이트.
RUMAD 류의 러닝 브랜드 커머스 무드 + Bunker-Verse 세계관(카티보·렌·로코·블록).

## 스택

- **Next.js 16** (App Router, Turbopack) + TypeScript + Tailwind CSS v4
- **Auth.js v5** — Google / Kakao 소셜 로그인 + 데모 로그인
- **TossPayments 결제위젯 v2** — 카드/간편결제 (기본 샌드박스 모드)
- 장바구니/주문내역: 클라이언트 저장 (실 운영 시 DB 전환 — SETUP.md 참고)

## 실행

```bash
npm install
npm run dev   # http://localhost:3000
```

소셜 로그인·실결제 키 발급은 [SETUP.md](./SETUP.md) (각 5분).

## 구조

```
app/
  page.tsx              홈 (히어로/마퀴/컬렉션/크루)
  shop/                 전체 상품
  product/[slug]/       상품 상세 (사이즈/수량/장바구니)
  world/                Bunker-Verse 세계관
  login/                소셜 로그인
  cart/ checkout/       장바구니 → 토스 결제위젯
  order/success|fail/   결제 승인(서버) / 실패
  mypage/               프로필 + 주문 내역
  api/auth/             Auth.js 핸들러
lib/products.ts         상품·크루 데이터 (여기서 상품 수정)
lib/payments.ts         토스 승인 API
auth.ts                 Auth.js 설정
```

## 상품 수정

`lib/products.ts`의 `PRODUCTS` 배열에서 추가/수정. 이미지는 `public/products/`에 3:4 비율로.

© GIGA GLOBAL STUDIO
