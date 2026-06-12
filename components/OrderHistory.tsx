"use client";

import { useEffect, useState } from "react";
import { formatKRW } from "@/lib/products";

type StoredOrder = {
  orderId: string;
  orderName?: string;
  totalAmount?: number;
  method?: string;
  approvedAt?: string;
  receiptUrl?: string;
  items: { name: string; size: string; qty: number }[];
};

export function OrderHistory() {
  const [orders, setOrders] = useState<StoredOrder[] | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("fyf-orders");
      setOrders(raw ? JSON.parse(raw) : []);
    } catch {
      setOrders([]);
    }
  }, []);

  if (orders === null) {
    return <p className="py-10 text-center text-sm text-ink/40">불러오는 중...</p>;
  }

  if (orders.length === 0) {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center">
        <p className="text-sm font-bold text-ink">아직 주문 내역이 없습니다.</p>
        <p className="mt-1 text-xs text-ink/50">
          첫 주문은 ₩39,000 퍼포먼스 캡을 추천합니다.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {orders.map((o) => (
        <li
          key={o.orderId}
          className="rounded-2xl border border-line bg-white p-5"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-sm font-extrabold text-ink">
              {o.orderName ?? o.orderId}
            </p>
            {o.totalAmount !== undefined && (
              <p className="text-sm font-extrabold text-ink">
                {formatKRW(o.totalAmount)}
              </p>
            )}
          </div>
          <p className="mt-1 text-xs text-ink/50">
            주문번호 {o.orderId}
            {o.method ? ` · ${o.method}` : ""}
            {o.approvedAt
              ? ` · ${new Date(o.approvedAt).toLocaleString("ko-KR")}`
              : ""}
          </p>
          {o.items?.length > 0 && (
            <p className="mt-2 text-xs text-ink/60">
              {o.items.map((i) => `${i.name}(${i.size})×${i.qty}`).join(", ")}
            </p>
          )}
          {o.receiptUrl && (
            <a
              href={o.receiptUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-xs font-bold text-flow underline"
            >
              영수증 보기
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
