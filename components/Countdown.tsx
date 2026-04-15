'use client';

import { useEffect, useState } from 'react';
import { formatCountdown } from '@/lib/drop';

export default function Countdown({
  target,
  size = 'md',
}: {
  target: number;
  size?: 'sm' | 'md' | 'lg';
}) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((x) => x + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const { days, hours, mins, secs } = formatCountdown(target);

  const fontSize = size === 'lg' ? 56 : size === 'md' ? 36 : 20;
  const labelSize = size === 'lg' ? 12 : 10;

  return (
    <div>
      <div
        className="mono"
        style={{
          fontSize,
          fontWeight: 900,
          color: 'var(--color-neon)',
          letterSpacing: size === 'lg' ? 10 : 6,
          lineHeight: 1,
        }}
      >
        {days} : {hours} : {mins} : {secs}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: 'var(--color-muted)',
          fontSize: labelSize,
          marginTop: 6,
          letterSpacing: 3,
        }}
      >
        <span>DAY</span>
        <span>HR</span>
        <span>MIN</span>
        <span>SEC</span>
      </div>
    </div>
  );
}
