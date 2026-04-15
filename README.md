# fyf.run — FYF 풀스택 전자상거래

**Next.js 15 + TypeScript + Prisma + SQLite + JWT 인증 + Zustand**

현재 상태: **완전 동작**. 로컬에서 `npm run dev` → http://localhost:3000

## 빠른 실행

```bash
cd fyf-run
npm install --legacy-peer-deps
npm run setup    # prisma generate + db push + seed (최초 1회)
npm run dev      # http://localhost:3000
```

## 데모 계정

- 이메일: `demo@fyf.run`
- 비밀번호: `fyf1234`
- 크루번호: #00001

## 구조

```
app/
├── page.tsx                        홈 (드랍 카운터 · 크루 · 제품)
├── shop/page.tsx                   제품 목록 (라인·캐릭터 필터)
├── shop/[slug]/page.tsx            PDP (사이즈·컬러·카트 담기)
├── drop/page.tsx                   ANOMALY 드랍 (실시간 카운트다운)
├── world/page.tsx                  세계관 허브
├── world/characters/[slug]         캐릭터 상세 + 연동 상품
├── crew/join                       가입 (크루번호 자동 발급)
├── crew/login                      로그인
├── crew/me                         마이페이지 (등급·주문·포인트)
├── cart/page.tsx                   카트 (Zustand 영구저장)
├── checkout/page.tsx               결제 (토스·카카오·네이버 UI)
├── checkout/complete               주문 완료
├── bunker/page.tsx                 벙커 지점 (순천·성수·홍대·도쿄)
└── story/page.tsx                  웹툰 허브 (시즌1-3)

app/api/
├── crew/signup                     POST 가입 + 세션 생성
├── crew/login                      POST 로그인
├── crew/logout                     POST 로그아웃
├── orders                          POST 주문 (인증 필요)
└── products                        GET 제품 목록

lib/
├── db.ts                           Prisma 클라이언트
├── auth.ts                         JWT 세션 (jose)
├── cart-store.ts                   Zustand + localStorage
└── drop.ts                         드랍 시간 계산

prisma/
├── schema.prisma                   5개 모델 (Crew/Product/Order/OrderItem/Character)
└── seed.ts                         12 제품 + 5 캐릭터 + 데모 계정
```

## 동작 확인된 기능

- [x] 홈 페이지 실시간 드랍 카운트다운
- [x] 제품 목록 필터링 (CORE/FLOW/ANOMALY + 캐릭터)
- [x] 제품 상세 페이지 (사이즈/컬러 선택)
- [x] 카트 담기 + localStorage 영구 저장
- [x] 수량 변경 / 삭제
- [x] 크루 가입 → **자동 크루번호 발급** (#00001부터 순차)
- [x] 로그인 / 로그아웃 (JWT 쿠키, 30일)
- [x] 주문 생성 (DB 기록 + 포인트 적립)
- [x] 마이페이지 (주문 내역, 등급 바)
- [x] 캐릭터별 상품 자동 매핑

## 실제 작동 테스트 결과

```
✓ / 200
✓ /shop 200 (12개 제품)
✓ /shop/cattivo-spark-jacket 200 (PDP)
✓ /world/characters/cattivo 200
✓ /api/crew/login → {"ok":true}
✓ /api/orders → {"ok":true,"orderNumber":"FYF-2026-04-3523"}
```

## 다음 단계 (프로덕션화)

1. **도메인 확보**: `fyf.run` 네임칩 조회 → DNS 설정
2. **배포**: Vercel (`npx vercel` → 도메인 연결)
3. **DB 프로덕션**: SQLite → PostgreSQL (Neon, Supabase) 전환. `schema.prisma`의 provider만 변경
4. **실결제**: 토스페이먼츠 계약 → `/api/orders`에 키만 주입
5. **이메일**: Resend 또는 Stibee API 키 주입 → 주문 확인 메일
6. **이미지**: 현재 이모지 플레이스홀더 → 실제 상품 사진 업로드 (Cloudinary)
7. **검색**: Algolia 입점 (월 $50)
8. **분석**: GA4 + Mixpanel

## 기술 스택 상세

- **Runtime**: Node 24, Next.js 15.0.3 App Router
- **UI**: React 19 + TypeScript + CSS-in-JS (no framework)
- **DB**: SQLite via Prisma 5.22 (→ PostgreSQL 호환)
- **Auth**: JWT (jose) + httpOnly cookie
- **상태관리**: Zustand 5 + persist middleware
- **비밀번호**: bcryptjs
- **검증**: 타입체크 + Prisma 스키마

## 비용 추정 (실제 배포 시)

| 항목 | 월 비용 |
|---|---|
| Vercel Pro | $20 |
| Neon Postgres | $19 |
| Cloudinary (이미지) | $0~99 |
| 도메인 fyf.run | $10/년 |
| 토스페이먼츠 수수료 | 결제액의 2.7% |
| **기본 인프라 합계** | **약 $60-150/월** |

## 주의사항

- 현재 이미지는 이모지 플레이스홀더. 실제 상품 사진 필요 (외주 또는 AI 생성)
- `JWT_SECRET`은 프로덕션 배포 전 반드시 교체 (`.env` 파일)
- 데모 계정 비밀번호는 배포 전 삭제
- 결제는 Mock. 실결제 연동은 `/api/orders/route.ts` 내부에 토스페이먼츠 SDK 호출 추가

---

**Built by Giga Global Studio · 2026.04.14**
