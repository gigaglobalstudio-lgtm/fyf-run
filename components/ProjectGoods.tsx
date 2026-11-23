import Image from "next/image";
import Link from "next/link";
import { getPhotoListing, photoCard } from "@/lib/photo-catalog";
import { formatKRW } from "@/lib/products";
import styles from "./project.module.css";

export function ToteLook() {
  const listing = getPhotoListing("cattivo-face-tote")!;
  const tote = photoCard(listing);

  return (
    <Link href={`/product/${tote.slug}`} className={styles.toteLook} aria-label={tote.nameKo + " 상세 보기"}>
      <figure>
        <div className={styles.totePhoto}>
          <Image src={tote.image} width={1000} height={1000} unoptimized alt={listing.gallery![0].alt} />
          <span className={styles.credit}>AI 모델 착용컷</span>
        </div>
        <figcaption className={styles.toteCaption}>
          <span>{tote.nameKo}</span>
          <span>{tote.price != null && formatKRW(tote.price)} <span aria-hidden="true">↗</span></span>
        </figcaption>
      </figure>
    </Link>
  );
}

const picks = [
  "culture-run-graphic-tee", "pulse-mesh-hood-zip",
  "tteukipi-round-keyring", "tteukipi-running-keyring",
];

export function ProjectGoods() {
  return (
    <section id="collection" className={styles.section} aria-labelledby="collection-title">
      <div className={styles.sectionHeading}>
        <div>
          <p className={styles.kicker} lang="en">Project Goods</p>
          <h2 id="collection-title">문화런 컬렉션</h2>
        </div>
        <Link href="/shop" className={styles.textLink}>굿즈 전체 보기 <span aria-hidden="true">→</span></Link>
      </div>
      <div className={styles.goodsSpread}>
        <ToteLook />
        <div className={styles.goodsPicks}>
          {picks.map((slug) => {
            const listing = getPhotoListing(slug)!;
            const card = photoCard(listing);
            const title = card.nameKo.split(" · ")[0];
            return (
              <Link href={`/product/${card.slug}`} key={card.slug} className={styles.pick} aria-label={card.nameKo + " 상세 보기"}>
                <div className={styles.pickPhoto}>
                  <Image src={listing.directory + "/gallery/01-product.jpg"} width={1000} height={1000}
                    sizes="(max-width: 700px) 44vw, 23vw" alt={card.nameKo} />
                </div>
                <h3>{title}</h3>
                {card.price != null && <p>{formatKRW(card.price)}</p>}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
