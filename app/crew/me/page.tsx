import { getCurrentCrew } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import LogoutButton from './LogoutButton';

export default async function MyPage() {
  const crew = await getCurrentCrew();
  if (!crew) redirect('/crew/login');

  const orders = await db.order.findMany({
    where: { crewId: crew.id },
    include: { items: { include: { product: true } } },
    orderBy: { createdAt: 'desc' },
    take: 10,
  });

  const char = await db.character.findUnique({ where: { slug: crew.favChar } });

  return (
    <div>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr auto',
          gap: 32,
          alignItems: 'center',
          padding: '40px 48px',
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            background: '#1a1a1a',
            border: '2px solid var(--color-neon)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 48,
          }}
        >
          {char?.icon || '⚡'}
        </div>
        <div>
          <div
            className="mono"
            style={{
              fontSize: 32,
              fontWeight: 900,
              color: 'var(--color-neon)',
              letterSpacing: 3,
            }}
          >
            CREW #{crew.crewNumber}
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, marginTop: 4 }}>{crew.crewName}</div>
          <div
            style={{
              color: 'var(--color-muted)',
              fontSize: 12,
              marginTop: 4,
              letterSpacing: 1,
            }}
          >
            가장 공감하는 캐릭터 {char?.icon} {char?.name} · JOINED{' '}
            {crew.createdAt.toISOString().slice(0, 10)}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--color-neon)' }}>
            {crew.points.toLocaleString()}
          </div>
          <div style={{ fontSize: 10, color: 'var(--color-muted)', letterSpacing: 2 }}>
            CREW POINTS
          </div>
        </div>
      </section>

      <section style={{ padding: '32px 48px', borderTop: '1px solid var(--color-border)' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 11,
            color: 'var(--color-muted)',
            letterSpacing: 2,
            marginBottom: 10,
          }}
        >
          <span style={{ color: crew.rank === 'ROOKIE' ? 'var(--color-neon)' : '' }}>ROOKIE</span>
          <span style={{ color: crew.rank === 'RUNNER' ? 'var(--color-neon)' : '' }}>RUNNER</span>
          <span style={{ color: crew.rank === 'FLOW' ? 'var(--color-neon)' : '' }}>FLOW</span>
          <span style={{ color: crew.rank === 'MASTER' ? 'var(--color-neon)' : '' }}>MASTER</span>
        </div>
        <div
          style={{
            height: 10,
            background: '#1a1a1a',
            border: '1px solid var(--color-border)',
            position: 'relative',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${
                crew.rank === 'ROOKIE'
                  ? 10
                  : crew.rank === 'RUNNER'
                  ? 47
                  : crew.rank === 'FLOW'
                  ? 80
                  : 100
              }%`,
              background: 'linear-gradient(90deg, var(--color-purple), var(--color-neon))',
            }}
          />
        </div>
        <div
          style={{
            textAlign: 'right',
            fontSize: 11,
            color: 'var(--color-muted)',
            marginTop: 8,
          }}
        >
          현재 등급: {crew.rank} · 다음 등급 조건: 주문 3회 + 러닝 누적 50km
        </div>
      </section>

      <section
        style={{
          padding: '20px 48px',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          gap: 40,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--color-neon)' }}>12.4</div>
          <div style={{ fontSize: 10, color: 'var(--color-muted)', letterSpacing: 2, marginTop: 4 }}>
            KM · THIS MONTH
          </div>
        </div>
        <div>
          <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--color-neon)' }}>3</div>
          <div style={{ fontSize: 10, color: 'var(--color-muted)', letterSpacing: 2, marginTop: 4 }}>
            RUNS
          </div>
        </div>
        <div>
          <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--color-neon)' }}>48:12</div>
          <div style={{ fontSize: 10, color: 'var(--color-muted)', letterSpacing: 2, marginTop: 4 }}>
            AVG PACE
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginLeft: 'auto' }}>
          {['STRAVA ✓', 'NIKE RUN', 'APPLE HEALTH'].map((s) => (
            <div
              key={s}
              style={{
                padding: '8px 14px',
                border: '1px solid var(--color-border)',
                fontSize: 11,
                letterSpacing: 1,
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '20px 48px', borderTop: '1px solid var(--color-border)' }}>
        <div className="section-title" style={{ paddingBottom: 10 }}>
          RECENT ORDERS
        </div>
        {orders.length === 0 ? (
          <div style={{ padding: '20px 0', color: 'var(--color-muted)', fontSize: 13 }}>
            아직 주문 내역이 없습니다.
          </div>
        ) : (
          orders.map((o) => (
            <div
              key={o.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr 120px 100px',
                padding: '14px 0',
                borderBottom: '1px dashed var(--color-border)',
                fontSize: 13,
                gap: 12,
              }}
            >
              <span style={{ color: 'var(--color-muted)' }}>
                {o.createdAt.toISOString().slice(0, 10)}
              </span>
              <span>{o.items.map((i) => i.product.name).join(' / ')}</span>
              <span>₩{o.total.toLocaleString()}</span>
              <span style={{ color: 'var(--color-neon)', fontSize: 11, letterSpacing: 2 }}>
                {o.status}
              </span>
            </div>
          ))
        )}
      </section>

      <section
        style={{
          padding: '28px 48px',
          borderTop: '1px solid var(--color-border)',
          background: 'rgba(57,255,20,0.03)',
        }}
      >
        <div style={{ color: 'var(--color-neon)', fontSize: 12, letterSpacing: 3, marginBottom: 12 }}>
          ▌ CREW PERKS
        </div>
        <ul
          style={{
            listStyle: 'none',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 12,
            fontSize: 13,
            padding: 0,
          }}
        >
          <li>▸ 상시 10% 할인</li>
          <li>▸ ANOMALY 드랍 구매권</li>
          <li>▸ 벙커 카페 음료 무료 리필</li>
          <li>▸ 생일 달 프리 굿즈</li>
        </ul>
      </section>

      <section style={{ padding: '32px 48px', borderTop: '1px solid var(--color-border)' }}>
        <LogoutButton />
      </section>
    </div>
  );
}
