"use client";

import dynamic from "next/dynamic";
import { EcgLine } from "../EcgLogo";

// WebGL 캔버스는 브라우저에서만 로드 (SSR 비활성)
const FlowScene = dynamic(
  () => import("./FlowScene").then((m) => m.FlowScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        <EcgLine className="h-8 w-40 text-flow" animate />
      </div>
    ),
  }
);

export function FlowSection() {
  return (
    <section className="relative overflow-hidden border-t border-darkline bg-ink">
      {/* 3D 캔버스 */}
      <div className="absolute inset-0">
        <FlowScene />
      </div>
      {/* 그라데이션 — 텍스트 가독 */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />

      <div className="pointer-events-none relative mx-auto flex min-h-[78svh] max-w-7xl flex-col justify-center px-5 py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-flow">
          Your Pulse, In Motion
        </p>
        <h2 className="font-display mt-4 text-5xl leading-[0.95] md:text-7xl">
          심박이 곧
          <br />
          리듬이다
        </h2>
        <p className="mt-6 max-w-md leading-relaxed text-paper/70">
          FYF의 모든 제품에 새겨진 심박 그래프. 화면 위에서 직접 흐르는 3D
          펄스로 만나보세요. 마우스를 움직이면 반응합니다.
        </p>
        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-paper/35">
          ◦ Interactive 3D · move your cursor
        </p>
      </div>
    </section>
  );
}
