import React from 'react';

export default function Header() {
  return (
    <>
      <header className="w-full flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-3xl shadow-[0_0_15px_#f20d80]">workspace_premium</span>
          <span className="font-bold text-lg text-[#f20d80] drop-shadow-[0_0_8px_#f20d80]">Thế giới học tập</span>
        </div>
        <button className="p-2 rounded-full bg-white/5 text-[#f20d80] border border-[#f20d80]/20 hover:bg-[#f20d80]/10 transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>
      
      <div className="relative w-64 h-64 mb-6 flex items-center justify-center mx-auto">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-4 -left-4 animate-bounce">
          <span className="material-symbols-outlined text-yellow-400 text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
        </div>
        <div className="absolute top-10 -right-8 animate-pulse">
          <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
        </div>
        
        <div className="relative z-20 flex flex-col items-center">
          <span className="material-symbols-outlined text-[120px] text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.6)]" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
          <div className="mt-2 bg-[#1a0b14] px-4 py-1 rounded-full border-2 border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.4)]">
            <span className="text-yellow-400 font-extrabold text-xl tracking-wider">LEVEL UP!</span>
          </div>
        </div>
        
        <div className="absolute -bottom-2 -left-10 transform -rotate-12">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30">
            <span className="material-symbols-outlined text-primary text-4xl">celebration</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-8 text-center">
        <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">TUYỆT VỜI!</span> <br />
          <span className="text-[#f20d80] drop-shadow-[0_0_15px_#f20d80] animate-pulse">CHÚC MỪNG CON!</span>
        </h1>
        <p className="text-pink-100/70 text-lg font-medium">Bạn nhỏ thật xuất sắc đã hoàn thành thử thách!</p>
      </div>
    </>
  );
}
