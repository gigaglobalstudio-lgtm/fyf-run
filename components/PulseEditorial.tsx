import Image from "next/image";
import { EcgLine } from "./EcgLogo";
import type { Product } from "@/lib/products";

/**
 * 룩북형 에디토리얼 상세 (Pulse) — 여/남 모델 풀블리드 스택 +
 * 제품 플랫 + MODEL INFO + 케어. 레이아웃 패턴 참고, 사진·카피는 FYF 오리지널.
 */
export function PulseEditorial({ product }: { product: Product }) {
  const e = product.editorial;
  if (!e) return null;

  return (
    <section id="detail" className="bg-paper text-ink">
      {/* ── 섹션 도입 ── */}
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center gap-6 border-t border-ink/10 pt-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/40">
            Lookbook
          </p>
          <div className="h-px flex-1 bg-ink/10" />
          <EcgLine className="h-4 w-14 text-ink/30" />
        </div>
      </div>

      {/* ── 히어로 풀블리드 ── */}
      <div className="relative mt-12">
        <Image
          src={e.hero}
          alt={`${product.name} 룩북 히어로`}
          width={1600}
          height={2133}
          priority
          className="mx-auto h-[88svh] w-full max-w-5xl object-cover"
        />
        <div className="pointer-events-none absolute inset-0 mx-auto flex max-w-5xl items-end bg-gradient-to-t from-ink/55 via-transparent to-transparent">
          <p className="px-6 pb-7 font-display text-sm tracking-[0.3em] text-paper md:text-base">
            {e.heroLabel}
          </p>
        </div>
      </div>

      {/* ── 에디토리얼 블록 ── */}
      <div className="mx-auto max-w-5xl px-5">
        {e.blocks.map((b, i) => {
          if (b.kind === "statement") {
            return (
              <div
                key={i}
                className="my-24 text-center md:my-32"
              >
                <div className="mx-auto h-px w-12 bg-flow" />
                <h3 className="font-display mt-8 text-3xl leading-tight md:text-5xl">
                  {b.title}
                </h3>
                <p className="mx-auto mt-6 max-w-xl leading-loose text-ink/60">
                  {b.body}
                </p>
              </div>
            );
          }
          if (b.kind === "full") {
            return (
              <figure key={i} className="my-12 md:my-16">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={b.image}
                    alt={b.label ?? product.name}
                    width={1600}
                    height={900}
                    className="h-auto w-full object-cover"
                  />
                </div>
                {(b.label || b.sub) && (
                  <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                    <span className="font-display text-sm tracking-[0.2em] text-ink/70">
                      {b.label}
                    </span>
                    <span className="text-xs text-ink/45">{b.sub}</span>
                  </figcaption>
                )}
              </figure>
            );
          }
          // pair
          return (
            <div key={i} className="my-12 md:my-16">
              {(b.label || b.sub) && (
                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <span className="font-display text-sm tracking-[0.2em] text-ink/70">
                    {b.label}
                  </span>
                  <span className="text-xs text-ink/45">{b.sub}</span>
                </div>
              )}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {b.images.map((src, j) => (
                  <div
                    key={j}
                    className="relative overflow-hidden rounded-2xl bg-[#ecebe6]"
                  >
                    <Image
                      src={src}
                      alt={`${product.name} ${b.label ?? ""} ${j === 0 ? "front" : "back"}`}
                      width={1200}
                      height={1600}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── 제품 플랫 ── */}
      <div className="mx-auto max-w-5xl px-5 py-16">
        <div className="mb-8 flex items-center gap-6">
          <p className="shrink-0 text-xs font-bold uppercase tracking-[0.3em] text-ink/40">
            Product — 제품 컷
          </p>
          <div className="h-px flex-1 bg-ink/10" />
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {[e.flatFront, e.flatBack].map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl bg-[#ecebe6]"
            >
              <Image
                src={src}
                alt={`${product.name} ${i === 0 ? "정면" : "후면"} 제품 컷`}
                width={1200}
                height={1600}
                className="h-auto w-full object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-bold tracking-widest text-paper">
                {i === 0 ? "FRONT" : "BACK"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MODEL INFO ── */}
      <div className="mx-auto max-w-5xl px-5 pb-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/40">
          Model Info
        </p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-y border-ink/15 text-left">
                {["모델", "착용", "키", "가슴", "허리", "엉덩이", "몸무게"].map(
                  (h) => (
                    <th
                      key={h}
                      className="py-3 pr-4 text-xs font-bold uppercase tracking-wider text-ink/45"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {e.modelInfo.map((m) => (
                <tr key={m.who} className="border-b border-ink/10">
                  <td className="py-3 pr-4 font-extrabold text-ink">{m.who}</td>
                  <td className="py-3 pr-4 text-ink/70">{m.fitting}</td>
                  <td className="py-3 pr-4 text-ink/70">{m.height}</td>
                  <td className="py-3 pr-4 text-ink/70">{m.bust}</td>
                  <td className="py-3 pr-4 text-ink/70">{m.waist}</td>
                  <td className="py-3 pr-4 text-ink/70">{m.hip}</td>
                  <td className="py-3 pr-4 text-ink/70">{m.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 사이즈 + 케어 ── */}
      <div className="mx-auto max-w-5xl px-5 pb-24 pt-10">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/40">
              Size Guide
            </p>
            <table className="mt-6 w-full text-sm">
              <thead>
                <tr className="border-t border-ink/10 text-left">
                  {product.sizeChart.cols.map((c) => (
                    <th
                      key={c}
                      className="py-3 pr-4 text-xs font-bold uppercase tracking-wider text-ink/45"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.sizeChart.rows.map((row) => (
                  <tr key={row[0]} className="border-t border-ink/10">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`py-3 pr-4 ${ci === 0 ? "font-extrabold text-ink" : "font-medium text-ink/60"}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-xs leading-relaxed text-ink/40">
              단면 측정 기준 · ±1.5cm 오차 가능 · 두 사이즈 사이라면 핏 취향에
              따라 선택.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/40">
              Care — 세탁 및 취급 주의
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink/60">
              {e.care.map((c) => (
                <li key={c} className="flex gap-3 border-b border-ink/10 pb-3">
                  <span className="text-flow">—</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
