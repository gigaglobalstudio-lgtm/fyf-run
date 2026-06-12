const ITEMS = [
  "DON'T FOLLOW. FIND YOUR FLOW.",
  "첫 크루, 첫 모자",
  "SUNCHEON BUNKER CREW",
  "따라가지 마. 네 리듬을 찾아.",
  "FYF RUNNING CULTURE",
];

export function Marquee({ dark = false }: { dark?: boolean }) {
  const row = (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display whitespace-nowrap px-6 text-sm tracking-[0.18em]">
            {t}
          </span>
          <svg viewBox="0 0 60 16" className="h-3 w-12 opacity-60" fill="none">
            <polyline
              points="0,8 18,8 24,2 30,14 36,5 40,8 60,8"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden border-y py-3 ${
        dark
          ? "border-darkline bg-ink text-paper"
          : "border-line bg-volt text-ink"
      }`}
    >
      <div className="animate-marquee flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
