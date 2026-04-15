const seasons = [
  {
    title: 'SEASON 1 · THE ANOMALY',
    info: '12 EPISODES · COMPLETED',
    state: 'done',
    episodes: [
      ['01', 'THE SPARK'],
      ['02', 'LENS FLARE'],
      ['03', 'SILENT BRIDGE'],
      ['04', 'DATA BROKEN'],
      ['05', 'THE BUNKER'],
      ['06', 'FIRST ANOMALY'],
      ['07', 'METRONOME ARRIVES'],
      ['08', "BROTHER'S SHADOW"],
      ['09', 'ROOFTOP CHASE'],
      ['10', "CATTIVO'S SECRET"],
      ['11', 'BROKEN METRONOME'],
      ['12', 'FIND YOUR FLOW'],
    ],
  },
  {
    title: 'SEASON 2 · THE SOUND OF BUNKER',
    info: 'NOW AIRING · EP 5/12',
    state: 'airing',
    episodes: [
      ['01', 'QUIET RIOT'],
      ['02', 'GIRL IN ECHODOME'],
      ['03', 'HYPERACUSIS'],
      ['04', 'NOON VS FYF'],
      ['05', 'SOUND MAP'],
      ['06', 'DAYLIGHT RUN'],
      ['07', 'MS. TEMPO'],
      ['08', 'SILENT WEEK'],
      ['09', "FATHER'S TAPE"],
      ['10', 'SONIC SLIPSTREAM'],
      ['11', 'BETRAYED'],
      ['12', 'BUNKER MOVES'],
    ],
  },
  {
    title: 'SEASON 3 · PHASE SHIFT',
    info: 'COMING 2028',
    state: 'upcoming',
    episodes: [],
  },
];

export default function StoryPage() {
  return (
    <div>
      <section
        style={{
          padding: '80px 48px',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at center, rgba(91,42,134,0.2), transparent 70%)',
        }}
      >
        <h1 style={{ fontSize: 'clamp(40px, 7vw, 64px)', fontWeight: 900, letterSpacing: -2 }}>
          THE STORY
        </h1>
        <p style={{ color: 'var(--color-muted)', fontSize: 14, marginTop: 16, letterSpacing: 2 }}>
          불규칙한 심장박동을 가진 이들의 이야기
        </p>
      </section>

      {seasons.map((s) => (
        <section
          key={s.title}
          style={{
            padding: '40px 48px',
            borderTop: '1px solid var(--color-border)',
            opacity: s.state === 'upcoming' ? 0.5 : 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: 24,
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: -0.5 }}>{s.title}</h2>
            <div
              style={{
                color: s.state === 'airing' ? 'var(--color-neon)' : 'var(--color-muted)',
                fontSize: 11,
                letterSpacing: 2,
                fontWeight: 700,
              }}
            >
              {s.info}
            </div>
          </div>
          {s.episodes.length === 0 ? (
            <div
              style={{
                padding: 40,
                textAlign: 'center',
                color: 'var(--color-muted)',
                border: '1px dashed var(--color-border)',
                fontSize: 13,
                letterSpacing: 2,
              }}
            >
              ⚡ GLITCH ENTERS THE BUNKER ⚡
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 12,
              }}
            >
              {s.episodes.map(([num, title], i) => {
                const isAiringCurrent = s.state === 'airing' && i === 4;
                const isLocked = s.state === 'airing' && i > 4;
                return (
                  <div
                    key={num}
                    style={{
                      aspectRatio: '3/4',
                      background: '#151515',
                      border: isAiringCurrent
                        ? '1px solid var(--color-neon)'
                        : '1px solid var(--color-border)',
                      padding: 14,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      opacity: isLocked ? 0.3 : 1,
                    }}
                  >
                    <div>
                      <div
                        style={{ fontSize: 40, fontWeight: 900, color: 'var(--color-purple)', lineHeight: 1 }}
                      >
                        {num}
                      </div>
                      <div style={{ fontSize: 12, fontWeight: 700, marginTop: 8 }}>{title}</div>
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        color: isAiringCurrent ? 'var(--color-neon)' : 'var(--color-muted)',
                        letterSpacing: 1,
                      }}
                    >
                      {s.state === 'done'
                        ? 'COMPLETED'
                        : isAiringCurrent
                        ? 'THIS WEEK'
                        : isLocked
                        ? 'NEXT WEEK'
                        : 'COMPLETED'}
                    </div>
                    {isAiringCurrent && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 10,
                          right: 10,
                          background: 'var(--color-neon)',
                          color: 'var(--color-asphalt)',
                          padding: '2px 6px',
                          fontSize: 9,
                          fontWeight: 900,
                          letterSpacing: 1,
                        }}
                      >
                        NOW
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
