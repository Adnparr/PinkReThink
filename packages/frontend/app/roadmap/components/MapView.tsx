import React from "react";
import Link from "next/link";

export default function MapView() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        /* Custom animations if needed in the future */
      `}} />
      <section className="flex-1 relative w-full min-h-[1000px] overflow-hidden bg-[#050109] text-left">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-600/20 blur-[150px] rounded-full"></div>
          <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-cyan-600/10 blur-[100px] rounded-full"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-screen"></div>
        </div>

        <div className="relative w-full h-full max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-24 z-10">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-slate-300 tracking-[0.2em] uppercase">Bản đồ học tập</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-rose-50 to-slate-400 tracking-tight mb-6 drop-shadow-sm">
            Hành trình 3 chặng STEAM
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Thử thách theo định hướng Design Thinking dành cho các em gái. Khám phá thực tế, trải nghiệm và tạo ra sự thay đổi.
          </p>
        </div>

        {/* Journey Timeline Container */}
        <div className="relative max-w-5xl mx-auto mt-20 pb-20">
          
          {/* Main Central Wavy Line */}
          <div className="absolute left-10 md:left-1/2 top-10 bottom-44 w-[80px] md:w-[150px] -ml-[40px] md:-ml-[75px] pointer-events-none z-0">
            {/* We use an SVG that scales with height and weaves left and right */}
            <svg 
              className="w-full h-full stroke-rose-500/50 fill-none" 
              viewBox="0 0 100 1000" 
              preserveAspectRatio="none"
            >
              <path 
                d="M50,0 C90,100 90,150 50,250 C10,350 10,400 50,500 C90,600 90,650 50,750 C10,850 10,900 50,1000" 
                strokeDasharray="10 10" 
                strokeWidth="4" 
                strokeLinecap="round"
                className="drop-shadow-[0_0_12px_rgba(244,63,94,0.5)]"
              />
              {/* Optional secondary faint solid line behind the dashes */}
              <path 
                d="M50,0 C90,100 90,150 50,250 C10,350 10,400 50,500 C90,600 90,650 50,750 C10,850 10,900 50,1000" 
                strokeWidth="1" 
                className="stroke-rose-900/40"
              />
            </svg>
          </div>
          
          {/* Node 1: Completed (Right side on PC) */}
          <div className="relative flex items-center justify-between group mb-24 w-full">
            <div className="hidden md:block w-[45%]"></div>
            
            <div className="absolute left-10 md:left-1/2 -ml-6 md:-ml-8 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center z-20">
              <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#0a0f16] border-2 border-emerald-400 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <span className="material-symbols-outlined text-emerald-400 text-2xl md:text-3xl">check</span>
              </div>
            </div>

            <div className="pl-24 md:pl-12 lg:pl-0 w-full md:w-[45%] relative z-10">
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[2rem] group-hover:bg-white/[0.05] group-hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(16,185,129,0.05)] ring-1 ring-emerald-500/10 relative">
                {/* Connector Dot */}
                <div className="hidden md:block absolute top-1/2 -right-2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] border-2 border-slate-900"></div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] md:text-xs font-black px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 uppercase tracking-widest border border-emerald-500/30">Hoàn thành</span>
                  <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">Chặng 1</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Nhận diện vấn đề</h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  Nhận diện nhu cầu STEAM trong đời sống xung quanh. Quan sát và khám phá những vấn đề cần được giải quyết.
                </p>
              </div>
            </div>
          </div>

          {/* Node 2: Active (Left side on PC) */}
          <div className="relative flex items-center justify-between group mb-24 w-full cursor-pointer">
            <Link href="/learn" className="pl-24 md:pl-0 md:pr-12 lg:pr-0 w-full md:w-[45%] order-2 md:order-1 relative z-10 block">
              <div className="bg-gradient-to-br from-rose-500/10 to-violet-500/10 backdrop-blur-2xl border border-rose-500/30 p-6 md:p-8 rounded-[2rem] group-hover:border-rose-400/60 group-hover:-translate-y-2 transition-all duration-300 shadow-[0_15px_50px_rgba(244,63,94,0.2)] ring-2 ring-rose-500/20 md:text-right text-left relative overflow-hidden flex flex-col items-start md:items-end z-10">
                {/* Connector Dot */}
                <div className="hidden md:block absolute top-1/2 -left-2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)] border-2 border-slate-900"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-50"></div>
                
                <div className="flex flex-row md:flex-row-reverse items-center justify-start gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                  </span>
                  <span className="text-[10px] md:text-xs font-black text-rose-300 uppercase tracking-widest bg-rose-500/10 px-3 py-1.5 rounded-full border border-rose-500/20">Đang diễn ra</span>
                  <span className="text-sm text-rose-200/60 font-bold uppercase tracking-wider">Chặng 2</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight drop-shadow-md">Trải Nghiệm</h3>
                <p className="text-rose-100/70 leading-relaxed mb-6 text-sm md:text-base">
                  Tạo mô hình/giải pháp nhỏ: vẽ sơ đồ, dùng vật liệu rẻ, xây 3D mini STEAM. Đưa ý tưởng thực tế.
                </p>
                <div className="inline-flex items-center gap-2 text-rose-400 font-bold group-hover:text-rose-300 transition-colors uppercase tracking-wider text-sm">
                  <span className="md:order-2">Tiếp tục học</span>
                  <span className="material-symbols-outlined text-lg md:order-1 md:-ml-1 group-hover:md:-translate-x-1 group-hover:translate-x-1 md:rotate-180 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>

            <div className="absolute left-10 md:left-1/2 -ml-6 md:-ml-8 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center z-20 order-1 md:order-2 pointer-events-none">
              <div className="absolute inset-0 bg-rose-500 rounded-full blur-[24px] opacity-80 animate-pulse"></div>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full shadow-[0_0_40px_rgba(244,63,94,0.8)] border-4 border-[#050109] overflow-hidden">
                <img
                  className="w-full h-full object-cover opacity-90 mix-blend-screen scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh71wtANmPerVr5n1Z1iR1SVnr6mpOwBo4qdz8Ct7apFCfBOcj8KphfTxo72IEbmsoL1lHGmjbl5ifY5lgehYlod6TEmamBXNt4VfJb6UV5hKJd1F68eBGGktra5LDZXw7QRp6jxb8MjP-hJKAFlLbOle6zpZPH9fbHj82QgqgJQS_Tue6QQ4K75MK-_eNPnUaYMV1BiJA-TySV3g0bIvD0640Ym8kZ0GQ6EtupFZFhClb0dZVw_nCkqyOKeixXdP94_gYMBe2dITb"
                  alt="Avatar"
                />
              </div>
            </div>

            <div className="hidden md:block w-[45%] order-3"></div>
          </div>

          {/* Node 3: Locked (Right side on PC) */}
          <div className="relative flex items-center justify-between group mb-12 w-full">
            <div className="hidden md:block w-[45%]"></div>
            
            <div className="absolute left-10 md:left-1/2 -ml-6 md:-ml-8 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center z-20 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
              <div className="relative z-10 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-[#111827] border-2 border-slate-700/50 rounded-full group-hover:border-cyan-500/50 group-hover:bg-cyan-900/30 transition-colors">
                <span className="material-symbols-outlined text-slate-500 group-hover:text-cyan-400 text-xl md:text-2xl transition-colors">psychology_alt</span>
              </div>
            </div>

            <div className="pl-24 md:pl-12 lg:pl-0 w-full md:w-[45%] grayscale-[0.8] opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 relative z-10">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 p-6 md:p-8 rounded-[2rem] group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-colors duration-500 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] relative">
                {/* Connector Dot */}
                <div className="hidden md:block absolute top-1/2 -right-2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-500 group-hover:bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.2)] border-2 border-slate-900 transition-colors duration-500 border-none"></div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-[1rem] text-slate-500 group-hover:text-cyan-400">lock</span>
                  <span className="text-[10px] md:text-xs font-black text-slate-500 group-hover:text-cyan-400 uppercase tracking-widest transition-colors">Chưa mở khóa</span>
                  <span className="text-sm text-slate-600 font-bold uppercase tracking-wider">Chặng 3</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-400 group-hover:text-cyan-50 mb-3 transition-colors">Suy ngẫm & thấu hiểu</h3>
                <p className="text-slate-500 group-hover:text-cyan-100/70 leading-relaxed text-sm md:text-base transition-colors">
                  Giải pháp giúp ai, giảm gánh nặng cho bà/mẹ/em gái ra sao và cần sửa gì để tốt hơn.
                </p>
              </div>
            </div>
          </div>

          {/* Final Certificate */}
          <div className="relative flex flex-col items-center justify-center mt-32 w-full text-center">
            
            <Link href="/roadmap/completed" className="group relative focus:outline-none w-full max-w-[600px] block mx-auto hover:scale-105 transition-transform duration-500">
               <div className="absolute inset-0 bg-amber-500 rounded-full blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
               <div className="relative z-10 bg-gradient-to-b from-amber-400/20 to-transparent p-[1px] rounded-[3rem] border-transparent">
                 <div className="bg-[#0a0f16]/90 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 flex flex-col items-center border border-amber-500/20 group-hover:border-amber-400/60 transition-colors duration-500 shadow-2xl">
                   <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-300 to-orange-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.5)] mb-8 ring-8 ring-amber-500/10">
                     <span className="material-symbols-outlined text-white text-4xl md:text-5xl drop-shadow-md">workspace_premium</span>
                   </div>
                   <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-500 mb-4 tracking-tight">Chứng nhận STEAM</h3>
                   <p className="text-slate-400 mb-10 max-w-sm md:text-lg">Hoàn thành toàn bộ hành trình để mở khóa phần thưởng cuối cùng và nhận chứng nhận vinh dự.</p>
                   
                   <span className="inline-flex items-center gap-3 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/50 px-8 py-4 rounded-full font-bold uppercase tracking-[0.15em] transition-all shadow-[0_0_20px_rgba(245,158,11,0.15)] text-sm">
                     <span className="material-symbols-outlined text-xl">lock_open</span> Xem trước chứng nhận
                   </span>
                 </div>
               </div>
            </Link>
          </div>

        </div>
      </div>
      </section>
    </>
  );
}
