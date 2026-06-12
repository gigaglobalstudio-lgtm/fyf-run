"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export function CartButton() {
  const { count, hydrated } = useCart();

  return (
    <Link
      href="/cart"
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/10"
      aria-label="장바구니"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M6 7h12l-1 13H7L6 7z" strokeLinejoin="round" />
        <path d="M9 7a3 3 0 1 1 6 0" strokeLinecap="round" />
      </svg>
      {hydrated && count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-flow px-1 text-[10px] font-bold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
