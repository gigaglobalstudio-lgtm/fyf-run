export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: '40px 32px',
        background: 'var(--color-asphalt)',
        color: 'var(--color-muted)',
        fontSize: 12,
        letterSpacing: 1,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
        <div>
          <strong style={{ color: 'var(--color-neon)' }}>FYF — FIND YOUR FLOW</strong>
          <div style={{ marginTop: 8 }}>© 2026 Giga Global Studio</div>
        </div>
        <div>
          <div>BUNKER ZERO · 순천 남문터</div>
          <div>BUNKER 01 · 서울 성수</div>
          <div>BUNKER 02 · 홍대 (2027 OPEN)</div>
        </div>
        <div>
          <div>CONTACT · hello@fyf.run</div>
          <div>INSTAGRAM · @fyf.official</div>
          <div>TIKTOK · @fyf.run</div>
        </div>
      </div>
      <div
        style={{
          marginTop: 30,
          paddingTop: 20,
          borderTop: '1px solid var(--color-border)',
          fontSize: 10,
          letterSpacing: 2,
        }}
      >
        DON'T FOLLOW. FIND YOUR FLOW.
      </div>
    </footer>
  );
}
