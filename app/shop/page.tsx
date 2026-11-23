import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { PHOTO_LISTINGS, getPhotoListing, photoCard, photoCover } from "@/lib/photo-catalog";
import styles from "@/components/project.module.css";

const title = "프로젝트 굿즈 숍 | FYF 벙커버스";
const description = "순천 문화런의 에코백과 러닝웨어, 벙커버스와 틔키피 캐릭터 굿즈를 만나보세요.";
export const metadata: Metadata = {
  title, description,
  openGraph: { title, description, url: "/shop", images: [photoCover(getPhotoListing("cattivo-face-tote")!)] },
};

const groups = [
  { id: "culture-run", title: "문화런 굿즈" },
  { id: "running-wear", title: "러닝웨어" },
  { id: "running-gear", title: "러닝 액세서리" },
].map((group) => {
  const items = PHOTO_LISTINGS.filter((p) => p.categoryKo === group.title).map(photoCard);
  if (group.id === "culture-run") {
    items.sort((a, b) => Number(b.slug === "cattivo-face-tote") - Number(a.slug === "cattivo-face-tote"));
  }
  return { ...group, items };
});
groups.push({
  id: "cap", title: "퍼포먼스 컬렉션",
  items: PRODUCTS.filter((p) => !getPhotoListing(p.slug)),
});

export default function ShopPage() {
  return (
    <div className={styles.publication}>
      <div className={styles.container}>
        <header className={styles.shopIntro}>
          <div>
            <p className={styles.kicker}><span aria-hidden="true" className={styles.mark} /> FYF Bunker-Verse</p>
            <h1 className={styles.shopTitle}>굿즈 <em lang="en">Shop</em></h1>
          </div>
          <div className={styles.shopDeck}>
            <p>문화런의 에코백과 반팔 티셔츠, 스포츠 쿨타월부터 순천문화재단 틔키피의 키링과 손거울까지 한곳에서 만나보세요.</p>
            <Link href="/#project" className={styles.textLink}>프로젝트 소개 <span aria-hidden="true">↗</span></Link>
          </div>
        </header>

        <nav aria-label="상품 분류" className={styles.categoryNav}>
          {groups.map((group) => (
            <a key={group.id} href={"#" + group.id}>{group.title} <span aria-hidden="true">↓</span></a>
          ))}
        </nav>
        {groups.map((group) => (
          <section key={group.id} id={group.id} aria-labelledby={group.id + "-title"} className={styles.catalogGroup}>
            <div className={styles.catalogHeading}>
              <h2 id={group.id + "-title"}>{group.title}</h2>
              <span>{group.items.length}개 상품</span>
            </div>
            <div className={styles.catalogGrid}>
              {group.items.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
