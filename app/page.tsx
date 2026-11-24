import Image from "next/image";
import Link from "next/link";
import { MvPlayer } from "@/components/MvPlayer";
import { ProjectGoods } from "@/components/ProjectGoods";
import { sketch } from "@/lib/culture-run";
import styles from "@/components/project.module.css";

export default function Home() {
  return (
    <div className={styles.publication}>
      <div className={styles.container}>
        <section id="project" aria-labelledby="project-title" className={styles.hero}>
          <div className={styles.heroTop}>
            <div>
              <p className={styles.kicker}><span className={styles.mark} aria-hidden="true" /> Suncheon <span aria-hidden="true">/</span> 2026</p>
              <h1 id="project-title" className={styles.masthead} aria-label="FYF 벙커버스">
                <span>Bunker</span><em>–Verse</em>
              </h1>
            </div>
            <div className={styles.heroCopy}>
              <p className={styles.deck}>순천을 달리는 FYF 벙커버스</p>
              <p>남문터광장의 러닝카페에서 시작한 캐릭터 프로젝트입니다. 카티보와 세 친구의 이야기를 영상, 문화런, 러닝 굿즈에 담았습니다.</p>
              <Link className={styles.primary} href="/shop">프로젝트 굿즈 보기 <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <figure className={styles.keyArt}>
            <Image src="/project/suncheon-crew.jpg" alt="순천의 광장을 함께 달리는 카티보, 로코, 블록, 렌의 콘셉트 아트"
              width={1672} height={545} sizes="(min-width: 1500px) 1380px, 96vw" preload />
            <figcaption>
              <span>벙커버스 콘셉트 아트 <span aria-hidden="true">/</span> 카티보 · 로코 · 블록 · 렌</span>
              <Link href="/world#crew" className={styles.textLink}>캐릭터 소개 <span aria-hidden="true">↗</span></Link>
            </figcaption>
          </figure>
        </section>

        <ProjectGoods />

        <section id="culture-run" className={styles.field} aria-labelledby="culture-title">
          <div className={styles.fieldCopy}>
            <p className={styles.kicker} lang="en">Culture Run</p>
            <h2 id="culture-title">순천 문화런</h2>
            <p>남문터광장에서 출발해 동천을 따라 달리는 5K·10K. 첫 문화런에 모인 러너들의 하루를 현장 영상으로 만나보세요.</p>
            <Link className={styles.textLink} href="/club/culture-run">문화런 포스터와 코스 보기 <span aria-hidden="true">→</span></Link>
          </div>
          <div className={styles.film}>
            <MvPlayer {...sketch} />
          </div>
        </section>

        <section className={styles.section} aria-labelledby="films-title">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker} lang="en">Bunker Sound</p>
              <h2 id="films-title">벙커버스 상영관</h2>
            </div>
            <Link className={styles.textLink} href="/world/story">스토리와 영상 보기 <span aria-hidden="true">→</span></Link>
          </div>
          <div className={styles.films}>
            <div className={styles.film}>
              <MvPlayer src="/mv/gabojago.mp4" poster="/mv/gabojago-poster.jpg"
                title="가보자고" sub="순천 골목에서 보내는 크루의 낮" />
            </div>
            <div className={styles.film}>
              <MvPlayer src="/mv/zombie-eyes.mp4" poster="/mv/zombie-eyes-poster.jpg"
                title="ZOMBIE EYES" sub="메트로놈을 마주한 카티보의 밤" />
            </div>
            <div className={styles.film}>
              <MvPlayer src="/mv/find-your-flow-rock.mp4" poster="/mv/find-your-flow-rock-poster.jpg"
                title="FIND YOUR FLOW" sub="노을을 향해 달리는 크루의 저녁 · ROCK VER." />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
