import Image from "next/image";
import Link from "next/link";
import { formatKRW, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const discount = Math.round(
    ((product.listPrice - product.price) / product.listPrice) * 100
  );

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
      aria-label={`${product.name} 상세 보기`}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#ecebe6]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wider text-white ${
              product.badge === "BEST" ? "bg-ink" : "bg-flow"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-[13px] font-medium text-ink/50">
          {product.categoryKo} · {product.color}
        </p>
        <h3 className="text-[15px] font-bold leading-snug text-ink">
          {product.name}
          <span className="ml-2 font-medium text-ink/60">{product.nameKo}</span>
        </h3>
        <p className="flex items-baseline gap-2">
          <span className="text-base font-extrabold text-ink">
            {formatKRW(product.price)}
          </span>
          <span className="text-[13px] text-ink/40 line-through">
            {formatKRW(product.listPrice)}
          </span>
          <span className="text-[13px] font-bold text-flow">{discount}%</span>
        </p>
      </div>
    </Link>
  );
}
