'use client';

import { useCart } from '@/lib/cart-store';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const { items, removeItem, updateQty, total } = useCart();
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div style={{ padding: 60, textAlign: 'center', color: 'var(--color-muted)' }}>
        LOADING...
      </div>
    );

  const subtotal = total();
  const discount = Math.round(subtotal * 0.1);
  const shipping = subtotal >= 100000 ? 0 : 3500;
  const final = subtotal - discount + shipping;

  if (items.length === 0) {
    return (
      <div style={{ padding: '80px 48px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: -1 }}>YOUR BAG IS EMPTY</h1>
        <p style={{ color: 'var(--color-muted)', marginTop: 12, fontSize: 14 }}>
          벙커는 비어있는 자에게 인내심을 가진다.
        </p>
        <Link
          href="/shop"
          className="btn-neon"
          style={{ display: 'inline-block', marginTop: 32, padding: '16px 32px' }}
        >
          BROWSE SHOP ▸
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1
        style={{
          padding: '36px 48px 20px',
          fontSize: 28,
          fontWeight: 900,
          letterSpacing: 1,
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        YOUR BUNKER BAG{' '}
        <span
          style={{ color: 'var(--color-muted)', fontSize: 14, fontWeight: 400, marginLeft: 12 }}
        >
          ({items.length} {items.length === 1 ? 'ITEM' : 'ITEMS'})
        </span>
      </h1>

      {items.map((item) => (
        <div
          key={`${item.productId}-${item.size}-${item.color}`}
          style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr auto',
            gap: 24,
            padding: '20px 48px',
            borderBottom: '1px solid var(--color-border)',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              background: '#1e1e1e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 60,
            }}
          >
            {item.image}
          </div>
          <div>
            <Link href={`/shop/${item.slug}`} style={{ fontSize: 14, fontWeight: 700 }}>
              {item.name}
            </Link>
            <div style={{ fontSize: 12, color: 'var(--color-muted)', marginTop: 4 }}>
              {item.color} · {item.size}
            </div>
            <div
              style={{
                display: 'inline-flex',
                border: '1px solid var(--color-border)',
                marginTop: 10,
              }}
            >
              <button
                onClick={() => updateQty(item.productId, item.size, item.color, item.qty - 1)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--color-fg)',
                  padding: '6px 10px',
                }}
              >
                −
              </button>
              <span
                style={{
                  padding: '6px 12px',
                  borderLeft: '1px solid var(--color-border)',
                  borderRight: '1px solid var(--color-border)',
                }}
              >
                {item.qty}
              </span>
              <button
                onClick={() => updateQty(item.productId, item.size, item.color, item.qty + 1)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--color-fg)',
                  padding: '6px 10px',
                }}
              >
                +
              </button>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 16, fontWeight: 900 }}>
              ₩{(item.price * item.qty).toLocaleString()}
            </div>
            <button
              onClick={() => removeItem(item.productId, item.size, item.color)}
              style={{
                color: 'var(--color-muted)',
                fontSize: 11,
                background: 'none',
                border: 'none',
                marginTop: 10,
                letterSpacing: 1,
              }}
            >
              REMOVE
            </button>
          </div>
        </div>
      ))}

      <div style={{ padding: '30px 48px', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 14 }}>
          <span>상품 소계</span>
          <span>₩{subtotal.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 14 }}>
          <span>크루 할인 (10%)</span>
          <span style={{ color: 'var(--color-neon)' }}>−₩{discount.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 14 }}>
          <span>배송비</span>
          <span>{shipping === 0 ? '무료 (10만원 이상)' : `₩${shipping.toLocaleString()}`}</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 22,
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

        <Link
          href="/checkout"
          className="btn-neon"
          style={{
            display: 'block',
            textAlign: 'center',
            width: '100%',
            marginTop: 20,
            padding: 18,
            fontSize: 14,
            letterSpacing: 3,
          }}
        >
          CHECKOUT ▸
        </Link>
      </div>
    </div>
  );
}
