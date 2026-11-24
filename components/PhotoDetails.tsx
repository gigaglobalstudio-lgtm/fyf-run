import Image from "next/image";
import type { PhotoListing } from "@/lib/photo-catalog";

const previousSections = [
  ["overview", "상품 소개"],
  ["shape", "디자인"],
  ["close-up", "디테일"],
  ["compare", "디자인 비교"],
  ["guide", "선택 가이드"],
  ["information", "상품 정보"],
];

export function PhotoDetails({ listing }: { listing: PhotoListing }) {
  if (listing.compactDetails) {
    const { highlights, photos, faq } = listing.compactDetails;
    return (
      <section id="detail" aria-label={listing.nameKo + " 상세 설명"} className="scroll-mt-20 bg-white text-ink">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
          <h2 className="border-t border-ink/15 pt-7 text-2xl font-semibold tracking-tight">상품 상세</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {highlights.map(([title, description]) => (
              <article key={title} className="rounded-xl bg-paper p-5">
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-5">
            {photos.flatMap((file) => {
              const photo = listing.gallery?.find((item) => item.file === file);
              if (!photo) return [];
              return [(
                <figure key={file} className="min-w-0">
                  <Image src={listing.directory + "/" + photo.file} alt={photo.alt}
                    width={1000} height={1000} unoptimized loading="lazy"
                    className="block aspect-square w-full rounded-xl object-cover" />
                  <figcaption className="mt-2 text-sm text-ink/70">{photo.caption}</figcaption>
                </figure>
              )];
            })}
          </div>
          <div className="mt-9 border-t border-ink/15 pt-6">
            <h3 className="text-lg font-semibold">자주 묻는 질문</h3>
            <dl className="mt-3 space-y-4">
              {faq.map(([question, answer]) => (
                <div key={question}>
                  <dt className="text-sm font-semibold">{question}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink/70">{answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    );
  }

  const sections = listing.sections.map((section, index) => ({
    ...section,
    id: section.id ?? previousSections[index]?.[0] ?? `section-${index + 1}`,
    label: section.label ?? previousSections[index]?.[1] ?? `상품 상세 ${index + 1}`,
  }));
  return (
    <section id="detail" aria-label={listing.nameKo + " 상세 설명"} className="scroll-mt-20 bg-white text-ink">
      <div className="mx-auto max-w-5xl px-5 pt-10">
        <h2 className="border-t border-ink/15 pt-7 text-2xl font-semibold tracking-tight">상품 상세</h2>
        <nav aria-label="상세 항목" className="flex flex-wrap gap-x-5 gap-y-2 py-5 text-sm font-medium text-ink/65">
          {sections.map(({ id, label }) => (
            <a key={id} href={"#photo-" + id} className="py-1 underline-offset-4 hover:text-ink hover:underline">{label}</a>
          ))}
        </nav>
      </div>
      <div className="mx-auto max-w-[848px]">
        {sections.map((section) => (
          <div key={section.file} id={"photo-" + section.id} className="scroll-mt-20">
            <h3 className="sr-only">{section.label}</h3>
            <Image
              src={listing.directory + "/" + section.file} alt={section.alt}
              width={section.width ?? 1080} height={section.height} unoptimized
              className="block h-auto w-full" loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
