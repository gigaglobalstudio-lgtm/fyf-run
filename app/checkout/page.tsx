import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/auth";
import { CheckoutWidget } from "@/components/CheckoutWidget";
import { TOSS_CLIENT_KEY } from "@/lib/payments";

export const metadata: Metadata = {
  title: "결제 — FYF",
};

export default async function CheckoutPage() {
  const session = await auth();

  return (
    <div className="bg-paper text-ink">
      <div className="mx-auto max-w-2xl px-5 py-16">
        <h1 className="font-display text-5xl">Checkout</h1>
        <p className="mt-2 text-sm text-ink/60">
          {session?.user
            ? `${session.user.name ?? "러너"}님, 주문을 완료해주세요.`
            : "비회원 주문 — 로그인하면 주문 내역이 계정에 연결됩니다."}
        </p>

        {!session?.user && (
          <Link
            href="/login"
            className="mt-3 inline-block text-sm font-medium text-ink underline underline-offset-4 hover:text-ink/70"
          >
            로그인하고 결제하기 →
          </Link>
        )}

        <div className="mt-8">
          <CheckoutWidget
            clientKey={TOSS_CLIENT_KEY}
            customerEmail={session?.user?.email ?? undefined}
            customerName={session?.user?.name ?? undefined}
          />
        </div>
      </div>
    </div>
  );
}
