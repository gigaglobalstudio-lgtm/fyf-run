import type { Metadata } from "next";
import Link from "next/link";
import { confirmTossPayment } from "@/lib/payments";
import { FinalizeOrder } from "@/components/FinalizeOrder";
import { EcgLine } from "@/components/EcgLogo";
import { formatKRW } from "@/lib/products";

export const metadata: Metadata = {
  title: "주문 완료 — FYF",
};

export default async function OrderSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{
    paymentKey?: string;
    orderId?: string;
    amount?: string;
  }>;
}) {
  const { paymentKey, orderId, amount } = await searchParams;

  if (!paymentKey || !orderId || !amount) {
    return (
      <ErrorShell
        title="잘못된 접근입니다"
        message="결제 정보가 없습니다. 장바구니에서 다시 시도해주세요."
      />
    );
  }

  const result = await confirmTossPayment({
    paymentKey,
    orderId,
    amount: Number(amount),
  });

  if (!result.ok) {
    return (
      <ErrorShell
        title="결제 승인에 실패했습니다"
        message={`${result.errorMessage} (${result.errorCode})`}
      />
    );
  }

  return (
    <div className="bg-paper text-ink">
      <FinalizeOrder
        orderId={result.orderId!}
        approvedAt={result.approvedAt}
        totalAmount={result.totalAmount}
        method={result.method}
        receiptUrl={result.receiptUrl}
      />
      <div className="mx-auto max-w-xl px-5 py-24 text-center">
        <EcgLine className="mx-auto h-7 w-44 text-flow" animate />
        <h1 className="font-display mt-6 text-5xl">RUN CONFIRMED</h1>
        <p className="mt-3 text-lg font-bold">주문이 완료되었습니다.</p>
        <p className="mt-1 text-sm text-ink/60">
          이제 따라가지 말고, 네 리듬으로.
        </p>

        <dl className="mt-10 space-y-3 rounded-3xl border border-line bg-white p-7 text-left text-sm">
          <Row k="주문명" v={result.orderName ?? "-"} />
          <Row k="주문번호" v={result.orderId ?? "-"} />
          <Row
            k="결제 금액"
            v={result.totalAmount ? formatKRW(result.totalAmount) : "-"}
          />
          <Row k="결제 수단" v={result.method ?? "-"} />
          <Row
            k="승인 시각"
            v={
              result.approvedAt
                ? new Date(result.approvedAt).toLocaleString("ko-KR")
                : "-"
            }
          />
        </dl>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {result.receiptUrl && (
            <a
              href={result.receiptUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border-2 border-ink px-6 py-3.5 text-sm font-extrabold text-ink transition hover:bg-ink hover:text-paper"
            >
              영수증 보기
            </a>
          )}
          <Link
            href="/mypage"
            className="rounded-2xl border-2 border-ink px-6 py-3.5 text-sm font-extrabold text-ink transition hover:bg-ink hover:text-paper"
          >
            주문 내역
          </Link>
          <Link
            href="/shop"
            className="rounded-2xl bg-ink px-6 py-3.5 text-sm font-extrabold text-paper transition hover:bg-smoke"
          >
            쇼핑 계속하기
          </Link>
        </div>

        <p className="mt-6 text-xs text-ink/40">
          테스트 모드 결제 — 실제 금액이 청구되지 않았습니다.
        </p>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="shrink-0 text-ink/50">{k}</dt>
      <dd className="break-all text-right font-bold">{v}</dd>
    </div>
  );
}

function ErrorShell({ title, message }: { title: string; message: string }) {
  return (
    <div className="bg-paper text-ink">
      <div className="mx-auto max-w-xl px-5 py-28 text-center">
        <h1 className="font-display text-4xl">PAYMENT FAILED</h1>
        <p className="mt-4 text-lg font-bold">{title}</p>
        <p className="mt-2 text-sm text-ink/60">{message}</p>
        <Link
          href="/cart"
          className="mt-8 inline-block rounded-2xl bg-ink px-6 py-3.5 text-sm font-extrabold text-paper transition hover:bg-smoke"
        >
          장바구니로 돌아가기
        </Link>
      </div>
    </div>
  );
}
