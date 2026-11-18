import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MvPlayer } from "@/components/MvPlayer";
import { editions, film, sketch } from "@/lib/culture-run";

export const metadata: Metadata = {
  title: "순천 문화런 영상·포스터 | FYF RUN CLUB",
  description: "순천 남문터광장과 동천에서 열린 첫 문화런의 현장 스케치, 홍보영상, 회차별 공식 포스터와 5K·10K 코스 안내.",
};

const posterLink = "inline-flex items-center gap-2 py-2 text-sm font-semibold text-paper underline decoration-paper/30 underline-offset-4 transition hover:decoration-paper";

export default function CultureRunPage() {
  return (
    <article className="bg-ink text-paper">
      <header className="mx-auto max-w-7xl px-5 pb-10 pt-12 md:pb-14 md:pt-16">
        <Link href="/club" className="text-sm font-medium text-paper/65 hover:text-paper">← FYF RUN CLUB</Link>
        <h1 className="font-display mt-7 text-5xl leading-tight md:text-7xl">순천 문화런</h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-paper/75">
          남문터광장 FYF 러닝카페에서 출발해 동천을 따라 달립니다. 현장 영상과 회차별 5K·10K 코스를 확인하세요.
        </p>
      </header>

      <section aria-label="문화런 영상" className="mx-auto grid max-w-7xl gap-5 px-5 pb-14 md:grid-cols-2 md:pb-20">
        <MvPlayer {...sketch} />
        <MvPlayer {...film} />
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
    </article>
  );
}
