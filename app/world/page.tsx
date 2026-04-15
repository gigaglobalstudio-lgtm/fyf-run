import Link from 'next/link';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';


export default async function WorldPage() {
  const chars = await db.character.findMany({ orderBy: { id: 'asc' } });

  return (
    <div>
      <section
        style={{
          padding: '80px 48px',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at center, rgba(91,42,134,0.2), transparent 70%)',
        }}
      >
        <h1 style={{ fontSize: 'clamp(40px, 7vw, 72px)', fontWeight: 900, letterSpacing: -2 }}>
          WELCOME TO
          <br />
          <span style={{ color: 'var(--color-purple)' }}>NEW JUNCHEON</span>
        </h1>
        <p
          style={{
            color: 'var(--color-muted)',
            fontSize: 14,
            letterSpacing: 2,
            marginTop: 20,
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          메트로놈의 통제 아래 모든 속도가 규격화된 도시.
          <br />
          벙커의 아웃사이더들이 자신만의 리듬을 찾는 곳.
        </p>
      </section>

      <section style={{ padding: '48px', borderTop: '1px solid var(--color-border)' }}>
        <div className="section-title">8 DISTRICTS</div>
        <div
          style={{
            aspectRatio: '2/1',
            background: `
              radial-gradient(circle at 15% 60%, var(--color-neon) 0 6px, transparent 7px),
              radial-gradient(circle at 35% 30%, var(--color-purple) 0 6px, transparent 7px),
              radial-gradient(circle at 60% 70%, var(--color-brick) 0 6px, transparent 7px),
              radial-gradient(circle at 80% 40%, var(--color-neon) 0 6px, transparent 7px),
              #0f0f0f
            `,
            border: '1px dashed var(--color-border)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 20,
              left: 20,
              fontSize: 11,
              color: 'var(--color-muted)',
              letterSpacing: 3,
            }}
          >
            NEW JUNCHEON · INTERACTIVE MAP
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 8,
            marginTop: 20,
            fontSize: 11,
            color: 'var(--color-muted)',
            letterSpacing: 2,
          }}
        >
          {[
            '📍 남문터 (VAULT)',
            '📍 에코덤 (ECHODOME)',
            '📍 그리드센트럴',
            '📍 브릿지라인',
            '📍 렌즈팩토리',
            '📍 스파크앨리',
            '📍 옥상네트워크',
            '📍 하수트랙',
          ].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
      </section>

      <section style={{ padding: '48px', borderTop: '1px solid var(--color-border)' }}>
        <div className="section-title">CHARACTERS</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 16,
          }}
        >
          {chars.map((c) => {
            const Card = (
              <div
                style={{
                  aspectRatio: '3/4',
                  background: 'linear-gradient(145deg, #1f1f1f 0%, #0e0e0e 100%)',
                  border: '1px solid var(--color-border)',
                  padding: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  opacity: c.unlocked ? 1 : 0.5,
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
                {!c.unlocked && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'var(--color-purple)',
                      color: 'white',
                      padding: '6px 12px',
                      fontSize: 10,
                      letterSpacing: 2,
                    }}
                  >
                    SEASON 2 UNLOCK
                  </div>
                )}
              </div>
            );
            return c.unlocked ? (
              <Link key={c.slug} href={`/world/characters/${c.slug}`}>
                {Card}
              </Link>
            ) : (
              <div key={c.slug}>{Card}</div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
