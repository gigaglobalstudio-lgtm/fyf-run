import { db } from '@/lib/db';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ line?: string; char?: string }>;
}) {
  const sp = await searchParams;
  const line = sp.line;
  const char = sp.char;

  const where: any = {};
  if (line && line !== 'ALL') where.line = line;
  if (char) where.character = char;

  const products = await db.product.findMany({ where, orderBy: { createdAt: 'desc' } });
  const characters = await db.character.findMany();

  const lines = ['ALL', 'CORE', 'FLOW', 'ANOMALY', 'GOODS'];

  return (
    <div style={{ padding: '32px 48px' }}>
      <div
        style={{
          padding: '12px 0',
          fontSize: 11,
          color: 'var(--color-muted)',
          letterSpacing: 1,
        }}
      >
        SHOP / {line || 'ALL'}
      </div>

      <div
        style={{
          display: 'flex',
          gap: 12,
          padding: '16px 0',
          borderBottom: '1px solid var(--color-border)',
          flexWrap: 'wrap',
        }}
      >
        {lines.map((l) => {
          const active = (line || 'ALL') === l;
          return (
            <Link
              key={l}
              href={l === 'ALL' ? '/shop' : `/shop?line=${l}`}
              style={{
                padding: '10px 22px',
                border: '1px solid var(--color-border)',
                fontSize: 12,
                letterSpacing: 2,
                background: active ? 'var(--color-neon)' : 'transparent',
                color: active ? 'var(--color-asphalt)' : 'var(--color-fg)',
                borderColor: active ? 'var(--color-neon)' : 'var(--color-border)',
                fontWeight: active ? 900 : 400,
              }}
            >
              {l}
            </Link>
          );
        })}
      </div>

      <div
        style={{
          padding: '16px 0',
          display: 'flex',
          gap: 10,
          alignItems: 'center',
          fontSize: 12,
          color: 'var(--color-muted)',
          borderBottom: '1px solid var(--color-border)',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ letterSpacing: 2 }}>BY CHARACTER:</span>
        <Link
          href={line ? `/shop?line=${line}` : '/shop'}
          style={{
            padding: '6px 14px',
            border: '1px solid var(--color-border)',
            borderRadius: 20,
            fontSize: 11,
            ...(char ? {} : { borderColor: 'var(--color-neon)', color: 'var(--color-neon)' }),
          }}
        >
          ALL
        </Link>
        {characters.map((c) => {
          const active = char === c.slug;
          const query = new URLSearchParams();
          if (line) query.set('line', line);
          query.set('char', c.slug);
          return (
            <Link
              key={c.slug}
              href={`/shop?${query.toString()}`}
              style={{
                padding: '6px 14px',
                border: `1px solid ${active ? 'var(--color-neon)' : 'var(--color-border)'}`,
                borderRadius: 20,
                fontSize: 11,
                color: active ? 'var(--color-neon)' : 'inherit',
                opacity: c.unlocked ? 1 : 0.4,
              }}
            >
              {c.icon} {c.name}
            </Link>
          );
        })}
      </div>

      <div style={{ padding: '24px 0', fontSize: 11, color: 'var(--color-muted)' }}>
        {products.length} ITEMS
      </div>

      {products.length === 0 ? (
        <div style={{ padding: 80, textAlign: 'center', color: 'var(--color-muted)' }}>
          NO ITEMS MATCH. Try another filter.
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 16,
          }}
        >
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </div>
  );
}
