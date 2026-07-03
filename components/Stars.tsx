export function Stars({
  rating,
  className = "",
  size = 14,
}: {
  rating: number;
  className?: string;
  size?: number;
}) {
  // 0–5 → 채워진 별 표현 (반별은 클립으로)
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      aria-label={`별점 ${rating.toFixed(1)} / 5`}
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - i)); // 0..1
        return (
          <span
            key={i}
            className="relative inline-block"
            style={{ width: size, height: size }}
          >
            <Star size={size} className="absolute inset-0 opacity-20" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star size={size} className="text-current" />
            </span>
          </span>
        );
      })}
    </span>
  );
}

function Star({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.98 5.06 17.6l.94-5.5-4-3.9 5.53-.8L10 1.6z" />
    </svg>
  );
}
