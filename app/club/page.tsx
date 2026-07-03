import Link from "next/link";
import type { Metadata } from "next";
import { EcgLine } from "@/components/EcgLogo";
import { CrewSignup } from "@/components/CrewSignup";

export const metadata: Metadata = {
  title: "FYF RUN CLUB — 함께 달릴 사람들",
  description:
    "벙커버스는 이야기, 런클럽은 진짜. 매주 순천 동천과 서울 한강에서 각자의 페이스로 함께 달립니다. 누구나, 무료로.",
};

const SCHEDULE = [
  {
    city: "순천 · 동천",
    days: "매주 화 · 목",
    time: "20:00",
    meet: "오천그린광장 그린아일랜드 입구",
    tag: "홈그라운드",
  },
  {
    city: "서울 · 한강",
    days: "매주 토",
    time: "08:00",
    meet: "반포한강공원 잠수교 남단",
    tag: "원정런",
  },
];

const PACE = [
  { name: "이지", pace: "6:30 /km", who: "입문 · 회복런 · 첫 5K", color: "#22c55e" },
  { name: "미들", pace: "5:30 /km", who: "10K 완주 · 대회 준비", color: "#2f6bff" },
  { name: "패스트", pace: "4:30 /km", who: "레이스 · 스퍼트 훈련", color: "#ef4444" },
];

const STEPS = [
  ["구독", "아래에서 이메일·카카오로 크루 소식을 받으면 매주 러닝 공지가 갑니다."],
  ["집결", "정해진 시간·장소에 그냥 오세요. 준비물은 러닝화와 물 한 병."],
  ["함께", "페이스 그룹을 고르고, 각자의 리듬으로. 끝나면 벙커 카페에서 한 잔."],
];

export default function ClubPage() {
  return (
    <div className="bg-ink text-paper">
      {/* Hero */}
      <section className="border-b border-darkline">
        <div className="mx-auto max-w-7xl px-5 py-24 md:py-32">
          <EcgLine className="h-6 w-40 text-flow" animate />
          <h1 className="font-display mt-4 text-6xl leading-[0.95] md:text-8xl">
            FYF RUN CLUB
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
            벙커버스는 이야기, 런클럽은 진짜다. 매주 정해진 시간, 정해진
            장소에 모여 — 각자의 페이스로 함께 달린다. 누구나, 무료로.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#join"
              className="rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-white"
            >
              크루 합류하기
            </Link>
            <Link
              href="/course"
              className="rounded-full border border-paper/30 px-7 py-3.5 text-sm font-semibold text-paper transition hover:border-paper hover:bg-white/5"
            >
              러닝 코스 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 주간 스케줄 */}
      <section className="border-b border-darkline">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-flow">
            Weekly Runs
          </p>
          <h2 className="font-display mt-2 text-4xl md:text-5xl">주간 러닝</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SCHEDULE.map((s) => (
              <div
                key={s.city}
                className="rounded-3xl border border-darkline bg-coal p-8"
              >
                <div className="flex items-start justify-between">
                  <p className="font-display text-3xl tracking-tight">
                    {s.city}
                  </p>
                  <span className="rounded-full border border-darkline px-3 py-1 text-[11px] font-medium text-paper/60">
                    {s.tag}
                  </span>
                </div>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-lg font-semibold text-paper">
                    {s.days}
                  </span>
                  <span className="font-display text-3xl text-flow">
                    {s.time}
                  </span>
                </div>
                <p className="mt-3 text-sm text-paper/55">집결 — {s.meet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 페이스 그룹 */}
      <section className="border-b border-darkline">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-flow">
            Pace Groups
          </p>
          <h2 className="font-display mt-2 text-4xl md:text-5xl">
            네 페이스를 골라
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-paper/60">
            빠를 필요 없다. 느려도 된다. 각 그룹에 페이스 리더가 함께 뛴다 —
            아무도 혼자 뒤처지지 않게.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {PACE.map((p) => (
              <div
                key={p.name}
                className="rounded-3xl border border-darkline bg-coal p-7"
              >
                <div
                  className="h-1.5 w-12 rounded-full"
                  style={{ backgroundColor: p.color }}
                />
                <p className="font-display mt-5 text-3xl">{p.name}</p>
                <p
                  className="mt-1 text-lg font-semibold"
                  style={{ color: p.color }}
                >
                  {p.pace}
                </p>
                <p className="mt-3 text-sm text-paper/55">{p.who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 어떻게 참여하나 */}
      <section className="border-b border-darkline">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-flow">
            How It Works
          </p>
          <h2 className="font-display mt-2 text-4xl md:text-5xl">
            참여는 3단계
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {STEPS.map(([t, d], i) => (
              <div key={t} className="rounded-3xl border border-darkline bg-coal p-8">
                <p className="font-display text-5xl text-paper/15">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-xl font-semibold text-paper">{t}</p>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-paper/40">
            ※ 안전을 위해 야간런은 리플렉티브 장비를 권장합니다 —{" "}
            <Link href="/shop" className="text-paper/70 underline">
              FYF 기어 보기
            </Link>
          </p>
        </div>
      </section>

      {/* 합류 (이메일 구독) */}
      <div id="join">
        <CrewSignup />
      </div>
    </div>
  );
}
