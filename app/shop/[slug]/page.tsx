import { db } from '@/lib/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import AddToCartSection from './AddToCartSection';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await db.product.findUnique({ where: { slug } });
  if (!product) notFound();

  const related = await db.product.findMany({
    where: { line: product.line, NOT: { id: product.id } },
    take: 4,
  });

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
        <Link href="/shop">SHOP</Link> / {product.line} / {product.name}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: 48,
          padding: '16px 48px 48px',
        }}
      >
        <div
          style={{
            aspectRatio: '1',
            background: '#1e1e1e',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 200,
          }}
        >
          {product.image}
        </div>
        <div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 3,
              color: 'var(--color-purple)',
              fontWeight: 700,
            }}
          >
            {product.line} {product.badge ? `· ${product.badge}` : ''}
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: -0.5, margin: '8px 0 20px' }}>
            {product.name}
          </h1>
          <div style={{ fontSize: 28, fontWeight: 900 }}>₩{product.price.toLocaleString()}</div>
          <div style={{ fontSize: 13, color: 'var(--color-neon)', marginTop: 6 }}>
            ⚡ CREW PRICE ₩{Math.round(product.price * 0.9).toLocaleString()} (10% OFF)
          </div>
          <div
            style={{ borderTop: '1px solid var(--color-border)', margin: '24px 0' }}
          />
          <AddToCartSection product={product} />
        </div>
      </div>

      {/* STORY */}
      <div
        style={{
          padding: '32px 48px',
          background: 'rgba(91,42,134,0.08)',
          borderTop: '1px solid var(--color-purple)',
          borderBottom: '1px solid var(--color-purple)',
        }}
      >
        <div className="section-title" style={{ marginBottom: 14 }}>
          THE STORY BEHIND
        </div>
        <blockquote
          style={{
            fontStyle: 'italic',
            fontSize: 18,
            borderLeft: '3px solid var(--color-purple)',
            paddingLeft: 16,
          }}
        >
          "{product.story}"
        </blockquote>
      </div>

      {/* SPEC */}
      <div style={{ padding: '48px' }}>
        <div className="section-title">SPEC</div>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            fontSize: 13,
            color: 'var(--color-muted)',
            lineHeight: 2,
          }}
        >
          <li>· 소재: {product.material}</li>
          <li>· 중량: {product.weight}</li>
          <li>· 사이즈: {product.sizes}</li>
          <li>· 컬러: {product.colors}</li>
          <li>· 설명: {product.description}</li>
        </ul>
      </div>

      {/* RELATED */}
      {related.length > 0 && (
        <div style={{ padding: '48px', borderTop: '1px solid var(--color-border)' }}>
          <div className="section-title">STYLE WITH</div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 16,
            }}
          >
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/shop/${r.slug}`}
                style={{
                  background: '#151515',
                  border: '1px solid var(--color-border)',
                  display: 'block',
                }}
              >
                <div
                  style={{
                    aspectRatio: '4/5',
                    background: '#1e1e1e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 60,
                  }}
                >
                  {r.image}
                </div>
                <div style={{ padding: 12 }}>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>{r.name}</div>
                  <div style={{ fontSize: 13, marginTop: 4, color: 'var(--color-neon)' }}>
                    ₩{r.price.toLocaleString()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
