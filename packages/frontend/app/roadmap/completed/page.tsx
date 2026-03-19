import React from "react";
import Link from "next/link";
import SharedHeader from "../../../components/SharedHeader";
import SharedFooter from "../../../components/SharedFooter";

const completedStages = [
  {
    title: "Chặng 1: Nhận diện vấn đề",
    detail: "Em đã xác định được nhu cầu STEAM trong đời sống xung quanh.",
  },
  {
    title: "Chặng 2: Trải nghiệm",
    detail:
      "Em đã xây dựng mô hình/giải pháp mini STEAM bằng các hoạt động thực hành.",
  },
  {
    title: "Chặng 3: Thấu hiểu",
    detail:
      "Em đã suy ngẫm tác động của giải pháp và đề xuất hướng cải tiến phù hợp.",
  },
];

export default function RoadmapCompletedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0210] via-[#17071f] to-[#08020c]">
      <div className="relative flex h-auto w-full flex-col overflow-x-hidden min-h-screen">
        <div className="flex h-full grow flex-col">
          <SharedHeader />

          <main className="flex-1 max-w-[1100px] w-full mx-auto px-4 py-12 md:py-16">
            <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-emerald-200">
                    <span className="material-symbols-outlined text-sm">
                      verified
                    </span>
                    Hoàn thành toàn bộ 3 chặng
                  </p>
                  <h1 className="mt-4 text-3xl md:text-4xl font-black text-white leading-tight">
                    Chúc mừng em đã hoàn thành hành trình STEAM!
                  </h1>
                  <p className="mt-2 text-slate-300 max-w-2xl">
                    Tuyệt vời! Em đã xuất sắc vượt qua lộ trình Tư duy Thiết kế (Design Thinking) 
                    và đủ điều kiện nhận chứng chỉ từ chương trình.
                  </p>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-amber-100 to-yellow-100 text-[#332100] border-4 border-amber-300 px-6 py-5 shadow-[0_15px_40px_rgba(251,191,36,0.35)] min-w-[220px]">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-700">
                    Chứng chỉ STEAM
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-3xl text-amber-700">
                      workspace_premium
                    </span>
                    <p className="text-lg font-black">Đã mở khóa</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {completedStages.map((stage) => (
                  <article
                    key={stage.title}
                    className="rounded-2xl border border-white/10 bg-slate-950/35 p-4 md:p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-emerald-300">
                        check_circle
                      </span>
                      <div>
                        <h2 className="text-base md:text-lg font-bold text-white">
                          {stage.title}
                        </h2>
                        <p className="mt-1 text-sm text-slate-300">
                          {stage.detail}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-rose-400 px-5 py-3 font-black text-white shadow-2xl shadow-primary/30 border-b-4 border-primary/50"
                >
                  <span className="material-symbols-outlined text-xl">
                    military_tech
                  </span>
                  Nhận chứng chỉ ngay
                </button>

                <Link
                  href="/roadmap/story"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-purple-500/20 px-5 py-3 font-bold text-purple-200 hover:text-white hover:bg-purple-500/30 transition-colors shadow-lg shadow-purple-500/10"
                >
                  <span className="material-symbols-outlined text-xl">auto_awesome</span>
                  Xem câu chuyện của Luna
                </Link>

                <Link
                  href="/roadmap"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-bold text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">map</span>
                  Quay lại lộ trình
                </Link>
              </div>
            </section>
          </main>

          <SharedFooter />
        </div>
      </div>
    </div>
  );
}