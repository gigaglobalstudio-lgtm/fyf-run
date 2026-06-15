import { signIn } from "@/auth";

function KakaoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 3C6.48 3 2 6.54 2 10.9c0 2.8 1.86 5.26 4.66 6.65l-.95 3.54c-.08.31.27.56.54.38l4.21-2.8c.5.05 1.02.08 1.54.08 5.52 0 10-3.54 10-7.85C22 6.54 17.52 3 12 3z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.24-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

export function LoginButtons({
  googleEnabled,
  kakaoEnabled,
}: {
  googleEnabled: boolean;
  kakaoEnabled: boolean;
}) {
  return (
    <div className="space-y-3">
      {kakaoEnabled ? (
        <form
          action={async () => {
            "use server";
            await signIn("kakao", { redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2.5 rounded-full bg-kakao py-4 text-sm font-semibold text-[#191919] transition hover:brightness-95"
          >
            <KakaoIcon />
            카카오로 시작하기
          </button>
        </form>
      ) : (
        <button
          type="button"
          disabled
          className="flex w-full cursor-not-allowed items-center justify-center gap-2.5 rounded-full bg-kakao/30 py-4 text-sm font-semibold text-[#191919]/40"
          title="카카오 개발자 키 설정 후 활성화됩니다 (SETUP.md)"
        >
          <KakaoIcon />
          카카오로 시작하기 — 키 설정 대기
        </button>
      )}

      {googleEnabled ? (
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2.5 rounded-full border border-line bg-white py-4 text-sm font-semibold text-ink transition hover:bg-paper"
          >
            <GoogleIcon />
            Google로 시작하기
          </button>
        </form>
      ) : (
        <button
          type="button"
          disabled
          className="flex w-full cursor-not-allowed items-center justify-center gap-2.5 rounded-full border border-line bg-white/40 py-4 text-sm font-semibold text-ink/30"
          title="Google OAuth 키 설정 후 활성화됩니다 (SETUP.md)"
        >
          <GoogleIcon />
          Google로 시작하기 — 키 설정 대기
        </button>
      )}

      <form
        action={async () => {
          "use server";
          await signIn("demo", { redirectTo: "/" });
        }}
      >
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2.5 rounded-full bg-ink py-4 text-sm font-semibold text-paper transition hover:bg-smoke"
        >
          데모 러너로 둘러보기
        </button>
      </form>
    </div>
  );
}
