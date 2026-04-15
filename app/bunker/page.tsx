export default function BunkerPage() {
  const bunkers = [
    {
      name: 'BUNKER ZERO',
      loc: '순천 남문터',
      addr: '전남 순천시 조곡동',
      status: 'OPEN',
      hours: '10:00~22:00 (목 22:00~02:00 크루 런)',
      events: [
        '목 22시: Bunker Beat Night (DJ 케이)',
        '토 06시: 새벽 크루 런 (→ 에코덤)',
        '일 종일: 카티보 스파크 시음회',
      ],
      exclusive: true,
    },
    {
      name: 'BUNKER 01',
      loc: '서울 성수',
      addr: '서울시 성동구 성수이로',
      status: 'OPEN',
      hours: '11:00~23:00 (금·토 ~02:00)',
      events: ['금 21시: ANOMALY 드랍 얼리뷰 파티', '토 07시: 한강 크루 런'],
      exclusive: false,
    },
    {
      name: 'BUNKER 02',
      loc: '홍대',
      addr: '2027 Q1 OPEN 예정',
      status: 'SOON',
      hours: '공사 중',
      events: [],
      exclusive: false,
    },
    {
      name: 'BUNKER 07',
      loc: '도쿄 시부야',
      addr: '2029 OPEN · 글로벌 1호',
      status: '2029',
      hours: '시즌4 방영과 동시 오픈',
      events: [],
      exclusive: false,
    },
  ];

  return (
    <div>
      <section
        style={{
          padding: '80px 48px',
          textAlign: 'center',
          background:
            'radial-gradient(ellipse at center, rgba(91,42,134,0.3), transparent 70%)',
        }}
      >
        <h1 style={{ fontSize: 'clamp(40px, 7vw, 64px)', fontWeight: 900, letterSpacing: -2 }}>
          BUNKER NETWORK
        </h1>
        <p style={{ color: 'var(--color-muted)', fontSize: 14, marginTop: 16, letterSpacing: 2 }}>
          3 LOCATIONS · 2 COMING · 1 GLOBAL
        </p>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 24,
          padding: '32px 48px',
        }}
      >
        {bunkers.map((b) => (
          <div
            key={b.name}
            style={{
              background: '#111',
              border: `1px solid ${b.status === 'OPEN' ? 'var(--color-neon)' : 'var(--color-border)'}`,
              padding: 24,
              opacity: b.status === 'OPEN' ? 1 : 0.7,
            }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 6 }}>
              {b.name}{' '}
              <span
                className={
                  b.status === 'OPEN'
                    ? 'badge badge-neon'
                    : b.status === 'SOON'
                    ? 'badge badge-purple'
                    : 'badge badge-purple'
                }
                style={{ marginLeft: 8 }}
              >
                {b.status}
              </span>
            </h3>
            <div
              style={{
                color: 'var(--color-muted)',
                fontSize: 12,
                marginBottom: 14,
                letterSpacing: 1,
              }}
            >
              📍 {b.loc} · {b.addr}
            </div>
            <div style={{ fontSize: 12 }}>운영: {b.hours}</div>
            {b.events.length > 0 && (
              <div
                style={{
                  marginTop: 16,
                  paddingTop: 16,
                  borderTop: '1px dashed var(--color-border)',
                  fontSize: 12,
                  lineHeight: 1.9,
                }}
              >
                <span
                  style={{
                    color: 'var(--color-neon)',
                    fontSize: 10,
                    letterSpacing: 2,
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  ▌ THIS WEEK
                </span>
                {b.events.map((e) => (
                  <div key={e}>· {e}</div>
                ))}
              </div>
            )}
            {b.exclusive && (
              <div
                style={{
                  marginTop: 14,
                  paddingTop: 14,
                  borderTop: '1px dashed var(--color-border)',
                  fontSize: 12,
                  color: 'var(--color-neon)',
                }}
              >
                ⚡ BUNKER ZERO 전용 굿즈 3종
              </div>
            )}
            {b.status === 'OPEN' && (
              <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                <button
                  style={{
                    flex: 1,
                    padding: 10,
                    background: 'transparent',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-fg)',
                    fontSize: 11,
                    letterSpacing: 1,
                  }}
                >
                  길찾기
                </button>
                <button
                  style={{
                    flex: 1,
                    padding: 10,
                    background: 'transparent',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-fg)',
                    fontSize: 11,
                    letterSpacing: 1,
                  }}
                >
                  전화
                </button>
                <button
                  style={{
                    flex: 1,
                    padding: 10,
                    background: 'transparent',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-fg)',
                    fontSize: 11,
                    letterSpacing: 1,
                  }}
                >
                  픽업 설정
                </button>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
