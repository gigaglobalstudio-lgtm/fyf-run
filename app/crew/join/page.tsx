'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function JoinPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [form, setForm] = useState({
    email: '',
    password: '',
    crewName: '',
    favChar: 'cattivo',
    runStyle: 'long',
    agreed: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreed) {
      setErr('크루 규칙 동의 필요');
      return;
    }
    setLoading(true);
    setErr('');
    const res = await fetch('/api/crew/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      router.push('/crew/me');
      router.refresh();
    } else {
      setErr(data.error || '가입 실패');
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '80px 48px', maxWidth: 640, margin: '0 auto' }}>
      <h1
        style={{
          fontSize: 44,
          fontWeight: 900,
          textAlign: 'center',
          letterSpacing: -1,
          marginBottom: 10,
        }}
      >
        JOIN THE BUNKER
      </h1>
      <p
        style={{
          textAlign: 'center',
          color: 'var(--color-muted)',
          fontSize: 13,
          fontStyle: 'italic',
          marginBottom: 50,
        }}
      >
        당신의 크루 번호가 발급됩니다. 돌이킬 수 없음.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 22 }}>
          <label
            style={{
              display: 'block',
              fontSize: 11,
              letterSpacing: 2,
              color: 'var(--color-muted)',
              marginBottom: 8,
            }}
          >
            EMAIL
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div style={{ marginBottom: 22 }}>
          <label
            style={{
              display: 'block',
              fontSize: 11,
              letterSpacing: 2,
              color: 'var(--color-muted)',
              marginBottom: 8,
            }}
          >
            PASSWORD (최소 6자)
          </label>
          <input
            type="password"
            required
            minLength={6}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <div style={{ marginBottom: 22 }}>
          <label
            style={{
              display: 'block',
              fontSize: 11,
              letterSpacing: 2,
              color: 'var(--color-muted)',
              marginBottom: 8,
            }}
          >
            CREW NAME
          </label>
          <input
            required
            maxLength={20}
            value={form.crewName}
            onChange={(e) => setForm({ ...form, crewName: e.target.value })}
            placeholder="호칭 (본명 ×)"
          />
          <div style={{ fontSize: 11, color: 'var(--color-muted)', marginTop: 6 }}>
            ⚠ 한 번 정하면 바꿀 수 없음
          </div>
        </div>

        <div style={{ marginBottom: 22 }}>
          <label
            style={{
              display: 'block',
              fontSize: 11,
              letterSpacing: 2,
              color: 'var(--color-muted)',
              marginBottom: 8,
            }}
          >
            가장 공감하는 캐릭터
          </label>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              ['cattivo', '⚡ 카티보'],
              ['len', '📷 렌'],
              ['roco', '🎧 로코'],
              ['dr-block', '📊 닥터블록'],
            ].map(([val, label]) => (
              <button
                type="button"
                key={val}
                onClick={() => setForm({ ...form, favChar: val })}
                style={{
                  padding: '10px 16px',
                  border: `1px solid ${form.favChar === val ? 'var(--color-neon)' : 'var(--color-border)'}`,
                  color: form.favChar === val ? 'var(--color-neon)' : 'var(--color-fg)',
                  background: 'transparent',
                  fontSize: 12,
                  letterSpacing: 1,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 22 }}>
          <label
            style={{
              display: 'block',
              fontSize: 11,
              letterSpacing: 2,
              color: 'var(--color-muted)',
              marginBottom: 8,
            }}
          >
            러닝 스타일
          </label>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              ['fast', '빠르게'],
              ['long', '길게'],
              ['sometimes', '가끔'],
              ['notyet', '아직 안 달림'],
            ].map(([val, label]) => (
              <button
                type="button"
                key={val}
                onClick={() => setForm({ ...form, runStyle: val })}
                style={{
                  padding: '10px 16px',
                  border: `1px solid ${form.runStyle === val ? 'var(--color-neon)' : 'var(--color-border)'}`,
                  color: form.runStyle === val ? 'var(--color-neon)' : 'var(--color-fg)',
                  background: 'transparent',
                  fontSize: 12,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            margin: '20px 0',
            fontSize: 12,
            color: 'var(--color-muted)',
            cursor: 'pointer',
          }}
        >
          <input
            type="checkbox"
            checked={form.agreed}
            onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
            style={{ width: 'auto' }}
          />
          <span>크루 규칙 동의 (이걸 안 읽으면 차단)</span>
        </label>

        {err && (
          <div
            style={{
              padding: 12,
              background: 'rgba(139,58,58,0.2)',
              border: '1px solid var(--color-brick)',
              color: 'var(--color-brick)',
              fontSize: 13,
              marginBottom: 16,
            }}
          >
            {err}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-neon"
          style={{ width: '100%', padding: 18, fontSize: 14, letterSpacing: 3, marginTop: 16 }}
        >
          {loading ? 'ENTERING...' : '▸ ENTER THE BUNKER'}
        </button>

        <div style={{ textAlign: 'center', marginTop: 24, fontSize: 12, color: 'var(--color-muted)' }}>
          이미 크루라면{' '}
          <Link href="/crew/login" style={{ color: 'var(--color-neon)' }}>
            LOG IN
          </Link>
        </div>
      </form>
    </div>
  );
}
