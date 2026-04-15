'use client';

import { useCart } from '@/lib/cart-store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { items, total, clear } = useCart();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    note: '',
    paymentMethod: 'KAKAOPAY',
  });

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div style={{ padding: 60, textAlign: 'center' }}>LOADING...</div>;

  if (items.length === 0) {
    return (
      <div style={{ padding: 60, textAlign: 'center' }}>
        <p>카트가 비어있습니다.</p>
        <Link href="/shop" className="btn-neon" style={{ display: 'inline-block', marginTop: 20 }}>
          SHOP ▸
        </Link>
      </div>
    );
  }

  const subtotal = total();
  const discount = Math.round(subtotal * 0.1);
  const final = subtotal - discount + (subtotal >= 100000 ? 0 : 3500);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErr('');
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        items: items.map((i) => ({
          productId: i.productId,
          size: i.size,
          color: i.color,
          qty: i.qty,
          price: i.price,
        })),
        total: final,
      }),
    });
    const data = await res.json();
    if (res.ok) {
      clear();
      router.push(`/checkout/complete?order=${data.orderNumber}`);
    } else {
      setErr(data.error || '주문 실패');
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          padding: '24px 48px',
          gap: 24,
          borderBottom: '1px solid var(--color-border)',
          fontSize: 11,
          letterSpacing: 2,
        }}
      >
        <span style={{ color: 'var(--color-neon)', fontWeight: 900 }}>1. SHIPPING</span>
        <span style={{ color: 'var(--color-muted)' }}>2. PAYMENT</span>
        <span style={{ color: 'var(--color-muted)' }}>3. CONFIRM</span>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: 32,
          padding: '32px 48px',
        }}
      >
        <div>
          <div style={{ marginBottom: 28 }}>
            <h3 style={{ fontSize: 11, letterSpacing: 3, color: 'var(--color-muted)', marginBottom: 14 }}>
              ▌ SHIPPING
            </h3>
            <div style={{ marginBottom: 14 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 11,
                  color: 'var(--color-muted)',
                  letterSpacing: 1,
                  marginBottom: 6,
                }}
              >
                NAME
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div style={{ marginBottom: 14 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 11,
                  color: 'var(--color-muted)',
                  letterSpacing: 1,
                  marginBottom: 6,
                }}
              >
                PHONE
              </label>
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="010-0000-0000"
              />
            </div>
            <div style={{ marginBottom: 14 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 11,
                  color: 'var(--color-muted)',
                  letterSpacing: 1,
                  marginBottom: 6,
                }}
              >
                ADDRESS
              </label>
              <input
                required
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="배송 주소 전체"
              />
            </div>
            <div style={{ marginBottom: 14 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 11,
                  color: 'var(--color-muted)',
                  letterSpacing: 1,
                  marginBottom: 6,
                }}
              >
                NOTE
              </label>
              <input
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                placeholder="현관 앞 / 경비실 / 무인택배함"
              />
            </div>
            <div
              style={{
                marginTop: 20,
                padding: 16,
                background: 'rgba(91,42,134,0.1)',
                borderLeft: '3px solid var(--color-purple)',
                fontSize: 12,
              }}
            >
              <strong style={{ color: 'var(--color-neon)' }}>🏢 BUNKER PICKUP 가능</strong>
              <br />
              순천 BUNKER ZERO / 서울 BUNKER 01
              <br />
              <span style={{ color: 'var(--color-muted)' }}>픽업 시 음료 1잔 증정</span>
            </div>
          </div>

          <div style={{ marginBottom: 28 }}>
            <h3
              style={{
                fontSize: 11,
                letterSpacing: 3,
                color: 'var(--color-muted)',
                marginBottom: 14,
              }}
            >
              ▌ PAYMENT
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: 8,
              }}
            >
              {['KAKAOPAY', 'NAVERPAY', 'TOSS', 'CARD', 'BANK'].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setForm({ ...form, paymentMethod: p })}
                  style={{
                    padding: '16px 10px',
                    border: `1px solid ${
                      form.paymentMethod === p ? 'var(--color-neon)' : 'var(--color-border)'
                    }`,
                    color: form.paymentMethod === p ? 'var(--color-neon)' : 'var(--color-fg)',
                    background: 'transparent',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 1,
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {err && (
            <div
              style={{
                padding: 12,
                background: 'rgba(139,58,58,0.2)',
                border: '1px solid var(--color-brick)',
                color: 'var(--color-brick)',
                fontSize: 13,
              }}
            >
              {err}
            </div>
          )}
        </div>

        <div
          style={{
            background: '#0d0d0d',
            border: '1px solid var(--color-border)',
            padding: 24,
            height: 'fit-content',
            position: 'sticky',
            top: 100,
          }}
        >
          <h3
            style={{
              fontSize: 11,
              letterSpacing: 3,
              color: 'var(--color-muted)',
              marginBottom: 14,
            }}
          >
            ▌ ORDER SUMMARY
          </h3>
          {items.map((item) => (
            <div
              key={`${item.productId}-${item.size}-${item.color}`}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '6px 0',
                fontSize: 12,
              }}
            >
              <span>
                {item.name} × {item.qty}
              </span>
              <span>₩{(item.price * item.qty).toLocaleString()}</span>
            </div>
          ))}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '6px 0',
              fontSize: 12,
              color: 'var(--color-muted)',
            }}
          >
            <span>크루 할인</span>
            <span style={{ color: 'var(--color-neon)' }}>−₩{discount.toLocaleString()}</span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 20,
              fontWeight: 900,
              color: 'var(--color-neon)',
              borderTop: '1px solid var(--color-border)',
              marginTop: 10,
              paddingTop: 14,
            }}
          >
            <span>TOTAL</span>
            <span>₩{final.toLocaleString()}</span>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-neon"
            style={{
              width: '100%',
              marginTop: 20,
              padding: 18,
              fontSize: 13,
              letterSpacing: 3,
            }}
          >
            {loading ? 'PROCESSING...' : 'COMMIT TO THE FLOW ▸'}
          </button>
        </div>
      </form>
    </div>
  );
}
