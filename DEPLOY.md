# fyf.run 배포 가이드

## 목표
로컬 → Vercel 클라우드 → 전 세계에서 접속 가능한 주소 발급.

## 비용
- Vercel 호스팅: **무료** (Hobby 플랜)
- Neon Postgres DB: **무료** (3GB까지)
- 서브도메인 `fyf-run.vercel.app`: **무료**
- 자체 도메인 `fyf.run` 연결: 도메인 구입비만 (연 $30-50)

---

## STEP 1. Vercel 로그인 (1회)

```bash
cd fyf-run
npx vercel login
```

브라우저 열림 → GitHub/GitLab/이메일로 로그인.

## STEP 2. DB 전환 (SQLite → Postgres)

SQLite는 Vercel 서버리스 환경에서 **쓰기 불가** (파일시스템 읽기 전용).
Neon의 무료 Postgres로 전환:

### 2-1. Neon 계정 생성
https://neon.tech → Sign up → 무료 가입

### 2-2. 프로젝트 생성
- Project name: `fyf-run`
- Region: **Asia Pacific (Singapore)** ← 한국과 가장 가까움
- Postgres version: 16

### 2-3. Connection string 복사
Dashboard → Connection Details → `postgresql://user:pass@...neon.tech/...`

### 2-4. 스키마 교체 + 환경 변수
```bash
# 스키마를 Postgres 버전으로 교체
cp prisma/schema.production.prisma prisma/schema.prisma

# .env.local 생성 (프로덕션용)
echo 'DATABASE_URL="postgresql://...복사한것..."' > .env.local
echo 'JWT_SECRET="아무_랜덤_긴_문자열_32자이상"' >> .env.local

# DB에 스키마 푸시 + 시드
npx prisma db push
npx tsx prisma/seed.ts
```

## STEP 3. Vercel에 배포

```bash
npx vercel --prod
```

질문에 답:
- Set up and deploy? → **Y**
- Which scope? → 본인 계정
- Link to existing? → **N**
- Project name? → **fyf-run** (엔터)
- Directory? → **.** (엔터)
- Modify settings? → **N**

배포 완료 후 URL 발급: `https://fyf-run-xxxxx.vercel.app`

## STEP 4. 환경 변수 설정

Vercel Dashboard → Project → Settings → Environment Variables:
- `DATABASE_URL` = Neon 연결 문자열
- `JWT_SECRET` = 랜덤 32자 이상

저장 후 Deployments → 최신 배포 → **Redeploy**

## STEP 5. (선택) 자체 도메인 연결

도메인 구입 (연 $30-50):
- Namecheap: https://www.namecheap.com/domains/registration/results/?domain=fyf
- Gabia: https://domain.gabia.com (한국어)

Vercel에서 연결:
- Project → Settings → Domains → Add `fyf.run`
- 도메인 업체에서 DNS 설정:
  - A Record `@` → `76.76.21.21`
  - CNAME `www` → `cname.vercel-dns.com`

SSL은 Vercel이 자동 발급 (Let's Encrypt).

---

## 트러블슈팅

### "Database connection failed"
- `.env.local`의 `DATABASE_URL`에 `?sslmode=require` 끝에 붙었는지 확인
- Neon 대시보드에서 "Pooled connection" 사용

### "Build failed"
```bash
npm run build  # 로컬에서 먼저 테스트
```

### "500 on /api/orders"
- Vercel Function 로그 확인: Dashboard → Logs
- 대부분 DB 연결 또는 JWT_SECRET 누락

---

## 배포 후 체크리스트

- [ ] https://fyf-run-xxx.vercel.app 접속 → 홈 200
- [ ] `/shop` → 12개 제품 보임
- [ ] `/crew/join` → 가입 시도 (Postgres에 저장되는지)
- [ ] `/crew/login` → demo@fyf.run / fyf1234 로그인
- [ ] 장바구니 담기 → 결제 → 주문번호 발급
- [ ] Vercel Analytics 활성화

## 프로덕션 추가 작업

1. **도메인 연결** (fyf.run 구매 후)
2. **토스페이먼츠 계약** (사업자등록증 필요)
3. **Sentry 에러 모니터링** 연결 (무료 5K events/월)
4. **Google Analytics 4** 연결
5. **이미지 호스팅** (Cloudinary 무료 10GB)

---

**예상 소요 시간**:
- Vercel 로그인: 30초
- Neon 가입 + DB 생성: 3분
- 스키마 푸시 + 시드: 1분
- 배포: 2분
- **총 7분이면 전 세계 공개 URL 완성**
