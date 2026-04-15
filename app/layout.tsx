import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSession } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'FYF — Find Your Flow',
  description: '벙커로 들어와라. 규격화된 속도를 거부하는 자들의 공간. fyf.run',
  icons: { icon: '/favicon.svg' },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  return (
    <html lang="ko">
      <body>
        <Header session={session} />
        <main style={{ minHeight: 'calc(100vh - 140px)' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
