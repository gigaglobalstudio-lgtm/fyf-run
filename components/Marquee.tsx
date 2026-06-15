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
          <span className="whitespace-nowrap px-6 text-[11px] font-medium uppercase tracking-[0.28em]">
            {t}
          </span>
          <span className="h-1 w-1 rounded-full bg-current opacity-40" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden border-y py-3.5 ${
        dark
          ? "border-darkline/60 bg-ink text-paper/55"
          : "border-line bg-paper text-ink/55"
      }`}
    >
      <div className="animate-marquee flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
