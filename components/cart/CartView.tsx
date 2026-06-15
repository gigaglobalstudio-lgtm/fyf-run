"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { formatKRW } from "@/lib/products";

const FREE_SHIPPING = 50000;
const SHIPPING_FEE = 3000;

export function CartView() {
  const { items, total, hydrated, remove, setQty } = useCart();

  if (!hydrated) {
    return <p className="py-20 text-center text-ink/40">불러오는 중...</p>;
  }

  if (items.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="font-display text-3xl text-ink/20">Empty</p>
        <p className="mt-3 font-semibold text-ink">장바구니가 비어 있습니다.</p>
        <p className="mt-1 text-sm text-ink/50">
          첫 크루, 첫 모자부터 시작해보세요.
        </p>
        <Link
          href="/shop"
          className="mt-7 inline-block rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-smoke"
        >
          쇼핑하러 가기
        </Link>
      </div>
    );
  }

  const shipping = total >= FREE_SHIPPING ? 0 : SHIPPING_FEE;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
      <ul className="divide-y divide-line">
        {items.map((item) => (
          <li key={`${item.slug}-${item.size}`} className="flex gap-4 py-5">
            <Link
              href={`/product/${item.slug}`}
              className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-[#ecebe6]"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </Link>
            <div className="flex flex-1 flex-col">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <p className="text-xs text-ink/50">
                    {item.nameKo} · {item.size}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => remove(item.slug, item.size)}
                  className="text-xs text-ink/40 underline hover:text-ink"
                >
                  삭제
                </button>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <div className="inline-flex items-center rounded-lg border border-line bg-white">
                  <button
                    type="button"
                    onClick={() => setQty(item.slug, item.size, item.qty - 1)}
                    className="px-3 py-1.5 text-ink/60 hover:text-ink"
                    aria-label="수량 줄이기"
                  >
                    −
                  </button>
                  <span className="min-w-8 text-center text-sm font-medium text-ink">
                    {item.qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty(item.slug, item.size, item.qty + 1)}
                    className="px-3 py-1.5 text-ink/60 hover:text-ink"
                    aria-label="수량 늘리기"
                  >
                    +
                  </button>
                </div>
                <p className="text-sm font-semibold text-ink">
                  {formatKRW(item.price * item.qty)}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <aside className="h-fit rounded-2xl border border-line bg-white p-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/40">Summary</p>
        <dl className="mt-4 space-y-2.5 text-sm">
          <div className="flex justify-between">
            <dt className="text-ink/55">상품 금액</dt>
            <dd className="font-medium text-ink">{formatKRW(total)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-ink/55">배송비</dt>
            <dd className="font-medium text-ink">
              {shipping === 0 ? "무료" : formatKRW(shipping)}
            </dd>
          </div>
          {shipping > 0 && (
            <p className="text-xs text-ink/50">
              {formatKRW(FREE_SHIPPING - total)} 더 담으면 무료배송
            </p>
          )}
          <div className="flex justify-between border-t border-line pt-3 text-base">
            <dt className="font-semibold text-ink">총 결제 금액</dt>
            <dd className="font-semibold text-ink">
              {formatKRW(total + shipping)}
            </dd>
          </div>
        </dl>
        <Link
          href="/checkout"
          className="mt-6 block rounded-full bg-ink py-4 text-center text-sm font-semibold text-paper transition hover:bg-smoke"
        >
          결제하기
        </Link>
        <Link
          href="/shop"
          className="mt-2 block py-2 text-center text-xs text-ink/50 underline hover:text-ink"
        >
          계속 쇼핑하기
        </Link>
      </aside>
    </div>
  );
}
