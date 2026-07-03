// 카카오톡 채널 플로팅 버튼 — 한국 러닝 DTC 표준(CS + 드롭 알림 CRM).
// 실 채널 개설 후 NEXT_PUBLIC_KAKAO_CHANNEL_URL 로 교체 (SETUP.md 참고).
const KAKAO_URL =
  process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL ?? "https://pf.kakao.com/";

export function KakaoChannel() {
  return (
    <a
      href={KAKAO_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="카카오톡 채널로 문의하기"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-kakao px-4 py-3 text-[13px] font-bold text-[#191919] shadow-lg shadow-black/20 transition hover:brightness-95"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 3C6.48 3 2 6.54 2 10.9c0 2.8 1.86 5.26 4.66 6.65l-.95 3.54c-.08.31.27.56.54.38l4.21-2.8c.5.05 1.02.08 1.54.08 5.52 0 10-3.54 10-7.85C22 6.54 17.52 3 12 3z" />
      </svg>
      <span className="hidden sm:inline">문의</span>
    </a>
  );
}
