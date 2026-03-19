import React from 'react';

export default function VisualSection() {
  return (
    <div className="hidden md:flex flex-col justify-between w-1/2 p-12 relative overflow-hidden bg-gradient-to-br from-[#1a0814] to-[#0d0208] border-r border-white/10">
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/30 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
      
      <div className="space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#f20d80]"></span>
          <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Khám phá PinkReThink</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white">
  Rethink Her Mind <br/>
  <span className="
    text-transparent bg-clip-text bg-gradient-to-r 
    from-[#ffebf3] via-[#ff4d94] to-primary
    filter 
    drop-shadow-[0_0_15px_rgba(255,77,148,0.8)] 
    drop-shadow-[0_0_30px_rgba(242,13,128,0.4)]
    animate-pulse-subtle
  ">
    Rewrite The Future.
  </span>
</h1>
        <p className="text-lg text-slate-300 max-w-md font-medium leading-relaxed">Truy cập tài khoản của bạn để có trải nghiệm trọn vẹn nhất cùng hệ sinh thái giáo dục PinkReThink.</p>
      </div>
      
      <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-white/5 shadow-2xl border border-white/10 mt-10 z-10 group">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-purple-500/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
        <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]" data-alt="Happy child and woman learning together with books" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvgpEtfWOqqnb32SfwKQy2nVeW70V87Qum5_WlqdktbDZG26qjydMxjPqk6fXVK1rUmyQnEPGcAuWuk4BtC6-JaKQy5NH388gBLjBjkcdLnEND3ysTmtwRJr9e7J8DGEloIgJYKW-EOvq8vWVMy58cU0rmCe2olRGChWnFaGB_G82QHEJ16leahP4Pra_uLzh-TwXAE96Z7xoq5Npwe0VH9GtsJ2EPFePKWeE9e32p3D2tDalHkZAMKk2pYHeWZw2SUYN1PvX8ev_h" alt="Happy child learning" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-3xl z-20 pointer-events-none"></div>
        <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-xl p-5 rounded-2xl border border-white/10 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl">
           <div className="flex items-center gap-3">
             <span className="material-symbols-outlined text-primary text-3xl">lightbulb</span>
             <div>
               <p className="text-white text-sm font-bold">Giáo dục là sức mạnh</p>
               <p className="text-slate-300 text-xs">Phát triển tư duy toàn diện cùng STEAM.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
