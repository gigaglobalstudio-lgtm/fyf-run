import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/Marquee";
import { ProductCard } from "@/components/ProductCard";
import { EcgLine } from "@/components/EcgLogo";
import { PRODUCTS, CREW, formatKRW, getProduct } from "@/lib/products";

export default function Home() {
  const cap = getProduct("fyf-performance-cap")!;

  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden">
        <Image
          src="/hero/hero-night-crew.png"
          alt="밤의 도시를 달리는 FYF 크루"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40">
          <EcgLine className="h-6 w-40 text-flow" animate />
          <h1 className="font-display mt-4 text-[13vw] leading-[0.92] tracking-tight md:text-[8.5rem]">
            DON&apos;T FOLLOW.
            <br />
            <span className="text-flow">FIND YOUR FLOW.</span>
          </h1>
          <p className="mt-5 max-w-md text-base font-medium text-paper/80 md:text-lg">
            따라가지 마. 네 리듬을 찾아. <br className="sm:hidden" />
            순천의 밤에서 시작한 러닝 컬처 — FYF.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="rounded-2xl bg-paper px-7 py-4 text-sm font-extrabold tracking-wide text-ink transition hover:bg-white"
            >
              컬렉션 보기
            </Link>
            <Link
              href="/world"
              className="rounded-2xl border border-paper/40 px-7 py-4 text-sm font-extrabold tracking-wide text-paper backdrop-blur transition hover:border-paper hover:bg-white/10"
            >
              BUNKER-VERSE →
            </Link>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ── FEATURED: PERFORMANCE CAP ────────────── */}
      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#ecebe6]">
            <Image
              src={cap.image}
              alt={cap.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1.5 text-xs font-bold tracking-wider text-paper">
              BEST
            </span>
          </div>
          <div>
            <p className="font-display text-sm tracking-[0.25em] text-flow">
              FIRST CREW, FIRST CAP
            </p>
            <h2 className="font-display mt-3 text-5xl leading-none md:text-6xl">
              PERFORMANCE
              <br />
              CAP
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink/70">
              {cap.description}
            </p>
            <p className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-extrabold">
                {formatKRW(cap.price)}
              </span>
              <span className="text-lg text-ink/40 line-through">
                {formatKRW(cap.listPrice)}
              </span>
            </p>
            <div className="mt-7 flex gap-3">
              <Link
                href={`/product/${cap.slug}`}
                className="rounded-2xl bg-ink px-7 py-4 text-sm font-extrabold text-paper transition hover:bg-smoke"
              >
                자세히 보기
              </Link>
              <Link
                href="/shop"
                className="rounded-2xl border-2 border-ink px-7 py-4 text-sm font-extrabold text-ink transition hover:bg-ink hover:text-paper"
              >
                전체 컬렉션
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLECTION GRID ──────────────────────── */}
      <section id="collection" className="border-t border-line bg-paper text-ink">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-display text-sm tracking-[0.25em] text-ink/40">
                SEASON 01
              </p>
              <h2 className="font-display mt-2 text-4xl md:text-5xl">
                PERFORMANCE COLLECTION
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden text-sm font-bold text-ink underline underline-offset-4 hover:text-flow sm:block"
            >
              전체 보기 →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {PRODUCTS.slice(0, 4).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── LOOKBOOK / EDITORIAL ─────────────────── */}
      <section className="relative overflow-hidden bg-ink">
        <div className="mx-auto grid max-w-7xl items-stretch gap-0 md:grid-cols-2">
          <div className="relative aspect-[3/4] md:aspect-auto">
            <Image
              src="/hero/cap-worn.png"
              alt="FYF 퍼포먼스 캡을 쓴 러너"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-20 md:px-14">
            <p className="font-display text-sm tracking-[0.25em] text-volt">
              NIGHT RUN, SUNCHEON
            </p>
            <h2 className="font-display mt-4 text-5xl leading-[0.95] md:text-6xl">
              평균은
              <br />
              너를 모른다
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-paper/70">
              페이스 차트, 평균 기록, 남들의 기준. 메트로놈 시스템은 모두를
              같은 박자로 뛰게 만든다. FYF는 반대로 간다 — 네 심박이 곧 네
              리듬이다.
            </p>
            <Link
              href="/world"
              className="mt-8 w-fit rounded-2xl border border-paper/30 px-7 py-4 text-sm font-extrabold text-paper transition hover:border-paper hover:bg-white/10"
            >
              세계관 읽기
            </Link>
          </div>
        </div>
      </section>

      {/* ── CREW ─────────────────────────────────── */}
      <section className="border-t border-darkline bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="font-display text-sm tracking-[0.25em] text-flow">
            BUNKER-VERSE CREW
          </p>
          <h2 className="font-display mt-2 text-4xl md:text-5xl">
            낮에는 카페, 밤에는 벙커
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CREW.map((c) => (
              <Link
                key={c.en}
                href="/world#crew"
                className="group rounded-3xl border border-darkline bg-coal p-6 transition hover:-translate-y-1 hover:border-paper/30"
              >
                <div
                  className="h-1.5 w-12 rounded-full"
                  style={{ backgroundColor: c.color }}
                />
                <p className="font-display mt-5 text-3xl tracking-wide">
                  {c.en}
                </p>
                <p className="mt-1 text-sm font-bold text-paper/60">
                  {c.name} — {c.role}
                </p>
                <p
                  className="mt-4 text-lg font-extrabold"
                  style={{ color: c.color }}
                >
                  “{c.quote}”
                </p>
                <p className="mt-3 text-xs leading-relaxed text-paper/50">
                  {c.ability} · {c.abilityDesc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────── */}
      <section className="border-t border-darkline bg-ink">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 text-center sm:grid-cols-3">
          {[
            ["1,000만", "한국 러닝 인구"],
            ["+270%", "'러닝' 검색량 증가 (YoY)"],
            ["2,000+", "전국 러닝 크루"],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="font-display text-5xl text-paper">{num}</p>
              <p className="mt-2 text-sm text-paper/50">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <Marquee dark />
    </>
  );
}
