import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth, googleEnabled, kakaoEnabled } from "@/auth";
import { LoginButtons } from "@/components/LoginButtons";
import { EcgLine } from "@/components/EcgLogo";

export const metadata: Metadata = {
  title: "로그인 — FYF",
};

export default async function LoginPage() {
  const session = await auth();
  if (session?.user) redirect("/mypage");

  return (
    <div className="bg-paper text-ink">
      <div className="mx-auto flex min-h-[70svh] max-w-md flex-col justify-center px-5 py-20">
        <EcgLine className="h-5 w-28 text-ink/35" animate />
        <h1 className="font-display mt-5 text-5xl">Join the Crew</h1>
        <p className="mt-3 text-sm leading-relaxed text-ink/60">
          소셜 계정으로 3초 만에 시작. 주문 조회와 크루 혜택은 로그인 후
          제공됩니다.
        </p>

        <div className="mt-8">
          <LoginButtons
            googleEnabled={googleEnabled}
            kakaoEnabled={kakaoEnabled}
          />
        </div>

        {(!googleEnabled || !kakaoEnabled) && (
          <p className="mt-6 rounded-xl bg-ink/5 px-4 py-3 text-xs leading-relaxed text-ink/50">
            일부 소셜 로그인은 OAuth 키 등록 후 활성화됩니다. 프로젝트 루트의{" "}
            <code className="font-medium">SETUP.md</code>에 발급 절차(5분)가
            정리되어 있습니다. 지금은 데모 러너로 모든 기능을 체험할 수
            있습니다.
          </p>
        )}
      </div>
    </div>
  );
}
