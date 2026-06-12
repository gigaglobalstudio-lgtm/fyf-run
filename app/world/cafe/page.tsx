import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { EcgLine } from "@/components/EcgLogo";
import { WorldNav } from "@/components/WorldNav";
import { CAFE_MENU, CREW } from "@/lib/products";

export const metadata: Metadata = {
  title: "BUNKER CAFE — FYF",
  description:
    "순천 FYF 카페. 매일 찾는 한 잔, 묵직하게, 깔끔하게. 아메리카노 2,000원부터 — Run your pace. Find your flow.",
};

export default function CafePage() {
  return (
    <div className="bg-ink text-paper">
      <WorldNav />

      <div className="mx-auto max-w-7xl px-5 py-16">
        <EcgLine className="h-6 w-36 text-flow" animate />
        <h1 className="font-display mt-3 text-5xl md:text-7xl">
          BUNKER CAFE
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-paper/70">
          낮의 FYF는 평범한 카페처럼 보인다. 하지만 메뉴판을 아는 사람은 안다 —
          각 잔이 누구의 리듬인지. Run your pace. Find your flow.
        </p>

        {/* 공식 카페 그룹 아트 */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-darkline">
          <Image
            src="/crew/crew-cafe.png"
            alt="FYF 벙커 카페 앞의 크루"
            width={1344}
            height={736}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        {/* 메뉴 + 메뉴판 */}
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">
              매일 찾는 한 잔,
              <br />
              묵직하게, 깔끔하게
            </h2>
            <div className="mt-8 space-y-7">
              {CAFE_MENU.map((cat) => (
                <div key={cat.category}>
                  <p className="font-display text-sm tracking-[0.2em] text-volt">
                    {cat.category}
                  </p>
                  <ul className="mt-2 divide-y divide-darkline">
                    {cat.items.map(([name, price]) => (
                      <li
                        key={name}
                        className="flex items-baseline justify-between gap-4 py-2.5"
                      >
                        <span className="text-sm font-bold text-paper/85">
                          {name}
                        </span>
                        <span className="shrink-0 text-sm font-extrabold text-paper/60">
                          {price}원
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 캐릭터 시그니처 */}
            <div className="mt-10 rounded-2xl border border-darkline bg-coal p-6">
              <p className="font-display text-sm tracking-[0.2em] text-paper/40">
                CREW SIGNATURE
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {CREW.map((c) => (
                  <li key={c.en} className="flex items-baseline gap-3">
                    <span
                      className="font-display text-base"
                      style={{ color: c.color }}
                    >
                      {c.en}
                    </span>
                    <span className="text-paper/70">{c.menu}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-darkline lg:sticky lg:top-32">
            <Image
              src="/cafe/menu-board.jpg"
              alt="FYF CAFE 공식 메뉴판 — 크루 4인"
              width={1200}
              height={1697}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-darkline bg-coal p-10 text-center">
          <p className="font-display text-2xl md:text-3xl">
            카페에서 시작해서, 러닝으로 끝난다
          </p>
          <p className="mt-2 text-sm text-paper/60">
            낮에는 커피, 밤에는 벙커. 장비는 온라인에서.
          </p>
          <Link
            href="/shop"
            className="mt-6 inline-block rounded-2xl bg-paper px-7 py-3.5 text-sm font-extrabold text-ink transition hover:bg-white"
          >
            샵 보러 가기
          </Link>
        </div>
      </div>
    </div>
  );
}
