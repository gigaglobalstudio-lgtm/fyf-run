import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { createSession } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const crew = await db.crew.findUnique({ where: { email } });
    if (!crew) {
      return NextResponse.json({ error: '이메일 또는 비밀번호 오류' }, { status: 401 });
    }
    const ok = await bcrypt.compare(password, crew.password);
    if (!ok) {
      return NextResponse.json({ error: '이메일 또는 비밀번호 오류' }, { status: 401 });
    }
    await createSession({
      crewId: crew.id,
      crewNumber: crew.crewNumber,
      email: crew.email,
      crewName: crew.crewName,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: '서버 오류' }, { status: 500 });
  }
}
