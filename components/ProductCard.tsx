import Link from 'next/link';

type Product = {
  slug: string;
  name: string;
  line: string;
  price: number;
  badge: string | null;
  stockLow: boolean;
  character: string | null;
  image: string;
};

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      href={`/shop/${p.slug}`}
      style={{
        background: '#151515',
        border: '1px solid var(--color-border)',
        display: 'block',
        transition: 'border-color 0.2s',
      }}
    >
      <div
        style={{
          aspectRatio: '4/5',
          background: '#1e1e1e',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 72,
        }}
      >
        {p.image}
        {p.badge && (
          <span
            className={
              p.badge === 'ANOMALY'
                ? 'badge badge-purple'
                : p.badge === 'NEW'
                ? 'badge badge-neon'
                : 'badge badge-brick'
            }
            style={{ position: 'absolute', top: 12, left: 12 }}
          >
            {p.badge}
          </span>
        )}
        {p.stockLow && (
          <span className="badge badge-brick" style={{ position: 'absolute', top: 12, right: 12 }}>
            LOW
          </span>
        )}
      </div>
      <div style={{ padding: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>{p.name}</div>
        <div style={{ fontSize: 14, marginTop: 4, color: 'var(--color-neon)' }}>
          ₩{p.price.toLocaleString()}
        </div>
        <div style={{ fontSize: 10, color: 'var(--color-muted)', marginTop: 4, letterSpacing: 1 }}>
          {p.character ? `#${p.character} · ` : ''}
          {p.line}
        </div>
      </div>
    </Link>
  );
}
