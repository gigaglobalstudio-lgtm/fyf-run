import Link from 'next/link';
import { db } from '@/lib/db';

export default async function CheckoutCompletePage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const sp = await searchParams;
  const orderNumber = sp.order;

  const order = orderNumber
    ? await db.order.findUnique({
        where: { orderNumber },
        include: { items: { include: { product: true } } },
      })
    : null;

  const eta = new Date();
  eta.setDate(eta.getDate() + 3);

  return (
    <div>
      <section
        style={{
          padding: '120px 48px',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at center, rgba(57,255,20,0.15) 0%, transparent 60%)',
        }}
      >
        <div
          style={{
            fontSize: 14,
            color: 'var(--color-neon)',
            letterSpacing: 4,
            marginBottom: 20,
          }}
        >
          ⚡ WELCOME TO THE FLOW ⚡
        </div>
        <h1
          style={{
            fontSize: 'clamp(36px, 6vw, 56px)',
            fontWeight: 900,
            letterSpacing: -1,
            marginBottom: 20,
          }}
        >
          ORDER PLACED.
        </h1>
        {orderNumber && (
          <div
            className="mono"
            style={{
              color: 'var(--color-muted)',
              letterSpacing: 2,
              marginBottom: 40,
            }}
          >
            Order #{orderNumber}
          </div>
        )}
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/crew/me" className="btn-outline">
            🔗 VIEW ORDER
          </Link>
          <Link href="/shop" className="btn-neon">
            KEEP BROWSING ▸
          </Link>
        </div>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 32,
          padding: 48,
          maxWidth: 900,
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 10, color: 'var(--color-muted)', letterSpacing: 2 }}>
            EXPECTED ARRIVAL
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, marginTop: 8 }}>
            {eta.toISOString().slice(0, 10)}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 10, color: 'var(--color-muted)', letterSpacing: 2 }}>
            POINTS EARNED
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, marginTop: 8, color: 'var(--color-neon)' }}>
            +{order ? Math.floor(order.total / 100).toLocaleString() : '0'}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 10, color: 'var(--color-muted)', letterSpacing: 2 }}>
            TRACKING
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, marginTop: 8 }}>이메일로 발송 예정</div>
        </div>
      </section>
    </div>
  );
}
