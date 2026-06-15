import Image from "next/image";
import Link from "next/link";
import { EcgLine } from "./EcgLogo";
import { getCrew, type Product } from "@/lib/products";

/**
 * 프리미엄 에디토리얼 상세페이지.
 * 페이지 컨테이너 밖(풀폭)에서 렌더 — 각 섹션이 자체 폭을 관리한다.
 */
export function ProductStory({ product }: { product: Product }) {
  const crew = getCrew(product.crewPick);

  return (
    <section id="detail" className="bg-paper">
      {/* ── 섹션 도입부 ── */}
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center gap-6 border-t border-ink/10 pt-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/40">
            Product Story
          </p>
          <div className="h-px flex-1 bg-ink/10" />
          <EcgLine className="h-4 w-14 text-ink/30" />
        </div>
      </div>

      {/* ── 오프닝 스테이트먼트 (다크 풀블리드) ── */}
      <div className="mt-14 bg-ink py-24 text-paper md:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-paper/40">
            {product.name}
          </p>
          <h2 className="font-display mt-6 text-4xl leading-[1.05] md:text-6xl">
            {product.storyTitle}
          </h2>
          <div className="mx-auto mt-8 h-px w-12 bg-paper/25" />
          <p className="mx-auto mt-8 max-w-xl text-base leading-loose text-paper/70 md:text-lg">
            {product.storyBody}
          </p>
        </div>
      </div>

      {/* ── 피처 챕터 (스티키 이미지 + 타이포 리스트) ── */}
      <div className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#ecebe6]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-ink/40">
              {product.name} — {product.color}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/40">
              Details that matter
            </p>
            <h3 className="font-display mt-3 text-3xl text-ink md:text-4xl">
              디테일이 페이스를 만든다
            </h3>
            <div className="mt-10">
              {product.features.map((f) => (
                <div
                  key={f.num}
                  className="group grid grid-cols-[auto_1fr] gap-6 border-t border-ink/10 py-9 first:border-t-0 first:pt-0 md:gap-10"
                >
                  <p className="font-display text-5xl leading-none text-ink/15 transition group-hover:text-ink/35 md:text-6xl">
                    {f.num}
                  </p>
                  <div>
                    <h4 className="text-lg font-extrabold tracking-tight text-ink">
                      {f.heading}
                    </h4>
                    <p className="mt-2.5 max-w-md leading-relaxed text-ink/55">
                      {f.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 디테일 컷 (룩북 칼럼) ── */}
      {product.detailImages && product.detailImages.length > 0 && (
        <div className="mx-auto max-w-3xl px-5 pb-28">
          <div className="mb-12 flex items-center gap-6">
            <p className="shrink-0 text-xs font-bold uppercase tracking-[0.3em] text-ink/40">
              Look Closer — 디테일 컷
            </p>
            <div className="h-px flex-1 bg-ink/10" />
          </div>
          <div className="space-y-10">
            {product.detailImages.map((src, i) => (
              <div
                key={src}
                className="overflow-hidden rounded-xl ring-1 ring-ink/5"
              >
                <Image
                  src={src}
                  alt={`${product.name} 상세 ${i + 1}`}
                  width={1200}
                  height={1400}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── 라이프스타일 풀블리드 ── */}
      {product.lifestyleImage && (
        <div className="relative">
          <Image
            src={product.lifestyleImage}
            alt={`${product.name} 착용 컷`}
            width={2048}
            height={1152}
            className="h-[70svh] w-full object-cover"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/10 to-transparent">
            <div className="mx-auto w-full max-w-7xl px-5 pb-14">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-paper/60">
                Worn by runners
              </p>
              <p className="font-display mt-3 text-3xl text-paper md:text-5xl">
                NIGHT RUN, SUNCHEON
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── 크루 픽 (다크 풀블리드) ── */}
      <div className="bg-ink py-24 text-paper md:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-[220px_1fr] md:gap-16">
          <div className="mx-auto w-44 md:w-full">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
              <Image
                src={crew.image}
                alt={`${crew.name} 캐릭터 시트`}
                fill
                sizes="220px"
                className="object-contain p-3"
              />
            </div>
            <p
              className="mt-3 text-center text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: crew.color }}
            >
              {crew.label} — {crew.role}
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-paper/40">
              Crew&apos;s Pick
            </p>
            <p className="font-display mt-5 text-3xl leading-snug md:text-5xl">
              “{product.crewComment}”
            </p>
            <p className="mt-6 text-sm leading-relaxed text-paper/50">
              {crew.ability} — {crew.abilityDesc}
            </p>
            <Link
              href="/world#crew"
              className="mt-8 inline-block border-b border-paper/30 pb-0.5 text-sm font-bold text-paper/80 transition hover:border-paper hover:text-paper"
            >
              크루 전체 보기
            </Link>
          </div>
        </div>
      </div>

      {/* ── 스펙 + 사이즈 (헤어라인 테이블) ── */}
      <div className="mx-auto max-w-5xl px-5 py-24 md:py-28">
        <div className="grid gap-16 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/40">
              Specifications
            </p>
            <dl className="mt-6">
              {product.specs.map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-8 border-t border-ink/10 py-3.5 text-sm"
                >
                  <dt className="shrink-0 text-ink/45">{k}</dt>
                  <dd className="text-right font-semibold text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

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
                      className="py-3.5 pr-4 text-xs font-bold uppercase tracking-wider text-ink/45"
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
                        className={`py-3.5 pr-4 ${
                          ci === 0
                            ? "font-extrabold text-ink"
                            : "font-medium text-ink/60"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-xs leading-relaxed text-ink/40">
              단면 측정 기준 · ±1.5cm 오차 가능 · 두 사이즈 사이라면 큰 쪽을
              권장합니다.
            </p>
          </div>
        </div>

        {/* ── 배송/교환 ── */}
        <div className="mt-20 grid gap-10 border-t border-ink/10 pt-10 text-sm leading-relaxed md:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/40">
              Shipping
            </p>
            <p className="mt-3 text-ink/55">
              결제 후 1–3 영업일 내 출고. 5만원 이상 무료배송, 미만 3,000원.
              제주/도서산간 추가 운임.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/40">
              Returns
            </p>
            <p className="mt-3 text-ink/55">
              수령 후 7일 이내, 미착용·미세탁 상품에 한해 교환/반품 가능. 단순
              변심 왕복 배송비 6,000원.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/40">
              Quality
            </p>
            <p className="mt-3 text-ink/55">
              봉제 불량·프린트 하자는 수령 후 30일 내 무상 교환. 정상 사용 중
              로고 박리 시 6개월 내 1회 교환.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
