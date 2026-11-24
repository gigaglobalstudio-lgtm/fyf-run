import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MvPlayer } from "@/components/MvPlayer";
import { editions, film, shorts, sketch } from "@/lib/culture-run";
import { ToteLook } from "@/components/ProjectGoods";
import styles from "@/components/project.module.css";

export const metadata: Metadata = {
  title: "순천 문화런 영상·포스터 | FYF 벙커버스",
  description: "순천 남문터광장과 동천에서 열린 첫 문화런의 현장 스케치, 홍보영상, 회차별 공식 포스터와 5K·10K 코스 안내.",
  openGraph: { title: "순천 문화런 | FYF 벙커버스", description: "남문터광장에서 출발하는 문화런의 영상, 포스터와 굿즈.", url: "/club/culture-run", images: [sketch.poster] },
};

const posterLink = "inline-flex items-center gap-2 py-2 text-sm font-semibold text-paper underline decoration-paper/30 underline-offset-4 transition hover:decoration-paper";

export default function CultureRunPage() {
  return (
    <article className="bg-ink text-paper">
      <header className="mx-auto max-w-7xl px-5 pb-10 pt-12 md:pb-14 md:pt-16">
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-paper/75">
          <Link href="/#project" className="hover:text-paper">← 벙커버스 프로젝트</Link>
          <Link href="/club" className="hover:text-paper">FYF 러닝 클럽</Link>
        </div>
        <h1 className="font-display mt-7 text-5xl leading-tight md:text-7xl">순천 문화런</h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-paper/75">
          남문터광장 FYF 러닝카페에서 출발해 동천을 따라 달립니다. 현장 영상과 회차별 5K·10K 코스를 확인하세요.
        </p>
        <a href="#culture-goods" className="mt-4 inline-block text-sm text-paper/85 underline underline-offset-4">문화런 굿즈 보기 ↓</a>
      </header>

      <section aria-label="문화런 영상" className="mx-auto grid max-w-7xl gap-5 px-5 pb-14 md:grid-cols-2 md:pb-20">
        <MvPlayer {...sketch} />
        <MvPlayer {...film} />
      </section>

      <section aria-labelledby="shorts-title" className="border-t border-darkline">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:gap-12 md:py-16">
          <div>
            <h2 id="shorts-title" className="font-display text-3xl md:text-4xl">숏츠 홍보</h2>
            <p className="mt-4 max-w-md leading-relaxed text-paper/75">
              2회차 문화런을 알리는 세로 숏츠 두 편입니다.
            </p>
            <time dateTime={editions[0].iso} className="mt-3 block text-sm font-medium text-paper/65">{editions[0].date}</time>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {shorts.map((short) => (
              <figure key={short.src}>
                <video
                  aria-label={`문화런 홍보 숏츠 — ${short.title}`}
                  src={short.src}
                  poster={short.poster}
                  width={720}
                  height={1280}
                  controls
                  playsInline
                  preload="none"
                  className="block aspect-[9/16] w-full rounded-2xl border border-darkline bg-coal object-cover"
                />
                <figcaption className="mt-3">
                  <h3 className="text-base font-semibold">{short.title}</h3>
                  <p className="mt-0.5 text-sm text-paper/60">{short.sub}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {editions.map((edition) => (
        <section key={edition.code} aria-labelledby={edition.code} className="border-t border-darkline">
          <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 id={edition.code} className="font-display text-3xl md:text-4xl">{edition.name} 포스터</h2>
              <time dateTime={edition.iso} className="text-sm font-medium text-paper/65">{edition.date}</time>
            </div>
            <div className="mt-6 grid gap-7 sm:grid-cols-2">
              <figure>
                <video
                  aria-label={`${edition.name} 문화런 영상 포스터`}
                  src={edition.motion}
                  poster={edition.cover}
                  width={864}
                  height={1080}
                  controls
                  playsInline
                  preload="none"
                  className="block aspect-[4/5] w-full rounded-2xl border border-darkline bg-coal object-contain"
                />
                <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold">영상 포스터 <span className="text-sm font-normal text-paper/60">· 12초</span></h3>
                  <a className={posterLink} href={edition.poster} aria-label={`${edition.name} 공식 포스터 원본 보기`}>공식 포스터 원본 보기 <span aria-hidden="true">↗</span></a>
                </figcaption>
              </figure>
              <figure>
                <a href={edition.course} className="block rounded-2xl">
                  <Image
                    src={edition.course}
                    alt={`${edition.name} 문화런 5K·10K 코스 지도. 남문터광장 FYF 러닝카페 출발·도착, 동천 방향. 원본 크게 보기`}
                    width={864}
                    height={1080}
                    sizes="(min-width: 1280px) 605px, (min-width: 640px) 48vw, 100vw"
                    className="aspect-[4/5] w-full rounded-2xl border border-darkline bg-coal object-contain"
                  />
                </a>
                <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold">5K·10K 코스 안내</h3>
                  <a className={posterLink} href={edition.course} aria-label={`${edition.name} 코스 지도 원본 보기`}>코스 지도 원본 보기 <span aria-hidden="true">↗</span></a>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      ))}
      <section id="culture-goods" aria-labelledby="culture-goods-title" className={styles.publication}>
        <div className={styles.eventGoods}>
          <div className={styles.fieldCopy}>
            <p className={styles.kicker} lang="en">Culture Run Goods</p>
            <h2 id="culture-goods-title">손에 든 문화런</h2>
            <p>에코백 밑단에서 파란 모자를 쓴 카티보가 얼굴을 내밉니다. 문화런 그래픽을 담은 반팔과 틔키피 키링도 굿즈 숍에서 만날 수 있습니다.</p>
            <Link className={styles.textLink} href="/shop#culture-run">문화런 굿즈 전체 보기 <span aria-hidden="true">→</span></Link>
          </div>
          <ToteLook />
        </div>
      </section>
    </article>
  );
}
