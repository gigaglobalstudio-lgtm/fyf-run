"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "5만원 이상 전 상품 무료배송",
  "NEW — Pulse Sleeveless 입고",
  "FYF RUN CLUB — 매주 순천 동천 / 서울 한강",
  "Don't follow. Find your Flow.",
];

export function AnnouncementBar() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % MESSAGES.length), 3800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative z-50 border-b border-darkline/60 bg-ink">
      <div className="mx-auto flex h-8 max-w-7xl items-center justify-center overflow-hidden px-5">
        <p
          key={i}
          className="animate-rise text-[11px] font-medium uppercase tracking-[0.2em] text-paper/70"
        >
          {MESSAGES[i]}
        </p>
      </div>
    </div>
  );
}
