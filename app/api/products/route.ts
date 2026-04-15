import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const line = searchParams.get('line');
  const character = searchParams.get('character');

  const where: any = {};
  if (line) where.line = line;
  if (character) where.character = character;

  const products = await db.product.findMany({ where, orderBy: { createdAt: 'desc' } });
  return NextResponse.json(products);
}
