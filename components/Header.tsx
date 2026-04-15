'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-store';
import { SessionPayload } from '@/lib/auth';
import { useState, useEffect } from 'react';

export default function Header({ session }: { session: SessionPayload | null }) {
  const count = useCart((s) => s.count());
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 32px',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-asphalt)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <Link
        href="/"
        style={{ fontWeight: 900, fontSize: 22, letterSpacing: 4, color: 'var(--color-neon)' }}
      >
        FYF
      </Link>
      <nav style={{ display: 'flex', gap: 28 }}>
        {[
          ['SHOP', '/shop'],
          ['DROP', '/drop'],
          ['WORLD', '/world'],
          ['BUNKER', '/bunker'],
          ['STORY', '/story'],
        ].map(([label, href]) => (
          <Link
            key={href}
            href={href}
            style={{ fontSize: 13, letterSpacing: 1, fontWeight: 600 }}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', fontSize: 13 }}>
        <Link href="/cart">
          🛒 {mounted && count > 0 && (
            <span style={{ color: 'var(--color-neon)', fontWeight: 900 }}>{count}</span>
          )}
        </Link>
        {session ? (
          <Link
            href="/crew/me"
            style={{
              border: '1px solid var(--color-neon)',
              color: 'var(--color-neon)',
              padding: '8px 14px',
              fontSize: 11,
              letterSpacing: 1,
              fontWeight: 900,
            }}
          >
            #{session.crewNumber}
          </Link>
        ) : (
          <Link
            href="/crew/login"
            style={{
              border: '1px solid var(--color-neon)',
              color: 'var(--color-neon)',
              padding: '8px 14px',
              fontSize: 11,
              letterSpacing: 1,
            }}
          >
            CREW ID
          </Link>
        )}
      </div>
    </header>
  );
}
