// 배포 사이트 E2E 스크린샷 QA — node qa-shots.mjs [baseUrl]
import { chromium } from "playwright";
import { mkdirSync } from "fs";

const BASE = process.argv[2] ?? "https://fyf-run.vercel.app";
const OUT = "../fyf-assets/qa";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

async function shot(name, full = false) {
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: full });
  console.log(`✓ ${name}`);
}

// 1. 홈 (풀페이지)
await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
await shot("01-home-full", true);

// 2. 샵
await page.goto(`${BASE}/shop`, { waitUntil: "networkidle" });
await shot("02-shop");

// 3. 상품 상세 (캡)
await page.goto(`${BASE}/product/fyf-performance-cap`, { waitUntil: "networkidle" });
await shot("03-product-cap");

// 4. 세계관
await page.goto(`${BASE}/world`, { waitUntil: "networkidle" });
await shot("04-world");

// 5. 로그인 페이지
await page.goto(`${BASE}/login`, { waitUntil: "networkidle" });
await shot("05-login");

// 6. 데모 로그인 실행 → 로그인 상태 확인
await page.getByRole("button", { name: /데모 러너로 둘러보기/ }).click();
await page.waitForURL(`${BASE}/**`, { timeout: 30000 });
await page.waitForLoadState("networkidle");
const headerText = await page.locator("header").innerText();
console.log(headerText.includes("데모 러너") ? "✓ LOGIN OK (데모 러너 표시)" : "✗ LOGIN FAIL: " + headerText);

// 7. 마이페이지
await page.goto(`${BASE}/mypage`, { waitUntil: "networkidle" });
await shot("06-mypage");

// 8. 캡 바로구매 → 체크아웃 토스 위젯 렌더링 확인
await page.goto(`${BASE}/product/fyf-performance-cap`, { waitUntil: "networkidle" });
await page.getByRole("button", { name: "바로 구매" }).click();
await page.waitForURL(`${BASE}/checkout`, { timeout: 30000 });
// 토스 위젯 iframe 로딩 대기
try {
  await page.waitForSelector("#payment-method iframe", { timeout: 45000 });
  await page.waitForTimeout(4000); // 위젯 내부 렌더 안정화
  console.log("✓ TOSS WIDGET IFRAME RENDERED");
} catch {
  console.log("✗ TOSS WIDGET NOT FOUND");
}
await shot("07-checkout-toss", true);

await browser.close();
console.log("DONE");
