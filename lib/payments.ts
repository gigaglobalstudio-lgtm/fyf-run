// 토스페이먼츠 v2 키.
// 아래 기본값은 토스 공식 문서의 공개 샌드박스 키(실제 결제 발생 안 함).
// 실 결제 전환 시 .env에 본인 상점 키를 넣으면 자동으로 교체된다. (SETUP.md 참고)
export const TOSS_CLIENT_KEY =
  process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY ??
  "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";

export const TOSS_SECRET_KEY =
  process.env.TOSS_SECRET_KEY ?? "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6";

export type TossPaymentResult = {
  ok: boolean;
  status?: string;
  orderId?: string;
  orderName?: string;
  totalAmount?: number;
  method?: string;
  approvedAt?: string;
  receiptUrl?: string;
  errorCode?: string;
  errorMessage?: string;
};

export async function confirmTossPayment(params: {
  paymentKey: string;
  orderId: string;
  amount: number;
}): Promise<TossPaymentResult> {
  const basic = Buffer.from(`${TOSS_SECRET_KEY}:`).toString("base64");

  const res = await fetch("https://api.tosspayments.com/v1/payments/confirm", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    return {
      ok: false,
      errorCode: data.code ?? "UNKNOWN",
      errorMessage: data.message ?? "결제 승인 중 오류가 발생했습니다.",
    };
  }

  return {
    ok: true,
    status: data.status,
    orderId: data.orderId,
    orderName: data.orderName,
    totalAmount: data.totalAmount,
    method: data.method,
    approvedAt: data.approvedAt,
    receiptUrl: data.receipt?.url,
  };
}
