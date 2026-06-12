import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { EcgLine } from "@/components/EcgLogo";
import { WorldNav } from "@/components/WorldNav";
import { MvPlayer } from "@/components/MvPlayer";
import { SEASON1, NEXT_CREW } from "@/lib/products";

export const metadata: Metadata = {
  title: "STORY & MV — BUNKER-VERSE",
  description:
    "시즌 1 'Bunker Opens' 12화 스토리와 FYF 공식 뮤직비디오 — ZOMBIE EYES, 가보자고.",
};

export default function StoryPage() {
  return (
    <div className="bg-ink text-paper">
      <WorldNav />

      {/* ── MV ── */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <EcgLine className="h-6 w-36 text-volt" animate />
        <h1 className="font-display mt-3 text-5xl md:text-7xl">
          BUNKER SOUND
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-paper/70">
          벙커에서 만든 사운드. FYF 공식 뮤직비디오 두 편 — 카티보의 밤과
          크루의 낮.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <MvPlayer
            src="/mv/gabojago.mp4"
            poster="/mv/gabojago-poster.jpg"
            title="가보자고"
            sub="FYF OFFICIAL MV — 크루의 낮, 순천 골목에서"
          />
          <MvPlayer
            src="/mv/zombie-eyes.mp4"
            poster="/mv/zombie-eyes-poster.jpg"
            title="ZOMBIE EYES"
            sub="FYF OFFICIAL MV — 카티보의 밤, 메트로놈을 노려보다"
          />
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

      {/* ── 시즌 2 신규 크루 티저 ── */}
      <section className="border-t border-darkline">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="font-display text-sm tracking-[0.25em] text-volt">
            SEASON 02 — TEASER
          </p>
          <h2 className="font-display mt-2 text-4xl md:text-5xl">
            새로운 러너들이 온다
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-paper/70">
            벙커의 문은 네 명에서 끝나지 않는다.{" "}
            {NEXT_CREW.map((c) => c.en).join(" · ")} — 각자의 결핍과 각자의
            리듬을 가진 새 크루가 준비 중이다.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-darkline">
            <Image
              src="/crew/next-crew.jpg"
              alt={`시즌 2 신규 크루 티저 — ${NEXT_CREW.map((c) => `${c.en}(${c.desc})`).join(", ")}`}
              width={1600}
              height={1066}
              className="h-auto w-full"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {NEXT_CREW.map((c) => (
              <span
                key={c.en}
                className="rounded-full border border-darkline bg-coal px-4 py-2 text-xs font-extrabold text-paper/70"
              >
                {c.en} — {c.desc} · COMING SOON
              </span>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/world"
              className="inline-block rounded-2xl border border-paper/30 px-7 py-3.5 text-sm font-extrabold text-paper transition hover:bg-white/10"
            >
              ← 크루 프로필 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
