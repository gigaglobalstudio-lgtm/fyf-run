import NextAuth from "next-auth";
import type { Provider } from "next-auth/providers";
import Google from "next-auth/providers/google";
import Kakao from "next-auth/providers/kakao";
import Credentials from "next-auth/providers/credentials";

export const googleEnabled = Boolean(
  process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET
);
export const kakaoEnabled = Boolean(process.env.AUTH_KAKAO_ID);

const providers: Provider[] = [];

if (googleEnabled) {
  providers.push(Google);
}

if (kakaoEnabled) {
  providers.push(
    Kakao({
      clientId: process.env.AUTH_KAKAO_ID,
      clientSecret: process.env.AUTH_KAKAO_SECRET ?? "",
      // 이메일 동의항목은 카카오 비즈앱 인증이 필요하므로 기본 프로필만 요청
      authorization: { params: { scope: "profile_nickname profile_image" } },
    })
  );
}

// OAuth 키가 없어도 사이트 전체 플로우를 체험할 수 있는 데모 로그인
providers.push(
  Credentials({
    id: "demo",
    name: "데모 러너",
    credentials: {},
    async authorize() {
      return {
        id: "demo-runner",
        name: "데모 러너",
        email: "runner@fyf.run",
      };
    },
  })
);

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  trustHost: true,
  session: { strategy: "jwt" },
  // 프로덕션에서는 반드시 AUTH_SECRET 환경변수를 설정할 것 (SETUP.md 참고)
  secret:
    process.env.AUTH_SECRET ??
    "fyf-run-fallback-secret-set-AUTH_SECRET-in-production-3f9a1c",
  pages: {
    signIn: "/login",
  },
});
