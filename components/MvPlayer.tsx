export function MvPlayer({
  src,
  poster,
  title,
  sub,
}: {
  src: string;
  poster: string;
  title: string;
  sub: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-darkline/60 bg-coal">
      <video
        controls
        playsInline
        preload="none"
        poster={poster}
        src={src}
        className="aspect-video w-full bg-ink object-cover"
      />
      <figcaption className="flex items-baseline justify-between gap-4 p-5">
        <div>
          <p className="font-display text-xl tracking-tight text-paper">
            {title}
          </p>
          <p className="mt-0.5 text-xs text-paper/50">{sub}</p>
        </div>
        <svg viewBox="0 0 60 16" className="h-3 w-12 shrink-0 text-paper/30" fill="none" aria-hidden>
          <polyline
            points="0,8 18,8 24,2 30,14 36,5 40,8 60,8"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </figcaption>
    </figure>
  );
}
