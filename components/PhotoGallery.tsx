"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import type { PhotoGalleryImage } from "@/lib/photo-catalog";

type Props = { directory: string; images: PhotoGalleryImage[]; name: string; badge?: string };

export function PhotoGallery({ directory, images, name, badge }: Props) {
  const [index, setIndex] = useState(0);
  const current = images[index];

  function move(event: KeyboardEvent<HTMLButtonElement>, from: number) {
    const direction = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!direction) return;
    event.preventDefault();
    const next = (from + direction + images.length) % images.length;
    setIndex(next);
    const buttons = event.currentTarget.parentElement?.querySelectorAll("button");
    buttons?.[next]?.focus();
  }

  return (
    <section aria-label={name + " 상품 사진"} className="min-w-0">
      <figure>
        <div className="relative overflow-hidden rounded-2xl bg-white">
          <Image src={directory + "/" + current.file} alt={current.alt} width={1000} height={1000}
            unoptimized loading="eager" className="block aspect-square w-full object-contain" />
          {badge && <span className="absolute left-5 top-5 rounded-full bg-ink/85 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-paper">{badge}</span>}
        </div>
        <figcaption aria-live="polite" className="mt-3 min-h-5 text-sm text-ink/65">{current.caption}</figcaption>
      </figure>
      <div role="group" aria-label="상품 사진 선택" className="mt-2 flex gap-2">
        {images.map((image, i) => (
          <button key={image.file} type="button" aria-label={(i + 1) + " · " + image.caption} aria-pressed={index === i}
            onClick={() => setIndex(i)} onKeyDown={(event) => move(event, i)}
            className={"w-[17%] max-w-[72px] overflow-hidden rounded-lg border bg-white focus-visible:outline-2 focus-visible:outline-offset-2 " + (index === i ? "border-ink" : "border-ink/15 hover:border-ink/50")}>
            <Image src={directory + "/" + image.file} width={100} height={100} alt="" unoptimized className="aspect-square w-full object-contain" />
          </button>
        ))}
      </div>
    </section>
  );
}
