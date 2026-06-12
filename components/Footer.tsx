import Link from "next/link";
import { EcgLine } from "./EcgLogo";

export function Footer() {
  return (
    <footer className="border-t border-darkline bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <p className="font-display text-4xl tracking-wide">FYF</p>
            <p className="mt-2 text-sm text-paper/60">
              Don&apos;t follow. Find your Flow.
            </p>
            <EcgLine className="mt-4 h-5 w-28 text-flow" animate />
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
            <div className="space-y-2.5">
              <p className="font-bold tracking-widest text-paper/40">SHOP</p>
              <Link href="/shop" className="block text-paper/70 hover:text-paper">
                전체 상품
              </Link>
              <Link
                href="/product/fyf-performance-cap"
                className="block text-paper/70 hover:text-paper"
              >
                퍼포먼스 캡
              </Link>
              <Link href="/cart" className="block text-paper/70 hover:text-paper">
                장바구니
              </Link>
            </div>
            <div className="space-y-2.5">
              <p className="font-bold tracking-widest text-paper/40">WORLD</p>
              <Link href="/world" className="block text-paper/70 hover:text-paper">
                Bunker-Verse
              </Link>
              <Link href="/world#crew" className="block text-paper/70 hover:text-paper">
                크루 소개
              </Link>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="block text-paper/70 hover:text-paper"
              >
                Instagram
              </a>
            </div>
            <div className="space-y-2.5">
              <p className="font-bold tracking-widest text-paper/40">ACCOUNT</p>
              <Link href="/login" className="block text-paper/70 hover:text-paper">
                로그인
              </Link>
              <Link href="/mypage" className="block text-paper/70 hover:text-paper">
                마이페이지
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-darkline pt-6 text-xs leading-relaxed text-paper/40">
          <p>
            기가글로벌스튜디오 · 대표 최원열 · 전남 순천시 · 사업자등록번호 / 통신판매업
            신고번호는 실 운영 전 기재
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} FYF — GIGA GLOBAL STUDIO. All rights
            reserved. 현재 결제는 토스페이먼츠 샌드박스(테스트) 모드입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
