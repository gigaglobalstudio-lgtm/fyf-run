import Image from "next/image";
import Link from "next/link";
import { formatKRW } from "@/lib/products";
import type { ShopCardItem } from "@/lib/photo-catalog";

export function ProductCard({ product }: { product: ShopCardItem }) {
  const { price, listPrice } = product;
  const discount = price != null && listPrice != null && listPrice > price
    ? Math.round((1 - price / listPrice) * 100) : undefined;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
      aria-label={`${product.nameKo} 상세 보기`}
    >
      <div className="relative aspect-[3/4] overflow-hidden border border-[#e1ded5] bg-white">
        <Image
          src={product.image}
          alt={`${product.nameKo} · ${product.color}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-paper backdrop-blur">
            {product.badge === "BEST" ? "Best" : "New"}
          </span>
        )}
      </div>
      <div className="mt-3.5 space-y-1">
        <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-ink underline-offset-4 group-hover:underline">
          {product.nameKo}
        </h3>
        <p className="text-xs font-medium text-[#595951]">{product.name} · {product.color}</p>
        <p className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 pt-0.5">
          <span className="text-[15px] font-semibold text-ink">
            {price == null ? "판매 준비 중" : formatKRW(price)}
          </span>
          {product.priceUnit && <span className="text-xs text-ink/60">{product.priceUnit} 기준</span>}
          {discount != null && listPrice != null && <>
            <span className="text-[13px] text-ink/35 line-through">{formatKRW(listPrice)}</span>
            <span className="text-[13px] font-medium text-ink/40">−{discount}%</span>
          </>}
        </p>
      </div>
    </Link>
  );
}
