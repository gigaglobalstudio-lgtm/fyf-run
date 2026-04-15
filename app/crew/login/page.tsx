'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErr('');
    const res = await fetch('/api/crew/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      router.push('/crew/me');
      router.refresh();
    } else {
      setErr(data.error || '로그인 실패');
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '80px 48px', maxWidth: 500, margin: '0 auto' }}>
      <h1
        style={{
          fontSize: 44,
          fontWeight: 900,
          textAlign: 'center',
          letterSpacing: -1,
          marginBottom: 10,
        }}
      >
        WELCOME BACK
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
        벙커는 닫히지 않는다.
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
            PASSWORD
          </label>
          <input
            type="password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

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
          style={{ width: '100%', padding: 18, fontSize: 14, letterSpacing: 3 }}
        >
          {loading ? 'ENTERING...' : '▸ LOG IN'}
        </button>

        <div
          style={{
            textAlign: 'center',
            marginTop: 24,
            fontSize: 12,
            color: 'var(--color-muted)',
          }}
        >
          아직 크루가 아니라면{' '}
          <Link href="/crew/join" style={{ color: 'var(--color-neon)' }}>
            JOIN
          </Link>
        </div>
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            fontSize: 11,
            color: 'var(--color-muted)',
          }}
        >
          DEMO: demo@fyf.run / fyf1234
        </div>
      </form>
    </div>
  );
}
