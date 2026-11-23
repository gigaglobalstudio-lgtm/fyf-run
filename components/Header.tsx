import Link from "next/link";
import { auth, signOut } from "@/auth";
import { FyfLogo } from "./EcgLogo";
import { CartButton } from "./cart/CartButton";
import styles from "./project.module.css";

const menu = [
  { href: "/#project", label: "프로젝트" },
  { href: "/world", label: "세계관" },
  { href: "/club/culture-run", label: "순천 문화런" },
  { href: "/shop", label: "굿즈 숍" },
];

export async function Header() {
  const session = await auth();

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" aria-label="FYF 벙커버스 홈" className={styles.brand}>
          <FyfLogo />
          <span className={styles.brandProject}>Bunker-Verse</span>
        </Link>
        <nav aria-label="주 메뉴" className={styles.navigation}>
          {menu.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className={styles.account}>
          {session?.user ? (
            <>
              <Link href="/mypage" className={styles.userLink}>{session.user.name ?? "마이페이지"}</Link>
              <form action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}>
                <button type="submit">로그아웃</button>
              </form>
            </>
          ) : <Link href="/login">로그인</Link>}
          <CartButton />
        </div>
      </div>
    </header>
  );
}
