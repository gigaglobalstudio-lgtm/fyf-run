import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "결제 실패 — FYF",
};

export default async function OrderFailPage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string; message?: string }>;
}) {
  const { code, message } = await searchParams;

  return (
    <div className="bg-paper text-ink">
      <div className="mx-auto max-w-xl px-5 py-28 text-center">
        <h1 className="font-display text-5xl">Payment Failed</h1>
        <p className="mt-4 text-lg font-semibold">결제가 완료되지 않았습니다.</p>
        <p className="mt-2 text-sm text-ink/60">
          {message ?? "사용자가 결제를 취소했거나 오류가 발생했습니다."}
          {code ? ` (${code})` : ""}
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/checkout"
            className="rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition hover:bg-smoke"
          >
            다시 시도하기
          </Link>
          <Link
            href="/cart"
            className="rounded-full border border-ink/20 px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-ink"
          >
            장바구니
          </Link>
        </div>
      </div>
    </div>
  );
}
