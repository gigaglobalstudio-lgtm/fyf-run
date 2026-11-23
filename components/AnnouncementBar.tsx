import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-[#24231f] px-4 py-1.5 text-center text-xs text-[#f8f5ed]">
      <Link href="/club/culture-run" className="inline-flex items-center gap-2 underline-offset-4 hover:underline">
        순천 문화런 <span aria-hidden="true">·</span> 남문터광장 5K / 10K 코스 보기 <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
