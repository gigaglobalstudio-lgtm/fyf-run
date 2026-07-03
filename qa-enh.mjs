import { chromium } from "playwright";

const BASE = "https://fyf-run.vercel.app";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });

async function scrollAll() {
  await p.evaluate(async () => {
    await new Promise((r) => {
      let y = 0;
      const t = setInterval(() => {
        window.scrollBy(0, 900);
        y += 900;
        if (y >= document.body.scrollHeight) {
          clearInterval(t);
          r();
        }
      }, 80);
    });
  });
}

// 1) PDP reviews
await p.goto(BASE + "/product/race-singlet", { waitUntil: "networkidle", timeout: 90000 });
await p.evaluate(() => document.querySelector("#reviews")?.scrollIntoView({ block: "start" }));
await p.waitForTimeout(1500);
await p.screenshot({ path: "../fyf-assets/qa/enh-reviews.png" });
await p.evaluate(() => window.scrollTo(0, 0));
await p.waitForTimeout(800);
await p.screenshot({ path: "../fyf-assets/qa/enh-pdp-top.png" });

// 2) Club
await p.goto(BASE + "/club", { waitUntil: "networkidle", timeout: 90000 });
await scrollAll();
await p.waitForTimeout(1200);
await p.evaluate(() => window.scrollTo(0, 0));
await p.waitForTimeout(800);
await p.screenshot({ path: "../fyf-assets/qa/enh-club.png", fullPage: true });

// 3) Home top: announcement bar + kakao button
await p.goto(BASE, { waitUntil: "networkidle", timeout: 90000 });
await p.waitForTimeout(2500);
const checks = await p.evaluate(() => ({
  kakao: !!document.querySelector('a[aria-label*="카카오"]'),
  announce: (document.body.innerText || "").includes("무료배송"),
}));
console.log("CHECKS", JSON.stringify(checks));
await p.screenshot({ path: "../fyf-assets/qa/enh-home-top.png" });

await b.close();
console.log("done");
