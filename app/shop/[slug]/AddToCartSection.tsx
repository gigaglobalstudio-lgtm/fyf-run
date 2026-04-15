'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart-store';

export default function AddToCartSection({ product }: { product: any }) {
  const sizes = product.sizes.split(',');
  const colors = product.colors.split(',');
  const [size, setSize] = useState(sizes[Math.floor(sizes.length / 2)]);
  const [color, setColor] = useState(colors[0]);
  const [added, setAdded] = useState(false);
  const addItem = useCart((s) => s.addItem);
  const router = useRouter();

  const handleAdd = () => {
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      size,
      color,
      qty: 1,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuyNow = () => {
    handleAdd();
    setTimeout(() => router.push('/cart'), 100);
  };

  return (
    <>
      <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--color-muted)', marginBottom: 10 }}>
        SIZE
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {sizes.map((s: string) => (
          <button
            key={s}
            onClick={() => setSize(s)}
            style={{
              minWidth: 46,
              height: 46,
              border: `1px solid ${size === s ? 'var(--color-neon)' : 'var(--color-border)'}`,
              background: 'transparent',
              color: size === s ? 'var(--color-neon)' : 'var(--color-fg)',
              fontSize: 12,
              fontWeight: 700,
              padding: '0 10px',
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--color-muted)', marginBottom: 10 }}>
        COLOR
      </div>
      <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
        {colors.map((c: string) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            style={{
              padding: '8px 14px',
              border: `1px solid ${color === c ? 'var(--color-neon)' : 'var(--color-border)'}`,
              background: 'transparent',
              color: color === c ? 'var(--color-neon)' : 'var(--color-fg)',
              fontSize: 11,
              letterSpacing: 1,
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={handleAdd} className="btn-outline" style={{ flex: 1 }}>
          {added ? '✓ ADDED' : 'ADD TO CART'}
        </button>
        <button onClick={handleBuyNow} className="btn-neon" style={{ flex: 1 }}>
          BUY NOW ▸
        </button>
      </div>

      <div style={{ marginTop: 16, fontSize: 12, color: 'var(--color-muted)' }}>
        📍 성수 벙커 재고 있음 · 순천 벙커 재고 2점
      </div>
    </>
  );
}
