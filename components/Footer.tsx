import Link from "next/link";
import { FyfLogo } from "./EcgLogo";
import styles from "./project.module.css";

const links = [
  { name: "프로젝트", items: [["벙커버스 이야기", "/world"], ["뮤직비디오", "/world/story"], ["남문터 러닝카페", "/world/cafe"]] },
  { name: "문화런", items: [["현장 영상과 포스터", "/club/culture-run"], ["러닝 코스", "/course"], ["러닝 클럽", "/club"]] },
  { name: "굿즈 숍", items: [["전체 상품", "/shop"], ["장바구니", "/cart"], ["마이페이지", "/mypage"], ["로그인", "/login"]] },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div>
            <Link href="/" aria-label="FYF 벙커버스 홈"><FyfLogo /></Link>
            <p className={styles.footerProject}>FYF 벙커버스</p>
            <p>2026 콘텐츠 IP 비즈니스(머천다이징) 지원사업</p>
            <p>기획·제작 기가글로벌스튜디오 주식회사 <span aria-hidden="true">/</span> 협업 순천문화재단</p>
          </div>
          <nav aria-label="하단 메뉴" className={styles.footerLinks}>
            {links.map(({ name, items }) => (
              <div key={name}>
                <p>{name}</p>
                {items.map(([label, url]) => <Link key={url} href={url}>{label}</Link>)}
              </div>
            ))}
          </nav>
        </div>
        <div className={styles.colophon}>
          <p>기가글로벌스튜디오 주식회사 · 대표 최원열 · 전남 순천시</p>
          <p>현재 결제는 토스페이먼츠 테스트 모드입니다.</p>
          <p>© {new Date().getFullYear()} FYF · GIGA GLOBAL STUDIO</p>
        </div>
      </div>
    </footer>
  );
}
