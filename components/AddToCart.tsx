"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "./cart/CartProvider";
import type { Product } from "@/lib/products";

export function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const router = useRouter();
  const [size, setSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function buildItem() {
    return {
      slug: product.slug,
      name: product.name,
      nameKo: product.nameKo,
      price: product.price,
      size,
      qty,
      image: product.image,
    };
  }

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-sm font-bold text-ink/60">사이즈</p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`min-w-14 rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                size === s
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/15 bg-white text-ink hover:border-ink/50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-bold text-ink/60">수량</p>
        <div className="inline-flex items-center rounded-full border border-ink/15 bg-white">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-4 py-2.5 text-lg font-bold text-ink/60 hover:text-ink"
            aria-label="수량 줄이기"
          >
            −
          </button>
          <span className="min-w-10 text-center text-sm font-bold text-ink">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            className="px-4 py-2.5 text-lg font-bold text-ink/60 hover:text-ink"
            aria-label="수량 늘리기"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex gap-3 pt-1">
        <button
          type="button"
          onClick={() => {
            add(buildItem());
            setAdded(true);
            setTimeout(() => setAdded(false), 1600);
          }}
          className="flex-1 rounded-full border border-ink bg-transparent py-4 text-sm font-extrabold tracking-widest text-ink transition hover:bg-ink hover:text-paper"
        >
          {added ? "담았습니다 ✓" : "장바구니 담기"}
        </button>
        <button
          type="button"
          onClick={() => {
            add(buildItem());
            router.push("/checkout");
          }}
          className="flex-1 rounded-full bg-ink py-4 text-sm font-extrabold tracking-widest text-paper transition hover:bg-smoke"
        >
          바로 구매
        </button>
      </div>
    </div>
  );
}
