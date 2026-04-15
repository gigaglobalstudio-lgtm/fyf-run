import { getNextDropTime, getCurrentDropNumber } from '@/lib/drop';
import Countdown from '@/components/Countdown';

export default function DropPage() {
  const nextDrop = getNextDropTime();
  const dropNum = getCurrentDropNumber();

  return (
    <div>
      <section
        style={{
          textAlign: 'center',
          padding: '100px 48px',
          background: 'radial-gradient(ellipse at center, rgba(91,42,134,0.4) 0%, transparent 60%)',
        }}
      >
        <div
          style={{ fontSize: 18, color: 'var(--color-neon)', letterSpacing: 6, marginBottom: 16 }}
        >
          ⚡ ANOMALY DROP #{dropNum} ⚡
        </div>
        <h1
          style={{
            fontSize: 'clamp(40px, 7vw, 72px)',
            fontWeight: 900,
            letterSpacing: -2,
            lineHeight: 1,
            marginBottom: 14,
          }}
        >
          GLITCH IN
          <br />
          THE SYSTEM
        </h1>
        <div
          style={{
            color: 'var(--color-muted)',
            fontSize: 14,
            letterSpacing: 4,
            marginBottom: 50,
          }}
        >
          GLITCH CHARACTER 콜라보 · 한정 500세트
        </div>

        <div
          style={{
            display: 'inline-block',
            padding: '28px 44px',
            border: '2px solid var(--color-neon)',
          }}
        >
          <Countdown target={nextDrop} size="lg" />
        </div>

        <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center', gap: 14 }}>
          <button className="btn-outline">🔔 SET REMINDER</button>
          <button className="btn-neon">NOTIFY ME</button>
        </div>
      </section>

      <section style={{ padding: '48px' }}>
        <div className="section-title">WHAT'S DROPPING</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}
        >
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              style={{
                aspectRatio: '4/5',
                background: '#0d0d0d',
                border: '1px dashed var(--color-border)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ color: '#2a2a2a', fontSize: 100, fontWeight: 900 }}>???</div>
              <div
                style={{
                  position: 'absolute',
                  bottom: 14,
                  left: 14,
                  fontSize: 10,
                  color: 'var(--color-muted)',
                  letterSpacing: 2,
                }}
              >
                ITEM 0{n} · REVEAL {n === 3 ? 'DROP DAY' : 'D-1'}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          margin: '0 48px 48px',
          padding: 24,
          background: '#111',
          borderLeft: '3px solid var(--color-brick)',
        }}
      >
        <h3 style={{ fontSize: 12, letterSpacing: 3, color: 'var(--color-brick)', marginBottom: 12 }}>
          ▌ RULES
        </h3>
        <ul style={{ paddingLeft: 20, fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.8 }}>
          <li>크루 ID 보유자만 구매 가능</li>
          <li>인당 1점 한정</li>
          <li>드랍 시작 시점 결제 선착순</li>
          <li>재판매 적발 시 영구 차단. 크루 번호 무효화</li>
        </ul>
      </section>
    </div>
  );
}
