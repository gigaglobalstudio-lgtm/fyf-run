"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/world", label: "CREW" },
  { href: "/world/story", label: "STORY & MV" },
  { href: "/world/cafe", label: "CAFE" },
];

export function WorldNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-16 z-40 border-b border-darkline bg-ink/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl gap-1 px-5" aria-label="세계관 섹션">
        {TABS.map((t) => {
          const active = pathname === t.href;
          return (
            <Link
              key={t.href}
              href={t.href}
              className={`border-b-2 px-4 py-3.5 font-display text-sm tracking-[0.15em] transition ${
                active
                  ? "border-volt text-volt"
                  : "border-transparent text-paper/60 hover:text-paper"
              }`}
            >
              {t.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
