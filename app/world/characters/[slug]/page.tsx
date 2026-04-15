import { db } from '@/lib/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

export const dynamic = 'force-dynamic';


export default async function CharacterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const char = await db.character.findUnique({ where: { slug } });
  if (!char) notFound();

  const products = await db.product.findMany({ where: { character: slug } });

  return (
    <div>
      <div
        style={{
          padding: '20px 48px',
          fontSize: 11,
          color: 'var(--color-muted)',
          letterSpacing: 1,
        }}
      >
        <Link href="/world">WORLD</Link> / CHARACTERS / {char.name}
      </div>

      <section
        style={{
          height: 500,
          background: `
            linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.95) 100%),
            radial-gradient(ellipse at 50% 30%, ${char.color}80 0%, transparent 60%),
            #0a0a0a
          `,
          display: 'flex',
          alignItems: 'flex-end',
          padding: 48,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 60,
            right: 60,
            fontSize: 200,
            opacity: 0.2,
          }}
        >
          {char.icon}
        </div>
        <div>
          <h1 style={{ fontSize: 80, fontWeight: 900, letterSpacing: -2, lineHeight: 0.95 }}>
            {char.name}
          </h1>
          <div
            style={{
              color: 'var(--color-muted)',
              fontSize: 16,
              fontStyle: 'italic',
              marginTop: 10,
              letterSpacing: 1,
            }}
          >
            "{char.quote}"
          </div>
        </div>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          padding: '32px 48px',
          gap: 24,
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div>
          <div style={{ fontSize: 10, letterSpacing: 2, color: 'var(--color-muted)' }}>AGE</div>
          <div style={{ fontSize: 15, fontWeight: 700, marginTop: 6 }}>{char.age}</div>
        </div>
        <div>
          <div style={{ fontSize: 10, letterSpacing: 2, color: 'var(--color-muted)' }}>HEIGHT</div>
          <div style={{ fontSize: 15, fontWeight: 700, marginTop: 6 }}>{char.height}</div>
        </div>
        <div>
          <div style={{ fontSize: 10, letterSpacing: 2, color: 'var(--color-muted)' }}>ORIGIN</div>
          <div style={{ fontSize: 15, fontWeight: 700, marginTop: 6 }}>{char.origin}</div>
        </div>
        <div>
          <div style={{ fontSize: 10, letterSpacing: 2, color: 'var(--color-muted)' }}>
            POSITION
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, marginTop: 6 }}>{char.role}</div>
        </div>
      </section>

      <section
        style={{
          padding: '40px 48px',
          borderTop: '1px solid var(--color-border)',
          background: 'rgba(91,42,134,0.05)',
        }}
      >
        <div className="section-title">▌ ORIGIN</div>
        <p style={{ fontSize: 14, lineHeight: 1.9, maxWidth: 800 }}>{char.originStory}</p>
      </section>

      {products.length > 0 && (
        <section style={{ padding: '40px 48px', borderTop: '1px solid var(--color-border)' }}>
          <div className="section-title">WEAR LIKE {char.name}</div>
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
        </section>
      )}
    </div>
  );
}
