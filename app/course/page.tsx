import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { EcgLine } from "@/components/EcgLogo";
import { COURSES_JEONNAM, COURSES_KOREA, type Course } from "@/lib/products";

export const metadata: Metadata = {
  title: "FYF RUN MAP — 러닝 코스",
  description:
    "순천·전남 홈코스 10곳과 전국 대표 코스 10곳. FYF 크루가 직접 그린 러닝 코스 카드.",
};

function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((c) => (
        <figure
          key={c.no + c.title}
          className="group overflow-hidden rounded-3xl border border-darkline bg-coal"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={c.image}
              alt={`FYF RUN MAP — ${c.title}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <figcaption className="flex items-baseline gap-3 p-4">
            <span className="font-display text-xl text-paper/30">{c.no}</span>
            <span>
              <span className="block text-sm font-extrabold text-paper">
                {c.title}
              </span>
              <span className="block text-xs text-paper/50">{c.sub}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function CoursePage() {
  return (
    <div className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <EcgLine className="h-6 w-36 text-volt" animate />
        <h1 className="font-display mt-3 text-5xl md:text-7xl">
          FYF RUN MAP
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-paper/70">
          메트로놈의 공식 코스는 잊어라. 크루가 직접 달리고 그린 코스 카드 —
          출발지, 반환점, 노면, 주의사항까지. 순천에서 시작해 전국으로.
        </p>

        {/* 전남 홈코스 */}
        <section className="mt-14">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-display text-sm tracking-[0.25em] text-flow">
                HOME COURSE
              </p>
              <h2 className="font-display mt-1 text-3xl md:text-4xl">
                순천 · 전남 10
              </h2>
            </div>
            <p className="hidden text-xs text-paper/40 sm:block">
              카티보가 직접 그린 홈그라운드
            </p>
          </div>
          <CourseGrid courses={COURSES_JEONNAM} />
        </section>

        {/* 전국 */}
        <section className="mt-20">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-display text-sm tracking-[0.25em] text-volt">
                AWAY COURSE
              </p>
              <h2 className="font-display mt-1 text-3xl md:text-4xl">
                전국 TOP 10
              </h2>
            </div>
            <p className="hidden text-xs text-paper/40 sm:block">
              원정런 — 각자의 속도로
            </p>
          </div>
          <CourseGrid courses={COURSES_KOREA} />
        </section>

        <div className="mt-20 rounded-3xl border border-darkline bg-coal p-10 text-center">
          <p className="font-display text-2xl md:text-3xl">
            오늘 코스 정했으면, 장비도.
          </p>
          <p className="mt-2 text-sm text-paper/60">
            첫 크루, 첫 모자 — ₩39,000부터.
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
