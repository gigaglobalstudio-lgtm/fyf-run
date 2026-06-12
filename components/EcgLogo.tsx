export function EcgLine({
  className = "",
  animate = false,
  stroke = "currentColor",
}: {
  className?: string;
  animate?: boolean;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <polyline
        points="0,16 28,16 36,16 42,4 50,28 56,10 60,16 120,16"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animate ? "ecg-animate" : undefined}
      />
    </svg>
  );
}

export function FyfLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <EcgLine className="h-5 w-16" />
      <span className="font-display text-xl leading-none tracking-wide">
        FYF
      </span>
    </span>
  );
}
