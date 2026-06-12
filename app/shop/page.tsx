import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "SHOP — FYF",
  description: "FYF 퍼포먼스 컬렉션 전체 상품",
};

export default function ShopPage() {
  return (
    <div className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <p className="font-display text-sm tracking-[0.25em] text-flow">
          ALL PRODUCTS
        </p>
        <h1 className="font-display mt-2 text-5xl md:text-6xl">SHOP</h1>
        <p className="mt-3 text-sm text-ink/60">
          시즌 1 — 퍼포먼스 컬렉션. 5만원 이상 무료배송.
        </p>

        <div
          id="cap"
          className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4"
        >
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
