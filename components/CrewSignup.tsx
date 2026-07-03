"use client";

import { useState } from "react";
import { EcgLine } from "./EcgLogo";

/** 크루 소식(뉴스레터) 구독 — 이메일 캡처. 데모: localStorage 저장 + 성공 상태 */
export function CrewSignup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      setError("이메일 형식을 확인해주세요.");
      return;
    }
    try {
      const raw = localStorage.getItem("fyf-subscribers");
      const list: string[] = raw ? JSON.parse(raw) : [];
      if (!list.includes(email)) list.push(email);
      localStorage.setItem("fyf-subscribers", JSON.stringify(list));
    } catch {}
    setDone(true);
  }

  return (
    <section className="border-t border-darkline bg-ink text-paper">
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <EcgLine className="mx-auto h-5 w-28 text-flow" animate />
        <h2 className="font-display mt-6 text-4xl leading-tight md:text-5xl">
          크루에 합류하세요
        </h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-paper/60">
          신상 드롭, 러닝 클럽 일정, 한정 컬러를 가장 먼저. 광고 아니고, 달리는
          사람들의 소식만.
        </p>

        {done ? (
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-flow/40 bg-flow/10 px-6 py-5">
            <p className="font-semibold text-paper">
              환영합니다, 러너 — 첫 소식이 곧 도착합니다.
            </p>
            <p className="mt-1 text-sm text-paper/60">
              다음 벙커런에서 만나요. Find your Flow.
            </p>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              inputMode="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="이메일 주소"
              aria-label="이메일 주소"
              className="flex-1 rounded-full border border-darkline bg-coal px-5 py-3.5 text-sm text-paper outline-none transition placeholder:text-paper/35 focus:border-paper/40"
            />
            <button
              type="submit"
              className="rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-white"
            >
              구독하기
            </button>
          </form>
        )}
        {error && <p className="mt-3 text-xs text-red-400">{error}</p>}
        <p className="mt-4 text-[11px] text-paper/30">
          언제든 수신 거부 가능 · 개인정보는 소식 발송에만 사용됩니다
        </p>
      </div>
    </section>
  );
}
