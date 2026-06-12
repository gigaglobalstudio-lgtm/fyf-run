"use client";

import { useEffect } from "react";
import { useCart } from "./cart/CartProvider";

/**
 * 결제 승인 성공 페이지에서 실행:
 * 1) 장바구니 비우기
 * 2) 보류 중이던 주문 스냅샷을 로컬 주문 내역(fyf-orders)으로 이동
 */
export function FinalizeOrder({
  orderId,
  approvedAt,
  totalAmount,
  method,
  receiptUrl,
}: {
  orderId: string;
  approvedAt?: string;
  totalAmount?: number;
  method?: string;
  receiptUrl?: string;
}) {
  const { clear } = useCart();

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("fyf-pending-order");
      const pending = raw ? JSON.parse(raw) : null;

      if (!pending || pending.orderId === orderId) {
        const ordersRaw = localStorage.getItem("fyf-orders");
        const orders = ordersRaw ? JSON.parse(ordersRaw) : [];
        if (
          !orders.some((o: { orderId: string }) => o.orderId === orderId)
        ) {
          orders.unshift({
            orderId,
            orderName: pending?.orderName,
            items: pending?.items ?? [],
            totalAmount,
            method,
            approvedAt,
            receiptUrl,
          });
          localStorage.setItem("fyf-orders", JSON.stringify(orders));
        }
        sessionStorage.removeItem("fyf-pending-order");
        clear();
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId]);

  return null;
}
