import React from 'react';

export default function Rewards() {
  return (
    <div className="w-full max-w-md mx-auto bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-8 shadow-inner">
      <h4 className="text-[#f20d80] text-sm font-bold uppercase tracking-widest mb-6 drop-shadow-[0_0_5px_#f20d80] text-center">Phần thưởng của con</h4>
      <div className="flex justify-around items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center border-2 border-yellow-400/50 shadow-[0_0_20px_rgba(250,204,21,0.3)]">
            <span className="material-symbols-outlined text-yellow-600 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>monetization_on</span>
          </div>
          <span className="text-pink-50 font-bold">500 Xu Vàng</span>
        </div>
        <div className="h-12 w-px bg-primary/10"></div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-[#f20d80]/10 rounded-full flex items-center justify-center border-2 border-[#f20d80]/50 shadow-[0_0_20px_rgba(242,13,128,0.3)]">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
          </div>
          <span className="text-pink-50 font-bold">Huy chương Thông thái</span>
        </div>
      </div>
    </div>
  );
}
