import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { EcgLine } from "@/components/EcgLogo";
import { CREW } from "@/lib/products";

export const metadata: Metadata = {
  title: "BUNKER-VERSE — FYF",
  description:
    "낮에는 카페, 밤에는 벙커. 메트로놈 시스템에 맞서 자기 리듬으로 달리는 4인 크루의 세계관.",
};

export default function WorldPage() {
  return (
    <div className="bg-ink text-paper">
      {/* Intro */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/hero/cap-worn.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 md:py-40">
          <EcgLine className="h-6 w-40 text-flow" animate />
          <h1 className="font-display mt-4 text-6xl leading-[0.95] md:text-8xl">
            BUNKER-
            <br />
            VERSE
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
            도시는 <strong className="text-paper">메트로놈 시스템</strong>이
            지배한다. 평균 페이스, 표준 기록, 같은 박자. 시스템은 모두가 똑같이
            뛰기를 원한다.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper/80">
            하지만 순천 어딘가, 낮에는 카페였다가 밤이 되면 벙커로 바뀌는
            공간이 있다. 거기 모인 네 명은 각자의 심박으로 달린다 — 그들이{" "}
            <strong className="text-flow">FYF 크루</strong>다.
          </p>
          <p className="font-display mt-10 text-2xl tracking-wide text-volt">
            DON&apos;T FOLLOW. FIND YOUR FLOW.
          </p>
        </div>
      </section>

      {/* Crew */}
      <section id="crew" className="border-t border-darkline">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="font-display text-sm tracking-[0.25em] text-flow">
            THE CREW
          </p>
          <h2 className="font-display mt-2 text-4xl md:text-5xl">
            네 개의 심박, 하나의 벙커
          </h2>

          <div className="mt-12 space-y-6">
            {CREW.map((c, i) => (
              <article
                key={c.en}
                className="grid items-center gap-6 rounded-3xl border border-darkline bg-coal p-8 md:grid-cols-[200px_1fr_auto]"
              >
                <div>
                  <p
                    className="font-display text-5xl tracking-wide"
                    style={{ color: c.color }}
                  >
                    {c.en}
                  </p>
                  <p className="mt-1 text-sm font-bold text-paper/60">
                    {String(i + 1).padStart(2, "0")} · {c.name}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-extrabold">{c.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    능력 <strong style={{ color: c.color }}>{c.ability}</strong>{" "}
                    — {c.abilityDesc}.
                  </p>
                </div>
                <p
                  className="font-display text-2xl md:text-right"
                  style={{ color: c.color }}
                >
                  “{c.quote}”
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto + CTA */}
      <section className="border-t border-darkline">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center">
          <EcgLine className="mx-auto h-6 w-40 text-flow" animate />
          <h2 className="font-display mt-6 text-3xl leading-snug md:text-5xl">
            기록은 시스템의 언어다.
            <br />
            리듬은 너의 언어다.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-paper/70">
            FYF의 모든 제품에는 심박 그래프가 새겨져 있다. 그건 로고가 아니라
            선언이다 — 페이스는 시계가 아니라 심장이 정한다는 것.
          </p>
          <Link
            href="/shop"
            className="mt-10 inline-block rounded-2xl bg-paper px-8 py-4 text-sm font-extrabold text-ink transition hover:bg-white"
          >
            크루 장비 보러 가기
          </Link>
        </div>
      </section>
    </div>
  );
}
