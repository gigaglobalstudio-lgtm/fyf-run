"use client";

import { useEffect, useState } from "react";
import { formatKRW, type Product } from "@/lib/products";

/** 구매 영역이 화면에서 벗어나면 하단에 나타나는 슬림 구매 바 */
export function StickyBuyBar({ product }: { product: Product }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("buy-area");
    if (!sentinel) return;
    const io = new IntersectionObserver(
      ([e]) => setShow(!e.isIntersecting && e.boundingClientRect.top < 0),
      { threshold: 0 }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="border-t border-ink/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-extrabold tracking-wide text-ink">
              {product.name}
            </p>
            <p className="text-xs text-ink/50">
              {product.nameKo} · {formatKRW(product.price)}
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("buy-area")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="shrink-0 rounded-full bg-ink px-7 py-3 text-sm font-extrabold tracking-wide text-paper transition hover:bg-smoke"
          >
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}
