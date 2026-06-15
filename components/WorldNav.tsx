"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/world", label: "Crew" },
  { href: "/world/story", label: "Story & MV" },
  { href: "/world/cafe", label: "Cafe" },
];

export function WorldNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-16 z-40 border-b border-darkline/60 bg-ink/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl gap-1 px-5" aria-label="세계관 섹션">
        {TABS.map((t) => {
          const active = pathname === t.href;
          return (
            <Link
              key={t.href}
              href={t.href}
              className={`border-b px-4 py-3.5 text-[13px] font-medium tracking-wide transition ${
                active
                  ? "border-paper text-paper"
                  : "border-transparent text-paper/55 hover:text-paper"
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
