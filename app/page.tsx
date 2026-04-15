import Link from 'next/link';
import { db } from '@/lib/db';
import { getNextDropTime, getCurrentDropNumber } from '@/lib/drop';
import Countdown from '@/components/Countdown';
import ProductCard from '@/components/ProductCard';

export default async function Home() {
  const [featured, characters] = await Promise.all([
    db.product.findMany({ where: { featured: true }, take: 8 }),
    db.character.findMany({ where: { unlocked: true }, orderBy: { id: 'asc' } }),
  ]);
  const nextDrop = getNextDropTime();
  const dropNum = getCurrentDropNumber();

  return (
    <div>
      {/* HERO */}
      <section
        style={{
          padding: '80px 48px',
          background: 'radial-gradient(ellipse at center, rgba(91,42,134,0.3) 0%, transparent 70%)',
          minHeight: 480,
        }}
      >
        <div
          style={{
            color: 'var(--color-muted)',
            fontSize: 12,
            letterSpacing: 3,
            marginBottom: 12,
          }}
        >
          ⚡ ANOMALY DROP #{dropNum} INCOMING
        </div>
        <h1
          style={{
            fontSize: 'clamp(48px, 8vw, 84px)',
            lineHeight: 0.95,
            fontWeight: 900,
            letterSpacing: -2,
            marginBottom: 12,
          }}
        >
          DON'T FOLLOW.
          <br />
          <span style={{ color: 'var(--color-neon)' }}>FIND YOUR FLOW.</span>
        </h1>
        <div style={{ marginTop: 50, display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <div
            style={{
              border: '1px solid var(--color-purple)',
              background: 'rgba(91,42,134,0.1)',
              padding: '20px 28px',
              display: 'inline-block',
            }}
          >
            <div
              style={{
                color: 'var(--color-muted)',
                fontSize: 11,
                letterSpacing: 3,
                marginBottom: 8,
              }}
            >
              NEXT DROP IN
            </div>
            <Countdown target={nextDrop} />
          </div>
          <Link href="/drop" className="btn-neon">
            ENTER THE BUNKER ▸
          </Link>
        </div>
      </section>

      {/* CHARACTERS */}
      <section style={{ padding: '48px', borderTop: '1px solid var(--color-border)' }}>
        <div className="section-title">MEET THE CREW</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 16,
          }}
        >
          {characters.map((c) => (
            <Link
              key={c.slug}
              href={`/world/characters/${c.slug}`}
              style={{
                aspectRatio: '3/4',
                background: 'linear-gradient(145deg, #1f1f1f 0%, #0e0e0e 100%)',
                border: '1px solid var(--color-border)',
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transition: 'all 0.3s',
              }}
            >
              <div style={{ fontSize: 42, color: c.color }}>{c.icon}</div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: 1 }}>{c.name}</div>
                <div
                  style={{
                    fontSize: 10,
                    color: 'var(--color-muted)',
                    letterSpacing: 2,
                    marginTop: 3,
                  }}
                >
                  {c.role}
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: 20, right: 20, color: 'var(--color-neon)' }}>
                →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ padding: '48px', borderTop: '1px solid var(--color-border)' }}>
        <div className="section-title">FEATURED</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 16,
          }}
        >
          {featured.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link href="/shop" className="btn-outline">
            SEE ALL ▸
          </Link>
        </div>
      </section>

      {/* STORY */}
      <section style={{ padding: '48px', borderTop: '1px solid var(--color-border)' }}>
        <div className="section-title">THE STORY</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: -1 }}>
              SEASON 2 · NOW AIRING
            </h2>
            <p style={{ color: 'var(--color-muted)', marginTop: 8 }}>
              The Sound of Bunker · EP 5/12
            </p>
          </div>
          <Link href="/story" className="btn-outline">
            WATCH STORY ▸
          </Link>
        </div>
      </section>
    </div>
  );
}
