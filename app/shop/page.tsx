import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { PHOTO_LISTINGS, getPhotoListing, photoCard } from "@/lib/photo-catalog";

export const metadata: Metadata = {
  title: "SHOP — FYF",
  description: "FYF 러닝웨어, 러닝 액세서리, 문화런 굿즈와 퍼포먼스 컬렉션을 만나보세요.",
};

const groups = [
  { id: "running-wear", title: "러닝웨어" },
  { id: "running-gear", title: "러닝 액세서리" },
  { id: "culture-run", title: "문화런 굿즈" },
].map((group) => ({
  ...group,
  items: PHOTO_LISTINGS.filter((p) => p.categoryKo === group.title).map(photoCard),
}));
groups.push({
  id: "cap", title: "퍼포먼스 컬렉션",
  items: PRODUCTS.filter((p) => !getPhotoListing(p.slug)),
});

export default function ShopPage() {
  return (
    <div className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/40">
          All Products
        </p>
        <h1 className="font-display mt-3 text-5xl md:text-6xl">Shop</h1>
        <nav aria-label="상품 분류" className="mt-6 flex flex-wrap gap-2">
          {groups.map((group) => (
            <a key={group.id} href={"#" + group.id} className="rounded-full border border-ink/20 px-3.5 py-2 text-sm font-medium hover:border-ink hover:bg-white">
              {group.title}
            </a>
          ))}
        </nav>
        {groups.map((group) => (
          <section key={group.id} id={group.id} aria-labelledby={group.id + "-title"} className="mt-12 scroll-mt-24">
            <h2 id={group.id + "-title"} className="border-t border-ink/15 pt-6 text-2xl font-semibold tracking-tight">{group.title}</h2>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
              {group.items.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
