# 🚀 fyf.run 원클릭 배포 — 3가지 경로

## 경로 A: Vercel CLI (가장 빠름, 5분)

```bash
cd C:\Users\HP\Desktop\fyf남문터까페\fyf-run

# 1. 로그인 (브라우저 1회 인증)
npx vercel login

# 2. DB는 일단 skip하고 배포 먼저 (읽기만 작동, 쓰기는 추후 Neon 연결)
npx vercel --prod

# → https://fyf-run-xxxxxx.vercel.app 발급
```

## 경로 B: GitHub → Vercel (자동 배포, 권장)

```bash
cd C:\Users\HP\Desktop\fyf남문터까페\fyf-run

# 1. Git 초기화 + GitHub 푸시
git init
git add .
git commit -m "Initial FYF commit"
git branch -M main

# 2. GitHub에서 새 repo 만들기 (https://github.com/new, 이름: fyf-run)

# 3. 연결 + 푸시
git remote add origin https://github.com/YOUR_USERNAME/fyf-run.git
git push -u origin main

# 4. Vercel에서 import
# https://vercel.com/new → GitHub 선택 → fyf-run repo → Deploy
```

## 경로 C: Vercel Dashboard 직접 업로드 (CLI 없이)

1. ZIP 압축:
   ```
   C:\Users\HP\Desktop\fyf남문터까페\fyf-run  →  fyf-run.zip
   (단, node_modules, .next, dev.db, prisma/dev.db 제외)
   ```

2. https://vercel.com/new → "Other" → ZIP 업로드 불가능 (Vercel은 Git 필수)

   → 실제로는 **경로 A 또는 B**를 써야 합니다.

---

## 📋 Vercel 배포 시 환경 변수 설정

Dashboard → Project → Settings → Environment Variables:

| Key | Value |
|---|---|
| `DATABASE_URL` | Neon Postgres 연결 문자열 (아래 참고) |
| `JWT_SECRET` | `랜덤 32자 이상 문자열` |

### JWT_SECRET 생성
```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

---

## 🗄️ Neon Postgres 설정 (3분)

1. https://neon.tech → Sign up with GitHub (무료)
2. Create Project:
   - Name: `fyf-run`
   - Region: **AWS ap-southeast-1 (Singapore)**
   - Postgres 16
3. Connection Details → **Pooled connection** URL 복사
4. 로컬에서 DB 스키마 푸시:
   ```bash
   cd fyf-run
   cp prisma/schema.production.prisma prisma/schema.prisma

   # .env.local 생성
   echo 'DATABASE_URL="postgresql://...붙여넣기..."' > .env.local
   echo 'JWT_SECRET="랜덤32자이상"' >> .env.local

   npx prisma db push
   npx tsx prisma/seed.ts
   ```
5. 동일한 DATABASE_URL을 Vercel Env Vars에 붙여넣기

---

## ⚡ 완전 자동화 대안: Vercel + Vercel Postgres

Vercel은 자체 Postgres를 $20/월로 제공합니다 (첫 달 무료).
Dashboard → Storage → Create Database → Postgres → 완료.
DATABASE_URL이 자동으로 환경변수에 주입됩니다.

Neon보다 편하지만 유료 전환 주의.

---

## ✅ 배포 후 체크리스트

- [ ] `https://YOUR_PROJECT.vercel.app/` → 홈 뜸
- [ ] `/shop` → 12개 제품 목록
- [ ] `/crew/join` → 가입 → 크루번호 발급
- [ ] `/crew/login` → 로그인
- [ ] 장바구니 → 결제 → 주문번호 발급
- [ ] `/crew/me` → 주문 내역 조회

## 🌐 실제 도메인 `fyf.run` 연결 (선택)

1. 도메인 구입 (연 $30-50):
   - https://www.namecheap.com/domains/registration/results/?domain=fyf (`.run`)
   - 또는 https://www.godaddy.com/domainsearch/find?domainToCheck=fyf.run
2. Vercel → Project → Settings → Domains → Add `fyf.run`
3. 도메인 업체 DNS:
   - A `@` → `76.76.21.21`
   - CNAME `www` → `cname.vercel-dns.com`
4. Vercel 자동 SSL 발급 (1-2분)

---

## 💡 현실적 조언

**"무료로 실제 도메인"은 불가능합니다.**
- `.run` TLD는 프리미엄: 연 $30-50
- `.com/.net`도 최저 연 $10
- 무료 서브도메인 `xxx.vercel.app`는 충분히 프로답게 보임

**추천 순서**:
1. **지금**: `fyf-run.vercel.app` 무료 서브도메인으로 배포 → 마케팅·IR·팬덤 모집
2. **Seed 투자 후**: `fyf.run` 도메인 구입 → 연결
3. **Series A**: 프리미엄 도메인 (`fyf.kr`, `fyf.com` 등) 추가 확보

---

## 배포 도움 필요 시

이 가이드대로 진행 중 막히면:
1. `vercel login` 에러 스크린샷 보내주세요
2. Build 실패 시 Vercel Dashboard의 Logs 탭 내용 공유
3. Neon 가입 단계에서 막히면 직접 연결해드림

**현재 상태**: 코드 100% 완성, 로컬 실행 확인 완료, 배포 설정 완료.
마지막 퍼즐은 **Vercel 계정 로그인 1회**.
