import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { AddToCart } from "@/components/AddToCart";
import { ProductCard } from "@/components/ProductCard";
import { ProductStory } from "@/components/ProductStory";
import { PhotoDetails } from "@/components/PhotoDetails";
import { PhotoGallery } from "@/components/PhotoGallery";
import { PulseEditorial } from "@/components/PulseEditorial";
import { StickyBuyBar } from "@/components/StickyBuyBar";
import { Stars } from "@/components/Stars";
import { Reviews } from "@/components/Reviews";
import { PRODUCTS, formatKRW, getProduct } from "@/lib/products";
import { PHOTO_LISTINGS, catalogSlugs, getPhotoListing, photoCard, photoCover, photoPurchaseItem } from "@/lib/photo-catalog";
import { getReviews } from "@/lib/reviews";

export function generateStaticParams() {
  return catalogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const photo = getPhotoListing(slug);
  if (photo) {
    const url = "https://fyf-run.vercel.app/product/" + photo.slug;
    const title = photo.nameKo + " — FYF";
    const cover = photoCover(photo);
    return {
      title, description: photo.description, alternates: { canonical: url },
      openGraph: { title, description: photo.description, url, images: [{ ...cover, url: "https://fyf-run.vercel.app" + cover.url, alt: photo.nameKo }] },
    };
  }
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
  const photo = getPhotoListing(slug);
  if (photo && photo.slug !== slug) permanentRedirect("/product/" + photo.slug);
  const product = getProduct(slug);
  const display = photo ? photoCard(photo) : product;
  if (!display) notFound();

  const purchase = product ?? (photo && photoPurchaseItem(photo));
  const { price, listPrice } = display;
  const discount = price != null && listPrice != null && listPrice > price
    ? Math.round((1 - price / listPrice) * 100) : undefined;
  const others = photo
    ? PHOTO_LISTINGS.filter((p) => p.slug !== slug && p.categoryKo === photo.categoryKo).slice(0, 4).map(photoCard)
    : PRODUCTS.filter((p) => p.slug !== slug).slice(0, 4);
  const reviews = getReviews(slug);

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
          <span className="text-ink/70">{display.nameKo}</span>
        </nav>

        <div className="mt-8 grid gap-12 pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          {/* 이미지 */}
          {photo?.gallery?.length ? (
            <PhotoGallery key={photo.slug} directory={photo.directory} images={photo.gallery} name={photo.nameKo}
              badge={display.badge === "BEST" ? "Best" : display.badge ? "New" : undefined} />
          ) : <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#ecebe6]">
            <Image
              src={display.image}
              alt={display.nameKo + " · " + display.color}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
            {display.badge && (
              <span className="absolute left-5 top-5 rounded-full bg-ink/85 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-paper backdrop-blur">
                {display.badge === "BEST" ? "Best" : "New"}
              </span>
            )}
          </div>}

          {/* 정보 (스티키) */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/40">
              {display.categoryKo} · {display.color}
            </p>
            <h1 className="font-display mt-4 text-[2.5rem] leading-[1.04] md:text-5xl">
              {display.name}
            </h1>
            <p className="mt-2.5 text-[15px] font-medium text-ink/50">
              {display.nameKo} — {photo?.tagline ?? product?.tagline}
            </p>

            {reviews && (
              <a
                href="#reviews"
                className="mt-3.5 inline-flex items-center gap-2 text-ink"
              >
                <Stars rating={reviews.avg} size={15} />
                <span className="text-sm font-semibold">
                  {reviews.avg.toFixed(1)}
                </span>
                <span className="text-sm text-ink/45 underline underline-offset-2">
                  후기 {reviews.count.toLocaleString("ko-KR")}
                </span>
              </a>
            )}

            <div className="mt-8 flex flex-wrap items-baseline gap-3 border-t border-ink/10 pt-8">
              {price != null ? (
                <>
                  <span className="text-[28px] font-semibold tracking-tight">{formatKRW(price)}</span>
                  {photo?.priceUnit && <span className="text-sm text-ink/60">{photo.priceUnit} 기준</span>}
                  {discount != null && listPrice != null && (
                    <>
                      <span className="text-sm text-ink/30 line-through">{formatKRW(listPrice)}</span>
                      <span className="text-sm font-medium text-ink/40">−{discount}%</span>
                    </>
                  )}
                </>
              ) : <span className="font-semibold">판매 준비 중</span>}
            </div>

            <p className="mt-5 max-w-md leading-relaxed text-ink/55">
              {photo?.description ?? product?.description}
            </p>

            {purchase ? (
              <div className="mt-8">
                <AddToCart key={purchase.slug} product={purchase} />
                <p className="mt-5 text-center text-xs tracking-wide text-ink/45">
                  {product ? "5만원 이상 무료배송 · 1–3일 내 출고 · 7일 무료 교환" : "5만원 이상 무료배송"}
                </p>
              </div>
            ) : (
              <div className="mt-7">
                {price != null && <p className="mb-3 text-sm text-ink/65">판매 사이즈 확인 중</p>}
                <a href="#detail" className="inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper hover:bg-smoke">상품 상세 보기</a>
              </div>
            )}

            {photo ? (
              <dl className="mt-8 border-t border-ink/10">
                {photo.facts.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[6rem_1fr] gap-3 border-b border-ink/10 py-3 text-sm">
                    <dt className="text-ink/55">{label}</dt><dd className="font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            ) : <ul className="mt-8 border-t border-ink/10">
              {product?.details.map((d) => (
                <li
                  key={d}
                  className="flex gap-3 border-b border-ink/10 py-3 text-sm text-ink/60"
                >
                  <span className="text-ink/25">—</span>
                  {d}
                </li>
              ))}
            </ul>}
          </div>
        </div>
      </div>

      {/* ── 상세 (룩북형 or 기본 에디토리얼) ── */}
      {photo ? (
        <PhotoDetails listing={photo} />
      ) : product?.editorial ? (
        <PulseEditorial product={product} />
      ) : product ? (
        <ProductStory product={product} />
      ) : null}
      {photo && product && (
        <details className="mx-auto max-w-3xl border-y border-ink/15 px-5 py-5">
          <summary className="cursor-pointer font-semibold">판매 사이즈 및 상품 사양</summary>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">{display.nameKo} 사이즈표</caption>
              <thead><tr>{product.sizeChart.cols.map((col) => <th key={col} scope="col" className="p-2">{col}</th>)}</tr></thead>
              <tbody>{product.sizeChart.rows.map((row) => <tr key={row[0]} className="border-t border-ink/10">{row.map((cell, i) => <td key={i} className="whitespace-nowrap p-2">{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
          <dl className="mt-5">{product.specs.map(([k, v]) => <div key={k} className="flex gap-4 border-t border-ink/10 py-2 text-sm"><dt className="w-16 shrink-0 text-ink/60">{k}</dt><dd>{v}</dd></div>)}</dl>
        </details>
      )}

      {/* ── 후기 ── */}
      <Reviews slug={slug} />

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

      {purchase && <StickyBuyBar product={purchase} />}
    </div>
  );
}
