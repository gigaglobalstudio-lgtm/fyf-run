import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";

export const metadata: Metadata = {
  title: "장바구니 — FYF",
};

export default function CartPage() {
  return (
    <div className="bg-paper text-ink">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <h1 className="font-display text-5xl">CART</h1>
        <p className="mt-2 text-sm text-ink/60">장바구니</p>
        <div className="mt-10">
          <CartView />
        </div>
      </div>
    </div>
  );
}
