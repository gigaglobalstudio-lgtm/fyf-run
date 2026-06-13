import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AddToCart } from "@/components/AddToCart";
import { ProductCard } from "@/components/ProductCard";
import { ProductStory } from "@/components/ProductStory";
import { PulseEditorial } from "@/components/PulseEditorial";
import { StickyBuyBar } from "@/components/StickyBuyBar";
import { PRODUCTS, formatKRW, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "FYF" };
  return {
    title: `${product.name} — FYF`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const discount = Math.round(
    ((product.listPrice - product.price) / product.listPrice) * 100
  );
  const others = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div className="bg-paper text-ink">
      {/* ── 구매 영역 ── */}
      <div id="buy-area" className="mx-auto max-w-7xl scroll-mt-20 px-5 pt-10">
        <nav className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40">
          <Link href="/" className="transition hover:text-ink">
            Home
          </Link>
          <span className="mx-2 text-ink/20">/</span>
          <Link href="/shop" className="transition hover:text-ink">
            Shop
          </Link>
          <span className="mx-2 text-ink/20">/</span>
          <span className="text-ink/70">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-12 pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          {/* 이미지 */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#ecebe6]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
            {product.badge && (
              <span
                className={`absolute left-5 top-5 rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-[0.15em] text-white ${
                  product.badge === "BEST" ? "bg-ink" : "bg-flow"
                }`}
              >
                {product.badge}
              </span>
            )}
          </div>

          {/* 정보 (스티키) */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/40">
              {product.categoryKo} · {product.color}
            </p>
            <h1 className="font-display mt-3 text-4xl leading-[1.05] md:text-5xl">
              {product.name.toUpperCase()}
            </h1>
            <p className="mt-2 text-base font-bold text-ink/55">
              {product.nameKo} — {product.tagline}
            </p>

            <div className="mt-7 flex items-baseline gap-3 border-t border-ink/10 pt-7">
              <span className="text-3xl font-extrabold tracking-tight">
                {formatKRW(product.price)}
              </span>
              <span className="text-base text-ink/35 line-through">
                {formatKRW(product.listPrice)}
              </span>
              <span className="text-base font-extrabold text-flow">
                {discount}%
              </span>
            </div>

            <p className="mt-5 max-w-md leading-relaxed text-ink/60">
              {product.description}
            </p>

            <div className="mt-8">
              <AddToCart product={product} />
            </div>

            <p className="mt-5 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-ink/35">
              5만원 이상 무료배송 · 1–3일 내 출고 · 7일 무료 교환
            </p>

            <ul className="mt-8 border-t border-ink/10">
              {product.details.map((d) => (
                <li
                  key={d}
                  className="flex gap-3 border-b border-ink/10 py-3 text-sm text-ink/65"
                >
                  <span className="text-flow">—</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── 상세 (룩북형 or 기본 에디토리얼) ── */}
      {product.editorial ? (
        <PulseEditorial product={product} />
      ) : (
        <ProductStory product={product} />
      )}

      {/* ── 연관 상품 ── */}
      <div className="mx-auto max-w-7xl px-5 pb-28 pt-4">
        <div className="flex items-center gap-6 border-t border-ink/10 pt-12">
          <h2 className="font-display text-2xl md:text-3xl">
            YOU MAY ALSO RUN WITH
          </h2>
          <div className="h-px flex-1 bg-ink/10" />
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
          {others.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>

      <StickyBuyBar product={product} />
    </div>
  );
}
