import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";
import { OrderHistory } from "@/components/OrderHistory";
import { EcgLine } from "@/components/EcgLogo";

export const metadata: Metadata = {
  title: "마이페이지 — FYF",
};

export default async function MyPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <div className="bg-paper text-ink">
      <div className="mx-auto max-w-3xl px-5 py-16">
        <EcgLine className="h-5 w-28 text-ink/35" animate />
        <h1 className="font-display mt-4 text-5xl">My Crew Page</h1>

        <div className="mt-8 rounded-2xl border border-line bg-white p-7">
          <p className="text-lg font-semibold">
            {session.user.name ?? "러너"}
          </p>
          <p className="mt-1 text-sm text-ink/50">
            {session.user.email ?? "이메일 미제공 (카카오 기본 동의항목)"}
          </p>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
            className="mt-4"
          >
            <button
              type="submit"
              className="text-xs font-medium text-ink/45 underline underline-offset-4 hover:text-ink"
            >
              로그아웃
            </button>
          </form>
        </div>

        <h2 className="font-display mt-12 text-2xl">Orders</h2>
        <p className="mt-1 text-xs text-ink/50">
          주문 내역 (이 브라우저에 저장된 기록)
        </p>
        <div className="mt-5">
          <OrderHistory />
        </div>
      </div>
    </div>
  );
}
