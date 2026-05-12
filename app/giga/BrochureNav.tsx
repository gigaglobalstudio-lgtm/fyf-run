'use client';

import { useEffect, useState } from 'react';

const SLIDES = [1, 2, 3, 4, 5];

export default function BrochureNav() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.brochure-root');
    if (!root) return;

    const sections = SLIDES.map((n) =>
      document.getElementById(`slide-${n}`)
    ).filter((el): el is HTMLElement => !!el);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const n = Number(e.target.id.replace('slide-', ''));
            if (!Number.isNaN(n)) setActive(n);
          }
        });
      },
      { root, threshold: 0.5 }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'PageDown' && e.key !== 'PageUp') {
        return;
      }
      e.preventDefault();
      const dir = e.key === 'ArrowDown' || e.key === 'PageDown' ? 1 : -1;
      const next = Math.min(SLIDES.length, Math.max(1, active + dir));
      document.getElementById(`slide-${next}`)?.scrollIntoView({ behavior: 'smooth' });
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  const go = (n: number) => {
    document.getElementById(`slide-${n}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="brochure-nav" aria-label="Brochure navigation">
      {SLIDES.map((n) => (
        <button
          key={n}
          className="brochure-dot"
          data-active={active === n}
          onClick={() => go(n)}
          aria-label={`Go to slide ${n}`}
        >
          {String(n).padStart(2, '0')}
        </button>
      ))}
      <button
        className="brochure-print"
        onClick={() => window.print()}
        aria-label="Print or save as PDF"
      >
        PDF
      </button>
    </nav>
  );
}
