import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AddToCart } from "@/components/AddToCart";
import { ProductCard } from "@/components/ProductCard";
import { EcgLine } from "@/components/EcgLogo";
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
      <div className="mx-auto max-w-7xl px-5 py-12">
        <nav className="text-xs text-ink/50">
          <Link href="/" className="hover:text-ink">
            HOME
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-ink">
            SHOP
          </Link>
          <span className="mx-2">/</span>
          <span className="font-bold text-ink">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-[#ecebe6]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {product.badge && (
              <span
                className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold tracking-wider text-white ${
                  product.badge === "BEST" ? "bg-ink" : "bg-flow"
                }`}
              >
                {product.badge}
              </span>
            )}
          </div>

          <div>
            <p className="text-sm font-bold text-ink/50">
              {product.categoryKo} · {product.color}
            </p>
            <h1 className="font-display mt-2 text-4xl leading-tight md:text-5xl">
              {product.name.toUpperCase()}
            </h1>
            <p className="mt-1 text-lg font-bold text-ink/60">
              {product.nameKo} — {product.tagline}
            </p>

            <p className="mt-5 flex items-baseline gap-3">
              <span className="text-3xl font-extrabold">
                {formatKRW(product.price)}
              </span>
              <span className="text-lg text-ink/40 line-through">
                {formatKRW(product.listPrice)}
              </span>
              <span className="text-lg font-extrabold text-flow">
                {discount}%
              </span>
            </p>

            <p className="mt-5 max-w-lg leading-relaxed text-ink/70">
              {product.description}
            </p>

            <div className="mt-8">
              <AddToCart product={product} />
            </div>

            <div className="mt-10 rounded-2xl border border-line bg-white p-6">
              <p className="flex items-center gap-3 text-sm font-extrabold">
                <EcgLine className="h-4 w-12 text-flow" /> DETAILS
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink/70">
                {product.details.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="text-flow">—</span>
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-ink/50">
                배송: 결제 후 1–3 영업일 내 출고 · 5만원 이상 무료배송 ·
                교환/반품: 수령 후 7일 이내 (착용·세탁 전)
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="font-display text-3xl">YOU MAY ALSO RUN WITH</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {others.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
