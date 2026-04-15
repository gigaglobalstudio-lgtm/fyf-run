import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { createSession, generateCrewNumber } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { email, password, crewName, favChar, runStyle } = await req.json();

    if (!email || !password || !crewName) {
      return NextResponse.json({ error: '필수 필드 누락' }, { status: 400 });
    }

    const existing = await db.crew.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: '이미 가입된 이메일' }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);

    // First create to get ID, then update with crew number
    const crew = await db.crew.create({
      data: {
        email,
        password: hashed,
        crewName,
        favChar: favChar || 'cattivo',
        runStyle: runStyle || 'long',
        crewNumber: 'TEMP',
      },
    });

    const crewNumber = generateCrewNumber(crew.id);
    await db.crew.update({ where: { id: crew.id }, data: { crewNumber } });

    await createSession({
      crewId: crew.id,
      crewNumber,
      email: crew.email,
      crewName: crew.crewName,
    });

    return NextResponse.json({ ok: true, crewNumber });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: '서버 오류' }, { status: 500 });
  }
}
