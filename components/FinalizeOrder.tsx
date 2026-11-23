"use client";

import { useEffect } from "react";
import { useCart, type CartItem } from "./cart/CartProvider";

/**
 * 결제 승인 성공 페이지에서 실행:
 * 1) 승인된 상품과 수량을 장바구니에서 차감
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
  const { hydrated, items, remove, setQty } = useCart();

  useEffect(() => {
    if (!hydrated) return;

    try {
      const raw = sessionStorage.getItem("fyf-pending-order");
      const pending = raw ? JSON.parse(raw) : null;
      if (pending && pending.orderId !== orderId) return;

      const purchased: CartItem[] = Array.isArray(pending?.items) ? pending.items : [];
      const ordersRaw = localStorage.getItem("fyf-orders");
      const orders = ordersRaw ? JSON.parse(ordersRaw) : [];
      if (!orders.some((o: { orderId: string }) => o.orderId === orderId)) {
        orders.unshift({
          orderId,
          orderName: pending?.orderName,
          items: purchased,
          totalAmount,
          method,
          approvedAt,
          receiptUrl,
        });
        localStorage.setItem("fyf-orders", JSON.stringify(orders));
      }
      if (pending) {
        sessionStorage.removeItem("fyf-pending-order");
        for (const line of purchased) {
          const current = items.find((item) => item.slug === line.slug && item.size === line.size);
          if (!current) continue;
          if (current.qty > line.qty) {
            setQty(line.slug, line.size, current.qty - line.qty);
          } else {
            remove(line.slug, line.size);
          }
        }
      }
    } catch {}
  }, [approvedAt, hydrated, items, method, orderId, receiptUrl, remove, setQty, totalAmount]);

  return null;
}
