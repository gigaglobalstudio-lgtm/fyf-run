import type { Metadata } from "next";
import { Anton, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FYF — Don't follow. Find your Flow.",
  description:
    "따라가지 마. 네 리듬을 찾아. 순천에서 시작한 러닝 컬처 브랜드 FYF. 첫 크루, 첫 모자 — 퍼포먼스 캡 ₩39,000.",
  openGraph: {
    title: "FYF — Don't follow. Find your Flow.",
    description: "따라가지 마. 네 리듬을 찾아. 러닝 컬처 브랜드 FYF.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${anton.variable} ${notoSansKr.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
