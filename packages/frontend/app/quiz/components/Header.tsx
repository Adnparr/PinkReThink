import React from 'react';

export default function Header() {
  return (
    <header className="w-full max-w-3xl mx-auto px-6 pt-4 pb-2 z-10 relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(242,13,128,0.5)] transform -rotate-3">
            <span className="material-icons text-white text-4xl">auto_awesome</span>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-primary uppercase">Thử thách</h1>
            <p className="text-sm font-bold text-slate-500">Câu 4 của 10</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-1 px-3 py-2 bg-red-900/20 rounded-2xl border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
            <span className="material-icons text-red-500">favorite</span>
            <span className="font-black text-red-500">3</span>
          </div>
          <div className="flex items-center gap-1 px-4 py-2 bg-yellow-900/20 rounded-2xl border border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.4)]">
            <span className="material-icons text-white">monetization_on</span>
            <span className="font-black text-white">450</span>
          </div>
        </div>
      </div>
      
      {/* Progress Bar with Cheering Character */}
      <div className="relative pt-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-black text-primary uppercase tracking-widest">Tiến độ cấp độ</span>
          <span className="material-icons text-yellow-500 text-sm">stars</span>
        </div>
        <div className="h-6 w-full bg-slate-200 rounded-full border-4 border-white shadow-inner overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-pink-400 w-[40%] rounded-full relative shadow-lg"></div>
        </div>
      </div>
    </header>
  );
}
