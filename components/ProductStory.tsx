import Image from "next/image";
import Link from "next/link";
import { EcgLine } from "./EcgLogo";
import { getCrew, type Product } from "@/lib/products";

/** 한국식 롱폼 상세페이지 — 구매 영역 아래 풀폭 렌더 */
export function ProductStory({ product }: { product: Product }) {
  const crew = getCrew(product.crewPick);
  // 피처별 디테일 줌 컷 — 한 장의 제품 이미지를 다른 부위로 확대
  const zoomPositions = ["50% 20%", "50% 50%", "50% 80%", "30% 40%"];

  return (
    <section className="mt-24" id="detail">
      {/* ── 섹션 헤더 ── */}
      <div className="flex items-center gap-4">
        <EcgLine className="h-5 w-16 text-flow" />
        <h2 className="font-display text-3xl tracking-wide">PRODUCT STORY</h2>
        <span className="text-sm text-ink/40">상세 정보</span>
      </div>

      {/* ── 스토리 밴드 (다크) ── */}
      <div className="mt-8 overflow-hidden rounded-3xl bg-ink px-6 py-16 text-paper md:px-16 md:py-20">
        <p className="font-display text-sm tracking-[0.25em] text-volt">
          {product.name.toUpperCase()}
        </p>
        <h3 className="font-display mt-3 text-4xl leading-tight md:text-5xl">
          {product.storyTitle}
        </h3>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/75 md:text-lg">
          {product.storyBody}
        </p>
      </div>

      {/* ── 기성 상세페이지 섹션 스택 ── */}
      {product.detailImages?.map((src, i) => (
        <div
          key={src}
          className="mt-6 overflow-hidden rounded-3xl border border-line bg-white"
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

      {/* ── 피처 블록 ── */}
      <div className="mt-6 space-y-6">
        {product.features.map((f, i) => (
          <div
            key={f.num}
            className={`grid items-stretch gap-0 overflow-hidden rounded-3xl border border-line bg-white md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#ecebe6] md:aspect-auto md:min-h-72">
              <Image
                src={product.image}
                alt={f.heading}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                style={{
                  objectPosition: zoomPositions[i % zoomPositions.length],
                  transform: `scale(${1.3 + (i % 2) * 0.3})`,
                }}
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="font-display text-5xl text-ink/10">{f.num}</p>
              <h4 className="mt-2 text-xl font-extrabold text-ink">
                {f.heading}
              </h4>
              <p className="mt-3 leading-relaxed text-ink/65">{f.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── 착용/라이프스타일 컷 ── */}
      {product.lifestyleImage && (
        <div className="relative mt-6 overflow-hidden rounded-3xl">
          <Image
            src={product.lifestyleImage}
            alt={`${product.name} 착용 컷`}
            width={1200}
            height={900}
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 to-transparent p-8 md:p-12">
            <p className="font-display text-2xl text-paper md:text-4xl">
              NIGHT RUN, SUNCHEON
            </p>
          </div>
        </div>
      )}

      {/* ── 크루 추천 ── */}
      <div
        className="mt-6 grid items-center gap-0 overflow-hidden rounded-3xl md:grid-cols-[280px_1fr]"
        style={{ backgroundColor: "#141414" }}
      >
        <div className="relative aspect-square bg-white">
          <Image
            src={crew.image}
            alt={`${crew.name} 캐릭터 시트`}
            fill
            sizes="280px"
            className="object-contain p-3"
          />
        </div>
        <div className="p-8 md:p-12">
          <p
            className="font-display text-sm tracking-[0.25em]"
            style={{ color: crew.color }}
          >
            CREW&apos;S PICK — {crew.label}
          </p>
          <p className="font-display mt-3 text-3xl leading-snug text-paper md:text-4xl">
            “{product.crewComment}”
          </p>
          <p className="mt-4 text-sm leading-relaxed text-paper/60">
            {crew.name} · {crew.role} — {crew.ability}: {crew.abilityDesc}
          </p>
          <Link
            href="/world#crew"
            className="mt-6 inline-block rounded-xl border border-paper/30 px-5 py-2.5 text-xs font-extrabold text-paper transition hover:bg-white/10"
          >
            크루 전체 보기 →
          </Link>
        </div>
      </div>

      {/* ── 스펙 + 사이즈 ── */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-line bg-white p-8">
          <h4 className="font-display text-xl tracking-wide text-ink">SPECS</h4>
          <dl className="mt-5 divide-y divide-line text-sm">
            {product.specs.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 py-3">
                <dt className="shrink-0 font-bold text-ink/50">{k}</dt>
                <dd className="text-right font-medium text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-3xl border border-line bg-white p-8">
          <h4 className="font-display text-xl tracking-wide text-ink">
            SIZE GUIDE
          </h4>
          <table className="mt-5 w-full text-sm">
            <thead>
              <tr className="border-b-2 border-ink text-left">
                {product.sizeChart.cols.map((c) => (
                  <th key={c} className="py-2.5 pr-3 font-extrabold text-ink">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {product.sizeChart.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`py-2.5 pr-3 ${ci === 0 ? "font-extrabold text-ink" : "text-ink/65"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-xs leading-relaxed text-ink/45">
            단면 측정 기준이며 ±1.5cm 오차가 있을 수 있습니다. 두 사이즈 사이라면
            큰 쪽을 권장합니다.
          </p>
        </div>
      </div>

      {/* ── 배송/교환 안내 ── */}
      <div className="mt-6 rounded-3xl border border-line bg-white p-8">
        <h4 className="font-display text-xl tracking-wide text-ink">
          SHIPPING &amp; RETURNS
        </h4>
        <div className="mt-5 grid gap-6 text-sm leading-relaxed text-ink/65 md:grid-cols-3">
          <div>
            <p className="font-extrabold text-ink">배송</p>
            <p className="mt-1.5">
              결제 후 1–3 영업일 내 출고. 5만원 이상 무료배송, 미만 3,000원.
              제주/도서산간 추가 운임.
            </p>
          </div>
          <div>
            <p className="font-extrabold text-ink">교환/반품</p>
            <p className="mt-1.5">
              수령 후 7일 이내, 미착용·미세탁 상품에 한해 가능. 단순 변심 왕복
              배송비 6,000원.
            </p>
          </div>
          <div>
            <p className="font-extrabold text-ink">품질보증</p>
            <p className="mt-1.5">
              봉제 불량·프린트 하자는 수령 후 30일 내 무상 교환. 정상 사용 중
              로고 박리 시 6개월 내 1회 교환.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
