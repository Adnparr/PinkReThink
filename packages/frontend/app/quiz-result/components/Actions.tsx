import React from 'react';

export default function Actions() {
  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <button className="flex-1 bg-[#f20d80] hover:bg-[#d90c73] text-white font-bold py-4 px-6 rounded-xl shadow-[0_0_25px_rgba(242,13,128,0.5)] transition-all flex items-center justify-center gap-2 group">
          <span>Tiếp tục hành trình</span>
          <span className="material-symbols-outlined">rocket_launch</span>
        </button>
        <button className="flex-1 bg-transparent text-[#f20d80] border-2 border-[#f20d80] font-bold py-4 px-6 rounded-xl hover:bg-[#f20d80]/10 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(242,13,128,0.2)]">
          <span>Xem lại bài làm</span>
          <span className="material-symbols-outlined">history_edu</span>
        </button>
      </div>
      
      <div className="mt-8 flex gap-4 items-center">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" title="Avatar of a small friendly dragon character"></div>
          <div className="w-8 h-8 rounded-full border-2 border-white bg-primary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-xs text-primary">add</span>
          </div>
        </div>
        <p className="text-pink-200/50 text-sm">Cùng 1,240 bạn nhỏ khác đã vượt qua!</p>
      </div>
    </div>
  );
}
