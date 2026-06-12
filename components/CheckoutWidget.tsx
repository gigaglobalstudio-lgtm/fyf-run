"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  loadTossPayments,
  ANONYMOUS,
  type TossPaymentsWidgets,
} from "@tosspayments/tosspayments-sdk";
import { useCart } from "./cart/CartProvider";
import { formatKRW } from "@/lib/products";

export function CheckoutWidget({
  clientKey,
  customerEmail,
  customerName,
}: {
  clientKey: string;
  customerEmail?: string;
  customerName?: string;
}) {
  const { items, total, hydrated } = useCart();
  const widgetsRef = useRef<TossPaymentsWidgets | null>(null);
  const [ready, setReady] = useState(false);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!hydrated || items.length === 0 || initialized.current) return;
    initialized.current = true;

    (async () => {
      try {
        const tossPayments = await loadTossPayments(clientKey);
        const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });
        widgetsRef.current = widgets;

        await widgets.setAmount({ currency: "KRW", value: total });
        await Promise.all([
          widgets.renderPaymentMethods({
            selector: "#payment-method",
            variantKey: "DEFAULT",
          }),
          widgets.renderAgreement({
            selector: "#agreement",
            variantKey: "AGREEMENT",
          }),
        ]);
        setReady(true);
      } catch (e) {
        console.error(e);
        setError("결제 위젯을 불러오지 못했습니다. 새로고침 후 다시 시도해주세요.");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, items.length]);

  // 수량 변경 등으로 합계가 바뀌면 위젯 금액 동기화
  useEffect(() => {
    if (ready && widgetsRef.current && total > 0) {
      widgetsRef.current.setAmount({ currency: "KRW", value: total });
    }
  }, [total, ready]);

  if (hydrated && items.length === 0) {
    return (
      <div className="rounded-2xl border border-line bg-white p-10 text-center">
        <p className="font-bold text-ink">장바구니가 비어 있습니다.</p>
        <Link
          href="/shop"
          className="mt-4 inline-block rounded-xl bg-ink px-5 py-3 text-sm font-bold text-paper"
        >
          쇼핑하러 가기
        </Link>
      </div>
    );
  }

  async function handlePay() {
    if (!widgetsRef.current) return;
    setPaying(true);
    setError(null);

    const orderId = `FYF${Date.now()}${Math.random().toString(36).slice(2, 8)}`;
    const orderName =
      items.length === 1
        ? `${items[0].name} (${items[0].size})`
        : `${items[0].name} 외 ${items.length - 1}건`;

    // 성공 페이지에서 주문 내역 저장/장바구니 비우기에 사용할 스냅샷
    try {
      sessionStorage.setItem(
        "fyf-pending-order",
        JSON.stringify({ orderId, orderName, items, total })
      );
    } catch {}

    try {
      await widgetsRef.current.requestPayment({
        orderId,
        orderName,
        successUrl: `${window.location.origin}/order/success`,
        failUrl: `${window.location.origin}/order/fail`,
        customerEmail: customerEmail ?? undefined,
        customerName: customerName ?? undefined,
      });
    } catch (e) {
      const err = e as { code?: string; message?: string };
      if (err.code !== "USER_CANCEL") {
        setError(err.message ?? "결제 요청 중 오류가 발생했습니다.");
      }
      setPaying(false);
    }
  }

  return (
    <div className="space-y-5">
      <div className="toss-widget-frame">
        <div id="payment-method" />
        <div id="agreement" />
      </div>

      {error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      <button
        type="button"
        disabled={!ready || paying}
        onClick={handlePay}
        className="w-full rounded-2xl bg-flow py-5 text-base font-extrabold tracking-wide text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {paying
          ? "결제 진행 중..."
          : ready
            ? `${formatKRW(total)} 결제하기`
            : "결제 수단 불러오는 중..."}
      </button>

      <p className="text-center text-xs text-ink/40">
        현재 토스페이먼츠 테스트 모드 — 실제 돈이 결제되지 않습니다.
      </p>
    </div>
  );
}
