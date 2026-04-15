import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentCrew } from '@/lib/auth';

function genOrderNumber() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `FYF-${year}-${month}-${rand}`;
}

export async function POST(req: NextRequest) {
  try {
    const crew = await getCurrentCrew();
    if (!crew) {
      return NextResponse.json(
        { error: '크루 로그인이 필요합니다. /crew/login 에서 로그인하세요.' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { items, total, name, phone, address, paymentMethod } = body;

    if (!items?.length || !name || !phone || !address) {
      return NextResponse.json({ error: '필수 필드 누락' }, { status: 400 });
    }

    const orderNumber = genOrderNumber();

    const order = await db.order.create({
      data: {
        orderNumber,
        crewId: crew.id,
        total,
        shippingName: name,
        shippingPhone: phone,
        shippingAddr: address,
        paymentMethod: paymentMethod || 'KAKAOPAY',
        items: {
          create: items.map((i: any) => ({
            productId: i.productId,
            size: i.size,
            color: i.color,
            qty: i.qty,
            price: i.price,
          })),
        },
      },
    });

    // 포인트 적립 (주문액의 1%)
    await db.crew.update({
      where: { id: crew.id },
      data: { points: { increment: Math.floor(total / 100) } },
    });

    return NextResponse.json({ ok: true, orderNumber: order.orderNumber });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: '주문 처리 실패' }, { status: 500 });
  }
}
