import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { EcgLine } from "@/components/EcgLogo";
import { CREW, SEASON1, CAFE_MENU } from "@/lib/products";

export const metadata: Metadata = {
  title: "BUNKER-VERSE — FYF",
  description:
    "낮에는 카페, 밤에는 벙커. 메트로놈 시스템에 맞서 자기 리듬으로 달리는 카티보·렌·로코·블록 4인 크루의 세계관.",
};

export default function WorldPage() {
  return (
    <div className="bg-ink text-paper">
      {/* ── Intro (공식 커버 아트) ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/crew/crew-cover.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/75 to-ink" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 md:py-40">
          <EcgLine className="h-6 w-40 text-flow" animate />
          <h1 className="font-display mt-4 text-6xl leading-[0.95] md:text-8xl">
            BUNKER-
            <br />
            VERSE
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/85">
            도시는 <strong className="text-paper">메트로놈 시스템</strong>이
            지배한다. 평균 페이스, 표준 기록, 같은 박자. 시스템은 모두가 똑같이
            뛰기를 원한다.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper/85">
            하지만 순천 어딘가, 낮에는 카페였다가 밤이 되면 벙커로 바뀌는
            공간이 있다. 거기 모인 네 명은 각자의 심박으로 달린다 — 그들이{" "}
            <strong className="text-flow">FYF 크루</strong>다.
          </p>
          <p className="font-display mt-10 text-2xl tracking-wide text-volt">
            DON&apos;T FOLLOW. FIND YOUR FLOW.
          </p>
        </div>
      </section>

      {/* ── Crew 프로필 ── */}
      <section id="crew" className="border-t border-darkline">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="font-display text-sm tracking-[0.25em] text-flow">
            THE CREW — OFFICIAL CHARACTER SHEET
          </p>
          <h2 className="font-display mt-2 text-4xl md:text-5xl">
            네 개의 심박, 하나의 벙커
          </h2>

          <div className="mt-12 space-y-8">
            {CREW.map((c, i) => (
              <article
                key={c.en}
                className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-darkline bg-coal lg:grid-cols-[360px_1fr]"
              >
                <div className="relative aspect-square bg-white lg:aspect-auto lg:min-h-96">
                  <Image
                    src={c.image}
                    alt={`${c.name} 공식 캐릭터 시트`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-contain p-4"
                  />
                  <span
                    className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-extrabold text-white"
                    style={{ backgroundColor: c.color }}
                  >
                    {String(i + 1).padStart(2, "0")} / {c.label}
                  </span>
                </div>

                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3
                      className="font-display text-4xl tracking-wide md:text-5xl"
                      style={{ color: c.color }}
                    >
                      {c.en}
                    </h3>
                    <p className="text-lg font-extrabold text-paper">
                      {c.name} — {c.role}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-5 text-sm leading-relaxed md:grid-cols-2">
                    <div>
                      <p className="font-bold tracking-widest text-paper/40">
                        외형
                      </p>
                      <p className="mt-1.5 text-paper/75">{c.appearance}</p>
                    </div>
                    <div>
                      <p className="font-bold tracking-widest text-paper/40">
                        성격
                      </p>
                      <p className="mt-1.5 text-paper/75">{c.personality}</p>
                    </div>
                    <div>
                      <p className="font-bold tracking-widest text-paper/40">
                        결핍
                      </p>
                      <p className="mt-1.5 text-paper/75">{c.flaw}</p>
                    </div>
                    <div>
                      <p className="font-bold tracking-widest text-paper/40">
                        능력 — {c.ability}
                      </p>
                      <p className="mt-1.5 text-paper/75">{c.abilityDesc}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.quotes.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-darkline bg-ink px-3.5 py-1.5 text-xs font-bold text-paper/80"
                      >
                        “{q}”
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-xs text-paper/40">
                    시그니처 메뉴 —{" "}
                    <span style={{ color: c.color }}>{c.menu}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 시즌 1 스토리 ── */}
      <section className="border-t border-darkline">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="font-display text-sm tracking-[0.25em] text-volt">
            SEASON 01 — BUNKER OPENS
          </p>
          <h2 className="font-display mt-2 text-4xl md:text-5xl">
            내 속도는 내가 정한다
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-paper/70">
            그들은 빠른 러너도, 완벽한 영웅도 아니다. 도시 기준에서는 이상하고
            불규칙한 존재들이다. 하지만 그 불규칙함이 모였을 때, 도시는 처음으로
            흔들리기 시작한다.
          </p>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {SEASON1.map(([title, body], i) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-darkline bg-coal p-5"
              >
                <p className="font-display text-2xl text-paper/25">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="font-extrabold text-paper">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-paper/60">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-display mt-10 text-center text-xl tracking-wide text-paper/60">
            마지막 장면. FYF 카페의 간판이 켜진다 —{" "}
            <span className="text-volt">Don&apos;t follow. Find your Flow.</span>
          </p>
        </div>
      </section>

      {/* ── 벙커 카페 ── */}
      <section className="border-t border-darkline">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="font-display text-sm tracking-[0.25em] text-flow">
                BUNKER CAFE, SUNCHEON
              </p>
              <h2 className="font-display mt-2 text-4xl md:text-5xl">
                메뉴는 음료가 아니라
                <br />
                캐릭터다
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-paper/70">
                낮의 FYF는 평범한 카페처럼 보인다. 하지만 메뉴판을 아는 사람은
                안다 — 각 잔이 누구의 리듬인지.
              </p>
              <ul className="mt-8 divide-y divide-darkline">
                {CAFE_MENU.map((m) => (
                  <li
                    key={m.menu}
                    className="flex items-baseline justify-between gap-4 py-3.5"
                  >
                    <div>
                      <p className="font-extrabold" style={{ color: m.color }}>
                        {m.menu}
                      </p>
                      <p className="mt-0.5 text-sm text-paper/55">{m.desc}</p>
                    </div>
                    <span className="shrink-0 text-xs font-bold text-paper/40">
                      {m.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-darkline">
              <Image
                src="/crew/crew-cafe.png"
                alt="FYF 벙커 카페 앞의 크루"
                width={1344}
                height={736}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Manifesto + CTA ── */}
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
            선언이다 — 페이스는 시계가 아니라 심장이 정한다는 것. 굿즈의 핵심은
            캐릭터가 예뻐서가 아니라, 내 리듬을 대신 말해주는 상징이 되는
            것이다.
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
