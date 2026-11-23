import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./inter.css";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartProvider";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KakaoChannel } from "@/components/KakaoChannel";
import { catalogPrices, movedCartOptions } from "@/lib/photo-catalog";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

const projectTitle = "FYF 벙커버스 | 순천 러닝 프로젝트";
const projectDescription = "순천 남문터광장에서 시작한 FYF 벙커버스. 네 캐릭터의 영상, 순천 문화런 현장과 프로젝트 러닝 굿즈를 만나보세요.";

export const metadata: Metadata = {
  metadataBase: new URL("https://fyf-run.vercel.app"),
  title: projectTitle,
  description: projectDescription,
  openGraph: {
    title: projectTitle,
    description: projectDescription,
    siteName: "FYF 벙커버스",
    images: [{ url: "/project/suncheon-crew.jpg", width: 1672, height: 545, alt: "순천을 달리는 벙커버스 크루" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full`}>
      <head>
        <link rel="preload" href="/fonts/inter/latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <CartProvider productPrices={catalogPrices} movedOptions={movedCartOptions}>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <KakaoChannel />
        </CartProvider>
      </body>
    </html>
  );
}
