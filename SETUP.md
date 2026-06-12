# FYF.RUN 셋업 가이드

지금 상태에서 **이미 작동하는 것**: 사이트 전체, 데모 로그인, 토스 샌드박스 결제(실돈 안 나감).
아래 키만 발급하면 **구글/카카오 로그인 + 실결제**가 켜집니다. 각 5분.

---

## 1. Google 로그인 키 (5분)

1. https://console.cloud.google.com/apis/credentials 접속 (gigaglobalstudio@gmail.com)
2. 프로젝트 선택(없으면 새 프로젝트 `fyf-run`) → **+ 사용자 인증 정보 만들기 → OAuth 클라이언트 ID**
3. 처음이면 "동의 화면 구성" 먼저: User Type **외부**, 앱 이름 `FYF`, 이메일 입력 → 저장 (테스트 모드면 테스트 사용자에 본인 이메일 추가)
4. 애플리케이션 유형: **웹 애플리케이션**
5. **승인된 리디렉션 URI**에 두 개 추가:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://fyf-run.vercel.app/api/auth/callback/google`
6. 생성된 **클라이언트 ID** → `AUTH_GOOGLE_ID`, **클라이언트 보안 비밀** → `AUTH_GOOGLE_SECRET`

## 2. Kakao 로그인 키 (5분)

1. https://developers.kakao.com → 내 애플리케이션 → **애플리케이션 추가** (앱 이름 `FYF`, 회사명 기가글로벌스튜디오)
2. **앱 설정 > 플랫폼 > Web** 사이트 도메인 등록: `http://localhost:3000`, `https://fyf-run.vercel.app`
3. **제품 설정 > 카카오 로그인** 활성화 ON
4. **Redirect URI** 등록:
   - `http://localhost:3000/api/auth/callback/kakao`
   - `https://fyf-run.vercel.app/api/auth/callback/kakao`
5. **동의항목**: 닉네임, 프로필 사진 → "필수 동의"로 설정 (이메일은 비즈앱 전환 후에만 가능 — 코드가 이미 이메일 없이 동작하게 되어 있음)
6. **앱 설정 > 앱 키**의 **REST API 키** → `AUTH_KAKAO_ID`
7. **제품 설정 > 카카오 로그인 > 보안**에서 Client Secret 생성·활성화 → `AUTH_KAKAO_SECRET`

## 3. 토스페이먼츠 (지금: 샌드박스 / 실결제 전환 시)

- 현재 키 미설정 상태에서는 **토스 공식 문서용 공개 샌드박스 키**로 작동합니다. 카드번호 아무거나(예: 4111-1111-1111-1111, 미래 유효기간, CVC 아무거나)로 테스트 결제 가능, 실제 청구 없음.
- 실결제 전환:
  1. https://pay.tosspayments.com 가맹점 가입 (사업자등록번호 필요)
  2. 개발자센터 > API 키에서 **라이브 클라이언트 키** → `NEXT_PUBLIC_TOSS_CLIENT_KEY`, **라이브 시크릿 키** → `TOSS_SECRET_KEY`
  3. 통신판매업 신고번호를 푸터에 기재

## 4. 환경변수 적용 위치

**로컬**: `.env.local` 파일의 주석을 해제하고 값 입력 → `npm run dev` 재시작

**Vercel**: 프로젝트 → Settings → Environment Variables에 동일 키 입력 → Redeploy
필수: `AUTH_SECRET` (로컬 .env.local에 이미 생성된 값을 복사하거나 새로 생성)

```
AUTH_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
AUTH_KAKAO_ID=
AUTH_KAKAO_SECRET=
NEXT_PUBLIC_TOSS_CLIENT_KEY=   (선택 — 비우면 샌드박스)
TOSS_SECRET_KEY=               (선택 — 비우면 샌드박스)
```

## 5. 실 운영 전 체크리스트 (매출 발생 조건)

- [ ] 사업자등록번호 + 통신판매업 신고 → 푸터 기재 (전자상거래법 의무)
- [ ] 토스페이먼츠 라이브 키 계약 (수수료 통상 2.5~3.3%)
- [ ] 주문 데이터베이스 도입 — 현재 주문 내역은 브라우저 로컬 저장(데모 수준). 실 운영은 Supabase/Neon 등 DB + 토스 웹훅(가상계좌 입금통지) 필요
- [ ] 개인정보처리방침 / 이용약관 페이지
- [ ] 재고/배송 관리 (초기엔 수동으로 충분)
- [ ] AUTH_SECRET를 Vercel에 반드시 설정 (미설정 시 폴백 키 사용 — 보안 취약)

