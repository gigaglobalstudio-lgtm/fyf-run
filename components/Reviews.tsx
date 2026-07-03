import Image from "next/image";
import { Stars } from "./Stars";
import { getReviews } from "@/lib/reviews";

export function Reviews({ slug }: { slug: string }) {
  const data = getReviews(slug);
  if (!data) return null;
  const photos = data.items.filter((r) => r.photo);

  return (
    <section id="reviews" className="mx-auto max-w-5xl px-5 py-20">
      <div className="flex items-center gap-6 border-t border-ink/10 pt-12">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/40">
          Reviews — 후기
        </p>
        <div className="h-px flex-1 bg-ink/10" />
      </div>

      {/* 요약 */}
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
        <span className="text-4xl font-extrabold tracking-tight text-ink">
          {data.avg.toFixed(1)}
        </span>
        <div>
          <Stars rating={data.avg} size={18} className="text-ink" />
          <p className="mt-1 text-sm text-ink/50">
            {data.count.toLocaleString("ko-KR")}개의 후기
          </p>
        </div>
      </div>

      {/* 포토 후기 스트립 */}
      {photos.length > 0 && (
        <div className="mt-8 flex gap-3 overflow-x-auto pb-1">
          {photos.map((r) => (
            <div
              key={r.name}
              className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-xl bg-[#ecebe6]"
            >
              <Image
                src={r.photo!}
                alt={`${r.name} 포토 후기`}
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* 리뷰 리스트 */}
      <ul className="mt-8 divide-y divide-ink/10">
        {data.items.map((r) => (
          <li key={r.name + r.date} className="py-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-xs font-bold text-ink/60">
                  {r.name.slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{r.name}</p>
                  <Stars rating={r.rating} size={12} className="text-ink" />
                </div>
              </div>
              <span className="text-xs text-ink/40">
                {r.size ? `${r.size} · ` : ""}
                {r.date}
              </span>
            </div>
            <p className="mt-3 leading-relaxed text-ink/70">{r.body}</p>
            {r.photo && (
              <div className="relative mt-3 aspect-[4/3] w-40 overflow-hidden rounded-xl bg-[#ecebe6]">
                <Image
                  src={r.photo}
                  alt={`${r.name} 착용 후기`}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-center text-xs text-ink/35">
        후기는 실제 구매 러너들이 남긴 내용을 바탕으로 구성되었습니다.
      </p>
    </section>
  );
}
