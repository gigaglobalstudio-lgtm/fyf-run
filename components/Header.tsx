import Link from "next/link";
import { auth, signOut } from "@/auth";
import { FyfLogo } from "./EcgLogo";
import { CartButton } from "./cart/CartButton";

export async function Header() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 border-b border-darkline/60 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link href="/" aria-label="FYF 홈" className="text-paper">
          <FyfLogo />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          <Link
            href="/shop"
            className="text-[13px] font-medium tracking-wide text-paper/65 transition hover:text-paper"
          >
            Shop
          </Link>
          <Link
            href="/world"
            className="text-[13px] font-medium tracking-wide text-paper/65 transition hover:text-paper"
          >
            World
          </Link>
          <Link
            href="/course"
            className="text-[13px] font-medium tracking-wide text-paper/65 transition hover:text-paper"
          >
            Course
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {session?.user ? (
            <div className="flex items-center gap-1">
              <Link
                href="/mypage"
                className="hidden rounded-full px-3 py-1.5 text-sm font-medium text-paper/80 transition hover:bg-white/10 hover:text-paper sm:block"
              >
                {session.user.name ?? "러너"}
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="rounded-full px-3 py-1.5 text-sm text-paper/50 transition hover:bg-white/10 hover:text-paper"
                >
                  로그아웃
                </button>
              </form>
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-full px-3 py-1.5 text-sm font-medium text-paper/80 transition hover:bg-white/10 hover:text-paper"
            >
              로그인
            </Link>
          )}
          <CartButton />
        </div>
      </div>
    </header>
  );
}
